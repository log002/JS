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





