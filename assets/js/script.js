

// Search function
var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value.trim();

  if (!searchInputVal) {
    console.error('Please input city name');
    return;
  }
    
    var stored = localStorage.setItem('searchedCity', searchInputVal);

    
    searchWeatherApi(searchInputVal);
    // document.location.href = 'searchactivities.html'; 
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
var stateName = document.querySelector(".state-name");

function searchWeatherApi(city){
    var weatherURL = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`
    fetch(weatherURL, {
        "method": "GET",
	    "headers": {
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
		"x-rapidapi-key": "824cc48d69msh1f0d21e953db9b5p1ab70cjsne425b859ecce"
        }
    })
    .then(function(response){
        return response.json();
    })
    .catch(err => {
        console.error(err);
    })
    .then(function(data){
        console.log(data)
        stateName.textContent=data.location.region;
        console.log(stateName);
    })

}