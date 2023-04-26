document.addEventListener('DOMContentLoaded', rover())
const url = "http://localhost:3000/albums"
const albumNav = document.getElementById('album_nav')

function rover(urlParam){
return fetch(urlParam)
.then(resp => resp.json())
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
>>>>>>> ba6231a722d49dcce36af2578643133e50e32cc7
