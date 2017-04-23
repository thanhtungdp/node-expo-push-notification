import TokenDevice from '../models/TokenDevice';

/**
 * Register token device
 * @tokenDevice: string
 * @userId: string
 */
async function listTokenDevice(req, res) {
	let devices = await TokenDevice.find({});
	res.json(devices);
}

export default listTokenDevice;