import express from "express";

const router = express.Router()

router.route('/').get((req, res) => {
    res.send('Ok from ZipIt')
})

router.route('/').post((req, res) => {
    const body = req.body

    console.log(body);
    res.send(JSON.stringify(body))
})

export default router