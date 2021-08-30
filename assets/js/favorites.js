var favParkEl = document.getElementById('fav-park-list')
var favoriteActv;

// Get and render park data
var favoriteParks = JSON.parse(localStorage.getItem('park'));

favoriteParks.forEach(function (park) {
    var newListItem = document.createElement('li')
    newListItem.setAttribute('class', 'list-item')
    newListItem.setAttribute('style', 'font-weight: bolder;')
    newListItem.textContent = park
    favParkEl.appendChild(newListItem)

})

