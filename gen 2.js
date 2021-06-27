//var device = require('./device.json');
//const { gen_mact } = require('./mact.js');
//const { performance } = require('perf_hooks');
//const unescapeJs = require('unescape-js');
//const { promisify } = require('util');
//const sleep = promisify(setTimeout);
//const { gen_mact_v2 } = require('./mact_v2.js');
//const all_user_agent = require('./user-agent.json');
//const fs = require('fs');
const random_user_agent = all_user_agent[random(0, all_user_agent.length - 1)];

function random_device(){

    var device_length = 30; 
    var device = require(`./devices/device${random(0, device_length)}`);
    //console.log(device);
};

random_device();

//console.log('performance', performance.now());

var bmak_cs = '0a46G5m17Vrp4o4c',
    bmak_api_public_key = 'afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq',
    bmak_ver = '1.68',
    sensor_start = '7a74G7m23Vrp0o5c913368',
    //window.screen
    window_screen = device['window_screen'],
    //window.screen.availWidth
    window_screen_availWidth = device['window_screen_availWidth'],
    //window.screen.availHeight
    window_screen_width = window_screen_availWidth,
    window_screen_availHeight = device['window_screen_availHeight'],
    //window_screen_height
    window_screen_height = device['window_screen_height'],
    //window.innerHeight
    window_innerHeight = device['window_innerHeight'],
    //window.innerWidth
    window_innerWidth = device['window_innerWidth'],
    //window.outerWidth
    window_outerWidth = device['window_outerWidth'],
    //window.addEventListener
    window_addEventListener = device['window_addEventListener'],
    //window.XMLHttpRequest
    window_XMLHttpRequest = device['window_XMLHttpRequest'],
    //window.XDomainRequest
    window_XDomainRequest = device['window_XDomainRequest'],
    //window.emit
    window_emit = device['window_emit'],
    //window.DeviceOrientationEvent
    window_DeviceOrientationEvent = device['window_DeviceOrientationEvent'],
    //window.DeviceMotionEvent
    window_DeviceMotionEvent = device['window_DeviceMotionEvent'],
    //window.TouchEvent
    window_TouchEvent = device['window_TouchEvent'],
    //window.spawn
    window_spawn = device['window_spawn'],
    //window.chrome
    window_chrome = device['window_chrome'],
    //Function.prototype.bind
    Function_prototype_bind = device['Function_prototype_bind'],
    //window.Buffer
    window_Buffer = device['window_Buffer'],
    // window.PointerEvent
    window_PointerEvent = device['window_PointerEvent'],
    //navigator.productSub
    navigator_productSub = device['navigator_productSub'],
    //navigator.language
    navigator_language = device['navigator_language'],
    //alwys Gecko navigator_product
    navigator_product = device['navigator_product'],
    //navigator.plugins, navigator.plugins.length
    navigator_plugins = device['navigator_plugins'],
    //window._phantom
    window__phantom = device['window__phantom'],
    //window.webdriver
    window_webdriver = device['window_webdriver'],
    //window.domAutomation
    window_domAutomation = device['window_domAutomation'],
    //window.callPhantom
    window_callPhantom = device['window_callPhantom'],
    //window.ActiveXObject
    window_ActiveXObject = device['window_ActiveXObject'],
    //document.documentMode
    document_documentMode = device['document_documentMode'],
    //window.chrome && window.chrome.webstore
    window_chrome_window_chrome_webstore = device['window_chrome_window_chrome_webstore'],
    //navigator.onLine
    navigator_onLine = device['navigator_onLine'],
    //window.opera
    window_opera = device['window_opera'],
    //'undefined' != typeof InstallTrigger 
    InstallTrigger = device['InstallTrigger'],
    //window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') 
    window_HTMLElement = device['window_HTMLElement'],
    //'function' == typeof window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection
    window_webkitRTCPeerConnection = device['window_webkitRTCPeerConnection'],
    //'mozInnerScreenY' in window ? window.mozInnerScreenY
    window_mozInnerScreenY = device['window_mozInnerScreenY']
    //'function' == typeof navigator.vibrate
    navigator_vibrate = device['navigator_vibrate'],
    //'function' == typeof navigator.getBattery 
    navigator_getBattery = device['navigator_getBattery'],
    //Array.prototype.forEach
    Array_prototype_forEach = device['Array_prototype_forEach'],
    //'FileReader' in window 
    FileReader = device['FileReader'],
    //bmak.fpcf.td
    bmak_fpcf_td = device['bmak_fpcf_td'],
    //'function' == typeof window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection
    webrtcKey = device['webrtcKey'],
    //window.DeviceOrientationEvent
    //window_DeviceOrientationEvent = device['window_DeviceOrientationEvent'],
    //window.DeviceMotionEvent 
    //window_DeviceMotionEvent = device['window_DeviceMotionEvent'],
    //window.TouchEvent
    //window_TouchEvent = device['window_TouchEvent'],
    //bmak.fpcf.rVal 
    bmak_fpcf_rVal = device['bmak_fpcf_rVal'],
    //bmak.fpcf.rCFP
    bmak_fpcf_rCFP = device['bmak_fpcf_rCFP'],
    //bmak.aj_type
    bmak_aj_type = device['bmak_aj_type'],
    //bmak.aj_indx
    bmak_aj_indx = device['bmak_aj_indx'],
    //window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_,
    window_$cdc_asdjflasutopfhvcZLmcfl_ = device['window_$cdc_asdjflasutopfhvcZLmcfl_'],
    //document.$cdc_asdjflasutopfhvcZLmcfl_ 
    document_$cdc_asdjflasutopfhvcZLmcfl_ = device['document_$cdc_asdjflasutopfhvcZLmcfl_ '],
    //window.document.documentElement.getAttribute('webdriver') 
    window_document_documentElement_getAttribute_webdriver = device['window.document.documentElement.getAttribute_webdriver'],
    //navigator.webdriver 
    navigator_webdriver = device['navigator_webdriver'],
    //window.webdriver 
    //window_webdriver = device['window_webdriver'],
    //window.XPathResult
    window_XPathResult = device['window_XPathResult'],
    //document.XPathResult
    document_XPathResult = device['document_XPathResult'],
    //window.document.documentElement.getAttribute('driver')
    window_document_documentElement_getAttribute_driver = device['window.document_documentElement_getAttribute_driver'],
    //window.document.documentElement.getAttribute('selenium') 
    window_document_documentElement_getAttribute_selenium = device['window_document_documentElement_getAttribute_selenium'],
    //screen.colorDepth 
    screen_colorDepth = device['screen_colorDepth'],
    //screen.pixelDepth
    screen_pixelDepth = device['screen_pixelDepth'],
    //navigator.cookieEnabled
    navigator_cookieEnabled = device['navigator_cookieEnabled'],
    //navigator.javaEnabled
    navigator_javaEnabled = device['navigator_javaEnabled'],
    //navigator.doNotTrack
    navigator_doNotTrack = device['navigator_doNotTrack'],
    //navigator.javaEnabled()
    navigator_javaEnabled_function = device['navigator_javaEnabled_function'],
    //bmak.runFonts
    bmak_runFonts = device['bmak_runFonts'], 
    //bmak.altFonts
    bmak_altFonts = device['bmak_altFonts'],
    //t.canvas('<@nv45. F1n63r,Pr1n71n6!')
    canvas_1 = device['canvas_1'], 
    //canvas_1 = '-1777043552',
    //t.canvas('m,Ev!xV67BaU> eh2m<f3AG3@')
    canvas_2 = device['canvas_2'],
    //canvas_2 = '-901626329',
    //navigator.plugins
    //navigator_plugins = device['navigator_plugins'], 
    //navigator.plugins.length 
    navigator_plugins_length = device['navigator_plugins_length'],
    //window.sessionStorage
    window_sessionStorage = device['window_sessionStorage'],
    //window.indexedDB
    window_indexedDB = device['window_indexedDB'],
    //timezoneOffsetKey
    timezoneOffsetKey = device['timezoneOffsetKey'],
    //window.localStorage
    window_localStorage = device['window_localStorage'],
    //bmak.js_post
    bmak_js_post = true,
    bmak_hbCalc = true,
    bmak_brv = 0,
    bmak_loc = '',
    //adding time to timestamp, pay attention.
    //bmak_start_ts = Date.now(),
    bmak_start_ts = Date.now() + random(3625,7250),
    bmak_y1 = 2016,
    bmak_z1 = pi(bmak_start_ts / (bmak_y1 * bmak_y1)),
    bmak_den = window_domAutomation ,
    //bmak_wen = window_webdriver,
    bmak_wen = 0;
    bmak_pen = window__phantom,
    bmak_plen = navigator_plugins_length,
    bmak_prod = navigator_product
    bmak_lang = navigator_language,
    bmak_psub = navigator_productSub,
    bmak_me_cnt = random(150,550),
    // pay attention to !1 or 1
    bmak_pstate = !1,
    bmak_ke_cnt_lmt = 150,
    bmak_ke_vel = 0,
    bmak_me_vel = 0,
    bmak_dme_vel = 0,
    bmak_ta = 0,
    bmak_pe_vel = 0,
    bmak_te_vel = 0,
    bmak_ke_vel = 0, 
    bmak_me_vel = 0,
    user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36';
    //user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) akamai-1.0/1.0.0 Chrome/89.0.4389.58 Electron/12.0.0-beta.30 Safari/537.36';
    //user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36';
    //user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) akamai-1.0/1.0.0 Chrome/85.0.4183.84 Electron/10.0.0 Safari/537.36';
    //user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) akamai-1.0/1.0.0 Chrome/85.0.4183.84 Electron/10.0.0 Safari/537.36';
    //user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36';
    //user_agent = device['user-agent'];
    //user_agent = random_user_agent;
    //user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36';
   //user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36';
    //user_agent = 'Mozilla\\/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit\\/537.36 (KHTML, like Gecko) akamai-1.0\\/1.0.0 Chrome\\/89.0.4389.58 Electron\\/12.0.0-beta.30 Safari\\/537.36';
    //user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) akamai-1.0/1.0.0 Chrome/89.0.4389.58 Electron/12.0.0-beta.30 Safari/537.36';
    //user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) akamai-1.0/1.0.0 Chrome/87.0.4280.141 Electron/11.3.0 Safari/537.36';

