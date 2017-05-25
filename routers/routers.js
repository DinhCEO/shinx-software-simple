const allController = require('./controller/all.controller');
const W             = require('co-express');

module.exports = function (router) {
    router
        .get('/all', W(allController.all))
};