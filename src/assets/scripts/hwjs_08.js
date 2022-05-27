'use strict';

const plural = require('plural-ru');

window.onload = function findCourses() {
    const coursesArray = document.querySelectorAll('.course__level-body-item');
    const allCoursesBlock = document.querySelector('#course__all');
    const numberOfCourses = document.querySelector('#course__all-numbers');

    allCoursesBlock.innerHTML = '';

    coursesArray.forEach(function summarizeCourses(item) {
        allCoursesBlock.innerHTML += '<div class="course__level-body-item">' + item.innerHTML + '</div>';
    });

    numberOfCourses.append(coursesArray.length + ' ' + plural(coursesArray.length, 'лекция', 'лекции', 'лекций'));
}

