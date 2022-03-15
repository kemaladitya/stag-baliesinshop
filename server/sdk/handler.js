"use strict"

const models = require("../models");

async function get_cart(key, type) {
  try {
    const get_redis = await models.redis.get(`${key}/cart${type}`);

    return !get_redis ? null : JSON.parse(get_redis);
  } catch (error) {
    return null;
  }
}

async function set_cart(key, type, item) {
  try {
    await models.redis.set(`${key}/cart${type}`, JSON.stringify(item));

    const list_items = await get_cart(`${key}`, type);

    return list_items;
  } catch (error) {
    console.log("@set_cart.error", error);

    return false;
  }
}

async function del_cart(key, type) {
  try {
    await models.redis.del(`${key}/cart${type}`);

    return true;
  } catch (error) {
    return null;
  }
}

async function check_redis_status(key, data) {
  console.log("@check_redis_status", data);

  if (data.hasOwnProperty("status")) {
    if (data.status === "unavailable") {
      return false;
    } else {
      return true;
    }
  } else {
    data.status = "unavailable";

    await set_cart(key, data);

    return true;
  }
}

module.exports = { get_cart, set_cart, del_cart, check_redis_status };
