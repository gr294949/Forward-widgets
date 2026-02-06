var WidgetMetadata = {
    id: "hanime1_me_style",
    title: "Hanime1",
    description: "获取 Hanime1 动画，折扣码gold",
    author: "gr294949",
    site: "https://hanime1.me",
    version: "2.2.0",
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
                        { title: "全部", value: "all" },
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
                    name: "genre",
                    title: "分类",
                    type: "enumeration",
                    description: "筛选分类",
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
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
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
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
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
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cache-Control": "no-cache"
    };
}

// 统一的URL处理函数
function normalizeUrl(url) {
    if (!url) return "";
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.startsWith('//')) return 'https:' + url;
    return BASE_URL + (url.startsWith('/') ? '' : '/') + url;
}

async function fetchAndParse(url) {
    try {
        console.log("Fetching URL:", url);
        const response = await Widget.http.get(url, {
            headers: getCommonHeaders(),
            timeout: 30000
        });

        if (!response || !response.data) {
            console.error("Empty response received");
            return [];
        }

        const $ = Widget.html.load(response.data);
        const items = [];

        // 策略 1: 搜索页面 - .search-doujin-videos 容器
        const $searchVideos = $('.search-doujin-videos');
        console.log("Strategy 1 - .search-doujin-videos found:", $searchVideos.length);
        
        $searchVideos.each((i, el) => {
            const $card = $(el);
            
            // 调试输出
            if (i === 0) {
                console.log("Sample card HTML:", $card.html().substring(0, 500));
            }
            
            const $link = $card.find('a.overlay, a[href*="/watch"]').first();
            const href = $link.attr('href');
            
            if (!href || href.indexOf('/watch') === -1) return;

            const link = normalizeUrl(href);
            if (items.some(it => it.link === link)) return;

            // 提取图片
            let poster = "";
            const $img = $card.find('img').first();
            if ($img.length) {
                poster = $img.attr('src') || $img.attr('data-src') || $img.attr('data-original') || "";
            }
            poster = normalizeUrl(poster);

            // 提取时长（先提取，避免和标题混淆）
            const duration = $card.find('.card-mobile-duration, .duration, [class*="duration"]').first().text().trim();
            
            // 提取标题 - 使用多种策略
            let title = "";
            
            // 策略1: 查找标题类元素，但排除时长和用户
            const $possibleTitles = $card.find('[class*="title"]');
            $possibleTitles.each((idx, titleEl) => {
                const $titleEl = $(titleEl);
                const className = $titleEl.attr('class') || "";
                // 排除包含 duration 或 user 的类名
                if (className.indexOf('duration') === -1 && className.indexOf('user') === -1) {
                    const text = $titleEl.text().trim();
                    // 确保不是时长格式
                    if (text && !/^\d{1,2}:\d{2}$/.test(text) && text !== duration) {
                        title = text;
                        return false; // break
                    }
                }
            });
            
            // 策略2: 从链接的title属性获取
            if (!title) {
                title = $link.attr('title') || "";
                if (/^\d{1,2}:\d{2}$/.test(title)) title = ""; // 排除时长格式
            }
            
            // 策略3: 从卡片容器的title属性获取
            if (!title) {
                title = $card.attr('title') || "";
                if (/^\d{1,2}:\d{2}$/.test(title)) title = ""; // 排除时长格式
            }
            
            // 策略4: 从所有文本节点中查找（排除时长和用户）
            if (!title) {
                $card.find('*').each((idx, elem) => {
                    const text = $(elem).clone().children().remove().end().text().trim();
                    if (text && text.length > 3 && !/^\d{1,2}:\d{2}$/.test(text) && text !== duration) {
                        title = text;
                        return false;
                    }
                });
            }
            
            // 策略5: 从链接URL中提取视频ID作为后备
            if (!title) {
                const match = href.match(/v=(\d+)/);
                if (match) {
                    title = "视频 " + match[1];
                } else {
                    title = "未知标题";
                }
            }
            
            const author = $card.find('.card-mobile-user, .author, [class*="user"]').first().text().trim();

            if (title || poster) {
                items.push({
                    id: link,
                    type: "url",
                    title: title || "未知标题",
                    posterPath: poster,
                    backdropPath: poster,
                    mediaType: "movie",
                    durationText: duration,
                    description: author || "",
                    link: link
                });
            }
        });

        // 策略 2: 首页视频卡片 - .home-rows-videos-div
        if (items.length === 0) {
            const $homeVideos = $('.home-rows-videos-div');
            console.log("Strategy 2 - .home-rows-videos-div found:", $homeVideos.length);
            
            $homeVideos.each((i, el) => {
                const $card = $(el);
                const $link = $card.find('a[href*="/watch"], a.overlay').first();
                const href = $link.attr('href');
                
                if (!href || href.indexOf('/watch') === -1) return;

                const link = normalizeUrl(href);
                if (items.some(it => it.link === link)) return;

                let poster = "";
                const $img = $card.find('img').first();
                if ($img.length) {
                    poster = $img.attr('src') || $img.attr('data-src') || $img.attr('data-original') || "";
                }
                poster = normalizeUrl(poster);

                // 提取时长
                const duration = $card.find('.duration, .card-mobile-duration, [class*="duration"]').first().text().trim();
                
                // 提取标题 - 多策略方法
                let title = "";
                
                // 策略1: 查找标题类元素
                const $possibleTitles = $card.find('[class*="title"]');
                $possibleTitles.each((idx, titleEl) => {
                    const $titleEl = $(titleEl);
                    const className = $titleEl.attr('class') || "";
                    if (className.indexOf('duration') === -1 && className.indexOf('user') === -1) {
                        const text = $titleEl.text().trim();
                        if (text && !/^\d{1,2}:\d{2}$/.test(text) && text !== duration) {
                            title = text;
                            return false;
                        }
                    }
                });
                
                // 策略2: 从链接属性
                if (!title) {
                    title = $link.attr('title') || $card.attr('title') || "";
                    if (/^\d{1,2}:\d{2}$/.test(title)) title = "";
                }
                
                // 策略3: 从URL提取
                if (!title) {
                    const match = href.match(/v=(\d+)/);
                    if (match) {
                        title = "视频 " + match[1];
                    } else {
                        title = "未知标题";
                    }
                }

                if (title || poster) {
                    items.push({
                        id: link,
                        type: "url",
                        title: title || "未知标题",
                        posterPath: poster,
                        backdropPath: poster,
                        mediaType: "movie",
                        durationText: duration,
                        description: "",
                        link: link
                    });
                }
            });
        }

        // 策略 3: 通用视频链接 - 查找所有包含 /watch 的链接
        if (items.length === 0) {
            const $allLinks = $('a[href*="/watch"]');
            console.log("Strategy 3 - Generic watch links found:", $allLinks.length);
            
            $allLinks.each((i, el) => {
                if (items.length >= 20) return false; // 限制数量
                
                const $link = $(el);
                const href = $link.attr('href');
                if (!href) return;

                const link = normalizeUrl(href);
                if (items.some(it => it.link === link)) return;

                const $container = $link.closest('div[class*="video"], div[class*="card"], div[class*="item"]');
                
                let poster = "";
                const $img = $container.find('img').first();
                if ($img.length === 0) {
                    const $linkImg = $link.find('img').first();
                    if ($linkImg.length) {
                        poster = $linkImg.attr('src') || $linkImg.attr('data-src') || "";
                    }
                } else {
                    poster = $img.attr('src') || $img.attr('data-src') || "";
                }
                poster = normalizeUrl(poster);

                let title = $link.attr('title') || $container.find('[class*="title"]:not([class*="duration"])').first().text().trim() 
                         || $link.text().trim();
                
                // 如果标题是时长格式，从URL提取
                if (!title || /^\d{1,2}:\d{2}$/.test(title)) {
                    const match = href.match(/v=(\d+)/);
                    if (match) {
                        title = "视频 " + match[1];
                    } else {
                        title = "视频";
                    }
                }

                if (title || poster) {
                    items.push({
                        id: link,
                        type: "url",
                        title: title || "视频",
                        posterPath: poster,
                        backdropPath: poster,
                        mediaType: "movie",
                        durationText: "",
                        description: "",
                        link: link
                    });
                }
            });
        }

        console.log("Total items found:", items.length);
        return items;

    } catch (error) {
        console.error("fetchAndParse error:", error);
        return [];
    }
}

