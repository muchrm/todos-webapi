const MongoClient = require('mongodb').MongoClient
let list = (fn) => {
    MongoClient.connect('mongodb://localhost:27017/todos', (err, db) => {
        db.collection('todos').find({}).toArray((err, todos) => {
            fn(todos)
            db.close()
        })
    })
}
let create = (newTodo, fn) => {
    MongoClient.connect('mongodb://localhost:27017/todos', (err, db) => {
        db.collection('todos').count(function (err, count) {
            newTodo.id = count + 1
            newTodo.completed = false
            db.collection('todos').insertOne(newTodo, (err, r) => {
                fn(newTodo)
                db.close()
            })
        })
    })
}
module.exports = {
    list,
    create
}
