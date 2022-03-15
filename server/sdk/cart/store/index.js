"use strict"

const single_mode = require("./type/single-order");
const package_mode = require("./type/package-order");
const subscription_mode = require("./type/subscription-order");

const { get_cart } = require("../../handler");

async function manage(params) {
  try {
    let manager;

    console.log("@from.store |", params);

    if (params.method === "get") {
      manager = await get_cart(
        `${params.info.store.uuid}/${params.info.store.name}`,
        ""
      );
    } else {
      switch (params.info.mode) {
        case "single-order":
          manager = await single_mode(params);
          break;
        case "package-order":
          manager = await package_mode(params);
          break;
        case "subscription-order":
          manager = await subscription_mode(params);
          break;
      }
    }

    return manager;
  } catch (error) {
    console.log("@cart.store.info  |", params);
    console.log("@cart.store.error |", error);

    return false;
  }
}

module.exports = { manage };
