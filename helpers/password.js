var bcrypt = require('bcryptjs');


function  hash (pass,cb) {
    bcrypt.hash( pass, 7 , function (err,hash) {
        cb(err,hash)
    })
}

module.exports = {hash}