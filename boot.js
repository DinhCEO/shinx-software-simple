const co        = require('co');
const Container = require('sphinx-container');
let container   = new Container();
const config    = require('./config');

module.exports = function *() {
    container.singleton('config', function *() {
        return config;
    });

    for (let index = 0; index < config.services.length; index++) {
        yield config.services[index](container);
    }
    return container;
};