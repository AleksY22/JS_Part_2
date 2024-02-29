'use strict';
/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.

Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.

Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

*/


/*
const movieDB = {
   movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...'
   ]
};

const promoAdv = document.querySelectorAll('.promo__adv img');
const promoBg = document.querySelector('.promo__bg');
const promoGenre = promoBg.querySelector('.promo__genre');
const moviesList = document.querySelector('.promo__interactive-list');


promoAdv.forEach(item => {
   item.remove();
});

promoGenre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("../img/bg.jpg")';

moviesList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, iter) => {
   moviesList.innerHTML += `
   <li class="promo__interactive-item">${iter + 1}. ${item}
      <div class="delete"></div>
   </li>
   `;
});
*/

//=================Рекурсия===================
let students = {
   js: [{
      name: 'John',
      progress: 100
   }, {
      name: 'Ivan',
      progress: 60
   }],

   html: {
      basic: [{
         name: 'Peter',
         progress: 20
      }, {
         name: 'Ann',
         progress: 18
      }],

      pro: [{
         name: 'Sam',
         progress: 10
      }]
   }
};

//===========функция без рекурсии============
function getTotalProgressByIteration(data) {
   let total = 0;
   let students = 0;

   for (let course of Object.values(data)) {
      if (Array.isArray(course)) {
         students += course.length;
         for (let i = 0; i < course.length; i++) {
            total += course[i].progress;
         }
      } else {
         for (let subCourse of Object.values(course)) {
            students += subCourse.length;
            for (let i = 0; i < subCourse.length; i++) {
               total += subCourse[i].progress;
            }
         }
      }
   }

   return total / students;
}

console.log(getTotalProgressByIteration(students));


//===========с помощью рекурсии================
function getTotalProgressByRecursion(data) {
   if (Array.isArray(data)) {
      let total = 0;
      for (let i = 0; i < data.length; i++) {
         total += data[i].progress;
      }
      return [total, data.length];
   } else {
      let total = [0, 0];
      for (let subData of Object.values(data)) {
         const subDataArr = getTotalProgressByRecursion(subData);
         total[0] += subDataArr[0];
         total[1] += subDataArr[1];
      }
      return total;
   }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);