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