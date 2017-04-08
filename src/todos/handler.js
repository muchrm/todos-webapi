const todoService = require('./service')

let listTodos = (req, res) => {
    res.json(todoService.list())
}
let createTodo = (req, res) => {
    let newTodo = req.body
    res.status(201).json(todoService.create(newTodo))
}
module.exports = {
    listTodos: listTodos,
    createTodo: createTodo
}