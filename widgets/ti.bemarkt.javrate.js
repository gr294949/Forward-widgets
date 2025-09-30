//Original Author:Ti
var WidgetMetadata = {
  id: "ti.bemarkt.javrate",
  title: "JAVRate",
  description: "\u83b7\u53d6 JAVRate \u63a8\u8350",
  author: "\ud835\udcd1\ud835\udcfe\ud835\udcfd\ud835\udcfd\ud835\udcee\ud835\udcfb\ud835\udcef\ud835\udcf5\ud835\udd02",
  site: "https://widgets-xd.vercel.app",
  version: "2.1.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  modules: [
    // \u827a\u4eba\u6a21\u5757
    {
      title: "\u641c\u7d22\u5973\u4f18",
      description: "\u641c\u7d22\u5973\u4f18\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "artistId",
          title: "\u641c\u7d22\u827a\u4eba",
          type: "input",
          placeholders: [
            { 
              title: "\u5927\u69fb\u54cd", value: "\u5927\u69fb\u54cd" 
            },
            { 
              title: "\u7f8e\u5712\u548c\u82b1", value: "\u7f8e\u5712\u548c\u82b1" 
            },
            { 
              title: "\u68ee\u6fa4\u4f73\u5948", value: "\u68ee\u6fa4\u4f73\u5948" 
            },
            { 
              title: "\u6ce2\u591a\u91ce\u7ed3\u8863", value: "\u6ce2\u591a\u91ce\u7ed3\u8863" 
            },
            { 
              title: "\u660e\u91cc\u7d2c", value: "\u660e\u91cc\u7d2c" 
            },
            { 
              title: "\u677e\u672c\u4e00\u9999", value: "\u677e\u672c\u4e00\u9999" 
            },
            { 
              title: "\u6843\u4e43\u6728\u9999\u5948", value: "\u6843\u4e43\u6728\u9999\u5948" 
            },
            { 
              title: "\u5e0c\u5cf6\u611b\u7406", value: "\u5e0c\u5cf6\u611b\u7406" 
            },
            { 
              title: "\u5929\u6d77\u7ffc", value: "\u5929\u6d77\u7ffc" 
            },
            { 
              title: "JULIA", value: "JULIA" 
            },
            { 
              title: "\u65b0\u6709\u83dc", value: "\u65b0\u6709\u83dc" 
            },
            { 
              title: "\u7f8e\u8c37\u6731\u91cc", value: "\u7f8e\u8c37\u6731\u91cc" 
            },
            { 
              title: "\u76f8\u6fa4\u5357", value: "\u76f8\u6fa4\u5357" 
            },
            { 
              title: "\u85e4\u68ee\u91cc\u7a42", value: "\u85e4\u68ee\u91cc\u7a42" 
            },
            { 
              title: "\u5929\u4f7f\u840c", value: "\u5929\u4f7f\u840c" 
            },
            { 
              title: "AIKA", value: "AIKA" 
            },
            { 
              title: "\u8475\u53f8", value: "\u8475\u53f8" 
            },
            { 
              title: "\u5c0f\u91ce\u5915\u5b50", value: "\u5c0f\u91ce\u5915\u5b50" 
            },
            { 
              title: "\u696a\u53ef\u6190", value: "\u696a\u53ef\u6190" 
            },
            { 
              title: "\u4e09\u4e0a\u60a0\u4e9c", value: "\u4e09\u4e0a\u60a0\u4e9c" 
            },
            { 
              title: "\u6c34\u6237\u9999\u5948", value: "\u6c34\u6237\u9999\u5948" 
            },
            { 
              title: "\u5c0f\u6ca2\u83dc\u7a42", value: "\u5c0f\u6ca2\u83dc\u7a42" 
            }
          ],
          value: "\u5927\u69fb\u54cd",
          description: "\u9009\u62e9\u6216\u624b\u52a8\u8f93\u5165\u5973\u4f18\u540d\u79f0"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u6807\u7b7e\u5206\u7c7b\u6a21\u5757
    {
      title: "AV \u5206\u7c7b",
      description: "\u6309\u8be6\u7ec6\u5206\u7c7b\u6d4f\u89c8\u6240\u6709\u5206\u7c7b\u7684\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "tagType",
          title: "\ud83c\udff7\ufe0f \u5206\u7c7b",
          type: "enumeration",
          enumOptions: [
            { title: "\u70ed\u95e8", value: "hot" },
            { title: "\u989c\u503c", value: "appearance" },
            { title: "\u7c7b\u578b", value: "genre" },
            { title: "\u5267\u60c5", value: "plot" },
            { title: "\u804c\u4e1a", value: "occupation" },
            { title: "\u5173\u7cfb", value: "relationship" },
            { title: "\u8863\u7740", value: "outfit" },
            { title: "\u7279\u5f81", value: "characteristics" },
            { title: "\u4e3b\u9898", value: "theme" },
            { title: "\u72b6\u6001", value: "state" },
            { title: "\u73a9\u6cd5", value: "playstyle" },
            { title: "\u573a\u666f", value: "setting" }
          ],
          value: "hot",
          description: "\u9009\u62e9\u6807\u7b7e\u5927\u7c7b"
        },
        //\u70ed\u95e8\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u7c7b\u578b",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["hot"],
          },
          enumOptions: [
            { title: "\u7f8e\u811a\u30fb\u7f8e\u817f", value: "\u7f8e\u811a\u30fb\u7f8e\u817f" },
            { title: "\u5f3a\u5978\u30fb\u8f6e\u5978", value: "\u5f37\u59e6\u30fb\u8f2a\u59e6" },
            { title: "NTR\u30fb\u5be2\u53d6", value: "NTR\u30fb\u5be2\u53d6" },
            { title: "OL\u00b7\u804c\u573a", value: "OL\u30fb\u8077\u5834" },
            { title: "\u5dee\u65c5\u00b7\u76f8\u90e8\u5c4b", value: "\u5dee\u65c5\u30fb\u76f8\u90e8\u5c4b" },
            { title: "\u9b3c\u755c\u30fbSM", value: "\u9b3c\u755c\u30fbSM" },
            { title: "\u9ed1\u4e1d\u30fb\u8089\u4e1d", value: "\u9ed1\u7d72\u30fb\u8089\u7d72" },
            { title: "\u53f0\u6e7e\u5973\u4f18", value: "\u53f0\u7063\u5973\u512a" },
            { title: "\u51fa\u9053\u4f5c", value: "\u51fa\u9053\u4f5c" },
            { title: "\u6781\u4e0a\u7f8e\u4eba", value: "\u6975\u4e0a\u7f8e\u4eba" },
            { title: "\u6781\u4e0a\u5de8\u4e73", value: "\u6975\u4e0a\u5de8\u4e73" },
            { title: "\u4eba\u59bb", value: "\u4eba\u59bb" },
            { title: "\u719f\u5973", value: "\u719f\u5973" },
            { title: "\u841d\u8389", value: "\u863f\u8389" },
            { title: "AI\u5973\u4f18", value: "AI\u5973\u512a" },
            { title: "\u9b54\u955c\u53f7", value: "\u9b54\u93e1\u865f" },
            { title: "\u65f6\u95f4\u505c\u6b62", value: "\u6642\u9593\u505c\u6b62" },
            { title: "\u5973\u641c\u67e5\u5b98", value: "\u5973\u641c\u67e5\u5b98" },
            { title: "\u5e94\u53ec\u30fb\u63f4\u4ea4", value: "\u61c9\u53ec\u30fb\u63f4\u4ea4" },
            { title: "\u611f\u8c22\u796d", value: "\u611f\u8b1d\u796d" },
            { title: "\u5973\u5b66\u751f", value: "\u5973\u5b78\u751f" },
            { title: "\u5973\u4ec6", value: "\u5973\u50d5" },
            { title: "\u5408\u8f91", value: "\u5408\u8f2f" },
            { title: "M\u7537\u30fbM\u5973", value: "M\u7537\u30fbM\u5973" }
          ],
          value: "\u7f8e\u811a\u30fb\u7f8e\u817f",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u989c\u503c\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["appearance"],
          },
          enumOptions: [
            { title: "\u7f8e\u4e73", value: "\u7f8e\u4e73" },
            { title: "\u6027\u611f", value: "\u6027\u611f" },
            { title: "\u5de8\u4e73", value: "\u5de8\u4e73" },
            { title: "\u7f8e\u811a", value: "\u7f8e\u8173" },
            { title: "\u82d7\u6761", value: "\u82d7\u689d" },
            { title: "\u7f8e\u81c0", value: "\u7f8e\u81c0" },
            { title: "\u7f8e\u817f", value: "\u7f8e\u817f" },
            { title: "\u8272\u767d", value: "\u8272\u767d" },
            { title: "\u5927\u5c41\u80a1", value: "\u5927\u5c41\u80a1" },
            { title: "\u9ad8\u989c\u503c", value: "\u9ad8\u984f\u503c" },
            { title: "\u6e05\u7eaf", value: "\u6e05\u7d14" },
            { title: "\u660e\u661f\u8138", value: "\u660e\u661f\u81c9" },
            { title: "\u5c0f\u53ea\u9a6c", value: "\u5c0f\u96bb\u99ac" },
            { title: "\u65e0\u6bdb", value: "\u7121\u6bdb" },
            { title: "\u77ed\u53d1", value: "\u77ed\u9aee" },
            { title: "\u4e30\u6ee1", value: "\u8c50\u6eff" },
            { title: "\u9ad8\u59b9", value: "\u9ad8\u59b9" },
            { title: "\u8d85\u7206\u4e73", value: "\u8d85\u7206\u4e73" },
            { title: "\u8d2b\u4e73", value: "\u8ca7\u4e73" },
            { title: "\u80a4\u9ed1", value: "\u819a\u9ed1" },
            { title: "\u5927\u4e73\u6655", value: "\u5927\u4e73\u6688" },
            { title: "\u808c\u8089", value: "\u808c\u8089" },
            { title: "\u80d6\u5973\u4eba", value: "\u80d6\u5973\u4eba" },
            { title: "\u53cc\u9a6c\u5c3e", value: "\u96d9\u99ac\u5c3e" },
            { title: "\u9b03\u6bdb", value: "\u9b03\u6bdb" },
            { title: "\u5927\u9e21\u5df4", value: "\u5927\u96de\u5df4" },
            { title: "\u523a\u9752\u7eb9\u8eab", value: "\u523a\u9752\u7d0b\u8eab" },
            { title: "\u6df7\u8840", value: "\u6df7\u8840" },
            { title: "\u7ae5\u989c", value: "\u7ae5\u9854" },
            { title: "\u4e73\u91d8\u3001\u7a7f\u5b54\u3001\u4e73\u74b0", value: "\u4e73\u91d8\u3001\u7a7f\u5b54\u3001\u4e73\u74b0" }
          ],
          value: "\u7f8e\u4e73",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u7c7b\u578b\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["genre"],
          },
          enumOptions: [
            { title: "\u5267\u60c5", value: "\u5287\u60c5" },
            { title: "\u7f8e\u5c11\u5973\u7535\u5f71", value: "\u7f8e\u5c11\u5973\u96fb\u5f71" },
            { title: "\u5f62\u8c61\u4ff1\u4e50\u90e8", value: "\u5f62\u8c61\u4ff1\u6a02\u90e8" },
            { title: "\u4f01\u753b", value: "\u4f01\u756b" },
            { title: "\u771f\u5b9e\u62cd\u6444", value: "\u771f\u5be6\u62cd\u651d" },
            { title: "\u611f\u5b98\u4f5c\u54c1", value: "\u611f\u5b98\u4f5c\u54c1" },
            { title: "\u5355\u4f53\u4f5c\u54c1", value: "\u55ae\u9ad4\u4f5c\u54c1" },
            { title: "\u56fd\u4ea7", value: "\u570b\u7522" },
            { title: "\u5947\u95fb\u8da3\u4e8b", value: "\u5947\u805e\u8da3\u4e8b" },
            { title: "4K", value: "4K" },
            { title: "\u771f\u4eba\u79c0", value: "\u771f\u4eba\u79c0" },
            { title: "\u51fa\u9053\u4f5c\u54c1", value: "\u51fa\u9053\u4f5c\u54c1" },
            { title: "\u7d20\u4eba\u4f5c\u54c1", value: "\u7d20\u4eba\u4f5c\u54c1" },
            { title: "\u9b54\u9b3c\u7cfb", value: "\u9b54\u9b3c\u7cfb" },
            { title: "\u5947\u5f02\u7684", value: "\u5947\u7570\u7684" },
            { title: "\u4e3b\u89c2\u89c6\u89d2", value: "\u4e3b\u89c0\u8996\u89d2" },
            { title: "\u7eaa\u5ff5\u4f5c", value: "\u7d00\u5ff5\u4f5c" },
            { title: "4\u5c0f\u6642\u4ee5\u4e0a\u4f5c\u54c1", value: "4\u5c0f\u6642\u4ee5\u4e0a\u4f5c\u54c1" },
            { title: "\u7cbe\u9009\u7efc\u5408", value: "\u7cbe\u9078\u7d9c\u5408" },
            { title: "\u7cbe\u9009\u5927\u5408\u8f91", value: "\u7cbe\u9078\u5927\u5408\u8f2f" },
            { title: "\u7eaa\u5f55\u7247", value: "\u7d00\u9304\u7247" },
            { title: "\u6545\u4e8b\u96c6", value: "\u6545\u4e8b\u96c6" },
            { title: "\u4e8c\u6b21\u5143", value: "\u4e8c\u6b21\u5143" },
            { title: "\u6570\u4f4d\u9a6c\u8d5b\u514b", value: "\u6578\u4f4d\u99ac\u8cfd\u514b" },
            { title: "\u6697\u9ed1\u7cfb", value: "\u6697\u9ed1\u7cfb" },
            { title: "\u4e1a\u4f59", value: "\u696d\u9918" },
            { title: "\u81ea\u62cd\u6027\u611b", value: "\u81ea\u62cd\u6027\u611b" },
            { title: "\u5c40\u90e8\u7279\u5199", value: "\u5c40\u90e8\u7279\u5beb" },
            { title: "\u7efc\u827a", value: "\u7d9c\u85dd" },
            { title: "\u539f\u4f5c\u6539\u7de8", value: "\u539f\u4f5c\u6539\u7de8" },
            { title: "\u65e0\u7801\u6d41\u51fa", value: "\u7121\u78bc\u6d41\u51fa" },
            { title: "\u65e0\u505a\u7231\u573a\u9762", value: "\u7121\u505a\u611b\u5834\u9762" },
            { title: "\u6076\u641e", value: "\u60e1\u641e" },
            { title: "\u6f2b\u753b\u6539\u7f16", value: "\u6f2b\u756b\u6539\u7de8" },
            { title: "\u5077\u62cd\u30fb\u76d7\u6444", value: "\u5077\u62cd\u30fb\u76dc\u64ae" },
            { title: "\u540e\u5bab\u7cfb", value: "\u5f8c\u5bae\u7cfb" },
            { title: "\u8584\u7801", value: "\u8584\u78bc" },
            { title: "\u9b3c\u755c\u7247", value: "\u9b3c\u755c\u7247" },
            { title: "\u65e0\u7801\u7834\u89e3", value: "\u7121\u78bc\u7834\u89e3" },
            { title: "ASMR\u9885\u5185\u9ad8\u6f6e", value: "ASMR\u9871\u5185\u9ad8\u6f6e" },
            { title: "\u89e3\u7981\u4f5c", value: "\u89e3\u7981\u4f5c" },
            { title: "\u4e2d\u65e5\u5408\u4f5c", value: "\u4e2d\u65e5\u5408\u4f5c" },
            { title: "\u5973\u6027\u5411", value: "\u5973\u6027\u5411" },
            { title: "\u6559\u5b66", value: "\u6559\u5b78" },
            { title: "\u9000\u4f11\u4f5c\u54c1", value: "\u9000\u4f11\u4f5c\u54c1" },
            { title: "\u641e\u7b11\u30fb\u6a21\u4eff", value: "\u641e\u7b11\u30fb\u6a21\u4eff" },
            { title: "\u4e0d\u9732\u8138", value: "\u4e0d\u9732\u81c9" },
            { title: "\u552f\u7f8e\u5199\u771f", value: "\u552f\u7f8e\u5beb\u771f" },
            { title: "\u6c11\u56fd", value: "\u6c11\u570b" },
            { title: "\u53e4\u98ce", value: "\u53e4\u98a8" },
            { title: "\u5199\u771f\u5076\u50cf", value: "\u5beb\u771f\u5076\u50cf" },
            { title: "\u5fc3\u7406\u60ca\u609a", value: "\u5fc3\u7406\u9a5a\u609a" },
            { title: "\u7279\u6548", value: "\u7279\u6548" },
            { title: "\u8282\u65e5\u9650\u5b9a", value: "\u7bc0\u65e5\u9650\u5b9a" },
            { title: "\u88ab\u59b9\u5b50\u642d\u8baa", value: "\u88ab\u59b9\u5b50\u642d\u8a15" },
            { title: "\u70ed\u70b9\u6539\u7f16", value: "\u71b1\u9ede\u6539\u7de8" }
          ],
          value: "\u5287\u60c5",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u5267\u60c5\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["plot"],
          },
          enumOptions: [
            { title: "NTR", value: "NTR" },
            { title: "\u51fa\u8f68", value: "\u51fa\u8ecc" },
            { title: "\u8273\u9047", value: "\u8277\u9047" },
            { title: "\u4e0d\u4f26", value: "\u4e0d\u502b" },
            { title: "\u52fe\u5f15\u30fb\u8bf1\u60d1", value: "\u52fe\u5f15\u30fb\u8a98\u60d1" },
            { title: "\u7eaf\u7cb9\u7684\u6b32\u671b", value: "\u7d14\u7cb9\u7684\u617e\u671b" },
            { title: "\u6309\u6469\u30fb\u7f8e\u5bb9", value: "\u6309\u6469\u30fb\u7269\u7406\u6cbb\u7642\u30fb\u7f8e\u5bb9" },
            { title: "\u8f6e\u5978", value: "\u8f2a\u59e6" },
            { title: "\u4e71\u4f26", value: "\u4e82\u502b" },
            { title: "\u5973\u4f18\u8bbf\u8c08", value: "\u5973\u512a\u8a2a\u8ac7" },
            { title: "\u80c1\u8feb\u505a\u7231", value: "\u8105\u8feb\u505a\u611b" },
            { title: "\u5077\u7a83", value: "\u5077\u7aca" },
            { title: "\u5be2\u53d6", value: "\u5be2\u53d6" },
            { title: "\u730e\u8273", value: "\u7375\u8c54" },
            { title: "\u7ea6\u70ae", value: "\u7d04\u70ae" },
            { title: "\u6821\u56ed\u751f\u6d3b", value: "\u6821\u5712\u751f\u6d3b" },
            { title: "\u5a9a\u836f\u30fb\u8ff7\u836f", value: "\u5a9a\u85e5\u30fb\u8ff7\u85e5" },
            { title: "\u8ff7\u5978", value: "\u8ff7\u59e6" },
            { title: "\u7eaf\u7231\u30fb\u604b\u7231", value: "\u7d14\u611b\u30fb\u6200\u611b" },
            { title: "\u65c5\u884c", value: "\u65c5\u884c" },
            { title: "\u76d1\u7981", value: "\u76e3\u7981" },
            { title: "\u51fa\u5dee", value: "\u51fa\u5dee" },
            { title: "\u7c89\u4e1d\u798f\u5229", value: "\u7c89\u7d72\u798f\u5229" },
            { title: "\u62a5\u590d", value: "\u5831\u5fa9" },
            { title: "\u9152\u540e\u4e71\u6027", value: "\u9152\u5f8c\u4e82\u6027" },
            { title: "\u6e38\u620fCOSPLAY", value: "\u6e38\u6232COSPLAY" },
            { title: "\u6c34\u7597\u30fb\u6ce1\u6ce1\u6d74", value: "\u6c34\u7642\u30fb\u6ce1\u6ce1\u6d74" },
            { title: "\u7ed1\u67b6", value: "\u7d81\u67b6" },
            { title: "\u770b\u75c5\u30fb\u4f4f\u9662", value: "\u770b\u75c5\u30fb\u4f4f\u9662" },
            { title: "\u52a0\u73ed", value: "\u52a0\u73ed" },
            { title: "\u8eab\u4f53\u6362\u4e1a\u52a1", value: "\u8eab\u9ad4\u63db\u696d\u52d9" },
            { title: "\u6b20\u503a\u8089\u507f", value: "\u6b20\u50b5\u8089\u511f" },
            { title: "\u79c1\u623f\u6444\u5f71", value: "\u79c1\u623f\u651d\u5f71" },
            { title: "\u540c\u4f4f\u4e00\u5c4b", value: "\u540c\u4f4f\u4e00\u5c4b\u30fb\u76f8\u90e8\u5c4b" },
            { title: "\u805a\u4f1a\u30fbPARTY", value: "\u805a\u6703\u30fbPARTY" },
            { title: "\u804c\u573a", value: "\u8077\u5834" },
            { title: "\u642d\u8baa", value: "\u642d\u8a15" },
            { title: "\u4e0a\u95e8\u798f\u5229", value: "\u4e0a\u9580\u798f\u5229" },
            { title: "\u745c\u73c8\u00b7\u5065\u8eab", value: "\u745c\u73c8\u00b7\u5065\u8eab" },
            { title: "\u5c3e\u968f", value: "\u5c3e\u7926" },
            { title: "\u8fd0\u52a8", value: "\u904b\u52d5" },
            { title: "\u8857\u5934\u798f\u5229", value: "\u8857\u982d\u798f\u5229" },
            { title: "\u9080\u8bf7\u51fd", value: "\u9080\u8acb\u51fd" },
            { title: "\u63a2\u4eb2", value: "\u63a2\u89aa" },
            { title: "\u65b0\u4eba\u9762\u8bd5", value: "\u65b0\u4eba\u9762\u8a66" },
            { title: "\u8c22\u7f6a", value: "\u8b1d\u7f6a" },
            { title: "\u592b\u59bb\u4ea4\u6362", value: "\u592b\u59bb\u4ea4\u63db" },
            { title: "\u91ce\u6218", value: "\u91ce\u6230" },
            { title: "\u6218\u6597\u884c\u52a8", value: "\u6230\u9b25\u884c\u52a8" },
            { title: "\u8df3\u821e", value: "\u8df3\u821e" },
            { title: "\u540c\u5b66\u805a\u4f1a", value: "\u540c\u5b78\u805a\u6703" },
            { title: "\u76f4\u64ad", value: "\u76f4\u64ad" },
            { title: "\u5973\u4f18\u9762\u8bd5", value: "\u5973\u512a\u9762\u8a66" },
            { title: "\u770b\u623f", value: "\u770b\u623f" },
            { title: "\u4e0a\u95e8\u5bb6\u8bbf", value: "\u4e0a\u9580\u5bb6\u8a2a" },
            { title: "\u96c6\u8bad", value: "\u96c6\u8a13" },
            { title: "\u4e0a\u95e8\u63a8\u9500", value: "\u4e0a\u9580\u63a8\u92b7" },
            { title: "\u6361\u5c38", value: "\u64bf\u5c38" },
            { title: "\u4e27\u592b", value: "\u55aa\u592b" },
            { title: "\u65b0\u95fb\u91c7\u8bbf", value: "\u65b0\u805e\u91c7\u8a2a" },
            { title: "\u88f8\u4f53\u7d20\u63cf", value: "\u88f8\u9ad4\u7d20\u63cf" },
            { title: "\u7537\u5973\u4e92\u6362", value: "\u7537\u5973\u4e92\u63db" },
            { title: "\u683c\u6597", value: "\u683c\u9b25" },
            { title: "\u795e\u8bdd\u6545\u4e8b", value: "\u795e\u8a71\u6545\u4e8b" },
            { title: "\u7535\u7ade", value: "\u96fb\u7af6" },
            { title: "\u5973\u4f53\u76db", value: "\u5973\u9ad4\u76db" }
          ],
          value: "NTR",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
         //\u804c\u4e1a\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["occupation"],
          },
          enumOptions: [
            { title: "\u98ce\u4fd7\u5a18", value: "\u98a8\u4fd7\u5a18" },
            { title: "\u6309\u6469\u5973\u90ce", value: "\u6309\u6469\u5973\u90ce" },
            { title: "\u5973\u6559\u5e08", value: "\u5973\u6559\u5e2b" },
            { title: "\u89d2\u8272\u626e\u6f14", value: "\u89d2\u8272\u626e\u6f14" },
            { title: "\u62a4\u58eb", value: "\u8b77\u58eb" },
            { title: "\u996d\u5e97\u5c0f\u59d0\u30fb\u63f4\u4ea4\u59b9", value: "\u98ef\u5e97\u5c0f\u59d0\u30fb\u63f4\u4ea4\u59b9" },
            { title: "\u5199\u771f\u5973\u90ce", value: "\u5beb\u771f\u5973\u90ce" },
            { title: "\u5076\u50cf", value: "\u5076\u50cf" },
            { title: "\u8fd0\u52a8\u5973\u5b69", value: "\u904b\u52d5\u5973\u5b69" },
            { title: "\u5973\u827a\u4eba\u30fb\u5973\u661f", value: "\u5973\u85dd\u4eba\u30fb\u5973\u661f" },
            { title: "\u804c\u5458", value: "\u8077\u54e1" },
            { title: "\u5b85\u7537\u30fb\u5b85\u5973", value: "\u5b85\u7537\u30fb\u5b85\u5973" },
            { title: "\u5bb6\u5ead\u6559\u5e08", value: "\u5bb6\u5ead\u6559\u5e2b" },
            { title: "\u5973\u79d8\u4e66", value: "\u5973\u79d8\u66f8" },
            { title: "\u670d\u52a1\u751f", value: "\u670d\u52d9\u751f" },
            { title: "\u7f51\u7edc\u7ea2\u4eba", value: "\u7db2\u8def\u7d05\u4eba" },
            { title: "\u5973\u4e3b\u6301\u30fb\u4e3b\u64ad", value: "\u5973\u4e3b\u6301\u30fb\u4e3b\u64ad" },
            { title: "\u4f20\u64ad\u59b9", value: "\u50b3\u64ad\u59b9" },
            { title: "\u7a7a\u670d", value: "\u7a7a\u670d" },
            { title: "\u5176\u4ed6\u804c\u4e1a", value: "\u5176\u4ed6\u8077\u696d" },
            { title: "\u5bb6\u653f\u5987", value: "\u5bb6\u653f\u5a66" },
            { title: "\u6a21\u7279\u513f", value: "\u6a21\u7279\u5152" },
            { title: "\u5973\u5974", value: "\u5973\u5974" },
            { title: "\u8001\u677f\u5a18\uff0c\u5973\u4e3b\u4eba", value: "\u8001\u95c6\u5a18\uff0c\u5973\u4e3b\u4eba" },
            { title: "\u5065\u8eab\u6559\u7ec3", value: "\u5065\u8eab\u6559\u7df4" },
            { title: "\u9ed1\u5e2e", value: "\u9ed1\u5e6b" },
            { title: "\u5973\u533b\u751f", value: "\u5973\u91ab\u751f" },
            { title: "\u6ce1\u59ec", value: "\u6ce1\u59ec" },
            { title: "\u5973\u4e1a\u52a1", value: "\u5973\u696d\u52d9" },
            { title: "\u9ed1\u4eba\u7537\u4f18", value: "\u9ed1\u4eba\u7537\u512a" },
            { title: "\u5973\u9b3c\u30fb\u5973\u5996", value: "\u5973\u9b3c\u30fb\u5973\u5996" },
            { title: "\u5973\u6027\u62a4\u7406", value: "\u5973\u6027\u8b77\u7406" },
            { title: "\u623f\u4ea7\u4e2d\u4ecb", value: "\u623f\u7522\u4e2d\u4ecb" },
            { title: "\u767d\u4eba\u5973\u4f18", value: "\u767d\u4eba\u5973\u512a" },
            { title: "\u8d5b\u8f66\u5973\u90ce", value: "\u8cfd\u8eca\u5973\u90ce" },
            { title: "\u5973\u8d3c", value: "\u5973\u8cca" },
            { title: "\u821e\u5973", value: "\u821e\u5973" },
            { title: "\u56fd\u4ea7\u5973\u4f18", value: "\u570b\u7522\u5973\u512a" },
            { title: "\u5973\u683c\u6597\u5bb6", value: "\u5973\u683c\u9b25\u5bb6" },
            { title: "\u7f6a\u72af\u30fb\u9003\u72af", value: "\u7f6a\u72af\u30fb\u9003\u72af" },
            { title: "\u5ba2\u670d\u5c0f\u59d0", value: "\u5ba2\u670d\u5c0f\u59d0" },
            { title: "\u6e38\u6cf3\u6559\u7ec3", value: "\u6e38\u6cf3\u6559\u7df4" },
            { title: "\u5973\u8b66", value: "\u5973\u8b66" },
            { title: "\u966a\u9152\u5973", value: "\u966a\u9152\u5973" },
            { title: "\u4fee\u7406\u5de5", value: "\u4fee\u7406\u5de5" },
            { title: "\u5e7c\u7a1a\u56ed\u8001\u5e08", value: "\u5e7c\u7a1a\u5712\u8001\u5e2b" },
            { title: "\u5973\u796d\u53f8", value: "\u5973\u796d\u53f8" },
            { title: "DJ", value: "DJ" },
            { title: "\u62c9\u62c9\u961f", value: "\u62c9\u62c9\u968a" },
            { title: "\u5b9e\u4e60\u751f", value: "\u5be6\u7fd2\u751f" },
            { title: "\u821e\u8e48\u8001\u5e08", value: "\u821e\u8e48\u8001\u5e2b" },
            { title: "\u8377\u5b98", value: "\u8377\u5b98" },
            { title: "\u5973\u8bb0\u8005", value: "\u5973\u8a18\u8005" },
            { title: "\u6e05\u626b\u5458", value: "\u6e05\u6383\u54e1" },
            { title: "\u5973\u95f4\u8c0d\u30fb\u7279\u5de5", value: "\u5973\u9593\u8adc\u30fb\u7279\u5de5" },
            { title: "\u5973\u673a\u5668\u4eba", value: "\u5973\u6a5f\u5668\u4eba" },
            { title: "\u5973\u6218\u58eb", value: "\u5973\u6230\u58eb" },
            { title: "\u6027\u7231\u5a03\u5a03", value: "\u6027\u611b\u5a03\u5a03" },
            { title: "\u8db3\u7403\u5b9d\u8d1d", value: "\u8db3\u7403\u5bf6\u8c9d" }
          ],
          value: "\u98a8\u4fd7\u5a18",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u5173\u7cfb\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["relationship"],
          },
          enumOptions: [
            { title: "\u5973\u540c\u4e8b", value: "\u5973\u540c\u4e8b" },
            { title: "\u59d0\u59d0\u30fb\u59b9\u59b9", value: "\u59d0\u59d0\u30fb\u59b9\u59b9" },
            { title: "\u5973\u53cb\u30fb\u59bb\u5b50", value: "\u5973\u53cb\u30fb\u59bb\u5b50" },
            { title: "\u5973\u4e0a\u53f8", value: "\u5973\u4e0a\u53f8" },
            { title: "\u90bb\u5c45", value: "\u9130\u5c45" },
            { title: "\u516c\u516c", value: "\u516c\u516c" },
            { title: "\u59d0\u5f1f\u30fb\u5144\u59b9", value: "\u59d0\u5f1f\u30fb\u5144\u59b9" },
            { title: "\u513f\u5ab3", value: "\u5152\u5ab3" },
            { title: "\u9752\u6885\u7af9\u9a6c", value: "\u9752\u6885\u7af9\u99ac" },
            { title: "\u540c\u5b66", value: "\u540c\u5b78" },
            { title: "\u5ac2\u5ac2", value: "\u5ac2\u5ac2" },
            { title: "\u6bcd\u4eb2", value: "\u6bcd\u89aa" },
            { title: "\u7ee7\u6bcd", value: "\u7e7c\u6bcd" },
            { title: "\u6bcd\u5b50", value: "\u6bcd\u5b50" },
            { title: "\u5973\u53cb\u59d0\u59d0", value: "\u5973\u53cb\u59d0\u59d0" },
            { title: "\u5cb3\u6bcd", value: "\u5cb3\u6bcd" },
            { title: "\u7ee7\u7236", value: "\u7e7c\u7236" },
            { title: "\u5c0f\u59e8\u5b50", value: "\u5c0f\u59e8\u5b50" },
            { title: "\u8868\u59d0\u30fb\u8868\u59b9", value: "\u8868\u59d0\u30fb\u8868\u59b9" },
            { title: "\u53d4\u53d4\u30fb\u4f84\u5973", value: "\u53d4\u53d4\u30fb\u59ea\u5973" },
            { title: "\u5c0f\u4e09\u30fb\u60c5\u4eba", value: "\u5c0f\u4e09\u30fb\u60c5\u4eba" },
            { title: "\u7236\u5973", value: "\u7236\u5973" },
            { title: "\u670b\u53cb\u5973\u53cb\u30fb\u59bb\u5b50", value: "\u670b\u53cb\u5973\u53cb\u30fb\u59bb\u5b50" },
            { title: "\u4e0b\u5c5e\u5973\u53cb\u30fb\u59bb\u5b50", value: "\u4e0b\u5c6c\u5973\u53cb\u30fb\u59bb\u5b50" },
            { title: "\u4e0a\u53f8\u5973\u53cb\u30fb\u59bb\u5b50", value: "\u4e0a\u53f8\u5973\u53cb\u30fb\u59bb\u5b50" },
            { title: "\u5973\u53cb\u95fa\u871c", value: "\u5973\u53cb\u95a8\u871c" },
            { title: "\u5973\u513f", value: "\u5973\u5152" },
            { title: "\u672a\u4ea1\u4eba\u30fb\u5be1\u5987", value: "\u672a\u4ea1\u4eba\u30fb\u5be1\u5a66" },
            { title: "\u5a76\u5a76", value: "\u5b38\u5b38" },
            { title: "\u670b\u53cb\u6bcd\u4eb2", value: "\u670b\u53cb\u6bcd\u89aa" },
            { title: "\u540c\u4e8b\u5973\u53cb\u30fb\u59bb\u5b50", value: "\u540c\u4e8b\u5973\u53cb\u30fb\u59bb\u5b50" },
            { title: "\u6bcd\u5973", value: "\u6bcd\u5973" },
            { title: "\u5b66\u59d0\u30fb\u5b66\u59b9", value: "\u5b78\u59d0\u30fb\u5b78\u59b9" },
            { title: "\u6bcd\u4eb2\u7684\u670b\u53cb", value: "\u6bcd\u89aa\u7684\u670b\u53cb" },
            { title: "\u963f\u59e8\u30fb\u4f84\u5b50", value: "\u963f\u59e8\u30fb\u4f84\u5b50" },
            { title: "\u5c0f\u59e8\u30fb\u59d1\u59d1", value: "\u5c0f\u59e8\u30fb\u59d1\u59d1" },
            { title: "\u7236\u4eb2", value: "\u7236\u89aa" },
            { title: "\u5973\u79df\u5ba2", value: "\u5973\u79df\u5ba2" },
            { title: "\u5ba4\u53cb", value: "\u5ba4\u53cb" },
            { title: "\u592b\u59bb", value: "\u592b\u59bb" },
            { title: "\u5973\u623f\u4e1c", value: "\u5973\u623f\u6771" },
            { title: "\u5f1f\u5ab3", value: "\u5f1f\u5ab3" }
          ],
          value: "\u5973\u540c\u4e8b",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u8863\u7740\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["outfit"],
          },
          enumOptions: [
            { title: "\u9ed1\u4e1d", value: "\u9ed1\u7d72" },
            { title: "\u60c5\u8da3\u5167\u8863", value: "\u60c5\u8da3\u5167\u8863" },
            { title: "\u5185\u8863", value: "\u5167\u8863" },
            { title: "JK\u6821\u670d", value: "JK\u6821\u670d" },
            { title: "\u5236\u670d", value: "\u5236\u670d" },
            { title: "\u7325\u4eb5\u7a7f\u7740", value: "\u7325\u893b\u7a7f\u8457" },
            { title: "\u7f51\u889c", value: "\u7db2\u896a" },
            { title: "COSPLAY\u670d\u9970", value: "COSPLAY\u670d\u98fe" },
            { title: "\u8fc7\u819d\u889c\u30fb\u5c0f\u817f\u889c", value: "\u904e\u819d\u896a\u30fb\u5c0f\u817f\u896a" },
            { title: "\u8089\u4e1d", value: "\u8089\u7d72" },
            { title: "\u767d\u4e1d", value: "\u767d\u7d72" },
            { title: "\u548c\u670d\u30fb\u6d74\u8863\u30fb\u4e27\u670d", value: "\u548c\u670d\u30fb\u6d74\u8863\u30fb\u55aa\u670d" },
            { title: "\u773c\u955c", value: "\u773c\u93e1" },
            { title: "\u5973\u4ec6\u5236\u670d", value: "\u5973\u50d5\u5236\u670d" },
            { title: "\u6cf3\u88c5", value: "\u6cf3\u88dd" },
            { title: "\u9ad8\u8ddf\u978b", value: "\u9ad8\u8ddf\u978b" },
            { title: "\u8fd0\u52a8\u670d\u88c5", value: "\u904b\u52d5\u670d\u88dd" },
            { title: "\u5154\u5973\u90ce\u88c5\u626e", value: "\u5154\u5973\u90ce\u599d\u626e" },
            { title: "\u62a4\u58eb\u5236\u670d", value: "\u8b77\u58eb\u5236\u670d" },
            { title: "\u7d27\u8eab\u8863", value: "\u7dca\u8eab\u8863" },
            { title: "\u77ed\u88d9\u30fb\u8ff7\u4f60\u88d9", value: "\u77ed\u88d9\u30fb\u8ff7\u4f60\u88d9" },
            { title: "\u6bd4\u57fa\u5c3c", value: "\u6bd4\u57fa\u5c3c" },
            { title: "\u8499\u9762\u30fb\u9762\u7f69", value: "\u8499\u9762\u30fb\u9762\u7f69" },
            { title: "\u5b8c\u5168\u7740\u8863", value: "\u5b8c\u5168\u7740\u8863" },
            { title: "\u6027\u611f\u7761\u8863", value: "\u6027\u611f\u7761\u8863" },
            { title: "\u725b\u4ed4\u88e4", value: "\u725b\u4ed4\u8932" },
            { title: "\u732b\u8033\u88c5\u9970", value: "\u8c93\u8033\u88dd\u98fe" },
            { title: "\u4e2d\u56ef\u670d\u88c5", value: "\u4e2d\u56ef\u670d\u88dd" },
            { title: "\u9774\u5b50", value: "\u9774\u5b50" },
            { title: "\u88f8\u4f53\u56f4\u88d9", value: "\u88f8\u9ad4\u570d\u88d9" },
            { title: "\u7a7a\u59d0\u5236\u670d", value: "\u7a7a\u59d0\u5236\u670d" },
            { title: "\u8eab\u4f53\u610f\u8bc6", value: "\u8eab\u9ad4\u610f\u8b58" },
            { title: "\u53e3\u7f69", value: "\u53e3\u7f69" },
            { title: "\u8b66\u5bdf\u5236\u670d", value: "\u8b66\u5bdf\u5236\u670d" },
            { title: "\u533b\u751f\u5236\u670d", value: "\u91ab\u751f\u88fd\u670d" },
            { title: "\u53e4\u88c5", value: "\u53e4\u88dd" },
            { title: "\u5a5a\u7eb1", value: "\u5a5a\u7d17" },
            { title: "\u7761\u8863", value: "\u7761\u8863" },
            { title: "\u4f53\u64cd\u670d\u88c5", value: "\u9ad4\u64cd\u670d\u88dd" }
          ],
          value: "\u9ed1\u7d72",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u7279\u5f81\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["characteristics"],
          },
          enumOptions: [
            { title: "\u8361\u5987", value: "\u8569\u5a66" },
            { title: "\u7f8e\u4eba", value: "\u7f8e\u4eba" },
            { title: "\u75f4\u5973", value: "\u7661\u5973" },
            { title: "\u5c11\u5973", value: "\u5c11\u5973" },
            { title: "\u86ee\u6a2a\u5a07\u7f9e", value: "\u883b\u6a6b\u5b0c\u7f9e" },
            { title: "\u7f8e\u4eba\u59bb", value: "\u7f8e\u4eba\u59bb" },
            { title: "\u6781\u54c1\u7f8e\u4eba", value: "\u6975\u54c1\u7f8e\u4eba" },
            { title: "\u6e05\u695a\u7cfb", value: "\u6e05\u695a\u7cfb" },
            { title: "\u53d8\u6001", value: "\u8b8a\u614b" },
            { title: "\u5fa1\u59d0\u7cfb", value: "\u5fa1\u59d0\u7cfb" },
            { title: "\u6821\u82b1", value: "\u6821\u82b1" },
            { title: "\u8001\u5934\u5b50", value: "\u8001\u982d\u5b50" },
            { title: "\u62dc\u91d1\u5973", value: "\u62dc\u91d1\u5973" },
            { title: "\u91ce\u6027", value: "\u91ce\u6027" },
            { title: "\u82e5\u59bb", value: "\u82e5\u59bb" },
            { title: "\u7eff\u8336\u5a4a", value: "\u7da0\u8336\u5a4a" },
            { title: "\u9a9a\u6270", value: "\u9a37\u64fe" },
            { title: "\u5742\u9053\u7cfb", value: "\u962a\u9053\u7cfb" },
            { title: "\u53db\u9006\u5c11\u5973", value: "\u53db\u9006\u5c11\u5973" },
            { title: "\u6e2f\u533a\u5973\u5b50", value: "\u6e2f\u5340\u5973\u5b50" },
            { title: "\u5730\u5473", value: "\u5730\u5473" },
            { title: "\u5973\u795e", value: "\u5973\u795e" },
            { title: "\u5fc3\u673a\u5a4a", value: "\u5fc3\u6a5f\u5a4a" },
            { title: "\u50b2\u5a07", value: "\u50b2\u5b0c" },
            { title: "\u4e09\u5341\u8def", value: "\u4e09\u5341\u8def" },
            { title: "\u6587\u827a\u5973", value: "\u6587\u85dd\u5973" },
            { title: "\u8d35\u5987", value: "\u8cb4\u5a66" },
            { title: "\u5973\u738b", value: "\u5973\u738b" },
            { title: "\u5904\u7537", value: "\u8655\u7537" },
            { title: "\u5730\u96f7\u7cfb", value: "\u5730\u96f7\u7cfb" },
            { title: "\u6b63\u7edf\u6d3e", value: "\u6b63\u7d71\u6d3e" },
            { title: "\u56db\u5341\u8def", value: "\u56db\u5341\u8def" },
            { title: "\u65b0\u5a18", value: "\u65b0\u5a18" },
            { title: "\u5927\u5c0f\u59d0", value: "\u5927\u5c0f\u59d0" },
            { title: "\u5973\u540c\u6027\u604b", value: "\u5973\u540c\u6027\u6200" },
            { title: "\u662d\u548c\u7cfb", value: "\u662d\u548c\u7cfb" },
            { title: "\u5e9f\u9752", value: "\u5ee2\u9752" },
            { title: "\u4e2d\u6027", value: "\u4e2d\u6027" },
            { title: "\u6b63\u592a", value: "\u6b63\u592a" },
            { title: "\u795e\u5f85\u5a18", value: "\u795e\u5f85\u5a18" },
            { title: "\u8001\u592a\u5a46", value: "\u8001\u592a\u5a46" },
            { title: "\u5904\u5973", value: "\u8655\u5973" },
            { title: "\u53cc\u80de\u80ce\u59d0\u59b9", value: "\u96d9\u80de\u80ce\u59d0\u59b9" },
            { title: "\u7530\u820d\u5a18", value: "\u7530\u820d\u5a18" },
            { title: "\u53d8\u6027\u8005", value: "\u8b8a\u6027\u8005" }
          ],
          value: "\u8569\u5a66",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u4e3b\u9898\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["theme"],
          },
          enumOptions: [
            { title: "\u6deb\u4e71", value: "\u6deb\u4e82" },
            { title: "\u4e71\u4ea4\u2022\u7fa4P", value: "\u4e82\u4ea4%20\u2022%20\u7fa4P" },
            { title: "3P\u30fb4P", value: "3P\u30fb4P" },
            { title: "\u6309\u6469\u68d2", value: "\u6309\u6469\u68d2" },
            { title: "\u4e24\u7537\u4e00\u5973", value: "\u5169\u7537\u4e00\u5973" },
            { title: "\u591aP", value: "\u591aP" },
            { title: "\u51cc\u8fb1", value: "\u51cc\u8fb1" },
            { title: "\u62b9\u6cb9", value: "\u62b9\u6cb9" },
            { title: "\u8c03\u6559", value: "\u8abf\u6559" },
            { title: "\u62d8\u675f\u30fb\u62f7\u95ee", value: "\u62d8\u675f\u30fb\u62f7\u554f" },
            { title: "\u6346\u7ed1", value: "\u6346\u7d81" },
            { title: "\u6deb\u8bed", value: "\u6deb\u8a9e" },
            { title: "SM", value: "SM" },
            { title: "\u53cc\u98de", value: "\u96d9\u98db" },
            { title: "\u4e24\u5973\u4e00\u7537", value: "\u5169\u5973\u4e00\u7537" },
            { title: "\u8df3\u86cb", value: "\u8df3\u86cb" },
            { title: "\u653e\u5c3f", value: "\u653e\u5c3f" },
            { title: "\u6027\u9a9a\u6270", value: "\u6027\u9a37\u64fe" },
            { title: "\u8bf1\u9a97\u5973\u6027", value: "\u8a98\u9a19\u5973\u6027" },
            { title: "\u6deb\u8361\u30fb\u786c\u6838", value: "\u6deb\u8569\u30fb\u786c\u6838" },
            { title: "\u5077\u7aa5", value: "\u5077\u7aba" },
            { title: "\u5927\u4e71\u4ea4", value: "\u5927\u4e82\u4ea4" },
            { title: "\u4e24\u7537\u4e24\u5973", value: "\u5169\u7537\u5169\u5973" },
            { title: "\u5728\u4e08\u592b\u9762\u524d\u88ab\u64cd", value: "\u5728\u4e08\u592b\u9762\u524d\u88ab\u64cd" },
            { title: "\u8272\u8bf1", value: "\u8272\u8a98" },
            { title: "\u4e00\u7537\u591a\u5973", value: "\u4e00\u7537\u591a\u5973" },
            { title: "\u5bfc\u5c3f", value: "\u5c0e\u5c3f" },
            { title: "\u53e3\u7403", value: "\u53e3\u7403" },
            { title: "\u9732\u51fa", value: "\u9732\u51fa" },
            { title: "\u5373\u65f6\u63d2\u5165", value: "\u5373\u6642\u63d2\u5165" },
            { title: "\u8721\u70db", value: "\u881f\u71ed" },
            { title: "\u50ac\u7720", value: "\u50ac\u7720" },
            { title: "\u6f5c\u5165", value: "\u6f5b\u5165" },
            { title: "\u5211\u67b6", value: "\u5211\u67b6" },
            { title: "\u8c03\u620f", value: "\u8abf\u6232" },
            { title: "\u559d\u5c3f", value: "\u559d\u5c3f" },
            { title: "\u7eb9\u8eab\u523a\u5b57", value: "\u7d0b\u8eab\u523a\u5b57" },
            { title: "\u5243\u6bdb", value: "\u5243\u6bdb" },
            { title: "\u7ea6\u4f1a", value: "\u7d04\u6703" },
            { title: "\u7619\u75d2", value: "\u7619\u7662" }
          ],
          value: "\u6deb\u4e82",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u72b6\u6001\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["state"],
          },
          enumOptions: [
            { title: "\u7f9e\u803b", value: "\u7f9e\u6065" },
            { title: "\u6e7f\u8eab", value: "\u6fd5\u8eab" },
            { title: "\u6d41\u6c57", value: "\u6d41\u6c57" },
            { title: "\u9152\u9189", value: "\u9152\u9189" },
            { title: "\u65e9\u6f0f", value: "\u65e9\u6f0f" },
            { title: "\u7edd\u9876\u9ad8\u6f6e", value: "\u7d55\u9802\u9ad8\u6f6e" },
            { title: "\u6b32\u6c42\u4e0d\u6ee1", value: "\u617e\u6c42\u4e0d\u6eff" },
            { title: "\u767d\u773c\u5931\u795e", value: "\u767d\u773c\u5931\u795e" }
          ],
          value: "\u7f9e\u6065",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u73a9\u6cd5\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["playstyle"],
          },
          enumOptions: [
            { title: "\u4e2d\u51fa", value: "\u4e2d\u51fa" },
            { title: "\u53e3\u4ea4", value: "\u53e3\u4ea4" },
            { title: "\u5973\u4e0a\u4f4d", value: "\u5973\u4e0a\u4f4d" },
            { title: "\u9a91\u4e58\u4f4d", value: "\u9a0e\u4e57\u4f4d" },
            { title: "\u540e\u5165", value: "\u5f8c\u5165" },
            { title: "\u624b\u6307\u63d2\u5165", value: "\u624b\u6307\u63d2\u5165" },
            { title: "\u6f6e\u5439", value: "\u6f6e\u5439" },
            { title: "\u4e73\u4ea4", value: "\u4e73\u4ea4" },
            { title: "\u8214\u9634", value: "\u8214\u9670" },
            { title: "\u53e3\u7206", value: "\u53e3\u7206" },
            { title: "\u989c\u5c04", value: "\u984f\u5c04" },
            { title: "\u6df1\u5589", value: "\u6df1\u5589" },
            { title: "\u63a5\u543b", value: "\u63a5\u543b" },
            { title: "\u8214\u8173", value: "\u8214\u8173" },
            { title: "\u541e\u7cbe", value: "\u541e\u7cbe" },
            { title: "69", value: "69" },
            { title: "\u81ea\u6170", value: "\u81ea\u6170" },
            { title: "\u8db3\u4ea4", value: "\u8db3\u4ea4" },
            { title: "\u6253\u624b\u67aa", value: "\u6253\u624b\u69cd" },
            { title: "\u553e\u6db2\u6577\u9762", value: "\u553e\u6db2\u6577\u9762" },
            { title: "\u63d2\u5165\u5f02\u7269", value: "\u63d2\u5165\u7570\u7269" },
            { title: "\u6253\u5c41\u80a1", value: "\u6253\u5c41\u80a1" },
            { title: "\u989c\u9762\u9a91\u4e58", value: "\u9854\u9762\u9a0e\u4e58" },
            { title: "\u4e8c\u7a74\u540c\u5165", value: "\u4e8c\u7a74\u540c\u5165" },
            { title: "\u62f3\u51fb\u4ea4", value: "\u62f3\u64ca\u4ea4" }
          ],
          value: "\u4e2d\u51fa",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        //\u573a\u666f\u9009\u9879
        {
          name: "tagValue",
          title: "\u5177\u4f53\u6807\u7b7e",
          type: "enumeration",
          belongTo: {
            paramName: "tagType",
            value: ["setting"],
          },
          enumOptions: [
            { title: "\u996d\u5e97", value: "\u98ef\u5e97" },
            { title: "\u81ea\u5b85", value: "\u81ea\u5b85" },
            { title: "\u5b66\u6821", value: "\u5b78\u6821" },
            { title: "\u6309\u6469\u30fb\u7f8e\u5bb9\u5e97", value: "\u6309\u6469\u30fb\u7f8e\u5bb9\u5e97" },
            { title: "\u529e\u516c\u5ba4", value: "\u8fa6\u516c\u5ba4" },
            { title: "\u6e29\u6cc9", value: "\u6eab\u6cc9" },
            { title: "\u533b\u9662\u30fb\u8bca\u6240", value: "\u91ab\u9662\u30fb\u8a3a\u6240" },
            { title: "\u516c\u5171\u573a\u6240", value: "\u516c\u5171\u5834\u6240" },
            { title: "\u6ce1\u6ce1\u6d74\u5e97", value: "\u6ce1\u6ce1\u6d74\u5e97" },
            { title: "\u66f4\u8863\u5ba4", value: "\u66f4\u8863\u5ba4" },
            { title: "\u91ce\u5916\u9732\u5929", value: "\u91ce\u5916\u9732\u5929" },
            { title: "\u98ce\u4fd7\u591c\u5834", value: "\u98a8\u4fd7\u591c\u5834" },
            { title: "\u706b\u8f66", value: "\u706b\u8eca" },
            { title: "\u6cf3\u6c60", value: "\u6cf3\u6c60" },
            { title: "\u4e61\u4e0b", value: "\u9109\u4e0b" },
            { title: "AV\u62cd\u6444\u73b0\u573a", value: "AV\u62cd\u651d\u73fe\u5834" },
            { title: "\u4ed3\u5e93", value: "\u5009\u5eab" },
            { title: "\u76d1\u72f1", value: "\u76e3\u7344" },
            { title: "\u5065\u8eab\u623f", value: "\u5065\u8eab\u623f" },
            { title: "\u60c5\u8da3\u996d\u5e97", value: "\u60c5\u8da3\u98ef\u5e97" },
            { title: "\u5395\u6240", value: "\u53a0\u6240" },
            { title: "\u9152\u5427", value: "\u9152\u5427" },
            { title: "\u4fbf\u5229\u5546\u5e97", value: "\u4fbf\u5229\u5546\u5e97" },
            { title: "\u8f66\u9707", value: "\u8eca\u9707" },
            { title: "KTV\u591c\u603b\u4f1a", value: "KTV\u591c\u7e3d\u6703" },
            { title: "\u4f53\u80b2\u9986", value: "\u9ad4\u80b2\u8218" },
            { title: "\u5546\u5e97", value: "\u5546\u5e97" },
            { title: "\u5496\u5561\u5e97", value: "\u5496\u5561\u5e97" },
            { title: "\u6d77\u6ee9", value: "\u6d77\u7058" },
            { title: "\u5df4\u58eb", value: "\u5df4\u58eb" },
            { title: "\u5e9f\u589f", value: "\u5ee2\u589f" },
            { title: "\u753b\u5ba4", value: "\u756b\u5ba4" },
            { title: "\u8d4c\u573a", value: "\u8ced\u5834" },
            { title: "\u53a8\u623f", value: "\u5eda\u623f" },
            { title: "\u9910\u5385", value: "\u9910\u5ef3" },
            { title: "\u7535\u68af", value: "\u96fb\u68af" },
            { title: "\u5efa\u7b51\u5de5\u5730", value: "\u5efa\u7bc9\u5de5\u5730" }
          ],
          value: "\u98ef\u5e97",
          description: "\u9009\u62e9\u8981\u6d4f\u89c8\u7684\u5206\u7c7b"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u9996\u9875\u7248\u5757
    {
      title: "\u9996\u9875\u7248\u5757",
      description: "\u9009\u62e9\u9700\u8981\u6d4f\u89c8\u7684\u5206\u7c7b",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "categoryType",
          title: "\ud83d\udcc1 \u5206\u7c7b\u7c7b\u578b",
          type: "enumeration",
          enumOptions: [
            { title: "\u6700\u65b0\u53d1\u5e03", value: "/movie/new/" },
            { title: "\u70ed\u95e8\u6392\u884c", value: "/best" },
            { title: "\u65e0\u7801A\u7247", value: "/menu/uncensored/5-2-" },
            { title: "\u65e5\u672cA\u7247", value: "/menu/censored/5-2-" },
            { title: "\u56fd\u4ea7AV", value: "/menu/chinese/5-2-" }
          ],
          value: "/movie/new/"
        },
        {
          name: "page",
          title: "\u9875\u7801",
          type: "page"
        }
      ]
    },
    // \u51fa\u54c1\u5382\u5546
    {
      title: "\u51fa\u54c1\u5382\u5546",
      description: "\u6309\u51fa\u54c1\u5382\u5546\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "issuer",
          title: "\u9009\u62e9\u6216\u8f93\u5165\u51fa\u54c1\u5382\u5546",
          type: "input",
          placeholders: [
            { 
              title: "S1", value: "S1" 
            },
            { 
              title: "SOD", value: "SOD" 
            },
            { 
              title: "\u9ebb\u8c46\u4f20\u5a92", value: "\u9ebb\u8c46\u50b3\u5a92" 
            },
            { 
              title: "\u868a\u9999\u793e", value: "\u868a\u9999\u793e" 
            },
            { 
              title: "91\u88fd\u7247\u5ee0", value: "91\u88fd\u7247\u5ee0" 
            },
            { 
              title: "\u679c\u51cd\u50b3\u5a92", value: "\u679c\u51cd\u50b3\u5a92" 
            },
            { 
              title: "\u6296\u9670", value: "\u6296\u9670" 
            },
            { 
              title: "H.M.P\u82b3\u53cb\u820d", value: "H.M.P \u82b3\u53cb\u820d" 
            },
            { 
              title: "\u5929\u7f8e\u50b3\u5a92", value: "\u5929\u7f8e\u50b3\u5a92" 
            },
            { 
              title: "\u871c\u6843\u5f71\u50cf\u50b3\u5a92", value: "\u871c\u6843\u5f71\u50cf\u50b3\u5a92" 
            },
            { 
              title: "\u661f\u7a7a\u7121\u9650\u50b3\u5a92", value: "\u661f\u7a7a\u7121\u9650\u50b3\u5a92" 
            },
            { 
              title: "\u7cbe\u6771\u5f71\u696d", value: "\u7cbe\u6771\u5f71\u696d" 
            },
            { 
              title: "\u7687\u5bb6\u83ef\u4eba", value: "\u7687\u5bb6\u83ef\u4eba" 
            },
            { 
              title: "\u6843\u592a\u90ce\u6620\u50cf\u51fa\u7248", value: "\u6843\u592a\u90ce\u6620\u50cf\u51fa\u7248" 
            },
            { 
              title: "\u6c34\u6676\u6620\u50cf", value: "\u6c34\u6676\u6620\u50cf" 
            },
            { 
              title: "\u672c\u4e2d", value: "\u672c\u4e2d" 
            },
            { 
              title: "\u6e9c\u6c60", value: "\u6e9c\u6c60" 
            },
            { 
              title: "\u7661\u5973\u7279\u5316", value: "\u7661\u5973\u7279\u5316" 
            },
            { 
              title: "\u7121\u57a2", value: "\u7121\u57a2" 
            },
            { 
              title: "\u719f\u5973\u4eba\u59bb\u6700\u5f37\u5ee0", value: "\u719f\u5973\u4eba\u59bb\u6700\u5f37\u5ee0" 
            },
            { 
              title: "\u5984\u60f3\u65cf", value: "\u5984\u60f3\u65cf" 
            },
            { 
              title: "\u4eba\u59bb\u82b1\u5712\u5287\u5834", value: "\u4eba\u59bb\u82b1\u5712\u5287\u5834" 
            },
            { 
              title: "\u4eba\u59bb\u5b98\u80fdAV", value: "\u4eba\u59bb\u5b98\u80fdAV" 
            },
            { 
              title: "\u5909\u614b\u7d33\u58eb\u5036\u697d\u90e8", value: "\u5909\u614b\u7d33\u58eb\u5036\u697d\u90e8" 
            }
          ],
          value: "S1",
          description: "\u9009\u62e9\u6216\u8f93\u5165\u51fa\u54c1\u5382\u5546"
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


const ARTIST_MAP_REMOTE_URL = "https://widgets-xd.vercel.app/data/javrate_actors.json";
let artistMapCache = null;
let artistMapCacheTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000;
const BASE_URL = "https://www.javrate.com";

function getCommonHeaders() {
  return {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    Referer: BASE_URL
  };
}

async function fetchArtistMap() {
  if (artistMapCache && Date.now() - artistMapCacheTime < CACHE_DURATION) {
    return artistMapCache;
  }
  
  try {
    const dataHeaders = {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
      "Referer": BASE_URL
    };
    
    const response = await Widget.http.get(ARTIST_MAP_REMOTE_URL, {
      headers: dataHeaders
    });
    
    if (!response.data) {
      throw new Error("\u827a\u4eba\u5217\u8868\u8fd4\u56de\u7a7a\u6570\u636e");
    }
    
    let rawData = typeof response.data === "object" 
      ? response.data 
      : JSON.parse(response.data);
    
    if (typeof rawData !== "object" || rawData === null) {
      throw new Error("\u827a\u4eba\u5217\u8868\u683c\u5f0f\u65e0\u6548");
    }
    
    if (rawData.actors && typeof rawData.actors === "object") {
      artistMapCache = rawData.actors;
    } else {
      artistMapCache = rawData;
    }
    
    artistMapCacheTime = Date.now();
    return artistMapCache;
    
  } catch (error) {
    console.error("\u827a\u4eba\u5217\u8868\u52a0\u8f7d\u5931\u8d25:", error.message);
    throw new Error("\u65e0\u6cd5\u52a0\u8f7d\u827a\u4eba\u5217\u8868: " + error.message);
  }
}

async function normalizeArtistName(name) {
  return name
    .replace(/[\s\u3000]+/g, "")
    .replace(/[\u30fb\uff65]/g, "")
    .toLowerCase()
    .normalize("NFKC");
}

function parseDetailPage(detailPageHtml, detailPageUrl) {
  const $ = Widget.html.load(detailPageHtml);
  
  const titleH1 = $("h1.mb-2.mt-1");
  const movieNumber = titleH1.find("strong.fg-main").text().trim();
  const titleClone = titleH1.clone();
  titleClone.find("strong").remove();
  const mainTitleText = titleClone.text().trim();
  const rawTitle = movieNumber ? `${movieNumber} ${mainTitleText}` : mainTitleText;

  let videoUrl = null;
  let imgSrc = null;
  let description = "";

  try {
    const schemaScript = $('script[type="application/ld+json"]').html();
    if (schemaScript) {
      const schemaData = JSON.parse(schemaScript);
      videoUrl = schemaData.contentUrl || schemaData.embedUrl;
      imgSrc = schemaData.thumbnailUrl;
      description = schemaData.description || "";
    }
  } catch (e) {
    console.error(`\u89e3\u6790 LD+JSON schema \u5931\u8d25:`, e.message);
  }

  if (!videoUrl) {
    videoUrl = $(".player-box iframe").attr("src");
  }

  let releaseDate = "";
  $('.main-content > .left h4:contains("\u53d1\u7247\u65e5\u671f")')
    .next("div.col-auto")
    .find("h4")
    .each(function() {
      releaseDate = $(this).text().trim();
    });
  
  if (releaseDate) {
    const dateMatch = releaseDate.match(/(\d{4})\u5e74(\d{1,2})\u6708(\d{1,2})\u65e5/);
    if (dateMatch) {
      const year = dateMatch[1];
      const month = dateMatch[2].padStart(2, '0');
      const day = dateMatch[3].padStart(2, '0');
      releaseDate = `${year}-${month}-${day}`;
    }
  }

  if (!description) {
    description = $(".description-text").text().trim();
  }

  const tags = [];
  $("section.movie-keywords a.badge").each((idx, element) => {
    tags.push($(element).text().trim());
  });
  const genreTitle = tags.join(", ");

  const backdropImg = $(".fixed-background-img").attr("src");
  if (!imgSrc) {
    imgSrc = backdropImg;
  }

  const relatedItems = [];
  $("div.alike-grid-container .mgn-item").each((idx, element) => {
    try {
      const item = $(element);
      const linkElement = item.find(".mgn-title a");
      const relativeLink = linkElement.attr("href");
      if (!relativeLink) return;

      const absoluteLink = relativeLink.startsWith("http")
        ? relativeLink
        : BASE_URL + (relativeLink.startsWith("/") ? relativeLink : "/" + relativeLink);

      const childImgSrc = item.find(".mgn-picture img.mgn-cover").attr("src");

      const childTitleH = item.find(".mgn-title h5");
      const titleClone = childTitleH.clone();
      titleClone.find("strong").remove();
      const mainTitle = titleClone.text().trim();
      const number = childTitleH.find("strong").text().trim();
      const fullTitle = `${number} ${mainTitle}`.trim();

      if (fullTitle && absoluteLink) {
        relatedItems.push({
          id: absoluteLink,
          type: "url",
          title: fullTitle,
          imgSrc: childImgSrc || "",
          link: absoluteLink,
          mediaType: "movie",
        });
      }
    } catch (e) {
      console.error(`\u89e3\u6790\u6761\u76ee\u51fa\u9519: \u7b2c ${idx + 1} \u4e2a\u6761\u76ee\u65f6\u51fa\u9519:`, e.message);
    }
  });

  return {
    id: detailPageUrl,
    type: "url",
    title: rawTitle,
    videoUrl: videoUrl,
    description: description || "\u6682\u65e0\u7b80\u4ecb",
    releaseDate: releaseDate,
    genreTitle: genreTitle,
    backdropPath: imgSrc || "",
    link: detailPageUrl,
    customHeaders: videoUrl ? { Referer: "https://iframe.mediadelivery.net/" } : undefined,
    relatedItems: relatedItems,
  };
}

async function parseItems(currentBaseUrl, $, listPageUrl) {
  const videoItems = [];
  const items = $('div[class^="movie-grid-new-"] .mgn-item');

  items.each((index, element) => {
    try {
      const item = $(element);
      
      const linkElement = item.find(".mgn-title a");
      const relativeLink = linkElement.attr("href");
      const titleElement = item.find(".mgn-title h3");
      
      if (!relativeLink || !titleElement.length) return;

      const movieNumber = titleElement.find("strong").text().trim();
      const movieTitle = titleElement.clone().find("strong").remove().end().text().trim();
      const fullTitle = `${movieNumber} ${movieTitle}`.trim();
      const absoluteLink = relativeLink.startsWith("http")
        ? relativeLink
        : `${currentBaseUrl}${relativeLink.startsWith("/") ? "" : "/"}${relativeLink}`;

      const imgSrc = item.find(".mgn-picture img.mgn-cover").attr("src") || "";

      let dateText = item.find(".mgn-date").clone().find("svg").remove().end().text().trim();
      const dateMatch = dateText.match(/(\d{4})\u5e74(\d{1,2})\u6708(\d{1,2})\u65e5/);
      if (dateMatch) {
        const year = dateMatch[1];
        const month = dateMatch[2].padStart(2, '0');
        const day = dateMatch[3].padStart(2, '0');
        dateText = `${year}-${month}-${day}`;
      }

      videoItems.push({
        id: absoluteLink,
        type: "url",
        title: fullTitle,
        backdropPath: imgSrc,
        link: absoluteLink,
        releaseDate: dateText || null,
        mediaType: "movie"
      });
    } catch (e) {
      console.error(`\u89e3\u6790\u6761\u76ee\u51fa\u9519: ${e.message}`);
    }
  });
  return videoItems;
}

async function fetchDataForPath(path, params = {}) {
  const page = parseInt(params.page, 10) || 1;
  let requestUrl = "";

  if (!path || !path.startsWith("/")) {
    path = "/" + (path || "");
  }

  if (path.includes("/actor/movie/") && path.endsWith(".html")) {
    const artistId = path.match(/\/actor\/movie\/([^\/]+)\.html$/)?.[1];
    if (!artistId) {
      return [{
        id: "artist-id-error", 
        type: "url", 
        title: "\u827a\u4eba\u8bc6\u522b\u9519\u8bef", 
        description: `\u65e0\u6cd5\u4eceURL\u8bc6\u522b\u827a\u4ebaID: ${path}`, 
        backdropPath: "", 
        link: path 
      }];
    }
    requestUrl = page > 1 
      ? `${BASE_URL}/actor/movie/1-0-2-${page}/${artistId}.html`
      : `${BASE_URL}${path}`;
  }
  else if (path.startsWith("/keywords/movie/")) {
    requestUrl = page > 1 
      ? `${BASE_URL}${path}?page=${page}&sort=5`
      : `${BASE_URL}${path}`;
  }
  else if (path.startsWith("/Issuer/")) {
    requestUrl = page > 1 
      ? `${BASE_URL}${path}?page=${page}&sort=5`
      : `${BASE_URL}${path}`;
  }
  else if (path.startsWith("/best/")) { 
  requestUrl = page > 1 
    ? `${BASE_URL}${path}?page=${page}` 
    : `${BASE_URL}${path}`;
  }
  else if ([
    "/menu/uncensored/5-2-", 
    "/menu/censored/5-2-", 
    "/menu/chinese/5-2-"
  ].includes(path)) {
    requestUrl = `${BASE_URL}${path}${page}`;
  }
  else if (path === "/movie/new/") {
    requestUrl = `${BASE_URL}${path}`;
  }
  else {
    const trimmedPath = path.endsWith("/") ? path.slice(0, -1) : path;
    requestUrl = page > 1 
      ? `${BASE_URL}${trimmedPath}/${page}.html`
      : `${BASE_URL}${trimmedPath}`;
  }

  try {
    const response = await Widget.http.get(requestUrl, {
      headers: getCommonHeaders(),
    });
    
    if (!response?.data) {
      return [{
        id: `${requestUrl}-error`,
        type: "url",
        title: "\u52a0\u8f7d\u5931\u8d25",
        description: `\u670d\u52a1\u5668\u672a\u8fd4\u56de\u6709\u6548\u6570\u636e: ${requestUrl}`,
        backdropPath: "",
        link: requestUrl
      }];
    }
    if (response.data.includes("\u62b1\u6b49\uff0c\u6ca1\u6709\u627e\u5230")) {
      return [{
        id: `${requestUrl}-no-content`,
        type: "url",
        title: "\u672a\u627e\u5230\u5f71\u7247",
        description: "\u6b64\u9875\u9762\u6ca1\u6709\u4efb\u4f55\u5f71\u7247\uff0c\u8bf7\u5c1d\u8bd5\u5176\u4ed6\u5206\u9875\u6216\u5206\u7c7b",
        backdropPath: "",
        link: requestUrl
      }];
    }

    const $ = Widget.html.load(response.data);
    const items = await parseItems(BASE_URL, $, requestUrl);
    
    if (items.length === 0) {
      return [{
        id: `${requestUrl}-empty`,
        type: "url",
        title: "\u65e0\u5339\u914d\u5f71\u7247",
        description: "\u672a\u627e\u5230\u4efb\u4f55\u5f71\u7247\uff0c\u53ef\u80fd\u662f\u5185\u5bb9\u5df2\u53d8\u66f4",
        backdropPath: "",
        link: requestUrl
      }];
    }
    
    return items;
  } catch (error) {
    console.error(`\u8bf7\u6c42\u5931\u8d25: ${requestUrl} - ${error.message}`);
    return [{
      id: `${requestUrl}-error`,
      type: "url",
      title: `\u52a0\u8f7d\u5931\u8d25: \u7b2c${page}\u9875`,
      description: `\u8bf7\u6c42\u51fa\u9519: ${error.message}`,
      backdropPath: "",
      link: requestUrl
    }];
  }
}

async function loadDetail(linkValue) {
  let currentBaseUrl = "https://www.javrate.com";
  
  const urlMatch = linkValue.match(/^(https?:\/\/[^/]+)/);
  if (urlMatch) {
    currentBaseUrl = urlMatch[0];
  } else {
    console.warn(`loadDetail: \u65e0\u6cd5\u4ece\u94fe\u63a5 ${linkValue} \u4e2d\u89e3\u6790baseUrl\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c`);
  }
  
  try {
    const response = await Widget.http.get(linkValue, {
      headers: getCommonHeaders(),
    });
    
    if (!response || !response.data) {
      throw new Error("\u65e0\u6cd5\u52a0\u8f7d\u8be6\u60c5\u9875\u9762: " + linkValue);
    }
    
    const detailData = parseDetailPage(response.data, linkValue);

    return {
      id: linkValue,
      type: "url",
      title: detailData.title,
      videoUrl: detailData.videoUrl,
      description: detailData.description,
      releaseDate: detailData.releaseDate,
      genreTitle: detailData.genreTitle,
      backdropPath: detailData.backdropPath || "",
      link: detailData.link,
      customHeaders: detailData.customHeaders,
      relatedItems: detailData.relatedItems || [],
    };
  } catch (error) {
    console.error(`loadDetail: \u52a0\u8f7d\u8be6\u60c5\u5931\u8d25 ${linkValue}:`, error);
    return {
      id: linkValue,
      type: "url",
      title: "\u52a0\u8f7d\u8be6\u60c5\u5931\u8d25",
      description: error.message,
      link: linkValue,
      backdropPath: "",
    };
  }
}

async function loadPage(params) {
  let path = "";
  
    if (params?.artistId) {
    try {

      const artistMap = await fetchArtistMap();
    
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(params.artistId);
    
      if (!isUUID) {
        const normalizedInput = await   normalizeArtistName(params.artistId);
        let matchedId = null;
        let matchedName = null;
        let matchScore = 0;
      
        for (const [name, id] of  Object.entries(artistMap)) {
          const normalizedMapName = await normalizeArtistName(name);
        
          if (normalizedMapName === normalizedInput) {
            matchedId = id;
            matchedName = name;
            matchScore = 100;
            break;
          }
        
          if  (normalizedMapName.includes(normalizedInput)) {
            const score = normalizedInput.length * 10;
            if (score > matchScore) {
              matchScore = score;
              matchedId = id;
              matchedName = name;
            }
          }
        }
      
        if (!matchedId) {
          return [{
            id: "artist-not-found",
            type: "url", 
            title: "\u827a\u4eba\u672a\u627e\u5230",
            description: `\u672a\u627e\u5230\u827a\u4eba: ${params.artistId}\n\n\u8bf7\u5c1d\u8bd5\u8f93\u5165\u5168\u540d\u6216\u66f4\u6362\u827a\u4eba\u540d\u79f0`,
            backdropPath: "",
            link: ""
          }];
        }
      
        params.artistId = matchedId;
      }
    
      path = `/actor/movie/${params.artistId}.html`;
    } catch (error) {
      console.error("\u827a\u4eba\u6a21\u5757\u5904\u7406\u51fa\u9519:", error.message);
      return [{
        id: "artist-map-error",
        type: "url",
        title: "\u827a\u4eba\u641c\u7d22\u5931\u8d25",
        description: "\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u518d\u8bd5\n\u9519\u8bef\u4fe1\u606f: " + error.message,
        backdropPath: "",
        link: ""
      }];
    }
  }

  else if (params && params.tagType && params.tagValue) {
    const encodedTag = encodeURIComponent(params.tagValue);
    path = `/keywords/movie/${encodedTag}`;
  }
  
  else if (params && params.issuer) {
    const decodedIssuer = decodeURIComponent(params.issuer);
    const encodedIssuer = encodeURIComponent(decodedIssuer);
    path = `/Issuer/${encodedIssuer}`;
  }
  
  else if (params && params.categoryType) {
    path = params.categoryType;
  }
  
  else {
    return [{
      id: "param-error",
      type: "url",
      title: "\u53c2\u6570\u914d\u7f6e\u9519\u8bef",
      description: "\u7f3a\u5c11\u5fc5\u8981\u53c2\u6570\uff0c\u8bf7\u68c0\u67e5\u6a21\u5757\u914d\u7f6e\u3002",
      backdropPath: "",
      link: ""
    }];
  }
  
  return fetchDataForPath(path, params);
}