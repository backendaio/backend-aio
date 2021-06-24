const { client } = require('./client.js');
const { promisify } = require('util');
const sleep = promisify(setTimeout);
const { v4: uuidv4 } = require('uuid'); 
const Client = require('@infosimples/node_two_captcha');
const profile = require('./profile.json');
const { encrypt_data } = require('./sophie.js');
const { Webhook } = require('discord-webhook-node');
const config = require('./config.json');

var task , status , data, captcha_response;
const user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36';
const monitor_delay = config['monitor_delay'];
const error_delay = config['error_delay']; 
const queue_delay = 5000;
const sku = 'sophieong';
const size = '04.0';

class footsites{

	constructor(site , sku , size , proxy){

		this.site = site; 
		this.sku = sku;
		this.size = size;
		this.proxy = proxy;
		this.site_url = null;
		this.csrf_token = null;
		this.product_details = null;
		this.size_details = null;
		this.captcha = null;
		this.cart_id = null;
		this.encrypt_card_data = null;
		this.size_id = [];
		this.profile = profile['andy'];
		this.address_info = `{"country":{"isocode":"${this.profile['isocode']}","name":"${this.profile['name']}"},"region":{"countryIso":"${this.profile['countryIso']}","isocode":"${this.profile['isocode_2']}","isocodeShort":"${this.profile['isocodeShort']}","name":"${this.profile['isocodeShort']}"},"line1":"${this.profile['line1']}","line2":"${this.profile['line2']}","postalCode":"${this.profile['postalCode']}","town":"${this.profile['town']}"}`;
		this.shipping_info = null;
		this.billing_info = null;
		this.client = new client(this.proxy);

		if(site == 'footlocker'){

			this.site_url = 'https://www.footlocker.com/';

		} else if(site == 'champssports'){

			this.site_url = 'https://www.champssports.com/';

		} else if(site == 'eastbay'){

			this.site_url = 'https://www.eastbay.com/';

		} else if(site == 'footaction'){

			this.site_url = 'https://www.footaction.com/';

		};


		this.session_url = this.site_url + 'api/v3/session?timestamp=';
		this.product_url = this.site_url + `api/products/pdp/${this.sku}?timestamp=`;
		this.atc_end_point = this.site_url + 'api/users/carts/current/entries?timestamp=';
		this.email_end_point = this.site_url + 'api/users/carts/current/pickperson?timestamp=';
		this.address_end_point = this.site_url + 'api/v3/users/addresses/verification?timestamp=';
		this.order_end_point = this.site_url + 'api/v2/users/orders?timestamp=';
		this.shipping_end_point = this.site_url + 'api/users/carts/current/addresses/shipping?timestamp=';
		this.billing_end_point = this.site_url + 'api/users/carts/current/set-billing?timestamp=';
		//this.atc_end_point = this.site_url + 'api/users/carts/current/entries?*!/\*!\?\!\/\?/[]?&&&:::@!@/?/time=/\\\/\=/\\\/\\=\/\/';

	};

	async initialize(){

		try {

			status = await this.client.initialize(this.session_url + Date.now());

			if(status['initialize']){

				return { initialize : true };

			} else {

				return { initialize : false };

			};

		} catch {

			return { initialize : false };

		};
	};

