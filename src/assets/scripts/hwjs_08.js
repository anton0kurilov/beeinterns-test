'use strict';

import plural from 'plural-ru';

window.onload = function findCourses() {
    const coursesArray = document.querySelectorAll('.course__level-body-item');
    const allCoursesBlock = document.querySelector('#course__all');
    const numberOfCourses = document.querySelector('#course__all-numbers');

    allCoursesBlock.innerHTML = '';

    coursesArray.forEach(function summarizeCourses(item, i) {
        item.classList.add('item-' + i);
        allCoursesBlock.innerHTML += item.outerHTML;
    });

    numberOfCourses.append(coursesArray.length + ' ' + plural(coursesArray.length, 'лекция', 'лекции', 'лекций'));
};

