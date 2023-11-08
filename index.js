//----------------------------------------SEARCH FORM-------------------//
const searchForm = document.querySelectorAll(".search-form");
const searchButtonSubmit = document.querySelectorAll(".search__button");
if (searchForm && searchButtonSubmit) {
  searchForm.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchValue = event.target.elements.search.value;
      console.log(searchValue);

      if (searchValue === "") {
        return console.log("please enter text");
      }

      const searchResultsUrl =
        "search-results.html?query=" + encodeURIComponent(searchValue);
      window.location.href = searchResultsUrl;

      form.reset();
    });
  });
}

//----------------------------------------SWIPERS-------------------//
const circleSwiper = document.querySelector(".circle__swiper");
if (circleSwiper) {
  new Swiper(".circle__swiper", {
    slidesPerView: "auto",
    spaceBetween: 14,
    loop: false,
    enabled: true,
    sticky: true,
    momentumBounce: false,
    breakpoints: {
      843: {
        spaceBetween: 20,
      },
      1440: {
        spaceBetween: 30,
      },
    },
  });
}

const bannerSwiper = document.querySelector(".banner__swiper");
if (bannerSwiper) {
  new Swiper(".banner__swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
      843: {
        spaceBetween: 40,
        slidesPerView: "auto",
      },
      1440: {
        slidesPerView: 1,
      },
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
}

const popularSwiper = document.querySelector(".popular__swiper");
if (popularSwiper) {
  new Swiper(".popular__swiper", {
    spaceBetween: 20,
    slidesPerView: 1.19,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      843: {
        slidesPerView: 2.52,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    },
  });
}

const feedbackSwiper = document.querySelector(".feedback__swiper");
if (feedbackSwiper) {
  new Swiper(".feedback__swiper", {
    loop: true,
    spaceBetween: 20,
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
}

const certificatesSwiper = document.querySelector(".certificates__swiper");
if (certificatesSwiper) {
  new Swiper(".certificates__swiper", {
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
}

const teamSwiper = document.querySelector(".team__swiper");
if (teamSwiper) {
  new Swiper(".team__swiper", {
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
}

//------------------------------TOGGLE DROPDOWN-------------------//
function toggleCatalogItem(button, catalog, iconPlus, iconMinus) {
  button.addEventListener("click", () => {
    if (!catalog.classList.contains("is-open")) {
      catalog.classList.add("is-open");
      if (iconMinus) {
        iconPlus.style.display = "none";
        iconMinus.style.display = "block";
      }
    } else {
      catalog.classList.remove("is-open");
      if (iconPlus) {
        iconMinus.style.display = "none";
        iconPlus.style.display = "block";
      }
    }
  });
}

//-----MOBILE/TABLET SUBMENU BUTTON SERVICES
const mobileSubmenuButtonsServices = document.querySelectorAll(".mobile-submenu__button-services");
const mobileSubmenuCatalogServices = document.querySelectorAll(".mobile-submenu-item__container");
const mobileSubmenuIconPlus = document.querySelectorAll(".mobile-submenu__icon-services.plus");
const mobileSubmenuIconMinus = document.querySelectorAll(".mobile-submenu__icon-services.minus");

if (mobileSubmenuButtonsServices) {
  mobileSubmenuButtonsServices.forEach((button, index) => {
    toggleCatalogItem(button, mobileSubmenuCatalogServices[index], mobileSubmenuIconPlus[index], mobileSubmenuIconMinus[index]);
  })
}


//-----FAQ SECTION
const buttonsFaqSection = document.querySelectorAll(
  ".faq-section__item-button"
);
const catalogsFaqSection = document.querySelectorAll(".faq-section__list-item");
const iconsFaqSectionPlus = document.querySelectorAll(".faq-section__item-icon.plus");
const iconsFaqSectionMinus = document.querySelectorAll(".faq-section__item-icon.minus");

buttonsFaqSection.forEach((button, index) => {
  toggleCatalogItem(button, catalogsFaqSection[index], iconsFaqSectionPlus[index], iconsFaqSectionMinus[index]);
});

//-----PROCEDURES
const buttonsProcedures = document.querySelectorAll(".procedures__button");
const catalogsProcedures = document.querySelectorAll(".procedures__item");
const iconsProceduresPlus = document.querySelectorAll(".procedures__icon.plus");
const iconsProceduresMinus = document.querySelectorAll(".procedures__icon.minus");

buttonsProcedures.forEach((button, index) => {
  toggleCatalogItem(button, catalogsProcedures[index], iconsProceduresPlus[index], iconsProceduresMinus[index]);
});

//-----FOOTER
const buttonFooterItem = document.querySelector(".footer__pages-button");
const catalogFooterServices = document.querySelector(
  ".footer-pages-services__box"
);
if (buttonFooterItem) {
  toggleCatalogItem(buttonFooterItem, catalogFooterServices);
}

//-----TOOGLE CHOOSE TIME
const buttonChooseTime = document.querySelectorAll(".data-time__toggle-button");
if (buttonChooseTime.length) {
  buttonChooseTime.forEach((button, index) => {
    const listChooseTime = document.querySelectorAll(".data-time__box");
    toggleCatalogItem(button, listChooseTime[index]);
  });
}

//-----TOOGLE CHOOSE SPECIALIST
const buttonChooseSpecialist = document.querySelector(
  ".specialists__head-button"
);
const catalogChooseSpecialist = document.querySelector(".specialists__head");
if (buttonChooseSpecialist) {
  toggleCatalogItem(buttonChooseSpecialist, catalogChooseSpecialist);

  const specialistsList = document.querySelectorAll(".specialists-list__item");
  if (specialistsList.length) {
    specialistsList.forEach((item, index) => {
      catalogChooseSpecialist.classList.remove("selected");
      item.addEventListener("click", (e) => {
        e.stopPropagation();

        const specialistsName = document.querySelectorAll(
          ".specialists-dropdown__name"
        );
        const buttonTitle = document.querySelector(
          ".specialists-head__button-text"
        );

        buttonTitle.textContent = specialistsName[index].textContent;

        const specialistValue = document.getElementById("booking-info-block__value-specialist");
        specialistValue.textContent = specialistsName[index].textContent;

        catalogChooseSpecialist.classList.add("selected");
        catalogChooseSpecialist.classList.toggle("is-open");
      });
    });
  }

  const specialistsDesctop = document.querySelectorAll(
    ".specialists__item-desctop"
  );
  if (specialistsDesctop) {
    specialistsDesctop.forEach(specialistDesctop => {
      specialistDesctop.addEventListener("click", () => {
        const specialistName = specialistDesctop.querySelector(".specialists__name-desctop");

        const specialistValue = document.getElementById("booking-info-block__value-specialist");
        specialistValue.textContent = specialistName.textContent;
      })
    })
  }
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
          ratingIcon.parentElement
            .querySelector("use")
            .setAttribute("href", activeIcon);
        } else {
          ratingIcon.parentElement
            .querySelector("use")
            .setAttribute("href", inactiveIcon);
        }
      });
    });
  });
});