	async generate_session(){

		try {

			status = await this.client.request({

				method : 'get',
				url : this.session_url + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "user-agent": user_agent,
				    "x-fl-request-id": `${uuidv4().toString()}`
				}

			});

			if(status['status_code'] == 200){

				this.csrf_token = JSON.parse(status['data'])['data']['csrfToken'];
				
				if(this.csrf_token){

					return { generate_session : true };

				} else {

					return { generate_session : false };

				};

			} else {

				return { generate_session : false };

			};

		} catch {

			return { generate_session : false };

		};

	};

	async get_home_page(){

		try {

			status = await this.client.request({

				method : 'get',
				url : this.site_url,
				headers : {

					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "document",
				    "sec-fetch-mode": "navigate",
				    "sec-fetch-site": "none",
				    "sec-fetch-user": "?1",
				    "upgrade-insecure-requests": "1",
				    "user-agent": user_agent

				}

			});

			if(!status['error']){

				return { error : false , status_code : status['status_code'] };

			} else {

				return { error : true , status_code : null };

			};

		} catch {

			return { error : true , status_code : null };

		};

	};

	async get_product_details(){

		try {

			status = await this.client.request({

				method : 'get',
				url : this.product_url + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "user-agent": user_agent,
				    "x-fl-request-id": `${uuidv4().toString()}`
				}

			});

			this.product_details = JSON.parse(status['data']);

			if(this.product_details['sellableUnits']){

				return { product_details : true };

			} else {

				return { product_details : false };

			};

		} catch {

			return { product_details : false };

		};

	};

	async get_size_id(){

		this.size_id = [];
		this.size_details = this.product_details['sellableUnits'];

		try {

			this.size_details.map(b => {

				if(b['attributes'][0]['value'] == this.size){

					this.size_id.push(b['attributes'][0]['id']);

				};

			});

			if(!this.size_id){

				return { size_id : false };

			} else if(this.size_id[0]){

				this.size_id = this.size_id[0];

				return { size_id : true };

			};

		} catch {

			return { size_id : false };

		};

	};

	async cart(){

		try {

			status = await this.client.request({

				method : 'post',
				url : this.atc_end_point + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "x-csrf-token": this.csrf_token,
				    "x-fl-productid": this.size_id,
				    "user-agent": user_agent,
				    "x-fl-request-id": uuidv4().toString(),
				},
				body : `{\"productQuantity\":1,\"productId\":\"${this.size_id}\"}`,
				follow_redirect : true

			});

			//console.log(status['headers']['x-cache']);
			//console.log(status['data']);

			if(JSON.parse(status['data'])['totalUnitCount'] == 1){

				return { cart : true , datadome : false };

			} else if(status['status_code'] == 403){

				//console.log(JSON.parse(status['data'])['url']);
				await this.solve_captcha(JSON.parse(status['data'])['url']);

				return { cart : false , datadome : true , captcha_url : status['data'] };

			} else {

				return { cart : false , datadome : false };

			};

		} catch {

			return { cart : false , datadome : false };

		};

	};

	async solve_captcha(captcha_url){

		this.captcha = new Client('c716bc02aa33ca7e73189e57537da359',
				{

                    timeout: 60000,
                    polling: 5000,
                    throwErrors: false
     			}
        );

        try{

        	console.log('waiting for captcha');

        	captcha_response = await this.captcha.decodeRecaptchaV2({
        		googlekey : '6LccSjEUAAAAANCPhaM2c-WiRxCZ5CzsjR_vd8uX',
        		pageurl: captcha_url
        	});

        	status = await this.submit_captcha(captcha_response['_text']);

        	if(status['captcha_solved']){

        		return { unblock : true }; 

        	} else {

        		return { unblock : false };

        	};

        } catch {

        	return { unblock : false };

        };

	};

	async submit_captcha(solved_response){

		try {

			status = await this.client.request({

				method : 'post',
				url : 'https://www.google.com/recaptcha/api2/reload?k=6LccSjEUAAAAANCPhaM2c-WiRxCZ5CzsjR_vd8uX',
				headers : {

					"accept": "*/*",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/x-protobuffer",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "x-client-data": "CIm2yQEIorbJAQjBtskBCKmdygEI+MfKAQioncsBCKCgywEI3fLLAQ==",
				    "user-agent": user_agent
				},
				body : solved_response

			});

			if(status['status_code'] == 200){

				return { captcha_solved : true }; 

			} else {

				return { captcha_solved : false };

			};

		} catch {

			return { captcha_solved : false };

		};

	};

	async verify_address(){

		try {

			status = await this.client.request({

				method : 'post',
				url : this.address_end_point + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "x-csrf-token": this.csrf_token,
				    "x-fl-request-id": uuidv4().toString(),
				    "referrer": "https://www.footlocker.com/checkout",
  					"referrerPolicy": "strict-origin-when-cross-origin",
				    "user-agent": user_agent
				},

				body : this.address_info

			});

			//console.log(status);

			if(status['status_code'] == 200){

				if(JSON.parse(status['data'])['decision'] == 'Accepted'){

					//console.log(JSON.parse(status['data']));
					//console.log(JSON.parse(status['data'])['suggestedAddresses'][0]);
					this.shipping_info = `{"shippingAddress":{"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":"${this.profile['first_name']}","lastName":"${this.profile['last_name']}","email":"${this.profile['email']}","phone":"${this.profile['phone']}","country":{"isocode":"${JSON.parse(status['data'])['suggestedAddresses'][0]['country']['isocode']}","name":"${JSON.parse(status['data'])['suggestedAddresses'][0]['country']['name']}"},"billingAddress":false,"defaultAddress":false,"id":null,"line1":"${JSON.parse(status['data'])['suggestedAddresses'][0]['line2'] + JSON.parse(status['data'])['suggestedAddresses'][0]['line1']}","postalCode":"${JSON.parse(status['data'])['suggestedAddresses'][0]['postalCode']}","region":{"countryIso":"${JSON.parse(status['data'])['suggestedAddresses'][0]['region']['countryIso']}","isocode":"${JSON.parse(status['data'])['suggestedAddresses'][0]['region']['isocode']}","isocodeShort":"${JSON.parse(status['data'])['suggestedAddresses'][0]['region']['isocodeShort']}","name":"${this.profile['city_name']}"},"setAsBilling":true,"shippingAddress":true,"town":"${JSON.parse(status['data'])['suggestedAddresses'][0]['town']}","visibleInAddressBook":false,"saveInAddressBook":false,"type":"default","LoqateSearch":"","recordType":"${JSON.parse(status['data'])['recordType']}"}}`;
					this.billing_info = `{"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":"${this.profile['first_name']}","lastName":"${this.profile['last_name']}","email":false,"phone":"${this.profile['phone']}","country":{"isocode":"${JSON.parse(status['data'])['suggestedAddresses'][0]['country']['isocode']}","name":"${JSON.parse(status['data'])['suggestedAddresses'][0]['country']['name']}"},"id":null,"setAsBilling":false,"saveInAddressBook":false,"region":{"countryIso":"${JSON.parse(status['data'])['suggestedAddresses'][0]['region']['countryIso']}","isocode":"${JSON.parse(status['data'])['suggestedAddresses'][0]['region']['isocode']}","isocodeShort":"${JSON.parse(status['data'])['suggestedAddresses'][0]['region']['isocodeShort']}","name":"Massachusetts"},"type":"default","LoqateSearch":"","line1":"${this.profile['line1']}","line2":"${this.profile['line2']}","postalCode":"${JSON.parse(status['data'])['suggestedAddresses'][0]['postalCode']}","town":"${JSON.parse(status['data'])['suggestedAddresses'][0]['town']}","regionFPO":null,"shippingAddress":true,"recordType":"${JSON.parse(status['data'])['recordType']}","visibleInAddressBook":false}`;

					return { verify_address : true };

				} else {

					return { verify_address : false };

				};

			} else {

				return { verify_address : false };


			};

		} catch {

			return { verify_address : false };

		};

	};

	async submit_shipping(){

		try {

			status = await this.client.request({

				method : 'POST',
				url : this.shipping_end_point + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "referrer": "https://www.footlocker.com/checkout",
				    "origin": "https://www.footlocker.com",
  					//"referrerPolicy": "strict-origin-when-cross-origin",
				    "x-csrf-token": this.csrf_token,
				    "x-fl-request-id": uuidv4().toString(),
				    "user-agent": user_agent
				},

				credentials: "include",

				body : this.shipping_info

			});

			if(status['status_code'] == 201){

				//console.log(status);
				return { shipping : true };

			} else {

				return { shipping : false };

			};

		} catch {

			return { shipping : false };

		};

	};

	async submit_billing(){

		try {

			status = await this.client.request({

				method : 'POST',
				url : this.billing_end_point + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "referrer": "https://www.footlocker.com/checkout",
				    "origin": "https://www.footlocker.com",
  					//"referrerPolicy": "strict-origin-when-cross-origin",
				    "x-csrf-token": this.csrf_token,
				    "x-fl-request-id": uuidv4().toString(),
				    "user-agent": user_agent
				},

				credentials: "include",

				body : this.billing_info

			});

			//console.log(status);

			if(status['status_code'] == 200){

				//console.log(status);
				return { billing : true };

			} else {

				return { billing : false };

			};

		} catch {

			return { billing : false };

		};

	};

	async get_cart_id(){

		try {

			status = await this.client.request({

				method : 'get',
				url : this.session_url + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "x-fl-request-id": uuidv4().toString(),
				    "user-agent": user_agent,
				    "referrer": this.site_url + 'checkout',
  					"referrerPolicy": "strict-origin-when-cross-origin",
				},

				credentials: 'include'

			});

			data = JSON.parse(status['data']);
			this.cart_id = data['data']['cart']['cartId'];

			if(this.cart_id){

				return { cart_id : true };

			} else {

				return { cart_id : false };

			};

		} catch {

			return { cart_id : false };

		};

	};

	async submit_email(){


		try {

			status = await this.client.request({

				method : 'put',
				url : `https://www.footlocker.com/api/users/carts/current/email/${this.profile['email']}?timestamp=` + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "x-csrf-token": this.csrf_token,
				    "x-fl-request-id": uuidv4().toString(),
				    "user-agent": user_agent,

				},

			});

			//console.log(status);

			if(status['status_code']){

				return { email : true };

			} else {

				return { email : false };

			};


		} catch {

			return { email : false };
		};

	};

	async encryption(){

		this.encrypt_card_data = await encrypt_data(this.site_url , this.cart_id , this.profile['card_number'] , this.profile['card_cvc'] , this.profile['card_month'] , this.profile['card_year'] , this.profile['first_name'] + this.profile['last_name'] + this.profile['first_name']);

	};

	async submit_order(){

		try {

			status = await this.client.request({

				method : 'put',
				url : this.email_end_point + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "x-csrf-token": this.csrf_token,
				    "x-fl-request-id": uuidv4().toString(),
				    "user-agent": user_agent,

				},

				body : `{"email":"${this.profile['email']}","firstName":"${this.profile['first_name']}","lastName":"${this.profile['last_name']}"}`
			});

			if(status['status_code'] != 200){

				return { order : false };

			};

			status = await this.client.request({

				method : 'post',
				url : this.order_end_point + Date.now(),
				headers : {

					"accept": "application/json",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "x-csrf-token": this.csrf_token,
				    "x-fl-request-id": uuidv4().toString(),
				    "user-agent": user_agent,

				},

				body : JSON.stringify(this.encrypt_card_data)
			});

			if(status == 200 || status == 201){

				return { order : true };

			} else {

				return { order : false };

			};


		} catch {

			return { order : false };

		};

	};

};

