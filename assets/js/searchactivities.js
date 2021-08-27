var stateCode = ""

// Search Weather API for city temperature and state name 
var weatherResultsEl = document.querySelector(".weather-results");
var parkResultsEl =document.querySelector(".park-results");
var storedCity = localStorage.getItem('searchedCity');
var fontIconSpan = document.querySelector("#font-icon");
searchWeatherApi(storedCity);

console.log(storedCity);



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
        // Populate the temperature and conditions on the screen
        console.log(data)
        weatherResultsEl.textContent ="";
        var container = document.createElement('div');
        var temperature = document.createElement("h1");
        var conditions = document.createElement("h4");
        // Set text content to correspdoning data
        temperature.textContent = data.current.temp_f + " °F";
        conditions.textContent = data.current.condition.text;
        // Add data to the container
        container.appendChild(temperature);
        container.appendChild(conditions);
        weatherResultsEl.appendChild(container);
        container.style.color = "#001d3dff";
            function fontIcon(data){
            if(data.current.condition.text == "Cloudy"){
                fontIconSpan.setAttribute("class", "bi-cloud-fill");
            } else if (data.current.condition.text == "Partly cloudy"){
                fontIconSpan.setAttribute("class", "bi-cloud-fill");
            } else if (data.current.condition.text == "Sunny"){
                fontIconSpan.setAttribute("class", "bi-sun-fill");
            } else if (data.current.condition.text == "Raining") {
                fontIconSpan.setAttribute("class", "bi-cloud-rain-fill");
            } else if (data.current.condition.text == "Snowing") {
                fontIconSpan.setAttribute("class", "bi-cloud-snow-fill");
            } else if (data.current.condition.text == "Overcast") {
                fontIconSpan.setAttribute("class", "bi-cloud-fill");
            } else if (data.current.condition.text == "Thunder" || "Moderate or heavy rain with thunder") {
                fontIconSpan.setAttribute("class", "bi-cloud-lightning-rain-fill");
            } else {
                fontIconSpan.style.display= "none";
            }
            }
        fontIcon(data);

    
        
        // Find parks in the region
        var stateName=data.location.region;
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
                if(data.data.length!==0) {
                    for (var i=0; i<4; i++) {
                    var container = document.createElement('div');
                    var parkName = document.createElement("h3");
                    var parkDescription = document.createElement("p");
                    var saveParkBtn = document.createElement("button");
                    // Set text content to correspdoning data
                    parkName.textContent=data.data[i].name;
                    parkDescription.textContent=data.data[i].description;
                    saveParkBtn.textContent="Add to favorites";
                    // Add data to the container
                    container.appendChild(parkName);
                    container.appendChild(parkDescription);
                    container.appendChild(saveParkBtn);
                    parkResultsEl.appendChild(container);
                    // Container style
                    container.style.border = "solid white 3px";
                    container.style.margin = "15px";
                    container.style.padding = "10px";
                    container.style.borderRadius = "5px";
                    // Button style
                    saveParkBtn.style.color = "#001d3dff";
                    saveParkBtn.style.backgroundColor = "white";
                    saveParkBtn.style.borderRadius = "9px";
                    } 
                } else {
                    parkResultsEl.textContent= "Sorry no parks found in your area! Please search a different city!"
                    parkResultsEl.style.fontSize= "24px";
                }
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


