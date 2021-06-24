const { client } = require('./client.js');
const { promisify } = require('util');
const sleep = promisify(setTimeout);
//const { gen_px2 } = require('./px_gen.js');
const { px } = require('./px_generator.js');
const { v4: uuidv4 } = require('uuid');
const async = require('async');
const { parse } = require('node-html-parser');
const cheerio = require('cheerio');

var get, post, status_code, error, captcha_response, $;

class walmart{

	constructor(proxy, sku){

		this.client = new client(proxy);
		this.sku = sku; 
		this.site_url = 'https://www.walmart.com/';
		this.product_url = `https://www.walmart.com/ip/${this.sku}`;
		this.atc_end_point = 'https://www.walmart.com/api/v3/cart/guest/:CID/items';
		this.checkout_url = 'https://www.walmart.com/checkout';
		this.checkout_end_point = 'https://www.walmart.com/checkout/electrode/api/logger/v2';
		this.shipping_end_point = 'https://www.walmart.com/api/checkout-avs?version=v2';
		this.checkout_v3_end_point = 'https://www.walmart.com/api/checkout/v3/contract/:PCID/fulfillment';
		this.product_full_url = this.site_url;
		this.monitor_delay = 5555; 
		this.error_delay = 3333;
		this.product_data = null;
		this.offerId = null;
		this.storeIds = [];
		this.atc_data = {};
		this.quantity = 1;
		this.location = null;
		this.shipMethodDefaultRule = 'SHIP_RULE_1';
		this.in_stock = 'IN_STOCK';
		this.oos = 'OUT_OF_STOCK';
		this.product_status = null;
		this.atc_form_ready = false;
		this.carted = false;
		this.max_price_mode = true;
		this.max_price = 500;
		this.product_price = null;
		this.product_id = null;
		this.seller_id = null;
		this.productId = null;
		this.rhPath = null;
		this.charPrimaryCategoryPath = null;
		this.shipping_page_data = null;
		this.category_name = null;
		this.shipping_page_data_ready = false;
		this.checkout_page_data = "[{\"tags\":[\"beacon\"],\"data\":{\"_type\":\"beacon\",\"data\":[[\"_tagAction\",\"Checkout\",\"ON_LINK\",null,[[\"li\",{\"nm\":\"view balance details\",\"ty\":\"gift card directed spend\"}]]]]}}]";

	};

	async set_px3_cookie(cookie){

		await this.client.get_session().cookies.set({ name : '_px3', value : cookie, url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false });

	};


	async generate_session(done = false){

		if(done){

			return; 

		};

		console.log(`generating session`);

		try{

			get  = await this.client.request({

				method : 'get',
				url : this.site_url, 
				headers : {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "document",
				    "sec-fetch-mode": "navigate",
				    "sec-fetch-site": "none",
				    "sec-fetch-user": "?1",
				    "service-worker-navigation-preload": "true",
				    "upgrade-insecure-requests": "1",
				    "referrerPolicy": "strict-origin-when-cross-origin",
				    "mode": "cors",
				    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
				},
				credentials: 'include'

			});

			status_code = get['status_code'];
			error = get['error']; 

			if(status_code  == 200 && !error){

				done = true;

			} else {

				await sleep(this.error_delay);

			};

		} catch {

			await sleep(this.error_delay);

		};

		await this.generate_session(done);


	};

	async get_product(done = false, message = 'getting product', status = null, monitor = false){

		if(status == 404){

			message = `waiting for product`;

		} else {

			message = `getting product`;

		};

		if(monitor){

			message = 'waiting for restock';
			await sleep(this.monitor_delay);

		};

		if(done){

			return; 

		};

		console.log(message);

		try {

			get = await this.client.request({

				method : 'get',
				url : this.product_url, 
				headers : {

					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "document",
				    "sec-fetch-mode": "navigate",
				    "sec-fetch-site": "none",
				    "sec-fetch-user": "?1",
				    "service-worker-navigation-preload": "true",
				    "upgrade-insecure-requests": "1",
				    "referrerPolicy": "strict-origin-when-cross-origin",
				    "mode": "cors",
				    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"

				},
				credentials: 'include'

			});

			status = get['status_code'];
			this.product_data = get['data'];

			if(status == 200){

				done = true; 

			} else if(status = 404){

				await sleep(this.monitor_delay);

			} else {

				await sleep(this.error_delay);

			};


		} catch {

			monitor = false;
			await sleep(this.error_delay);

		};

		await this.get_product(done, message, status, monitor);

	};

