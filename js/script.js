// Menu
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__btn')
const menuLink = document.querySelectorAll('.menu__link')

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('menu--active')
})

menuLink.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('menu--active')
    })
})

// header sticky
const header = document.querySelector(".header");
window.onscroll = function () {
    if (window.pageYOffset > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}