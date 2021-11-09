"use strict";

const axios = require("axios");

async function payment(request, response) {
  try {
    console.log("@callback_payment");
    console.log(request.body);
    console.log("@callback_payment_" + request.body.order_id);

    const recall = await axios({
      url: "http://10.140.0.14:3005/sariroti/callback/payment",
      method: "post",
      data: request.body
    });

    console.log(recall);

    return response.json(recall.data);
  } catch (error) {
    console.log("error")
    console.log(request.body);
    console.log(
      "@callback_payment_" + request.body.order_id,
      error,
      request.body
    );

    return response.send(error);
  };
}

module.exports = { payment };
