const config = require('./px_config.json');
const { v4: uuidv4 } = require('uuid');
const { encode, decode } = require('./px.js');

var sid = uuidv4();
var site = 'walmart';
var PX851_px2 = null;
var tag = config[site]['tag'];
var ftag = config[site]['ftag'];
var appId = config[site]['appId'];
var user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36';
var user_agent_version = '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36';
//var uuid = uuidv4();
//var uuid = pt();
var uuid = null;
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

function pc_gen(payload, px_tag, px_ftag, uuid_arg) {

    if (uuid) {

        var Ad = uuid_arg;

    };

    //console.log(Mi(px_tag, px_ftag, uuid));

    return Kn(payload, Mi(px_tag, px_ftag, uuid_arg));

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

var PX850 = 0;

async function gen_px2(pxhd_value) {

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
    //var PX850 = Hd;
    Hd++;
    var PX851 = random(1000, 2500);
    PX851_px2 = PX851;
    var PX1008 = 3600;
    var PX1055 = Date.now();
    var PX1056 = PX1055 + random(2, 3);
    uuid = await pt();
    //uuid = await uuidv4();
    var PX1038 = uuid;
    var PX371 = true;
    px2_payload[0]['d']['PX96'] = PX96;
    px2_payload[0]['d']['PX63'] = PX63;
    px2_payload[0]['d']['PX191'] = PX191;
    px2_payload[0]['d']['PX850'] = PX850;
    PX850++;
    px2_payload[0]['d']['PX851'] = PX851;
    px2_payload[0]['d']['PX1008'] = PX1008;
    px2_payload[0]['d']['PX1055'] = PX1055;
    px2_payload[0]['d']['PX1056'] = PX1056;
    px2_payload[0]['d']['PX1038'] = PX1038;
    px2_payload[0]['d']['PX371'] = PX371;
    //console.log(px2_payload);
    //var pc = await pc_gen(px2_payload, tag, ftag, uuid);
    //console.log(pc);
    px2_payload = G(px2_payload);
    var pc = await pc_gen(px2_payload, tag, ftag, uuid);
    //console.log(pc);
    var px2_encoded_payload = await encode(JSON.parse(px2_payload));

    var px2_final_payload = [];
    var index = 0;
    px2_final_payload[index] = 'payload=' + px2_encoded_payload;
    index++;
    px2_final_payload[index] = 'appId=' + appId;
    index++;
    px2_final_payload[index] = 'tag=' + tag;
    index++;
    px2_final_payload[index] = 'uuid=' + uuid;
    index++;
    px2_final_payload[index] = 'ft=' + ftag;
    index++;
    px2_final_payload[index] = 'seq=' + Qv;
    index++;
    Qv++;
    px2_final_payload[index] = 'en=' + 'NTA';
    index++;
    //console.log(uuid);
    //var pc = await pc_gen(px2_payload, tag, ftag, uuid);
    px2_final_payload[index] = 'pc=' + pc;
    index++;
    //var sid = '57108c80-cfd8-11eb-9286-f965935e4b0f';
    //var sid = await uuidv4();
    var C = Xo(void 0);

    //if (sid) {

    //    sid = px_sid;

    //};
    //px2_final_payload[8] = 'sid=' + sid + C;
    px2_final_payload[index] = 'sid=' + sid;
    index++;
    //var vid = 'dba2d645-c2db-11eb-bdfc-0242ac120008';
    //px2_final_payload[9] = 'vid=' + vid;
    //index++;

    //if (pxhd) {

    //    index++;
    //    px2_final_payload[index] = 'pxhd=' + pxhd;

    //};

    //index++;

    if(pxhd_value){

        px2_final_payload[index] = 'pxhd=' + pxhd_value;
        index++;

    };

    px2_final_payload[index] = 'rsc=' + cC;
    index++;
    cC++;
    //console.log(px2_final_payload);
    px2_final_payload = px2_final_payload.join('&');

    return px2_final_payload;

};

//gen_px2();

//module.exports.gen_px2 = gen_px2;

var device_height = null; 
var device_width = null;

async function gen_px3(pxhd_value) {

    var px3_payload = [];
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

    var screen_width = [1366,1920,2560,3840,1024,960,1024,1024,1136,1138,1024,1024,1152,1152,1280,1120,1280,1152,1024,1366,1280,1280,1600,1080,1440,1280,1440,1600,1400,1440,1440,1600,1680,1776,1600,1600,1440,2048,1920,2160,2048,1792,1920,2280,1856,1800,2880,2160,2048,1920,2436,2538,1920,2560,2160,2048,2304,2256,2304,2560,2880,2960,2560,2560,2880,2560,3440,2736,2880,2560,2732,3200,2800,3000,3840,3200,3240,3200,3840,3840];
    var screen_height = [768,1080, 1440, 2160,576,640,600,640,640,640,768,800,720,768,720,832,768,900,1024,768,854,960,768,1200,900,1024,960,900,1050,1024,1080,1024,1050,1000,1200,1280,1440,1080,1200,1080,1152,1344,1280,1080,1392,1440,900,1200,1280,1400,1125,1080,1440,1080,1440,1536,1440,1504,1728,1600,1440,1440,1700,1800,1620,1920,1440,1824,1800,2048,2048,1800,2100,2000,1600,2048,2160,2400,2160,2400];

    var random_index = random(0, screen_width.length - 1);
    //window.screen && window.screen.width
    //var PX91 = 1920;
    var PX91 = screen_width[random_index];
    device_width = PX91;
    //window.screen && window.screen.height 
    //var PX92 = 1080;
    var PX92 = screen_height[random_index];
    device_height = PX92;
    //window.screen && window.screen.availWidth
    //var PX269 = 1920;
    var PX269 = PX91;
    //window.screen && window.screen.availHeight
    //var PX270 = 1055;
    var PX270 = random(0, PX92);
    var PX93 = PX91 + 'X' + PX92;
    //window.innerHeight 
    //var PX185 = 976;
    var PX185 = random(0, PX92);
    //window.innerWidth
    //var PX186 = 298;
    var PX186 = random(0, PX91);
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
    //var PX208 = 'hidden';
    //+document.documentMode || 0
    var PX218 = 0;
    //+window.outerHeight || 0
    //var PX231 = 1055;
    var PX231 = 0;
    //+window.outerWidth || 0,
    //var PX232 = 1539;
    var PX232 = 0;
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

    if(site == 'walmart'){

        var PX55 = 'https%3A%2F%2Fwww.walmart.com%2F';

    };
    //var PX55 = 'https%3A%2F%2Fwww.walmart.com%2Fblocked%3Furl%3DLw%3D%3D%26uuid%3D107d1640-d24d-11eb-ad91-d50adee0d56b%26vid%3D%26g%3Da';
    var PX1065 = 2;
    //var PX850 = 1;
    var PX851_px3 = PX851_px2 + await random(100, 500);
    var PX851 = PX851_px3;
    var PX1055 = Date.now();
    var PX1054 = PX1055 + await random(100, 500);
    var PX1056 = PX1054 + await random(2000, 5000);
    var PX1008 = 3600;
    var PX1038 = uuid;
    var PX371 = true;
    //console.log(sid);
    await gen_px358(sid);
    //console.log(PX358);
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
    px3_payload[0]['d'][await lt(PX983, PX982 % 10 + 2)] = await lt(PX983, PX982 % 10 + 1);
    //px3_payload[0]['d'][lt(px3_payload[0]['d']['PX983'], px3_payload[0]['d']['PX982'] % 10 + 2)] = lt(px3_payload[0]['d']['PX983'], px3_payload[0]['d']['PX982'] % 10 + 1);
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
    px3_payload[0]['d']['PX1153'] = PX1153;
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
    PX850++;
    px3_payload[0]['d']['PX851'] = PX851;
    px3_payload[0]['d']['PX1054'] = PX1054;
    px3_payload[0]['d']['PX1008'] = PX1008;
    px3_payload[0]['d']['PX1055'] = PX1055;
    px3_payload[0]['d']['PX1056'] = PX1056;
    px3_payload[0]['d']['PX1038'] = PX1038;
    px3_payload[0]['d']['PX371'] = PX371;

    //console.log(px3_payload);
    //var string = '';
    //Object.keys(px3_payload[0]['d']).map(b => {
    //    string += b;
   // });

    //console.log(string);
    //var px4_payload = await gen_px4(); 
    //px4_payload = px4_payload[0];
    //px3_payload[1] = px4_payload;

    px3_payload = await G(px3_payload);
    var px3_encoded_payload = await encode(JSON.parse(px3_payload));
   //var px3_encoded_payload = await encode(J(px3_payload));
    //var px3_encoded_payload = await encode(px3_payload);
    //console.log(px3_encoded_payload);

    var px3_final_payload = [];
    var index = 0;
    px3_final_payload[index] = 'payload=' + px3_encoded_payload;
    index++;
    px3_final_payload[index] = 'appId=' + appId;
    index++;
    px3_final_payload[index] = 'tag=' + tag;
    index++;
    px3_final_payload[index] = 'uuid=' + uuid;
    index++;
    px3_final_payload[index] = 'ft=' + ftag;
    index++;
    px3_final_payload[index] = 'seq=' + Qv;
    index++;
    Qv++;
    px3_final_payload[index] = 'en=' + 'NTA';
    index++;
    px3_final_payload[index] = 'cs=' + cs;
    index++;
    var pc = await pc_gen(px3_payload, tag, ftag, uuid);
    px3_final_payload[index] = 'pc=' + pc;
    index++;
    px3_final_payload[index] = 'sid=' + sid;
    index++;
    px3_final_payload[index] = 'vid=' + vid;
    index++;

    if(pxhd_value){

        px3_final_payload[index] = 'pxhd=' + pxhd_value;
        index++;

    };

    px3_final_payload[index] = 'rsc=' + cC;
    cC++;
    index++;

    //console.log(px3_final_payload);

    px3_final_payload = px3_final_payload.join('&');
    //console.log(px3_final_payload);

    return px3_final_payload;
    //return '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';

};

async function gen_px4(){

    //fingerprint
    var PX31 = '126.86972440223326';
    //fingerprint
    var PX32 = '27b270acee10b8447252ef697b31bccb';
    //fingerprint
    var PX274 = 'eed6fd621f5ff8671939d064714b6a10';
    //fingerprint
    var PX275 = true;
    var PX441 = [];
    //fingerprint
    var PX276 = 'd1ded3c52bfe4f18e9a239efafd2b6e6';
    var PX440 = [];
    //webglRenderer
    var PX210 = 'WebKit WebGL';
    //webglVendor
    var PX209 = 'WebKit';
    //webGLVersion
    var PX277 = 'WebGL 1.0 (OpenGL ES 2.0 Chromium)';
    var PX281 = [
      'ANGLE_instanced_arrays',
      'EXT_blend_minmax',
      'EXT_color_buffer_half_float',
      'EXT_float_blend',
      'EXT_texture_filter_anisotropic',
      'WEBKIT_EXT_texture_filter_anisotropic',
      'OES_element_index_uint',
      'OES_fbo_render_mipmap',
      'OES_standard_derivatives',
      'OES_texture_float',
      'OES_texture_float_linear',
      'OES_texture_half_float',
      'OES_texture_half_float_linear',
      'OES_vertex_array_object',
      'WEBGL_color_buffer_float',
      'WEBGL_compressed_texture_etc',
      'WEBGL_compressed_texture_etc1',
      'WEBGL_compressed_texture_s3tc',
      'WEBKIT_WEBGL_compressed_texture_s3tc',
      'WEBGL_debug_renderer_info',
      'WEBGL_debug_shaders',
      'WEBGL_depth_texture',
      'WEBKIT_WEBGL_depth_texture',
      'WEBGL_draw_buffers',
      'WEBGL_lose_context',
      'WEBKIT_WEBGL_lose_context',
      'WEBGL_multi_draw'
    ];
    var PX282 = [
      '[1, 1]', '[0.125, 8192]', 8,              'yes',
      8,        24,              8,              16,
      32,       8192,            261,            8192,
      16,       8192,            32,             32,
      16,       256,             '[8192, 8192]', 'no_fp',
      23,       127,             127,            23,
      127,      127,             23,             127,
      127,      23,              127,            127,
      23,       127,             127,            23,
      127,      127,             23,             127,
      127,      23,              127,            127,
      23,       127,             127,            23,
      127,      127,             23,             127,
      127,      23,              127,            127
    ];
    //unmaskedRenderer
    var PX280 = 'Google SwiftShader';
    //unmaskedVendor
    var PX279 = 'Google Inc.';
    //shadingLangulageVersion
    var PX278 = 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)';
    var PX33 = await random(180, 250);
    //i[o('PX248')] = Gs(window.document), i[o('PX249')] = Gs(window)

    if(random(0,5) > 3){

        var PX248 = [ '__reactEvents$18bedvhzlo' ];
        var PX249 =  [
          '__REDUX_DEVTOOLS_EXTENSION__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
          '_tsConfig',
          '_pxAppId',
          '_typeof',
          '__core-js_shared__',
          '_gtm',
          '_uxa',
          '_babelPolyfill',
          '_szbF5p84handler',
          '_scq',
          '_scwebpersonalization',
          '_jelly_sdks',
          '___FONT_AWESOME___',
          '_fbq'
        ];

    } else {

        var PX248 = [];
        var PX249 = [
          '__REDUX_DEVTOOLS_EXTENSION__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
          '$jscomp',
          '_initializeWebVitals',
          '_loadCookieConfig',
          '_domready',
          '_delayed',
          '_findTags',
          '_srcAttr',
          '_loadFromDOM',
          '_abTest',
          '_getCookieVariant',
          '_setCookieVariant',
          '_configureAbTestAnalytics',
          '_executeAllAbTest',
          '_executeAllAbTestUniversal',
          '_executeAllAbTestClassic',
          '_executeAbTest',
          '_abTestScript',
          '_chooseVariant',
          '_abTestAnalyticsUniversal',
          '_abTestAnalyticsClassic',
          '_pxAppId',
          '__extends',
          '$',
          '_fbq',
          '__core-js_shared__',
          '__attnLoaded',
          '__attentive_domain',
          '__attentive'
        ];

    };

    if(site == 'snipes'){

        var PX57 = `TypeError: Cannot read property '0' of null at xt (https://www.snipesusa.com/${appId}/init.js:2:14678) at Zt (https://www.snipesusa.com/${appId}/init.js:2:14840) at fl (https://www.snipesusa.com/${appId}/init.js:4:14921) at https://www.snipesusa.com/${appId}/init.js:4:16660 at OfflineAudioContext.Da.n.oncomplete (https://www.snipesusa.com/${appId}/init.js:4:6713)`;

    } else {

        var PX57 = '';

    };

    //'eval' in window ? (eval + '').length : -1;
    var PX264 = 33;
    //ms(window)
    var PX266 = 'e40cdc0019e00858f02ff4f7a1c46385';
    var PX265 = true;
    var PX1156 = [
      'Andale Mono',
      'Arial',
      'Arial Black',
      'Arial Hebrew',
      'Arial Narrow',
      'Arial Rounded MT Bold',
      'Arial Unicode MS',
      'Comic Sans MS',
      'Courier',
      'Courier New',
      'Geneva',
      'Georgia',
      'Helvetica',
      'Helvetica Neue',
      'Impact',
      'LUCIDA GRANDE',
      'Microsoft Sans Serif',
      'Monaco',
      'Palatino',
      'Tahoma',
      'Times',
      'Times New Roman',
      'Trebuchet MS',
      'Verdana',
      'Wingdings',
      'Wingdings 2',
      'Wingdings 3',
      'Academy Engraved LET',
      'American Typewriter',
      'Apple Chancery',
      'Apple Color Emoji',
      'Apple SD Gothic Neo',
      'AVENIR',
      'Ayuthaya',
      'Bangla Sangam MN',
      'Baskerville',
      'Big Caslon',
      'Bodoni 72',
      'Bodoni 72 Oldstyle',
      'Bodoni 72 Smallcaps',
      'Bradley Hand',
      'Brush Script MT',
      'Chalkboard',
      'Chalkboard SE',
      'Chalkduster',
      'Cochin',
      'Copperplate',
      'Didot',
      'Euphemia UCAS',
      'Futura',
      'Geeza Pro',
      'Gill Sans',
      'Gujarati Sangam MN',
      'Gurmukhi MN',
      'Heiti SC',
      'Heiti TC',
      'Hiragino Kaku Gothic ProN',
      'Hiragino Mincho ProN',
      'Hoefler Text',
      'Kailasa',
      'Kannada Sangam MN',
      'Krungthep',
      'Malayalam Sangam MN',
      'Marion',
      'Marker Felt',
      'Nadeem',
      'Noteworthy',
      'OPTIMA',
      'Oriya Sangam MN',
      'Papyrus',
      'Party LET',
      'Plantagenet Cherokee',
      'Rockwell',
      'Savoye LET',
      'Sinhala Sangam MN',
      'Skia',
      'Snell Roundhand',
      'Tamil Sangam MN',
      'Telugu Sangam MN',
      'Thonburi',
      'Zapfino'
    ];
    var PX364 = [
      'Chrome PDF Plugin::Portable Document Format::application/x-google-chrome-pdf~pdf',
      'Chrome PDF Viewer::::application/pdf~pdf',
      'Native Client::::application/x-nacl~::application/x-pnacl~'
    ];
    //window.devicePixelRatio
    var PX286 = 1;
    //navigator.hardwareConcurrency || -1
    var PX287 = 16;
    //!!window.localStorage
    var PX288 = true;
    //!!window.indexedDB
    var PX289 = true;
    //!!window.openDatabase
    var PX290 = true;
    //!!document.body.addBehavior
    var PX291 = false;
    //navigator.cpuClass
    var PX292 = 'missing';
    //!!window.sessionStorage
    var PX293 = true;
    //i[o('PX312')] = vs(window, 'WebKitCSSMatrix')
    var PX312 = 'd41d8cd98f00b204e9800998ecf8427e';
    //i[o('PX311')] = vs(window, 'WebGLContextEvent')
    var PX311 = 'fd7149bbfb316699ef918fa7bb7510a8';
    //i[o('PX310')] = vs(window, 'UIEvent')
    var PX310 = 'fd7149bbfb316699ef918fa7bb7510a8';
    var PX401 = 13922;

    if(random(0,5) > 3){

        var PX409 = 2; 
        var PX1131 = [ 'PX33', 'PX248', 'PX249', 'PX409' ];

    } else {

        var PX409 = 3; 
        var PX1131 = [ 'PX33', 'PX249' ];

    };

    var PX134 = true;
    //navigator.plugins.length
    var PX170 = 3;
    var PX85 = [ 'Chrome PDF Plugin', 'Chrome PDF Viewer', 'Native Client' ];
    var PX59 = user_agent;
    //navigator.language
    var PX61 = 'en';
    //navigator.languages
    var PX313 = [ 'en' ];
    //navigator.platform
    var PX63 = 'MacIntel';
    //!!(navigator.doNotTrack || null === navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack)
    var PX86 = true;
    //new Date().getTimezoneOffset()
    var PX154 = 240;
    //navigator.deviceMemory
    var PX1157 = 8;
    var PX133 = true;
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
    var PX1152 = await random_decimal();
    var PX1153 = 250;
    //navigator.connection.saveData
    var PX1154 = false;
    //navigator.connection.effectiveType
    var PX1155 = '4g';
     //'onLine' in navigator && !0 === navigator.onLine
    var PX60 = true;
    //navigator.geolocation + '' == '[object Geolocation]'
    var PX87 = true;
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
    var PX400 = 401;
    var PX404 = '144|54|54|180|68';
    var PX90_value = [ 'loadTimes', 'csi', 'app', 'runtime' ];
    var PX90 = PX90_value;
    var PX190 = '';
    var PX552 = 'false';
    var PX549 = 1;
    //!!window.caches
    var PX405 = true;
    var PX547 = PX405;
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
    var PX851 = random(1000, 2500);
    PX851_px2 = PX851;
    //var PX850 = 3;
    var PX851_px3 = PX851_px2 + await random(100, 500);
    var PX851 = PX851_px3;
    var PX1056 = Date.now();
    var PX1038 = uuid;
    var PX371 = true;
    var PX96 = config[site]['url'];
    var px4_payload = [];
    px4_payload[0] = {};
    px4_payload[0]['t'] = 'PX4';
    px4_payload[0]['d'] = {};
    px4_payload[0]['d']['PX31'] = PX31;
    px4_payload[0]['d']['PX32'] = PX32;
    px4_payload[0]['d']['PX274'] = PX274;
    px4_payload[0]['d']['PX275'] = PX275;
    px4_payload[0]['d']['PX441'] = PX441;
    px4_payload[0]['d']['PX276'] = PX276;
    px4_payload[0]['d']['PX440'] = PX440;
    px4_payload[0]['d']['PX210'] = PX210;
    px4_payload[0]['d']['PX209'] = PX209;
    px4_payload[0]['d']['PX277'] = PX277;
    px4_payload[0]['d']['PX281'] = PX281;
    px4_payload[0]['d']['PX282'] = PX282;
    px4_payload[0]['d']['PX280'] = PX280;
    px4_payload[0]['d']['PX279'] = PX279;
    px4_payload[0]['d']['PX278'] = PX278;
    px4_payload[0]['d']['PX33'] = PX33;
    px4_payload[0]['d']['PX248'] = PX248;
    px4_payload[0]['d']['PX249'] = PX249;
    px4_payload[0]['d']['PX57'] = PX57;
    px4_payload[0]['d']['PX264'] = PX264;
    px4_payload[0]['d']['PX266'] = PX266;
    px4_payload[0]['d']['PX265'] = PX265;
    px4_payload[0]['d']['PX1156'] = PX1156;
    px4_payload[0]['d']['PX364'] = PX364;
    px4_payload[0]['d']['PX286'] = PX286;
    px4_payload[0]['d']['PX287'] = PX287;
    px4_payload[0]['d']['PX289'] = PX289;
    px4_payload[0]['d']['PX290'] = PX290;
    px4_payload[0]['d']['PX291'] = PX291;
    px4_payload[0]['d']['PX292'] = PX292;
    px4_payload[0]['d']['PX293'] = PX293;
    px4_payload[0]['d']['PX312'] = PX312;
    px4_payload[0]['d']['PX311'] = PX311;
    px4_payload[0]['d']['PX310'] = PX310;
    px4_payload[0]['d']['PX401'] = PX401;
    px4_payload[0]['d']['PX409'] = PX409;
    px4_payload[0]['d']['PX1131'] = PX1131;
    px4_payload[0]['d']['PX134'] = PX134;
    px4_payload[0]['d']['PX170'] = PX170;
    px4_payload[0]['d']['PX85'] = PX85;
    px4_payload[0]['d']['PX59'] = PX59;
    px4_payload[0]['d']['PX61'] = PX61;
    px4_payload[0]['d']['PX313'] = PX313;
    px4_payload[0]['d']['PX63'] = PX63;
    px4_payload[0]['d']['PX86'] = PX86;
    px4_payload[0]['d']['PX154'] = PX154;
    px4_payload[0]['d']['PX1157'] = PX1157;
    px4_payload[0]['d']['PX133'] = PX133;
    px4_payload[0]['d']['PX169'] = PX169;
    px4_payload[0]['d']['PX62'] = PX62;
    px4_payload[0]['d']['PX69'] = PX69;
    px4_payload[0]['d']['PX64'] = PX64;
    px4_payload[0]['d']['PX65'] = PX65;
    px4_payload[0]['d']['PX66'] = PX66;
    px4_payload[0]['d']['PX1144'] = PX1144;
    px4_payload[0]['d']['PX1152'] = PX1152;
    px4_payload[0]['d']['PX1153'] = PX1153;
    px4_payload[0]['d']['PX1154'] = PX1154;
    px4_payload[0]['d']['PX1155'] = PX1155;
    px4_payload[0]['d']['PX60'] = PX60;
    px4_payload[0]['d']['PX87'] = PX87;
    px4_payload[0]['d']['PX229'] = PX229;
    px4_payload[0]['d']['PX230'] = PX230;
    px4_payload[0]['d']['PX91'] = PX91;
    px4_payload[0]['d']['PX92'] = PX92;
    px4_payload[0]['d']['PX269'] = PX269;
    px4_payload[0]['d']['PX270'] = PX270;
    px4_payload[0]['d']['PX93'] = PX93;
    px4_payload[0]['d']['PX185'] = PX185;
    px4_payload[0]['d']['PX186'] = PX186;
    px4_payload[0]['d']['PX187'] = PX187;
    px4_payload[0]['d']['PX188'] = PX188;
    px4_payload[0]['d']['PX95'] = PX95;
    px4_payload[0]['d']['PX234'] = PX234;
    px4_payload[0]['d']['PX235'] = PX235;
    px4_payload[0]['d']['PX151'] = PX151;
    px4_payload[0]['d']['PX239'] = PX239;
    px4_payload[0]['d']['PX240'] = PX240;
    px4_payload[0]['d']['PX152'] = PX152;
    px4_payload[0]['d']['PX153'] = PX153;
    px4_payload[0]['d']['PX314'] = PX314;
    px4_payload[0]['d']['PX192'] = PX192;
    px4_payload[0]['d']['PX196'] = PX196;
    px4_payload[0]['d']['PX207'] = PX207;
    px4_payload[0]['d']['PX251'] = PX251;
    px4_payload[0]['d']['PX400'] = PX400;
    px4_payload[0]['d']['PX404'] = PX404;
    px4_payload[0]['d']['PX90'] = PX90;
    px4_payload[0]['d']['PX190'] = PX190;
    px4_payload[0]['d']['PX552'] = PX552;
    px4_payload[0]['d']['PX549'] = PX549;
    px4_payload[0]['d']['PX547'] = PX547;
    px4_payload[0]['d']['PX821'] = PX821;
    px4_payload[0]['d']['PX822'] = PX822;
    px4_payload[0]['d']['PX823'] = PX823;
    px4_payload[0]['d']['PX147'] = PX147;
    px4_payload[0]['d']['PX155'] = PX155;
    px4_payload[0]['d']['PX236'] = PX236;
    px4_payload[0]['d']['PX194'] = PX194;
    px4_payload[0]['d']['PX195'] = PX195;
    px4_payload[0]['d']['PX237'] = PX237;
    px4_payload[0]['d']['PX238'] = PX238;
    px4_payload[0]['d']['PX208'] = PX208;
    px4_payload[0]['d']['PX218'] = PX218;
    px4_payload[0]['d']['PX231'] = PX231;
    px4_payload[0]['d']['PX232'] = PX232;
    px4_payload[0]['d']['PX254'] = PX254;
    px4_payload[0]['d']['PX295'] = PX295;
    px4_payload[0]['d']['PX268'] = PX268;
    px4_payload[0]['d']['PX166'] = PX166;
    px4_payload[0]['d']['PX138'] = PX138;
    px4_payload[0]['d']['PX143'] = PX143;
    px4_payload[0]['d']['PX714'] = PX714;
    px4_payload[0]['d']['PX715'] = PX715;
    px4_payload[0]['d']['PX724'] = PX724;
    px4_payload[0]['d']['PX725'] = PX725;
    px4_payload[0]['d']['PX729'] = PX729;
    px4_payload[0]['d']['PX443'] = PX443;
    px4_payload[0]['d']['PX466'] = PX466;
    px4_payload[0]['d']['PX467'] = PX467;
    px4_payload[0]['d']['PX468'] = PX468;
    px4_payload[0]['d']['PX1033'] = 'e0eaf10e';
    px4_payload[0]['d']['PX1019'] = 'd1917ca4';
    px4_payload[0]['d']['PX1020'] = '7766a52d';
    px4_payload[0]['d']['PX1021'] = '64ba5649';
    px4_payload[0]['d']['PX1022'] = '6a90378d';
    px4_payload[0]['d']['PX1035'] = true;
    px4_payload[0]['d']['PX1139'] = false;
    px4_payload[0]['d']['PX1025'] = false;
    px4_payload[0]['d']['PX850'] = PX850;
    PX850++;
    px4_payload[0]['d']['PX851'] = PX851;
    px4_payload[0]['d']['PX1056'] = PX1056;
    px4_payload[0]['d']['PX1038'] = PX1038;
    px4_payload[0]['d']['PX371'] = PX371;
    px4_payload[0]['d']['PX96'] = PX96;

    return px4_payload;

};

