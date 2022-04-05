export function getUserData() {
    return JSON.parse(sessionStorage.getItem('user'));
}

export function getAccessToken() {
    const user = getUserData();
    if(user) {
        return user.sessionToken;
    } else {
        return null;
    }
}

export function clearUserData() {
    sessionStorage.removeItem('user');
}

// store the entire 'user' object in sessionStorage => A JSON document with the objectId, createdAt and sessionToken fields of the newly-created user.
export function setUserData(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
}

export function createSubmitHandler(ctx, handler) { // decorator
    return function (event) {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));
        
        handler(ctx, formData, event);
    };
}

export function parseQuerystring(query = '') {
    return Object.fromEntries(query
        .split('&')
        .map(kvp => kvp.split('=')));
}