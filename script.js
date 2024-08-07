"use strict";

const audio = document.querySelector(".audio");
const playBtn = document.querySelector("#playIcon");
const backwardBtn = document.querySelector(".backward-btn");
const forwardBtn = document.querySelector(".forward-btn");
const songs = [
  "background",
  "countdown",
  "flamenco",
  "tokyo",
  "upbeat",
  "village",
];

const songTitle = document.querySelector('.song-titles h3');

/* Code for player */

let SONG_URL = "./assets/music/";
let songIndex = 0;
let playingState = false;

// Initialize the audio src attribute
let songUrl = `${SONG_URL}${songs[songIndex]}.mp3`;
audio.setAttribute("src", songUrl);

playBtn.addEventListener('click', () => {
  playingState = !playingState;
  changePlayIcon();
  showSongInDom(songs[songIndex]);
  if (playingState) {
    audio.play();
  } else {
    audio.pause();
  }
})

forwardBtn.addEventListener('click', () => {
    songTitle.classList.remove('show');
    songTitle.classList.add('leave');
    this.addEventListener('transitionend', () => {
        songIndex++;
        console.log(songs[songIndex]);
        showSongInDom(songs[songIndex]);
    })
})

function showSongInDom(song) {;
    songTitle.textContent = song;
    songTitle.classList.add('show');

    // songTitle.classList.add('show');
}

//Change the playicon once the play button is pressed.
function changePlayIcon() {
  if (playBtn.classList.contains("fa-play")) {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  } else {
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  }
}

/* Code for player end */
//Menu Nav Click

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector("#mobile-nav");

hamburger.addEventListener("click", function () {
  mobileNav.style.animationPlayState = "running";

  mobileNav.addEventListener("animationend", () => {
    setTimeout(() => {
      mobileNav.insertAdjacentHTML(
        "beforeend",
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
      document.querySelector(".nav-container").classList.add("show");
    }, 150);
  });
});


