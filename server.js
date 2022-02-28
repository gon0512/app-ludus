const env = require('dotenv')
env.config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3003

app.get('/', (req, res) => {
    return res.send('API app-ludus')
})

app.listen(port)