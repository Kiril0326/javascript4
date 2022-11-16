const slideContainer = document.querySelector(".slide_content")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const buttonsContainer = document.querySelector(".buttonsContainer")

const btnSrc = [
    'img/HTML_icon.png',
    'img/CSS_icon.png',
    'img/JS_icon.png',
]

btnSrc.forEach(element => {
    const img = document.createElement("img");
    img.className = "btn"
    img.src = element;
    buttonsContainer.append(img)
})

const footerDecoration = document.createElement("div")
footerDecoration.className = "footer_cont_decoration"
container.append(footerDecoration)

const containerSrc = [
    'img/iconHTML.png',
    'img/iconCSS.png',
    'img/iconJS.png',
]

containerSrc.forEach(element => {
    const divContainer = document.createElement("div");
    const img = document.createElement("img");
    img.className = "img";
    img.src = element;
    const longLine = document.createElement("div")
    longLine.className = "text_decoration long-line";
    const shortLine = document.createElement("div")
    shortLine.className = "text_decoration short-line";
    const longLine1 = document.createElement("div")
    longLine1.className = "text_decoration long-line";
    const footerContBar = document.createElement("div")
    footerContBar.className = "footer_cont_bar";

    divContainer.append(img, longLine, shortLine, longLine1, footerContBar)
    slideContainer.append(divContainer)
})

const buttons = document.querySelectorAll('.btn');

const cardsStyle = [
    {position: '600px', color: '#EFADC3FF'},
    {position: '0', color: '#9392EFF'},
    {position: '-800px', color: '#EDE34DFF'},
];
 
//arrow function 
const initialPostion = () => {
    buttons[0].classList.add('active');
    body.style.backgroundColor = cardsStyle[0].color;
    slideContainer.style.marginLeft = cardsStyle[0].position;
}


const slideshow = () => {
    initialPostion()
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            buttons.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            body.style.backgroundColor = cardsStyle[idx].color;
            slideContainer.style.marginLeft = cardsStyle[idx].position;
        });
    });
};

slideshow()