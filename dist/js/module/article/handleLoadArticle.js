export const loadItemsHandler = ($) => {
    
    const loadArticle = async (search, callback) => {
        const result = await fetch(`https://gorest.co.in/public-api/posts/${search.id}`);
        const data = await result.json();
        
        const userId = callback(data);
        return userId;
    };
    
    const getUser = async (id, callback) => {
        const result = await fetch(`https://gorest.co.in/public-api/users/${id}`);
        const data = await result.json();
        
        callback(data);
    };
    
    const updateArticle = (data) => {
        const apiData = data.data;
        let textTitle = apiData.title;
        if(textTitle[textTitle.length -1] === '.'){
           const arrText = [...textTitle];
           arrText.splice(-1, 1);
            textTitle = arrText.join('');
        }
        $.bcLink.textContent = textTitle;
        $.title.textContent = textTitle;
        document.title = textTitle;
        $.text.textContent = apiData.body;
        
        return apiData.user_id;
    };
    
    const updateUser = (data) => {
        const api = data.data;
        $.author.textContent = api.name;
    };
    
    const getSearchParams = () => {
        const paramsString = window.location.search;
        const searchParams = new URLSearchParams(paramsString);
        const paramsObject = Object.fromEntries(searchParams);
        return paramsObject;
    };
    
    const searchObject = getSearchParams();
    $.bcLink.href += `?id=${searchObject.id}`;
    const promiseId = loadArticle(searchObject, updateArticle);
    
    promiseId.then(id => {
        getUser(id, updateUser);
    });
    
};