
document.addEventListener('DOMContentLoaded', function(){
const url = "http://localhost:3000/albums"
const albumNav = document.getElementById('album_nav')

fetch(url)
.then(resp => resp.json())
.then(data => {
    data.map(album => {
    const albumImg = document.createElement('img')
    albumImg.src = album.image
    albumNav.appendChild(albumImg)
})
})

})