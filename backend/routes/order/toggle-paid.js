const Product = require('../backend/database/models/Product')
const Order = require('../backend/database/models/Order')
const authentication = require('../backend/middleware/authentication')

module.exports = (app, endpoint) => {
    /**
     * Toggle if paid
     */
    app.post(endpoint + '/orderId', authentication, async (req, res) => {
        const orderId = req.params.orderId
        if (!orderId) { return res.status(400).json({ success: false, message: 'your forgot to give the order id' }) }
        try {
            const order = await
            const order = await Order.findByIdAndUpdate(orderId).update()

            order.save()
            res.json(order)
        } catch (e) {
            console.log(e)
            res.send({ success: false, message: 'couldnt create order' })
        }
    })
}
