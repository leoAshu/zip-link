import express from 'express'

import zipItRoute from './zipItRoute.js'

const router = express.Router()

router.route('/').get((req, res) => {
    console.log(req)
    res.send('<h1>Hello from ZipLink</h1>')
})

export default router
export {zipItRoute}
