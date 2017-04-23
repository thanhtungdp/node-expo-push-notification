import Expo from 'exponent-server-sdk';

let expo = new Expo();

/**
 * Push notification
 * @tokenDevice: string
 * @message: string
 * @data: object
 */
async function pushNotification(req, res) {
	const {message, data, tokenDevice} = req.body;
	try {
		let receipts = await expo.sendPushNotificationsAsync([{
			to: tokenDevice,
			sound: 'default',
			body: message,
			data: data
		}]);
		res.json({receipts})
	} catch (error) {
		console.error(error);
	}
}

export default pushNotification;