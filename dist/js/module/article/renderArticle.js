import{createHeader,createFooter}from"../base/baseElems.js";import{createArticle}from"./createArticle.js";export const renderArticle=e=>{e.blog.forEach((({type:r,name:t})=>{r!==e.types.header?r!==e.types.blog?r!==e.types.footer||createFooter(t,e):createArticle(e):createHeader(t,e)}))};
//# sourceMappingURL=../../../maps/module/article/renderArticle.js.map
