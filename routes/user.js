'use strict';

const User = require('../schema/user')

function user (app) {
    app.post('/user', (req, res) => {
        const {name, age, email } = req.body;
        const use = new User({name, age, email });
        use.save()
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.send(err.message)
            })
    })

    app.get('/user', (req, res) => {
        User.find()
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err.message)
            res.send(err.message)
        })
    })

    app.put('/user', (req, res) => {
        const {name, age, email } = req.body;
        User.findOneAndUpdate({ name: name }, { age, email }, { new: true })
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.send(err.message)
            })
    })

    app.delete('/user', (req, res) => {
        const { author } = req.body;
        User.findOneAndDelete()
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err.message)
            })
    })

}

module.exports = user;