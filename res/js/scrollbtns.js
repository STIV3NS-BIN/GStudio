(function() {
	'use strict';

	let btns = document.querySelectorAll('.scroll-btn');
	for (let btn of btns) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector(btn.dataset.target).scrollIntoView({ 
			  behavior: 'smooth',
			  block: 'start'
			});
		});
	}
})();
