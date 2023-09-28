

export const cbRenderCatalog = (error, data, $) => {
    if (error) {
        handleErrorMessage(error, data, $);
        return;
    }
    
    // $.form.reset();
    // $.overlay.classList.remove('is-visible');
    
    // renderItems(data, $);
    // calculateTotal($);
};


const handleErrorMessage = (error, data, $) => {
    // $.app.append($.addItemError);
    // setTimeout(() => {
    //     $.addItemError.classList.add('is-visible');
    // }, 300);
    
    if (!data) data = error.message;
    console.warn(error, data);
};