"use strict"

const balesin = require("../sdk");

async function product_search(request, response) {
  try {
    const product = await balesin.api.shop.product_search(request.body);

    return response.json(
      product.data.hasOwnProperty("data") ? product.data.data : product.data
    );
  } catch (error) {
    return response.status(404).json({
      error,
      status: false,
    });
  }
}

module.exports = { product_search };
