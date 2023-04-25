document.addEventListener('DOMContentLoaded', rover())
const url = "http://localhost:3000/albums"
const albumNav = document.getElementById('album_nav')

function rover(urlParam){
return fetch(urlParam)
.then(resp => resp.json())
}

rover(url).then(data => data.map((album => {
    const albumImg = document.createElement('img')

    albumImg.src = album.image
    albumNav.appendChild(albumImg)
}
)))



console.log(albumNav)