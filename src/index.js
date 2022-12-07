import loadFrontPage from './frontpage.js';
import loadMenuPage from './menupage.js';
import loadResPage from './reservationpage.js';

//node-nightly --inspect ./index.js
//npx webpack --watch
console.log("Webpack is correctly installed. -M");
const content = document.querySelector('#content');
let currentPage = 0;
pageOnLoad(currentPage);

//func for when user first loads or clicks next/prev page or num dot, 
//to switch between 3 DOM configurations after removing prev children (except for page indicators)
function pageOnLoad(destination) {
    initPageIndicators();
    switch(destination) {
        case 0:
          loadFrontPage();
          document.querySelector('.left').classList.add('inactive');
          document.querySelector('.right').classList.remove('inactive');
          break;
        case 1:
          loadMenuPage();
          break;
        case 2:
          loadResPage();
          document.querySelector('.right').classList.add('inactive');
          document.querySelector('.left').classList.remove('inactive');
          break;
    }
}


//initializes page indicators (side of site and bottom dots), and appends in DOM. 
//Creates e listener to call onPageSwitch w/ parameters
//these are outside scope of the page switch. Only change
function initPageIndicators() {
    //checks if there are page indicators, and if there aren't, creates them
    //if (!document.querySelector('.page-switcher')) return;

    //side indicators (next, prev)
    let pageBtns = []; 
    let tabRow = document.createElement('div');
    tabRow.id = 'tab-row';
    content.appendChild(tabRow);
    console.log('Before for');
    for (let i = 0; i < 2; i++)
    {
        pageBtns[i] = document.createElement('button');
        pageBtns[i].classList.add("page-btn");
        if (i === 0)
        {
          pageBtns[i].classList.add('left');
        }
        else
        {
          pageBtns[i].classList.add('right');
        }
        tabRow.appendChild(pageBtns[i]);
    }



    
    //bottom dots, hovering = popup w/ name
    let pageIndicators = [];
    let indicatorRow = document.createElement('div');
    indicatorRow.id = 'indicator-row';
    content.appendChild(indicatorRow);
    for (let i = 0; i < 3; i++)
    {
      pageIndicators[i] = document.createElement('button');
      pageIndicators[i].classList.add('page-indicator');
      indicatorRow.appendChild(pageIndicators[i]);
    }

    
    //TODO
}

