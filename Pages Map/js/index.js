'use strict'

const openBtn = document.querySelector('.open-btn');
const lookHint = document.querySelector('.look-hint');

const pages = document.querySelector('.pages');
const page = document.querySelectorAll('.page');

pages.addEventListener('click',pagesClick);
pages.addEventListener('mouseover', pagesMouseover);


function pagesMouseover() {

  for (let elem of page) {
    elem.classList.remove('selected-page');
  }

  if (event.target.closest('section').classList.contains('page') && !event.target.closest('section').classList.contains('active-page') ) {
    event.target.closest('section').classList.add('selected-page');
  }

}


let scaleSize = 0.4;
let rotateX = 20;
let rotateY = 0;
let rotateZ = -2;

let col1Translate = -33.3333 + (33.3333 * scaleSize);
let col2Translate = -33.3333;
let col3Translate = -33.3333 - (33.3333 * scaleSize);

let openBtnActive = false;

openBtn.addEventListener('click',openMap);

function openMap () {

  if (openBtnActive == false) {

    pages.classList.add('pages-active');
    lookHint.classList.add('look-hint-hide');

    for (let elem of page) {
      if (elem.classList.contains('active-page')) {
        pages.style.transform = `translateX(${switchColumnPosition(elem)}%)
                                scale(${scaleSize})
                                translateY(${-33.333333 * (elem.dataset.row - 1)}%)
                                rotateX(${rotateX}deg)
                                rotateY(${rotateY}deg) 
                                rotateZ(${rotateZ}deg)             
        `;
      }
    }

    openBtnActive = true;

  } else {

    pages.classList.remove('pages-active');
    lookHint.classList.remove('look-hint-hide');


    for (let elem of page) {
      if (elem.classList.contains('active-page')) {
        pages.style.transform = `translateX(${-33.333333 * (elem.dataset.column - 1)}%)
                                 translateY(${-33.333333 * (elem.dataset.row - 1)}%)
        `;
      }
    }

    openBtnActive = false;

  }

}


function pagesClick() {

  if (event.target.closest('section').classList.contains('page')) {

    if (event.target.closest('section').classList.contains('active-page') ) {
      
      pages.classList.remove('pages-active');
      pages.style.transform = `translateX(${-33.333333 * (event.target.closest('section').dataset.column - 1)}%)
                               translateY(${-33.333333 * (event.target.closest('section').dataset.row - 1)}%)`;
      openBtnActive = false;
      lookHint.classList.remove('look-hint-hide');

    } else {

      lookHint.classList.add('look-hint-hide');

      for (let elem of page) {
        elem.classList.remove('active-page');
      }

      event.target.closest('section').classList.add('active-page');

      pages.style.transform = `translateX(${switchColumnPosition(event.target.closest('section'))}%)
                               scale(${scaleSize})
                               translateY(${-33.333333 * (event.target.closest('section').dataset.row - 1)}%)
                               rotateX(${rotateX}deg)
                               rotateY(${rotateY}deg)
                               rotateZ(${rotateZ}deg)`;                       
    }

  }
   
}


function switchColumnPosition(elem) {

  switch (elem.dataset.column) {

    case '1':
      return col1Translate;
    break;

    case '2':
      return col2Translate;
    break;

    case '3':
      return col3Translate;
    break;

  }

}

// end