	async parse_product_data(){

		if(this.product_status != this.oos){

			console.log(`retrieving product's details`);
		};

		try{

			if(!this.atc_form_ready || !this.shipping_page_data_ready){

				this.product_data = this.product_data.split('{"item":{"ads":{"config"');
				this.product_data = '{"item":{"ads":{"config"' + this.product_data[1];
				this.product_data = this.product_data.split('"heart":{"hearts":{}}}}');
				//this.product_data = this.product_data[0] + '"heart":{"hearts":{}}}}';

				//console.log(this.product_data[0] + '"heart":{"hearts":{}}}}');

				this.product_data = JSON.parse(this.product_data[0] + '"heart":{"hearts":{}}}}');

				this.category_name = this.product_data['item']['product']['buyBox']['products'][0]['path'][0]['name'];

				this.offerId = this.product_data['item']['product']['buyBox']['products'][0]['offerId'];
				this.product_id = this.product_data['item']['product']['checkoutComments']['productId'];
				this.seller_id = this.product_data['item']['product']['buyBox']['products'][0]['sellerId'];
				this.productId = this.product_data['item']['product']['buyBox']['products'][0]['usItemId'];
				this.rhPath = this.product_data['item']['product']['buyBox']['products'][0]['promotionsData']['rhPath'];
				this.charPrimaryCategoryPath = this.product_data['item']['product']['buyBox']['products'][0]['promotionsData']['charPrimaryCategoryPath'];
				this.product_full_url = this.product_full_url + this.product_data['item']['product']['buyBox']['products'][0]['canonicalUrl'].slice(1);

				this.product_price = this.product_data['item']['product']['midasContext']['price'];

				this.product_status = this.product_data['item']['product']['buyBox']['products'][0]['availabilityStatus'];
				this.product_data['item']['location']['location']['stores'].map(b => {
					this.storeIds.push(parseInt(b['storeId']));
				});

				delete this.product_data['item']['location']['location']['nextDay'];
				delete this.product_data['item']['location']['location']['type'];
				delete this.product_data['item']['location']['location']['stores'];
				delete this.product_data['item']['location']['location']['country'];
				this.location = this.product_data['item']['location']['location'];

				this.atc_data['offerId'] = this.offerId;
				this.atc_data['quantity'] = this.quantity;
				this.atc_data['storeIds'] = this.storeIds;
				this.atc_data['location'] = this.location; 
				this.atc_data['shipMethodDefaultRule'] = this.shipMethodDefaultRule;
				this.shipping_page_data = `[{\"tags\":[\"beacon\"],\"data\":{\"_type\":\"beacon\",\"data\":[[\"_clearAllData\",\"Checkout\",[\"fg\",[\"fg\",\"st\",\"fl\"],\"fl\",\"li\",\"st\",\"pr\"]],[\"_addData\",\"Checkout\",[[\"fg\",[\"0\"],{\"id\":\"0\",\"pr\":[\"${this.product_id}\"],\"se\":\"${this.seller_id}\"}],[[\"fg\",\"st\",\"fl\"],[\"0\",0,\"S2H-RUSH-ONE_DAY\"],{\"fp\":5.99,\"av\":1624734000000,\"xv\":1624734000000}],[\"fl\",[\"S2H-RUSH-ONE_DAY\"],{\"id\":\"S2H-RUSH-ONE_DAY\",\"pn\":\"S2H\",\"nm\":\"RUSH\",\"ti\":\"ONE_DAY\"}],[\"li\",{\"ty\":\"fulfillment-continue\",\"nm\":\"Continue\"}],[\"st\",[0],{\"id\":0,\"us\":0}],[\"pr\",[\"${this.product_id}\"],{\"af\":null,\"id\":\"${this.product_id}\",\"pc\":\"${this.charPrimaryCategoryPath}\",\"us\":${this.productId},\"rh\":\"${this.rhPath}\",\"wa\":0,\"wf\":0,\"ty\":\"REGULAR\",\"ae\":0,\"ge\":0,\"ct\":\"${this.category_name}\"}]]],[\"_tagAction\",\"Checkout\",\"ON_FF_CONT\",\"chk.cfl.cmp.clc\",[[\"cu\",{\"as\":0,\"gs\":1,\"cf\":\"Guest\",\"ct\":\"USGM\",\"eo\":0,\"lm\":0}],[\"fl\",{\"ho\":\"hold for 7 days\"}]]]]}}]`;
				this.atc_form_ready = true;
				this.shipping_page_data_ready = true;

			} else {

				this.product_data = this.product_data.split('{"item":{"ads":{"config"');
				this.product_data = '{"item":{"ads":{"config"' + this.product_data[1];
				this.product_data = this.product_data.split('"heart":{"hearts":{}}}}');
				//this.product_data = this.product_data[0] + '"heart":{"hearts":{}}}}';
				this.product_data = JSON.parse(this.product_data[0] + '"heart":{"hearts":{}}}}');

				this.product_status = this.product_data['item']['product']['buyBox']['products'][0]['availabilityStatus'];

			};

		} catch {};

	};

