import { formRef, inputRef, mainBtnRef, galerryRef } from './js/refs';
import apiService from './js/apiService'; // объект с HTTP запросами
import updateHTML from './js/updateHTML'; // функция создания и добавления разметки в HTML
import btn from './js/btn-work'; // механихм работы кнопок, спиннеров и т.д.
import onSucess from './js/notifications';
import modalWindow from './js/modalWindow';
import './styles.css';

formRef.addEventListener('submit', event => {
  event.preventDefault(); // для сброса стандартных действий браузера
  btn.tripleSpinnerShow(); // добавляем тройной спиннер при загрузке
  updateHTML.clearMarkupHTML(); // для удаления всего после поиска нового
  apiService.query = inputRef.value; // передаем значение input в обьект
  apiService
    .fetchQuery() // HTTP запрос и возврат массива объектов
    .then(updateHTML.makeMarkupHTML) // создаем разметку и пушим ее в HTML
    .finally(() => {
      btn.tripleSpinnerHide(); // прячем тройной спиннер при загрузке
      btn.onBtnSpinnerHide(); // прячем спиннер на кнопке Load more
      btn.mainBtnShow(); // показываем кнопку Load more
    });

  galerryRef.addEventListener('click', modalWindow); // по клику на img в галерее открывется модалка
});

mainBtnRef.addEventListener('click', event => {
  btn.onBtnSpinnerShow(); // показываем спиннер на кнопке Load more
  apiService.increasePageNumber();
  apiService.query = inputRef.value; // передаем значение input в обьект
  apiService
    .fetchQuery() // HTTP запрос и возврат массива объектов
    .then(updateHTML.makeMarkupHTML) // создаем разметку и пушим ее в HTML
    .finally(() => {
      btn.onBtnSpinnerHide(); // прячем спиннер на кнопке Load more
    });
  onSucess(); // нотификашка об успешной загрузке картинок
});
