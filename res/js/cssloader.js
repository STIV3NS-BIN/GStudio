(function(){
    let head  = document.getElementsByTagName('head')[0];
    let link;
    let srcs = ['https://fonts.googleapis.com/css?family=Oswald:200,400,500,700&amp;subset=latin-ext',
                'res/css/galleries.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.11/css/lightgallery.min.css'];

    for (src of srcs) {
        link  = document.createElement('link');

        link.rel  = 'stylesheet';
        link.href = src;
        head.appendChild(link);
    }
})();