import { page } from './lib.js';

import { addSession } from './middlewares/session.js';
import { addRender } from './middlewares/render.js';
import { logout } from './api/user.js';

import { editorPage } from './views/editor/editor.js';
import { loginPage } from './views/auth/login.js';
import { registerPage } from './views/auth/register.js';

console.log('it works!');

page(addSession);
page(addRender);

page('/', editorPage);
page('/index.html', '/');
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);



page.start();

console.log('it works!!!');


function onLogout(ctx) {
    logout();
    page.redirect('/');
}