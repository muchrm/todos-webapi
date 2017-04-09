const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
module.exports = {
    instance: app,
    start: () => {
        app.listen(PORT, () => {
            console.info(`server started at port ${PORT}`)
        })
    }
}
