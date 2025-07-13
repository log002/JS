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