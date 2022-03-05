'use strict'

const shippingDetail = require('../models').shippingDetails

class ShippingDetailController {
  findAll (req, res, next) {
    shippingDetail.findAll()
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    shippingDetail.findOne({ where: { id: req.params.id } })
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    console.log("create shipping detail", res.body)
    shippingDetail.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    shippingDetail.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    shippingDetail.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = ShippingDetailController
