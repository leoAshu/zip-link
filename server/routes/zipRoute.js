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
    const url = req.body.url

    if (!url) {
        console.log('URL is required')
        res.status(400).json({ error: 'URL is required' })
        return
    }

    const urlExists = await ZipLinkModel.find({ redirectUrl: url })
    if (urlExists.length) {
        console.log('URL exists')
        res.status(200).json({ zipId: urlExists[0].zipId })
        return
    }

    let zipId = nanoid()
    let zipIdExists = ZipLinkModel.find({ zipId: zipId })
    while (zipIdExists.length) {
        console.log('ZipId exists')
        zipId = nanoid()
        zipIdExists = ZipLinkModel.find({ zipId: zipId })
    }

    const zipLink = new ZipLinkModel({
        zipId: zipId,
        redirectUrl: url,
    })

    await zipLink.save()

    console.log('New ZipLink saved')
    res.status(200).json({ zipId: zipId })
})

export default router
