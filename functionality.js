const addTodo = () => {
    let newTask = textIn.value
    let date = setDate.value

    if(newTask != ''){
        todosArray.push({
            title: newTask,
            checked: false,
            date,
        })
        localStorage.setItem('todos', JSON.stringify(todosArray))
        renderTodoItems()

        textIn.value = ''
        setDate.value = ''
    }
}

const deleteTodo = (e) =>{
    // e.currentTarget.parentNode.remove(e.parentNode)
    // let todosTemporary = [...todosArray]
    let index = parseInt(e.target.parentNode.getAttribute('key'))
    todosArray.splice(index,1)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    renderTodoItems()
}

const completeTodo = (e) => {
    let todosTemporary = [...todosArray]
    // console.log(todosTemporary)

    let index = parseInt(e.target.parentNode.getAttribute('key'))

    let objElement = todosTemporary[index].checked
    todosTemporary[index].checked = !objElement

    localStorage.setItem('todos', JSON.stringify(todosTemporary))

    let isDone = e.currentTarget.parentNode.classList.contains('done')

    isDone ?
    e.currentTarget.parentNode.classList.remove('done') :
    e.currentTarget.parentNode.classList.add('done') 
}

const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_page=1')
    .then(response => response.json())
    .then(array => {
        console.log(array)
        localStorage.setItem('todos', JSON.stringify(array))
    })
}
getTodos()