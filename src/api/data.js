import * as api from './api.js';

const host = 'https://parseapi.back4app.com';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Implement application-specific requests
function createPointer(name, id) {
    return {
        __type: 'Pointer', 
        className: name,
        objectId: id            
    };
}

function addOwner(object) {
    const userId = sessionStorage.getItem('userId');
    const result = Object.assign({}, object);
    result.author = createPointer('_User', userId);
    return result;
}

// Item Collection
export async function getItems() {
    return await api.get(host + '/classes/Item');
}    

export async function getItemById(id) {
    return await api.get(host + '/classes/Item/' + id + '?include=author');
} 


export async function createItem(item) {
    const body = addOwner(item);    
    return await api.post(host + '/classes/Item', body);
}
   
export async function updateItem(id, item) {
    return await api.put(host + '/classes/Item/' + id, item);
}

export async function deleteItem(id) {
    return await api.del(host + '/classes/Item/' + id);
}
