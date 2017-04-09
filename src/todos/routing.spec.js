const supertest = require('supertest')
const bodyParser = require('body-parser')
const server = require('../app')
const todosRouting = require('./routing')

jest.mock('./service')

describe('todos-routing', () => {
    let app = server.instance
    describe('/GET todos', () => {
        beforeEach(() => {
            const todosService = require('./service')
            todosService.list.mockReturnValue(Promise.resolve([{ "_id": "58e9aaf9553e4014d4376a3e", "title": "hello" }]))
            todosRouting(app)
        })
        it('should return HTTP 200 OK when successfull', () => {
            return supertest(app)
                .get('/todos')
                .expect(200)
        })
        it('should list all todos with json body', () => {
            return supertest(app)
                .get('/todos')
                .then((res) => {
                    expect(res.body).toEqual([{ "_id": "58e9aaf9553e4014d4376a3e", "title": "hello" }])
                })
        })
    })
    describe('/POST todos', () => {
        it('should create todo', () => {
            const todosService = require('./service')
            todosService.create.mockReturnValue(Promise.resolve({
                id: '58e9aaf9553e4014d4376a3e',
                title: 'Learn supertest',
                completed: false,
            }))
            todosRouting(app)
            return supertest(app).post('/todos')
                .send({ title: 'Learn supertest', completed: false })
                .set('Content-Type', 'appplication/json')
                .then((res) => {
                    expect(res.body.id).toEqual('58e9aaf9553e4014d4376a3e')
                    expect(res.body.title).toEqual('Learn supertest')
                    expect(res.body.completed).toEqual(false)
                })
        })
    })
})
