import{createBlog}from"./createBlog.js";import{createHeader,createFooter}from"../base/baseElems.js";export const renderBlog=e=>{e.blog.forEach((({type:r,name:o})=>{r!==e.types.header?r!==e.types.blog?r!==e.types.footer||createFooter(o,e):createBlog(o,e):createHeader(o,e)}))};
//# sourceMappingURL=../../../maps/module/blog/renderBlog.js.map
