
let btnClick = (e) => {
    document.getElementById('header-title').textContent = "Change"
    document.querySelector('#main').style.backgroundColor = "#f4f4f4"

    // event

    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    console.log(e.target.id)
    console.log(e.target.className)
    console.log(e.target.classList)
    let output = document.getElementById('output')
    output.innerHTML = `<h3>${e.clientX}</h3>`
    e.preventDefault()
    console.log(e.altKey)
    console.log(e.shiftKey)
    console.log(e.ctrlKey)
}

let box = document.getElementById('box')

let btn1 = document.getElementById('box').addEventListener('mouseenter', runEvent)
let btn8 = document.getElementById('box').addEventListener('mouseleave', runEvent)
let btn2 = document.getElementById('box').addEventListener('mouseover', runEvent)
let btn3 = document.getElementById('box').addEventListener('mouseout', runEvent)
let btn4 = document.getElementById('button').addEventListener('click', runEvent)
let btn5 = document.getElementById('button').addEventListener('dblclick', runEvent)
let btn6 = document.getElementById('button').addEventListener('mousedown', runEvent)
let btn7 = document.getElementById('button').addEventListener('mouseup', runEvent)


let itemInput = document.querySelector("input[type=text]").value
var select = document.querySelector('select')
let form = document.querySelector("form")

let runEvent = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`
}

form.addEventListener('submit', runEvent)

























































