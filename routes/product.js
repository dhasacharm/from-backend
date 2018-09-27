'use strict';
const Product = require('../schema/product.js')

function product (app) {
    app.post('/product', (req, res) => {
        const {items, price } = req.body;
        const use = new Product({items, price });
        use.save()
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.send(err.message)
            })
    })

    app.get('/product', (req, res) => {
        Product.find()
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err.message)
            res.send(err.message)
        })
    })

    app.put('/product', (req, res) => {
        const {items, price } = req.body;
        Product.findOneAndUpdate({ items: items }, { price }, { new: true })
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.send(err.message)
            })
    })

    app.delete('/product', (req, res) => {
        const { author } = req.body;
        Product.findOneAndDelete()
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err.message)
            })

    })

}

module.exports = product