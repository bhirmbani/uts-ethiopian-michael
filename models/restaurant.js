const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name:        String,
  owner:       String,
  address:     String,
  open_status: Number,
  menu:        [{ type: Schema.Types.ObjectId, ref: 'Food' }]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
