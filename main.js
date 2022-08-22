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

var btnBlack = document.querySelector('.btn-black');
btnBlack.addEventListener('click', function(){
    
    //Buttons styling with click
    btnBlack.classList.remove('btn-black');
    btnBlack.classList.add('black-active');
    btnRainbow.classList.remove('rainbow-active');
    btnRainbow.classList.add('btn-rainbow');
    btnShade.classList.add('btn-shade');
    btnShade.classList.remove('shade-active');
    btnErase.classList.remove('eraser-active');
    btnErase.classList.add('btn-eraser');
    
    var squareDiv = document.querySelectorAll('.square');
    for (let i = 0; i < squareDiv.length; i++) {
        squareDiv[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'black';
    })}})

//To sketch on grid in rainbow colour
var btnRainbow = document.querySelector('.btn-rainbow');
btnRainbow.addEventListener('click', function(){
    
    //Buttons styling with click
    btnRainbow.classList.remove('btn-rainbow');
    btnRainbow.classList.add('rainbow-active');
    btnBlack.classList.remove('black-active');
    btnBlack.classList.add('btn-black');
    btnShade.classList.add('btn-shade');
    btnShade.classList.remove('shade-active');
    btnErase.classList.remove('eraser-active');
    btnErase.classList.add('btn-eraser');
    
    var squareDiv = document.querySelectorAll('.square');
    for (let i = 0; i < squareDiv.length; i++) {
        squareDiv[i].addEventListener('mouseenter', function() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);    
            this.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    })}})

//To sketch on grid in progressively darker black

var btnShade = document.querySelector('.btn-shade');
btnShade.addEventListener('click', function (){
    
    //Buttons styling with click
    btnShade.classList.remove('btn-shade');
    btnShade.classList.add('shade-active');
    btnBlack.classList.remove('black-active');
    btnBlack.classList.add('btn-black');
    btnRainbow.classList.remove('rainbow-active');
    btnRainbow.classList.add('btn-rainbow');
    btnErase.classList.remove('eraser-active');
    btnErase.classList.add('btn-eraser');
    
    
    var squareDiv = document.querySelectorAll('.square');
    var mouseEnterCount = new Array(squareDiv.length).fill(0);  
    
    for (let i = 0; i < squareDiv.length; i++) {
        squareDiv[i].addEventListener('mouseenter', function () {
            console.log("Square number: " +i);
            console.log("Number of elements in array: " +mouseEnterCount.length);        
            mouseEnterCount[i] += 1
            console.log(mouseEnterCount.at(i));
            
            if (mouseEnterCount[i] === 1) {
                this.style.backgroundColor = '#e5e5e5';
            } else if (mouseEnterCount[i] === 2) {
                this.style.backgroundColor = '#cccccc';
            } else if (mouseEnterCount[i] === 3) {
                this.style.backgroundColor = '#b2b2b2';
            } else if (mouseEnterCount[i] === 4) {
                this.style.backgroundColor = '#999999';
            } else if (mouseEnterCount[i] === 5) {
                this.style.backgroundColor = '#7f7f7f';
            } else if (mouseEnterCount[i] === 6) {
                this.style.backgroundColor = '#666666';
            } else if (mouseEnterCount[i] === 7) {
                this.style.backgroundColor = '#4c4c4c';
            } else if (mouseEnterCount[i] === 8) {
                this.style.backgroundColor = '#323232';
            } else if (mouseEnterCount[i] === 9) {
                this.style.backgroundColor = '#191919';
            } else if (mouseEnterCount[i] === 10) {
                this.style.backgroundColor = '#000000';
            } else {
                this.style.backgroundColor = '#000000';
            }})}}
            );

//To erase
var btnErase = document.querySelector('.btn-eraser')
btnErase.addEventListener('click', function(){

    //Buttons styling with click
    btnErase.classList.remove('btn-eraser');
    btnErase.classList.add('eraser-active');
    btnBlack.classList.remove('black-active');
    btnBlack.classList.add('btn-black');
    btnRainbow.classList.remove('rainbow-active');
    btnRainbow.classList.add('btn-rainbow');
    btnShade.classList.remove('shade-active')
    btnShade.classList.add('btn-shade')


    var squareDiv = document.querySelectorAll('.square');
    for (let i = 0; i < squareDiv.length; i++) {
        squareDiv[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'white';
        })
    }
    });










