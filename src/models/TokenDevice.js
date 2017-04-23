import mongoose from 'mongoose';

var {Schema} = mongoose;

var TokenDevice = new Schema({
	tokenDevice: String,
	userId: String,
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

export default mongoose.model('TokenDevice', TokenDevice);
