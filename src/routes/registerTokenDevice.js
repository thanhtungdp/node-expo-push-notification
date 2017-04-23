import TokenDevice from '../models/TokenDevice';

/**
 * Register token device
 * @tokenDevice: string
 * @userId: string
 */
async function regiterTokenDevice(req, res) {
	try {
		const {tokenDevice, userId} = req.body;
		let device = new TokenDevice({
			tokenDevice, userId
		});
		console.log('before save');
		device = await device.save();
		res.json({device});
	}
	catch (e) {
		console.log(e);
	}
}

export default regiterTokenDevice;