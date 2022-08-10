var gridContainer = document.querySelector('.grid-container');
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';

function makeGrid (area) {
    for (let i = 0; i < area; i++) {
        var squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        squareDiv.style.borderStyle = 'solid';
        squareDiv.style.backgroundColor = 'white';
        squareDiv.style.borderWidth = '1px'
        squareDiv.style.borderColor = 'grey';
        gridContainer.appendChild(squareDiv);
    }
}

makeGrid(256);

var squareDiv = document.querySelectorAll('.square');
for (let i = 0; i < squareDiv.length; i++) {
    squareDiv[i].addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'black';
    })
}

var btnClick = document.querySelector('.btn').addEventListener('click', function(){
    var dimension = prompt('Select the number of squares on each side. Must be a whole number 0-100'); 
    area = dimension*dimension
    makeGrid(area);
    gridContainer.style.gridTemplateColumns = 'repeat(dimension, 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(dimension, 1fr)';
})

//how to input variable from prompt into repeat()??