let bmak_mn_abck = '',
    bmak_mn_psn = '',
    bmak_mn_sen = 0, 
    bmak_mn_cd = 1e4, 
    bmak_mn_tout = '', 
    bmak_mn_stout = '', 
    bmak_mn_ct = '', 
    bmak_mn_ts = '', 
    bmak_mn_cc = '',
    bmak_mn_lcl = 0,
    bmak_mn_state = 0,
    bmak_mn_mc_indx = 0,
    bmak_mn_al = [],
    bmak_mn_il = [],
    bmak_mn_tcl = [],
    bmak_mn_lg = [],
    bmak_mn_rts = 0,
    bmak_mn_rt = 0,
    bmak_mn_wt = 0,
    bmak_mn_r = [],
    bmak_mn_mc_lmt = 10,
    bmak_mn_ld = [],
    bmak_dcs = 0,
    bmak_mn_lc = [],
    _;

//console.log(window_screen_height);
//console.log(bmak_wen);

function random(min, max){

    return Math.floor(Math.random() * (max - min) + min);
};

function random_stuff(){

    var availWidth = [1366,1920,2560,3840,1024,960,1024,1024,1136,1138,1024,1024,1152,1152,1280,1120,1280,1152,1024,1366,1280,1280,1600,1080,1440,1280,1440,1600,1400,1440,1440,1600,1680,1776,1600,1600,1440,2048,1920,2160,2048,1792,1920,2280,1856,1800,2880,2160,2048,1920,2436,2538,1920,2560,2160,2048,2304,2256,2304,2560,2880,2960,2560,2560,2880,2560,3440,2736,2880,2560,2732,3200,2800,3000,3840,3200,3240,3200,3840,3840],
        screen_height = [768,1080, 1440, 2160,576,640,600,640,640,640,768,800,720,768,720,832,768,900,1024,768,854,960,768,1200,900,1024,960,900,1050,1024,1080,1024,1050,1000,1200,1280,1440,1080,1200,1080,1152,1344,1280,1080,1392,1440,900,1200,1280,1400,1125,1080,1440,1080,1440,1536,1440,1504,1728,1600,1440,1440,1700,1800,1620,1920,1440,1824,1800,2048,2048,1800,2100,2000,1600,2048,2160,2400,2160,2400];

    var random_number = random(0,availWidth.length - 1);
    window_screen_availWidth = availWidth[random_number];
    window_screen_width = window_screen_availWidth;

    window_screen_availHeight = Math.floor(window_screen_availWidth / 2) + random(5,36);

    if(Math.random() > 0.5){

        window_screen_availHeight = Math.floor(window_screen_availWidth / 2) - random(5,36);
    }else{

        window_screen_availHeight = Math.floor(window_screen_availWidth / random(2,5)) - random(5,36);
    };

    window_screen_availHeight = screen_height[random_number];

    //console.log(window_screen_availHeight);
    window_innerHeight = window_screen_availHeight - random(random(0,30), random(75,123));

    if(Math.random() > 0.5){

        window_innerHeight = window_screen_availHeight + random(random(0,30), random(75,123));
    };

    window_innerWidth = window_innerHeight - random(random(50,100), random(150, 250));

    if(Math.random() > 0.5){

        window_innerWidth = window_innerHeight - random(random(50,100), random(150, 250));
    };
    
    window_outerWidth = window_screen_availWidth - random(random(0,150), random(150, 600));

    if(Math.random() > 0.5){

        window_innerWidth = window_innerHeight + random(random(50,100), random(150, 250));
    };

    bmak_fpcf_td = random(4,7);
    bmak_fpcf_rVal = random(17,190);
    bmak_fpcf_rCFP = [-1816789096,186801301,1445400603,1517780680,2135628241,2095326502,1072519082,1867726891,450452824,131637407,538583538,-1756781077,2003025250,-311097705,-1100580052,-695656952,-1317395037,-1274503199,-1940689271,66119495,-311097705,2003025250,231083811,-682481916,1409535141,-635429788,-1782654497,757479280,1118057004,-360038513,699759256];
    canvas_1 = [-739578230,100564367,2130238721,-1752250632,256956874,-1799924720,1359025438,1454252292,1454252292,1359025438,-1880212897,224154769,-36060876,-739578230,-739578230,-1151536724,1436327638,1454252292,-739578230,-1151536724,-739578230,-36060876,-2065818726,-739578230,-36060876,1454252292,-739578230,1544133244,-1799924720,-739578230,-739578230];
    canvas_2 = [-1395479418,708126226,-955688593,-915298718,-2050151072,1301633122,159734625,895908107,895908107,159734625,-88638330,-425608637,-1849314799,-1395479418,-1395479418,1701442152,1247333925,895908107,-1395479418,1701442152,-1395479418,-1849314799,-650958910,-1395479418,-1849314799,895908107,-1395479418,-1753895270,1301633122,-1395479418,-1395479418];


    //console.log(bmak_fpcf_rCFP.length);
    //console.log(canvas_1.length);
    //console.log(canvas_2.length);

    random_number = random(0, bmak_fpcf_rCFP.length -1); 

    bmak_fpcf_rCFP = bmak_fpcf_rCFP[random_number];
    canvas_1 = canvas_1[random_number];
    canvas_2 = canvas_2[random_number];
    
};

//random_stuff();

function sd_debug(a){

    if (!true) {

        var t = a;
        'string' == typeof _sd_trace ? _sd_trace += t : _sd_trace = t;
    };
};

function cal_dis(a){

    var t = a[0] - a[1],
        e = a[2] - a[3],
        n = a[4] - a[5],
        o = Math.sqrt(t * t + e * e + n * n);

    return Math.floor(o);
};

function jrs(a){

    for (var t = Math.floor(1e5 * Math.random() + 1e4), e = String(a * t), n = 0, o = [], m = e.length >= 18; o.length < 6;) o.push(parseInt(e.slice(n, n + 2))), n = m ? n + 3 : n + 2;

    return [t, cal_dis(o)]
};

var bmak_ke_cnt = random(3,17);

function get_cf_date() {

    return Date.now();
};

function pi(a){

	return parseInt(a);
};

function ab(a) {

    if (null == a) return -1;
    try {
        for (var t = 0, e = 0; e < a.length; e++) {
            var n = a.charCodeAt(e);
            n < 128 && (t += n)
        }
        return t
    } catch (a) {
        return -2
    }
};

function ff(a){

	return String.fromCharCode(a);
};

function x2(){

	return get_cf_date();
};

