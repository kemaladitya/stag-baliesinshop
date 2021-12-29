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

let service = 0;

async function general(request, response) {
  try {
    service = !service;

    const { data } = await axios({
      url     : (service ? _api : "http://10.140.0.14:3098") + "/dev" + request.url,
      method  : request.method.toLowerCase(),
      headers : { "x-api-key": _key, ...request.headers },
      timeout : 5000,
      data    : request.body,
    });

    // // console.log("-- end", data);
    // // console.log("move request to http://10.140.0.14:3088");

    return response
      .json(
        data.hasOwnProperty("data")
          ? data.data
          : data
      )
  } catch (error) {
    console.log(error);

    if (!request.url.includes("order") || !request.url.includes("register")) {
      try {
        console.log("--move");
        const { data } = await axios({
          url: "http://10.140.0.14:3098" + "/dev" + request.url,
          method: request.method.toLowerCase(),
          headers: { "x-api-key": _key, ...request.headers },
          timeout: 1000,
          data: request.body,
        });

        // console.log("-- end", data);
        // console.log("move request to http://10.140.0.14:3088");

        return response.json(data.hasOwnProperty("data") ? data.data : data);
      } catch (error) {
        console.log(error);
        return response.json({
          message: String(error),
          status: false,
          response: "",
        });
      }
    }

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
