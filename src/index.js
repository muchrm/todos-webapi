const server = require('./app')
const todoRouter = require('./todos/routing')

todoRouter(server.instance)
server.start()
