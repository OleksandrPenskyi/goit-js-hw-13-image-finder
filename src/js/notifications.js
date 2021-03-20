import { success } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function onSucess() {
  success({
    text: 'Extra pics succesful loaded!',
    width: '235px',
    hide: true,
    styling: 'brighttheme',
    delay: 1000,
    minHeight: '26px',
    maxTextHeight: '20px',
    icon: false,
    closer: false,
    mouseReset: true,
    sticker: false,
    positioned: true,
  });
}

export default onSucess;
