'use strict';

const Joi = require('@hapi/joi');

module.exports.postRedisRecord = Joi.object().keys({
    message: Joi.string().required()
});

module.exports.getRedisRecordByKey = Joi.object().keys({
    id: Joi.string().required()
});

module.exports.putRedisRecordByKey = Joi.object().keys({
    id: Joi.string().required(),
    message: Joi.string().required()
});

module.exports.deleteRedisRecordByKey = Joi.object().keys({
    id: Joi.string().required()
});