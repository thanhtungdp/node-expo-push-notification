import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import config from './config';
import {pushNotification, listTokenDevice, registerTokenDevice} from './routes';
import {secretCodeMiddleware} from './middlewares';

// Init app express
const app = express();
mongoose.connect(config.MONGODB_OPTIONS.database);
app.use(bodyParser.urlencoded({extended: true, limit: '100mb'}));
app.use(bodyParser.json());

/**
 * List token device
 */
app.get('/list-token-device', listTokenDevice)

/**
 * Push notification
 * @tokenDevice: string
 * @message: string
 * @data: object
 */
app.post('/push-notification', pushNotification);

/**
 * Register token device
 * @tokenDevice: string
 * @userId: string
 */
app.post('/register-token-device', secretCodeMiddleware, registerTokenDevice)

// Start server
app.listen(config.PORT, () => {
	console.log(`listen on ${config.PORT}`);
})