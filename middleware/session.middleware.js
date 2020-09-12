var shortid= require('shortid');

var db = require('../db');

module.exports = function(req, res, next) {
	if(!req.singedCookies.sessionId) {
		var sessionId = shortid.generate();
		res.cookie('sessionId', sessionId, {
			signed: true// for secret, users can not change
		});
	}
	db.get('sessions').push({
		id: sessionId,
	}).write();
	next();
}