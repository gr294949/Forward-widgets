/**
 * [...](asc_slot://start-slot-1)ForwardWidget 模块: Hanime1
 * 对应网站: https://hanime1.me
 * 
 * 修正记录:
 * 1. 弃用通用正则，改为针对 Hanime1 结构的精准提取 (input hidden / js variable)。
 * [...](asc_slot://start-slot-3)2. 完善 Headers 伪装，解决 403 Forbidden 问题。
 * 3. 增加风控检测逻辑。
 */
var WidgetMetadata = {
    id: "hanime1_me_v2",
    title: "Hanime1",
    description: "Hanime1 视频爬虫模块 (修正版)",
    author: "Gemini Enterprise",
    site: "https://hanime1.me",
    version: "1.0.1",
    requiredVersion: "0.0.1",
    detailCacheDuration: 0, // 链接包含时效性签名，不缓存
    modules: [
        {
            title: "最新上市",
            description: "浏览最新更新的视频",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                {
                    name: "url",
                    title: "列表地址",
                    type: "constant",
                    value: "https://hanime1.me"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page"
                }
            ]
        }
    ],
    search: {
        title: "搜索",
        functionName: "search",
        params: [
            {
                name: "keyword",
                title: "关键字",
                type: "input",
                value: ""
            },
            {
                name: "page",
                title: "页码",
                type: "page"
            }
        ]
    }
};

// 配置常量
const BASE_URL = "https://hanime1.me";
// 使用常见的桌面浏览器 UA，防止被识别为爬虫
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/**
 * [...](asc_slot://start-slot-7)构造请求头
 * Hanime1 的 m3u8 播放通常严格检查 Referer
 */
function getHeaders(referer = BASE_URL) {
    return {
        "User-Agent": USER_AGENT,
        "Referer": referer,
        "Origin": BASE_URL,
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
    };
}

/**
 * 核心解析函数：从 HTML 解析视频列表
 */
function parseVideoList(html) {
    const $ = Widget.html.load(html);
    const items = [];

    // 检测是否遇到 Cloudflare 验证
    if (html.includes("Just a moment") || html.includes("cf-challenge")) {
        throw new Error("遇到 Cloudflare 验证，请稍后重试或检查网络环境。");
    }

    // Hanime1 的视频卡片通常包含 href 中带有 "watch?v=" 的链接
    $('a[href*="watch?v="]').each((i, el) => {
        const link = $(el).attr('href');
        
        // 过滤掉非视频内容的链接（如评论区头像等）
        // 视频卡片通常包含 img 标签作为封面
        const img = $(el).find('img');
        if (img.length === 0) return;

        // 获取完整链接
        let fullLink = link;
        if (!link.startsWith('http')) {
            fullLink = BASE_URL + (link.startsWith('/') ? '' : '/') + link;
        }

        // 获取封面
        // Hanime1 可能使用 data-src 进行懒加载
        let cover = img.attr('data-src') || img.attr('src') || "";
        if (cover && !cover.startsWith('http')) {
             // 处理相对路径图片
             cover = cover.startsWith('//') ? "https:" + cover : cover;
        }

        // 获取标题
        // 标题通常在卡片下方的 div 中，或者作为 img 的 alt
        let title = "";
        // 尝试查找同级的标题容器 (适配移动端和桌面端视图)
        const parent = $(el).closest('.content-padding-new, .card-mobile-panel'); 
        if (parent.length > 0) {
             title = parent.find('.card-mobile-title, .home-rows-videos-title').text();
        }
        // 回退方案
        if (!title) {
            title = img.attr('alt') || $(el).attr('title') || "未知标题";
        }
        
        title = title.trim();
        
        // 提取 ID 作为唯一标识
        const id = fullLink.split('v=')[1] || fullLink;

        items.push({
            id: id,
            type: "link", 
            title: title,
            coverUrl: cover,
            link: fullLink,
            headers: getHeaders(BASE_URL)
        });
    });

    // 去重逻辑
    const uniqueItems = [];
    const seenLinks = new Set();
    items.forEach(item => {
        if (!seenLinks.has(item.link)) {
            seenLinks.add(item.link);
            uniqueItems.push(item);
        }
    });

    return uniqueItems;
}

