var tag = 'v6.5.5';
var ftag = '202';
var Ef = 1638;
var Wf = 0;
var Sf = 0;
var Mu = 0;
var qu = 48;
var $u = 57;
var nf = 10;
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

function Mi(n, t) {
    return [
        Ad,
        n,
        t
    ].join(':');
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

function pc_gen(payload, px_tag, px_ftag, uuid){

    if(uuid){

        var Ad = uuid;

    };

    return Kn(payload, Mi(px_tag, px_ftag));

};

module.exports.pc_gen = pc_gen;