const controllers = require('./controllers/controllers')

const routes = (app) => {
    app.get('/', controllers.testAPI)
    
    app.get('/products', controllers.allProducts)
} 

module.exports = routes; 