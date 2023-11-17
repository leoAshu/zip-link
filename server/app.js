import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import zipRoute from './routes/zipRoute.js'
import connectDB from './mongodb/connect.js'
import ZipLinkModel from './mongodb/models/zipLinks.js'

dotenv.config()

const PORT = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/zip', zipRoute)

app.get('/', (req, res) => {
    res.status(200).json({ status: 'ZipLink is live!' })
})

app.get('/:zipId', async (req, res) => {
    const zipId = req.params.zipId

    const zipLink = await ZipLinkModel.findOne({ zipId: zipId })
    if (!zipLink) {
        console.log('ZipId does not exist.')
        res.status(404).json({ error: 'ZipLink not found.' })
        return
    }

    res.redirect(zipLink.redirectUrl)
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

startServer()
