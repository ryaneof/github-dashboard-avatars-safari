'use strict';

safari.application.addEventListener( 'message', function (e) {
  if (e.name === 'getSettings') {
    e.target.page.dispatchMessage('setSettings', {
      display: safari.extension.settings.getItem('display')
    });
  }
}, false);
