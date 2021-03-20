import { mainBtnRef, loadBtnRef, tripleSpinnerRef, spinnerRef } from './refs';

export default {
  // показываем тройной спиннер при загрузке
  tripleSpinnerShow() {
    tripleSpinnerRef.forEach(item => {
      item.classList.remove('is-hidden');
    });
  },

  // прячем тройной спиннер при загрузке
  tripleSpinnerHide() {
    tripleSpinnerRef.forEach(item => {
      item.classList.add('is-hidden');
    });
  },

  // показываем спиннер на кнопке Load more
  onBtnSpinnerShow() {
    spinnerRef.classList.remove('is-hidden');
  },

  // прячем спиннер на кнопке Load more
  onBtnSpinnerHide() {
    spinnerRef.classList.add('is-hidden');
  },

  // показываем кнопку Load more
  mainBtnShow() {
    mainBtnRef.classList.remove('is-hidden');
    loadBtnRef.classList.remove('is-hidden');
  },
};
