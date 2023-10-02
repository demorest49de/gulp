export const getSearchParams = () => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const paramsObject = Object.fromEntries(searchParams);
    return paramsObject;
};
