"use strict"

import Vuex from "vuex";

const month = [
  "",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const date = new Date();

date.setHours(date.getHours() + 7);
date.setDate(date.getDate() + 2);

export default () => {
  return new Vuex.Store({
    /* Initial State */
    state: {
      is_available_express : 0,
      screen               : "mobile",
      order_type           : "single-order",
      delivery_time_normal : "08:00 - 17:00",
      fullpath             : "",
      user_notes           : "",
      min_rp               : "",
      max_rp               : "",
      loading              : false,
      site                 : null,
      store                : null,
      customer             : null,
      customized_values    : null,
      merchant             : null,
      device_info          : null,
      rp_order             : false,
      mini_cart            : false,
      general_loading      : false,
      package_cart         : [],
      subscription_cart    : [],
      cart                 : [],
      products             : [],
      list_merchant        : [],
      recomendation_items  : [],
      frequent_items       : [],
      mt_address           : [],
      alert                : { status: false, text: "" },
      single_delivery_date : date.toISOString(),
      month                : month,
    },

    mutations: {
      setState(state, { key, data }) {
        if (key == "set_delivery_time") {
          state.dates[data.index]["delivery_time"] = data.mode;
        } else {
          state[key] = data;
        }
      },
    },

    actions: {
      setState({ commit }, { payload: { key, data } }) {
        try {
          commit("setState", { key, data });
        } catch (error) {
          console.log(error);
        }
      },

      async request({ commit }, { url, method, data }) {
        let message;

        try {
          const auth =
            url.includes("auth") ||
            url === "/login" ||
            url === "/register" ||
            url === "/forgot" ||
            url === "/change";

          if (auth) {
            const request = await this.$axios({ url, method, data });

            if (request.status >= 400) {
              commit("setState", { key: "snackbarerror", data: true });

              setTimeout(() => {
                commit("setState", { key: "snackbarerror", data: false });
              }, 5000);
            }

            return request;
          } else {
            const request = await this.$axios({
              url,
              method,
              headers: {
                // token: localStorage.getItem('Authentication'),
              },
              data,
            });

            console.log(request, " request");

            if (
              request.status >= 400 ||
              (request.data && !request.data.status)
            ) {
              commit("setState", { key: "snackbarerror", data: true });

              setTimeout(() => {
                commit("setState", { key: "snackbarerror", data: false });
              }, 5000);
            }

            return request;
          }
        } catch (error) {
          console.log(error);
          commit("setState", { key: "snackbarerror", data: true });

          setTimeout(() => {
            commit("setState", { key: "snackbarerror", data: false });
          }, 5000);

          this.$axios({
            url: "/mailer",
            method: "post",
            data: {
              message:
                url +
                " <br /><br /> " +
                String(error) +
                " <br /><br /> " +
                JSON.stringify(data),
            },
          });

          return error;
        }
      },

      async insert_device({ commit }, data) {
        try {
          commit("setState", { key: "device_info", data })

          if (data.device) {
            await this.$axios({
              url: "/api/ex-info",
              method: "POST",
              data,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },

      localStorage({ commit }, { method, key, value }) {
        if (method === "set") {
          if (process.browser) {
            localStorage.setItem(key, value);
          }
        } else if (method === "get") {
          if (process.browser) {
            const result = localStorage.getItem(key);

            return result;
          }
        }
      },
    },
  });
};
