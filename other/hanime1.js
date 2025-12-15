// 基于 JavRate 模块架构重写的 Hanime1 适配
// 对应网站: https://hanime1.me

var BASE_URL = "https://hanime1.me";
var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

var WidgetMetadata = {
    title: "Hanime1",
    id: "hanime1_me_javrate",
    site: BASE_URL,
    version: "1.0.6",
    description: "Hanime1 视频观看 (JavRate架构)",
    author: "Gemini Enterprise",
    // 搜索配置
    search: {
        functionName: "search",
        params: [
            { name: "keyword", title: "关键词", type: "input" },
            { name: "page", title: "页码", type: "page" }
        ]
    },
    // 模块配置 (严格对应 13 个板块)
    modules: [
        {
            title: "最新里番",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?genre=%E8%A3%8F%E7%95%AA" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "最新上市",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%B8%82" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "最新上传",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "中文字幕",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?tags%5B%5D=%E4%B8%AD%E6%96%87%E5%AD%97%E5%B9%95&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "他们在看",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?sort=%E4%BB%96%E5%80%91%E5%9C%A8%E7%9C%8B" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "泡面番",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?genre=%E6%B3%A1%E9%BA%B5%E7%95%AA&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "Motion Anime",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?genre=Motion+Anime&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "3DCG",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?genre=3DCG&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "2D动画",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?genre=2D%E5%8B%95%E7%95%AB&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "Cosplay",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?genre=Cosplay&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "新番预告",
            functionName: "loadPreviews", // 专用函数
            params: []
        },
        {
            title: "本日排行",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?sort=%E6%9C%AC%E6%97%A5%E6%8E%92%E8%A1%8C" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "本月排行",
            functionName: "loadPage",
            params: [
                { name: "url", type: "constant", value: "/search?sort=%E6%9C%AC%E6%9C%88%E6%8E%92%E8%A1%8C" },
                { name: "page", title: "页码", type: "page" }
            ]
        }
    ]
};

// --- 网络请求辅助 ---

function getHeaders(referer) {
    return {
        "User-Agent": USER_AGENT,
        "Referer": referer || BASE_URL,
        "Origin": BASE_URL
    };
}

function getUrl(path) {
    if (path.indexOf("http") === 0) return path;
    return BASE_URL + path;
}

// --- 页面解析逻辑 (仿 JavRate) ---

async function loadPage(params) {
    var page = params.page || 1;
    var path = params.url;
    
    // 拼接分页
    if (page > 1) {
        path += (path.indexOf('?') > -1 ? '&' : '?') + 'page=' + page;
    }
    
    var url = getUrl(path);
    var res = await Widget.http.get(url, { headers: getHeaders() });
    return parseHTML(res.data);
}

async function search(params) {
    var keyword = params.keyword;
    var page = params.page || 1;
    
    if (!keyword) return [];
    
    var url = BASE_URL + '/search?query=' + encodeURIComponent(keyword);
    if (page > 1) {
        url += '&page=' + page;
    }
    
    var res = await Widget.http.get(url, { headers: getHeaders() });
    return parseHTML(res.data);
}

async function loadPreviews() {
    // 动态生成日期 yyyyMM
    var date = new Date();
    var m = date.getMonth() + 1;
    var monthStr = m < 10 ? '0' + m : '' + m;
    var ym = date.getFullYear() + '' + monthStr;
    
    var url = BASE_URL + '/previews/' + ym;
    var res = await Widget.http.get(url, { headers: getHeaders() });
    return parseHTML(res.data);
}

function parseHTML(html) {
    var items = [];
    var $ = Widget.html.load(html);
    
    // JavRate 风格: 使用 each 循环
    $('a').each(function() {
        var href = $(this).attr('href');
        if (!href || href.indexOf('watch?v=') === -1) return;
        
        var img = $(this).find('img');
        if (img.length === 0) return;
        
        var link = getUrl(href);
        
        // 提取封面 (处理 data-src)
        var thumb = img.attr('data-src') || img.attr('src');
        // 处理相对路径图片
        if (thumb && thumb.indexOf('http') === -1) {
             // 有些图片是 //开头的
             if (thumb.indexOf('//') === 0) thumb = 'https:' + thumb;
             else thumb = BASE_URL + thumb;
        }

        // 提取标题
        var title = "";
        // 尝试从卡片结构中获取标题
        var titleNode = $(this).parent().find('.card-mobile-title');
        if (titleNode.length > 0) {
            title = titleNode.text().trim();
        } else {
            // 备选
            title = $(this).find('.home-rows-videos-title').text().trim();
        }
        
        if (!title) title = img.attr('alt') || $(this).attr('title') || "未知标题";
        
        // 去重逻辑：检查是否已存在
        var exists = false;
        for (var i = 0; i < items.length; i++) {
            if (items[i].link === link) {
                exists = true;
                break;
            }
        }
        
        if (!exists) {
            items.push({
                title: title,
                imgSrc: thumb, // 必须使用 imgSrc
                link: link,
                // JavRate 不常返回 type, description, id，保持简洁
            });
        }
    });
    
    return items;
}

// --- 详情页解析 (LoadDetail) ---

async function loadDetail(link) {
    var res = await Widget.http.get(link, { headers: getHeaders(link) });
    var html = res.data;
    var $ = Widget.html.load(html);
    
    var title = $('meta[property="og:title"]').attr('content') || "Hanime1";
    var cover = $('meta[property="og:image"]').attr('content') || "";
    
    // 解析视频地址
    var videoUrl = "";
    
    // 方法1: input hidden
    var inputVal = $('input#video-sd').val();
    if (inputVal) videoUrl = inputVal;
    
    // 方法2: script 变量
    if (!videoUrl) {
        var match = html.match(/source\s*=\s*['"]([^'"]+)['"]/);
        if (match) videoUrl = match[1];
    }
    
    // 方法3: video 标签
    if (!videoUrl) {
        videoUrl = $('video source').attr('src') || $('video').attr('src');
    }
    
    if (!videoUrl) {
        throw new Error("无法解析视频地址");
    }
    
    // 修复转义
    videoUrl = videoUrl.replace(/&amp;/g, '&');
    
    return {
        title: title,
        cover: cover, // 详情页可以用 cover
        videoUrl: videoUrl,
        // 关键: Headers 用于播放
        headers: {
            "Referer": BASE_URL,
            "User-Agent": USER_AGENT
        }
    };
}
