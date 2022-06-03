'use strict';

function menuAccordion(menuType) {
	const elementMenuContent = document.getElementById('submenu__' + menuType);
	const elementMenuHeader = document.getElementById('mainmenu__' + menuType + '-item');
	const elementMenuArrow = document.getElementById('mainmenu__' + menuType + '-arrow');

	elementMenuHeader.addEventListener('click', function() {
		if (!elementMenuContent.classList.contains('active')) {
			elementMenuContent.classList.add('active');
			elementMenuArrow.classList.add('rotated');
		} else {
			elementMenuContent.classList.remove('active');
			elementMenuArrow.classList.remove('rotated');
		}
	})
}

menuAccordion('programs');
menuAccordion('lections');