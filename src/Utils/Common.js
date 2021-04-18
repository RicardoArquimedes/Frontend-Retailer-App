// return the User data from the session storage
export const getUser = () => {
    const UserStr = localStorage.getItem('User');
    if (UserStr) return JSON.parse(UserStr);
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    return localStorage.getItem('token') || null;
}

// remove the token and User from the local storage
export const removeUserlocal = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('User');
}

// set the token and User from the local storage
export const setUserlocal = (token, User) => {
    localStorage.setItem('token', token);
    localStorage.setItem('User', JSON.stringify(User));
}