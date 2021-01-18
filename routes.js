const controllers = require('./controllers/controllers')

const routes = (app) => {
    app.get('/api/test', controllers.testAPI)
} 

module.exports = routes; 