'use strict';

const redis = require("async-redis");

const { NODE_ENV, REDIS_HOST } = process.env;
const redisClient = NODE_ENV === 'production' ?
    redis.createClient({ host: REDIS_HOST }) :
    redis.createClient();

redisClient.on("connect", function () {
    console.log("Redis Server Connected!");
});

redisClient.on("error", (error) => {
    console.log(`Redis Client Error: ${error}`);
});

module.exports.setValue = async (key, value) => {
    return await redisClient.set(key, value);
};

module.exports.getAllValues = async () => {
    let collections = [];
    const keys = await redisClient.keys('*');
    await Promise.all(keys.map(async (key) => {
        const result = await this.getValue(key);
        collections.push(JSON.parse(result));
    }));
    return collections;
};

module.exports.deleteAllValues = async () => {
    return await redisClient.flushall();
};

module.exports.getValue = async (key) => {
    return await redisClient.get(key);
};

module.exports.putValue = async (key, value) => {
    return await redisClient.set(key, value);
};

module.exports.deleteValue = async (key) => {
    return await redisClient.del(key);
};