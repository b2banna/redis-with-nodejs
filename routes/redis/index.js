'use strict';

const express = require('express');
const router = express.Router();

const joiSchemaValidation = require('../../middlewares/joiSchemaValidation');
const redisRequestSchema = require('../../requestSchema/redis');
const redisController = require('../../controllers/redis');

router.route('/')
    .post(joiSchemaValidation.validateRequest(redisRequestSchema.postRedisRecord), redisController.postRedisRecord)
    .get(redisController.getAllRedisRecords)
    .delete(redisController.deleteAllRedisRecords);

router.route('/:id')
    .get(joiSchemaValidation.validateRequest(redisRequestSchema.getRedisRecordByKey), redisController.getRedisRecordByKey)
    .put(joiSchemaValidation.validateRequest(redisRequestSchema.putRedisRecordByKey), redisController.putRedisRecordByKey)
    .delete(joiSchemaValidation.validateRequest(redisRequestSchema.deleteRedisRecordByKey), redisController.deleteRedisRecordByKey);

module.exports = router;