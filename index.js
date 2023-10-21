//----------------------------------------SEARCH FORM-------------------//
const searchForm = document.querySelectorAll(".search-form");
const searchButtonSubmit = document.querySelectorAll(".search__button");
if (searchForm && searchButtonSubmit) {
  searchForm.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const searchValue = event.target.elements.search.value;
      console.log(searchValue)

      if (searchValue === "") {
        return console.log("please enter text");
      }

      const searchResultsUrl = 'search-results.html?query=' + encodeURIComponent(searchValue);
      window.location.href = searchResultsUrl;
      
      form.reset();
    })
  })
}

//----------------------------------------SWIPERS-------------------//
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
  slidesPerView: 'auto',
  loop: true,
  slideToClickedSlide: true,
  breakpoints: {
    1440: {
      slidesPerView: 1,
    }
  },
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

const certificatesSwiper = new Swiper(".certificates__swiper", {
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
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const teamSwiper = new Swiper(".team__swiper", {
  spaceBetween: 40,
  slidesPerView: "auto",
  loop: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    1440: {
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//------------------------------TOGGLE DROPDOWN-------------------
function toggleCatalogItem(button, catalog, icon) {
  button.addEventListener("click", () => {
    if (!catalog.classList.contains("is-open")) {
      catalog.classList.add("is-open");
      if (icon) {
        icon.querySelector("use").setAttribute("href", "./images/icons_sprite.svg.svg#minus");
      }
    } else {
      catalog.classList.remove("is-open");
      if (icon) {
        icon.querySelector("use").setAttribute("href", "./images/icons_sprite.svg.svg#plus");
      }
    }
  });
}

//-----FAQ SECTION
const buttonsFaqSection = document.querySelectorAll(".faq-section__item-button");
const catalogsFaqSection = document.querySelectorAll(".faq-section__list-item");
const iconsFaqSection = document.querySelectorAll(".faq-section__item-icon");

buttonsFaqSection.forEach((button, index) => {
  toggleCatalogItem(button, catalogsFaqSection[index], iconsFaqSection[index]);
});

//-----PROCEDURES
const buttonsProcedures = document.querySelectorAll(".procedures__button");
const catalogsProcedures = document.querySelectorAll(".procedures__item");
const iconsProcedures = document.querySelectorAll(".procedures__icon");

buttonsProcedures.forEach((button, index) => {
  toggleCatalogItem(button, catalogsProcedures[index], iconsProcedures[index]);
});

//-----FOOTER
const buttonFooterItem = document.querySelector(".footer__pages-button");
const catalogFooterServices = document.querySelector(".footer-pages-services__box");
if (buttonFooterItem) {
  toggleCatalogItem(buttonFooterItem, catalogFooterServices);
}

//------------------------------TOGGLE RATING STARS-------------------/
const feedbackSlides = document.querySelectorAll(".feedback__swiper-slide");

feedbackSlides.forEach((slide) => {
  const ratingIcons = slide.querySelectorAll(".feedback__icon-rating");

  ratingIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      const activeIcon = "./images/icons_sprite.svg.svg#chooseon";
      const inactiveIcon = "./images/icons_sprite.svg.svg#chooseoff";

      ratingIcons.forEach((ratingIcon, i) => {
        if (i <= index) {
          ratingIcon.parentElement.querySelector("use").setAttribute("href", activeIcon);
        } else {
          ratingIcon.parentElement.querySelector("use").setAttribute("href", inactiveIcon);
        }
      });
    });
  });
});

//------------------------------SHOW/HIDE FEEDBACK-------------------/
const toggleButtons = document.querySelectorAll(".feedback__toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const icon = button.querySelector(".toggle-button__icon use");
    const buttonText = button.querySelector(".button-text");

    const iconEyeOn = "./images/icons_sprite.svg.svg#eye";
    const iconEyeOff = "./images/icons_sprite.svg.svg#eye-off";

    const textPart = button.previousElementSibling.querySelector(".feedback__text-part");

    if (textPart.style.display === "none" || textPart.style.display === "") {
      textPart.style.display = "block";
      buttonText.textContent = "Hide all text";
      icon.setAttribute("href", `${iconEyeOff}`);
    } else {
      textPart.style.display = "none";
      buttonText.textContent = "View all text";
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

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  });
})();


// -------------MOBILE SUBMENU------------
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

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  });
})();


// --------------FILTER MOBILE MENU-----------
(() => {
  const mobileMenu = document.querySelector(".js-filter-menu-container");
  const openMenuBtn = document.querySelector(".js-open-filter-menu");
  const closeMenuBtn = document.querySelectorAll(".js-close-filter-menu");
  const checkboxes = document.querySelectorAll('.filter-desctop__checkbox-item');
  const overlay = document.querySelector(".overlay");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    overlay.classList.toggle("overlay-visible");

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", toggleMenu);
  }
  for (let item of closeMenuBtn) {
    item.addEventListener("click", toggleMenu);
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', (e) => {
    if (window.innerWidth >= 1440) {
      return
    }
    const condition = e.currentTarget.classList.contains('checked');
    if (!condition) {
      toggleMenu()
    }
  }))


  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    overlay.classList.toggle("overlay-visible");
    document.body.classList.remove("no-scroll");
  });
})();

