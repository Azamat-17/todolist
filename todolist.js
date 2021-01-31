const createItem = (todo, id) => {
    let item = `
    <li key="${id}" class="${todo.checked ? 'taskItem': 'taskItem done'}">
        ${todo.title} ${todo.date ? todo.date : ''}
        <img class='btn' src='img/check.png' onclick='completeTodo(event)'/>
        <img class='btn' src='img/delete.png' onclick='deleteTodo(event)'/>
    </li>
    `
    return item
}

const renderTodoItems = () => {
    list.innerHTML = ''
    let items = []
    // console.log(todosArray.length)
    // console.log(Boolean(0))

    todosArray.length ? 
    todosArray.map((todo, id) => {
    
        items.unshift(createItem(todo, id))
        list.innerHTML = items.join('')
    }): 
    list.prepend('no tasks')
}
renderTodoItems()