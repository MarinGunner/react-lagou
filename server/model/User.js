const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    phone: String,
    image: {
        type: String,
        default: '/static/images/logo.jpg'
    },
    name: {
        type: String,
        default: '混世魔王'
    }
})

const User = mongoose.model('user', schema);

module.exports = User;