// document.addEventListener('DOMContentLoaded', rover())
// const url = "http://localhost:3000/albums"
// const albumNav = document.getElementById('album_nav')

// function rover(urlParam){
// return fetch(urlParam)
// .then(resp => resp.json())
// }

// rover(url).then(data => data.map((album => {
//     const albumImg = document.createElement('img')

//     albumImg.src = album.image
//     albumNav.appendChild(albumImg)
// }
// )))



// console.log(albumNav)

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
        trackButton.addEventListener('click', () => {trackFavorites()})
        displayList.appendChild(trackSong)
        trackSong.appendChild(trackButton)

    })

}

function trackFavorites(track) {
    const hrTrack = getElementById('faveTrack')
    const favoriteTrack = document.createElement('li')
    favoriteTrack.textContent = e.target.parentNode
    hrTrack.appendChild(favoriteTrack)
    e.preventDefault()

}