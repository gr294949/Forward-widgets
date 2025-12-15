// 核心配置
var BASE_URL = "https://hanime1.me";
var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

var WidgetMetadata = {
    title: "Hanime1",
    id: "hanime1_me_final_fix",
    site: "https://hanime1.me",
    version: "1.1.0",
    description: "Hanime1 纯净适配版",
    author: "Gemini",
    detailCacheDuration: 300,
    modules: [
        // 搜索模块
        {
            title: "搜索",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                {
                    name: "keyword",
                    title: "关键字",
                    type: "input",
                    value: "",
                    description: "请输入搜索关键字"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page"
                }
            ]
        },
        // 综合浏览模块
        {
            title: "浏览影片",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                {
                    name: "genre",
                    title: "类别",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "里番", value: "裏番" },
                        { title: "泡面番", value: "泡麵番" },
                        { title: "Motion Anime", value: "Motion Anime" },
                        { title: "3DCG", value: "3DCG" },
                        { title: "2D动画", value: "2D動畫" },
                        { title: "Cosplay", value: "Cosplay" }
                    ]
                },
                {
                    name: "sort",
                    title: "排序",
                    type: "enumeration",
                    value: "最新上市",
                    enumOptions: [
                        { title: "最新上市", value: "最新上市" },
                        { title: "最新上传", value: "最新上傳" },
                        { title: "本月排行", value: "本月排行" },
                        { title: "本日排行", value: "本日排行" },
                        { title: "他们在看", value: "他們在看" },
                        { title: "本周排行", value: "本週排行" }
                    ]
                },
                {
                    name: "tag",
                    title: "标签",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "中文字幕", value: "中文字幕" },
                        { title: "无码", value: "無碼" },
                        { title: "高清", value: "HD" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page"
                }
            ]
        },
        // 新番预告
        {
            title: "新番预告",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                {
                    name: "special",
                    type: "constant",
                    value: "previews"
                }
            ]
        }
    ]
};

// --- 工具函数 ---

function getCommonHeaders() {
    return {
        "User-Agent": USER_AGENT,
        "Referer": BASE_URL
    };
}

async function parseItems($, requestUrl) {
    var items = [];

    // 查找列表项
    var nodes = $('a');
    if (requestUrl.includes('/previews/')) {
        // 预告页面的结构可能不同，但通常也是a标签
        // 如果需要特殊处理预告页面，可以在这里判断
    }

    nodes.each(function (index, element) {
        try {
            var el = $(element);
            var href = el.attr('href');

            // 过滤无效链接
            if (!href || href.indexOf('watch?v=') === -1) return;

            var img = el.find('img');
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
            var pcTitle = el.find('.home-rows-videos-title').text();
            var mobileTitle = el.find('.card-mobile-title').text();

            if (!mobileTitle) {
                mobileTitle = el.parent().find('.card-mobile-title').text();
            }

            title = mobileTitle || pcTitle || img.attr('alt') || el.attr('title') || "Hanime1";

            // 提取更多信息 (尝试提取日期或时长，如果有的话)
            // Hanime1 列表页通常包含 view count 和 user
            var subtitle = el.parent().find('.card-mobile-user').text() || "";

            // 去重检查
            var exists = false;
            for (var i = 0; i < items.length; i++) {
                if (items[i].link === link) {
                    exists = true;
                    break;
                }
            }

            if (!exists) {
                items.push({
                    id: link,
                    type: "url",
                    title: title.trim(),
                    imgSrc: imgSrc,
                    link: link,
                    description: subtitle.trim(),
                    mediaType: "video" // 显式声明为视频
                });
            }
        } catch (e) {
            console.error("Parse item error:", e.message);
        }
    });

    return items;
}

async function fetchDataForPath(path, params) {
    var page = params.page || 1;
    var url = path;

    // 如果 path 不是绝对路径且不以 http 开头，则拼接 BaseUrl
    if (url.indexOf('http') !== 0) {
        url = BASE_URL + (url.indexOf('/') === 0 ? '' : '/') + url;
    }

    // 处理分页
    // 预告页面通常没有分页或逻辑不同，这里主要处理 search 分页
    if (url.indexOf('/previews/') === -1) {
        if (page > 1) {
            url += (url.indexOf('?') > -1 ? '&' : '?') + 'page=' + page;
        }
    }

    try {
        var res = await Widget.http.get(url, {
            headers: getCommonHeaders()
        });

        if (!res || !res.data) {
            return [{
                id: "error-no-data",
                type: "url",
                title: "加载失败",
                description: "服务器返回空数据",
                link: url
            }];
        }

        var $ = Widget.html.load(res.data);
        var items = await parseItems($, url);

        if (items.length === 0) {
            return [{
                id: "empty-list",
                type: "url",
                title: "没有找到内容",
                description: "请尝试更改搜索条件或稍后再试",
                link: url
            }];
        }

        return items;

    } catch (e) {
        return [{
            id: "error-fetch",
            type: "url",
            title: "请求错误",
            description: e.message,
            link: url
        }];
    }
}

