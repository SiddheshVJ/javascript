let itemList = document.querySelector('#items')


// parent node

console.log(itemList.parentNode)

itemList.parentNode.style.backgroundColor = "#f4f4f4"
console.log(itemList.parentNode.parentNode)

// parentElement

console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = "#f4f4f4"
console.log(itemList.parentElement.parentElement)

// child nodes

console.log(itemList.childNodes)

console.log(itemList.children)

// firstchild

console.log(itemList.firstChild)

console.log(itemList.firstElementChild)
console.log(itemList.lastChild)
console.log(itemList.lastElementChild)


//nextSibling

console.log(itemList.nextElementSibling)
console.log(itemList.nextSibling)


// previousSibling
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'green'
itemList.previousElementSibling.style.fontSize = '5rem'





// CreateElement

// create a div

let newDiv = document.createElement('div')

// add Class
newDiv.className = 'hello'
// add Id
newDiv.id = 'hello-1'

// add attribute

newDiv.setAttribute('title','hello world')

let newDivText = document.createTextNode('Hello World')

// text to div

newDiv.appendChild(newDivText)


let container = document.querySelector('header .container')

let h2 = document.querySelector('header h2')


console.log(newDiv)

newDiv.style.fontSize = "40px"

container.insertBefore(newDiv,h2)

















