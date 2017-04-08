const todoService = require('./service')

let listTodos = (req, res) => {
    todoService.list((todos) => {
        res.json(todos)
    })
}
let createTodo = (req, res) => {
    let newTodo = req.body
    todoService.create(newTodo, (todo) => {
        res.status(201).json(todo)
    })

}
module.exports = {
    listTodos,
    createTodo
}
