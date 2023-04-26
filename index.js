document.addEventListener('DOMContentLoaded', function() {
    fetch ('http://localhost:3000/albums')
    .then (response => response.json())
    .then (album => {
        const albumNav = document.getElementById("album_nav")
        const firstAlbum = album[0]

        album.forEach(album => {
            const albumImage = document.createElement("img")
            albumImage.src = album.image
            albumImage.alt = album.name      
            albumImage.addEventListener('click', function() {
                displayAlbum(album)
            })
            albumNav.appendChild(albumImage)
        });
        displayAlbum(firstAlbum)
    })
})

function displayAlbum(album) {
    const displayImage = document.getElementById('album-image')
    displayImage.src = album.image
    const displayTitle = document.getElementById('title')
    displayTitle.textContent = album.name
    const displayYear = document.getElementById('year')
    displayYear.textContent = album.year_released
    const displayList = document.getElementById('tracklist')
    const displayRate = document.getElementById('rating')
    displayRate.textContent = album.rating

    displayList.textContent = ' '

    album.tracks.forEach(track => {
        const trackSong = document.createElement('li')
        const trackButton = document.createElement('button')
        trackSong.textContent = ` ${track} `
        trackButton.textContent = "+"
        trackButton.addEventListener('click', trackFavorites)
        displayList.appendChild(trackSong)
        trackSong.appendChild(trackButton)
        
    })
}

function trackFavorites(e) {
    e.preventDefault()
    const trackName = e.target.parentNode.textContent

    fetch ('http://localhost:3000/favorites', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: trackName,
        })
    })
        .then(response => response.json())
        .then(data => {
            const trackFavorites = document.getElementById('faveTrack')
            const newTrack = document.createElement('li')
            const removeButton = document.createElement('button')
            removeButton.textContent = 'remove'
            removeButton.setAttribute('id', 'delete-btn') 
            removeButton.addEventListener('click', (e) => {
                e.preventDefault()
                byeByeBye(e, data.id)
            })
            newTrack.textContent = trackName
            newTrack.appendChild(removeButton)
            trackFavorites.appendChild(newTrack)
        })
    }

    function byeByeBye(e, id) {
        const trackFavorite = document.getElementById('faveTrack')
        const byeParent = e.target.parentNode


        fetch (`http://localhost:3000/favorites/${id}` , {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                accept: "application/json"
                }
        })
        .then(response => response.json())
        .then(data => {
            trackFavorite.removeChild(byeParent)
        })
    }

const stars = document.getElementById('dropbtn')
    

function starsPatch(album) {
    fetch(`http://localhost:3000/albums/${id}`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rating: e.target.value,
            //album
        })
        .then(resp => resp.json())
        .then(album => console.log(album))
    })
}

// stars.addEventListener('change', () => {
//     starsPatch(album)
// })