async function gen_px297(){

    var px297_payload = [];
    px297_payload [0] = {};
    px297_payload [0]['t'] = 'PX297';
    px297_payload [0]['d'] = {};
    var PX38 = 'mouseover';
    var PX70 = await random(3600, 15000);
    var PX157 = 'true';
    var PX72 = null; 

    if(Math.random() > 0.5){

        PX72 = 'DIV:nth-child(2)>DIV:nth-child(3)>DIV:nth-child(1)>DIV:nth-child(1)';

    } else {

        PX72 = 'MAIN>DIV:nth-child(2)>DIV:nth-child(1)>DIV:nth-child(1)>DIV:nth-child(1)>DIV:nth-child(1)';

    };

    var PX34 = null; 

    if(site == 'walmart'){

        PX34 = "TypeError: Cannot read property '0' of null\n" +
        `    at It (https://www.walmart.com/px/${appId}/init.js:2:14800)\n` +
        `    at HTMLBodyElement.Se (https://www.walmart.com/px/${appId}/init.js:2:29704)`;

    } else {

        PX34 = '';

    };

    var PX78 = random(0, device_width); 
    var PX79 = random(0, device_height);
    var PX851 = random(4000, 10000);
    var PX1056 = Date.now();
    var PX1038 = uuid;
    var PX371 = true;
    var PX96 = config[site]['url'];

    px297_payload [0]['PX38'] = PX38;
    px297_payload [0]['PX70'] = PX70;
    px297_payload [0]['PX157'] = PX157;
    px297_payload[0]['PX72'] = PX72; 
    px297_payload[0]['PX34'] = PX34; 
    px297_payload[0]['PX78'] = PX78;
    px297_payload[0]['PX79'] = PX79;
    px297_payload[0]['PX850'] = PX850;
    px297_payload[0]['PX851'] = PX851;
    px297_payload[0]['PX1056'] = PX1056;
    px297_payload[0]['PX1038'] = PX1038;
    px297_payload[0]['PX371'] = PX371;
    px297_payload[0]['PX96'] = PX96;

    //console.log(px297_payload);

    px297_payload = await G(px297_payload);
    var px297_encoded_payload = await encode(JSON.parse(px297_payload));
   //var px3_encoded_payload = await encode(J(px3_payload));
    //var px3_encoded_payload = await encode(px3_payload);
    //console.log(px3_encoded_payload);

    var px297_final_payload = [];
    var index = 0;
    px297_final_payload[index] = 'payload=' + px297_encoded_payload;
    index++;
    px297_final_payload[index] = 'appId=' + appId;
    index++;
    px297_final_payload[index] = 'tag=' + tag;
    index++;
    px297_final_payload[index] = 'uuid=' + uuid;
    index++;
    px297_final_payload[index] = 'ft=' + ftag;
    index++;
    px297_final_payload[index] = 'seq=' + Qv;
    index++;
    Qv++;
    px297_final_payload[index] = 'en=' + 'NTA';
    index++;
    px297_final_payload[index] = 'cs=' + cs;
    index++;
    var pc = await pc_gen(px297_payload, tag, ftag, uuid);
    px297_final_payload[index] = 'pc=' + pc;
    index++;
    px297_final_payload[index] = 'sid=' + sid;
    index++;
    px297_final_payload[index] = 'vid=' + vid;
    index++;

    px297_final_payload[index] = 'rsc=' + cC;
    cC++;
    index++;

    //console.log(px3_final_payload);

    px297_final_payload = px297_final_payload.join('&');
    
    //console.log(px297_final_payload);

    return px297_final_payload;

};

