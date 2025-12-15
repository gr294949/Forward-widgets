/**
 * [...](asc_slot://start-slot-4)ForwardWidget 模块: Hanime1
 * [...](asc_slot://start-slot-6)对应网站: https://hanime1.me
 * [...](asc_slot://start-slot-8)功能: 搜索、最新更新、视频播放解析
 */
var WidgetMetadata = {
    id: "hanime1_me", // 唯一ID
    title: "Hanime1", // 显示名称
    description: "Hanime1 视频爬虫模块",
    author: "Gemini Enterprise",
    site: "https://hanime1.me",
    version: "0.0.1",
    requiredVersion: "0.0.1",
    detailCacheDuration: 0, // 详情页不缓存，以免播放链接过期
    modules: [
        {
            title: "最新更新",
            description: "查看首页最新视频",
            functionName: "getLatest",
            requiresWebView: false,
            sectionMode: true
        }
    ],
    search: {
        title: "搜索",
        functionName: "search"
    }
};
// 通用配置
const BASE_URL = "https://hanime1.me";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// HTTP 请求头配置
const COMMON_HEADERS = {
    "User-Agent": USER_AGENT,
    "Referer": BASE_URL,
    "Origin": BASE_URL
};

/**
 * [...](asc_slot://start-slot-14)核心解析函数：从 HTML 中提取视频列表
 * @param {string} html 网页源码
 * [...](asc_slot://start-slot-16)@returns {Array} 视频列表
 */
function parseVideoList(html) {
    const $ = Widget.html.load(html);
    const items = [];

    [...](asc_slot://start-slot-18)// 查找所有包含 watch?v= 的链接，通常这些是视频卡片
    // 根据 Hanime1 的结构，通常是在 .content-padding-new 或类似的容器中
    // 这里使用较宽泛的选择器以适应可能的变动
    $('a[href*="watch?v="]').each((i, el) => {
        const link = $(el).attr('href');
        // 过滤掉非视频页面的干扰链接（如评论区链接等），通常列表页的链接包含 img
        if ($(el).find('img').length === 0) return;

        [...](asc_slot://start-slot-20)const img = $(el).find('img');
        const titleDiv = $(el).parent().find('.card-mobile-title'); // 尝试寻找标题容器
        
        [...](asc_slot://start-slot-22)// 获取标题：优先从标题容器取，否则取 img 的 alt，或 title 属性
        let title = titleDiv.text().trim() || img.attr('alt') || $(el).attr('title') || "未知标题";
        
        [...](asc_slot://start-slot-24)// 获取封面
        let cover = img.attr('src') || img.attr('data-src') || "";
        
        [...](asc_slot://start-slot-26)// 处理链接 (如果是相对路径)
        let fullLink = link;
        if (!link.startsWith('http')) {
            fullLink = BASE_URL + (link.startsWith('/') ? '' : '/') + link;
        }

        [...](asc_slot://start-slot-28)// 提取 ID (用于缓存或标识)
        // 格式: https://hanime1.me/watch?v=12345
        let id = "h1_" + i;
        const urlParams = link.split('?')[1];
        if (urlParams) {
            const params = new URLSearchParams(urlParams);
            if (params.get('v')) {
                id = params.get('v');
            }
        }

        [...](asc_slot://start-slot-30)items.push({
            id: id,
            type: "link", // 设置为 link 类型，点击时会触发 loadDetail
            title: title,
            coverUrl: cover,
            link: fullLink,
            // 尝试从页面文本中提取时长等信息（可选）
            description: $(el).text().replace(title, '').trim()
        });
    });

    [...](asc_slot://start-slot-32)// 去重 (因为有时图片和标题是分开的两个 a 标签指向同一个链接)
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
 * [...](asc_slot://start-slot-34)模块：获取最新更新
 */
async function getLatest(params = {}) {
    try {
        const url = BASE_URL; // 首页
        const res = await Widget.http.get(url, { headers: COMMON_HEADERS });
        
        [...](asc_slot://start-slot-36)const items = parseVideoList(res.data);
        
        return items;
    } catch (e) {
        console.error("Get Latest Error:", e);
        throw e;
    }
}

/**
 * [...](asc_slot://start-slot-38)模块：搜索功能
 * [...](asc_slot://start-slot-40)Forward 会传入 params.keyword 或 params.title
 */
async function search(params = {}) {
    try {
        const keyword = params.keyword || params.title || "";
        if (!keyword) return [];

        [...](asc_slot://start-slot-42)// 构建搜索 URL
        const url = `${BASE_URL}/search?query=${encodeURIComponent(keyword)}`;
        
        [...](asc_slot://start-slot-44)const res = await Widget.http.get(url, { headers: COMMON_HEADERS });
        const items = parseVideoList(res.data);

        return items;
    } catch (e) {
        console.error("Search Error:", e);
        throw e;
    }
}

/**
 * [...](asc_slot://start-slot-46)详情加载函数
 * 当列表项 type 为 "link" 时，Forward 会调用此函数加载详情
 * [...](asc_slot://start-slot-48)@param {string} link 视频页面 URL
 */
async function loadDetail(link) {
    try {
        const res = await Widget.http.get(link, { headers: COMMON_HEADERS });
        const html = res.data;
        const $ = Widget.html.load(html);

        // 1. [...](asc_slot://start-slot-50)获取基本信息
        // 尝试获取 og:title 作为更准确的标题
        const title = $('meta[property="og:title"]').attr('content') || $('title').text().replace('Hanime1.me', '').trim();
        const description = $('meta[property="og:description"]').attr('content') || "";
        const cover = $('meta[property="og:image"]').attr('content') || "";

        [...](asc_slot://start-slot-52)// 2. [...](asc_slot://start-slot-54)解析视频地址
        // Hanime1 通常使用 <video id="player"> 标签，src 可能是 blob 或直链
        // 或者在 script 标签中有 var videoUrl = '...';
        
        let videoUrl = "";

        [...](asc_slot://start-slot-56)// 策略 A: 直接查找 video 标签的 source
        const videoTag = $('#player');
        if (videoTag.length > 0) {
            videoUrl = videoTag.attr('src') || videoTag.find('source').attr('src');
        }

        [...](asc_slot://start-slot-58)// 策略 B: 如果策略 A 失败，在 script 中正则匹配 .m3u8 链接
        if (!videoUrl) {
            const scriptRegex = /source\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/i;
            const match = html.match(scriptRegex);
            if (match && match[1]) {
                videoUrl = match[1];
            }
        }
        
        [...](asc_slot://start-slot-60)// 策略 C: 查找 input 里的隐藏值 (有时网站会把 url 放在 input hidden 中)
        if (!videoUrl) {
            videoUrl = $('input#video-url').val();
        }

        // 如果找到了视频地址
        if (videoUrl) {
            return {
                id: link, // 使用链接作为 ID
                type: "url", // 最终播放类型
                title: title,
                coverUrl: cover,
                description: description,
                videoUrl: videoUrl,
                headers: { // 部分 m3u8 可能需要 Referer 才能播放
                    "Referer": BASE_URL
                }
            };
        } else {
            throw new Error("未找到视频播放地址，可能需要登录或网站结构已变更。");
        }

    } catch (e) {
        console.error("Load Detail Error:", e);
        throw e;
    }
}
