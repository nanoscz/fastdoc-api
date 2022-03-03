'use strict'

const { MotorcycleController } = require('../controllers')

const express = require('express')
const router = express.Router()
const motorcycleController = new MotorcycleController()

router
  .route('/')
  .get(motorcycleController.findAll)
  .post(motorcycleController.create)

router
  .route('/:id')
  .get(motorcycleController.findOne)
  .patch(motorcycleController.update)
  .delete(motorcycleController.delete)

module.exports = {
  motorcycleChildRouter: router
}
