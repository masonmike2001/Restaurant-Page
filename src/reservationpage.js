const loadResPage = () => {
    console.log("Loads reservation page");
    let branding = document.querySelector('#branding');
    let divs = [];
    let headers = [];

    divs[0] = document.createElement('div');
    headers[0] = document.createElement('h1');

    divs[0].id = 'menu-sheet';
    divs[0].classList.add('grid-square');
    headers[0].textContent = "UNDER CONSTRUCTION!";
    branding.appendChild(divs[0]);
    divs[0].appendChild(headers[0]);
};

export default loadResPage;