//------------------------------SHOW/HIDE FEEDBACK-------------------/
const toggleButtons = document.querySelectorAll(".feedback__toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const iconEyeOn = button.querySelector(".toggle-button__icon.eye-on");
    const iconEyeOff = button.querySelector(".toggle-button__icon.eye-off");
    const buttonText = button.querySelector(".button-text");

    const textPart = button.previousElementSibling.querySelector(
      ".feedback__text-part"
    );

    if (textPart.style.display === "none" || textPart.style.display === "") {
      textPart.style.display = "block";
      buttonText.textContent = "Hide all text";
      iconEyeOn.style.display = "none";
      iconEyeOff.style.display = "block";
    } else {
      textPart.style.display = "none";
      buttonText.textContent = "View all text";
      iconEyeOff.style.display = "none";
      iconEyeOn.style.display = "block";
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
  const checkboxes = document.querySelectorAll(
    ".filter-desctop__checkbox-item"
  );
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

  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", (e) => {
      if (window.innerWidth >= 1440) {
        return;
      }
      const condition = e.currentTarget.classList.contains("checked");
      if (!condition) {
        toggleMenu();
      }
    })
  );

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

    radioButtons.forEach((button) => {
      button.removeEventListener("click", toggleMenu);
    });

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const toggleDescMenu = () => {
    const mobileMenu = document.querySelector(".services-filter__menu-sort");

    mobileMenu.classList.toggle("is-open");
  };

  if (openMenuBtn) {
    openMenuBtn.addEventListener("click", () => {
      if (window.innerWidth >= 1440) {
        toggleDescMenu();
        return;
      }

      toggleMenu();
      radioButtons.forEach((button) => {
        button.addEventListener("click", toggleMenu);
      });
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

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", () => {
    radioButtons.forEach((button) => {
      button.classList.remove("checked");
    });
    radioButton.classList.add("checked");
  });
});

