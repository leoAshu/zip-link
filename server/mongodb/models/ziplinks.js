import mongoose from 'mongoose'

const ZipLink = new mongoose.Schema({
    zipId: { type: String, required: true, unique: true },
    redirectUrl: { type: String, required: true },
});

const ZipLinkSchema = mongoose.model('ZipLink', ZipLink);

export default ZipLinkSchema;