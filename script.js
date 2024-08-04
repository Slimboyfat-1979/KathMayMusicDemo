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

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('#mobile-nav');

hamburger.addEventListener('click', function(){
    mobileNav.style.animationPlayState = 'running';

    mobileNav.addEventListener('animationend', () => {
        setTimeout(() => {
            mobileNav.insertAdjacentHTML('beforeend',
                `<div class="nav-container">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Music</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>`
            );
        }, 100);

        setTimeout(() => {
            document.querySelector('.nav-container').classList.add('show');
            console.log('Show menu now!')
        }, 150)
    });


})


