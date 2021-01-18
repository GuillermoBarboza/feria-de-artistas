const mongoose = require('./db')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    designer: String,
    developer: String
})

module.exports = mongoose.model('Product', productSchema)