/**
 * [...](asc_slot://start-slot-9)模块函数：加载页面
 */
async function loadPage(params = {}) {
    try {
        let url = params.url || BASE_URL;
        const page = parseInt(params.page, 10) || 1;

        // Hanime1 分页逻辑: ?page=2
        if (page > 1) {
            // 判断 url 是否已有参数
            url += (url.includes('?') ? '&' : '?') + `page=${page}`;
        }

        const res = await Widget.http.get(url, { headers: getHeaders() });
        return parseVideoList(res.data);

    } catch (e) {
        console.error("Hanime1 LoadPage Error:", e);
        throw e;
    }
}

/**
 * [...](asc_slot://start-slot-11)模块函数：搜索
 */
async function search(params = {}) {
    try {
        const keyword = params.keyword || "";
        const page = parseInt(params.page, 10) || 1;
        
        if (!keyword) return [];

        // 构建搜索 URL: https://hanime1.me/search?query=xxx&page=x
        let url = `${BASE_URL}/search?query=${encodeURIComponent(keyword)}`;
        if (page > 1) {
            url += `&page=${page}`;
        }

        const res = await Widget.http.get(url, { headers: getHeaders() });
        return parseVideoList(res.data);

    } catch (e) {
        console.error("Hanime1 Search Error:", e);
        throw e;
    }
}

/**
 * 模块函数：加载详情 (精准提取 m3u8)
 */
async function loadDetail(link) {
    try {
        const res = await Widget.http.get(link, { headers: getHeaders(link) });
        const html = res.data;
        
        // 检测风控
        if (html.length < 2000 || html.includes("Just a moment")) {
             throw new Error("内容获取失败，可能触发了网站风控或需登录。");
        }

        [...](asc_slot://start-slot-13)const $ = Widget.html.load(html);

        // 1. 提取元数据
        const title = $('meta[property="og:title"]').attr('content') || $('title').text().replace('Hanime1.me', '').trim();
        const cover = $('meta[property="og:image"]').attr('content') || "";
        const desc = $('meta[property="og:description"]').attr('content') || "";
        
        [...](asc_slot://start-slot-15)// 2. 核心：提取视频地址
        let videoUrl = "";

        // 策略 A: Hanime1 经典的 hidden input 方式
        // 网页源码中通常存在 <input type="hidden" id="video-sd" value="https://...">
        const hiddenInput = $('input#video-sd');
        if (hiddenInput.length > 0) {
            videoUrl = hiddenInput.val();
        }

        // 策略 B: 脚本变量提取
        // 源码中可能包含: var source = 'https://...';
        if (!videoUrl) {
            const scriptRegex = /source\s*=\s*['"](https:\/\/[^'"]+\.m3u8[^'"]*)['"]/;
            const matches = html.match(scriptRegex);
            if (matches && matches[1]) {
                videoUrl = matches[1];
            }
        }

        // 策略 C: 查找 video 标签 (备用)
        if (!videoUrl) {
            videoUrl = $('video#player source').attr('src') || $('video#player').attr('src');
        }

        if (videoUrl) {
            // Hanime1 的 m3u8 地址中有时包含 &amp; 转义字符，需要还原
            videoUrl = videoUrl.replace(/&amp;/g, '&');

            return {
                id: link,
                type: "url",
                title: title,
                coverUrl: cover,
                description: desc,
                videoUrl: videoUrl,
                headers: {
                    // 必须带上 Referer，否则 m3u8 分片会返回 403
                    "Referer": BASE_URL, 
                    "User-Agent": USER_AGENT
                }
            };
        } else {
            // 调试用：如果没找到，可能是网页结构变了
            // console.log("Hanime1 Parse Failed. HTML snippet:", html.substring(0, 500));
            throw new Error("未解析到视频地址，请检查是否需要登录或模块需更新。");
        }

    } catch (e) {
        console.error("Hanime1 LoadDetail Error:", e);
        throw e;
    }
}
