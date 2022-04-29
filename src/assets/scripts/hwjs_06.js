'use strict';

let result = [], 
    getCourseTitles = document.querySelectorAll('#basic-level .course__level-body-item-name-title');
for (let i = 0; i < getCourseTitles.length; i++) {
    document.querySelectorAll('#basic-level .course__level-body-item-name-title')[i].textContent = getCourseTitles[i].textContent.toUpperCase();
}