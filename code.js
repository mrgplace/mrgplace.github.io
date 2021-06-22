var _tmr = _tmr || [];
(function() {
    function N(a) {
        var b = typeof a;
        return !("number" === b || "boolean" === b || "string" === b || a.nodeType || a === a.window)
    }
    function ha(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function u(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    function B(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    function ia(a, b) {
        for (var c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    }
    function I(a, b) {
        var c, d;
        if (!a || !N(a))
            return "";
        var e = [];
        if (ha(a)) {
            c = 0;
            for (d = a.length; c < d; c++)
                xa(e, null, a[c], b);
            c = "[";
            d = "]"
        } else {
            for (c in a)
                a.hasOwnProperty(c) && xa(e, c, a[c], b);
            c = "{";
            d = "}"
        }
        return !e.length ? "" : c + e.join(",") + d
    }
    function xa(a, b, c, d) {
        var e = typeof c;
        if ("string" === e)
            c = '"' + c.replace(/[\"\']/g, "\\$&") + '"';
        else if (!("number" === e || "boolean" === e))
            if (c = d ? "" : I(c),
            !c.length)
                return;
        a.push((null === b ? "" : '"' + b + '":') + c)
    }
    function ja() {
        var a = arguments, b = a[0] || {}, c = !1, d = 1, e = a.length, p, r, m, k, f;
        "boolean" === typeof b && (c = b,
        b = a[d++] || {});
        for (N(b) || (b = {}); d < e; d++)
            if (null != (p = a[d]))
                for (r in p)
                    m = b[r],
                    k = p[r],
                    b !== k && (c && k && (N(k) || (f = ha(k))) ? (f ? (f = !1,
                    m = m && ha(m) ? m : []) : m = m && N(m) ? m : {},
                    b[r] = ja(c, m, k)) : void 0 !== k && (b[r] = k));
        return b
    }
    function ya(a) {
        var b = "";
        try {
            var c = new Uint8Array(a);
            window.crypto.getRandomValues(c);
            for (var d = 0; d < a; d++)
                b += (c[d] % 16).toString(16)
        } catch (e) {
            b = "";
            for (d = 0; d < a; d++)
                c = Math.floor(16 * Math.random()),
                b += c.toString(16)
        }
        return b
    }
    function w() {
        return (new Date).getTime()
    }
    function s(a, b) {
        var c = {
            data: b,
            raw: a,
            url: "https://top-fwz1.mail.ru" + a
        }, d;
        "function" !== typeof z.sendBeacon ? d = !1 : (c.dataSplitter = ";",
        d = W(c.data, c.dataSplitter),
        d = !0 === z.sendBeacon(c.url, d));
        d || (void 0 === b ? (c.dataSplitter = ";",
        c.open = Wa,
        c.connect = Xa,
        c.startListen = Ya,
        c.stopListen = Za,
        c.open(c),
        c.connect(c)) : ("function" === typeof g.XMLHttpRequest ? (c.dataSplitter = ";",
        c.open = $a,
        c.connect = ab,
        c.startListen = bb,
        c.stopListen = cb,
        c.open(c),
        c.connect(c),
        d = !0) : d = !1,
        d || db(c)))
    }
    function db(a) {
        var b = f.createElement("iframe")
          , c = f.createElement("div");
        c.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
        c.appendChild(b);
        f.body.appendChild(c);
        try {
            var d = b.contentWindow.document, e = d.createElement("div"), p;
            for (p in a.data)
                if (a.data.hasOwnProperty(p)) {
                    var r = a.data[p]
                      , m = typeof r;
                    if ("string" === m || "number" === m) {
                        var k = d.createElement("input");
                        k.setAttribute("type", "hidden");
                        k.setAttribute("name", p);
                        k.value = r;
                        e.appendChild(k)
                    }
                }
            var g = d.createElement("form");
            g.setAttribute("action", a.url);
            g.setAttribute("method", za);
            g.setAttribute("enctype", Aa);
            g.appendChild(e);
            var h = d.createElement("div");
            h.appendChild(g);
            d.body.appendChild(h);
            var x = function() {
                try {
                    B(b, "load", x),
                    f.body.removeChild(c)
                } catch (a) {
                    l && console.warn("[TopMailRu] Error#1.2", a)
                }
            };
            u(b, "load", x);
            g.submit()
        } catch (n) {
            l && console.warn("[TopMailRu] Error#1.3", n)
        }
    }
    function $a(a) {
        a._connection = new g.XMLHttpRequest
    }
    function ab(a) {
        a._connection.open(za, a.url);
        a._connection.setRequestHeader("Content-Type", Aa);
        a._connection.send(W(a.data, a.dataSplitter))
    }
    function bb(a) {
        u(a._connection, "load", a._onload);
        u(a._connection, "error", a._onerror)
    }
    function cb(a) {
        B(a._connection, "load", a._onload);
        B(a._connection, "error", a._onerror)
    }
    function Wa(a) {
        a._connection = new Image
    }
    function Xa(a) {
        a._connection.src = a.url + W(a.data, a.dataSplitter)
    }
    function Ya(a) {
        a._connection.onload = a._onload;
        a._connection.onerror = a._onerror
    }
    function Za(a) {
        a._connection.onload = null;
        a._connection.onerror = null
    }
    function W(a, b) {
        var c = b || ";", d = "", e;
        for (e in a)
            if (a.hasOwnProperty(e)) {
                var p = a[e]
                  , r = typeof p;
                if ("string" === r || "number" === r)
                    d += c + escape(e) + "=" + escape(p)
            }
        return d
    }
    function ka(a) {
        return (a = f.cookie.match(RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(a[1]) : null
    }
    function O(a, b, c) {
        c = c || {};
        var d = c.expires;
        "number" === typeof c.expires && (d = new Date,
        d.setTime(d.getTime() + c.expires));
        d && d.toUTCString && (d = d.toUTCString());
        c.expires = d;
        a = a + "=" + encodeURIComponent(b);
        for (var e in c)
            if ((b = c[e]) || 0 === b)
                a += "; " + e,
                !0 !== b && (a += "=" + b);
        f.cookie = a
    }
    function eb() {
        var a = "tmr" + ("" + Math.random()).slice(2);
        try {
            return J = g.localStorage || null,
            J.setItem(a, a),
            J.removeItem(a),
            !0
        } catch (b) {
            return J = null,
            l && console.warn("[TopMailRu] Error#1.4", b),
            !1
        }
    }
    function fb() {
        if (!Y)
            return null;
        for (var a = y.hostname.split(".").reverse(), b, c = 1, d = a.length; c < d; c++) {
            b = a[0];
            for (var e = 1; e <= c; e++)
                b = a[e] + "." + b;
            var e = "" + w()
              , p = {
                domain: b,
                path: "/",
                expires: 3E5
            };
            try {
                O("tmr_tcdhn", e, p);
                var r = ka("tmr_tcdhn")
                  , p = p || {};
                p.expires = -1;
                O("tmr_tcdhn", "", p);
                if (r === e)
                    return b
            } catch (m) {
                l && console.warn("[TopMailRu] Error#1.8", m)
            }
        }
        return null
    }
    function Z(a, b) {
        Y && O(a, b, Ba);
        if (la)
            try {
                J.setItem(a, b)
            } catch (c) {
                l && console.warn("[TopMailRu] Error#1.6", c)
            }
    }
    function ma(a) {
        var b;
        if (!(b = Y ? ka(a) : null)) {
            var c;
            if (la)
                a: {
                    try {
                        c = J.getItem(a);
                        break a
                    } catch (d) {
                        l && console.warn("[TopMailRu] Error#1.5", d)
                    }
                    c = null
                }
            else
                c = null;
            b = c
        }
        return b
    }
    function Ca(a) {
        var b = ";e=" + escape("detect");
        s(v(a, "/tracker", !1, !1) + b)
    }
    function Da(a, b) {
        if (a.length) {
            var c = I(b);
            4096 < c.length || s("/datalayer", {
                js: "13",
                id: a[0],
                e: c,
                sid: na,
                ids: a.join(),
                ver: oa,
                _: Math.random()
            })
        }
    }
    function h() {}
    function P(a) {
        a && "object" === typeof a && (!C && "id"in a) && (C = a.id)
    }
    function gb(a) {
        return (a = !D ? void 0 : D[a]) && pa ? a - pa : void 0
    }
    function Ea() {
        if (D) {
            for (var a = 0, b = "domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "), c = 0; c < b.length; c++) {
                var d = !D ? void 0 : D[b[c]];
                if (0 < d && (d < a || 0 == a))
                    a = d
            }
            return a ? a : void 0
        }
    }
    function Q(a) {
        return a && "object" === typeof a && ("id"in a && a.id || C)
    }
    function v(a, b, c, d) {
        Z(qa, ++K);
        var e = "id"in a ? a.id : C, p = "url"in a ? a.url : y.href, r = "referrer"in a ? a.referrer : f.referrer, m = "title"in a ? a.title : f.title, k;
        k = ra;
        null === k && (k = hb());
        k = null !== k ? k ? 1 : 0 : null;
        var h = "userid"in a ? a.userid : A || 0 === A ? A : void 0, n = F ? F : void 0, x;
        x = [];
        C && e !== C && x.push("sec");
        "dataLayer"in g && x.push("dl");
        E && x.push(["ecom"].concat(E).join("-"));
        x = x.join(",");
        var q = g.screen, X;
        X = (new Date).getTimezoneOffset();
        var s = "";
        if (g.Intl)
            try {
                s = g.Intl.DateTimeFormat().resolvedOptions().timeZone || ""
            } catch (u) {
                l && console.warn("[TopMailRu] Error#1.1", u)
            }
        X = X + "/" + s;
        a.start = Ea();
        b = b + "?js=13" + (e ? ";id=" + escape(e) : "") + (p ? ";u=" + escape(p) : "") + (r ? ";r=" + escape(r) : "") + (a.start ? ";st=" + escape(a.start) : "") + ("gender"in a ? ";gender=" + escape(a.gender) : "") + ("age"in a ? ";age=" + escape(a.age) : "") + ("pid"in a ? ";pid=" + escape(a.pid) : "") + (void 0 !== h ? ";userid=" + escape(h) : "") + (void 0 !== n ? ";uparams=" + escape(I(n, !1)) : "") + (d && m ? ";title=" + encodeURIComponent(m) : "") + (q ? ";s=" + q.width + "*" + q.height : "") + ";vp=";
        e = d = 0;
        f.documentElement && (f.documentElement.clientWidth || f.documentElement.clientHeight) ? (d = f.documentElement.clientWidth,
        e = f.documentElement.clientHeight) : "number" == typeof g.innerWidth && (d = g.innerWidth,
        e = g.innerHeight);
        b = b + ("" + d + "*" + e) + ";touch=" + ib + ";hds=" + jb + ";flash=";
        if (null === R)
            if (R = "",
            z.plugins && z.plugins["Shockwave Flash"])
                R = z.plugins["Shockwave Flash"].description.split(" ")[2];
            else if (g.ActiveXObject)
                try {
                    var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                      , t = t.GetVariable("$version")
                      , t = t.split(" ")[1].split(",");
                    R = t[0] + "." + t[1]
                } catch (v) {
                    l && console.warn("[TopMailRu] Error#1.12", v)
                }
        t = b + R + ";sid=" + na + ";ver=" + oa + ";tz=" + encodeURIComponent(X);
        if (c) {
            if (!D || !sa)
                c = "";
            else {
                c = [];
                c.push(sa.type);
                c.push(sa.redirectCount);
                c.push(pa);
                for (b = 0; b < Fa.length; b++)
                    c.push(gb(Fa[b]));
                c = c.join("/")
            }
            c = ";nt=" + c
        } else
            c = "";
        c = t + c + ("device"in a ? ";device=" + escape(a.device) : "") + ";ni=";
        if (!z || !z.connection)
            t = "";
        else {
            t = z.connection;
            b = [];
            for (e = 0; e < Ga.length; e++) {
                d = t[Ga[e]];
                if (void 0 !== d)
                    switch (d) {
                    case !0:
                        d = 1;
                        break;
                    case !1:
                        d = 0;
                        break;
                    default:
                        d = ("" + d).replace(/\//g, "_")
                    }
                b.push(d)
            }
            t = b.join("/")
        }
        return c + t + ("params"in a ? ";params=" + escape(I(a.params, !1)) : "") + (null !== k ? ";detect=" + k : "") + (Y || la ? ";lvid=" + escape([S, w(), K, L].join(":")) : "") + (x ? ";opts=" + escape(x) : "") + ("version"in a ? ";appver=" + escape(a.version) : "") + ";_=" + Math.random()
    }
    function Ha(a) {
        a = ";e=" + escape("PVT/" + a);
        for (var b = 0; b < q.length; b++)
            s(v(q[b], "/tracker", !1, !0) + a)
    }
    function kb() {
        ra = !0;
        Ia(1);
        if (!Ja && !T) {
            T = !0;
            for (var a = 0; a < q.length; a++)
                Ca(q[a])
        }
    }
    function lb() {
        Ia(0);
        ra = !1
    }
    function hb() {
        var a = ka(Ka);
        if (null === a)
            return null;
        a = a.split("|");
        if (2 !== a.length)
            return null;
        var b = a[1]
          , b = w() - b;
        if (0 > b || b > La)
            return null;
        a = parseInt(a[0], 10);
        return isNaN(a) ? null : a
    }
    function Ia(a) {
        var b = w();
        a = [a, b].join("|");
        O(Ka, a, {
            path: "/",
            expires: La
        })
    }
    function $() {
        f.addEventListener ? (B(f, "DOMContentLoaded", $),
        _tmr.onready()) : f.attachEvent && "complete" === f.readyState && (B(f, "readystatechange", $),
        _tmr.onready())
    }
    function Ma() {
        B(g, "load", Ma);
        _tmr.onready();
        _tmr.onload()
    }
    function aa() {
        B(g, "unload", aa);
        B(g, "beforeunload", aa);
        _tmr.unload()
    }
    if ("[object Array]" === Object.prototype.toString.call(_tmr)) {
        var g = window
          , z = navigator
          , f = document
          , y = location
          , U = "string" === typeof y.hostname ? y.hostname : ""
          , ba = -1 != U.search(/(^|\.)odnoklassniki\.ru$/) || -1 != U.search(/(^|\.)ok\.ru$/)
          , ca = -1 != U.search(/(^|\.)vk\.com$/)
          , mb = -1 != U.search(/(^|\.)lamoda\.ru$/)
          , nb = -1 != U.search(/(^|\.)kommersant\.ru$/)
          , ob = "string" === typeof y.search && -1 != y.search.search(/[?&]rb_clickid=/)
          , l = "string" === typeof y.search && -1 != y.search.search(/[?&]tmr_debug=1(?:&|$)/)
          , Na = ba || ca || mb || nb
          , pb = !ob
          , qb = ba || ca
          , rb = ba || ca
          , Oa = ba || ca
          , Ja = !1
          , za = "POST"
          , Aa = "application/x-www-form-urlencoded"
          , Y = !(0 === y.hostname.search(/^(\d+.)+\d+$/g) || -1 !== y.hostname.search(/:/g))
          , J = null
          , la = eb()
          , Ba = {
            domain: fb(),
            path: "/",
            expires: 287712E5
        };
        (function() {
            var a;
            if (a = f.cookie.match(RegExp("(?:^|; )(tmr_tcdhn\\d+)=([^;]*)", "g"))) {
                for (var b = [], c, d = 0, e = a.length; d < e; d++)
                    c = a[d],
                    (c = c.match(/(?:^|; )(tmr_tcdhn\d+)=([^;]*)/)) && b.push(c.slice(1));
                a = b
            } else
                a = null;
            if (a) {
                b = 0;
                for (d = a.length; b < d; b++)
                    e = a[b][0],
                    c = Ba || {},
                    c.expires = -1,
                    O(e, "", c)
            }
        }
        )();
        var T = !1, ra = null, La = 864E5, Ka = "tmr_detect", sb = function() {
            function a(a, c) {
                var d = f.createElement("div");
                d.setAttribute("class", String.fromCharCode(97, 100, 118, 98, 108, 111, 99, 107, 32, 97, 100, 118, 101, 114, 116, 98, 108, 111, 99, 107, 32, 97, 109, 109, 98, 108, 111, 99, 107, 32, 98, 45, 98, 97, 110, 110, 101, 114, 32, 98, 45, 109, 101, 100, 105, 97, 45, 98, 97, 110, 110, 101, 114, 32, 112, 117, 98, 95, 51, 48, 48, 120, 50, 53, 48, 32, 112, 117, 98, 95, 51, 48, 48, 120, 50, 53, 48, 109, 32, 109, 101, 100, 105, 117, 109, 95, 114, 101, 99, 116, 97, 110, 103, 108, 101, 95, 51, 48, 48, 95, 50, 53, 48, 32, 112, 117, 98, 95, 55, 50, 56, 120, 57, 48, 32, 108, 101, 97, 100, 101, 114, 98, 111, 97, 114, 100, 95, 55, 50, 56, 95, 57, 48, 32, 119, 105, 100, 101, 95, 115, 107, 121, 115, 99, 114, 97, 112, 101, 114, 95, 49, 54, 48, 95, 54, 48, 48, 32, 119, 105, 100, 101, 95, 115, 107, 121, 115, 99, 114, 97, 112, 101, 114, 95, 49, 54, 48, 120, 54, 48, 48, 32, 116, 101, 120, 116, 45, 97, 100, 32, 116, 101, 120, 116, 65, 100, 32, 116, 101, 120, 116, 95, 97, 100, 32, 116, 101, 120, 116, 95, 97, 100, 115, 32, 116, 101, 120, 116, 45, 97, 100, 115, 32, 116, 101, 120, 116, 45, 97, 100, 45, 108, 105, 110, 107, 115, 32, 97, 100, 95, 116, 101, 120, 116, 32, 97, 100, 95, 116, 101, 120, 116, 32, 98, 97, 110, 110, 101, 114, 95, 116, 101, 120, 116, 32, 116, 101, 120, 116, 45, 98, 97, 110, 110, 101, 114, 32, 98, 45, 114, 98, 32, 114, 98, 45, 115, 108, 111, 116, 32, 98, 45, 112, 114, 111, 109, 111, 45, 97, 100, 32, 105, 45, 98, 114, 97, 110, 100, 105, 110, 103, 32, 98, 114, 97, 110, 100, 105, 110, 103, 45, 112, 32, 114, 98, 45, 118, 105, 100, 101, 111, 45, 119, 105, 100, 103, 101, 116, 32, 98, 45, 109, 105, 109, 105, 99, 45, 97, 100, 118, 32, 112, 109, 45, 116, 111, 111, 108, 98, 97, 114, 95, 95, 98, 97, 110, 110, 101, 114, 32, 114, 98, 95, 98, 111, 100, 121, 32, 115, 116, 105, 99, 107, 121, 45, 115, 112, 114, 105, 110, 103, 115, 32, 97, 100, 118, 95, 115, 108, 111, 116, 95, 49, 32, 98, 97, 110, 110, 101, 114, 95, 50, 52, 48, 32, 98, 108, 111, 99, 107, 95, 115, 104, 97, 114, 101, 32, 97, 99, 116, 105, 111, 110, 45, 45, 115, 104, 97, 114, 101, 32, 115, 104, 97, 114, 101, 108, 105, 115, 116, 32, 106, 115, 45, 98, 97, 110, 110, 101, 114, 32, 100, 105, 114, 101, 99, 116, 32, 112, 99, 45, 109, 105, 109, 105, 99, 32, 116, 103, 98, 45, 98, 97, 110, 110, 101, 114, 32, 121, 97, 100, 105, 114, 101, 99, 116, 32, 106, 115, 45, 112, 114, 111, 109, 111, 45, 112, 111, 112, 117, 112, 32, 109, 45, 115, 117, 98, 115, 99, 114, 105, 112, 116, 105, 111, 110, 32, 112, 45, 116, 97, 114, 103, 101, 116, 32, 112, 45, 100, 105, 114, 101, 99, 116, 104, 97, 99, 107, 32, 114, 98, 45, 102, 108, 111, 97, 116, 105, 110, 103, 32, 116, 114, 103, 45, 98, 45, 98, 97, 110, 110, 101, 114, 45, 98, 108, 111, 99, 107));
                d.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
                d.setAttribute("id", "trg-b-banners-1");
                d.setAttribute("data-view", "SlotView.mimic");
                this.bait = f.body.appendChild(d);
                this.bait.offsetParent;
                this.bait.offsetHeight;
                this.bait.offsetLeft;
                this.bait.offsetTop;
                this.bait.offsetWidth;
                this.bait.clientHeight;
                this.bait.clientWidth;
                this.loopNumber = 0;
                this.fnPositive = a || null;
                this.fnNegative = c || null;
                var e = this;
                setTimeout(function() {
                    e._checkBait.call(e)
                }, 1)
            }
            a.prototype._checkBait = function() {
                if (T)
                    this._stop();
                else {
                    var a = !1;
                    null !== f.body.getAttribute("abp") || null === this.bait.offsetParent || 0 == this.bait.offsetHeight || 0 == this.bait.offsetLeft || 0 == this.bait.offsetTop || 0 == this.bait.offsetWidth || 0 == this.bait.clientHeight || 0 == this.bait.clientWidth ? a = !0 : void 0 !== g.getComputedStyle && (a = g.getComputedStyle(this.bait, null),
                    a = "none" == a.getPropertyValue("display") || "hidden" == a.getPropertyValue("visibility"));
                    (!0 === a || 10 <= ++this.loopNumber) && this._stop();
                    var c;
                    if (a && this.fnPositive)
                        try {
                            c = this.fnPositive,
                            c()
                        } catch (d) {
                            l && console.warn("[TopMailRu] Error#1.9", d)
                        }
                    else if (!a && 10 > this.loopNumber) {
                        var e = this;
                        setTimeout(function() {
                            e._checkBait.call(e)
                        }, 50 * this.loopNumber)
                    } else
                        try {
                            c = this.fnNegative,
                            c()
                        } catch (p) {
                            l && console.warn("[TopMailRu] Error#1.10", p)
                        }
                }
            }
            ;
            a.prototype._stop = function() {
                try {
                    f.body.removeChild(this.bait)
                } catch (a) {
                    l && console.warn("[TopMailRu] Error#1.11", a)
                }
            }
            ;
            return function(b, c) {
                new a(b,c)
            }
        }(), E = null, Pa = !1, ta = [], tb = [36383, 2540645, 3171181, 3074137, 2057653], Qa;
        (function() {
            function a(a) {
                for (var b = [], m, k, f = 0, g = a.length; f < g; f++)
                    if (k = a[f]) {
                        m = null;
                        if (k.ecommerce) {
                            k = k.ecommerce;
                            m = !1;
                            var h = {}
                              , l = void 0;
                            for (l in k)
                                k.hasOwnProperty(l) && c[l] && (m = !0,
                                h[l] = k[l]);
                            m = m ? h : null
                        } else if ("event" === k[0])
                            if (h = d[k[1]],
                            k = k[2],
                            !h || !k.items)
                                m = null;
                            else {
                                m = {};
                                m[h] = {
                                    products: k.items
                                };
                                var h = !1
                                  , l = {}
                                  , n = void 0;
                                for (n in k)
                                    "items" !== n && ("currency" === n ? m.currencyCode = k[n] : e[n] ? (h = !0,
                                    l[e[n]] = k[n]) : k[n] && (h = !0,
                                    l[n] = k[n]));
                                h && (m.actionField = l)
                            }
                        m && (b.push(m),
                        ta.push(m))
                    }
                if (b.length) {
                    a = 0;
                    for (f = b.length; a < f; a++)
                        Da(da, b[a]);
                    E || (E = [0, 0]);
                    E[0] += b.length;
                    f = a = 0;
                    for (g = b.length; f < g; f++)
                        a += I(b[f]).length;
                    E[1] += a
                }
            }
            function b(b) {
                if ((b = g[b]) && "function" === typeof b.push) {
                    a(b);
                    var c = b.push;
                    b.push = function() {
                        var b = c.apply(this, arguments);
                        a([].slice.call(arguments, 0));
                        return b
                    }
                }
            }
            var c = {
                currencyCode: "currencyCode",
                detail: "detail",
                add: "add",
                remove: "remove",
                checkout: "checkout",
                purchase: "purchase",
                refund: "refund"
            }
              , d = {
                view_item: c.detail,
                add_to_cart: c.add,
                remove_from_cart: c.remove,
                begin_checkout: c.checkout,
                purchase: c.purchase,
                refund: c.refund
            }
              , e = {
                transaction_id: "id",
                value: "revenue"
            };
            Qa = function() {
                b("dataLayer");
                Pa = !0
            }
        }
        )();
        var oa = "60.3.0"
          , ua = 0
          , ea = 0
          , na = ya(16)
          , A = null
          , F = null
          , fa = 0
          , qa = "tmr_reqNum"
          , K = ma(qa)
          , K = null === K ? 0 : parseInt(K, 10);
        Z(qa, K);
        var L = ma("tmr_lvid")
          , S = ma("tmr_lvidTS");
        if (null === L || -1 === L.search(/^[0-9a-fA-F]+$/))
            L = ya(32);
        Z("tmr_lvid", L);
        if (null === S || -1 === S.search(/^\d+$/))
            S = "" + w();
        Z("tmr_lvidTS", S);
        var C = 0, q = [], va = [], ga = [], da = [], ib = "ontouchstart"in g || 1 < (z.maxTouchPoints || z.msMaxTouchPoints) ? "1" : "0", jb = g.devicePixelRatio || 0, R = null, Ra = g.performance || g.mozPerformance || g.msPerformance || g.webkitPerformance || {}, D = Ra.timing || {}, sa = Ra.navigation || {}, Fa = "unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "), pa = !D ? void 0 : D.navigationStart, Ga = "downlink downlinkMax effectiveType rtt saveData type".split(" "), G, wa;
        G = function(a, b, c) {
            if (b && "object" === typeof b) {
                var d = "id"in b && b.id || C, e = c.title || null, f, g = wa(b, {
                    params: c.required,
                    fn: c.fn
                });
                if (g.missed.length)
                    console.warn("[TopMailRu]" + (d ? "[" + d + "]" : "") + " Error#1.14", "Unspecified " + (1 < g.missed.length && g.missed.slice(0, -1).join(", ") + " and " || "") + g.missed.slice(-1) + " in " + a);
                else {
                    var h = wa(b, {
                        params: c.optional,
                        fn: c.fn
                    });
                    f = [].concat(g.values).concat(h.values);
                    g = [].concat(g.missed).concat(h.missed);
                    c.value && (b = "value"in b && b.value,
                    !0 !== c.value && (b = b || c.value),
                    b ? f.push("value: " + b) : g.push("value"));
                    c = f.length ? "{ " + f.join(", ") + " }" : "";
                    f = g.length ? "(" + (1 < g.length ? g.slice(0, -1).join(", ") + " and " + g.slice(-1) + " are" : g.slice(-1) + " is") + " empty)" : "";
                    d ? console.info("[TopMailRu][" + d + "]: " + (e || a) + " " + c + " " + f) : console.warn("[TopMailRu] Error#1.15", "Undefined counter ID of " + a + " " + c)
                }
            } else
                console.warn("[TopMailRu][][" + a + "] Error#1.13")
        }
        ;
        wa = function(a, b) {
            var c = [], d = [], e, f, g;
            if (b.params)
                for (e in b.params)
                    if (b.params.hasOwnProperty(e) && !1 !== b.params[e])
                        if (f = e in a && a[e],
                        !0 !== b.params[e] && (f = f || b.params[e]),
                        f)
                            try {
                                g = b.fn ? b.fn : null,
                                c.push(e + ': "' + (g ? g(e, f) : f) + '"')
                            } catch (h) {
                                console.warn("[TopMailRu] Error#1.16", h)
                            }
                        else
                            d && d.push(e);
            return {
                values: c,
                missed: d
            }
        }
        ;
        h.prototype.callbackOnReady = function(a) {
            l && G("onReady", a, {
                title: "OnReady callback"
            });
            a && "object" === typeof a && "function" === typeof a.callback && a.callback.call(a.context || null)
        }
        ;
        h.prototype.pageView = function(a) {
            P(a);
            if (a && ("object" === typeof a && a.id) && (5 > va.length && !ia(a.id, va) && (va.push(a.id),
            !1 !== a.beat && ga.push(a.id),
            q.push(a),
            T && Ca(a)),
            5 > da.length && !ia(a.id, da) && (!0 === a.ecom || ia(a.id, tb)))) {
                da.push(a.id);
                var b = [a.id];
                if (Pa)
                    for (var c = 0, d = ta.length; c < d; c++)
                        Da(b, ta[c])
            }
            l && G("pageView", a, {
                title: "Page view",
                optional: {
                    url: y.href
                }
            });
            Q(a) && (s(v(a, "/counter", !1, !0)),
            ea = w())
        }
        ;
        h.prototype.reachGoal = function(a) {
            P(a);
            l && G("reachGoal", a, {
                title: "Reach goal",
                value: !0,
                required: {
                    goal: !0
                }
            });
            if (Q(a) && "goal"in a && a.goal) {
                var b = "";
                "value"in a && a.value && (b = parseInt(a.value) || "");
                s(v(a, "/tracker", !1, !0) + (";e=" + escape("RG:" + b + "/" + a.goal)))
            }
        }
        ;
        h.prototype.itemView = function(a) {
            l && G("itemView", a, {
                title: "Item view",
                optional: {
                    list: !0,
                    pagetype: !0,
                    productid: !0,
                    totalvalue: !0
                },
                fn: function(a, b) {
                    return ("" + b).replace(/;/g, " ")
                }
            });
            if (Q(a)) {
                var b = a.list || ""
                  , c = a.productid || ""
                  , d = a.pagetype || ""
                  , e = a.totalvalue || 0;
                (new Image).src = "https://ad.mail.ru/retarget/?counter=" + (a.id || C) + "&list=" + b + "&productid=" + c + "&pagetype=" + d + "&totalvalue=" + e + "&_=" + Math.random();
                b = "IV:" + e + "/" + ("" + b).replace(/;/g, " ") + ";" + ("" + c).replace(/;/g, " ") + ";" + ("" + d).replace(/;/g, " ");
                s(v(a, "/tracker", !1, !1) + (";e=" + escape(b)))
            }
        }
        ;
        h.prototype.sendEvent = function(a) {
            P(a);
            l && G("sendEvent", a, {
                title: "Send event",
                value: !0,
                required: {
                    category: !0,
                    action: !0
                },
                optional: {
                    label: !0
                },
                fn: function(a, b) {
                    return ("" + b).substr(0, 300).replace(/;/g, " ")
                }
            });
            if (Q(a) && "category"in a && a.category && "action"in a && a.action) {
                var b = ("" + a.category).substr(0, 300)
                  , c = ("" + a.action).substr(0, 300)
                  , d = "";
                "label"in a && a.label && (d = ("" + a.label).substr(0, 300));
                var e = "";
                "value"in a && a.value && (e = parseInt(a.value) || "");
                b = "CE:" + e + "/" + ("" + b).replace(/;/g, " ") + ";" + ("" + c).replace(/;/g, " ") + ";" + ("" + d).replace(/;/g, " ");
                s(v(a, "/tracker", !1, !1) + (";e=" + escape(b)))
            }
        }
        ;
        h.prototype.setUserID = function(a) {
            if (null === a || !1 === a || void 0 === a)
                this.deleteUserID();
            else {
                var b = typeof a;
                "number" !== b && "string" !== b ? l && console.warn("[TopMailRu] Error#1.17", "Invalid user ID in setUserID") : (A = a,
                l && console.info("[TopMailRu]: Global user ID = " + A))
            }
        }
        ;
        h.prototype.getUserID = function() {
            return A || 0 === A ? A : void 0
        }
        ;
        h.prototype.deleteUserID = function() {
            A = null;
            l && console.info("[TopMailRu]: Reset global user ID to null")
        }
        ;
        h.prototype.setUserParams = function(a) {
            if (null === a || !1 === a || void 0 === a)
                this.deleteUserParams();
            else if (N(a)) {
                try {
                    F = ja(!0, {}, a)
                } catch (b) {
                    l && console.warn("[TopMailRu] Error#1.22", "Invalid user params in setUserParams");
                    return
                }
                l && console.info("[TopMailRu]: Global user params = " + I(F, !1))
            } else
                l && console.warn("[TopMailRu] Error#1.21", "Invalid user params in setUserParams")
        }
        ;
        h.prototype.getUserParams = function() {
            var a = F ? F : void 0;
            return a ? ja(!0, {}, a) : void 0
        }
        ;
        h.prototype.deleteUserParams = function() {
            F = null;
            l && console.info("[TopMailRu]: Reset global user params to null")
        }
        ;
        h.prototype.getClientID = function() {
            var a = L;
            return a || 0 === a ? a : void 0
        }
        ;
        h.prototype._MT_event = function(a, b, c) {
            P(a);
            l && G(b, a, {
                title: c
            });
            Q(a) && s(v(a, "/tracker", !1, !0) + (";e=" + escape("MT:/" + b)))
        }
        ;
        h.prototype.miniAppEvent = function(a) {
            this._MT_event(a, "miniAppEvent", "VK Mini App Event")
        }
        ;
        h.prototype.processEvent = function(a, b) {
            if (a && "object" === typeof a)
                if ("type"in a) {
                    if ("onready" === a.type) {
                        if (b && 0 > b)
                            return;
                        this.callbackOnReady(a)
                    } else if (b && 0 < b)
                        return;
                    switch (a.type) {
                    case "pageView":
                        this.pageView(a);
                        break;
                    case "reachGoal":
                        this.reachGoal(a);
                        break;
                    case "itemView":
                        this.itemView(a);
                        break;
                    case "sendEvent":
                        this.sendEvent(a);
                        break;
                    case "setUserID":
                        "userid"in a && this.setUserID(a.userid);
                        break;
                    case "deleteUserID":
                        this.deleteUserID();
                        break;
                    case "setUserParams":
                        "params"in a && this.setUserParams(a.params);
                        break;
                    case "deleteUserParams":
                        this.deleteUserParams();
                        break;
                    case "miniAppEvent":
                        this.miniAppEvent(a)
                    }
                } else
                    l && console.warn("[TopMailRu] Error#1.19", "Unspecified type of push event");
            else
                l && console.warn("[TopMailRu] Error#1.18", "Invalid push event")
        }
        ;
        h.prototype.push = function(a) {
            for (var b = 0, c = arguments.length; b < c; b++)
                this.processEvent(arguments[b])
        }
        ;
        var Sa = !1;
        h.prototype.onready = function() {
            Sa || (Sa = !0,
            !Ja && !T && sb(kb, lb),
            Qa())
        }
        ;
        var Ta = !1;
        h.prototype.onload = function() {
            if (!Ta) {
                Ta = !0;
                fa = w();
                if (!rb && 0 < q.length) {
                    for (var a = ";e=" + escape("RT/load") + ";et=" + fa, b = 0; b < q.length; b++)
                        s(v(q[b], "/tracker", !0, !1) + a);
                    ea = fa
                }
                pb || setTimeout(function() {
                    Ha(2)
                }, 2E3);
                qb || setTimeout(function() {
                    Ha(15)
                }, 15E3)
            }
        }
        ;
        h.prototype.beat = function() {
            if (!Na && ua) {
                var a = w();
                if (!(12E4 < a - ua)) {
                    if (12E4 < a - ea)
                        for (var b = ";e=" + escape("RT/resend") + ";et=" + fa, c = 0; c < q.length; c++)
                            !1 !== q[c].beat && s(v(q[c], "/tracker", !1, !0) + b);
                    else
                        0 < ga.length && s("/tracker?" + W({
                            js: "13",
                            id: ga[0],
                            e: "RT/beat",
                            sid: na,
                            ids: ga.join(),
                            ver: oa,
                            _: Math.random()
                        }, ";"));
                    ea = a
                }
            }
        }
        ;
        var Ua = !1;
        h.prototype.unload = function() {
            if (!Ua && (Ua = !0,
            !Oa)) {
                var a;
                a = (a = Ea()) ? w() - a : void 0;
                a = ";e=" + escape("RT/unload") + ";et=" + w() + (a ? ";pvt=" + escape(a) : "");
                for (var b = 0; b < q.length; b++)
                    s(v(q[b], "/tracker", !1, !1) + a)
            }
        }
        ;
        h.prototype.activity = function(a) {
            ua = w()
        }
        ;
        var M = _tmr;
        _tmr = new h;
        for (var n = 0, V = M.length, H; n < V; n++)
            (H = M[n]) && "object" === typeof H && P(H);
        n = 0;
        for (V = M.length; n < V; n++)
            H = M[n],
            _tmr.processEvent(H, 1);
        n = 0;
        for (V = M.length; n < V; n++)
            H = M[n],
            _tmr.processEvent(H, -1);
        if ("complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll)
            _tmr.onready();
        else
            f.addEventListener ? u(f, "DOMContentLoaded", $) : f.attachEvent && u(f, "readystatechange", $);
        if ("complete" === f.readyState)
            _tmr.onload();
        else
            u(g, "load", Ma);
        Oa || (u(g, "unload", aa),
        u(g, "beforeunload", aa));
        if (!Na) {
            setInterval(function() {
                _tmr.beat()
            }, 6E4);
            try {
                for (var Va = "scroll gesturechange touchmove mousedown mousemove mouseup touch".split(" "), ub = function(a) {
                    u(f, a, function() {
                        _tmr.activity(a)
                    })
                }, n = 0; n < Va.length; n++)
                    ub(Va[n]);
                u(g, "scroll", function() {
                    _tmr.activity("scallback")
                })
            } catch (vb) {
                l && console.warn("[TopMailRu] Error#1.20", vb)
            }
        }
    }
}
)();
