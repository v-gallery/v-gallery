import { html } from '../lib.js';

export const navTemplate = (user) => html`
    <nav class="navbar-secondary justify-between">
        
        <div class="container">
            <div class="container">
                <h1 class="site-title">
                    <a href="/" class="active">v-gallery</a>
                </h1>                
            </div>
            <div class="container">
                <ul class="display-f">
                    <li class="ml-1 text-hover-secondary">
                        <a href="/gallery" class="active">Gallery</a>
                    </li>
                    <li class="ml-1 text-hover-secondary">
                        <a href="/#byType" class="active">By Type</a>
                    </li>
                </ul>                
            </div>
            <div class="container">
                ${user 
                    ? html`<!-- User -->
                        <div id="user container">
                            <a id="user-greeting">Welcome, <span class="badge-green text-white ml-1">username</span></a>
                            <ul class="display-f">
                                <li class="ml-1 text-hover-secondary">
                                    <a href="/login" class="active">Create Masterpiece</a>
                                </li>
                                <li class="ml-1 text-hover-secondary">
                                    <a href="/profile" class="active">Profile</a>
                                </li>
                                <li class="ml-1 text-hover-secondary">
                                    <a href="javascript:void(0)" id="logoutBtn">Logout</a>
                                </li>
                            </ul>
                        </div>`
                    : html`<!-- Guest --> 
                        <div id="guest container">
                            <ul class="display-f">
                                <li class="ml-1 text-hover-secondary">
                                    <a href="/login" class="active">Login</a>
                                </li>
                                <li class="ml-1 text-hover-secondary">
                                    <a href="/register" class="active">Sign up</a>
                                </li>
                            </ul>      
                        </div>`
                }                
            </div>
        </div>     
        
    </nav>
`;