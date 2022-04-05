import { render } from '../lib.js';

import { navTemplate } from '../views/navView.js';
import { footerTemplate } from '../views/footerView.js';

const header = document.querySelector('.header-nav');
const root = document.getElementById('content');
const footer = document.querySelector('.footer');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
    render(navTemplate(ctx.user), header);
    render(footerTemplate(ctx.user), footer);
    ctx.render = ctxRender;

    next();
}