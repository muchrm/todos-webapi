let todos = [
    { id: 1, title: 'Learn NodeJS', completed: false },
    { id: 2, title: 'Create Express App', completed: true }
]
let list = () => {
    return todos
}
let create = (newTodo) => {
    newTodo.id = todos.length + 1;
    todos.push(newTodo)
    return newTodo
}
module.exports = {
    list,
    create
}