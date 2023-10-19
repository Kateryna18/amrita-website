//----------------------------------------FILTER RESULTS SEARCH-------------------//
const servicesListItem = document.querySelectorAll(".services-page__item")
const servicesArray = Array.from(servicesListItem);
console.log(servicesArray)

const urlParams = new URLSearchParams(window.location.search);
const searchValue = urlParams.get('query');
console.log(searchValue)

servicesArray.forEach(service => {
    const title = service.querySelector(".services-page__item-title").textContent;
    const description = service.querySelector(".services-page__item-description").textContent;
    
    if (title.includes(searchValue) || description.includes(searchValue)) {
      service.style.display = "block";
    } else {
      service.style.display = "none";
    }
  });