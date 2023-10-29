// Small Project 

let form = document.getElementById('addForm')

// Access Ul
let itemList = document.getElementById('items')

// filter Items
let filter = document.getElementById('filter')

let addItem = (e) => {
    e.preventDefault()

    // get input value

    let newItem = document.getElementById('newItem').value

    e.target.value = newItem
    let newLi = document.createElement('li')

    newLi.className = 'list-group-item'

    newLi.appendChild(document.createTextNode(e.target.value))

    // create del btn

    let delButton = document.createElement('button')
    delButton.className = 'btn-sm btn btn-danger delete float-end'

    delButton.appendChild(document.createTextNode('X'))
    newLi.appendChild(delButton)
    itemList.appendChild(newLi)
}

let removeItem = (e) => {
    e.preventDefault();

    if (e.target.classList.contains('delete')) {
        if (confirm(`You want to delete ${e.target.value}?`)) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

let filterItem = (e) => {
    let text = e.target.value.toLowerCase()
    let items = itemList.getElementsByTagName('li')
    Array.from(items).forEach((item) => {
        let itemName = item.firstChild.textContent
        if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

form.addEventListener('submit', addItem)

// Delete event
itemList.addEventListener('click', removeItem)

// filter Items
filter.addEventListener('keyup', filterItem)