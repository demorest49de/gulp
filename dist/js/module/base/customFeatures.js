export const handleSingleCardAligment = () => {
    //
    const list = document.querySelector('.category__cards');
    const items = document.querySelectorAll('.card-category');
    
    if (items.length === 1) {
        list.style.cssText =
            `
            justify-content: start;
            `;
    }
};