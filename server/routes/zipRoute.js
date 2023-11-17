import express from 'express'
import { customAlphabet } from 'nanoid'
import * as dotenv from 'dotenv'

import ZipLinkModel from '../mongodb/models/zipLinks.js'

dotenv.config()
const nanoid = customAlphabet(
    process.env.ZIP_ID_CHARACTERS,
    Number(process.env.ZIP_ID_LENGTH)
)
const router = express.Router()

router.route('/').post(async (req, res) => {
    let url = req.body.url

    if (
        !(String(url).includes('https://') || String(url).includes('http://'))
    ) {
        url = 'https://' + url
    }

    if (!url) {
        // Check if url is passed as param
        res.status(400).json({ error: 'URL is required' })
        return
    }

    // Check if url already exists in DB
    const urlExists = await ZipLinkModel.find({ redirectUrl: url })
    if (urlExists.length) {
        res.status(200).json({ zipId: urlExists[0].zipId })
        return
    }

    // Avoiding possible collision
    let zipId = nanoid()
    let zipIdExists = ZipLinkModel.find({ zipId: zipId })
    while (zipIdExists.length) {
        zipId = nanoid()
        zipIdExists = ZipLinkModel.find({ zipId: zipId })
    }

    const zipLink = new ZipLinkModel({
        zipId: zipId,
        redirectUrl: url,
    })
    await zipLink.save()

    res.status(200).json({ zipId: zipId })
})

export default router
