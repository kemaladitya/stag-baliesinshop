'use strict'

const { redis } = require('../../config.json')
const asyncRedis = require('async-redis')
const client = asyncRedis.createClient(redis)

client.on('error', err => {
  console.log('Error ' + err)
})

module.exports = { redis: client }
