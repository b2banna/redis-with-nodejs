'use strict';

const constants = require('../../constants');
const redisHelper = require('../../helpers/redis');

const redisRecord = async (record) => {
    return {
        id: (record.id) ? (record.id) : (require('uuid').v1()),
        message: record.message,
        createAt: (record.createAt) ? (record.createAt) : (new Date()),
        updateAt: new Date()
    }
}

module.exports.postRedisRecord = async (data) => {
    try {
        data = await redisRecord(data);
        await redisHelper.setValue((data.id), JSON.stringify(data));
        return {};
    } catch (error) {
        throw error;
    }
}

module.exports.getAllRedisRecords = async () => {
    try {
        const records = await redisHelper.getAllValues();
        return { records };
    } catch (error) {
        throw error;
    }
}

module.exports.deleteAllRedisRecords = async () => {
    try {
        await redisHelper.deleteAllValues();
        return { records: [] };
    } catch (error) {
        throw error;
    }
}

module.exports.getRedisRecordByKey = async (data) => {
    try {
        const record = await redisHelper.getValue(data.id);
        return record ? JSON.parse(record) : {};
    } catch (error) {
        throw error;
    }
}

module.exports.putRedisRecordByKey = async (data) => {
    try {
        let record = await this.getRedisRecordByKey(data);

        if (!record || Object.keys(record).length === 0) {
            throw new Error(constants.errorMessage.RECORD_NOT_FOUND);
        } else {
            record.message = data.message;
        }

        data = await redisRecord(record);

        await redisHelper.putValue((data.id), JSON.stringify(data));
        record = await this.getRedisRecordByKey(data);
        return { record };
    } catch (error) {
        throw error;
    }
}

module.exports.deleteRedisRecordByKey = async (data) => {
    try {
        await redisHelper.deleteValue(data.id);
        return {};
    } catch (error) {
        throw error;
    }
}