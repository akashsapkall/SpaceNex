const menu = document.querySelector(".menu");
const cross= document.querySelector(".cross");
const ul=document.querySelector(".ver-nav");
const explore=document.querySelector(".explore");
const toggeler=document.querySelector(".toggeler");
const verMenu=document.querySelector(".menu-bar");
let onceclicked=false;
menu.addEventListener("click",()=>{
    ul.classList.add("verticle-nav");
    menu.classList.remove("show");
    cross.classList.add("show");
});
function hideNavbar() {
    ul.classList.remove('verticle-nav');
    menu.classList.add('show');
    cross.classList.remove('show');
}
cross.addEventListener("click",()=>{
   hideNavbar();
});
// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }
document.addEventListener('click', function(event) {
    if (ul && !menu.contains(event.target)) {
    hideNavbar();
    }
});
// document.addEventListener('scroll', function(event) {
//     if (ul && !menu.contains(event.target)) {
//         hideNavbar();
//         }
// });