	async cart(done = false){

		if(done){

			return; 

		};

		console.log('carting product');

		try {

			post = await this.client.request({

				method : 'post',
				url : this.atc_end_point, 
				headers : {

					"accept": "application/json",
				    "content-type": "application/json",
				    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
				    "sec-ch-ua-mobile": "?0",
				    "referrer": this.product_full_url,
  					"referrerPolicy": "strict-origin-when-cross-origin",
  					"mode": "cors",
  					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"

				},
				body : JSON.stringify(this.atc_data),
				credentials: 'omit'

			});

			status_code = post['status_code']; 

			if(status_code == 201){

				done = true; 
				this.carted = true;

			} else {

				await sleep(this.monitor_delay);

			};

			try {

				if(JSON.parse(post['data'])['redirectUrl']){

					done = false; 
					this.carted = false;
					console.log('blocked by px');

				};

			} catch {

			};

		} catch {

			await sleep(this.error_delay);

		};

		await this.cart(done);
	};

	async monitor_cart(done = false, max_price_reached = false){

		if(done){

			return;

		};

		if(this.product_status == this.oos){

			max_price_reached = false;
			await this.get_product(false, 'getting product', null, true);
			await this.parse_product_data();

		} else if(max_price_reached){

			max_price_reached = false;
			await this.get_product(false, 'getting product', null, false);
			await this.parse_product_data();

		} else {

			//await this.set_px3_cookie('bach');

			if(this.max_price_mode && this.max_price < this.product_price){

				console.log(`reached max price limit!`);
				max_price_reached = true;
				await sleep(this.monitor_delay);

			}else {

				max_price_reached = false;
				//await this.set_px3_cookie('50e5a2e4ed65e30d86c9d7f192a7f4e9cbf9f182b600323b81c1318cec568bc1:bUgyiMukZJQHOWkKrWIFBAZ5bQQuMxzIID3Kp9FwwyZy2I0dbbeyU4VZsm/l9yY4JeMhM4kOuWB674TzcG/rWw==:1000:XiNlXQO1fpGaEM8W7X9uPyCbnhdAQevks4iF69h7s1ua7Cz4mvIsjy3IDHnJElWYC9x1U3sKMVis3yKgFPIAP+dO/sKUyzpvuNbIXvEx6nfxPza1v2Uoqw1m/F8Exc4sjpqdGTvByy82wLUozQG/rllA2wPzVcKI68rk9h2Sg9adZvuACEmLUz+GU802GALtleC4RsLcXOn0KGxa6TSDUw==');
				await this.cart();

				if(this.carted){

					done = true;

				};

			};

		};

		await this.monitor_cart(done, max_price_reached);

	};

	async get_checkout(done = false){

		if(done){

			return;

		};

		console.log('getting checkout');

		try {

			get = await this.client.request({

				method : 'get',
				url : this.checkout_url, 
				headers : {

					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				    "accept-language": "en-US,en;q=0.9",
				    "cache-control": "no-cache",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "document",
				    "sec-fetch-mode": "navigate",
				    "sec-fetch-site": "none",
				    "sec-fetch-user": "?1",
				    "service-worker-navigation-preload": "true",
				    "upgrade-insecure-requests": "1",
				    "referrerPolicy": "strict-origin-when-cross-origin",
				    "mode": "cors",
				    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"

				},
				credentials: 'include'

			});

			status_code = get['status_code']; 

			if(status_code == 200){

				done = true; 

			} else {

				await sleep(this.monitor_delay);

			};

		} catch {

			await sleep(this.error_delay);

		};

		await this.get_checkout(done);

	};

