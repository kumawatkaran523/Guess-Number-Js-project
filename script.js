let remainGuess = document.querySelector('.remGuess');
let count = 3;
remainGuess.innerHTML = `Guesses Remaining : ${count}`;
let fixedNumber = Math.round(Math.random() * 10);
let prev = document.querySelector('.prevGuess');
let prevGuess = 0;

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => {
  const val = document.querySelector('.ip').value;
  if (checkVal(val) && count >= 1) {
    const result = validateGuess(val);
    if (result) addNewGame();
    remainGuess.innerHTML = `Guesses Remaining : ${--count}`;
    if (prevGuess > 0) prev.innerHTML = `Previous Guess : ${prevGuess}`;
    prevGuess = val;
    console.log(fixedNumber);
  }
  if (count === 0 && prev != fixedNumber) {
    count--;
    const status = document.querySelector('.status');
    status.innerHTML = `Game Over 😔, Actual Number was ${fixedNumber}`;
    addNewGame();
  }
  document.querySelector('.ip').value = '';
});

function checkVal(val) {
  const status = document.querySelector('.status');
  if (isNaN(val) || !(val >= 1 && val <= 10)) {
    status.innerHTML =
      'Please guess and enter a valid number between 1 and 100';
    return false;
  }
  return true;
}

function validateGuess(val) {
  const status = document.querySelector('.status');
  if (val > fixedNumber) {
    status.innerHTML = 'Your Guess Number is greater than Actual number';
  } else if (val < fixedNumber) {
    status.innerHTML = 'Your Guess Number is lower than Actual number';
  } else {
    status.innerHTML = 'Yeh!!! 🎉🎉🎉 You guess the correct number ';
    return true;
  }
  return false;
}

function addNewGame() {
  // creting new element
  const status = document.querySelector('.status');
  const newGame = document.createElement('button');
  newGame.className = 'btn';
  newGame.id = 'newgm';
  newGame.innerHTML = 'New Game';
  newGame.style.backgroundColor = 'green !important';
  const main = document.querySelector('.main');
  if (!main.querySelector('#newgm')) main.appendChild(newGame);

  newGame.addEventListener('click', () => {
    count = 3;
    prevGuess = 0;
    status.innerHTML = '';
    prev.innerHTML = '';
    remainGuess.innerHTML = `Guesses Remaining : ${count}`;
    fixedNumber = Math.round(Math.random() * 10 + 1);
    newGame.remove();
  });
}
