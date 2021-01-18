const Product = require('../models/Product')
const Artist = require('../models/Artist')


module.exports = {
    testAPI: (req, res) => {
        console.log('test log')
        return res.json('oki')
    },
    allProducts: async (req, res) => {
        const products = await Product.find({})
        console.log(products)
        return res.json('product ok')
    }
}