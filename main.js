hamburger = document.querySelector('.hamburger');

// hamburger.onclick = function(){
//     hamburger.classList.toggle("hamburger-active");
//     mobilemenu = document.querySelector(".mobile-menu-list");
//     mobilemenu.classList.toggle("menu-active")
// }


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("hamburger-active");
    mobilemenu = document.querySelector(".mobile-menu-list");
    mobilemenu.classList.toggle("menu-active")

})