function bc(){

	var a = window_addEventListener ? 1 : 0,
		t = window_XMLHttpRequest ? 1 : 0,
        e = window_XDomainRequest ? 1 : 0,
        n = window_emit ? 1 : 0,
        o = window_DeviceOrientationEvent ? 1 : 0,
        m = window_DeviceMotionEvent ? 1 : 0,
        r = window_TouchEvent ? 1 : 0,
        i = window_spawn ? 1 : 0,
        c = window_chrome ? 1 : 0,
        b = Function_prototype_bind ? 1 : 0,
        d = window_Buffer ? 1 : 0,
       	k = window_PointerEvent ? 1 : 0;

       	var s = window_innerWidth ? 1 : 0,
       		l = window_outerWidth ? 1 : 0,
       		bmak_xagg = '';

    bmak_xagg = a + (t << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (s << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (k << 13);
    
    return bmak_xagg;
};

function bd(){

	var a = [],
		t = window_callPhantom ? 1 : 0;
	a.push(',cpen:' + t);
	var e = 0;
	window_ActiveXObject ? e = 1 : e = 0;
	a.push('i1:' + e);
	var n = document_documentMode ? 1 : 0;
	a.push('dm:' + n);
	var o = window_chrome_window_chrome_webstore ? 1 : 0; 
	a.push('cwen:' + o);
	var m = navigator_onLine ? 1 : 0;
	a.push('non:' + m);
	var r = window_opera ? 1 : 0;
	a.push('opc:' + r);
	var i = InstallTrigger ? 1 : 0; 
	a.push('fc:' + i);
	var c = window_HTMLElement > 0 ? 1 : 0; 
	a.push('sc:' + c);
	var b = window_webkitRTCPeerConnection ? 1 : 0; 
	a.push('wrc:' + b);
	var d = window_mozInnerScreenY ? window_mozInnerScreenY : 0;
	a.push('isc:' + d);
	var bmak_d2 = pi(bmak_z1 / 23);
	var k = navigator_vibrate ? 1 : 0; 
	a.push('vib:' + k);
	var s = navigator_getBattery ? 1 : 0; 
	a.push('bat:' + s);
	var l = Array_prototype_forEach ? 0 : 1; 
	a.push('x11:' + l);
	var u = FileReader ? 1 : 0; 
	a.push('x12:' + u); 

	return a.join(',');
};

function getforminfo(site){

	var nike_info = '0,0,0,0,1754,630,0;',
		best_buy_info = '0,0,0,0,1487,231,0;0,0,0,1,2863,2863,0;0,0,0,1,3079,3079,0;0,-1,0,1,1627,1627,0;', 
		fedex_info = '0,-1,0,1,1386,447,0;1,0,0,1,1649,331,0;0,-1,0,0,1498,-1,0;0,-1,0,1,2588,1468,0;0,-1,0,1,-1,1500,0;0,-1,0,1,-1,1684,0;0,-1,0,1,-1,1684,0;0,-1,0,1,-1,1684,0;0,-1,0,1,2563,-1,0;',
        home_depot_info = '0,0,0,1,1215,-1,0;0,-1,0,0,1732,-1,0;0,-1,0,0,1143,-1,0;',
        asos_info = '0,0,0,0,1313,113,0;',
        uniqlo_info = '0,0,1,0,113,113,0;0,-1,0,0,-1,-1,0;0,-1,0,0,1888,-1,0;0,-1,0,0,1127,-1,0;',
        finishline_info = '0,0,0,0,1802,310,0;0,0,0,0,2402,310,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,520,0;0,-1,0,0,-1,520,0;',
        playstation_info = '-1,-1,0,0,-1,-1,0;0,-1,0,0,-1,-1,0;0,-1,0,0,-1,-1,0;0,-1,0,1,1078,550,0;0,-1,0,1,942,414,0;0,-1,0,1,961,433,0;',
        gamestop_info = '0,0,0,0,-1,113,0;0,-1,0,1,2015,3433,0;0,-1,0,1,2021,3317,0;0,-1,0,1,2034,3002,0;0,2,0,1,2352,3433,0;0,2,0,1,2358,3317,0;0,2,0,1,2353,2984,0;1,2,0,1,2716,3002,0;0,2,0,1,2371,3002,0;0,-1,0,1,2891,2984,0;0,-1,0,0,1805,4204,0;0,-1,0,0,1009,3946,0;1,0,0,1,3256,3002,0;0,-1,0,0,2893,-1,0;0,-1,0,1,2911,3002,0;0,-1,0,1,2892,3433,0;0,-1,0,1,2898,3317,0;0,-1,0,0,-1,2424,0;',
        bestbuy_ca_info = '0,0,0,0,-1,630,0;0,0,0,0,-1,630,0;0,-1,0,0,520,520,0;',
        rebook_info = '',
        yzy_info = '',
        zalando_info = '0,0,0,0,-1,113,0;0,-1,0,0,1125,-1,0;',
        fansedge_info = '0,0,0,0,2361,-1,0;0,0,0,0,2231,-1,0;',
        converse_info = '0,0,0,0,113,113,0;0,-1,0,0,-1,1932,0;',
        jd_info = '0,0,0,0,1802,310,0;0,0,0,0,2402,310,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,-1,0;0,-1,0,0,-1,-1,1;0,-1,0,0,-1,4773,1;0,-1,0,0,-1,4390,0;0,-1,0,0,-1,4820,1;0,-1,0,0,1143,520,0;0,-1,0,0,-1,520,0;',
        dsg_info = '0,-1,0,0,1429,630,0;0,-1,0,0,1758,1758,0;',
        offspring_info = '0,0,0,0,927,630,0;0,-1,0,1,1412,811,0;',
        pacsun_info = '0,0,0,0,113,113,0;0,-1,0,0,750,1038,0;0,0,0,0,1182,360,0;0,0,0,0,1294,440,0;0,0,0,0,-1,1134,0;',
        disney_info = '0,0,0,0,-1,113,0;0,-1,0,0,-1,1889,0;0,-1,0,0,-1,1889,0;',
        gap_info = '',
        adidas_info = '';


	if(site === 'Nike'){

		return nike_info;
	} else if(site === 'Best Buy'){

		return best_buy_info;
	} else if(site === 'Fedex'){

		return fedex_info;
	}else if(site === 'Home Depot'){

        return home_depot_info;
    }else if(site === 'asos'){

        return asos_info;
    }else if(site === 'uniqlo'){

        return uniqlo_info;
    }else if(site === 'Finishline'){

        return finishline_info;
    }else if(site === 'Playstation'){

        return playstation_info;
    }else if(site === 'Gamestop'){

        return gamestop_info;
    }else if(site === 'Best Buy CA'){

        return bestbuy_ca_info;
    }else if(site === 'Rebook'){

        return rebook_info;
    }else if(site === 'yzy'){

        return yzy_info;
    }else if(site === 'zalando'){

        return zalando_info;
    }else if(site === 'fansedge'){

        return fansedge_info;
    }else if(site === 'Converse'){

        return converse_info;
    }else if(site === 'jd'){

        return jd_info;
    }else if(site === 'dsg'){

        return dsg_info;
    }else if(site === 'offspring'){

        return offspring_info;
    }else if(site === 'pacsun'){

        return pacsun_info;
    }else if(site === 'nike'){

        return nike_info;
    }else if(site === 'disney'){

        return disney_info;
    }else if(site === 'gap'){

        return gap_info;
    }else if(site === 'adidas'){

        return adidas_info;
    }else{

        console.log('Invalid site');
        process.exit(1);
    };
};

function gd() {

    var a = user_agent,
        t = '' + ab(a),
        e = bmak_start_ts / 2,
        n = -1,
        o = -1,
        m = -1,
        r = -1,
        i = -1,
        c = -1,
        b = -1;

    n = window_screen ? window_screen_availWidth : -1,
    o = window_screen ? window_screen_availHeight : -1,
    m = window_screen ? window_screen_width : -1,
    r = window_screen ? window_screen_height : -1,
    i = window_innerHeight ? window_innerHeight : -1,
    c = window_innerWidth ? window_innerWidth : -1,
    b = window_outerWidth ? window_outerWidth : -1; 

    //console.log(m);

    var	d = Math.random(),
        k = pi(1e3 * d / 2),
        s = d + '',
        bmak_xagg = bc(),
        bmak_d3 = x2() % 1e7;

    var return_value = '';
    s = s.slice(0,11) + k;

    return_value += a + ',uaend,' + bmak_xagg + ',' + bmak_psub + ',' + bmak_lang + ',' + bmak_prod + ',' + bmak_plen + ',' + bmak_pen + ',' + 
    				bmak_wen + ',' + bmak_den + ',' + bmak_z1 + ',' + bmak_d3 + ',' + n + ',' + o + ',' + m + ',' + r + ',' + c + ',' + i + ',' + b + ',' + 
    				bd() + ',' + t + ',' + s + ',' + e + ',' + bmak_brv + ',loc:' + bmak_loc;

    //console.log(return_value);
    return return_value;
};

function kact(){
    //document.attachEvent('onkeydown', bmak.hkd)
    //document.addEventListener('keyup', bmak.hku, !0) 
    //document.attachEvent('onkeypress', bmak.hkp))

    var count = 0,
        type = [1,2,3],
        s = -1, 
        d = 0,
        l = 0,
        n = -2,
        k = random(1000,3625),
        random_event;

    var amount = random(0,20),
        kact_data = [],
        kact_string = '';

    for(var i = 0; i < amount; i++){

        if(i > 20){

            count++;
            random_event = random(1,3);
            k += random(100,250);
            kact_string = `${count},${random_event},${k},${n},${d},${l},${s}`;
            bmak_ke_vel += count + random_event + k + n + l + s;
            bmak_ta += k;
            kact_data.push(kact_string);

            continue;
        };

        k += random(100,300);
        kact_string = `${count},1,${k},${n},${d},${l},${s}`;
        bmak_ke_vel += count + 1 + k + n + l + s;
        bmak_ta += k;
        kact_data.push(kact_string);
        k += random(100,600);
        count++;
        kact_string = `${count},3,${k},${n},${d},${l},${s}`;
        bmak_ke_vel += count + 3 + k + n + l + s;
        bmak_ta += k;
        kact_data.push(kact_string);
        k += random(100,700);
        count++;
        kact_string = `${count},2,${k},${n},${d},${l},${s}`;
        bmak_ke_vel += count + 2 + k + n + l + s;
        bmak_ta += k;
        kact_data.push(kact_string);
    };

    return kact_data.join(';');
};

function rir(a, t, e, n){

    return a > t && a <= e && (a += n % (e - t)) > e && (a = a - e + t), a;

};

function od(a,t){

    try {
        a = String(a), t = String(t);
        var e = [],
        n = t.length;
        if (n > 0) {
            for (var o = 0; o < a.length; o++) {
                var m = a.charCodeAt(o),
                    r = a.charAt(o),
                    i = t.charCodeAt(o % n);
                m = rir(m, 47, 57, i), m != a.charCodeAt(o) && (r = String.fromCharCode(m)), e.push(r)
                }
            if (e.length > 0) return e.join('')
        }
        } catch (a) {};

        return a;
};

function gen_dmact(){

    var bmak_dme_cnt = 0,
        t = random(36000,90000),
        e = -1,
        n = -1,
        o = -1,
        m = -1,
        r = -1,
        i = -1,
        c = -1,
        b = -1,
        d = -1,
        amount = random(3,5),
        k = '',
        bmak_dmact_value = [];

    for(var a = 0; a < amount; a++){

        t += random(10000,30000);
        k += bmak_dme_cnt + ',' + t + ',' + e + ',' + n + ',' + o + ',' + m + ',' + r + ',' + i + ',' + c + ',' + b + ',' + d;
        bmak_dmact_value.push(k + ';');
        bmak_ta += t;
        //bmak_dme_cnt++;
        bmak_dme_vel += bmak_dme_cnt + bmak_dme_cnt + t;
        bmak_dme_cnt++;
        k = '';
    };

    return bmak_dmact_value.join('');
};

function vcact(){

    var bmak_vcact_value = [],
        vcact_type = [0,1,2,3],
        t = random(1000,3000);
        amount = random(3,5);

    for(var i = 0; i < amount; i++){

        t += random(500,5000);
        var e = vcact_type[random(0,4)] + ',' + t + ';';
        bmak_vcact_value.push(e);
        e = '';
    };

    return bmak_vcact_value.join('');

};

function gen_bmak_ke_vel(){

    var t = [1,2,3], 
        t = t[random(0,2)], 
        k = random(60000,1500000), 
        n = -1, 
        r = 0, 
        i = 0,
        c = 0, 
        b = 0, 
        d = 8 * r + 4 * i + 2 * c + b,
        s = -1;

    var bmak_ke_vel_value = 0;
    bmak_ke_vel_value = bmak_ke_vel_value + bmak_ke_cnt + t + k + n + d + s; 

    return bmak_ke_vel_value;
};

function gen_d2(){

    var bmak_z1 = pi(bmak_start_ts / (bmak_y1 * bmak_y1)),
    bmak_d2_value = pi(bmak_z1 / 23);

    return bmak_d2_value;
};

function gen_mact(){

    function random(min, max){

        return Math.floor(Math.random() * (max - min) + min);
    };

    var mact_length = random(99,100),
        mact_x = [],
        mact_y = [];

    function gen_mact_1(){

        var mact_x_random = random(150,750),
            mact_y_random = random(50,250),
            amount = 30,
            mact_point_x = mact_x_random, 
            mact_point_y = mact_y_random,
            mact_random_x = random(random(149,400), random(401,750));

        for(var i = 0; i < amount; i++){

            mact_point_x > mact_random_x && mact_point_y > 30 ? mact_point_x = mact_point_x - random(1,5) : mact_point_x = mact_point_x += random(1,10);
            mact_point_y - mact_y_random / 30 > 5 ? mact_point_y -= Math.floor(mact_y_random / 30) : mact_point_y = mact_point_y += random(5,10);

            mact_x.push(mact_point_x);
            mact_y.push(mact_point_y);
        };
    };

    gen_mact_1();

    function gen_mact_2(){

        var mact_point_x = mact_x[mact_x.length - 1],
            mact_point_y = mact_y[mact_y.length - 1],
            amount = 20,
            mact_random_shift = random(random(5,30),random(30,50));
            mact_x_max = mact_point_x + mact_random_shift,
            mact_random_x_shift = random(random(1,3),random(3,5)),
            mact_y_max = mact_point_y + mact_random_shift, 
            mact_y_random_shift = random(random(1,3),random(3,5));

        for(var i = 0; i < amount; i++){

            mact_point_x + mact_random_x_shift < mact_x_max ? mact_point_x += mact_random_x_shift  + random(1,5): mact_point_x += random(1,5); 
            mact_point_y + mact_y_random_shift < mact_y_max ? mact_point_y += mact_y_random_shift + random(2,5): mact_point_y -= random(5,8);

            mact_x.push(mact_point_x);
            mact_y.push(mact_point_y);
        };
    };

    gen_mact_2();

    function gen_mact_3(){

        var mact_point_x = mact_x[mact_x.length - 1],
            mact_point_y = mact_y[mact_y.length - 1],
            amount = 20,
            mact_random_shift = random(random(25,30),random(50,60));
            mact_x_max = mact_point_x + mact_random_shift,
            mact_random_x_shift = random(3,4),
            mact_y_max = mact_point_y + mact_random_shift, 
            mact_y_random_shift = random(5,8);

        for(var i = 0; i < amount; i++){

            mact_point_x + mact_random_x_shift < mact_x_max ? mact_point_x += mact_random_x_shift : mact_point_x -= random(1,5);
            mact_point_y + mact_y_random_shift < mact_y_max ? mact_point_y += mact_y_random_shift : mact_point_y -= random(2,4);

            mact_x.push(mact_point_x);
            mact_y.push(mact_point_y);
        };
    };

    gen_mact_3();

    function gen_mact_4(){

        var mact_point_x = mact_x[mact_x.length - 1],
            mact_point_y = mact_y[mact_y.length - 1],
            amount = 10,
            mact_random_shift = random(random(25,30),random(50,60));
            mact_x_max = mact_point_x - mact_random_shift,
            mact_random_x_shift = random(1,5),
            mact_y_max = mact_point_y + mact_random_shift, 
            mact_y_random_shift = random(5,8);

        for(var i = 0;  i < amount; i++){

            mact_point_x - mact_random_x_shift > mact_x_max ? mact_point_x -= mact_random_x_shift : mact_point_x += random(1,5);
            mact_point_y + mact_y_random_shift < mact_y_max ? mact_point_y += mact_y_random_shift : mact_point_y -= random(2,4);

            mact_x.push(mact_point_x);
            mact_y.push(mact_point_y);
        };
    };

    gen_mact_4();

    function gen_mact_5(){

        var mact_point_x = mact_x[mact_x.length - 1],
            mact_point_y = mact_y[mact_y.length - 1],
            amount = mact_length - 10,
            mact_random_shift = random(random(25,30),random(50,60));
            mact_x_max = mact_point_x + mact_random_shift,
            mact_random_x_shift = random(3,5),
            mact_y_max = mact_point_y + mact_random_shift, 
            mact_y_random_shift = random(5,8);

        for(var i = 0; i < amount; i++){

            mact_point_x + mact_random_x_shift < mact_x_max ? mact_point_x += mact_random_x_shift : mact_point_x -= random(1,5);
            mact_point_y - mact_y_random_shift > 5 ? mact_point_y -= mact_y_random_shift : mact_point_y += random(2,4);

            mact_x.push(mact_point_x);
            mact_y.push(mact_point_y);
        };
    };

    gen_mact_5(); 

    var draw_mact = {
      x: mact_x,
      y: mact_y,
      mode: 'markers',
      name: 'Akamai 1.0',
      text: ['mact'],
      marker: {
        color: "rgb(164, 194, 244)",
        size: 12,
        line: {
          color: "red",
          width: 0.5
        }
      },
      type: "scatter"
    };

    var data = [draw_mact];

    var layout = {
      title: 'Akamai Mact',
      xaxis: {
        title: 'Akamai 1.0',
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: "Percent",
        showline: false
      }
    };

    //var graphOptions = {layout: layout, filename: "line-style", fileopt: "overwrite"};
    //plotly.plot(data, graphOptions, function (err, msg) {
    //    console.log(msg);
    //);

    function gen_mact_string(){

        var mact_string = [],
            mact_x_point, mact_y_point,
           //k = bmak_me_cnt;
            k = random(800,1780),
            random_click = random(250,700);

        for(var i = 0; i < mact_length; i++){

            k += random(25,36),
            mact_x_point = mact_x[i],
            mact_y_point = mact_y[i],
            mact_string.push(`${i},1,${k},${mact_x_point},${mact_y_point}`);
            //bmak_me_cnt++;
            bmak_me_cnt = i;
            bmak_me_vel += bmak_me_cnt + 1 + k + mact_x_point + mact_y_point;
            bmak_ta += k;
        };

        var r = -1,
            //k = random(2500,3600),
            t = [2,3,4],
            o = random(150,700),
            n = random(25,75);


        if(Math.random() > 0.5){

            amount = random(4,7); 
            bmak_me_cnt += random(120,250);
            k = random(50,100);

            for(var a = 0; a < amount; a++){

                if(a > 3){

                    n += 1; 
                    o += random(15,30);
                };

                //k += random(25,36);
                //bmak_me_cnt += random(1,10);
                bmak_me_cnt += random(25,36);
                var a_random_event = random(0,3);
                c = bmak_me_cnt + ',' + t[a_random_event] + ',' + k + ',' + n + ',' + o;
               //bmak_me_cnt += a;
                //console.log(k);
                bmak_me_vel += k + a_random_event + k + n + o;
                c = c + ',' + r;
                bmak_ta += k;
               //console.log(k);
                mact_string.push(c);
            };

        };

        return mact_string.join(';');
    };

    return gen_mact_string(); 
};

function fas(){

    var fas_value = 30261693;

    return fas_value;
};

function sed(){

    var a;
    a = window_$cdc_asdjflasutopfhvcZLmcfl_ || document_$cdc_asdjflasutopfhvcZLmcfl_ ? '1' : '0';
    var t;
    t = null != window_document_documentElement_getAttribute_webdriver ? '1' : '0';
    var e;
    e = void 0 !== navigator_webdriver && navigator_webdriver ? '1' : '0';
    var n;
    //window_webdriver = undefined,
    n = void 0 !== undefined ? '1' : '0';
    var o;
    o = void 0 !== window_XPathResult || void 0 !== document_XPathResult ? '1' : '0';
    var m;
    m = null != window_document_documentElement_getAttribute_driver ? '1' : '0';
    var r;
    r = null != window_document_documentElement_getAttribute_selenium ? '1' : '0';

    return [a, t, e, n, o, m, r].join(',');
};

function gen_v(abck_cookie){

    //var bmak_ke_vel = gen_bmak_ke_vel() * 10,
    //var bmak_ke_vel =  bmak_ke_vel,
        //bmak_me_vel = random(800000,1400000),
        bmak_me_vel = bmak_me_vel,
        bmak_te_vel = 0, 
        bmak_doe_vel = 0, 
        //bmak_dme_vel = random(500000,1500000), 
        bmak_dme_vel = bmak_dme_vel,
        //bmak_pe_vel = 0, 
        k = bmak_ke_vel + bmak_me_vel + bmak_doe_vel + bmak_dme_vel + bmak_te_vel + bmak_pe_vel,
        t = random(300000,500000),
        bmak_init_time = 0,
        bmak_fpcf_td = device['bmak_fpcf_td'],
        bmak_d2 = gen_d2(),
        f = pi(bmak_d2 / 6),
        //bmak_pe_cnt = random(30,40), 
        bmak_pe_cnt = 0,
        bmak_te_cnt = 0, 
        _ = random(150000, 200000),
        //bmak_ta = random(200000,600000), 
        bmak_ta  = bmak_ta,
        bmak_n_ck = '0', 
        cookie = abck_cookie,
        bmak_ab_e = ab(cookie),
        p = fas(), 
        l = ff(80) + ff(105) + ff(90) + ff(116) + ff(69),
        u = jrs(bmak_start_ts);

    var h = [bmak_ke_vel + 1, bmak_me_vel + 32, bmak_te_vel + 32, bmak_doe_vel, bmak_dme_vel, bmak_pe_vel, k, t, bmak_init_time, bmak_start_ts, bmak_fpcf_td, bmak_d2, bmak_ke_cnt, bmak_me_cnt, f, bmak_pe_cnt, bmak_te_cnt, _, bmak_ta, bmak_n_ck, cookie, bmak_ab_e, bmak_fpcf_rVal, bmak_fpcf_rCFP, p, l, u[0], u[1]],
        v = h.join(','); 

    return v;  
};  

function gen_bmak_mr(){

    var bmak_mr_string = [],
        random_length = random(3,6); 


    for(var z = 0; z < random_length; z++){

        //console.log(bmak_mr_string);

        if(z == random_length - 2){

            for (var a = '', t = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0; n < e.length; n++){

                 var o = [],
                    m = 0,
                    r = performance.now(),
                    i = 0,
                    c = 0;

                for(i = 0; i < t && m < .6; i++){

                    for (var b = performance.now(), d = 0; d < 4e3; d++){
                        e[n](3.14);
                    }; 

                    var k = performance.now(); 
                    o.push(Math.round(1e3 * (k - b))), m = k - r; 
                };

                var s = o.sort();
                c = s[Math.floor(s.length / 2)] / 5; 
                a = a + Math.round(c) + ',';
                bmak_mr_string.push(a);

                //console.log(bmak_mr_string);
                continue;
            }; 
        }; 

        //a = a + Math.round(c) + ',';
        //bmak_mr_string.push(a);
    }; 

    //console.log(bmak_mr_string);
    bmak_mr_string = bmak_mr_string.sort(); 

    return bmak_mr_string[bmak_mr_string.length - 1];
    //return '42,47,46,38,59,62,36,8,8,6,6,1143,1368,340,';
};

function get_nav_perm(site){

    var nike_nav_perm = '10321144241322243122', 
        fed_ex_nav_perm = '20321144241322243122', 
        best_buy_nav_perm = '11321144241322243122',
        home_depot_nav_perm = '00321144241322243122',
        asos_nav_perm = '10321144241322243122',
        uniqlo_nav_perm = '10321144241322243122',
        finishline_nav_perm = '10321144241322243122',
        playstation_nav_perm = '10321144241322243122',
        gamestop_nav_perm = '10321144241322243122',
        best_buy_ca_nav_perm = '10321144241322243122',
        rebook_nav_perm = '22322244242322243222',
        yzy_nav_perm = '10321144241322243122',
        zalando_nav_perm = '10321144241322243122',
        fansedge_nav_perm = '10321144241322243122',
        converse_nav_perm = '22322244242322243222',
        jd_nav_perm = '10321144241322243122',
        dsg_nav_perm = '20321144241322243122',
        offspring_nav_perm = '22322244242322243222',
        pacsun_nav_perm = '10321144241322243122',
        //nike_nav_perm = '22322244242322243222',
        disney_nav_perm = '22322244242322243222',
        gap_nav_perm = '10321144241322243122',
        adidas_nav_perm = '10321144241322243122';

    if(site === 'Nike'){

        return nike_nav_perm;
    } else if(site === 'Fedex'){

        return fed_ex_nav_perm;
    } else if(site === 'Best Buy'){

        return best_buy_nav_perm;
    } else if(site === 'Home Depot'){

        return home_depot_nav_perm;
    }else if(site === 'asos'){

        return asos_nav_perm;
    }else if(site === 'uniqlo'){

        return uniqlo_nav_perm;
    }else if(site === 'Finishline'){

        return finishline_nav_perm;
    }else if(site === 'Playstation'){

        return playstation_nav_perm;
    }else if(site === 'Gamestop'){

        return gamestop_nav_perm;
    }else if(site === 'Best Buy CA'){

        return best_buy_ca_nav_perm;
    }else if(site === 'Rebook'){

        return rebook_nav_perm;
    }else if(site === 'yzy'){

        return yzy_nav_perm;
    }else if(site === 'zalando'){

        return zalando_nav_perm;
    }else if(site === 'fansedge'){

        return fansedge_nav_perm;
    }else if(site === 'Converse'){

        return converse_nav_perm;
    }else if(site === 'jd'){

        return jd_nav_perm;
    }else if(site === 'dsg'){

        return dsg_nav_perm;
    }else if(site === 'offspring'){

        return offspring_nav_perm;
    }else if(site === 'pacsun'){

        return pacsun_nav_perm;
    }else if(site === 'nike'){

        return nike_nav_perm;
    }else if(site === 'disney'){

        return disney_nav_perm;
    }else if(site === 'gap'){

        return gap_nav_perm;
    }else if(site === 'adidas'){

        return adidas_nav_perm;
    }else{

        console.log('Invalid site');
        process.exit(1);
    };
};

function hasLocalStorage(){

    try {

        return !!window_localStorage;
        } catch (a) {

            return !1;
        };
};

function hasSessionStorage(){

     try {

        return !!window_sessionStorage;
    } catch (a) {

        return !1;
    }
};

function hasIndexedDB(){

    return !!window_indexedDB;
};

function pluginInfo(){

    var t_PLUGINS = ['WebEx64 General Plugin Container', 'YouTube Plug-in', 'Java Applet Plug-in', 'Shockwave Flash', 'iPhotoPhotocast', 'SharePoint Browser Plug-in', 'Chrome Remote Desktop Viewer', 'Chrome PDF Viewer', 'Native Client', 'Unity Player', 'WebKit-integrierte PDF', 'QuickTime Plug-in', 'RealPlayer Version Plugin', 'RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)', 'Mozilla Default Plug-in', 'Adobe Acrobat', 'AdobeAAMDetect', 'Google Earth Plug-in', 'Java Plug-in 2 for NPAPI Browsers', 'Widevine Content Decryption Module', 'Microsoft Office Live Plug-in', 'Windows Media Player Plug-in Dynamic Link Library', 'Google Talk Plugin Video Renderer', 'Edge PDF Viewer', 'Shockwave for Director', 'Default Browser Helper', 'Silverlight Plug-In']; 

    if (void 0 === navigator_plugins){

        return null;
    }; 

    for (var a = t_PLUGINS.length, e = '', n = 0; n < a; n++) {

        var o = t_PLUGINS[n];
        void 0 !== navigator_plugins[o] && (e = e + ',' + n)
    };

    e = ',7,8'; 

    return e;

};


function gen_canvas(){

    // need to double check
    var a = screen_colorDepth ? screen_colorDepth : -1,
        e = screen_pixelDepth ? screen_pixelDepth : -1,
        n = navigator_cookieEnabled ? navigator_cookieEnabled : -1,
        o = navigator_javaEnabled ? navigator_javaEnabled_function : -1,
        m = navigator_doNotTrack ? navigator_doNotTrack : -1,
        r = 'default',
        r = 'dis',
        sessionStorageKey = hasSessionStorage(),
        indexedDbKey = hasIndexedDB(),
        localStorageKey = hasLocalStorage();

    var canvas_details = [canvas_1, canvas_2, r, pluginInfo(), sessionStorageKey, localStorageKey, indexedDbKey, timezoneOffsetKey, webrtcKey, a, e, n, o, m]; 

    return canvas_details.join(';');
};  

function cc(a){

    var t = a % 4;
    2 == t && (t = 3);
    var e = 42 + t,
        n = function (a, t) {
            return 0
        };

        if (42 == e) var n = function (a, t) {

            return a * t
        };
        else if (43 == e) var n = function (a, t) {

            return a + t
        };
        else var n = function (a, t) {

            return a - t
        };

        return n
};

function to(){

    var a = x2() % 1e7;
        bmak_d3 = a;
        for (var t = a, e = pi(ff(51)), n = 0; n < 5; n++) {
            var o = pi(a / Math.pow(10, n)) % 10,
                m = o + 1;
            op = cc(o), 
            t = op(t, m);
        };

    var bmak_o9_value = t * e;

    return bmak_o9_value;
}; 

function last_sensor_data(){

    var T = od(bmak_cs, bmak_api_public_key).slice(0, 16), 
        F = Math.floor(get_cf_date() / 36e5),
        D = get_cf_date(),
        bmak_tst = random(4,17), 
        D = 0, 
        a = random(5,12); 

    return `;${a};${bmak_tst};${D}`;
};

function bdm(a,t){

    for (var e = 0, n = 0; n < a.length; ++n){ 

        e = (e << 8 | a[n]) >>> 0, e %= t;
    }; 

    return e;
};

function mn_get_new_challenge_params(a){

    var t = null,
        e = null,
        n = null;

    if (null != a){
        for (var o = 0; o < a.length; o++) {
            var m = a[o];
            if (m.length > 0) {
                for (var r = m[0], i = bmak_mn_abck + bmak_start_ts + m[2], c = (m[3], m[6]), b = 0; b < bmak_mn_lcl && (1 == r && bmak_mn_lc[b] != i); b++);
                b == bmak_mn_lcl && (t = o, 2 == c && (e = o), 3 == c && (n = o))
            }
        };
    };

    return null != n && bmak_pstate ? a[n] : null == e || bmak_pstate ? null == t || bmak_pstate ? null : a[t] : a[e];
};

function get_mn_params_from_abck(a_challenge){

        var a = [
        []
    ];
    try {
        
        var t = a_challenge;
        if (!1 !== t) {
            var e = decodeURIComponent(t).split('~');
            if (e.length >= 5) {
                var n = e[0],
                    o = e[4],
                    m = o.split('||');
                if (m.length > 0)
                    for (var r = 0; r < m.length; r++) {
                        var i = m[r],
                            c = i.split('-');
                        if (c.length >= 5) {
                            var b = pi(c[0]),
                                d = c[1],
                                k = pi(c[2]),
                                s = pi(c[3]),
                                l = pi(c[4]),
                                u = 1;
                            c.length >= 6 && (u = pi(c[5]));
                            var data_ = [b, n, d, k, s, l, u];
                            //console.log(data_);
                            2 == u ? a.splice(0, 0, data_) : a.push(data_);
                        }
                    }
            }
        }
        //console.log(a);
        return a;
    } catch (a) {

        return '';
    };
};

function mn_get_current_challenges(bach_abck){

    var bach_a = bach_abck,
        t = [];

    //mn_update_challenge_details(a); 
    //console.log(bmak_mn_sen);
    //console.log(a[0]);
    //console.log(bmak_mn_abck);

    if (null != bach_a){
        for (var e = 0; e < bach_a.length; e++) {
            var n = bach_a[e];
            //console.log(n);
            //console.log(n);
            if (n.length > 0) {
                var o = n[1] + n[2],
                    m = n[6];
                //console.log(o);
                //console.log(m);
                t[m] = o;
            };
            //console.log(t);
        };
    };

    //console.log(a[0]);
    //console.log(t[2]);
    return t;
};

//mn_get_current_challenges('EF92D631AF6BE43B96A7AFC58BEE11B5~-1~YAAQzvzDF8zRu5d3AQAAFvUdmAWiP9E+uPrt2NMMY0Sr+uwH1JbQhe4a8ro8dYGunl73ZlYbwBp+9XfXbbUJXVsszrUd/a7QD/ph3cHncPmojc31Wup9k7pEFSEiSnbkB/kb2iRwpxmGwYBEnO2SLTY+vkfB2HcCdksdhSFgyZKj1Zz9gf/X0wLv8pnH/F889blld2LthpiBUpZjz2uaT1XgSXzYTHAEVTjEQRlnwMnCAlwYAi/aVJrvdBiETPjpaQJiloSgQ/tRBb0V2KA6pT7KSZ9yE2u79cqct1ypvAJdWjEJpQWP4EZFPh7M4P12pL/DS44XZzCW~-1~||1-RIBNrolptY-1-10-1000-2||~-1');

function mn_pr(){

    return bmak_mn_al.join(',') + ';' + bmak_mn_tcl.join(',') + ';' + bmak_mn_il.join(',') + ';' + bmak_mn_lg.join(',') + ';';
};

function mn_update_challenge_details(a){

    //console.log(a);
    bmak_mn_sen = a[0], bmak_mn_abck = a[1], bmak_mn_psn = a[2], bmak_mn_cd = a[3], bmak_mn_tout = a[4], bmak_mn_stout = a[5], bmak_mn_ct = a[6], bmak_mn_ts = bmak_start_ts, bmak_mn_cc = bmak_mn_abck + bmak_start_ts + bmak_mn_psn;
    //bmak_mn_r[bmak_mn_abck + bmak_mn_psn] = mn_pr();

    //console.log(bmak_mn_sen);
};

function challenge(challenge_cookie){

    var a = get_mn_params_from_abck(challenge_cookie),
        t = mn_get_new_challenge_params(a);

    //console.log(t);
    null != t && (mn_update_challenge_details(t), bmak_mn_sen && (bmak_mn_state = 1, bmak_mn_mc_indx = 0, bmak_mn_al = [], bmak_mn_il = [], bmak_mn_tcl = [], bmak_mn_lg = [], bmak_mn_rts = get_cf_date(), bmak_mn_rt = bmak_mn_rts - bmak_start_ts, bmak_mn_wt = 0));


    //bmak_mn_r[bmak_mn_abck + bmak_mn_psn] = mn_pr();
    //console.log(bmak_mn_r);

    //console.log(bmak_mn_r);
};

//mn_get_current_challenges('EF92D631AF6BE43B96A7AFC58BEE11B5~-1~YAAQzvzDF8zRu5d3AQAAFvUdmAWiP9E+uPrt2NMMY0Sr+uwH1JbQhe4a8ro8dYGunl73ZlYbwBp+9XfXbbUJXVsszrUd/a7QD/ph3cHncPmojc31Wup9k7pEFSEiSnbkB/kb2iRwpxmGwYBEnO2SLTY+vkfB2HcCdksdhSFgyZKj1Zz9gf/X0wLv8pnH/F889blld2LthpiBUpZjz2uaT1XgSXzYTHAEVTjEQRlnwMnCAlwYAi/aVJrvdBiETPjpaQJiloSgQ/tRBb0V2KA6pT7KSZ9yE2u79cqct1ypvAJdWjEJpQWP4EZFPh7M4P12pL/DS44XZzCW~-1~||1-RIBNrolptY-1-10-1000-2||~-1')

function get_challenge(challenge_cookie){

    var a = get_mn_params_from_abck(challenge_cookie);
    var b = mn_get_current_challenges(a); 

    return b;
};

//challenge('97D5781F93180272EBBE7742A39D9C84~-1~YAAQP2l8aCavc4h3AQAAJq3alAV5dMwWSb+9sxCj27plfCZvbDLaeZYqBfrsG3R4jbnzshUXtUimd8lG1gcwWAne1Igi3KL9hWMuCa+2pxDRvQEhLT98MwkO3v0fSYGQN0GXj00AARcPB+oPyDDP1dY3YZNcYCm+LGlGOL1B0YFR4nGSLzQ/ODAl2KCXUZpbNs+kbK2X+ccHkufranvbeaWhYelPiCr/iTpLJCszV8/HjUlQWYz/llOGx1Ju66U+7QY9Bd/jGk50fnJVgGClpoW5bEdFNbRRj4srNEz5wan7oGAWSzUmOrklv75R6S6XkQNS6Og661ek~-1~||1-APbRwhvrcC-1-10-1000-2||~-1');

function encode_utf8(a){

    // need to fix this, it doesn work correctly.
    return unescapeJs(encodeURIComponent(a));
    //return a;
};

function rotate_right(a,t){

    return a >>> t | a << 32 - t;
};

function mn_s(a){


    var t = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        e = 1779033703,
        n = 3144134277,
        o = 1013904242,
        m = 2773480762,
        r = 1359893119,
        i = 2600822924,
        c = 528734635,
        b = 1541459225,
        d = encode_utf8(a),
        k = 8 * d.length;
    d += String.fromCharCode(128);
    for (var s = d.length / 4 + 2, l = Math.ceil(s / 16), u = new Array(l), _ = 0; _ < l; _++) {
        u[_] = new Array(16);
        for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0
    }
    var p = k / Math.pow(2, 32);
    u[l - 1][14] = Math.floor(p), u[l - 1][15] = k;
    for (var h = 0; h < l; h++) {
        for (var v, g = new Array(64), w = e, y = n, C = o, S = m, E = r, v = i, M = c, j = b, _ = 0; _ < 64; _++) {
            var x, A, L, P, T, F;
            _ < 16 ? g[_] = u[h][_] : (x = rotate_right(g[_ - 15], 7) ^ rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3, A = rotate_right(g[_ - 2], 17) ^ rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10, g[_] = g[_ - 16] + x + g[_ - 7] + A), A = rotate_right(E, 6) ^ rotate_right(E, 11) ^ rotate_right(E, 25), L = E & v ^ ~E & M, P = j + A + L + t[_] + g[_], x = rotate_right(w, 2) ^ rotate_right(w, 13) ^ rotate_right(w, 22), T = w & y ^ w & C ^ y & C, F = x + T, j = M, M = v, v = E, E = S + P >>> 0, S = C, C = y, y = w, w = P + F >>> 0
        }
        e += w, n += y, o += C, m += S, r += E, i += v, c += M, b += j
    }

    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b];
};

function mn_w(){

    try {

        //console.log(bmak_mn_stout);
        for (var a = 0, t = 0, e = 0, n = '', o = get_cf_date(), m = bmak_mn_cd + bmak_mn_mc_indx; 0 == a;) {
            n = Math.random().toString(16);
            var r = bmak_mn_cc + m.toString() + n,
                i = mn_s(r);
            //console.log('round');
            //console.log(bdm(i, m));
            if (0 == bdm(i, m)){ 

                a = 1, e = get_cf_date() - o, bmak_mn_al.push(n), bmak_mn_tcl.push(e), bmak_mn_il.push(t), 0 == bmak_mn_mc_indx && (bmak_mn_lg.push(bmak_mn_abck), bmak_mn_lg.push(bmak_mn_ts), bmak_mn_lg.push(bmak_mn_psn), bmak_mn_lg.push(bmak_mn_cc), bmak_mn_lg.push(bmak_mn_cd.toString()), bmak_mn_lg.push(m.toString()), bmak_mn_lg.push(n), bmak_mn_lg.push(r), bmak_mn_lg.push(i), bmak_mn_lg.push(bmak_mn_rt));
            }
            else if ((t += 1) % 1e3 == 0 && (e = get_cf_date() - o) > bmak_mn_stout){ 

                return bmak_mn_wt += e;
            };

        }

        //need to pay attention to
        // because this addt the timestamp at the end and the challenge solver has timestamp at the end so bmak_mn_mc_indx must larger than the limit which is 10
        //bmak_mn_mc_indx = 10; 

        bmak_mn_mc_indx += 1;
        bmak_mn_mc_indx < bmak_mn_mc_lmt ? bmak_mn_mc_indx = bmak_mn_mc_indx : (bmak_mn_mc_indx = 0, bmak_mn_lc[bmak_mn_lcl] = bmak_mn_cc, bmak_mn_ld[bmak_mn_lcl] = bmak_mn_cd, bmak_mn_lcl = bmak_mn_lcl + 1, bmak_mn_state = 0, bmak_mn_lg.push(bmak_mn_wt), bmak_mn_lg.push(get_cf_date()), bmak_mn_r[bmak_mn_abck + bmak_mn_psn] = mn_pr(), bmak_js_post && (bmak_aj_type = 8, 2 == bmak_mn_ct && (bmak_dcs = 1)));

    } catch (a) {

        sd_debug(',mn_w:' + a)
        console.log('error');
    }
};


async function gen_mn_w(){

    try {

        //console.log(bmak_mn_stout);
        for (var a = 0, t = 0, e = 0, n = '', o = get_cf_date(), m = bmak_mn_cd + bmak_mn_mc_indx; 0 == a;) {
            n = Math.random().toString(16);
            var r = bmak_mn_cc + m.toString() + n,
                i = mn_s(r);
            //console.log('round');
            //console.log(bdm(i, m));
            if (0 == bdm(i, m)){ 

                a = 1, e = get_cf_date() - o, bmak_mn_al.push(n), bmak_mn_tcl.push(e), bmak_mn_il.push(t), 0 == bmak_mn_mc_indx && (bmak_mn_lg.push(bmak_mn_abck), bmak_mn_lg.push(bmak_mn_ts), bmak_mn_lg.push(bmak_mn_psn), bmak_mn_lg.push(bmak_mn_cc), bmak_mn_lg.push(bmak_mn_cd.toString()), bmak_mn_lg.push(m.toString()), bmak_mn_lg.push(n), bmak_mn_lg.push(r), bmak_mn_lg.push(i), bmak_mn_lg.push(bmak_mn_rt));
            }
            else if ((t += 1) % 1e3 == 0 && (e = get_cf_date() - o) > bmak_mn_stout){ 

                return bmak_mn_wt += e;
            };

        }

        //need to pay attention to
        // because this addt the timestamp at the end and the challenge solver has timestamp at the end so bmak_mn_mc_indx must larger than the limit which is 10
        //bmak_mn_mc_indx = 10; 

        bmak_mn_mc_indx += 1;
        bmak_mn_mc_indx < bmak_mn_mc_lmt ? await sleep(200): (bmak_mn_mc_indx = 0, bmak_mn_lc[bmak_mn_lcl] = bmak_mn_cc, bmak_mn_ld[bmak_mn_lcl] = bmak_mn_cd, bmak_mn_lcl = bmak_mn_lcl + 1, bmak_mn_state = 0, bmak_mn_lg.push(bmak_mn_wt), bmak_mn_lg.push(get_cf_date()), bmak_mn_r[bmak_mn_abck + bmak_mn_psn] = mn_pr(), bmak_js_post && (bmak_aj_type = 8, 2 == bmak_mn_ct && (bmak_dcs = 1)));

    } catch (a) {

        sd_debug(',mn_w:' + a)
        console.log('error');
    }
};


function gen_mn_pr(){

    let challenge_data_length, n;

    function generate_challenge_data(){

        challenge_data_length = 9;

        for(var b = 0; b < challenge_data_length; b++){

            n = Math.random().toString(16);
            bmak_mn_al.push(n); 
            bmak_mn_tcl.push(random(0,10));
            bmak_mn_il.push(random(0,10));

        };

    };

    generate_challenge_data(); 

    return bmak_mn_al.join(',') + ';' + bmak_mn_tcl.join(',') + ';' + bmak_mn_il.join(',') + ';' + bmak_mn_lg.join(',') + ';';
};

async function challenge_solver(challenge_cookie){

    if(bmak_mn_state == 0){
        var a = await get_mn_params_from_abck(challenge_cookie);
            t = await mn_get_new_challenge_params(a);

        null != t && (await mn_update_challenge_details(t), bmak_mn_sen && (bmak_mn_state = 1, bmak_mn_mc_indx = 0, bmak_mn_al = [], bmak_mn_il = [], bmak_mn_tcl = [], bmak_mn_lg = [], bmak_mn_rts = get_cf_date(), bmak_mn_rt = bmak_mn_rts - bmak_start_ts, bmak_mn_wt = 0));
    };

    //let mn_w_data = mn_w();
    //var challenges_data = mn_get_current_challenges(get_mn_params_from_abck(challenge_cookie));
    //console.log(bmak_mn_sen);
    //console.log(bmak_mn_lg);
    //console.log(challenges_data);
    //console.log(mn_w_data);
    //console.log(bmak_mn_r);
    //let mn_pr_data = mn_pr();
    //bmak_mn_r[bmak_mn_abck + bmak_mn_psn] = mn_pr();
    //var challenges_data = mn_get_current_challenges(get_mn_params_from_abck(challenge_cookie));
    //console.log(t);
    //console.log(gen_mn_pr());
    //console.log(a);
    //var challenges_data = mn_get_current_challenges(get_mn_params_from_abck(challenge_cookie));
    //console.log(bmak_mn_r[challenges_data[2]]);
    //console.log(t);
    var challenges_data = await mn_get_current_challenges(a);
    //mn_w();
    //console.log(challenges_data);
    //console.log(t);
    //console.log(a);
    //console.log(mn_pr());
    //console.log(challenges_data);
    //console.log(bmak_mn_lc);
    //console.log(bmak_mn_il.join(','));
    //console.log(bmak_mn_sen);
    for(var loop = 0; loop < 10; loop++){

        await gen_mn_w();
        await sleep(100);
    };
    //console.log(mn_pr());
    return challenges_data;
    
};

//challenge_solver('BD242D6B12075C854A7F58A8223B3359~-1~YAAQxfzDFxHH3ox3AQAASzp3nAXDN5BrapY2zjnwG4AQNvxFcFVE8Woo0Kuz4toF3vOxNzPU7hWb4rY/IBEA4I8VTroc7U4yoLVHccRIBKzxPya2cYkL/CMHAGCbhS+MlUxee4TcWbIjp/PUuRR2QsS7VIno7EdnD8wa4NC1Lg1lEnEwF99KJn7D1xY4+bbvygVtGn/CKVz0qJq4dNWftvKcGMybR+MbjX5o2rybqR+vk7V+drp0qUqqQTRMQq5xsTB2m9ywWhU47GQtpJBXoH6SiqsDAKAIdswqF6u2wShSSrWBNkmtrJ7LVPqF3aGKvbM6ClWMsj2g~-1~||1-cvWpuAjMuy-1-10-1000-2||~-1');

function gen_first_sensor(){

    var T = od(bmak_cs, bmak_api_public_key).slice(0, 16);
    var F = Math.floor(get_cf_date() / 36e5);
    var first_sensor_value = T + od(F, T);

    //console.log(first_sensor_value);
    return first_sensor_value;
};

//gen_first_sensor();

function ats(a){

    for (var t = '', e = 0; e < a.length; e++){ 
        t += 2 == a[e].toString(16).length ? a[e].toString(16) : '0' + a[e].toString(16);
    };

    return t;
};

function gen_cool_things(){

    var a = ['Monospace', 'Wingdings 2', 'ITC Bodoni 72 Bold', 'Menlo', 'Gill Sans MT', 'Lucida Sans', 'Bodoni 72', 'Serif', 'Shree Devanagari 714', 'Microsoft Tai Le', 'Nimbus Roman No 9 L', 'Candara', 'Press Start 2P', 'Waseem'],
    e = '', 
    t_offsetHeight = 0, 
    t_offsetWidth = 0;

    for (var o in a){

        e += a[o] + ':' + t_offsetWidth + ',' + t_offsetHeight + ';'; 

    };

    bmak_fmh = ats(mn_s(e));
    console.log(bmak_fmh);
};

//gen_cool_things(); 

async function generate_sensor_data(site,url,cookie, challenge_ = false, aj_indx = null, agent = null) {


    //bmak_fpcf_rCFP = 1453055784; 
   // canvas_1 = 1359025438; 
    //canvas_2 = 159734625; 
     //var bach;

    //if(challenge_){

    //    bach = challenge_solver(cookie); 
        //console.log(bach)
        //challenge(cookie);
        //console.log(bach[1]);
    //    mn_w();
    //    bmak_mn_r[bmak_mn_abck + bmak_mn_psn] = mn_pr();
        //console.log(bmak_mn_r);
        //console.log(bmak_mn_r);
    //};
    // randomize screen 

    if(agent){

        user_agent = agent;
    };

    //await random_stuff();

    //console.log(window_screen_availHeight);
    var sensor_data = '';
    //sensor_data += sensor_start;
    sensor_data += await gen_first_sensor();
    sensor_data += bmak_ver;
    sensor_data += '-1,2,-94,-100,';
    var n = await gd(); 
    sensor_data += n; 
    sensor_data += '-1,2,-94,-101,';
    var o = window_DeviceOrientationEvent ? 'do_en' : 'do_dis',
    	m = window_DeviceMotionEvent ? 'dm_en' : 'dm_dis',
    	r = window_TouchEvent ? 't_en' : 't_dis',
    	i = o + ',' + m + ',' + r;
    sensor_data += i;
    sensor_data += '-1,2,-94,-105,';
    var bmak_informinfo = await getforminfo(site);
    sensor_data += bmak_informinfo;
    sensor_data += '-1,2,-94,-102,'; 
    var c = bmak_informinfo; 
    sensor_data += c;
    sensor_data += '-1,2,-94,-108,';
    //bmak_kact = kact() + ';';

    if(Math.random() > 0.5){

        bmak_kact = kact() + ';';
        sensor_data += bmak_kact; 
    }else{

        bmak_kact = '';
        sensor_data += bmak_kact; 
    };

    //console.log(bmak_kact);

    sensor_data += '-1,2,-94,-110,';
    var mact;
    //var mact = await gen_mact() +';';
    //enable mact
    mact = '';

    async function random_mact(){

        Math.random() > 0.6 ? mact = await gen_mact() : mact = await gen_mact_v2();
    };

    if(Math.random() > 0.7){

         await random_mact();
    };
    // disable mact 
    //mact = '';
    //console.log(mact);
    //console.log(mact);

    //console.log(mact);

    if(mact.length > 5){

        bmak_aj_type = 1;
    }else{

        bmak_aj_type = 9;
    };

    //bmak_aj_indx = random(5,19);

    sensor_data += mact;
    //sensor_data += mact + ';'; 
    sensor_data += '-1,2,-94,-117,';
    var bmak_tact = ''; 
    sensor_data += bmak_tact;
    sensor_data += '-1,2,-94,-111,';
    var bmak_doact = '';
    sensor_data += bmak_doact;
    sensor_data += '-1,2,-94,-109,';
    var bmak_dmact = await gen_dmact(); 

    // need to double check

    if(bmak_kact){

        sensor_data += bmak_dmact; 
    }else{

        bmak_dmact = ''; 
        sensor_data += bmak_dmact; 
    };

    sensor_data += '-1,2,-94,-114,';
    var bmak_pact = '';
    sensor_data += bmak_pact; 
    sensor_data += '-1,2,-94,-103,';
    var bmak_vcact = await vcact(); 

   if(Math.random() < 0.7){

       bmak_vcact = '';
   };

   if(!mact && !bmak_kact && bmak_vcact){

      bmak_aj_type = 8;
   }else if(!mact && !bmak_kact && !bmak_vcact){

      bmak_aj_type = 0;
   };
    
    //console.log(bmak_vcact);
    sensor_data += bmak_vcact; 
    sensor_data += '-1,2,-94,-112,'; 
    var b = url;
    sensor_data += b; 
    sensor_data += '-1,2,-94,-115,'; 
    var v = gen_v(cookie);
    sensor_data += v; 
    sensor_data += '-1,2,-94,-106,';

    if(!aj_indx){

        bmak_aj_indx = 0;
    }else{
        bmak_aj_indx = aj_indx;
    };

    //console.log(bmak_aj_type);

    var d = bmak_aj_type + ',' + bmak_aj_indx;

    //console.log(d);

    sensor_data += d; 
    sensor_data += '-1,2,-94,-119,';
    var bmak_mr = await gen_bmak_mr();
    sensor_data += bmak_mr; 

    //console.log(bmak_mr);

    sensor_data += '-1,2,-94,-122,'; 
    var y = await sed(); 
    //console.log(y);
    // this is C
    var bach;

    if(challenge_){

        bach = await challenge_solver(cookie); 
        //console.log(bach)
        //challenge(cookie);
        //console.log(bach[1]);
        //bmak_mn_r[bmak_mn_abck + bmak_mn_psn] = mn_pr();
        bmak_mn_r[bmak_mn_abck + bmak_mn_psn] = await mn_pr();
        //console.log(bmak_mn_r);
        //console.log(bmak_mn_r);
        //console.log(bach);
    };

    //console.log(bach);
    //console.log(bach);
    //challenge(cookie); 
    //console.log('challenge array');
    //console.log(bach[2]);
    //console.log(bach);

    sensor_data += y; 
    sensor_data += '-1,2,-94,-123,';
    var j;
    var S = '';
    
    //console.log(bach[2]);

    if(challenge_){

        if (void 0 !== bach[1]) {

            //console.log(C[1]);
            j = bach[1];
            //console.log(j);
            //console.log(bmak_mn_r[j]);
            void 0 !== bmak_mn_r[j] && (S = bmak_mn_r[j]);
            //console.log(S);
        };
    };

    sensor_data += S;
    sensor_data += '-1,2,-94,-124,'; 
    var x;
    var E = '';

    if(challenge_){

        if (void 0 !== bach[2]) {

            x = bach[2];
            //console.log(bmak_mn_r[x]);
            //console.log(x);
            //console.log(bmak_mn_r[x]);
            //console.log(bmak_mn_r[x]);
            void 0 !== bmak_mn_r[x] && (E = bmak_mn_r[x]);
        };
    };

    sensor_data += E; 
    sensor_data += '-1,2,-94,-126,'; 
    var A;
    var M = '';

    if(challenge_){

        if (void 0 !== bach[3]) {

            A = bach[3];
            //console.log(A);
            console.log(bmak_mn_r[A]);
            void 0 !== bmak_mn_r[A] && (M = bmak_mn_r[A]);
            //console.log(M);
        };
    };

    sensor_data += M; 
    sensor_data += '-1,2,-94,-127,'; 
    var bmak_nav_perm = await get_nav_perm(site);
    sensor_data += bmak_nav_perm; 
    var L = 24 ^ await ab(sensor_data);
    sensor_data += '-1,2,-94,-70,'; 
    var bmak_fpcf_fpValstr = await gen_canvas(); 
    sensor_data += bmak_fpcf_fpValstr;
    sensor_data += '-1,2,-94,-80,'; 
    var g = '' + await ab(bmak_fpcf_fpValstr);
    sensor_data += g; 
    sensor_data += '-1,2,-94,-116,'; 
    var bmak_o9 = await to(); 
    sensor_data += bmak_o9; 
    sensor_data += '-1,2,-94,-118,';
    sensor_data += L; 
    sensor_data += '-1,2,-94,-129,';

    var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,0,Google Inc.,Google SwiftShader,3c84d65d49fb3b8d03ed2f26bf53630900f726ac7aa573f0a715315b02e21805,27';
    //var w = '';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,ATI Technologies Inc.,AMD Radeon Pro 5500M OpenGL Engine,ec2c8e52711ccf8763d8e097e5117f39f5707ebb56230f08421fbbc565148594,30';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,0,Google Inc.,Google SwiftShader,3c84d65d49fb3b8d03ed2f26bf53630900f726ac7aa573f0a715315b02e21805,27';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,,,,0';
    //var w = '94bd8db41ea820c05f4f90b67251ea8250177bedfa65e9ef1a4b6b16e93995e6,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,ATI Technologies Inc.,AMD Radeon Pro 5500M OpenGL Engine,f437e95c71eb8e0326eb22e9cba9c05b86068086180a4ca09b3bcd32320a1928,31';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,ATI Technologies Inc.,AMD Radeon Pro 5500M OpenGL Engine,f437e95c71eb8e0326eb22e9cba9c05b86068086180a4ca09b3bcd32320a1928,31'; 
   //var w = '94bd8db41ea820c05f4f90b67251ea8250177bedfa65e9ef1a4b6b16e93995e6,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,,,,0';
    //var w = '082671395fd8efe3a9d780b266c2a8a8cb2db9a408d68ba6c926d5608ab9a84d,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,,,,0';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,,,,0';
    //var w = '94bd8db41ea820c05f4f90b67251ea8250177bedfa65e9ef1a4b6b16e93995e6,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,,,,0';
    //var w = '94bd8db41ea820c05f4f90b67251ea8250177bedfa65e9ef1a4b6b16e93995e6,1,0d65734a64c01ce05475c3345af06aef5246ddb8f0161ec4776e6f9c160dfd9b,Google Inc.,Google SwiftShader,3c84d65d49fb3b8d03ed2f26bf53630900f726ac7aa573f0a715315b02e21805,27';
    //var w = '94bd8db41ea820c05f4f90b67251ea8250177bedfa65e9ef1a4b6b16e93995e6,1,929744a91e4d3839e9371de5132eb9b075f0a6bf503d7b0da4a50cbe32922620,,,,0';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,0,,,,';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,0d65734a64c01ce05475c3345af06aef5246ddb8f0161ec4776e6f9c160dfd9b,,,,0';
    //var w = '94bd8db41ea820c05f4f90b67251ea8250177bedfa65e9ef1a4b6b16e93995e6,1,0,Google Inc.,Google SwiftShader,3c84d65d49fb3b8d03ed2f26bf53630900f726ac7aa573f0a715315b02e21805,27';
    //var w = '';
    //var w = '94bd8db41ea820c05f4f90b67251ea8250177bedfa65e9ef1a4b6b16e93995e6,1,0d65734a64c01ce05475c3345af06aef5246ddb8f0161ec4776e6f9c160dfd9b,,,,0';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,0d65734a64c01ce05475c3345af06aef5246ddb8f0161ec4776e6f9c160dfd9b,,,,0';
    //var w = '082671395fd8efe3a9d780b266c2a8a8cb2db9a408d68ba6c926d5608ab9a84d,1,0d65734a64c01ce05475c3345af06aef5246ddb8f0161ec4776e6f9c160dfd9b,,,,0';
    //var w = '87838b6b28b2e952ff9e4e3f1f00f6c6146fa8090ee5d0541c06ecdc180622da,1,0,,,,0'; 
    //var w = ',,0d65734a64c01ce05475c3345af06aef5246ddb8f0161ec4776e6f9c160dfd9b,,,,0'
    //var w = '94bd8db41ea820c05f4f90b67251ea8250177bedfa65e9ef1a4b6b16e93995e6,1,0d65734a64c01ce05475c3345af06aef5246ddb8f0161ec4776e6f9c160dfd9b,Google Inc.,Google SwiftShader,3c84d65d49fb3b8d03ed2f26bf53630900f726ac7aa573f0a715315b02e21805,27';
    sensor_data += w; 
    sensor_data += '-1,2,-94,-121,'; 
    sensor_data += await last_sensor_data(); 

    //console.log(sensor_data);
    return sensor_data;
};

async function gen_sensor(){

    var a_sensor_data = await generate_sensor_data('Best Buy', 'https://www.bestbuy.com/', '3C32A672D25DAF6472150B47A1DCAAC4~-1~YAAQTml8aPF2oT53AQAAblWJhQXozcxFONtB0XTnRsRnmW41uaIrGyqoB9tZhQeH4MGS0bByn81wC37Fxf1X%2BqY2iJmPyFE%2FQYam7daO0kUZ%2Bhnyb5yUjCESwTTVOs6pgmPh4TqeJWgJgsKYSYsA7Jgt8z5GZNI6R3KdbKvpaHE3I5kNPK03CK5hGH5Z3ZUNory6JPVc986WT3EmmS9odz1x4nQLRcpRuMvwWDu5WsFEAXIDyrdijCo8Vdmmf%2BazeC0jYGCyCO1q5MJbe%2Bg09g9q%2BqMZmOhEAsR38JOwoP9d9Lkwjw%2FnDVc%2BPREZpaWJS7zmCDDQcwf7~-1~-1~-1',false);
    console.log(a_sensor_data);
    //console.log(bmak_ke_vel);
    //console.log(bmak_me_vel);
    //console.log(bmak_te_vel);

};

//gen_sensor();
//console.log(bmak_ta);
//console.log(gen_mact_v2());
//console.log(bmak_ta);

module.exports.sensor_data = generate_sensor_data;