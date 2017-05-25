module.exports = {
    services: [
        require('./services/user.repository.provider'),
        require('./routers/router.provider')
    ]
};