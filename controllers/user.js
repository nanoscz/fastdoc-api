'use strict'

const bcrypt = require('bcryptjs')
const saltRounds = 10
const User = require('../models').users
const Role = require('../models').roles

class UserController {
  findAll (req, res, next) {
    User.findAll({
      include: [
        { model: Role }
      ]
    })
      .then(data => {
        for (const item of data) {
          delete item.dataValues.password
        }
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    User.findOne({
      where: { id: req.params.id },
      include: [
        { model: Role }
      ]
    })
      .then(data => {
        delete data.dataValues.password
        res.json(data)
      })
      .catch(err => next(err))
  }

  login (req, res, next) {
    const error = {
      name: 'Authentication Error.',
      message: 'El usuario/contraseña es incorrecto!'
    }
    const body = req.body
    User.findOne({ where: { login: body.login } })
      .then(data => {
        if (!data) {
          return res.status(400).json(error)
        }
        bcrypt.compare(body.password, data.password)
          .then((result) => {
            if (result) {
              delete data.dataValues.password
              res.json(data)
            } else {
              return res.status(400).json(error)
            }
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    let body = null
    let salt = null
    let password = null
    body = req.body
    salt = bcrypt.genSaltSync(saltRounds)
    password = bcrypt.hashSync(body.password, salt)

    body.password = password
    body.enabled = true
    User.create(body)
      .then((data) => {
        delete data.dataValues.password
        res.status(201).json(data)
      })
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    User.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    User.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = UserController
