const express = require('express')

const router = express.Router()

//middleware to validation
router.post('/:math', function (req, res, next) {
    if(!req.body.num1 && !req.body.num2) {
        return res.status(432).json({message: 'No data fool'})
    }

    next()
})

// routes for calculator
router.post('/add', function (req, res, next) {
    res.json({result: req.body.num1 + req.body.num2})
})

router.post('/subs', function (req, res, next) {
    res.json({result: req.body.num1 - req.body.num2})
})

router.post('/mult', function (req, res, next) {
    res.json({result: req.body.num1 * req.body.num2})
})

router.post('/div', function (req, res, next) {
    res.json({result: req.body.num1 / req.body.num2})
})

module.exports = router
