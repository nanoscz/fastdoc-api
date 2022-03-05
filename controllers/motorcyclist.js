'use strict'

const Motorcyclist = require('../models').motorcyclists

class MotorcyclistController {
  findAll (req, res, next) {
    Motorcyclist.findAll()
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Motorcyclist.findOne({ 
      where: { id: req.params.id }
    })
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOneByUserId (req, res, next) {
    Motorcyclist.findOne({ where: { userId: req.params.id } })
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    Motorcyclist.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Motorcyclist.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Motorcyclist.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = MotorcyclistController
