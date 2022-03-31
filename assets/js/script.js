const MENU_BTN = document.getElementById('mobile-menu');
const NAV = document.getElementById('nav');
const MENU_ICON = document.getElementById('menu-icon');


const toggleMenu = () => {
   NAV.classList.toggle('mobile-nav');
   MENU_BTN.classList.toggle('is-active');
   MENU_ICON.classList.toggle('fa-close');
}

MENU_BTN.addEventListener('click',toggleMenu);
NAV.addEventListener('click',toggleMenu);
