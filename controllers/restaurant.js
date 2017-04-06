const Restaurant = require('../models/restaurant')
const methods = {}

methods.findAll = function(req, res) {
  Restaurant.find({}).populate('menu')
    .exec(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.json(data)
    }
  })
}

methods.findOne = function(req, res) {
  Restaurant.findById(req.params.id, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      if (data) {
        res.json(data)
      } else {
        res.send('err: no data')
      }
    }
  })
}

methods.insertOne = function(req, res) {
  Restaurant.create(req.body, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.json(data)
    }
  })
}

methods.updateOne = function(req, res) {
  Restaurant.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .exec((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.json(data)
      }
    })
}

methods.deleteOne = function(req, res) {
  Restaurant.findByIdAndRemove(req.params.id)
      .exec((err, data) => {
        if (err) {
          res.send(err)
        } else {
          res.json(data)
        }
      })
}

methods.upsertOne = function(req, res) {
  Restaurant.findByIdAndUpdate(req.params.id, { $push: { menu: req.body }}, {new : true, upsert: true})
    .exec((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.json(data)
      }
    })
}


module.exports = methods