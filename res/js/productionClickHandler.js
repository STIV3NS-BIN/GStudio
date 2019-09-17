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
                {src: 'https://www.youtube.com/watch?v=b7aOw_dLbRk'},
                {src: 'https://www.youtube.com/watch?v=H-wnuJqLlnA'},
                {src: 'https://www.facebook.com/Gonitwa.Podhalanska/videos/889143941458463/?__xts__[0]=68.ARCvJ-euLbPQSmtldFM-SLDx59dmxMtvMRlZpX7SrAUhxb-UVr3C9HRYQ7FR1tJ_qK8Mcwpj9ggrshmnq8JzE8l6N6d-6Q_TtnBr6tWSbfrulYLIfTRKFm1vcAqRDUeHCnfel-wZiRuRj1QIjp_pZ_90Tmz5elVpIgcNrONceiWIWy7sKtiK4E2ojGZ7m3jYyeaLLYzo3Lwwc9QT9Ps-SZ7ucp430w6QmZOrurUL1gjGqNZzxi4UY1wfLuz1cMAxoCHWdQ7nfpDfsLPEg-bhmAn-jRDAFGvhd9wG1iMx2s3tTos0hHtuqZd9DiiBhTaZX6Q4xx_zw2CPwtOLTqJdHdl47_JWbZDn8llHkQ&__tn__=-R'}
            ]
        });
    
    });
    
})($);
