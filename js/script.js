//function to create cells
//their width is determined by "difficulty"

function createGrid(container, difficulty) {
    let newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.classList.add(difficulty);
    container.append(newCell);
    newCell.addEventListener('click', function() {
        this.classList.add('lightblue');
    });
}

const gridHtml = document.querySelector('.grid');
const buttonEasy = document.querySelector('.button.easy');
const buttonNormal = document.querySelector('.button.normal');
const buttonHard = document.querySelector('.button.hard');
const difficultyEasy = 'easy';
const difficultyNormal = 'normal';
const difficultyHard = 'hard';

//number of cells created is based on difficulty
//gridHtml.innerHTML = ''; <-- this is to reset the grid if you click again 

buttonEasy.addEventListener('click', function() {
    gridHtml.innerHTML = '';
    for (i = 1; i <= 49; i++) {
        createGrid(gridHtml, difficultyEasy);
    }
});

buttonNormal.addEventListener('click', function() {
    gridHtml.innerHTML = '';
    for (i = 1; i <= 81; i++) {
        createGrid(gridHtml, difficultyNormal);
    }
});

buttonHard.addEventListener('click', function() {
    gridHtml.innerHTML = '';
    for (i = 1; i <= 100; i++) {
        createGrid(gridHtml, difficultyHard);
    }
});