var favParkEl = document.getElementById('fav-park-list')
var favoriteActv;

// Get and render park data
var favoriteParks = JSON.parse(localStorage.getItem('park'));

favoriteParks.forEach(function (el) {
    var newListItem = document.createElement('li')
    newListItem.setAttribute('class', 'list-item')
    newListItem.textContent = el
    favParkEl.appendChild(newListItem)

})

