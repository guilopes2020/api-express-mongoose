const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

const Person = require('./models/Person')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200)
    res.json({ message: 'oi express' })
})

mongoose.connect('mongodb://atlas-sql-65d604900f03d36e181cc950-gadmx.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin').then(() => {
    console.log('conectamos ao mongodb')
    app.listen(3000)
}).catch((err) => console.log(err))




//wmS49v6cRMXo1ToV

//sample_mflix

//mongodb://atlas-sql-65d604900f03d36e181cc950-gadmx.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin