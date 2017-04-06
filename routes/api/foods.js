const router = require('express').Router()
const foodCtl = require('../../controllers/food')

router.get('/', foodCtl.findAll)
  .get('/:id', foodCtl.findOne)
  .post('/', foodCtl.insertOne)
  .put('/:id', foodCtl.updateOne)
  .delete('/:id', foodCtl.deleteOne)

module.exports = router