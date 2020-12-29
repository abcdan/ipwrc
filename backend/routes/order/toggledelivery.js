const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
    /**
     * Toggle if delivered
     */
    app.patch(endpoint + '/:orderId', authentication, async (req, res) => {
        const orderId = req.params.orderId
        if (!req.user.admin) { return res.status(401).json({ success: false, message: 'you\'re not an admin'} )}
        if (!orderId) { return res.status(400).json({ success: false, message: 'your forgot to give the order id' }) }
        try {
            const order = await global.models('order').findById(orderId)
            // if(await order.userId !== req.user.id) { return res.json(401).json({ success: false, message: 'thats not your order man'})}
            await order.updateOne({
                delivered: !order.delivered
            })

            await order.save()
            res.json(await order)
        } catch (e) {
            console.log(e)
            res.send({ success: false, message: 'couldnt update order' })
        }
    })
}
