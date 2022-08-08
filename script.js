const mobileMenuButton = document.querySelector('.main-nav__btn');
const navMenu = document.querySelector('.main-nav');

mobileMenuButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    navMenu.classList.toggle('menu-expanded');
    mobileMenuButton.classList.toggle('menu-expanded');
}