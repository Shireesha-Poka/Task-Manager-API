const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./mongodb/mongo')
require('dotenv').config()
const notfound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware

app.use(express.static('./public'))
app.use(express.json())

//routes

app.use('/api/v1/tasks',tasks)

app.use(notfound)
app.use(errorHandlerMiddleware)

const port = 5000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('server is listening on port 5000'))
    } catch(error){
        console.log(error)
    }
}

start()