// --- 模块功能函数 ---

async function searchVideos(params) {
    const page = params.page || 1;
    const keyword = params.keyword || "";
    const sort = params.sort_by || "最新上市";

    let url = `${BASE_URL}/search?query=${encodeURIComponent(keyword)}`;
    if (sort && sort !== 'all') {
        url += `&sort=${encodeURIComponent(sort)}`;
    }
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
    const sort = params.sort_by || "";
    const genre = params.genre || "";

    let url = `${BASE_URL}/search?tags%5B%5D=${encodeURIComponent('中文字幕')}`;

    if (sort && sort !== 'all' && sort !== '全部') {
        url += `&sort=${encodeURIComponent(sort)}`;
    }

    if (genre && genre !== 'all' && genre !== '全部') {
        url += `&genre=${encodeURIComponent(genre)}`;
    }

    if (page > 1) url += `&page=${page}`;
    return fetchAndParse(url);
}

async function loadByGenre(params) {
    const page = params.page || 1;
    const genre = params.genre || "";
    const sort = params.sort_by || "";

    let url = `${BASE_URL}/search?`;
    let queryParts = [];

    if (genre && genre !== 'all' && genre !== '全部') {
        queryParts.push(`genre=${encodeURIComponent(genre)}`);
    }

    if (sort && sort !== 'all' && sort !== '全部') {
        queryParts.push(`sort=${encodeURIComponent(sort)}`);
    }

    if (page > 1) {
        queryParts.push(`page=${page}`);
    }

    if (queryParts.length > 0) {
        url += queryParts.join('&');
    }

    return fetchAndParse(url);
}

