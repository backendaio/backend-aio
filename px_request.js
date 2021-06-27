async function gen_px_walmart(proxy){

	const { client } = require('./client.js');
	const { promisify } = require('util');
	const sleep = promisify(setTimeout);
	//const { gen_px2 } = require('./px_gen.js');
	const { px } = require('./px_generator.js');
	const { v4: uuidv4 } = require('uuid');
	const async = require('async');

	var task_id = await uuidv4();

	//console.time(task_id);

	var task = new client(proxy); 
	var get = await task.request({
		method : 'get',
		url : 'https://www.walmart.com/',
		headers : {
			"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		    "accept-language": "en",
		    "cache-control": "no-cache",
		    "pragma": "no-cache",
		    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
		    "sec-ch-ua-mobile": "?0",
		    "sec-fetch-dest": "document",
		    "sec-fetch-mode": "navigate",
		    "sec-fetch-site": "same-origin",
		    "sec-fetch-user": "?1",
		    "service-worker-navigation-preload": "true",
		    "upgrade-insecure-requests": "1",
		    "referrerPolicy": "strict-origin-when-cross-origin",
		    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
		},
		credentials: "include"
	});

	if(get['data']['error']){

		return false; 

	};

	await task.get_session().cookies.set({ name : '_px3', value : '|cce012b53543868a7ca60f80e7322c904e1e65a9f3128350822eaf16c2985a4c:vlmCvgedcckgegywHVuvHi6giJh9u9eUJ3FAlHVm/xhrgthuVdOcOD7eitYhXX3ieeqPSeJTljsLTx/l3j7ywg==:1000:42AQvXXeLSeMTZLwD0HHzKT9vnxe18kEqqwq+w0pAAvo9yhVovAUEmQgggKUAhb++4OYnxTaAsoiqUXBzc7VVZwNw9L2p8ZiaoASmd+5wx6j2C4Mn+4P+zhxW2Zri7nertfIb+V9McQyDyJOSwidB9ySFtH74BtCi02oi308oyYDVzgxVdh16AMi5ujrzCAOMmcm/7/c852030z1JEb86Q==', url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});

	//console.log(get);
	//console.log(get['data']);
	//var px2_payload = await gen_px2(sid);
	var px_client = new px('walmart'); 
	var px_payload = await px_client.gen_px2();
	
	var post = await task.request({
		method : 'post',
		url : 'https://collector-pxu6b0qd2s.px-cloud.net/api/v2/collector',
		headers : {
			"accept": "*/*",
		    "accept-language": "en",
		    "cache-control": "no-cache",
		    "content-type": "application/x-www-form-urlencoded",
		    "pragma": "no-cache",
		    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
		    "sec-ch-ua-mobile": "?0",
		    "sec-fetch-dest": "empty",
		    "sec-fetch-site": "cross-site",
		    "referrer": "https://www.walmart.com/",
  			"referrerPolicy": "strict-origin-when-cross-origin",
		    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
		},
		credentials: "omit",
		body : px_payload
	});

	if(post['data']['error']){

		return false; 
		
	};

	//var px2_data = JSON.parse(post['data']);
	//px2_data = px2_data['do'];
	//px2_data = px2_data.find(b => b.startsWith('cls'));
	console.log(JSON.parse(post['data']));
	await px_client.set_cls(post['data']);
	await px_client.set_drc(post['data']);
	await px_client.set_wcs(post['data']);
	await px_client.set_vid(post['data']);
	//await px_client.set_sid(post['data']);
	await px_client.set_cs(post['data']);
	var pxvid_cookies_data = JSON.parse(post['data'])['do'][5].split('|');
	await task.get_session().cookies.set({ name : '_pxvid', value : pxvid_cookies_data[1], url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	var pxde_cookies_data = JSON.parse(post['data'])['do'][8].split('|');
	//await task.get_session().cookies.set({ name : pxde_cookies_data[1], value : pxde_cookies_data[3] , url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	//console.log(pxde_cookies_data);
	var px3_payload = await px_client.gen_px3();

	var post = await task.request({
		method : 'post',
		url : 'https://collector-pxu6b0qd2s.px-cloud.net/api/v2/collector',
		headers : {
			"accept": "*/*",
		    "accept-language": "en",
		    "cache-control": "no-cache",
		    "content-type": "application/x-www-form-urlencoded",
		    "pragma": "no-cache",
		    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
		    "sec-ch-ua-mobile": "?0",
		    "sec-fetch-dest": "empty",
		    "sec-fetch-site": "cross-site",
		    "referrer": "https://www.walmart.com/",
  			"referrerPolicy": "strict-origin-when-cross-origin",
		    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
		},
		credentials: "omit",
		body : px3_payload
	});

	if(post['data']['error']){

		return false; 
		
	};

	console.log(JSON.parse(post['data']));
	var px3_cookies_data = JSON.parse(post['data'])['do'][0].split('|');
	//var pxvid_cookies_data = JSON.parse(post['data'])['do'][1].split('|');
	var pxde_cookies_data = JSON.parse(post['data'])['do'][1].split('|');
	//console.log(px3_cookies_data[3]);
	await task.get_session().cookies.set({ name : px3_cookies_data[1], value : px3_cookies_data[3], url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	//await task.get_session().cookies.set({ name : '_px3', value : '374cfab9d478346d7342e02393594c1ea30f4a96f41dd2dbf3f2cb0a325977c5:d1I8ADCxGtkOVqowUlIgTyADgM8sr8aTfF/TT9+RntSjoW6HhTm5qgDaQg6/nvAQYqwjCKn8tfWVsUGc4t8s6w==:1000:DLrTMVDgdvhbtHlPW0rgkt6UG0omuce5rs+PjSl1ndtgBj5H2MtwzWUOuhLGd+lr6xgnnDc42Wp6ZCKa/9szZUhksKxWifNFZxjDtYsKSfO7eTLHtlnf9Kny76V9tKkVgv2qS6SHudTG4VSrpNlifWMi8ZpgvnS6n+I6ZTwUcBNKswSl5bJhBQyeqWpm2pQ7cp2+n6yXshYih9IpwYnGZQ==', url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	//await task.get_session().cookies.set({ name : '_pxvid', value : pxvid_cookies_data[1], url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	//await task.get_session().cookies.set({ name : '_pxvid', value : '8c4b1be3-d485-11eb-9f66-0242ac12000e', url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	await task.get_session().cookies.set({ name : pxde_cookies_data[1], value : pxde_cookies_data[3] , url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	//await task.get_session().cookies.set({ name : '_pxde', value : 'ea78cc110f26a5fa535f871c16cfa942d4d9530b422d085be3086eb391e7e198:eyJ0aW1lc3RhbXAiOjE2MjQ0OTU1NjE1NjMsImZfa2IiOjAsImlwY19pZCI6W119' , url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});

	var gen_px297 = true; 

	try{

		if(gen_px297){

			var px297_payload = await px_client.gen_px297();

			var post = await task.request({
				method : 'post',
				url : 'https://collector-pxu6b0qd2s.px-cloud.net/api/v2/collector',
				headers : {
					"accept": "*/*",
				    "accept-language": "en",
				    "cache-control": "no-cache",
				    "content-type": "application/x-www-form-urlencoded",
				    "pragma": "no-cache",
				    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-site": "cross-site",
				    "referrer": "https://www.walmart.com/",
		  			"referrerPolicy": "strict-origin-when-cross-origin",
				    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
				},
				credentials: "omit",
				body : px297_payload
			});

			if(post['data']['error']){

				return false; 
		
			};

			console.log(JSON.parse(post['data']));

			//var px3_cookies_data = JSON.parse(post['data'])['do'][0].split('|');
			//var pxvid_cookies_data = JSON.parse(post['data'])['do'][1].split('|');
			var pxde_cookies_data = JSON.parse(post['data'])['do'][0].split('|');
			//console.log(px3_cookies_data[3]);
			//await task.get_session().cookies.set({ name : px3_cookies_data[1], value : px3_cookies_data[3], url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
			//await task.get_session().cookies.set({ name : '_px3', value : '374cfab9d478346d7342e02393594c1ea30f4a96f41dd2dbf3f2cb0a325977c5:d1I8ADCxGtkOVqowUlIgTyADgM8sr8aTfF/TT9+RntSjoW6HhTm5qgDaQg6/nvAQYqwjCKn8tfWVsUGc4t8s6w==:1000:DLrTMVDgdvhbtHlPW0rgkt6UG0omuce5rs+PjSl1ndtgBj5H2MtwzWUOuhLGd+lr6xgnnDc42Wp6ZCKa/9szZUhksKxWifNFZxjDtYsKSfO7eTLHtlnf9Kny76V9tKkVgv2qS6SHudTG4VSrpNlifWMi8ZpgvnS6n+I6ZTwUcBNKswSl5bJhBQyeqWpm2pQ7cp2+n6yXshYih9IpwYnGZQ==', url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
			//await task.get_session().cookies.set({ name : '_pxvid', value : pxvid_cookies_data[1], url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
			//await task.get_session().cookies.set({ name : '_pxvid', value : '8c4b1be3-d485-11eb-9f66-0242ac12000e', url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
			await task.get_session().cookies.set({ name : pxde_cookies_data[1], value : pxde_cookies_data[3] , url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
			//await task.get_session().cookies.set({ name : '_pxde', value : 'ea78cc110f26a5fa535f871c16cfa942d4d9530b422d085be3086eb391e7e198:eyJ0aW1lc3RhbXAiOjE2MjQ0OTU1NjE1NjMsImZfa2IiOjAsImlwY19pZCI6W119' , url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});

			if(JSON.parse(post['data'])['do'][0].startsWith('en|_pxde|330|')){

				//return true;

			} else {

				//return false;
			};

		};

	} catch {

		//return false;

	};

	//console.log(post);

	//var get = await task.request({
	//	method : 'get',
	//	url : 'https://www.walmart.com/account/login',
	//	headers : {
	//		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	//	    "accept-language": "en",
	//	    "cache-control": "no-cache",
	//	    "pragma": "no-cache",
	//	    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
	//	    "sec-ch-ua-mobile": "?0",
	//	    "sec-fetch-dest": "document",
	//	    "sec-fetch-mode": "navigate",
	//	    "sec-fetch-site": "none",
	//	    "sec-fetch-user": "?1",
	//	    "service-worker-navigation-preload": "true",
	//	    "upgrade-insecure-requests": "1",
	//	    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
	//	},
	//	credentials: "include"
	//});

	//console.log(get);
	//cookies = await task.get_session().cookies.get({});
	//console.log(cookies);
	//cookies_array = []
	//cookies.map(b => {
	//	if(b['name'].startsWith('com')){
	//	} else{

	//		cookies_array.push(b['name'] + b['value']);
	//	};
	//});
	//console.log(cookies_array);
	//cookies = cookies_array.join('; ');
	//console.log(cookies);

	//console.log(get['data']);
	//var custom_px3_cookie = '08f13b6cab0f50d4d24f6d867c09ca6ab5bb4dd50f3d595b3991cf052d989755:cXmYtFu+k9V03cL5g+n0toIiF6aRfQ0yeZ+s+7HaKwxQdsCfSQ/GUK645qpH0eN0EwWUEm29ERc8r/Q8onxRlg==:1000:vn7PuasN5tRCg/P8t+hoNJD+aQ6ldNERCETl2y3sW9aLNQuPsYfO2dSvGY8qexFCdh0FCdUiXpXU181NNYvi3+X8skPF3UsmNokcfoh1+H3mu+Habs9C1kLadI4zJdnhtiTa15Z3V8JaqvxU/JlGt/A2ddDnJoOkkuALYqk6Cq/Y4hfUBDVObDqGLIWKZnOxA4bV7L46pE2xW7uOfd9Cug==';
	//var custom_pxde_cookie = 'be52273cae3f8a1169a92f867dd8bc7c2d0a1e82c23229c753b79e9f2d954f65:eyJ0aW1lc3RhbXAiOjE2MjQ1NTcwNjg2MDEsImZfa2IiOjAsImlwY19pZCI6W119';
	//await task.get_session().cookies.set({ name : '_px3', value : custom_px3_cookie, url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	//await task.get_session().cookies.set({ name : '_pxde', value : custom_px3_cookie, url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});


	var login = true; 

	if(login){

		var post = await task.request({
			method : 'post',
			url : 'https://www.walmart.com/account/electrode/api/signin',
			headers : {
				"accept": "*/*",
			    "accept-language": "en",
			    "cache-control": "no-cache",
			    "content-type": "application/json",
			    "pragma": "no-cache",
			    "sec-fetch-dest": "empty",
			    "sec-fetch-site": "same-origin",
			    "referrer": "https://www.walmart.com/account/login",
	  			"referrerPolicy": "strict-origin-when-cross-origin",
	  			//"cookie" : `${cookies}`,
			    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
			},
			credentials: "include",
			body :  "{\"username\":\"bach7225@gmail.com\",\"password\":\"Bach3012\",\"rememberme\":true,\"showRememberme\":\"true\",\"captcha\":{\"sensorData\":\"\"}}",

		});

		//console.log(post['data']);

		try{

			if(JSON.parse(post['data'])['status'] == 'OK'){

				console.log('logged in successfully');

			} else {

				console.log('blocked by px');

			};


		} catch {

			console.log('unknown error');

		};

	};
	//console.log(JSON.parse(post['data']));

	//console.timeEnd(task_id);
	//console.log(await task.get_session().cookies.get({}));

	//var get = await task.request({
	//	method : 'get',
	//	url : 'https://www.walmart.com/ip/NON-SEASONAL-LICENSE-LADIES-NO-SHOW-LILO-STITCH-SOCKS-6-PACK/768591080',
	//	headers : {
	//		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	//	    "accept-language": "en",
	//	    "cache-control": "no-cache",
	//	    "pragma": "no-cache",
	//	    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
	//	    "sec-ch-ua-mobile": "?0",
	//	    "sec-fetch-dest": "document",
	//	    "sec-fetch-mode": "navigate",
	//	    "sec-fetch-site": "same-origin",
	//	    "sec-fetch-user": "?1",
	//	    "service-worker-navigation-preload": "true",
	//	    "upgrade-insecure-requests": "1",
	//	    "referrer": "https://www.walmart.com/search/?query=sock%20",
 	//		"referrerPolicy": "strict-origin-when-cross-origin",
	//	    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
	//	},
	//	credentials: "include"
	//});

	//console.log(get);
};

async function gen_px_snipes(proxy){

	const { client } = require('./client.js');
	const { promisify } = require('util');
	const sleep = promisify(setTimeout);
	//const { gen_px2 } = require('./px_gen.js');
	const { px } = require('./px_generator.js');
	const { v4: uuidv4 } = require('uuid');
	const async = require('async');


	var task_id = await uuidv4();

	console.time(task_id);

	var task = new client(proxy); 
	var get = await task.request({
		method : 'get',
		url : 'https://www.snipesusa.com/',
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
		    "upgrade-insecure-requests": "1",
		    "referrerPolicy": "strict-origin-when-cross-origin",
		    "mode": "cors",
		    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
		},
		credentials: "include"
	});

	//console.log(get);
	cookies = await task.get_session().cookies.get({});
	//var pxhd = cookies.find(b['name'] == '_pxhd');
	var pxhd = cookies[0]['value'];
	//console.log(pxhd);
	//var px2_payload = await gen_px2(sid);
	var px_client = new px('snipes'); 
	var px_payload = await px_client.gen_px2(pxhd);
	
	var post = await task.request({
		method : 'post',
		url : 'https://collector-px6xnn2xkk.px-cloud.net/api/v2/collector',
		headers : {
			"accept": "*/*",
		    "accept-language": "en",
		    "cache-control": "no-cache",
		    "content-type": "application/x-www-form-urlencoded",
		    "pragma": "no-cache",
		    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
		    "sec-ch-ua-mobile": "?0",
		    "sec-fetch-dest": "empty",
		    "sec-fetch-site": "cross-site",
		    "referrer": "https://www.snipesusa.com/",
  			"referrerPolicy": "strict-origin-when-cross-origin",
  			"mode": "cors",
		    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
		},
		credentials: "omit",
		body : px_payload
	});

	//var px2_data = JSON.parse(post['data']);
	//px2_data = px2_data['do'];
	//px2_data = px2_data.find(b => b.startsWith('cls'));
	console.log(JSON.parse(post['data']));
	await px_client.set_cls(post['data']);
	await px_client.set_drc(post['data']);
	await px_client.set_wcs(post['data']);
	await px_client.set_vid(post['data']);
	//await px_client.set_sid(post['data']);
	await px_client.set_cs(post['data']);
	var pxvid_cookies_data = JSON.parse(post['data'])['do'][5].split('|');
	//await task.get_session().cookies.set({ name : '_pxvid', value : pxvid_cookies_data[1], url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	var pxde_cookies_data = JSON.parse(post['data'])['do'][8].split('|');
	//await task.get_session().cookies.set({ name : pxde_cookies_data[1], value : pxde_cookies_data[3] , url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});
	//console.log(pxde_cookies_data);
	var px3_payload = await px_client.gen_px3(pxhd);
	var post = await task.request({
		method : 'post',
		url : 'https://collector-px6xnn2xkk.px-cloud.net/api/v2/collector',
		headers : {
			"accept": "*/*",
		    "accept-language": "en",
		    "cache-control": "no-cache",
		    "content-type": "application/x-www-form-urlencoded",
		    "pragma": "no-cache",
		    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
		    "sec-ch-ua-mobile": "?0",
		    "sec-fetch-dest": "empty",
		    "sec-fetch-site": "cross-site",
		    "referrer": "https://www.snipesusa.com/",
  			"referrerPolicy": "strict-origin-when-cross-origin",
  			"mode": "cors",
		    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
		},
		credentials: "omit",
		body : px3_payload
	});

	console.log(JSON.parse(post['data']));
	var px3_cookies_data = JSON.parse(post['data'])['do'][0].split('|');
	//var pxvid_cookies_data = JSON.parse(post['data'])['do'][1].split('|');
	var pxde_cookies_data = JSON.parse(post['data'])['do'][1].split('|');
	//console.log(px3_cookies_data[3]);
	//await task.get_session().cookies.set({ name : px3_cookies_data[1], value : px3_cookies_data[3], url : 'https://www.walmart.com/', domain : '.walmart.com', sameSite: 'lax', session : false});

};
//request_px();

module.exports.gen_px_walmart = gen_px_walmart;
module.exports.gen_px_snipes = gen_px_snipes;