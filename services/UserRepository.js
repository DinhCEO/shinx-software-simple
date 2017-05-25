const Promise = require('bluebird');

class UserRepository {
    constructor() {

    }

    *getUsers() {
        return yield Promise.resolve({name: 'dinhceo'});
    }

    *getUser(id) {
        return yield Promise.resolve({name: 'dinhceo'});
    }
}
module.exports = UserRepository;