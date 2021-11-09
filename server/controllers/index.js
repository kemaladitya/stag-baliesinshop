'use strict'

const cart    = require('./cart')
const order   = require('./order')
const product = require('./product')
const voucher = require('./voucher')
const mailer  = require('./mailer')
const referral = require("./referral");
const callback = require("./callback");
const axios   = require('axios')
const { _api, _key } = require('../../config.json')

async function general(request, response) {
  try {
    const { data } = await axios({
      url     : _api + "/dev" + request.url,
      method  : request.method.toLowerCase(),
      headers : { "x-api-key": _key, ...request.headers },
      data    : request.body,
    })

    return response
      .json(
        data.hasOwnProperty("data")
          ? data.data
          : data
      )
  } catch (error) {
    return response.json({
      message: String(error),
      status: false,
      response: "",
    })
  }
}

module.exports = {
  general,
  cart,
  order,
  product,
  voucher,
  mailer,
  referral,
  callback,
};
