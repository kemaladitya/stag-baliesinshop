'use strict'

const balesin    = require('../sdk')
const { del_cart, get_cart, set_cart } = require("../sdk/handler")
const axios = require('axios')
const { _api, _key } = require('../../config.json')
const headers = { "x-api-key": _key }

async function manage(request, response) {
  try {
    if (request.body.method === "del") {
      await del_cart(`${body.uuid || body.chatkey}/${body.store_name}/cart`, "")

      return response.send(null)
    }

    const manager = await balesin.cart.store.manage(request.body);

    console.log("@manager |", manager);
    console.log("@request.body |", request.body);

    return response.json(manager);
  } catch (error) {
    console.log("@cart.error.body |", request.body);
    console.log("@cart.error.info |", error);

    return response.status(400).json({
      status: false,
      message: "Failed add item to cart failed, please try again.",
      response: String(error),
    });
  }
}

async function cache(request, response) {
  try {
    const manager = await balesin.cart.bot.manage(request.body);

    if (manager.set_resp) {
      const order_type = (() => {
        if (manager.set_resp.type === "single-order") {
          return manager.set_resp.type;
        } else if (manager.set_resp.type === "subscription-order") {
          return "rp-order";
        } else if (manager.set_resp.type === "package-order") {
          return "pkg-order";
        }
      })();
      const parsed_items = async () => {
        if (manager.set_resp.type === "single-order") {
          const result = await balesin.api.shop.parse_items(
            request.body.store_name,
            request.body.uuid,
            manager.set_resp.items
          );

          return [{ items: result.data }];
        } else if (manager.set_resp.type === "subscription-order") {
          const result = [];

          for (let i = 0; i < manager.set_resp.items.length; i++) {
            const element = manager.set_resp.items[i];
            const parsed_lists = await balesin.api.shop.parse_items(
              request.body.store_name,
              request.body.uuid,
              element.items
            );
            element.items = parsed_lists.data;

            result.push(element);
          }

          return result;
        } else if (manager.set_resp.type === "package-order") {
          console.log("manager.set_resp |", manager.set_resp);
          const result = [];

          for (let i = 0; i < manager.set_resp.items.length; i++) {
            const element = manager.set_resp.items[i];
            console.log("@element | ", element);
            const parsed_lists = await balesin.api.shop.parse_items(
              request.body.store_name,
              request.body.uuid,
              element.items
            );
            element.items = parsed_lists.data;

            result.push(element);
          }

          return result;
        }
      };
      const result = await parsed_items();

      return response.json({
        status: true,
        results: { type: order_type, items: result },
      });
    } else {
      return response.json({
        status: true,
        results: { type: "single-order", items: [] },
      });
    }
  } catch (error) {
    console.log("@cache.error |", error);

    return response.status(400).json({
      status: false,
      results: { type: "single-order", items: [] },
      message: String(error),
    });
  }
}

async function bot(request, response) {
  try {
    console.log("@request.body |", request.body)
    if (request.body.method === "reorder") {
      const reorder = await reorder_bot(request.body)

      return response.json(reorder);
    }

    const manager = await balesin.cart.bot.manage(request.body);

    if (manager.set_resp) {
      const order_type = (() => {
        if (manager.set_resp.type === "single-order") {
          return manager.set_resp.type;
        } else if (manager.set_resp.type === "subscription-order") {
          return "rp-order";
        } else if (manager.set_resp.type === "package-order") {
          return "pkg-order";
        }
      })();
      const parsed_items = async () => {
        if (manager.set_resp.type === "single-order") {
          const result = await balesin.api.shop.parse_items(
            request.body.store_name,
            request.body.chatkey,
            manager.set_resp.items
          );

          return result.data;
        } else if (manager.set_resp.type === "subscription-order") {
          const result = [];

          for (let i = 0; i < manager.set_resp.items.length; i++) {
            const element = manager.set_resp.items[i];
            const parsed_lists = await balesin.api.shop.parse_items(
              request.body.store_name,
              request.body.chatkey,
              element.items
            );
            element.items = parsed_lists.data;

            result.push(element);
          }

          return result;
        } else if (manager.set_resp.type === "package-order") {
          console.log("manager.set_resp |", manager.set_resp);
          const result = [];

          for (let i = 0; i < manager.set_resp.items.length; i++) {
            const element = manager.set_resp.items[i];
            console.log("@element | ", element);
            const parsed_lists = await balesin.api.shop.parse_items(
              request.body.store_name,
              request.body.chatkey,
              element.items
            );
            element.items = parsed_lists.data;

            result.push(element);
          }

          return result;
        }
      };
      const result = await parsed_items();

      return response.json({
        status: true,
        results: {
          type: order_type,
          items:
            order_type === "single-order" || order_type === "rp-order"
              ? result
              : [{ items: result }],
        },
      });
    } else {
      return response.json({
        status: true,
        results: { type: "single-order", items: [] },
      });
    }
  } catch (error) {
    console.log("@manage_cart_from_bot | ", error);

    return response.status(400).json({
      status: false,
      results: { type: "single-order", items: [] },
      message: String(error),
    });
  }
}

async function reorder_bot({ bot_id, chatkey, outlet, source }) {
  try {
    const { data: { info: { bot_name, store_id, store_name } } } = await axios({
      url    : _api + `/dev/storename/${bot_id}`,
      method : "post",
      headers,
    })
    const get_last_cart = await get_cart(`${chatkey}/${bot_name}`, "/last")
    const result = await balesin.api.shop
      .parse_items(
        bot_name,
        chatkey,
        get_last_cart.items
      )
    const check_items = await balesin.api.shop.check_items({
      outlet,
      store_id,
      items: [
        {
          date  : "-",
          items : result.data,
        },
      ],
    })

    if (!check_items.data.status) {
      return {
        status   : !check_items.data.status ? "failed" : "success",
        message  : check_items.data.message,
        response : null,
      }
    }

    get_last_cart.items = check_items.data.response[0].items

    await set_cart(`${chatkey}/${bot_name}`, '', get_last_cart)

    const short_link = await axios({
      url    : "https://sh.balesin.id/shortchatkey",
      method : "post",
      data: {
        bot_id,
        chatkey,
        base : `https://shop.balesin.id/site/${bot_name}/checkout?src=${source}&u=${chatkey}&c=${outlet}`,
      },
    })

    return {
      status   : "success",
      message  : check_items.data.message,
      response : short_link.data,
    }
  } catch (error) {
    console.log("@reorder.error |", error)

    return {
      status   : "failed",
      message  : String(error),
      response : "",
    }
  }
}

module.exports = { manage, cache, bot }