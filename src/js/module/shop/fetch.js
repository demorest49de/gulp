import {cbRenderCatalog} from "./category/renderCategory.js";

const fetchRequest = async ({
                                url,
                                method = 'get',
                                id = '',
                                callback,
                                headers,
                                vars = {},
                                body,
                                search = "",
                            }) => {
    try {
        const options = {
            method,
        };
        
        if (id) url += id.toString();
        
        if (body) options.body = JSON.stringify(body);
        
        if (headers) options.headers = headers;
        
        const response = await fetch(url, options);
        
        if (response.ok) {
            const data = await response.json();
            if (callback && id) return callback(null, data, vars, id);
            if (callback && search) return callback(null, data, vars, search);
            
            if (callback) return callback(null, data, vars);
            return;
        }
        
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    } catch (err) {
        console.log(' : ', err);
        return callback(err, null, vars);
    }
};

export const getItemById = async ($, id) => {
    return await fetchRequest({
        
        url: $.URL + $.api + $.goods + `/${id}`,
        method: $.get,
        headers: {'Content-Type': 'application/json'},
        callback: cbRenderCatalog,
        vars: $,
    });
};

export const getGoodsWithDiscount = async ($) => {
    return await fetchRequest({
       
        url: $.URL + $.api + $.goods + `/discount`,
        method: $.get,
        headers: {'Content-Type': 'application/json'},
        callback: cbRenderCatalog,
        vars: $,
    });
};

export const getGoodsByCategory = async ($, categoryName) => {
    return await fetchRequest({
        url: $.URL + $.api + $.goods + $.category + `/${categoryName}`,
        method: $.get,
        headers: {'Content-Type': 'application/json'},
        callback: cbRenderCatalog,
        vars: $,
    });
};

export const getGoods = async ($) => {
    return await fetchRequest({
        url: $.URL + $.api + $.goods,
        method: $.get,
        headers: {'Content-Type': 'application/json'},
        callback: cbRenderCatalog,
        vars: $,
    });
};

export const getCategory = async ($) => {
    return await fetchRequest({
        url: $.URL + $.api + $.category,
        method: $.get,
        headers: {'Content-Type': 'application/json'},
        callback: cbRenderCatalog,
        vars: $,
    });
};