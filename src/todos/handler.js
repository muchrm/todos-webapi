const todoService = require('./service')

let listTodos = (req, res) => {
    todoService.list()
        .then((todos) => {
            res.json(todos)
        })
        .catch((err) => {
            console.log(err)
            res.status(400)
                .json(todos)
        })
}
let createTodo = (req, res) => {
    let newTodo = req.body
    todoService.create(newTodo)
        .then((todo) => {
            res.status(201).json(todo)
        })
        .catch((err) => {
            console.log(err)
            res.status(400)
                .json({ error: "some error" })
        })
}
module.exports = {
    listTodos,
    createTodo
}
