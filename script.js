//buttons for drawing modes
const colorModeBtn = document.querySelector('.color-mode');
const rgbModeBtn = document.querySelector('.rgb-mode');
const eraserBtn = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');
eraserBtn.addEventListener('click', () => {
    const box = document.querySelectorAll('.box');
    box.forEach(function(box) {
        box.addEventListener('mouseover', (e) => {
            if (isMouseDown) {
                eraserMode(e);
            }
        });
    });
});
colorModeBtn.addEventListener('click', () => {
    const box = document.querySelectorAll('.box');
    box.forEach(function(box) {
        box.addEventListener('mouseover', (e) => {
            if (isMouseDown) {
                ColorMode(e);
            }
        });
    });
});
rgbModeBtn.addEventListener('click', () => {
    const box = document.querySelectorAll('.box');
    box.forEach(function(box) {
        box.addEventListener('mouseover', (e) => {
            if (isMouseDown) {
                rgbMode(e);
            }
        });
    });
});
clearBtn.addEventListener('click',() =>{
    setGrid();
});

//grid size changing
const slider = document.querySelector('#slider');
const container = document.querySelector('.container');
const sliderValue = document.querySelector('.slider-value');
let x=16;
const gridBtn = document.querySelector('button.grid-size');
function setGrid() {
    container.textContent = "";
    for (let i=1;i<=x;i++) {
        const row = document.createElement('div');
        row.classList = 'row';
        container.appendChild(row);
        for (let j=1;j<=x;j++) {
            const box = document.createElement('div');
            box.classList = 'box bright-9';
            row.appendChild(box);
            box.addEventListener('mouseover', (e) => {
                if (isMouseDown) {
                    ColorMode(e);
                }
            });
        }
    }   
}
function sliderGrid(e) {
    x = e.value
    sliderValue.textContent = e.value;
    setGrid();
}

//eraser mode
function eraserMode(e) {
    e.target.style.backgroundColor = "whitesmoke";
}

//color mode
function ColorMode(e) {
    e.target.style.backgroundColor = pickedColor;
}
let pickedColor = "#000000";
function currentColor(e) {
    pickedColor = e.value;
}

//rgb mode
function randomColorGen () {
    function randomNum() {
        return Math.floor(Math.random() * (266))
    }
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}
function rgbMode(e) {
    e.target.style.backgroundColor = randomColorGen();
}
function addDarknes(e) {
    let oldBrigthness = e.target.classList[1].slice(-1);
    console.log(oldBrigthness);

    if (oldBrigthness > 0) {
        let newBrightness = oldBrigthness-1;
        e.target.classList.replace(`bright-${oldBrigthness}`,`bright-${newBrightness}`);
    } else return;
}

//initial creation of the grid
for (let i=1;i<=x;i++) {
    const row = document.createElement('div');
    row.classList = 'row';
    container.appendChild(row);
    for (let j=1;j<=x;j++) {
        const box = document.createElement('div');
        box.classList = 'box bright-9';
        row.appendChild(box);
        box.addEventListener('mouseover', (e) => {
            if (isMouseDown) {
                ColorMode(e);
            }
        });
    }
}   

//drawing only if mouse is down too feature
let isMouseDown;
const mouseDown = window.addEventListener('mousedown', (e) => {
    isMouseDown = 1;
});
const mouseUp = window.addEventListener('mouseup', (e) => {
    isMouseDown = 0;
});



