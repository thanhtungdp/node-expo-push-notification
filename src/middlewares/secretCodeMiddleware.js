import {SECRET_CODE} from '../config';

export default function secretCodeMiddleware(req, res, next) {
	const secretCode = req.body.secretCode || req.query.secretCode;
	if (secretCode === SECRET_CODE) {
		next(req, res, next);
	}
	else {
		res.json({error: '\'secretCode\' doesn\'t match'});
	}
}