var gridContainer = document.querySelector('.grid-container');


function makeGrid () {
    for (let i = 0; i < 256; i++) {
        var squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        squareDiv.style.width = '33px'; 
        squareDiv.style.height = '33px';
        squareDiv.style.borderStyle = 'solid';
        squareDiv.style.backgroundColor = 'white';
        squareDiv.style.borderWidth = '1px'
        squareDiv.style.borderColor = 'black';
        gridContainer.appendChild(squareDiv);
    }
}

function sketch(e) {
    console.log('Event Type: '+e.type);
}

makeGrid();

var squareDiv = document.querySelectorAll('.square');
squareDiv.forEach(sketch);


// squareDiv.addEventListener('mouseenter', sketch);
// squareDiv.addEventListener('mouseleave', sketch);
// mouseenter 