function parsePreviewsHtml(html) {
    const $ = Widget.html.load(html);
    const items = [];

    // 尝试多种选择器
    const selectors = [
        'div.hidden-sm.hidden-md.hidden-lg',
        '.preview-container',
        'div[class*="preview"]'
    ];

    for (const selector of selectors) {
        const $containers = $(selector);
        if ($containers.length === 0) continue;

        $containers.each((i, el) => {
            const $container = $(el);
            const desc = $container.find('h5.caption, .caption, .description').first().text().trim();
            const $img = $container.find('img.preview-image-modal-trigger, img[class*="preview"]').first();
            const poster = normalizeUrl($img.attr('src') || "");

            let title = desc.split('\n')[0];
            if (title.length > 30) title = title.substring(0, 30) + "...";
            if (!title) title = "新番预览";

            const link = BASE_URL + "/search?query=" + encodeURIComponent(title);

            if (poster) {
                items.push({
                    id: link,
                    type: "url",
                    title: title,
                    posterPath: poster,
                    backdropPath: poster,
                    mediaType: "movie",
                    description: desc,
                    link: link
                });
            }
        });

        if (items.length > 0) break;
    }

    return items;
}

async function loadPreviews(params) {
    const d = new Date();
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    if (month < 10) month = '0' + month;

    const url = `${BASE_URL}/previews/${year}${month}`;

    try {
        const response = await Widget.http.get(url, { 
            headers: getCommonHeaders(),
            timeout: 30000
        });
        return parsePreviewsHtml(response.data);
    } catch (e) {
        console.error("Preview load failed", e);
        return [];
    }
}

// --- 详情加载 ---

