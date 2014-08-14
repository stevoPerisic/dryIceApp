var _str = require('underscore.string');

function emptyfn() {
}

/**
 * Perform an HTTP request
 *
 * @param cfg {Object} the request configuration as follows:
 * - endpoint: {String} (Required unless url is specified) the endpoint key that will be used to lookup a corresponding endpoint defined in /config/api
 * - method: {String} (Optional) the HTTP method to be used (GET, POST). Defaults to GET.
 * - onError: {Function} (Optional) the callback to be used if there is an error. The input to this callback is a Ti.Network.HTTPClient. This callback is ignored if the HTTP status matches a specific onXXX handler.
 * - onOffline: {Function} (Optional) the callback to be used if the client is currently offline. The input to this callback is a Ti.Network.HTTPClient.  If omitted, a "no network" error will be displayed and an error will be logged.
 * - onSuccess: {Function} (Optional) the callback to be used if the request is successful. The input to this callback is the response data (a JSON object parsed from response.responseText).  This callback is ignored if the HTTP status matches a specific onXXX handler.
 * - onXXX: {Function} (Optional) the HTTP status code-specific callback to be used. These methods, when matched, supersedes any corresponding onError/onSucess callbacks.
 * - url: {String} (Required unless endpoint is specified) the URL of the request.
 */
exports.request = function (cfg) {

	if (Ti.Network.online) {
		preProcess(cfg);

		var client = Ti.Network.createHTTPClient({
			validatesSecureCertificate : false,
			timeout : cfg.timeout || 30000,
			onerror : function() {

				var onXXX = cfg['on' + this.status];
				if (onXXX) {
					onXXX(this);
				}
				else if (cfg.onError) {
					cfg.onError(this);
				}
				else {
					//WAIT.hide();
					alert('Your request cannot be processed at this time due to a network error.');
					Ti.API.error('Request Error:');
					Ti.API.error(' Request: ' + JSON.stringify(cfg));
					Ti.API.error(' Response: ' + JSON.stringify(this));
				}
			},
			onload : function() {

				var rsp, onXXX = cfg['on' + this.status];
				if (onXXX) {
					onXXX(this);
				}
				else if (this.status >= 400 || this.status === 0) {
					if (cfg.onError) {
						cfg.onError('\n\nAPI errored out: '+this);
					}
					else {
						//WAIT.hide();
						alert('Your request cannot be processed at this time due to a network error.');
						Ti.API.error('Request Error:');
						Ti.API.error(' Request: ' + JSON.stringify(cfg));
						Ti.API.error(' Response: ' + JSON.stringify(this));
					}
				}
				else {
					//console.log('Response in the API: ' + JSON.stringify(this.responseText));
					rsp = this.responseText;
					
					try{
						rsp = JSON.parse(this.responseText);
					}
					catch (parseEx) {
						rsp = this.responseText;
					}

					(cfg.onSuccess || emptyFn)(rsp);
				}
			}
		});

		var requestUrl = '';

		if (!isUrl(cfg.url)) {
			requestUrl = [CloudClock.pplNetApi.base, cfg.url, cfg.qryStr].join('');
		}
		else {
			requestUrl = [cfg.url, cfg.qryStr].join('');
		}
		
		Ti.API.warn("API - " + requestUrl);
		// Ti.API.warn("CFG - " + JSON.stringify(cfg));
		
		try {
			client.open(cfg.method, requestUrl, true);

			addRequestHeaders(client, cfg.context);

			if (_str.contains('POST,PUT', (cfg.method || '').toUpperCase())) {
				//console.log(JSON.stringify(cfg.payload));
				client.send(JSON.stringify(cfg.payload || {}));
			}
			else {
				client.send();
			}

		} catch (err) {
			(cfg.onError || emptyFn)(err);
		}

	}
	else if (cfg.onOffline) {
		// WAIT.hide();
		cfg.onOffline();
	}
	else {
		//WAIT.hide();
		Ti.API.error('No network connection for request: ' + JSON.stringify(cfg.endpoint));
		//alert('A network connection is required. Ensure you have a wireless signal and Airplane Mode is off.');
	}
};

function isUrl(s) {
	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	return regexp.test(s);
}

/**
 * @Private
 * Perform pre-processing and validation on the request
 *
 * @param cfg {Object} the request data to be preprocessed
 */
function preProcess(cfg) {
	var params = [];
	if (cfg.endpoint) {

		var endpoint = CloudClock.pplNetApi.endpoints[cfg.endpoint];

		_.defaults(cfg.params || {}, endpoint.params || {});

		cfg.url = endpoint.url || endpoint;
		cfg.method = cfg.method || endpoint.method || CloudClock.pplNetApi.defaultMethod || 'GET';
	}
	else {
		cfg.method = cfg.method || CloudClock.pplNetApi.defaultMethod || 'GET';
	}

	if (cfg.params) {
		// var params = [];
		_.each(cfg.params, function(value, key, obj) {
			if (_.has(obj, key)) {
				params.push([key, value].join('='));
			}
		});
		
		params.push(['_dc', new Date().getTime()].join('='));
		
		cfg.qryStr = '?' + params.join('&');
	}

	if (cfg.oauth && cfg.params) {
		//var params = [];

		_.each(cfg.params, function(value, key, obj) {
			if (_.has(obj, key)) {
				params.push([key, value]);
			}
		});

		cfg.parameters = params;
	}

	return cfg;
}

/**
 * @Private
 * Add all configured and context-based headers to the request.
 *
 * @param client {Ti.Network.HTTPClient} the http client
 * @param ctxOverrides {Object} the context overrides
 */
function addRequestHeaders(client, ctxOverrides) {

	for (var header in CloudClock.pplNetApi.headers) {
		if (CloudClock.pplNetApi.headers.hasOwnProperty(header)) {
			client.setRequestHeader(header, CloudClock.pplNetApi.headers[header]);
		}
	}

	for (var ctx in ctxOverrides) {
		if (ctxOverrides.hasOwnProperty(ctx)) {
			client.setRequestHeader(['X', ctx.toUpperCase()].join('-'), ctxOverrides[ctx]);
		}
	}
}
