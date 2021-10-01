'use strict'

const openBtn = document.querySelector('.open-btn');
const lookHint = document.querySelector('.look-hint');
const pagesSection = document.querySelector('.pages-section');
const pagesContainer = document.querySelector('.pages-container');
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

  try {
    if (openBtnActive == false) {
      pagesSection.classList.add('pages-active');
      lookHint.classList.add('look-hint-hide');
  
      for (let elem of pages) {
        if (elem.classList.contains('active-page')) {
          pagesSection.style.transform = `translateX(${switchColumnPosition(elem)}%)
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
  
      pagesSection.classList.remove('pages-active');
      lookHint.classList.remove('look-hint-hide');
  
  
      for (let elem of pages) {
        if (elem.classList.contains('active-page')) {
          pagesSection.style.transform = `translateX(${-33.333333 * (elem.dataset.column - 1)}%)
                                   translateY(${-33.333333 * (elem.dataset.row - 1)}%)
          `;
        }
      }
  
      openBtnActive = false;
    }
  } catch {
    
  }

}

const onPagesClick = () => {

  try {
    if (event.target.closest('section').classList.contains('page')) {

      if (event.target.closest('section').classList.contains('active-page') ) {
        
        pagesSection.classList.remove('pages-active');
        pagesSection.style.transform = `translateX(${-33.333333 * (event.target.closest('section').dataset.column - 1)}%)
                                 translateY(${-33.333333 * (event.target.closest('section').dataset.row - 1)}%)`;
        openBtnActive = false;
        lookHint.classList.remove('look-hint-hide');
  
      } else {
  
        lookHint.classList.add('look-hint-hide');
  
        for (let elem of pages) {
          elem.classList.remove('active-page');
        }
  
        event.target.closest('section').classList.add('active-page');
  
        pagesSection.style.transform = `translateX(${switchColumnPosition(event.target.closest('section'))}%)
                                 scale(${scaleSize})
                                 translateY(${-33.333333 * (event.target.closest('section').dataset.row - 1)}%)
                                 rotateX(${rotateX}deg)
                                 rotateY(${rotateY}deg)
                                 rotateZ(${rotateZ}deg)`;                       
      }
  
    }
  } catch {

  }
   
}

const onPagesMouseover = () => {
  for (let elem of pages) {
    elem.classList.remove('selected-page');
  }
  try {
    if (event.target.closest('section').classList.contains('page') && !event.target.closest('section').classList.contains('active-page') ) {
      event.target.closest('section').classList.add('selected-page');
    }
  } catch {
    
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

pagesSection.addEventListener('click', onPagesClick);
pagesContainer.addEventListener('mouseover', onPagesMouseover);
openBtn.addEventListener('click', openMap);


