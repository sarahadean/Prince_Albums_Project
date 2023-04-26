document.addEventListener('DOMContentLoaded', rover())
const url = "http://localhost:3000/albums"
const albumNav = document.getElementById('album_nav')

<<<<<<< HEAD
function rover(urlParam){
return fetch(urlParam)
.then(resp => resp.json())
=======
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
>>>>>>> f0b82c8aa688dd91b70b3ec9fb829248b636d517
}

rover(url).then(data => data.map((album => {
    const albumImg = document.createElement('img')

<<<<<<< HEAD
    albumImg.src = album.image
    albumNav.appendChild(albumImg)
}
)))



console.log(albumNav)
=======
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
<<<<<<< HEAD
>>>>>>> ba6231a722d49dcce36af2578643133e50e32cc7
=======

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
>>>>>>> f0b82c8aa688dd91b70b3ec9fb829248b636d517
