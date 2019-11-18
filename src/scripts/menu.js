//////////секция приветствия всплывающее полноэкранное меню
const hoverMenu = document.querySelector('.menu__close');
const hamburgerMenu = document.querySelector('.menu__hamb-button');
const cross = document.querySelector('.menu__hover-button');
const navHover = document.querySelectorAll('.nav__link-hover');

hamburgerMenu.addEventListener('click', function(e) {
    e.preventDefault();
    hoverMenu.style.display = 'block';
});
cross.addEventListener('click', function(e) {
    e.preventDefault();
    hoverMenu.style.display = 'none';
});