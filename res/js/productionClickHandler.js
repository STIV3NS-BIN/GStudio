(function($) {

    $('#production').on('click', (e) => {
        e.preventDefault();
        $('#production').lightGallery({
            dynamic: true,
            thumbnail:true,
            showThumbByDefault: true,
            loadYoutubeThumbnail: true,
            youtubeThumbSize: 'default',
            videoMaxWidth: '1000px',
            autoplayFirstVideo: false,
            dynamicEl: [
                {src: 'https://youtu.be/t4hUfyKmo3k'},
                {src: 'https://youtu.be/xZeXYhCHYTU'},
                {src: 'https://youtu.be/ipm4mT3XNkc'},
                {src: 'https://www.youtube.com/watch?v=b7aOw_dLbRk'},
                {src: 'https://www.youtube.com/watch?v=NqshGTgA8_c'},    
                {src: 'https://www.youtube.com/watch?v=IFlpEhcfbd4'},             
                {src: 'https://youtu.be/lrDmmM5u-4o'},
                {src: 'https://youtu.be/rsYM7AbjkAw'},
                {src: 'https://www.youtube.com/watch?v=hG8DSfz_yDs'},
                {src: 'https://youtu.be/R6mmLR8GO1E'},
                {src: 'https://www.youtube.com/watch?v=YApLzgQbs7Y'},
                {src: 'https://www.youtube.com/watch?v=H-wnuJqLlnA'},
                {src: 'https://www.youtube.com/watch?v=_TvUWn9WOtA'}
            ]
        });
    
    });
    
})($);
