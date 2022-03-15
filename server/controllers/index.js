"use strict"

const cart = require("./cart");
const order = require("./order");
const product = require("./product");
const voucher = require("./voucher");
const mailer = require("./mailer");
const referral = require("./referral");
const callback = require("./callback");
const axios = require("axios");
const { _api, _key } = require("../../config.json");
const { del_cart } = require("../sdk/handler");

async function is_available_express(request, response) {
  try {
    const mid = await axios({
      url: "http://10.140.0.14:3005/sariroti/check/express",
      method: "POST",
      data: request.body,
    });

    return response.json(mid.data);
  } catch (error) {
    console.log(error);

    return response.send("failed");
  }
}

async function clean_cart(request, response) {
  try {
    await del_cart(`${request.body.uuid}/sarirotiwa`, "");

    return response.send("OK");
  } catch (error) {
    console.log(error);

    return response.send("failed");
  }
}

async function register(request, response) {
  try {
    await axios({
      url: "http://10.140.0.14:3005/sariroti/register",
      method: "POST",
      data: {
        type: "register",
        chatkey: request.body.uuid,
        bot_id: 4241,
      },
    });

    return response.send("OK");
  } catch (error) {
    console.log(error);

    return response.send("failed");
  }
}

async function general(request, response) {
  try {
    const { data } = await axios({
      url: _api + "/dev" + request.url,
      method: request.method.toLowerCase(),
      headers: { "x-api-key": _key, ...request.headers },
      data: request.body,
    });

    // // console.log("-- end", data);
    // // console.log("move request to http://10.140.0.14:3088");

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

module.exports = {
  register,
  general,
  cart,
  order,
  product,
  voucher,
  mailer,
  referral,
  callback,
  is_available_express,
  clean_cart,
};
