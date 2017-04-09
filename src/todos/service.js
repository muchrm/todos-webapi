const MongoClient = require('mongodb').MongoClient

const MongoEndpoint = 'mongodb://localhost:27017/todos'

let connectMongo = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(MongoEndpoint, (err, db) => {
            if (err !== null) {
                reject({name:"connection fail"})
            }
            resolve(db)
        })
    })
}
let list = () => {
    return connectMongo().then((db) => {
        return promise = db.collection('todos')
            .find({})
            .toArray()
            .then((result) => {
                db.close()
                return result
            })
    })
}
let create = (newTodo) => {
    return connectMongo().then((db) => {
        return db.collection('todos')
            .insert(newTodo)
            .then((result) => {
                db.close()
                return result
            })
    }).then((result) => {
        let newTodo = result.ops[0]
        newTodo.id = newTodo._id
        delete newTodo._id
        return newTodo
    })
}
module.exports = {
    list,
    create
}
