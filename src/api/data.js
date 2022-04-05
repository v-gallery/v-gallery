import * as api from './api.js';

const endpoints = {
    all: '/classes/Item',
    byId: `/classes/Item/${id}`,
    own: `/classes/Item/${id}`,
    userItems: '',
    create: '',
    update: '',
    remove: '',
    sortByCriteria1: '',
    sortByCriteria2: ''
}

function createPointer(name, id) {
    return {
        __type: 'Pointer', 
        className: name,
        objectId: id            
    };
}

function addAuthor(object) {
    const userId = sessionStorage.getItem('userId');
    const result = Object.assign({}, object);
    result.author = createPointer('_User', userId);
    return result;
}

// Read Item Collection
export async function getAll() {
    return api.get(endpoints.all);
} //  [{...}, {...}, {...}] ?

export async function getById(id) {
    return api.get(endpoints.byId);
} 

export async function getOwnItems(ownerId) {
    // TODO write the query (authorId === userId)
    return api.get(endpoints.own);
}

export async function getUserItems(userId) {
    // TODO write the query (authorId === userId)
    return api.get(endpoints.userItems);
}

// Create, Update, Delete 
export async function createItem(item) {
    const body = addAuthor(item);    
    return api.post(endpoints.create, body);
}
   
export async function updateItem(id, item) {
    return api.put(endpoints.update + id, item);
}

export async function deleteItem(id) {
    return await api.del(endpoints.remove + id);
}

