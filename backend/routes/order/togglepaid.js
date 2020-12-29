const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
    /**
     * Toggle if paid
     */
    app.patch(endpoint + '/:orderId', authentication, async (req, res) => {
        const orderId = req.params.orderId
        if (!orderId) { return res.status(400).json({ success: false, message: 'your forgot to give the order id' }) }
        try {
            const order = await global.models('order').findById(orderId)
            console.log(await order)
            if(await order.userId !== req.user.id) { return res.json(401).json({ success: false, message: 'thats not your order man'})}
            order.update({
                paid: !order.paid
            })

            order.save()
            res.json(order)
        } catch (e) {
            console.log(e)
            res.send({ success: false, message: 'couldnt update order' })
        }
    })
}