async function loadDetail(link) {
    try {
        console.log("Loading detail for:", link);
        const response = await Widget.http.get(link, {
            headers: getCommonHeaders(),
            timeout: 30000
        });

        const $ = Widget.html.load(response.data);
        const html = response.data;
        let videoUrl = "";

        // 策略1: Input元素 (多种ID)
        const inputSelectors = [
            'input#video-sd',
            'input#video-hd', 
            'input#video',
            'input[id*="video"]',
            'input[name*="video"]',
            'input[type="hidden"][value*=".mp4"]',
            'input[type="hidden"][value*=".m3u8"]'
        ];
        
        for (const selector of inputSelectors) {
            const $input = $(selector).first();
            if ($input.length) {
                const val = $input.val() || $input.attr('value');
                if (val && (val.indexOf('http') === 0 || val.indexOf('//') === 0)) {
                    videoUrl = val;
                    console.log("Found video URL in input:", selector);
                    break;
                }
            }
        }

        // 策略2: 正则匹配 JavaScript 变量
        if (!videoUrl) {
            const patterns = [
                // 常见的视频URL模式
                /source\s*=\s*['"](https?:\/\/[^'"]+\.(?:mp4|m3u8)[^'"]*)['"]/i,
                /video_url\s*=\s*['"](https?:\/\/[^'"]+)['"]/i,
                /file\s*:\s*['"](https?:\/\/[^'"]+)['"]/i,
                /src\s*:\s*['"](https?:\/\/[^'"]+\.(?:mp4|m3u8)[^'"]*)['"]/i,
                /url\s*:\s*['"](https?:\/\/[^'"]+\.(?:mp4|m3u8)[^'"]*)['"]/i,
                // Hanime1 特定模式
                /videos_manifest\s*=\s*\{[^}]*servers[^}]*stream_url[^}]*['"](https?:\/\/[^'"]+)['"]/i,
                /stream_url['"]\s*:\s*['"](https?:\/\/[^'"]+)['"]/i,
                // 通用视频URL模式
                /"(https?:\/\/[^"]+\.(?:mp4|m3u8)[^"]*)"/g,
                /'(https?:\/\/[^']+\.(?:mp4|m3u8)[^']*)'/g
            ];
            
            for (const pattern of patterns) {
                const match = html.match(pattern);
                if (match && match[1]) {
                    videoUrl = match[1];
                    console.log("Found video URL via regex:", pattern.toString().substring(0, 50));
                    break;
                }
            }
        }

        // 策略3: 查找 JSON 数据
        if (!videoUrl) {
            try {
                // 查找可能包含视频数据的 script 标签
                $('script').each((i, elem) => {
                    if (videoUrl) return false;
                    
                    const scriptContent = $(elem).html() || "";
                    
                    // 尝试提取 JSON 对象
                    const jsonMatch = scriptContent.match(/\{[^{}]*(?:video|stream|source|url)[^{}]*\}/gi);
                    if (jsonMatch) {
                        for (const jsonStr of jsonMatch) {
                            try {
                                // 尝试从类JSON字符串中提取URL
                                const urlMatch = jsonStr.match(/(?:url|src|file|stream)['":\s]+(https?:\/\/[^\s"']+)/i);
                                if (urlMatch && urlMatch[1]) {
                                    videoUrl = urlMatch[1];
                                    console.log("Found video URL in script JSON");
                                    return false;
                                }
                            } catch (e) {
                                // 忽略JSON解析错误
                            }
                        }
                    }
                });
            } catch (e) {
                console.log("Script parsing error:", e);
            }
        }

        // 策略4: Video 标签
        if (!videoUrl) {
            const $sources = $('video source, video[src]');
            $sources.each((i, elem) => {
                const src = $(elem).attr('src');
                if (src && (src.indexOf('http') === 0 || src.indexOf('//') === 0)) {
                    videoUrl = src;
                    console.log("Found video URL in video tag");
                    return false;
                }
            });
        }

        // 策略5: iframe 嵌入
        if (!videoUrl) {
            const $iframe = $('iframe[src*="player"], iframe[src*="video"]').first();
            if ($iframe.length) {
                const iframeSrc = $iframe.attr('src');
                if (iframeSrc) {
                    console.log("Found iframe player:", iframeSrc);
                    // 可能需要进一步解析 iframe
                    videoUrl = iframeSrc;
                }
            }
        }

        // 策略6: 查找所有可能的视频URL
        if (!videoUrl) {
            const allUrls = html.match(/https?:\/\/[^\s"'<>]+\.(?:mp4|m3u8)[^\s"'<>]*/gi);
            if (allUrls && allUrls.length > 0) {
                // 过滤掉可能的缩略图或其他非视频URL
                const filtered = allUrls.filter(url => 
                    !url.includes('thumbnail') && 
                    !url.includes('preview') &&
                    !url.includes('image')
                );
                if (filtered.length > 0) {
                    videoUrl = filtered[0];
                    console.log("Found video URL via broad search");
                }
            }
        }

        // 清理URL
        if (videoUrl) {
            videoUrl = videoUrl.replace(/&amp;/g, '&').replace(/\\"/g, '"').replace(/\\/g, '');
            // 确保URL格式正确
            if (videoUrl.startsWith('//')) {
                videoUrl = 'https:' + videoUrl;
            }
            console.log("Final video URL:", videoUrl);
        } else {
            console.log("No video URL found, may require login or different parsing");
        }

        const title = $('meta[property="og:title"]').attr('content') 
                   || $('h1').first().text().trim()
                   || $('title').text().trim() 
                   || "未知标题";
        const desc = $('meta[property="og:description"]').attr('content') 
                  || $('.description').first().text().trim()
                  || "";
        const cover = normalizeUrl($('meta[property="og:image"]').attr('content') || "");

        if (!videoUrl) {
            // 如果无法获取视频URL,返回网页链接让应用尝试打开
            return {
                id: link,
                type: "detail",
                videoUrl: link, // 返回原始链接
                title: title,
                description: "⚠️ 无法提取视频直链，可能需要：\n1. 登录账号\n2. 网站更新了结构\n3. 视频需要特殊播放器\n\n点击播放将打开网页版",
                posterPath: cover,
                backdropPath: cover,
                mediaType: "movie",
                link: link,
                childItems: []
            };
        }

        return {
            id: link,
            type: "detail",
            videoUrl: videoUrl,
            title: title,
            description: desc,
            posterPath: cover,
            backdropPath: cover,
            mediaType: "movie",
            link: link,
            childItems: [],
            headers: getCommonHeaders()
        };

    } catch (error) {
        console.error("loadDetail error:", error);
        return {
            id: link,
            type: "detail",
            videoUrl: link,
            title: "加载失败",
            description: `❌ 错误: ${error.message}\n\n请检查网络连接或稍后重试`,
            posterPath: "",
            mediaType: "movie",
            link: link,
            childItems: []
        };
    }
}
