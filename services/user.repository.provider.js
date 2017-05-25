const UserRepository = require('./UserRepository');


module.exports = function* (container) {
    container.singleton('userRepository', function*() {
        return new UserRepository();
    });
};