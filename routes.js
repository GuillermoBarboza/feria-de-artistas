const controllers = require('./controllers/controllers')

const routes = (app) => {
    app.get('/', controllers.testAPI)
} 

module.exports = routes; 