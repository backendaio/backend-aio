const { session , net } = require('electron');
const { v4: uuidv4 } = require('uuid'); 

class client {

	constructor(proxy_string){

		this.task_id = uuidv4();
		this.proxy_string = proxy_string;
		this.task_proxy = null;
		this.session = session.fromPartition(`${this.task_id}`);
		this.session.clearStorageData(['origin', 'storages', 'quotas']);

		if(proxy_string){

			this.proxy(this.proxy_string);
			//this.proxy_string = this.proxy_string.split(':');

		};

	};

	get_session(){

		return session.fromPartition(`${this.task_id}`);

	};

	proxy(proxy_string){

		return new Promise((resolve , reject) => {

			try{


				if(proxy_string){

					this.proxy_string = this.proxy_string.split(':');
					this.session.setProxy({ proxyRules : `${this.proxy_string[0]}:${this.proxy_string[1]}` });
					this.task_proxy = true;

					resolve({

						proxy : true,
						original_proxy_string : proxy_string,
						proxy_string : this.proxy_string,
						error : false

					});

				};

			} catch {

				if(!proxy_string){

					reject({

						proxy : false,
						original_proxy_string : proxy_string,
						proxy_string : this.proxy_string,
						error : true

					});

				} else if(proxy_string){

					reject({

						proxy : true,
						original_proxy_string : proxy_string,
						proxy_string : this.proxy_string,
						error : true

					});

				};

			};

		});

	};

	initialize(url){

		return new Promise((resolve , reject) => {

			try{

				this.session.preconnect({ url : url , numSockets : 6 });

				resolve({

					initialize : true

				});


			} catch {

				reject({

					initialize : false,
					
				});

			};


		});

	};

	request(options = { method : null , url : null , headers : null , body : null, credentials : null , follow_redirect : false , redirect : null }){

		return new Promise((resolve , reject) => {

			var status_code = null;
			var response_headers = null;
			var response_data = null;
			var redirect = false;
			response_data = '';

			try {

				var request = net.request({

					method : options['method'],
					url : options['url'],
					session : this.session,
					useSessionCookies : true,
					headers : options['headers'],
					credentials : options['credentials'],
					redirect : options['redirect']

				});

				if(this.task_proxy){

					if(this.proxy_string.length == 4){

						request.on('login', (authInfo, callback) => {

							callback(this.proxy_string[2], this.proxy_string[3]);

						});

					};

				};

				if(options['body']){

					request.write(options['body']);

				};

				if(options['follow_redirect']){


					request.on('redirect', (response) => {

						redirect = true;
						request.followRedirect();

					});

				};

				request.on('response', (response) => {

					status_code = response.statusCode; 
					response_headers = response.headers;

					response.on('error', (error) => {

						reject({

							error : true,
							reason : error

						});

					});

					response.on('data',(chunk) => {
						
						response_data += chunk.toString();

					});

					response.on('end', () => {

						resolve({

			                options : options,
			                redirect : redirect,
							data : response_data,
							headers : response_headers, 
							status_code : status_code,
							error : false 

						});

					});

				});

				request.end();

			} catch {

				reject({

			            options : options,
			            redirect : redirect,
						data : response_data,
						headers : response_headers, 
						status_code : status_code,
						error : true 

				});

			};

		});

	};

};

module.exports.client = client;