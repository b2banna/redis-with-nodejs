'use strict';

const HttpStatus = require('http-status-codes');

const constants = require('../../constants');

const validateObjectSchema = (data, schema) => {
    const result = schema.validate(data, { convert: false });
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
            };
        });
        return errorDetails;
    }
    return null;
};

module.exports.validateRequest = (schema) => {
    return (req, res, next) => {
        const response = { ...constants.defaultServerResponse };
        const error = validateObjectSchema({ ...req?.files, ...req?.body, ...req?.params, ...req?.query }, schema);
        if (error) {
            response.statusCode = HttpStatus.BAD_REQUEST;
            response.status = HttpStatus.getStatusText(response.statusCode);
            response.body = error;
            return res.status(response.statusCode).send(response);
        }
        return next();
    }
};