import galerryList from '../templates/galerryList.hbs';
import { galerryRef } from './refs';

export default {
  // создаем разметку и пушим ее в HTML
  makeMarkupHTML(result) {
    const markup = galerryList(result);
    galerryRef.insertAdjacentHTML('beforeend', markup);
    // для плавного скрола к загруженной инфе
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  },

  // для удаления всего после поиска нового
  clearMarkupHTML() {
    galerryRef.innerHTML = ''; // todo для удаления всего после поиска нового
  },
};
