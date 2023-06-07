/**
 * Tally object too keep track of score
 */
const tally = {
    wins: 0,
    ties: 0,
    losses: 0
}

/**
 * score() targets the paragraph js-score and replaces the inner text to the score using the tally object
 */
function score() {
    document.querySelector('.js-score').innerText =
    `Wins: ${tally.wins}, Ties: ${tally.ties}, Losses: ${tally.losses}`;
}

/**
 * reset() will reset the score and reset the inner HTML of js-result and js-moves
 */
function reset() {
    tally.wins = 0;
    tally.ties = 0;
    tally.losses = 0;
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
    score();
}

/**
 * This function displays the results of the game by using querySelector to replace certain HTML elements
 */
function end(result, playerMove, compMove) {
    if (result === 'WIN') {
        tally.wins++;
        document.querySelector('.js-result').innerHTML = 'YOU WIN!';
        document.querySelector('.js-moves').innerHTML = `You chose ${playerMove} and the computer chose ${compMove}`;
    }
    else if (result === 'TIE') {
        tally.ties++;
        document.querySelector('.js-result').innerHTML = 'A TIE!';
        document.querySelector('.js-moves').innerHTML = `You both chose ${playerMove}`;
    }
    else {
        tally.losses++;
        document.querySelector('.js-result').innerHTML = 'YOU LOST';
        document.querySelector('.js-moves').innerHTML = `You chose ${playerMove} and the computer chose ${compMove}`;
    }
    score();
}

/**
 * computerMove() will determine the compute move using a randome float between 0 and 1
 */
function computerMove() {
    let computerMove = '';
    let randomint = Math.random();

    if (randomint < (1 / 3)) {
        computerMove = 'Rock';
    }
    else if (randomint >= (1 / 3) && randomint < (2 / 3)) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors';
    }
    return computerMove;
}

/**
 * This function is the game mechanics which determine whether you win or lose
 */
function gameMech(playerMove, compMove) {
    let result = '';
    if (playerMove === 'Rock') {
        if (compMove === 'Rock') {
            result = 'TIE';
        }
        else if (compMove === 'Paper') {
            result = 'LOSE';
        }
        else {
            result = 'WIN';
        }
    }
    else if (playerMove === 'Paper') {
        if (compMove === 'Rock') {
            result = 'WIN';
        }
        else if (compMove === 'Paper') {
            result = 'TIE';
        }
        else {
            result = 'LOSE';
        }
    }
    else if (playerMove === 'Scissors')
        if (compMove === 'Rock') {
            result = 'LOSE';
        }
        else if (compMove === 'Paper') {
            result = 'WIN!';
        }
        else {
            result = 'TIE';
        }
    return result;
}