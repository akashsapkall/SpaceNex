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
document.addEventListener('click', function(event) {
    if (ul && !menu.contains(event.target)) {
    hideNavbar();
    }
});
explore.addEventListener("click",()=>{
    if(onceclicked){
    verMenu.classList.add("hide");
    onceclicked=false;
}
else{
    onceclicked=true;
    verMenu.classList.remove("hide");
}
});
toggeler.addEventListener("click",()=>{
    verMenu.classList.add("hide");
    onceclicked=false;
});
document.addEventListener('click', function(event) {
    if (verMenu && !verMenu.contains(event.target) && !explore.contains(event.target)) {
        console.log('Hiding menu');
        verMenu.classList.add('hide');
        onceclicked = false;
    }
});
