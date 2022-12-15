import loadFrontPage from './frontpage.js';
import loadMenuPage from './menupage.js';
import loadResPage from './reservationpage.js';
import loadContactPage from './contactpage.js';

//node-nightly --inspect ./index.js
//npx webpack --watch
const content = document.querySelector('#content');
pageOnLoad(0);

//func for when user first loads or clicks next/prev page or num dot, 
//to switch between 3 DOM configurations after removing prev children (except for page indicators)
function pageOnLoad(destination) {
    if (content.firstChild) removeAllChildren();
    initMenuHeader();
    initPageIndicators();
    rigButtons();
    switch(destination) {
        case 0:
          loadFrontPage();
          document.querySelector('.left').classList.add('inactive');
          document.querySelector('.right').classList.remove('inactive');
          for (let i = 0; i < 4; i++)
          {
            document.querySelectorAll('.page-indicator')[i].classList.remove('focus');
          }
          document.querySelectorAll('.page-indicator')[0].classList.add('focus');

          let button = document.querySelector('.button');
          button.addEventListener('click', function() {
            pageOnLoad(2);
          });
          break;
        case 1:
          loadMenuPage();
          for (let i = 0; i < 4; i++)
          {
            document.querySelectorAll('.page-indicator')[i].classList.remove('focus');
          }
          document.querySelectorAll('.page-indicator')[1].classList.add('focus');
          break;
        case 2:
          loadResPage();
          for (let i = 0; i < 4; i++)
          {
            document.querySelectorAll('.page-indicator')[i].classList.remove('focus');
          }
          document.querySelectorAll('.page-indicator')[2].classList.add('focus');
          break;
        case 3:
          loadContactPage();
          document.querySelector('.right').classList.add('inactive');
          document.querySelector('.left').classList.remove('inactive');
          for (let i = 0; i < 4; i++)
          {
            document.querySelectorAll('.page-indicator')[i].classList.remove('focus');
          }
          document.querySelectorAll('.page-indicator')[3].classList.add('focus');
          break;
    }
}

//initializes page indicators (side of site and bottom dots), and appends in DOM. 
//Creates e listener to call onPageSwitch w/ parameters
//these are outside scope of the page switch. Only change
function initPageIndicators() {
    //page indicators, creates them
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
    for (let i = 0; i < 4; i++)
    {
      pageIndicators[i] = document.createElement('button');
      pageIndicators[i].classList.add('page-indicator');
      indicatorRow.appendChild(pageIndicators[i]);
    }
}

function rigButtons()
{
  const menuLinks = document.querySelectorAll('.menu-link');
  console.log(menuLinks.length);
  for (let i = 0; i < menuLinks.length; i++)
  {
    menuLinks[i].addEventListener('click', function() {
      pageOnLoad(i);
    });
  }
}

function initMenuHeader() 
//creates the menu header
{
  let divs = []; //stores pointers of the created divs
  let headers = []; //stores pointers of created h2's
    for (let i = 0; i < 4; i++)
    {
      divs[i] = document.createElement('div');
    }
    divs[0].classList.add('section');
    divs[0].id = 'branding';
    divs[1].classList.add('menu-background');
    divs[2].classList.add('menu');
    divs[3].classList.add('center-img');
    for (let j = 0; j < 4; j++)
    {
      headers[j] = document.createElement('h2');
      headers[j].classList.add('menu-link');
    }

    headers[0].textContent = 'Home';
    headers[1].textContent = 'Menus';
    headers[2].textContent = 'Reservations';
    headers[3].textContent = 'Contact';

    content.appendChild(divs[1]);
    content.appendChild(divs[0]);
    divs[1].appendChild(divs[2]);
    divs[2].appendChild(headers[0]);
    divs[2].appendChild(headers[1]);
    divs[2].appendChild(divs[3])
    divs[2].appendChild(headers[2]);
    divs[2].appendChild(headers[3]);

    let logo = document.createElement('img');
    let title = document.createElement('h1');
    title.textContent = 'Gekdonalds';
    logo.classList.add('medium-img');
    logo.classList.add('circle');
    logo.src = '../assets/geck.png';
    logo.alt = 'gizmo';

    divs[3].appendChild(logo);
    divs[3].appendChild(title);
}

function removeAllChildren() 
{
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}