var BASE_URL = "https://hanime1.me";

var WidgetMetadata = {
    title: "Hanime1",
    id: "hanime1_me_v2",
    site: "https://hanime1.me",
    version: "2.0.0",
    description: "Hanime1 在线观看",
    author: "Gemini",
    detailCacheDuration: 60,
    modules: [
        // 1. 搜索模块
        {
            title: "搜索",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                {
                    name: "keyword",
                    title: "关键字",
                    type: "input",
                    description: "输入番号、标题或关键字",
                    value: ""
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        },
        // 2. 浏览列表 (复合筛选)
        {
            title: "浏览",
            functionName: "loadPage",
            requiresWebView: false,
            cacheDuration: 300,
            params: [
                {
                    name: "genre",
                    title: "分类",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "里番", value: "裏番" },
                        { title: "泡面番", value: "泡麵番" },
                        { title: "Motion Anime", value: "Motion Anime" },
                        { title: "3DCG", value: "3DCG" },
                        { title: "2D 动画", value: "2D動畫" },
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
                        { title: "本周排行", value: "本週排行" },
                        { title: "本月排行", value: "本月排行" },
                        { title: "他们在看", value: "他們在看" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        },
        // 3. 标签筛选
        {
            title: "标签",
            functionName: "loadPage",
            requiresWebView: false,
            cacheDuration: 600,
            params: [
                {
                    name: "tag",
                    title: "热门标签",
                    type: "enumeration",
                    value: "中文字幕",
                    enumOptions: [
                        { title: "中文字幕", value: "中文字幕" },
                        { title: "无码", value: "無碼" },
                        { title: "高清", value: "HD" },
                        { title: "60 FPS", value: "60 FPS" },
                        { title: "VR", value: "VR" },
                        { title: "近亲相奸", value: "近親相姦" },
                        { title: "NTR", value: "NTR" },
                        { title: "巨乳", value: "巨乳" },
                        { title: "贫乳", value: "貧乳" },
                        { title: "人妻", value: "人妻" },
                        { title: "C99", value: "C99" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        },
        // 4. 新番预告
        {
            title: "新番预告",
            functionName: "loadPage",
            requiresWebView: false,
            params: [
                {
                    name: "mode",
                    title: "模式",
                    type: "constant",
                    value: "previews"
                }
            ]
        }
    ],
    search: {
        title: "搜索",
        functionName: "loadPage",
        params: [
            { name: "keyword", title: "关键字", type: "input" },
            { name: "page", title: "页码", type: "page" }
        ]
    }
};

// --- HTTP 工具 ---
function getHeaders() {
    return {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": BASE_URL,
        "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
    };
}

// --- 通用解析函数 ---

/**
 * 解析视频列表
 * @param {string} html 页面 HTML
 * @returns {Array} 视频条目列表
 */
function parseList(html) {
    var $ = Widget.html.load(html);
    var items = [];

    // Hanime1 的卡片通常在 .content-padding-new 或 .home-rows-videos-div 下
    // 无论是搜索结果还是首页推荐，基本单元都是 a 标签

    $('a').each(function (i, el) {
        try {
            var $a = $(el);
            var href = $a.attr('href');

            // 过滤非视频链接
            if (!href || href.indexOf('/watch?v=') === -1) return;

            // 去除可能的冗余 query
            // link: https://hanime1.me/watch?v=xxxxx
            var link = href;
            if (link.indexOf('http') !== 0) {
                link = BASE_URL + (link.indexOf('/') === 0 ? '' : '/') + link;
            }

            // 查找图片
            var $img = $a.find('img');
            if ($img.length === 0) return;

            var poster = $img.attr('data-srcset') || $img.attr('srcset') || $img.attr('data-src') || $img.attr('src') || "";
            // 处理 srcset (取第一张或最高清)
            if (poster.indexOf(',') > -1) {
                poster = poster.split(',')[0].split(' ')[0];
            }
            if (poster && poster.indexOf('http') !== 0) {
                // 处理相对路径
                if (poster.indexOf('//') === 0) poster = "https:" + poster;
                else poster = BASE_URL + (poster.indexOf('/') === 0 ? '' : '/') + poster;
            }

            // 标题
            var title = $a.find('.home-rows-videos-title').text() ||
                $a.find('.card-mobile-title').text() ||
                $img.attr('alt') ||
                $a.attr('title') ||
                "无标题";

            title = title.trim();
            if (!title) return; // 无标题视为无效卡片

            // 附加信息 (作者、时长等)
            var duration = $a.find('.card-mobile-duration').text().trim();
            var uploader = $a.parent().find('.card-mobile-user').text().trim();

            // 简单的排重
            var existing = items.find(function (it) { return it.link === link; });
            if (!existing) {
                items.push({
                    id: link,
                    type: "url",
                    title: title,
                    posterPath: poster,
                    backdropPath: poster, // 横屏封面
                    mediaType: "movie",
                    durationText: duration,
                    description: uploader,
                    link: link
                });
            }

        } catch (e) {
            console.error("Item parse failed:", e);
        }
    });

    return items;
}

// --- 主要功能函数 ---

/**
 * 核心加载函数
 */
async function loadPage(params) {
    try {
        var page = params.page || 1;
        var url = BASE_URL + "/search";
        var queryParts = [];

        // 1. 处理预告模式
        if (params.mode === "previews") {
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            if (month < 10) month = '0' + month;
            url = BASE_URL + '/previews/' + year + month;

            var res = await Widget.http.get(url, { headers: getHeaders() });
            return parseList(res.data);
        }

        // 2. 处理常规搜索参数
        if (params.keyword) {
            queryParts.push("query=" + encodeURIComponent(params.keyword));
        }

        if (params.genre && params.genre !== 'all') {
            queryParts.push("genre=" + encodeURIComponent(params.genre));
        }

        if (params.sort) {
            queryParts.push("sort=" + encodeURIComponent(params.sort));
        }

        if (params.tag) {
            queryParts.push("tags[]=" + encodeURIComponent(params.tag));
        }

        if (page > 1) {
            queryParts.push("page=" + page);
        }

        // 拼接 URL
        if (queryParts.length > 0) {
            url += "?" + queryParts.join("&");
        } else {
            // 默认参数，防止空搜索
            if (url.indexOf('?') === -1) url += "?sort=" + encodeURIComponent("最新上市");
        }

        var res = await Widget.http.get(url, { headers: getHeaders() });
        var items = parseList(res.data);

        // 如果没有数据，返回空数组
        if (items.length === 0 && page === 1) {
            // 可以返回一个仅提示的伪对象，或者就空数组
        }

        return items;

    } catch (e) {
        console.error("loadPage error:", e);
        // 抛出错误以便 App 提示
        throw new Error("列表加载失败: " + e.message);
    }
}

/**
 * 详情页加载函数
 */
async function loadDetail(link) {
    try {
        var res = await Widget.http.get(link, { headers: getHeaders() });
        var html = res.data;
        var $ = Widget.html.load(html);

        // 1. 解析视频链接
        var videoUrl = "";

        // Hanime1 的视频地址通常在 id="video-sd" 的 input 里
        var sdInput = $('#video-sd');
        if (sdInput.length > 0) {
            videoUrl = sdInput.val();
        }

        // 备选: 从 script 中提取 source 变量
        if (!videoUrl) {
            // 简单的正则匹配
            var scriptMatch = html.match(/source\s*=\s*['"](https:\/\/[^'"]+)['"]/);
            if (scriptMatch) {
                videoUrl = scriptMatch[1];
            }
        }

        // 备选: video 标签
        if (!videoUrl) {
            videoUrl = $('video source').attr('src');
        }

        if (!videoUrl) {
            throw new Error("无法解析视频地址 (可能需登录或被删除)");
        }

        // 2. 解析元数据 (使用 OpenGraph)
        var title = $('meta[property="og:title"]').attr('content') || "未知标题";
        var cover = $('meta[property="og:image"]').attr('content') || "";
        var desc = $('meta[property="og:description"]').attr('content') || "";

        // 3. 解析作者与标签
        // 标签通常在 .video-tags-text 类
        var tags = [];
        $('.video-tags-text').each(function (i, el) {
            tags.push($(el).text().trim());
        });
        var genreTitle = tags.join(", ");

        // 4. 解析相关推荐 (childItems)
        // 详情页底部通常有 "推薦影片"，结构类似首页
        // 为了提高效率，这里直接复用 parseList，传入整个详情页 HTML
        // 然后过滤掉自己
        var rawRelated = parseList(html);
        var childItems = rawRelated.filter(function (item) {
            return item.link !== link;
        }).slice(0, 15); // 限制数量

        return {
            id: link,
            type: "url",
            title: title,
            videoUrl: videoUrl,
            posterPath: cover,
            backdropPath: cover,
            description: desc,
            genreTitle: genreTitle,
            mediaType: "movie",
            link: link,
            childItems: childItems,
            headers: getHeaders()
        };

    } catch (e) {
        console.error("loadDetail error:", e);
        throw new Error("详情加载失败: " + e.message);
    }
}
