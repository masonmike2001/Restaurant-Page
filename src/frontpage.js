const loadFrontPage = () => {
    console.log("Loads front page");
    let editableDiv = document.querySelector('#content');
    let hamburgerDiv = document.querySelector('#branding');
    let divs = [document.createElement('div'), document.createElement('div')];
    let headers = [];
    let buttons = [];
    let em = document.createElement('em');
    let hr = document.createElement('hr');

    for (let i = 0; i < 7; i++)
    {
        headers[i] = document.createElement('h3');
    }

    for (let j = 0; j < 2; j++)
    {
        buttons[j] = document.createElement('button');
    }

    headers[7] = document.createElement('h1');
    headers[7].classList.add('pic-text');
    headers[7].classList.add('center');
    headers[7].textContent = "Flippin' up the finest dang burgers in Massachusetts since 2020.";
    hamburgerDiv.appendChild(headers[7]);

    //button
    buttons[0].id = 'reservation-btn';
    buttons[0].classList.add('button');
    buttons[0].textContent = 'Make a reservation!';
    buttons[1].id = 'menu-btn';
    buttons[1].classList.add('button');
    buttons[1].textContent = 'Check out the menu!';
    hamburgerDiv.appendChild(buttons[0]);
    //hamburgerDiv.appendChild(buttons[1]);

    divs[0].classList.add('section');
    divs[0].id = 'hours';
    divs[1].id = 'hours-list';
    editableDiv.appendChild(divs[0]);
    divs[0].appendChild(divs[1]);
    em.textContent = "To better accomodate our leopard gecko patrons, hours have been updated!";
    divs[1].appendChild(em);
    divs[1].appendChild(hr);
    headers[0].textContent = 'Monday: 5:45am to 8:30am';
    headers[1].textContent = 'Tuesday: 5:45pm - 8:30pm';
    headers[2].textContent = 'Wednesday: 5:45am to 8:30am';
    headers[3].textContent = 'Thursday: 5:45pm - 8:30pm';
    headers[4].textContent = 'Friday: 5:45am to 8:30am';
    headers[5].textContent = 'Saturday: 5:45pm - 8:30pm';
    headers[6].textContent = 'Sunday: CLOSED (even geckos need their beauty sleep)';
    
    for (let k = 0; k < 6; k++)
    {
        divs[1].appendChild(headers[k]);
    }
};


export default loadFrontPage;