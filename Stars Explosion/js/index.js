'use strict'

let redDotColor = '#FF4A94';
let blueDotColor = '#345AC3';
let lightBlueDotColor = '#17C7CD';

let starsExplosion = document.querySelector('.stars-explosion');

for (let i = 0; i < 130; i++) {
  let starLine = document.createElement("div");
  starLine.className = 'star-line';
  starLine.style.top = `${getRandomInt(starsExplosion.clientHeight)}px`;
  starLine.style.left = `${getRandomInt(starsExplosion.clientWidth)}px`;

  switch (getRandomInt(3)) {
    case 0:
      starLine.style.background = redDotColor; 
      break;

    case 1:
      starLine.style.background = blueDotColor; 
      break;

    case 2:
      starLine.style.background = lightBlueDotColor; 
      break;
  }

  starsExplosion.append(starLine);

}



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}