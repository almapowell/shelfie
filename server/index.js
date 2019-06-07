require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Connected to the database')
})

app.get('/api/inventory', ctrl.getAllProducts)

app.post('/api/inventory', ctrl.createProduct)

app.delete('/api/inventory/:id', ctrl.deleteProduct) 

app.put('api/inventory/:id', ctrl.updateProduct)


app.listen(SERVER_PORT, () => console.log('Listening on port', SERVER_PORT))