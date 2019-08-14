(function() {
    'use strict';

    document.getElementById('contact-div').addEventListener('click', (e) => {
        e.target.style.display = 'none';
    });

    document.getElementById('contact-div-popup').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.getElementById('contact-btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('contact-div').style.display = 'flex';
    });

})();