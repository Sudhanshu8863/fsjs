# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "grey":
                body.style.background = e.target.id;
                break;
            case "white":
                body.style.background = e.target.id;
                break;
            case "blue":
                body.style.background = e.target.id;
                break;
            case "yellow":
                body.style.background = e.target.id;
                break;
        }
    });
});
```

## project 2 solution

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `invalid hieght ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `invalid input ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi} </span>`;
        if (bmi < 18.6) {
            const span = document.createElement("span");
            span.innerText = "Under Weight";
            result.appendChild(span);
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            const span = document.createElement("span");
            span.innerText = "Normal Weight";
            result.appendChild(span);
        } else {
            const span = document.createElement("span");
            span.innerText = "Over Weight";
            result.appendChild(span);
        }
    }
});
```

## project 3 solution code

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const form = document.querySelector("form");
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const remChance = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

let playGame = true;
let chance = 1;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage("please enter a valid number");
    } else if (guess < 1) {
        displayMessage("please enter a number more than 1");
    } else if (guess > 100) {
        displayMessage("please enter a number less than 100");
    } else {
        if (chance === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess < randomNumber) {
        displayMessage("your number is TOOO low");
    } else if (guess > randomNumber) {
        displayMessage("your number is TOOO high");
    } else {
        displayMessage("You Guessed it right");
        endGame();
    }
}

function displayGuess(guess) {
    userInput.value = "";
    prevGuess.innerHTML += `${guess}, `;
    chance++;
    remChance.innerHTML = `${11 - chance}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = message;
}

function endGame() {
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");
    playGame = false;
    const p = document.createElement("p");
    p.innerHTML = `<span id="startNewGame">Start New Game</span>`;
    resultParas.appendChild(p);
    resultParas
        .querySelector("#startNewGame")
        .addEventListener("click", function () {
            newGame();
        });
}

function newGame() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    chance = 1;
    prevGuess.innerHTML = "";
    lowOrHi.innerHTML = "";
    remChance.innerHTML = `${11 - chance}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    resultParas.querySelector("#startNewGame").remove();

    playGame = true;
}
```

# Project 5 solution

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
```
