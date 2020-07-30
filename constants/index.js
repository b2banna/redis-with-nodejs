'use strict';

const HttpStatus = require('http-status-codes');

module.exports = {
    defaultServerResponse: {
        statusCode: HttpStatus.BAD_REQUEST,
        status: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
        body: {}
    },
    errorMessage: {
        RECORD_NOT_FOUND: 'Record not found'
    }
};