// ---------------------CUSTOM SELECT----------------------
const select = function () {
  const selectHeader = document.querySelectorAll(".select-header");
  const selectItem = document.querySelectorAll(".select-item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", function () {
      const select = this.parentElement;
      select.classList.toggle("is-active");
      const chevronIcon = select.querySelector(".select-icon svg use");
      if (select.classList.contains("is-active")) {
        chevronIcon.setAttribute(
          "href",
          "./images/icons_sprite.svg.svg#chevron-up"
        );
      } else {
        chevronIcon.setAttribute(
          "href",
          "./images/icons_sprite.svg.svg#chevron-down"
        );
      }
    });
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", function () {
      const text = this.innerText,
        select = this.closest(".select"),
        currentText = select.querySelector(".select-current");
      currentText.innerText = text;
      select.classList.remove("is-active");

      const chevronIcon = select.querySelector(".select-icon svg use");
      chevronIcon.setAttribute(
        "href",
        "./images/icons_sprite.svg.svg#chevron-down"
      );
    });
  });
};

select();

// ---------------FILTER------------
const selectBtns = document.querySelectorAll(".filter-desctop-type__head"),
  items = document.querySelectorAll(".filter-desctop__checkbox-item");

// відкриття-закриття меню
selectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
  });
});

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    let filterTypeClass = e.currentTarget.dataset["filter"];
    let filterEffectClass = e.currentTarget.dataset["filter"];

    item.classList.toggle("checked");

    const choiceItemText = item.querySelector(
      ".filter-desctop__checkbox-text"
    ).textContent;

    const filterButtons = document.querySelectorAll(".choice-list__item");

    if (item.classList.contains("checked")) {
      filterButtons.forEach((button) => {
        const filterButtonText = button.querySelector(
          ".choice-list__button-text"
        ).textContent;

        if (choiceItemText === filterButtonText) {
          button.style.display = "block";
        }

        button.addEventListener("click", () => {
          button.style.display = "none";
          if (choiceItemText === filterButtonText) {
            item.classList.remove("checked");
          }
          filterServices(filterTypeClass, filterEffectClass);
        });
      });
    }

    filterServices(filterTypeClass, filterEffectClass);
  });
});

function filterServices(filterTypeClass, filterEffectClass) {
  const servicesList = document.querySelectorAll(".services-page__item");

  servicesList.forEach((item) => {
    if (
      !item.classList.contains(filterTypeClass) ||
      !item.classList.contains(filterEffectClass)
    ) {
      item.classList.toggle("hide-services-page__item");
    }
  });
}

//-------------------SLIDER PRICE--------------
const currentPage = window.location.pathname;

function createSlider(sliderId, inputIds) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const inputs = inputIds.map((id) => document.getElementById(id));

  noUiSlider.create(slider, {
    start: [0, 0],
    connect: true,
    step: 10,
    range: {
      min: [0],
      max: [400],
    },
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    slider.noUiSlider.set(arr);
  };

  slider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  inputs.forEach((input, index) => {
    input.addEventListener("change", (event) => {
      setRangeSlider(index, event.currentTarget.value);
    });
  });
}

