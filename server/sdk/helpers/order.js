"use strict"

const get_order_type = (type) => {
  const is_single = type === "single-order";
  const is_package = type === "package-order";
  const is_subscription = type === "subscription-order";

  if (is_single) return type;
  if (is_package) return "pkg-order";
  if (is_subscription) return "rp-order";
};

function parse_order_items(cache) {
  const order_type = get_order_type(cache.type);

  console.log(cache);

  if (order_type == "single-order") {
    const date = new Date();

    date.setDate(date.getDate() + 1);
    date.setMonth(date.getMonth() + 1);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return {
      type: "single-order",
      items: [
        {
          delivery_date: `${year}-${month}-${day}`,
          delivery_time: "08:00 - 17:00",
          items: cache.items.map((item) => ({
            id: item.id,
            qty: item.qty,
            SKU: item.sku,
            variant: item.detail_id,
          })),
        },
      ],
    };
  } else if (order_type == "rp-order") {
    let list_items = JSON.stringify(cache.items)
      .replace(/"sku"/g, '"SKU"')
      .replace(/date/g, "delivery_date");

    return { type: order_type, items: JSON.parse(list_items) };
  } else if (order_type === "pkg-order") {
    const list_items = JSON.stringify(cache.items).replace(/"sku"/g, '"SKU"');

    return {
      type: `${JSON.parse(list_items)[0].type}-order`,
      items: JSON.parse(list_items),
    };
  }
}

module.exports = { parse_order_items };
