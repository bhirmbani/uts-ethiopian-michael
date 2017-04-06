const Food = require('../models/food')
const methods = {}

methods.findAll = function(req, res) {
  Food.find({}, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.json(data)
    }
  })
}

methods.findOne = function(req, res) {
  Food.findById(req.params.id, function(err, data) {
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
  Food.create(req.body, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.json(data)
    }
  })
}

methods.updateOne = function(req, res) {
  Food.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .exec((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.json(data)
      }
    })
}

methods.deleteOne = function(req, res) {
  Food.findByIdAndRemove(req.params.id)
      .exec((err, data) => {
        if (err) {
          res.send(err)
        } else {
          res.json(data)
        }
      })
}

module.exports = methods