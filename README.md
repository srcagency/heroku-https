# Heroku https

Enforce https on heroku apps

```js
var http = require('http');
var enforceHttps = require('heroku-https');

var server = http.createServer(function( request, response ){
	if (enforceHttps(request, response))
		console.log('User was redirected');
	else
		console.log('Serve content');
});

server.listen(3000);
```
