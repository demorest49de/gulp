export const setStorage = (key, value) => {
    const stringified = JSON.stringify(value);
    localStorage.setItem(key, stringified);
};


export const getStorage = (key) => {
    const storage = localStorage.getItem(key);
    if (storage) {
        return JSON.parse(storage);
    }
    else{
        return [];
    }
};



