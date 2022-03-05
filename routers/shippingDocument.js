'use strict'

const { ShippingDocumentController } = require('../controllers')

const express = require('express')
const router = express.Router()
const shippingDocumentController = new ShippingDocumentController()

router
  .route('/')
  .get(shippingDocumentController.findAll)
  .post(shippingDocumentController.create)

router
  .route('/:id')
  .get(shippingDocumentController.findOne)
  .patch(shippingDocumentController.update)
  .delete(shippingDocumentController.delete)

module.exports = {
  shippingDocumentChildRouter: router
}