import {createFooter, createHeader} from "../../base/baseElems.js";

export const renderCatalog = ($) => {
    $.catalog.forEach(({type, name}) => {
        if (type === $.types.header) {
            createHeader(name, $);
            return;
        }
        
        if (type === $.types.main) {
            createMain(name, $);
            return;
        }
        
        if (type === $.types.section) {
            createSection(name, $);
            return;
        }
        
        if (type === $.types.footer) {
            createFooter(name, $);
            return;
        }
    });
};

export const cbRenderCatalog = (error, data, $) => {
    if (error) {
        handleErrorMessage(error, data, $);
        return;
    }
    
    return {data};
};


const handleErrorMessage = (error, data, $) => {
    // $.app.append($.addItemError);
    // setTimeout(() => {
    //     $.addItemError.classList.add('is-visible');
    // }, 300);
    
    if (!data) data = error.message;
    console.warn(error, data);
};