import { success } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function onSucess() {
  success({
    text: 'Extra pics succesful loaded!',
    hide: true,
    styling: 'brighttheme',
    delay: 1000,
    icon: false,
    closer: false,
    sticker: false,
    icon: true,
    animation: 'fade',
  });
}

export default onSucess;
