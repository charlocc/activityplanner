

// Search function
var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value.trim();

  if (!searchInputVal) {
    console.error('Please input city name');
    return;
  }

  var stored = localStorage.setItem('searchedCities', searchInputVal);
  console.log(stored);

  document.location.href = 'searchactivities.html';
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);