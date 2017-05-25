const Router    = require('express').Router;
const apiRouter = require('./routers');

module.exports = function* (container) {
    container.singleton('router', function*() {
        let router = new Router();
        apiRouter(router);
        return router;
    })
};