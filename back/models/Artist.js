const mongoose = require('./db')
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: String,
    lastname: String,
    contactInfo: Array,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    username: String,
    password: String,
    description: String,
    avatar: String,
    token: String
})

module.exports = mongoose.model('Artist', artistSchema)