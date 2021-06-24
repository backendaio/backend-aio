const config = require('./px_config.json');
const {
    v4: uuidv4
} = require('uuid');
const {
    encode,
    decode
} = require('./px.js');

var site = 'walmart';
var PX851_px2 = null;
var tag = config[site]['tag'];
var ftag = config[site]['ftag'];
var appId = config[site]['appId'];
var user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36';
var uuid = uuidv4();
var Ef = 1638;
var Qv = 0;
var Wf = 0;
var Sf = 0;
var Mu = 0;
var qu = 48;
var $u = 57;
var nf = 10;
var Hd = 0;
var cC = 1;
var ev = '%uDB40%uDD';
var yf;
for (yf = [], wf = {}, Xf = 0; Xf < 256; Xf++)
    yf[Xf] = (Xf + 256).toString(16).substr(1), wf[yf[Xf]] = Xf;

gf = function() {
    var n = new Array(16);
    for (var t, e = 0; e < 16; e++)
        0 == (3 & e) && (t = 4294967296 * Math.random()), n[e] = t >>> ((3 & e) << 3) & 255;
    return n;
};

var bf = gf(),
    Af = [
        1 | bf[0],
        bf[1],
        bf[2],
        bf[3],
        bf[4],
        bf[5]
    ];

function Mi(n, t, e) {

    if (e) {

        return [
            e,
            n,
            t
        ].join(':');

    } else {

        return [
            Ad,
            n,
            t
        ].join(':');
    };
};

Gf = {
    cipher: "SHA512",
    len: 36
};

function w() {
    return +new Date();
};

function Ct(n, t) {
    var e = t || 0,
        r = yf;
    return r[n[e++]] + r[n[e++]] + r[n[e++]] + r[n[e++]] + '-' + r[n[e++]] + r[n[e++]] + '-' + r[n[e++]] + r[n[e++]] + '-' + r[n[e++]] + r[n[e++]] + '-' + r[n[e++]] + r[n[e++]] + r[n[e++]] + r[n[e++]] + r[n[e++]] + r[n[e++]];
};

function pt(n, t, r, o) {
    var a = '';
    if (o)
        try {
            for (var s = (new Date().getTime() * Math.random() + '').replace('.', '.'.charCodeAt()).split('').slice(-16), c = 0; c < s.length; c++)
                s[c] = parseInt(10 * Math.random()) * +s[c] || parseInt(Math.random() * Gf.len);
            a = Ct(s, 0, Gf.cipher);
        } catch (n) {}
    var u = t && r || 0,
        f = t || [];
    n = n || {};
    var l = void 0 !== n.clockseq ? n.clockseq : Ef,
        d = void 0 !== n.msecs ? n.msecs : w(),
        v = void 0 !== n.nsecs ? n.nsecs : Wf + 1,
        C = d - Sf + (v - Wf) / 10000;
    if (C < 0 && void 0 === n.clockseq && (l = l + 1 & 16383), (C < 0 || d > Sf) && void 0 === n.nsecs && (v = 0), v >= 10000)
        throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    Sf = d, Wf = v, Ef = l, d += 12219292800000;
    var p = (10000 * (268435455 & d) + v) % 4294967296;
    f[u++] = p >>> 24 & 255, f[u++] = p >>> 16 & 255, f[u++] = p >>> 8 & 255, f[u++] = 255 & p;
    var m = d / 4294967296 * 10000 & 268435455;
    f[u++] = m >>> 8 & 255, f[u++] = 255 & m, f[u++] = m >>> 24 & 15 | 16, f[u++] = m >>> 16 & 255, f[u++] = l >>> 8 | 128, f[u++] = 255 & l;
    for (var h = n.node || Af, G = 0; G < 6; G++)
        f[u + G] = h[G];
    var g = t || Ct(f);
    return a === g ? a : g;
};

function V(n, t) {
    var e = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (e >> 16) << 16 | 65535 & e;
};

function F(n, t) {
    return n << t | n >>> 32 - t;
};

function k(n, t, e, r, o, i) {
    return V(F(V(V(t, n), V(r, i)), o), e);
};

function O(n, t, e, r, o, i, a) {
    return k(t & e | ~t & r, n, t, o, i, a);
};

function x(n, t, e, r, o, i, a) {
    return k(t & r | e & ~r, n, t, o, i, a);
};

