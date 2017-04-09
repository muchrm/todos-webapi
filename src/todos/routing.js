const express = require('express')
const handler = require('./handler')

module.exports = () => {
    const router = express.Router()
    router.get('/', handler.listTodos)
    router.post('/', handler.createTodo)
    return router
}
