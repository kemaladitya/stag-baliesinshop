"use strict"

const { get_cart, set_cart } = require("../../../handler");

async function main({ method, info }) {
  try {
    console.log("@subscription.main.info   |", info);

    const list_items = await get_cart(
      `${info.store.uuid}/${info.store.name}`,
      ""
    );
    const base_value = {
      type: info.mode,
      items: [],
      voucher: list_items ? list_items.voucher : null,
    };
    let action;

    switch (method) {
      case "set":
        action = info.item;
        break;
      case "add":
        action = await add_cart(list_items, info);
        break;
      case "reduce":
        action = await red_cart(list_items, info);
        break;
      case "remove":
        action = await rem_cart(list_items, info);
        break;

      default:
        action = await get_cart(`${info.store.uuid}/${info.store.name}`, "");
        break;
    }

    console.log("@base_value.action |", action);
    console.log("@base_value |", JSON.stringify(base_value, null, 2));

    base_value.items = action;

    const set_resp = await set_cart(
      `${info.store.uuid}/${info.store.name}`,
      "",
      base_value
    );

    return set_resp;
  } catch (error) {
    console.log("@cart.main |", { method, info });
    console.log("@cart.main |", error);

    return false;
  }
}

async function add_cart(list_items, { item }) {
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

async function red_cart(list_items, { item, store: { name, uuid, outlet } }) {
  try {
    let updated_detail = [];

    console.log("@list_items.red_cart |", list_items);

    const is_exist_item = list_items.items.filter(
      ({ id, detail_id, sku }) =>
        item.id === id && detail_id === item.detail_id && sku === item.sku
    );

    if (is_exist_item.length) {
      for (let i = 0; i < list_items.items.length; i++) {
        const element = list_items.items[i];

        console.log("@red_cart.element |", element);

        const match_item =
          item.id === element.id &&
          item.detail_id === element.detail_id &&
          item.sku === element.sku;

        if (match_item) element.qty -= item.qty;

        if (element.qty > 0) {
          updated_detail.push(element);
        }
      }

      return updated_detail;
    }

    return {
      status: false,
      message: "Failed reduce item to cart. Item not found!",
      response: list_items.items,
    };
  } catch (error) {
    console.log("@cart.reduce.error.item |", detail);
    console.log("@cart.reduce.error.info |", error);

    return false;
  }
}

async function rem_cart(list_items, { item, store: { name, uuid, outlet } }) {
  try {
    const filtered_items = list_items.items.filter(
      ({ id, detail_id, sku }) =>
        item.id !== id && detail_id !== item.detail_id && sku !== item.sku
    );

    return filtered_items;
  } catch (error) {
    console.log("@cart.remove.error.item |", detail);
    console.log("@cart.remove.error.info |", error);

    return false;
  }
}

module.exports = main;
