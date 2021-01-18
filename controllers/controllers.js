const Product = require('../models/Product')
const Artist = require('../models/Artist')


module.exports = {
    testAPI: (req, res) => {
        console.log('test log')
        res.json('ok')
    },
    allProducts: async (req, res) => {
        const products = await products.find({})
        res.json(products)
    }
}