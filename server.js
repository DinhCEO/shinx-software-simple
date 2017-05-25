const app  = require('express')();
const co   = require('co');
const boot = require('./boot');


co(function *() {
    console.log('run server');
    let container = yield boot();

    app.use(function (req, res, next) {
        req.container = container;
        next();
    });
    let router = yield container.make('router');
    app.use(router);

    app.listen(3000, function () {
        console.log('server listening port 3000');
    });

}).catch(console.error);
