import{loadItemsHandler,paginationClickHandler,paginationHandler}from"./handleLoadBlog.js";import{createBreadCrumbs}from"../article/createArticle.js";const createPageLink=a=>{const n=document.createElement("nav");n.classList.add("pagination__navigation"),n.ariaLabel="pagination",n.insertAdjacentHTML("beforeend",'\n            <ul class="pagination__list">\n                 <li class="pagination__item pagination__item-active"><a class="pagination__link" data-pageNumber="1" href="blog.html">1</a></li>\n                 <li class="pagination__item"><a class="pagination__link" data-pageNumber="2" href="blog.html?page=2">2</a></li>\n                 <li class="pagination__item"><a class="pagination__link" data-pageNumber="3" href="blog.html?page=3">3</a></li>\n             </ul>\n        '),a.append(n);return{links:n.querySelectorAll(".pagination__item .pagination__link"),pageList:n.querySelector(".pagination__list")}},addPagination=a=>{a.insertAdjacentHTML("afterbegin",'\n        <a class="pagination__link-left">\n            <svg class="pagination__left-arrow" xmlns="http://www.w3.org/2000/svg"><use href="./img/blog/arrows.svg#left"></use></svg>\n        </a>\n        ');const n=createPageLink(a),e=a.querySelector(".pagination__link-left");n.leftLink=e,a.insertAdjacentHTML("beforeend",'\n        <a class="pagination__link-right" href="blog.html?page=2">\n            <svg class="pagination__right-arrow" xmlns="http://www.w3.org/2000/svg"><use href="./img/blog/arrows.svg#right"></use></svg>\n        </a>\n        ');const t=a.querySelector(".pagination__link-right");return n.rightLink=t,n};export const createBlog=(a,n)=>{const e=document.createElement("main"),t=document.createElement("section");t.classList.add(a),t.ariaLabel="блог";const i=createBreadCrumbs(n.breadCrumbs.blogInfo);e.append(i),e.append(t);const l=document.createElement("h1");l.classList.add("blog__title","visually-hidden"),l.textContent="блог об всем по-немногу!",t.append(l);const o=document.createElement("div");o.classList.add("container","blog__container"),t.append(o);const s=document.createElement("div");s.classList.add("blog__list");const r=document.createElement("div");r.classList.add("blog__pagination","pagination");const g=addPagination(r);o.append(s,r);const c={main:e,blogList:s,blogPagination:r,pageElems:g};n.blogItems=c,paginationClickHandler(n),paginationHandler(n),loadItemsHandler(n),n.app.querySelector("header").after(e)};