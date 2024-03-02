/**
* Этот скрипт управляет поведением меню бургеров, прокруткой header,
* и стилями фокусировки для навигационных ссылок.
*/

// Выбор элементов DOM
const burgerMenu = document.querySelector('.burger-menu');
const headerNavigation = document.querySelector('.header__navigation');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');

// Переключать меню бургеров, навигацию по заголовку, наложение и основную прокрутку
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu_active');
  headerNavigation.classList.toggle('header__navigation_active');
  overlay.classList.toggle('overlay_active');
  body.classList.toggle('stop-scroll');
});

// Изменение стилей header при прокрутке
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    header.style.paddingBlock = '10px';
    header.style.backgroundColor = 'var(--color-green)';
  }  else {
    header.style.paddingBlock = '';
    header.style.paddingTop = '32px';
    header.style.backgroundColor = '';
  }
});

// Добавление стилей фокусировки к навигационным ссылкам
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('focus', function() {
    this.parentElement.classList.add('nav__item--focused');
  });

  link.addEventListener('blur', function() {
    this.parentElement.classList.remove('nav__item--focused');
  });
});
