//----------------------------------------FILTER RESULTS SEARCH-------------------//
const servicesListItem = document.querySelectorAll(".services-page__item")
const servicesArray = Array.from(servicesListItem);

const urlParams = new URLSearchParams(window.location.search);
const searchValue = urlParams.get('query').trim().toLowerCase();

let foundMatches = false;

servicesArray.forEach(service => {
  const title = service.querySelector(".services-page__item-title").textContent.toLowerCase();
  const description = service.querySelector(".services-page__item-description").textContent.toLowerCase();

  if (title.includes(searchValue) || description.includes(searchValue)) {
    service.style.display = "flex";
    service.classList.add('show');
    foundMatches = true;
  } else {
    service.style.display = "none";
    service.classList.remove('show');
  }
});


if (!foundMatches) {
  const searchPageBody = document.querySelector(".services-page__body");
  const bodyNoResults = document.querySelector(".search-page__noresults");
  searchPageBody.style.display = "none";
  bodyNoResults.classList.add("show")
}





