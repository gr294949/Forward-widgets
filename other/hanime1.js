// 核心配置：直接定义，不依赖外部变量
var BASE_URL = "https://hanime1.me";
var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

var WidgetMetadata = {
    title: "Hanime1",
    id: "hanime1_me_final_fix",
    site: "https://hanime1.me",
    version: "1.0.8",
    description: "Hanime1 纯净适配版",
    author: "Gemini",
    // 搜索必须位于根节点
    search: {
        functionName: "search",
        params: [
            { name: "keyword", title: "关键字", type: "input" },
            { name: "page", title: "页码", type: "page" }
        ]
    },
    // 模块列表
    modules: [
        {
            title: "最新里番",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?genre=%E8%A3%8F%E7%95%AA" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "最新上市",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%B8%82" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "最新上传",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "中文字幕",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?tags%5B%5D=%E4%B8%AD%E6%96%87%E5%AD%97%E5%B9%95&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "他们在看",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?sort=%E4%BB%96%E5%80%91%E5%9C%A8%E7%9C%8B" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "泡面番",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?genre=%E6%B3%A1%E9%BA%B5%E7%95%AA&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "Motion Anime",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?genre=Motion+Anime&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "3DCG",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?genre=3DCG&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "2D动画",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?genre=2D%E5%8B%95%E7%95%AB&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "Cosplay",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?genre=Cosplay&sort=%E6%9C%80%E6%96%B0%E4%B8%8A%E5%82%B3" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "新番预告",
            functionName: "loadPreviews",
            params: []
        },
        {
            title: "本日排行",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?sort=%E6%9C%AC%E6%97%A5%E6%8E%92%E8%A1%8C" },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "本月排行",
            functionName: "loadList",
            params: [
                { name: "path", type: "constant", value: "/search?sort=%E6%9C%AC%E6%9C%88%E6%8E%92%E8%A1%8C" },
                { name: "page", title: "页码", type: "page" }
            ]
        }
    ]
};

// --- 功能函数区 ---

async function loadList(params) {
    var page = params.page || 1;
    var path = params.path;
    
    // 构造 URL
    var url = BASE_URL + path;
    if (page > 1) {
        // 判断原 url 是否已有问号
        url += (url.indexOf('?') > -1 ? '&' : '?') + 'page=' + page;
    }
    
    // 发起请求
    var res = await Widget.http.get(url, {
        headers: { "User-Agent": USER_AGENT }
    });
    
    return parseHtml(res.data);
}

async function search(params) {
    var keyword = params.keyword;
    if (!keyword) return [];
    
    var page = params.page || 1;
    var url = BASE_URL + '/search?query=' + encodeURIComponent(keyword);
    
    if (page > 1) {
        url += '&page=' + page;
    }
    
    var res = await Widget.http.get(url, {
        headers: { "User-Agent": USER_AGENT }
    });
    
    return parseHtml(res.data);
}

async function loadPreviews() {
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    if (m < 10) m = '0' + m;
    
    var url = BASE_URL + '/previews/' + y + m;
    
    var res = await Widget.http.get(url, {
        headers: { "User-Agent": USER_AGENT }
    });
    
    return parseHtml(res.data);
}

// 统一的 HTML 解析函数
function parseHtml(html) {
    var items = [];
    var $ = Widget.html.load(html);
    
    $('a').each(function() {
        var href = $(this).attr('href');
        if (!href || href.indexOf('watch?v=') === -1) return;
        
        var img = $(this).find('img');
        if (img.length === 0) return;
        
        // 处理链接
        var link = href;
        if (link.indexOf('http') !== 0) {
            link = BASE_URL + (link.indexOf('/') === 0 ? '' : '/') + link;
        }
        
        // 处理图片
        var imgSrc = img.attr('data-src') || img.attr('src') || "";
        if (imgSrc && imgSrc.indexOf('http') !== 0) {
            if (imgSrc.indexOf('//') === 0) imgSrc = "https:" + imgSrc;
            else imgSrc = BASE_URL + imgSrc;
        }
        
        // 处理标题
        var title = "";
        // 尝试从PC端标题类获取
        var pcTitle = $(this).find('.home-rows-videos-title').text();
        // 尝试从移动端标题类获取 (通常是父级的兄弟元素，但也可能就在a里)
        var mobileTitle = $(this).find('.card-mobile-title').text();
        
        // 如果a标签里没找到，尝试向上找一级
        if (!mobileTitle) {
            mobileTitle = $(this).parent().find('.card-mobile-title').text();
        }
        
        title = mobileTitle || pcTitle || img.attr('alt') || $(this).attr('title') || "Hanime1";
        
        // 简单去重
        var exists = false;
        for (var i = 0; i < items.length; i++) {
            if (items[i].link === link) {
                exists = true;
                break;
            }
        }
        
        if (!exists) {
            items.push({
                title: title.trim(),
                imgSrc: imgSrc,
                link: link
            });
        }
    });
    
    return items;
}

// 详情页解析
async function loadDetail(link) {
    var res = await Widget.http.get(link, {
        headers: { "User-Agent": USER_AGENT }
    });
    
    var html = res.data;
    var $ = Widget.html.load(html);
    
    // 解析视频
    var videoUrl = "";
    
    // 策略1: Input
    var val = $('input#video-sd').val();
    if (val) videoUrl = val;
    
    // 策略2: Script
    if (!videoUrl) {
        var match = html.match(/source\s*=\s*['"](https:\/\/[^'"]+)['"]/);
        if (match) videoUrl = match[1];
    }
    
    // 策略3: Video Tag
    if (!videoUrl) {
        videoUrl = $('video source').attr('src');
    }
    
    if (!videoUrl) throw new Error("Parse Error");
    
    // 还原转义
    videoUrl = videoUrl.replace(/&amp;/g, '&');
    
    return {
        videoUrl: videoUrl,
        headers: {
            "Referer": BASE_URL,
            "User-Agent": USER_AGENT
        }
    };
}
