//Original Author:Ti
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "\u83b7\u53d6 JAVDay \u63a8\u8350",
  author: "\ud835\udcd1\ud835\udcfe\ud835\udcfd\ud835\udcfd\ud835\udcee\ud835\udcfb\ud835\udcef\ud835\udcf5\ud835\udd02",
  site: "https://widgets-xd.vercel.app",
  version: "1.1.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  modules: [
    // \u641c\u7d22\u6a21\u5757
    {
      title: "\u641c\u7d22\u89c6\u9891",
      description: "\u641c\u7d22JAVDay\u89c6\u9891\u5e93",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "\u5973\u512a/\u756a\u865f/\u95dc\u9375\u5b57\u641c\u7d22\u2026",
          type: "input",
          value: "",
          description: "\u5973\u512a/\u756a\u865f/\u95dc\u9375\u5b57\u641c\u7d22\u2026",
        },
        { 
          name: "page", 
          title: "\u9875\u7801", 
          type: "page", 
          description: "\u641c\u7d22\u7ed3\u679c\u9875\u7801" 
        }
      ]
    },
    // \u6700\u65b0\u6a21\u5757
    {
      title: "\u6700\u65b0\u66f4\u65b0",
      description: "\u6d4f\u89c8\u6700\u65b0\u66f4\u65b0\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/label/new/"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u4eba\u6c14\u6a21\u5757
    {
      title: "\u4eba\u6c14\u7cfb\u5217",
      description: "\u6d4f\u89c8\u4eba\u6c14\u7cfb\u5217\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/label/hot/"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u65b0\u4f5c\u6a21\u5757
    {
      title: "\u65b0\u4f5c\u4e0a\u5e02",
      description: "\u6d4f\u89c8\u65b0\u4f5c\u4e0a\u5e02\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/category/new-release/"
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f\u65b9\u5f0f",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u4e0a\u67b6", value: "new" },
            { title: "\u4eba\u6c14\u6700\u9ad8", value: "popular" }
          ],
          description: "\u9009\u62e9\u89c6\u9891\u6392\u5e8f\u65b9\u5f0f",
          value: "new"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u6709\u7801\u6a21\u5757
    {
      title: "\u6709\u7801\u89c6\u9891",
      description: "\u6d4f\u89c8\u6709\u7801\u5206\u7c7b\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/category/censored/"
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f\u65b9\u5f0f",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u4e0a\u67b6", value: "new" },
            { title: "\u4eba\u6c14\u6700\u9ad8", value: "popular" }
          ],
          description: "\u9009\u62e9\u89c6\u9891\u6392\u5e8f\u65b9\u5f0f",
          value: "popular"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u65e0\u7801\u6a21\u5757
    {
      title: "\u65e0\u7801\u89c6\u9891",
      description: "\u6d4f\u89c8\u65e0\u7801\u5206\u7c7b\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/category/uncensored/"
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f\u65b9\u5f0f",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u4e0a\u67b6", value: "new" },
            { title: "\u4eba\u6c14\u6700\u9ad8", value: "popular" }
          ],
          description: "\u9009\u62e9\u89c6\u9891\u6392\u5e8f\u65b9\u5f0f",
          value: "new"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u6d41\u51fa\u6a21\u5757
    {
      title: "\u65e0\u7801\u6d41\u51fa",
      description: "\u6d4f\u89c8\u65e0\u7801\u6d41\u51fa\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/category/uncensored-leaked/"
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f\u65b9\u5f0f",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u4e0a\u67b6", value: "new" },
            { title: "\u4eba\u6c14\u6700\u9ad8", value: "popular" }
          ],
          description: "\u9009\u62e9\u89c6\u9891\u6392\u5e8f\u65b9\u5f0f",
          value: "new"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u674f\u5427\u6a21\u5757
    {
      title: "\u674f\u5427\u89c6\u9891",
      description: "\u6d4f\u89c8\u674f\u5427\u5206\u7c7b\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/category/sex8/"
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f\u65b9\u5f0f",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u4e0a\u67b6", value: "new" },
            { title: "\u4eba\u6c14\u6700\u9ad8", value: "popular" }
          ],
          description: "\u9009\u62e9\u89c6\u9891\u6392\u5e8f\u65b9\u5f0f",
          value: "popular"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u73a9\u5076\u6a21\u5757
    {
      title: "\u73a9\u5076\u59d0\u59d0",
      description: "\u6d4f\u89c8\u73a9\u5076\u59d0\u59d0\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/category/hongkongdoll/"
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f\u65b9\u5f0f",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u4e0a\u67b6", value: "new" },
            { title: "\u4eba\u6c14\u6700\u9ad8", value: "popular" }
          ],
          description: "\u9009\u62e9\u89c6\u9891\u6392\u5e8f\u65b9\u5f0f",
          value: "popular"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u56fd\u4ea7\u6a21\u5757
    {
      title: "\u56fd\u4ea7 AV",
      description: "\u6d4f\u89c8\u56fd\u4ea7 AV\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://javday.app/category/chinese-av/"
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f\u65b9\u5f0f",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u4e0a\u67b6", value: "new" },
            { title: "\u4eba\u6c14\u6700\u9ad8", value: "popular" }
          ],
          description: "\u9009\u62e9\u89c6\u9891\u6392\u5e8f\u65b9\u5f0f",
          value: "popular"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u5382\u5546\u6a21\u5757
    {
      title: "\u56fd\u4ea7\u5382\u5546",
      description: "\u6309\u5382\u5546\u6807\u7b7e\u6d4f\u89c8\u56fd\u4ea7\u5382\u5546\u89c6\u9891",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5382\u5546\u9009\u62e9",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: ["new","popular"],
            },
          enumOptions: [ 
            { title: "\u9ebb\u8c46\u4f20\u5a92", value: "https://javday.app/index.php/category/madou/" }, 
            { title: "\u679c\u51bb\u4f20\u5a92", value: "https://javday.app/index.php/category/91zhipianchang/" }, 
            { title: "\u5929\u7f8e\u4f20\u5a92", value: "https://javday.app/index.php/category/timi/" }, 
            { title: "\u661f\u7a7a\u65e0\u9650", value: "https://javday.app/index.php/category/xingkong/" }, 
            { title: "\u7687\u5bb6\u534e\u4eba", value: "https://javday.app/index.php/category/royalasianstudio/" }, 
            { title: "\u871c\u6843\u5f71\u50cf", value: "https://javday.app/index.php/category/mtgw/" }, 
            { title: "\u7cbe\u4e1c\u5f71\u4e1a", value: "https://javday.app/index.php/category/jdav/" }, 
            { title: "\u53f0\u6e7e AV", value: "https://javday.app/index.php/category/twav/" }, 
            { title: "JVID", value: "https://javday.app/index.php/category/jvid/" }, 
            { title: "\u841d\u8389\u793e", value: "https://javday.app/index.php/category/luolisheus/" }, 
            { title: "\u7cd6\u5fc3VLOG", value: "https://javday.app/index.php/category/txvlog/" }, 
            { title: "Psychoporn TW", value: "https://javday.app/index.php/category/psychoporn-tw/" } 
          ],
          value: "https://javday.app/index.php/category/madou/",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5382\u5546"
        },
        {
          name: "sort_by",
          title: "\ud83d\udd22 \u6392\u5e8f\u65b9\u5f0f",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u4e0a\u67b6", value: "new" },
            { title: "\u4eba\u6c14\u6700\u9ad8", value: "popular" }
          ],
          value: "new",
          description: "\u9009\u62e9\u89c6\u9891\u6392\u5e8f\u65b9\u5f0f"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    }
  ]
};

