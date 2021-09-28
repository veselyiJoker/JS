'use strict'

const openBtn = document.querySelector('.open-btn');
const lookHint = document.querySelector('.look-hint');
const pagesContainer = document.querySelector('.pages');
const pages = document.querySelectorAll('.page');

let scaleSize = 0.4;
let rotateX = 20;
let rotateY = 0;
let rotateZ = -2;

let col1Translate = -33.3333 + (33.3333 * scaleSize);
let col2Translate = -33.3333;
let col3Translate = -33.3333 - (33.3333 * scaleSize);

let openBtnActive = false;

const openMap = () => {
  if (openBtnActive == false) {
    pagesContainer.classList.add('pages-active');
    lookHint.classList.add('look-hint-hide');

    for (let elem of pages) {
      if (elem.classList.contains('active-page')) {
        pagesContainer.style.transform = `translateX(${switchColumnPosition(elem)}%)
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

    pagesContainer.classList.remove('pages-active');
    lookHint.classList.remove('look-hint-hide');


    for (let elem of pages) {
      if (elem.classList.contains('active-page')) {
        pagesContainer.style.transform = `translateX(${-33.333333 * (elem.dataset.column - 1)}%)
                                 translateY(${-33.333333 * (elem.dataset.row - 1)}%)
        `;
      }
    }

    openBtnActive = false;
  }

}

const onPagesClick = () => {

  if (event.target.closest('section').classList.contains('page')) {

    if (event.target.closest('section').classList.contains('active-page') ) {
      
      pagesContainer.classList.remove('pages-active');
      pagesContainer.style.transform = `translateX(${-33.333333 * (event.target.closest('section').dataset.column - 1)}%)
                               translateY(${-33.333333 * (event.target.closest('section').dataset.row - 1)}%)`;
      openBtnActive = false;
      lookHint.classList.remove('look-hint-hide');

    } else {

      lookHint.classList.add('look-hint-hide');

      for (let elem of pages) {
        elem.classList.remove('active-page');
      }

      event.target.closest('section').classList.add('active-page');

      pagesContainer.style.transform = `translateX(${switchColumnPosition(event.target.closest('section'))}%)
                               scale(${scaleSize})
                               translateY(${-33.333333 * (event.target.closest('section').dataset.row - 1)}%)
                               rotateX(${rotateX}deg)
                               rotateY(${rotateY}deg)
                               rotateZ(${rotateZ}deg)`;                       
    }

  }
   
}

const onPagesMouseover = () => {
  for (let elem of pages) {
    elem.classList.remove('selected-page');
  }

  if (event.target.closest('section').classList.contains('page') && !event.target.closest('section').classList.contains('active-page') ) {
    event.target.closest('section').classList.add('selected-page');
  }
}

const switchColumnPosition = (elem) => {

  switch (elem.dataset.column) {

    case '1':
      return col1Translate;

    case '2':
      return col2Translate;

    case '3':
      return col3Translate;

  }

}

pagesContainer.addEventListener('click', onPagesClick);
pagesContainer.addEventListener('mouseover', onPagesMouseover);
openBtn.addEventListener('click', openMap);


