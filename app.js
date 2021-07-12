'use strict'

//define main modules
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const product_router = require('./src/controllers/productController')
const category_router = require('./src/controllers/categoryControoler')
const app = express()

//define port
const PORT = process.env.PORT || 5001;

//define cors
app.use(cors())
app.use(bodyParser())
app.use(morgan())

//define DB
mongoose.connect(process.env.DATABASE, (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log(`DB is connected`)
    }
})

//define routes
app.use('/products', product_router)
app.use('/category', category_router)

app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log(`App is listining on PORT: ${PORT}`)
    }
})
