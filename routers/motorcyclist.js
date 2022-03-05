'use strict'

const { MotorcyclistController } = require('../controllers')

const express = require('express')
const router = express.Router()
const motorcyclistController = new MotorcyclistController()

router
  .route('/')
  .get(motorcyclistController.findAll)
  .post(motorcyclistController.create)

router
  .route('/user/:id')
  .get(motorcyclistController.findOneByUserId)

  router
  .route('/:id')
  .get(motorcyclistController.findOne)
  .patch(motorcyclistController.update)
  .delete(motorcyclistController.delete)



module.exports = {
  motorcyclistChildRouter: router
}
