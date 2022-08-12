var gridContainer = document.querySelector('.grid-container');
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';

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

//To sketch on grid in black

var squareDiv = document.querySelectorAll('.square');
for (let i = 0; i < squareDiv.length; i++) {
squareDiv[i].addEventListener('mouseenter', function() {
this.style.backgroundColor = 'black';
})}

//Button to change grid dimensions

var btnClick = document.querySelector('.btn').addEventListener('click', function(){
    var dimension = parseInt(prompt('Select the number of squares on each side. Must be a whole number 0-100')); 
    area = dimension*dimension
    //remove old grid
    var removeDiv = document.querySelectorAll('.square');
    for (let i = 0; i < removeDiv.length; i++) {
        gridContainer.removeChild(removeDiv[i]);
    }
    //add new grid
    makeGrid(area);
    gridContainer.style.gridTemplateColumns = 'repeat('+dimension+', 1fr)';
    var squareDiv = document.querySelectorAll('.square');
        for (let i = 0; i < squareDiv.length; i++) {
        squareDiv[i].addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'black';
            })}
})

//how to input variable from prompt into repeat()??






