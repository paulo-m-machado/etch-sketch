let grid = document.querySelector('#grid');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let gSize = prompt('informe o tamanho dos lados da grade', 16);
    let body = document.querySelector('body');
    body.removeChild(grid);
    grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    body.appendChild(grid);
    generateGrid(gSize);
});

function addHover(component) {
    component.classList.toggle('onhover');
}

function generateGrid(gSize) {
    for(let i = 0; i < gSize; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('display', 'flex');
        let squareSize = 249/gSize;
        console.log(squareSize);
        
        for (let o = 0; o < gSize; o++) {
            let component = document.createElement('div');
            component.setAttribute('class', 'component');
            component.style.cssText = `padding: ${squareSize}px;`;
    
            row.appendChild(component);
        }
    
        grid.appendChild(row);
    }

    let components = document.querySelectorAll('.component');
    components.forEach( component => component.addEventListener('mouseover', () => addHover(component)))
}

generateGrid(16);