async function initialize(done = false , count = 0){

	if(done){

		return;

	};

	//console.log(`initializing task (${count})`);
	count++;

	try {

		task = new footsites('footlocker', sku, size, false);
		status = await task.initialize();

		if(status['initialize']){

			done = true; 

		} else {

			done = false; 
			await sleep(error_delay);

		};

	} catch {

		done = false; 
		await sleep(error_delay);

	};

	await initialize(done , count);

};

async function generate_session(done = false , count = 0){

	if(done){

		return;

	};

	console.log(`generating session (${count})`);
	count++;

	try{

		status = await task.generate_session();
		
		if(status['generate_session']){

			done = true;

		} else {

			done = false;
			await sleep(error_delay);

		};

	} catch {

		done = false;
		await sleep(error_delay);

	};

	await generate_session(done , count);

};

async function get_home_page(done = false , count = 0){

	if(done){

		return;

	};

	console.log(`getting home page (${count})`);
	count++;

	try{

		status = await task.get_home_page();

		if(status['error']){

			done = false;
			await sleep(error_delay);

		} else if(status['status_code'] == 200){

			done = true; 

		} else if(status['status_code'] == 529){

			done = false;
			await sleep(queue_delay);

		} else {

			done = false; 
			await sleep(error_delay);

		};

	} catch {

		done = false; 
		await sleep(error_delay);

	};
	
	await get_home_page(done , count);

};

