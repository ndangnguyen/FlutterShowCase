document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist95165331\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-flavor_banner-dart\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-dart \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">Widget<\/span> <span class=\"pl-en\">_buildBanner<\/span>(<span class=\"pl-c1\">BuildContext<\/span> context) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC2\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">GestureDetector<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC3\" class=\"blob-code blob-code-inner js-file-line\">    behavior<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">HitTestBehavior<\/span>.translucent,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC4\" class=\"blob-code blob-code-inner js-file-line\">    child<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">Container<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC5\" class=\"blob-code blob-code-inner js-file-line\">      width<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">50<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC6\" class=\"blob-code blob-code-inner js-file-line\">      height<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">50<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC7\" class=\"blob-code blob-code-inner js-file-line\">      child<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">CustomPaint<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC8\" class=\"blob-code blob-code-inner js-file-line\">        painter<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">BannerPainter<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC9\" class=\"blob-code blob-code-inner js-file-line\">            message<span class=\"pl-k\">:<\/span> bannerConfig.bannerName,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC10\" class=\"blob-code blob-code-inner js-file-line\">            textDirection<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">Directionality<\/span>.<span class=\"pl-en\">of<\/span>(context),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC11\" class=\"blob-code blob-code-inner js-file-line\">            layoutDirection<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">Directionality<\/span>.<span class=\"pl-en\">of<\/span>(context),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC12\" class=\"blob-code blob-code-inner js-file-line\">            location<span class=\"pl-k\">:<\/span> <span class=\"pl-c1\">BannerLocation<\/span>.topStart,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC13\" class=\"blob-code blob-code-inner js-file-line\">            color<span class=\"pl-k\">:<\/span> bannerConfig.bannerColor<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC14\" class=\"blob-code blob-code-inner js-file-line\">        ),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC15\" class=\"blob-code blob-code-inner js-file-line\">      ),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC16\" class=\"blob-code blob-code-inner js-file-line\">    ),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC17\" class=\"blob-code blob-code-inner js-file-line\">    onLongPress<span class=\"pl-k\">:<\/span> () {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC18\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-en\">showDialog<\/span>(context<span class=\"pl-k\">:<\/span> context, builder<span class=\"pl-k\">:<\/span> (<span class=\"pl-c1\">BuildContext<\/span> context) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC19\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">DeviceInfoDialog<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC20\" class=\"blob-code blob-code-inner js-file-line\">      });<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC21\" class=\"blob-code blob-code-inner js-file-line\">    },<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC22\" class=\"blob-code blob-code-inner js-file-line\">  );<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-flavor_banner-dart-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-flavor_banner-dart-LC23\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/JHBitencourt/bbd4887ca1c915c3afa976ef51ea4ad5/raw/781673a6436174acd941a7d14491153ee0ef0f6f/flavor_banner.dart\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/JHBitencourt/bbd4887ca1c915c3afa976ef51ea4ad5#file-flavor_banner-dart\">flavor_banner.dart<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')