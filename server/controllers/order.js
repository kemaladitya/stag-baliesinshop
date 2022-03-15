"use strict"

const axios = require("axios");
const balesin = require("../sdk");
const {
  get_cart,
  set_cart,
  del_cart,
  check_redis_status,
} = require("../sdk/handler");

async function create(request, response) {
  try {
    let get_redis = await get_cart(
      `${request.body.uuid}/${request.body.bot_name}`,
      ""
    );
    const check_cart = await check_redis_status(
      `${request.body.uuid}/${request.body.bot_name}`,
      get_redis
    );

    // if (!check_cart) {
    //   return response
    //     .status(200)
    //     .json({ error: 'order failed! cart is already used.', status: false })
    // }

    get_redis.status = "unavailable";

    await set_cart(
      `${request.body.uuid}/${request.body.bot_name}`,
      "",
      get_redis
    );

    request.body.order.items = balesin.help.parse_order_items(get_redis);
    request.body.order.voucher_code = get_redis.voucher || "";

    console.log(JSON.stringify(request.body, 0, 2));

    const post_order = await balesin.api.shop.order(request.body);

    if (post_order.status !== 200) {
      return response
        .status(404)
        .json({ error: "create order failed", status: false });
    }

    await set_cart(
      `${request.body.uuid}/${request.body.bot_name}`,
      "/last",
      get_redis
    );
    await del_cart(`${request.body.uuid}/${request.body.bot_name}/explink`, "");
    await del_cart(`${request.body.uuid}/${request.body.bot_name}`, "");

    return response.json(
      post_order.data.hasOwnProperty("data")
        ? post_order.data.data
        : post_order.data || post_order
    );
  } catch (error) {
    console.log(error);

    return response.status(404).json({ error, status: false });
  }
}

/**
 * * {
 * *  "bot_id": 4241,
 * *  "chatkey": "6282122104014",
 * *  "outlet": "region1"
 * * }
 */
async function reorder(request, response) {
  try {
    const { bot_id, chatkey, outlet, source } = request.body;
    const {
      data: {
        info: { bot_name, store_id, store_name },
      },
    } = await axios({
      url: _api + `/dev/storename/${bot_id}`,
      method: "post",
      headers,
    });
    const get_last_cart = await get_cart(`${chatkey}/${bot_name}`, "/last");
    const result = await balesin.api.shop.parse_items(
      bot_name,
      chatkey,
      get_last_cart.items
    );
    const check_items = await balesin.api.shop.check_items({
      outlet,
      store_id,
      items: [
        {
          date: "-",
          items: result.data,
        },
      ],
    });

    if (!check_items.data.status) {
      return response.json({
        status: !check_items.data.status ? "failed" : "success",
        message: check_items.data.message,
        response: null,
      });
    }

    get_last_cart.items = check_items.data.response[0].items;

    await set_cart(`${chatkey}/${bot_name}`, "", get_last_cart);

    const short_link = await axios({
      url: "https://sh.balesin.id/shortchatkey",
      method: "post",
      data: {
        bot_id,
        chatkey,
        base: `https://shop.balesin.id/site/${bot_name}/checkout?src=${source}&u=${chatkey}&c=${outlet}`,
      },
    });

    return response.json({
      status: "success",
      message: check_items.data.message,
      response: short_link.data,
    });
  } catch (error) {
    console.error("@reorder.error |", error);

    return response.json({
      message: String(error),
      status: "failed",
      response: "",
    });
  }
}

async function reorder_(bot_id, chatkey, outlet, source) {
  try {
    const {
      info: { bot_name, store_id },
    } = await axios({
      url: SHOP_API + `/dev/storename/${bot_id}`,
      method: "post",
      headers: { "x-api-key": API_KEY },
    });
    const get_last_cart = await get_cart(`${chatkey}/${bot_name}`, "/last");
    const result = await balesin.api.shop.parse_items(
      bot_name,
      chatkey,
      get_last_cart.items
    );
    const check_items = await balesin.api.shop.check_items({
      outlet,
      store_id,
      items: [
        {
          date: "-",
          items: result.data,
        },
      ],
    });

    if (!check_items.data.status) {
      return {
        status: !check_items.data.status ? "failed" : "success",
        message: check_items.data.message,
        response: null,
      };
    }

    await set_cart(`${chatkey}/${bot_name}`, "", {
      type: "single-order",
      items: get_last_cart.items,
      voucher: null,
    });

    const short_link = await axios({
      url: "https://sh.balesin.id/shortchatkey",
      method: "post",
      data: {
        bot_id,
        chatkey,
        base: `https://shop.balesin.id/site/${bot_name}/checkout?src=${source}&u=${chatkey}&c=${outlet}`,
      },
    });

    return {
      status: "success",
      message: check_items.data.message,
      response: short_link.data,
    };
  } catch (error) {
    console.error("@reorder.error |", error);

    return {
      status: "failed",
      message: String(error),
      response: "",
    };
  }
}

module.exports = { create, reorder, reorder_ };