async function get_product_details(done = false , count = 0){

	if(done){

		return;

	};

	console.log(`getting product details (${count})`);
	count++;

	try{

		status = await task.get_product_details();

		if(status['product_details']){

			done = true; 

		} else {

			done = false; 
			await sleep(monitor_delay);

		};

	} catch {

		done = false;
		await sleep(error_delay);

	};

	await get_product_details(done , count);

};

async function get_size_id(done = false , count = 0){

	if(done){

		return;

	};

	console.log(`getting size (${count})`);
	count++; 

	try{

		status = await task.get_size_id();

		if(status['size_id']){

			done = true; 

		} else {

			done = false;
			await sleep(monitor_delay);

		};

	} catch {

		done = false; 
		await sleep(monitor_delay);

	};

	await get_size_id(done , count);
	
};

async function cart(done = false , count = 0){

	if(done){

		return;

	};

	console.log(`carting product (${count})`);
	count++;

	try {

		status = await task.cart();

		if(status['cart']){

			done = true; 

		} else {

			done =false; 
			await sleep(monitor_delay);

		};

	} catch {

		done = false; 
		await sleep(error_delay)

	};

	await cart(done , count);

};

async function verify_address(done = false , count = 0){

	if(done){

		return;

	};

	//console.log(`submitting billing (${count})`);
	count++; 

	try {

		status = await task.verify_address();

		if(status['verify_address']){

			done = true; 

		} else {

			done = false; 
			await sleep(error_delay);

		};

	} catch {

		done = false; 
		await sleep(error_delay);

	};

	await verify_address(done , count);

};

