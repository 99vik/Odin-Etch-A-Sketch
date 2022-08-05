const container = document.querySelector('.container');
let x=16;

function randomColorGen () {
    function randomNum() {
        return Math.floor(Math.random() * (255 + 1))
    }
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}

function changeColor(e) {
    e.target.style.backgroundColor = randomColorGen();
}

for (let i=1;i<=x;i++) {
    const row = document.createElement('div');
    row.classList = 'row';
    container.appendChild(row);
    for (let j=1;j<=x;j++) {
        const box = document.createElement('div');
        box.classList = 'box';
        row.appendChild(box);
        box.addEventListener('mouseover', (e) => {
            changeColor(e);
        });
    }
}   


