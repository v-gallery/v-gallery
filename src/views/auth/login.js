import { html } from '../../lib.js';

import { createSubmitHandler } from '../../utility.js';
import { login } from '../../api/user.js';


const loginTemplate = (onSubmit) => html`
    <section id="login">
        <div class="container">
            <form @submit=${onSubmit} id="auth-form">
                <h2>Login</h2>
                <p>Please enter your credentials.</p>
                <hr />
                
                <p>Username</p>
                <input type="text" name="username" placeholder="Enter Username" />
                
                <p>Email</p>
                <input type="text" name="username" placeholder="Enter Email" />
                
                <p>Password</p>
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit" class="enterBtn" value="Login" />
            </form>
            <div class="redirect">
                <p>
                    Don't have an account? 
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>
`;

export const loginPage = (ctx) => {
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));    
}

async function onSubmit(ctx, data, event) {
    await login(data.email, data.password);
    event.target.reset();
    ctx.page.redirect('/');
}