const middleware = {}

middleware['cart'] = require('../middleware/cart.js')
middleware['cart'] = middleware['cart'].default || middleware['cart']

export default middleware