function N(n, t, e, r, o, i, a) {
    return k(t ^ e ^ r, n, t, o, i, a);
};

function R(n, t, e, r, o, i, a) {
    return k(e ^ (t | ~r), n, t, o, i, a);
};

function V(n, t) {
    var e = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (e >> 16) << 16 | 65535 & e;
};

function P(n, t) {
    n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;
    var e = void 0,
        r = void 0,
        o = void 0,
        i = void 0,
        a = void 0,
        s = 1732584193,
        c = -271733879,
        u = -1732584194,
        f = 271733878;
    for (e = 0; e < n.length; e += 16)
        r = s, o = c, i = u, a = f, s = O(s, c, u, f, n[e], 7, -680876936), f = O(f, s, c, u, n[e + 1], 12, -389564586), u = O(u, f, s, c, n[e + 2], 17, 606105819), c = O(c, u, f, s, n[e + 3], 22, -1044525330), s = O(s, c, u, f, n[e + 4], 7, -176418897), f = O(f, s, c, u, n[e + 5], 12, 1200080426), u = O(u, f, s, c, n[e + 6], 17, -1473231341), c = O(c, u, f, s, n[e + 7], 22, -45705983), s = O(s, c, u, f, n[e + 8], 7, 1770035416), f = O(f, s, c, u, n[e + 9], 12, -1958414417), u = O(u, f, s, c, n[e + 10], 17, -42063), c = O(c, u, f, s, n[e + 11], 22, -1990404162), s = O(s, c, u, f, n[e + 12], 7, 1804603682), f = O(f, s, c, u, n[e + 13], 12, -40341101), u = O(u, f, s, c, n[e + 14], 17, -1502002290), c = O(c, u, f, s, n[e + 15], 22, 1236535329), s = x(s, c, u, f, n[e + 1], 5, -165796510), f = x(f, s, c, u, n[e + 6], 9, -1069501632), u = x(u, f, s, c, n[e + 11], 14, 643717713), c = x(c, u, f, s, n[e], 20, -373897302), s = x(s, c, u, f, n[e + 5], 5, -701558691), f = x(f, s, c, u, n[e + 10], 9, 38016083), u = x(u, f, s, c, n[e + 15], 14, -660478335), c = x(c, u, f, s, n[e + 4], 20, -405537848), s = x(s, c, u, f, n[e + 9], 5, 568446438), f = x(f, s, c, u, n[e + 14], 9, -1019803690), u = x(u, f, s, c, n[e + 3], 14, -187363961), c = x(c, u, f, s, n[e + 8], 20, 1163531501), s = x(s, c, u, f, n[e + 13], 5, -1444681467), f = x(f, s, c, u, n[e + 2], 9, -51403784), u = x(u, f, s, c, n[e + 7], 14, 1735328473), c = x(c, u, f, s, n[e + 12], 20, -1926607734), s = N(s, c, u, f, n[e + 5], 4, -378558), f = N(f, s, c, u, n[e + 8], 11, -2022574463), u = N(u, f, s, c, n[e + 11], 16, 1839030562), c = N(c, u, f, s, n[e + 14], 23, -35309556), s = N(s, c, u, f, n[e + 1], 4, -1530992060), f = N(f, s, c, u, n[e + 4], 11, 1272893353), u = N(u, f, s, c, n[e + 7], 16, -155497632), c = N(c, u, f, s, n[e + 10], 23, -1094730640), s = N(s, c, u, f, n[e + 13], 4, 681279174), f = N(f, s, c, u, n[e], 11, -358537222), u = N(u, f, s, c, n[e + 3], 16, -722521979), c = N(c, u, f, s, n[e + 6], 23, 76029189), s = N(s, c, u, f, n[e + 9], 4, -640364487), f = N(f, s, c, u, n[e + 12], 11, -421815835), u = N(u, f, s, c, n[e + 15], 16, 530742520), c = N(c, u, f, s, n[e + 2], 23, -995338651), s = R(s, c, u, f, n[e], 6, -198630844), f = R(f, s, c, u, n[e + 7], 10, 1126891415), u = R(u, f, s, c, n[e + 14], 15, -1416354905), c = R(c, u, f, s, n[e + 5], 21, -57434055), s = R(s, c, u, f, n[e + 12], 6, 1700485571), f = R(f, s, c, u, n[e + 3], 10, -1894986606), u = R(u, f, s, c, n[e + 10], 15, -1051523), c = R(c, u, f, s, n[e + 1], 21, -2054922799), s = R(s, c, u, f, n[e + 8], 6, 1873313359), f = R(f, s, c, u, n[e + 15], 10, -30611744), u = R(u, f, s, c, n[e + 6], 15, -1560198380), c = R(c, u, f, s, n[e + 13], 21, 1309151649), s = R(s, c, u, f, n[e + 4], 6, -145523070), f = R(f, s, c, u, n[e + 11], 10, -1120210379), u = R(u, f, s, c, n[e + 2], 15, 718787259), c = R(c, u, f, s, n[e + 9], 21, -343485551), s = V(s, r), c = V(c, o), u = V(u, i), f = V(f, a);
    return [
        s,
        c,
        u,
        f
    ];
}

