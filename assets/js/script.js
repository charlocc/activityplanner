
var stateNameEl = document.querySelector(".state-name");
var cityTempEl = document.querySelector(".city-temp");
var stateCodeEl = document.querySelector(".state-code");

// Search function
var searchFormEl = document.querySelector('.search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value.trim();

  if (!searchInputVal) {
    console.error('Please input city name');
    return;
    }

    var searchedCity = localStorage.setItem('searchedCity', searchInputVal);
    
    document.location.href = 'searchactivities.html'; 
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);


var local = localStorage.getItem("submit")