	async get_checkout_page(done = false){

		if(done){

			return; 

		};

		try {

			post = await this.client.request({

				method : 'post',
				url : this.checkout_end_point, 
				headers : {

					"accept": "application/json",
				    "accept-language": "en-US,en;q=0.9",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "referrer": "https://www.walmart.com/checkout",
  					"referrerPolicy": "strict-origin-when-cross-origin",
  					"mode": "cors",
  					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"

				},
				body : this.checkout_page_data, 
				credentials: 'include'

			});

			status_code = post['status_code']; 

			if(status_code == 200){

				done = true;

			} else {

				await sleep(this.monitor_delay);

			};


		} catch {

			await sleep(this.error_delay);

		};

		await this.get_checkout_page(done);

	};

	async post_shipping_option(done = false){

		if(done){

			return; 

		};

		try {

			post = await this.client.request({

				method : 'post',
				url : this.checkout_end_point,
				headers : {

					"accept": "application/json",
				    "accept-language": "en-US,en;q=0.9",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "referrer": "https://www.walmart.com/checkout/",
  					"referrerPolicy": "strict-origin-when-cross-origin",
  					"mode": "cors",
  					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"

				},

				credentials: 'include',
				body : this.shipping_page_data

			});

			status_code = post['status_code'];

			if(status_code == 200){

				done = true; 

			} else {

				await sleep(this.monitor_delay);

			};

		} catch {

			await sleep(this.error_delay);

		};

		await this.post_shipping_option(done);

	};

	async prepare_shipping(){

		try {

			post = await this.client.request({

				method : 'post',
				url : this.checkout_v3_end_point, 
				headers : {

					"accept": "application/json, text/javascript, */*; q=0.01",
				    "accept-language": "en-US,en;q=0.9",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "inkiru_precedence": "false",
				    "pragma": "no-cache",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "wm_cvv_in_session": "true",
				    "wm_vertical_id": "0",
				    "referrer": "https://www.walmart.com/checkout/",
  					"referrerPolicy": "strict-origin-when-cross-origin",
  					"mode": "cors",
  					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"

				}, 

				credentials: 'include',
				body : 

			});

		};
	};

	async pre_shipping(done = false){

		if(done){

			return; 

		};

		try {

			post = await this.client.request({

				method : 'post',
				url : this.checkout_end_point, 
				headers : {

					"accept": "application/json",
				    "accept-language": "en-US,en;q=0.9",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "referrer": "https://www.walmart.com/checkout/",
  					"referrerPolicy": "strict-origin-when-cross-origin",
  					"mode": "cors",
  					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"

				},

				credentials: 'include',
				body: "[{\"tags\":[\"beacon\"],\"data\":{\"_type\":\"beacon\",\"data\":[[\"_tagAction\",\"Checkout\",\"ON_LINK\",\"nav.non.slc.clc\",[[\"li\",{\"nm\":\"save shipping address\",\"lc\":\"CXO shipment step\"}],[\"cu\",{\"as\":0,\"gs\":1,\"cf\":\"Guest\",\"ct\":\"USGM\",\"eo\":0,\"lm\":0}]]]]}}]",

			});

			status_code = post['status_code'];


			if(status_code == 200){

				done = true;

			} else {

				await sleep(this.monitor_delay);

			};

		} catch {

			await sleep(this.error_delay);

		};

		await this.pre_shipping(done);

	};

	async post_shipping(done = false){

		if(done){

			return; 

		};

		console.log('submitting shipping');

		try {

			post = await this.client.request({

				method : 'post',
				url : this.shipping_end_point, 
				headers : {

					"accept": "application/json, text/javascript, */*; q=0.01",
				    "accept-language": "en-US,en;q=0.9",
				    "cache-control": "no-cache",
				    "content-type": "application/json",
				    "pragma": "no-cache",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "same-origin",
				    "referrer": "https://www.walmart.com/checkout/",
  					"referrerPolicy": "strict-origin-when-cross-origin",
  					"mode": "cors",
  					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"

				},

				credentials: 'include',
				body: "{\"address\":{\"addressLineOne\":\"384 Riverway\",\"addressLineTwo\":\"Apt 4\",\"city\":\"Boston\",\"postalCode\":\"02115\",\"stateOrProvinceCode\":\"MA\",\"countryCode\":\"USA\"},\"options\":{\"maxResultSize\":\"10\"},\"geoHint\":\"US\"}",

			});

			console.log(post);

		} catch {};

	};


	async execute(){

		var task_id = await uuidv4(); 

		console.time(task_id);

		await this.generate_session();
		await this.get_product();
		await this.parse_product_data();
		await this.monitor_cart();
		await this.get_checkout();
		await this.get_checkout_page();
		await this.post_shipping_option();
		await this.pre_shipping();
		await this.post_shipping();

		console.timeEnd(task_id);

	};

};

module.exports.walmart = walmart;