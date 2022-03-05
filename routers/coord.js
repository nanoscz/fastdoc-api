'use strict'

const { CoordController } = require('../controllers')

const express = require('express')
const router = express.Router()
const coordController = new CoordController()

router
  .route('/')
  .get(coordController.findAll)
  .post(coordController.create)

router
  .route('/:id')
  .get(coordController.findOne)
  .patch(coordController.update)
  .delete(coordController.delete)

module.exports = {
  coordChildRouter: router
}