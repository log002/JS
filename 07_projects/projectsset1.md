# Projects related to DOM

## project link
[Click here](https://github.com/log002/JS/tree/main/07_projects)


# Solution code

## project 1: body background color changer
[Source code](https://github.com/log002/JS/tree/main/07_projects/project_1)

```javascript
console.log("sadek")
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## Project 2: BMI Calculator
[Source code](https://github.com/log002/JS/tree/main/07_projects/2-BMICalculator) 

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();  // to prevent by default action that happens on submitting the form the data is sent by post/get methods so, that action is prevented here.
    console.log("submit")
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight";
    }else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>BMI : ${BMI} </span>`
    }

})
```



## Project 3: DigitalClock
[Source code](https://github.com/log002/JS/tree/main/07_projects/3-DigitalClock) 

```javascript
// document.querySelector('#clock')
const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
    
}, 1000)
```


## Project 4: Guess The Number
[Source code](https://github.com/log002/JS/tree/main/07_projects/4-NumberGuessing)

```javascript
let randomNumber =  parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1){
        alert("Please enter a number greater than 1")
    }else if(guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Your guess is correct`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton =  document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber =  parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disable')
        startOver.removeChild(p)
        
        playGame = true

    })
}

```

## Project 5: Keyboard 
[Source code](https://github.com/log002/JS/tree/main/07_projects/5-keyboard)

```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycdoe</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})
```


## Project 6: Unlimited Colors 
[Source code](https://github.com/log002/JS/tree/main/07_projects/6-unlimitedColors)

```javascript
// generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

let intervalId
const startColorChange = function(){
    if(!intervalId)
        intervalId = setInterval(start, 1000)
    function start(){
        document.body.style.backgroundColor = randomColor()
    }
    
}

const stopColorChange = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startColorChange)
document.querySelector('#stop').addEventListener('click', stopColorChange)
```