//gen_px297();

//gen_px4();

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
//var sid = null;
var cs = null;

async function gen_px358(input_sid){

    PX358 = await $(input_sid, user_agent);
    //console.log(PX358);

};

async function gen_px357(px357_data){

    //px357_data = px357_data.slice(4);
    //px357_data = px357_data.split('|');
    //PX357 = await $(px357_data[0], user_agent);
    PX357 = await $(px357_data, user_agent);

    //console.log(PX357);
};

function gen_px943(px943_data){

    //px943_data = px943_data.slice(4);
    PX943 = px943_data;

};

function gen_px983(px983_data) {

    //px983_data = px983_data.slice(4);
    //px983_data = px983_data.split('|');
    PX983 = px983_data[0];
    //console.log(px3_payload);
    //n[lt(n[t('PX983')], n[t('PX982')] % 10 + 2)] = lt(n[t('PX983')], n[t('PX982')] % 10 + 1)

    //console.log(PX983);

};

function gen_px986(px986_data) {

    //px986_data = px986_data.slice(4);
    //px986_data = px986_data.split('|');
    //PX986 = px986_data[1];
    PX986 = px986_data[1];

};

function gen_px985(px985_data) {

    //px985_data = px985_data.slice(4);
    //px985_data = px985_data.split('|');
    PX985 = parseInt(px985_data);

};

