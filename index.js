document.addEventListener('DOMContentLoaded', function() {
const url = "http://localhost:3000/albums"
const albumNav = document.getElementById('album_nav')

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
        trackFavorites()
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

    displayList.textContent = ' '

    album.tracks.forEach(track => {
        const trackSong = document.createElement('li')
        const trackButton = document.createElement('button')
        const trackRating = document.createElement('select')
        const option1 = document.createElement('option')
        option1.value = "1 Star"
        option1.textContent = "1 Star"
        const option2 = document.createElement('option')
        option2.value = "2 Star"
        option2.textContent = "2 Star"
        const option3 = document.createElement('option')
        option3.value = "3 Star"
        option3.textContent = "3 Star"
        const option4 = document.createElement('option')
        option4.value = "4 Star"
        option4.textContent = "4 Star"
        const option5 = document.createElement('option')
        option5.value = "5 Star"
        option5.textContent = "5 Star"

        trackSong.textContent = ` ${track} `
        trackButton.textContent = "Add To Favorites"
        trackButton.addEventListener('click', trackFavorites)
        trackRating.addEventListener('change', changeTrackRating)
        displayList.appendChild(trackSong)
        trackSong.appendChild(trackButton)
        trackSong.appendChild(trackRating)
        trackRating.appendChild(option1)
        trackRating.appendChild(option2)
        trackRating.appendChild(option3)
        trackRating.appendChild(option4)
        trackRating.appendChild(option5)
    })
}

rover(url).then(data => data.map((album => {
    const albumImg = document.createElement('img')


    albumImg.src = album.image
    albumNav.appendChild(albumImg)
}
)))



console.log(albumNav)

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
            const updateRating = document.createElement('select')
            const updateOption1 = document.createElement('option')
            updateOption1.value = "1 Star"
            updateOption1.textContent = "1 Star"
            const updateOption2 = document.createElement('option')
            updateOption2.value = "2 Star"
            updateOption2.textContent = "2 Star"
            const updateOption3 = document.createElement('option')
            updateOption3.value = "3 Star"
            updateOption3.textContent = "3 Star"
            const updateOption4 = document.createElement('option')
            updateOption4.value = "4 Star"
            updateOption4.textContent = "4 Star"
            const updateOption5 = document.createElement('option')
            updateOption5.value = "5 Star"
            updateOption5.textContent = "5 Star"
            removeButton.textContent = 'remove'
            removeButton.setAttribute('id', 'delete-btn') 
            removeButton.addEventListener('click', (e) => {
                e.preventDefault()
                byeByeBye(e, data.id)
            })
            newTrack.textContent = trackName
            newTrack.appendChild(removeButton)
            newTrack.appendChild(updateRating)
            updateRating.append(updateOption1)
            updateRating.append(updateOption2)
            updateRating.append(updateOption3)
            updateRating.append(updateOption4)
            updateRating.append(updateOption5)
            trackFavorites.appendChild(newTrack)
        })
    

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

function changeTrackRating() {

}
})
// stars.addEventListener('change', () => {
//     starsPatch(album)
// })

