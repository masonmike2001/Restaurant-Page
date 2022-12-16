const loadMenuPage = () => {
    console.log("Loads menu page");
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
    divs[1].id = "burgers";
    divs[1].classList.add('grid-square');
    divs[2].id = "sandwiches";
    divs[2].classList.add('grid-square');
    divs[3].id = "sides";
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

    headers[0].textContent = "GekDouble ($3.99)";
    headers[1].textContent = "GekChigen ($2.99)";
    headers[2].textContent = "Glass of GekWater ($0.99)";

    paragraphs[0].textContent = "A scrumptious cricket burger and fries meal. ";
    paragraphs[1].textContent = "Please note, this is not chicken! This is chigen, a gecko-safe insect burger! Who needs an impossible burger now?";
    paragraphs[2].textContent = "Now, this isn't just any water... this is GekWater! Includes a collectible water cup with the face of a certain insurance salesgecko extraordinaire!";
    /*
        Content
           0 (Menusheet)
            1    Grid Square (GkDouble)
                    Header 
                    Paragraph
                    Image
            2    Grid Square (GkChigen)
                    Header
                    Paragraph
                    Image
            3    Grid Square (Glass of GkWater)
                    Header
                    Paragraph
                    Image
    */
    
};

export default loadMenuPage;