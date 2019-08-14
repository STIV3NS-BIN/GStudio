$('#montage').on('click', (e) => {
    e.preventDefault();
    $(this).lightGallery({
        dynamic: true,
        thumbnail:true,
        showThumbByDefault: true,
        loadYoutubeThumbnail: true,
        youtubeThumbSize: 'default',
        dynamicEl: [
            {src: 'https://www.youtube.com/watch?v=Z4xTWulHQLM'},
            {src: 'https://www.youtube.com/watch?v=95MKLzSz4QM'},
            {src: 'https://www.youtube.com/watch?v=nJtna9O4BZA'},
            {src: 'https://www.youtube.com/watch?v=kg43qNTFniI'},
            {src: 'https://www.youtube.com/watch?v=GmPQ8E3R7x8'},
            {src: 'https://www.youtube.com/watch?v=XOVIa3r6gxQ'}
        ]
    });

});