'use strict'

//Code for navMenu and prechecks
// document.addEventListener('DOMContentLoaded', function(){
//     if(window.innerWidth < 480) {
//         const mobileNav = `  <nav class="mobile-nav">
//         <ul>
//             <li><a href="">Home</a></li>
//             <li><a href="">About</a></li>
//             <li><a href="">Music</a></li>
//             <li><a href="">Contact</a></li>
//         </ul>
//     </nav>`;

//     console.log(document.body)
//     document.body.insertAdjacentHTML('afterbegin', mobileNav)
//     }
// })



//Code for music player

const audio = document.querySelector('.audio');
const playBtn = document.querySelector('.play-btn');
const backwardBtn = document.querySelector('.backward-btn');
const forwardBtn = document.querySelector('.forward-btn');

const progressBar = document.querySelector('.progress-bar');

let playingState = false;

playBtn.addEventListener('click', startSong);

function startSong() {
    if(playingState === false) {
        playingState = true;
        playBtn.querySelector('i').className = 'fa-solid fa-pause';
        audio.play();
    }else {
        playingState = false;
        playBtn.querySelector('i').className = 'fa-solid fa-play';
        audio.pause();
    }
}

audio.addEventListener('timeupdate', function() {
    const {currentTime, duration} = this;
    console.log(currentTime, duration);
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;   
})


//