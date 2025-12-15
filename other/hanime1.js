var BASE_URL = "https://hanime1.me";
var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

var WidgetMetadata = {
    title: "Hanime1",
    id: "hanime1_me",
    site: "https://hanime1.me",
    version: "2.0.0",
    description: "Hanime1 视频观看",
    author: "Gemini",
    detailCacheDuration: 60,
    modules: [
        // 搜索模块
        {
            title: "搜索影片",
            functionName: "loadPage",
            requiresWebView: false,
            cacheDuration: 300,
            params: [
                {
                    name: "keyword",
                    title: "搜索关键字",
                    type: "input",
                    value: "",
                    description: "输入番号、标题或女优名"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        },
        // 热门排行
        {
            title: "热门排行",
            functionName: "loadPage",
            requiresWebView: false,
            cacheDuration: 1800,
            params: [
                {
                    name: "sort",
                    title: "排行维度",
                    type: "enumeration",
                    value: "本日排行",
                    enumOptions: [
                        { title: "本日排行", value: "本日排行" },
                        { title: "本周排行", value: "本週排行" },
                        { title: "本月排行", value: "本月排行" },
                        { title: "他们在看", value: "他們在看" }
                    ]
                },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        // 最新更新
        {
            title: "最新更新",
            functionName: "loadPage",
            requiresWebView: false,
            cacheDuration: 600,
            params: [
                {
                    name: "sort",
                    title: "类型",
                    type: "enumeration",
                    value: "最新上市",
                    enumOptions: [
                        { title: "最新上市", value: "最新上市" },
                        { title: "最新上传", value: "最新上傳" }
                    ]
                },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        // 类别浏览
        {
            title: "分类浏览",
            functionName: "loadPage",
            requiresWebView: false,
            cacheDuration: 3600,
            params: [
                {
                    name: "genre",
                    title: "选择分类",
                    type: "enumeration",
                    value: "裏番",
                    enumOptions: [
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
                        { title: "本日排行", value: "本日排行" },
                        { title: "本月排行", value: "本月排行" }
                    ]
                },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        // 标签筛选
        {
            title: "标签筛选",
            functionName: "loadPage",
            requiresWebView: false,
            cacheDuration: 3600,
            params: [
                {
                    name: "tag",
                    title: "选择标签",
                    type: "enumeration",
                    value: "中文字幕",
                    enumOptions: [
                        { title: "中文字幕", value: "中文字幕" },
                        { title: "无码", value: "無碼" },
                        { title: "高清", value: "HD" },
                        { title: "60 FPS", value: "60 FPS" },
                        { title: "VR", value: "VR" }
                    ]
                },
                {
                    name: "sort",
                    title: "排序",
                    type: "enumeration",
                    value: "最新上市",
                    enumOptions: [
                        { title: "最新上市", value: "最新上市" },
                        { title: "最新上传", value: "最新上傳" }
                    ]
                },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        // 新番预告
        {
            title: "新番预告",
            functionName: "loadPage",
            requiresWebView: false,
            cacheDuration: 3600,
            params: [
                {
                    name: "special",
                    title: "类型",
                    type: "constant",
                    value: "previews"
                },
                // 预告页面通常没有翻页，但为了兼容性保留
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

// 解析普通的视频卡片列表
function parseVideoItems($, isPreview) {
    var items = [];

    // Hanime1 的列表通常在 id="home-rows-wrapper" 里的 a 标签
    // 或者直接查找带有特定 class 的 a 标签
    // 通常 class 并不是固定的，最好找包含 img 和特定的 href 的 a 标签

    var elements = $('a');

    elements.each(function (i, el) {
        try {
            var $el = $(el);
            var href = $el.attr('href');

            // 过滤规则：
            // 1. 必须包含 href
            // 2. href 必须包含 watch?v= (普通视频) 或者 预告视频的特征

            if (!href) return;

            var isVideoLink = href.indexOf('watch?v=') !== -1;
            // 预告片链接通常也是 watch?v= 但是在不同页面

            if (!isVideoLink) return;

            var $img = $el.find('img');
            if ($img.length === 0) return;

            // 解析封面
            var imgSrc = $img.attr('data-src') || $img.attr('src') || "";
            // 补全图片链接
            if (imgSrc && imgSrc.indexOf('http') !== 0) {
                if (imgSrc.indexOf('//') === 0) imgSrc = "https:" + imgSrc;
                else imgSrc = BASE_URL + imgSrc;
            }

            // 解析标题
            // 优先级: .card-mobile-title -> .home-rows-videos-title -> img alt -> title attr
            var title = $el.find('.card-mobile-title').text() ||
                $el.find('.home-rows-videos-title').text();

            if (!title) {
                // 尝试找父级 (适应某些移动端视图结构)
                title = $el.parent().find('.card-mobile-title').text();
            }

            if (!title) title = $img.attr('alt') || $el.attr('title') || "未知标题";

            title = title.trim();

            // 解析链接
            var link = href;
            if (link.indexOf('http') !== 0) {
                link = BASE_URL + (link.indexOf('/') === 0 ? '' : '/') + link;
            }

            // 解析额外信息 (如作者、播放量等，显示在 description 位置)
            var info = $el.parent().find('.card-mobile-user').text() || "";
            var duration = $el.find('.card-mobile-duration').text() || "";

            // 去重
            var isExist = false;
            for (var k = 0; k < items.length; k++) {
                if (items[k].link === link) {
                    isExist = true;
                    break;
                }
            }

            if (!isExist) {
                items.push({
                    id: link,
                    type: "url",
                    title: title,
                    posterPath: imgSrc, // 竖屏
                    backdropPath: imgSrc, // 横屏 (Hanime1 通常是横图，但也兼容)
                    videoUrl: "", // 列表页没有视频链接
                    link: link,
                    description: info.trim(),
                    durationText: duration.trim(),
                    mediaType: "movie"
                });
            }

        } catch (e) {
            console.error("Item parse error:", e);
        }
    });

    return items;
}

// 统一的页面加载函数
async function loadPage(params) {
    try {
        var page = params.page || 1;
        var url = BASE_URL + "/search";
        var queryParams = [];

        // 特殊模块：预告
        if (params.special === "previews") {
            var d = new Date();
            var y = d.getFullYear();
            var m = d.getMonth() + 1;
            if (m < 10) m = '0' + m;
            url = BASE_URL + '/previews/' + y + m;

            // 直接请求预告页
            var res = await Widget.http.get(url, { headers: getCommonHeaders() });
            var $ = Widget.html.load(res.data);
            return parseVideoItems($, true);
        }

        // 构造搜索参数
        if (params.keyword) {
            queryParams.push("query=" + encodeURIComponent(params.keyword));
        }

        if (params.genre) {
            queryParams.push("genre=" + encodeURIComponent(params.genre));
        }

        if (params.sort) {
            queryParams.push("sort=" + encodeURIComponent(params.sort));
        }

        if (params.tag) {
            queryParams.push("tags[]=" + encodeURIComponent(params.tag));
        }

        // 分页
        if (page > 1) {
            queryParams.push("page=" + page);
        }

        // 组合 URL
        if (queryParams.length > 0) {
            url += "?" + queryParams.join("&");
        } else {
            // 默认兜底
            if (url.indexOf('?') === -1) url += "?sort=" + encodeURIComponent("最新上市");
        }

        var res = await Widget.http.get(url, { headers: getCommonHeaders() });
        var $ = Widget.html.load(res.data);

        return parseVideoItems($, false);

    } catch (e) {
        console.error("loadPage failure:", e);
        throw e;
    }
}

// 详情页加载函数
async function loadDetail(link) {
    try {
        var res = await Widget.http.get(link, { headers: getCommonHeaders() });
        var html = res.data;
        var $ = Widget.html.load(html);

        // 1. 解析视频地址
        var videoUrl = "";

        // 策略A: input#video-sd
        var val = $('input#video-sd').val();
        if (val) videoUrl = val;

        // 策略B: script 里的 source 变量
        if (!videoUrl) {
            var match = html.match(/source\s*=\s*['"](https:\/\/[^'"]+)['"]/);
            if (match) videoUrl = match[1];
        }

        // 策略C: video 标签
        if (!videoUrl) {
            videoUrl = $('video source').attr('src');
        }

        if (!videoUrl) {
            throw new Error("无法解析视频地址，可能需要登录或页面结构已变更");
        }

        // 处理 &amp;
        videoUrl = videoUrl.replace(/&amp;/g, '&');

        // 2. 解析元数据
        var title = $('meta[property="og:title"]').attr('content') || $('title').text();
        var desc = $('meta[property="og:description"]').attr('content') || "";
        var cover = $('meta[property="og:image"]').attr('content') || "";

        // 发布日期
        // Hanime1 详情页可能有 date display
        var dateText = "";
        // 尝试寻找包含日期的文本节点，这比较难通用，先留空

        // 3. 解析推荐列表 (childItems)
        var childItems = [];
        // 查找 "更多类似影片" 或相关推荐
        // 通常在 .home-rows-videos-div 的容器里
        var relatedNodes = $('.home-rows-videos-div'); // 或者复用 parseVideoItems 的逻辑

        // 由于 parseVideoItems 是针对整个页面的 $，我们可以再次调用它，
        // 但需要过滤掉当前视频本身，并且只取一部分作为 childItems
        var allItems = parseVideoItems($, false);

        // 过滤
        childItems = allItems.filter(function (item) {
            return item.link !== link && item.title !== title;
        });

        // 限制数量，防止数据过大
        if (childItems.length > 20) childItems = childItems.slice(0, 20);

        return {
            id: link,
            type: "url",
            title: title || "未知标题",
            videoUrl: videoUrl,
            description: desc,
            backdropPath: cover,
            posterPath: cover,
            mediaType: "movie",
            link: link,
            childItems: childItems,
            headers: {
                "User-Agent": USER_AGENT
            }
        };

    } catch (e) {
        console.error("loadDetail failure:", e);
        throw e;
    }
}
