'use strict';

function menuAccordion(menuType) {
	const elementMenuContent = document.getElementById('submenu__' + menuType);
	const elementMenuHeader = document.getElementById('mainmenu__' + menuType + '-item');
	const elementMenuArrow = document.getElementById('mainmenu__' + menuType + '-arrow');

	elementMenuHeader.addEventListener('click', function(event) {
		if (!elementMenuContent.classList.contains('active')) {
			elementMenuContent.classList.add('active');
			elementMenuArrow.style.transform = 'rotate(0deg)';
		} else {
			elementMenuContent.classList.remove('active');
			elementMenuArrow.style.transform = 'rotate(180deg)';
		}
	})
}

menuAccordion('programs');
menuAccordion('lections');