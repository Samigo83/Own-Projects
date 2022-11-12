'use strict';

function randomStars(stars) {
    const body = document.querySelector('body');
    
    for (let i = 0; i < stars; i++) {
    let x = Math.floor(Math.random() * 95) + 1;
    let y = Math.floor(Math.random() * 95) + 1;
    let newImg = document.createElement('img');

    newImg.classList.add(`star${i}`);
    newImg.src = "images/star.png";
    newImg.alt = "picture of a star";
    newImg.style.top = x + "%";
    newImg.style.left = y + "%";
    
    body.appendChild(newImg);
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

function blinkingStars() {
    let randomStar = Math.floor(Math.random() * 39);
    let star = document.getElementsByClassName(`star${randomStar}`);
    star[0].src = 'images/blinking_star1.gif';
    delay(3000).then(() => {star[0].src = "images/star.png"});
}

randomStars(40);

setInterval(blinkingStars, 5000);