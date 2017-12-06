/* Toggle button hide sidebar */
var toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener('click', function () {

	console.log('toggleIcon is working'); /* for debugging/testing */

	var	nav	= document.querySelector('header.sidebar');
	nav.style.left = '-17%'; /* -20% on px or percentage */

	var	main = document.querySelector('main');
	main.style.width = '100%';

	var	toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.setAttribute('hidden', 'hidden');

	var	toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.removeAttribute('hidden');

}); 


/* Toggle button hide sidebar */
var toggleIcon1 = document.querySelector('#toggleIcon1');

toggleIcon1.addEventListener('click', function () {

	console.log('toggleIcon1 is working'); /* for debugging/testing */

	var	nav	= document.querySelector('header.sidebar');
	nav.style.left = '0'; /* -20% on px or percentage */

	var	main = document.querySelector('main');
	main.style.width = '100%';

	var	toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.removeAttribute('hidden');

	var	toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.setAttribute('hidden', 'hidden');

}); 