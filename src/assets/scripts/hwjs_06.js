'use strict';

// HW N5.1

let getCourseTitles = document.querySelectorAll('#basic-level .course__level-body-item-name-title'); // извлечение массива HTML-элементов с классом .course__level-body-item-name-title внутри элемента #basic-level
for (let i = 0; i < getCourseTitles.length; i++) { // запуск цикла с числом повторов, равному длине массива
    getCourseTitles[i].textContent = getCourseTitles[i].textContent.toUpperCase(); // присвоение каждому элементу с классом .course__level-body-item-name-title внутри элемента #basic-level переведённого в верхний регистр значения
}

// HW N5.2

let getCourseSubTitles = document.querySelectorAll('#pro-level .course__level-body-item-name-subtitle'); // извлечение массива HTML-элементов с классом .course__level-body-item-name-subtitle внутри элемента #pro-level
for (let j = 0; j < getCourseSubTitles.length; j++) { // запуск цикла с числом повторов, равному длине массива
    if (getCourseSubTitles[j].textContent.length > 19) { // если число символов в текущем значении массива больше 19,...
        getCourseSubTitles[j].textContent = getCourseSubTitles[j].textContent.slice(0, 20) + '...'; // ... то вернуть первые 20 символов исходной строки вместе с многоточием
    }
}