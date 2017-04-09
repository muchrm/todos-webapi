const todosRouter = require('./todos/routing')
module.exports = (app) => {
    app.use('/todos', todosRouter())
}
