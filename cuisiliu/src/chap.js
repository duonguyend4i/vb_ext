load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let cvData = "";
    let part1 = url.replace(BASE_URL, "").replace(".html", "");
    var next = part1;

    while (next.includes(part1)) {
        let response = fetch(BASE_URL + next + ".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select(".pull-right").first().select("a").last().attr("href").replace(".html", "");

            let htm = doc.select(".content").html();
            cvData = cvData + htm;
            htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '')
                .replace(/ ?\n/g, "<br>")
                .replace(/<\/?p>/g, "")
                .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
                .replace("qiushu.cc [*.?]", "")
                .replace("最新章节！", '')
                .replace("仟仟尛哾！", '')
                .replace("笔趣阁", '');
        } else {
            break;
        }
    }
    if (cvData) {
        return Response.success(cvData);
    }
    return null;



}