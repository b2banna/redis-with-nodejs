'use strict';

module.exports.init = (app) => {
    app.use('/api/redis', require('./redis'));

    app.get("/", (req, res) => {
        return res.status(200).send({ message: 'Hello  Redis!' });
    });

    app.get('*', (req, res, next) => {
        const error = new Error();
        error.message = 'APIs route not found!'
        error.status = 'fail';
        error.statusCode = 404;
        next(error);
    });
}