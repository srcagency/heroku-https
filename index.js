'use strict';

var redirect = require('response-redirect');

module.exports = enforce;

function enforce( request, response, hostname ){
	var proto = request.headers['x-forwarded-proto'];

	if (proto && proto !== 'https') {
		redirect.call(response, 301, 'https://' + (hostname || request.headers.host) + request.url);
		return true;
	}
}
