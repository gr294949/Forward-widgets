/**
 * ForwardWidget 模块: Hanime1 (全板块适配版)
 * 对应网站: https://hanime1.me
 * 版本: 1.0.5
 * 
 * 更新内容:
 * 1. 集成用户指定的 13 个分类板块。
 * 2. "新番预告" 增加动态日期处理。
 * 3. 优化 URL 编码处理。
 */

var WidgetMetadata = {
    id: "hanime1_me_full",
    title: "Hanime1",
    description: "Hanime1 全板块视频浏览",
    author: "Gemini Enterprise",
    site: "https://hanime1.me",
    version: "1.0.5",
    requiredVersion: "0.0.1",
    detailCacheDuration: 0, 
    modules: [
        // --- 0. 搜索 (必须项) ---
        {
            title: "搜索",
            functionName: "search",
            requiresWebView: false,
            params: [
                { name: "keyword", title: "关键字", type: "input", value: "" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 1. 最新里番 ---
        {
            title: "最新里番",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?genre=%E8%A3%8F%E7%95%AA" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 2. 最新上市 ---
        {
            title: "最新上市",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%B8%82" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 3. 最新上传 ---
        {
            title: "最新上传",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 4. 中文字幕 ---
        {
            title: "中文字幕",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    // tags[]=中文字幕 & sort=最新上传
                    value: "https://hanime1.me/search?tags%5B%5D=%E4%B8%AD%E6%96%87%E5%AD%97%E5%B9%95&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 5. 他们在看 ---
        {
            title: "他们在看",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?sort=%E4%BB%96%E5%80%91%E5%9C%A8%E7%9C%8B" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 6. 泡面番 ---
        {
            title: "泡面番",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?genre=%E6%B3%A1%E9%BA%B5%E7%95%AA&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 7. Motion Anime ---
        {
            title: "Motion Anime",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?genre=Motion+Anime&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 8. 3DCG ---
        {
            title: "3DCG",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?genre=3DCG&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 9. 2D动画 ---
        {
            title: "2D动画",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?genre=2D%E5%8B%95%E7%95%AB&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 10. Cosplay ---
        {
            title: "Cosplay",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?genre=Cosplay&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 11. 新番预告 (动态处理) ---
        {
            title: "新番预告",
            description: "查看当月新番",
            functionName: "loadPreviews", // 使用专用函数处理日期
            requiresWebView: false,
            params: []
        },
        // --- 12. 本日排行 ---
        {
            title: "本日排行",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?sort=%E6%9C%AC%E6%97%A5%E6%8E%92%E8%A1%8C" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        // --- 13. 本月排行 ---
        {
            title: "本月排行",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                { 
                    name: "url", 
                    title: "地址", 
                    type: "constant", 
                    value: "https://hanime1.me/search?sort=%E6%9C%AC%E6%9C%88%E6%8E%92%E8%A1%8C" 
                },
                { name: "page", title: "页码", type: "page" }
            ]
        }
    ]
};

// --- 配置区域 ---
const BASE_URL = "https://hanime1.me";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function getHeaders(referer = BASE_URL) {
    return {
        "User-Agent": USER_AGENT,
        "Referer": referer,
        "Origin": BASE_URL
    };
}

function toAbsoluteUrl(url) {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    if (url.startsWith("//")) return "https:" + url;
    return BASE_URL + (url.startsWith("/") ? "" : "/") + url;
}

/**
 * 通用列表解析器
 */
function parseVideoList(html) {
    const $ = Widget.html.load(html);
    const items = [];

    if (html.includes("Just a moment") || html.includes("cf-challenge")) {
        throw new Error("Hanime1: 遇到 Cloudflare 验证，请稍后重试。");
    }

    $('a[href*="watch?v="]').each((i, el) => {
        const $el = $(el);
        const $img = $el.find('img');
        if ($img.length === 0) return;

        const link = toAbsoluteUrl($el.attr('href'));
        
        // 提取 ID
        let id = link;
        try {
            id = link.split('v=')[1].split('&')[0];
        } catch(e) {}

        // 获取封面
        let cover = $img.attr('data-src') || $img.attr('src') || "";
        cover = toAbsoluteUrl(cover);

        // 获取标题 (优先查找 card-mobile-title)
        let title = $el.find('.card-mobile-title').text() || 
                    $el.find('.home-rows-videos-title').text() || 
                    $img.attr('alt') || 
                    $el.attr('title') || 
                    "未知标题";
        
        title = title.trim();

        // 提取额外信息
        const author = $el.find('.card-mobile-user').text().trim();

        items.push({
            id: id,
            type: "url",
            title: title,
            imgSrc: cover,
            backdropPath: cover,
            link: link,
            mediaType: "movie",
            description: author || "Hanime1"
        });
    });

    // 去重
    const uniqueItems = [];
    const seen = new Set();
    items.forEach(item => {
        if (!seen.has(item.link)) {
            seen.add(item.link);
            uniqueItems.push(item);
        }
    });

    return uniqueItems;
}

/**
 * 专用模块：新番预告
 * 动态生成当月 URL (例如 /previews/202512)
 */
async function loadPreviews(params = {}) {
    try {
        const date = new Date();
        const year = date.getFullYear();
        // 月份 +1 因为 getMonth() 从 0 开始，padStart 补零
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const ym = `${year}${month}`;
        
        const url = `${BASE_URL}/previews/${ym}`;
        
        const res = await Widget.http.get(url, { headers: getHeaders() });
        // 预告页的结构如果也是视频卡片列表，则复用 parseVideoList
        // 如果预告页没有视频链接，这里可能返回空，符合预期
        return parseVideoList(res.data);
    } catch (e) {
        console.error("Preview Load Error:", e);
        throw e;
    }
}

/**
 * 模块函数：通用页面加载
 */
async function loadPage(params = {}) {
    try {
        let url = params.url || BASE_URL;
        const page = parseInt(params.page, 10) || 1;

        if (page > 1) {
            const separator = url.includes('?') ? '&' : '?';
            url = `${url}${separator}page=${page}`;
        }

        const res = await Widget.http.get(url, { headers: getHeaders() });
        return parseVideoList(res.data);
    } catch (e) {
        console.error("Hanime1 LoadPage Error:", e);
        throw e;
    }
}

/**
 * 模块函数：搜索
 */
async function search(params = {}) {
    try {
        const keyword = params.keyword || "";
        const page = parseInt(params.page, 10) || 1;

        if (!keyword) return [];

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
 * 模块函数：加载详情
 */
async function loadDetail(link) {
    try {
        const res = await Widget.http.get(link, { headers: getHeaders(link) });
        const html = res.data;
        const $ = Widget.html.load(html);

        const title = $('meta[property="og:title"]').attr('content') || "Hanime1 Video";
        const cover = $('meta[property="og:image"]').attr('content') || "";
        const desc = $('meta[property="og:description"]').attr('content') || "";

        let videoUrl = "";

        // 策略 A: 隐藏 Input (Hanime1 常用)
        const inputSd = $('input#video-sd');
        if (inputSd.length > 0) {
            videoUrl = inputSd.val();
        }

        // 策略 B: 脚本变量 (source = '...')
        if (!videoUrl) {
            const scriptMatch = html.match(/source\s*=\s*['"](https:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
            if (scriptMatch) {
                videoUrl = scriptMatch[1];
            }
        }

        // 策略 C: Video 标签
        if (!videoUrl) {
            videoUrl = $('video source').attr('src') || $('video').attr('src');
        }

        if (videoUrl) {
            videoUrl = videoUrl.replace(/&amp;/g, '&');
            return {
                id: link,
                type: "url",
                title: title,
                imgSrc: cover,
                description: desc,
                videoUrl: videoUrl,
                customHeaders: {
                    "Referer": BASE_URL,
                    "User-Agent": USER_AGENT
                }
            };
        } else {
            throw new Error("未找到播放地址，请确认视频是否需要登录。");
        }

    } catch (e) {
        console.error("LoadDetail Error:", e);
        throw e;
    }
}
