import { promisify } from 'util';
import sequelize, { redisClient } from './sequelize';

const Redis = {
	getCache: promisify(redisClient.get).bind(redisClient),
	setCache: promisify(redisClient.setex).bind(redisClient),
	deleteCache: redisClient.del.bind(redisClient),
	checkCache: redisClient.exists.bind(redisClient),
};

const db = {};

export type dbType = typeof db;

export { sequelize, redisClient, Redis };