// -------------------SORT MENU--------------------//
(() => {
  const mobileMenu = document.querySelector(".js-sort-menu");
  const openMenuBtn = document.querySelector(".js-open-sort-menu");
  const closeMenuBtn = document.querySelectorAll(".js-close-sort-menu");
  const radioButtons = document.querySelectorAll(".sort-mob-menu__label");
  const overlay = document.querySelector(".overlay");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    overlay.classList.toggle("overlay-visible");

    radioButtons.forEach(button => {
      button.removeEventListener('click', toggleMenu)
    })

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const toggleDescMenu = () => {
    const mobileMenu = document.querySelector(".services-filter__menu-sort");

    mobileMenu.classList.toggle("is-open");
  }

  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", () => {
      if (window.innerWidth >= 1440) {
        toggleDescMenu()
        return
      }

      toggleMenu()
      radioButtons.forEach(button => {
        button.addEventListener('click', toggleMenu)
      })
    });
  }

  for (let item of closeMenuBtn) {
    item.addEventListener("click", toggleMenu);
  }

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    overlay.classList.remove("overlay-visible");
    document.body.classList.remove("no-scroll");
  });
})();

// -------------------SORT--------------------//
const radioButtons = document.querySelectorAll(".sort-mob-menu__label");

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', () => {
    radioButtons.forEach(button => {
      button.classList.remove("checked")
    })
    radioButton.classList.add("checked")
  })
})

// ---------------------CUSTOM SELECT----------------------
const select = function () {
  const selectHeader = document.querySelectorAll(".select-header");
  const selectItem = document.querySelectorAll(".select-item");

  selectHeader.forEach(item => {
    item.addEventListener('click', function () {
      const select = this.parentElement;
      select.classList.toggle("is-active");
      const chevronIcon = select.querySelector('.select-icon svg use');
      if (select.classList.contains('is-active')) {
        chevronIcon.setAttribute('href', './images/icons_sprite.svg.svg#chevron-up');
      } else {
        chevronIcon.setAttribute('href', './images/icons_sprite.svg.svg#chevron-down');
      }
    });
  });

  selectItem.forEach(item => {
    item.addEventListener('click', function () {
      const text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select-current');
      currentText.innerText = text;
      select.classList.remove('is-active');

      const chevronIcon = select.querySelector('.select-icon svg use');
      chevronIcon.setAttribute('href', './images/icons_sprite.svg.svg#chevron-down');
    });
  });
}

select();

// ---------------FILTER------------
const selectBtns = document.querySelectorAll('.filter-desctop-type__head'),
  items = document.querySelectorAll('.filter-desctop__checkbox-item');

const servicesList = document.querySelectorAll('.services-page__item');

selectBtns.forEach(selectBtn => {
  selectBtn.addEventListener('click', () => {
    selectBtn.classList.toggle("open")
  })
})

const choiceList = document.querySelector('.choice-list');

items.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle("checked");

    let filterTypeClass = e.currentTarget.dataset['filter'];
    let filterEffectClass = e.currentTarget.dataset['filter'];

    servicesList.forEach(item => {
      if (!item.classList.contains(filterTypeClass) || !item.classList.contains(filterEffectClass)) {
        item.classList.toggle('hide-services-page__item')
      }
    })
  })
})


//-------------------SLIDER PRICE--------------
const currentPage = window.location.pathname;

function createSlider(sliderId, inputIds) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const inputs = inputIds.map(id => document.getElementById(id));

  noUiSlider.create(slider, {
    start: [150, 400],
    connect: true,
    step: 10,
    range: {
      'min': [150],
      'max': [400]
    }
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    slider.noUiSlider.set(arr);
  }

  slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  inputs.forEach((input, index) => {
    input.addEventListener('change', event => {
      setRangeSlider(index, event.currentTarget.value);
    });
  });
}


if (currentPage === "/services.html") {
  createSlider('filter-price__range-slider', ['input-1', 'input-2']);
  createSlider('filter-price-mob__range-slider', ['input-3', 'input-4']);
}


// -------------------SEARCH PANEL--------------------//
const searchButton = document.getElementById('js-open-panelSearch');
const searchPanelHeader = document.getElementById('js-search-panel-header');
const serachIcon = document.getElementById('js-search-button-icon');

if (searchButton) {
  searchButton.addEventListener('click', (e) => {
    searchPanelHeader.classList.toggle("is-open");
    if (searchPanelHeader.classList.contains("is-open")) {
      serachIcon.querySelector('use').setAttribute('href', './images/icons_sprite.svg.svg#close-icon');
    } else {
      serachIcon.querySelector('use').setAttribute('href', './images/icons_sprite.svg.svg#search');
    }
  })
}

// -------------------INFO CALCULATOR--------------------//
const calculator = document.querySelector(".calculator__dropdouwn");
const buttonCalculatorOpen = document.querySelector(".calculator-dropdouwn__button-open");
const buttonsPrice = document.querySelectorAll(".calculator__dropdouwn-button-box");
const totalValue = document.querySelector(".calculator-total-price__value");

if (buttonCalculatorOpen) {
  buttonCalculatorOpen.addEventListener('click', () => {
    calculator.classList.toggle("is-open");
  })

  buttonsPrice.forEach(button => {
    button.addEventListener('click', (e) => {
      const label = button.querySelector(".calculator-dropdouwn__label");
      const labelText = label.textContent;
      totalValue.textContent = labelText;
    })
  })
}

