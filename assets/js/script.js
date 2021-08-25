var stateCode = ""
var stateNameEl = document.querySelector(".state-name");
var cityTempEl = document.querySelector(".city-temp");
var stateCodeEl = document.querySelector(".state-code");

// Search function
var searchFormEl = document.querySelector('#search-form');
console.log(searchFormEl)
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

// Search Weather API for city temperature and state name 
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
        var stateName=data.location.region;
        var cityTemp =data.current.temp_f;
        findStateCode(stateName)
            var nationalParkURL = `https://jonahtaylor-national-park-service-v1.p.rapidapi.com/campgrounds?stateCode=${stateCode}`
            fetch(nationalParkURL, {
                "method": "GET",
	            "headers": {
		        "x-api-key": "aHfce9skUoWlfby8ZQiaf4ahRxjYqENq9CkH2MTp",
		        "x-rapidapi-host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
		        "x-rapidapi-key": "824cc48d69msh1f0d21e953db9b5p1ab70cjsne425b859ecce"
	        }})
            .then(function(response){
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            })
        }) 
    
}


// State codes function
function findStateCode(stateName) {
    if(stateName === "Alabama"){
        stateCode = "AL";
    } else if (stateName === "Alaska"){
        stateCode = "AK";
    } else if (stateName === "Arizona"){
        stateCode = "AZ";
    } else if (stateName === "Arkansas"){
        stateCode = "AR";
    } else if (stateName === "California"){
        stateCode = "CA";
    } else if (stateName === "Colorado"){
        stateCode = "CO";
    } else if (stateName === "Connecticut"){
        stateCode = "CT";
    } else if (stateName === "Delaware"){
        stateCode = "DE";
    } else if (stateName === "District of Columbia"){
        stateCode = "DC";
    } else if (stateName === "Florida"){
        stateCode = "Fl";
    } else if (stateName === "Georgia"){
        stateCode = "GA";
    } else if (stateName === "Hawaii"){
        stateCode = "HI";
    } else if (stateName === "Idaho"){
        stateCode = "ID";
    } else if (stateName === "Illinois"){
        stateCode = "IL";
    } else if (stateName === "Indiana"){
        stateCode = "IN";
    } else if (stateName === "Iowa"){
        stateCode = "IA";
    } else if (stateName === "Kansas"){
        stateCode = "KS";
    } else if (stateName === "Kentucky"){
        stateCode = "KY";
    } else if (stateName === "Louisiana"){
        stateCode = "LA";
    } else if (stateName === "Maine"){
        stateCode = "ME";
    } else if (stateName === "Massachusetts"){
        stateCode = "MA";
    } else if (stateName === "Michigan"){
        stateCode = "MI";
    } else if (stateName === "Minnesota"){
        stateCode = "MN";
    } else if (stateName === "Mississippi"){
        stateCode = "MS";
    } else if (stateName === "Missouri"){
        stateCode = "MO";
    } else if (stateName === "Montana"){
        stateCode = "MT";
    } else if (stateName === "Nebraska"){
        stateCode = "NE";
    } else if (stateName === "Nevada"){
        stateCode = "NV";
    } else if (stateName === "New Hampshire"){
        stateCode = "NH";
    } else if (stateName === "New Jersey"){
        stateCode = "NJ";
    } else if (stateName === "New Mexico"){
        stateCode = "NM";
    } else if (stateName === "New York"){
        stateCode = "NY";
    } else if (stateName === "North Carolina"){
        stateCode = "NC";
    } else if (stateName === "North Dakota"){
        stateCode = "NC";
    } else if (stateName === "Ohio"){
        stateCode = "OH";
    } else if (stateName === "Oklahoma"){
        stateCode = "OK";
    } else if (stateName === "Oregon"){
        stateCode = "OR";
    } else if (stateName === "Pennsylvania"){
        stateCode = "PA";
    } else if (stateName === "Rhode Island"){
        stateCode = "RI";
    } else if (stateName === "South Carolina"){
        stateCode = "SI";
    } else if (stateName === "South Dakota"){
        stateCode = "SD";
    } else if (stateName === "Tennessee"){
        stateCode = "TN";
    } else if (stateName === "Texas"){
        stateCode = "TX";
    } else if (stateName === "Utah"){
        stateCode = "UT";
    } else if (stateName === "Vermont"){
        stateCode = "VT";
    } else if (stateName === "Virginia"){
        stateCode = "VA";
    } else if (stateName === "Washington"){
        stateCode = "WA";
    } else if (stateName === "West Virginia"){
        stateCode = "WV";
    } else if (stateName === "Wisconsin"){
        stateCode = "WI";
    } else if (stateName === "Wyoming"){
        stateCode = "WY";
    } 
    console.log(stateCode);
    return stateCode
}
