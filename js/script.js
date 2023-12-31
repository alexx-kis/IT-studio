'use strict';

/*==================================== Animation ====================================*/

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll); //событие при котором будет происходить анимация
	function animOnScroll() {		//создаём функцию
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];			// получаем каждый элемент в цикле
			let animItemHeight = animItem.offsetHeight; //получаем высоту этого элемента
			let animItemOffset = offset(animItem).top;	//позиция элемента относительно верха
			let animStart = 4 //коэффициент, который будет регулировать момент старта анимации
			//Настройка момента старта анимации:
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			//Бывает, что элемент выше окна, поэтому нужно проверить:
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}

			function offset(elem) {
				let rect = elem.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	}
}

/*==================================== BURGER ====================================*/

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let links = document.querySelectorAll('.header__menu-link');


burger.addEventListener('click', function () {
	menu.classList.toggle('header__menu--open');
	burger.classList.toggle('burger--open');
});

links.forEach(function (link) {
	link.addEventListener('click', function () {
		menu.classList.remove('header__menu--open');
		burger.classList.remove('burger--open');

	});
})

	/*==================================== FOOTER ====================================*/

	; (function () {
		let headings = document.querySelectorAll('.footer__heading');
		let lists = document.querySelectorAll('.footer__list');

		for (let i = 0; i < headings.length; i++) {
			headings[i].addEventListener('click', function () {
				if (lists[i].style.maxHeight) {
					lists[i].style.maxHeight = null;
				} else {
					lists[i].style.maxHeight = lists[i].scrollHeight + "px";
				}
			});
		}

	})();