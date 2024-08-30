function execute() {
    return Response.success([
        { title: "玄幻魔法", input: "/sort/xuanhuanmofa", script: "zen.js" },
        { title: "武侠修真", input: "/sort/wuxiaxiuzhen", script: "zen.js" },
        { title: "都市言情", input: "/sort/dushiyanqing", script: "zen.js" },
        { title: "历史军事", input: "/sort/lishijunshi", script: "zen.js" },
        { title: "网游动漫", input: "/sort/wangyoudongman", script: "zen.js" },
        { title: "科幻小说", input: "/sort/kehuanxiaoshuo", script: "zen.js" },
        { title: "恐怖灵异", input: "/sort/kongbulingyi", script: "zen.js" }
    ]);
}