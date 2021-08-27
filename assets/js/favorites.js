var favoriteFoods = ['Chicken', 'Pizza', 'Noodles', 'Sushi', 'Steak',]




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