
export const setStorage = (key, value) => {
    localStorage.setItem(key, `${value}`);
};


export const getStorage = (key, value) => {
    return localStorage.getItem(key);
};

