const { app , Notification ,  BrowserWindow } = require('electron');
const { v4 } = require('uuid'); 
const async = require('async');
const { promisify } = require('util');
const sleep = promisify(setTimeout);

try{

	app.whenReady().then(async () => {

		process.on('uncaughtException', () => {

		});

		var win = new BrowserWindow({ 
			width: 600 , 
			height: 400,
			webPreferences : {
				nodeIntegration : true, 
				nodeIntegrationInWorker : true, 
				nodeIntegrationInSubFrames : true,
			},
		});

		win.loadFile('./frontend/authentication.html');
		//console.log(__filename);
		//console.log(__dirname);
		//console.log(`file://${__dirname}/frontend main/authentication.html`);
	});

} catch { };
