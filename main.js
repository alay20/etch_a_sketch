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



//Button to change grid dimensions

var btnNewGrid = document.querySelector('.btn-new').addEventListener('click', function(){
    var dimension = parseInt(prompt('Select the number of squares on each side. Must be a whole number 1-100')); 
    area = dimension*dimension
    //remove old grid
    var removeDiv = document.querySelectorAll('.square');
    for (let i = 0; i < removeDiv.length; i++) {
        gridContainer.removeChild(removeDiv[i]);
    }
    //add new grid
    makeGrid(area);
    gridContainer.style.gridTemplateColumns = 'repeat('+dimension+', 1fr)';
})


//To sketch on grid in black

var btnBlack = document.querySelector('.btn-black').addEventListener('click', function(){
    var squareDiv = document.querySelectorAll('.square');
    for (let i = 0; i < squareDiv.length; i++) {
    squareDiv[i].addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'black';
    })}})

//To sketch on grid in rainbow colour
var btnRainbow = document.querySelector('.btn-rainbow').addEventListener('click', function(){
    var squareDiv = document.querySelectorAll('.square');
    for (let i = 0; i < squareDiv.length; i++) {
    squareDiv[i].addEventListener('mouseenter', function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);    
    this.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    })}})










