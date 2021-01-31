// creating the main caontainer
let main = document.createElement('main')
main.classList.add('container')

// appending the main into body
document.body.prepend(main)

// creating greeting text
let projectName = document.createElement('h1')
projectName.innerHTML = 'let do it'
main.append(projectName)

// creating block for future list
let listBlock = document.createElement('div')
listBlock.className = 'mainBlock'
main.append(listBlock)

// creating a block-parent for creating s new todo
let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

// creating input for new todo
let textIn = document.createElement('input')
textIn.className = 'textIn'
textIn.setAttribute('placeholder', 'Gonna do...')
firstDiv.append(textIn)

// creating input with type date
let setDate = document.createElement('input')
setDate.setAttribute('type', 'date')
firstDiv.append(setDate)

// creat button
let addBtn = document.createElement('button')
addBtn.innerHTML = 'add'
addBtn.id = 'addBtn'
firstDiv.append(addBtn)

// addBtn.setAttribute('onclick', 'addTodo()')
let list = document.createElement('ul')
listBlock.append(list)

let todosArray = localStorage.getItem('todos') == null
? []
: [...JSON.parse(localStorage.getItem('todos'))]

addBtn.addEventListener('click', addTodo)