"use strict"

const api = require("../../../api/shop");
const { get_cart, set_cart } = require("../../../handler");

// ? need => { id: 1641, detail_id: 1635, sku: "FG101037", qty: 1 }
async function main({ bot_id, chatkey, method, product_detail_id, qty }) {
  try {
    const information = await api.get_product_info(bot_id, product_detail_id);
    const list_items = await get_cart(
      `${chatkey}/${information.store.bot_name}`,
      ""
    );
    const base_value = {
      type: "single-order",
      items: [],
      voucher: list_items ? list_items.voucher : null,
    };
    const item = { ...information.product, qty };

    let action;

    switch (method) {
      case "add":
        action = await add_cart(list_items, item);
        break;
      case "reduce":
        action = await red_cart(list_items, item);
        break;
      case "remove":
        action = await rem_cart(list_items, item);
        break;

      default:
        action = await get_cart(`${chatkey}/${information.store.bot_name}`, "");
        break;
    }

    base_value.items = action;

    if (!action.length) base_value.voucher = null;

    const set_resp = await set_cart(
      `${chatkey}/${information.store.bot_name}`,
      "",
      base_value
    );

    return { bot_name: information.store.bot_name, set_resp };
  } catch (error) {
    console.log("@cart.main |", `${chatkey}/${information.store.bot_name}`);
    console.log("@cart.main |", error);

    return false;
  }
}

async function add_cart(list_items, item) {
  try {
    let updated_detail = [];

    if (
      !list_items ||
      (list_items.hasOwnProperty("items") && !list_items.items)
    ) {
      return [item];
    }

    const is_exist_item = list_items.items.filter(
      ({ id, detail_id, sku }) =>
        item.id === id && detail_id === item.detail_id && sku === item.sku
    );

    if (is_exist_item.length) {
      for (let i = 0; i < list_items.items.length; i++) {
        const element = list_items.items[i];
        const match_item =
          item.id === element.id &&
          item.detail_id === element.detail_id &&
          item.sku === element.sku;

        if (match_item) element.qty += item.qty;

        updated_detail.push(element);
      }
    } else {
      updated_detail = [item, ...list_items.items];
    }

    return updated_detail;
  } catch (error) {
    console.log("@cart.add.error.item |", item);
    console.log("@cart.add.error.info |", error);

    return false;
  }
}

async function red_cart(list_items, item) {
  try {
    let updated_detail = [];
    const is_exist_item = list_items.items.filter(
      ({ id, detail_id, sku }) =>
        item.id === id && detail_id === item.detail_id && sku === item.sku
    );

    if (is_exist_item.length) {
      for (let i = 0; i < list_items.items.length; i++) {
        const element = list_items.items[i];
        const match_item =
          item.id === element.id &&
          item.detail_id === element.detail_id &&
          item.sku === element.sku;

        if (match_item) element.qty -= item.qty;

        if (element.qty > 0) {
          updated_detail.push(element);
        }
      }
    } else {
      updated_detail = list_items.items;
    }

    return updated_detail;
  } catch (error) {
    console.log("@cart.reduce.error.item |", item);
    console.log("@cart.reduce.error.info |", error);

    return false;
  }
}

async function rem_cart(list_items, item) {
  try {
    console.log("@rem_cart.list_items |", list_items);

    const filtered_items = list_items.items.filter(
      ({ id, detail_id, sku }) =>
        item.id !== id && detail_id !== item.detail_id && sku !== item.sku
    );

    console.log("@rem_cart.filtered_items |", filtered_items);

    return filtered_items;
  } catch (error) {
    console.log("@cart.remove.error.item |", item);
    console.log("@cart.remove.error.info |", error);

    return false;
  }
}

module.exports = main;