function _(n) {
    var t = void 0,
        e = [];
    for (e[(n.length >> 2) - 1] = void 0, t = 0; t < e.length; t += 1)
        e[t] = 0;
    for (t = 0; t < 8 * n.length; t += 8)
        e[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    return e;
};

function L(n) {
    var t = void 0,
        e = '';
    for (t = 0; t < 32 * n.length; t += 8)
        e += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
    return e;
};

function z(n, t) {
    return K(J(n, t));
};

function K(n) {
    var t = '0123456789abcdef',
        e = '',
        r = void 0,
        o = void 0;
    for (o = 0; o < n.length; o += 1)
        r = n.charCodeAt(o), e += t.charAt(r >>> 4 & 15) + t.charAt(15 & r);
    return e;
};

function Y(n) {
    return L(P(_(n), 8 * n.length));
};

function Z(n) {
    return Y(j(n));
};

function U(n, t) {
    var e = void 0,
        r = _(n),
        o = [],
        i = [];
    for (o[15] = i[15] = void 0, r.length > 16 && (r = P(r, 8 * n.length)), e = 0; e < 16; e += 1)
        o[e] = 909522486 ^ r[e], i[e] = 1549556828 ^ r[e];
    var a = P(o.concat(_(t)), 512 + 8 * t.length);
    return L(P(i.concat(a), 640));
};

function Q(n) {
    return K(Z(n));
};

function j(n) {
    return unescape(encodeURIComponent(n));
};

function $(n, t, r) {
    Mu++;
    var i = q(n, t, r);
    return i;
};

function q(n, t, e) {
    return t ? e ? J(t, n) : z(t, n) : e ? Z(n) : Q(n);
};

function J(n, t) {
    return U(j(n), j(t));
};

function jn(n) {
    for (var t = '', e = '', r = 0; r < n.length; r++) {
        var o = n.charCodeAt(r);
        o >= qu && o <= $u ? t += n[r] : e += o % nf;
    }
    return t + e;
};

function Kn(n, t) {
    var e = $(n, t);
    try {
        for (var r = jn(e), o = '', i = 0; i < r.length; i += 2)
            o += r[i];
        return o;
    } catch (n) {}
};

var Ad = pt();

function pc_gen(payload, px_tag, px_ftag, uuid) {

    if (uuid) {

        var Ad = uuid;

    };

    //console.log(Mi(px_tag, px_ftag, uuid));

    return Kn(payload, Mi(px_tag, px_ftag, uuid));

};

function G() {
    return ('undefined' != typeof JSON && 'function' == typeof JSON.stringify && void 0 === Array.prototype.toJSON ? JSON.stringify : a).apply(null, Array.prototype.slice.call(arguments));
};

function random(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
};

function random_decimal(){

    var random_number = Math.random() * random(5, 10) + '';
    random_number = random_number.slice(0,3);
    random_number = Number(random_number);

    if(random_number < 3){

        random_number = random_number + 3;

    };

    return random_number;
};

function Xo(n) {
    return (n || '').split('').reduce(function(n, t) {
        return n += unescape(ev + ('' + t.codePointAt(0).toString(16)).padStart(2, '0'));
    }, '');
};

function Yn(n) {
    return 'function' == typeof n && /\{\s*\[native code\]\s*\}/.test('' + n);
};

function lt(n, t) {
    for (var e = '', r = 0; r < n.length; r++)
        e += String.fromCharCode(t ^ n.charCodeAt(r));
    return e;
};

var au = 0;
var iu = 0;
//var PX234 = null;

function t(t) {
    return t && (au += performance.now() - t, iu += 1), {
        total: au,
        amount: iu
    };
};

function na() {
    //CC = window.chrome
    var CC = 'e0eaf10e';
    return CC;

};

async function gen_px359(){

    var px_359_value = await $(Ad, user_agent);
    return px_359_value;

};

async function gen_px2(px_sid, pxhd) {

    return new Promise(async(resolve,reject) => {

        try{

            var px2_payload = [];
            px2_payload[0] = {};
            px2_payload[0]['t'] = 'PX2';
            px2_payload[0]['d'] = {};
            //window.location && window.location.href
            var PX96 = config[site]['url'];
            //navigator.platform
            var PX63 = 'MacIntel';
            //window.self === window.top ? 0 : 1
            var PX191 = 0;
            var PX850 = Hd;
            Hd++;
            var PX851 = random(1000, 2500);
            PX851_px2 = PX851;
            var PX1008 = 3600;
            var PX1055 = Date.now();
            var PX1056 = PX1055 + random(2, 3);
            var PX1038 = uuid;
            var PX371 = true;
            px2_payload[0]['d']['PX96'] = PX96;
            px2_payload[0]['d']['PX63'] = PX63;
            px2_payload[0]['d']['PX191'] = PX191;
            px2_payload[0]['d']['PX850'] = PX850;
            px2_payload[0]['d']['PX851'] = PX851;
            px2_payload[0]['d']['PX1008'] = PX1008;
            px2_payload[0]['d']['PX1055'] = PX1055;
            px2_payload[0]['d']['PX1056'] = PX1056;
            px2_payload[0]['d']['PX1038'] = PX1038;
            px2_payload[0]['d']['PX371'] = PX371;
            px2_payload = G(px2_payload);
            var px2_encoded_payload = await encode(JSON.parse(px2_payload));

            var px2_final_payload = [];
            px2_final_payload[0] = 'payload=' + px2_encoded_payload;
            px2_final_payload[1] = 'appId=' + appId;
            px2_final_payload[2] = 'tag=' + tag;
            px2_final_payload[3] = 'uuid=' + uuid;
            px2_final_payload[4] = 'ft=' + ftag;
            px2_final_payload[5] = 'seq=' + Qv;
            Qv++;
            px2_final_payload[6] = 'en=' + 'NTA';
            //console.log(uuid);
            var pc = await pc_gen(px2_payload, tag, ftag, uuid);
            px2_final_payload[7] = 'pc=' + pc;
            //var sid = '57108c80-cfd8-11eb-9286-f965935e4b0f';
            var sid = await uuidv4();
            var C = Xo(void 0);

            if (sid) {

                sid = px_sid;

            };
            px2_final_payload[8] = 'sid=' + sid + C;
            index = 8;
            index++;
            //var vid = 'dba2d645-c2db-11eb-bdfc-0242ac120008';
            //px2_final_payload[9] = 'vid=' + vid;
            //index++;

            if (pxhd) {

                index++;
                px2_final_payload[index] = 'pxhd=' + pxhd;

            };

            //index++;
            px2_final_payload[index] = 'rsc=' + cC;
            cC++;
            //console.log(px2_final_payload);
            px2_final_payload = px2_final_payload.join('&');

            resolve(px2_final_payload);

        } catch {

            reject('error')
        };
    });

};

//module.exports.gen_px2 = gen_px2;

async function gen_px3() {

    return new Promise(async (resolve,reject) => {

        try{

            //var px3_payload = [];
            px3_payload[0] = {};
            px3_payload[0]['t'] = 'PX3';
            px3_payload[0]['d'] = {};
            //!!window.spawn
            var PX234 = false;
            //!!window.emit
            var PX235 = false;
            //window.hasOwnProperty('webdriver')
            var PX151 = false;
            //!!window._Selenium_IDE_Recorder
            var PX239 = false;
            //!!document.__webdriver_script_fn
            var PX240 = false;
            //!!window.domAutomation || !!window.domAutomationController
            var PX152 = false;
            //!!window._phantom || !!window.callPhantom
            var PX153 = false;
            //!!window.geb
            var PX314 = false;
            //!!window.awesomium
            var PX192 = false;
            //Yn(window.RunPerfTest)
            var PX196 = false;
            //!!window.fmget_targets
            var PX207 = false;
            //!!window.__nightmare
            var PX251 = false;
            var PX982 = Date.now();
            //window.screen && +screen.colorDepth
            var PX229 = 24; 
            //screen && +screen.pixelDepth
            var PX230 = 24;
            //window.screen && window.screen.width
            var PX91 = 1920;
            //window.screen && window.screen.height 
            var PX92 = 1080;
            //window.screen && window.screen.availWidth
            var PX269 = 1920;
            //window.screen && window.screen.availHeight
            var PX270 = 1055;
            var PX93 = PX91 + 'X' + PX92;
            //window.innerHeight 
            var PX185 = 976;
            //window.innerWidth
            var PX186 = 298;
            //window.scrollX || window.pageXOffset || 0
            var PX187 = 0;
            //window.scrollY || window.pageYOffset || 0
            var PX188 = 0;
            //!(0 === window.outerWidth && 0 === window.outerHeight)
            var PX95 = true;
            var PX400 = 111;
            var PX404 = '144|54|54|180|68';
            var PX90_value = [ 'loadTimes', 'csi', 'app', 'runtime' ];
            var PX90 = PX90_value;
            //window.chrome && window.chrome.runtime && window.chrome.runtime.id || ''
            var PX190 = '';
            var PX552 = 'false';
            var PX399 = PX552;
            var PX549 = 1;
            var PX411 = PX549;
            //!!window.caches
            var PX405 = true;
            var PX547 = PX405;
            var PX134 = true;
            var PX89 = PX134;
            //navigator.plugins.length
            var PX170 = 3;
            var PX85_value = [ 'Chrome PDF Plugin', 'Chrome PDF Viewer', 'Native Client' ]; 
            var PX85 = PX85_value;
            var PX59 = user_agent;
            //navigator.language
            var PX61 = 'en';
            var PX313_value = [ 'en' ]; 
            var PX313 = PX313_value;
            //navigator.platform
            var PX63 = 'MacIntel';
            //!!(navigator.doNotTrack || null === navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack)
            var PX86 = true;
            //new Date().getTimezoneOffset()
            var PX154 = 240;
            //navigator.deviceMemory
            var PX1157 = 8;
            var PX133 = true;
            var PX88 = PX133;
            //navigator.mimeTypes && navigator.mimeTypes.length || -1
            var PX169 = 4;
            //navigator.product
            var PX62 = 'Gecko';
            //navigator.productSub
            var PX69 = '20030107';
            //navigator.appVersion
            var PX64 = '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36';
            //navigator.appName
            var PX65 = 'Netscape';
            //navigator.appCodeName
            var PX66 = 'Mozilla';
            //navigator.permissions && navigator.permissions.query && 'query' === navigator.permissions.query.name
            var PX1144 = true;
            //navigator.connection.downlink
            var PX1152 = await random_decimal();
            //navigator.connection.rtt
            var PX1153 = 250;
            //navigator.connection.saveData
            var PX1154 = false;
            //navigator.connection.effectiveType
            var PX1155 = '4g';
            //'onLine' in navigator && !0 === navigator.onLine
            var PX60 = true;
            //navigator.geolocation + '' == '[object Geolocation]'
            var PX87 = true;
            //window.performance.memory.jsHeapSizeLimit
            var PX821 = 4294705152;
            //window.performance.memory.totalJSHeapSize
            var PX822 = 26147686;
            //window.performance.memory.usedJSHeapSize
            var PX823 = 23814378;
            //!!window.ActiveXObject
            var PX147 = false;
            var PX155 = Date().toString();
            //!!window.Buffer
            var PX236 = false;
            //!!window.v8Locale
            var PX194 = false;
            //!!navigator.sendBeacon
            var PX195 = true;
            //return 'number' == typeof navigator.maxTouchPoints ? navigator.maxTouchPoints : 'number' == typeof navigator.msMaxTouchPoints ? navigator.msMaxTouchPoints : void 0
            var PX237 = 0;
            //navigator.msDoNotTrack || 'missing'
            var PX238 = 'missing';
            var PX208 = 'visible';
            //+document.documentMode || 0
            var PX218 = 0;
            //+window.outerHeight || 0
            var PX231 = 1055;
            //+window.outerWidth || 0,
            var PX232 = 1539;
            //!!window.showModalDialog
            var PX254 = false;
            var PX295 = false;
            //window.hasOwnProperty('ontouchstart') || !!window.ontouchstart
            var PX268 = false;
            var PX166 = true;
            var PX138 = true;
            var PX143 = true;
            var PX1142 = 6;
            var PX1143 = 17;
            var PX1146 = 0;
            var PX1147 = 2;
            var PX714 = '64556c77';
            var PX715 = '';
            var PX724 = '10207b2f';
            var PX725 = '10207b2f';
            var PX729 = '90e65465';
            //!!window.isSecureContext
            var PX443 = true;
            //!!window.Worklet
            var PX466 = true;
            //!!window.AudioWorklet
            var PX467 = true;
            //!!window.AudioWorkletNode
            var PX468 = true;
            var PX191 = 0;
            var PX94 = 2;
            var PX120_value = [];
            var PX120 = PX120_value;
            //window.hasOwnProperty('onorientationchange') || !!window.onorientationchange
            var PX141 = false;
            var PX96 = config[site]['url']; 
            var PX55 = '';
            var PX1065 = 1;
            var PX850 = 1;
            var PX851_px3 = PX851_px2 + await random(100, 500);
            var PX851 = PX851_px3;
            var PX1055 = Date.now();
            var PX1054 = PX1055 + await random(100, 500);
            var PX1056 = PX1054 + await random(1000, 2000);
            var PX1008 = 3600;
            var PX1038 = uuid;
            var PX371 = true;
            px3_payload[0]['d']['PX234'] = PX234;
            px3_payload[0]['d']['PX235'] = PX235;
            px3_payload[0]['d']['PX151'] = PX151;
            px3_payload[0]['d']['PX239'] = PX239;
            px3_payload[0]['d']['PX240'] = PX240;
            px3_payload[0]['d']['PX152'] = PX152;
            px3_payload[0]['d']['PX153'] = PX153;
            px3_payload[0]['d']['PX314'] = PX314;
            px3_payload[0]['d']['PX192'] = PX192;
            px3_payload[0]['d']['PX196'] = PX196;
            px3_payload[0]['d']['PX207'] = PX207;
            px3_payload[0]['d']['PX251'] = PX251;
            px3_payload[0]['d']['PX982'] = PX982;
            px3_payload[0]['d']['PX983'] = PX983;
            px3_payload[0]['d']['PX983'] = px3_payload[0]['d']['PX983'].substring(0, 80);
            px3_payload[0]['d'][lt(px3_payload[0]['d']['PX983'], px3_payload[0]['d']['PX982'] % 10 + 2)] = lt(px3_payload[0]['d']['PX983'], px3_payload[0]['d']['PX982'] % 10 + 1);
            px3_payload[0]['d']['PX986'] = PX986;
            px3_payload[0]['d']['PX985'] = PX985;
            px3_payload[0]['d']['PX1033'] = 'e0eaf10e';
            px3_payload[0]['d']['PX1019'] = 'd1917ca4';
            px3_payload[0]['d']['PX1020'] = '7766a52d';
            px3_payload[0]['d']['PX1021'] = '64ba5649';
            px3_payload[0]['d']['PX1022'] = '6a90378d';
            //webdriver , navigator.webdriver
            px3_payload[0]['d']['PX1035'] = true;
            px3_payload[0]['d']['PX1139'] = false;
            px3_payload[0]['d']['PX1025'] = false;
            px3_payload[0]['d']['PX359'] = await gen_px359();
            px3_payload[0]['d']['PX943'] = PX943;
            px3_payload[0]['d']['PX357'] = PX357;
            px3_payload[0]['d']['PX358'] = PX358;
            px3_payload[0]['d']['PX229'] = PX229;
            px3_payload[0]['d']['PX230'] = PX230;
            px3_payload[0]['d']['PX91'] = PX91;
            px3_payload[0]['d']['PX92'] = PX92;
            px3_payload[0]['d']['PX269'] = PX269;
            px3_payload[0]['d']['PX270'] = PX270;
            px3_payload[0]['d']['PX93'] = PX93;
            px3_payload[0]['d']['PX185'] = PX185;
            px3_payload[0]['d']['PX186'] = PX186;
            px3_payload[0]['d']['PX187'] = PX187;
            px3_payload[0]['d']['PX188'] = PX188;
            px3_payload[0]['d']['PX95'] = PX95;
            px3_payload[0]['d']['PX400'] = PX400;
            px3_payload[0]['d']['PX404'] = PX404;
            px3_payload[0]['d']['PX90'] = PX90;
            px3_payload[0]['d']['PX190'] = PX190;
            px3_payload[0]['d']['PX552'] = PX552;
            px3_payload[0]['d']['PX399'] = PX399;
            px3_payload[0]['d']['PX549'] = PX549;
            px3_payload[0]['d']['PX411'] = PX411;
            px3_payload[0]['d']['PX405'] = PX405;
            px3_payload[0]['d']['PX547'] = PX547;
            px3_payload[0]['d']['PX134'] = PX134;
            px3_payload[0]['d']['PX89'] = PX89;
            px3_payload[0]['d']['PX170'] = PX170;
            px3_payload[0]['d']['PX85'] = PX85;
            px3_payload[0]['d']['PX59'] = PX59;
            px3_payload[0]['d']['PX61'] = PX61;
            px3_payload[0]['d']['PX313'] = PX313;
            px3_payload[0]['d']['PX63'] = PX63;
            px3_payload[0]['d']['PX86'] = PX86;
            px3_payload[0]['d']['PX154'] = PX154;
            px3_payload[0]['d']['PX1157'] = PX1157;
            px3_payload[0]['d']['PX133'] = PX133;
            px3_payload[0]['d']['PX88'] = PX88;
            px3_payload[0]['d']['PX169'] = PX169;
            px3_payload[0]['d']['PX62'] = PX62;
            px3_payload[0]['d']['PX69'] = PX69;
            px3_payload[0]['d']['PX64'] = PX64;
            px3_payload[0]['d']['PX65'] = PX65;
            px3_payload[0]['d']['PX66'] = PX66;
            px3_payload[0]['d']['PX1144'] = PX1144;
            px3_payload[0]['d']['PX1152'] = PX1152;
            px3_payload[0]['d']['PX1154'] = PX1154;
            px3_payload[0]['d']['PX1155'] = PX1155;
            px3_payload[0]['d']['PX60'] = PX60;
            px3_payload[0]['d']['PX87'] = PX87;
            px3_payload[0]['d']['PX821'] = PX821;
            px3_payload[0]['d']['PX822'] = PX822;
            px3_payload[0]['d']['PX823'] = PX823;
            px3_payload[0]['d']['PX147'] = PX147;
            px3_payload[0]['d']['PX155'] = PX155;
            px3_payload[0]['d']['PX236'] = PX236;
            px3_payload[0]['d']['PX194'] = PX194;
            px3_payload[0]['d']['PX195'] = PX195;
            px3_payload[0]['d']['PX237'] = PX237;
            px3_payload[0]['d']['PX238'] = PX238;
            px3_payload[0]['d']['PX208'] = PX208;
            px3_payload[0]['d']['PX218'] = PX218;
            px3_payload[0]['d']['PX231'] = PX231;
            px3_payload[0]['d']['PX232'] = PX232;
            px3_payload[0]['d']['PX254'] = PX254;
            px3_payload[0]['d']['PX295'] = PX295;
            px3_payload[0]['d']['PX268'] = PX268;
            px3_payload[0]['d']['PX166'] = PX166;
            px3_payload[0]['d']['PX138'] = PX138;
            px3_payload[0]['d']['PX143'] = PX143;
            px3_payload[0]['d']['PX1142'] = PX1142;
            px3_payload[0]['d']['PX1143'] = PX1143;
            px3_payload[0]['d']['PX1146'] = PX1146;
            px3_payload[0]['d']['PX1147'] = PX1147;
            px3_payload[0]['d']['PX714'] = PX714;
            px3_payload[0]['d']['PX715'] = PX715;
            px3_payload[0]['d']['PX724'] = PX724;
            px3_payload[0]['d']['PX725'] = PX725;
            px3_payload[0]['d']['PX729'] = PX729;
            px3_payload[0]['d']['PX443'] = PX443;
            px3_payload[0]['d']['PX466'] = PX466;
            px3_payload[0]['d']['PX467'] = PX467;
            px3_payload[0]['d']['PX468'] = PX468;
            px3_payload[0]['d']['PX191'] = PX191;
            px3_payload[0]['d']['PX94'] = PX94;
            px3_payload[0]['d']['PX120'] = PX120;
            px3_payload[0]['d']['PX141'] = PX141;
            px3_payload[0]['d']['PX96'] = PX96;
            px3_payload[0]['d']['PX55'] = PX55;
            px3_payload[0]['d']['PX1065'] = PX1065;
            px3_payload[0]['d']['PX850'] = PX850;
            px3_payload[0]['d']['PX851'] = PX851;
            px3_payload[0]['d']['PX1054'] = PX1054;
            px3_payload[0]['d']['PX1008'] = PX1008;
            px3_payload[0]['d']['PX1055'] = PX1055;
            px3_payload[0]['d']['PX1056'] = PX1056;
            px3_payload[0]['d']['PX1038'] = PX1038;
            px3_payload[0]['d']['PX371'] = PX371;

            //console.log(px3_payload);

            px3_payload = await G(px3_payload);
            var px3_encoded_payload = await encode(JSON.parse(px3_payload));

            var px3_final_payload = [];
            px3_final_payload[0] = 'payload=' + px3_encoded_payload;
            px3_final_payload[1] = 'appId=' + appId;
            px3_final_payload[2] = 'tag=' + tag;
            px3_final_payload[3] = 'uuid=' + uuid;
            px3_final_payload[4] = 'ft=' + ftag;
            px3_final_payload[5] = 'seq=' + Qv;
            Qv++;
            px3_final_payload[6] = 'en=' + 'NTA';
            px3_final_payload[7] = 'cs=' + cs;
            var pc = await pc_gen(px3_payload, tag, ftag, uuid);
            px3_final_payload[8] = 'pc=' + pc;
            px3_final_payload[9] = 'sid=' + sid;
            px3_final_payload[10] = 'vid=' + vid;
            px3_final_payload[11] = 'rsc=' + cC;

            px3_final_payload = px3_final_payload.join('&');

            resolve(px3_final_payload);

        } catch {

            reject('error');
        };
    });

};

//gen_px3();
var px3_payload = [];
var cls = null;
var PX983 = null;
var PX986 = null;
var drc = null;
var PX985 = null;
var wcs = null;
var PX943 = null;
var vid = null;
var PX357 = null;
var PX358 = null; 
var sid = null;
var cs = null;

function gen_px358(){

    PX358 = $(sid, user_agent);
    //console.log(PX358);

};

function gen_px357(px357_data){

    px357_data = px357_data.slice(4);
    px357_data = px357_data.split('|');
    PX357 = $(px357_data[0], user_agent);

    //console.log(PX357);
};

function gen_px943(px943_data){

    px943_data = px943_data.slice(4);
    PX943 = px943_data;

};

function gen_px983(px983_data) {

    px983_data = px983_data.slice(4);
    px983_data = px983_data.split('|');
    PX983 = px983_data[0];
    //console.log(px3_payload);
    //n[lt(n[t('PX983')], n[t('PX982')] % 10 + 2)] = lt(n[t('PX983')], n[t('PX982')] % 10 + 1)

    //console.log(PX983);

};

function gen_px986(px986_data) {

    px986_data = px986_data.slice(4);
    px986_data = px986_data.split('|');
    PX986 = px986_data[1];

};

function gen_px985(px985_data) {

    px985_data = px985_data.slice(4);
    //px985_data = px985_data.split('|');
    PX985 = parseInt(px985_data);

};

class px {

    //async gen_px2() {

    //    return await gen_px2();

    //};

    //async gen_px3() {

    //    return await gen_px3();

    //};

    set_cls(payload_data) {

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('cls'));
        cls = payload_data;
        gen_px983(cls);
        gen_px986(cls);
        //gen_px3();

    };

    set_drc(payload_data) {

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('drc'));
        drc = payload_data;
        gen_px985(drc);

    };

    set_wcs(payload_data) {

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('wcs'));
        wcs = payload_data;
        gen_px943(wcs);

    };

    set_vid(payload_data){

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('vid'));
        vid = payload_data;    
        gen_px357(vid);

    };

    set_sid(payload_data){

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('sid'));
        payload_data = payload_data.slice(4);
        sid = payload_data;
        gen_px358();

    };

    set_cs(payload_data){

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('cs'));
        payload_data = payload_data.slice(3);
        cs = payload_data;

    };

};

module.exports.px = px;
module.exports.px3 = gen_px3;
module.exports.px2 = gen_px2;