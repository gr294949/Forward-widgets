var WidgetMetadata = {
    id: "hanime1_me_style_missav",
    title: "Hanime1",
    description: "获取 Hanime1 推荐",
    author: "Gemini",
    site: "https://hanime1.me",
    version: "2.1.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 300,
    modules: [
        {
            title: "搜索影片",
            description: "搜索 Hanime1 影片内容",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 1800,
            params: [
                {
                    name: "keyword",
                    title: "搜索关键词",
                    type: "input",
                    description: "输入搜索关键词（标题、番号、作者等）",
                    value: ""
                },
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "最新上市",
                    enumOptions: [
                        { title: "最新上市", value: "最新上市" },
                        { title: "最新上传", value: "最新上傳" },
                        { title: "本日排行", value: "本日排行" },
                        { title: "本周排行", value: "本週排行" },
                        { title: "本月排行", value: "本月排行" },
                        { title: "他们在看", value: "他們在看" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本日热门",
            description: "本日热门影片",
            requiresWebView: false,
            functionName: "loadDailyHot",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本周热门",
            description: "本周热门影片",
            requiresWebView: false,
            functionName: "loadWeeklyHot",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本月热门",
            description: "本月热门影片",
            requiresWebView: false,
            functionName: "loadMonthlyHot",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "最新上市",
            description: "最新上市影片",
            requiresWebView: false,
            functionName: "loadNewRelease",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "中文字幕",
            description: "中文字幕影片",
            requiresWebView: false,
            functionName: "loadChineseSubtitle",
            cacheDuration: 1800,
            params: [
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "最新上市",
                    enumOptions: [
                        { title: "最新上市", value: "最新上市" },
                        { title: "最新上传", value: "最新上傳" },
                        { title: "本日排行", value: "本日排行" },
                        { title: "本月排行", value: "本月排行" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "影片分类",
            description: "浏览不同分类的影片",
            requiresWebView: false,
            functionName: "loadByGenre",
            cacheDuration: 1800,
            params: [
                {
                    name: "genre",
                    title: "选择分类",
                    type: "enumeration",
                    description: "选择具体分类",
                    value: "裏番",
                    enumOptions: [
                        { title: "里番", value: "裏番" },
                        { title: "泡面番", value: "泡麵番" },
                        { title: "Motion Anime", value: "Motion Anime" },
                        { title: "3DCG", value: "3DCG" },
                        { title: "2D 动画", value: "2D動畫" },
                        { title: "Cosplay", value: "Cosplay" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "最新上市",
                    enumOptions: [
                        { title: "最新上市", value: "最新上市" },
                        { title: "最新上传", value: "最新上傳" },
                        { title: "本日排行", value: "本日排行" },
                        { title: "本月排行", value: "本月排行" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "新番预告",
            description: "查看即将上映的新番",
            requiresWebView: false,
            functionName: "loadPreviews",
            cacheDuration: 3600,
            params: []
        }
    ]
};

const BASE_URL = "https://hanime1.me";

function getCommonHeaders() {
    return {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": BASE_URL,
        "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };
}

async function fetchAndParse(url) {
    try {
        const response = await Widget.http.get(url, {
            headers: getCommonHeaders()
        });

        const $ = Widget.html.load(response.data);
        const items = [];

        // Hanime1 的结构：
        // .content-padding-new .row .search-doujin-videos
        //   -> a.overlay (链接)
        //   -> .card-mobile-panel
        //      -> img (封面)
        //      -> .card-mobile-title (标题)

        $('.content-padding-new .search-doujin-videos').each((i, el) => {
            const $card = $(el);
            const $link = $card.find('a.overlay');
            const href = $link.attr('href');

            if (!href || href.indexOf('/watch?v=') === -1) return;

            let link = href;
            if (link.indexOf('http') !== 0) {
                link = BASE_URL + (link.indexOf('/') === 0 ? '' : '/') + link;
            }

            // 简单排重: 页面上可能同时存在桌面版和移动版卡片（hidden-xs 等类控制显示）
            if (items.some(it => it.link === link)) return;

            const $img = $card.find('img').first(); // 通常有两个img，一个是背景一个是封面，取第一个或根据样式判断
            // 实际上第二个 img 通常是封面 (object-fit: cover)
            // 但即使取第一个背景图也尚可。让我们尝试找 .inner img 且 src 不为空的
            // 源码中: 第一个 img 是 background.jpg, 第二个是 thumbnail
            let poster = "";
            $card.find('img').each((j, imgEl) => {
                const src = $(imgEl).attr('src') || $(imgEl).attr('data-src');
                if (src && src.indexOf('background.jpg') === -1) {
                    poster = src;
                    return false; // break
                }
            });

            if (!poster) {
                // 兜底
                poster = $card.find('img').attr('src') || "";
            }

            if (poster && !poster.startsWith('http')) {
                if (poster.startsWith('//')) poster = "https:" + poster;
                else poster = BASE_URL + (poster.startsWith('/') ? '' : '/') + poster;
            }

            let title = $card.find('.card-mobile-title').text().trim();
            if (!title) {
                // 备选: title 属性
                title = $card.attr('title') || "";
            }
            // 去除多余的 " [中文字幕]" 等后缀，如果需要的话。暂时保留。

            const duration = $card.find('.card-mobile-duration').first().text().trim(); // 时间通常在第一个 duration 类里
            const author = $card.find('.card-mobile-user').text().trim();

            items.push({
                id: link,
                type: "url",
                title: title,
                posterPath: poster,
                backdropPath: poster,
                mediaType: "movie",
                durationText: duration,
                description: author || "",
                link: link
            });
        });

        return items;

    } catch (e) {
        console.error(`Fetch error for ${url}:`, e);
        return [];
    }
}

// --- 模块功能函数 ---

async function searchVideos(params) {
    const page = params.page || 1;
    const keyword = params.keyword || "";
    const sort = params.sort_by || "最新上市";

    let url = `${BASE_URL}/search?query=${encodeURIComponent(keyword)}&sort=${encodeURIComponent(sort)}`;
    if (page > 1) url += `&page=${page}`;

    return fetchAndParse(url);
}

async function loadDailyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本日排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadWeeklyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本週排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadMonthlyHot(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('本月排行')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadNewRelease(params) {
    const page = params.page || 1;
    let url = `${BASE_URL}/search?sort=${encodeURIComponent('最新上市')}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadChineseSubtitle(params) {
    const page = params.page || 1;
    const sort = params.sort_by || "最新上市";
    let url = `${BASE_URL}/search?tags[]=${encodeURIComponent('中文字幕')}&sort=${encodeURIComponent(sort)}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadByGenre(params) {
    const page = params.page || 1;
    const genre = params.genre || "裏番";
    const sort = params.sort_by || "最新上市";

    let url = `${BASE_URL}/search?genre=${encodeURIComponent(genre)}&sort=${encodeURIComponent(sort)}`;
    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadPreviews(params) {
    const d = new Date();
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    if (month < 10) month = '0' + month;

    const url = `${BASE_URL}/previews/${year}${month}`;
    return fetchAndParse(url);
}

// --- 详情加载 ---

async function loadDetail(link) {
    try {
        const response = await Widget.http.get(link, {
            headers: getCommonHeaders()
        });

        const $ = Widget.html.load(response.data);

        let videoUrl = "";

        // 策略1: Input ID (Hanime1 特有)
        const val = $('input#video-sd').val();
        if (val) videoUrl = val;

        // 策略2: RegExp
        if (!videoUrl) {
            const match = response.data.match(/source\s*=\s*['"](https:\/\/[^'"]+)['"]/);
            if (match) videoUrl = match[1];
        }

        // 策略3: Video tag
        if (!videoUrl) {
            videoUrl = $('video source').attr('src');
        }

        // 兜底对象 (模仿 MissAV 的错误处理逻辑)
        if (!videoUrl) {
            throw new Error("Video URL not found");
        }

        videoUrl = videoUrl.replace(/&amp;/g, '&');

        const title = $('meta[property="og:title"]').attr('content') || "Title Not Found";
        const desc = $('meta[property="og:description"]').attr('content') || "";
        const cover = $('meta[property="og:image"]').attr('content') || "";

        // 解析推荐
        // 这里为了简化，我们仅在成功解析到视频时尝试获取推荐，
        // 或者如果需要，可以再次发起 search 请求。
        // 为了性能，我们尝试从当前页面解析相关的 (Hanime1 详情页底部有相关视频)
        // 复用 fetchAndParse 的逻辑:
        const childItems = [];
        $('.home-rows-videos-div a').each((i, el) => {
            // 简单解析，略... 
            // 由于 Hanime1 详情页结构与列表页相似，可以使用相似逻辑提取
            // 但这里直接返回空数组也是安全的，或者简单实现前3个
        });

        return {
            id: link,
            type: "detail", // MissAV 使用 'detail' 或 'url'
            videoUrl: videoUrl,
            title: title,
            description: desc,
            posterPath: cover,
            backdropPath: cover,
            mediaType: "movie",
            link: link,
            childItems: [], // 暂时留空推荐，以保证稳定性
            headers: getCommonHeaders()
        };

    } catch (error) {
        // Fallback object similar to MissAV
        return {
            id: link,
            type: "detail",
            videoUrl: link, // 让 App 尝试直接打开网页
            title: "加载失败 / 需要登录",
            description: `无法解析视频地址: ${error.message}`,
            posterPath: "",
            mediaType: "movie",
            link: link
        };
    }
}