class px {

    constructor(client_site){

        site = client_site;

    };

    async gen_px2(value) {

        return await gen_px2(value);

    };

    async gen_px3(value) {

        return await gen_px3(value);

    };

    async gen_px4(value) {

        return await gen_px4(value);

    };

    async gen_px297() {

        return await gen_px297();

    };

    async set_cls(payload_data) {

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('cls'));
        cls = payload_data;
        cls = cls.slice(4).split('|');
        //console.log(cls);
        await gen_px983(cls);
        await gen_px986(cls);
        //gen_px3();

    };

    async set_drc(payload_data) {

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('drc'));
        drc = payload_data;
        drc = drc.slice(4);
        //console.log(drc);
        await gen_px985(drc);

    };

    async set_wcs(payload_data) {

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('wcs'));
        wcs = payload_data;
        wcs = wcs.slice(4);
       //console.log(wcs);
        await gen_px943(wcs);

    };

    async set_vid(payload_data){

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('vid'));
        payload_data = payload_data.slice(4);
        payload_data = payload_data.split('|');
        vid = payload_data[0];    
        //console.log(vid);
        await gen_px357(vid);

    };

    async set_sid(payload_data){

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('sid'));
        payload_data = payload_data.slice(4);
        sid = payload_data;
       // console.log(sid);
        await gen_px358(sid);

    };

    async set_cs(payload_data){

        payload_data = JSON.parse(payload_data);
        payload_data = payload_data['do'];
        payload_data = payload_data.find(b => b.startsWith('cs'));
        payload_data = payload_data.slice(3);
        cs = payload_data;
        //console.log(cs)

    };

};

module.exports.px = px;