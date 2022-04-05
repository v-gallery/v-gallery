import { html } from '../../lib.js';

import { createSubmitHandler } from '../../utility.js';
import { register } from '../../api/user.js';


const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="auth-form">
            <h2>Register</h2>
            <p>Please fill in this form to create an account.</p>
            <hr />
            
            <p>Username</p>
            <input type="text" name="username" placeholder="Enter Username" required />
            
            <p>Email</p>
            <input type="text" name="email" placeholder="Enter Email" required />
            
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter Password" required />
            
            <p>Repeat Password</p>
            <input type="password" name="rePass" placeholder="Repeat Password" required />
            <input type="submit" class="enterBtn" value="Sign up" />
        </form>
        <div class="redirect">
            <p>
                Don't have an account? 
                <a href="/login">Log in</a>.
            </p>
        </div>
    </div>
</section>
`;

export const registerPage = (ctx) => {
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)));    
}

async function onSubmit(ctx, data, event) {
    console.log(data);
    if (data.password != data.rePass) {
        alert('Passwords don\'t match!');
    }
    
    await register(data.username, data.email, data.password);
    event.target.reset();
    ctx.page.redirect('/');
}