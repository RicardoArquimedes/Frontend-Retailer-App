// return the User data from the session storage
export const getUser = () => {
    const UserStr = sessionStorage.getItem('User');
    if (UserStr) return JSON.parse(UserStr);
    else return null;
}

// return the gov_id from the session storage
export const getgov_id = () => {
    return localStorage.getItem('gov_id') || null;
}

// remove the gov_id and User from the local storage
export const removeUserlocal = () => {
    localStorage.removeItem('gov_id');
    localStorage.removeItem('User');
}

// set the gov_id and User from the local storage
export const setUserlocal = (gov_id, User) => {
    localStorage.setItem('gov_id', gov_id);
    localStorage.setItem('User', JSON.stringify(User));
}