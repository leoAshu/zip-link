import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'

import zipRoute from './routes/zipRoute.js'
import connectDB from './mongodb/connect.js'
import ZipLinkModel from './mongodb/models/zipLinks.js'

dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

// Route to shorten a URL
app.use('/zip', zipRoute)

// Route to ping server to check status
app.get('/', (req, res) => {
    res.status(200).json({ status: 'ZipLink is live!' })
})

// Route to redirect to the original URL
app.get('/:zipId', async (req, res) => {
    const zipId = req.params.zipId

    const zipLink = await ZipLinkModel.findOne({ zipId: zipId })
    if (!zipLink) {
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
