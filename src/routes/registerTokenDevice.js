import TokenDevice from '../models/TokenDevice';

async function checkExistsToken(tokenDevice) {
	let device = await TokenDevice.findOne({tokenDevice});
	if (device) return true;
	else return false;
}

/**
 * Register token device
 * @tokenDevice: string
 * @userId: string
 */
async function regiterTokenDevice(req, res) {
	try {
		const {tokenDevice, userId} = req.body;
		const isExists = checkExistsToken(tokenDevice);
		if (isExists) {
			res.json({
				error: true,
				message: "Token have registed"
			});
			return;
		}
		let device = new TokenDevice({
			tokenDevice, userId
		});
		device = await device.save();
		res.json({device});
	}
	catch (e) {
		console.log(e);
	}
}

export default regiterTokenDevice;