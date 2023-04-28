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
    displayImage.addEventListener('mouseover', () => {
    displayImage.src = album.back
    })
    displayImage.addEventListener('mouseout', () => { 
        displayImage.src = album.image 
    })

    displayList.textContent = ' '

    album.tracks.forEach(track => {
        const trackSong = document.createElement('li')
        const trackButton = document.createElement('button')
        // const buttonIcon = document.createElement('i')
        trackButton.className = "fa-solid fa-heart"
        trackSong.textContent = ` ${track} `
        trackButton.textContent = " "
        trackButton.addEventListener('click', trackFavorites)
        displayList.appendChild(trackSong)
        trackSong.appendChild(trackButton)
        // trackButton.appendChild(buttonIcon)
    })
}

function trackFavorites(e) {
    const trackName = e.target.previousSibling.textContent.trim()
    
    fetch ('http://localhost:3000/favorites', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: trackName,
            rating: "",

        })
    })
        .then(response => response.json())
        .then(data => {
            const trackFavorites = document.getElementById('faveTrack')
            const newTrack = document.createElement('li')
            newTrack.textContent = trackName
            const removeButton = document.createElement('button')
            const ratings1 = document.createElement('i')
            ratings1.className = "fa-solid fa-star"
            ratings1.id = "ratings 1"
            const ratings2 = document.createElement('i')
            ratings2.className = "fa-solid fa-star"
            ratings2.id = "ratings 2"
            const ratings3 = document.createElement('i')
            ratings3.className = "fa-solid fa-star"
            ratings3.id = "ratings 3"
            const ratings4 = document.createElement('i')
            ratings4.className = "fa-solid fa-star"
            ratings4.id = "ratings 4"
            const ratings5 = document.createElement('i')
            ratings5.className = "fa-solid fa-star"
            ratings5.id = "ratings 5"
            removeButton.textContent = 'remove'
            removeButton.setAttribute('id', 'delete-btn') 
            removeButton.addEventListener('click', (e) => {
                e.preventDefault()
                byeByeBye(e, data.id)
            })
            ratings1.addEventListener('click', changeTrackRating)
            ratings2.addEventListener('click', changeTrackRating)
            ratings3.addEventListener('click', changeTrackRating)
            ratings4.addEventListener('click', changeTrackRating)
            ratings5.addEventListener('click', changeTrackRating)
            newTrack.appendChild(ratings1)
            newTrack.appendChild(ratings2)
            newTrack.appendChild(ratings3)
            newTrack.appendChild(ratings4)
            newTrack.appendChild(ratings5)
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


function changeTrackRating(e) {
    const starIcons = e.target.parentNode.querySelectorAll('.fa-star');
    const selectedStar = e.target;
    const selectedIndex = Array.from(starIcons).indexOf(selectedStar);
  
    starIcons.forEach((star, index) => {
      if (index <= selectedIndex) {
        star.classList.add('star-selected');
      } else {
        star.classList.remove('star-selected');
      }
    });
  
    const trackName = e.target.parentNode.firstChild.textContent.trim();
    const rating = selectedIndex + 1;

}


