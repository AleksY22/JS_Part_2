'use strict';

document.addEventListener('DOMContentLoaded', () => {
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


   const deleteAdv = (arg) => {
      arg.forEach(item => {
         item.remove();
      });
   };

   const makeChanges = () => {
      promoGenre.textContent = 'драма';
      promoBg.style.backgroundImage = 'url("../img/bg.jpg")';
   };

   const sortArr = (arr) => {
      arr.sort();
   };

   deleteAdv(promoAdv);
   makeChanges();


   function showMovies(films, parent) {
      sortArr(films);
      parent.innerHTML = '';
      films.forEach((item, iter) => {
         parent.innerHTML += `
         <li class="promo__interactive-item">${iter + 1}. ${item}
            <div class="delete"></div>
         </li>
         `;
      });

      document.querySelectorAll('.delete').forEach((btn, i) => {
         btn.addEventListener('click', () => {
            btn.parentElement.remove();
            films.splice(i, 1);
            showMovies(films, parent);
         });
      });
   }

   showMovies(movieDB.movies, moviesList);

   const addForm = document.querySelector('form.add');
   const dataInput = addForm.querySelector('.adding__input');
   const dataCheckBox = addForm.querySelector('[type = "checkbox"]');

   addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let dataInputValue = dataInput.value;
      const dataCheckBoxValue = dataCheckBox.checked;

      if (dataInputValue) {
         if (dataInputValue.length > 21) {
            dataInputValue = `${dataInputValue.substring(0, 22)}...`;
         }

         if (dataCheckBoxValue) {
            console.log('Add in favorite');
         }
         movieDB.movies.push(dataInputValue);
         showMovies(movieDB.movies, moviesList);
         e.target.reset();
      }

   });


   /*
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
   */
   /*
   //==================Факториал======================
   function factorial(n) {
      if (typeof (n) !== 'number' || !Number.isInteger(n)) {
         return 'Ошибка ввода данных';
      }
   
      if (n >= 1) {
         return n * factorial(n - 1);
      } else {
         return 1;
      }
   }
   
   //Не учитывая проверки вводимых данных
   function factorial2(n) {
      return n ? n * factorial2(n - 1) : 1;
   }
   
   console.log(factorial(5));
   console.log(factorial2(5));
   */
});


