(function(){
    let gallery = document.querySelector('#gallery');

    let srcs = ['https://www.youtube.com/embed/1DOVTmhULYc',
                'https://www.youtube.com/embed/IFlpEhcfbd4',
                'https://www.youtube.com/embed/Mx22wAJ4vfE',
                'https://www.youtube.com/embed/Xk1f7NIRxqI'];

    for (source of srcs) {
        let tape = document.createElement('div');
        tape.className = 'tape';

        let plyr = document.createElement('div');
        plyr.className = 'plyr__video-embed gallery-video';

        let iframe = document.createElement('iframe');
        iframe.src = source + '?origin=https://plyr.io&amp;iv_load_policy=3&amp;' +
                                        'modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1';

        plyr.appendChild(iframe);
        tape.appendChild(plyr);
        gallery.appendChild(tape);
    }
})();
