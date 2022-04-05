import { getAccessToken, clearUserData } from '../utility.js';

export const settings = {
    host: 'https://parseapi.back4app.com'
}

async function request(method, url, data) {
    const options = {
        method,
        headers:{
            'X-Parse-Application-Id': '5pJfTwHqNO9y4tzWu7T7iD4o4pnCb790qlEcmSCa',
            'X-Parse-REST-API-Key': 'lWiQrzrOj4nYcA0XSWue7FJ8CU1m1kAzRYz83RMY',
            'X-Parse-Revocable-Session': '1'
        }
    }
    
    const token = getAccessToken();
    
    if (token != null) {
        options.headers['X-Parse-Session-Token'] = token;
    }  
    
    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    
    try {
        const response = await fetch(settings.host + url, options);
        
        if (response.ok != true) {
            if (response.status == 403) {
                clearUserData();
            }
            const error = response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
                
    } catch(err) {
        alert(err.message);
        throw err.message;
    }
}

/* Decoration functions */
export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');