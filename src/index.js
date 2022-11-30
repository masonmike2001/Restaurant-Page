console.log("Webpack is correctly installed. -M");
pageOnLoad(0);

//func for when user first loads or clicks next/prev page or num dot, 
//to switch between 3 DOM configurations after removing prev children
function pageOnLoad(destination) {
    if (destination === 0 && !document.querySelector('.page-switcher')) initPageIndicators();
}


//initializes page indicators (side of site and bottom dots), and appends in DOM. 
//Creates e listener to call onPageSwitch w/ parameters
//these are outside scope of the page switch. Only change
function initPageIndicators() {
    //side indicators (next, prev)

    //bottom dots, hovering = popup w/ name
}

