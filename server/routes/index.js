import express from 'express'

import zipRoute from './zipRoute.js'

const router = express.Router()

router.route('/').get((req, res) => {
    res.send('<h1>Hello from ZipLink</h1>')
})

export default router
export { zipRoute }
