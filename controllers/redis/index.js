'use strict';

const HttpStatus = require('http-status-codes');

const constants = require('../../constants');
const redisService = require('../../services/redis');

module.exports.postRedisRecord = async (req, res, next) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const responseRedisService = await redisService.postRedisRecord(req.body);
        response.statusCode = HttpStatus.CREATED;
        response.status = HttpStatus.getStatusText(response.statusCode);
        response.body = responseRedisService;
        return res.status(response.statusCode).send(response);
    } catch (error) {
        next(error);
    }
}

module.exports.getAllRedisRecords = async (req, res, next) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const responseRedisService = await redisService.getAllRedisRecords();
        response.statusCode = HttpStatus.OK;
        response.status = HttpStatus.getStatusText(response.statusCode);
        response.body = responseRedisService;
        return res.status(response.statusCode).send(response);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteAllRedisRecords = async (req, res, next) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const responseRedisService = await redisService.deleteAllRedisRecords();
        response.statusCode = HttpStatus.OK;
        response.status = HttpStatus.getStatusText(response.statusCode);
        response.body = responseRedisService;
        return res.status(response.statusCode).send(response);
    } catch (error) {
        next(error);
    }
}

module.exports.getRedisRecordByKey = async (req, res, next) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const responseRedisService = await redisService.getRedisRecordByKey(req.params);
        response.statusCode = HttpStatus.OK;
        response.status = HttpStatus.getStatusText(response.statusCode);
        response.body = responseRedisService;
        return res.status(response.statusCode).send(response);
    } catch (error) {
        next(error);
    }
}

module.exports.putRedisRecordByKey = async (req, res, next) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const responseRedisService = await redisService.putRedisRecordByKey({ ...req.params, ...req.body });
        response.statusCode = HttpStatus.OK;
        response.status = HttpStatus.getStatusText(response.statusCode);
        response.body = responseRedisService;
        return res.status(response.statusCode).send(response);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteRedisRecordByKey = async (req, res, next) => {
    const response = { ...constants.defaultServerResponse };
    try {
        const responseRedisService = await redisService.deleteRedisRecordByKey(req.params);
        response.statusCode = HttpStatus.OK;
        response.status = HttpStatus.getStatusText(response.statusCode);
        response.body = responseRedisService;
        return res.status(response.statusCode).send(response);
    } catch (error) {
        next(error);
    }
}