import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

import defaultRoute from './routes/index.js'
import connectDB from './mongodb/connect.js'

dotenv.config()

const PORT = 3000
const app = express()

app.use('/', defaultRoute)

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

startServer()
