import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    /* Initial State */
    state: {
      uuid: null,
      alert: {
        status: false,
        text: ''
      },
      screen: 'mobile',
      site: null,
      fullpath: '',
      store: null,
      customer: null,
      user_notes: '',
      dates: [],
      delivery_time_normal: "day",
      cart: [],
      products: [],
      month: [
        '',
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ],
      rp_order: false,
      min_rp: '',
      max_rp: ''
    },

    mutations: {
      setState(state, { key, data }) {
        if (key == 'set_delivery_time') {
          state.dates[data.index]['delivery_time'] = data.mode
        } else {
          state[key] = data
        }
      }
    },

    actions: {
      setState({ commit }, { payload: { key, data } }) {
        commit('setState', { key, data })
      },

      async request({ commit }, { url, method, data }) {
        try {
          const auth =
            url.includes('auth') ||
            url === '/login' ||
            url === '/register' ||
            url === '/forgot' ||
            url === '/change'

          if (auth) {
            const request = await this.$axios({
              url,
              method,
              data
            })

            if (request.status >= 400) {
              commit('setState', { key: 'snackbarerror', data: true })

              setTimeout(() => {
                commit('setState', { key: 'snackbarerror', data: false })
              }, 5000)
            }

            return request
          } else {
            const request = await this.$axios({
              url,
              method,
              headers: {
                // token: localStorage.getItem('Authentication'),
              },
              data
            })

            // console.log(request, ' request')

            if (request.status >= 400) {
              commit('setState', { key: 'snackbarerror', data: true })

              setTimeout(() => {
                commit('setState', { key: 'snackbarerror', data: false })
              }, 5000)
            }

            return request
          }
        } catch (error) {
          commit('setState', { key: 'snackbarerror', data: true })

          setTimeout(() => {
            commit('setState', { key: 'snackbarerror', data: false })
          }, 5000)

          return error
        }
      },

      localStorage({ commit }, { method, key, value }) {
        if (method === 'set') {
          if (process.browser) {
            localStorage.setItem(key, value)
          }
        } else if (method === 'get') {
          if (process.browser) {
            const result = localStorage.getItem(key)

            return result
          }
        }
      }
    }
  })
}
