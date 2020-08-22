const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')


require('dotenv').config({
    path: './config/config.env'
})


const app = express() 
connectDB()


app.use(bodyparser.json)

if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}

app.use((req, res, next)=>{
    res.status(404).json({
        success: false,
        message: "Page Not Founded"
    })
});
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})