// Examine document objects
console.dir(document)

console.log(document.domain)
console.log(document.URL)
console.log(document.title)
document.title = 123
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])

document.all[10].textContent = 'Hello'
console.log(document.forms)
console.log(document.forms[0])
console.log(document.links)
console.log(document.images)


// SELECTORS

// (1) GET ELEMENT BY ID

let headerTitle = document.getElementById("header-title")
let header = document.getElementById("main-header")
console.log(headerTitle)

headerTitle.textContent = 'hello'
headerTitle.innerText = 'Goodbye'

console.log(headerTitle.innerText)
console.log(headerTitle.textContent)

headerTitle.innerHTML = "<h3>Hello</h3>"

header.style.borderBottom = "solid 10px black"

// (1) GET ELEMENTS BY CLASSNAME

let item = document.getElementsByClassName("list-group-item")
console.log(item[3])
item[1].textContent = "Hello 2"
item[1].textContent = "Hello 2"
item[1].style.color = "yellow"

// item.style.backgroundColor = 'grey'

for(let i = 0; i < item.length; i++){
    item[1].style.color = "Red"
    item[i].style.backgroundColor = "grey"
}


let li = document.getElementsByTagName("li")
console.log(li[3])
li[1].textContent = "Hello 2"
li[1].textContent = "Hello 2"
li[1].style.color = "yellow"

// item.style.backgroundColor = 'grey'

for (let i = 0; i < li.length; i++) {
    li[1].style.color = "Red"
    li[i].style.backgroundColor = "grey"
}


// Query Selectors //

let header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px Blue'


let input = document.querySelector('input')
input.value = "Hello Siddhesh"

let submit = document.querySelector("input[type = 'submit']")
submit.value = "Send"


let item = document.querySelector('.list-group-item')

item.style.color = "Red"

// let lastItem = document.querySelector('.list-group-item : last-child')
let lastItem = document.querySelector('.list-group-item : nthchild()')
lastItem.style.color = 'blue'

