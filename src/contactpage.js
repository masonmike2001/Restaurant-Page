const loadContactPage = () => {
    console.log("Loads contact page");
    let branding = document.querySelector('#branding');

    let divs = [];
    let headers = [];
    let paragraphs = [];
    let images = []
    for (let i = 0; i < 5; i++)
    {
        divs[i] = document.createElement('div');
    }

    divs[0].id = "menu-sheet";
    for (let k = 0; k < 3; k++)
    {
        divs[k + 1].classList.add('grid-square');
    }

    divs[2].classList.add('grid-square');
    divs[3].classList.add('grid-square');

    branding.appendChild(divs[0]);
    divs[0].appendChild(divs[1]);
    divs[0].appendChild(divs[2]);
    divs[0].appendChild(divs[3]);

    for (let j = 0; j < 3; j++)
    {
        headers[j] = document.createElement('h2');
        paragraphs[j] = document.createElement('p');
        images[j] = document.createElement('img');
        
        divs[j + 1].appendChild(headers[j]);
        divs[j + 1].appendChild(paragraphs[j]);
        divs[j + 1].appendChild(images[j]);
    }

    headers[0].textContent = "Gizmo Gecko";

    paragraphs[0].textContent = "Email: gizmogecko@geckdonalds.com";
    paragraphs[1].textContent = "Reachable at any time during business hours. If you have any positive feedback or just want to chat, Gizmo's your gecko!";
};


export default loadContactPage;