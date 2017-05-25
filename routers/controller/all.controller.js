module.exports.all = function *(req, res, next) {
    console.log('calling api all');
    let container = req.container;

    let userRepository = yield container.make('userRepository');

    try {
        let result = yield userRepository.getUsers();
        res.status(200).json({
            result
        });

    } catch (error) {
        next(error);
    }
};