// --- 主要入口 ---

async function loadPage(params) {
    var path = "/search";
    var queryParts = [];

    // 1. 处理关键字搜索
    if (params.keyword) {
        queryParts.push("query=" + encodeURIComponent(params.keyword));
    }

    // 2. 处理预告特殊页面
    if (params.special === "previews") {
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        if (m < 10) m = '0' + m;
        return fetchDataForPath("/previews/" + y + m, params);
    }

    // 3. 处理筛选参数 (用于 "浏览影片" 模块)
    if (params.genre && params.genre !== 'all') {
        queryParts.push("genre=" + encodeURIComponent(params.genre));
    }

    if (params.sort) {
        queryParts.push("sort=" + encodeURIComponent(params.sort));
    }

    if (params.tag && params.tag !== 'all') {
        // Hanime1 的 tags 參數通常是 tags[]=Tag
        queryParts.push("tags[]=" + encodeURIComponent(params.tag));
    }

    // 构造最终 URL
    if (queryParts.length > 0) {
        path += "?" + queryParts.join("&");
    } else if (!params.keyword) {
        // 如果没有任何参数，默认按最新上市排序
        path += "?sort=" + encodeURIComponent("最新上市");
    }

    return fetchDataForPath(path, params);
}

// 详情页解析
async function loadDetail(link) {
    try {
        var res = await Widget.http.get(link, {
            headers: getCommonHeaders()
        });

        var html = res.data;
        var $ = Widget.html.load(html);

        // 解析视频链接
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

        if (!videoUrl) {
            // 如果找不到视频，可能需要登录或解析失败
            throw new Error("无法解析视频地址 (可能需要登录或结构变更)");
        }

        // 还原转义
        videoUrl = videoUrl.replace(/&amp;/g, '&');

        // 解析详情信息
        var title = $('meta[property="og:title"]').attr('content') || $('title').text();
        var desc = $('meta[property="og:description"]').attr('content') || "";
        var img = $('meta[property="og:image"]').attr('content') || "";

        // 解析相关推荐 (Related)
        var relatedItems = [];
        // 假设相关视频在 #playlist-scroll 或类似的容器中
        // Hanime1 详情页底部通常有 "更多類似影片"
        // 结构通常类似列表页

        $('.home-rows-videos-div').each(function (i, el) {
            // 简单解析几个作为推荐，避免太多
            if (i > 10) return;
            try {
                var $el = $(el);
                // 这里需要根据实际DOM结构微调，假设复用 parseItems 的逻辑
                var a = $el.parent('a'); // 有时候 div 是 a 的子元素，有时候相反
                if (a.length === 0 && $el.is('a')) a = $el;

                // 如果找不到 a 标签则跳过
                // 这里简单调用 parseItems 的逻辑可能比较复杂，不如手动解析一下关键信息
            } catch (e) { }
        });

        // 尝试复用 parseItems 解析整个页面中的推荐链接
        // 注意：详情页可能包含很多链接，我们主要关注 "更多类似" 区域
        // 通常在 .related-videos 或类似区域，如果没有特定 ID，就扫描所有 match 视频链接的 A 标签
        // 并排除掉当前的自己

        var allVideos = await parseItems($, link);
        // 过滤掉当前视频（根据标题或链接相似度）
        relatedItems = allVideos.filter(function (item) {
            return item.link !== link;
        });


        return {
            id: link,
            type: "url",
            title: title,
            videoUrl: videoUrl,
            description: desc,
            backdropPath: img,
            relatedItems: relatedItems,
            headers: getCommonHeaders()
        };

    } catch (error) {
        console.error("Details error:", error);
        return {
            id: link,
            type: "url",
            title: "加载失败",
            description: error.message,
            link: link,
            videoUrl: "",
        };
    }
}
