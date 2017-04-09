const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const routing = require('./routing')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

routing(app)

app.listen(PORT, () => {
    console.info(`server started at port ${PORT}`)
})
