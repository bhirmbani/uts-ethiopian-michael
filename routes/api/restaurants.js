const router = require('express').Router()
const restaurantCtl = require('../../controllers/restaurant')

router.get('/', restaurantCtl.findAll)
  .get('/:id', restaurantCtl.findOne)
  .post('/', restaurantCtl.insertOne)
  .put('/:id', restaurantCtl.updateOne)
  .patch('/:id/menu', restaurantCtl.upsertOne)
  .delete('/:id', restaurantCtl.deleteOne)

module.exports = router