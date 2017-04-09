const express = require('express')
const handler = require('./handler')

let todosRouter = () => {
    const router = express.Router()
    router.get('/', handler.listTodos)
    router.post('/', handler.createTodo)
    return router
}
module.exports = (app) => {
    app.use('/todos', todosRouter())
}
