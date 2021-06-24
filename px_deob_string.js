function e(e) {

    for (var i = su(e), a = "X32oAsP", s = "", c = 0; c < i.length; ++c) {
        var u = a.charCodeAt(c % 7);
        s += String.fromCharCode(u ^ i.charCodeAt(c))
    }

    return s;
}

su = function() {
    function n(n) {
        this.message = n
    }
    try {
        if (atob && "test" === atob("dGVzdA==")) return atob
    } catch (n) {}
    return n.prototype = new Error, n.prototype.name = "InvalidCharacterError",
        function(t) {
            var e = String(t).replace(/[=]+$/, "");
            if (e.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var r, o, i = 0, a = 0, s = ""; o = e.charAt(a++); ~o && (r = i % 4 ? 64 * r + o : o, i++ % 4) ? s += String.fromCharCode(255 & r >> (-2 * i & 6)) : 0) o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
            return s
        }
}();

module.exports.deob_string = e;