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
    const trackFavorites = document.getElementById('faveTrack')
    const newTrack = document.createElement('li')
    const removeButton = document.createElement('buutton')
    removeButton.textContent = 'remove'
    removeButton.addEventListener('click', () => {
        trackFavorites.removeChild(newTrack)
    })
    newTrack.textContent = trackName
    newTrack.appendChild(removeButton)
    trackFavorites.appendChild(newTrack)

}