if (currentPage === "/services.html") {
  createSlider("filter-price__range-slider", ["input-1", "input-2"]);
  createSlider("filter-price-mob__range-slider", ["input-3", "input-4"]);
}

// -------------------SEARCH PANEL--------------------//
const searchButton = document.getElementById("js-open-panelSearch");
const searchPanelHeader = document.getElementById("js-search-panel-header");
const serachIcon = document.querySelector(".search__button__icon-search");
const closeIcon = document.querySelector(".search__button__icon-close");

if (searchButton) {
  searchButton.addEventListener("click", (e) => {
    searchPanelHeader.classList.toggle("is-open");
    if (searchPanelHeader.classList.contains("is-open")) {
      serachIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      closeIcon.style.display = "none";
      serachIcon.style.display = "block";
    }
  });
}

// -------------------INFO CALCULATOR--------------------//
const calculator = document.querySelector(".calculator__dropdouwn");
const buttonCalculatorOpen = document.querySelector(
  ".calculator-dropdouwn__button-open"
);
const buttonsPrice = document.querySelectorAll(
  ".calculator__dropdouwn-button-box"
);
const totalValue = document.querySelector(".calculator-total-price__value");
const priceValues = document.querySelectorAll(
  ".booking-info-block__value-price"
);
const durationValues = document.querySelectorAll(
  ".booking-info-block__value-time"
);

if (buttonCalculatorOpen) {
  buttonCalculatorOpen.addEventListener("click", () => {
    calculator.classList.toggle("is-open");
  });

  buttonsPrice.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttonsPrice.forEach(buttonPrice => {
        buttonPrice.classList.remove("selected");
      })
      button.classList.add("selected");

      const label = button.querySelector(".calculator-dropdouwn__label");
      const labelText = label.textContent;

      const labelDuration = button.querySelector(
        ".calculator-dropdouwn__button"
      );
      const duration = labelDuration.textContent;

      if (priceValues && durationValues) {
        priceValues.forEach((priceValue) => {
          priceValue.textContent = labelText;
        });
        durationValues.forEach((durationValue) => {
          durationValue.textContent = duration;
        });
      }

      if (totalValue) {
        totalValue.textContent = labelText;
      }
    });
  });
}

// -------------------CALENDAR--------------------//
const calendar = document.getElementById("airdatepicker");

if (calendar) {
  new AirDatepicker("#airdatepicker", {
    locale: {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      today: "Today",
      clear: "Clear",
      dateFormat: "dd.MM.yyyy",
      timeFormat: "hh:mm aa",
      firstDay: 0,
    },
    minDate: new Date(),
    onSelect: ({ formattedDate }) => fillOutDateForm(formattedDate),
  });
}

function fillOutDateForm(selctedDate) {
  if (selctedDate) {
    const date = document.getElementById("selectedDate");
    date.textContent = selctedDate;
  }
}

// -------------------CHOOSE TIME--------------------//
const timeButtons = document.querySelectorAll(".data-time__list-button");

if (timeButtons) {
  timeButtons.forEach((timeButton) => {
    timeButton.addEventListener("click", () => {
      timeButtons.forEach(button => {
        button.classList.remove("selected")
      })
      timeButton.classList.add("selected")

      const time = timeButton.textContent;

      const selectedTime = document.getElementById("selectedTime");
      if (selectedTime) {
        selectedTime.textContent = time;
      }
    });
  });
}

// -------------------TOGGLE DROPDOWN HEADER SUBCATALOG--------------------//
const buttons = document.querySelectorAll(".services__item");

if (buttons) {
  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      const allSubcatalogServices = document.querySelectorAll(".subservices__container");
      allSubcatalogServices.forEach(subcatalogServices => {
        subcatalogServices.style.display = "none";
      });

      const subcatalogServices = button.querySelector(".subservices__container");
      subcatalogServices.style.display = "block"

      subcatalogServices.addEventListener("mouseleave", () => {
        subcatalogServices.style.display = "none"
      })
    })
  })
  
}