async function submit_email(done = false){

	if(done){

		return;

	};

	try {

		status = await task.submit_email();

		if(status['email']){

			done = true;

		} else {

			done = false;
			await sleep(monitor_delay);

		};

	} catch {

		done = false; 
		await sleep(error_delay);

	};

	await submit_email(done);

};

async function submit_shipping(done = false , count = 0){

	if(done){

		return;

	};

	console.log(`submitting shipping (${count})`);
	count++;

	try {

		status = await task.submit_shipping();

		if(status['shipping']){

			done = true;

		} else {

			done = false;
			await sleep(monitor_delay);

		};

	} catch {

		done = false; 
		await sleep(error_delay);

	};

	await submit_shipping(done , count);

};

async function submit_billing(done = false , count = 0){

	if(done){

		return;

	};

	console.log(`submitting billing (${count})`);
	count++;

	try {

		status = await task.submit_billing();

		if(status['billing']){

			done = true;

		} else {

			done = false;
			await sleep(monitor_delay);

		};

	} catch {

		done = false; 
		await sleep(error_delay);

	};

	await submit_billing(done , count);

};

async function get_cart_id(done = false){

	if(done){

		return;

	};

	try {

		status = await task.get_cart_id();
		
		if(status['cart_id']){

			done = true; 

		} else {

			done = false;
			await sleep(monitor_delay);

		};

	} catch {

		done = false;
		await sleep(error_delay);

	};

	await get_cart_id(done);

};

async function submit_order(done = false , count = 0){

	if(done){

		return;

	};

	console.log(`submitting order (${count})`);
	count++;

	try {

		await task.encryption();
		status = await task.submit_order();

		if(status['order']){

			done = true; 
			await send_webhook(done);

		} else {

			done = false; 
			await send_webhook(done);

		};

	} catch {

		done = false; 
		await send_webhook(done);

	};


};

async function send_webhook(status){

	const hook = new Webhook(config['webhook']);;

	if(status){

		hook.setUsername('backend aio');
		hook.send(`checked out ${sku}`);

	} else {

		hook.setUsername('backend aio');
		hook.send(`failed to check out ${sku}`);

	};

};

async function execute_footsites(done = false){

	var task_id = await uuidv4();

	if(done){

		return; 

	};

	try{

		//console.time(task_id);

		await initialize();
		await generate_session();
		await get_home_page();
		await get_product_details();
		await get_size_id();
		await cart();
		await verify_address();
		await submit_email();
		await submit_shipping();
		await submit_billing();
		await get_cart_id();
		await submit_order();

		//console.timeEnd(task_id);

		done = true;

	} catch {

		done = false;

	};

	await execute_footsites(done);

};

module.exports.execute_footsites = execute_footsites;