import mongoose from 'mongoose'

const connectDB = async (url) => {
    mongoose
        .connect(url)
        .then(() => console.log('Connected to DB'))
        .catch((e) => console.log(e))
}

export default connectDB
