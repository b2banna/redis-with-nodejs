'use strict';

const HttpStatus = require('http-status-codes');

const constants = require('../../constants');

module.exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.message === constants.errorMessage.RECORD_NOT_FOUND ? HttpStatus.NOT_FOUND : HttpStatus.INTERNAL_SERVER_ERROR
    const status = err.message
    return res.status(statusCode).send({ statusCode, status, body: {} });
}