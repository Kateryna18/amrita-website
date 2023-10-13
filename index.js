// --розкидати по файлам
// --зірки однаково обираються на всіх айтемах
// --зникає іконка при натисканні на фідбек
// --різна висота тексту і від цього різа висота контейнера
// --стрілки що огортають пагінацію

//----------------------------------------SWIPERS-------------------
const swiper = new Swiper(".circle__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  enabled: true,
  sticky: true,
  momentumBounce: false,
  spaceBetween: 14,
});

const bannerSwiper = new Swiper(".banner__swiper", {
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
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

const popularSwiper = new Swiper(".popular__swiper", {
  spaceBetween: 20,
  slidesPerView: "auto",
  loop: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    1440: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});

const feedbackSwiper = new Swiper(".feedback__swiper", {
  loop: true,
  breakpoints: {
    843: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//------------------------------TOGGLE PROCEDURES CATALOG-------------------
const buttons = document.querySelectorAll(".procedures__button");
const catalogs = document.querySelectorAll(".procedures__item-catalog");
const icons = document.querySelectorAll(".procedures__icon");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (catalogs[index].style.display === "block") {
      catalogs[index].style.display = "none";
      icons[index].setAttribute("href", "./images/icons_sprite.svg.svg#plus");
    } else {
      catalogs[index].style.display = "block";
      icons[index].setAttribute("href", "./images/icons_sprite.svg.svg#minus");
    }
  });
});

//------------------------------TOGGLE RATING STARS-------------------/
const ratingIcons = document.querySelectorAll(".feedback__icon-rating");

ratingIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    const activeIcon = "./images/icons_sprite.svg.svg#chooseon";
    const inactiveIcon = "./images/icons_sprite.svg.svg#chooseoff";

    const currentIndex = Array.from(ratingIcons).indexOf(icon);

    ratingIcons.forEach((ratingIcon, i) => {
      if (i <= currentIndex) {
        ratingIcon.querySelector("use").setAttribute("href", activeIcon);
      } else {
        ratingIcon.querySelector("use").setAttribute("href", inactiveIcon);
      }
    });
  });
});

//------------------------------SHOW/HIDE FEEDBACK-------------------/
const toggleButtons = document.querySelectorAll(".feedback__toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const icon = button.querySelector(".toggle-button__icon use");
    console.log(icon);

    const iconEyeOn = "./images/icons_sprite.svg.svg#eye";
    const iconEyeOff = "./images/icons_sprite.svg.svg#eye-off";

    const textPart = button.previousElementSibling.querySelector(
      ".feedback__text-part"
    );

    if (textPart.style.display === "none" || textPart.style.display === "") {
      textPart.style.display = "block";
      button.textContent = "Hide all text";
      icon.setAttribute("href", `${iconEyeOff}`);
    } else {
      textPart.style.display = "none";
      button.textContent = "View all text";
      icon.setAttribute("href", `${iconEyeOn}`);
    }
  });
});

//-----------------MOBILE MENU------------------------------------
(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelectorAll(".js-close-menu");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  for (let item of closeMenuBtn) {
    item.addEventListener("click", toggleMenu);
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  });
})();

(() => {
  const mobileMenu = document.querySelector(".js-menu2-container");
  const openMenuBtn = document.querySelector(".js-open-menu2");
  const closeMenuBtn = document.querySelectorAll(".js-close-menu2");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  for (let item of closeMenuBtn) {
    item.addEventListener("click", toggleMenu);
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  });
})();