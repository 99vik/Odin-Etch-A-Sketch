const container = document.querySelector('.container');
let x=16;

function changeColor() {
    
}

for (let i=1;i<=x;i++) {
    const row = document.createElement('div');
    row.classList = 'row';
    container.appendChild(row);
    for (let j=1;j<=x;j++) {
        const box = document.createElement('div');
        box.classList = 'box';
        row.appendChild(box);
        box.addEventListener('mouseover', () => {
            changeColor();
        });
    }
}   


