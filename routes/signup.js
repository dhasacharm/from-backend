
const Signup = require('../schema/signup')
const passwordser = require('../helpers/password')

function signup(app) {
    app.post('/Signup', (req, res) => {
        const data = req.body;

        passwordser.hash(req.body.password, (err, hash) => {
            console.log(hash);
            data.password = hash

            const { email, password } = req.body;
            const doc = new Signup({ email, password:hash });
            doc.save()
                .then((data) => {
                    res.send(data)
                })
                .catch((err) => {
                    res.send(err.message)
                })


        })

    })

    app.get('/Signup', (req, res) => {
        Signup.find()
            .then((data) => {
                console.log(data)
                res.send(data)
            })
            .catch((err) => {
                console.log(err.message)
                res.send(err.message)
            })
    })

    app.put('/Signup', (req, res) => {
        const { email, password } = req.body;
        Signup.findOneAndUpdate({ email: email }, { password }, { new: true })
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.send(err.message)
            })
    })

    app.delete('/Signup', (req, res) => {
        const { email } = req.body;
        Signup.findOneAndDelete()
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err.message)
            })

    })

}

module.exports = signup