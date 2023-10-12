// --розкидати по файлам
// import './js/swiper';

//----------------------------------------SWIPERS-------------------
const swiper = new Swiper('.circle__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    enabled: true,
    sticky: true,
    momentumBounce: false,
    spaceBetween: 14,
  });

  const bannerSwiper = new Swiper('.banner__swiper', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    slideToClickedSlide: true,
  // breakpoints: {
  //   390: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  });

//------------------------------TOGGLE PROCEDURES CATALOG-------------------
const buttons = document.querySelectorAll('.procedures__button');
const catalogs = document.querySelectorAll('.procedures__item-catalog');
const icons = document.querySelectorAll('.procedures__icon');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
      if (catalogs[index].style.display === 'block') {
          catalogs[index].style.display = 'none';
          icons[index].setAttribute('href', './images/icons_sprite.svg.svg#plus');
      } else {
          catalogs[index].style.display = 'block';
          icons[index].setAttribute('href', './images/icons_sprite.svg.svg#minus');
      }
  });
});