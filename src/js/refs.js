const formRef = document.querySelector('#search-form'); // ссылка на form
const inputRef = document.querySelector('#search-form > input'); // ссылка на input
const loadBtnRef = document.querySelector('.js-load-btn'); // кнопка-загрузка
const tripleSpinnerRef = document.querySelectorAll('.js-small-spinner'); // ссылка на спиннеры
const spinnerRef = document.querySelector('.js-spinner'); // спинер на кнопке Load more
const mainBtnRef = document.querySelector('.js-btn'); // основная-кнопка
const galerryRef = document.querySelector('.gallery'); // галерея

export {
  formRef,
  inputRef,
  mainBtnRef,
  loadBtnRef,
  tripleSpinnerRef,
  spinnerRef,
  galerryRef,
};
