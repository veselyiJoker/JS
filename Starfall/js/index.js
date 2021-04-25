'use strict'
let redDotColor = '#FF4A94';
let blueDotColor = '#345AC3';
let lightBlueDotColor = '#17C7CD';

let starsWrapper = document.querySelector('.stars-wrapper');

for (let i = 0; i < 100; i++) {
  let star = document.createElement("div");
  star.className = 'star';
  star.innerHTML = '.';
  star.style.top = `${getRandomInt(starsWrapper.clientHeight)}px`;
  star.style.left = `${getRandomInt(starsWrapper.clientWidth)}px`;

  switch (getRandomInt(3)) {
      case 0:
        star.style.color = redDotColor; 
        break;

      case 1:
        star.style.color = blueDotColor; 
        break;

      case 2:
        star.style.color = lightBlueDotColor; 
        break;
  }

  starsWrapper.append(star);
}



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


