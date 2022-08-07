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
                    changeColor(e);
                    addDarknes(e);
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

//color change
function randomColorGen () {
    function randomNum() {
        return Math.floor(Math.random() * (266))
    }
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}
function changeColor(e) {
    e.target.style.backgroundColor = randomColorGen();
}
function addDarknes(e) {
    let oldBrigthness = e.target.classList[1].slice(-1);
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
                changeColor(e);
                addDarknes(e);
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



