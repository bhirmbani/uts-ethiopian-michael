const router = require('express').Router()

router.use('/foods', require('./foods'))
router.use('/restaurants', require('./restaurants'))

module.exports = router