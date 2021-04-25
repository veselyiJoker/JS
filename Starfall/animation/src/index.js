"use strict";

let starsWrapper = document.querySelector(".stars-wrapper");

for (let i = 0; i < 150; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.innerHTML = ".";
  star.style.top = `${getRandomInt(starsWrapper.clientHeight)}px`;
  star.style.left = `${getRandomInt(starsWrapper.clientWidth)}px`;
  starsWrapper.append(star);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
