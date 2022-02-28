const env = require('dotenv')
env.config()

const express = require('express')
const app = express()

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})

try {
    sequelize.authenticate().catch(error => {
        console.log(error)
    })
    console.log('A conexão foi estabelecida com sucesso!')
} catch (error) {
    console.error('Não foi possível conectar ao banco de dados', error)
}

const port = process.env.PORT || 3003

app.get('/', (req, res) => {
    return res.send('API app-ludus')
})

app.listen(port, () => console.log(`API rodando na porta ${port}`))