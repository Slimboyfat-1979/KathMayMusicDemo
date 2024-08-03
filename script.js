'use strict'

//Code for music player

// const audio = document.querySelector('.audio');
// const playBtn = document.querySelector('.play-btn');
// const backwardBtn = document.querySelector('.backward-btn');
// const forwardBtn = document.querySelector('.forward-btn');

// const progressBar = document.querySelector('.progress-bar');

// let playingState = false;

// playBtn.addEventListener('click', startSong);

// function startSong() {
//     if(playingState === false) {
//         playingState = true;
//         playBtn.querySelector('i').className = 'fa-solid fa-pause';
//         audio.play();
//     }else {
//         playingState = false;
//         playBtn.querySelector('i').className = 'fa-solid fa-play';
//         audio.pause();
//     }
// }

// audio.addEventListener('timeupdate', function() {
//     const {currentTime, duration} = this;
//     console.log(currentTime, duration);
//     const progressPercent = (currentTime / duration) * 100;
//     progressBar.style.width = `${progressPercent}%`;   
// })

//Menu Nav Click

const navContainer = document.querySelector('.nav-container');
const menuContainer = document.querySelector('.menu-container');

navContainer.addEventListener('click', function(){
    menuContainer.style.animationPlayState = 'running';
})

