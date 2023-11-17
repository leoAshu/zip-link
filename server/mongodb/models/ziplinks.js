import mongoose from 'mongoose'

const ZipLinkSchema = new mongoose.Schema({
    zipId: { type: String, required: true, unique: true },
    redirectUrl: { type: String, required: true },
})

const ZipLinkModel = mongoose.model('ZipLink', ZipLinkSchema)

export default ZipLinkModel
