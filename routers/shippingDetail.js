'use strict'

const { ShippingDetailController } = require('../controllers')

const express = require('express')
const router = express.Router()
const shippingDetailController = new ShippingDetailController()

router
  .route('/')
  .get(shippingDetailController.findAll)
  .post(shippingDetailController.create)

router
  .route('/:id')
  .get(shippingDetailController.findOne)
  .patch(shippingDetailController.update)
  .delete(shippingDetailController.delete)

module.exports = {
  shippingDetailChildRouter: router
}