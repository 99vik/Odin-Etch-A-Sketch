const container = document.querySelector('.container');
let x=16;
const gridBtn = document.querySelector('button.grid-size');
gridBtn.addEventListener('click',() => {
    x=prompt("Choose grid size (max 80)",x);
    while (x>80 || x<1) {
        alert("Please choose a size between 1 and 80");
        x=prompt("Choose grid size",16);
    }
    setGrid();
});
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

for (let i=1;i<=x;i++) {
    const row = document.createElement('div');
    row.classList = 'row';
    container.appendChild(row);
    for (let j=1;j<=x;j++) {
        const box = document.createElement('div');
        box.classList = 'box bright-9';
        row.appendChild(box);
        box.addEventListener('mouseover', (e) => {
            changeColor(e);
            addDarknes(e);
        });
    }
}   

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
                changeColor(e);
                addDarknes(e);
            });
        }
    }   
}

