var homeRoutes = require('./home/routes.js')

module.exports = function routes(app){
    app.use('/home', homeRoutes);
}