const JAVDAY_LOG_PREFIX = "ForwardWidget: JAVDay -";
const JAVDAY_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";

function extractCategoryId(url) {
  const match = url.match(/\/([^/]+)\/?$/);
  if (match && match[1]) {
    return match[1].replace(/\/+$/, '');
  }
  
  const parts = url.split('/').filter(part => part.length > 0);
  return parts[parts.length - 1] || url.split('/').slice(-2, -1)[0] || 'unknown';
}

function buildPageUrl(baseUrl, sortBy, page) {
  const categoryId = extractCategoryId(baseUrl);
  
  const cleanBaseUrl = baseUrl.replace(/index\.php\//g, '');
  
  let path;
  if (sortBy === "popular") {
    path = `/fiter/by/hits/id/${categoryId}`;
  } else {
    path = cleanBaseUrl.includes('label/') 
      ? cleanBaseUrl.replace(/\/page\/\d+\/?$/, '')
      : `/category/${categoryId}`;
  }
  
  if (page > 1) {
    return `${path}/page/${page}/`;
  }
  
  return `${path}/`;
}

function getFullUrl(path) {
  if (path.startsWith("http")) return path;
  
  return `https://javday.app${path}`;
}

function getCoverImgSrc($item) {
  const coverElement = $item.find(".videoBox-cover");
  const styleAttr = coverElement.attr("style");
  
  if (styleAttr) {
    const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
    if (match && match[1]) {
      const extractedUrl = match[1];
      
      if (extractedUrl.startsWith("//")) {
        return `https:${extractedUrl}`;
      } 
      
      if (extractedUrl.startsWith("http")) {
        return extractedUrl;
      }
      
      return `https://javday.app${extractedUrl.startsWith("/") ? "" : "/"}${extractedUrl}`;
    }
  }
  return "";
}

function extractVideoUrlFromDPlayerScript(scriptContent) {
  if (!scriptContent) return null;
  
  const regexes = [
    /video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/,
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/
  ];
  
  for (const regex of regexes) {
    const match = scriptContent.match(regex);
    if (match && match[1]) return match[1];
  }
  
  return null;
}

async function loadPage(params = {}) {
  const baseUrl = params.url;
  const sortBy = params.sort_by || "new";
  const page = parseInt(params.page, 10) || 1;
  
  const pagePath = buildPageUrl(baseUrl, sortBy, page);
  const targetUrl = getFullUrl(pagePath);

  try {
    const response = await Widget.http.get(targetUrl, {
      headers: {
        "User-Agent": JAVDAY_USER_AGENT,
        Referer: "https://javday.app/",
      },
    });

    if (!response?.data) {
      throw new Error("\u65e0\u6cd5\u83b7\u53d6\u9875\u9762\u5185\u5bb9");
    }

    const $ = Widget.html.load(response.data);
    const videoItems = [];

    $(".video-wrapper .videoBox").each((index, element) => {
      const $item = $(element);
      let link = $item.attr("href");
      const title = $item.find(".videoBox-info .title").text().trim();
      const imgSrc = getCoverImgSrc($item);

      if (!link || !title) return;
      
      if (!link.startsWith("http")) {
        link = link.startsWith("//") 
          ? `https:${link}`
          : `https://javday.app${link.startsWith("/") ? "" : "/"}${link}`;
      }

      link = link.replace(/([^:]\/)\/+/g, '$1');

      videoItems.push({
        id: `${index}|${link}`,
        type: "url",
        title: title,
        imgSrc: imgSrc,
        backdropPath: imgSrc,
        link: link,
        description: `\u6765\u81eaJAVDay | \u6392\u5e8f:${sortBy === "new" ? "\u6700\u65b0\u4e0a\u67b6" : "\u4eba\u6c14\u6700\u9ad8"}`,
        mediaType: "movie",
      });
    });
    
    return videoItems;
  } catch (error) {
    console.error(`${JAVDAY_LOG_PREFIX} \u83b7\u53d6\u89c6\u9891\u5931\u8d25: ${error.message}`);
    throw error;
  }
}

async function search(params = {}) {
  const keyword = params.keyword || "";
  const page = parseInt(params.page, 10) || 1;
  
  if (!keyword) {
    throw new Error("\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u8bcd");
  }

  let searchUrl;
  if (page === 1) {
    searchUrl = `https://javday.app/search/?wd=${keyword}`;
  } else {
    searchUrl = `https://javday.app/search/page/${page}/wd/${keyword}/`;
  }

  try {
    const response = await Widget.http.get(searchUrl, {
      headers: {
        "User-Agent": JAVDAY_USER_AGENT,
        Referer: "https://javday.app/",
      },
    });

    if (!response?.data) {
      throw new Error("\u65e0\u6cd5\u83b7\u53d6\u641c\u7d22\u7ed3\u679c");
    }

    const $ = Widget.html.load(response.data);
    const videoItems = [];

    $(".video-wrapper .videoBox").each((index, element) => {
      const $item = $(element);
      let link = $item.attr("href");
      const title = $item.find(".videoBox-info .title").text().trim();
      const imgSrc = getCoverImgSrc($item);

      if (!link || !title) return;
      
      if (!link.startsWith("http")) {
        link = link.startsWith("//") 
          ? `https:${link}`
          : `https://javday.app${link.startsWith("/") ? "" : "/"}${link}`;
      }

      link = link.replace(/([^:]\/)\/+/g, '$1');

      videoItems.push({
        id: `${index}|${link}`,
        type: "url",
        title: title,
        imgSrc: imgSrc,
        backdropPath: imgSrc,
        link: link,
        description: `\u641c\u7d22: ${params.keyword}`,
        mediaType: "movie",
      });
    });
    
    return videoItems;
  } catch (error) {
    console.error(`${JAVDAY_LOG_PREFIX} \u641c\u7d22\u5931\u8d25: ${error.message}`);
    throw error;
  }
}

async function loadDetail(link) {
  
  try {
    const response = await Widget.http.get(link, {
      headers: {
        "User-Agent": JAVDAY_USER_AGENT,
        Referer: link,
      },
    });

    if (!response?.data) {
      throw new Error("\u65e0\u6cd5\u83b7\u53d6\u8be6\u60c5\u9875\u5185\u5bb9");
    }

    const $ = Widget.html.load(response.data);
    
    const dplayerScript = Array.from($("script"))
      .find(el => {
        const scriptContent = $(el).html();
        return scriptContent && scriptContent.includes("new DPlayer");
      });
    
    if (dplayerScript) {
      const scriptContent = $(dplayerScript).html();
      const videoUrl = extractVideoUrlFromDPlayerScript(scriptContent);
      if (videoUrl) {
        return {
          id: link,
          type: "url",
          videoUrl: videoUrl,
          customHeaders: {
            Referer: link,
            "User-Agent": JAVDAY_USER_AGENT,
          },
        };
      }
    }
    
    const videoSrc = $("video#J_prismPlayer").attr("src") || 
                   $("source[src*='.m3u8']").attr("src") ||
                   $("video source").attr("src");
    
    if (videoSrc) {
      return {
        id: link,
        type: "url",
        videoUrl: videoSrc,
        customHeaders: {
          Referer: link,
            "User-Agent": JAVDAY_USER_AGENT,
          },
        };
      }
      
      const scriptSources = Array.from($("script"))
      .map(el => $(el).html())
      .find(content => content && content.includes(".m3u8"));
    
    if (scriptSources) {
      const m3u8Match = scriptSources.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
      if (m3u8Match && m3u8Match[1]) {
        return {
          id: link,
          type: "url",
          videoUrl: m3u8Match[1],
          customHeaders: {
            Referer: link,
            "User-Agent": JAVDAY_USER_AGENT,
          },
        };
      }
    }

    const playerVideo = $("video[src]").attr("src") || 
                      $("iframe[src*='player']").attr("src");
    
    if (playerVideo) {
      return {
        id: link,
        type: "url",
        videoUrl: playerVideo,
        customHeaders: {
          Referer: link,
          "User-Agent": JAVDAY_USER_AGENT,
        },
      };
    }

    throw new Error("\u65e0\u6cd5\u627e\u5230\u89c6\u9891\u6e90");
  } catch (error) {
    console.error(`${JAVDAY_LOG_PREFIX} \u52a0\u8f7d\u8be6\u60c5\u5931\u8d25: ${error.message}`);
    throw error;
  }
}
