let grid = document.querySelector('#grid');

//generating grid
for(let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.setAttribute('display', 'flex');
    
    for (let o = 0; o < 16; o++) {
        let component = document.createElement('div');
        component.setAttribute('class', 'component');
        //component.textContent = `${o}`;

        row.appendChild(component);
    }

    grid.appendChild(row);
}

function addHover(component) {
    component.classList.toggle('onhover');
}

let components = document.querySelectorAll('.component');
components.forEach( component => component.addEventListener('mouseover', () => addHover(component)))
components.forEach( component => component.addEventListener('mouseout', () => addHover(component)))
