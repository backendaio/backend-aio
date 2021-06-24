const { app , Notification } = require('electron');
const { v4 } = require('uuid'); 
const async = require('async');
const { client } = require('./client.js');
const { execute_footsites } = require('./footsites.js');
const { gen_px_walmart, gen_px_snipes,  gen_px_walmart_test} = require('./px_request.js');
const { promisify } = require('util');
const sleep = promisify(setTimeout);
const fs = require('fs');
const proxies = fs.readFileSync('./proxies.txt', 'utf8');
const proxies_array = proxies.split(/\r?\n/);
//const { walmart } = require('./walmart.js');

var cookie_count = 0;

function random(min, max){

    return Math.floor(Math.random() * (max - min) + min);
};

async function gen_cookie(done = false){

	if(done){

		return; 

	};

	for(i = 0; i < 1; i++){

		//gen_px(proxies_array[i]);
		//var task = new walmart(false, '497155954');

		try{

			//test();
			//async.parallel(test());
			//async.parallel(execute_footsites()).catch(() => {});
			//execute_footsites();
			//setImmediate(execute_footsites);
			//clearImmediate()
			//async.parallel(task.push(setImmediate(execute_footsites)));
			//clearImmediate(task[i]);
			//gen_px_walmart(proxies_array[i]);
			//request_px();
			//await gen_px_walmart_test()
			//setImmediate(gen_px_walmart);
			//setImmediate(gen_px_walmart, proxies_array[i + 800]);
			//console.log(await gen_px_walmart(proxies_array[i]));
			//setImmediate(task.execute());
			var status = await gen_px_walmart(proxies_array[random(0, 10000)]); 

			if(status){

				cookie_count++;
				console.table({ cookie : cookie_count });
				done = true;

			};

		} catch {

		};

	};

	return;

	//await gen_cookie(done);
};

async function main(){

	for(z = 0; z < 10; z++){

		gen_cookie();

	};

};

try{

	app.whenReady().then(async () => {

		var task = [];

		//for(i = 0 ; i < 1000; i++){

			//gen_px(proxies_array[i]);
			//var task = new walmart(false, '497155954');

		//	try{

				//test();
				//async.parallel(test());
				//async.parallel(execute_footsites()).catch(() => {});
				//execute_footsites();
				//setImmediate(execute_footsites);
				//clearImmediate()
				//async.parallel(task.push(setImmediate(execute_footsites)));
				//clearImmediate(task[i]);
				//gen_px_walmart(proxies_array[i]);
				//request_px();
				//await gen_px_walmart_test()
				//setImmediate(gen_px_walmart);
				//setImmediate(gen_px_walmart, proxies_array[i + 800]);
				//console.log(await gen_px_walmart(proxies_array[i]));
				//setImmediate(task.execute());

		//		if(await gen_px_walmart(proxies_array[i])){

		//			cookie_count++;
		//		    console.table({ px3_cookies : cookie_count });

		//		};

		//	} catch {};

		//};	

		//gen_px_snipes();
		//setImmediate(gen_px_walmart, 'x1.x.h3x.me:5681:Bns4PtHe6abzdQlbz5QF:OH39XjnEjcDUHocU3k4ORpyozcToZdZ5yX2ndCdGVWVktv20rffnzqpGM-s34y0n3EYG');
		//setImmediate(gen_px_walmart, 'x1.x.h3x.me:5681:Bns4PtHe6abzdQlbz5QF:OH39XjnEjcDUHocU3k4ORpyozcToZdZ5yX2ndCdGVWVktv20rffnzqpGM-s34y0n3EYG');
		//await gen_px('x1.x.h3x.me:5681:Bns4PtHe6abzdQlbz5QF:OH39XjnEjcDUHocU3k4ORpyozcToZdZ5yX2ndCdGVWVktv20rffnzqpGM-s34y0n3EYG');

		//for(z = 0; z < 100; z++){

		//	gen_cookie();

		//};

		setInterval(main,2000);

	});

} catch {};

process.on('uncaughtException', () => {
				
});