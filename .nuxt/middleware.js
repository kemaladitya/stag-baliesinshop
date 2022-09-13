const middleware = {}

middleware['cart'] = require('../middleware/cart.js')
middleware['cart'] = middleware['cart'].default || middleware['cart']

middleware['helper'] = require('../middleware/helper.js')
middleware['helper'] = middleware['helper'].default || middleware['helper']

export default middleware
