import * as api from './api.js';
import { clearUserData, setUserData } from '../utility.js';

const endpoints = {
    login: '/login',
    register: '/users',
    logout: '/logout'
}

/* Authentication functions */

export async function login(username, email, password) {
    const result = await api.get(endpoints.login);
    setUserData(result);
    
    return result;
}

// export async function login(username, email, password) {
//     const result = await api.get(endpoints.login, { username, email, password });
//     setUserData(result);
    
//     return result;
// }

export async function register(username, email, password) {
    const result = await api.post(endpoints.register, { username, email, password });
    setUserData(result);
    
    return result;
}

export async function logout() {
    api.post(endpoints.logout, {});
    clearUserData();
}