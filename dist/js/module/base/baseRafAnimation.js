export const rafAnimation=(e,n,a)=>{let i=NaN,t=NaN;i=window.requestAnimationFrame((function o(m){t||=m;let r=((m-t)/e).toFixed(2);n>0?(a(r),r<1?i=requestAnimationFrame(o):cancelAnimationFrame(i)):(r=(1-r).toFixed(2),a(r),r>0?i=requestAnimationFrame(o):cancelAnimationFrame(i))}))};
//# sourceMappingURL=../../../maps/module/base/baseRafAnimation.js.map
