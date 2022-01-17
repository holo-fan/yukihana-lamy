window.onload = function () {
    // head
    // 追加するHTMLを定義
    var head_content = `    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-2KR4YNFBED');

</script>
<meta name="description" content="ホロライブ所属のアイドルVTuber、雪花ラミィさんの非公式ファンサイトです！雪民集まれ～！">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes">
<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
<link rel="stylesheet" href="/yukihana-lamy/css/style.css">
<link rel="icon" href="/yukihana-lamy/images/favicon.jpg">
<meta property="og:title" content="雪花ラミィ 非公式ファンサイト" />
<meta property="og:description" content="ホロライブ所属のアイドルVTuber、雪花ラミィさんの非公式ファンサイトです！雪民集まれ～！" />
<meta property="og:site_name" content="雪里 | 雪花ラミィ非公式ファンサイト" />
<meta property="og:image" content="https://holo-fan.github.io/yukihana-lamy/images/ogp.png" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@nikesuta_DS" />
`
    var head = document.getElementById('head'); // 追加する部分を取得
    head.insertAdjacentHTML('beforeend', head_content);
    //header

    var header_content = `
<img class="header-img" src="images/header.jpg">
<a href="/yukihana-lamy/index.html">Menu</a>
<a href="/yukihana-lamy/info.html">Information</a>
<a href="/yukihana-lamy/contact.html">Contact</a>
`
    var head = document.getElementById('header'); // 追加する部分を取得
    head.insertAdjacentHTML('beforeend', header_content);
}