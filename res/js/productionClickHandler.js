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
                {src: 'https://www.youtube.com/watch?v=IFlpEhcfbd4'},
                {src: 'https://www.youtube.com/watch?v=hG8DSfz_yDs'},
                {src: 'https://www.youtube.com/watch?v=YApLzgQbs7Y'},
                {src: 'https://www.youtube.com/watch?v=NqshGTgA8_c'},
                {src: 'https://www.youtube.com/watch?v=HMTZ4RN3fpg'},
                {src: 'https://www.youtube.com/watch?v=H-wnuJqLlnA'}
            ]
        });
    
    });
    
})($);