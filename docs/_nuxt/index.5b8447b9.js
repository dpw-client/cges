import { _ as pi, o as Ha, c as Va, b as ze, w as cr, d as Qr, n as T0, q as Ar, s as ya, r as Be, u as br, v as Gr, x as bc, y as Bc, z as Uc, A as s0, h as jt, B as an, F as Ft, C as Hc, D as Vc, E as Wc, G as Gc, H as Kt, a as Sa, I as Yt, t as tn } from "./entry.a5863099.js";
import { V as Xc } from "./VBtn.c02db1df.js";
import { m as $c, a as zc } from "./index.3017f800.js";
import { d as jc, V as nn, a as sn, b as cn, e as fn, c as on } from "./VCard.540fb262.js";
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var gi = 1252,
  Kc = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4],
  E0 = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 },
  k0 = function (e) {
    Kc.indexOf(e) != -1 && (gi = E0[0] = e);
  };
function Yc() {
  k0(1252);
}
var Dr = function (e) {
  k0(e);
};
function mi() {
  Dr(1200), Yc();
}
function ln(e) {
  for (var a = [], r = 0, n = e.length; r < n; ++r) a[r] = e.charCodeAt(r);
  return a;
}
function Jc(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return a.join("");
}
function _i(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return a.join("");
}
var Wa = function (e) {
    var a = e.charCodeAt(0),
      r = e.charCodeAt(1);
    return a == 255 && r == 254 ? Jc(e.slice(2)) : a == 254 && r == 255 ? _i(e.slice(2)) : a == 65279 ? e.slice(1) : e;
  },
  gt = function (a) {
    return String.fromCharCode(a);
  },
  un = function (a) {
    return String.fromCharCode(a);
  },
  ea,
  aa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function hn(e) {
  for (var a = "", r = 0, n = 0, t = 0, i = 0, s = 0, c = 0, f = 0, o = 0; o < e.length; ) (r = e.charCodeAt(o++)), (i = r >> 2), (n = e.charCodeAt(o++)), (s = ((r & 3) << 4) | (n >> 4)), (t = e.charCodeAt(o++)), (c = ((n & 15) << 2) | (t >> 6)), (f = t & 63), isNaN(n) ? (c = f = 64) : isNaN(t) && (f = 64), (a += aa.charAt(i) + aa.charAt(s) + aa.charAt(c) + aa.charAt(f));
  return a;
}
function _r(e) {
  var a = "",
    r = 0,
    n = 0,
    t = 0,
    i = 0,
    s = 0,
    c = 0,
    f = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var o = 0; o < e.length; ) (i = aa.indexOf(e.charAt(o++))), (s = aa.indexOf(e.charAt(o++))), (r = (i << 2) | (s >> 4)), (a += String.fromCharCode(r)), (c = aa.indexOf(e.charAt(o++))), (n = ((s & 15) << 4) | (c >> 2)), c !== 64 && (a += String.fromCharCode(n)), (f = aa.indexOf(e.charAt(o++))), (t = ((c & 3) << 6) | f), f !== 64 && (a += String.fromCharCode(t));
  return a;
}
var Te = (function () {
    return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
  })(),
  ga = (function () {
    if (typeof Buffer < "u") {
      var e = !Buffer.from;
      if (!e)
        try {
          Buffer.from("foo", "utf8");
        } catch {
          e = !0;
        }
      return e
        ? function (a, r) {
            return r ? new Buffer(a, r) : new Buffer(a);
          }
        : Buffer.from.bind(Buffer);
    }
    return function () {};
  })();
function ia(e) {
  return Te ? (Buffer.alloc ? Buffer.alloc(e) : new Buffer(e)) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function xn(e) {
  return Te ? (Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e)) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Rr = function (a) {
  return Te
    ? ga(a, "binary")
    : a.split("").map(function (r) {
        return r.charCodeAt(0) & 255;
      });
};
function ma(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join("");
  for (var a = [], r = 0; r < e.length; ++r) a[r] = String.fromCharCode(e[r]);
  return a.join("");
}
function w0(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return w0(new Uint8Array(e));
  for (var a = new Array(e.length), r = 0; r < e.length; ++r) a[r] = e[r];
  return a;
}
var ra = Te
  ? function (e) {
      return Buffer.concat(
        e.map(function (a) {
          return Buffer.isBuffer(a) ? a : ga(a);
        })
      );
    }
  : function (e) {
      if (typeof Uint8Array < "u") {
        var a = 0,
          r = 0;
        for (a = 0; a < e.length; ++a) r += e[a].length;
        var n = new Uint8Array(r),
          t = 0;
        for (a = 0, r = 0; a < e.length; r += t, ++a)
          if (((t = e[a].length), e[a] instanceof Uint8Array)) n.set(e[a], r);
          else {
            if (typeof e[a] == "string") throw "wtf";
            n.set(new Uint8Array(e[a]), r);
          }
        return n;
      }
      return [].concat.apply(
        [],
        e.map(function (i) {
          return Array.isArray(i) ? i : [].slice.call(i);
        })
      );
    };
function qc(e) {
  for (var a = [], r = 0, n = e.length + 250, t = ia(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128) t[r++] = s;
    else if (s < 2048) (t[r++] = 192 | ((s >> 6) & 31)), (t[r++] = 128 | (s & 63));
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var c = e.charCodeAt(++i) & 1023;
      (t[r++] = 240 | ((s >> 8) & 7)), (t[r++] = 128 | ((s >> 2) & 63)), (t[r++] = 128 | ((c >> 6) & 15) | ((s & 3) << 4)), (t[r++] = 128 | (c & 63));
    } else (t[r++] = 224 | ((s >> 12) & 15)), (t[r++] = 128 | ((s >> 6) & 63)), (t[r++] = 128 | (s & 63));
    r > n && (a.push(t.slice(0, r)), (r = 0), (t = ia(65535)), (n = 65530));
  }
  return a.push(t.slice(0, r)), ra(a);
}
var ur = /\u0000/g,
  Ga = /[\u0001-\u0006]/g;
function Ca(e) {
  for (var a = "", r = e.length - 1; r >= 0; ) a += e.charAt(r--);
  return a;
}
function Ir(e, a) {
  var r = "" + e;
  return r.length >= a ? r : De("0", a - r.length) + r;
}
function A0(e, a) {
  var r = "" + e;
  return r.length >= a ? r : De(" ", a - r.length) + r;
}
function yt(e, a) {
  var r = "" + e;
  return r.length >= a ? r : r + De(" ", a - r.length);
}
function Zc(e, a) {
  var r = "" + Math.round(e);
  return r.length >= a ? r : De("0", a - r.length) + r;
}
function Qc(e, a) {
  var r = "" + e;
  return r.length >= a ? r : De("0", a - r.length) + r;
}
var dn = Math.pow(2, 32);
function wa(e, a) {
  if (e > dn || e < -dn) return Zc(e, a);
  var r = Math.round(e);
  return Qc(r, a);
}
function Ct(e, a) {
  return (a = a || 0), e.length >= 7 + a && (e.charCodeAt(a) | 32) === 103 && (e.charCodeAt(a + 1) | 32) === 101 && (e.charCodeAt(a + 2) | 32) === 110 && (e.charCodeAt(a + 3) | 32) === 101 && (e.charCodeAt(a + 4) | 32) === 114 && (e.charCodeAt(a + 5) | 32) === 97 && (e.charCodeAt(a + 6) | 32) === 108;
}
var vn = [
    ["Sun", "Sunday"],
    ["Mon", "Monday"],
    ["Tue", "Tuesday"],
    ["Wed", "Wednesday"],
    ["Thu", "Thursday"],
    ["Fri", "Friday"],
    ["Sat", "Saturday"],
  ],
  Jt = [
    ["J", "Jan", "January"],
    ["F", "Feb", "February"],
    ["M", "Mar", "March"],
    ["A", "Apr", "April"],
    ["M", "May", "May"],
    ["J", "Jun", "June"],
    ["J", "Jul", "July"],
    ["A", "Aug", "August"],
    ["S", "Sep", "September"],
    ["O", "Oct", "October"],
    ["N", "Nov", "November"],
    ["D", "Dec", "December"],
  ];
function ef(e) {
  return (
    e || (e = {}),
    (e[0] = "General"),
    (e[1] = "0"),
    (e[2] = "0.00"),
    (e[3] = "#,##0"),
    (e[4] = "#,##0.00"),
    (e[9] = "0%"),
    (e[10] = "0.00%"),
    (e[11] = "0.00E+00"),
    (e[12] = "# ?/?"),
    (e[13] = "# ??/??"),
    (e[14] = "m/d/yy"),
    (e[15] = "d-mmm-yy"),
    (e[16] = "d-mmm"),
    (e[17] = "mmm-yy"),
    (e[18] = "h:mm AM/PM"),
    (e[19] = "h:mm:ss AM/PM"),
    (e[20] = "h:mm"),
    (e[21] = "h:mm:ss"),
    (e[22] = "m/d/yy h:mm"),
    (e[37] = "#,##0 ;(#,##0)"),
    (e[38] = "#,##0 ;[Red](#,##0)"),
    (e[39] = "#,##0.00;(#,##0.00)"),
    (e[40] = "#,##0.00;[Red](#,##0.00)"),
    (e[45] = "mm:ss"),
    (e[46] = "[h]:mm:ss"),
    (e[47] = "mmss.0"),
    (e[48] = "##0.0E+0"),
    (e[49] = "@"),
    (e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'),
    e
  );
}
var ge = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"上午/下午 "hh"時"mm"分"ss"秒 "' },
  pn = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 },
  rf = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    63: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)',
  };
function Ot(e, a, r) {
  for (var n = e < 0 ? -1 : 1, t = e * n, i = 0, s = 1, c = 0, f = 1, o = 0, l = 0, h = Math.floor(t); o < a && ((h = Math.floor(t)), (c = h * s + i), (l = h * o + f), !(t - h < 5e-8)); ) (t = 1 / (t - h)), (i = s), (s = c), (f = o), (o = l);
  if ((l > a && (o > a ? ((l = f), (c = i)) : ((l = o), (c = s))), !r)) return [0, n * c, l];
  var u = Math.floor((n * c) / l);
  return [u, n * c - u * l, l];
}
function ua(e, a, r) {
  if (e > 2958465 || e < 0) return null;
  var n = e | 0,
    t = Math.floor(86400 * (e - n)),
    i = 0,
    s = [],
    c = { D: n, T: t, u: 86400 * (e - n) - t, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if ((Math.abs(c.u) < 1e-6 && (c.u = 0), a && a.date1904 && (n += 1462), c.u > 0.9999 && ((c.u = 0), ++t == 86400 && ((c.T = t = 0), ++n, ++c.D)), n === 60)) (s = r ? [1317, 10, 29] : [1900, 2, 29]), (i = 3);
  else if (n === 0) (s = r ? [1317, 8, 29] : [1900, 1, 0]), (i = 6);
  else {
    n > 60 && --n;
    var f = new Date(1900, 0, 1);
    f.setDate(f.getDate() + n - 1), (s = [f.getFullYear(), f.getMonth() + 1, f.getDate()]), (i = f.getDay()), n < 60 && (i = (i + 6) % 7), r && (i = ff(f, s));
  }
  return (c.y = s[0]), (c.m = s[1]), (c.d = s[2]), (c.S = t % 60), (t = Math.floor(t / 60)), (c.M = t % 60), (t = Math.floor(t / 60)), (c.H = t), (c.q = i), c;
}
var Ti = new Date(1899, 11, 31, 0, 0, 0),
  af = Ti.getTime(),
  tf = new Date(1900, 2, 1, 0, 0, 0);
function Ei(e, a) {
  var r = e.getTime();
  return a ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= tf && (r += 24 * 60 * 60 * 1e3), (r - (af + (e.getTimezoneOffset() - Ti.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function S0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function nf(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function sf(e) {
  var a = e < 0 ? 12 : 11,
    r = S0(e.toFixed(12));
  return r.length <= a || ((r = e.toPrecision(10)), r.length <= a) ? r : e.toExponential(5);
}
function cf(e) {
  var a = S0(e.toFixed(11));
  return a.length > (e < 0 ? 12 : 11) || a === "0" || a === "-0" ? e.toPrecision(6) : a;
}
function rt(e) {
  var a = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    r;
  return a >= -4 && a <= -1 ? (r = e.toPrecision(10 + a)) : Math.abs(a) <= 9 ? (r = sf(e)) : a === 10 ? (r = e.toFixed(10).substr(0, 12)) : (r = cf(e)), S0(nf(r.toUpperCase()));
}
function da(e, a) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : rt(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return Sr(14, Ei(e, a && a.date1904), a);
  }
  throw new Error("unsupported value in General format: " + e);
}
function ff(e, a) {
  a[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function of(e, a, r, n) {
  var t = "",
    i = 0,
    s = 0,
    c = r.y,
    f,
    o = 0;
  switch (e) {
    case 98:
      c = r.y + 543;
    case 121:
      switch (a.length) {
        case 1:
        case 2:
          (f = c % 100), (o = 2);
          break;
        default:
          (f = c % 1e4), (o = 4);
          break;
      }
      break;
    case 109:
      switch (a.length) {
        case 1:
        case 2:
          (f = r.m), (o = a.length);
          break;
        case 3:
          return Jt[r.m - 1][1];
        case 5:
          return Jt[r.m - 1][0];
        default:
          return Jt[r.m - 1][2];
      }
      break;
    case 100:
      switch (a.length) {
        case 1:
        case 2:
          (f = r.d), (o = a.length);
          break;
        case 3:
          return vn[r.q][0];
        default:
          return vn[r.q][1];
      }
      break;
    case 104:
      switch (a.length) {
        case 1:
        case 2:
          (f = 1 + ((r.H + 11) % 12)), (o = a.length);
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 72:
      switch (a.length) {
        case 1:
        case 2:
          (f = r.H), (o = a.length);
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 77:
      switch (a.length) {
        case 1:
        case 2:
          (f = r.M), (o = a.length);
          break;
        default:
          throw "bad minute format: " + a;
      }
      break;
    case 115:
      if (a != "s" && a != "ss" && a != ".0" && a != ".00" && a != ".000") throw "bad second format: " + a;
      return r.u === 0 && (a == "s" || a == "ss") ? Ir(r.S, a.length) : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1), (i = Math.round(s * (r.S + r.u))), i >= 60 * s && (i = 0), a === "s" ? (i === 0 ? "0" : "" + i / s) : ((t = Ir(i, 2 + n)), a === "ss" ? t.substr(0, 2) : "." + t.substr(2, a.length - 1)));
    case 90:
      switch (a) {
        case "[h]":
        case "[hh]":
          f = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          f = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          f = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + a;
      }
      o = a.length === 3 ? 1 : 2;
      break;
    case 101:
      (f = c), (o = 1);
      break;
  }
  var l = o > 0 ? Ir(f, o) : "";
  return l;
}
function ta(e) {
  var a = 3;
  if (e.length <= a) return e;
  for (var r = e.length % a, n = e.substr(0, r); r != e.length; r += a) n += (n.length > 0 ? "," : "") + e.substr(r, a);
  return n;
}
var ki = /%/g;
function lf(e, a, r) {
  var n = a.replace(ki, ""),
    t = a.length - n.length;
  return $r(e, n, r * Math.pow(10, 2 * t)) + De("%", t);
}
function uf(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; ) --n;
  return $r(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function wi(e, a) {
  var r,
    n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + wi(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var i = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if ((i < 0 && (i += t), (r = (a / Math.pow(10, i)).toPrecision(n + 1 + ((t + i) % t))), r.indexOf("e") === -1)) {
      var s = Math.floor(Math.log(a) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? (r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i)) : (r += "E+" + (s - i)); r.substr(0, 2) === "0."; ) (r = r.charAt(0) + r.substr(2, t) + "." + r.substr(2 + t)), (r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0."));
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (c, f, o, l) {
      return f + o + l.substr(0, (t + i) % t) + "." + l.substr(i) + "E";
    });
  } else r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var Ai = /# (\?+)( ?)\/( ?)(\d+)/;
function hf(e, a, r) {
  var n = parseInt(e[4], 10),
    t = Math.round(a * n),
    i = Math.floor(t / n),
    s = t - i * n,
    c = n;
  return r + (i === 0 ? "" : "" + i) + " " + (s === 0 ? De(" ", e[1].length + 1 + e[4].length) : A0(s, e[1].length) + e[2] + "/" + e[3] + Ir(c, e[4].length));
}
function xf(e, a, r) {
  return r + (a === 0 ? "" : "" + a) + De(" ", e[1].length + 2 + e[4].length);
}
var Si = /^#*0*\.([0#]+)/,
  Fi = /\).*[0#]/,
  yi = /\(###\) ###\\?-####/;
function fr(e) {
  for (var a = "", r, n = 0; n != e.length; ++n)
    switch ((r = e.charCodeAt(n))) {
      case 35:
        break;
      case 63:
        a += " ";
        break;
      case 48:
        a += "0";
        break;
      default:
        a += String.fromCharCode(r);
    }
  return a;
}
function gn(e, a) {
  var r = Math.pow(10, a);
  return "" + Math.round(e * r) / r;
}
function mn(e, a) {
  var r = e - Math.floor(e),
    n = Math.pow(10, a);
  return a < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function df(e, a) {
  return a < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, a))).length ? 1 : 0;
}
function vf(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : (e - 1) | 0) : "" + Math.floor(e);
}
function kr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(Fi)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? kr("n", n, r) : "(" + kr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return uf(e, a, r);
  if (a.indexOf("%") !== -1) return lf(e, a, r);
  if (a.indexOf("E") !== -1) return wi(a, r);
  if (a.charCodeAt(0) === 36) return "$" + kr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t,
    i,
    s,
    c,
    f = Math.abs(r),
    o = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return o + wa(f, a.length);
  if (a.match(/^[#?]+$/)) return (t = wa(r, 0)), t === "0" && (t = ""), t.length > a.length ? t : fr(a.substr(0, a.length - t.length)) + t;
  if ((i = a.match(Ai))) return hf(i, f, o);
  if (a.match(/^#+0+$/)) return o + wa(f, a.length - a.indexOf("0"));
  if ((i = a.match(Si)))
    return (
      (t = gn(r, i[1].length)
        .replace(/^([^\.]+)$/, "$1." + fr(i[1]))
        .replace(/\.$/, "." + fr(i[1]))
        .replace(/\.(\d*)$/, function (v, x) {
          return "." + x + De("0", fr(i[1]).length - x.length);
        })),
      a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".")
    );
  if (((a = a.replace(/^#+([0.])/, "$1")), (i = a.match(/^(0*)\.(#*)$/))))
    return (
      o +
      gn(f, i[2].length)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, i[1].length ? "0." : ".")
    );
  if ((i = a.match(/^#{1,3},##0(\.?)$/))) return o + ta(wa(f, 0));
  if ((i = a.match(/^#,##0\.([#0]*0)$/))) return r < 0 ? "-" + kr(e, a, -r) : ta("" + (Math.floor(r) + df(r, i[1].length))) + "." + Ir(mn(r, i[1].length), i[1].length);
  if ((i = a.match(/^#,#*,#0/))) return kr(e, a.replace(/^#,#*,/, ""), r);
  if ((i = a.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (t = Ca(kr(e, a.replace(/[\\-]/g, ""), r))),
      (s = 0),
      Ca(
        Ca(a.replace(/\\/g, "")).replace(/[0#]/g, function (v) {
          return s < t.length ? t.charAt(s++) : v === "0" ? "0" : "";
        })
      )
    );
  if (a.match(yi)) return (t = kr(e, "##########", r)), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var l = "";
  if ((i = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))) return (s = Math.min(i[4].length, 7)), (c = Ot(f, Math.pow(10, s) - 1, !1)), (t = "" + o), (l = $r("n", i[1], c[1])), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), (t += l + i[2] + "/" + i[3]), (l = yt(c[2], s)), l.length < i[4].length && (l = fr(i[4].substr(i[4].length - l.length)) + l), (t += l), t;
  if ((i = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))) return (s = Math.min(Math.max(i[1].length, i[4].length), 7)), (c = Ot(f, Math.pow(10, s) - 1, !0)), o + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? A0(c[1], s) + i[2] + "/" + i[3] + yt(c[2], s) : De(" ", 2 * s + 1 + i[2].length + i[3].length));
  if ((i = a.match(/^[#0?]+$/))) return (t = wa(r, 0)), a.length <= t.length ? t : fr(a.substr(0, a.length - t.length)) + t;
  if ((i = a.match(/^([#0?]+)\.([#0]+)$/))) {
    (t = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1")), (s = t.indexOf("."));
    var h = a.indexOf(".") - s,
      u = a.length - t.length - h;
    return fr(a.substr(0, h) + t + a.substr(a.length - u));
  }
  if ((i = a.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = mn(r, i[1].length)),
      r < 0
        ? "-" + kr(e, a, -r)
        : ta(vf(r))
            .replace(/^\d,\d{3}$/, "0$&")
            .replace(/^\d*$/, function (v) {
              return "00," + (v.length < 3 ? Ir(0, 3 - v.length) : "") + v;
            }) +
          "." +
          Ir(s, i[1].length)
    );
  switch (a) {
    case "###,##0.00":
      return kr(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = ta(wa(f, 0));
      return d !== "0" ? o + d : "";
    case "###,###.00":
      return kr(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return kr(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + a + "|");
}
function pf(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; ) --n;
  return $r(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function gf(e, a, r) {
  var n = a.replace(ki, ""),
    t = a.length - n.length;
  return $r(e, n, r * Math.pow(10, 2 * t)) + De("%", t);
}
function Ci(e, a) {
  var r,
    n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + Ci(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var i = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if ((i < 0 && (i += t), (r = (a / Math.pow(10, i)).toPrecision(n + 1 + ((t + i) % t))), !r.match(/[Ee]/))) {
      var s = Math.floor(Math.log(a) * Math.LOG10E);
      r.indexOf(".") === -1 ? (r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i)) : (r += "E+" + (s - i)), (r = r.replace(/\+-/, "-"));
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (c, f, o, l) {
      return f + o + l.substr(0, (t + i) % t) + "." + l.substr(i) + "E";
    });
  } else r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Mr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(Fi)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Mr("n", n, r) : "(" + Mr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return pf(e, a, r);
  if (a.indexOf("%") !== -1) return gf(e, a, r);
  if (a.indexOf("E") !== -1) return Ci(a, r);
  if (a.charCodeAt(0) === 36) return "$" + Mr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t,
    i,
    s,
    c,
    f = Math.abs(r),
    o = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return o + Ir(f, a.length);
  if (a.match(/^[#?]+$/)) return (t = "" + r), r === 0 && (t = ""), t.length > a.length ? t : fr(a.substr(0, a.length - t.length)) + t;
  if ((i = a.match(Ai))) return xf(i, f, o);
  if (a.match(/^#+0+$/)) return o + Ir(f, a.length - a.indexOf("0"));
  if ((i = a.match(Si)))
    return (
      (t = ("" + r).replace(/^([^\.]+)$/, "$1." + fr(i[1])).replace(/\.$/, "." + fr(i[1]))),
      (t = t.replace(/\.(\d*)$/, function (v, x) {
        return "." + x + De("0", fr(i[1]).length - x.length);
      })),
      a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".")
    );
  if (((a = a.replace(/^#+([0.])/, "$1")), (i = a.match(/^(0*)\.(#*)$/))))
    return (
      o +
      ("" + f)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, i[1].length ? "0." : ".")
    );
  if ((i = a.match(/^#{1,3},##0(\.?)$/))) return o + ta("" + f);
  if ((i = a.match(/^#,##0\.([#0]*0)$/))) return r < 0 ? "-" + Mr(e, a, -r) : ta("" + r) + "." + De("0", i[1].length);
  if ((i = a.match(/^#,#*,#0/))) return Mr(e, a.replace(/^#,#*,/, ""), r);
  if ((i = a.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (t = Ca(Mr(e, a.replace(/[\\-]/g, ""), r))),
      (s = 0),
      Ca(
        Ca(a.replace(/\\/g, "")).replace(/[0#]/g, function (v) {
          return s < t.length ? t.charAt(s++) : v === "0" ? "0" : "";
        })
      )
    );
  if (a.match(yi)) return (t = Mr(e, "##########", r)), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var l = "";
  if ((i = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))) return (s = Math.min(i[4].length, 7)), (c = Ot(f, Math.pow(10, s) - 1, !1)), (t = "" + o), (l = $r("n", i[1], c[1])), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), (t += l + i[2] + "/" + i[3]), (l = yt(c[2], s)), l.length < i[4].length && (l = fr(i[4].substr(i[4].length - l.length)) + l), (t += l), t;
  if ((i = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))) return (s = Math.min(Math.max(i[1].length, i[4].length), 7)), (c = Ot(f, Math.pow(10, s) - 1, !0)), o + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? A0(c[1], s) + i[2] + "/" + i[3] + yt(c[2], s) : De(" ", 2 * s + 1 + i[2].length + i[3].length));
  if ((i = a.match(/^[#0?]+$/))) return (t = "" + r), a.length <= t.length ? t : fr(a.substr(0, a.length - t.length)) + t;
  if ((i = a.match(/^([#0]+)\.([#0]+)$/))) {
    (t = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1")), (s = t.indexOf("."));
    var h = a.indexOf(".") - s,
      u = a.length - t.length - h;
    return fr(a.substr(0, h) + t + a.substr(a.length - u));
  }
  if ((i = a.match(/^00,000\.([#0]*0)$/)))
    return r < 0
      ? "-" + Mr(e, a, -r)
      : ta("" + r)
          .replace(/^\d,\d{3}$/, "0$&")
          .replace(/^\d*$/, function (v) {
            return "00," + (v.length < 3 ? Ir(0, 3 - v.length) : "") + v;
          }) +
          "." +
          Ir(0, i[1].length);
  switch (a) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = ta("" + f);
      return d !== "0" ? o + d : "";
    default:
      if (a.match(/\.[0#?]*$/)) return Mr(e, a.slice(0, a.lastIndexOf(".")), r) + fr(a.slice(a.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + a + "|");
}
function $r(e, a, r) {
  return (r | 0) === r ? Mr(e, a, r) : kr(e, a, r);
}
function mf(e) {
  for (var a = [], r = !1, n = 0, t = 0; n < e.length; ++n)
    switch (e.charCodeAt(n)) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        (a[a.length] = e.substr(t, n - t)), (t = n + 1);
    }
  if (((a[a.length] = e.substr(t)), r === !0)) throw new Error("Format |" + e + "| unterminated string ");
  return a;
}
var Oi = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Na(e) {
  for (var a = 0, r = "", n = ""; a < e.length; )
    switch ((r = e.charAt(a))) {
      case "G":
        Ct(e, a) && (a += 6), a++;
        break;
      case '"':
        for (; e.charCodeAt(++a) !== 34 && a < e.length; );
        ++a;
        break;
      case "\\":
        a += 2;
        break;
      case "_":
        a += 2;
        break;
      case "@":
        ++a;
        break;
      case "B":
      case "b":
        if (e.charAt(a + 1) === "1" || e.charAt(a + 1) === "2") return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(a, 3).toUpperCase() === "A/P" || e.substr(a, 5).toUpperCase() === "AM/PM" || e.substr(a, 5).toUpperCase() === "上午/下午") return !0;
        ++a;
        break;
      case "[":
        for (n = r; e.charAt(a++) !== "]" && a < e.length; ) n += e.charAt(a);
        if (n.match(Oi)) return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; a < e.length && ("0#?.,E+-%".indexOf((r = e.charAt(++a))) > -1 || (r == "\\" && e.charAt(a + 1) == "-" && "0#".indexOf(e.charAt(a + 2)) > -1)); );
        break;
      case "?":
        for (; e.charAt(++a) === r; );
        break;
      case "*":
        ++a, (e.charAt(a) == " " || e.charAt(a) == "*") && ++a;
        break;
      case "(":
      case ")":
        ++a;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; a < e.length && "0123456789".indexOf(e.charAt(++a)) > -1; );
        break;
      case " ":
        ++a;
        break;
      default:
        ++a;
        break;
    }
  return !1;
}
function _f(e, a, r, n) {
  for (var t = [], i = "", s = 0, c = "", f = "t", o, l, h, u = "H"; s < e.length; )
    switch ((c = e.charAt(s))) {
      case "G":
        if (!Ct(e, s)) throw new Error("unrecognized character " + c + " in " + e);
        (t[t.length] = { t: "G", v: "General" }), (s += 7);
        break;
      case '"':
        for (i = ""; (h = e.charCodeAt(++s)) !== 34 && s < e.length; ) i += String.fromCharCode(h);
        (t[t.length] = { t: "t", v: i }), ++s;
        break;
      case "\\":
        var d = e.charAt(++s),
          v = d === "(" || d === ")" ? d : "t";
        (t[t.length] = { t: v, v: d }), ++s;
        break;
      case "_":
        (t[t.length] = { t: "t", v: " " }), (s += 2);
        break;
      case "@":
        (t[t.length] = { t: "T", v: a }), ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (o == null && ((o = ua(a, r, e.charAt(s + 1) === "2")), o == null)) return "";
          (t[t.length] = { t: "X", v: e.substr(s, 2) }), (f = c), (s += 2);
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        c = c.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (a < 0 || (o == null && ((o = ua(a, r)), o == null))) return "";
        for (i = c; ++s < e.length && e.charAt(s).toLowerCase() === c; ) i += c;
        c === "m" && f.toLowerCase() === "h" && (c = "M"), c === "h" && (c = u), (t[t.length] = { t: c, v: i }), (f = c);
        break;
      case "A":
      case "a":
      case "上":
        var x = { t: c, v: c };
        if ((o == null && (o = ua(a, r)), e.substr(s, 3).toUpperCase() === "A/P" ? (o != null && (x.v = o.H >= 12 ? "P" : "A"), (x.t = "T"), (u = "h"), (s += 3)) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (o != null && (x.v = o.H >= 12 ? "PM" : "AM"), (x.t = "T"), (s += 5), (u = "h")) : e.substr(s, 5).toUpperCase() === "上午/下午" ? (o != null && (x.v = o.H >= 12 ? "下午" : "上午"), (x.t = "T"), (s += 5), (u = "h")) : ((x.t = "t"), ++s), o == null && x.t === "T")) return "";
        (t[t.length] = x), (f = c);
        break;
      case "[":
        for (i = c; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
        if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
        if (i.match(Oi)) {
          if (o == null && ((o = ua(a, r)), o == null)) return "";
          (t[t.length] = { t: "Z", v: i.toLowerCase() }), (f = i.charAt(1));
        } else i.indexOf("$") > -1 && ((i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$"), Na(e) || (t[t.length] = { t: "t", v: i }));
        break;
      case ".":
        if (o != null) {
          for (i = c; ++s < e.length && (c = e.charAt(s)) === "0"; ) i += c;
          t[t.length] = { t: "s", v: i };
          break;
        }
      case "0":
      case "#":
        for (i = c; ++s < e.length && "0#?.,E+-%".indexOf((c = e.charAt(s))) > -1; ) i += c;
        t[t.length] = { t: "n", v: i };
        break;
      case "?":
        for (i = c; e.charAt(++s) === c; ) i += c;
        (t[t.length] = { t: c, v: i }), (f = c);
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      case "(":
      case ")":
        (t[t.length] = { t: n === 1 ? "t" : c, v: c }), ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (i = c; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; ) i += e.charAt(s);
        t[t.length] = { t: "D", v: i };
        break;
      case " ":
        (t[t.length] = { t: c, v: c }), ++s;
        break;
      case "$":
        (t[t.length] = { t: "t", v: "$" }), ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(c) === -1) throw new Error("unrecognized character " + c + " in " + e);
        (t[t.length] = { t: "t", v: c }), ++s;
        break;
    }
  var g = 0,
    A = 0,
    C;
  for (s = t.length - 1, f = "t"; s >= 0; --s)
    switch (t[s].t) {
      case "h":
      case "H":
        (t[s].t = u), (f = "h"), g < 1 && (g = 1);
        break;
      case "s":
        (C = t[s].v.match(/\.0+$/)) && (A = Math.max(A, C[0].length - 1)), g < 3 && (g = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        f = t[s].t;
        break;
      case "m":
        f === "s" && ((t[s].t = "M"), g < 2 && (g = 2));
        break;
      case "X":
        break;
      case "Z":
        g < 1 && t[s].v.match(/[Hh]/) && (g = 1), g < 2 && t[s].v.match(/[Mm]/) && (g = 2), g < 3 && t[s].v.match(/[Ss]/) && (g = 3);
    }
  switch (g) {
    case 0:
      break;
    case 1:
      o.u >= 0.5 && ((o.u = 0), ++o.S), o.S >= 60 && ((o.S = 0), ++o.M), o.M >= 60 && ((o.M = 0), ++o.H);
      break;
    case 2:
      o.u >= 0.5 && ((o.u = 0), ++o.S), o.S >= 60 && ((o.S = 0), ++o.M);
      break;
  }
  var _ = "",
    D;
  for (s = 0; s < t.length; ++s)
    switch (t[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        (t[s].v = ""), (t[s].t = ";");
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        (t[s].v = of(t[s].t.charCodeAt(0), t[s].v, o, A)), (t[s].t = "t");
        break;
      case "n":
      case "?":
        for (D = s + 1; t[D] != null && ((c = t[D].t) === "?" || c === "D" || ((c === " " || c === "t") && t[D + 1] != null && (t[D + 1].t === "?" || (t[D + 1].t === "t" && t[D + 1].v === "/"))) || (t[s].t === "(" && (c === " " || c === "n" || c === ")")) || (c === "t" && (t[D].v === "/" || (t[D].v === " " && t[D + 1] != null && t[D + 1].t == "?")))); ) (t[s].v += t[D].v), (t[D] = { v: "", t: ";" }), ++D;
        (_ += t[s].v), (s = D - 1);
        break;
      case "G":
        (t[s].t = "t"), (t[s].v = da(a, r));
        break;
    }
  var b = "",
    N,
    S;
  if (_.length > 0) {
    _.charCodeAt(0) == 40 ? ((N = a < 0 && _.charCodeAt(0) === 45 ? -a : a), (S = $r("n", _, N))) : ((N = a < 0 && n > 1 ? -a : a), (S = $r("n", _, N)), N < 0 && t[0] && t[0].t == "t" && ((S = S.substr(1)), (t[0].v = "-" + t[0].v))), (D = S.length - 1);
    var H = t.length;
    for (s = 0; s < t.length; ++s)
      if (t[s] != null && t[s].t != "t" && t[s].v.indexOf(".") > -1) {
        H = s;
        break;
      }
    var O = t.length;
    if (H === t.length && S.indexOf("E") === -1) {
      for (s = t.length - 1; s >= 0; --s) t[s] == null || "n?".indexOf(t[s].t) === -1 || (D >= t[s].v.length - 1 ? ((D -= t[s].v.length), (t[s].v = S.substr(D + 1, t[s].v.length))) : D < 0 ? (t[s].v = "") : ((t[s].v = S.substr(0, D + 1)), (D = -1)), (t[s].t = "t"), (O = s));
      D >= 0 && O < t.length && (t[O].v = S.substr(0, D + 1) + t[O].v);
    } else if (H !== t.length && S.indexOf("E") === -1) {
      for (D = S.indexOf(".") - 1, s = H; s >= 0; --s)
        if (!(t[s] == null || "n?".indexOf(t[s].t) === -1)) {
          for (l = t[s].v.indexOf(".") > -1 && s === H ? t[s].v.indexOf(".") - 1 : t[s].v.length - 1, b = t[s].v.substr(l + 1); l >= 0; --l) D >= 0 && (t[s].v.charAt(l) === "0" || t[s].v.charAt(l) === "#") && (b = S.charAt(D--) + b);
          (t[s].v = b), (t[s].t = "t"), (O = s);
        }
      for (D >= 0 && O < t.length && (t[O].v = S.substr(0, D + 1) + t[O].v), D = S.indexOf(".") + 1, s = H; s < t.length; ++s)
        if (!(t[s] == null || ("n?(".indexOf(t[s].t) === -1 && s !== H))) {
          for (l = t[s].v.indexOf(".") > -1 && s === H ? t[s].v.indexOf(".") + 1 : 0, b = t[s].v.substr(0, l); l < t[s].v.length; ++l) D < S.length && (b += S.charAt(D++));
          (t[s].v = b), (t[s].t = "t"), (O = s);
        }
    }
  }
  for (s = 0; s < t.length; ++s) t[s] != null && "n?".indexOf(t[s].t) > -1 && ((N = n > 1 && a < 0 && s > 0 && t[s - 1].v === "-" ? -a : a), (t[s].v = $r(t[s].t, t[s].v, N)), (t[s].t = "t"));
  var X = "";
  for (s = 0; s !== t.length; ++s) t[s] != null && (X += t[s].v);
  return X;
}
var _n = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Tn(e, a) {
  if (a == null) return !1;
  var r = parseFloat(a[2]);
  switch (a[1]) {
    case "=":
      if (e == r) return !0;
      break;
    case ">":
      if (e > r) return !0;
      break;
    case "<":
      if (e < r) return !0;
      break;
    case "<>":
      if (e != r) return !0;
      break;
    case ">=":
      if (e >= r) return !0;
      break;
    case "<=":
      if (e <= r) return !0;
      break;
  }
  return !1;
}
function Tf(e, a) {
  var r = mf(e),
    n = r.length,
    t = r[n - 1].indexOf("@");
  if ((n < 4 && t > -1 && --n, r.length > 4)) throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof a != "number") return [4, r.length === 4 || t > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = t > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = t > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = t > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var i = a > 0 ? r[0] : a < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [n, i];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(_n),
      c = r[1].match(_n);
    return Tn(a, s) ? [n, r[0]] : Tn(a, c) ? [n, r[1]] : [n, r[s != null && c != null ? 2 : 1]];
  }
  return [n, i];
}
function Sr(e, a, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? (n = r.dateNF) : (n = e);
      break;
    case "number":
      e == 14 && r.dateNF ? (n = r.dateNF) : (n = (r.table != null ? r.table : ge)[e]), n == null && (n = (r.table && r.table[pn[e]]) || ge[pn[e]]), n == null && (n = rf[e] || "General");
      break;
  }
  if (Ct(n, 0)) return da(a, r);
  a instanceof Date && (a = Ei(a, r.date1904));
  var t = Tf(n, a);
  if (Ct(t[1])) return da(a, r);
  if (a === !0) a = "TRUE";
  else if (a === !1) a = "FALSE";
  else if (a === "" || a == null) return "";
  return _f(t[1], a, r, t[0]);
}
function ha(e, a) {
  if (typeof a != "number") {
    a = +a || -1;
    for (var r = 0; r < 392; ++r) {
      if (ge[r] == null) {
        a < 0 && (a = r);
        continue;
      }
      if (ge[r] == e) {
        a = r;
        break;
      }
    }
    a < 0 && (a = 391);
  }
  return (ge[a] = e), a;
}
function Ri() {
  ge = ef();
}
var Ef = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    23: "General",
    24: "General",
    25: "General",
    26: "General",
    27: "m/d/yy",
    28: "m/d/yy",
    29: "m/d/yy",
    30: "m/d/yy",
    31: "m/d/yy",
    32: "h:mm:ss",
    33: "h:mm:ss",
    34: "h:mm:ss",
    35: "h:mm:ss",
    36: "m/d/yy",
    41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
    50: "m/d/yy",
    51: "m/d/yy",
    52: "m/d/yy",
    53: "m/d/yy",
    54: "m/d/yy",
    55: "m/d/yy",
    56: "m/d/yy",
    57: "m/d/yy",
    58: "m/d/yy",
    59: "0",
    60: "0.00",
    61: "#,##0",
    62: "#,##0.00",
    63: '"$"#,##0_);\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    67: "0%",
    68: "0.00%",
    69: "# ?/?",
    70: "# ??/??",
    71: "m/d/yy",
    72: "m/d/yy",
    73: "d-mmm-yy",
    74: "d-mmm",
    75: "mmm-yy",
    76: "h:mm",
    77: "h:mm:ss",
    78: "m/d/yy h:mm",
    79: "mm:ss",
    80: "[h]:mm:ss",
    81: "mmss.0",
  },
  Di = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function kf(e) {
  var a = typeof e == "number" ? ge[e] : e;
  return (a = a.replace(Di, "(\\d+)")), new RegExp("^" + a + "$");
}
function wf(e, a, r) {
  var n = -1,
    t = -1,
    i = -1,
    s = -1,
    c = -1,
    f = -1;
  (a.match(Di) || []).forEach(function (h, u) {
    var d = parseInt(r[u + 1], 10);
    switch (h.toLowerCase().charAt(0)) {
      case "y":
        n = d;
        break;
      case "d":
        i = d;
        break;
      case "h":
        s = d;
        break;
      case "s":
        f = d;
        break;
      case "m":
        s >= 0 ? (c = d) : (t = d);
        break;
    }
  }),
    f >= 0 && c == -1 && t >= 0 && ((c = t), (t = -1));
  var o = ("" + (n >= 0 ? n : new Date().getFullYear())).slice(-4) + "-" + ("00" + (t >= 1 ? t : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  o.length == 7 && (o = "0" + o), o.length == 8 && (o = "20" + o);
  var l = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2);
  return s == -1 && c == -1 && f == -1 ? o : n == -1 && t == -1 && i == -1 ? l : o + "T" + l;
}
var Af = (function () {
    var e = {};
    e.version = "1.2.0";
    function a() {
      for (var S = 0, H = new Array(256), O = 0; O != 256; ++O) (S = O), (S = S & 1 ? -306674912 ^ (S >>> 1) : S >>> 1), (S = S & 1 ? -306674912 ^ (S >>> 1) : S >>> 1), (S = S & 1 ? -306674912 ^ (S >>> 1) : S >>> 1), (S = S & 1 ? -306674912 ^ (S >>> 1) : S >>> 1), (S = S & 1 ? -306674912 ^ (S >>> 1) : S >>> 1), (S = S & 1 ? -306674912 ^ (S >>> 1) : S >>> 1), (S = S & 1 ? -306674912 ^ (S >>> 1) : S >>> 1), (S = S & 1 ? -306674912 ^ (S >>> 1) : S >>> 1), (H[O] = S);
      return typeof Int32Array < "u" ? new Int32Array(H) : H;
    }
    var r = a();
    function n(S) {
      var H = 0,
        O = 0,
        X = 0,
        V = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
      for (X = 0; X != 256; ++X) V[X] = S[X];
      for (X = 0; X != 256; ++X) for (O = S[X], H = 256 + X; H < 4096; H += 256) O = V[H] = (O >>> 8) ^ S[O & 255];
      var P = [];
      for (X = 1; X != 16; ++X) P[X - 1] = typeof Int32Array < "u" ? V.subarray(X * 256, X * 256 + 256) : V.slice(X * 256, X * 256 + 256);
      return P;
    }
    var t = n(r),
      i = t[0],
      s = t[1],
      c = t[2],
      f = t[3],
      o = t[4],
      l = t[5],
      h = t[6],
      u = t[7],
      d = t[8],
      v = t[9],
      x = t[10],
      g = t[11],
      A = t[12],
      C = t[13],
      _ = t[14];
    function D(S, H) {
      for (var O = H ^ -1, X = 0, V = S.length; X < V; ) O = (O >>> 8) ^ r[(O ^ S.charCodeAt(X++)) & 255];
      return ~O;
    }
    function b(S, H) {
      for (var O = H ^ -1, X = S.length - 15, V = 0; V < X; ) O = _[S[V++] ^ (O & 255)] ^ C[S[V++] ^ ((O >> 8) & 255)] ^ A[S[V++] ^ ((O >> 16) & 255)] ^ g[S[V++] ^ (O >>> 24)] ^ x[S[V++]] ^ v[S[V++]] ^ d[S[V++]] ^ u[S[V++]] ^ h[S[V++]] ^ l[S[V++]] ^ o[S[V++]] ^ f[S[V++]] ^ c[S[V++]] ^ s[S[V++]] ^ i[S[V++]] ^ r[S[V++]];
      for (X += 15; V < X; ) O = (O >>> 8) ^ r[(O ^ S[V++]) & 255];
      return ~O;
    }
    function N(S, H) {
      for (var O = H ^ -1, X = 0, V = S.length, P = 0, K = 0; X < V; )
        (P = S.charCodeAt(X++)),
          P < 128
            ? (O = (O >>> 8) ^ r[(O ^ P) & 255])
            : P < 2048
            ? ((O = (O >>> 8) ^ r[(O ^ (192 | ((P >> 6) & 31))) & 255]), (O = (O >>> 8) ^ r[(O ^ (128 | (P & 63))) & 255]))
            : P >= 55296 && P < 57344
            ? ((P = (P & 1023) + 64), (K = S.charCodeAt(X++) & 1023), (O = (O >>> 8) ^ r[(O ^ (240 | ((P >> 8) & 7))) & 255]), (O = (O >>> 8) ^ r[(O ^ (128 | ((P >> 2) & 63))) & 255]), (O = (O >>> 8) ^ r[(O ^ (128 | ((K >> 6) & 15) | ((P & 3) << 4))) & 255]), (O = (O >>> 8) ^ r[(O ^ (128 | (K & 63))) & 255]))
            : ((O = (O >>> 8) ^ r[(O ^ (224 | ((P >> 12) & 15))) & 255]), (O = (O >>> 8) ^ r[(O ^ (128 | ((P >> 6) & 63))) & 255]), (O = (O >>> 8) ^ r[(O ^ (128 | (P & 63))) & 255]));
      return ~O;
    }
    return (e.table = r), (e.bstr = D), (e.buf = b), (e.str = N), e;
  })(),
  Ee = (function () {
    var a = {};
    a.version = "1.2.1";
    function r(p, E) {
      for (var m = p.split("/"), T = E.split("/"), k = 0, w = 0, B = Math.min(m.length, T.length); k < B; ++k) {
        if ((w = m[k].length - T[k].length)) return w;
        if (m[k] != T[k]) return m[k] < T[k] ? -1 : 1;
      }
      return m.length - T.length;
    }
    function n(p) {
      if (p.charAt(p.length - 1) == "/") return p.slice(0, -1).indexOf("/") === -1 ? p : n(p.slice(0, -1));
      var E = p.lastIndexOf("/");
      return E === -1 ? p : p.slice(0, E + 1);
    }
    function t(p) {
      if (p.charAt(p.length - 1) == "/") return t(p.slice(0, -1));
      var E = p.lastIndexOf("/");
      return E === -1 ? p : p.slice(E + 1);
    }
    function i(p, E) {
      typeof E == "string" && (E = new Date(E));
      var m = E.getHours();
      (m = (m << 6) | E.getMinutes()), (m = (m << 5) | (E.getSeconds() >>> 1)), p.write_shift(2, m);
      var T = E.getFullYear() - 1980;
      (T = (T << 4) | (E.getMonth() + 1)), (T = (T << 5) | E.getDate()), p.write_shift(2, T);
    }
    function s(p) {
      var E = p.read_shift(2) & 65535,
        m = p.read_shift(2) & 65535,
        T = new Date(),
        k = m & 31;
      m >>>= 5;
      var w = m & 15;
      (m >>>= 4), T.setMilliseconds(0), T.setFullYear(m + 1980), T.setMonth(w - 1), T.setDate(k);
      var B = E & 31;
      E >>>= 5;
      var z = E & 63;
      return (E >>>= 6), T.setHours(E), T.setMinutes(z), T.setSeconds(B << 1), T;
    }
    function c(p) {
      je(p, 0);
      for (var E = {}, m = 0; p.l <= p.length - 4; ) {
        var T = p.read_shift(2),
          k = p.read_shift(2),
          w = p.l + k,
          B = {};
        switch (T) {
          case 21589:
            (m = p.read_shift(1)), m & 1 && (B.mtime = p.read_shift(4)), k > 5 && (m & 2 && (B.atime = p.read_shift(4)), m & 4 && (B.ctime = p.read_shift(4))), B.mtime && (B.mt = new Date(B.mtime * 1e3));
            break;
        }
        (p.l = w), (E[T] = B);
      }
      return E;
    }
    var f;
    function o() {
      return f || (f = {});
    }
    function l(p, E) {
      if (p[0] == 80 && p[1] == 75) return rn(p, E);
      if ((p[0] | 32) == 109 && (p[1] | 32) == 105) return Dc(p, E);
      if (p.length < 512) throw new Error("CFB file size " + p.length + " < 512");
      var m = 3,
        T = 512,
        k = 0,
        w = 0,
        B = 0,
        z = 0,
        M = 0,
        U = [],
        W = p.slice(0, 512);
      je(W, 0);
      var J = h(W);
      switch (((m = J[0]), m)) {
        case 3:
          T = 512;
          break;
        case 4:
          T = 4096;
          break;
        case 0:
          if (J[1] == 0) return rn(p, E);
        default:
          throw new Error("Major Version: Expected 3 or 4 saw " + m);
      }
      T !== 512 && ((W = p.slice(0, T)), je(W, 28));
      var ae = p.slice(0, T);
      u(W, m);
      var ce = W.read_shift(4, "i");
      if (m === 3 && ce !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + ce);
      (W.l += 4), (B = W.read_shift(4, "i")), (W.l += 4), W.chk("00100000", "Mini Stream Cutoff Size: "), (z = W.read_shift(4, "i")), (k = W.read_shift(4, "i")), (M = W.read_shift(4, "i")), (w = W.read_shift(4, "i"));
      for (var q = -1, ne = 0; ne < 109 && ((q = W.read_shift(4, "i")), !(q < 0)); ++ne) U[ne] = q;
      var pe = d(p, T);
      g(M, w, pe, T, U);
      var Oe = C(pe, B, U, T);
      (Oe[B].name = "!Directory"), k > 0 && z !== K && (Oe[z].name = "!MiniFAT"), (Oe[U[0]].name = "!FAT"), (Oe.fat_addrs = U), (Oe.ssz = T);
      var Re = {},
        qe = [],
        ba = [],
        Ba = [];
      _(B, Oe, pe, qe, k, Re, ba, z), v(ba, Ba, qe), qe.shift();
      var Ua = { FileIndex: ba, FullPaths: Ba };
      return E && E.raw && (Ua.raw = { header: ae, sectors: pe }), Ua;
    }
    function h(p) {
      if (p[p.l] == 80 && p[p.l + 1] == 75) return [0, 0];
      p.chk(oe, "Header Signature: "), (p.l += 16);
      var E = p.read_shift(2, "u");
      return [p.read_shift(2, "u"), E];
    }
    function u(p, E) {
      var m = 9;
      switch (((p.l += 2), (m = p.read_shift(2)))) {
        case 9:
          if (E != 3) throw new Error("Sector Shift: Expected 9 saw " + m);
          break;
        case 12:
          if (E != 4) throw new Error("Sector Shift: Expected 12 saw " + m);
          break;
        default:
          throw new Error("Sector Shift: Expected 9 or 12 saw " + m);
      }
      p.chk("0600", "Mini Sector Shift: "), p.chk("000000000000", "Reserved: ");
    }
    function d(p, E) {
      for (var m = Math.ceil(p.length / E) - 1, T = [], k = 1; k < m; ++k) T[k - 1] = p.slice(k * E, (k + 1) * E);
      return (T[m - 1] = p.slice(m * E)), T;
    }
    function v(p, E, m) {
      for (var T = 0, k = 0, w = 0, B = 0, z = 0, M = m.length, U = [], W = []; T < M; ++T) (U[T] = W[T] = T), (E[T] = m[T]);
      for (; z < W.length; ++z) (T = W[z]), (k = p[T].L), (w = p[T].R), (B = p[T].C), U[T] === T && (k !== -1 && U[k] !== k && (U[T] = U[k]), w !== -1 && U[w] !== w && (U[T] = U[w])), B !== -1 && (U[B] = T), k !== -1 && T != U[T] && ((U[k] = U[T]), W.lastIndexOf(k) < z && W.push(k)), w !== -1 && T != U[T] && ((U[w] = U[T]), W.lastIndexOf(w) < z && W.push(w));
      for (T = 1; T < M; ++T) U[T] === T && (w !== -1 && U[w] !== w ? (U[T] = U[w]) : k !== -1 && U[k] !== k && (U[T] = U[k]));
      for (T = 1; T < M; ++T)
        if (p[T].type !== 0) {
          if (((z = T), z != U[z]))
            do (z = U[z]), (E[T] = E[z] + "/" + E[T]);
            while (z !== 0 && U[z] !== -1 && z != U[z]);
          U[T] = -1;
        }
      for (E[0] += "/", T = 1; T < M; ++T) p[T].type !== 2 && (E[T] += "/");
    }
    function x(p, E, m) {
      for (var T = p.start, k = p.size, w = [], B = T; m && k > 0 && B >= 0; ) w.push(E.slice(B * P, B * P + P)), (k -= P), (B = la(m, B * 4));
      return w.length === 0 ? He(0) : ra(w).slice(0, p.size);
    }
    function g(p, E, m, T, k) {
      var w = K;
      if (p === K) {
        if (E !== 0) throw new Error("DIFAT chain shorter than expected");
      } else if (p !== -1) {
        var B = m[p],
          z = (T >>> 2) - 1;
        if (!B) return;
        for (var M = 0; M < z && (w = la(B, M * 4)) !== K; ++M) k.push(w);
        g(la(B, T - 4), E - 1, m, T, k);
      }
    }
    function A(p, E, m, T, k) {
      var w = [],
        B = [];
      k || (k = []);
      var z = T - 1,
        M = 0,
        U = 0;
      for (M = E; M >= 0; ) {
        (k[M] = !0), (w[w.length] = M), B.push(p[M]);
        var W = m[Math.floor((M * 4) / T)];
        if (((U = (M * 4) & z), T < 4 + U)) throw new Error("FAT boundary crossed: " + M + " 4 " + T);
        if (!p[W]) break;
        M = la(p[W], U);
      }
      return { nodes: w, data: Rn([B]) };
    }
    function C(p, E, m, T) {
      var k = p.length,
        w = [],
        B = [],
        z = [],
        M = [],
        U = T - 1,
        W = 0,
        J = 0,
        ae = 0,
        ce = 0;
      for (W = 0; W < k; ++W)
        if (((z = []), (ae = W + E), ae >= k && (ae -= k), !B[ae])) {
          M = [];
          var q = [];
          for (J = ae; J >= 0; ) {
            (q[J] = !0), (B[J] = !0), (z[z.length] = J), M.push(p[J]);
            var ne = m[Math.floor((J * 4) / T)];
            if (((ce = (J * 4) & U), T < 4 + ce)) throw new Error("FAT boundary crossed: " + J + " 4 " + T);
            if (!p[ne] || ((J = la(p[ne], ce)), q[J])) break;
          }
          w[ae] = { nodes: z, data: Rn([M]) };
        }
      return w;
    }
    function _(p, E, m, T, k, w, B, z) {
      for (var M = 0, U = T.length ? 2 : 0, W = E[p].data, J = 0, ae = 0, ce; J < W.length; J += 128) {
        var q = W.slice(J, J + 128);
        je(q, 64), (ae = q.read_shift(2)), (ce = R0(q, 0, ae - U)), T.push(ce);
        var ne = { name: ce, type: q.read_shift(1), color: q.read_shift(1), L: q.read_shift(4, "i"), R: q.read_shift(4, "i"), C: q.read_shift(4, "i"), clsid: q.read_shift(16), state: q.read_shift(4, "i"), start: 0, size: 0 },
          pe = q.read_shift(2) + q.read_shift(2) + q.read_shift(2) + q.read_shift(2);
        pe !== 0 && (ne.ct = D(q, q.l - 8));
        var Oe = q.read_shift(2) + q.read_shift(2) + q.read_shift(2) + q.read_shift(2);
        Oe !== 0 && (ne.mt = D(q, q.l - 8)),
          (ne.start = q.read_shift(4, "i")),
          (ne.size = q.read_shift(4, "i")),
          ne.size < 0 && ne.start < 0 && ((ne.size = ne.type = 0), (ne.start = K), (ne.name = "")),
          ne.type === 5 ? ((M = ne.start), k > 0 && M !== K && (E[M].name = "!StreamData")) : ne.size >= 4096 ? ((ne.storage = "fat"), E[ne.start] === void 0 && (E[ne.start] = A(m, ne.start, E.fat_addrs, E.ssz)), (E[ne.start].name = ne.name), (ne.content = E[ne.start].data.slice(0, ne.size))) : ((ne.storage = "minifat"), ne.size < 0 ? (ne.size = 0) : M !== K && ne.start !== K && E[M] && (ne.content = x(ne, E[M].data, (E[z] || {}).data))),
          ne.content && je(ne.content, 0),
          (w[ce] = ne),
          B.push(ne);
      }
    }
    function D(p, E) {
      return new Date(((gr(p, E + 4) / 1e7) * Math.pow(2, 32) + gr(p, E) / 1e7 - 11644473600) * 1e3);
    }
    function b(p, E) {
      return o(), l(f.readFileSync(p), E);
    }
    function N(p, E) {
      var m = E && E.type;
      switch ((m || (Te && Buffer.isBuffer(p) && (m = "buffer")), m || "base64")) {
        case "file":
          return b(p, E);
        case "base64":
          return l(Rr(_r(p)), E);
        case "binary":
          return l(Rr(p), E);
      }
      return l(p, E);
    }
    function S(p, E) {
      var m = E || {},
        T = m.root || "Root Entry";
      if ((p.FullPaths || (p.FullPaths = []), p.FileIndex || (p.FileIndex = []), p.FullPaths.length !== p.FileIndex.length)) throw new Error("inconsistent CFB structure");
      p.FullPaths.length === 0 && ((p.FullPaths[0] = T + "/"), (p.FileIndex[0] = { name: T, type: 5 })), m.CLSID && (p.FileIndex[0].clsid = m.CLSID), H(p);
    }
    function H(p) {
      var E = "Sh33tJ5";
      if (!Ee.find(p, "/" + E)) {
        var m = He(4);
        (m[0] = 55), (m[1] = m[3] = 50), (m[2] = 54), p.FileIndex.push({ name: E, type: 2, content: m, size: 4, L: 69, R: 69, C: 69 }), p.FullPaths.push(p.FullPaths[0] + E), O(p);
      }
    }
    function O(p, E) {
      S(p);
      for (var m = !1, T = !1, k = p.FullPaths.length - 1; k >= 0; --k) {
        var w = p.FileIndex[k];
        switch (w.type) {
          case 0:
            T ? (m = !0) : (p.FileIndex.pop(), p.FullPaths.pop());
            break;
          case 1:
          case 2:
          case 5:
            (T = !0), isNaN(w.R * w.L * w.C) && (m = !0), w.R > -1 && w.L > -1 && w.R == w.L && (m = !0);
            break;
          default:
            m = !0;
            break;
        }
      }
      if (!(!m && !E)) {
        var B = new Date(1987, 1, 19),
          z = 0,
          M = Object.create ? Object.create(null) : {},
          U = [];
        for (k = 0; k < p.FullPaths.length; ++k) (M[p.FullPaths[k]] = !0), p.FileIndex[k].type !== 0 && U.push([p.FullPaths[k], p.FileIndex[k]]);
        for (k = 0; k < U.length; ++k) {
          var W = n(U[k][0]);
          (T = M[W]), T || (U.push([W, { name: t(W).replace("/", ""), type: 1, clsid: fe, ct: B, mt: B, content: null }]), (M[W] = !0));
        }
        for (
          U.sort(function (ce, q) {
            return r(ce[0], q[0]);
          }),
            p.FullPaths = [],
            p.FileIndex = [],
            k = 0;
          k < U.length;
          ++k
        )
          (p.FullPaths[k] = U[k][0]), (p.FileIndex[k] = U[k][1]);
        for (k = 0; k < U.length; ++k) {
          var J = p.FileIndex[k],
            ae = p.FullPaths[k];
          if (((J.name = t(ae).replace("/", "")), (J.L = J.R = J.C = -(J.color = 1)), (J.size = J.content ? J.content.length : 0), (J.start = 0), (J.clsid = J.clsid || fe), k === 0)) (J.C = U.length > 1 ? 1 : -1), (J.size = 0), (J.type = 5);
          else if (ae.slice(-1) == "/") {
            for (z = k + 1; z < U.length && n(p.FullPaths[z]) != ae; ++z);
            for (J.C = z >= U.length ? -1 : z, z = k + 1; z < U.length && n(p.FullPaths[z]) != n(ae); ++z);
            (J.R = z >= U.length ? -1 : z), (J.type = 1);
          } else n(p.FullPaths[k + 1] || "") == n(ae) && (J.R = k + 1), (J.type = 2);
        }
      }
    }
    function X(p, E) {
      var m = E || {};
      if (m.fileType == "mad") return Ic(p, m);
      switch ((O(p), m.fileType)) {
        case "zip":
          return Sc(p, m);
      }
      var T = (function (ce) {
          for (var q = 0, ne = 0, pe = 0; pe < ce.FileIndex.length; ++pe) {
            var Oe = ce.FileIndex[pe];
            if (Oe.content) {
              var Re = Oe.content.length;
              Re > 0 && (Re < 4096 ? (q += (Re + 63) >> 6) : (ne += (Re + 511) >> 9));
            }
          }
          for (var qe = (ce.FullPaths.length + 3) >> 2, ba = (q + 7) >> 3, Ba = (q + 127) >> 7, Ua = ba + ne + qe + Ba, oa = (Ua + 127) >> 7, zt = oa <= 109 ? 0 : Math.ceil((oa - 109) / 127); (Ua + oa + zt + 127) >> 7 > oa; ) zt = ++oa <= 109 ? 0 : Math.ceil((oa - 109) / 127);
          var Wr = [1, zt, oa, Ba, qe, ne, q, 0];
          return (ce.FileIndex[0].size = q << 6), (Wr[7] = (ce.FileIndex[0].start = Wr[0] + Wr[1] + Wr[2] + Wr[3] + Wr[4] + Wr[5]) + ((Wr[6] + 7) >> 3)), Wr;
        })(p),
        k = He(T[7] << 9),
        w = 0,
        B = 0;
      {
        for (w = 0; w < 8; ++w) k.write_shift(1, re[w]);
        for (w = 0; w < 8; ++w) k.write_shift(2, 0);
        for (k.write_shift(2, 62), k.write_shift(2, 3), k.write_shift(2, 65534), k.write_shift(2, 9), k.write_shift(2, 6), w = 0; w < 3; ++w) k.write_shift(2, 0);
        for (k.write_shift(4, 0), k.write_shift(4, T[2]), k.write_shift(4, T[0] + T[1] + T[2] + T[3] - 1), k.write_shift(4, 0), k.write_shift(4, 4096), k.write_shift(4, T[3] ? T[0] + T[1] + T[2] - 1 : K), k.write_shift(4, T[3]), k.write_shift(-4, T[1] ? T[0] - 1 : K), k.write_shift(4, T[1]), w = 0; w < 109; ++w) k.write_shift(-4, w < T[2] ? T[1] + w : -1);
      }
      if (T[1])
        for (B = 0; B < T[1]; ++B) {
          for (; w < 236 + B * 127; ++w) k.write_shift(-4, w < T[2] ? T[1] + w : -1);
          k.write_shift(-4, B === T[1] - 1 ? K : B + 1);
        }
      var z = function (ce) {
        for (B += ce; w < B - 1; ++w) k.write_shift(-4, w + 1);
        ce && (++w, k.write_shift(-4, K));
      };
      for (B = w = 0, B += T[1]; w < B; ++w) k.write_shift(-4, ie.DIFSECT);
      for (B += T[2]; w < B; ++w) k.write_shift(-4, ie.FATSECT);
      z(T[3]), z(T[4]);
      for (var M = 0, U = 0, W = p.FileIndex[0]; M < p.FileIndex.length; ++M) (W = p.FileIndex[M]), W.content && ((U = W.content.length), !(U < 4096) && ((W.start = B), z((U + 511) >> 9)));
      for (z((T[6] + 7) >> 3); k.l & 511; ) k.write_shift(-4, ie.ENDOFCHAIN);
      for (B = w = 0, M = 0; M < p.FileIndex.length; ++M) (W = p.FileIndex[M]), W.content && ((U = W.content.length), !(!U || U >= 4096) && ((W.start = B), z((U + 63) >> 6)));
      for (; k.l & 511; ) k.write_shift(-4, ie.ENDOFCHAIN);
      for (w = 0; w < T[4] << 2; ++w) {
        var J = p.FullPaths[w];
        if (!J || J.length === 0) {
          for (M = 0; M < 17; ++M) k.write_shift(4, 0);
          for (M = 0; M < 3; ++M) k.write_shift(4, -1);
          for (M = 0; M < 12; ++M) k.write_shift(4, 0);
          continue;
        }
        (W = p.FileIndex[w]), w === 0 && (W.start = W.size ? W.start - 1 : K);
        var ae = (w === 0 && m.root) || W.name;
        if (((U = 2 * (ae.length + 1)), k.write_shift(64, ae, "utf16le"), k.write_shift(2, U), k.write_shift(1, W.type), k.write_shift(1, W.color), k.write_shift(-4, W.L), k.write_shift(-4, W.R), k.write_shift(-4, W.C), W.clsid)) k.write_shift(16, W.clsid, "hex");
        else for (M = 0; M < 4; ++M) k.write_shift(4, 0);
        k.write_shift(4, W.state || 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, W.start), k.write_shift(4, W.size), k.write_shift(4, 0);
      }
      for (w = 1; w < p.FileIndex.length; ++w)
        if (((W = p.FileIndex[w]), W.size >= 4096))
          if (((k.l = (W.start + 1) << 9), Te && Buffer.isBuffer(W.content))) W.content.copy(k, k.l, 0, W.size), (k.l += (W.size + 511) & -512);
          else {
            for (M = 0; M < W.size; ++M) k.write_shift(1, W.content[M]);
            for (; M & 511; ++M) k.write_shift(1, 0);
          }
      for (w = 1; w < p.FileIndex.length; ++w)
        if (((W = p.FileIndex[w]), W.size > 0 && W.size < 4096))
          if (Te && Buffer.isBuffer(W.content)) W.content.copy(k, k.l, 0, W.size), (k.l += (W.size + 63) & -64);
          else {
            for (M = 0; M < W.size; ++M) k.write_shift(1, W.content[M]);
            for (; M & 63; ++M) k.write_shift(1, 0);
          }
      if (Te) k.l = k.length;
      else for (; k.l < k.length; ) k.write_shift(1, 0);
      return k;
    }
    function V(p, E) {
      var m = p.FullPaths.map(function (M) {
          return M.toUpperCase();
        }),
        T = m.map(function (M) {
          var U = M.split("/");
          return U[U.length - (M.slice(-1) == "/" ? 2 : 1)];
        }),
        k = !1;
      E.charCodeAt(0) === 47 ? ((k = !0), (E = m[0].slice(0, -1) + E)) : (k = E.indexOf("/") !== -1);
      var w = E.toUpperCase(),
        B = k === !0 ? m.indexOf(w) : T.indexOf(w);
      if (B !== -1) return p.FileIndex[B];
      var z = !w.match(Ga);
      for (w = w.replace(ur, ""), z && (w = w.replace(Ga, "!")), B = 0; B < m.length; ++B) if ((z ? m[B].replace(Ga, "!") : m[B]).replace(ur, "") == w || (z ? T[B].replace(Ga, "!") : T[B]).replace(ur, "") == w) return p.FileIndex[B];
      return null;
    }
    var P = 64,
      K = -2,
      oe = "d0cf11e0a1b11ae1",
      re = [208, 207, 17, 224, 161, 177, 26, 225],
      fe = "00000000000000000000000000000000",
      ie = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: K, FREESECT: -1, HEADER_SIGNATURE: oe, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: fe, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
    function Ae(p, E, m) {
      o();
      var T = X(p, m);
      f.writeFileSync(E, T);
    }
    function G(p) {
      for (var E = new Array(p.length), m = 0; m < p.length; ++m) E[m] = String.fromCharCode(p[m]);
      return E.join("");
    }
    function ue(p, E) {
      var m = X(p, E);
      switch ((E && E.type) || "buffer") {
        case "file":
          return o(), f.writeFileSync(E.filename, m), m;
        case "binary":
          return typeof m == "string" ? m : G(m);
        case "base64":
          return hn(typeof m == "string" ? m : G(m));
        case "buffer":
          if (Te) return Buffer.isBuffer(m) ? m : ga(m);
        case "array":
          return typeof m == "string" ? Rr(m) : m;
      }
      return m;
    }
    var he;
    function F(p) {
      try {
        var E = p.InflateRaw,
          m = new E();
        if ((m._processChunk(new Uint8Array([3, 0]), m._finishFlushFlag), m.bytesRead)) he = p;
        else throw new Error("zlib does not expose bytesRead");
      } catch (T) {
        console.error("cannot use native zlib: " + (T.message || T));
      }
    }
    function L(p, E) {
      if (!he) return Q0(p, E);
      var m = he.InflateRaw,
        T = new m(),
        k = T._processChunk(p.slice(p.l), T._finishFlushFlag);
      return (p.l += T.bytesRead), k;
    }
    function I(p) {
      return he ? he.deflateRawSync(p) : me(p);
    }
    var R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258],
      ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    function se(p) {
      var E = (((p << 1) | (p << 11)) & 139536) | (((p << 5) | (p << 15)) & 558144);
      return ((E >> 16) | (E >> 8) | E) & 255;
    }
    for (var Q = typeof Uint8Array < "u", Y = Q ? new Uint8Array(256) : [], _e = 0; _e < 256; ++_e) Y[_e] = se(_e);
    function y(p, E) {
      var m = Y[p & 255];
      return E <= 8 ? m >>> (8 - E) : ((m = (m << 8) | Y[(p >> 8) & 255]), E <= 16 ? m >>> (16 - E) : ((m = (m << 8) | Y[(p >> 16) & 255]), m >>> (24 - E)));
    }
    function ye(p, E) {
      var m = E & 7,
        T = E >>> 3;
      return ((p[T] | (m <= 6 ? 0 : p[T + 1] << 8)) >>> m) & 3;
    }
    function te(p, E) {
      var m = E & 7,
        T = E >>> 3;
      return ((p[T] | (m <= 5 ? 0 : p[T + 1] << 8)) >>> m) & 7;
    }
    function de(p, E) {
      var m = E & 7,
        T = E >>> 3;
      return ((p[T] | (m <= 4 ? 0 : p[T + 1] << 8)) >>> m) & 15;
    }
    function le(p, E) {
      var m = E & 7,
        T = E >>> 3;
      return ((p[T] | (m <= 3 ? 0 : p[T + 1] << 8)) >>> m) & 31;
    }
    function Z(p, E) {
      var m = E & 7,
        T = E >>> 3;
      return ((p[T] | (m <= 1 ? 0 : p[T + 1] << 8)) >>> m) & 127;
    }
    function Fe(p, E, m) {
      var T = E & 7,
        k = E >>> 3,
        w = (1 << m) - 1,
        B = p[k] >>> T;
      return m < 8 - T || ((B |= p[k + 1] << (8 - T)), m < 16 - T) || ((B |= p[k + 2] << (16 - T)), m < 24 - T) || (B |= p[k + 3] << (24 - T)), B & w;
    }
    function Je(p, E, m) {
      var T = E & 7,
        k = E >>> 3;
      return T <= 5 ? (p[k] |= (m & 7) << T) : ((p[k] |= (m << T) & 255), (p[k + 1] = (m & 7) >> (8 - T))), E + 3;
    }
    function xr(p, E, m) {
      var T = E & 7,
        k = E >>> 3;
      return (m = (m & 1) << T), (p[k] |= m), E + 1;
    }
    function vr(p, E, m) {
      var T = E & 7,
        k = E >>> 3;
      return (m <<= T), (p[k] |= m & 255), (m >>>= 8), (p[k + 1] = m), E + 8;
    }
    function yr(p, E, m) {
      var T = E & 7,
        k = E >>> 3;
      return (m <<= T), (p[k] |= m & 255), (m >>>= 8), (p[k + 1] = m & 255), (p[k + 2] = m >>> 8), E + 16;
    }
    function Jr(p, E) {
      var m = p.length,
        T = 2 * m > E ? 2 * m : E + 5,
        k = 0;
      if (m >= E) return p;
      if (Te) {
        var w = xn(T);
        if (p.copy) p.copy(w);
        else for (; k < p.length; ++k) w[k] = p[k];
        return w;
      } else if (Q) {
        var B = new Uint8Array(T);
        if (B.set) B.set(p);
        else for (; k < m; ++k) B[k] = p[k];
        return B;
      }
      return (p.length = T), p;
    }
    function pr(p) {
      for (var E = new Array(p), m = 0; m < p; ++m) E[m] = 0;
      return E;
    }
    function Vr(p, E, m) {
      var T = 1,
        k = 0,
        w = 0,
        B = 0,
        z = 0,
        M = p.length,
        U = Q ? new Uint16Array(32) : pr(32);
      for (w = 0; w < 32; ++w) U[w] = 0;
      for (w = M; w < m; ++w) p[w] = 0;
      M = p.length;
      var W = Q ? new Uint16Array(M) : pr(M);
      for (w = 0; w < M; ++w) U[(k = p[w])]++, T < k && (T = k), (W[w] = 0);
      for (U[0] = 0, w = 1; w <= T; ++w) U[w + 16] = z = (z + U[w - 1]) << 1;
      for (w = 0; w < M; ++w) (z = p[w]), z != 0 && (W[w] = U[z + 16]++);
      var J = 0;
      for (w = 0; w < M; ++w) if (((J = p[w]), J != 0)) for (z = y(W[w], T) >> (T - J), B = (1 << (T + 4 - J)) - 1; B >= 0; --B) E[z | (B << J)] = (J & 15) | (w << 4);
      return T;
    }
    var qr = Q ? new Uint16Array(512) : pr(512),
      Ma = Q ? new Uint16Array(32) : pr(32);
    if (!Q) {
      for (var sr = 0; sr < 512; ++sr) qr[sr] = 0;
      for (sr = 0; sr < 32; ++sr) Ma[sr] = 0;
    }
    (function () {
      for (var p = [], E = 0; E < 32; E++) p.push(5);
      Vr(p, Ma, 32);
      var m = [];
      for (E = 0; E <= 143; E++) m.push(8);
      for (; E <= 255; E++) m.push(9);
      for (; E <= 279; E++) m.push(7);
      for (; E <= 287; E++) m.push(8);
      Vr(m, qr, 288);
    })();
    var Pr = (function () {
      for (var E = Q ? new Uint8Array(32768) : [], m = 0, T = 0; m < ee.length - 1; ++m) for (; T < ee[m + 1]; ++T) E[T] = m;
      for (; T < 32768; ++T) E[T] = 29;
      var k = Q ? new Uint8Array(259) : [];
      for (m = 0, T = 0; m < j.length - 1; ++m) for (; T < j[m + 1]; ++T) k[T] = m;
      function w(z, M) {
        for (var U = 0; U < z.length; ) {
          var W = Math.min(65535, z.length - U),
            J = U + W == z.length;
          for (M.write_shift(1, +J), M.write_shift(2, W), M.write_shift(2, ~W & 65535); W-- > 0; ) M[M.l++] = z[U++];
        }
        return M.l;
      }
      function B(z, M) {
        for (var U = 0, W = 0, J = Q ? new Uint16Array(32768) : []; W < z.length; ) {
          var ae = Math.min(65535, z.length - W);
          if (ae < 10) {
            for (U = Je(M, U, +(W + ae == z.length)), U & 7 && (U += 8 - (U & 7)), M.l = (U / 8) | 0, M.write_shift(2, ae), M.write_shift(2, ~ae & 65535); ae-- > 0; ) M[M.l++] = z[W++];
            U = M.l * 8;
            continue;
          }
          U = Je(M, U, +(W + ae == z.length) + 2);
          for (var ce = 0; ae-- > 0; ) {
            var q = z[W];
            ce = ((ce << 5) ^ q) & 32767;
            var ne = -1,
              pe = 0;
            if ((ne = J[ce]) && ((ne |= W & -32768), ne > W && (ne -= 32768), ne < W)) for (; z[ne + pe] == z[W + pe] && pe < 250; ) ++pe;
            if (pe > 2) {
              (q = k[pe]), q <= 22 ? (U = vr(M, U, Y[q + 1] >> 1) - 1) : (vr(M, U, 3), (U += 5), vr(M, U, Y[q - 23] >> 5), (U += 3));
              var Oe = q < 8 ? 0 : (q - 4) >> 2;
              Oe > 0 && (yr(M, U, pe - j[q]), (U += Oe)), (q = E[W - ne]), (U = vr(M, U, Y[q] >> 3)), (U -= 3);
              var Re = q < 4 ? 0 : (q - 2) >> 1;
              Re > 0 && (yr(M, U, W - ne - ee[q]), (U += Re));
              for (var qe = 0; qe < pe; ++qe) (J[ce] = W & 32767), (ce = ((ce << 5) ^ z[W]) & 32767), ++W;
              ae -= pe - 1;
            } else q <= 143 ? (q = q + 48) : (U = xr(M, U, 1)), (U = vr(M, U, Y[q])), (J[ce] = W & 32767), ++W;
          }
          U = vr(M, U, 0) - 1;
        }
        return (M.l = ((U + 7) / 8) | 0), M.l;
      }
      return function (M, U) {
        return M.length < 8 ? w(M, U) : B(M, U);
      };
    })();
    function me(p) {
      var E = He(50 + Math.floor(p.length * 1.1)),
        m = Pr(p, E);
      return E.slice(0, m);
    }
    var Ne = Q ? new Uint16Array(32768) : pr(32768),
      Tr = Q ? new Uint16Array(32768) : pr(32768),
      Ue = Q ? new Uint16Array(128) : pr(128),
      fa = 1,
      Z0 = 1;
    function kc(p, E) {
      var m = le(p, E) + 257;
      E += 5;
      var T = le(p, E) + 1;
      E += 5;
      var k = de(p, E) + 4;
      E += 4;
      for (var w = 0, B = Q ? new Uint8Array(19) : pr(19), z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], M = 1, U = Q ? new Uint8Array(8) : pr(8), W = Q ? new Uint8Array(8) : pr(8), J = B.length, ae = 0; ae < k; ++ae) (B[R[ae]] = w = te(p, E)), M < w && (M = w), U[w]++, (E += 3);
      var ce = 0;
      for (U[0] = 0, ae = 1; ae <= M; ++ae) W[ae] = ce = (ce + U[ae - 1]) << 1;
      for (ae = 0; ae < J; ++ae) (ce = B[ae]) != 0 && (z[ae] = W[ce]++);
      var q = 0;
      for (ae = 0; ae < J; ++ae)
        if (((q = B[ae]), q != 0)) {
          ce = Y[z[ae]] >> (8 - q);
          for (var ne = (1 << (7 - q)) - 1; ne >= 0; --ne) Ue[ce | (ne << q)] = (q & 7) | (ae << 3);
        }
      var pe = [];
      for (M = 1; pe.length < m + T; )
        switch (((ce = Ue[Z(p, E)]), (E += ce & 7), (ce >>>= 3))) {
          case 16:
            for (w = 3 + ye(p, E), E += 2, ce = pe[pe.length - 1]; w-- > 0; ) pe.push(ce);
            break;
          case 17:
            for (w = 3 + te(p, E), E += 3; w-- > 0; ) pe.push(0);
            break;
          case 18:
            for (w = 11 + Z(p, E), E += 7; w-- > 0; ) pe.push(0);
            break;
          default:
            pe.push(ce), M < ce && (M = ce);
            break;
        }
      var Oe = pe.slice(0, m),
        Re = pe.slice(m);
      for (ae = m; ae < 286; ++ae) Oe[ae] = 0;
      for (ae = T; ae < 30; ++ae) Re[ae] = 0;
      return (fa = Vr(Oe, Ne, 286)), (Z0 = Vr(Re, Tr, 30)), E;
    }
    function wc(p, E) {
      if (p[0] == 3 && !(p[1] & 3)) return [ia(E), 2];
      for (var m = 0, T = 0, k = xn(E || 1 << 18), w = 0, B = k.length >>> 0, z = 0, M = 0; !(T & 1); ) {
        if (((T = te(p, m)), (m += 3), T >>> 1)) T >> 1 == 1 ? ((z = 9), (M = 5)) : ((m = kc(p, m)), (z = fa), (M = Z0));
        else {
          m & 7 && (m += 8 - (m & 7));
          var U = p[m >>> 3] | (p[(m >>> 3) + 1] << 8);
          if (((m += 32), U > 0)) for (!E && B < w + U && ((k = Jr(k, w + U)), (B = k.length)); U-- > 0; ) (k[w++] = p[m >>> 3]), (m += 8);
          continue;
        }
        for (;;) {
          !E && B < w + 32767 && ((k = Jr(k, w + 32767)), (B = k.length));
          var W = Fe(p, m, z),
            J = T >>> 1 == 1 ? qr[W] : Ne[W];
          if (((m += J & 15), (J >>>= 4), !((J >>> 8) & 255))) k[w++] = J;
          else {
            if (J == 256) break;
            J -= 257;
            var ae = J < 8 ? 0 : (J - 4) >> 2;
            ae > 5 && (ae = 0);
            var ce = w + j[J];
            ae > 0 && ((ce += Fe(p, m, ae)), (m += ae)), (W = Fe(p, m, M)), (J = T >>> 1 == 1 ? Ma[W] : Tr[W]), (m += J & 15), (J >>>= 4);
            var q = J < 4 ? 0 : (J - 2) >> 1,
              ne = ee[J];
            for (q > 0 && ((ne += Fe(p, m, q)), (m += q)), !E && B < ce && ((k = Jr(k, ce + 100)), (B = k.length)); w < ce; ) (k[w] = k[w - ne]), ++w;
          }
        }
      }
      return E ? [k, (m + 7) >>> 3] : [k.slice(0, w), (m + 7) >>> 3];
    }
    function Q0(p, E) {
      var m = p.slice(p.l || 0),
        T = wc(m, E);
      return (p.l += T[1]), T[0];
    }
    function en(p, E) {
      if (p) typeof console < "u" && console.error(E);
      else throw new Error(E);
    }
    function rn(p, E) {
      var m = p;
      je(m, 0);
      var T = [],
        k = [],
        w = { FileIndex: T, FullPaths: k };
      S(w, { root: E.root });
      for (var B = m.length - 4; (m[B] != 80 || m[B + 1] != 75 || m[B + 2] != 5 || m[B + 3] != 6) && B >= 0; ) --B;
      (m.l = B + 4), (m.l += 4);
      var z = m.read_shift(2);
      m.l += 6;
      var M = m.read_shift(4);
      for (m.l = M, B = 0; B < z; ++B) {
        m.l += 20;
        var U = m.read_shift(4),
          W = m.read_shift(4),
          J = m.read_shift(2),
          ae = m.read_shift(2),
          ce = m.read_shift(2);
        m.l += 8;
        var q = m.read_shift(4),
          ne = c(m.slice(m.l + J, m.l + J + ae));
        m.l += J + ae + ce;
        var pe = m.l;
        (m.l = q + 4), Ac(m, U, W, w, ne), (m.l = pe);
      }
      return w;
    }
    function Ac(p, E, m, T, k) {
      p.l += 2;
      var w = p.read_shift(2),
        B = p.read_shift(2),
        z = s(p);
      if (w & 8257) throw new Error("Unsupported ZIP encryption");
      for (var M = p.read_shift(4), U = p.read_shift(4), W = p.read_shift(4), J = p.read_shift(2), ae = p.read_shift(2), ce = "", q = 0; q < J; ++q) ce += String.fromCharCode(p[p.l++]);
      if (ae) {
        var ne = c(p.slice(p.l, p.l + ae));
        (ne[21589] || {}).mt && (z = ne[21589].mt), ((k || {})[21589] || {}).mt && (z = k[21589].mt);
      }
      p.l += ae;
      var pe = p.slice(p.l, p.l + U);
      switch (B) {
        case 8:
          pe = L(p, W);
          break;
        case 0:
          break;
        default:
          throw new Error("Unsupported ZIP Compression method " + B);
      }
      var Oe = !1;
      w & 8 && ((M = p.read_shift(4)), M == 134695760 && ((M = p.read_shift(4)), (Oe = !0)), (U = p.read_shift(4)), (W = p.read_shift(4))), U != E && en(Oe, "Bad compressed size: " + E + " != " + U), W != m && en(Oe, "Bad uncompressed size: " + m + " != " + W), $t(T, ce, pe, { unsafe: !0, mt: z });
    }
    function Sc(p, E) {
      var m = E || {},
        T = [],
        k = [],
        w = He(1),
        B = m.compression ? 8 : 0,
        z = 0,
        M = 0,
        U = 0,
        W = 0,
        J = 0,
        ae = p.FullPaths[0],
        ce = ae,
        q = p.FileIndex[0],
        ne = [],
        pe = 0;
      for (M = 1; M < p.FullPaths.length; ++M)
        if (((ce = p.FullPaths[M].slice(ae.length)), (q = p.FileIndex[M]), !(!q.size || !q.content || ce == "Sh33tJ5"))) {
          var Oe = W,
            Re = He(ce.length);
          for (U = 0; U < ce.length; ++U) Re.write_shift(1, ce.charCodeAt(U) & 127);
          (Re = Re.slice(0, Re.l)), (ne[J] = Af.buf(q.content, 0));
          var qe = q.content;
          B == 8 && (qe = I(qe)),
            (w = He(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, z),
            w.write_shift(2, B),
            q.mt ? i(w, q.mt) : w.write_shift(4, 0),
            w.write_shift(-4, ne[J]),
            w.write_shift(4, qe.length),
            w.write_shift(4, q.content.length),
            w.write_shift(2, Re.length),
            w.write_shift(2, 0),
            (W += w.length),
            T.push(w),
            (W += Re.length),
            T.push(Re),
            (W += qe.length),
            T.push(qe),
            (w = He(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, z),
            w.write_shift(2, B),
            w.write_shift(4, 0),
            w.write_shift(-4, ne[J]),
            w.write_shift(4, qe.length),
            w.write_shift(4, q.content.length),
            w.write_shift(2, Re.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, Oe),
            (pe += w.l),
            k.push(w),
            (pe += Re.length),
            k.push(Re),
            ++J;
        }
      return (w = He(22)), w.write_shift(4, 101010256), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, J), w.write_shift(2, J), w.write_shift(4, pe), w.write_shift(4, W), w.write_shift(2, 0), ra([ra(T), ra(k), w]);
    }
    var pt = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
    function Fc(p, E) {
      if (p.ctype) return p.ctype;
      var m = p.name || "",
        T = m.match(/\.([^\.]+)$/);
      return (T && pt[T[1]]) || (E && ((T = (m = E).match(/[\.\\]([^\.\\])+$/)), T && pt[T[1]])) ? pt[T[1]] : "application/octet-stream";
    }
    function yc(p) {
      for (var E = hn(p), m = [], T = 0; T < E.length; T += 76) m.push(E.slice(T, T + 76));
      return (
        m.join(`\r
`) +
        `\r
`
      );
    }
    function Cc(p) {
      var E = p.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (U) {
        var W = U.charCodeAt(0).toString(16).toUpperCase();
        return "=" + (W.length == 1 ? "0" + W : W);
      });
      (E = E.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")),
        E.charAt(0) ==
          `
` && (E = "=0D" + E.slice(1)),
        (E = E.replace(/\r(?!\n)/gm, "=0D")
          .replace(
            /\n\n/gm,
            `
=0A`
          )
          .replace(/([^\r\n])\n/gm, "$1=0A"));
      for (
        var m = [],
          T = E.split(`\r
`),
          k = 0;
        k < T.length;
        ++k
      ) {
        var w = T[k];
        if (w.length == 0) {
          m.push("");
          continue;
        }
        for (var B = 0; B < w.length; ) {
          var z = 76,
            M = w.slice(B, B + z);
          M.charAt(z - 1) == "=" ? z-- : M.charAt(z - 2) == "=" ? (z -= 2) : M.charAt(z - 3) == "=" && (z -= 3), (M = w.slice(B, B + z)), (B += z), B < w.length && (M += "="), m.push(M);
        }
      }
      return m.join(`\r
`);
    }
    function Oc(p) {
      for (var E = [], m = 0; m < p.length; ++m) {
        for (var T = p[m]; m <= p.length && T.charAt(T.length - 1) == "="; ) T = T.slice(0, T.length - 1) + p[++m];
        E.push(T);
      }
      for (var k = 0; k < E.length; ++k)
        E[k] = E[k].replace(/[=][0-9A-Fa-f]{2}/g, function (w) {
          return String.fromCharCode(parseInt(w.slice(1), 16));
        });
      return Rr(
        E.join(`\r
`)
      );
    }
    function Rc(p, E, m) {
      for (var T = "", k = "", w = "", B, z = 0; z < 10; ++z) {
        var M = E[z];
        if (!M || M.match(/^\s*$/)) break;
        var U = M.match(/^(.*?):\s*([^\s].*)$/);
        if (U)
          switch (U[1].toLowerCase()) {
            case "content-location":
              T = U[2].trim();
              break;
            case "content-type":
              w = U[2].trim();
              break;
            case "content-transfer-encoding":
              k = U[2].trim();
              break;
          }
      }
      switch ((++z, k.toLowerCase())) {
        case "base64":
          B = Rr(_r(E.slice(z).join("")));
          break;
        case "quoted-printable":
          B = Oc(E.slice(z));
          break;
        default:
          throw new Error("Unsupported Content-Transfer-Encoding " + k);
      }
      var W = $t(p, T.slice(m.length), B, { unsafe: !0 });
      w && (W.ctype = w);
    }
    function Dc(p, E) {
      if (G(p.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
      var m = (E && E.root) || "",
        T = (Te && Buffer.isBuffer(p) ? p.toString("binary") : G(p)).split(`\r
`),
        k = 0,
        w = "";
      for (k = 0; k < T.length; ++k) if (((w = T[k]), !!/^Content-Location:/i.test(w) && ((w = w.slice(w.indexOf("file"))), m || (m = w.slice(0, w.lastIndexOf("/") + 1)), w.slice(0, m.length) != m))) for (; m.length > 0 && ((m = m.slice(0, m.length - 1)), (m = m.slice(0, m.lastIndexOf("/") + 1)), w.slice(0, m.length) != m); );
      var B = (T[1] || "").match(/boundary="(.*?)"/);
      if (!B) throw new Error("MAD cannot find boundary");
      var z = "--" + (B[1] || ""),
        M = [],
        U = [],
        W = { FileIndex: M, FullPaths: U };
      S(W);
      var J,
        ae = 0;
      for (k = 0; k < T.length; ++k) {
        var ce = T[k];
        (ce !== z && ce !== z + "--") || (ae++ && Rc(W, T.slice(J, k), m), (J = k));
      }
      return W;
    }
    function Ic(p, E) {
      var m = E || {},
        T = m.boundary || "SheetJS";
      T = "------=" + T;
      for (var k = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + T.slice(2) + '"', "", "", ""], w = p.FullPaths[0], B = w, z = p.FileIndex[0], M = 1; M < p.FullPaths.length; ++M)
        if (((B = p.FullPaths[M].slice(w.length)), (z = p.FileIndex[M]), !(!z.size || !z.content || B == "Sh33tJ5"))) {
          B = B.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (pe) {
            return "_x" + pe.charCodeAt(0).toString(16) + "_";
          }).replace(/[\u0080-\uFFFF]/g, function (pe) {
            return "_u" + pe.charCodeAt(0).toString(16) + "_";
          });
          for (var U = z.content, W = Te && Buffer.isBuffer(U) ? U.toString("binary") : G(U), J = 0, ae = Math.min(1024, W.length), ce = 0, q = 0; q <= ae; ++q) (ce = W.charCodeAt(q)) >= 32 && ce < 128 && ++J;
          var ne = J >= (ae * 4) / 5;
          k.push(T), k.push("Content-Location: " + (m.root || "file:///C:/SheetJS/") + B), k.push("Content-Transfer-Encoding: " + (ne ? "quoted-printable" : "base64")), k.push("Content-Type: " + Fc(z, B)), k.push(""), k.push(ne ? Cc(W) : yc(W));
        }
      return (
        k.push(
          T +
            `--\r
`
        ),
        k.join(`\r
`)
      );
    }
    function Nc(p) {
      var E = {};
      return S(E, p), E;
    }
    function $t(p, E, m, T) {
      var k = T && T.unsafe;
      k || S(p);
      var w = !k && Ee.find(p, E);
      if (!w) {
        var B = p.FullPaths[0];
        E.slice(0, B.length) == B ? (B = E) : (B.slice(-1) != "/" && (B += "/"), (B = (B + E).replace("//", "/"))), (w = { name: t(E), type: 2 }), p.FileIndex.push(w), p.FullPaths.push(B), k || Ee.utils.cfb_gc(p);
      }
      return (w.content = m), (w.size = m ? m.length : 0), T && (T.CLSID && (w.clsid = T.CLSID), T.mt && (w.mt = T.mt), T.ct && (w.ct = T.ct)), w;
    }
    function Pc(p, E) {
      S(p);
      var m = Ee.find(p, E);
      if (m) {
        for (var T = 0; T < p.FileIndex.length; ++T) if (p.FileIndex[T] == m) return p.FileIndex.splice(T, 1), p.FullPaths.splice(T, 1), !0;
      }
      return !1;
    }
    function Lc(p, E, m) {
      S(p);
      var T = Ee.find(p, E);
      if (T) {
        for (var k = 0; k < p.FileIndex.length; ++k) if (p.FileIndex[k] == T) return (p.FileIndex[k].name = t(m)), (p.FullPaths[k] = m), !0;
      }
      return !1;
    }
    function Mc(p) {
      O(p, !0);
    }
    return (a.find = V), (a.read = N), (a.parse = l), (a.write = ue), (a.writeFile = Ae), (a.utils = { cfb_new: Nc, cfb_add: $t, cfb_del: Pc, cfb_mov: Lc, cfb_gc: Mc, ReadShift: za, CheckField: es, prep_blob: je, bconcat: ra, use_zlib: F, _deflateRaw: me, _inflateRaw: Q0, consts: ie }), a;
  })();
function Sf(e) {
  if (typeof Deno < "u") return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var a = File(e);
      a.open("r"), (a.encoding = "binary");
      var r = a.read();
      return a.close(), r;
    } catch (n) {
      if (!n.message || !n.message.match(/onstruct/)) throw n;
    }
  throw new Error("Cannot access file " + e);
}
function Br(e) {
  for (var a = Object.keys(e), r = [], n = 0; n < a.length; ++n) Object.prototype.hasOwnProperty.call(e, a[n]) && r.push(a[n]);
  return r;
}
function F0(e) {
  for (var a = [], r = Br(e), n = 0; n !== r.length; ++n) a[e[r[n]]] = r[n];
  return a;
}
var Rt = new Date(1899, 11, 30, 0, 0, 0);
function hr(e, a) {
  var r = e.getTime();
  a && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var n = Rt.getTime() + (e.getTimezoneOffset() - Rt.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var Ii = new Date(),
  Ff = Rt.getTime() + (Ii.getTimezoneOffset() - Rt.getTimezoneOffset()) * 6e4,
  En = Ii.getTimezoneOffset();
function Ut(e) {
  var a = new Date();
  return a.setTime(e * 24 * 60 * 60 * 1e3 + Ff), a.getTimezoneOffset() !== En && a.setTime(a.getTime() + (a.getTimezoneOffset() - En) * 6e4), a;
}
function yf(e) {
  var a = 0,
    r = 0,
    n = !1,
    t = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!t) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var i = 1; i != t.length; ++i)
    if (t[i]) {
      switch (((r = 1), i > 3 && (n = !0), t[i].slice(t[i].length - 1))) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + t[i].slice(t[i].length - 1));
        case "D":
          r *= 24;
        case "H":
          r *= 60;
        case "M":
          if (n) r *= 60;
          else throw new Error("Unsupported ISO Duration Field: M");
      }
      a += r * parseInt(t[i], 10);
    }
  return a;
}
var kn = new Date("2017-02-19T19:06:09.000Z"),
  Ni = isNaN(kn.getFullYear()) ? new Date("2/19/17") : kn,
  Cf = Ni.getFullYear() == 2017;
function $e(e, a) {
  var r = new Date(e);
  if (Cf) return a > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : a < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date) return e;
  if (Ni.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var t = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
    i = new Date(+t[0], +t[1] - 1, +t[2], +t[3] || 0, +t[4] || 0, +t[5] || 0);
  return e.indexOf("Z") > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i;
}
function va(e, a) {
  if (Te && Buffer.isBuffer(e)) {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return $a(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return $a(_i(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (a) {
        if (e[0] == 255 && e[1] == 254) return $a(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255) return $a(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = { "€": "", "‚": "", ƒ: "", "„": "", "…": "", "†": "", "‡": "", ˆ: "", "‰": "", Š: "", "‹": "", Œ: "", Ž: "", "‘": "", "’": "", "“": "", "”": "", "•": "", "–": "", "—": "", "˜": "", "™": "", š: "", "›": "", œ: "", ž: "", Ÿ: "" };
      return (
        Array.isArray(e) && (e = new Uint8Array(e)),
        new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (i) {
          return r[i] || i;
        })
      );
    } catch {}
  for (var n = [], t = 0; t != e.length; ++t) n.push(String.fromCharCode(e[t]));
  return n.join("");
}
function Ke(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (a[r] = Ke(e[r]));
  return a;
}
function De(e, a) {
  for (var r = ""; r.length < a; ) r += e;
  return r;
}
function Nr(e) {
  var a = Number(e);
  if (!isNaN(a)) return isFinite(a) ? a : NaN;
  if (!/\d/.test(e)) return a;
  var r = 1,
    n = e
      .replace(/([\d]),([\d])/g, "$1$2")
      .replace(/[$]/g, "")
      .replace(/[%]/g, function () {
        return (r *= 100), "";
      });
  return !isNaN((a = Number(n))) ||
    ((n = n.replace(/[(](.*)[)]/, function (t, i) {
      return (r = -r), i;
    })),
    !isNaN((a = Number(n))))
    ? a / r
    : a;
}
var Of = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Da(e) {
  var a = new Date(e),
    r = new Date(NaN),
    n = a.getYear(),
    t = a.getMonth(),
    i = a.getDate();
  if (isNaN(i)) return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (((s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")), s.length > 3 && Of.indexOf(s) == -1)) return r;
  } else if (s.match(/[a-z]/)) return r;
  return n < 0 || n > 8099 ? r : (t > 0 || i > 1) && n != 101 ? a : e.match(/[^-0-9:,\/\\]/) ? r : a;
}
var Rf = (function () {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function (r, n, t) {
    if (e || typeof n == "string") return r.split(n);
    for (var i = r.split(n), s = [i[0]], c = 1; c < i.length; ++c) s.push(t), s.push(i[c]);
    return s;
  };
})();
function Pi(e) {
  return e ? (e.content && e.type ? va(e.content, !0) : e.data ? Wa(e.data) : e.asNodeBuffer && Te ? Wa(e.asNodeBuffer().toString("binary")) : e.asBinary ? Wa(e.asBinary()) : e._data && e._data.getContent ? Wa(va(Array.prototype.slice.call(e._data.getContent(), 0))) : null) : null;
}
function Li(e) {
  if (!e) return null;
  if (e.data) return ln(e.data);
  if (e.asNodeBuffer && Te) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var a = e._data.getContent();
    return typeof a == "string" ? ln(a) : Array.prototype.slice.call(a);
  }
  return e.content && e.type ? e.content : null;
}
function Df(e) {
  return e && e.name.slice(-4) === ".bin" ? Li(e) : Pi(e);
}
function wr(e, a) {
  for (var r = e.FullPaths || Br(e.files), n = a.toLowerCase().replace(/[\/]/g, "\\"), t = n.replace(/\\/g, "/"), i = 0; i < r.length; ++i) {
    var s = r[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (n == s || t == s) return e.files ? e.files[r[i]] : e.FileIndex[i];
  }
  return null;
}
function y0(e, a) {
  var r = wr(e, a);
  if (r == null) throw new Error("Cannot find file " + a + " in zip");
  return r;
}
function Me(e, a, r) {
  if (!r) return Df(y0(e, a));
  if (!a) return null;
  try {
    return Me(e, a);
  } catch {
    return null;
  }
}
function mr(e, a, r) {
  if (!r) return Pi(y0(e, a));
  if (!a) return null;
  try {
    return mr(e, a);
  } catch {
    return null;
  }
}
function Mi(e, a, r) {
  if (!r) return Li(y0(e, a));
  if (!a) return null;
  try {
    return Mi(e, a);
  } catch {
    return null;
  }
}
function wn(e) {
  for (var a = e.FullPaths || Br(e.files), r = [], n = 0; n < a.length; ++n) a[n].slice(-1) != "/" && r.push(a[n].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function If(e, a, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return Te ? (n = ga(r)) : (n = qc(r)), Ee.utils.cfb_add(e, a, n);
    }
    Ee.utils.cfb_add(e, a, r);
  } else e.file(a, r);
}
function bi(e, a) {
  switch (a.type) {
    case "base64":
      return Ee.read(e, { type: "base64" });
    case "binary":
      return Ee.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return Ee.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + a.type);
}
function Xa(e, a) {
  if (e.charAt(0) == "/") return e.slice(1);
  var r = a.split("/");
  a.slice(-1) != "/" && r.pop();
  for (var n = e.split("/"); n.length !== 0; ) {
    var t = n.shift();
    t === ".." ? r.pop() : t !== "." && r.push(t);
  }
  return r.join("/");
}
var Bi = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  Nf = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,
  An = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm,
  Pf = /<[^>]*>/g,
  ir = Bi.match(An) ? An : Pf,
  Lf = /<\w*:/,
  Mf = /<(\/?)\w+:/;
function xe(e, a, r) {
  for (var n = {}, t = 0, i = 0; t !== e.length && !((i = e.charCodeAt(t)) === 32 || i === 10 || i === 13); ++t);
  if ((a || (n[0] = e.slice(0, t)), t === e.length)) return n;
  var s = e.match(Nf),
    c = 0,
    f = "",
    o = 0,
    l = "",
    h = "",
    u = 1;
  if (s)
    for (o = 0; o != s.length; ++o) {
      for (h = s[o], i = 0; i != h.length && h.charCodeAt(i) !== 61; ++i);
      for (l = h.slice(0, i).trim(); h.charCodeAt(i + 1) == 32; ) ++i;
      for (u = (t = h.charCodeAt(i + 1)) == 34 || t == 39 ? 1 : 0, f = h.slice(i + 1 + u, h.length - u), c = 0; c != l.length && l.charCodeAt(c) !== 58; ++c);
      if (c === l.length) l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), (n[l] = f), r || (n[l.toLowerCase()] = f);
      else {
        var d = (c === 5 && l.slice(0, 5) === "xmlns" ? "xmlns" : "") + l.slice(c + 1);
        if (n[d] && l.slice(c - 3, c) == "ext") continue;
        (n[d] = f), r || (n[d.toLowerCase()] = f);
      }
    }
  return n;
}
function Ur(e) {
  return e.replace(Mf, "<$1");
}
var Ui = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" },
  bf = F0(Ui),
  we = (function () {
    var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi,
      a = /_x([\da-fA-F]{4})_/gi;
    return function r(n) {
      var t = n + "",
        i = t.indexOf("<![CDATA[");
      if (i == -1)
        return t
          .replace(e, function (c, f) {
            return Ui[c] || String.fromCharCode(parseInt(f, c.indexOf("x") > -1 ? 16 : 10)) || c;
          })
          .replace(a, function (c, f) {
            return String.fromCharCode(parseInt(f, 16));
          });
      var s = t.indexOf("]]>");
      return r(t.slice(0, i)) + t.slice(i + 9, s) + r(t.slice(s + 3));
    };
  })(),
  Bf = /[&<>'"]/g,
  Uf = /[\u0000-\u001f]/g;
function C0(e) {
  var a = e + "";
  return a
    .replace(Bf, function (r) {
      return bf[r];
    })
    .replace(/\n/g, "<br/>")
    .replace(Uf, function (r) {
      return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
    });
}
var Sn = (function () {
  var e = /&#(\d+);/g;
  function a(r, n) {
    return String.fromCharCode(parseInt(n, 10));
  }
  return function (n) {
    return n.replace(e, a);
  };
})();
function Ce(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function qt(e) {
  for (var a = "", r = 0, n = 0, t = 0, i = 0, s = 0, c = 0; r < e.length; ) {
    if (((n = e.charCodeAt(r++)), n < 128)) {
      a += String.fromCharCode(n);
      continue;
    }
    if (((t = e.charCodeAt(r++)), n > 191 && n < 224)) {
      (s = (n & 31) << 6), (s |= t & 63), (a += String.fromCharCode(s));
      continue;
    }
    if (((i = e.charCodeAt(r++)), n < 240)) {
      a += String.fromCharCode(((n & 15) << 12) | ((t & 63) << 6) | (i & 63));
      continue;
    }
    (s = e.charCodeAt(r++)), (c = (((n & 7) << 18) | ((t & 63) << 12) | ((i & 63) << 6) | (s & 63)) - 65536), (a += String.fromCharCode(55296 + ((c >>> 10) & 1023))), (a += String.fromCharCode(56320 + (c & 1023)));
  }
  return a;
}
function Fn(e) {
  var a = ia(2 * e.length),
    r,
    n,
    t = 1,
    i = 0,
    s = 0,
    c;
  for (n = 0; n < e.length; n += t)
    (t = 1),
      (c = e.charCodeAt(n)) < 128 ? (r = c) : c < 224 ? ((r = (c & 31) * 64 + (e.charCodeAt(n + 1) & 63)), (t = 2)) : c < 240 ? ((r = (c & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63)), (t = 3)) : ((t = 4), (r = (c & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63)), (r -= 65536), (s = 55296 + ((r >>> 10) & 1023)), (r = 56320 + (r & 1023))),
      s !== 0 && ((a[i++] = s & 255), (a[i++] = s >>> 8), (s = 0)),
      (a[i++] = r % 256),
      (a[i++] = r >>> 8);
  return a.slice(0, i).toString("ucs2");
}
function yn(e) {
  return ga(e, "binary").toString("utf8");
}
var mt = "foo bar bazâð£",
  Se = (Te && ((yn(mt) == qt(mt) && yn) || (Fn(mt) == qt(mt) && Fn))) || qt,
  $a = Te
    ? function (e) {
        return ga(e, "utf8").toString("binary");
      }
    : function (e) {
        for (var a = [], r = 0, n = 0, t = 0; r < e.length; )
          switch (((n = e.charCodeAt(r++)), !0)) {
            case n < 128:
              a.push(String.fromCharCode(n));
              break;
            case n < 2048:
              a.push(String.fromCharCode(192 + (n >> 6))), a.push(String.fromCharCode(128 + (n & 63)));
              break;
            case n >= 55296 && n < 57344:
              (n -= 55296), (t = e.charCodeAt(r++) - 56320 + (n << 10)), a.push(String.fromCharCode(240 + ((t >> 18) & 7))), a.push(String.fromCharCode(144 + ((t >> 12) & 63))), a.push(String.fromCharCode(128 + ((t >> 6) & 63))), a.push(String.fromCharCode(128 + (t & 63)));
              break;
            default:
              a.push(String.fromCharCode(224 + (n >> 12))), a.push(String.fromCharCode(128 + ((n >> 6) & 63))), a.push(String.fromCharCode(128 + (n & 63)));
          }
        return a.join("");
      },
  at = (function () {
    var e = {};
    return function (r, n) {
      var t = r + "|" + (n || "");
      return e[t] ? e[t] : (e[t] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", n || ""));
    };
  })(),
  Hi = (function () {
    var e = [
      ["nbsp", " "],
      ["middot", "·"],
      ["quot", '"'],
      ["apos", "'"],
      ["gt", ">"],
      ["lt", "<"],
      ["amp", "&"],
    ].map(function (a) {
      return [new RegExp("&" + a[0] + ";", "ig"), a[1]];
    });
    return function (r) {
      for (
        var n = r
            .replace(/^[\t\n\r ]+/, "")
            .replace(/[\t\n\r ]+$/, "")
            .replace(/>\s+/g, ">")
            .replace(/\s+</g, "<")
            .replace(/[\t\n\r ]+/g, " ")
            .replace(
              /<\s*[bB][rR]\s*\/?>/g,
              `
`
            )
            .replace(/<[^>]*>/g, ""),
          t = 0;
        t < e.length;
        ++t
      )
        n = n.replace(e[t][0], e[t][1]);
      return n;
    };
  })(),
  Hf = (function () {
    var e = {};
    return function (r) {
      return e[r] !== void 0 ? e[r] : (e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g"));
    };
  })(),
  Vf = /<\/?(?:vt:)?variant>/g,
  Wf = /<(?:vt:)([^>]*)>([\s\S]*)</;
function Cn(e, a) {
  var r = xe(e),
    n = e.match(Hf(r.baseType)) || [],
    t = [];
  if (n.length != r.size) {
    if (a.WTF) throw new Error("unexpected vector length " + n.length + " != " + r.size);
    return t;
  }
  return (
    n.forEach(function (i) {
      var s = i.replace(Vf, "").match(Wf);
      s && t.push({ v: Se(s[2]), t: s[1] });
    }),
    t
  );
}
var Gf = /(^\s|\s$|\n)/;
function Xf(e) {
  return Br(e)
    .map(function (a) {
      return " " + a + '="' + e[a] + '"';
    })
    .join("");
}
function $f(e, a, r) {
  return "<" + e + (r != null ? Xf(r) : "") + (a != null ? (a.match(Gf) ? ' xml:space="preserve"' : "") + ">" + a + "</" + e : "/") + ">";
}
function O0(e) {
  if (Te && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Se(ma(w0(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var tt = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm,
  zf = {
    CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
    EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
    CT: "http://schemas.openxmlformats.org/package/2006/content-types",
    RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
    TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
    dc: "http://purl.org/dc/elements/1.1/",
    dcterms: "http://purl.org/dc/terms/",
    dcmitype: "http://purl.org/dc/dcmitype/",
    mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
    vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
    xsi: "http://www.w3.org/2001/XMLSchema-instance",
    xsd: "http://www.w3.org/2001/XMLSchema",
  },
  jf = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"];
function Kf(e, a) {
  for (var r = 1 - 2 * (e[a + 7] >>> 7), n = ((e[a + 7] & 127) << 4) + ((e[a + 6] >>> 4) & 15), t = e[a + 6] & 15, i = 5; i >= 0; --i) t = t * 256 + e[a + i];
  return n == 2047 ? (t == 0 ? r * (1 / 0) : NaN) : (n == 0 ? (n = -1022) : ((n -= 1023), (t += Math.pow(2, 52))), r * Math.pow(2, n - 52) * t);
}
function Yf(e, a, r) {
  var n = (a < 0 || 1 / a == -1 / 0 ? 1 : 0) << 7,
    t = 0,
    i = 0,
    s = n ? -a : a;
  isFinite(s) ? (s == 0 ? (t = i = 0) : ((t = Math.floor(Math.log(s) / Math.LN2)), (i = s * Math.pow(2, 52 - t)), t <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? (t = -1022) : ((i -= Math.pow(2, 52)), (t += 1023)))) : ((t = 2047), (i = isNaN(a) ? 26985 : 0));
  for (var c = 0; c <= 5; ++c, i /= 256) e[r + c] = i & 255;
  (e[r + 6] = ((t & 15) << 4) | (i & 15)), (e[r + 7] = (t >> 4) | n);
}
var On = function (e) {
    for (var a = [], r = 10240, n = 0; n < e[0].length; ++n) if (e[0][n]) for (var t = 0, i = e[0][n].length; t < i; t += r) a.push.apply(a, e[0][n].slice(t, t + r));
    return a;
  },
  Rn = Te
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (a) {
                return Buffer.isBuffer(a) ? a : ga(a);
              })
            )
          : On(e);
      }
    : On,
  Dn = function (e, a, r) {
    for (var n = [], t = a; t < r; t += 2) n.push(String.fromCharCode(Xr(e, t)));
    return n.join("").replace(ur, "");
  },
  R0 = Te
    ? function (e, a, r) {
        return Buffer.isBuffer(e) ? e.toString("utf16le", a, r).replace(ur, "") : Dn(e, a, r);
      }
    : Dn,
  In = function (e, a, r) {
    for (var n = [], t = a; t < a + r; ++t) n.push(("0" + e[t].toString(16)).slice(-2));
    return n.join("");
  },
  Vi = Te
    ? function (e, a, r) {
        return Buffer.isBuffer(e) ? e.toString("hex", a, a + r) : In(e, a, r);
      }
    : In,
  Nn = function (e, a, r) {
    for (var n = [], t = a; t < r; t++) n.push(String.fromCharCode(Aa(e, t)));
    return n.join("");
  },
  ot = Te
    ? function (a, r, n) {
        return Buffer.isBuffer(a) ? a.toString("utf8", r, n) : Nn(a, r, n);
      }
    : Nn,
  Wi = function (e, a) {
    var r = gr(e, a);
    return r > 0 ? ot(e, a + 4, a + 4 + r - 1) : "";
  },
  Gi = Wi,
  Xi = function (e, a) {
    var r = gr(e, a);
    return r > 0 ? ot(e, a + 4, a + 4 + r - 1) : "";
  },
  $i = Xi,
  zi = function (e, a) {
    var r = 2 * gr(e, a);
    return r > 0 ? ot(e, a + 4, a + 4 + r - 1) : "";
  },
  ji = zi,
  Ki = function (a, r) {
    var n = gr(a, r);
    return n > 0 ? R0(a, r + 4, r + 4 + n) : "";
  },
  Yi = Ki,
  Ji = function (e, a) {
    var r = gr(e, a);
    return r > 0 ? ot(e, a + 4, a + 4 + r) : "";
  },
  qi = Ji,
  Zi = function (e, a) {
    return Kf(e, a);
  },
  Dt = Zi,
  Qi = function (a) {
    return Array.isArray(a) || (typeof Uint8Array < "u" && a instanceof Uint8Array);
  };
Te &&
  ((Gi = function (a, r) {
    if (!Buffer.isBuffer(a)) return Wi(a, r);
    var n = a.readUInt32LE(r);
    return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
  }),
  ($i = function (a, r) {
    if (!Buffer.isBuffer(a)) return Xi(a, r);
    var n = a.readUInt32LE(r);
    return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
  }),
  (ji = function (a, r) {
    if (!Buffer.isBuffer(a)) return zi(a, r);
    var n = 2 * a.readUInt32LE(r);
    return a.toString("utf16le", r + 4, r + 4 + n - 1);
  }),
  (Yi = function (a, r) {
    if (!Buffer.isBuffer(a)) return Ki(a, r);
    var n = a.readUInt32LE(r);
    return a.toString("utf16le", r + 4, r + 4 + n);
  }),
  (qi = function (a, r) {
    if (!Buffer.isBuffer(a)) return Ji(a, r);
    var n = a.readUInt32LE(r);
    return a.toString("utf8", r + 4, r + 4 + n);
  }),
  (Dt = function (a, r) {
    return Buffer.isBuffer(a) ? a.readDoubleLE(r) : Zi(a, r);
  }),
  (Qi = function (a) {
    return Buffer.isBuffer(a) || Array.isArray(a) || (typeof Uint8Array < "u" && a instanceof Uint8Array);
  }));
var Aa = function (e, a) {
    return e[a];
  },
  Xr = function (e, a) {
    return e[a + 1] * 256 + e[a];
  },
  Jf = function (e, a) {
    var r = e[a + 1] * 256 + e[a];
    return r < 32768 ? r : (65535 - r + 1) * -1;
  },
  gr = function (e, a) {
    return e[a + 3] * (1 << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a];
  },
  la = function (e, a) {
    return (e[a + 3] << 24) | (e[a + 2] << 16) | (e[a + 1] << 8) | e[a];
  },
  qf = function (e, a) {
    return (e[a] << 24) | (e[a + 1] << 16) | (e[a + 2] << 8) | e[a + 3];
  };
function za(e, a) {
  var r = "",
    n,
    t,
    i = [],
    s,
    c,
    f,
    o;
  switch (a) {
    case "dbcs":
      if (((o = this.l), Te && Buffer.isBuffer(this))) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (f = 0; f < e; ++f) (r += String.fromCharCode(Xr(this, o))), (o += 2);
      e *= 2;
      break;
    case "utf8":
      r = ot(this, this.l, this.l + e);
      break;
    case "utf16le":
      (e *= 2), (r = R0(this, this.l, this.l + e));
      break;
    case "wstr":
      return za.call(this, e, "dbcs");
    case "lpstr-ansi":
      (r = Gi(this, this.l)), (e = 4 + gr(this, this.l));
      break;
    case "lpstr-cp":
      (r = $i(this, this.l)), (e = 4 + gr(this, this.l));
      break;
    case "lpwstr":
      (r = ji(this, this.l)), (e = 4 + 2 * gr(this, this.l));
      break;
    case "lpp4":
      (e = 4 + gr(this, this.l)), (r = Yi(this, this.l)), e & 2 && (e += 2);
      break;
    case "8lpp4":
      (e = 4 + gr(this, this.l)), (r = qi(this, this.l)), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (s = Aa(this, this.l + e++)) !== 0; ) i.push(gt(s));
      r = i.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (s = Xr(this, this.l + e)) !== 0; ) i.push(gt(s)), (e += 2);
      (e += 2), (r = i.join(""));
      break;
    case "dbcs-cont":
      for (r = "", o = this.l, f = 0; f < e; ++f) {
        if (this.lens && this.lens.indexOf(o) !== -1) return (s = Aa(this, o)), (this.l = o + 1), (c = za.call(this, e - f, s ? "dbcs-cont" : "sbcs-cont")), i.join("") + c;
        i.push(gt(Xr(this, o))), (o += 2);
      }
      (r = i.join("")), (e *= 2);
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", o = this.l, f = 0; f != e; ++f) {
        if (this.lens && this.lens.indexOf(o) !== -1) return (s = Aa(this, o)), (this.l = o + 1), (c = za.call(this, e - f, s ? "dbcs-cont" : "sbcs-cont")), i.join("") + c;
        i.push(gt(Aa(this, o))), (o += 1);
      }
      r = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return (n = Aa(this, this.l)), this.l++, n;
        case 2:
          return (n = (a === "i" ? Jf : Xr)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return a === "i" || !(this[this.l + 3] & 128) ? ((n = (e > 0 ? la : qf)(this, this.l)), (this.l += 4), n) : ((t = gr(this, this.l)), (this.l += 4), t);
        case 8:
        case -8:
          if (a === "f") return e == 8 ? (t = Dt(this, this.l)) : (t = Dt([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0)), (this.l += 8), t;
          e = 8;
        case 16:
          r = Vi(this, this.l, e);
          break;
      }
  }
  return (this.l += e), r;
}
var Zf = function (e, a, r) {
    (e[r] = a & 255), (e[r + 1] = (a >>> 8) & 255), (e[r + 2] = (a >>> 16) & 255), (e[r + 3] = (a >>> 24) & 255);
  },
  Qf = function (e, a, r) {
    (e[r] = a & 255), (e[r + 1] = (a >> 8) & 255), (e[r + 2] = (a >> 16) & 255), (e[r + 3] = (a >> 24) & 255);
  },
  eo = function (e, a, r) {
    (e[r] = a & 255), (e[r + 1] = (a >>> 8) & 255);
  };
function ro(e, a, r) {
  var n = 0,
    t = 0;
  if (r === "dbcs") {
    for (t = 0; t != a.length; ++t) eo(this, a.charCodeAt(t), this.l + 2 * t);
    n = 2 * a.length;
  } else if (r === "sbcs") {
    for (a = a.replace(/[^\x00-\x7F]/g, "_"), t = 0; t != a.length; ++t) this[this.l + t] = a.charCodeAt(t) & 255;
    n = a.length;
  } else if (r === "hex") {
    for (; t < e; ++t) this[this.l++] = parseInt(a.slice(2 * t, 2 * t + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var i = Math.min(this.l + e, this.length);
    for (t = 0; t < Math.min(a.length, e); ++t) {
      var s = a.charCodeAt(t);
      (this[this.l++] = s & 255), (this[this.l++] = s >> 8);
    }
    for (; this.l < i; ) this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        (n = 1), (this[this.l] = a & 255);
        break;
      case 2:
        (n = 2), (this[this.l] = a & 255), (a >>>= 8), (this[this.l + 1] = a & 255);
        break;
      case 3:
        (n = 3), (this[this.l] = a & 255), (a >>>= 8), (this[this.l + 1] = a & 255), (a >>>= 8), (this[this.l + 2] = a & 255);
        break;
      case 4:
        (n = 4), Zf(this, a, this.l);
        break;
      case 8:
        if (((n = 8), r === "f")) {
          Yf(this, a, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), Qf(this, a, this.l);
        break;
    }
  return (this.l += n), this;
}
function es(e, a) {
  var r = Vi(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(a + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function je(e, a) {
  (e.l = a), (e.read_shift = za), (e.chk = es), (e.write_shift = ro);
}
function nr(e, a) {
  e.l += a;
}
function He(e) {
  var a = ia(e);
  return je(a, 0), a;
}
function Yr(e, a, r) {
  if (e) {
    var n, t, i;
    je(e, e.l || 0);
    for (var s = e.length, c = 0, f = 0; e.l < s; ) {
      (c = e.read_shift(1)), c & 128 && (c = (c & 127) + ((e.read_shift(1) & 127) << 7));
      var o = bt[c] || bt[65535];
      for (n = e.read_shift(1), i = n & 127, t = 1; t < 4 && n & 128; ++t) i += ((n = e.read_shift(1)) & 127) << (7 * t);
      f = e.l + i;
      var l = o.f && o.f(e, i, r);
      if (((e.l = f), a(l, o, c))) return;
    }
  }
}
function c0() {
  var e = [],
    a = Te ? 256 : 2048,
    r = function (o) {
      var l = He(o);
      return je(l, 0), l;
    },
    n = r(a),
    t = function () {
      n && (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)), n.length > 0 && e.push(n), (n = null));
    },
    i = function (o) {
      return n && o < n.length - n.l ? n : (t(), (n = r(Math.max(o + 1, a))));
    },
    s = function () {
      return t(), ra(e);
    },
    c = function (o) {
      t(), (n = o), n.l == null && (n.l = n.length), i(a);
    };
  return { next: i, push: c, end: s, _bufs: e };
}
function ja(e, a, r) {
  var n = Ke(e);
  if ((a.s ? (n.cRel && (n.c += a.s.c), n.rRel && (n.r += a.s.r)) : (n.cRel && (n.c += a.c), n.rRel && (n.r += a.r)), !r || r.biff < 12)) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function Pn(e, a, r) {
  var n = Ke(e);
  return (n.s = ja(n.s, a.s, r)), (n.e = ja(n.e, a.s, r)), n;
}
function Ka(e, a) {
  if (e.cRel && e.c < 0) for (e = Ke(e); e.c < 0; ) e.c += a > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = Ke(e); e.r < 0; ) e.r += a > 8 ? 1048576 : a > 5 ? 65536 : 16384;
  var r = ve(e);
  return !e.cRel && e.cRel != null && (r = no(r)), !e.rRel && e.rRel != null && (r = ao(r)), r;
}
function Zt(e, a) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (a.biff >= 12 ? 1048575 : a.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ve(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ve(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (a.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Ye(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Ye(e.e.r) : Ka(e.s, a.biff) + ":" + Ka(e.e, a.biff);
}
function D0(e) {
  return parseInt(to(e), 10) - 1;
}
function Ye(e) {
  return "" + (e + 1);
}
function ao(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function to(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function I0(e) {
  for (var a = io(e), r = 0, n = 0; n !== a.length; ++n) r = 26 * r + a.charCodeAt(n) - 64;
  return r - 1;
}
function Ve(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var a = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) a = String.fromCharCode(((e - 1) % 26) + 65) + a;
  return a;
}
function no(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function io(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function so(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function lr(e) {
  for (var a = 0, r = 0, n = 0; n < e.length; ++n) {
    var t = e.charCodeAt(n);
    t >= 48 && t <= 57 ? (a = 10 * a + (t - 48)) : t >= 65 && t <= 90 && (r = 26 * r + (t - 64));
  }
  return { c: r - 1, r: a - 1 };
}
function ve(e) {
  for (var a = e.c + 1, r = ""; a; a = ((a - 1) / 26) | 0) r = String.fromCharCode(((a - 1) % 26) + 65) + r;
  return r + (e.r + 1);
}
function Pa(e) {
  var a = e.indexOf(":");
  return a == -1 ? { s: lr(e), e: lr(e) } : { s: lr(e.slice(0, a)), e: lr(e.slice(a + 1)) };
}
function ke(e, a) {
  return typeof a > "u" || typeof a == "number" ? ke(e.s, e.e) : (typeof e != "string" && (e = ve(e)), typeof a != "string" && (a = ve(a)), e == a ? e : e + ":" + a);
}
function Ie(e) {
  var a = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    r = 0,
    n = 0,
    t = 0,
    i = e.length;
  for (r = 0; n < i && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n) r = 26 * r + t;
  for (a.s.c = --r, r = 0; n < i && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n) r = 10 * r + t;
  if (((a.s.r = --r), n === i || t != 10)) return (a.e.c = a.s.c), (a.e.r = a.s.r), a;
  for (++n, r = 0; n != i && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n) r = 26 * r + t;
  for (a.e.c = --r, r = 0; n != i && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n) r = 10 * r + t;
  return (a.e.r = --r), a;
}
function Ln(e, a) {
  var r = e.t == "d" && a instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Sr(e.z, r ? hr(a) : a));
    } catch {}
  try {
    return (e.w = Sr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? hr(a) : a));
  } catch {
    return "" + a;
  }
}
function Kr(e, a, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? Ea[e.v] || e.v : a == null ? Ln(e, e.v) : Ln(e, a));
}
function ca(e, a) {
  var r = a && a.sheet ? a.sheet : "Sheet1",
    n = {};
  return (n[r] = e), { SheetNames: [r], Sheets: n };
}
function rs(e, a, r) {
  var n = r || {},
    t = e ? Array.isArray(e) : n.dense,
    i = e || (t ? [] : {}),
    s = 0,
    c = 0;
  if (i && n.origin != null) {
    if (typeof n.origin == "number") s = n.origin;
    else {
      var f = typeof n.origin == "string" ? lr(n.origin) : n.origin;
      (s = f.r), (c = f.c);
    }
    i["!ref"] || (i["!ref"] = "A1:A1");
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var l = Ie(i["!ref"]);
    (o.s.c = l.s.c), (o.s.r = l.s.r), (o.e.c = Math.max(o.e.c, l.e.c)), (o.e.r = Math.max(o.e.r, l.e.r)), s == -1 && (o.e.r = s = l.e.r + 1);
  }
  for (var h = 0; h != a.length; ++h)
    if (a[h]) {
      if (!Array.isArray(a[h])) throw new Error("aoa_to_sheet expects an array of arrays");
      for (var u = 0; u != a[h].length; ++u)
        if (!(typeof a[h][u] > "u")) {
          var d = { v: a[h][u] },
            v = s + h,
            x = c + u;
          if ((o.s.r > v && (o.s.r = v), o.s.c > x && (o.s.c = x), o.e.r < v && (o.e.r = v), o.e.c < x && (o.e.c = x), a[h][u] && typeof a[h][u] == "object" && !Array.isArray(a[h][u]) && !(a[h][u] instanceof Date))) d = a[h][u];
          else if ((Array.isArray(d.v) && ((d.f = a[h][u][1]), (d.v = d.v[0])), d.v === null))
            if (d.f) d.t = "n";
            else if (n.nullError) (d.t = "e"), (d.v = 0);
            else if (n.sheetStubs) d.t = "z";
            else continue;
          else typeof d.v == "number" ? (d.t = "n") : typeof d.v == "boolean" ? (d.t = "b") : d.v instanceof Date ? ((d.z = n.dateNF || ge[14]), n.cellDates ? ((d.t = "d"), (d.w = Sr(d.z, hr(d.v)))) : ((d.t = "n"), (d.v = hr(d.v)), (d.w = Sr(d.z, d.v)))) : (d.t = "s");
          if (t) i[v] || (i[v] = []), i[v][x] && i[v][x].z && (d.z = i[v][x].z), (i[v][x] = d);
          else {
            var g = ve({ c: x, r: v });
            i[g] && i[g].z && (d.z = i[g].z), (i[g] = d);
          }
        }
    }
  return o.s.c < 1e7 && (i["!ref"] = ke(o)), i;
}
function La(e, a) {
  return rs(null, e, a);
}
function co(e) {
  return e.read_shift(4, "i");
}
function tr(e) {
  var a = e.read_shift(4);
  return a === 0 ? "" : e.read_shift(a, "dbcs");
}
function fo(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function N0(e, a) {
  var r = e.l,
    n = e.read_shift(1),
    t = tr(e),
    i = [],
    s = { t, h: t };
  if (n & 1) {
    for (var c = e.read_shift(4), f = 0; f != c; ++f) i.push(fo(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = r + a), s;
}
var oo = N0;
function Fr(e) {
  var a = e.read_shift(4),
    r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: a, iStyleRef: r };
}
function _a(e) {
  var a = e.read_shift(2);
  return (a += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: a };
}
var lo = tr;
function P0(e) {
  var a = e.read_shift(4);
  return a === 0 || a === 4294967295 ? "" : e.read_shift(a, "dbcs");
}
var uo = tr,
  f0 = P0;
function L0(e) {
  var a = e.slice(e.l, e.l + 4),
    r = a[0] & 1,
    n = a[0] & 2;
  e.l += 4;
  var t = n === 0 ? Dt([0, 0, 0, 0, a[0] & 252, a[1], a[2], a[3]], 0) : la(a, 0) >> 2;
  return r ? t / 100 : t;
}
function as(e) {
  var a = { s: {}, e: {} };
  return (a.s.r = e.read_shift(4)), (a.e.r = e.read_shift(4)), (a.s.c = e.read_shift(4)), (a.e.c = e.read_shift(4)), a;
}
var Ta = as;
function rr(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function ho(e) {
  var a = {},
    r = e.read_shift(1),
    n = r >>> 1,
    t = e.read_shift(1),
    i = e.read_shift(2, "i"),
    s = e.read_shift(1),
    c = e.read_shift(1),
    f = e.read_shift(1);
  switch ((e.l++, n)) {
    case 0:
      a.auto = 1;
      break;
    case 1:
      a.index = t;
      var o = xa[t];
      o && (a.rgb = it(o));
      break;
    case 2:
      a.rgb = it([s, c, f]);
      break;
    case 3:
      a.theme = t;
      break;
  }
  return i != 0 && (a.tint = i > 0 ? i / 32767 : i / 32768), a;
}
function xo(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = { fBold: a & 1, fItalic: a & 2, fUnderline: a & 4, fStrikeout: a & 8, fOutline: a & 16, fShadow: a & 32, fCondense: a & 64, fExtend: a & 128 };
  return r;
}
function ts(e, a) {
  var r = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" },
    n = e.read_shift(4);
  switch (n) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return r[e.read_shift(4)] || "";
  }
  if (n > 400) throw new Error("Unsupported Clipboard: " + n.toString(16));
  return (e.l -= 4), e.read_shift(0, a == 1 ? "lpstr" : "lpwstr");
}
function vo(e) {
  return ts(e, 1);
}
function po(e) {
  return ts(e, 2);
}
var M0 = 2,
  dr = 3,
  _t = 11,
  Mn = 12,
  It = 19,
  Tt = 64,
  go = 65,
  mo = 71,
  _o = 4108,
  To = 4126,
  Xe = 80,
  ns = 81,
  Eo = [Xe, ns],
  ko = {
    1: { n: "CodePage", t: M0 },
    2: { n: "Category", t: Xe },
    3: { n: "PresentationFormat", t: Xe },
    4: { n: "ByteCount", t: dr },
    5: { n: "LineCount", t: dr },
    6: { n: "ParagraphCount", t: dr },
    7: { n: "SlideCount", t: dr },
    8: { n: "NoteCount", t: dr },
    9: { n: "HiddenCount", t: dr },
    10: { n: "MultimediaClipCount", t: dr },
    11: { n: "ScaleCrop", t: _t },
    12: { n: "HeadingPairs", t: _o },
    13: { n: "TitlesOfParts", t: To },
    14: { n: "Manager", t: Xe },
    15: { n: "Company", t: Xe },
    16: { n: "LinksUpToDate", t: _t },
    17: { n: "CharacterCount", t: dr },
    19: { n: "SharedDoc", t: _t },
    22: { n: "HyperlinksChanged", t: _t },
    23: { n: "AppVersion", t: dr, p: "version" },
    24: { n: "DigSig", t: go },
    26: { n: "ContentType", t: Xe },
    27: { n: "ContentStatus", t: Xe },
    28: { n: "Language", t: Xe },
    29: { n: "Version", t: Xe },
    255: {},
    2147483648: { n: "Locale", t: It },
    2147483651: { n: "Behavior", t: It },
    1919054434: {},
  },
  wo = {
    1: { n: "CodePage", t: M0 },
    2: { n: "Title", t: Xe },
    3: { n: "Subject", t: Xe },
    4: { n: "Author", t: Xe },
    5: { n: "Keywords", t: Xe },
    6: { n: "Comments", t: Xe },
    7: { n: "Template", t: Xe },
    8: { n: "LastAuthor", t: Xe },
    9: { n: "RevNumber", t: Xe },
    10: { n: "EditTime", t: Tt },
    11: { n: "LastPrinted", t: Tt },
    12: { n: "CreatedDate", t: Tt },
    13: { n: "ModifiedDate", t: Tt },
    14: { n: "PageCount", t: dr },
    15: { n: "WordCount", t: dr },
    16: { n: "CharCount", t: dr },
    17: { n: "Thumbnail", t: mo },
    18: { n: "Application", t: Xe },
    19: { n: "DocSecurity", t: dr },
    255: {},
    2147483648: { n: "Locale", t: It },
    2147483651: { n: "Behavior", t: It },
    1919054434: {},
  },
  bn = {
    1: "US",
    2: "CA",
    3: "",
    7: "RU",
    20: "EG",
    30: "GR",
    31: "NL",
    32: "BE",
    33: "FR",
    34: "ES",
    36: "HU",
    39: "IT",
    41: "CH",
    43: "AT",
    44: "GB",
    45: "DK",
    46: "SE",
    47: "NO",
    48: "PL",
    49: "DE",
    52: "MX",
    55: "BR",
    61: "AU",
    64: "NZ",
    66: "TH",
    81: "JP",
    82: "KR",
    84: "VN",
    86: "CN",
    90: "TR",
    105: "JS",
    213: "DZ",
    216: "MA",
    218: "LY",
    351: "PT",
    354: "IS",
    358: "FI",
    420: "CZ",
    886: "TW",
    961: "LB",
    962: "JO",
    963: "SY",
    964: "IQ",
    965: "KW",
    966: "SA",
    971: "AE",
    972: "IL",
    974: "QA",
    981: "IR",
    65535: "US",
  },
  Ao = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function So(e) {
  return e.map(function (a) {
    return [(a >> 16) & 255, (a >> 8) & 255, a & 255];
  });
}
var Fo = So([
    0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606,
    13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  xa = Ke(Fo),
  Ea = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" },
  is = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 },
  Bn = {
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
    "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
    "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
    "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
    "application/vnd.ms-excel.worksheet": "sheets",
    "application/vnd.ms-excel.binIndexWs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
    "application/vnd.ms-excel.chartsheet": "charts",
    "application/vnd.ms-excel.macrosheet+xml": "macros",
    "application/vnd.ms-excel.macrosheet": "macros",
    "application/vnd.ms-excel.intlmacrosheet": "TODO",
    "application/vnd.ms-excel.binIndexMs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
    "application/vnd.ms-excel.dialogsheet": "dialogs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
    "application/vnd.ms-excel.sharedStrings": "strs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
    "application/vnd.ms-excel.styles": "styles",
    "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
    "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
    "application/vnd.ms-excel.comments": "comments",
    "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
    "application/vnd.ms-excel.person+xml": "people",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
    "application/vnd.ms-excel.sheetMetadata": "metadata",
    "application/vnd.ms-excel.pivotTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
    "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
    "application/vnd.ms-office.chartstyle+xml": "TODO",
    "application/vnd.ms-office.chartex+xml": "TODO",
    "application/vnd.ms-excel.calcChain": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
    "application/vnd.ms-office.activeX": "TODO",
    "application/vnd.ms-office.activeX+xml": "TODO",
    "application/vnd.ms-excel.attachedToolbars": "TODO",
    "application/vnd.ms-excel.connections": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
    "application/vnd.ms-excel.externalLink": "links",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
    "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
    "application/vnd.ms-excel.pivotCacheRecords": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
    "application/vnd.ms-excel.queryTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
    "application/vnd.ms-excel.userNames": "TODO",
    "application/vnd.ms-excel.revisionHeaders": "TODO",
    "application/vnd.ms-excel.revisionLog": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
    "application/vnd.ms-excel.tableSingleCells": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
    "application/vnd.ms-excel.slicer": "TODO",
    "application/vnd.ms-excel.slicerCache": "TODO",
    "application/vnd.ms-excel.slicer+xml": "TODO",
    "application/vnd.ms-excel.slicerCache+xml": "TODO",
    "application/vnd.ms-excel.wsSortMap": "TODO",
    "application/vnd.ms-excel.table": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
    "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
    "application/vnd.ms-excel.Timeline+xml": "TODO",
    "application/vnd.ms-excel.TimelineCache+xml": "TODO",
    "application/vnd.ms-office.vbaProject": "vba",
    "application/vnd.ms-office.vbaProjectSignature": "TODO",
    "application/vnd.ms-office.volatileDependencies": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
    "application/vnd.ms-excel.controlproperties+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.model+data": "TODO",
    "application/vnd.ms-excel.Survey+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
    "application/vnd.openxmlformats-package.relationships+xml": "rels",
    "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
    "image/png": "TODO",
    sheet: "js",
  };
function yo() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function Co(e) {
  var a = yo();
  if (!e || !e.match) return a;
  var r = {};
  if (
    ((e.match(ir) || []).forEach(function (n) {
      var t = xe(n);
      switch (t[0].replace(Lf, "<")) {
        case "<?xml":
          break;
        case "<Types":
          a.xmlns = t["xmlns" + (t[0].match(/<(\w+):/) || ["", ""])[1]];
          break;
        case "<Default":
          r[t.Extension] = t.ContentType;
          break;
        case "<Override":
          a[Bn[t.ContentType]] !== void 0 && a[Bn[t.ContentType]].push(t.PartName);
          break;
      }
    }),
    a.xmlns !== zf.CT)
  )
    throw new Error("Unknown Namespace: " + a.xmlns);
  return (a.calcchain = a.calcchains.length > 0 ? a.calcchains[0] : ""), (a.sst = a.strs.length > 0 ? a.strs[0] : ""), (a.style = a.styles.length > 0 ? a.styles[0] : ""), (a.defaults = r), delete a.calcchains, a;
}
var Fa = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
};
function o0(e) {
  var a = e.lastIndexOf("/");
  return e.slice(0, a + 1) + "_rels/" + e.slice(a + 1) + ".rels";
}
function Ya(e, a) {
  var r = { "!id": {} };
  if (!e) return r;
  a.charAt(0) !== "/" && (a = "/" + a);
  var n = {};
  return (
    (e.match(ir) || []).forEach(function (t) {
      var i = xe(t);
      if (i[0] === "<Relationship") {
        var s = {};
        (s.Type = i.Type), (s.Target = i.Target), (s.Id = i.Id), i.TargetMode && (s.TargetMode = i.TargetMode);
        var c = i.TargetMode === "External" ? i.Target : Xa(i.Target, a);
        (r[c] = s), (n[i.Id] = s);
      }
    }),
    (r["!id"] = n),
    r
  );
}
var Oo = "application/vnd.oasis.opendocument.spreadsheet";
function Ro(e, a) {
  for (var r = O0(e), n, t; (n = tt.exec(r)); )
    switch (n[3]) {
      case "manifest":
        break;
      case "file-entry":
        if (((t = xe(n[0], !1)), t.path == "/" && t.type !== Oo)) throw new Error("This OpenDocument is not a spreadsheet");
        break;
      case "encryption-data":
      case "algorithm":
      case "start-key-generation":
      case "key-derivation":
        throw new Error("Unsupported ODS Encryption");
      default:
        if (a && a.WTF) throw n;
    }
}
var Ja = [
    ["cp:category", "Category"],
    ["cp:contentStatus", "ContentStatus"],
    ["cp:keywords", "Keywords"],
    ["cp:lastModifiedBy", "LastAuthor"],
    ["cp:lastPrinted", "LastPrinted"],
    ["cp:revision", "RevNumber"],
    ["cp:version", "Version"],
    ["dc:creator", "Author"],
    ["dc:description", "Comments"],
    ["dc:identifier", "Identifier"],
    ["dc:language", "Language"],
    ["dc:subject", "Subject"],
    ["dc:title", "Title"],
    ["dcterms:created", "CreatedDate", "date"],
    ["dcterms:modified", "ModifiedDate", "date"],
  ],
  Do = (function () {
    for (var e = new Array(Ja.length), a = 0; a < Ja.length; ++a) {
      var r = Ja[a],
        n = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
      e[a] = new RegExp("<" + n + "[^>]*>([\\s\\S]*?)</" + n + ">");
    }
    return e;
  })();
function ss(e) {
  var a = {};
  e = Se(e);
  for (var r = 0; r < Ja.length; ++r) {
    var n = Ja[r],
      t = e.match(Do[r]);
    t != null && t.length > 0 && (a[n[1]] = we(t[1])), n[2] === "date" && a[n[1]] && (a[n[1]] = $e(a[n[1]]));
  }
  return a;
}
var Io = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"],
];
function cs(e, a, r, n) {
  var t = [];
  if (typeof e == "string") t = Cn(e, n);
  else
    for (var i = 0; i < e.length; ++i)
      t = t.concat(
        e[i].map(function (l) {
          return { v: l };
        })
      );
  var s =
      typeof a == "string"
        ? Cn(a, n).map(function (l) {
            return l.v;
          })
        : a,
    c = 0,
    f = 0;
  if (s.length > 0)
    for (var o = 0; o !== t.length; o += 2) {
      switch (((f = +t[o + 1].v), t[o].v)) {
        case "Worksheets":
        case "工作表":
        case "Листы":
        case "أوراق العمل":
        case "ワークシート":
        case "גליונות עבודה":
        case "Arbeitsblätter":
        case "Çalışma Sayfaları":
        case "Feuilles de calcul":
        case "Fogli di lavoro":
        case "Folhas de cálculo":
        case "Planilhas":
        case "Regneark":
        case "Hojas de cálculo":
        case "Werkbladen":
          (r.Worksheets = f), (r.SheetNames = s.slice(c, c + f));
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "名前付き一覧":
        case "Benannte Bereiche":
        case "Navngivne områder":
          (r.NamedRanges = f), (r.DefinedNames = s.slice(c, c + f));
          break;
        case "Charts":
        case "Diagramme":
          (r.Chartsheets = f), (r.ChartNames = s.slice(c, c + f));
          break;
      }
      c += f;
    }
}
function No(e, a, r) {
  var n = {};
  return (
    a || (a = {}),
    (e = Se(e)),
    Io.forEach(function (t) {
      var i = (e.match(at(t[0])) || [])[1];
      switch (t[2]) {
        case "string":
          i && (a[t[1]] = we(i));
          break;
        case "bool":
          a[t[1]] = i === "true";
          break;
        case "raw":
          var s = e.match(new RegExp("<" + t[0] + "[^>]*>([\\s\\S]*?)</" + t[0] + ">"));
          s && s.length > 0 && (n[t[1]] = s[1]);
          break;
      }
    }),
    n.HeadingPairs && n.TitlesOfParts && cs(n.HeadingPairs, n.TitlesOfParts, a, r),
    a
  );
}
var Po = /<[^>]+>[^<]*/g;
function Lo(e, a) {
  var r = {},
    n = "",
    t = e.match(Po);
  if (t)
    for (var i = 0; i != t.length; ++i) {
      var s = t[i],
        c = xe(s);
      switch (c[0]) {
        case "<?xml":
          break;
        case "<Properties":
          break;
        case "<property":
          n = we(c.name);
          break;
        case "</property>":
          n = null;
          break;
        default:
          if (s.indexOf("<vt:") === 0) {
            var f = s.split(">"),
              o = f[0].slice(4),
              l = f[1];
            switch (o) {
              case "lpstr":
              case "bstr":
              case "lpwstr":
                r[n] = we(l);
                break;
              case "bool":
                r[n] = Ce(l);
                break;
              case "i1":
              case "i2":
              case "i4":
              case "i8":
              case "int":
              case "uint":
                r[n] = parseInt(l, 10);
                break;
              case "r4":
              case "r8":
              case "decimal":
                r[n] = parseFloat(l);
                break;
              case "filetime":
              case "date":
                r[n] = $e(l);
                break;
              case "cy":
              case "error":
                r[n] = we(l);
                break;
              default:
                if (o.slice(-1) == "/") break;
                a.WTF && typeof console < "u" && console.warn("Unexpected", s, o, f);
            }
          } else if (s.slice(0, 2) !== "</") {
            if (a.WTF) throw new Error(s);
          }
      }
    }
  return r;
}
var Mo = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" },
  Qt;
function bo(e, a, r) {
  Qt || (Qt = F0(Mo)), (a = Qt[a] || a), (e[a] = r);
}
function b0(e) {
  var a = e.read_shift(4),
    r = e.read_shift(4);
  return new Date(((r / 1e7) * Math.pow(2, 32) + a / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function fs(e, a, r) {
  var n = e.l,
    t = e.read_shift(0, "lpstr-cp");
  if (r) for (; (e.l - n) & 3; ) ++e.l;
  return t;
}
function os(e, a, r) {
  var n = e.read_shift(0, "lpwstr");
  return r && (e.l += (4 - ((n.length + 1) & 3)) & 3), n;
}
function ls(e, a, r) {
  return a === 31 ? os(e) : fs(e, a, r);
}
function l0(e, a, r) {
  return ls(e, a, r === !1 ? 0 : 4);
}
function Bo(e, a) {
  if (!a) throw new Error("VtUnalignedString must have positive length");
  return ls(e, a, 0);
}
function Uo(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) {
    var t = e.l;
    (r[n] = e.read_shift(0, "lpwstr").replace(ur, "")), (e.l - t) & 2 && (e.l += 2);
  }
  return r;
}
function Ho(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) r[n] = e.read_shift(0, "lpstr-cp").replace(ur, "");
  return r;
}
function Vo(e) {
  var a = e.l,
    r = Nt(e, ns);
  e[e.l] == 0 && e[e.l + 1] == 0 && (e.l - a) & 2 && (e.l += 2);
  var n = Nt(e, dr);
  return [r, n];
}
function Wo(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n < a / 2; ++n) r.push(Vo(e));
  return r;
}
function Un(e, a) {
  for (var r = e.read_shift(4), n = {}, t = 0; t != r; ++t) {
    var i = e.read_shift(4),
      s = e.read_shift(4);
    (n[i] = e
      .read_shift(s, a === 1200 ? "utf16le" : "utf8")
      .replace(ur, "")
      .replace(Ga, "!")),
      a === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = (e.l >> (2 + 1)) << 2), n;
}
function us(e) {
  var a = e.read_shift(4),
    r = e.slice(e.l, e.l + a);
  return (e.l += a), (a & 3) > 0 && (e.l += (4 - (a & 3)) & 3), r;
}
function Go(e) {
  var a = {};
  return (a.Size = e.read_shift(4)), (e.l += a.Size + 3 - ((a.Size - 1) % 4)), a;
}
function Nt(e, a, r) {
  var n = e.read_shift(2),
    t,
    i = r || {};
  if (((e.l += 2), a !== Mn && n !== a && Eo.indexOf(a) === -1 && !((a & 65534) == 4126 && (n & 65534) == 4126))) throw new Error("Expected type " + a + " saw " + n);
  switch (a === Mn ? n : a) {
    case 2:
      return (t = e.read_shift(2, "i")), i.raw || (e.l += 2), t;
    case 3:
      return (t = e.read_shift(4, "i")), t;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return (t = e.read_shift(4)), t;
    case 30:
      return fs(e, n, 4).replace(ur, "");
    case 31:
      return os(e);
    case 64:
      return b0(e);
    case 65:
      return us(e);
    case 71:
      return Go(e);
    case 80:
      return l0(e, n, !i.raw).replace(ur, "");
    case 81:
      return Bo(e, n).replace(ur, "");
    case 4108:
      return Wo(e);
    case 4126:
    case 4127:
      return n == 4127 ? Uo(e) : Ho(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + a + " " + n);
  }
}
function Hn(e, a) {
  var r = e.l,
    n = e.read_shift(4),
    t = e.read_shift(4),
    i = [],
    s = 0,
    c = 0,
    f = -1,
    o = {};
  for (s = 0; s != t; ++s) {
    var l = e.read_shift(4),
      h = e.read_shift(4);
    i[s] = [l, h + r];
  }
  i.sort(function (C, _) {
    return C[1] - _[1];
  });
  var u = {};
  for (s = 0; s != t; ++s) {
    if (e.l !== i[s][1]) {
      var d = !0;
      if (s > 0 && a)
        switch (a[i[s - 1][0]].t) {
          case 2:
            e.l + 2 === i[s][1] && ((e.l += 2), (d = !1));
            break;
          case 80:
            e.l <= i[s][1] && ((e.l = i[s][1]), (d = !1));
            break;
          case 4108:
            e.l <= i[s][1] && ((e.l = i[s][1]), (d = !1));
            break;
        }
      if (((!a || s == 0) && e.l <= i[s][1] && ((d = !1), (e.l = i[s][1])), d)) throw new Error("Read Error: Expected address " + i[s][1] + " at " + e.l + " :" + s);
    }
    if (a) {
      var v = a[i[s][0]];
      if (((u[v.n] = Nt(e, v.t, { raw: !0 })), v.p === "version" && (u[v.n] = String(u[v.n] >> 16) + "." + ("0000" + String(u[v.n] & 65535)).slice(-4)), v.n == "CodePage"))
        switch (u[v.n]) {
          case 0:
            u[v.n] = 1252;
          case 874:
          case 932:
          case 936:
          case 949:
          case 950:
          case 1250:
          case 1251:
          case 1253:
          case 1254:
          case 1255:
          case 1256:
          case 1257:
          case 1258:
          case 1e4:
          case 1200:
          case 1201:
          case 1252:
          case 65e3:
          case -536:
          case 65001:
          case -535:
            Dr((c = (u[v.n] >>> 0) & 65535));
            break;
          default:
            throw new Error("Unsupported CodePage: " + u[v.n]);
        }
    } else if (i[s][0] === 1) {
      if (((c = u.CodePage = Nt(e, M0)), Dr(c), f !== -1)) {
        var x = e.l;
        (e.l = i[f][1]), (o = Un(e, c)), (e.l = x);
      }
    } else if (i[s][0] === 0) {
      if (c === 0) {
        (f = s), (e.l = i[s + 1][1]);
        continue;
      }
      o = Un(e, c);
    } else {
      var g = o[i[s][0]],
        A;
      switch (e[e.l]) {
        case 65:
          (e.l += 4), (A = us(e));
          break;
        case 30:
          (e.l += 4), (A = l0(e, e[e.l - 4]).replace(/\u0000+$/, ""));
          break;
        case 31:
          (e.l += 4), (A = l0(e, e[e.l - 4]).replace(/\u0000+$/, ""));
          break;
        case 3:
          (e.l += 4), (A = e.read_shift(4, "i"));
          break;
        case 19:
          (e.l += 4), (A = e.read_shift(4));
          break;
        case 5:
          (e.l += 4), (A = e.read_shift(8, "f"));
          break;
        case 11:
          (e.l += 4), (A = Pe(e, 4));
          break;
        case 64:
          (e.l += 4), (A = $e(b0(e)));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      u[g] = A;
    }
  }
  return (e.l = r + n), u;
}
function Vn(e, a, r) {
  var n = e.content;
  if (!n) return {};
  je(n, 0);
  var t,
    i,
    s,
    c,
    f = 0;
  n.chk("feff", "Byte Order: "), n.read_shift(2);
  var o = n.read_shift(4),
    l = n.read_shift(16);
  if (l !== Ee.utils.consts.HEADER_CLSID && l !== r) throw new Error("Bad PropertySet CLSID " + l);
  if (((t = n.read_shift(4)), t !== 1 && t !== 2)) throw new Error("Unrecognized #Sets: " + t);
  if (((i = n.read_shift(16)), (c = n.read_shift(4)), t === 1 && c !== n.l)) throw new Error("Length mismatch: " + c + " !== " + n.l);
  t === 2 && ((s = n.read_shift(16)), (f = n.read_shift(4)));
  var h = Hn(n, a),
    u = { SystemIdentifier: o };
  for (var d in h) u[d] = h[d];
  if (((u.FMTID = i), t === 1)) return u;
  if ((f - n.l == 2 && (n.l += 2), n.l !== f)) throw new Error("Length mismatch 2: " + n.l + " !== " + f);
  var v;
  try {
    v = Hn(n, null);
  } catch {}
  for (d in v) u[d] = v[d];
  return (u.FMTID = [i, s]), u;
}
function Zr(e, a) {
  return e.read_shift(a), null;
}
function Xo(e, a, r) {
  for (var n = [], t = e.l + a; e.l < t; ) n.push(r(e, t - e.l));
  if (t !== e.l) throw new Error("Slurp error");
  return n;
}
function Pe(e, a) {
  return e.read_shift(a) === 1;
}
function be(e) {
  return e.read_shift(2, "u");
}
function hs(e, a) {
  return Xo(e, a, be);
}
function $o(e) {
  var a = e.read_shift(1),
    r = e.read_shift(1);
  return r === 1 ? a : a === 1;
}
function lt(e, a, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1),
    t = "sbcs-cont";
  if ((r && r.biff >= 8, !r || r.biff == 8)) {
    var i = e.read_shift(1);
    i && (t = "dbcs-cont");
  } else r.biff == 12 && (t = "wstr");
  r.biff >= 2 && r.biff <= 5 && (t = "cpstr");
  var s = n ? e.read_shift(n, t) : "";
  return s;
}
function zo(e) {
  var a = e.read_shift(2),
    r = e.read_shift(1),
    n = r & 4,
    t = r & 8,
    i = 1 + (r & 1),
    s = 0,
    c,
    f = {};
  t && (s = e.read_shift(2)), n && (c = e.read_shift(4));
  var o = i == 2 ? "dbcs-cont" : "sbcs-cont",
    l = a === 0 ? "" : e.read_shift(a, o);
  return t && (e.l += 4 * s), n && (e.l += c), (f.t = l), t || ((f.raw = "<t>" + f.t + "</t>"), (f.r = f.t)), f;
}
function pa(e, a, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(a, "cpstr");
    if (r.biff >= 12) return e.read_shift(a, "dbcs-cont");
  }
  var t = e.read_shift(1);
  return t === 0 ? (n = e.read_shift(a, "sbcs-cont")) : (n = e.read_shift(a, "dbcs-cont")), n;
}
function ut(e, a, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : pa(e, n, r);
}
function ka(e, a, r) {
  if (r.biff > 5) return ut(e, a, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function jo(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return (e.l += 2), [a, r];
}
function Ko(e) {
  var a = e.read_shift(4),
    r = e.l,
    n = !1;
  a > 24 && ((e.l += a - 24), e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (n = !0), (e.l = r));
  var t = e.read_shift((n ? a - 24 : a) >> 1, "utf16le").replace(ur, "");
  return n && (e.l += 24), t;
}
function Yo(e) {
  for (var a = e.read_shift(2), r = ""; a-- > 0; ) r += "../";
  var n = e.read_shift(0, "lpstr-ansi");
  if (((e.l += 2), e.read_shift(2) != 57005)) throw new Error("Bad FileMoniker");
  var t = e.read_shift(4);
  if (t === 0) return r + n.replace(/\\/g, "/");
  var i = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var s = e.read_shift(i >> 1, "utf16le").replace(ur, "");
  return r + s;
}
function Jo(e, a) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return Ko(e);
    case "0303000000000000c000000000000046":
      return Yo(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function Et(e) {
  var a = e.read_shift(4),
    r = a > 0 ? e.read_shift(a, "utf16le").replace(ur, "") : "";
  return r;
}
function qo(e, a) {
  var r = e.l + a,
    n = e.read_shift(4);
  if (n !== 2) throw new Error("Unrecognized streamVersion: " + n);
  var t = e.read_shift(2);
  e.l += 2;
  var i,
    s,
    c,
    f,
    o = "",
    l,
    h;
  t & 16 && (i = Et(e, r - e.l)), t & 128 && (s = Et(e, r - e.l)), (t & 257) === 257 && (c = Et(e, r - e.l)), (t & 257) === 1 && (f = Jo(e, r - e.l)), t & 8 && (o = Et(e, r - e.l)), t & 32 && (l = e.read_shift(16)), t & 64 && (h = b0(e)), (e.l = r);
  var u = s || c || f || "";
  u && o && (u += "#" + o), u || (u = "#" + o), t & 2 && u.charAt(0) == "/" && u.charAt(1) != "/" && (u = "file://" + u);
  var d = { Target: u };
  return l && (d.guid = l), h && (d.time = h), i && (d.Tooltip = i), d;
}
function xs(e) {
  var a = e.read_shift(1),
    r = e.read_shift(1),
    n = e.read_shift(1),
    t = e.read_shift(1);
  return [a, r, n, t];
}
function ds(e, a) {
  var r = xs(e);
  return (r[3] = 0), r;
}
function Hr(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2);
  return { r: a, c: r, ixfe: n };
}
function Zo(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2);
  return (e.l += 8), { type: a, flags: r };
}
function Qo(e, a, r) {
  return a === 0 ? "" : ka(e, a, r);
}
function el(e, a, r) {
  var n = r.biff > 8 ? 4 : 2,
    t = e.read_shift(n),
    i = e.read_shift(n, "i"),
    s = e.read_shift(n, "i");
  return [t, i, s];
}
function vs(e) {
  var a = e.read_shift(2),
    r = L0(e);
  return [a, r];
}
function rl(e, a, r) {
  (e.l += 4), (a -= 4);
  var n = e.l + a,
    t = lt(e, a, r),
    i = e.read_shift(2);
  if (((n -= e.l), i !== n)) throw new Error("Malformed AddinUdf: padding = " + n + " != " + i);
  return (e.l += i), t;
}
function Ht(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    t = e.read_shift(2);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
function ps(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(1),
    t = e.read_shift(1);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
var al = ps;
function gs(e) {
  e.l += 4;
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2);
  return (e.l += 12), [r, a, n];
}
function tl(e) {
  var a = {};
  return (e.l += 4), (e.l += 16), (a.fSharedNote = e.read_shift(2)), (e.l += 4), a;
}
function nl(e) {
  var a = {};
  return (e.l += 4), (e.cf = e.read_shift(2)), a;
}
function Ze(e) {
  (e.l += 2), (e.l += e.read_shift(2));
}
var il = { 0: Ze, 4: Ze, 5: Ze, 6: Ze, 7: nl, 8: Ze, 9: Ze, 10: Ze, 11: Ze, 12: Ze, 13: tl, 14: Ze, 15: Ze, 16: Ze, 17: Ze, 18: Ze, 19: Ze, 20: Ze, 21: gs };
function sl(e, a) {
  for (var r = e.l + a, n = []; e.l < r; ) {
    var t = e.read_shift(2);
    e.l -= 2;
    try {
      n.push(il[t](e, r - e.l));
    } catch {
      return (e.l = r), n;
    }
  }
  return e.l != r && (e.l = r), n;
}
function kt(e, a) {
  var r = { BIFFVer: 0, dt: 0 };
  switch (((r.BIFFVer = e.read_shift(2)), (a -= 2), a >= 2 && ((r.dt = e.read_shift(2)), (e.l -= 2)), r.BIFFVer)) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (a > 6) throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
  }
  return e.read_shift(a), r;
}
function cl(e, a) {
  return a === 0 || e.read_shift(2), 1200;
}
function fl(e, a, r) {
  if (r.enc) return (e.l += a), "";
  var n = e.l,
    t = ka(e, 0, r);
  return e.read_shift(a + n - e.l), t;
}
function ol(e, a, r) {
  var n = (r && r.biff == 8) || a == 2 ? e.read_shift(2) : ((e.l += a), 0);
  return { fDialog: n & 16, fBelow: n & 64, fRight: n & 128 };
}
function ll(e, a, r) {
  var n = e.read_shift(4),
    t = e.read_shift(1) & 3,
    i = e.read_shift(1);
  switch (i) {
    case 0:
      i = "Worksheet";
      break;
    case 1:
      i = "Macrosheet";
      break;
    case 2:
      i = "Chartsheet";
      break;
    case 6:
      i = "VBAModule";
      break;
  }
  var s = lt(e, 0, r);
  return s.length === 0 && (s = "Sheet1"), { pos: n, hs: t, dt: i, name: s };
}
function ul(e, a) {
  for (var r = e.l + a, n = e.read_shift(4), t = e.read_shift(4), i = [], s = 0; s != t && e.l < r; ++s) i.push(zo(e));
  return (i.Count = n), (i.Unique = t), i;
}
function hl(e, a) {
  var r = {};
  return (r.dsst = e.read_shift(2)), (e.l += a - 2), r;
}
function xl(e) {
  var a = {};
  (a.r = e.read_shift(2)), (a.c = e.read_shift(2)), (a.cnt = e.read_shift(2) - a.c);
  var r = e.read_shift(2);
  e.l += 4;
  var n = e.read_shift(1);
  return (e.l += 3), n & 7 && (a.level = n & 7), n & 32 && (a.hidden = !0), n & 64 && (a.hpt = r / 20), a;
}
function dl(e) {
  var a = Zo(e);
  if (a.type != 2211) throw new Error("Invalid Future Record " + a.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function vl(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Wn(e, a, r) {
  var n = 0;
  (r && r.biff == 2) || (n = e.read_shift(2));
  var t = e.read_shift(2);
  r && r.biff == 2 && ((n = 1 - (t >> 15)), (t &= 32767));
  var i = { Unsynced: n & 1, DyZero: (n & 2) >> 1, ExAsc: (n & 4) >> 2, ExDsc: (n & 8) >> 3 };
  return [i, t];
}
function pl(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(2),
    s = e.read_shift(2),
    c = e.read_shift(2),
    f = e.read_shift(2),
    o = e.read_shift(2);
  return { Pos: [a, r], Dim: [n, t], Flags: i, CurTab: s, FirstTab: c, Selected: f, TabRatio: o };
}
function gl(e, a, r) {
  if (r && r.biff >= 2 && r.biff < 5) return {};
  var n = e.read_shift(2);
  return { RTL: n & 64 };
}
function ml() {}
function _l(e, a, r) {
  var n = { dyHeight: e.read_shift(2), fl: e.read_shift(2) };
  switch ((r && r.biff) || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return (n.name = lt(e, 0, r)), n;
}
function Tl(e) {
  var a = Hr(e);
  return (a.isst = e.read_shift(4)), a;
}
function El(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = e.l + a,
    t = Hr(e);
  r.biff == 2 && e.l++;
  var i = ut(e, n - e.l, r);
  return (t.val = i), t;
}
function kl(e, a, r) {
  var n = e.read_shift(2),
    t = ka(e, 0, r);
  return [n, t];
}
var wl = ka;
function Gn(e, a, r) {
  var n = e.l + a,
    t = r.biff == 8 || !r.biff ? 4 : 2,
    i = e.read_shift(t),
    s = e.read_shift(t),
    c = e.read_shift(2),
    f = e.read_shift(2);
  return (e.l = n), { s: { r: i, c }, e: { r: s, c: f } };
}
function Al(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = vs(e);
  return { r: a, c: r, ixfe: n[0], rknum: n[1] };
}
function Sl(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), i = []; e.l < r; ) i.push(vs(e));
  if (e.l !== r) throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - t + 1) throw new Error("MulRK length mismatch");
  return { r: n, c: t, C: s, rkrec: i };
}
function Fl(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), i = []; e.l < r; ) i.push(e.read_shift(2));
  if (e.l !== r) throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - t + 1) throw new Error("MulBlank length mismatch");
  return { r: n, c: t, C: s, ixfe: i };
}
function yl(e, a, r, n) {
  var t = {},
    i = e.read_shift(4),
    s = e.read_shift(4),
    c = e.read_shift(4),
    f = e.read_shift(2);
  return (
    (t.patternType = Ao[c >> 26]),
    n.cellStyles &&
      ((t.alc = i & 7),
      (t.fWrap = (i >> 3) & 1),
      (t.alcV = (i >> 4) & 7),
      (t.fJustLast = (i >> 7) & 1),
      (t.trot = (i >> 8) & 255),
      (t.cIndent = (i >> 16) & 15),
      (t.fShrinkToFit = (i >> 20) & 1),
      (t.iReadOrder = (i >> 22) & 2),
      (t.fAtrNum = (i >> 26) & 1),
      (t.fAtrFnt = (i >> 27) & 1),
      (t.fAtrAlc = (i >> 28) & 1),
      (t.fAtrBdr = (i >> 29) & 1),
      (t.fAtrPat = (i >> 30) & 1),
      (t.fAtrProt = (i >> 31) & 1),
      (t.dgLeft = s & 15),
      (t.dgRight = (s >> 4) & 15),
      (t.dgTop = (s >> 8) & 15),
      (t.dgBottom = (s >> 12) & 15),
      (t.icvLeft = (s >> 16) & 127),
      (t.icvRight = (s >> 23) & 127),
      (t.grbitDiag = (s >> 30) & 3),
      (t.icvTop = c & 127),
      (t.icvBottom = (c >> 7) & 127),
      (t.icvDiag = (c >> 14) & 127),
      (t.dgDiag = (c >> 21) & 15),
      (t.icvFore = f & 127),
      (t.icvBack = (f >> 7) & 127),
      (t.fsxButton = (f >> 14) & 1)),
    t
  );
}
function Cl(e, a, r) {
  var n = {};
  return (n.ifnt = e.read_shift(2)), (n.numFmtId = e.read_shift(2)), (n.flags = e.read_shift(2)), (n.fStyle = (n.flags >> 2) & 1), (a -= 6), (n.data = yl(e, a, n.fStyle, r)), n;
}
function Ol(e) {
  e.l += 4;
  var a = [e.read_shift(2), e.read_shift(2)];
  if ((a[0] !== 0 && a[0]--, a[1] !== 0 && a[1]--, a[0] > 7 || a[1] > 7)) throw new Error("Bad Gutters: " + a.join("|"));
  return a;
}
function Xn(e, a, r) {
  var n = Hr(e);
  (r.biff == 2 || a == 9) && ++e.l;
  var t = $o(e);
  return (n.val = t), (n.t = t === !0 || t === !1 ? "b" : "e"), n;
}
function Rl(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = Hr(e),
    t = rr(e);
  return (n.val = t), n;
}
var $n = Qo;
function Dl(e, a, r) {
  var n = e.l + a,
    t = e.read_shift(2),
    i = e.read_shift(2);
  if (((r.sbcch = i), i == 1025 || i == 14849)) return [i, t];
  if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
  for (var s = pa(e, i), c = []; n > e.l; ) c.push(ut(e));
  return [i, t, s, c];
}
function zn(e, a, r) {
  var n = e.read_shift(2),
    t,
    i = { fBuiltIn: n & 1, fWantAdvise: (n >>> 1) & 1, fWantPict: (n >>> 2) & 1, fOle: (n >>> 3) & 1, fOleLink: (n >>> 4) & 1, cf: (n >>> 5) & 1023, fIcon: (n >>> 15) & 1 };
  return r.sbcch === 14849 && (t = rl(e, a - 2, r)), (i.body = t || e.read_shift(a - 2)), typeof t == "string" && (i.Name = t), i;
}
var Il = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];
function jn(e, a, r) {
  var n = e.l + a,
    t = e.read_shift(2),
    i = e.read_shift(1),
    s = e.read_shift(1),
    c = e.read_shift(r && r.biff == 2 ? 1 : 2),
    f = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), (f = e.read_shift(2)), r.biff == 5 && (e.l += 2), (e.l += 4));
  var o = pa(e, s, r);
  t & 32 && (o = Il[o.charCodeAt(0)]);
  var l = n - e.l;
  r && r.biff == 2 && --l;
  var h = n == e.l || c === 0 || !(l > 0) ? [] : xx(e, l, r, c);
  return { chKey: i, Name: o, itab: f, rgce: h };
}
function ms(e, a, r) {
  if (r.biff < 8) return Nl(e, a, r);
  for (var n = [], t = e.l + a, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; ) n.push(el(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != t) throw new Error("Bad ExternSheet: " + e.l + " != " + t);
  return n;
}
function Nl(e, a, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = lt(e, a, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Pl(e, a, r) {
  if (r.biff < 8) {
    e.l += a;
    return;
  }
  var n = e.read_shift(2),
    t = e.read_shift(2),
    i = pa(e, n, r),
    s = pa(e, t, r);
  return [i, s];
}
function Ll(e, a, r) {
  var n = ps(e);
  e.l++;
  var t = e.read_shift(1);
  return (a -= 8), [dx(e, a, r), t, n];
}
function Kn(e, a, r) {
  var n = al(e);
  switch (r.biff) {
    case 2:
      e.l++, (a -= 7);
      break;
    case 3:
    case 4:
      (e.l += 2), (a -= 8);
      break;
    default:
      (e.l += 6), (a -= 12);
  }
  return [n, ux(e, a, r)];
}
function Ml(e) {
  var a = e.read_shift(4) !== 0,
    r = e.read_shift(4) !== 0,
    n = e.read_shift(4);
  return [a, r, n];
}
function bl(e, a, r) {
  if (!(r.biff < 8)) {
    var n = e.read_shift(2),
      t = e.read_shift(2),
      i = e.read_shift(2),
      s = e.read_shift(2),
      c = ka(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: n, c: t }, c, s, i];
  }
}
function Bl(e, a, r) {
  return bl(e, a, r);
}
function Ul(e, a) {
  for (var r = [], n = e.read_shift(2); n--; ) r.push(Ht(e));
  return r;
}
function Hl(e, a, r) {
  if (r && r.biff < 8) return Wl(e, a, r);
  var n = gs(e),
    t = sl(e, a - 22, n[1]);
  return { cmo: n, ft: t };
}
var Vl = {
  8: function (e, a) {
    var r = e.l + a;
    e.l += 10;
    var n = e.read_shift(2);
    (e.l += 4), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 4);
    var t = e.read_shift(1);
    return (e.l += t), (e.l = r), { fmt: n };
  },
};
function Wl(e, a, r) {
  e.l += 4;
  var n = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(2);
  (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 6), (a -= 36);
  var s = [];
  return s.push((Vl[n] || nr)(e, a, r)), { cmo: [t, n, i], ft: s };
}
function Gl(e, a, r) {
  var n = e.l,
    t = "";
  try {
    e.l += 4;
    var i = (r.lastobj || { cmo: [0, 0] }).cmo[1],
      s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? (e.l += 6) : (s = jo(e, 6, r));
    var c = e.read_shift(2);
    e.read_shift(2), be(e, 2);
    var f = e.read_shift(2);
    e.l += f;
    for (var o = 1; o < e.lens.length - 1; ++o) {
      if (e.l - n != e.lens[o]) throw new Error("TxO: bad continue record");
      var l = e[e.l],
        h = pa(e, e.lens[o + 1] - e.lens[o] - 1);
      if (((t += h), t.length >= (l ? c : 2 * c))) break;
    }
    if (t.length !== c && t.length !== c * 2) throw new Error("cchText: " + c + " != " + t.length);
    return (e.l = n + a), { t };
  } catch {
    return (e.l = n + a), { t };
  }
}
function Xl(e, a) {
  var r = Ht(e);
  e.l += 16;
  var n = qo(e, a - 24);
  return [r, n];
}
function $l(e, a) {
  e.read_shift(2);
  var r = Ht(e),
    n = e.read_shift((a - 10) / 2, "dbcs-cont");
  return (n = n.replace(ur, "")), [r, n];
}
function zl(e) {
  var a = [0, 0],
    r;
  return (r = e.read_shift(2)), (a[0] = bn[r] || r), (r = e.read_shift(2)), (a[1] = bn[r] || r), a;
}
function jl(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(ds(e));
  return r;
}
function Kl(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(ds(e));
  return r;
}
function Yl(e) {
  e.l += 2;
  var a = { cxfs: 0, crc: 0 };
  return (a.cxfs = e.read_shift(2)), (a.crc = e.read_shift(4)), a;
}
function _s(e, a, r) {
  if (!r.cellStyles) return nr(e, a);
  var n = r && r.biff >= 12 ? 4 : 2,
    t = e.read_shift(n),
    i = e.read_shift(n),
    s = e.read_shift(n),
    c = e.read_shift(n),
    f = e.read_shift(2);
  n == 2 && (e.l += 2);
  var o = { s: t, e: i, w: s, ixfe: c, flags: f };
  return (r.biff >= 5 || !r.biff) && (o.level = (f >> 8) & 7), o;
}
function Jl(e, a) {
  var r = {};
  return a < 32 || ((e.l += 16), (r.header = rr(e)), (r.footer = rr(e)), (e.l += 2)), r;
}
function ql(e, a, r) {
  var n = { area: !1 };
  if (r.biff != 5) return (e.l += a), n;
  var t = e.read_shift(1);
  return (e.l += 3), t & 16 && (n.area = !0), n;
}
var Zl = Hr,
  Ql = hs,
  eu = ut;
function ru(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    t = { fmt: a, env: r, len: n, data: e.slice(e.l, e.l + n) };
  return (e.l += n), t;
}
function au(e, a, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var n = Hr(e);
  ++e.l;
  var t = ka(e, a - 7, r);
  return (n.t = "str"), (n.val = t), n;
}
function tu(e) {
  var a = Hr(e);
  ++e.l;
  var r = rr(e);
  return (a.t = "n"), (a.val = r), a;
}
function nu(e) {
  var a = Hr(e);
  ++e.l;
  var r = e.read_shift(2);
  return (a.t = "n"), (a.val = r), a;
}
function iu(e) {
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, "sbcs-cont");
}
function su(e, a) {
  (e.l += 6), (e.l += 2), (e.l += 1), (e.l += 3), (e.l += 1), (e.l += a - 13);
}
function cu(e, a, r) {
  var n = e.l + a,
    t = Hr(e),
    i = e.read_shift(2),
    s = pa(e, i, r);
  return (e.l = n), (t.t = "str"), (t.val = s), t;
}
var fu = [2, 3, 48, 49, 131, 139, 140, 245],
  Yn = (function () {
    var e = {
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
        8: 865,
        9: 437,
        10: 850,
        11: 437,
        13: 437,
        14: 850,
        15: 437,
        16: 850,
        17: 437,
        18: 850,
        19: 932,
        20: 850,
        21: 437,
        22: 850,
        23: 865,
        24: 437,
        25: 437,
        26: 850,
        27: 437,
        28: 863,
        29: 850,
        31: 852,
        34: 852,
        35: 852,
        36: 860,
        37: 850,
        38: 866,
        55: 850,
        64: 852,
        77: 936,
        78: 949,
        79: 950,
        80: 874,
        87: 1252,
        88: 1252,
        89: 1252,
        108: 863,
        134: 737,
        135: 852,
        136: 857,
        204: 1257,
        255: 16969,
      },
      a = F0({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
    function r(c, f) {
      var o = [],
        l = ia(1);
      switch (f.type) {
        case "base64":
          l = Rr(_r(c));
          break;
        case "binary":
          l = Rr(c);
          break;
        case "buffer":
        case "array":
          l = c;
          break;
      }
      je(l, 0);
      var h = l.read_shift(1),
        u = !!(h & 136),
        d = !1,
        v = !1;
      switch (h) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          (d = !0), (u = !0);
          break;
        case 49:
          (d = !0), (u = !0);
          break;
        case 131:
          break;
        case 139:
          break;
        case 140:
          v = !0;
          break;
        case 245:
          break;
        default:
          throw new Error("DBF Unsupported Version: " + h.toString(16));
      }
      var x = 0,
        g = 521;
      h == 2 && (x = l.read_shift(2)), (l.l += 3), h != 2 && (x = l.read_shift(4)), x > 1048576 && (x = 1e6), h != 2 && (g = l.read_shift(2));
      var A = l.read_shift(2),
        C = f.codepage || 1252;
      h != 2 && ((l.l += 16), l.read_shift(1), l[l.l] !== 0 && (C = e[l[l.l]]), (l.l += 1), (l.l += 2)), v && (l.l += 36);
      for (var _ = [], D = {}, b = Math.min(l.length, h == 2 ? 521 : g - 10 - (d ? 264 : 0)), N = v ? 32 : 11; l.l < b && l[l.l] != 13; )
        switch (((D = {}), (D.name = ea.utils.decode(C, l.slice(l.l, l.l + N)).replace(/[\u0000\r\n].*$/g, "")), (l.l += N), (D.type = String.fromCharCode(l.read_shift(1))), h != 2 && !v && (D.offset = l.read_shift(4)), (D.len = l.read_shift(1)), h == 2 && (D.offset = l.read_shift(2)), (D.dec = l.read_shift(1)), D.name.length && _.push(D), h != 2 && (l.l += v ? 13 : 14), D.type)) {
          case "B":
            (!d || D.len != 8) && f.WTF && console.log("Skipping " + D.name + ":" + D.type);
            break;
          case "G":
          case "P":
            f.WTF && console.log("Skipping " + D.name + ":" + D.type);
            break;
          case "+":
          case "0":
          case "@":
          case "C":
          case "D":
          case "F":
          case "I":
          case "L":
          case "M":
          case "N":
          case "O":
          case "T":
          case "Y":
            break;
          default:
            throw new Error("Unknown Field Type: " + D.type);
        }
      if ((l[l.l] !== 13 && (l.l = g - 1), l.read_shift(1) !== 13)) throw new Error("DBF Terminator not found " + l.l + " " + l[l.l]);
      l.l = g;
      var S = 0,
        H = 0;
      for (o[0] = [], H = 0; H != _.length; ++H) o[0][H] = _[H].name;
      for (; x-- > 0; ) {
        if (l[l.l] === 42) {
          l.l += A;
          continue;
        }
        for (++l.l, o[++S] = [], H = 0, H = 0; H != _.length; ++H) {
          var O = l.slice(l.l, l.l + _[H].len);
          (l.l += _[H].len), je(O, 0);
          var X = ea.utils.decode(C, O);
          switch (_[H].type) {
            case "C":
              X.trim().length && (o[S][H] = X.replace(/\s+$/, ""));
              break;
            case "D":
              X.length === 8 ? (o[S][H] = new Date(+X.slice(0, 4), +X.slice(4, 6) - 1, +X.slice(6, 8))) : (o[S][H] = X);
              break;
            case "F":
              o[S][H] = parseFloat(X.trim());
              break;
            case "+":
            case "I":
              o[S][H] = v ? O.read_shift(-4, "i") ^ 2147483648 : O.read_shift(4, "i");
              break;
            case "L":
              switch (X.trim().toUpperCase()) {
                case "Y":
                case "T":
                  o[S][H] = !0;
                  break;
                case "N":
                case "F":
                  o[S][H] = !1;
                  break;
                case "":
                case "?":
                  break;
                default:
                  throw new Error("DBF Unrecognized L:|" + X + "|");
              }
              break;
            case "M":
              if (!u) throw new Error("DBF Unexpected MEMO for type " + h.toString(16));
              o[S][H] = "##MEMO##" + (v ? parseInt(X.trim(), 10) : O.read_shift(4));
              break;
            case "N":
              (X = X.replace(/\u0000/g, "").trim()), X && X != "." && (o[S][H] = +X || 0);
              break;
            case "@":
              o[S][H] = new Date(O.read_shift(-8, "f") - 621356832e5);
              break;
            case "T":
              o[S][H] = new Date((O.read_shift(4) - 2440588) * 864e5 + O.read_shift(4));
              break;
            case "Y":
              o[S][H] = O.read_shift(4, "i") / 1e4 + (O.read_shift(4, "i") / 1e4) * Math.pow(2, 32);
              break;
            case "O":
              o[S][H] = -O.read_shift(-8, "f");
              break;
            case "B":
              if (d && _[H].len == 8) {
                o[S][H] = O.read_shift(8, "f");
                break;
              }
            case "G":
            case "P":
              O.l += _[H].len;
              break;
            case "0":
              if (_[H].name === "_NullFlags") break;
            default:
              throw new Error("DBF Unsupported data type " + _[H].type);
          }
        }
      }
      if (h != 2 && l.l < l.length && l[l.l++] != 26) throw new Error("DBF EOF Marker missing " + (l.l - 1) + " of " + l.length + " " + l[l.l - 1].toString(16));
      return f && f.sheetRows && (o = o.slice(0, f.sheetRows)), (f.DBF = _), o;
    }
    function n(c, f) {
      var o = f || {};
      o.dateNF || (o.dateNF = "yyyymmdd");
      var l = La(r(c, o), o);
      return (
        (l["!cols"] = o.DBF.map(function (h) {
          return { wch: h.len, DBF: h };
        })),
        delete o.DBF,
        l
      );
    }
    function t(c, f) {
      try {
        return ca(n(c, f), f);
      } catch (o) {
        if (f && f.WTF) throw o;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
    function s(c, f) {
      var o = f || {};
      if ((+o.codepage >= 0 && Dr(+o.codepage), o.type == "string")) throw new Error("Cannot write DBF to JS string");
      var l = c0(),
        h = g0(c, { header: 1, raw: !0, cellDates: !0 }),
        u = h[0],
        d = h.slice(1),
        v = c["!cols"] || [],
        x = 0,
        g = 0,
        A = 0,
        C = 1;
      for (x = 0; x < u.length; ++x) {
        if (((v[x] || {}).DBF || {}).name) {
          (u[x] = v[x].DBF.name), ++A;
          continue;
        }
        if (u[x] != null) {
          if ((++A, typeof u[x] == "number" && (u[x] = u[x].toString(10)), typeof u[x] != "string")) throw new Error("DBF Invalid column name " + u[x] + " |" + typeof u[x] + "|");
          if (u.indexOf(u[x]) !== x) {
            for (g = 0; g < 1024; ++g)
              if (u.indexOf(u[x] + "_" + g) == -1) {
                u[x] += "_" + g;
                break;
              }
          }
        }
      }
      var _ = Ie(c["!ref"]),
        D = [],
        b = [],
        N = [];
      for (x = 0; x <= _.e.c - _.s.c; ++x) {
        var S = "",
          H = "",
          O = 0,
          X = [];
        for (g = 0; g < d.length; ++g) d[g][x] != null && X.push(d[g][x]);
        if (X.length == 0 || u[x] == null) {
          D[x] = "?";
          continue;
        }
        for (g = 0; g < X.length; ++g) {
          switch (typeof X[g]) {
            case "number":
              H = "B";
              break;
            case "string":
              H = "C";
              break;
            case "boolean":
              H = "L";
              break;
            case "object":
              H = X[g] instanceof Date ? "D" : "C";
              break;
            default:
              H = "C";
          }
          (O = Math.max(O, String(X[g]).length)), (S = S && S != H ? "C" : H);
        }
        O > 250 && (O = 250), (H = ((v[x] || {}).DBF || {}).type), H == "C" && v[x].DBF.len > O && (O = v[x].DBF.len), S == "B" && H == "N" && ((S = "N"), (N[x] = v[x].DBF.dec), (O = v[x].DBF.len)), (b[x] = S == "C" || H == "N" ? O : i[S] || 0), (C += b[x]), (D[x] = S);
      }
      var V = l.next(32);
      for (V.write_shift(4, 318902576), V.write_shift(4, d.length), V.write_shift(2, 296 + 32 * A), V.write_shift(2, C), x = 0; x < 4; ++x) V.write_shift(4, 0);
      for (V.write_shift(4, 0 | ((+a[gi] || 3) << 8)), x = 0, g = 0; x < u.length; ++x)
        if (u[x] != null) {
          var P = l.next(32),
            K = (u[x].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
          P.write_shift(1, K, "sbcs"), P.write_shift(1, D[x] == "?" ? "C" : D[x], "sbcs"), P.write_shift(4, g), P.write_shift(1, b[x] || i[D[x]] || 0), P.write_shift(1, N[x] || 0), P.write_shift(1, 2), P.write_shift(4, 0), P.write_shift(1, 0), P.write_shift(4, 0), P.write_shift(4, 0), (g += b[x] || i[D[x]] || 0);
        }
      var oe = l.next(264);
      for (oe.write_shift(4, 13), x = 0; x < 65; ++x) oe.write_shift(4, 0);
      for (x = 0; x < d.length; ++x) {
        var re = l.next(C);
        for (re.write_shift(1, 0), g = 0; g < u.length; ++g)
          if (u[g] != null)
            switch (D[g]) {
              case "L":
                re.write_shift(1, d[x][g] == null ? 63 : d[x][g] ? 84 : 70);
                break;
              case "B":
                re.write_shift(8, d[x][g] || 0, "f");
                break;
              case "N":
                var fe = "0";
                for (typeof d[x][g] == "number" && (fe = d[x][g].toFixed(N[g] || 0)), A = 0; A < b[g] - fe.length; ++A) re.write_shift(1, 32);
                re.write_shift(1, fe, "sbcs");
                break;
              case "D":
                d[x][g] ? (re.write_shift(4, ("0000" + d[x][g].getFullYear()).slice(-4), "sbcs"), re.write_shift(2, ("00" + (d[x][g].getMonth() + 1)).slice(-2), "sbcs"), re.write_shift(2, ("00" + d[x][g].getDate()).slice(-2), "sbcs")) : re.write_shift(8, "00000000", "sbcs");
                break;
              case "C":
                var ie = String(d[x][g] != null ? d[x][g] : "").slice(0, b[g]);
                for (re.write_shift(1, ie, "sbcs"), A = 0; A < b[g] - ie.length; ++A) re.write_shift(1, 32);
                break;
            }
      }
      return l.next(1).write_shift(1, 26), l.end();
    }
    return { to_workbook: t, to_sheet: n, from_sheet: s };
  })(),
  ou = (function () {
    var e = {
        AA: "À",
        BA: "Á",
        CA: "Â",
        DA: 195,
        HA: "Ä",
        JA: 197,
        AE: "È",
        BE: "É",
        CE: "Ê",
        HE: "Ë",
        AI: "Ì",
        BI: "Í",
        CI: "Î",
        HI: "Ï",
        AO: "Ò",
        BO: "Ó",
        CO: "Ô",
        DO: 213,
        HO: "Ö",
        AU: "Ù",
        BU: "Ú",
        CU: "Û",
        HU: "Ü",
        Aa: "à",
        Ba: "á",
        Ca: "â",
        Da: 227,
        Ha: "ä",
        Ja: 229,
        Ae: "è",
        Be: "é",
        Ce: "ê",
        He: "ë",
        Ai: "ì",
        Bi: "í",
        Ci: "î",
        Hi: "ï",
        Ao: "ò",
        Bo: "ó",
        Co: "ô",
        Do: 245,
        Ho: "ö",
        Au: "ù",
        Bu: "ú",
        Cu: "û",
        Hu: "ü",
        KC: "Ç",
        Kc: "ç",
        q: "æ",
        z: "œ",
        a: "Æ",
        j: "Œ",
        DN: 209,
        Dn: 241,
        Hy: 255,
        S: 169,
        c: 170,
        R: 174,
        "B ": 180,
        0: 176,
        1: 177,
        2: 178,
        3: 179,
        5: 181,
        6: 182,
        7: 183,
        Q: 185,
        k: 186,
        b: 208,
        i: 216,
        l: 222,
        s: 240,
        y: 248,
        "!": 161,
        '"': 162,
        "#": 163,
        "(": 164,
        "%": 165,
        "'": 167,
        "H ": 168,
        "+": 171,
        ";": 187,
        "<": 188,
        "=": 189,
        ">": 190,
        "?": 191,
        "{": 223,
      },
      a = new RegExp(
        "\x1BN(" +
          Br(e)
            .join("|")
            .replace(/\|\|\|/, "|\\||")
            .replace(/([?()+])/g, "\\$1") +
          "|\\|)",
        "gm"
      ),
      r = function (u, d) {
        var v = e[d];
        return typeof v == "number" ? un(v) : v;
      },
      n = function (u, d, v) {
        var x = ((d.charCodeAt(0) - 32) << 4) | (v.charCodeAt(0) - 48);
        return x == 59 ? u : un(x);
      };
    e["|"] = 254;
    function t(u, d) {
      switch (d.type) {
        case "base64":
          return i(_r(u), d);
        case "binary":
          return i(u, d);
        case "buffer":
          return i(Te && Buffer.isBuffer(u) ? u.toString("binary") : ma(u), d);
        case "array":
          return i(va(u), d);
      }
      throw new Error("Unrecognized type " + d.type);
    }
    function i(u, d) {
      var v = u.split(/[\n\r]+/),
        x = -1,
        g = -1,
        A = 0,
        C = 0,
        _ = [],
        D = [],
        b = null,
        N = {},
        S = [],
        H = [],
        O = [],
        X = 0,
        V;
      for (+d.codepage >= 0 && Dr(+d.codepage); A !== v.length; ++A) {
        X = 0;
        var P = v[A].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(a, r),
          K = P.replace(/;;/g, "\0")
            .split(";")
            .map(function (R) {
              return R.replace(/\u0000/g, ";");
            }),
          oe = K[0],
          re;
        if (P.length > 0)
          switch (oe) {
            case "ID":
              break;
            case "E":
              break;
            case "B":
              break;
            case "O":
              break;
            case "W":
              break;
            case "P":
              K[1].charAt(0) == "P" && D.push(P.slice(3).replace(/;;/g, ";"));
              break;
            case "C":
              var fe = !1,
                ie = !1,
                Ae = !1,
                G = !1,
                ue = -1,
                he = -1;
              for (C = 1; C < K.length; ++C)
                switch (K[C].charAt(0)) {
                  case "A":
                    break;
                  case "X":
                    (g = parseInt(K[C].slice(1)) - 1), (ie = !0);
                    break;
                  case "Y":
                    for (x = parseInt(K[C].slice(1)) - 1, ie || (g = 0), V = _.length; V <= x; ++V) _[V] = [];
                    break;
                  case "K":
                    (re = K[C].slice(1)), re.charAt(0) === '"' ? (re = re.slice(1, re.length - 1)) : re === "TRUE" ? (re = !0) : re === "FALSE" ? (re = !1) : isNaN(Nr(re)) ? isNaN(Da(re).getDate()) || (re = $e(re)) : ((re = Nr(re)), b !== null && Na(b) && (re = Ut(re))), (fe = !0);
                    break;
                  case "E":
                    G = !0;
                    var F = Oa(K[C].slice(1), { r: x, c: g });
                    _[x][g] = [_[x][g], F];
                    break;
                  case "S":
                    (Ae = !0), (_[x][g] = [_[x][g], "S5S"]);
                    break;
                  case "G":
                    break;
                  case "R":
                    ue = parseInt(K[C].slice(1)) - 1;
                    break;
                  case "C":
                    he = parseInt(K[C].slice(1)) - 1;
                    break;
                  default:
                    if (d && d.WTF) throw new Error("SYLK bad record " + P);
                }
              if ((fe && (_[x][g] && _[x][g].length == 2 ? (_[x][g][0] = re) : (_[x][g] = re), (b = null)), Ae)) {
                if (G) throw new Error("SYLK shared formula cannot have own formula");
                var L = ue > -1 && _[ue][he];
                if (!L || !L[1]) throw new Error("SYLK shared formula cannot find base");
                _[x][g][1] = Os(L[1], { r: x - ue, c: g - he });
              }
              break;
            case "F":
              var I = 0;
              for (C = 1; C < K.length; ++C)
                switch (K[C].charAt(0)) {
                  case "X":
                    (g = parseInt(K[C].slice(1)) - 1), ++I;
                    break;
                  case "Y":
                    for (x = parseInt(K[C].slice(1)) - 1, V = _.length; V <= x; ++V) _[V] = [];
                    break;
                  case "M":
                    X = parseInt(K[C].slice(1)) / 20;
                    break;
                  case "F":
                    break;
                  case "G":
                    break;
                  case "P":
                    b = D[parseInt(K[C].slice(1))];
                    break;
                  case "S":
                    break;
                  case "D":
                    break;
                  case "N":
                    break;
                  case "W":
                    for (O = K[C].slice(1).split(" "), V = parseInt(O[0], 10); V <= parseInt(O[1], 10); ++V) (X = parseInt(O[2], 10)), (H[V - 1] = X === 0 ? { hidden: !0 } : { wch: X }), Ia(H[V - 1]);
                    break;
                  case "C":
                    (g = parseInt(K[C].slice(1)) - 1), H[g] || (H[g] = {});
                    break;
                  case "R":
                    (x = parseInt(K[C].slice(1)) - 1), S[x] || (S[x] = {}), X > 0 ? ((S[x].hpt = X), (S[x].hpx = st(X))) : X === 0 && (S[x].hidden = !0);
                    break;
                  default:
                    if (d && d.WTF) throw new Error("SYLK bad record " + P);
                }
              I < 1 && (b = null);
              break;
            default:
              if (d && d.WTF) throw new Error("SYLK bad record " + P);
          }
      }
      return S.length > 0 && (N["!rows"] = S), H.length > 0 && (N["!cols"] = H), d && d.sheetRows && (_ = _.slice(0, d.sheetRows)), [_, N];
    }
    function s(u, d) {
      var v = t(u, d),
        x = v[0],
        g = v[1],
        A = La(x, d);
      return (
        Br(g).forEach(function (C) {
          A[C] = g[C];
        }),
        A
      );
    }
    function c(u, d) {
      return ca(s(u, d), d);
    }
    function f(u, d, v, x) {
      var g = "C;Y" + (v + 1) + ";X" + (x + 1) + ";K";
      switch (u.t) {
        case "n":
          (g += u.v || 0), u.f && !u.F && (g += ";E" + Y1(u.f, { r: v, c: x }));
          break;
        case "b":
          g += u.v ? "TRUE" : "FALSE";
          break;
        case "e":
          g += u.w || u.v;
          break;
        case "d":
          g += '"' + (u.w || u.v) + '"';
          break;
        case "s":
          g += '"' + u.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
          break;
      }
      return g;
    }
    function o(u, d) {
      d.forEach(function (v, x) {
        var g = "F;W" + (x + 1) + " " + (x + 1) + " ";
        v.hidden ? (g += "0") : (typeof v.width == "number" && !v.wpx && (v.wpx = Lt(v.width)), typeof v.wpx == "number" && !v.wch && (v.wch = Mt(v.wpx)), typeof v.wch == "number" && (g += Math.round(v.wch))), g.charAt(g.length - 1) != " " && u.push(g);
      });
    }
    function l(u, d) {
      d.forEach(function (v, x) {
        var g = "F;";
        v.hidden ? (g += "M0;") : v.hpt ? (g += "M" + 20 * v.hpt + ";") : v.hpx && (g += "M" + 20 * Fs(v.hpx) + ";"), g.length > 2 && u.push(g + "R" + (x + 1));
      });
    }
    function h(u, d) {
      var v = ["ID;PWXL;N;E"],
        x = [],
        g = Ie(u["!ref"]),
        A,
        C = Array.isArray(u),
        _ = `\r
`;
      v.push("P;PGeneral"), v.push("F;P0;DG0G8;M255"), u["!cols"] && o(v, u["!cols"]), u["!rows"] && l(v, u["!rows"]), v.push("B;Y" + (g.e.r - g.s.r + 1) + ";X" + (g.e.c - g.s.c + 1) + ";D" + [g.s.c, g.s.r, g.e.c, g.e.r].join(" "));
      for (var D = g.s.r; D <= g.e.r; ++D)
        for (var b = g.s.c; b <= g.e.c; ++b) {
          var N = ve({ r: D, c: b });
          (A = C ? (u[D] || [])[b] : u[N]), !(!A || (A.v == null && (!A.f || A.F))) && x.push(f(A, u, D, b));
        }
      return v.join(_) + _ + x.join(_) + _ + "E" + _;
    }
    return { to_workbook: c, to_sheet: s, from_sheet: h };
  })(),
  lu = (function () {
    function e(i, s) {
      switch (s.type) {
        case "base64":
          return a(_r(i), s);
        case "binary":
          return a(i, s);
        case "buffer":
          return a(Te && Buffer.isBuffer(i) ? i.toString("binary") : ma(i), s);
        case "array":
          return a(va(i), s);
      }
      throw new Error("Unrecognized type " + s.type);
    }
    function a(i, s) {
      for (
        var c = i.split(`
`),
          f = -1,
          o = -1,
          l = 0,
          h = [];
        l !== c.length;
        ++l
      ) {
        if (c[l].trim() === "BOT") {
          (h[++f] = []), (o = 0);
          continue;
        }
        if (!(f < 0)) {
          var u = c[l].trim().split(","),
            d = u[0],
            v = u[1];
          ++l;
          for (var x = c[l] || ""; (x.match(/["]/g) || []).length & 1 && l < c.length - 1; )
            x +=
              `
` + c[++l];
          switch (((x = x.trim()), +d)) {
            case -1:
              if (x === "BOT") {
                (h[++f] = []), (o = 0);
                continue;
              } else if (x !== "EOD") throw new Error("Unrecognized DIF special command " + x);
              break;
            case 0:
              x === "TRUE" ? (h[f][o] = !0) : x === "FALSE" ? (h[f][o] = !1) : isNaN(Nr(v)) ? (isNaN(Da(v).getDate()) ? (h[f][o] = v) : (h[f][o] = $e(v))) : (h[f][o] = Nr(v)), ++o;
              break;
            case 1:
              (x = x.slice(1, x.length - 1)), (x = x.replace(/""/g, '"')), x && x.match(/^=".*"$/) && (x = x.slice(2, -1)), (h[f][o++] = x !== "" ? x : null);
              break;
          }
          if (x === "EOD") break;
        }
      }
      return s && s.sheetRows && (h = h.slice(0, s.sheetRows)), h;
    }
    function r(i, s) {
      return La(e(i, s), s);
    }
    function n(i, s) {
      return ca(r(i, s), s);
    }
    var t = (function () {
      var i = function (f, o, l, h, u) {
          f.push(o), f.push(l + "," + h), f.push('"' + u.replace(/"/g, '""') + '"');
        },
        s = function (f, o, l, h) {
          f.push(o + "," + l), f.push(o == 1 ? '"' + h.replace(/"/g, '""') + '"' : h);
        };
      return function (f) {
        var o = [],
          l = Ie(f["!ref"]),
          h,
          u = Array.isArray(f);
        i(o, "TABLE", 0, 1, "sheetjs"), i(o, "VECTORS", 0, l.e.r - l.s.r + 1, ""), i(o, "TUPLES", 0, l.e.c - l.s.c + 1, ""), i(o, "DATA", 0, 0, "");
        for (var d = l.s.r; d <= l.e.r; ++d) {
          s(o, -1, 0, "BOT");
          for (var v = l.s.c; v <= l.e.c; ++v) {
            var x = ve({ r: d, c: v });
            if (((h = u ? (f[d] || [])[v] : f[x]), !h)) {
              s(o, 1, 0, "");
              continue;
            }
            switch (h.t) {
              case "n":
                var g = h.w;
                !g && h.v != null && (g = h.v), g == null ? (h.f && !h.F ? s(o, 1, 0, "=" + h.f) : s(o, 1, 0, "")) : s(o, 0, g, "V");
                break;
              case "b":
                s(o, 0, h.v ? 1 : 0, h.v ? "TRUE" : "FALSE");
                break;
              case "s":
                s(o, 1, 0, isNaN(h.v) ? h.v : '="' + h.v + '"');
                break;
              case "d":
                h.w || (h.w = Sr(h.z || ge[14], hr($e(h.v)))), s(o, 0, h.w, "V");
                break;
              default:
                s(o, 1, 0, "");
            }
          }
        }
        s(o, -1, 0, "EOD");
        var A = `\r
`,
          C = o.join(A);
        return C;
      };
    })();
    return { to_workbook: n, to_sheet: r, from_sheet: t };
  })(),
  uu = (function () {
    function e(h) {
      return h
        .replace(/\\b/g, "\\")
        .replace(/\\c/g, ":")
        .replace(
          /\\n/g,
          `
`
        );
    }
    function a(h) {
      return h.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
    }
    function r(h, u) {
      for (
        var d = h.split(`
`),
          v = -1,
          x = -1,
          g = 0,
          A = [];
        g !== d.length;
        ++g
      ) {
        var C = d[g].trim().split(":");
        if (C[0] === "cell") {
          var _ = lr(C[1]);
          if (A.length <= _.r) for (v = A.length; v <= _.r; ++v) A[v] || (A[v] = []);
          switch (((v = _.r), (x = _.c), C[2])) {
            case "t":
              A[v][x] = e(C[3]);
              break;
            case "v":
              A[v][x] = +C[3];
              break;
            case "vtf":
              var D = C[C.length - 1];
            case "vtc":
              switch (C[3]) {
                case "nl":
                  A[v][x] = !!+C[4];
                  break;
                default:
                  A[v][x] = +C[4];
                  break;
              }
              C[2] == "vtf" && (A[v][x] = [A[v][x], D]);
          }
        }
      }
      return u && u.sheetRows && (A = A.slice(0, u.sheetRows)), A;
    }
    function n(h, u) {
      return La(r(h, u), u);
    }
    function t(h, u) {
      return ca(n(h, u), u);
    }
    var i = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),
      s =
        ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`) +
        `
`,
      c = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`),
      f = "--SocialCalcSpreadsheetControlSave--";
    function o(h) {
      if (!h || !h["!ref"]) return "";
      for (var u = [], d = [], v, x = "", g = Pa(h["!ref"]), A = Array.isArray(h), C = g.s.r; C <= g.e.r; ++C)
        for (var _ = g.s.c; _ <= g.e.c; ++_)
          if (((x = ve({ r: C, c: _ })), (v = A ? (h[C] || [])[_] : h[x]), !(!v || v.v == null || v.t === "z"))) {
            switch (((d = ["cell", x, "t"]), v.t)) {
              case "s":
              case "str":
                d.push(a(v.v));
                break;
              case "n":
                v.f ? ((d[2] = "vtf"), (d[3] = "n"), (d[4] = v.v), (d[5] = a(v.f))) : ((d[2] = "v"), (d[3] = v.v));
                break;
              case "b":
                (d[2] = "vt" + (v.f ? "f" : "c")), (d[3] = "nl"), (d[4] = v.v ? "1" : "0"), (d[5] = a(v.f || (v.v ? "TRUE" : "FALSE")));
                break;
              case "d":
                var D = hr($e(v.v));
                (d[2] = "vtc"), (d[3] = "nd"), (d[4] = "" + D), (d[5] = v.w || Sr(v.z || ge[14], D));
                break;
              case "e":
                continue;
            }
            u.push(d.join(":"));
          }
      return (
        u.push("sheet:c:" + (g.e.c - g.s.c + 1) + ":r:" + (g.e.r - g.s.r + 1) + ":tvf:1"),
        u.push("valueformat:1:text-wiki"),
        u.join(`
`)
      );
    }
    function l(h) {
      return [i, s, c, s, o(h), f].join(`
`);
    }
    return { to_workbook: t, to_sheet: n, from_sheet: l };
  })(),
  nt = (function () {
    function e(l, h, u, d, v) {
      v.raw ? (h[u][d] = l) : l === "" || (l === "TRUE" ? (h[u][d] = !0) : l === "FALSE" ? (h[u][d] = !1) : isNaN(Nr(l)) ? (isNaN(Da(l).getDate()) ? (h[u][d] = l) : (h[u][d] = $e(l))) : (h[u][d] = Nr(l)));
    }
    function a(l, h) {
      var u = h || {},
        d = [];
      if (!l || l.length === 0) return d;
      for (var v = l.split(/[\r\n]/), x = v.length - 1; x >= 0 && v[x].length === 0; ) --x;
      for (var g = 10, A = 0, C = 0; C <= x; ++C) (A = v[C].indexOf(" ")), A == -1 ? (A = v[C].length) : A++, (g = Math.max(g, A));
      for (C = 0; C <= x; ++C) {
        d[C] = [];
        var _ = 0;
        for (e(v[C].slice(0, g).trim(), d, C, _, u), _ = 1; _ <= (v[C].length - g) / 10 + 1; ++_) e(v[C].slice(g + (_ - 1) * 10, g + _ * 10).trim(), d, C, _, u);
      }
      return u.sheetRows && (d = d.slice(0, u.sheetRows)), d;
    }
    var r = { 44: ",", 9: "	", 59: ";", 124: "|" },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function t(l) {
      for (var h = {}, u = !1, d = 0, v = 0; d < l.length; ++d) (v = l.charCodeAt(d)) == 34 ? (u = !u) : !u && v in r && (h[v] = (h[v] || 0) + 1);
      v = [];
      for (d in h) Object.prototype.hasOwnProperty.call(h, d) && v.push([h[d], d]);
      if (!v.length) {
        h = n;
        for (d in h) Object.prototype.hasOwnProperty.call(h, d) && v.push([h[d], d]);
      }
      return (
        v.sort(function (x, g) {
          return x[0] - g[0] || n[x[1]] - n[g[1]];
        }),
        r[v.pop()[1]] || 44
      );
    }
    function i(l, h) {
      var u = h || {},
        d = "",
        v = u.dense ? [] : {},
        x = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      l.slice(0, 4) == "sep=" ? (l.charCodeAt(5) == 13 && l.charCodeAt(6) == 10 ? ((d = l.charAt(4)), (l = l.slice(7))) : l.charCodeAt(5) == 13 || l.charCodeAt(5) == 10 ? ((d = l.charAt(4)), (l = l.slice(6))) : (d = t(l.slice(0, 1024)))) : u && u.FS ? (d = u.FS) : (d = t(l.slice(0, 1024)));
      var g = 0,
        A = 0,
        C = 0,
        _ = 0,
        D = 0,
        b = d.charCodeAt(0),
        N = !1,
        S = 0,
        H = l.charCodeAt(0);
      l = l.replace(
        /\r\n/gm,
        `
`
      );
      var O = u.dateNF != null ? kf(u.dateNF) : null;
      function X() {
        var V = l.slice(_, D),
          P = {};
        if ((V.charAt(0) == '"' && V.charAt(V.length - 1) == '"' && (V = V.slice(1, -1).replace(/""/g, '"')), V.length === 0)) P.t = "z";
        else if (u.raw) (P.t = "s"), (P.v = V);
        else if (V.trim().length === 0) (P.t = "s"), (P.v = V);
        else if (V.charCodeAt(0) == 61) V.charCodeAt(1) == 34 && V.charCodeAt(V.length - 1) == 34 ? ((P.t = "s"), (P.v = V.slice(2, -1).replace(/""/g, '"'))) : q1(V) ? ((P.t = "n"), (P.f = V.slice(1))) : ((P.t = "s"), (P.v = V));
        else if (V == "TRUE") (P.t = "b"), (P.v = !0);
        else if (V == "FALSE") (P.t = "b"), (P.v = !1);
        else if (!isNaN((C = Nr(V)))) (P.t = "n"), u.cellText !== !1 && (P.w = V), (P.v = C);
        else if (!isNaN(Da(V).getDate()) || (O && V.match(O))) {
          P.z = u.dateNF || ge[14];
          var K = 0;
          O && V.match(O) && ((V = wf(V, u.dateNF, V.match(O) || [])), (K = 1)), u.cellDates ? ((P.t = "d"), (P.v = $e(V, K))) : ((P.t = "n"), (P.v = hr($e(V, K)))), u.cellText !== !1 && (P.w = Sr(P.z, P.v instanceof Date ? hr(P.v) : P.v)), u.cellNF || delete P.z;
        } else (P.t = "s"), (P.v = V);
        if ((P.t == "z" || (u.dense ? (v[g] || (v[g] = []), (v[g][A] = P)) : (v[ve({ c: A, r: g })] = P)), (_ = D + 1), (H = l.charCodeAt(_)), x.e.c < A && (x.e.c = A), x.e.r < g && (x.e.r = g), S == b)) ++A;
        else if (((A = 0), ++g, u.sheetRows && u.sheetRows <= g)) return !0;
      }
      e: for (; D < l.length; ++D)
        switch ((S = l.charCodeAt(D))) {
          case 34:
            H === 34 && (N = !N);
            break;
          case b:
          case 10:
          case 13:
            if (!N && X()) break e;
            break;
        }
      return D - _ > 0 && X(), (v["!ref"] = ke(x)), v;
    }
    function s(l, h) {
      return !(h && h.PRN) || h.FS || l.slice(0, 4) == "sep=" || l.indexOf("	") >= 0 || l.indexOf(",") >= 0 || l.indexOf(";") >= 0 ? i(l, h) : La(a(l, h), h);
    }
    function c(l, h) {
      var u = "",
        d = h.type == "string" ? [0, 0, 0, 0] : $0(l, h);
      switch (h.type) {
        case "base64":
          u = _r(l);
          break;
        case "binary":
          u = l;
          break;
        case "buffer":
          h.codepage == 65001 ? (u = l.toString("utf8")) : h.codepage && typeof ea < "u" ? (u = ea.utils.decode(h.codepage, l)) : (u = Te && Buffer.isBuffer(l) ? l.toString("binary") : ma(l));
          break;
        case "array":
          u = va(l);
          break;
        case "string":
          u = l;
          break;
        default:
          throw new Error("Unrecognized type " + h.type);
      }
      return d[0] == 239 && d[1] == 187 && d[2] == 191 ? (u = Se(u.slice(3))) : h.type != "string" && h.type != "buffer" && h.codepage == 65001 ? (u = Se(u)) : h.type == "binary" && typeof ea < "u" && h.codepage && (u = ea.utils.decode(h.codepage, ea.utils.encode(28591, u))), u.slice(0, 19) == "socialcalc:version:" ? uu.to_sheet(h.type == "string" ? u : Se(u), h) : s(u, h);
    }
    function f(l, h) {
      return ca(c(l, h), h);
    }
    function o(l) {
      for (var h = [], u = Ie(l["!ref"]), d, v = Array.isArray(l), x = u.s.r; x <= u.e.r; ++x) {
        for (var g = [], A = u.s.c; A <= u.e.c; ++A) {
          var C = ve({ r: x, c: A });
          if (((d = v ? (l[x] || [])[A] : l[C]), !d || d.v == null)) {
            g.push("          ");
            continue;
          }
          for (var _ = (d.w || (Kr(d), d.w) || "").slice(0, 10); _.length < 10; ) _ += " ";
          g.push(_ + (A === 0 ? " " : ""));
        }
        h.push(g.join(""));
      }
      return h.join(`
`);
    }
    return { to_workbook: f, to_sheet: c, from_sheet: o };
  })();
function hu(e, a) {
  var r = a || {},
    n = !!r.WTF;
  r.WTF = !0;
  try {
    var t = ou.to_workbook(e, r);
    return (r.WTF = n), t;
  } catch (i) {
    if (((r.WTF = n), !i.message.match(/SYLK bad record ID/) && n)) throw i;
    return nt.to_workbook(e, a);
  }
}
var qa = (function () {
  function e(F, L, I) {
    if (F) {
      je(F, F.l || 0);
      for (var R = I.Enum || ue; F.l < F.length; ) {
        var j = F.read_shift(2),
          ee = R[j] || R[65535],
          se = F.read_shift(2),
          Q = F.l + se,
          Y = ee.f && ee.f(F, se, I);
        if (((F.l = Q), L(Y, ee, j))) return;
      }
    }
  }
  function a(F, L) {
    switch (L.type) {
      case "base64":
        return r(Rr(_r(F)), L);
      case "binary":
        return r(Rr(F), L);
      case "buffer":
      case "array":
        return r(F, L);
    }
    throw "Unsupported type " + L.type;
  }
  function r(F, L) {
    if (!F) return F;
    var I = L || {},
      R = I.dense ? [] : {},
      j = "Sheet1",
      ee = "",
      se = 0,
      Q = {},
      Y = [],
      _e = [],
      y = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
      ye = I.sheetRows || 0;
    if (F[2] == 0 && (F[3] == 8 || F[3] == 9) && F.length >= 16 && F[14] == 5 && F[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (F[2] == 2)
      (I.Enum = ue),
        e(
          F,
          function (Z, Fe, Je) {
            switch (Je) {
              case 0:
                (I.vers = Z), Z >= 4096 && (I.qpro = !0);
                break;
              case 6:
                y = Z;
                break;
              case 204:
                Z && (ee = Z);
                break;
              case 222:
                ee = Z;
                break;
              case 15:
              case 51:
                I.qpro || (Z[1].v = Z[1].v.slice(1));
              case 13:
              case 14:
              case 16:
                Je == 14 && (Z[2] & 112) == 112 && (Z[2] & 15) > 1 && (Z[2] & 15) < 15 && ((Z[1].z = I.dateNF || ge[14]), I.cellDates && ((Z[1].t = "d"), (Z[1].v = Ut(Z[1].v)))), I.qpro && Z[3] > se && ((R["!ref"] = ke(y)), (Q[j] = R), Y.push(j), (R = I.dense ? [] : {}), (y = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), (se = Z[3]), (j = ee || "Sheet" + (se + 1)), (ee = ""));
                var xr = I.dense ? (R[Z[0].r] || [])[Z[0].c] : R[ve(Z[0])];
                if (xr) {
                  (xr.t = Z[1].t), (xr.v = Z[1].v), Z[1].z != null && (xr.z = Z[1].z), Z[1].f != null && (xr.f = Z[1].f);
                  break;
                }
                I.dense ? (R[Z[0].r] || (R[Z[0].r] = []), (R[Z[0].r][Z[0].c] = Z[1])) : (R[ve(Z[0])] = Z[1]);
                break;
            }
          },
          I
        );
    else if (F[2] == 26 || F[2] == 14)
      (I.Enum = he),
        F[2] == 14 && ((I.qpro = !0), (F.l = 0)),
        e(
          F,
          function (Z, Fe, Je) {
            switch (Je) {
              case 204:
                j = Z;
                break;
              case 22:
                Z[1].v = Z[1].v.slice(1);
              case 23:
              case 24:
              case 25:
              case 37:
              case 39:
              case 40:
                if ((Z[3] > se && ((R["!ref"] = ke(y)), (Q[j] = R), Y.push(j), (R = I.dense ? [] : {}), (y = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), (se = Z[3]), (j = "Sheet" + (se + 1))), ye > 0 && Z[0].r >= ye)) break;
                I.dense ? (R[Z[0].r] || (R[Z[0].r] = []), (R[Z[0].r][Z[0].c] = Z[1])) : (R[ve(Z[0])] = Z[1]), y.e.c < Z[0].c && (y.e.c = Z[0].c), y.e.r < Z[0].r && (y.e.r = Z[0].r);
                break;
              case 27:
                Z[14e3] && (_e[Z[14e3][0]] = Z[14e3][1]);
                break;
              case 1537:
                (_e[Z[0]] = Z[1]), Z[0] == se && (j = Z[1]);
                break;
            }
          },
          I
        );
    else throw new Error("Unrecognized LOTUS BOF " + F[2]);
    if (((R["!ref"] = ke(y)), (Q[ee || j] = R), Y.push(ee || j), !_e.length)) return { SheetNames: Y, Sheets: Q };
    for (var te = {}, de = [], le = 0; le < _e.length; ++le) Q[Y[le]] ? (de.push(_e[le] || Y[le]), (te[_e[le]] = Q[_e[le]] || Q[Y[le]])) : (de.push(_e[le]), (te[_e[le]] = { "!ref": "A1" }));
    return { SheetNames: de, Sheets: te };
  }
  function n(F, L) {
    var I = L || {};
    if ((+I.codepage >= 0 && Dr(+I.codepage), I.type == "string")) throw new Error("Cannot write WK1 to JS string");
    var R = c0(),
      j = Ie(F["!ref"]),
      ee = Array.isArray(F),
      se = [];
    Or(R, 0, i(1030)), Or(R, 6, f(j));
    for (var Q = Math.min(j.e.r, 8191), Y = j.s.r; Y <= Q; ++Y)
      for (var _e = Ye(Y), y = j.s.c; y <= j.e.c; ++y) {
        Y === j.s.r && (se[y] = Ve(y));
        var ye = se[y] + _e,
          te = ee ? (F[Y] || [])[y] : F[ye];
        if (!(!te || te.t == "z"))
          if (te.t == "n") (te.v | 0) == te.v && te.v >= -32768 && te.v <= 32767 ? Or(R, 13, d(Y, y, te.v)) : Or(R, 14, x(Y, y, te.v));
          else {
            var de = Kr(te);
            Or(R, 15, h(Y, y, de.slice(0, 239)));
          }
      }
    return Or(R, 1), R.end();
  }
  function t(F, L) {
    var I = L || {};
    if ((+I.codepage >= 0 && Dr(+I.codepage), I.type == "string")) throw new Error("Cannot write WK3 to JS string");
    var R = c0();
    Or(R, 0, s(F));
    for (var j = 0, ee = 0; j < F.SheetNames.length; ++j) (F.Sheets[F.SheetNames[j]] || {})["!ref"] && Or(R, 27, G(F.SheetNames[j], ee++));
    var se = 0;
    for (j = 0; j < F.SheetNames.length; ++j) {
      var Q = F.Sheets[F.SheetNames[j]];
      if (!(!Q || !Q["!ref"])) {
        for (var Y = Ie(Q["!ref"]), _e = Array.isArray(Q), y = [], ye = Math.min(Y.e.r, 8191), te = Y.s.r; te <= ye; ++te)
          for (var de = Ye(te), le = Y.s.c; le <= Y.e.c; ++le) {
            te === Y.s.r && (y[le] = Ve(le));
            var Z = y[le] + de,
              Fe = _e ? (Q[te] || [])[le] : Q[Z];
            if (!(!Fe || Fe.t == "z"))
              if (Fe.t == "n") Or(R, 23, X(te, le, se, Fe.v));
              else {
                var Je = Kr(Fe);
                Or(R, 22, S(te, le, se, Je.slice(0, 239)));
              }
          }
        ++se;
      }
    }
    return Or(R, 1), R.end();
  }
  function i(F) {
    var L = He(2);
    return L.write_shift(2, F), L;
  }
  function s(F) {
    var L = He(26);
    L.write_shift(2, 4096), L.write_shift(2, 4), L.write_shift(4, 0);
    for (var I = 0, R = 0, j = 0, ee = 0; ee < F.SheetNames.length; ++ee) {
      var se = F.SheetNames[ee],
        Q = F.Sheets[se];
      if (!(!Q || !Q["!ref"])) {
        ++j;
        var Y = Pa(Q["!ref"]);
        I < Y.e.r && (I = Y.e.r), R < Y.e.c && (R = Y.e.c);
      }
    }
    return I > 8191 && (I = 8191), L.write_shift(2, I), L.write_shift(1, j), L.write_shift(1, R), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(1, 1), L.write_shift(1, 2), L.write_shift(4, 0), L.write_shift(4, 0), L;
  }
  function c(F, L, I) {
    var R = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return L == 8 && I.qpro ? ((R.s.c = F.read_shift(1)), F.l++, (R.s.r = F.read_shift(2)), (R.e.c = F.read_shift(1)), F.l++, (R.e.r = F.read_shift(2)), R) : ((R.s.c = F.read_shift(2)), (R.s.r = F.read_shift(2)), L == 12 && I.qpro && (F.l += 2), (R.e.c = F.read_shift(2)), (R.e.r = F.read_shift(2)), L == 12 && I.qpro && (F.l += 2), R.s.c == 65535 && (R.s.c = R.e.c = R.s.r = R.e.r = 0), R);
  }
  function f(F) {
    var L = He(8);
    return L.write_shift(2, F.s.c), L.write_shift(2, F.s.r), L.write_shift(2, F.e.c), L.write_shift(2, F.e.r), L;
  }
  function o(F, L, I) {
    var R = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return I.qpro && I.vers != 20768 ? ((R[0].c = F.read_shift(1)), (R[3] = F.read_shift(1)), (R[0].r = F.read_shift(2)), (F.l += 2)) : ((R[2] = F.read_shift(1)), (R[0].c = F.read_shift(2)), (R[0].r = F.read_shift(2))), R;
  }
  function l(F, L, I) {
    var R = F.l + L,
      j = o(F, L, I);
    if (((j[1].t = "s"), I.vers == 20768)) {
      F.l++;
      var ee = F.read_shift(1);
      return (j[1].v = F.read_shift(ee, "utf8")), j;
    }
    return I.qpro && F.l++, (j[1].v = F.read_shift(R - F.l, "cstr")), j;
  }
  function h(F, L, I) {
    var R = He(7 + I.length);
    R.write_shift(1, 255), R.write_shift(2, L), R.write_shift(2, F), R.write_shift(1, 39);
    for (var j = 0; j < R.length; ++j) {
      var ee = I.charCodeAt(j);
      R.write_shift(1, ee >= 128 ? 95 : ee);
    }
    return R.write_shift(1, 0), R;
  }
  function u(F, L, I) {
    var R = o(F, L, I);
    return (R[1].v = F.read_shift(2, "i")), R;
  }
  function d(F, L, I) {
    var R = He(7);
    return R.write_shift(1, 255), R.write_shift(2, L), R.write_shift(2, F), R.write_shift(2, I, "i"), R;
  }
  function v(F, L, I) {
    var R = o(F, L, I);
    return (R[1].v = F.read_shift(8, "f")), R;
  }
  function x(F, L, I) {
    var R = He(13);
    return R.write_shift(1, 255), R.write_shift(2, L), R.write_shift(2, F), R.write_shift(8, I, "f"), R;
  }
  function g(F, L, I) {
    var R = F.l + L,
      j = o(F, L, I);
    if (((j[1].v = F.read_shift(8, "f")), I.qpro)) F.l = R;
    else {
      var ee = F.read_shift(2);
      D(F.slice(F.l, F.l + ee), j), (F.l += ee);
    }
    return j;
  }
  function A(F, L, I) {
    var R = L & 32768;
    return (L &= -32769), (L = (R ? F : 0) + (L >= 8192 ? L - 16384 : L)), (R ? "" : "$") + (I ? Ve(L) : Ye(L));
  }
  var C = { 51: ["FALSE", 0], 52: ["TRUE", 0], 70: ["LEN", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 111: ["T", 1] },
    _ = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function D(F, L) {
    je(F, 0);
    for (var I = [], R = 0, j = "", ee = "", se = "", Q = ""; F.l < F.length; ) {
      var Y = F[F.l++];
      switch (Y) {
        case 0:
          I.push(F.read_shift(8, "f"));
          break;
        case 1:
          (ee = A(L[0].c, F.read_shift(2), !0)), (j = A(L[0].r, F.read_shift(2), !1)), I.push(ee + j);
          break;
        case 2:
          {
            var _e = A(L[0].c, F.read_shift(2), !0),
              y = A(L[0].r, F.read_shift(2), !1);
            (ee = A(L[0].c, F.read_shift(2), !0)), (j = A(L[0].r, F.read_shift(2), !1)), I.push(_e + y + ":" + ee + j);
          }
          break;
        case 3:
          if (F.l < F.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          I.push("(" + I.pop() + ")");
          break;
        case 5:
          I.push(F.read_shift(2));
          break;
        case 6:
          {
            for (var ye = ""; (Y = F[F.l++]); ) ye += String.fromCharCode(Y);
            I.push('"' + ye.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          I.push("-" + I.pop());
          break;
        case 23:
          I.push("+" + I.pop());
          break;
        case 22:
          I.push("NOT(" + I.pop() + ")");
          break;
        case 20:
        case 21:
          (Q = I.pop()), (se = I.pop()), I.push(["AND", "OR"][Y - 20] + "(" + se + "," + Q + ")");
          break;
        default:
          if (Y < 32 && _[Y]) (Q = I.pop()), (se = I.pop()), I.push(se + _[Y] + Q);
          else if (C[Y]) {
            if (((R = C[Y][1]), R == 69 && (R = F[F.l++]), R > I.length)) {
              console.error("WK1 bad formula parse 0x" + Y.toString(16) + ":|" + I.join("|") + "|");
              return;
            }
            var te = I.slice(-R);
            (I.length -= R), I.push(C[Y][0] + "(" + te.join(",") + ")");
          } else return Y <= 7 ? console.error("WK1 invalid opcode " + Y.toString(16)) : Y <= 24 ? console.error("WK1 unsupported op " + Y.toString(16)) : Y <= 30 ? console.error("WK1 invalid opcode " + Y.toString(16)) : Y <= 115 ? console.error("WK1 unsupported function opcode " + Y.toString(16)) : console.error("WK1 unrecognized opcode " + Y.toString(16));
      }
    }
    I.length == 1 ? (L[1].f = "" + I[0]) : console.error("WK1 bad formula parse |" + I.join("|") + "|");
  }
  function b(F) {
    var L = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return (L[0].r = F.read_shift(2)), (L[3] = F[F.l++]), (L[0].c = F[F.l++]), L;
  }
  function N(F, L) {
    var I = b(F);
    return (I[1].t = "s"), (I[1].v = F.read_shift(L - 4, "cstr")), I;
  }
  function S(F, L, I, R) {
    var j = He(6 + R.length);
    j.write_shift(2, F), j.write_shift(1, I), j.write_shift(1, L), j.write_shift(1, 39);
    for (var ee = 0; ee < R.length; ++ee) {
      var se = R.charCodeAt(ee);
      j.write_shift(1, se >= 128 ? 95 : se);
    }
    return j.write_shift(1, 0), j;
  }
  function H(F, L) {
    var I = b(F);
    I[1].v = F.read_shift(2);
    var R = I[1].v >> 1;
    if (I[1].v & 1)
      switch (R & 7) {
        case 0:
          R = (R >> 3) * 5e3;
          break;
        case 1:
          R = (R >> 3) * 500;
          break;
        case 2:
          R = (R >> 3) / 20;
          break;
        case 3:
          R = (R >> 3) / 200;
          break;
        case 4:
          R = (R >> 3) / 2e3;
          break;
        case 5:
          R = (R >> 3) / 2e4;
          break;
        case 6:
          R = (R >> 3) / 16;
          break;
        case 7:
          R = (R >> 3) / 64;
          break;
      }
    return (I[1].v = R), I;
  }
  function O(F, L) {
    var I = b(F),
      R = F.read_shift(4),
      j = F.read_shift(4),
      ee = F.read_shift(2);
    if (ee == 65535) return R === 0 && j === 3221225472 ? ((I[1].t = "e"), (I[1].v = 15)) : R === 0 && j === 3489660928 ? ((I[1].t = "e"), (I[1].v = 42)) : (I[1].v = 0), I;
    var se = ee & 32768;
    return (ee = (ee & 32767) - 16446), (I[1].v = (1 - se * 2) * (j * Math.pow(2, ee + 32) + R * Math.pow(2, ee))), I;
  }
  function X(F, L, I, R) {
    var j = He(14);
    if ((j.write_shift(2, F), j.write_shift(1, I), j.write_shift(1, L), R == 0)) return j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j;
    var ee = 0,
      se = 0,
      Q = 0,
      Y = 0;
    return R < 0 && ((ee = 1), (R = -R)), (se = Math.log2(R) | 0), (R /= Math.pow(2, se - 31)), (Y = R >>> 0), Y & 2147483648 || ((R /= 2), ++se, (Y = R >>> 0)), (R -= Y), (Y |= 2147483648), (Y >>>= 0), (R *= Math.pow(2, 32)), (Q = R >>> 0), j.write_shift(4, Q), j.write_shift(4, Y), (se += 16383 + (ee ? 32768 : 0)), j.write_shift(2, se), j;
  }
  function V(F, L) {
    var I = O(F);
    return (F.l += L - 14), I;
  }
  function P(F, L) {
    var I = b(F),
      R = F.read_shift(4);
    return (I[1].v = R >> 6), I;
  }
  function K(F, L) {
    var I = b(F),
      R = F.read_shift(8, "f");
    return (I[1].v = R), I;
  }
  function oe(F, L) {
    var I = K(F);
    return (F.l += L - 10), I;
  }
  function re(F, L) {
    return F[F.l + L - 1] == 0 ? F.read_shift(L, "cstr") : "";
  }
  function fe(F, L) {
    var I = F[F.l++];
    I > L - 1 && (I = L - 1);
    for (var R = ""; R.length < I; ) R += String.fromCharCode(F[F.l++]);
    return R;
  }
  function ie(F, L, I) {
    if (!(!I.qpro || L < 21)) {
      var R = F.read_shift(1);
      (F.l += 17), (F.l += 1), (F.l += 2);
      var j = F.read_shift(L - 21, "cstr");
      return [R, j];
    }
  }
  function Ae(F, L) {
    for (var I = {}, R = F.l + L; F.l < R; ) {
      var j = F.read_shift(2);
      if (j == 14e3) {
        for (I[j] = [0, ""], I[j][0] = F.read_shift(2); F[F.l]; ) (I[j][1] += String.fromCharCode(F[F.l])), F.l++;
        F.l++;
      }
    }
    return I;
  }
  function G(F, L) {
    var I = He(5 + F.length);
    I.write_shift(2, 14e3), I.write_shift(2, L);
    for (var R = 0; R < F.length; ++R) {
      var j = F.charCodeAt(R);
      I[I.l++] = j > 127 ? 95 : j;
    }
    return (I[I.l++] = 0), I;
  }
  var ue = {
      0: { n: "BOF", f: be },
      1: { n: "EOF" },
      2: { n: "CALCMODE" },
      3: { n: "CALCORDER" },
      4: { n: "SPLIT" },
      5: { n: "SYNC" },
      6: { n: "RANGE", f: c },
      7: { n: "WINDOW1" },
      8: { n: "COLW1" },
      9: { n: "WINTWO" },
      10: { n: "COLW2" },
      11: { n: "NAME" },
      12: { n: "BLANK" },
      13: { n: "INTEGER", f: u },
      14: { n: "NUMBER", f: v },
      15: { n: "LABEL", f: l },
      16: { n: "FORMULA", f: g },
      24: { n: "TABLE" },
      25: { n: "ORANGE" },
      26: { n: "PRANGE" },
      27: { n: "SRANGE" },
      28: { n: "FRANGE" },
      29: { n: "KRANGE1" },
      32: { n: "HRANGE" },
      35: { n: "KRANGE2" },
      36: { n: "PROTEC" },
      37: { n: "FOOTER" },
      38: { n: "HEADER" },
      39: { n: "SETUP" },
      40: { n: "MARGINS" },
      41: { n: "LABELFMT" },
      42: { n: "TITLES" },
      43: { n: "SHEETJS" },
      45: { n: "GRAPH" },
      46: { n: "NGRAPH" },
      47: { n: "CALCCOUNT" },
      48: { n: "UNFORMATTED" },
      49: { n: "CURSORW12" },
      50: { n: "WINDOW" },
      51: { n: "STRING", f: l },
      55: { n: "PASSWORD" },
      56: { n: "LOCKED" },
      60: { n: "QUERY" },
      61: { n: "QUERYNAME" },
      62: { n: "PRINT" },
      63: { n: "PRINTNAME" },
      64: { n: "GRAPH2" },
      65: { n: "GRAPHNAME" },
      66: { n: "ZOOM" },
      67: { n: "SYMSPLIT" },
      68: { n: "NSROWS" },
      69: { n: "NSCOLS" },
      70: { n: "RULER" },
      71: { n: "NNAME" },
      72: { n: "ACOMM" },
      73: { n: "AMACRO" },
      74: { n: "PARSE" },
      102: { n: "PRANGES??" },
      103: { n: "RRANGES??" },
      104: { n: "FNAME??" },
      105: { n: "MRANGES??" },
      204: { n: "SHEETNAMECS", f: re },
      222: { n: "SHEETNAMELP", f: fe },
      65535: { n: "" },
    },
    he = {
      0: { n: "BOF" },
      1: { n: "EOF" },
      2: { n: "PASSWORD" },
      3: { n: "CALCSET" },
      4: { n: "WINDOWSET" },
      5: { n: "SHEETCELLPTR" },
      6: { n: "SHEETLAYOUT" },
      7: { n: "COLUMNWIDTH" },
      8: { n: "HIDDENCOLUMN" },
      9: { n: "USERRANGE" },
      10: { n: "SYSTEMRANGE" },
      11: { n: "ZEROFORCE" },
      12: { n: "SORTKEYDIR" },
      13: { n: "FILESEAL" },
      14: { n: "DATAFILLNUMS" },
      15: { n: "PRINTMAIN" },
      16: { n: "PRINTSTRING" },
      17: { n: "GRAPHMAIN" },
      18: { n: "GRAPHSTRING" },
      19: { n: "??" },
      20: { n: "ERRCELL" },
      21: { n: "NACELL" },
      22: { n: "LABEL16", f: N },
      23: { n: "NUMBER17", f: O },
      24: { n: "NUMBER18", f: H },
      25: { n: "FORMULA19", f: V },
      26: { n: "FORMULA1A" },
      27: { n: "XFORMAT", f: Ae },
      28: { n: "DTLABELMISC" },
      29: { n: "DTLABELCELL" },
      30: { n: "GRAPHWINDOW" },
      31: { n: "CPA" },
      32: { n: "LPLAUTO" },
      33: { n: "QUERY" },
      34: { n: "HIDDENSHEET" },
      35: { n: "??" },
      37: { n: "NUMBER25", f: P },
      38: { n: "??" },
      39: { n: "NUMBER27", f: K },
      40: { n: "FORMULA28", f: oe },
      142: { n: "??" },
      147: { n: "??" },
      150: { n: "??" },
      151: { n: "??" },
      152: { n: "??" },
      153: { n: "??" },
      154: { n: "??" },
      155: { n: "??" },
      156: { n: "??" },
      163: { n: "??" },
      174: { n: "??" },
      175: { n: "??" },
      176: { n: "??" },
      177: { n: "??" },
      184: { n: "??" },
      185: { n: "??" },
      186: { n: "??" },
      187: { n: "??" },
      188: { n: "??" },
      195: { n: "??" },
      201: { n: "??" },
      204: { n: "SHEETNAMECS", f: re },
      205: { n: "??" },
      206: { n: "??" },
      207: { n: "??" },
      208: { n: "??" },
      256: { n: "??" },
      259: { n: "??" },
      260: { n: "??" },
      261: { n: "??" },
      262: { n: "??" },
      263: { n: "??" },
      265: { n: "??" },
      266: { n: "??" },
      267: { n: "??" },
      268: { n: "??" },
      270: { n: "??" },
      271: { n: "??" },
      384: { n: "??" },
      389: { n: "??" },
      390: { n: "??" },
      393: { n: "??" },
      396: { n: "??" },
      512: { n: "??" },
      514: { n: "??" },
      513: { n: "??" },
      516: { n: "??" },
      517: { n: "??" },
      640: { n: "??" },
      641: { n: "??" },
      642: { n: "??" },
      643: { n: "??" },
      644: { n: "??" },
      645: { n: "??" },
      646: { n: "??" },
      647: { n: "??" },
      648: { n: "??" },
      658: { n: "??" },
      659: { n: "??" },
      660: { n: "??" },
      661: { n: "??" },
      662: { n: "??" },
      665: { n: "??" },
      666: { n: "??" },
      768: { n: "??" },
      772: { n: "??" },
      1537: { n: "SHEETINFOQP", f: ie },
      1600: { n: "??" },
      1602: { n: "??" },
      1793: { n: "??" },
      1794: { n: "??" },
      1795: { n: "??" },
      1796: { n: "??" },
      1920: { n: "??" },
      2048: { n: "??" },
      2049: { n: "??" },
      2052: { n: "??" },
      2688: { n: "??" },
      10998: { n: "??" },
      12849: { n: "??" },
      28233: { n: "??" },
      28484: { n: "??" },
      65535: { n: "" },
    };
  return { sheet_to_wk1: n, book_to_wk3: t, to_workbook: a };
})();
function xu(e) {
  var a = {},
    r = e.match(ir),
    n = 0,
    t = !1;
  if (r)
    for (; n != r.length; ++n) {
      var i = xe(r[n]);
      switch (i[0].replace(/\w*:/g, "")) {
        case "<condense":
          break;
        case "<extend":
          break;
        case "<shadow":
          if (!i.val) break;
        case "<shadow>":
        case "<shadow/>":
          a.shadow = 1;
          break;
        case "</shadow>":
          break;
        case "<charset":
          if (i.val == "1") break;
          a.cp = E0[parseInt(i.val, 10)];
          break;
        case "<outline":
          if (!i.val) break;
        case "<outline>":
        case "<outline/>":
          a.outline = 1;
          break;
        case "</outline>":
          break;
        case "<rFont":
          a.name = i.val;
          break;
        case "<sz":
          a.sz = i.val;
          break;
        case "<strike":
          if (!i.val) break;
        case "<strike>":
        case "<strike/>":
          a.strike = 1;
          break;
        case "</strike>":
          break;
        case "<u":
          if (!i.val) break;
          switch (i.val) {
            case "double":
              a.uval = "double";
              break;
            case "singleAccounting":
              a.uval = "single-accounting";
              break;
            case "doubleAccounting":
              a.uval = "double-accounting";
              break;
          }
        case "<u>":
        case "<u/>":
          a.u = 1;
          break;
        case "</u>":
          break;
        case "<b":
          if (i.val == "0") break;
        case "<b>":
        case "<b/>":
          a.b = 1;
          break;
        case "</b>":
          break;
        case "<i":
          if (i.val == "0") break;
        case "<i>":
        case "<i/>":
          a.i = 1;
          break;
        case "</i>":
          break;
        case "<color":
          i.rgb && (a.color = i.rgb.slice(2, 8));
          break;
        case "<color>":
        case "<color/>":
        case "</color>":
          break;
        case "<family":
          a.family = i.val;
          break;
        case "<family>":
        case "<family/>":
        case "</family>":
          break;
        case "<vertAlign":
          a.valign = i.val;
          break;
        case "<vertAlign>":
        case "<vertAlign/>":
        case "</vertAlign>":
          break;
        case "<scheme":
          break;
        case "<scheme>":
        case "<scheme/>":
        case "</scheme>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
          break;
        case "<ext":
          t = !0;
          break;
        case "</ext>":
          t = !1;
          break;
        default:
          if (i[0].charCodeAt(1) !== 47 && !t) throw new Error("Unrecognized rich format " + i[0]);
      }
    }
  return a;
}
var du = (function () {
    var e = at("t"),
      a = at("rPr");
    function r(i) {
      var s = i.match(e);
      if (!s) return { t: "s", v: "" };
      var c = { t: "s", v: we(s[1]) },
        f = i.match(a);
      return f && (c.s = xu(f[1])), c;
    }
    var n = /<(?:\w+:)?r>/g,
      t = /<\/(?:\w+:)?r>/;
    return function (s) {
      return s
        .replace(n, "")
        .split(t)
        .map(r)
        .filter(function (c) {
          return c.v;
        });
    };
  })(),
  vu = (function () {
    var a = /(\r\n|\n)/g;
    function r(t, i, s) {
      var c = [];
      t.u && c.push("text-decoration: underline;"), t.uval && c.push("text-underline-style:" + t.uval + ";"), t.sz && c.push("font-size:" + t.sz + "pt;"), t.outline && c.push("text-effect: outline;"), t.shadow && c.push("text-shadow: auto;"), i.push('<span style="' + c.join("") + '">'), t.b && (i.push("<b>"), s.push("</b>")), t.i && (i.push("<i>"), s.push("</i>")), t.strike && (i.push("<s>"), s.push("</s>"));
      var f = t.valign || "";
      return f == "superscript" || f == "super" ? (f = "sup") : f == "subscript" && (f = "sub"), f != "" && (i.push("<" + f + ">"), s.push("</" + f + ">")), s.push("</span>"), t;
    }
    function n(t) {
      var i = [[], t.v, []];
      return t.v ? (t.s && r(t.s, i[0], i[2]), i[0].join("") + i[1].replace(a, "<br/>") + i[2].join("")) : "";
    }
    return function (i) {
      return i.map(n).join("");
    };
  })(),
  pu = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
  gu = /<(?:\w+:)?r>/,
  mu = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function B0(e, a) {
  var r = a ? a.cellHTML : !0,
    n = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? ((n.t = we(Se(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""))), (n.r = Se(e)), r && (n.h = C0(n.t))) : e.match(gu) && ((n.r = Se(e)), (n.t = we(Se((e.replace(mu, "").match(pu) || []).join("").replace(ir, "")))), r && (n.h = vu(du(n.r)))), n) : { t: "" };
}
var _u = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,
  Tu = /<(?:\w+:)?(?:si|sstItem)>/g,
  Eu = /<\/(?:\w+:)?(?:si|sstItem)>/;
function ku(e, a) {
  var r = [],
    n = "";
  if (!e) return r;
  var t = e.match(_u);
  if (t) {
    n = t[2].replace(Tu, "").split(Eu);
    for (var i = 0; i != n.length; ++i) {
      var s = B0(n[i].trim(), a);
      s != null && (r[r.length] = s);
    }
    (t = xe(t[1])), (r.Count = t.count), (r.Unique = t.uniqueCount);
  }
  return r;
}
function wu(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Au(e, a) {
  var r = [],
    n = !1;
  return (
    Yr(e, function (i, s, c) {
      switch (c) {
        case 159:
          (r.Count = i[0]), (r.Unique = i[1]);
          break;
        case 19:
          r.push(i);
          break;
        case 160:
          return !0;
        case 35:
          n = !0;
          break;
        case 36:
          n = !1;
          break;
        default:
          if ((s.T, !n || a.WTF)) throw new Error("Unexpected record 0x" + c.toString(16));
      }
    }),
    r
  );
}
function Ts(e) {
  for (var a = [], r = e.split(""), n = 0; n < r.length; ++n) a[n] = r[n].charCodeAt(0);
  return a;
}
function zr(e, a) {
  var r = {};
  return (r.Major = e.read_shift(2)), (r.Minor = e.read_shift(2)), a >= 4 && (e.l += a - 4), r;
}
function Su(e) {
  var a = {};
  return (a.id = e.read_shift(0, "lpp4")), (a.R = zr(e, 4)), (a.U = zr(e, 4)), (a.W = zr(e, 4)), a;
}
function Fu(e) {
  for (var a = e.read_shift(4), r = e.l + a - 4, n = {}, t = e.read_shift(4), i = []; t-- > 0; ) i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (((n.name = e.read_shift(0, "lpp4")), (n.comps = i), e.l != r)) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return n;
}
function yu(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(Fu(e));
  return a;
}
function Cu(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(e.read_shift(0, "lpp4"));
  return a;
}
function Ou(e) {
  var a = {};
  return e.read_shift(4), (e.l += 4), (a.id = e.read_shift(0, "lpp4")), (a.name = e.read_shift(0, "lpp4")), (a.R = zr(e, 4)), (a.U = zr(e, 4)), (a.W = zr(e, 4)), a;
}
function Ru(e) {
  var a = Ou(e);
  if (((a.ename = e.read_shift(0, "8lpp4")), (a.blksz = e.read_shift(4)), (a.cmode = e.read_shift(4)), e.read_shift(4) != 4)) throw new Error("Bad !Primary record");
  return a;
}
function Es(e, a) {
  var r = e.l + a,
    n = {};
  (n.Flags = e.read_shift(4) & 63), (e.l += 4), (n.AlgID = e.read_shift(4));
  var t = !1;
  switch (n.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      t = n.Flags == 36;
      break;
    case 26625:
      t = n.Flags == 4;
      break;
    case 0:
      t = n.Flags == 16 || n.Flags == 4 || n.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + n.AlgID;
  }
  if (!t) throw new Error("Encryption Flags/AlgID mismatch");
  return (n.AlgIDHash = e.read_shift(4)), (n.KeySize = e.read_shift(4)), (n.ProviderType = e.read_shift(4)), (e.l += 8), (n.CSPName = e.read_shift((r - e.l) >> 1, "utf16le")), (e.l = r), n;
}
function ks(e, a) {
  var r = {},
    n = e.l + a;
  return (e.l += 4), (r.Salt = e.slice(e.l, e.l + 16)), (e.l += 16), (r.Verifier = e.slice(e.l, e.l + 16)), (e.l += 16), e.read_shift(4), (r.VerifierHash = e.slice(e.l, n)), (e.l = n), r;
}
function Du(e) {
  var a = zr(e);
  switch (a.Minor) {
    case 2:
      return [a.Minor, Iu(e)];
    case 3:
      return [a.Minor, Nu()];
    case 4:
      return [a.Minor, Pu(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + a.Minor);
}
function Iu(e) {
  var a = e.read_shift(4);
  if ((a & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4),
    n = Es(e, r),
    t = ks(e, e.length - e.l);
  return { t: "Std", h: n, v: t };
}
function Nu() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function Pu(e) {
  var a = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"),
    n = {};
  return (
    r.replace(ir, function (i) {
      var s = xe(i);
      switch (Ur(s[0])) {
        case "<?xml":
          break;
        case "<encryption":
        case "</encryption>":
          break;
        case "<keyData":
          a.forEach(function (c) {
            n[c] = s[c];
          });
          break;
        case "<dataIntegrity":
          (n.encryptedHmacKey = s.encryptedHmacKey), (n.encryptedHmacValue = s.encryptedHmacValue);
          break;
        case "<keyEncryptors>":
        case "<keyEncryptors":
          n.encs = [];
          break;
        case "</keyEncryptors>":
          break;
        case "<keyEncryptor":
          n.uri = s.uri;
          break;
        case "</keyEncryptor>":
          break;
        case "<encryptedKey":
          n.encs.push(s);
          break;
        default:
          throw s[0];
      }
    }),
    n
  );
}
function Lu(e, a) {
  var r = {},
    n = (r.EncryptionVersionInfo = zr(e, 4));
  if (((a -= 4), n.Minor != 2)) throw new Error("unrecognized minor version code: " + n.Minor);
  if (n.Major > 4 || n.Major < 2) throw new Error("unrecognized major version code: " + n.Major);
  (r.Flags = e.read_shift(4)), (a -= 4);
  var t = e.read_shift(4);
  return (a -= 4), (r.EncryptionHeader = Es(e, t)), (a -= t), (r.EncryptionVerifier = ks(e, a)), r;
}
function Mu(e) {
  var a = {},
    r = (a.EncryptionVersionInfo = zr(e, 4));
  if (r.Major != 1 || r.Minor != 1) throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return (a.Salt = e.read_shift(16)), (a.EncryptedVerifier = e.read_shift(16)), (a.EncryptedVerifierHash = e.read_shift(16)), a;
}
function bu(e) {
  var a = 0,
    r,
    n = Ts(e),
    t = n.length + 1,
    i,
    s,
    c,
    f,
    o;
  for (r = ia(t), r[0] = n.length, i = 1; i != t; ++i) r[i] = n[i - 1];
  for (i = t - 1; i >= 0; --i) (s = r[i]), (c = a & 16384 ? 1 : 0), (f = (a << 1) & 32767), (o = c | f), (a = o ^ s);
  return a ^ 52811;
}
var ws = (function () {
    var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0],
      a = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163],
      r = [
        44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539,
        35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628,
      ],
      n = function (s) {
        return ((s / 2) | (s * 128)) & 255;
      },
      t = function (s, c) {
        return n(s ^ c);
      },
      i = function (s) {
        for (var c = a[s.length - 1], f = 104, o = s.length - 1; o >= 0; --o) for (var l = s[o], h = 0; h != 7; ++h) l & 64 && (c ^= r[f]), (l *= 2), --f;
        return c;
      };
    return function (s) {
      for (var c = Ts(s), f = i(c), o = c.length, l = ia(16), h = 0; h != 16; ++h) l[h] = 0;
      var u, d, v;
      for ((o & 1) === 1 && ((u = f >> 8), (l[o] = t(e[0], u)), --o, (u = f & 255), (d = c[c.length - 1]), (l[o] = t(d, u))); o > 0; ) --o, (u = f >> 8), (l[o] = t(c[o], u)), --o, (u = f & 255), (l[o] = t(c[o], u));
      for (o = 15, v = 15 - c.length; v > 0; ) (u = f >> 8), (l[o] = t(e[v], u)), --o, --v, (u = f & 255), (l[o] = t(c[o], u)), --o, --v;
      return l;
    };
  })(),
  Bu = function (e, a, r, n, t) {
    t || (t = a), n || (n = ws(e));
    var i, s;
    for (i = 0; i != a.length; ++i) (s = a[i]), (s ^= n[r]), (s = ((s >> 5) | (s << 3)) & 255), (t[i] = s), ++r;
    return [t, r, n];
  },
  Uu = function (e) {
    var a = 0,
      r = ws(e);
    return function (n) {
      var t = Bu("", n, a, r);
      return (a = t[1]), t[0];
    };
  };
function Hu(e, a, r, n) {
  var t = { key: be(e), verificationBytes: be(e) };
  return r.password && (t.verifier = bu(r.password)), (n.valid = t.verificationBytes === t.verifier), n.valid && (n.insitu = Uu(r.password)), t;
}
function Vu(e, a, r) {
  var n = r || {};
  return (n.Info = e.read_shift(2)), (e.l -= 2), n.Info === 1 ? (n.Data = Mu(e)) : (n.Data = Lu(e, a)), n;
}
function Wu(e, a, r) {
  var n = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return n.Type ? Vu(e, a - 2, n) : Hu(e, r.biff >= 8 ? a : a - 2, r, n), n;
}
var Gu = (function () {
  function e(t, i) {
    switch (i.type) {
      case "base64":
        return a(_r(t), i);
      case "binary":
        return a(t, i);
      case "buffer":
        return a(Te && Buffer.isBuffer(t) ? t.toString("binary") : ma(t), i);
      case "array":
        return a(va(t), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function a(t, i) {
    var s = i || {},
      c = s.dense ? [] : {},
      f = t.match(/\\trowd.*?\\row\b/g);
    if (!f.length) throw new Error("RTF missing table");
    var o = { s: { c: 0, r: 0 }, e: { c: 0, r: f.length - 1 } };
    return (
      f.forEach(function (l, h) {
        Array.isArray(c) && (c[h] = []);
        for (var u = /\\\w+\b/g, d = 0, v, x = -1; (v = u.exec(l)); ) {
          switch (v[0]) {
            case "\\cell":
              var g = l.slice(d, u.lastIndex - v[0].length);
              if ((g[0] == " " && (g = g.slice(1)), ++x, g.length)) {
                var A = { v: g, t: "s" };
                Array.isArray(c) ? (c[h][x] = A) : (c[ve({ r: h, c: x })] = A);
              }
              break;
          }
          d = u.lastIndex;
        }
        x > o.e.c && (o.e.c = x);
      }),
      (c["!ref"] = ke(o)),
      c
    );
  }
  function r(t, i) {
    return ca(e(t, i), i);
  }
  function n(t) {
    for (var i = ["{\\rtf1\\ansi"], s = Ie(t["!ref"]), c, f = Array.isArray(t), o = s.s.r; o <= s.e.r; ++o) {
      i.push("\\trowd\\trautofit1");
      for (var l = s.s.c; l <= s.e.c; ++l) i.push("\\cellx" + (l + 1));
      for (i.push("\\pard\\intbl"), l = s.s.c; l <= s.e.c; ++l) {
        var h = ve({ r: o, c: l });
        (c = f ? (t[o] || [])[l] : t[h]), !(!c || (c.v == null && (!c.f || c.F))) && (i.push(" " + (c.w || (Kr(c), c.w))), i.push("\\cell"));
      }
      i.push("\\pard\\intbl\\row");
    }
    return i.join("") + "}";
  }
  return { to_workbook: r, to_sheet: e, from_sheet: n };
})();
function Xu(e) {
  var a = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(a.slice(0, 2), 16), parseInt(a.slice(2, 4), 16), parseInt(a.slice(4, 6), 16)];
}
function it(e) {
  for (var a = 0, r = 1; a != 3; ++a) r = r * 256 + (e[a] > 255 ? 255 : e[a] < 0 ? 0 : e[a]);
  return r.toString(16).toUpperCase().slice(1);
}
function $u(e) {
  var a = e[0] / 255,
    r = e[1] / 255,
    n = e[2] / 255,
    t = Math.max(a, r, n),
    i = Math.min(a, r, n),
    s = t - i;
  if (s === 0) return [0, 0, a];
  var c = 0,
    f = 0,
    o = t + i;
  switch (((f = s / (o > 1 ? 2 - o : o)), t)) {
    case a:
      c = ((r - n) / s + 6) % 6;
      break;
    case r:
      c = (n - a) / s + 2;
      break;
    case n:
      c = (a - r) / s + 4;
      break;
  }
  return [c / 6, f, o / 2];
}
function zu(e) {
  var a = e[0],
    r = e[1],
    n = e[2],
    t = r * 2 * (n < 0.5 ? n : 1 - n),
    i = n - t / 2,
    s = [i, i, i],
    c = 6 * a,
    f;
  if (r !== 0)
    switch (c | 0) {
      case 0:
      case 6:
        (f = t * c), (s[0] += t), (s[1] += f);
        break;
      case 1:
        (f = t * (2 - c)), (s[0] += f), (s[1] += t);
        break;
      case 2:
        (f = t * (c - 2)), (s[1] += t), (s[2] += f);
        break;
      case 3:
        (f = t * (4 - c)), (s[1] += f), (s[2] += t);
        break;
      case 4:
        (f = t * (c - 4)), (s[2] += t), (s[0] += f);
        break;
      case 5:
        (f = t * (6 - c)), (s[2] += f), (s[0] += t);
        break;
    }
  for (var o = 0; o != 3; ++o) s[o] = Math.round(s[o] * 255);
  return s;
}
function Pt(e, a) {
  if (a === 0) return e;
  var r = $u(Xu(e));
  return a < 0 ? (r[2] = r[2] * (1 + a)) : (r[2] = 1 - (1 - r[2]) * (1 - a)), it(zu(r));
}
var As = 6,
  ju = 15,
  Ku = 1,
  or = As;
function Lt(e) {
  return Math.floor((e + Math.round(128 / or) / 256) * or);
}
function Mt(e) {
  return Math.floor(((e - 5) / or) * 100 + 0.5) / 100;
}
function u0(e) {
  return Math.round(((e * or + 5) / or) * 256) / 256;
}
function e0(e) {
  return u0(Mt(Lt(e)));
}
function U0(e) {
  var a = Math.abs(e - e0(e)),
    r = or;
  if (a > 0.005) for (or = Ku; or < ju; ++or) Math.abs(e - e0(e)) <= a && ((a = Math.abs(e - e0(e))), (r = or));
  or = r;
}
function Ia(e) {
  e.width ? ((e.wpx = Lt(e.width)), (e.wch = Mt(e.wpx)), (e.MDW = or)) : e.wpx ? ((e.wch = Mt(e.wpx)), (e.width = u0(e.wch)), (e.MDW = or)) : typeof e.wch == "number" && ((e.width = u0(e.wch)), (e.wpx = Lt(e.width)), (e.MDW = or)), e.customWidth && delete e.customWidth;
}
var Yu = 96,
  Ss = Yu;
function Fs(e) {
  return (e * 96) / Ss;
}
function st(e) {
  return (e * Ss) / 96;
}
var Ju = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function qu(e, a, r, n) {
  a.Borders = [];
  var t = {},
    i = !1;
  (e[0].match(ir) || []).forEach(function (s) {
    var c = xe(s);
    switch (Ur(c[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        (t = {}), c.diagonalUp && (t.diagonalUp = Ce(c.diagonalUp)), c.diagonalDown && (t.diagonalDown = Ce(c.diagonalDown)), a.Borders.push(t);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (n && n.WTF && !i) throw new Error("unrecognized " + c[0] + " in borders");
    }
  });
}
function Zu(e, a, r, n) {
  a.Fills = [];
  var t = {},
    i = !1;
  (e[0].match(ir) || []).forEach(function (s) {
    var c = xe(s);
    switch (Ur(c[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        (t = {}), a.Fills.push(t);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        a.Fills.push(t), (t = {});
        break;
      case "<patternFill":
      case "<patternFill>":
        c.patternType && (t.patternType = c.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        t.bgColor || (t.bgColor = {}), c.indexed && (t.bgColor.indexed = parseInt(c.indexed, 10)), c.theme && (t.bgColor.theme = parseInt(c.theme, 10)), c.tint && (t.bgColor.tint = parseFloat(c.tint)), c.rgb && (t.bgColor.rgb = c.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        t.fgColor || (t.fgColor = {}), c.theme && (t.fgColor.theme = parseInt(c.theme, 10)), c.tint && (t.fgColor.tint = parseFloat(c.tint)), c.rgb != null && (t.fgColor.rgb = c.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (n && n.WTF && !i) throw new Error("unrecognized " + c[0] + " in fills");
    }
  });
}
function Qu(e, a, r, n) {
  a.Fonts = [];
  var t = {},
    i = !1;
  (e[0].match(ir) || []).forEach(function (s) {
    var c = xe(s);
    switch (Ur(c[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        a.Fonts.push(t), (t = {});
        break;
      case "<name":
        c.val && (t.name = Se(c.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        t.bold = c.val ? Ce(c.val) : 1;
        break;
      case "<b/>":
        t.bold = 1;
        break;
      case "<i":
        t.italic = c.val ? Ce(c.val) : 1;
        break;
      case "<i/>":
        t.italic = 1;
        break;
      case "<u":
        switch (c.val) {
          case "none":
            t.underline = 0;
            break;
          case "single":
            t.underline = 1;
            break;
          case "double":
            t.underline = 2;
            break;
          case "singleAccounting":
            t.underline = 33;
            break;
          case "doubleAccounting":
            t.underline = 34;
            break;
        }
        break;
      case "<u/>":
        t.underline = 1;
        break;
      case "<strike":
        t.strike = c.val ? Ce(c.val) : 1;
        break;
      case "<strike/>":
        t.strike = 1;
        break;
      case "<outline":
        t.outline = c.val ? Ce(c.val) : 1;
        break;
      case "<outline/>":
        t.outline = 1;
        break;
      case "<shadow":
        t.shadow = c.val ? Ce(c.val) : 1;
        break;
      case "<shadow/>":
        t.shadow = 1;
        break;
      case "<condense":
        t.condense = c.val ? Ce(c.val) : 1;
        break;
      case "<condense/>":
        t.condense = 1;
        break;
      case "<extend":
        t.extend = c.val ? Ce(c.val) : 1;
        break;
      case "<extend/>":
        t.extend = 1;
        break;
      case "<sz":
        c.val && (t.sz = +c.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        c.val && (t.vertAlign = c.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        c.val && (t.family = parseInt(c.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        c.val && (t.scheme = c.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (c.val == "1") break;
        c.codepage = E0[parseInt(c.val, 10)];
        break;
      case "<color":
        if ((t.color || (t.color = {}), c.auto && (t.color.auto = Ce(c.auto)), c.rgb)) t.color.rgb = c.rgb.slice(-6);
        else if (c.indexed) {
          t.color.index = parseInt(c.indexed, 10);
          var f = xa[t.color.index];
          t.color.index == 81 && (f = xa[1]), f || (f = xa[1]), (t.color.rgb = f[0].toString(16) + f[1].toString(16) + f[2].toString(16));
        } else c.theme && ((t.color.theme = parseInt(c.theme, 10)), c.tint && (t.color.tint = parseFloat(c.tint)), c.theme && r.themeElements && r.themeElements.clrScheme && (t.color.rgb = Pt(r.themeElements.clrScheme[t.color.theme].rgb, t.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        i = !0;
        break;
      case "</AlternateContent>":
        i = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (n && n.WTF && !i) throw new Error("unrecognized " + c[0] + " in fonts");
    }
  });
}
function e1(e, a, r) {
  a.NumberFmt = [];
  for (var n = Br(ge), t = 0; t < n.length; ++t) a.NumberFmt[n[t]] = ge[n[t]];
  var i = e[0].match(ir);
  if (i)
    for (t = 0; t < i.length; ++t) {
      var s = xe(i[t]);
      switch (Ur(s[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var c = we(Se(s.formatCode)),
              f = parseInt(s.numFmtId, 10);
            if (((a.NumberFmt[f] = c), f > 0)) {
              if (f > 392) {
                for (f = 392; f > 60 && a.NumberFmt[f] != null; --f);
                a.NumberFmt[f] = c;
              }
              ha(c, f);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (r.WTF) throw new Error("unrecognized " + s[0] + " in numFmts");
      }
    }
}
var wt = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
  At = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function r1(e, a, r) {
  a.CellXf = [];
  var n,
    t = !1;
  (e[0].match(ir) || []).forEach(function (i) {
    var s = xe(i),
      c = 0;
    switch (Ur(s[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (n = s, delete n[0], c = 0; c < wt.length; ++c) n[wt[c]] && (n[wt[c]] = parseInt(n[wt[c]], 10));
        for (c = 0; c < At.length; ++c) n[At[c]] && (n[At[c]] = Ce(n[At[c]]));
        if (a.NumberFmt && n.numFmtId > 392) {
          for (c = 392; c > 60; --c)
            if (a.NumberFmt[n.numFmtId] == a.NumberFmt[c]) {
              n.numFmtId = c;
              break;
            }
        }
        a.CellXf.push(n);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var f = {};
        s.vertical && (f.vertical = s.vertical), s.horizontal && (f.horizontal = s.horizontal), s.textRotation != null && (f.textRotation = s.textRotation), s.indent && (f.indent = s.indent), s.wrapText && (f.wrapText = Ce(s.wrapText)), (n.alignment = f);
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        t = !0;
        break;
      case "</AlternateContent>":
        t = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      default:
        if (r && r.WTF && !t) throw new Error("unrecognized " + s[0] + " in cellXfs");
    }
  });
}
var a1 = (function () {
  var a = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,
    r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,
    n = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,
    t = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,
    i = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function (c, f, o) {
    var l = {};
    if (!c) return l;
    c = c.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var h;
    return (h = c.match(a)) && e1(h, l, o), (h = c.match(t)) && Qu(h, l, f, o), (h = c.match(n)) && Zu(h, l, f, o), (h = c.match(i)) && qu(h, l, f, o), (h = c.match(r)) && r1(h, l, o), l;
  };
})();
function t1(e, a) {
  var r = e.read_shift(2),
    n = tr(e);
  return [r, n];
}
function n1(e, a, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var t = xo(e);
  t.fItalic && (n.italic = 1), t.fCondense && (n.condense = 1), t.fExtend && (n.extend = 1), t.fShadow && (n.shadow = 1), t.fOutline && (n.outline = 1), t.fStrikeout && (n.strike = 1);
  var i = e.read_shift(2);
  switch ((i === 700 && (n.bold = 1), e.read_shift(2))) {
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (n.underline = s);
  var c = e.read_shift(1);
  c > 0 && (n.family = c);
  var f = e.read_shift(1);
  switch ((f > 0 && (n.charset = f), e.l++, (n.color = ho(e)), e.read_shift(1))) {
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return (n.name = tr(e)), n;
}
var i1 = nr;
function s1(e, a) {
  var r = e.l + a,
    n = e.read_shift(2),
    t = e.read_shift(2);
  return (e.l = r), { ixfe: n, numFmtId: t };
}
var c1 = nr;
function f1(e, a, r) {
  var n = {};
  n.NumberFmt = [];
  for (var t in ge) n.NumberFmt[t] = ge[t];
  (n.CellXf = []), (n.Fonts = []);
  var i = [],
    s = !1;
  return (
    Yr(e, function (f, o, l) {
      switch (l) {
        case 44:
          (n.NumberFmt[f[0]] = f[1]), ha(f[1], f[0]);
          break;
        case 43:
          n.Fonts.push(f), f.color.theme != null && a && a.themeElements && a.themeElements.clrScheme && (f.color.rgb = Pt(a.themeElements.clrScheme[f.color.theme].rgb, f.color.tint || 0));
          break;
        case 1025:
          break;
        case 45:
          break;
        case 46:
          break;
        case 47:
          i[i.length - 1] == 617 && n.CellXf.push(f);
          break;
        case 48:
        case 507:
        case 572:
        case 475:
          break;
        case 1171:
        case 2102:
        case 1130:
        case 512:
        case 2095:
        case 3072:
          break;
        case 35:
          s = !0;
          break;
        case 36:
          s = !1;
          break;
        case 37:
          i.push(l), (s = !0);
          break;
        case 38:
          i.pop(), (s = !1);
          break;
        default:
          if (o.T > 0) i.push(l);
          else if (o.T < 0) i.pop();
          else if (!s || (r.WTF && i[i.length - 1] != 37)) throw new Error("Unexpected record 0x" + l.toString(16));
      }
    }),
    n
  );
}
var o1 = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function l1(e, a, r) {
  a.themeElements.clrScheme = [];
  var n = {};
  (e[0].match(ir) || []).forEach(function (t) {
    var i = xe(t);
    switch (i[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        n.rgb = i.val;
        break;
      case "<a:sysClr":
        n.rgb = i.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        i[0].charAt(1) === "/" ? ((a.themeElements.clrScheme[o1.indexOf(i[0])] = n), (n = {})) : (n.name = i[0].slice(3, i[0].length - 1));
        break;
      default:
        if (r && r.WTF) throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function u1() {}
function h1() {}
var x1 = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,
  d1 = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
  v1 = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function p1(e, a, r) {
  a.themeElements = {};
  var n;
  [
    ["clrScheme", x1, l1],
    ["fontScheme", d1, u1],
    ["fmtScheme", v1, h1],
  ].forEach(function (t) {
    if (!(n = e.match(t[1]))) throw new Error(t[0] + " not found in themeElements");
    t[2](n, a, r);
  });
}
var g1 = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function ys(e, a) {
  (!e || e.length === 0) && (e = m1());
  var r,
    n = {};
  if (!(r = e.match(g1))) throw new Error("themeElements not found in theme");
  return p1(r[0], n, a), (n.raw = e), n;
}
function m1(e, a) {
  if (a && a.themeXLSX) return a.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var r = [Bi];
  return (
    (r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
    (r[r.length] = "<a:themeElements>"),
    (r[r.length] = '<a:clrScheme name="Office">'),
    (r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
    (r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
    (r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
    (r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
    (r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
    (r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
    (r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
    (r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
    (r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
    (r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
    (r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
    (r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
    (r[r.length] = "</a:clrScheme>"),
    (r[r.length] = '<a:fontScheme name="Office">'),
    (r[r.length] = "<a:majorFont>"),
    (r[r.length] = '<a:latin typeface="Cambria"/>'),
    (r[r.length] = '<a:ea typeface=""/>'),
    (r[r.length] = '<a:cs typeface=""/>'),
    (r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
    (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (r[r.length] = "</a:majorFont>"),
    (r[r.length] = "<a:minorFont>"),
    (r[r.length] = '<a:latin typeface="Calibri"/>'),
    (r[r.length] = '<a:ea typeface=""/>'),
    (r[r.length] = '<a:cs typeface=""/>'),
    (r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (r[r.length] = '<a:font script="Arab" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Hebr" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
    (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (r[r.length] = '<a:font script="Viet" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (r[r.length] = "</a:minorFont>"),
    (r[r.length] = "</a:fontScheme>"),
    (r[r.length] = '<a:fmtScheme name="Office">'),
    (r[r.length] = "<a:fillStyleLst>"),
    (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = "<a:gsLst>"),
    (r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = "</a:gsLst>"),
    (r[r.length] = '<a:lin ang="16200000" scaled="1"/>'),
    (r[r.length] = "</a:gradFill>"),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = "<a:gsLst>"),
    (r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = "</a:gsLst>"),
    (r[r.length] = '<a:lin ang="16200000" scaled="0"/>'),
    (r[r.length] = "</a:gradFill>"),
    (r[r.length] = "</a:fillStyleLst>"),
    (r[r.length] = "<a:lnStyleLst>"),
    (r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] = "</a:lnStyleLst>"),
    (r[r.length] = "<a:effectStyleLst>"),
    (r[r.length] = "<a:effectStyle>"),
    (r[r.length] = "<a:effectLst>"),
    (r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = "</a:effectLst>"),
    (r[r.length] = "</a:effectStyle>"),
    (r[r.length] = "<a:effectStyle>"),
    (r[r.length] = "<a:effectLst>"),
    (r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = "</a:effectLst>"),
    (r[r.length] = "</a:effectStyle>"),
    (r[r.length] = "<a:effectStyle>"),
    (r[r.length] = "<a:effectLst>"),
    (r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = "</a:effectLst>"),
    (r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
    (r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
    (r[r.length] = "</a:effectStyle>"),
    (r[r.length] = "</a:effectStyleLst>"),
    (r[r.length] = "<a:bgFillStyleLst>"),
    (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = "<a:gsLst>"),
    (r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
    (r[r.length] = "</a:gsLst>"),
    (r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
    (r[r.length] = "</a:gradFill>"),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = "<a:gsLst>"),
    (r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
    (r[r.length] = "</a:gsLst>"),
    (r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
    (r[r.length] = "</a:gradFill>"),
    (r[r.length] = "</a:bgFillStyleLst>"),
    (r[r.length] = "</a:fmtScheme>"),
    (r[r.length] = "</a:themeElements>"),
    (r[r.length] = "<a:objectDefaults>"),
    (r[r.length] = "<a:spDef>"),
    (r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
    (r[r.length] = "</a:spDef>"),
    (r[r.length] = "<a:lnDef>"),
    (r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
    (r[r.length] = "</a:lnDef>"),
    (r[r.length] = "</a:objectDefaults>"),
    (r[r.length] = "<a:extraClrSchemeLst/>"),
    (r[r.length] = "</a:theme>"),
    r.join("")
  );
}
function _1(e, a, r) {
  var n = e.l + a,
    t = e.read_shift(4);
  if (t !== 124226) {
    if (!r.cellStyles) {
      e.l = n;
      return;
    }
    var i = e.slice(e.l);
    e.l = n;
    var s;
    try {
      s = bi(i, { type: "array" });
    } catch {
      return;
    }
    var c = mr(s, "theme/theme/theme1.xml", !0);
    if (c) return ys(c, r);
  }
}
function T1(e) {
  return e.read_shift(4);
}
function E1(e) {
  var a = {};
  switch (((a.xclrType = e.read_shift(2)), (a.nTintShade = e.read_shift(2)), a.xclrType)) {
    case 0:
      e.l += 4;
      break;
    case 1:
      a.xclrValue = k1(e, 4);
      break;
    case 2:
      a.xclrValue = xs(e);
      break;
    case 3:
      a.xclrValue = T1(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return (e.l += 8), a;
}
function k1(e, a) {
  return nr(e, a);
}
function w1(e, a) {
  return nr(e, a);
}
function A1(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2) - 4,
    n = [a];
  switch (a) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      n[1] = E1(e);
      break;
    case 6:
      n[1] = w1(e, r);
      break;
    case 14:
    case 15:
      n[1] = e.read_shift(r === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + a + " " + r);
  }
  return n;
}
function S1(e, a) {
  var r = e.l + a;
  e.l += 2;
  var n = e.read_shift(2);
  e.l += 2;
  for (var t = e.read_shift(2), i = []; t-- > 0; ) i.push(A1(e, r - e.l));
  return { ixfe: n, ext: i };
}
function F1(e, a) {
  a.forEach(function (r) {
    switch (r[0]) {
    }
  });
}
function y1(e, a) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: tr(e) };
}
function C1(e) {
  for (var a = [], r = e.read_shift(4); r-- > 0; ) a.push([e.read_shift(4), e.read_shift(4)]);
  return a;
}
function O1(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function R1(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] },
    t = r || {},
    i = [],
    s = !1,
    c = 2;
  return (
    Yr(e, function (f, o, l) {
      switch (l) {
        case 335:
          n.Types.push({ name: f.name });
          break;
        case 51:
          f.forEach(function (h) {
            c == 1 ? n.Cell.push({ type: n.Types[h[0] - 1].name, index: h[1] }) : c == 0 && n.Value.push({ type: n.Types[h[0] - 1].name, index: h[1] });
          });
          break;
        case 337:
          c = f ? 1 : 0;
          break;
        case 338:
          c = 2;
          break;
        case 35:
          i.push(l), (s = !0);
          break;
        case 36:
          i.pop(), (s = !1);
          break;
        default:
          if (!o.T) {
            if (!s || (t.WTF && i[i.length - 1] != 35)) throw new Error("Unexpected record 0x" + l.toString(16));
          }
      }
    }),
    n
  );
}
function D1(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] };
  if (!e) return n;
  var t = !1,
    i = 2,
    s;
  return (
    e.replace(ir, function (c) {
      var f = xe(c);
      switch (Ur(f[0])) {
        case "<?xml":
          break;
        case "<metadata":
        case "</metadata>":
          break;
        case "<metadataTypes":
        case "</metadataTypes>":
          break;
        case "<metadataType":
          n.Types.push({ name: f.name });
          break;
        case "</metadataType>":
          break;
        case "<futureMetadata":
          for (var o = 0; o < n.Types.length; ++o) n.Types[o].name == f.name && (s = n.Types[o]);
          break;
        case "</futureMetadata>":
          break;
        case "<bk>":
          break;
        case "</bk>":
          break;
        case "<rc":
          i == 1 ? n.Cell.push({ type: n.Types[f.t - 1].name, index: +f.v }) : i == 0 && n.Value.push({ type: n.Types[f.t - 1].name, index: +f.v });
          break;
        case "</rc>":
          break;
        case "<cellMetadata":
          i = 1;
          break;
        case "</cellMetadata>":
          i = 2;
          break;
        case "<valueMetadata":
          i = 0;
          break;
        case "</valueMetadata>":
          i = 2;
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          t = !0;
          break;
        case "</ext>":
          t = !1;
          break;
        case "<rvb":
          if (!s) break;
          s.offsets || (s.offsets = []), s.offsets.push(+f.i);
          break;
        default:
          if (!t && r.WTF) throw new Error("unrecognized " + f[0] + " in metadata");
      }
      return c;
    }),
    n
  );
}
function I1(e) {
  var a = [];
  if (!e) return a;
  var r = 1;
  return (
    (e.match(ir) || []).forEach(function (n) {
      var t = xe(n);
      switch (t[0]) {
        case "<?xml":
          break;
        case "<calcChain":
        case "<calcChain>":
        case "</calcChain>":
          break;
        case "<c":
          delete t[0], t.i ? (r = t.i) : (t.i = r), a.push(t);
          break;
      }
    }),
    a
  );
}
function N1(e) {
  var a = {};
  a.i = e.read_shift(4);
  var r = {};
  (r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (a.r = ve(r));
  var n = e.read_shift(1);
  return n & 2 && (a.l = "1"), n & 8 && (a.a = "1"), a;
}
function P1(e, a, r) {
  var n = [];
  return (
    Yr(e, function (i, s, c) {
      switch (c) {
        case 63:
          n.push(i);
          break;
        default:
          if (!s.T) throw new Error("Unexpected record 0x" + c.toString(16));
      }
    }),
    n
  );
}
function L1(e, a, r, n) {
  if (!e) return e;
  var t = n || {},
    i = !1;
  Yr(
    e,
    function (c, f, o) {
      switch (o) {
        case 359:
        case 363:
        case 364:
        case 366:
        case 367:
        case 368:
        case 369:
        case 370:
        case 371:
        case 472:
        case 577:
        case 578:
        case 579:
        case 580:
        case 581:
        case 582:
        case 583:
        case 584:
        case 585:
        case 586:
        case 587:
          break;
        case 35:
          i = !0;
          break;
        case 36:
          i = !1;
          break;
        default:
          if (!f.T) {
            if (!i || t.WTF) throw new Error("Unexpected record 0x" + o.toString(16));
          }
      }
    },
    t
  );
}
function M1(e, a) {
  if (!e) return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return a["!id"][r].Target;
}
function Jn(e, a, r, n) {
  var t = Array.isArray(e),
    i;
  a.forEach(function (s) {
    var c = lr(s.ref);
    if ((t ? (e[c.r] || (e[c.r] = []), (i = e[c.r][c.c])) : (i = e[s.ref]), !i)) {
      (i = { t: "z" }), t ? (e[c.r][c.c] = i) : (e[s.ref] = i);
      var f = Ie(e["!ref"] || "BDWGO1000001:A1");
      f.s.r > c.r && (f.s.r = c.r), f.e.r < c.r && (f.e.r = c.r), f.s.c > c.c && (f.s.c = c.c), f.e.c < c.c && (f.e.c = c.c);
      var o = ke(f);
      o !== e["!ref"] && (e["!ref"] = o);
    }
    i.c || (i.c = []);
    var l = { a: s.author, t: s.t, r: s.r, T: r };
    s.h && (l.h = s.h);
    for (var h = i.c.length - 1; h >= 0; --h) {
      if (!r && i.c[h].T) return;
      r && !i.c[h].T && i.c.splice(h, 1);
    }
    if (r && n) {
      for (h = 0; h < n.length; ++h)
        if (l.a == n[h].id) {
          l.a = n[h].name || l.a;
          break;
        }
    }
    i.c.push(l);
  });
}
function b1(e, a) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var r = [],
    n = [],
    t = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  t &&
    t[1] &&
    t[1].split(/<\/\w*:?author>/).forEach(function (s) {
      if (!(s === "" || s.trim() === "")) {
        var c = s.match(/<(?:\w+:)?author[^>]*>(.*)/);
        c && r.push(c[1]);
      }
    });
  var i = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return (
    i &&
      i[1] &&
      i[1].split(/<\/\w*:?comment>/).forEach(function (s) {
        if (!(s === "" || s.trim() === "")) {
          var c = s.match(/<(?:\w+:)?comment[^>]*>/);
          if (c) {
            var f = xe(c[0]),
              o = { author: (f.authorId && r[f.authorId]) || "sheetjsghost", ref: f.ref, guid: f.guid },
              l = lr(f.ref);
            if (!(a.sheetRows && a.sheetRows <= l.r)) {
              var h = s.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),
                u = (!!h && !!h[1] && B0(h[1])) || { r: "", t: "", h: "" };
              (o.r = u.r),
                u.r == "<t></t>" && (u.t = u.h = ""),
                (o.t = (u.t || "")
                  .replace(
                    /\r\n/g,
                    `
`
                  )
                  .replace(
                    /\r/g,
                    `
`
                  )),
                a.cellHTML && (o.h = u.h),
                n.push(o);
            }
          }
        }
      }),
    n
  );
}
function B1(e, a) {
  var r = [],
    n = !1,
    t = {},
    i = 0;
  return (
    e.replace(ir, function (c, f) {
      var o = xe(c);
      switch (Ur(o[0])) {
        case "<?xml":
          break;
        case "<ThreadedComments":
          break;
        case "</ThreadedComments>":
          break;
        case "<threadedComment":
          t = { author: o.personId, guid: o.id, ref: o.ref, T: 1 };
          break;
        case "</threadedComment>":
          t.t != null && r.push(t);
          break;
        case "<text>":
        case "<text":
          i = f + c.length;
          break;
        case "</text>":
          t.t = e
            .slice(i, f)
            .replace(
              /\r\n/g,
              `
`
            )
            .replace(
              /\r/g,
              `
`
            );
          break;
        case "<mentions":
        case "<mentions>":
          n = !0;
          break;
        case "</mentions>":
          n = !1;
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        default:
          if (!n && a.WTF) throw new Error("unrecognized " + o[0] + " in threaded comments");
      }
      return c;
    }),
    r
  );
}
function U1(e, a) {
  var r = [],
    n = !1;
  return (
    e.replace(ir, function (i) {
      var s = xe(i);
      switch (Ur(s[0])) {
        case "<?xml":
          break;
        case "<personList":
          break;
        case "</personList>":
          break;
        case "<person":
          r.push({ name: s.displayname, id: s.id });
          break;
        case "</person>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        default:
          if (!n && a.WTF) throw new Error("unrecognized " + s[0] + " in threaded comments");
      }
      return i;
    }),
    r
  );
}
function H1(e) {
  var a = {};
  a.iauthor = e.read_shift(4);
  var r = Ta(e);
  return (a.rfx = r.s), (a.ref = ve(r.s)), (e.l += 16), a;
}
var V1 = tr;
function W1(e, a) {
  var r = [],
    n = [],
    t = {},
    i = !1;
  return (
    Yr(e, function (c, f, o) {
      switch (o) {
        case 632:
          n.push(c);
          break;
        case 635:
          t = c;
          break;
        case 637:
          (t.t = c.t), (t.h = c.h), (t.r = c.r);
          break;
        case 636:
          if (((t.author = n[t.iauthor]), delete t.iauthor, a.sheetRows && t.rfx && a.sheetRows <= t.rfx.r)) break;
          t.t || (t.t = ""), delete t.rfx, r.push(t);
          break;
        case 3072:
          break;
        case 35:
          i = !0;
          break;
        case 36:
          i = !1;
          break;
        case 37:
          break;
        case 38:
          break;
        default:
          if (!f.T) {
            if (!i || a.WTF) throw new Error("Unexpected record 0x" + o.toString(16));
          }
      }
    }),
    r
  );
}
var G1 = "application/vnd.ms-office.vbaProject";
function X1(e) {
  var a = Ee.utils.cfb_new({ root: "R" });
  return (
    e.FullPaths.forEach(function (r, n) {
      if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
        var t = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
        Ee.utils.cfb_add(a, t, e.FileIndex[n].content);
      }
    }),
    Ee.write(a)
  );
}
function $1() {
  return { "!type": "dialog" };
}
function z1() {
  return { "!type": "dialog" };
}
function j1() {
  return { "!type": "macro" };
}
function K1() {
  return { "!type": "macro" };
}
var Oa = (function () {
    var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      a = { r: 0, c: 0 };
    function r(n, t, i, s) {
      var c = !1,
        f = !1;
      i.length == 0 ? (f = !0) : i.charAt(0) == "[" && ((f = !0), (i = i.slice(1, -1))), s.length == 0 ? (c = !0) : s.charAt(0) == "[" && ((c = !0), (s = s.slice(1, -1)));
      var o = i.length > 0 ? parseInt(i, 10) | 0 : 0,
        l = s.length > 0 ? parseInt(s, 10) | 0 : 0;
      return c ? (l += a.c) : --l, f ? (o += a.r) : --o, t + (c ? "" : "$") + Ve(l) + (f ? "" : "$") + Ye(o);
    }
    return function (t, i) {
      return (a = i), t.replace(e, r);
    };
  })(),
  Cs = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  Y1 = (function () {
    return function (a, r) {
      return a.replace(Cs, function (n, t, i, s, c, f) {
        var o = I0(s) - (i ? 0 : r.c),
          l = D0(f) - (c ? 0 : r.r),
          h = l == 0 ? "" : c ? l + 1 : "[" + l + "]",
          u = o == 0 ? "" : i ? o + 1 : "[" + o + "]";
        return t + "R" + h + "C" + u;
      });
    };
  })();
function Os(e, a) {
  return e.replace(Cs, function (r, n, t, i, s, c) {
    return n + (t == "$" ? t + i : Ve(I0(i) + a.c)) + (s == "$" ? s + c : Ye(D0(c) + a.r));
  });
}
function J1(e, a, r) {
  var n = Pa(a),
    t = n.s,
    i = lr(r),
    s = { r: i.r - t.r, c: i.c - t.c };
  return Os(e, s);
}
function q1(e) {
  return e.length != 1;
}
function qn(e) {
  return e.replace(/_xlfn\./g, "");
}
function Le(e) {
  e.l += 1;
}
function sa(e, a) {
  var r = e.read_shift(a == 1 ? 1 : 2);
  return [r & 16383, (r >> 14) & 1, (r >> 15) & 1];
}
function Rs(e, a, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return Ds(e);
    r.biff == 12 && (n = 4);
  }
  var t = e.read_shift(n),
    i = e.read_shift(n),
    s = sa(e, 2),
    c = sa(e, 2);
  return { s: { r: t, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: c[0], cRel: c[1], rRel: c[2] } };
}
function Ds(e) {
  var a = sa(e, 2),
    r = sa(e, 2),
    n = e.read_shift(1),
    t = e.read_shift(1);
  return { s: { r: a[0], c: n, cRel: a[1], rRel: a[2] }, e: { r: r[0], c: t, cRel: r[1], rRel: r[2] } };
}
function Z1(e, a, r) {
  if (r.biff < 8) return Ds(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2),
    t = e.read_shift(r.biff == 12 ? 4 : 2),
    i = sa(e, 2),
    s = sa(e, 2);
  return { s: { r: n, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: t, c: s[0], cRel: s[1], rRel: s[2] } };
}
function Is(e, a, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return Q1(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
    t = sa(e, 2);
  return { r: n, c: t[0], cRel: t[1], rRel: t[2] };
}
function Q1(e) {
  var a = sa(e, 2),
    r = e.read_shift(1);
  return { r: a[0], c: r, cRel: a[1], rRel: a[2] };
}
function eh(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2);
  return { r: a, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function rh(e, a, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return ah(e);
  var t = e.read_shift(n >= 12 ? 4 : 2),
    i = e.read_shift(2),
    s = (i & 16384) >> 14,
    c = (i & 32768) >> 15;
  if (((i &= 16383), c == 1)) for (; t > 524287; ) t -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: t, c: i, cRel: s, rRel: c };
}
function ah(e) {
  var a = e.read_shift(2),
    r = e.read_shift(1),
    n = (a & 32768) >> 15,
    t = (a & 16384) >> 14;
  return (a &= 16383), n == 1 && a >= 8192 && (a = a - 16384), t == 1 && r >= 128 && (r = r - 256), { r: a, c: r, cRel: t, rRel: n };
}
function th(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = Rs(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, t];
}
function nh(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = e.read_shift(2, "i"),
    i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        (e.l += 12), (i = 6);
        break;
      case 12:
        i = 12;
        break;
    }
  var s = Rs(e, i, r);
  return [n, t, s];
}
function ih(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n];
}
function sh(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = e.read_shift(2),
    i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        (e.l += 12), (i = 6);
        break;
      case 12:
        i = 12;
        break;
    }
  return (e.l += i), [n, t];
}
function ch(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = Z1(e, a - 1, r);
  return [n, t];
}
function fh(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n];
}
function Zn(e) {
  var a = e[e.l + 1] & 1,
    r = 1;
  return (e.l += 4), [a, r];
}
function oh(e, a, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), t = [], i = 0; i <= n; ++i) t.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return t;
}
function lh(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function uh(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function hh(e) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [a, e.read_shift(2)];
}
function xh(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += r && r.biff == 2 ? 3 : 4), [n];
}
function Ns(e) {
  var a = e.read_shift(1),
    r = e.read_shift(1);
  return [a, r];
}
function dh(e) {
  return e.read_shift(2), Ns(e);
}
function vh(e) {
  return e.read_shift(2), Ns(e);
}
function ph(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = Is(e, 0, r);
  return [n, t];
}
function gh(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = rh(e, 0, r);
  return [n, t];
}
function mh(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var i = Is(e, 0, r);
  return [n, t, i];
}
function _h(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [Tx[t], Ms[t], n];
}
function Th(e, a, r) {
  var n = e[e.l++],
    t = e.read_shift(1),
    i = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : Eh(e);
  return [t, (i[0] === 0 ? Ms : _x)[i[1]]];
}
function Eh(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function kh(e, a, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function wh(e, a, r) {
  if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2),
    t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Ah(e) {
  return e.l++, Ea[e.read_shift(1)];
}
function Sh(e) {
  return e.l++, e.read_shift(2);
}
function Fh(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function yh(e) {
  return e.l++, rr(e);
}
function Ch(e, a, r) {
  return e.l++, lt(e, a - 1, r);
}
function Oh(e, a) {
  var r = [e.read_shift(1)];
  if (a == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      (r[1] = Pe(e, 1) ? "TRUE" : "FALSE"), a != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (r[1] = Ea[e[e.l]]), (e.l += a == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = rr(e);
      break;
    case 2:
      r[1] = ka(e, 0, { biff: a > 0 && a < 8 ? 2 : a });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Rh(e, a, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), t = [], i = 0; i != n; ++i) t.push((r.biff == 12 ? Ta : Ht)(e));
  return t;
}
function Dh(e, a, r) {
  var n = 0,
    t = 0;
  r.biff == 12 ? ((n = e.read_shift(4)), (t = e.read_shift(4))) : ((t = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))), r.biff >= 2 && r.biff < 8 && (--n, --t == 0 && (t = 256));
  for (var i = 0, s = []; i != n && (s[i] = []); ++i) for (var c = 0; c != t; ++c) s[i][c] = Oh(e, r.biff);
  return s;
}
function Ih(e, a, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    t = !r || r.biff >= 8 ? 4 : 2,
    i = e.read_shift(t);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, i];
}
function Nh(e, a, r) {
  if (r.biff == 5) return Ph(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2),
    i = e.read_shift(4);
  return [n, t, i];
}
function Ph(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [a, r, n];
}
function Lh(e, a, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Mh(e, a, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function bh(e, a, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Bh(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = e.read_shift(2),
    i = 4;
  if (r)
    switch (r.biff) {
      case 5:
        i = 15;
        break;
      case 12:
        i = 6;
        break;
    }
  return (e.l += i), [n, t];
}
var Uh = nr,
  Hh = nr,
  Vh = nr;
function ht(e, a, r) {
  return (e.l += 2), [eh(e)];
}
function H0(e) {
  return (e.l += 6), [];
}
var Wh = ht,
  Gh = H0,
  Xh = H0,
  $h = ht;
function Ps(e) {
  return (e.l += 2), [be(e), e.read_shift(2) & 1];
}
var zh = ht,
  jh = Ps,
  Kh = H0,
  Yh = ht,
  Jh = ht,
  qh = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function Zh(e) {
  e.l += 2;
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    t = e.read_shift(2),
    i = e.read_shift(2),
    s = qh[(r >> 2) & 31];
  return { ixti: a, coltype: r & 3, rt: s, idx: n, c: t, C: i };
}
function Qh(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function ex(e, a, r) {
  return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ["PTGSHEET"];
}
function rx(e, a, r) {
  return (e.l += r.biff == 2 ? 4 : 5), ["PTGENDSHEET"];
}
function ax(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [a, r];
}
function tx(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [a, r];
}
function nx(e) {
  return (e.l += 4), [0, 0];
}
var Qn = {
    1: { n: "PtgExp", f: wh },
    2: { n: "PtgTbl", f: Vh },
    3: { n: "PtgAdd", f: Le },
    4: { n: "PtgSub", f: Le },
    5: { n: "PtgMul", f: Le },
    6: { n: "PtgDiv", f: Le },
    7: { n: "PtgPower", f: Le },
    8: { n: "PtgConcat", f: Le },
    9: { n: "PtgLt", f: Le },
    10: { n: "PtgLe", f: Le },
    11: { n: "PtgEq", f: Le },
    12: { n: "PtgGe", f: Le },
    13: { n: "PtgGt", f: Le },
    14: { n: "PtgNe", f: Le },
    15: { n: "PtgIsect", f: Le },
    16: { n: "PtgUnion", f: Le },
    17: { n: "PtgRange", f: Le },
    18: { n: "PtgUplus", f: Le },
    19: { n: "PtgUminus", f: Le },
    20: { n: "PtgPercent", f: Le },
    21: { n: "PtgParen", f: Le },
    22: { n: "PtgMissArg", f: Le },
    23: { n: "PtgStr", f: Ch },
    26: { n: "PtgSheet", f: ex },
    27: { n: "PtgEndSheet", f: rx },
    28: { n: "PtgErr", f: Ah },
    29: { n: "PtgBool", f: Fh },
    30: { n: "PtgInt", f: Sh },
    31: { n: "PtgNum", f: yh },
    32: { n: "PtgArray", f: fh },
    33: { n: "PtgFunc", f: _h },
    34: { n: "PtgFuncVar", f: Th },
    35: { n: "PtgName", f: Ih },
    36: { n: "PtgRef", f: ph },
    37: { n: "PtgArea", f: th },
    38: { n: "PtgMemArea", f: Lh },
    39: { n: "PtgMemErr", f: Uh },
    40: { n: "PtgMemNoMem", f: Hh },
    41: { n: "PtgMemFunc", f: Mh },
    42: { n: "PtgRefErr", f: bh },
    43: { n: "PtgAreaErr", f: ih },
    44: { n: "PtgRefN", f: gh },
    45: { n: "PtgAreaN", f: ch },
    46: { n: "PtgMemAreaN", f: ax },
    47: { n: "PtgMemNoMemN", f: tx },
    57: { n: "PtgNameX", f: Nh },
    58: { n: "PtgRef3d", f: mh },
    59: { n: "PtgArea3d", f: nh },
    60: { n: "PtgRefErr3d", f: Bh },
    61: { n: "PtgAreaErr3d", f: sh },
    255: {},
  },
  ix = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 },
  sx = { 1: { n: "PtgElfLel", f: Ps }, 2: { n: "PtgElfRw", f: Yh }, 3: { n: "PtgElfCol", f: Wh }, 6: { n: "PtgElfRwV", f: Jh }, 7: { n: "PtgElfColV", f: $h }, 10: { n: "PtgElfRadical", f: zh }, 11: { n: "PtgElfRadicalS", f: Kh }, 13: { n: "PtgElfColS", f: Gh }, 15: { n: "PtgElfColSV", f: Xh }, 16: { n: "PtgElfRadicalLel", f: jh }, 25: { n: "PtgList", f: Zh }, 29: { n: "PtgSxName", f: Qh }, 255: {} },
  cx = { 0: { n: "PtgAttrNoop", f: nx }, 1: { n: "PtgAttrSemi", f: xh }, 2: { n: "PtgAttrIf", f: uh }, 4: { n: "PtgAttrChoose", f: oh }, 8: { n: "PtgAttrGoto", f: lh }, 16: { n: "PtgAttrSum", f: kh }, 32: { n: "PtgAttrBaxcel", f: Zn }, 33: { n: "PtgAttrBaxcel", f: Zn }, 64: { n: "PtgAttrSpace", f: dh }, 65: { n: "PtgAttrSpaceSemi", f: vh }, 128: { n: "PtgAttrIfError", f: hh }, 255: {} };
function xt(e, a, r, n) {
  if (n.biff < 8) return nr(e, a);
  for (var t = e.l + a, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case "PtgArray":
        (r[s][1] = Dh(e, 0, n)), i.push(r[s][1]);
        break;
      case "PtgMemArea":
        (r[s][2] = Rh(e, r[s][1], n)), i.push(r[s][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && ((r[s][1][1] = e.read_shift(4)), i.push(r[s][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[s][0];
    }
  return (a = t - e.l), a !== 0 && i.push(nr(e, a)), i;
}
function dt(e, a, r) {
  for (var n = e.l + a, t, i, s = []; n != e.l; ) (a = n - e.l), (i = e[e.l]), (t = Qn[i] || Qn[ix[i]]), (i === 24 || i === 25) && (t = (i === 24 ? sx : cx)[e[e.l + 1]]), !t || !t.f ? nr(e, a) : s.push([t.n, t.f(e, a, r)]);
  return s;
}
function fx(e) {
  for (var a = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], t = [], i = 0; i < n.length; ++i) {
      var s = n[i];
      if (s)
        switch (s[0]) {
          case 2:
            t.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            t.push(s[1]);
        }
      else t.push("");
    }
    a.push(t.join(","));
  }
  return a.join(";");
}
var ox = { PtgAdd: "+", PtgConcat: "&", PtgDiv: "/", PtgEq: "=", PtgGe: ">=", PtgGt: ">", PtgLe: "<=", PtgLt: "<", PtgMul: "*", PtgNe: "<>", PtgPower: "^", PtgSub: "-" };
function lx(e, a) {
  if (!e && !(a && a.biff <= 5 && a.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Ls(e, a, r) {
  if (!e) return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[a])) return e.SheetNames[a];
  if (!e.XTI) return "SH33TJSERR6";
  var n = e.XTI[a];
  if (r.biff < 8) return a > 1e4 && (a -= 65536), a < 0 && (a = -a), a == 0 ? "" : e.XTI[a - 1];
  if (!n) return "SH33TJSERR1";
  var t = "";
  if (r.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return (t = n[1] == -1 ? "#REF" : e.SheetNames[n[1]]), n[1] == n[2] ? t : t + ":" + e.SheetNames[n[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[n[0]][0];
    }
  switch (e[n[0]][0][0]) {
    case 1025:
      return (t = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3"), n[1] == n[2] ? t : t + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]]
        .slice(1)
        .map(function (i) {
          return i.Name;
        })
        .join(";;");
    default:
      return e[n[0]][0][3] ? ((t = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4"), n[1] == n[2] ? t : t + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function ei(e, a, r) {
  var n = Ls(e, a, r);
  return n == "#REF" ? n : lx(n, r);
}
function Qe(e, a, r, n, t) {
  var i = (t && t.biff) || 8,
    s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    c = [],
    f,
    o,
    l,
    h = 0,
    u = 0,
    d,
    v = "";
  if (!e[0] || !e[0][0]) return "";
  for (var x = -1, g = "", A = 0, C = e[0].length; A < C; ++A) {
    var _ = e[0][A];
    switch (_[0]) {
      case "PtgUminus":
        c.push("-" + c.pop());
        break;
      case "PtgUplus":
        c.push("+" + c.pop());
        break;
      case "PtgPercent":
        c.push(c.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (((f = c.pop()), (o = c.pop()), x >= 0)) {
          switch (e[0][x][1][0]) {
            case 0:
              g = De(" ", e[0][x][1][1]);
              break;
            case 1:
              g = De("\r", e[0][x][1][1]);
              break;
            default:
              if (((g = ""), t.WTF)) throw new Error("Unexpected PtgAttrSpaceType " + e[0][x][1][0]);
          }
          (o = o + g), (x = -1);
        }
        c.push(o + ox[_[0]] + f);
        break;
      case "PtgIsect":
        (f = c.pop()), (o = c.pop()), c.push(o + " " + f);
        break;
      case "PtgUnion":
        (f = c.pop()), (o = c.pop()), c.push(o + "," + f);
        break;
      case "PtgRange":
        (f = c.pop()), (o = c.pop()), c.push(o + ":" + f);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        (l = ja(_[1][1], s, t)), c.push(Ka(l, i));
        break;
      case "PtgRefN":
        (l = r ? ja(_[1][1], r, t) : _[1][1]), c.push(Ka(l, i));
        break;
      case "PtgRef3d":
        (h = _[1][1]), (l = ja(_[1][2], s, t)), (v = ei(n, h, t)), c.push(v + "!" + Ka(l, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var D = _[1][0],
          b = _[1][1];
        D || (D = 0), (D &= 127);
        var N = D == 0 ? [] : c.slice(-D);
        (c.length -= D), b === "User" && (b = N.shift()), c.push(b + "(" + N.join(",") + ")");
        break;
      case "PtgBool":
        c.push(_[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        c.push(_[1]);
        break;
      case "PtgNum":
        c.push(String(_[1]));
        break;
      case "PtgStr":
        c.push('"' + _[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        c.push(_[1]);
        break;
      case "PtgAreaN":
        (d = Pn(_[1][1], r ? { s: r } : s, t)), c.push(Zt(d, t));
        break;
      case "PtgArea":
        (d = Pn(_[1][1], s, t)), c.push(Zt(d, t));
        break;
      case "PtgArea3d":
        (h = _[1][1]), (d = _[1][2]), (v = ei(n, h, t)), c.push(v + "!" + Zt(d, t));
        break;
      case "PtgAttrSum":
        c.push("SUM(" + c.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        u = _[1][2];
        var S = (n.names || [])[u - 1] || (n[0] || [])[u],
          H = S ? S.Name : "SH33TJSNAME" + String(u);
        H && H.slice(0, 6) == "_xlfn." && !t.xlfn && (H = H.slice(6)), c.push(H);
        break;
      case "PtgNameX":
        var O = _[1][1];
        u = _[1][2];
        var X;
        if (t.biff <= 5) O < 0 && (O = -O), n[O] && (X = n[O][u]);
        else {
          var V = "";
          if ((((n[O] || [])[0] || [])[0] == 14849 || (((n[O] || [])[0] || [])[0] == 1025 ? n[O][u] && n[O][u].itab > 0 && (V = n.SheetNames[n[O][u].itab - 1] + "!") : (V = n.SheetNames[u - 1] + "!")), n[O] && n[O][u])) V += n[O][u].Name;
          else if (n[0] && n[0][u]) V += n[0][u].Name;
          else {
            var P = (Ls(n, O, t) || "").split(";;");
            P[u - 1] ? (V = P[u - 1]) : (V += "SH33TJSERRX");
          }
          c.push(V);
          break;
        }
        X || (X = { Name: "SH33TJSERRY" }), c.push(X.Name);
        break;
      case "PtgParen":
        var K = "(",
          oe = ")";
        if (x >= 0) {
          switch (((g = ""), e[0][x][1][0])) {
            case 2:
              K = De(" ", e[0][x][1][1]) + K;
              break;
            case 3:
              K = De("\r", e[0][x][1][1]) + K;
              break;
            case 4:
              oe = De(" ", e[0][x][1][1]) + oe;
              break;
            case 5:
              oe = De("\r", e[0][x][1][1]) + oe;
              break;
            default:
              if (t.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][x][1][0]);
          }
          x = -1;
        }
        c.push(K + c.pop() + oe);
        break;
      case "PtgRefErr":
        c.push("#REF!");
        break;
      case "PtgRefErr3d":
        c.push("#REF!");
        break;
      case "PtgExp":
        l = { c: _[1][1], r: _[1][0] };
        var re = { c: r.c, r: r.r };
        if (n.sharedf[ve(l)]) {
          var fe = n.sharedf[ve(l)];
          c.push(Qe(fe, s, re, n, t));
        } else {
          var ie = !1;
          for (f = 0; f != n.arrayf.length; ++f)
            if (((o = n.arrayf[f]), !(l.c < o[0].s.c || l.c > o[0].e.c) && !(l.r < o[0].s.r || l.r > o[0].e.r))) {
              c.push(Qe(o[1], s, re, n, t)), (ie = !0);
              break;
            }
          ie || c.push(_[1]);
        }
        break;
      case "PtgArray":
        c.push("{" + fx(_[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        x = A;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        c.push("");
        break;
      case "PtgAreaErr":
        c.push("#REF!");
        break;
      case "PtgAreaErr3d":
        c.push("#REF!");
        break;
      case "PtgList":
        c.push("Table" + _[1].idx + "[#" + _[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(_));
      default:
        throw new Error("Unrecognized Formula Token: " + String(_));
    }
    var Ae = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (t.biff != 3 && x >= 0 && Ae.indexOf(e[0][A][0]) == -1) {
      _ = e[0][x];
      var G = !0;
      switch (_[1][0]) {
        case 4:
          G = !1;
        case 0:
          g = De(" ", _[1][1]);
          break;
        case 5:
          G = !1;
        case 1:
          g = De("\r", _[1][1]);
          break;
        default:
          if (((g = ""), t.WTF)) throw new Error("Unexpected PtgAttrSpaceType " + _[1][0]);
      }
      c.push((G ? g : "") + c.pop() + (G ? "" : g)), (x = -1);
    }
  }
  if (c.length > 1 && t.WTF) throw new Error("bad formula stack");
  return c[0];
}
function ux(e, a, r) {
  var n = e.l + a,
    t = r.biff == 2 ? 1 : 2,
    i,
    s = e.read_shift(t);
  if (s == 65535) return [[], nr(e, a - 2)];
  var c = dt(e, s, r);
  return a !== s + t && (i = xt(e, a - s - t, c, r)), (e.l = n), [c, i];
}
function hx(e, a, r) {
  var n = e.l + a,
    t = r.biff == 2 ? 1 : 2,
    i,
    s = e.read_shift(t);
  if (s == 65535) return [[], nr(e, a - 2)];
  var c = dt(e, s, r);
  return a !== s + t && (i = xt(e, a - s - t, c, r)), (e.l = n), [c, i];
}
function xx(e, a, r, n) {
  var t = e.l + a,
    i = dt(e, n, r),
    s;
  return t !== e.l && (s = xt(e, t - e.l, i, r)), [i, s];
}
function dx(e, a, r) {
  var n = e.l + a,
    t,
    i = e.read_shift(2),
    s = dt(e, i, r);
  return i == 65535 ? [[], nr(e, a - 2)] : (a !== i + 2 && (t = xt(e, n - i - 2, s, r)), [s, t]);
}
function vx(e) {
  var a;
  if (Xr(e, e.l + 6) !== 65535) return [rr(e), "n"];
  switch (e[e.l]) {
    case 0:
      return (e.l += 8), ["String", "s"];
    case 1:
      return (a = e[e.l + 2] === 1), (e.l += 8), [a, "b"];
    case 2:
      return (a = e[e.l + 2]), (e.l += 8), [a, "e"];
    case 3:
      return (e.l += 8), ["", "s"];
  }
  return [];
}
function r0(e, a, r) {
  var n = e.l + a,
    t = Hr(e);
  r.biff == 2 && ++e.l;
  var i = vx(e),
    s = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var c = hx(e, n - e.l, r);
  return { cell: t, val: i[0], formula: c, shared: (s >> 3) & 1, tt: i[1] };
}
function Vt(e, a, r) {
  var n = e.read_shift(4),
    t = dt(e, n, r),
    i = e.read_shift(4),
    s = i > 0 ? xt(e, i, t, r) : null;
  return [t, s];
}
var px = Vt,
  Wt = Vt,
  gx = Vt,
  mx = Vt,
  _x = {
    0: "BEEP",
    1: "OPEN",
    2: "OPEN.LINKS",
    3: "CLOSE.ALL",
    4: "SAVE",
    5: "SAVE.AS",
    6: "FILE.DELETE",
    7: "PAGE.SETUP",
    8: "PRINT",
    9: "PRINTER.SETUP",
    10: "QUIT",
    11: "NEW.WINDOW",
    12: "ARRANGE.ALL",
    13: "WINDOW.SIZE",
    14: "WINDOW.MOVE",
    15: "FULL",
    16: "CLOSE",
    17: "RUN",
    22: "SET.PRINT.AREA",
    23: "SET.PRINT.TITLES",
    24: "SET.PAGE.BREAK",
    25: "REMOVE.PAGE.BREAK",
    26: "FONT",
    27: "DISPLAY",
    28: "PROTECT.DOCUMENT",
    29: "PRECISION",
    30: "A1.R1C1",
    31: "CALCULATE.NOW",
    32: "CALCULATION",
    34: "DATA.FIND",
    35: "EXTRACT",
    36: "DATA.DELETE",
    37: "SET.DATABASE",
    38: "SET.CRITERIA",
    39: "SORT",
    40: "DATA.SERIES",
    41: "TABLE",
    42: "FORMAT.NUMBER",
    43: "ALIGNMENT",
    44: "STYLE",
    45: "BORDER",
    46: "CELL.PROTECTION",
    47: "COLUMN.WIDTH",
    48: "UNDO",
    49: "CUT",
    50: "COPY",
    51: "PASTE",
    52: "CLEAR",
    53: "PASTE.SPECIAL",
    54: "EDIT.DELETE",
    55: "INSERT",
    56: "FILL.RIGHT",
    57: "FILL.DOWN",
    61: "DEFINE.NAME",
    62: "CREATE.NAMES",
    63: "FORMULA.GOTO",
    64: "FORMULA.FIND",
    65: "SELECT.LAST.CELL",
    66: "SHOW.ACTIVE.CELL",
    67: "GALLERY.AREA",
    68: "GALLERY.BAR",
    69: "GALLERY.COLUMN",
    70: "GALLERY.LINE",
    71: "GALLERY.PIE",
    72: "GALLERY.SCATTER",
    73: "COMBINATION",
    74: "PREFERRED",
    75: "ADD.OVERLAY",
    76: "GRIDLINES",
    77: "SET.PREFERRED",
    78: "AXES",
    79: "LEGEND",
    80: "ATTACH.TEXT",
    81: "ADD.ARROW",
    82: "SELECT.CHART",
    83: "SELECT.PLOT.AREA",
    84: "PATTERNS",
    85: "MAIN.CHART",
    86: "OVERLAY",
    87: "SCALE",
    88: "FORMAT.LEGEND",
    89: "FORMAT.TEXT",
    90: "EDIT.REPEAT",
    91: "PARSE",
    92: "JUSTIFY",
    93: "HIDE",
    94: "UNHIDE",
    95: "WORKSPACE",
    96: "FORMULA",
    97: "FORMULA.FILL",
    98: "FORMULA.ARRAY",
    99: "DATA.FIND.NEXT",
    100: "DATA.FIND.PREV",
    101: "FORMULA.FIND.NEXT",
    102: "FORMULA.FIND.PREV",
    103: "ACTIVATE",
    104: "ACTIVATE.NEXT",
    105: "ACTIVATE.PREV",
    106: "UNLOCKED.NEXT",
    107: "UNLOCKED.PREV",
    108: "COPY.PICTURE",
    109: "SELECT",
    110: "DELETE.NAME",
    111: "DELETE.FORMAT",
    112: "VLINE",
    113: "HLINE",
    114: "VPAGE",
    115: "HPAGE",
    116: "VSCROLL",
    117: "HSCROLL",
    118: "ALERT",
    119: "NEW",
    120: "CANCEL.COPY",
    121: "SHOW.CLIPBOARD",
    122: "MESSAGE",
    124: "PASTE.LINK",
    125: "APP.ACTIVATE",
    126: "DELETE.ARROW",
    127: "ROW.HEIGHT",
    128: "FORMAT.MOVE",
    129: "FORMAT.SIZE",
    130: "FORMULA.REPLACE",
    131: "SEND.KEYS",
    132: "SELECT.SPECIAL",
    133: "APPLY.NAMES",
    134: "REPLACE.FONT",
    135: "FREEZE.PANES",
    136: "SHOW.INFO",
    137: "SPLIT",
    138: "ON.WINDOW",
    139: "ON.DATA",
    140: "DISABLE.INPUT",
    142: "OUTLINE",
    143: "LIST.NAMES",
    144: "FILE.CLOSE",
    145: "SAVE.WORKBOOK",
    146: "DATA.FORM",
    147: "COPY.CHART",
    148: "ON.TIME",
    149: "WAIT",
    150: "FORMAT.FONT",
    151: "FILL.UP",
    152: "FILL.LEFT",
    153: "DELETE.OVERLAY",
    155: "SHORT.MENUS",
    159: "SET.UPDATE.STATUS",
    161: "COLOR.PALETTE",
    162: "DELETE.STYLE",
    163: "WINDOW.RESTORE",
    164: "WINDOW.MAXIMIZE",
    166: "CHANGE.LINK",
    167: "CALCULATE.DOCUMENT",
    168: "ON.KEY",
    169: "APP.RESTORE",
    170: "APP.MOVE",
    171: "APP.SIZE",
    172: "APP.MINIMIZE",
    173: "APP.MAXIMIZE",
    174: "BRING.TO.FRONT",
    175: "SEND.TO.BACK",
    185: "MAIN.CHART.TYPE",
    186: "OVERLAY.CHART.TYPE",
    187: "SELECT.END",
    188: "OPEN.MAIL",
    189: "SEND.MAIL",
    190: "STANDARD.FONT",
    191: "CONSOLIDATE",
    192: "SORT.SPECIAL",
    193: "GALLERY.3D.AREA",
    194: "GALLERY.3D.COLUMN",
    195: "GALLERY.3D.LINE",
    196: "GALLERY.3D.PIE",
    197: "VIEW.3D",
    198: "GOAL.SEEK",
    199: "WORKGROUP",
    200: "FILL.GROUP",
    201: "UPDATE.LINK",
    202: "PROMOTE",
    203: "DEMOTE",
    204: "SHOW.DETAIL",
    206: "UNGROUP",
    207: "OBJECT.PROPERTIES",
    208: "SAVE.NEW.OBJECT",
    209: "SHARE",
    210: "SHARE.NAME",
    211: "DUPLICATE",
    212: "APPLY.STYLE",
    213: "ASSIGN.TO.OBJECT",
    214: "OBJECT.PROTECTION",
    215: "HIDE.OBJECT",
    216: "SET.EXTRACT",
    217: "CREATE.PUBLISHER",
    218: "SUBSCRIBE.TO",
    219: "ATTRIBUTES",
    220: "SHOW.TOOLBAR",
    222: "PRINT.PREVIEW",
    223: "EDIT.COLOR",
    224: "SHOW.LEVELS",
    225: "FORMAT.MAIN",
    226: "FORMAT.OVERLAY",
    227: "ON.RECALC",
    228: "EDIT.SERIES",
    229: "DEFINE.STYLE",
    240: "LINE.PRINT",
    243: "ENTER.DATA",
    249: "GALLERY.RADAR",
    250: "MERGE.STYLES",
    251: "EDITION.OPTIONS",
    252: "PASTE.PICTURE",
    253: "PASTE.PICTURE.LINK",
    254: "SPELLING",
    256: "ZOOM",
    259: "INSERT.OBJECT",
    260: "WINDOW.MINIMIZE",
    265: "SOUND.NOTE",
    266: "SOUND.PLAY",
    267: "FORMAT.SHAPE",
    268: "EXTEND.POLYGON",
    269: "FORMAT.AUTO",
    272: "GALLERY.3D.BAR",
    273: "GALLERY.3D.SURFACE",
    274: "FILL.AUTO",
    276: "CUSTOMIZE.TOOLBAR",
    277: "ADD.TOOL",
    278: "EDIT.OBJECT",
    279: "ON.DOUBLECLICK",
    280: "ON.ENTRY",
    281: "WORKBOOK.ADD",
    282: "WORKBOOK.MOVE",
    283: "WORKBOOK.COPY",
    284: "WORKBOOK.OPTIONS",
    285: "SAVE.WORKSPACE",
    288: "CHART.WIZARD",
    289: "DELETE.TOOL",
    290: "MOVE.TOOL",
    291: "WORKBOOK.SELECT",
    292: "WORKBOOK.ACTIVATE",
    293: "ASSIGN.TO.TOOL",
    295: "COPY.TOOL",
    296: "RESET.TOOL",
    297: "CONSTRAIN.NUMERIC",
    298: "PASTE.TOOL",
    302: "WORKBOOK.NEW",
    305: "SCENARIO.CELLS",
    306: "SCENARIO.DELETE",
    307: "SCENARIO.ADD",
    308: "SCENARIO.EDIT",
    309: "SCENARIO.SHOW",
    310: "SCENARIO.SHOW.NEXT",
    311: "SCENARIO.SUMMARY",
    312: "PIVOT.TABLE.WIZARD",
    313: "PIVOT.FIELD.PROPERTIES",
    314: "PIVOT.FIELD",
    315: "PIVOT.ITEM",
    316: "PIVOT.ADD.FIELDS",
    318: "OPTIONS.CALCULATION",
    319: "OPTIONS.EDIT",
    320: "OPTIONS.VIEW",
    321: "ADDIN.MANAGER",
    322: "MENU.EDITOR",
    323: "ATTACH.TOOLBARS",
    324: "VBAActivate",
    325: "OPTIONS.CHART",
    328: "VBA.INSERT.FILE",
    330: "VBA.PROCEDURE.DEFINITION",
    336: "ROUTING.SLIP",
    338: "ROUTE.DOCUMENT",
    339: "MAIL.LOGON",
    342: "INSERT.PICTURE",
    343: "EDIT.TOOL",
    344: "GALLERY.DOUGHNUT",
    350: "CHART.TREND",
    352: "PIVOT.ITEM.PROPERTIES",
    354: "WORKBOOK.INSERT",
    355: "OPTIONS.TRANSITION",
    356: "OPTIONS.GENERAL",
    370: "FILTER.ADVANCED",
    373: "MAIL.ADD.MAILER",
    374: "MAIL.DELETE.MAILER",
    375: "MAIL.REPLY",
    376: "MAIL.REPLY.ALL",
    377: "MAIL.FORWARD",
    378: "MAIL.NEXT.LETTER",
    379: "DATA.LABEL",
    380: "INSERT.TITLE",
    381: "FONT.PROPERTIES",
    382: "MACRO.OPTIONS",
    383: "WORKBOOK.HIDE",
    384: "WORKBOOK.UNHIDE",
    385: "WORKBOOK.DELETE",
    386: "WORKBOOK.NAME",
    388: "GALLERY.CUSTOM",
    390: "ADD.CHART.AUTOFORMAT",
    391: "DELETE.CHART.AUTOFORMAT",
    392: "CHART.ADD.DATA",
    393: "AUTO.OUTLINE",
    394: "TAB.ORDER",
    395: "SHOW.DIALOG",
    396: "SELECT.ALL",
    397: "UNGROUP.SHEETS",
    398: "SUBTOTAL.CREATE",
    399: "SUBTOTAL.REMOVE",
    400: "RENAME.OBJECT",
    412: "WORKBOOK.SCROLL",
    413: "WORKBOOK.NEXT",
    414: "WORKBOOK.PREV",
    415: "WORKBOOK.TAB.SPLIT",
    416: "FULL.SCREEN",
    417: "WORKBOOK.PROTECT",
    420: "SCROLLBAR.PROPERTIES",
    421: "PIVOT.SHOW.PAGES",
    422: "TEXT.TO.COLUMNS",
    423: "FORMAT.CHARTTYPE",
    424: "LINK.FORMAT",
    425: "TRACER.DISPLAY",
    430: "TRACER.NAVIGATE",
    431: "TRACER.CLEAR",
    432: "TRACER.ERROR",
    433: "PIVOT.FIELD.GROUP",
    434: "PIVOT.FIELD.UNGROUP",
    435: "CHECKBOX.PROPERTIES",
    436: "LABEL.PROPERTIES",
    437: "LISTBOX.PROPERTIES",
    438: "EDITBOX.PROPERTIES",
    439: "PIVOT.REFRESH",
    440: "LINK.COMBO",
    441: "OPEN.TEXT",
    442: "HIDE.DIALOG",
    443: "SET.DIALOG.FOCUS",
    444: "ENABLE.OBJECT",
    445: "PUSHBUTTON.PROPERTIES",
    446: "SET.DIALOG.DEFAULT",
    447: "FILTER",
    448: "FILTER.SHOW.ALL",
    449: "CLEAR.OUTLINE",
    450: "FUNCTION.WIZARD",
    451: "ADD.LIST.ITEM",
    452: "SET.LIST.ITEM",
    453: "REMOVE.LIST.ITEM",
    454: "SELECT.LIST.ITEM",
    455: "SET.CONTROL.VALUE",
    456: "SAVE.COPY.AS",
    458: "OPTIONS.LISTS.ADD",
    459: "OPTIONS.LISTS.DELETE",
    460: "SERIES.AXES",
    461: "SERIES.X",
    462: "SERIES.Y",
    463: "ERRORBAR.X",
    464: "ERRORBAR.Y",
    465: "FORMAT.CHART",
    466: "SERIES.ORDER",
    467: "MAIL.LOGOFF",
    468: "CLEAR.ROUTING.SLIP",
    469: "APP.ACTIVATE.MICROSOFT",
    470: "MAIL.EDIT.MAILER",
    471: "ON.SHEET",
    472: "STANDARD.WIDTH",
    473: "SCENARIO.MERGE",
    474: "SUMMARY.INFO",
    475: "FIND.FILE",
    476: "ACTIVE.CELL.FONT",
    477: "ENABLE.TIPWIZARD",
    478: "VBA.MAKE.ADDIN",
    480: "INSERTDATATABLE",
    481: "WORKGROUP.OPTIONS",
    482: "MAIL.SEND.MAILER",
    485: "AUTOCORRECT",
    489: "POST.DOCUMENT",
    491: "PICKLIST",
    493: "VIEW.SHOW",
    494: "VIEW.DEFINE",
    495: "VIEW.DELETE",
    509: "SHEET.BACKGROUND",
    510: "INSERT.MAP.OBJECT",
    511: "OPTIONS.MENONO",
    517: "MSOCHECKS",
    518: "NORMAL",
    519: "LAYOUT",
    520: "RM.PRINT.AREA",
    521: "CLEAR.PRINT.AREA",
    522: "ADD.PRINT.AREA",
    523: "MOVE.BRK",
    545: "HIDECURR.NOTE",
    546: "HIDEALL.NOTES",
    547: "DELETE.NOTE",
    548: "TRAVERSE.NOTES",
    549: "ACTIVATE.NOTES",
    620: "PROTECT.REVISIONS",
    621: "UNPROTECT.REVISIONS",
    647: "OPTIONS.ME",
    653: "WEB.PUBLISH",
    667: "NEWWEBQUERY",
    673: "PIVOT.TABLE.CHART",
    753: "OPTIONS.SAVE",
    755: "OPTIONS.SPELL",
    808: "HIDEALL.INKANNOTS",
  },
  Ms = {
    0: "COUNT",
    1: "IF",
    2: "ISNA",
    3: "ISERROR",
    4: "SUM",
    5: "AVERAGE",
    6: "MIN",
    7: "MAX",
    8: "ROW",
    9: "COLUMN",
    10: "NA",
    11: "NPV",
    12: "STDEV",
    13: "DOLLAR",
    14: "FIXED",
    15: "SIN",
    16: "COS",
    17: "TAN",
    18: "ATAN",
    19: "PI",
    20: "SQRT",
    21: "EXP",
    22: "LN",
    23: "LOG10",
    24: "ABS",
    25: "INT",
    26: "SIGN",
    27: "ROUND",
    28: "LOOKUP",
    29: "INDEX",
    30: "REPT",
    31: "MID",
    32: "LEN",
    33: "VALUE",
    34: "TRUE",
    35: "FALSE",
    36: "AND",
    37: "OR",
    38: "NOT",
    39: "MOD",
    40: "DCOUNT",
    41: "DSUM",
    42: "DAVERAGE",
    43: "DMIN",
    44: "DMAX",
    45: "DSTDEV",
    46: "VAR",
    47: "DVAR",
    48: "TEXT",
    49: "LINEST",
    50: "TREND",
    51: "LOGEST",
    52: "GROWTH",
    53: "GOTO",
    54: "HALT",
    55: "RETURN",
    56: "PV",
    57: "FV",
    58: "NPER",
    59: "PMT",
    60: "RATE",
    61: "MIRR",
    62: "IRR",
    63: "RAND",
    64: "MATCH",
    65: "DATE",
    66: "TIME",
    67: "DAY",
    68: "MONTH",
    69: "YEAR",
    70: "WEEKDAY",
    71: "HOUR",
    72: "MINUTE",
    73: "SECOND",
    74: "NOW",
    75: "AREAS",
    76: "ROWS",
    77: "COLUMNS",
    78: "OFFSET",
    79: "ABSREF",
    80: "RELREF",
    81: "ARGUMENT",
    82: "SEARCH",
    83: "TRANSPOSE",
    84: "ERROR",
    85: "STEP",
    86: "TYPE",
    87: "ECHO",
    88: "SET.NAME",
    89: "CALLER",
    90: "DEREF",
    91: "WINDOWS",
    92: "SERIES",
    93: "DOCUMENTS",
    94: "ACTIVE.CELL",
    95: "SELECTION",
    96: "RESULT",
    97: "ATAN2",
    98: "ASIN",
    99: "ACOS",
    100: "CHOOSE",
    101: "HLOOKUP",
    102: "VLOOKUP",
    103: "LINKS",
    104: "INPUT",
    105: "ISREF",
    106: "GET.FORMULA",
    107: "GET.NAME",
    108: "SET.VALUE",
    109: "LOG",
    110: "EXEC",
    111: "CHAR",
    112: "LOWER",
    113: "UPPER",
    114: "PROPER",
    115: "LEFT",
    116: "RIGHT",
    117: "EXACT",
    118: "TRIM",
    119: "REPLACE",
    120: "SUBSTITUTE",
    121: "CODE",
    122: "NAMES",
    123: "DIRECTORY",
    124: "FIND",
    125: "CELL",
    126: "ISERR",
    127: "ISTEXT",
    128: "ISNUMBER",
    129: "ISBLANK",
    130: "T",
    131: "N",
    132: "FOPEN",
    133: "FCLOSE",
    134: "FSIZE",
    135: "FREADLN",
    136: "FREAD",
    137: "FWRITELN",
    138: "FWRITE",
    139: "FPOS",
    140: "DATEVALUE",
    141: "TIMEVALUE",
    142: "SLN",
    143: "SYD",
    144: "DDB",
    145: "GET.DEF",
    146: "REFTEXT",
    147: "TEXTREF",
    148: "INDIRECT",
    149: "REGISTER",
    150: "CALL",
    151: "ADD.BAR",
    152: "ADD.MENU",
    153: "ADD.COMMAND",
    154: "ENABLE.COMMAND",
    155: "CHECK.COMMAND",
    156: "RENAME.COMMAND",
    157: "SHOW.BAR",
    158: "DELETE.MENU",
    159: "DELETE.COMMAND",
    160: "GET.CHART.ITEM",
    161: "DIALOG.BOX",
    162: "CLEAN",
    163: "MDETERM",
    164: "MINVERSE",
    165: "MMULT",
    166: "FILES",
    167: "IPMT",
    168: "PPMT",
    169: "COUNTA",
    170: "CANCEL.KEY",
    171: "FOR",
    172: "WHILE",
    173: "BREAK",
    174: "NEXT",
    175: "INITIATE",
    176: "REQUEST",
    177: "POKE",
    178: "EXECUTE",
    179: "TERMINATE",
    180: "RESTART",
    181: "HELP",
    182: "GET.BAR",
    183: "PRODUCT",
    184: "FACT",
    185: "GET.CELL",
    186: "GET.WORKSPACE",
    187: "GET.WINDOW",
    188: "GET.DOCUMENT",
    189: "DPRODUCT",
    190: "ISNONTEXT",
    191: "GET.NOTE",
    192: "NOTE",
    193: "STDEVP",
    194: "VARP",
    195: "DSTDEVP",
    196: "DVARP",
    197: "TRUNC",
    198: "ISLOGICAL",
    199: "DCOUNTA",
    200: "DELETE.BAR",
    201: "UNREGISTER",
    204: "USDOLLAR",
    205: "FINDB",
    206: "SEARCHB",
    207: "REPLACEB",
    208: "LEFTB",
    209: "RIGHTB",
    210: "MIDB",
    211: "LENB",
    212: "ROUNDUP",
    213: "ROUNDDOWN",
    214: "ASC",
    215: "DBCS",
    216: "RANK",
    219: "ADDRESS",
    220: "DAYS360",
    221: "TODAY",
    222: "VDB",
    223: "ELSE",
    224: "ELSE.IF",
    225: "END.IF",
    226: "FOR.CELL",
    227: "MEDIAN",
    228: "SUMPRODUCT",
    229: "SINH",
    230: "COSH",
    231: "TANH",
    232: "ASINH",
    233: "ACOSH",
    234: "ATANH",
    235: "DGET",
    236: "CREATE.OBJECT",
    237: "VOLATILE",
    238: "LAST.ERROR",
    239: "CUSTOM.UNDO",
    240: "CUSTOM.REPEAT",
    241: "FORMULA.CONVERT",
    242: "GET.LINK.INFO",
    243: "TEXT.BOX",
    244: "INFO",
    245: "GROUP",
    246: "GET.OBJECT",
    247: "DB",
    248: "PAUSE",
    251: "RESUME",
    252: "FREQUENCY",
    253: "ADD.TOOLBAR",
    254: "DELETE.TOOLBAR",
    255: "User",
    256: "RESET.TOOLBAR",
    257: "EVALUATE",
    258: "GET.TOOLBAR",
    259: "GET.TOOL",
    260: "SPELLING.CHECK",
    261: "ERROR.TYPE",
    262: "APP.TITLE",
    263: "WINDOW.TITLE",
    264: "SAVE.TOOLBAR",
    265: "ENABLE.TOOL",
    266: "PRESS.TOOL",
    267: "REGISTER.ID",
    268: "GET.WORKBOOK",
    269: "AVEDEV",
    270: "BETADIST",
    271: "GAMMALN",
    272: "BETAINV",
    273: "BINOMDIST",
    274: "CHIDIST",
    275: "CHIINV",
    276: "COMBIN",
    277: "CONFIDENCE",
    278: "CRITBINOM",
    279: "EVEN",
    280: "EXPONDIST",
    281: "FDIST",
    282: "FINV",
    283: "FISHER",
    284: "FISHERINV",
    285: "FLOOR",
    286: "GAMMADIST",
    287: "GAMMAINV",
    288: "CEILING",
    289: "HYPGEOMDIST",
    290: "LOGNORMDIST",
    291: "LOGINV",
    292: "NEGBINOMDIST",
    293: "NORMDIST",
    294: "NORMSDIST",
    295: "NORMINV",
    296: "NORMSINV",
    297: "STANDARDIZE",
    298: "ODD",
    299: "PERMUT",
    300: "POISSON",
    301: "TDIST",
    302: "WEIBULL",
    303: "SUMXMY2",
    304: "SUMX2MY2",
    305: "SUMX2PY2",
    306: "CHITEST",
    307: "CORREL",
    308: "COVAR",
    309: "FORECAST",
    310: "FTEST",
    311: "INTERCEPT",
    312: "PEARSON",
    313: "RSQ",
    314: "STEYX",
    315: "SLOPE",
    316: "TTEST",
    317: "PROB",
    318: "DEVSQ",
    319: "GEOMEAN",
    320: "HARMEAN",
    321: "SUMSQ",
    322: "KURT",
    323: "SKEW",
    324: "ZTEST",
    325: "LARGE",
    326: "SMALL",
    327: "QUARTILE",
    328: "PERCENTILE",
    329: "PERCENTRANK",
    330: "MODE",
    331: "TRIMMEAN",
    332: "TINV",
    334: "MOVIE.COMMAND",
    335: "GET.MOVIE",
    336: "CONCATENATE",
    337: "POWER",
    338: "PIVOT.ADD.DATA",
    339: "GET.PIVOT.TABLE",
    340: "GET.PIVOT.FIELD",
    341: "GET.PIVOT.ITEM",
    342: "RADIANS",
    343: "DEGREES",
    344: "SUBTOTAL",
    345: "SUMIF",
    346: "COUNTIF",
    347: "COUNTBLANK",
    348: "SCENARIO.GET",
    349: "OPTIONS.LISTS.GET",
    350: "ISPMT",
    351: "DATEDIF",
    352: "DATESTRING",
    353: "NUMBERSTRING",
    354: "ROMAN",
    355: "OPEN.DIALOG",
    356: "SAVE.DIALOG",
    357: "VIEW.GET",
    358: "GETPIVOTDATA",
    359: "HYPERLINK",
    360: "PHONETIC",
    361: "AVERAGEA",
    362: "MAXA",
    363: "MINA",
    364: "STDEVPA",
    365: "VARPA",
    366: "STDEVA",
    367: "VARA",
    368: "BAHTTEXT",
    369: "THAIDAYOFWEEK",
    370: "THAIDIGIT",
    371: "THAIMONTHOFYEAR",
    372: "THAINUMSOUND",
    373: "THAINUMSTRING",
    374: "THAISTRINGLENGTH",
    375: "ISTHAIDIGIT",
    376: "ROUNDBAHTDOWN",
    377: "ROUNDBAHTUP",
    378: "THAIYEAR",
    379: "RTD",
    380: "CUBEVALUE",
    381: "CUBEMEMBER",
    382: "CUBEMEMBERPROPERTY",
    383: "CUBERANKEDMEMBER",
    384: "HEX2BIN",
    385: "HEX2DEC",
    386: "HEX2OCT",
    387: "DEC2BIN",
    388: "DEC2HEX",
    389: "DEC2OCT",
    390: "OCT2BIN",
    391: "OCT2HEX",
    392: "OCT2DEC",
    393: "BIN2DEC",
    394: "BIN2OCT",
    395: "BIN2HEX",
    396: "IMSUB",
    397: "IMDIV",
    398: "IMPOWER",
    399: "IMABS",
    400: "IMSQRT",
    401: "IMLN",
    402: "IMLOG2",
    403: "IMLOG10",
    404: "IMSIN",
    405: "IMCOS",
    406: "IMEXP",
    407: "IMARGUMENT",
    408: "IMCONJUGATE",
    409: "IMAGINARY",
    410: "IMREAL",
    411: "COMPLEX",
    412: "IMSUM",
    413: "IMPRODUCT",
    414: "SERIESSUM",
    415: "FACTDOUBLE",
    416: "SQRTPI",
    417: "QUOTIENT",
    418: "DELTA",
    419: "GESTEP",
    420: "ISEVEN",
    421: "ISODD",
    422: "MROUND",
    423: "ERF",
    424: "ERFC",
    425: "BESSELJ",
    426: "BESSELK",
    427: "BESSELY",
    428: "BESSELI",
    429: "XIRR",
    430: "XNPV",
    431: "PRICEMAT",
    432: "YIELDMAT",
    433: "INTRATE",
    434: "RECEIVED",
    435: "DISC",
    436: "PRICEDISC",
    437: "YIELDDISC",
    438: "TBILLEQ",
    439: "TBILLPRICE",
    440: "TBILLYIELD",
    441: "PRICE",
    442: "YIELD",
    443: "DOLLARDE",
    444: "DOLLARFR",
    445: "NOMINAL",
    446: "EFFECT",
    447: "CUMPRINC",
    448: "CUMIPMT",
    449: "EDATE",
    450: "EOMONTH",
    451: "YEARFRAC",
    452: "COUPDAYBS",
    453: "COUPDAYS",
    454: "COUPDAYSNC",
    455: "COUPNCD",
    456: "COUPNUM",
    457: "COUPPCD",
    458: "DURATION",
    459: "MDURATION",
    460: "ODDLPRICE",
    461: "ODDLYIELD",
    462: "ODDFPRICE",
    463: "ODDFYIELD",
    464: "RANDBETWEEN",
    465: "WEEKNUM",
    466: "AMORDEGRC",
    467: "AMORLINC",
    468: "CONVERT",
    724: "SHEETJS",
    469: "ACCRINT",
    470: "ACCRINTM",
    471: "WORKDAY",
    472: "NETWORKDAYS",
    473: "GCD",
    474: "MULTINOMIAL",
    475: "LCM",
    476: "FVSCHEDULE",
    477: "CUBEKPIMEMBER",
    478: "CUBESET",
    479: "CUBESETCOUNT",
    480: "IFERROR",
    481: "COUNTIFS",
    482: "SUMIFS",
    483: "AVERAGEIF",
    484: "AVERAGEIFS",
  },
  Tx = {
    2: 1,
    3: 1,
    10: 0,
    15: 1,
    16: 1,
    17: 1,
    18: 1,
    19: 0,
    20: 1,
    21: 1,
    22: 1,
    23: 1,
    24: 1,
    25: 1,
    26: 1,
    27: 2,
    30: 2,
    31: 3,
    32: 1,
    33: 1,
    34: 0,
    35: 0,
    38: 1,
    39: 2,
    40: 3,
    41: 3,
    42: 3,
    43: 3,
    44: 3,
    45: 3,
    47: 3,
    48: 2,
    53: 1,
    61: 3,
    63: 0,
    65: 3,
    66: 3,
    67: 1,
    68: 1,
    69: 1,
    70: 1,
    71: 1,
    72: 1,
    73: 1,
    74: 0,
    75: 1,
    76: 1,
    77: 1,
    79: 2,
    80: 2,
    83: 1,
    85: 0,
    86: 1,
    89: 0,
    90: 1,
    94: 0,
    95: 0,
    97: 2,
    98: 1,
    99: 1,
    101: 3,
    102: 3,
    105: 1,
    106: 1,
    108: 2,
    111: 1,
    112: 1,
    113: 1,
    114: 1,
    117: 2,
    118: 1,
    119: 4,
    121: 1,
    126: 1,
    127: 1,
    128: 1,
    129: 1,
    130: 1,
    131: 1,
    133: 1,
    134: 1,
    135: 1,
    136: 2,
    137: 2,
    138: 2,
    140: 1,
    141: 1,
    142: 3,
    143: 4,
    144: 4,
    161: 1,
    162: 1,
    163: 1,
    164: 1,
    165: 2,
    172: 1,
    175: 2,
    176: 2,
    177: 3,
    178: 2,
    179: 1,
    184: 1,
    186: 1,
    189: 3,
    190: 1,
    195: 3,
    196: 3,
    197: 1,
    198: 1,
    199: 3,
    201: 1,
    207: 4,
    210: 3,
    211: 1,
    212: 2,
    213: 2,
    214: 1,
    215: 1,
    225: 0,
    229: 1,
    230: 1,
    231: 1,
    232: 1,
    233: 1,
    234: 1,
    235: 3,
    244: 1,
    247: 4,
    252: 2,
    257: 1,
    261: 1,
    271: 1,
    273: 4,
    274: 2,
    275: 2,
    276: 2,
    277: 3,
    278: 3,
    279: 1,
    280: 3,
    281: 3,
    282: 3,
    283: 1,
    284: 1,
    285: 2,
    286: 4,
    287: 3,
    288: 2,
    289: 4,
    290: 3,
    291: 3,
    292: 3,
    293: 4,
    294: 1,
    295: 3,
    296: 1,
    297: 3,
    298: 1,
    299: 2,
    300: 3,
    301: 3,
    302: 4,
    303: 2,
    304: 2,
    305: 2,
    306: 2,
    307: 2,
    308: 2,
    309: 3,
    310: 2,
    311: 2,
    312: 2,
    313: 2,
    314: 2,
    315: 2,
    316: 4,
    325: 2,
    326: 2,
    327: 2,
    328: 2,
    331: 2,
    332: 2,
    337: 2,
    342: 1,
    343: 1,
    346: 2,
    347: 1,
    350: 4,
    351: 3,
    352: 1,
    353: 2,
    360: 1,
    368: 1,
    369: 1,
    370: 1,
    371: 1,
    372: 1,
    373: 1,
    374: 1,
    375: 1,
    376: 1,
    377: 1,
    378: 1,
    382: 3,
    385: 1,
    392: 1,
    393: 1,
    396: 2,
    397: 2,
    398: 2,
    399: 1,
    400: 1,
    401: 1,
    402: 1,
    403: 1,
    404: 1,
    405: 1,
    406: 1,
    407: 1,
    408: 1,
    409: 1,
    410: 1,
    414: 4,
    415: 1,
    416: 1,
    417: 2,
    420: 1,
    421: 1,
    422: 2,
    424: 1,
    425: 2,
    426: 2,
    427: 2,
    428: 2,
    430: 3,
    438: 3,
    439: 3,
    440: 3,
    443: 2,
    444: 2,
    445: 2,
    446: 2,
    447: 6,
    448: 6,
    449: 2,
    450: 2,
    464: 2,
    468: 3,
    476: 2,
    479: 1,
    480: 2,
    65535: 0,
  };
function ri(e) {
  return (
    e.slice(0, 3) == "of:" && (e = e.slice(3)),
    e.charCodeAt(0) == 61 && ((e = e.slice(1)), e.charCodeAt(0) == 61 && (e = e.slice(1))),
    (e = e.replace(/COM\.MICROSOFT\./g, "")),
    (e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function (a, r) {
      return r.replace(/\./g, "");
    })),
    (e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1")),
    e.replace(/[;~]/g, ",").replace(/\|/g, ";")
  );
}
function a0(e) {
  var a = e.split(":"),
    r = a[0].split(".")[0];
  return [r, a[0].split(".")[1] + (a.length > 1 ? ":" + (a[1].split(".")[1] || a[1].split(".")[0]) : "")];
}
var Za = {},
  Ra = {};
function Qa(e, a) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    a == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function bs(e, a, r, n, t, i) {
  try {
    n.cellNF && (e.z = ge[a]);
  } catch (c) {
    if (n.WTF) throw c;
  }
  if (!(e.t === "z" && !n.cellStyles)) {
    if ((e.t === "d" && typeof e.v == "string" && (e.v = $e(e.v)), (!n || n.cellText !== !1) && e.t !== "z"))
      try {
        if ((ge[a] == null && ha(Ef[a] || "General", a), e.t === "e")) e.w = e.w || Ea[e.v];
        else if (a === 0)
          if (e.t === "n") (e.v | 0) === e.v ? (e.w = e.v.toString(10)) : (e.w = rt(e.v));
          else if (e.t === "d") {
            var s = hr(e.v);
            (s | 0) === s ? (e.w = s.toString(10)) : (e.w = rt(s));
          } else {
            if (e.v === void 0) return "";
            e.w = da(e.v, Ra);
          }
        else e.t === "d" ? (e.w = Sr(a, hr(e.v), Ra)) : (e.w = Sr(a, e.v, Ra));
      } catch (c) {
        if (n.WTF) throw c;
      }
    if (n.cellStyles && r != null)
      try {
        (e.s = i.Fills[r]), e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && ((e.s.fgColor.rgb = Pt(t.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0)), n.WTF && (e.s.fgColor.raw_rgb = t.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && ((e.s.bgColor.rgb = Pt(t.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0)), n.WTF && (e.s.bgColor.raw_rgb = t.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (c) {
        if (n.WTF && i.Fills) throw c;
      }
  }
}
function Ex(e, a) {
  var r = Ie(a);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = ke(r));
}
var kx = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,
  wx = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,
  Ax = /<(?:\w:)?hyperlink [^>]*>/gm,
  Sx = /"(\w*:\w*)"/,
  Fx = /<(?:\w:)?col\b[^>]*[\/]?>/g,
  yx = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,
  Cx = /<(?:\w:)?pageMargins[^>]*\/>/g,
  Bs = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,
  Ox = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,
  Rx = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function Dx(e, a, r, n, t, i, s) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var c = a.dense ? [] : {},
    f = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    o = "",
    l = "",
    h = e.match(wx);
  h ? ((o = e.slice(0, h.index)), (l = e.slice(h.index + h[0].length))) : (o = l = e);
  var u = o.match(Bs);
  u ? V0(u[0], c, t, r) : (u = o.match(Ox)) && Ix(u[0], u[1] || "", c, t, r);
  var d = (o.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (d > 0) {
    var v = o.slice(d, d + 50).match(Sx);
    v && Ex(c, v[1]);
  }
  var x = o.match(Rx);
  x && x[1] && Bx(x[1], t);
  var g = [];
  if (a.cellStyles) {
    var A = o.match(Fx);
    A && Lx(g, A);
  }
  h && Ux(h[1], c, a, f, i, s);
  var C = l.match(yx);
  C && (c["!autofilter"] = Mx(C[0]));
  var _ = [],
    D = l.match(kx);
  if (D) for (d = 0; d != D.length; ++d) _[d] = Ie(D[d].slice(D[d].indexOf('"') + 1));
  var b = l.match(Ax);
  b && Nx(c, b, n);
  var N = l.match(Cx);
  if ((N && (c["!margins"] = Px(xe(N[0]))), !c["!ref"] && f.e.c >= f.s.c && f.e.r >= f.s.r && (c["!ref"] = ke(f)), a.sheetRows > 0 && c["!ref"])) {
    var S = Ie(c["!ref"]);
    a.sheetRows <= +S.e.r && ((S.e.r = a.sheetRows - 1), S.e.r > f.e.r && (S.e.r = f.e.r), S.e.r < S.s.r && (S.s.r = S.e.r), S.e.c > f.e.c && (S.e.c = f.e.c), S.e.c < S.s.c && (S.s.c = S.e.c), (c["!fullref"] = c["!ref"]), (c["!ref"] = ke(S)));
  }
  return g.length > 0 && (c["!cols"] = g), _.length > 0 && (c["!merges"] = _), c;
}
function V0(e, a, r, n) {
  var t = xe(e);
  r.Sheets[n] || (r.Sheets[n] = {}), t.codeName && (r.Sheets[n].CodeName = we(Se(t.codeName)));
}
function Ix(e, a, r, n, t) {
  V0(e.slice(0, e.indexOf(">")), r, n, t);
}
function Nx(e, a, r) {
  for (var n = Array.isArray(e), t = 0; t != a.length; ++t) {
    var i = xe(Se(a[t]), !0);
    if (!i.ref) return;
    var s = ((r || {})["!id"] || [])[i.id];
    s ? ((i.Target = s.Target), i.location && (i.Target += "#" + we(i.location))) : ((i.Target = "#" + we(i.location)), (s = { Target: i.Target, TargetMode: "Internal" })), (i.Rel = s), i.tooltip && ((i.Tooltip = i.tooltip), delete i.tooltip);
    for (var c = Ie(i.ref), f = c.s.r; f <= c.e.r; ++f)
      for (var o = c.s.c; o <= c.e.c; ++o) {
        var l = ve({ c: o, r: f });
        n ? (e[f] || (e[f] = []), e[f][o] || (e[f][o] = { t: "z", v: void 0 }), (e[f][o].l = i)) : (e[l] || (e[l] = { t: "z", v: void 0 }), (e[l].l = i));
      }
  }
}
function Px(e) {
  var a = {};
  return (
    ["left", "right", "top", "bottom", "header", "footer"].forEach(function (r) {
      e[r] && (a[r] = parseFloat(e[r]));
    }),
    a
  );
}
function Lx(e, a) {
  for (var r = !1, n = 0; n != a.length; ++n) {
    var t = xe(a[n], !0);
    t.hidden && (t.hidden = Ce(t.hidden));
    var i = parseInt(t.min, 10) - 1,
      s = parseInt(t.max, 10) - 1;
    for (t.outlineLevel && (t.level = +t.outlineLevel || 0), delete t.min, delete t.max, t.width = +t.width, !r && t.width && ((r = !0), U0(t.width)), Ia(t); i <= s; ) e[i++] = Ke(t);
  }
}
function Mx(e) {
  var a = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return a;
}
var bx = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function Bx(e, a) {
  a.Views || (a.Views = [{}]),
    (e.match(bx) || []).forEach(function (r, n) {
      var t = xe(r);
      a.Views[n] || (a.Views[n] = {}), +t.zoomScale && (a.Views[n].zoom = +t.zoomScale), Ce(t.rightToLeft) && (a.Views[n].RTL = !0);
    });
}
var Ux = (function () {
  var e = /<(?:\w+:)?c[ \/>]/,
    a = /<\/(?:\w+:)?row>/,
    r = /r=["']([^"']*)["']/,
    n = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,
    t = /ref=["']([^"']*)["']/,
    i = at("v"),
    s = at("f");
  return function (f, o, l, h, u, d) {
    for (var v = 0, x = "", g = [], A = [], C = 0, _ = 0, D = 0, b = "", N, S, H = 0, O = 0, X, V, P = 0, K = 0, oe = Array.isArray(d.CellXf), re, fe = [], ie = [], Ae = Array.isArray(o), G = [], ue = {}, he = !1, F = !!l.sheetStubs, L = f.split(a), I = 0, R = L.length; I != R; ++I) {
      x = L[I].trim();
      var j = x.length;
      if (j !== 0) {
        var ee = 0;
        e: for (v = 0; v < j; ++v)
          switch (x[v]) {
            case ">":
              if (x[v - 1] != "/") {
                ++v;
                break e;
              }
              if (l && l.cellStyles) {
                if (((S = xe(x.slice(ee, v), !0)), (H = S.r != null ? parseInt(S.r, 10) : H + 1), (O = -1), l.sheetRows && l.sheetRows < H)) continue;
                (ue = {}), (he = !1), S.ht && ((he = !0), (ue.hpt = parseFloat(S.ht)), (ue.hpx = st(ue.hpt))), S.hidden == "1" && ((he = !0), (ue.hidden = !0)), S.outlineLevel != null && ((he = !0), (ue.level = +S.outlineLevel)), he && (G[H - 1] = ue);
              }
              break;
            case "<":
              ee = v;
              break;
          }
        if (ee >= v) break;
        if (((S = xe(x.slice(ee, v), !0)), (H = S.r != null ? parseInt(S.r, 10) : H + 1), (O = -1), !(l.sheetRows && l.sheetRows < H))) {
          h.s.r > H - 1 && (h.s.r = H - 1), h.e.r < H - 1 && (h.e.r = H - 1), l && l.cellStyles && ((ue = {}), (he = !1), S.ht && ((he = !0), (ue.hpt = parseFloat(S.ht)), (ue.hpx = st(ue.hpt))), S.hidden == "1" && ((he = !0), (ue.hidden = !0)), S.outlineLevel != null && ((he = !0), (ue.level = +S.outlineLevel)), he && (G[H - 1] = ue)), (g = x.slice(v).split(e));
          for (var se = 0; se != g.length && g[se].trim().charAt(0) == "<"; ++se);
          for (g = g.slice(se), v = 0; v != g.length; ++v)
            if (((x = g[v].trim()), x.length !== 0)) {
              if (((A = x.match(r)), (C = v), (_ = 0), (D = 0), (x = "<c " + (x.slice(0, 1) == "<" ? ">" : "") + x), A != null && A.length === 2)) {
                for (C = 0, b = A[1], _ = 0; _ != b.length && !((D = b.charCodeAt(_) - 64) < 1 || D > 26); ++_) C = 26 * C + D;
                --C, (O = C);
              } else ++O;
              for (_ = 0; _ != x.length && x.charCodeAt(_) !== 62; ++_);
              if ((++_, (S = xe(x.slice(0, _), !0)), S.r || (S.r = ve({ r: H - 1, c: O })), (b = x.slice(_)), (N = { t: "" }), (A = b.match(i)) != null && A[1] !== "" && (N.v = we(A[1])), l.cellFormula)) {
                if ((A = b.match(s)) != null && A[1] !== "") {
                  if (
                    ((N.f = we(Se(A[1])).replace(
                      /\r\n/g,
                      `
`
                    )),
                    l.xlfn || (N.f = qn(N.f)),
                    A[0].indexOf('t="array"') > -1)
                  )
                    (N.F = (b.match(t) || [])[1]), N.F.indexOf(":") > -1 && fe.push([Ie(N.F), N.F]);
                  else if (A[0].indexOf('t="shared"') > -1) {
                    V = xe(A[0]);
                    var Q = we(Se(A[1]));
                    l.xlfn || (Q = qn(Q)), (ie[parseInt(V.si, 10)] = [V, Q, S.r]);
                  }
                } else (A = b.match(/<f[^>]*\/>/)) && ((V = xe(A[0])), ie[V.si] && (N.f = J1(ie[V.si][1], ie[V.si][2], S.r)));
                var Y = lr(S.r);
                for (_ = 0; _ < fe.length; ++_) Y.r >= fe[_][0].s.r && Y.r <= fe[_][0].e.r && Y.c >= fe[_][0].s.c && Y.c <= fe[_][0].e.c && (N.F = fe[_][1]);
              }
              if (S.t == null && N.v === void 0)
                if (N.f || N.F) (N.v = 0), (N.t = "n");
                else if (F) N.t = "z";
                else continue;
              else N.t = S.t || "n";
              switch ((h.s.c > O && (h.s.c = O), h.e.c < O && (h.e.c = O), N.t)) {
                case "n":
                  if (N.v == "" || N.v == null) {
                    if (!F) continue;
                    N.t = "z";
                  } else N.v = parseFloat(N.v);
                  break;
                case "s":
                  if (typeof N.v > "u") {
                    if (!F) continue;
                    N.t = "z";
                  } else (X = Za[parseInt(N.v, 10)]), (N.v = X.t), (N.r = X.r), l.cellHTML && (N.h = X.h);
                  break;
                case "str":
                  (N.t = "s"), (N.v = N.v != null ? Se(N.v) : ""), l.cellHTML && (N.h = C0(N.v));
                  break;
                case "inlineStr":
                  (A = b.match(n)), (N.t = "s"), A != null && (X = B0(A[1])) ? ((N.v = X.t), l.cellHTML && (N.h = X.h)) : (N.v = "");
                  break;
                case "b":
                  N.v = Ce(N.v);
                  break;
                case "d":
                  l.cellDates ? (N.v = $e(N.v, 1)) : ((N.v = hr($e(N.v, 1))), (N.t = "n"));
                  break;
                case "e":
                  (!l || l.cellText !== !1) && (N.w = N.v), (N.v = is[N.v]);
                  break;
              }
              if (((P = K = 0), (re = null), oe && S.s !== void 0 && ((re = d.CellXf[S.s]), re != null && (re.numFmtId != null && (P = re.numFmtId), l.cellStyles && re.fillId != null && (K = re.fillId))), bs(N, P, K, l, u, d), l.cellDates && oe && N.t == "n" && Na(ge[P]) && ((N.t = "d"), (N.v = Ut(N.v))), S.cm && l.xlmeta)) {
                var _e = (l.xlmeta.Cell || [])[+S.cm - 1];
                _e && _e.type == "XLDAPR" && (N.D = !0);
              }
              if (Ae) {
                var y = lr(S.r);
                o[y.r] || (o[y.r] = []), (o[y.r][y.c] = N);
              } else o[S.r] = N;
            }
        }
      }
    }
    G.length > 0 && (o["!rows"] = G);
  };
})();
function Hx(e, a) {
  var r = {},
    n = e.l + a;
  (r.r = e.read_shift(4)), (e.l += 4);
  var t = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return (e.l = n), i & 7 && (r.level = i & 7), i & 16 && (r.hidden = !0), i & 32 && (r.hpt = t / 20), r;
}
var Vx = Ta;
function Wx() {}
function Gx(e, a) {
  var r = {},
    n = e[e.l];
  return ++e.l, (r.above = !(n & 64)), (r.left = !(n & 128)), (e.l += 18), (r.name = lo(e)), r;
}
function Xx(e) {
  var a = Fr(e);
  return [a];
}
function $x(e) {
  var a = _a(e);
  return [a];
}
function zx(e) {
  var a = Fr(e),
    r = e.read_shift(1);
  return [a, r, "b"];
}
function jx(e) {
  var a = _a(e),
    r = e.read_shift(1);
  return [a, r, "b"];
}
function Kx(e) {
  var a = Fr(e),
    r = e.read_shift(1);
  return [a, r, "e"];
}
function Yx(e) {
  var a = _a(e),
    r = e.read_shift(1);
  return [a, r, "e"];
}
function Jx(e) {
  var a = Fr(e),
    r = e.read_shift(4);
  return [a, r, "s"];
}
function qx(e) {
  var a = _a(e),
    r = e.read_shift(4);
  return [a, r, "s"];
}
function Zx(e) {
  var a = Fr(e),
    r = rr(e);
  return [a, r, "n"];
}
function Us(e) {
  var a = _a(e),
    r = rr(e);
  return [a, r, "n"];
}
function Qx(e) {
  var a = Fr(e),
    r = L0(e);
  return [a, r, "n"];
}
function ed(e) {
  var a = _a(e),
    r = L0(e);
  return [a, r, "n"];
}
function rd(e) {
  var a = Fr(e),
    r = N0(e);
  return [a, r, "is"];
}
function ad(e) {
  var a = Fr(e),
    r = tr(e);
  return [a, r, "str"];
}
function td(e) {
  var a = _a(e),
    r = tr(e);
  return [a, r, "str"];
}
function nd(e, a, r) {
  var n = e.l + a,
    t = Fr(e);
  t.r = r["!row"];
  var i = e.read_shift(1),
    s = [t, i, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Wt(e, n - e.l, r);
    s[3] = Qe(c, null, t, r.supbooks, r);
  } else e.l = n;
  return s;
}
function id(e, a, r) {
  var n = e.l + a,
    t = Fr(e);
  t.r = r["!row"];
  var i = e.read_shift(1),
    s = [t, i, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Wt(e, n - e.l, r);
    s[3] = Qe(c, null, t, r.supbooks, r);
  } else e.l = n;
  return s;
}
function sd(e, a, r) {
  var n = e.l + a,
    t = Fr(e);
  t.r = r["!row"];
  var i = rr(e),
    s = [t, i, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Wt(e, n - e.l, r);
    s[3] = Qe(c, null, t, r.supbooks, r);
  } else e.l = n;
  return s;
}
function cd(e, a, r) {
  var n = e.l + a,
    t = Fr(e);
  t.r = r["!row"];
  var i = tr(e),
    s = [t, i, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Wt(e, n - e.l, r);
    s[3] = Qe(c, null, t, r.supbooks, r);
  } else e.l = n;
  return s;
}
var fd = Ta;
function od(e, a) {
  var r = e.l + a,
    n = Ta(e),
    t = P0(e),
    i = tr(e),
    s = tr(e),
    c = tr(e);
  e.l = r;
  var f = { rfx: n, relId: t, loc: i, display: c };
  return s && (f.Tooltip = s), f;
}
function ld() {}
function ud(e, a, r) {
  var n = e.l + a,
    t = as(e),
    i = e.read_shift(1),
    s = [t];
  if (((s[2] = i), r.cellFormula)) {
    var c = px(e, n - e.l, r);
    s[1] = c;
  } else e.l = n;
  return s;
}
function hd(e, a, r) {
  var n = e.l + a,
    t = Ta(e),
    i = [t];
  if (r.cellFormula) {
    var s = mx(e, n - e.l, r);
    (i[1] = s), (e.l = n);
  } else e.l = n;
  return i;
}
var xd = ["left", "right", "top", "bottom", "header", "footer"];
function dd(e) {
  var a = {};
  return (
    xd.forEach(function (r) {
      a[r] = rr(e);
    }),
    a
  );
}
function vd(e) {
  var a = e.read_shift(2);
  return (e.l += 28), { RTL: a & 32 };
}
function pd() {}
function gd() {}
function md(e, a, r, n, t, i, s) {
  if (!e) return e;
  var c = a || {};
  n || (n = { "!id": {} });
  var f = c.dense ? [] : {},
    o,
    l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    h = !1,
    u = !1,
    d,
    v,
    x,
    g,
    A,
    C,
    _,
    D,
    b,
    N = [];
  (c.biff = 12), (c["!row"] = 0);
  var S = 0,
    H = !1,
    O = [],
    X = {},
    V = c.supbooks || t.supbooks || [[]];
  if (
    ((V.sharedf = X),
    (V.arrayf = O),
    (V.SheetNames =
      t.SheetNames ||
      t.Sheets.map(function (Ae) {
        return Ae.name;
      })),
    !c.supbooks && ((c.supbooks = V), t.Names))
  )
    for (var P = 0; P < t.Names.length; ++P) V[0][P + 1] = t.Names[P];
  var K = [],
    oe = [],
    re = !1;
  bt[16] = { n: "BrtShortReal", f: Us };
  var fe;
  if (
    (Yr(
      e,
      function (G, ue, he) {
        if (!u)
          switch (he) {
            case 148:
              o = G;
              break;
            case 0:
              (d = G), c.sheetRows && c.sheetRows <= d.r && (u = !0), (D = Ye((g = d.r))), (c["!row"] = d.r), (G.hidden || G.hpt || G.level != null) && (G.hpt && (G.hpx = st(G.hpt)), (oe[G.r] = G));
              break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 62:
              switch (((v = { t: G[2] }), G[2])) {
                case "n":
                  v.v = G[1];
                  break;
                case "s":
                  (_ = Za[G[1]]), (v.v = _.t), (v.r = _.r);
                  break;
                case "b":
                  v.v = !!G[1];
                  break;
                case "e":
                  (v.v = G[1]), c.cellText !== !1 && (v.w = Ea[v.v]);
                  break;
                case "str":
                  (v.t = "s"), (v.v = G[1]);
                  break;
                case "is":
                  (v.t = "s"), (v.v = G[1].t);
                  break;
              }
              if (((x = s.CellXf[G[0].iStyleRef]) && bs(v, x.numFmtId, null, c, i, s), (A = G[0].c == -1 ? A + 1 : G[0].c), c.dense ? (f[g] || (f[g] = []), (f[g][A] = v)) : (f[Ve(A) + D] = v), c.cellFormula)) {
                for (H = !1, S = 0; S < O.length; ++S) {
                  var F = O[S];
                  d.r >= F[0].s.r && d.r <= F[0].e.r && A >= F[0].s.c && A <= F[0].e.c && ((v.F = ke(F[0])), (H = !0));
                }
                !H && G.length > 3 && (v.f = G[3]);
              }
              if ((l.s.r > d.r && (l.s.r = d.r), l.s.c > A && (l.s.c = A), l.e.r < d.r && (l.e.r = d.r), l.e.c < A && (l.e.c = A), c.cellDates && x && v.t == "n" && Na(ge[x.numFmtId]))) {
                var L = ua(v.v);
                L && ((v.t = "d"), (v.v = new Date(L.y, L.m - 1, L.d, L.H, L.M, L.S, L.u)));
              }
              fe && (fe.type == "XLDAPR" && (v.D = !0), (fe = void 0));
              break;
            case 1:
            case 12:
              if (!c.sheetStubs || h) break;
              (v = { t: "z", v: void 0 }), (A = G[0].c == -1 ? A + 1 : G[0].c), c.dense ? (f[g] || (f[g] = []), (f[g][A] = v)) : (f[Ve(A) + D] = v), l.s.r > d.r && (l.s.r = d.r), l.s.c > A && (l.s.c = A), l.e.r < d.r && (l.e.r = d.r), l.e.c < A && (l.e.c = A), fe && (fe.type == "XLDAPR" && (v.D = !0), (fe = void 0));
              break;
            case 176:
              N.push(G);
              break;
            case 49:
              fe = ((c.xlmeta || {}).Cell || [])[G - 1];
              break;
            case 494:
              var I = n["!id"][G.relId];
              for (I ? ((G.Target = I.Target), G.loc && (G.Target += "#" + G.loc), (G.Rel = I)) : G.relId == "" && (G.Target = "#" + G.loc), g = G.rfx.s.r; g <= G.rfx.e.r; ++g) for (A = G.rfx.s.c; A <= G.rfx.e.c; ++A) c.dense ? (f[g] || (f[g] = []), f[g][A] || (f[g][A] = { t: "z", v: void 0 }), (f[g][A].l = G)) : ((C = ve({ c: A, r: g })), f[C] || (f[C] = { t: "z", v: void 0 }), (f[C].l = G));
              break;
            case 426:
              if (!c.cellFormula) break;
              O.push(G), (b = c.dense ? f[g][A] : f[Ve(A) + D]), (b.f = Qe(G[1], l, { r: d.r, c: A }, V, c)), (b.F = ke(G[0]));
              break;
            case 427:
              if (!c.cellFormula) break;
              (X[ve(G[0].s)] = G[1]), (b = c.dense ? f[g][A] : f[Ve(A) + D]), (b.f = Qe(G[1], l, { r: d.r, c: A }, V, c));
              break;
            case 60:
              if (!c.cellStyles) break;
              for (; G.e >= G.s; ) (K[G.e--] = { width: G.w / 256, hidden: !!(G.flags & 1), level: G.level }), re || ((re = !0), U0(G.w / 256)), Ia(K[G.e + 1]);
              break;
            case 161:
              f["!autofilter"] = { ref: ke(G) };
              break;
            case 476:
              f["!margins"] = G;
              break;
            case 147:
              t.Sheets[r] || (t.Sheets[r] = {}), G.name && (t.Sheets[r].CodeName = G.name), (G.above || G.left) && (f["!outline"] = { above: G.above, left: G.left });
              break;
            case 137:
              t.Views || (t.Views = [{}]), t.Views[0] || (t.Views[0] = {}), G.RTL && (t.Views[0].RTL = !0);
              break;
            case 485:
              break;
            case 64:
            case 1053:
              break;
            case 151:
              break;
            case 152:
            case 175:
            case 644:
            case 625:
            case 562:
            case 396:
            case 1112:
            case 1146:
            case 471:
            case 1050:
            case 649:
            case 1105:
            case 589:
            case 607:
            case 564:
            case 1055:
            case 168:
            case 174:
            case 1180:
            case 499:
            case 507:
            case 550:
            case 171:
            case 167:
            case 1177:
            case 169:
            case 1181:
            case 551:
            case 552:
            case 661:
            case 639:
            case 478:
            case 537:
            case 477:
            case 536:
            case 1103:
            case 680:
            case 1104:
            case 1024:
            case 663:
            case 535:
            case 678:
            case 504:
            case 1043:
            case 428:
            case 170:
            case 3072:
            case 50:
            case 2070:
            case 1045:
              break;
            case 35:
              h = !0;
              break;
            case 36:
              h = !1;
              break;
            case 37:
              h = !0;
              break;
            case 38:
              h = !1;
              break;
            default:
              if (!ue.T) {
                if (!h || c.WTF) throw new Error("Unexpected record 0x" + he.toString(16));
              }
          }
      },
      c
    ),
    delete c.supbooks,
    delete c["!row"],
    !f["!ref"] && (l.s.r < 2e6 || (o && (o.e.r > 0 || o.e.c > 0 || o.s.r > 0 || o.s.c > 0))) && (f["!ref"] = ke(o || l)),
    c.sheetRows && f["!ref"])
  ) {
    var ie = Ie(f["!ref"]);
    c.sheetRows <= +ie.e.r && ((ie.e.r = c.sheetRows - 1), ie.e.r > l.e.r && (ie.e.r = l.e.r), ie.e.r < ie.s.r && (ie.s.r = ie.e.r), ie.e.c > l.e.c && (ie.e.c = l.e.c), ie.e.c < ie.s.c && (ie.s.c = ie.e.c), (f["!fullref"] = f["!ref"]), (f["!ref"] = ke(ie)));
  }
  return N.length > 0 && (f["!merges"] = N), K.length > 0 && (f["!cols"] = K), oe.length > 0 && (f["!rows"] = oe), f;
}
function _d(e) {
  var a = [],
    r = e.match(/^<c:numCache>/),
    n;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function (i) {
    var s = i.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    s && (a[+s[1]] = r ? +s[2] : s[2]);
  });
  var t = we((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (
    (e.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(function (i) {
      n = i.replace(/<.*?>/g, "");
    }),
    [a, t, n]
  );
}
function Td(e, a, r, n, t, i) {
  var s = i || { "!type": "chart" };
  if (!e) return i;
  var c = 0,
    f = 0,
    o = "A",
    l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (
    (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function (h) {
      var u = _d(h);
      (l.s.r = l.s.c = 0),
        (l.e.c = c),
        (o = Ve(c)),
        u[0].forEach(function (d, v) {
          (s[o + Ye(v)] = { t: "n", v: d, z: u[1] }), (f = v);
        }),
        l.e.r < f && (l.e.r = f),
        ++c;
    }),
    c > 0 && (s["!ref"] = ke(l)),
    s
  );
}
function Ed(e, a, r, n, t) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" },
    s,
    c = e.match(Bs);
  return c && V0(c[0], i, t, r), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), n["!id"][i["!rel"]] && (i["!drawel"] = n["!id"][i["!rel"]]), i;
}
function kd(e, a) {
  e.l += 10;
  var r = tr(e);
  return { name: r };
}
function wd(e, a, r, n, t) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" },
    s = !1;
  return (
    Yr(
      e,
      function (f, o, l) {
        switch (l) {
          case 550:
            i["!rel"] = f;
            break;
          case 651:
            t.Sheets[r] || (t.Sheets[r] = {}), f.name && (t.Sheets[r].CodeName = f.name);
            break;
          case 562:
          case 652:
          case 669:
          case 679:
          case 551:
          case 552:
          case 476:
          case 3072:
            break;
          case 35:
            s = !0;
            break;
          case 36:
            s = !1;
            break;
          case 37:
            break;
          case 38:
            break;
          default:
            if (!(o.T > 0)) {
              if (!(o.T < 0)) {
                if (!s || a.WTF) throw new Error("Unexpected record 0x" + l.toString(16));
              }
            }
        }
      },
      a
    ),
    n["!id"][i["!rel"]] && (i["!drawel"] = n["!id"][i["!rel"]]),
    i
  );
}
var Hs = [
    ["allowRefreshQuery", !1, "bool"],
    ["autoCompressPictures", !0, "bool"],
    ["backupFile", !1, "bool"],
    ["checkCompatibility", !1, "bool"],
    ["CodeName", ""],
    ["date1904", !1, "bool"],
    ["defaultThemeVersion", 0, "int"],
    ["filterPrivacy", !1, "bool"],
    ["hidePivotFieldList", !1, "bool"],
    ["promptedSolutions", !1, "bool"],
    ["publishItems", !1, "bool"],
    ["refreshAllConnections", !1, "bool"],
    ["saveExternalLinkValues", !0, "bool"],
    ["showBorderUnselectedTables", !0, "bool"],
    ["showInkAnnotation", !0, "bool"],
    ["showObjects", "all"],
    ["showPivotChartFilter", !1, "bool"],
    ["updateLinks", "userSet"],
  ],
  Ad = [
    ["activeTab", 0, "int"],
    ["autoFilterDateGrouping", !0, "bool"],
    ["firstSheet", 0, "int"],
    ["minimized", !1, "bool"],
    ["showHorizontalScroll", !0, "bool"],
    ["showSheetTabs", !0, "bool"],
    ["showVerticalScroll", !0, "bool"],
    ["tabRatio", 600, "int"],
    ["visibility", "visible"],
  ],
  Sd = [],
  Fd = [
    ["calcCompleted", "true"],
    ["calcMode", "auto"],
    ["calcOnSave", "true"],
    ["concurrentCalc", "true"],
    ["fullCalcOnLoad", "false"],
    ["fullPrecision", "true"],
    ["iterate", "false"],
    ["iterateCount", "100"],
    ["iterateDelta", "0.001"],
    ["refMode", "A1"],
  ];
function ai(e, a) {
  for (var r = 0; r != e.length; ++r)
    for (var n = e[r], t = 0; t != a.length; ++t) {
      var i = a[t];
      if (n[i[0]] == null) n[i[0]] = i[1];
      else
        switch (i[2]) {
          case "bool":
            typeof n[i[0]] == "string" && (n[i[0]] = Ce(n[i[0]]));
            break;
          case "int":
            typeof n[i[0]] == "string" && (n[i[0]] = parseInt(n[i[0]], 10));
            break;
        }
    }
}
function ti(e, a) {
  for (var r = 0; r != a.length; ++r) {
    var n = a[r];
    if (e[n[0]] == null) e[n[0]] = n[1];
    else
      switch (n[2]) {
        case "bool":
          typeof e[n[0]] == "string" && (e[n[0]] = Ce(e[n[0]]));
          break;
        case "int":
          typeof e[n[0]] == "string" && (e[n[0]] = parseInt(e[n[0]], 10));
          break;
      }
  }
}
function Vs(e) {
  ti(e.WBProps, Hs), ti(e.CalcPr, Fd), ai(e.WBView, Ad), ai(e.Sheets, Sd), (Ra.date1904 = Ce(e.WBProps.date1904));
}
var yd = "][*?/\\".split("");
function Cd(e, a) {
  if (e.length > 31) {
    if (a) return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return (
    yd.forEach(function (n) {
      if (e.indexOf(n) != -1) {
        if (!a) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
        r = !1;
      }
    }),
    r
  );
}
var Od = /<\w+:workbook/;
function Rd(e, a) {
  if (!e) throw new Error("Could not find file");
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" },
    n = !1,
    t = "xmlns",
    i = {},
    s = 0;
  if (
    (e.replace(ir, function (f, o) {
      var l = xe(f);
      switch (Ur(l[0])) {
        case "<?xml":
          break;
        case "<workbook":
          f.match(Od) && (t = "xmlns" + f.match(/<(\w+):/)[1]), (r.xmlns = l[t]);
          break;
        case "</workbook>":
          break;
        case "<fileVersion":
          delete l[0], (r.AppVersion = l);
          break;
        case "<fileVersion/>":
        case "</fileVersion>":
          break;
        case "<fileSharing":
          break;
        case "<fileSharing/>":
          break;
        case "<workbookPr":
        case "<workbookPr/>":
          Hs.forEach(function (h) {
            if (l[h[0]] != null)
              switch (h[2]) {
                case "bool":
                  r.WBProps[h[0]] = Ce(l[h[0]]);
                  break;
                case "int":
                  r.WBProps[h[0]] = parseInt(l[h[0]], 10);
                  break;
                default:
                  r.WBProps[h[0]] = l[h[0]];
              }
          }),
            l.codeName && (r.WBProps.CodeName = Se(l.codeName));
          break;
        case "</workbookPr>":
          break;
        case "<workbookProtection":
          break;
        case "<workbookProtection/>":
          break;
        case "<bookViews":
        case "<bookViews>":
        case "</bookViews>":
          break;
        case "<workbookView":
        case "<workbookView/>":
          delete l[0], r.WBView.push(l);
          break;
        case "</workbookView>":
          break;
        case "<sheets":
        case "<sheets>":
        case "</sheets>":
          break;
        case "<sheet":
          switch (l.state) {
            case "hidden":
              l.Hidden = 1;
              break;
            case "veryHidden":
              l.Hidden = 2;
              break;
            default:
              l.Hidden = 0;
          }
          delete l.state, (l.name = we(Se(l.name))), delete l[0], r.Sheets.push(l);
          break;
        case "</sheet>":
          break;
        case "<functionGroups":
        case "<functionGroups/>":
          break;
        case "<functionGroup":
          break;
        case "<externalReferences":
        case "</externalReferences>":
        case "<externalReferences>":
          break;
        case "<externalReference":
          break;
        case "<definedNames/>":
          break;
        case "<definedNames>":
        case "<definedNames":
          n = !0;
          break;
        case "</definedNames>":
          n = !1;
          break;
        case "<definedName":
          (i = {}), (i.Name = Se(l.name)), l.comment && (i.Comment = l.comment), l.localSheetId && (i.Sheet = +l.localSheetId), Ce(l.hidden || "0") && (i.Hidden = !0), (s = o + f.length);
          break;
        case "</definedName>":
          (i.Ref = we(Se(e.slice(s, o)))), r.Names.push(i);
          break;
        case "<definedName/>":
          break;
        case "<calcPr":
          delete l[0], (r.CalcPr = l);
          break;
        case "<calcPr/>":
          delete l[0], (r.CalcPr = l);
          break;
        case "</calcPr>":
          break;
        case "<oleSize":
          break;
        case "<customWorkbookViews>":
        case "</customWorkbookViews>":
        case "<customWorkbookViews":
          break;
        case "<customWorkbookView":
        case "</customWorkbookView>":
          break;
        case "<pivotCaches>":
        case "</pivotCaches>":
        case "<pivotCaches":
          break;
        case "<pivotCache":
          break;
        case "<smartTagPr":
        case "<smartTagPr/>":
          break;
        case "<smartTagTypes":
        case "<smartTagTypes>":
        case "</smartTagTypes>":
          break;
        case "<smartTagType":
          break;
        case "<webPublishing":
        case "<webPublishing/>":
          break;
        case "<fileRecoveryPr":
        case "<fileRecoveryPr/>":
          break;
        case "<webPublishObjects>":
        case "<webPublishObjects":
        case "</webPublishObjects>":
          break;
        case "<webPublishObject":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        case "<ArchID":
          break;
        case "<AlternateContent":
        case "<AlternateContent>":
          n = !0;
          break;
        case "</AlternateContent>":
          n = !1;
          break;
        case "<revisionPtr":
          break;
        default:
          if (!n && a.WTF) throw new Error("unrecognized " + l[0] + " in workbook");
      }
      return f;
    }),
    jf.indexOf(r.xmlns) === -1)
  )
    throw new Error("Unknown Namespace: " + r.xmlns);
  return Vs(r), r;
}
function Dd(e, a) {
  var r = {};
  return (r.Hidden = e.read_shift(4)), (r.iTabID = e.read_shift(4)), (r.strRelID = f0(e)), (r.name = tr(e)), r;
}
function Id(e, a) {
  var r = {},
    n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var t = a > 8 ? tr(e) : "";
  return (
    t.length > 0 && (r.CodeName = t),
    (r.autoCompressPictures = !!(n & 65536)),
    (r.backupFile = !!(n & 64)),
    (r.checkCompatibility = !!(n & 4096)),
    (r.date1904 = !!(n & 1)),
    (r.filterPrivacy = !!(n & 8)),
    (r.hidePivotFieldList = !!(n & 1024)),
    (r.promptedSolutions = !!(n & 16)),
    (r.publishItems = !!(n & 2048)),
    (r.refreshAllConnections = !!(n & 262144)),
    (r.saveExternalLinkValues = !!(n & 128)),
    (r.showBorderUnselectedTables = !!(n & 4)),
    (r.showInkAnnotation = !!(n & 32)),
    (r.showObjects = ["all", "placeholders", "none"][(n >> 13) & 3]),
    (r.showPivotChartFilter = !!(n & 32768)),
    (r.updateLinks = ["userSet", "never", "always"][(n >> 8) & 3]),
    r
  );
}
function Nd(e, a) {
  var r = {};
  return e.read_shift(4), (r.ArchID = e.read_shift(4)), (e.l += a - 8), r;
}
function Pd(e, a, r) {
  var n = e.l + a;
  (e.l += 4), (e.l += 1);
  var t = e.read_shift(4),
    i = uo(e),
    s = gx(e, 0, r),
    c = P0(e);
  e.l = n;
  var f = { Name: i, Ptg: s };
  return t < 268435455 && (f.Sheet = t), c && (f.Comment = c), f;
}
function Ld(e, a) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" },
    n = [],
    t = !1;
  a || (a = {}), (a.biff = 12);
  var i = [],
    s = [[]];
  return (
    (s.SheetNames = []),
    (s.XTI = []),
    (bt[16] = { n: "BrtFRTArchID$", f: Nd }),
    Yr(
      e,
      function (f, o, l) {
        switch (l) {
          case 156:
            s.SheetNames.push(f.name), r.Sheets.push(f);
            break;
          case 153:
            r.WBProps = f;
            break;
          case 39:
            f.Sheet != null && (a.SID = f.Sheet), (f.Ref = Qe(f.Ptg, null, null, s, a)), delete a.SID, delete f.Ptg, i.push(f);
            break;
          case 1036:
            break;
          case 357:
          case 358:
          case 355:
          case 667:
            s[0].length ? s.push([l, f]) : (s[0] = [l, f]), (s[s.length - 1].XTI = []);
            break;
          case 362:
            s.length === 0 && ((s[0] = []), (s[0].XTI = [])), (s[s.length - 1].XTI = s[s.length - 1].XTI.concat(f)), (s.XTI = s.XTI.concat(f));
            break;
          case 361:
            break;
          case 2071:
          case 158:
          case 143:
          case 664:
          case 353:
            break;
          case 3072:
          case 3073:
          case 534:
          case 677:
          case 157:
          case 610:
          case 2050:
          case 155:
          case 548:
          case 676:
          case 128:
          case 665:
          case 2128:
          case 2125:
          case 549:
          case 2053:
          case 596:
          case 2076:
          case 2075:
          case 2082:
          case 397:
          case 154:
          case 1117:
          case 553:
          case 2091:
            break;
          case 35:
            n.push(l), (t = !0);
            break;
          case 36:
            n.pop(), (t = !1);
            break;
          case 37:
            n.push(l), (t = !0);
            break;
          case 38:
            n.pop(), (t = !1);
            break;
          case 16:
            break;
          default:
            if (!o.T) {
              if (!t || (a.WTF && n[n.length - 1] != 37 && n[n.length - 1] != 35)) throw new Error("Unexpected record 0x" + l.toString(16));
            }
        }
      },
      a
    ),
    Vs(r),
    (r.Names = i),
    (r.supbooks = s),
    r
  );
}
function Md(e, a, r) {
  return a.slice(-4) === ".bin" ? Ld(e, r) : Rd(e, r);
}
function bd(e, a, r, n, t, i, s, c) {
  return a.slice(-4) === ".bin" ? md(e, n, r, t, i, s, c) : Dx(e, n, r, t, i, s, c);
}
function Bd(e, a, r, n, t, i, s, c) {
  return a.slice(-4) === ".bin" ? wd(e, n, r, t, i) : Ed(e, n, r, t, i);
}
function Ud(e, a, r, n, t, i, s, c) {
  return a.slice(-4) === ".bin" ? j1() : K1();
}
function Hd(e, a, r, n, t, i, s, c) {
  return a.slice(-4) === ".bin" ? $1() : z1();
}
function Vd(e, a, r, n) {
  return a.slice(-4) === ".bin" ? f1(e, r, n) : a1(e, r, n);
}
function Wd(e, a, r) {
  return ys(e, r);
}
function Gd(e, a, r) {
  return a.slice(-4) === ".bin" ? Au(e, r) : ku(e, r);
}
function Xd(e, a, r) {
  return a.slice(-4) === ".bin" ? W1(e, r) : b1(e, r);
}
function $d(e, a, r) {
  return a.slice(-4) === ".bin" ? P1(e) : I1(e);
}
function zd(e, a, r, n) {
  return r.slice(-4) === ".bin" ? L1(e, a, r, n) : void 0;
}
function jd(e, a, r) {
  return a.slice(-4) === ".bin" ? R1(e, a, r) : D1(e, a, r);
}
var Ws = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,
  Gs = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Cr(e, a) {
  var r = e.split(/\s+/),
    n = [];
  if ((a || (n[0] = r[0]), r.length === 1)) return n;
  var t = e.match(Ws),
    i,
    s,
    c,
    f;
  if (t) for (f = 0; f != t.length; ++f) (i = t[f].match(Gs)), (s = i[1].indexOf(":")) === -1 ? (n[i[1]] = i[2].slice(1, i[2].length - 1)) : (i[1].slice(0, 6) === "xmlns:" ? (c = "xmlns" + i[1].slice(6)) : (c = i[1].slice(s + 1)), (n[c] = i[2].slice(1, i[2].length - 1)));
  return n;
}
function Kd(e) {
  var a = e.split(/\s+/),
    r = {};
  if (a.length === 1) return r;
  var n = e.match(Ws),
    t,
    i,
    s,
    c;
  if (n) for (c = 0; c != n.length; ++c) (t = n[c].match(Gs)), (i = t[1].indexOf(":")) === -1 ? (r[t[1]] = t[2].slice(1, t[2].length - 1)) : (t[1].slice(0, 6) === "xmlns:" ? (s = "xmlns" + t[1].slice(6)) : (s = t[1].slice(i + 1)), (r[s] = t[2].slice(1, t[2].length - 1)));
  return r;
}
var et;
function Yd(e, a) {
  var r = et[e] || we(e);
  return r === "General" ? da(a) : Sr(r, a);
}
function Jd(e, a, r, n) {
  var t = n;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      t = Ce(n);
      break;
    case "i2":
    case "int":
      t = parseInt(n, 10);
      break;
    case "r4":
    case "float":
      t = parseFloat(n);
      break;
    case "date":
    case "dateTime.tz":
      t = $e(n);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + r[0]);
  }
  e[we(a)] = t;
}
function qd(e, a, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== !1)
      try {
        e.t === "e" ? (e.w = e.w || Ea[e.v]) : a === "General" ? (e.t === "n" ? ((e.v | 0) === e.v ? (e.w = e.v.toString(10)) : (e.w = rt(e.v))) : (e.w = da(e.v))) : (e.w = Yd(a || "General", e.v));
      } catch (i) {
        if (r.WTF) throw i;
      }
    try {
      var n = et[a] || a || "General";
      if ((r.cellNF && (e.z = n), r.cellDates && e.t == "n" && Na(n))) {
        var t = ua(e.v);
        t && ((e.t = "d"), (e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u)));
      }
    } catch (i) {
      if (r.WTF) throw i;
    }
  }
}
function Zd(e, a, r) {
  if (r.cellStyles && a.Interior) {
    var n = a.Interior;
    n.Pattern && (n.patternType = Ju[n.Pattern] || n.Pattern);
  }
  e[a.ID] = a;
}
function Qd(e, a, r, n, t, i, s, c, f, o) {
  var l = "General",
    h = n.StyleID,
    u = {};
  o = o || {};
  var d = [],
    v = 0;
  for (h === void 0 && c && (h = c.StyleID), h === void 0 && s && (h = s.StyleID); i[h] !== void 0 && (i[h].nf && (l = i[h].nf), i[h].Interior && d.push(i[h].Interior), !!i[h].Parent); ) h = i[h].Parent;
  switch (r.Type) {
    case "Boolean":
      (n.t = "b"), (n.v = Ce(e));
      break;
    case "String":
      (n.t = "s"), (n.r = Sn(we(e))), (n.v = e.indexOf("<") > -1 ? we(a || e).replace(/<.*?>/g, "") : n.r);
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), (n.v = ($e(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3)), n.v !== n.v ? (n.v = we(e)) : n.v < 60 && (n.v = n.v - 1), (!l || l == "General") && (l = "yyyy-mm-dd");
    case "Number":
      n.v === void 0 && (n.v = +e), n.t || (n.t = "n");
      break;
    case "Error":
      (n.t = "e"), (n.v = is[e]), o.cellText !== !1 && (n.w = e);
      break;
    default:
      e == "" && a == "" ? (n.t = "z") : ((n.t = "s"), (n.v = Sn(a || e)));
      break;
  }
  if ((qd(n, l, o), o.cellFormula !== !1))
    if (n.Formula) {
      var x = we(n.Formula);
      x.charCodeAt(0) == 61 && (x = x.slice(1)), (n.f = Oa(x, t)), delete n.Formula, n.ArrayRange == "RC" ? (n.F = Oa("RC:RC", t)) : n.ArrayRange && ((n.F = Oa(n.ArrayRange, t)), f.push([Ie(n.F), n.F]));
    } else for (v = 0; v < f.length; ++v) t.r >= f[v][0].s.r && t.r <= f[v][0].e.r && t.c >= f[v][0].s.c && t.c <= f[v][0].e.c && (n.F = f[v][1]);
  o.cellStyles &&
    (d.forEach(function (g) {
      !u.patternType && g.patternType && (u.patternType = g.patternType);
    }),
    (n.s = u)),
    n.StyleID !== void 0 && (n.ixfe = n.StyleID);
}
function e2(e) {
  (e.t = e.v || ""),
    (e.t = e.t
      .replace(
        /\r\n/g,
        `
`
      )
      .replace(
        /\r/g,
        `
`
      )),
    (e.v = e.w = e.ixfe = void 0);
}
function t0(e, a) {
  var r = a || {};
  Ri();
  var n = Wa(O0(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (n = Se(n));
  var t = n.slice(0, 1024).toLowerCase(),
    i = !1;
  if (((t = t.replace(/".*?"/g, "")), (t.indexOf(">") & 1023) > Math.min(t.indexOf(",") & 1023, t.indexOf(";") & 1023))) {
    var s = Ke(r);
    return (s.type = "string"), nt.to_workbook(n, s);
  }
  if (
    (t.indexOf("<?xml") == -1 &&
      ["html", "table", "head", "meta", "script", "style", "div"].forEach(function (Fe) {
        t.indexOf("<" + Fe) >= 0 && (i = !0);
      }),
    i)
  )
    return o2(n, r);
  et = { "General Number": "General", "General Date": ge[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": ge[15], "Short Date": ge[14], "Long Time": ge[19], "Medium Time": ge[18], "Short Time": ge[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: ge[2], Standard: ge[4], Percent: ge[10], Scientific: ge[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var c,
    f = [],
    o,
    l = {},
    h = [],
    u = r.dense ? [] : {},
    d = "",
    v = {},
    x = {},
    g = Cr('<Data ss:Type="String">'),
    A = 0,
    C = 0,
    _ = 0,
    D = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    b = {},
    N = {},
    S = "",
    H = 0,
    O = [],
    X = {},
    V = {},
    P = 0,
    K = [],
    oe = [],
    re = {},
    fe = [],
    ie,
    Ae = !1,
    G = [],
    ue = [],
    he = {},
    F = 0,
    L = 0,
    I = { Sheets: [], WBProps: { date1904: !1 } },
    R = {};
  (tt.lastIndex = 0), (n = n.replace(/<!--([\s\S]*?)-->/gm, ""));
  for (var j = ""; (c = tt.exec(n)); )
    switch ((c[3] = (j = c[3]).toLowerCase())) {
      case "data":
        if (j == "data") {
          if (c[1] === "/") {
            if ((o = f.pop())[0] !== c[3]) throw new Error("Bad state: " + o.join("|"));
          } else c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
          break;
        }
        if (f[f.length - 1][1]) break;
        c[1] === "/" ? Qd(n.slice(A, c.index), S, g, f[f.length - 1][0] == "comment" ? re : v, { c: C, r: _ }, b, fe[C], x, G, r) : ((S = ""), (g = Cr(c[0])), (A = c.index + c[0].length));
        break;
      case "cell":
        if (c[1] === "/")
          if ((oe.length > 0 && (v.c = oe), (!r.sheetRows || r.sheetRows > _) && v.v !== void 0 && (r.dense ? (u[_] || (u[_] = []), (u[_][C] = v)) : (u[Ve(C) + Ye(_)] = v)), v.HRef && ((v.l = { Target: we(v.HRef) }), v.HRefScreenTip && (v.l.Tooltip = v.HRefScreenTip), delete v.HRef, delete v.HRefScreenTip), (v.MergeAcross || v.MergeDown) && ((F = C + (parseInt(v.MergeAcross, 10) | 0)), (L = _ + (parseInt(v.MergeDown, 10) | 0)), O.push({ s: { c: C, r: _ }, e: { c: F, r: L } })), !r.sheetStubs))
            v.MergeAcross ? (C = F + 1) : ++C;
          else if (v.MergeAcross || v.MergeDown) {
            for (var ee = C; ee <= F; ++ee) for (var se = _; se <= L; ++se) (ee > C || se > _) && (r.dense ? (u[se] || (u[se] = []), (u[se][ee] = { t: "z" })) : (u[Ve(ee) + Ye(se)] = { t: "z" }));
            C = F + 1;
          } else ++C;
        else (v = Kd(c[0])), v.Index && (C = +v.Index - 1), C < D.s.c && (D.s.c = C), C > D.e.c && (D.e.c = C), c[0].slice(-2) === "/>" && ++C, (oe = []);
        break;
      case "row":
        c[1] === "/" || c[0].slice(-2) === "/>" ? (_ < D.s.r && (D.s.r = _), _ > D.e.r && (D.e.r = _), c[0].slice(-2) === "/>" && ((x = Cr(c[0])), x.Index && (_ = +x.Index - 1)), (C = 0), ++_) : ((x = Cr(c[0])), x.Index && (_ = +x.Index - 1), (he = {}), (x.AutoFitHeight == "0" || x.Height) && ((he.hpx = parseInt(x.Height, 10)), (he.hpt = Fs(he.hpx)), (ue[_] = he)), x.Hidden == "1" && ((he.hidden = !0), (ue[_] = he)));
        break;
      case "worksheet":
        if (c[1] === "/") {
          if ((o = f.pop())[0] !== c[3]) throw new Error("Bad state: " + o.join("|"));
          h.push(d), D.s.r <= D.e.r && D.s.c <= D.e.c && ((u["!ref"] = ke(D)), r.sheetRows && r.sheetRows <= D.e.r && ((u["!fullref"] = u["!ref"]), (D.e.r = r.sheetRows - 1), (u["!ref"] = ke(D)))), O.length && (u["!merges"] = O), fe.length > 0 && (u["!cols"] = fe), ue.length > 0 && (u["!rows"] = ue), (l[d] = u);
        } else (D = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }), (_ = C = 0), f.push([c[3], !1]), (o = Cr(c[0])), (d = we(o.Name)), (u = r.dense ? [] : {}), (O = []), (G = []), (ue = []), (R = { name: d, Hidden: 0 }), I.Sheets.push(R);
        break;
      case "table":
        if (c[1] === "/") {
          if ((o = f.pop())[0] !== c[3]) throw new Error("Bad state: " + o.join("|"));
        } else {
          if (c[0].slice(-2) == "/>") break;
          f.push([c[3], !1]), (fe = []), (Ae = !1);
        }
        break;
      case "style":
        c[1] === "/" ? Zd(b, N, r) : (N = Cr(c[0]));
        break;
      case "numberformat":
        (N.nf = we(Cr(c[0]).Format || "General")), et[N.nf] && (N.nf = et[N.nf]);
        for (var Q = 0; Q != 392 && ge[Q] != N.nf; ++Q);
        if (Q == 392) {
          for (Q = 57; Q != 392; ++Q)
            if (ge[Q] == null) {
              ha(N.nf, Q);
              break;
            }
        }
        break;
      case "column":
        if (f[f.length - 1][0] !== "table") break;
        if (((ie = Cr(c[0])), ie.Hidden && ((ie.hidden = !0), delete ie.Hidden), ie.Width && (ie.wpx = parseInt(ie.Width, 10)), !Ae && ie.wpx > 10)) {
          (Ae = !0), (or = As);
          for (var Y = 0; Y < fe.length; ++Y) fe[Y] && Ia(fe[Y]);
        }
        Ae && Ia(ie), (fe[ie.Index - 1 || fe.length] = ie);
        for (var _e = 0; _e < +ie.Span; ++_e) fe[fe.length] = Ke(ie);
        break;
      case "namedrange":
        if (c[1] === "/") break;
        I.Names || (I.Names = []);
        var y = xe(c[0]),
          ye = { Name: y.Name, Ref: Oa(y.RefersTo.slice(1), { r: 0, c: 0 }) };
        I.Sheets.length > 0 && (ye.Sheet = I.Sheets.length - 1), I.Names.push(ye);
        break;
      case "namedcell":
        break;
      case "b":
        break;
      case "i":
        break;
      case "u":
        break;
      case "s":
        break;
      case "em":
        break;
      case "h2":
        break;
      case "h3":
        break;
      case "sub":
        break;
      case "sup":
        break;
      case "span":
        break;
      case "alignment":
        break;
      case "borders":
        break;
      case "border":
        break;
      case "font":
        if (c[0].slice(-2) === "/>") break;
        c[1] === "/" ? (S += n.slice(H, c.index)) : (H = c.index + c[0].length);
        break;
      case "interior":
        if (!r.cellStyles) break;
        N.Interior = Cr(c[0]);
        break;
      case "protection":
        break;
      case "author":
      case "title":
      case "description":
      case "created":
      case "keywords":
      case "subject":
      case "category":
      case "company":
      case "lastauthor":
      case "lastsaved":
      case "lastprinted":
      case "version":
      case "revision":
      case "totaltime":
      case "hyperlinkbase":
      case "manager":
      case "contentstatus":
      case "identifier":
      case "language":
      case "appname":
        if (c[0].slice(-2) === "/>") break;
        c[1] === "/" ? bo(X, j, n.slice(P, c.index)) : (P = c.index + c[0].length);
        break;
      case "paragraphs":
        break;
      case "styles":
      case "workbook":
        if (c[1] === "/") {
          if ((o = f.pop())[0] !== c[3]) throw new Error("Bad state: " + o.join("|"));
        } else f.push([c[3], !1]);
        break;
      case "comment":
        if (c[1] === "/") {
          if ((o = f.pop())[0] !== c[3]) throw new Error("Bad state: " + o.join("|"));
          e2(re), oe.push(re);
        } else f.push([c[3], !1]), (o = Cr(c[0])), (re = { a: o.Author });
        break;
      case "autofilter":
        if (c[1] === "/") {
          if ((o = f.pop())[0] !== c[3]) throw new Error("Bad state: " + o.join("|"));
        } else if (c[0].charAt(c[0].length - 2) !== "/") {
          var te = Cr(c[0]);
          (u["!autofilter"] = { ref: Oa(te.Range).replace(/\$/g, "") }), f.push([c[3], !0]);
        }
        break;
      case "name":
        break;
      case "datavalidation":
        if (c[1] === "/") {
          if ((o = f.pop())[0] !== c[3]) throw new Error("Bad state: " + o.join("|"));
        } else c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
        break;
      case "pixelsperinch":
        break;
      case "componentoptions":
      case "documentproperties":
      case "customdocumentproperties":
      case "officedocumentsettings":
      case "pivottable":
      case "pivotcache":
      case "names":
      case "mapinfo":
      case "pagebreaks":
      case "querytable":
      case "sorting":
      case "schema":
      case "conditionalformatting":
      case "smarttagtype":
      case "smarttags":
      case "excelworkbook":
      case "workbookoptions":
      case "worksheetoptions":
        if (c[1] === "/") {
          if ((o = f.pop())[0] !== c[3]) throw new Error("Bad state: " + o.join("|"));
        } else c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
        break;
      case "null":
        break;
      default:
        if ((f.length == 0 && c[3] == "document") || (f.length == 0 && c[3] == "uof")) return oi(n, r);
        var de = !0;
        switch (f[f.length - 1][0]) {
          case "officedocumentsettings":
            switch (c[3]) {
              case "allowpng":
                break;
              case "removepersonalinformation":
                break;
              case "downloadcomponents":
                break;
              case "locationofcomponents":
                break;
              case "colors":
                break;
              case "color":
                break;
              case "index":
                break;
              case "rgb":
                break;
              case "targetscreensize":
                break;
              case "readonlyrecommended":
                break;
              default:
                de = !1;
            }
            break;
          case "componentoptions":
            switch (c[3]) {
              case "toolbar":
                break;
              case "hideofficelogo":
                break;
              case "spreadsheetautofit":
                break;
              case "label":
                break;
              case "caption":
                break;
              case "maxheight":
                break;
              case "maxwidth":
                break;
              case "nextsheetnumber":
                break;
              default:
                de = !1;
            }
            break;
          case "excelworkbook":
            switch (c[3]) {
              case "date1904":
                I.WBProps.date1904 = !0;
                break;
              case "windowheight":
                break;
              case "windowwidth":
                break;
              case "windowtopx":
                break;
              case "windowtopy":
                break;
              case "tabratio":
                break;
              case "protectstructure":
                break;
              case "protectwindow":
                break;
              case "protectwindows":
                break;
              case "activesheet":
                break;
              case "displayinknotes":
                break;
              case "firstvisiblesheet":
                break;
              case "supbook":
                break;
              case "sheetname":
                break;
              case "sheetindex":
                break;
              case "sheetindexfirst":
                break;
              case "sheetindexlast":
                break;
              case "dll":
                break;
              case "acceptlabelsinformulas":
                break;
              case "donotsavelinkvalues":
                break;
              case "iteration":
                break;
              case "maxiterations":
                break;
              case "maxchange":
                break;
              case "path":
                break;
              case "xct":
                break;
              case "count":
                break;
              case "selectedsheets":
                break;
              case "calculation":
                break;
              case "uncalced":
                break;
              case "startupprompt":
                break;
              case "crn":
                break;
              case "externname":
                break;
              case "formula":
                break;
              case "colfirst":
                break;
              case "collast":
                break;
              case "wantadvise":
                break;
              case "boolean":
                break;
              case "error":
                break;
              case "text":
                break;
              case "ole":
                break;
              case "noautorecover":
                break;
              case "publishobjects":
                break;
              case "donotcalculatebeforesave":
                break;
              case "number":
                break;
              case "refmoder1c1":
                break;
              case "embedsavesmarttags":
                break;
              default:
                de = !1;
            }
            break;
          case "workbookoptions":
            switch (c[3]) {
              case "owcversion":
                break;
              case "height":
                break;
              case "width":
                break;
              default:
                de = !1;
            }
            break;
          case "worksheetoptions":
            switch (c[3]) {
              case "visible":
                if (c[0].slice(-2) !== "/>")
                  if (c[1] === "/")
                    switch (n.slice(P, c.index)) {
                      case "SheetHidden":
                        R.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        R.Hidden = 2;
                        break;
                    }
                  else P = c.index + c[0].length;
                break;
              case "header":
                u["!margins"] || Qa((u["!margins"] = {}), "xlml"), isNaN(+xe(c[0]).Margin) || (u["!margins"].header = +xe(c[0]).Margin);
                break;
              case "footer":
                u["!margins"] || Qa((u["!margins"] = {}), "xlml"), isNaN(+xe(c[0]).Margin) || (u["!margins"].footer = +xe(c[0]).Margin);
                break;
              case "pagemargins":
                var le = xe(c[0]);
                u["!margins"] || Qa((u["!margins"] = {}), "xlml"), isNaN(+le.Top) || (u["!margins"].top = +le.Top), isNaN(+le.Left) || (u["!margins"].left = +le.Left), isNaN(+le.Right) || (u["!margins"].right = +le.Right), isNaN(+le.Bottom) || (u["!margins"].bottom = +le.Bottom);
                break;
              case "displayrighttoleft":
                I.Views || (I.Views = []), I.Views[0] || (I.Views[0] = {}), (I.Views[0].RTL = !0);
                break;
              case "freezepanes":
                break;
              case "frozennosplit":
                break;
              case "splithorizontal":
              case "splitvertical":
                break;
              case "donotdisplaygridlines":
                break;
              case "activerow":
                break;
              case "activecol":
                break;
              case "toprowbottompane":
                break;
              case "leftcolumnrightpane":
                break;
              case "unsynced":
                break;
              case "print":
                break;
              case "printerrors":
                break;
              case "panes":
                break;
              case "scale":
                break;
              case "pane":
                break;
              case "number":
                break;
              case "layout":
                break;
              case "pagesetup":
                break;
              case "selected":
                break;
              case "protectobjects":
                break;
              case "enableselection":
                break;
              case "protectscenarios":
                break;
              case "validprinterinfo":
                break;
              case "horizontalresolution":
                break;
              case "verticalresolution":
                break;
              case "numberofcopies":
                break;
              case "activepane":
                break;
              case "toprowvisible":
                break;
              case "leftcolumnvisible":
                break;
              case "fittopage":
                break;
              case "rangeselection":
                break;
              case "papersizeindex":
                break;
              case "pagelayoutzoom":
                break;
              case "pagebreakzoom":
                break;
              case "filteron":
                break;
              case "fitwidth":
                break;
              case "fitheight":
                break;
              case "commentslayout":
                break;
              case "zoom":
                break;
              case "lefttoright":
                break;
              case "gridlines":
                break;
              case "allowsort":
                break;
              case "allowfilter":
                break;
              case "allowinsertrows":
                break;
              case "allowdeleterows":
                break;
              case "allowinsertcols":
                break;
              case "allowdeletecols":
                break;
              case "allowinserthyperlinks":
                break;
              case "allowformatcells":
                break;
              case "allowsizecols":
                break;
              case "allowsizerows":
                break;
              case "nosummaryrowsbelowdetail":
                u["!outline"] || (u["!outline"] = {}), (u["!outline"].above = !0);
                break;
              case "tabcolorindex":
                break;
              case "donotdisplayheadings":
                break;
              case "showpagelayoutzoom":
                break;
              case "nosummarycolumnsrightdetail":
                u["!outline"] || (u["!outline"] = {}), (u["!outline"].left = !0);
                break;
              case "blackandwhite":
                break;
              case "donotdisplayzeros":
                break;
              case "displaypagebreak":
                break;
              case "rowcolheadings":
                break;
              case "donotdisplayoutline":
                break;
              case "noorientation":
                break;
              case "allowusepivottables":
                break;
              case "zeroheight":
                break;
              case "viewablerange":
                break;
              case "selection":
                break;
              case "protectcontents":
                break;
              default:
                de = !1;
            }
            break;
          case "pivottable":
          case "pivotcache":
            switch (c[3]) {
              case "immediateitemsondrop":
                break;
              case "showpagemultipleitemlabel":
                break;
              case "compactrowindent":
                break;
              case "location":
                break;
              case "pivotfield":
                break;
              case "orientation":
                break;
              case "layoutform":
                break;
              case "layoutsubtotallocation":
                break;
              case "layoutcompactrow":
                break;
              case "position":
                break;
              case "pivotitem":
                break;
              case "datatype":
                break;
              case "datafield":
                break;
              case "sourcename":
                break;
              case "parentfield":
                break;
              case "ptlineitems":
                break;
              case "ptlineitem":
                break;
              case "countofsameitems":
                break;
              case "item":
                break;
              case "itemtype":
                break;
              case "ptsource":
                break;
              case "cacheindex":
                break;
              case "consolidationreference":
                break;
              case "filename":
                break;
              case "reference":
                break;
              case "nocolumngrand":
                break;
              case "norowgrand":
                break;
              case "blanklineafteritems":
                break;
              case "hidden":
                break;
              case "subtotal":
                break;
              case "basefield":
                break;
              case "mapchilditems":
                break;
              case "function":
                break;
              case "refreshonfileopen":
                break;
              case "printsettitles":
                break;
              case "mergelabels":
                break;
              case "defaultversion":
                break;
              case "refreshname":
                break;
              case "refreshdate":
                break;
              case "refreshdatecopy":
                break;
              case "versionlastrefresh":
                break;
              case "versionlastupdate":
                break;
              case "versionupdateablemin":
                break;
              case "versionrefreshablemin":
                break;
              case "calculation":
                break;
              default:
                de = !1;
            }
            break;
          case "pagebreaks":
            switch (c[3]) {
              case "colbreaks":
                break;
              case "colbreak":
                break;
              case "rowbreaks":
                break;
              case "rowbreak":
                break;
              case "colstart":
                break;
              case "colend":
                break;
              case "rowend":
                break;
              default:
                de = !1;
            }
            break;
          case "autofilter":
            switch (c[3]) {
              case "autofiltercolumn":
                break;
              case "autofiltercondition":
                break;
              case "autofilterand":
                break;
              case "autofilteror":
                break;
              default:
                de = !1;
            }
            break;
          case "querytable":
            switch (c[3]) {
              case "id":
                break;
              case "autoformatfont":
                break;
              case "autoformatpattern":
                break;
              case "querysource":
                break;
              case "querytype":
                break;
              case "enableredirections":
                break;
              case "refreshedinxl9":
                break;
              case "urlstring":
                break;
              case "htmltables":
                break;
              case "connection":
                break;
              case "commandtext":
                break;
              case "refreshinfo":
                break;
              case "notitles":
                break;
              case "nextid":
                break;
              case "columninfo":
                break;
              case "overwritecells":
                break;
              case "donotpromptforfile":
                break;
              case "textwizardsettings":
                break;
              case "source":
                break;
              case "number":
                break;
              case "decimal":
                break;
              case "thousandseparator":
                break;
              case "trailingminusnumbers":
                break;
              case "formatsettings":
                break;
              case "fieldtype":
                break;
              case "delimiters":
                break;
              case "tab":
                break;
              case "comma":
                break;
              case "autoformatname":
                break;
              case "versionlastedit":
                break;
              case "versionlastrefresh":
                break;
              default:
                de = !1;
            }
            break;
          case "datavalidation":
            switch (c[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              case "cellrangelist":
                break;
              default:
                de = !1;
            }
            break;
          case "sorting":
          case "conditionalformatting":
            switch (c[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "cellrangelist":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              default:
                de = !1;
            }
            break;
          case "mapinfo":
          case "schema":
          case "data":
            switch (c[3]) {
              case "map":
                break;
              case "entry":
                break;
              case "range":
                break;
              case "xpath":
                break;
              case "field":
                break;
              case "xsdtype":
                break;
              case "filteron":
                break;
              case "aggregate":
                break;
              case "elementtype":
                break;
              case "attributetype":
                break;
              case "schema":
              case "element":
              case "complextype":
              case "datatype":
              case "all":
              case "attribute":
              case "extends":
                break;
              case "row":
                break;
              default:
                de = !1;
            }
            break;
          case "smarttags":
            break;
          default:
            de = !1;
            break;
        }
        if (de || c[3].match(/!\[CDATA/)) break;
        if (!f[f.length - 1][1]) throw "Unrecognized tag: " + c[3] + "|" + f.join("|");
        if (f[f.length - 1][0] === "customdocumentproperties") {
          if (c[0].slice(-2) === "/>") break;
          c[1] === "/" ? Jd(V, j, K, n.slice(P, c.index)) : ((K = c), (P = c.index + c[0].length));
          break;
        }
        if (r.WTF) throw "Unrecognized tag: " + c[3] + "|" + f.join("|");
    }
  var Z = {};
  return !r.bookSheets && !r.bookProps && (Z.Sheets = l), (Z.SheetNames = h), (Z.Workbook = I), (Z.SSF = Ke(ge)), (Z.Props = X), (Z.Custprops = V), Z;
}
function h0(e, a) {
  switch ((X0((a = a || {})), a.type || "base64")) {
    case "base64":
      return t0(_r(e), a);
    case "binary":
    case "buffer":
    case "file":
      return t0(e, a);
    case "array":
      return t0(ma(e), a);
  }
}
function r2(e) {
  var a = {},
    r = e.content;
  if (((r.l = 28), (a.AnsiUserType = r.read_shift(0, "lpstr-ansi")), (a.AnsiClipboardFormat = vo(r)), r.length - r.l <= 4)) return a;
  var n = r.read_shift(4);
  if (n == 0 || n > 40 || ((r.l -= 4), (a.Reserved1 = r.read_shift(0, "lpstr-ansi")), r.length - r.l <= 4) || ((n = r.read_shift(4)), n !== 1907505652) || ((a.UnicodeClipboardFormat = po(r)), (n = r.read_shift(4)), n == 0 || n > 40)) return a;
  (r.l -= 4), (a.Reserved2 = r.read_shift(0, "lpwstr"));
}
var a2 = [60, 1084, 2066, 2165, 2175];
function t2(e, a, r, n, t) {
  var i = n,
    s = [],
    c = r.slice(r.l, r.l + i);
  if (t && t.enc && t.enc.insitu && c.length > 0)
    switch (e) {
      case 9:
      case 521:
      case 1033:
      case 2057:
      case 47:
      case 405:
      case 225:
      case 406:
      case 312:
      case 404:
      case 10:
        break;
      case 133:
        break;
      default:
        t.enc.insitu(c);
    }
  s.push(c), (r.l += i);
  for (var f = Xr(r, r.l), o = x0[f], l = 0; o != null && a2.indexOf(f) > -1; ) (i = Xr(r, r.l + 2)), (l = r.l + 4), f == 2066 ? (l += 4) : (f == 2165 || f == 2175) && (l += 12), (c = r.slice(l, r.l + 4 + i)), s.push(c), (r.l += 4 + i), (o = x0[(f = Xr(r, r.l))]);
  var h = ra(s);
  je(h, 0);
  var u = 0;
  h.lens = [];
  for (var d = 0; d < s.length; ++d) h.lens.push(u), (u += s[d].length);
  if (h.length < n) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + h.length + " < " + n;
  return a.f(h, h.length, t);
}
function Lr(e, a, r) {
  if (e.t !== "z" && e.XF) {
    var n = 0;
    try {
      (n = e.z || e.XF.numFmtId || 0), a.cellNF && (e.z = ge[n]);
    } catch (i) {
      if (a.WTF) throw i;
    }
    if (!a || a.cellText !== !1)
      try {
        e.t === "e" ? (e.w = e.w || Ea[e.v]) : n === 0 || n == "General" ? (e.t === "n" ? ((e.v | 0) === e.v ? (e.w = e.v.toString(10)) : (e.w = rt(e.v))) : (e.w = da(e.v))) : (e.w = Sr(n, e.v, { date1904: !!r, dateNF: a && a.dateNF }));
      } catch (i) {
        if (a.WTF) throw i;
      }
    if (a.cellDates && n && e.t == "n" && Na(ge[n] || String(n))) {
      var t = ua(e.v);
      t && ((e.t = "d"), (e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u)));
    }
  }
}
function St(e, a, r) {
  return { v: e, ixfe: a, t: r };
}
function n2(e, a) {
  var r = { opts: {} },
    n = {},
    t = a.dense ? [] : {},
    i = {},
    s = {},
    c = null,
    f = [],
    o = "",
    l = {},
    h,
    u = "",
    d,
    v,
    x,
    g,
    A = {},
    C = [],
    _,
    D,
    b = [],
    N = [],
    S = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] },
    H = {},
    O = function (me) {
      return me < 8 ? xa[me] : (me < 64 && N[me - 8]) || xa[me];
    },
    X = function (me, Ne, Tr) {
      var Ue = Ne.XF.data;
      if (!(!Ue || !Ue.patternType || !Tr || !Tr.cellStyles)) {
        (Ne.s = {}), (Ne.s.patternType = Ue.patternType);
        var fa;
        (fa = it(O(Ue.icvFore))) && (Ne.s.fgColor = { rgb: fa }), (fa = it(O(Ue.icvBack))) && (Ne.s.bgColor = { rgb: fa });
      }
    },
    V = function (me, Ne, Tr) {
      if (!(he > 1) && !(Tr.sheetRows && me.r >= Tr.sheetRows)) {
        if ((Tr.cellStyles && Ne.XF && Ne.XF.data && X(me, Ne, Tr), delete Ne.ixfe, delete Ne.XF, (h = me), (u = ve(me)), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), me.r < s.s.r && (s.s.r = me.r), me.c < s.s.c && (s.s.c = me.c), me.r + 1 > s.e.r && (s.e.r = me.r + 1), me.c + 1 > s.e.c && (s.e.c = me.c + 1), Tr.cellFormula && Ne.f)) {
          for (var Ue = 0; Ue < C.length; ++Ue)
            if (!(C[Ue][0].s.c > me.c || C[Ue][0].s.r > me.r) && !(C[Ue][0].e.c < me.c || C[Ue][0].e.r < me.r)) {
              (Ne.F = ke(C[Ue][0])), (C[Ue][0].s.c != me.c || C[Ue][0].s.r != me.r) && delete Ne.f, Ne.f && (Ne.f = "" + Qe(C[Ue][1], s, me, G, P));
              break;
            }
        }
        Tr.dense ? (t[me.r] || (t[me.r] = []), (t[me.r][me.c] = Ne)) : (t[u] = Ne);
      }
    },
    P = { enc: !1, sbcch: 0, snames: [], sharedf: A, arrayf: C, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!a && !!a.cellStyles, WTF: !!a && !!a.wtf };
  a.password && (P.password = a.password);
  var K,
    oe = [],
    re = [],
    fe = [],
    ie = [],
    Ae = !1,
    G = [];
  (G.SheetNames = P.snames), (G.sharedf = P.sharedf), (G.arrayf = P.arrayf), (G.names = []), (G.XTI = []);
  var ue = 0,
    he = 0,
    F = 0,
    L = [],
    I = [],
    R;
  (P.codepage = 1200), Dr(1200);
  for (var j = !1; e.l < e.length - 1; ) {
    var ee = e.l,
      se = e.read_shift(2);
    if (se === 0 && ue === 10) break;
    var Q = e.l === e.length ? 0 : e.read_shift(2),
      Y = x0[se];
    if (Y && Y.f) {
      if (a.bookSheets && ue === 133 && se !== 133) break;
      if (((ue = se), Y.r === 2 || Y.r == 12)) {
        var _e = e.read_shift(2);
        if (((Q -= 2), !P.enc && _e !== se && (((_e & 255) << 8) | (_e >> 8)) !== se)) throw new Error("rt mismatch: " + _e + "!=" + se);
        Y.r == 12 && ((e.l += 10), (Q -= 10));
      }
      var y = {};
      if ((se === 10 ? (y = Y.f(e, Q, P)) : (y = t2(se, Y, e, Q, P)), he == 0 && [9, 521, 1033, 2057].indexOf(ue) === -1)) continue;
      switch (se) {
        case 34:
          r.opts.Date1904 = S.WBProps.date1904 = y;
          break;
        case 134:
          r.opts.WriteProtect = !0;
          break;
        case 47:
          if ((P.enc || (e.l = 0), (P.enc = y), !a.password)) throw new Error("File is password-protected");
          if (y.valid == null) throw new Error("Encryption scheme unsupported");
          if (!y.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          P.lastuser = y;
          break;
        case 66:
          var ye = Number(y);
          switch (ye) {
            case 21010:
              ye = 1200;
              break;
            case 32768:
              ye = 1e4;
              break;
            case 32769:
              ye = 1252;
              break;
          }
          Dr((P.codepage = ye)), (j = !0);
          break;
        case 317:
          P.rrtabid = y;
          break;
        case 25:
          P.winlocked = y;
          break;
        case 439:
          r.opts.RefreshAll = y;
          break;
        case 12:
          r.opts.CalcCount = y;
          break;
        case 16:
          r.opts.CalcDelta = y;
          break;
        case 17:
          r.opts.CalcIter = y;
          break;
        case 13:
          r.opts.CalcMode = y;
          break;
        case 14:
          r.opts.CalcPrecision = y;
          break;
        case 95:
          r.opts.CalcSaveRecalc = y;
          break;
        case 15:
          P.CalcRefMode = y;
          break;
        case 2211:
          r.opts.FullCalc = y;
          break;
        case 129:
          y.fDialog && (t["!type"] = "dialog"), y.fBelow || ((t["!outline"] || (t["!outline"] = {})).above = !0), y.fRight || ((t["!outline"] || (t["!outline"] = {})).left = !0);
          break;
        case 224:
          b.push(y);
          break;
        case 430:
          G.push([y]), (G[G.length - 1].XTI = []);
          break;
        case 35:
        case 547:
          G[G.length - 1].push(y);
          break;
        case 24:
        case 536:
          (R = { Name: y.Name, Ref: Qe(y.rgce, s, null, G, P) }), y.itab > 0 && (R.Sheet = y.itab - 1), G.names.push(R), G[0] || ((G[0] = []), (G[0].XTI = [])), G[G.length - 1].push(y), y.Name == "_xlnm._FilterDatabase" && y.itab > 0 && y.rgce && y.rgce[0] && y.rgce[0][0] && y.rgce[0][0][0] == "PtgArea3d" && (I[y.itab - 1] = { ref: ke(y.rgce[0][0][1][2]) });
          break;
        case 22:
          P.ExternCount = y;
          break;
        case 23:
          G.length == 0 && ((G[0] = []), (G[0].XTI = [])), (G[G.length - 1].XTI = G[G.length - 1].XTI.concat(y)), (G.XTI = G.XTI.concat(y));
          break;
        case 2196:
          if (P.biff < 8) break;
          R != null && (R.Comment = y[1]);
          break;
        case 18:
          t["!protect"] = y;
          break;
        case 19:
          y !== 0 && P.WTF && console.error("Password verifier: " + y);
          break;
        case 133:
          (i[y.pos] = y), P.snames.push(y.name);
          break;
        case 10:
          {
            if (--he) break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if ((s.e.r--, s.e.c--, (t["!ref"] = ke(s)), a.sheetRows && a.sheetRows <= s.e.r)) {
                  var te = s.e.r;
                  (s.e.r = a.sheetRows - 1), (t["!fullref"] = t["!ref"]), (t["!ref"] = ke(s)), (s.e.r = te);
                }
                s.e.r++, s.e.c++;
              }
              oe.length > 0 && (t["!merges"] = oe), re.length > 0 && (t["!objects"] = re), fe.length > 0 && (t["!cols"] = fe), ie.length > 0 && (t["!rows"] = ie), S.Sheets.push(H);
            }
            o === "" ? (l = t) : (n[o] = t), (t = a.dense ? [] : {});
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if ((P.biff === 8 && (P.biff = { 9: 2, 521: 3, 1033: 4 }[se] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[y.BIFFVer] || 8), (P.biffguess = y.BIFFVer == 0), y.BIFFVer == 0 && y.dt == 4096 && ((P.biff = 5), (j = !0), Dr((P.codepage = 28591))), P.biff == 8 && y.BIFFVer == 0 && y.dt == 16 && (P.biff = 2), he++)) break;
            if (((t = a.dense ? [] : {}), P.biff < 8 && !j && ((j = !0), Dr((P.codepage = a.codepage || 1252))), P.biff < 5 || (y.BIFFVer == 0 && y.dt == 4096))) {
              o === "" && (o = "Sheet1"), (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } });
              var de = { pos: e.l - Q, name: o };
              (i[de.pos] = de), P.snames.push(o);
            } else o = (i[ee] || { name: "" }).name;
            y.dt == 32 && (t["!type"] = "chart"), y.dt == 64 && (t["!type"] = "macro"), (oe = []), (re = []), (P.arrayf = C = []), (fe = []), (ie = []), (Ae = !1), (H = { Hidden: (i[ee] || { hs: 0 }).hs, name: o });
          }
          break;
        case 515:
        case 3:
        case 2:
          t["!type"] == "chart" && (a.dense ? (t[y.r] || [])[y.c] : t[ve({ c: y.c, r: y.r })]) && ++y.c, (_ = { ixfe: y.ixfe, XF: b[y.ixfe] || {}, v: y.val, t: "n" }), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V({ c: y.c, r: y.r }, _, a);
          break;
        case 5:
        case 517:
          (_ = { ixfe: y.ixfe, XF: b[y.ixfe], v: y.val, t: y.t }), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V({ c: y.c, r: y.r }, _, a);
          break;
        case 638:
          (_ = { ixfe: y.ixfe, XF: b[y.ixfe], v: y.rknum, t: "n" }), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V({ c: y.c, r: y.r }, _, a);
          break;
        case 189:
          for (var le = y.c; le <= y.C; ++le) {
            var Z = y.rkrec[le - y.c][0];
            (_ = { ixfe: Z, XF: b[Z], v: y.rkrec[le - y.c][1], t: "n" }), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V({ c: le, r: y.r }, _, a);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (y.val == "String") {
              c = y;
              break;
            }
            if (((_ = St(y.val, y.cell.ixfe, y.tt)), (_.XF = b[_.ixfe]), a.cellFormula)) {
              var Fe = y.formula;
              if (Fe && Fe[0] && Fe[0][0] && Fe[0][0][0] == "PtgExp") {
                var Je = Fe[0][0][1][0],
                  xr = Fe[0][0][1][1],
                  vr = ve({ r: Je, c: xr });
                A[vr] ? (_.f = "" + Qe(y.formula, s, y.cell, G, P)) : (_.F = ((a.dense ? (t[Je] || [])[xr] : t[vr]) || {}).F);
              } else _.f = "" + Qe(y.formula, s, y.cell, G, P);
            }
            F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V(y.cell, _, a), (c = y);
          }
          break;
        case 7:
        case 519:
          if (c) (c.val = y), (_ = St(y, c.cell.ixfe, "s")), (_.XF = b[_.ixfe]), a.cellFormula && (_.f = "" + Qe(c.formula, s, c.cell, G, P)), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V(c.cell, _, a), (c = null);
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            C.push(y);
            var yr = ve(y[0].s);
            if (((d = a.dense ? (t[y[0].s.r] || [])[y[0].s.c] : t[yr]), a.cellFormula && d)) {
              if (!c || !yr || !d) break;
              (d.f = "" + Qe(y[1], s, y[0], G, P)), (d.F = ke(y[0]));
            }
          }
          break;
        case 1212:
          {
            if (!a.cellFormula) break;
            if (u) {
              if (!c) break;
              (A[ve(c.cell)] = y[0]), (d = a.dense ? (t[c.cell.r] || [])[c.cell.c] : t[ve(c.cell)]), ((d || {}).f = "" + Qe(y[0], s, h, G, P));
            }
          }
          break;
        case 253:
          (_ = St(f[y.isst].t, y.ixfe, "s")), f[y.isst].h && (_.h = f[y.isst].h), (_.XF = b[_.ixfe]), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V({ c: y.c, r: y.r }, _, a);
          break;
        case 513:
          a.sheetStubs && ((_ = { ixfe: y.ixfe, XF: b[y.ixfe], t: "z" }), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V({ c: y.c, r: y.r }, _, a));
          break;
        case 190:
          if (a.sheetStubs)
            for (var Jr = y.c; Jr <= y.C; ++Jr) {
              var pr = y.ixfe[Jr - y.c];
              (_ = { ixfe: pr, XF: b[pr], t: "z" }), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V({ c: Jr, r: y.r }, _, a);
            }
          break;
        case 214:
        case 516:
        case 4:
          (_ = St(y.val, y.ixfe, "s")), (_.XF = b[_.ixfe]), F > 0 && (_.z = L[(_.ixfe >> 8) & 63]), Lr(_, a, r.opts.Date1904), V({ c: y.c, r: y.r }, _, a);
          break;
        case 0:
        case 512:
          he === 1 && (s = y);
          break;
        case 252:
          f = y;
          break;
        case 1054:
          if (P.biff == 4) {
            L[F++] = y[1];
            for (var Vr = 0; Vr < F + 163 && ge[Vr] != y[1]; ++Vr);
            Vr >= 163 && ha(y[1], F + 163);
          } else ha(y[1], y[0]);
          break;
        case 30:
          {
            L[F++] = y;
            for (var qr = 0; qr < F + 163 && ge[qr] != y; ++qr);
            qr >= 163 && ha(y, F + 163);
          }
          break;
        case 229:
          oe = oe.concat(y);
          break;
        case 93:
          re[y.cmo[0]] = P.lastobj = y;
          break;
        case 438:
          P.lastobj.TxO = y;
          break;
        case 127:
          P.lastobj.ImData = y;
          break;
        case 440:
          for (g = y[0].s.r; g <= y[0].e.r; ++g) for (x = y[0].s.c; x <= y[0].e.c; ++x) (d = a.dense ? (t[g] || [])[x] : t[ve({ c: x, r: g })]), d && (d.l = y[1]);
          break;
        case 2048:
          for (g = y[0].s.r; g <= y[0].e.r; ++g) for (x = y[0].s.c; x <= y[0].e.c; ++x) (d = a.dense ? (t[g] || [])[x] : t[ve({ c: x, r: g })]), d && d.l && (d.l.Tooltip = y[1]);
          break;
        case 28:
          {
            if (P.biff <= 5 && P.biff >= 2) break;
            d = a.dense ? (t[y[0].r] || [])[y[0].c] : t[ve(y[0])];
            var Ma = re[y[2]];
            d || (a.dense ? (t[y[0].r] || (t[y[0].r] = []), (d = t[y[0].r][y[0].c] = { t: "z" })) : (d = t[ve(y[0])] = { t: "z" }), (s.e.r = Math.max(s.e.r, y[0].r)), (s.s.r = Math.min(s.s.r, y[0].r)), (s.e.c = Math.max(s.e.c, y[0].c)), (s.s.c = Math.min(s.s.c, y[0].c))), d.c || (d.c = []), (v = { a: y[1], t: Ma.TxO.t }), d.c.push(v);
          }
          break;
        case 2173:
          F1(b[y.ixfe], y.ext);
          break;
        case 125:
          {
            if (!P.cellStyles) break;
            for (; y.e >= y.s; ) (fe[y.e--] = { width: y.w / 256, level: y.level || 0, hidden: !!(y.flags & 1) }), Ae || ((Ae = !0), U0(y.w / 256)), Ia(fe[y.e + 1]);
          }
          break;
        case 520:
          {
            var sr = {};
            y.level != null && ((ie[y.r] = sr), (sr.level = y.level)), y.hidden && ((ie[y.r] = sr), (sr.hidden = !0)), y.hpt && ((ie[y.r] = sr), (sr.hpt = y.hpt), (sr.hpx = st(y.hpt)));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          t["!margins"] || Qa((t["!margins"] = {})), (t["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[se]] = y);
          break;
        case 161:
          t["!margins"] || Qa((t["!margins"] = {})), (t["!margins"].header = y.header), (t["!margins"].footer = y.footer);
          break;
        case 574:
          y.RTL && (S.Views[0].RTL = !0);
          break;
        case 146:
          N = y;
          break;
        case 2198:
          K = y;
          break;
        case 140:
          D = y;
          break;
        case 442:
          o ? (H.CodeName = y || H.name) : (S.WBProps.CodeName = y || "ThisWorkbook");
          break;
      }
    } else Y || console.error("Missing Info for XLS Record 0x" + se.toString(16)), (e.l += Q);
  }
  return (
    (r.SheetNames = Br(i)
      .sort(function (Pr, me) {
        return Number(Pr) - Number(me);
      })
      .map(function (Pr) {
        return i[Pr].name;
      })),
    a.bookSheets || (r.Sheets = n),
    !r.SheetNames.length && l["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = l)) : (r.Preamble = l),
    r.Sheets &&
      I.forEach(function (Pr, me) {
        r.Sheets[r.SheetNames[me]]["!autofilter"] = Pr;
      }),
    (r.Strings = f),
    (r.SSF = Ke(ge)),
    P.enc && (r.Encryption = P.enc),
    K && (r.Themes = K),
    (r.Metadata = {}),
    D !== void 0 && (r.Metadata.Country = D),
    G.names.length > 0 && (S.Names = G.names),
    (r.Workbook = S),
    r
  );
}
var ni = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };
function i2(e, a, r) {
  var n = Ee.find(e, "/!DocumentSummaryInformation");
  if (n && n.size > 0)
    try {
      var t = Vn(n, ko, ni.DSI);
      for (var i in t) a[i] = t[i];
    } catch (o) {
      if (r.WTF) throw o;
    }
  var s = Ee.find(e, "/!SummaryInformation");
  if (s && s.size > 0)
    try {
      var c = Vn(s, wo, ni.SI);
      for (var f in c) a[f] == null && (a[f] = c[f]);
    } catch (o) {
      if (r.WTF) throw o;
    }
  a.HeadingPairs && a.TitlesOfParts && (cs(a.HeadingPairs, a.TitlesOfParts, a, r), delete a.HeadingPairs, delete a.TitlesOfParts);
}
function Xs(e, a) {
  a || (a = {}), X0(a), mi(), a.codepage && k0(a.codepage);
  var r, n;
  if (e.FullPaths) {
    if (Ee.find(e, "/encryption")) throw new Error("File is password-protected");
    (r = Ee.find(e, "!CompObj")), (n = Ee.find(e, "/Workbook") || Ee.find(e, "/Book"));
  } else {
    switch (a.type) {
      case "base64":
        e = Rr(_r(e));
        break;
      case "binary":
        e = Rr(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    je(e, 0), (n = { content: e });
  }
  var t, i;
  if ((r && r2(r), a.bookProps && !a.bookSheets)) t = {};
  else {
    var s = Te ? "buffer" : "array";
    if (n && n.content) t = n2(n.content, a);
    else if ((i = Ee.find(e, "PerfectOffice_MAIN")) && i.content) t = qa.to_workbook(i.content, ((a.type = s), a));
    else if ((i = Ee.find(e, "NativeContent_MAIN")) && i.content) t = qa.to_workbook(i.content, ((a.type = s), a));
    else throw (i = Ee.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    a.bookVBA && e.FullPaths && Ee.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (t.vbaraw = X1(e));
  }
  var c = {};
  return e.FullPaths && i2(e, c, a), (t.Props = t.Custprops = c), a.bookFiles && (t.cfb = e), t;
}
var bt = {
    0: { f: Hx },
    1: { f: Xx },
    2: { f: Qx },
    3: { f: Kx },
    4: { f: zx },
    5: { f: Zx },
    6: { f: ad },
    7: { f: Jx },
    8: { f: cd },
    9: { f: sd },
    10: { f: nd },
    11: { f: id },
    12: { f: $x },
    13: { f: ed },
    14: { f: Yx },
    15: { f: jx },
    16: { f: Us },
    17: { f: td },
    18: { f: qx },
    19: { f: N0 },
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
    32: {},
    33: {},
    34: {},
    35: { T: 1 },
    36: { T: -1 },
    37: { T: 1 },
    38: { T: -1 },
    39: { f: Pd },
    40: {},
    42: {},
    43: { f: n1 },
    44: { f: t1 },
    45: { f: i1 },
    46: { f: c1 },
    47: { f: s1 },
    48: {},
    49: { f: co },
    50: {},
    51: { f: C1 },
    52: { T: 1 },
    53: { T: -1 },
    54: { T: 1 },
    55: { T: -1 },
    56: { T: 1 },
    57: { T: -1 },
    58: {},
    59: {},
    60: { f: _s },
    62: { f: rd },
    63: { f: N1 },
    64: { f: pd },
    65: {},
    66: {},
    67: {},
    68: {},
    69: {},
    70: {},
    128: {},
    129: { T: 1 },
    130: { T: -1 },
    131: { T: 1, f: nr, p: 0 },
    132: { T: -1 },
    133: { T: 1 },
    134: { T: -1 },
    135: { T: 1 },
    136: { T: -1 },
    137: { T: 1, f: vd },
    138: { T: -1 },
    139: { T: 1 },
    140: { T: -1 },
    141: { T: 1 },
    142: { T: -1 },
    143: { T: 1 },
    144: { T: -1 },
    145: { T: 1 },
    146: { T: -1 },
    147: { f: Gx },
    148: { f: Vx, p: 16 },
    151: { f: ld },
    152: {},
    153: { f: Id },
    154: {},
    155: {},
    156: { f: Dd },
    157: {},
    158: {},
    159: { T: 1, f: wu },
    160: { T: -1 },
    161: { T: 1, f: Ta },
    162: { T: -1 },
    163: { T: 1 },
    164: { T: -1 },
    165: { T: 1 },
    166: { T: -1 },
    167: {},
    168: {},
    169: {},
    170: {},
    171: {},
    172: { T: 1 },
    173: { T: -1 },
    174: {},
    175: {},
    176: { f: fd },
    177: { T: 1 },
    178: { T: -1 },
    179: { T: 1 },
    180: { T: -1 },
    181: { T: 1 },
    182: { T: -1 },
    183: { T: 1 },
    184: { T: -1 },
    185: { T: 1 },
    186: { T: -1 },
    187: { T: 1 },
    188: { T: -1 },
    189: { T: 1 },
    190: { T: -1 },
    191: { T: 1 },
    192: { T: -1 },
    193: { T: 1 },
    194: { T: -1 },
    195: { T: 1 },
    196: { T: -1 },
    197: { T: 1 },
    198: { T: -1 },
    199: { T: 1 },
    200: { T: -1 },
    201: { T: 1 },
    202: { T: -1 },
    203: { T: 1 },
    204: { T: -1 },
    205: { T: 1 },
    206: { T: -1 },
    207: { T: 1 },
    208: { T: -1 },
    209: { T: 1 },
    210: { T: -1 },
    211: { T: 1 },
    212: { T: -1 },
    213: { T: 1 },
    214: { T: -1 },
    215: { T: 1 },
    216: { T: -1 },
    217: { T: 1 },
    218: { T: -1 },
    219: { T: 1 },
    220: { T: -1 },
    221: { T: 1 },
    222: { T: -1 },
    223: { T: 1 },
    224: { T: -1 },
    225: { T: 1 },
    226: { T: -1 },
    227: { T: 1 },
    228: { T: -1 },
    229: { T: 1 },
    230: { T: -1 },
    231: { T: 1 },
    232: { T: -1 },
    233: { T: 1 },
    234: { T: -1 },
    235: { T: 1 },
    236: { T: -1 },
    237: { T: 1 },
    238: { T: -1 },
    239: { T: 1 },
    240: { T: -1 },
    241: { T: 1 },
    242: { T: -1 },
    243: { T: 1 },
    244: { T: -1 },
    245: { T: 1 },
    246: { T: -1 },
    247: { T: 1 },
    248: { T: -1 },
    249: { T: 1 },
    250: { T: -1 },
    251: { T: 1 },
    252: { T: -1 },
    253: { T: 1 },
    254: { T: -1 },
    255: { T: 1 },
    256: { T: -1 },
    257: { T: 1 },
    258: { T: -1 },
    259: { T: 1 },
    260: { T: -1 },
    261: { T: 1 },
    262: { T: -1 },
    263: { T: 1 },
    264: { T: -1 },
    265: { T: 1 },
    266: { T: -1 },
    267: { T: 1 },
    268: { T: -1 },
    269: { T: 1 },
    270: { T: -1 },
    271: { T: 1 },
    272: { T: -1 },
    273: { T: 1 },
    274: { T: -1 },
    275: { T: 1 },
    276: { T: -1 },
    277: {},
    278: { T: 1 },
    279: { T: -1 },
    280: { T: 1 },
    281: { T: -1 },
    282: { T: 1 },
    283: { T: 1 },
    284: { T: -1 },
    285: { T: 1 },
    286: { T: -1 },
    287: { T: 1 },
    288: { T: -1 },
    289: { T: 1 },
    290: { T: -1 },
    291: { T: 1 },
    292: { T: -1 },
    293: { T: 1 },
    294: { T: -1 },
    295: { T: 1 },
    296: { T: -1 },
    297: { T: 1 },
    298: { T: -1 },
    299: { T: 1 },
    300: { T: -1 },
    301: { T: 1 },
    302: { T: -1 },
    303: { T: 1 },
    304: { T: -1 },
    305: { T: 1 },
    306: { T: -1 },
    307: { T: 1 },
    308: { T: -1 },
    309: { T: 1 },
    310: { T: -1 },
    311: { T: 1 },
    312: { T: -1 },
    313: { T: -1 },
    314: { T: 1 },
    315: { T: -1 },
    316: { T: 1 },
    317: { T: -1 },
    318: { T: 1 },
    319: { T: -1 },
    320: { T: 1 },
    321: { T: -1 },
    322: { T: 1 },
    323: { T: -1 },
    324: { T: 1 },
    325: { T: -1 },
    326: { T: 1 },
    327: { T: -1 },
    328: { T: 1 },
    329: { T: -1 },
    330: { T: 1 },
    331: { T: -1 },
    332: { T: 1 },
    333: { T: -1 },
    334: { T: 1 },
    335: { f: y1 },
    336: { T: -1 },
    337: { f: O1, T: 1 },
    338: { T: -1 },
    339: { T: 1 },
    340: { T: -1 },
    341: { T: 1 },
    342: { T: -1 },
    343: { T: 1 },
    344: { T: -1 },
    345: { T: 1 },
    346: { T: -1 },
    347: { T: 1 },
    348: { T: -1 },
    349: { T: 1 },
    350: { T: -1 },
    351: {},
    352: {},
    353: { T: 1 },
    354: { T: -1 },
    355: { f: f0 },
    357: {},
    358: {},
    359: {},
    360: { T: 1 },
    361: {},
    362: { f: ms },
    363: {},
    364: {},
    366: {},
    367: {},
    368: {},
    369: {},
    370: {},
    371: {},
    372: { T: 1 },
    373: { T: -1 },
    374: { T: 1 },
    375: { T: -1 },
    376: { T: 1 },
    377: { T: -1 },
    378: { T: 1 },
    379: { T: -1 },
    380: { T: 1 },
    381: { T: -1 },
    382: { T: 1 },
    383: { T: -1 },
    384: { T: 1 },
    385: { T: -1 },
    386: { T: 1 },
    387: { T: -1 },
    388: { T: 1 },
    389: { T: -1 },
    390: { T: 1 },
    391: { T: -1 },
    392: { T: 1 },
    393: { T: -1 },
    394: { T: 1 },
    395: { T: -1 },
    396: {},
    397: {},
    398: {},
    399: {},
    400: {},
    401: { T: 1 },
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    409: {},
    410: {},
    411: {},
    412: {},
    413: {},
    414: {},
    415: {},
    416: {},
    417: {},
    418: {},
    419: {},
    420: {},
    421: {},
    422: { T: 1 },
    423: { T: 1 },
    424: { T: -1 },
    425: { T: -1 },
    426: { f: ud },
    427: { f: hd },
    428: {},
    429: { T: 1 },
    430: { T: -1 },
    431: { T: 1 },
    432: { T: -1 },
    433: { T: 1 },
    434: { T: -1 },
    435: { T: 1 },
    436: { T: -1 },
    437: { T: 1 },
    438: { T: -1 },
    439: { T: 1 },
    440: { T: -1 },
    441: { T: 1 },
    442: { T: -1 },
    443: { T: 1 },
    444: { T: -1 },
    445: { T: 1 },
    446: { T: -1 },
    447: { T: 1 },
    448: { T: -1 },
    449: { T: 1 },
    450: { T: -1 },
    451: { T: 1 },
    452: { T: -1 },
    453: { T: 1 },
    454: { T: -1 },
    455: { T: 1 },
    456: { T: -1 },
    457: { T: 1 },
    458: { T: -1 },
    459: { T: 1 },
    460: { T: -1 },
    461: { T: 1 },
    462: { T: -1 },
    463: { T: 1 },
    464: { T: -1 },
    465: { T: 1 },
    466: { T: -1 },
    467: { T: 1 },
    468: { T: -1 },
    469: { T: 1 },
    470: { T: -1 },
    471: {},
    472: {},
    473: { T: 1 },
    474: { T: -1 },
    475: {},
    476: { f: dd },
    477: {},
    478: {},
    479: { T: 1 },
    480: { T: -1 },
    481: { T: 1 },
    482: { T: -1 },
    483: { T: 1 },
    484: { T: -1 },
    485: { f: Wx },
    486: { T: 1 },
    487: { T: -1 },
    488: { T: 1 },
    489: { T: -1 },
    490: { T: 1 },
    491: { T: -1 },
    492: { T: 1 },
    493: { T: -1 },
    494: { f: od },
    495: { T: 1 },
    496: { T: -1 },
    497: { T: 1 },
    498: { T: -1 },
    499: {},
    500: { T: 1 },
    501: { T: -1 },
    502: { T: 1 },
    503: { T: -1 },
    504: {},
    505: { T: 1 },
    506: { T: -1 },
    507: {},
    508: { T: 1 },
    509: { T: -1 },
    510: { T: 1 },
    511: { T: -1 },
    512: {},
    513: {},
    514: { T: 1 },
    515: { T: -1 },
    516: { T: 1 },
    517: { T: -1 },
    518: { T: 1 },
    519: { T: -1 },
    520: { T: 1 },
    521: { T: -1 },
    522: {},
    523: {},
    524: {},
    525: {},
    526: {},
    527: {},
    528: { T: 1 },
    529: { T: -1 },
    530: { T: 1 },
    531: { T: -1 },
    532: { T: 1 },
    533: { T: -1 },
    534: {},
    535: {},
    536: {},
    537: {},
    538: { T: 1 },
    539: { T: -1 },
    540: { T: 1 },
    541: { T: -1 },
    542: { T: 1 },
    548: {},
    549: {},
    550: { f: f0 },
    551: {},
    552: {},
    553: {},
    554: { T: 1 },
    555: { T: -1 },
    556: { T: 1 },
    557: { T: -1 },
    558: { T: 1 },
    559: { T: -1 },
    560: { T: 1 },
    561: { T: -1 },
    562: {},
    564: {},
    565: { T: 1 },
    566: { T: -1 },
    569: { T: 1 },
    570: { T: -1 },
    572: {},
    573: { T: 1 },
    574: { T: -1 },
    577: {},
    578: {},
    579: {},
    580: {},
    581: {},
    582: {},
    583: {},
    584: {},
    585: {},
    586: {},
    587: {},
    588: { T: -1 },
    589: {},
    590: { T: 1 },
    591: { T: -1 },
    592: { T: 1 },
    593: { T: -1 },
    594: { T: 1 },
    595: { T: -1 },
    596: {},
    597: { T: 1 },
    598: { T: -1 },
    599: { T: 1 },
    600: { T: -1 },
    601: { T: 1 },
    602: { T: -1 },
    603: { T: 1 },
    604: { T: -1 },
    605: { T: 1 },
    606: { T: -1 },
    607: {},
    608: { T: 1 },
    609: { T: -1 },
    610: {},
    611: { T: 1 },
    612: { T: -1 },
    613: { T: 1 },
    614: { T: -1 },
    615: { T: 1 },
    616: { T: -1 },
    617: { T: 1 },
    618: { T: -1 },
    619: { T: 1 },
    620: { T: -1 },
    625: {},
    626: { T: 1 },
    627: { T: -1 },
    628: { T: 1 },
    629: { T: -1 },
    630: { T: 1 },
    631: { T: -1 },
    632: { f: V1 },
    633: { T: 1 },
    634: { T: -1 },
    635: { T: 1, f: H1 },
    636: { T: -1 },
    637: { f: oo },
    638: { T: 1 },
    639: {},
    640: { T: -1 },
    641: { T: 1 },
    642: { T: -1 },
    643: { T: 1 },
    644: {},
    645: { T: -1 },
    646: { T: 1 },
    648: { T: 1 },
    649: {},
    650: { T: -1 },
    651: { f: kd },
    652: {},
    653: { T: 1 },
    654: { T: -1 },
    655: { T: 1 },
    656: { T: -1 },
    657: { T: 1 },
    658: { T: -1 },
    659: {},
    660: { T: 1 },
    661: {},
    662: { T: -1 },
    663: {},
    664: { T: 1 },
    665: {},
    666: { T: -1 },
    667: {},
    668: {},
    669: {},
    671: { T: 1 },
    672: { T: -1 },
    673: { T: 1 },
    674: { T: -1 },
    675: {},
    676: {},
    677: {},
    678: {},
    679: {},
    680: {},
    681: {},
    1024: {},
    1025: {},
    1026: { T: 1 },
    1027: { T: -1 },
    1028: { T: 1 },
    1029: { T: -1 },
    1030: {},
    1031: { T: 1 },
    1032: { T: -1 },
    1033: { T: 1 },
    1034: { T: -1 },
    1035: {},
    1036: {},
    1037: {},
    1038: { T: 1 },
    1039: { T: -1 },
    1040: {},
    1041: { T: 1 },
    1042: { T: -1 },
    1043: {},
    1044: {},
    1045: {},
    1046: { T: 1 },
    1047: { T: -1 },
    1048: { T: 1 },
    1049: { T: -1 },
    1050: {},
    1051: { T: 1 },
    1052: { T: 1 },
    1053: { f: gd },
    1054: { T: 1 },
    1055: {},
    1056: { T: 1 },
    1057: { T: -1 },
    1058: { T: 1 },
    1059: { T: -1 },
    1061: {},
    1062: { T: 1 },
    1063: { T: -1 },
    1064: { T: 1 },
    1065: { T: -1 },
    1066: { T: 1 },
    1067: { T: -1 },
    1068: { T: 1 },
    1069: { T: -1 },
    1070: { T: 1 },
    1071: { T: -1 },
    1072: { T: 1 },
    1073: { T: -1 },
    1075: { T: 1 },
    1076: { T: -1 },
    1077: { T: 1 },
    1078: { T: -1 },
    1079: { T: 1 },
    1080: { T: -1 },
    1081: { T: 1 },
    1082: { T: -1 },
    1083: { T: 1 },
    1084: { T: -1 },
    1085: {},
    1086: { T: 1 },
    1087: { T: -1 },
    1088: { T: 1 },
    1089: { T: -1 },
    1090: { T: 1 },
    1091: { T: -1 },
    1092: { T: 1 },
    1093: { T: -1 },
    1094: { T: 1 },
    1095: { T: -1 },
    1096: {},
    1097: { T: 1 },
    1098: {},
    1099: { T: -1 },
    1100: { T: 1 },
    1101: { T: -1 },
    1102: {},
    1103: {},
    1104: {},
    1105: {},
    1111: {},
    1112: {},
    1113: { T: 1 },
    1114: { T: -1 },
    1115: { T: 1 },
    1116: { T: -1 },
    1117: {},
    1118: { T: 1 },
    1119: { T: -1 },
    1120: { T: 1 },
    1121: { T: -1 },
    1122: { T: 1 },
    1123: { T: -1 },
    1124: { T: 1 },
    1125: { T: -1 },
    1126: {},
    1128: { T: 1 },
    1129: { T: -1 },
    1130: {},
    1131: { T: 1 },
    1132: { T: -1 },
    1133: { T: 1 },
    1134: { T: -1 },
    1135: { T: 1 },
    1136: { T: -1 },
    1137: { T: 1 },
    1138: { T: -1 },
    1139: { T: 1 },
    1140: { T: -1 },
    1141: {},
    1142: { T: 1 },
    1143: { T: -1 },
    1144: { T: 1 },
    1145: { T: -1 },
    1146: {},
    1147: { T: 1 },
    1148: { T: -1 },
    1149: { T: 1 },
    1150: { T: -1 },
    1152: { T: 1 },
    1153: { T: -1 },
    1154: { T: -1 },
    1155: { T: -1 },
    1156: { T: -1 },
    1157: { T: 1 },
    1158: { T: -1 },
    1159: { T: 1 },
    1160: { T: -1 },
    1161: { T: 1 },
    1162: { T: -1 },
    1163: { T: 1 },
    1164: { T: -1 },
    1165: { T: 1 },
    1166: { T: -1 },
    1167: { T: 1 },
    1168: { T: -1 },
    1169: { T: 1 },
    1170: { T: -1 },
    1171: {},
    1172: { T: 1 },
    1173: { T: -1 },
    1177: {},
    1178: { T: 1 },
    1180: {},
    1181: {},
    1182: {},
    2048: { T: 1 },
    2049: { T: -1 },
    2050: {},
    2051: { T: 1 },
    2052: { T: -1 },
    2053: {},
    2054: {},
    2055: { T: 1 },
    2056: { T: -1 },
    2057: { T: 1 },
    2058: { T: -1 },
    2060: {},
    2067: {},
    2068: { T: 1 },
    2069: { T: -1 },
    2070: {},
    2071: {},
    2072: { T: 1 },
    2073: { T: -1 },
    2075: {},
    2076: {},
    2077: { T: 1 },
    2078: { T: -1 },
    2079: {},
    2080: { T: 1 },
    2081: { T: -1 },
    2082: {},
    2083: { T: 1 },
    2084: { T: -1 },
    2085: { T: 1 },
    2086: { T: -1 },
    2087: { T: 1 },
    2088: { T: -1 },
    2089: { T: 1 },
    2090: { T: -1 },
    2091: {},
    2092: {},
    2093: { T: 1 },
    2094: { T: -1 },
    2095: {},
    2096: { T: 1 },
    2097: { T: -1 },
    2098: { T: 1 },
    2099: { T: -1 },
    2100: { T: 1 },
    2101: { T: -1 },
    2102: {},
    2103: { T: 1 },
    2104: { T: -1 },
    2105: {},
    2106: { T: 1 },
    2107: { T: -1 },
    2108: {},
    2109: { T: 1 },
    2110: { T: -1 },
    2111: { T: 1 },
    2112: { T: -1 },
    2113: { T: 1 },
    2114: { T: -1 },
    2115: {},
    2116: {},
    2117: {},
    2118: { T: 1 },
    2119: { T: -1 },
    2120: {},
    2121: { T: 1 },
    2122: { T: -1 },
    2123: { T: 1 },
    2124: { T: -1 },
    2125: {},
    2126: { T: 1 },
    2127: { T: -1 },
    2128: {},
    2129: { T: 1 },
    2130: { T: -1 },
    2131: { T: 1 },
    2132: { T: -1 },
    2133: { T: 1 },
    2134: {},
    2135: {},
    2136: {},
    2137: { T: 1 },
    2138: { T: -1 },
    2139: { T: 1 },
    2140: { T: -1 },
    2141: {},
    3072: {},
    3073: {},
    4096: { T: 1 },
    4097: { T: -1 },
    5002: { T: 1 },
    5003: { T: -1 },
    5081: { T: 1 },
    5082: { T: -1 },
    5083: {},
    5084: { T: 1 },
    5085: { T: -1 },
    5086: { T: 1 },
    5087: { T: -1 },
    5088: {},
    5089: {},
    5090: {},
    5092: { T: 1 },
    5093: { T: -1 },
    5094: {},
    5095: { T: 1 },
    5096: { T: -1 },
    5097: {},
    5099: {},
    65535: { n: "" },
  },
  x0 = {
    6: { f: r0 },
    10: { f: Zr },
    12: { f: be },
    13: { f: be },
    14: { f: Pe },
    15: { f: Pe },
    16: { f: rr },
    17: { f: Pe },
    18: { f: Pe },
    19: { f: be },
    20: { f: $n },
    21: { f: $n },
    23: { f: ms },
    24: { f: jn },
    25: { f: Pe },
    26: {},
    27: {},
    28: { f: Bl },
    29: {},
    34: { f: Pe },
    35: { f: zn },
    38: { f: rr },
    39: { f: rr },
    40: { f: rr },
    41: { f: rr },
    42: { f: Pe },
    43: { f: Pe },
    47: { f: Wu },
    49: { f: _l },
    51: { f: be },
    60: {},
    61: { f: pl },
    64: { f: Pe },
    65: { f: ml },
    66: { f: be },
    77: {},
    80: {},
    81: {},
    82: {},
    85: { f: be },
    89: {},
    90: {},
    91: {},
    92: { f: fl },
    93: { f: Hl },
    94: {},
    95: { f: Pe },
    96: {},
    97: {},
    99: { f: Pe },
    125: { f: _s },
    128: { f: Ol },
    129: { f: ol },
    130: { f: be },
    131: { f: Pe },
    132: { f: Pe },
    133: { f: ll },
    134: {},
    140: { f: zl },
    141: { f: be },
    144: {},
    146: { f: Kl },
    151: {},
    152: {},
    153: {},
    154: {},
    155: {},
    156: { f: be },
    157: {},
    158: {},
    160: { f: Ql },
    161: { f: Jl },
    174: {},
    175: {},
    176: {},
    177: {},
    178: {},
    180: {},
    181: {},
    182: {},
    184: {},
    185: {},
    189: { f: Sl },
    190: { f: Fl },
    193: { f: Zr },
    197: {},
    198: {},
    199: {},
    200: {},
    201: {},
    202: { f: Pe },
    203: {},
    204: {},
    205: {},
    206: {},
    207: {},
    208: {},
    209: {},
    210: {},
    211: {},
    213: {},
    215: {},
    216: {},
    217: {},
    218: { f: be },
    220: {},
    221: { f: Pe },
    222: {},
    224: { f: Cl },
    225: { f: cl },
    226: { f: Zr },
    227: {},
    229: { f: Ul },
    233: {},
    235: {},
    236: {},
    237: {},
    239: {},
    240: {},
    241: {},
    242: {},
    244: {},
    245: {},
    246: {},
    247: {},
    248: {},
    249: {},
    251: {},
    252: { f: ul },
    253: { f: Tl },
    255: { f: hl },
    256: {},
    259: {},
    290: {},
    311: {},
    312: {},
    315: {},
    317: { f: hs },
    318: {},
    319: {},
    320: {},
    330: {},
    331: {},
    333: {},
    334: {},
    335: {},
    336: {},
    337: {},
    338: {},
    339: {},
    340: {},
    351: {},
    352: { f: Pe },
    353: { f: Zr },
    401: {},
    402: {},
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    425: {},
    426: {},
    427: {},
    428: {},
    429: {},
    430: { f: Dl },
    431: { f: Pe },
    432: {},
    433: {},
    434: {},
    437: {},
    438: { f: Gl },
    439: { f: Pe },
    440: { f: Xl },
    441: {},
    442: { f: ut },
    443: {},
    444: { f: be },
    445: {},
    446: {},
    448: { f: Zr },
    449: { f: vl, r: 2 },
    450: { f: Zr },
    512: { f: Gn },
    513: { f: Zl },
    515: { f: Rl },
    516: { f: El },
    517: { f: Xn },
    519: { f: eu },
    520: { f: xl },
    523: {},
    545: { f: Kn },
    549: { f: Wn },
    566: {},
    574: { f: gl },
    638: { f: Al },
    659: {},
    1048: {},
    1054: { f: kl },
    1084: {},
    1212: { f: Ll },
    2048: { f: $l },
    2049: {},
    2050: {},
    2051: {},
    2052: {},
    2053: {},
    2054: {},
    2055: {},
    2056: {},
    2057: { f: kt },
    2058: {},
    2059: {},
    2060: {},
    2061: {},
    2062: {},
    2063: {},
    2064: {},
    2066: {},
    2067: {},
    2128: {},
    2129: {},
    2130: {},
    2131: {},
    2132: {},
    2133: {},
    2134: {},
    2135: {},
    2136: {},
    2137: {},
    2138: {},
    2146: {},
    2147: { r: 12 },
    2148: {},
    2149: {},
    2150: {},
    2151: { f: Zr },
    2152: {},
    2154: {},
    2155: {},
    2156: {},
    2161: {},
    2162: {},
    2164: {},
    2165: {},
    2166: {},
    2167: {},
    2168: {},
    2169: {},
    2170: {},
    2171: {},
    2172: { f: Yl, r: 12 },
    2173: { f: S1, r: 12 },
    2174: {},
    2175: {},
    2180: {},
    2181: {},
    2182: {},
    2183: {},
    2184: {},
    2185: {},
    2186: {},
    2187: {},
    2188: { f: Pe, r: 12 },
    2189: {},
    2190: { r: 12 },
    2191: {},
    2192: {},
    2194: {},
    2195: {},
    2196: { f: Pl, r: 12 },
    2197: {},
    2198: { f: _1, r: 12 },
    2199: {},
    2200: {},
    2201: {},
    2202: { f: Ml, r: 12 },
    2203: { f: Zr },
    2204: {},
    2205: {},
    2206: {},
    2207: {},
    2211: { f: dl },
    2212: {},
    2213: {},
    2214: {},
    2215: {},
    4097: {},
    4098: {},
    4099: {},
    4102: {},
    4103: {},
    4105: {},
    4106: {},
    4107: {},
    4108: {},
    4109: {},
    4116: {},
    4117: {},
    4118: {},
    4119: {},
    4120: {},
    4121: {},
    4122: {},
    4123: {},
    4124: {},
    4125: {},
    4126: {},
    4127: {},
    4128: {},
    4129: {},
    4130: {},
    4132: {},
    4133: {},
    4134: { f: be },
    4135: {},
    4146: {},
    4147: {},
    4148: {},
    4149: {},
    4154: {},
    4156: {},
    4157: {},
    4158: {},
    4159: {},
    4160: {},
    4161: {},
    4163: {},
    4164: { f: ql },
    4165: {},
    4166: {},
    4168: {},
    4170: {},
    4171: {},
    4174: {},
    4175: {},
    4176: {},
    4177: {},
    4187: {},
    4188: { f: jl },
    4189: {},
    4191: {},
    4192: {},
    4193: {},
    4194: {},
    4195: {},
    4196: {},
    4197: {},
    4198: {},
    4199: {},
    4200: {},
    0: { f: Gn },
    1: {},
    2: { f: nu },
    3: { f: tu },
    4: { f: au },
    5: { f: Xn },
    7: { f: iu },
    8: {},
    9: { f: kt },
    11: {},
    22: { f: be },
    30: { f: wl },
    31: {},
    32: {},
    33: { f: Kn },
    36: {},
    37: { f: Wn },
    50: { f: su },
    62: {},
    52: {},
    67: {},
    68: { f: be },
    69: {},
    86: {},
    126: {},
    127: { f: ru },
    135: {},
    136: {},
    137: {},
    145: {},
    148: {},
    149: {},
    150: {},
    169: {},
    171: {},
    188: {},
    191: {},
    192: {},
    194: {},
    195: {},
    214: { f: cu },
    223: {},
    234: {},
    354: {},
    421: {},
    518: { f: r0 },
    521: { f: kt },
    536: { f: jn },
    547: { f: zn },
    561: {},
    579: {},
    1030: { f: r0 },
    1033: { f: kt },
    1091: {},
    2157: {},
    2163: {},
    2177: {},
    2240: {},
    2241: {},
    2242: {},
    2243: {},
    2244: {},
    2245: {},
    2246: {},
    2247: {},
    2248: {},
    2249: {},
    2250: {},
    2251: {},
    2262: { r: 12 },
    29282: {},
  };
function Or(e, a, r, n) {
  var t = a;
  if (!isNaN(t)) {
    var i = n || (r || []).length || 0,
      s = e.next(4);
    s.write_shift(2, t), s.write_shift(2, i), i > 0 && Qi(r) && e.push(r);
  }
}
function ii(e, a) {
  var r = a || {},
    n = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var t = e.match(/<table/i);
  if (!t) throw new Error("Invalid HTML: could not find <table>");
  var i = e.match(/<\/table/i),
    s = t.index,
    c = (i && i.index) || e.length,
    f = Rf(e.slice(s, c), /(:?<tr[^>]*>)/i, "<tr>"),
    o = -1,
    l = 0,
    h = 0,
    u = 0,
    d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } },
    v = [];
  for (s = 0; s < f.length; ++s) {
    var x = f[s].trim(),
      g = x.slice(0, 3).toLowerCase();
    if (g == "<tr") {
      if ((++o, r.sheetRows && r.sheetRows <= o)) {
        --o;
        break;
      }
      l = 0;
      continue;
    }
    if (!(g != "<td" && g != "<th")) {
      var A = x.split(/<\/t[dh]>/i);
      for (c = 0; c < A.length; ++c) {
        var C = A[c].trim();
        if (C.match(/<t[dh]/i)) {
          for (var _ = C, D = 0; _.charAt(0) == "<" && (D = _.indexOf(">")) > -1; ) _ = _.slice(D + 1);
          for (var b = 0; b < v.length; ++b) {
            var N = v[b];
            N.s.c == l && N.s.r < o && o <= N.e.r && ((l = N.e.c + 1), (b = -1));
          }
          var S = xe(C.slice(0, C.indexOf(">")));
          (u = S.colspan ? +S.colspan : 1), ((h = +S.rowspan) > 1 || u > 1) && v.push({ s: { r: o, c: l }, e: { r: o + (h || 1) - 1, c: l + u - 1 } });
          var H = S.t || S["data-t"] || "";
          if (!_.length) {
            l += u;
            continue;
          }
          if (((_ = Hi(_)), d.s.r > o && (d.s.r = o), d.e.r < o && (d.e.r = o), d.s.c > l && (d.s.c = l), d.e.c < l && (d.e.c = l), !_.length)) {
            l += u;
            continue;
          }
          var O = { t: "s", v: _ };
          r.raw || !_.trim().length || H == "s" || (_ === "TRUE" ? (O = { t: "b", v: !0 }) : _ === "FALSE" ? (O = { t: "b", v: !1 }) : isNaN(Nr(_)) ? isNaN(Da(_).getDate()) || ((O = { t: "d", v: $e(_) }), r.cellDates || (O = { t: "n", v: hr(O.v) }), (O.z = r.dateNF || ge[14])) : (O = { t: "n", v: Nr(_) })), r.dense ? (n[o] || (n[o] = []), (n[o][l] = O)) : (n[ve({ r: o, c: l })] = O), (l += u);
        }
      }
    }
  }
  return (n["!ref"] = ke(d)), v.length && (n["!merges"] = v), n;
}
function s2(e, a, r, n) {
  for (var t = e["!merges"] || [], i = [], s = a.s.c; s <= a.e.c; ++s) {
    for (var c = 0, f = 0, o = 0; o < t.length; ++o)
      if (!(t[o].s.r > r || t[o].s.c > s) && !(t[o].e.r < r || t[o].e.c < s)) {
        if (t[o].s.r < r || t[o].s.c < s) {
          c = -1;
          break;
        }
        (c = t[o].e.r - t[o].s.r + 1), (f = t[o].e.c - t[o].s.c + 1);
        break;
      }
    if (!(c < 0)) {
      var l = ve({ r, c: s }),
        h = n.dense ? (e[r] || [])[s] : e[l],
        u = (h && h.v != null && (h.h || C0(h.w || (Kr(h), h.w) || ""))) || "",
        d = {};
      c > 1 && (d.rowspan = c), f > 1 && (d.colspan = f), n.editable ? (u = '<span contenteditable="true">' + u + "</span>") : h && ((d["data-t"] = (h && h.t) || "z"), h.v != null && (d["data-v"] = h.v), h.z != null && (d["data-z"] = h.z), h.l && (h.l.Target || "#").charAt(0) != "#" && (u = '<a href="' + h.l.Target + '">' + u + "</a>")), (d.id = (n.id || "sjs") + "-" + l), i.push($f("td", u, d));
    }
  }
  var v = "<tr>";
  return v + i.join("") + "</tr>";
}
var c2 = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  f2 = "</body></html>";
function o2(e, a) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1) return ca(ii(r[0], a), a);
  var n = z0();
  return (
    r.forEach(function (t, i) {
      j0(n, ii(t, a), "Sheet" + (i + 1));
    }),
    n
  );
}
function l2(e, a, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function u2(e, a) {
  var r = a || {},
    n = r.header != null ? r.header : c2,
    t = r.footer != null ? r.footer : f2,
    i = [n],
    s = Pa(e["!ref"]);
  (r.dense = Array.isArray(e)), i.push(l2(e, s, r));
  for (var c = s.s.r; c <= s.e.r; ++c) i.push(s2(e, s, c, r));
  return i.push("</table>" + t), i.join("");
}
function $s(e, a, r) {
  var n = r || {},
    t = 0,
    i = 0;
  if (n.origin != null)
    if (typeof n.origin == "number") t = n.origin;
    else {
      var s = typeof n.origin == "string" ? lr(n.origin) : n.origin;
      (t = s.r), (i = s.c);
    }
  var c = a.getElementsByTagName("tr"),
    f = Math.min(n.sheetRows || 1e7, c.length),
    o = { s: { r: 0, c: 0 }, e: { r: t, c: i } };
  if (e["!ref"]) {
    var l = Pa(e["!ref"]);
    (o.s.r = Math.min(o.s.r, l.s.r)), (o.s.c = Math.min(o.s.c, l.s.c)), (o.e.r = Math.max(o.e.r, l.e.r)), (o.e.c = Math.max(o.e.c, l.e.c)), t == -1 && (o.e.r = t = l.e.r + 1);
  }
  var h = [],
    u = 0,
    d = e["!rows"] || (e["!rows"] = []),
    v = 0,
    x = 0,
    g = 0,
    A = 0,
    C = 0,
    _ = 0;
  for (e["!cols"] || (e["!cols"] = []); v < c.length && x < f; ++v) {
    var D = c[v];
    if (si(D)) {
      if (n.display) continue;
      d[x] = { hidden: !0 };
    }
    var b = D.children;
    for (g = A = 0; g < b.length; ++g) {
      var N = b[g];
      if (!(n.display && si(N))) {
        var S = N.hasAttribute("data-v") ? N.getAttribute("data-v") : N.hasAttribute("v") ? N.getAttribute("v") : Hi(N.innerHTML),
          H = N.getAttribute("data-z") || N.getAttribute("z");
        for (u = 0; u < h.length; ++u) {
          var O = h[u];
          O.s.c == A + i && O.s.r < x + t && x + t <= O.e.r && ((A = O.e.c + 1 - i), (u = -1));
        }
        (_ = +N.getAttribute("colspan") || 1), ((C = +N.getAttribute("rowspan") || 1) > 1 || _ > 1) && h.push({ s: { r: x + t, c: A + i }, e: { r: x + t + (C || 1) - 1, c: A + i + (_ || 1) - 1 } });
        var X = { t: "s", v: S },
          V = N.getAttribute("data-t") || N.getAttribute("t") || "";
        S != null && (S.length == 0 ? (X.t = V || "z") : n.raw || S.trim().length == 0 || V == "s" || (S === "TRUE" ? (X = { t: "b", v: !0 }) : S === "FALSE" ? (X = { t: "b", v: !1 }) : isNaN(Nr(S)) ? isNaN(Da(S).getDate()) || ((X = { t: "d", v: $e(S) }), n.cellDates || (X = { t: "n", v: hr(X.v) }), (X.z = n.dateNF || ge[14])) : (X = { t: "n", v: Nr(S) }))), X.z === void 0 && H != null && (X.z = H);
        var P = "",
          K = N.getElementsByTagName("A");
        if (K && K.length) for (var oe = 0; oe < K.length && !(K[oe].hasAttribute("href") && ((P = K[oe].getAttribute("href")), P.charAt(0) != "#")); ++oe);
        P && P.charAt(0) != "#" && (X.l = { Target: P }), n.dense ? (e[x + t] || (e[x + t] = []), (e[x + t][A + i] = X)) : (e[ve({ c: A + i, r: x + t })] = X), o.e.c < A + i && (o.e.c = A + i), (A += _);
      }
    }
    ++x;
  }
  return h.length && (e["!merges"] = (e["!merges"] || []).concat(h)), (o.e.r = Math.max(o.e.r, x - 1 + t)), (e["!ref"] = ke(o)), x >= f && (e["!fullref"] = ke(((o.e.r = c.length - v + x - 1 + t), o))), e;
}
function zs(e, a) {
  var r = a || {},
    n = r.dense ? [] : {};
  return $s(n, e, a);
}
function h2(e, a) {
  return ca(zs(e, a), a);
}
function si(e) {
  var a = "",
    r = x2(e);
  return r && (a = r(e).getPropertyValue("display")), a || (a = e.style && e.style.display), a === "none";
}
function x2(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function d2(e) {
  var a = e
      .replace(/[\t\r\n]/g, " ")
      .trim()
      .replace(/ +/g, " ")
      .replace(/<text:s\/>/g, " ")
      .replace(/<text:s text:c="(\d+)"\/>/g, function (n, t) {
        return Array(parseInt(t, 10) + 1).join(" ");
      })
      .replace(/<text:tab[^>]*\/>/g, "	")
      .replace(
        /<text:line-break\/>/g,
        `
`
      ),
    r = we(a.replace(/<[^>]*>/g, ""));
  return [r];
}
var ci = { day: ["d", "dd"], month: ["m", "mm"], year: ["y", "yy"], hours: ["h", "hh"], minutes: ["m", "mm"], seconds: ["s", "ss"], "am-pm": ["A/P", "AM/PM"], "day-of-week": ["ddd", "dddd"], era: ["e", "ee"], quarter: ["\\Qm", 'm\\"th quarter"'] };
function js(e, a) {
  var r = a || {},
    n = O0(e),
    t = [],
    i,
    s,
    c = { name: "" },
    f = "",
    o = 0,
    l,
    h,
    u = {},
    d = [],
    v = r.dense ? [] : {},
    x,
    g,
    A = { value: "" },
    C = "",
    _ = 0,
    D = [],
    b = -1,
    N = -1,
    S = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } },
    H = 0,
    O = {},
    X = [],
    V = {},
    P = 0,
    K = 0,
    oe = [],
    re = 1,
    fe = 1,
    ie = [],
    Ae = { Names: [] },
    G = {},
    ue = ["", ""],
    he = [],
    F = {},
    L = "",
    I = 0,
    R = !1,
    j = !1,
    ee = 0;
  for (tt.lastIndex = 0, n = n.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); (x = tt.exec(n)); )
    switch ((x[3] = x[3].replace(/_.*$/, ""))) {
      case "table":
      case "工作表":
        x[1] === "/"
          ? (S.e.c >= S.s.c && S.e.r >= S.s.r ? (v["!ref"] = ke(S)) : (v["!ref"] = "A1:A1"), r.sheetRows > 0 && r.sheetRows <= S.e.r && ((v["!fullref"] = v["!ref"]), (S.e.r = r.sheetRows - 1), (v["!ref"] = ke(S))), X.length && (v["!merges"] = X), oe.length && (v["!rows"] = oe), (l.name = l.名称 || l.name), typeof JSON < "u" && JSON.stringify(l), d.push(l.name), (u[l.name] = v), (j = !1))
          : x[0].charAt(x[0].length - 2) !== "/" && ((l = xe(x[0], !1)), (b = N = -1), (S.s.r = S.s.c = 1e7), (S.e.r = S.e.c = 0), (v = r.dense ? [] : {}), (X = []), (oe = []), (j = !0));
        break;
      case "table-row-group":
        x[1] === "/" ? --H : ++H;
        break;
      case "table-row":
      case "行":
        if (x[1] === "/") {
          (b += re), (re = 1);
          break;
        }
        if (((h = xe(x[0], !1)), h.行号 ? (b = h.行号 - 1) : b == -1 && (b = 0), (re = +h["number-rows-repeated"] || 1), re < 10)) for (ee = 0; ee < re; ++ee) H > 0 && (oe[b + ee] = { level: H });
        N = -1;
        break;
      case "covered-table-cell":
        x[1] !== "/" && ++N, r.sheetStubs && (r.dense ? (v[b] || (v[b] = []), (v[b][N] = { t: "z" })) : (v[ve({ r: b, c: N })] = { t: "z" })), (C = ""), (D = []);
        break;
      case "table-cell":
      case "数据":
        if (x[0].charAt(x[0].length - 2) === "/") ++N, (A = xe(x[0], !1)), (fe = parseInt(A["number-columns-repeated"] || "1", 10)), (g = { t: "z", v: null }), A.formula && r.cellFormula != !1 && (g.f = ri(we(A.formula))), (A.数据类型 || A["value-type"]) == "string" && ((g.t = "s"), (g.v = we(A["string-value"] || "")), r.dense ? (v[b] || (v[b] = []), (v[b][N] = g)) : (v[ve({ r: b, c: N })] = g)), (N += fe - 1);
        else if (x[1] !== "/") {
          ++N, (C = ""), (_ = 0), (D = []), (fe = 1);
          var se = re ? b + re - 1 : b;
          if ((N > S.e.c && (S.e.c = N), N < S.s.c && (S.s.c = N), b < S.s.r && (S.s.r = b), se > S.e.r && (S.e.r = se), (A = xe(x[0], !1)), (he = []), (F = {}), (g = { t: A.数据类型 || A["value-type"], v: null }), r.cellFormula))
            if ((A.formula && (A.formula = we(A.formula)), A["number-matrix-columns-spanned"] && A["number-matrix-rows-spanned"] && ((P = parseInt(A["number-matrix-rows-spanned"], 10) || 0), (K = parseInt(A["number-matrix-columns-spanned"], 10) || 0), (V = { s: { r: b, c: N }, e: { r: b + P - 1, c: N + K - 1 } }), (g.F = ke(V)), ie.push([V, g.F])), A.formula)) g.f = ri(A.formula);
            else for (ee = 0; ee < ie.length; ++ee) b >= ie[ee][0].s.r && b <= ie[ee][0].e.r && N >= ie[ee][0].s.c && N <= ie[ee][0].e.c && (g.F = ie[ee][1]);
          switch (((A["number-columns-spanned"] || A["number-rows-spanned"]) && ((P = parseInt(A["number-rows-spanned"], 10) || 0), (K = parseInt(A["number-columns-spanned"], 10) || 0), (V = { s: { r: b, c: N }, e: { r: b + P - 1, c: N + K - 1 } }), X.push(V)), A["number-columns-repeated"] && (fe = parseInt(A["number-columns-repeated"], 10)), g.t)) {
            case "boolean":
              (g.t = "b"), (g.v = Ce(A["boolean-value"]));
              break;
            case "float":
              (g.t = "n"), (g.v = parseFloat(A.value));
              break;
            case "percentage":
              (g.t = "n"), (g.v = parseFloat(A.value));
              break;
            case "currency":
              (g.t = "n"), (g.v = parseFloat(A.value));
              break;
            case "date":
              (g.t = "d"), (g.v = $e(A["date-value"])), r.cellDates || ((g.t = "n"), (g.v = hr(g.v))), (g.z = "m/d/yy");
              break;
            case "time":
              (g.t = "n"), (g.v = yf(A["time-value"]) / 86400), r.cellDates && ((g.t = "d"), (g.v = Ut(g.v))), (g.z = "HH:MM:SS");
              break;
            case "number":
              (g.t = "n"), (g.v = parseFloat(A.数据数值));
              break;
            default:
              if (g.t === "string" || g.t === "text" || !g.t) (g.t = "s"), A["string-value"] != null && ((C = we(A["string-value"])), (D = []));
              else throw new Error("Unsupported value type " + g.t);
          }
        } else {
          if (((R = !1), g.t === "s" && ((g.v = C || ""), D.length && (g.R = D), (R = _ == 0)), G.Target && (g.l = G), he.length > 0 && ((g.c = he), (he = [])), C && r.cellText !== !1 && (g.w = C), R && ((g.t = "z"), delete g.v), (!R || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= b)))
            for (var Q = 0; Q < re; ++Q) {
              if (((fe = parseInt(A["number-columns-repeated"] || "1", 10)), r.dense)) for (v[b + Q] || (v[b + Q] = []), v[b + Q][N] = Q == 0 ? g : Ke(g); --fe > 0; ) v[b + Q][N + fe] = Ke(g);
              else for (v[ve({ r: b + Q, c: N })] = g; --fe > 0; ) v[ve({ r: b + Q, c: N + fe })] = Ke(g);
              S.e.c <= N && (S.e.c = N);
            }
          (fe = parseInt(A["number-columns-repeated"] || "1", 10)), (N += fe - 1), (fe = 0), (g = {}), (C = ""), (D = []);
        }
        G = {};
        break;
      case "document":
      case "document-content":
      case "电子表格文档":
      case "spreadsheet":
      case "主体":
      case "scripts":
      case "styles":
      case "font-face-decls":
      case "master-styles":
        if (x[1] === "/") {
          if ((i = t.pop())[0] !== x[3]) throw "Bad state: " + i;
        } else x[0].charAt(x[0].length - 2) !== "/" && t.push([x[3], !0]);
        break;
      case "annotation":
        if (x[1] === "/") {
          if ((i = t.pop())[0] !== x[3]) throw "Bad state: " + i;
          (F.t = C), D.length && (F.R = D), (F.a = L), he.push(F);
        } else x[0].charAt(x[0].length - 2) !== "/" && t.push([x[3], !1]);
        (L = ""), (I = 0), (C = ""), (_ = 0), (D = []);
        break;
      case "creator":
        x[1] === "/" ? (L = n.slice(I, x.index)) : (I = x.index + x[0].length);
        break;
      case "meta":
      case "元数据":
      case "settings":
      case "config-item-set":
      case "config-item-map-indexed":
      case "config-item-map-entry":
      case "config-item-map-named":
      case "shapes":
      case "frame":
      case "text-box":
      case "image":
      case "data-pilot-tables":
      case "list-style":
      case "form":
      case "dde-links":
      case "event-listeners":
      case "chart":
        if (x[1] === "/") {
          if ((i = t.pop())[0] !== x[3]) throw "Bad state: " + i;
        } else x[0].charAt(x[0].length - 2) !== "/" && t.push([x[3], !1]);
        (C = ""), (_ = 0), (D = []);
        break;
      case "scientific-number":
        break;
      case "currency-symbol":
        break;
      case "currency-style":
        break;
      case "number-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
        if (x[1] === "/") {
          if (((O[c.name] = f), (i = t.pop())[0] !== x[3])) throw "Bad state: " + i;
        } else x[0].charAt(x[0].length - 2) !== "/" && ((f = ""), (c = xe(x[0], !1)), t.push([x[3], !0]));
        break;
      case "script":
        break;
      case "libraries":
        break;
      case "automatic-styles":
        break;
      case "default-style":
      case "page-layout":
        break;
      case "style":
        break;
      case "map":
        break;
      case "font-face":
        break;
      case "paragraph-properties":
        break;
      case "table-properties":
        break;
      case "table-column-properties":
        break;
      case "table-row-properties":
        break;
      case "table-cell-properties":
        break;
      case "number":
        switch (t[t.length - 1][0]) {
          case "time-style":
          case "date-style":
            (s = xe(x[0], !1)), (f += ci[x[3]][s.style === "long" ? 1 : 0]);
            break;
        }
        break;
      case "fraction":
        break;
      case "day":
      case "month":
      case "year":
      case "era":
      case "day-of-week":
      case "week-of-year":
      case "quarter":
      case "hours":
      case "minutes":
      case "seconds":
      case "am-pm":
        switch (t[t.length - 1][0]) {
          case "time-style":
          case "date-style":
            (s = xe(x[0], !1)), (f += ci[x[3]][s.style === "long" ? 1 : 0]);
            break;
        }
        break;
      case "boolean-style":
        break;
      case "boolean":
        break;
      case "text-style":
        break;
      case "text":
        if (x[0].slice(-2) === "/>") break;
        if (x[1] === "/")
          switch (t[t.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              f += n.slice(o, x.index);
              break;
          }
        else o = x.index + x[0].length;
        break;
      case "named-range":
        (s = xe(x[0], !1)), (ue = a0(s["cell-range-address"]));
        var Y = { Name: s.name, Ref: ue[0] + "!" + ue[1] };
        j && (Y.Sheet = d.length), Ae.Names.push(Y);
        break;
      case "text-content":
        break;
      case "text-properties":
        break;
      case "embedded-text":
        break;
      case "body":
      case "电子表格":
        break;
      case "forms":
        break;
      case "table-column":
        break;
      case "table-header-rows":
        break;
      case "table-rows":
        break;
      case "table-column-group":
        break;
      case "table-header-columns":
        break;
      case "table-columns":
        break;
      case "null-date":
        break;
      case "graphic-properties":
        break;
      case "calculation-settings":
        break;
      case "named-expressions":
        break;
      case "label-range":
        break;
      case "label-ranges":
        break;
      case "named-expression":
        break;
      case "sort":
        break;
      case "sort-by":
        break;
      case "sort-groups":
        break;
      case "tab":
        break;
      case "line-break":
        break;
      case "span":
        break;
      case "p":
      case "文本串":
        if (["master-styles"].indexOf(t[t.length - 1][0]) > -1) break;
        if (x[1] === "/" && (!A || !A["string-value"])) {
          var _e = d2(n.slice(_, x.index));
          C =
            (C.length > 0
              ? C +
                `
`
              : "") + _e[0];
        } else xe(x[0], !1), (_ = x.index + x[0].length);
        break;
      case "s":
        break;
      case "database-range":
        if (x[1] === "/") break;
        try {
          (ue = a0(xe(x[0])["target-range-address"])), (u[ue[0]]["!autofilter"] = { ref: ue[1] });
        } catch {}
        break;
      case "date":
        break;
      case "object":
        break;
      case "title":
      case "标题":
        break;
      case "desc":
        break;
      case "binary-data":
        break;
      case "table-source":
        break;
      case "scenario":
        break;
      case "iteration":
        break;
      case "content-validations":
        break;
      case "content-validation":
        break;
      case "help-message":
        break;
      case "error-message":
        break;
      case "database-ranges":
        break;
      case "filter":
        break;
      case "filter-and":
        break;
      case "filter-or":
        break;
      case "filter-condition":
        break;
      case "list-level-style-bullet":
        break;
      case "list-level-style-number":
        break;
      case "list-level-properties":
        break;
      case "sender-firstname":
      case "sender-lastname":
      case "sender-initials":
      case "sender-title":
      case "sender-position":
      case "sender-email":
      case "sender-phone-private":
      case "sender-fax":
      case "sender-company":
      case "sender-phone-work":
      case "sender-street":
      case "sender-city":
      case "sender-postal-code":
      case "sender-country":
      case "sender-state-or-province":
      case "author-name":
      case "author-initials":
      case "chapter":
      case "file-name":
      case "template-name":
      case "sheet-name":
        break;
      case "event-listener":
        break;
      case "initial-creator":
      case "creation-date":
      case "print-date":
      case "generator":
      case "document-statistic":
      case "user-defined":
      case "editing-duration":
      case "editing-cycles":
        break;
      case "config-item":
        break;
      case "page-number":
        break;
      case "page-count":
        break;
      case "time":
        break;
      case "cell-range-source":
        break;
      case "detective":
        break;
      case "operation":
        break;
      case "highlighted-range":
        break;
      case "data-pilot-table":
      case "source-cell-range":
      case "source-service":
      case "data-pilot-field":
      case "data-pilot-level":
      case "data-pilot-subtotals":
      case "data-pilot-subtotal":
      case "data-pilot-members":
      case "data-pilot-member":
      case "data-pilot-display-info":
      case "data-pilot-sort-info":
      case "data-pilot-layout-info":
      case "data-pilot-field-reference":
      case "data-pilot-groups":
      case "data-pilot-group":
      case "data-pilot-group-member":
        break;
      case "rect":
        break;
      case "dde-connection-decls":
      case "dde-connection-decl":
      case "dde-link":
      case "dde-source":
        break;
      case "properties":
        break;
      case "property":
        break;
      case "a":
        if (x[1] !== "/") {
          if (((G = xe(x[0], !1)), !G.href)) break;
          (G.Target = we(G.href)), delete G.href, G.Target.charAt(0) == "#" && G.Target.indexOf(".") > -1 ? ((ue = a0(G.Target.slice(1))), (G.Target = "#" + ue[0] + "!" + ue[1])) : G.Target.match(/^\.\.[\\\/]/) && (G.Target = G.Target.slice(3));
        }
        break;
      case "table-protection":
        break;
      case "data-pilot-grand-total":
        break;
      case "office-document-common-attrs":
        break;
      default:
        switch (x[2]) {
          case "dc:":
          case "calcext:":
          case "loext:":
          case "ooo:":
          case "chartooo:":
          case "draw:":
          case "style:":
          case "chart:":
          case "form:":
          case "uof:":
          case "表:":
          case "字:":
            break;
          default:
            if (r.WTF) throw new Error(x);
        }
    }
  var y = { Sheets: u, SheetNames: d, Workbook: Ae };
  return r.bookSheets && delete y.Sheets, y;
}
function fi(e, a) {
  (a = a || {}), wr(e, "META-INF/manifest.xml") && Ro(Me(e, "META-INF/manifest.xml"), a);
  var r = mr(e, "content.xml");
  if (!r) throw new Error("Missing content.xml in ODS / UOF file");
  var n = js(Se(r), a);
  return wr(e, "meta.xml") && (n.Props = ss(Me(e, "meta.xml"))), n;
}
function oi(e, a) {
  return js(e, a);
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function W0(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function d0(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Se(ma(e));
}
function v0(e) {
  var a = e.reduce(function (t, i) {
      return t + i.length;
    }, 0),
    r = new Uint8Array(a),
    n = 0;
  return (
    e.forEach(function (t) {
      r.set(t, n), (n += t.length);
    }),
    r
  );
}
function li(e) {
  return (e -= (e >> 1) & 1431655765), (e = (e & 858993459) + ((e >> 2) & 858993459)), (((e + (e >> 4)) & 252645135) * 16843009) >>> 24;
}
function v2(e, a) {
  for (var r = ((e[a + 15] & 127) << 7) | (e[a + 14] >> 1), n = e[a + 14] & 1, t = a + 13; t >= a; --t) n = n * 256 + e[t];
  return (e[a + 15] & 128 ? -n : n) * Math.pow(10, r - 6176);
}
function ct(e, a) {
  var r = a ? a[0] : 0,
    n = e[r] & 127;
  e: if (e[r++] >= 128 && ((n |= (e[r] & 127) << 7), e[r++] < 128 || ((n |= (e[r] & 127) << 14), e[r++] < 128) || ((n |= (e[r] & 127) << 21), e[r++] < 128) || ((n += (e[r] & 127) * Math.pow(2, 28)), ++r, e[r++] < 128) || ((n += (e[r] & 127) * Math.pow(2, 35)), ++r, e[r++] < 128) || ((n += (e[r] & 127) * Math.pow(2, 42)), ++r, e[r++] < 128))) break e;
  return a && (a[0] = r), n;
}
function We(e) {
  var a = 0,
    r = e[a] & 127;
  e: if (e[a++] >= 128) {
    if (((r |= (e[a] & 127) << 7), e[a++] < 128 || ((r |= (e[a] & 127) << 14), e[a++] < 128) || ((r |= (e[a] & 127) << 21), e[a++] < 128))) break e;
    r |= (e[a] & 127) << 28;
  }
  return r;
}
function ar(e) {
  for (var a = [], r = [0]; r[0] < e.length; ) {
    var n = r[0],
      t = ct(e, r),
      i = t & 7;
    t = Math.floor(t / 8);
    var s = 0,
      c;
    if (t == 0) break;
    switch (i) {
      case 0:
        {
          for (var f = r[0]; e[r[0]++] >= 128; );
          c = e.slice(f, r[0]);
        }
        break;
      case 5:
        (s = 4), (c = e.slice(r[0], r[0] + s)), (r[0] += s);
        break;
      case 1:
        (s = 8), (c = e.slice(r[0], r[0] + s)), (r[0] += s);
        break;
      case 2:
        (s = ct(e, r)), (c = e.slice(r[0], r[0] + s)), (r[0] += s);
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(t, " at offset ").concat(n));
    }
    var o = { data: c, type: i };
    a[t] == null ? (a[t] = [o]) : a[t].push(o);
  }
  return a;
}
function G0(e, a) {
  return (
    (e == null
      ? void 0
      : e.map(function (r) {
          return a(r.data);
        })) || []
  );
}
function p2(e) {
  for (var a, r = [], n = [0]; n[0] < e.length; ) {
    var t = ct(e, n),
      i = ar(e.slice(n[0], n[0] + t));
    n[0] += t;
    var s = { id: We(i[1][0].data), messages: [] };
    i[2].forEach(function (c) {
      var f = ar(c.data),
        o = We(f[3][0].data);
      s.messages.push({ meta: f, data: e.slice(n[0], n[0] + o) }), (n[0] += o);
    }),
      (a = i[3]) != null && a[0] && (s.merge = We(i[3][0].data) >>> 0 > 0),
      r.push(s);
  }
  return r;
}
function g2(e, a) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = ct(a, r), t = []; r[0] < a.length; ) {
    var i = a[r[0]] & 3;
    if (i == 0) {
      var s = a[r[0]++] >> 2;
      if (s < 60) ++s;
      else {
        var c = s - 59;
        (s = a[r[0]]), c > 1 && (s |= a[r[0] + 1] << 8), c > 2 && (s |= a[r[0] + 2] << 16), c > 3 && (s |= a[r[0] + 3] << 24), (s >>>= 0), s++, (r[0] += c);
      }
      t.push(a.slice(r[0], r[0] + s)), (r[0] += s);
      continue;
    } else {
      var f = 0,
        o = 0;
      if ((i == 1 ? ((o = ((a[r[0]] >> 2) & 7) + 4), (f = (a[r[0]++] & 224) << 3), (f |= a[r[0]++])) : ((o = (a[r[0]++] >> 2) + 1), i == 2 ? ((f = a[r[0]] | (a[r[0] + 1] << 8)), (r[0] += 2)) : ((f = (a[r[0]] | (a[r[0] + 1] << 8) | (a[r[0] + 2] << 16) | (a[r[0] + 3] << 24)) >>> 0), (r[0] += 4))), (t = [v0(t)]), f == 0)) throw new Error("Invalid offset 0");
      if (f > t[0].length) throw new Error("Invalid offset beyond length");
      if (o >= f) for (t.push(t[0].slice(-f)), o -= f; o >= t[t.length - 1].length; ) t.push(t[t.length - 1]), (o -= t[t.length - 1].length);
      t.push(t[0].slice(-f, -f + o));
    }
  }
  var l = v0(t);
  if (l.length != n) throw new Error("Unexpected length: ".concat(l.length, " != ").concat(n));
  return l;
}
function m2(e) {
  for (var a = [], r = 0; r < e.length; ) {
    var n = e[r++],
      t = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16);
    (r += 3), a.push(g2(n, e.slice(r, r + t))), (r += t);
  }
  if (r !== e.length) throw new Error("data is not a valid framed stream!");
  return v0(a);
}
function _2(e, a, r, n) {
  var t = W0(e),
    i = t.getUint32(4, !0),
    s = (n > 1 ? 12 : 8) + li(i & (n > 1 ? 3470 : 398)) * 4,
    c = -1,
    f = -1,
    o = NaN,
    l = new Date(2001, 0, 1);
  i & 512 && ((c = t.getUint32(s, !0)), (s += 4)), (s += li(i & (n > 1 ? 12288 : 4096)) * 4), i & 16 && ((f = t.getUint32(s, !0)), (s += 4)), i & 32 && ((o = t.getFloat64(s, !0)), (s += 8)), i & 64 && (l.setTime(l.getTime() + t.getFloat64(s, !0) * 1e3), (s += 8));
  var h;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      h = { t: "n", v: o };
      break;
    case 3:
      h = { t: "s", v: a[f] };
      break;
    case 5:
      h = { t: "d", v: l };
      break;
    case 6:
      h = { t: "b", v: o > 0 };
      break;
    case 7:
      h = { t: "n", v: o / 86400 };
      break;
    case 8:
      h = { t: "e", v: 0 };
      break;
    case 9:
      if (c > -1) h = { t: "s", v: r[c] };
      else if (f > -1) h = { t: "s", v: a[f] };
      else if (!isNaN(o)) h = { t: "n", v: o };
      else throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return h;
}
function T2(e, a, r) {
  var n = W0(e),
    t = n.getUint32(8, !0),
    i = 12,
    s = -1,
    c = -1,
    f = NaN,
    o = NaN,
    l = new Date(2001, 0, 1);
  t & 1 && ((f = v2(e, i)), (i += 16)), t & 2 && ((o = n.getFloat64(i, !0)), (i += 8)), t & 4 && (l.setTime(l.getTime() + n.getFloat64(i, !0) * 1e3), (i += 8)), t & 8 && ((c = n.getUint32(i, !0)), (i += 4)), t & 16 && ((s = n.getUint32(i, !0)), (i += 4));
  var h;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      h = { t: "n", v: f };
      break;
    case 3:
      h = { t: "s", v: a[c] };
      break;
    case 5:
      h = { t: "d", v: l };
      break;
    case 6:
      h = { t: "b", v: o > 0 };
      break;
    case 7:
      h = { t: "n", v: o / 86400 };
      break;
    case 8:
      h = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1) h = { t: "s", v: r[s] };
      else
        throw new Error(
          "Unsupported cell type "
            .concat(e[1], " : ")
            .concat(t & 31, " : ")
            .concat(e.slice(0, 4))
        );
      break;
    case 10:
      h = { t: "n", v: f };
      break;
    default:
      throw new Error(
        "Unsupported cell type "
          .concat(e[1], " : ")
          .concat(t & 31, " : ")
          .concat(e.slice(0, 4))
      );
  }
  return h;
}
function E2(e, a, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return _2(e, a, r, e[0]);
    case 5:
      return T2(e, a, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function na(e) {
  var a = ar(e);
  return ct(a[1][0].data);
}
function ui(e, a) {
  var r = ar(a.data),
    n = We(r[1][0].data),
    t = r[3],
    i = [];
  return (
    (t || []).forEach(function (s) {
      var c = ar(s.data),
        f = We(c[1][0].data) >>> 0;
      switch (n) {
        case 1:
          i[f] = d0(c[3][0].data);
          break;
        case 8:
          {
            var o = e[na(c[9][0].data)][0],
              l = ar(o.data),
              h = e[na(l[1][0].data)][0],
              u = We(h.meta[1][0].data);
            if (u != 2001) throw new Error("2000 unexpected reference to ".concat(u));
            var d = ar(h.data);
            i[f] = d[3]
              .map(function (v) {
                return d0(v.data);
              })
              .join("");
          }
          break;
      }
    }),
    i
  );
}
function k2(e, a) {
  var r,
    n,
    t,
    i,
    s,
    c,
    f,
    o,
    l,
    h,
    u,
    d,
    v,
    x,
    g = ar(e),
    A = We(g[1][0].data) >>> 0,
    C = We(g[2][0].data) >>> 0,
    _ = (((n = (r = g[8]) == null ? void 0 : r[0]) == null ? void 0 : n.data) && We(g[8][0].data) > 0) || !1,
    D,
    b;
  if ((i = (t = g[7]) == null ? void 0 : t[0]) != null && i.data && a != 0) (D = (c = (s = g[7]) == null ? void 0 : s[0]) == null ? void 0 : c.data), (b = (o = (f = g[6]) == null ? void 0 : f[0]) == null ? void 0 : o.data);
  else if ((h = (l = g[4]) == null ? void 0 : l[0]) != null && h.data && a != 1) (D = (d = (u = g[4]) == null ? void 0 : u[0]) == null ? void 0 : d.data), (b = (x = (v = g[3]) == null ? void 0 : v[0]) == null ? void 0 : x.data);
  else throw "NUMBERS Tile missing ".concat(a, " cell storage");
  for (var N = _ ? 4 : 1, S = W0(D), H = [], O = 0; O < D.length / 2; ++O) {
    var X = S.getUint16(O * 2, !0);
    X < 65535 && H.push([O, X]);
  }
  if (H.length != C) throw "Expected ".concat(C, " cells, found ").concat(H.length);
  var V = [];
  for (O = 0; O < H.length - 1; ++O) V[H[O][0]] = b.subarray(H[O][1] * N, H[O + 1][1] * N);
  return H.length >= 1 && (V[H[H.length - 1][0]] = b.subarray(H[H.length - 1][1] * N)), { R: A, cells: V };
}
function w2(e, a) {
  var r,
    n = ar(a.data),
    t = (r = n == null ? void 0 : n[7]) != null && r[0] ? (We(n[7][0].data) >>> 0 > 0 ? 1 : 0) : -1,
    i = G0(n[5], function (s) {
      return k2(s, t);
    });
  return {
    nrows: We(n[4][0].data) >>> 0,
    data: i.reduce(function (s, c) {
      return (
        s[c.R] || (s[c.R] = []),
        c.cells.forEach(function (f, o) {
          if (s[c.R][o]) throw new Error("Duplicate cell r=".concat(c.R, " c=").concat(o));
          s[c.R][o] = f;
        }),
        s
      );
    }, []),
  };
}
function A2(e, a, r) {
  var n,
    t = ar(a.data),
    i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (((i.e.r = (We(t[6][0].data) >>> 0) - 1), i.e.r < 0)) throw new Error("Invalid row varint ".concat(t[6][0].data));
  if (((i.e.c = (We(t[7][0].data) >>> 0) - 1), i.e.c < 0)) throw new Error("Invalid col varint ".concat(t[7][0].data));
  r["!ref"] = ke(i);
  var s = ar(t[4][0].data),
    c = ui(e, e[na(s[4][0].data)][0]),
    f = (n = s[17]) != null && n[0] ? ui(e, e[na(s[17][0].data)][0]) : [],
    o = ar(s[3][0].data),
    l = 0;
  o[1].forEach(function (h) {
    var u = ar(h.data),
      d = e[na(u[2][0].data)][0],
      v = We(d.meta[1][0].data);
    if (v != 6002) throw new Error("6001 unexpected reference to ".concat(v));
    var x = w2(e, d);
    x.data.forEach(function (g, A) {
      g.forEach(function (C, _) {
        var D = ve({ r: l + A, c: _ }),
          b = E2(C, c, f);
        b && (r[D] = b);
      });
    }),
      (l += x.nrows);
  });
}
function S2(e, a) {
  var r = ar(a.data),
    n = { "!ref": "A1" },
    t = e[na(r[2][0].data)],
    i = We(t[0].meta[1][0].data);
  if (i != 6001) throw new Error("6000 unexpected reference to ".concat(i));
  return A2(e, t[0], n), n;
}
function F2(e, a) {
  var r,
    n = ar(a.data),
    t = { name: (r = n[1]) != null && r[0] ? d0(n[1][0].data) : "", sheets: [] },
    i = G0(n[2], na);
  return (
    i.forEach(function (s) {
      e[s].forEach(function (c) {
        var f = We(c.meta[1][0].data);
        f == 6e3 && t.sheets.push(S2(e, c));
      });
    }),
    t
  );
}
function y2(e, a) {
  var r = z0(),
    n = ar(a.data),
    t = G0(n[1], na);
  if (
    (t.forEach(function (i) {
      e[i].forEach(function (s) {
        var c = We(s.meta[1][0].data);
        if (c == 2) {
          var f = F2(e, s);
          f.sheets.forEach(function (o, l) {
            j0(r, o, l == 0 ? f.name : f.name + "_" + l, !0);
          });
        }
      });
    }),
    r.SheetNames.length == 0)
  )
    throw new Error("Empty NUMBERS file");
  return r;
}
function n0(e) {
  var a,
    r,
    n,
    t,
    i = {},
    s = [];
  if (
    (e.FullPaths.forEach(function (f) {
      if (f.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
    }),
    e.FileIndex.forEach(function (f) {
      if (f.name.match(/\.iwa$/)) {
        var o;
        try {
          o = m2(f.content);
        } catch (h) {
          return console.log("?? " + f.content.length + " " + (h.message || h));
        }
        var l;
        try {
          l = p2(o);
        } catch (h) {
          return console.log("## " + (h.message || h));
        }
        l.forEach(function (h) {
          (i[h.id] = h.messages), s.push(h.id);
        });
      }
    }),
    !s.length)
  )
    throw new Error("File has no messages");
  var c = ((t = (n = (r = (a = i == null ? void 0 : i[1]) == null ? void 0 : a[0]) == null ? void 0 : r.meta) == null ? void 0 : n[1]) == null ? void 0 : t[0].data) && We(i[1][0].meta[1][0].data) == 1 && i[1][0];
  if (
    (c ||
      s.forEach(function (f) {
        i[f].forEach(function (o) {
          var l = We(o.meta[1][0].data) >>> 0;
          if (l == 1)
            if (!c) c = o;
            else throw new Error("Document has multiple roots");
        });
      }),
    !c)
  )
    throw new Error("Cannot find Document root");
  return y2(i, c);
}
function C2(e) {
  return function (r) {
    for (var n = 0; n != e.length; ++n) {
      var t = e[n];
      r[t[0]] === void 0 && (r[t[0]] = t[1]), t[2] === "n" && (r[t[0]] = Number(r[t[0]]));
    }
  };
}
function X0(e) {
  C2([
    ["cellNF", !1],
    ["cellHTML", !0],
    ["cellFormula", !0],
    ["cellStyles", !1],
    ["cellText", !0],
    ["cellDates", !1],
    ["sheetStubs", !1],
    ["sheetRows", 0, "n"],
    ["bookDeps", !1],
    ["bookSheets", !1],
    ["bookProps", !1],
    ["bookFiles", !1],
    ["bookVBA", !1],
    ["password", ""],
    ["WTF", !1],
  ])(e);
}
function O2(e) {
  return Fa.WS.indexOf(e) > -1 ? "sheet" : e == Fa.CS ? "chart" : e == Fa.DS ? "dialog" : e == Fa.MS ? "macro" : e && e.length ? e : "sheet";
}
function R2(e, a) {
  if (!e) return 0;
  try {
    e = a.map(function (n) {
      return n.id || (n.id = n.strRelID), [n.name, e["!id"][n.id].Target, O2(e["!id"][n.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function D2(e, a, r, n, t, i, s, c, f, o, l, h) {
  try {
    i[n] = Ya(mr(e, r, !0), a);
    var u = Me(e, a),
      d;
    switch (c) {
      case "sheet":
        d = bd(u, a, t, f, i[n], o, l, h);
        break;
      case "chart":
        if (((d = Bd(u, a, t, f, i[n], o, l, h)), !d || !d["!drawel"])) break;
        var v = Xa(d["!drawel"].Target, a),
          x = o0(v),
          g = M1(mr(e, v, !0), Ya(mr(e, x, !0), v)),
          A = Xa(g, v),
          C = o0(A);
        d = Td(mr(e, A, !0), A, f, Ya(mr(e, C, !0), A), o, d);
        break;
      case "macro":
        d = Ud(u, a, t, f, i[n], o, l, h);
        break;
      case "dialog":
        d = Hd(u, a, t, f, i[n], o, l, h);
        break;
      default:
        throw new Error("Unrecognized sheet type " + c);
    }
    s[n] = d;
    var _ = [];
    i &&
      i[n] &&
      Br(i[n]).forEach(function (D) {
        var b = "";
        if (i[n][D].Type == Fa.CMNT) {
          b = Xa(i[n][D].Target, a);
          var N = Xd(Me(e, b, !0), b, f);
          if (!N || !N.length) return;
          Jn(d, N, !1);
        }
        i[n][D].Type == Fa.TCMNT && ((b = Xa(i[n][D].Target, a)), (_ = _.concat(B1(Me(e, b, !0), f))));
      }),
      _ && _.length && Jn(d, _, !0, f.people || []);
  } catch (D) {
    if (f.WTF) throw D;
  }
}
function Er(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function I2(e, a) {
  if ((Ri(), (a = a || {}), X0(a), wr(e, "META-INF/manifest.xml") || wr(e, "objectdata.xml"))) return fi(e, a);
  if (wr(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof n0 < "u") {
      if (e.FileIndex) return n0(e);
      var r = Ee.utils.cfb_new();
      return (
        wn(e).forEach(function (oe) {
          If(r, oe, Mi(e, oe));
        }),
        n0(r)
      );
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!wr(e, "[Content_Types].xml")) throw wr(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : wr(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var n = wn(e),
    t = Co(mr(e, "[Content_Types].xml")),
    i = !1,
    s,
    c;
  if ((t.workbooks.length === 0 && ((c = "xl/workbook.xml"), Me(e, c, !0) && t.workbooks.push(c)), t.workbooks.length === 0)) {
    if (((c = "xl/workbook.bin"), !Me(e, c, !0))) throw new Error("Could not find workbook");
    t.workbooks.push(c), (i = !0);
  }
  t.workbooks[0].slice(-3) == "bin" && (i = !0);
  var f = {},
    o = {};
  if (!a.bookSheets && !a.bookProps) {
    if (((Za = []), t.sst))
      try {
        Za = Gd(Me(e, Er(t.sst)), t.sst, a);
      } catch (oe) {
        if (a.WTF) throw oe;
      }
    a.cellStyles && t.themes.length && (f = Wd(mr(e, t.themes[0].replace(/^\//, ""), !0) || "", t.themes[0], a)), t.style && (o = Vd(Me(e, Er(t.style)), t.style, f, a));
  }
  t.links.map(function (oe) {
    try {
      var re = Ya(mr(e, o0(Er(oe))), oe);
      return zd(Me(e, Er(oe)), re, oe, a);
    } catch {}
  });
  var l = Md(Me(e, Er(t.workbooks[0])), t.workbooks[0], a),
    h = {},
    u = "";
  t.coreprops.length && ((u = Me(e, Er(t.coreprops[0]), !0)), u && (h = ss(u)), t.extprops.length !== 0 && ((u = Me(e, Er(t.extprops[0]), !0)), u && No(u, h, a)));
  var d = {};
  (!a.bookSheets || a.bookProps) && t.custprops.length !== 0 && ((u = mr(e, Er(t.custprops[0]), !0)), u && (d = Lo(u, a)));
  var v = {};
  if (
    (a.bookSheets || a.bookProps) &&
    (l.Sheets
      ? (s = l.Sheets.map(function (re) {
          return re.name;
        }))
      : h.Worksheets && h.SheetNames.length > 0 && (s = h.SheetNames),
    a.bookProps && ((v.Props = h), (v.Custprops = d)),
    a.bookSheets && typeof s < "u" && (v.SheetNames = s),
    a.bookSheets ? v.SheetNames : a.bookProps)
  )
    return v;
  s = {};
  var x = {};
  a.bookDeps && t.calcchain && (x = $d(Me(e, Er(t.calcchain)), t.calcchain));
  var g = 0,
    A = {},
    C,
    _;
  {
    var D = l.Sheets;
    (h.Worksheets = D.length), (h.SheetNames = []);
    for (var b = 0; b != D.length; ++b) h.SheetNames[b] = D[b].name;
  }
  var N = i ? "bin" : "xml",
    S = t.workbooks[0].lastIndexOf("/"),
    H = (t.workbooks[0].slice(0, S + 1) + "_rels/" + t.workbooks[0].slice(S + 1) + ".rels").replace(/^\//, "");
  wr(e, H) || (H = "xl/_rels/workbook." + N + ".rels");
  var O = Ya(mr(e, H, !0), H.replace(/_rels.*/, "s5s"));
  (t.metadata || []).length >= 1 && (a.xlmeta = jd(Me(e, Er(t.metadata[0])), t.metadata[0], a)), (t.people || []).length >= 1 && (a.people = U1(Me(e, Er(t.people[0])), a)), O && (O = R2(O, l.Sheets));
  var X = Me(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e: for (g = 0; g != h.Worksheets; ++g) {
    var V = "sheet";
    if ((O && O[g] ? ((C = "xl/" + O[g][1].replace(/[\/]?xl\//, "")), wr(e, C) || (C = O[g][1]), wr(e, C) || (C = H.replace(/_rels\/.*$/, "") + O[g][1]), (V = O[g][2])) : ((C = "xl/worksheets/sheet" + (g + 1 - X) + "." + N), (C = C.replace(/sheet0\./, "sheet."))), (_ = C.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels")), a && a.sheets != null))
      switch (typeof a.sheets) {
        case "number":
          if (g != a.sheets) continue e;
          break;
        case "string":
          if (h.SheetNames[g].toLowerCase() != a.sheets.toLowerCase()) continue e;
          break;
        default:
          if (Array.isArray && Array.isArray(a.sheets)) {
            for (var P = !1, K = 0; K != a.sheets.length; ++K) typeof a.sheets[K] == "number" && a.sheets[K] == g && (P = 1), typeof a.sheets[K] == "string" && a.sheets[K].toLowerCase() == h.SheetNames[g].toLowerCase() && (P = 1);
            if (!P) continue e;
          }
      }
    D2(e, C, _, h.SheetNames[g], g, A, s, V, a, l, f, o);
  }
  return (
    (v = { Directory: t, Workbook: l, Props: h, Custprops: d, Deps: x, Sheets: s, SheetNames: h.SheetNames, Strings: Za, Styles: o, Themes: f, SSF: Ke(ge) }),
    a &&
      a.bookFiles &&
      (e.files
        ? ((v.keys = n), (v.files = e.files))
        : ((v.keys = []),
          (v.files = {}),
          e.FullPaths.forEach(function (oe, re) {
            (oe = oe.replace(/^Root Entry[\/]/, "")), v.keys.push(oe), (v.files[oe] = e.FileIndex[re]);
          }))),
    a && a.bookVBA && (t.vba.length > 0 ? (v.vbaraw = Me(e, Er(t.vba[0]), !0)) : t.defaults && t.defaults.bin === G1 && (v.vbaraw = Me(e, "xl/vbaProject.bin", !0))),
    v
  );
}
function N2(e, a) {
  var r = a || {},
    n = "Workbook",
    t = Ee.find(e, n);
  try {
    if (((n = "/!DataSpaces/Version"), (t = Ee.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
    if ((Su(t.content), (n = "/!DataSpaces/DataSpaceMap"), (t = Ee.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
    var i = yu(t.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + n);
    if (((n = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace"), (t = Ee.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
    var s = Cu(t.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + n);
    if (((n = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary"), (t = Ee.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
    Ru(t.content);
  } catch {}
  if (((n = "/EncryptionInfo"), (t = Ee.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
  var c = Du(t.content);
  if (((n = "/EncryptedPackage"), (t = Ee.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
  if (c[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(c[1], t.content, r.password || "", r);
  if (c[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(c[1], t.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function $0(e, a) {
  var r = "";
  switch ((a || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = _r(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + ((a && a.type) || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function P2(e, a) {
  return Ee.find(e, "EncryptedPackage") ? N2(e, a) : Xs(e, a);
}
function L2(e, a) {
  var r,
    n = e,
    t = a || {};
  return t.type || (t.type = Te && Buffer.isBuffer(e) ? "buffer" : "base64"), (r = bi(n, t)), I2(r, t);
}
function Ks(e, a) {
  var r = 0;
  e: for (; r < e.length; )
    switch (e.charCodeAt(r)) {
      case 10:
      case 13:
      case 32:
        ++r;
        break;
      case 60:
        return h0(e.slice(r), a);
      default:
        break e;
    }
  return nt.to_workbook(e, a);
}
function M2(e, a) {
  var r = "",
    n = $0(e, a);
  switch (a.type) {
    case "base64":
      r = _r(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = va(e);
      break;
    default:
      throw new Error("Unrecognized type " + a.type);
  }
  return n[0] == 239 && n[1] == 187 && n[2] == 191 && (r = Se(r)), (a.type = "binary"), Ks(r, a);
}
function b2(e, a) {
  var r = e;
  return a.type == "base64" && (r = _r(r)), (r = ea.utils.decode(1200, r.slice(2), "str")), (a.type = "binary"), Ks(r, a);
}
function B2(e) {
  return e.match(/[^\x00-\x7F]/) ? $a(e) : e;
}
function i0(e, a, r, n) {
  return n ? ((r.type = "string"), nt.to_workbook(e, r)) : nt.to_workbook(a, r);
}
function p0(e, a) {
  mi();
  var r = a || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return p0(new Uint8Array(e), ((r = Ke(r)), (r.type = "array"), r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var n = e,
    t = [0, 0, 0, 0],
    i = !1;
  if ((r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), (Ra = {}), r.dateNF && (Ra.dateNF = r.dateNF), r.type || (r.type = Te && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && ((r.type = Te ? "buffer" : "binary"), (n = Sf(e)), typeof Uint8Array < "u" && !Te && (r.type = "array")), r.type == "string" && ((i = !0), (r.type = "binary"), (r.codepage = 65001), (n = B2(e))), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u")) {
    var s = new ArrayBuffer(3),
      c = new Uint8Array(s);
    if (((c.foo = "bar"), !c.foo)) return (r = Ke(r)), (r.type = "array"), p0(w0(n), r);
  }
  switch ((t = $0(n, r))[0]) {
    case 208:
      if (t[1] === 207 && t[2] === 17 && t[3] === 224 && t[4] === 161 && t[5] === 177 && t[6] === 26 && t[7] === 225) return P2(Ee.read(n, r), r);
      break;
    case 9:
      if (t[1] <= 8) return Xs(n, r);
      break;
    case 60:
      return h0(n, r);
    case 73:
      if (t[1] === 73 && t[2] === 42 && t[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (t[1] === 68) return hu(n, r);
      break;
    case 84:
      if (t[1] === 65 && t[2] === 66 && t[3] === 76) return lu.to_workbook(n, r);
      break;
    case 80:
      return t[1] === 75 && t[2] < 9 && t[3] < 9 ? L2(n, r) : i0(e, n, r, i);
    case 239:
      return t[3] === 60 ? h0(n, r) : i0(e, n, r, i);
    case 255:
      if (t[1] === 254) return b2(n, r);
      if (t[1] === 0 && t[2] === 2 && t[3] === 0) return qa.to_workbook(n, r);
      break;
    case 0:
      if (t[1] === 0 && ((t[2] >= 2 && t[3] === 0) || (t[2] === 0 && (t[3] === 8 || t[3] === 9)))) return qa.to_workbook(n, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Yn.to_workbook(n, r);
    case 123:
      if (t[1] === 92 && t[2] === 114 && t[3] === 116) return Gu.to_workbook(n, r);
      break;
    case 10:
    case 13:
    case 32:
      return M2(n, r);
    case 137:
      if (t[1] === 80 && t[2] === 78 && t[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return fu.indexOf(t[0]) > -1 && t[2] <= 12 && t[3] <= 31 ? Yn.to_workbook(n, r) : i0(e, n, r, i);
}
function U2(e, a, r, n, t, i, s, c) {
  var f = Ye(r),
    o = c.defval,
    l = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"),
    h = !0,
    u = t === 1 ? [] : {};
  if (t !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(u, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        u.__rowNum__ = r;
      }
    else u.__rowNum__ = r;
  if (!s || e[r])
    for (var d = a.s.c; d <= a.e.c; ++d) {
      var v = s ? e[r][d] : e[n[d] + f];
      if (v === void 0 || v.t === void 0) {
        if (o === void 0) continue;
        i[d] != null && (u[i[d]] = o);
        continue;
      }
      var x = v.v;
      switch (v.t) {
        case "z":
          if (x == null) break;
          continue;
        case "e":
          x = x == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + v.t);
      }
      if (i[d] != null) {
        if (x == null)
          if (v.t == "e" && x === null) u[i[d]] = null;
          else if (o !== void 0) u[i[d]] = o;
          else if (l && x === null) u[i[d]] = null;
          else continue;
        else u[i[d]] = l && (v.t !== "n" || (v.t === "n" && c.rawNumbers !== !1)) ? x : Kr(v, x, c);
        x != null && (h = !1);
      }
    }
  return { row: u, isempty: h };
}
function g0(e, a) {
  if (e == null || e["!ref"] == null) return [];
  var r = { t: "n", v: 0 },
    n = 0,
    t = 1,
    i = [],
    s = 0,
    c = "",
    f = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    o = a || {},
    l = o.range != null ? o.range : e["!ref"];
  switch ((o.header === 1 ? (n = 1) : o.header === "A" ? (n = 2) : Array.isArray(o.header) ? (n = 3) : o.header == null && (n = 0), typeof l)) {
    case "string":
      f = Ie(l);
      break;
    case "number":
      (f = Ie(e["!ref"])), (f.s.r = l);
      break;
    default:
      f = l;
  }
  n > 0 && (t = 0);
  var h = Ye(f.s.r),
    u = [],
    d = [],
    v = 0,
    x = 0,
    g = Array.isArray(e),
    A = f.s.r,
    C = 0,
    _ = {};
  g && !e[A] && (e[A] = []);
  var D = (o.skipHidden && e["!cols"]) || [],
    b = (o.skipHidden && e["!rows"]) || [];
  for (C = f.s.c; C <= f.e.c; ++C)
    if (!(D[C] || {}).hidden)
      switch (((u[C] = Ve(C)), (r = g ? e[A][C] : e[u[C] + h]), n)) {
        case 1:
          i[C] = C - f.s.c;
          break;
        case 2:
          i[C] = u[C];
          break;
        case 3:
          i[C] = o.header[C - f.s.c];
          break;
        default:
          if ((r == null && (r = { w: "__EMPTY", t: "s" }), (c = s = Kr(r, null, o)), (x = _[s] || 0), !x)) _[s] = 1;
          else {
            do c = s + "_" + x++;
            while (_[c]);
            (_[s] = x), (_[c] = 1);
          }
          i[C] = c;
      }
  for (A = f.s.r + t; A <= f.e.r; ++A)
    if (!(b[A] || {}).hidden) {
      var N = U2(e, f, A, u, n, i, g, o);
      (N.isempty === !1 || (n === 1 ? o.blankrows !== !1 : o.blankrows)) && (d[v++] = N.row);
    }
  return (d.length = v), d;
}
var hi = /"/g;
function H2(e, a, r, n, t, i, s, c) {
  for (var f = !0, o = [], l = "", h = Ye(r), u = a.s.c; u <= a.e.c; ++u)
    if (n[u]) {
      var d = c.dense ? (e[r] || [])[u] : e[n[u] + h];
      if (d == null) l = "";
      else if (d.v != null) {
        (f = !1), (l = "" + (c.rawNumbers && d.t == "n" ? d.v : Kr(d, null, c)));
        for (var v = 0, x = 0; v !== l.length; ++v)
          if ((x = l.charCodeAt(v)) === t || x === i || x === 34 || c.forceQuotes) {
            l = '"' + l.replace(hi, '""') + '"';
            break;
          }
        l == "ID" && (l = '"ID"');
      } else d.f != null && !d.F ? ((f = !1), (l = "=" + d.f), l.indexOf(",") >= 0 && (l = '"' + l.replace(hi, '""') + '"')) : (l = "");
      o.push(l);
    }
  return c.blankrows === !1 && f ? null : o.join(s);
}
function Ys(e, a) {
  var r = [],
    n = a ?? {};
  if (e == null || e["!ref"] == null) return "";
  var t = Ie(e["!ref"]),
    i = n.FS !== void 0 ? n.FS : ",",
    s = i.charCodeAt(0),
    c =
      n.RS !== void 0
        ? n.RS
        : `
`,
    f = c.charCodeAt(0),
    o = new RegExp((i == "|" ? "\\|" : i) + "+$"),
    l = "",
    h = [];
  n.dense = Array.isArray(e);
  for (var u = (n.skipHidden && e["!cols"]) || [], d = (n.skipHidden && e["!rows"]) || [], v = t.s.c; v <= t.e.c; ++v) (u[v] || {}).hidden || (h[v] = Ve(v));
  for (var x = 0, g = t.s.r; g <= t.e.r; ++g) (d[g] || {}).hidden || ((l = H2(e, t, g, h, s, f, i, n)), l != null && (n.strip && (l = l.replace(o, "")), (l || n.blankrows !== !1) && r.push((x++ ? c : "") + l)));
  return delete n.dense, r.join("");
}
function V2(e, a) {
  a || (a = {}),
    (a.FS = "	"),
    (a.RS = `
`);
  var r = Ys(e, a);
  return r;
}
function W2(e) {
  var a = "",
    r,
    n = "";
  if (e == null || e["!ref"] == null) return [];
  var t = Ie(e["!ref"]),
    i = "",
    s = [],
    c,
    f = [],
    o = Array.isArray(e);
  for (c = t.s.c; c <= t.e.c; ++c) s[c] = Ve(c);
  for (var l = t.s.r; l <= t.e.r; ++l)
    for (i = Ye(l), c = t.s.c; c <= t.e.c; ++c)
      if (((a = s[c] + i), (r = o ? (e[l] || [])[c] : e[a]), (n = ""), r !== void 0)) {
        if (r.F != null) {
          if (((a = r.F), !r.f)) continue;
          (n = r.f), a.indexOf(":") == -1 && (a = a + ":" + a);
        }
        if (r.f != null) n = r.f;
        else {
          if (r.t == "z") continue;
          if (r.t == "n" && r.v != null) n = "" + r.v;
          else if (r.t == "b") n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0) n = "'" + r.w;
          else {
            if (r.v === void 0) continue;
            r.t == "s" ? (n = "'" + r.v) : (n = "" + r.v);
          }
        }
        f[f.length] = a + "=" + n;
      }
  return f;
}
function Js(e, a, r) {
  var n = r || {},
    t = +!n.skipHeader,
    i = e || {},
    s = 0,
    c = 0;
  if (i && n.origin != null)
    if (typeof n.origin == "number") s = n.origin;
    else {
      var f = typeof n.origin == "string" ? lr(n.origin) : n.origin;
      (s = f.r), (c = f.c);
    }
  var o,
    l = { s: { c: 0, r: 0 }, e: { c, r: s + a.length - 1 + t } };
  if (i["!ref"]) {
    var h = Ie(i["!ref"]);
    (l.e.c = Math.max(l.e.c, h.e.c)), (l.e.r = Math.max(l.e.r, h.e.r)), s == -1 && ((s = h.e.r + 1), (l.e.r = s + a.length - 1 + t));
  } else s == -1 && ((s = 0), (l.e.r = a.length - 1 + t));
  var u = n.header || [],
    d = 0;
  a.forEach(function (x, g) {
    Br(x).forEach(function (A) {
      (d = u.indexOf(A)) == -1 && (u[(d = u.length)] = A);
      var C = x[A],
        _ = "z",
        D = "",
        b = ve({ c: c + d, r: s + g + t });
      (o = ft(i, b)), C && typeof C == "object" && !(C instanceof Date) ? (i[b] = C) : (typeof C == "number" ? (_ = "n") : typeof C == "boolean" ? (_ = "b") : typeof C == "string" ? (_ = "s") : C instanceof Date ? ((_ = "d"), n.cellDates || ((_ = "n"), (C = hr(C))), (D = n.dateNF || ge[14])) : C === null && n.nullError && ((_ = "e"), (C = 0)), o ? ((o.t = _), (o.v = C), delete o.w, delete o.R, D && (o.z = D)) : (i[b] = o = { t: _, v: C }), D && (o.z = D));
    });
  }),
    (l.e.c = Math.max(l.e.c, c + u.length - 1));
  var v = Ye(s);
  if (t) for (d = 0; d < u.length; ++d) i[Ve(d + c) + v] = { t: "s", v: u[d] };
  return (i["!ref"] = ke(l)), i;
}
function G2(e, a) {
  return Js(null, e, a);
}
function ft(e, a, r) {
  if (typeof a == "string") {
    if (Array.isArray(e)) {
      var n = lr(a);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[a] || (e[a] = { t: "z" });
  }
  return typeof a != "number" ? ft(e, ve(a)) : ft(e, ve({ r: a, c: r || 0 }));
}
function X2(e, a) {
  if (typeof a == "number") {
    if (a >= 0 && e.SheetNames.length > a) return a;
    throw new Error("Cannot find sheet # " + a);
  } else if (typeof a == "string") {
    var r = e.SheetNames.indexOf(a);
    if (r > -1) return r;
    throw new Error("Cannot find sheet name |" + a + "|");
  } else throw new Error("Cannot find sheet |" + a + "|");
}
function z0() {
  return { SheetNames: [], Sheets: {} };
}
function j0(e, a, r, n) {
  var t = 1;
  if (!r) for (; t <= 65535 && e.SheetNames.indexOf((r = "Sheet" + t)) != -1; ++t, r = void 0);
  if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/);
    t = (i && +i[2]) || 0;
    var s = (i && i[1]) || r;
    for (++t; t <= 65535 && e.SheetNames.indexOf((r = s + t)) != -1; ++t);
  }
  if ((Cd(r), e.SheetNames.indexOf(r) >= 0)) throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), (e.Sheets[r] = a), r;
}
function $2(e, a, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = X2(e, a);
  switch ((e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r)) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function z2(e, a) {
  return (e.z = a), e;
}
function qs(e, a, r) {
  return a ? ((e.l = { Target: a }), r && (e.l.Tooltip = r)) : delete e.l, e;
}
function j2(e, a, r) {
  return qs(e, "#" + a, r);
}
function K2(e, a, r) {
  e.c || (e.c = []), e.c.push({ t: a, a: r || "SheetJS" });
}
function Y2(e, a, r, n) {
  for (var t = typeof a != "string" ? a : Ie(a), i = typeof a == "string" ? a : ke(a), s = t.s.r; s <= t.e.r; ++s)
    for (var c = t.s.c; c <= t.e.c; ++c) {
      var f = ft(e, s, c);
      (f.t = "n"), (f.F = i), delete f.v, s == t.s.r && c == t.s.c && ((f.f = r), n && (f.D = !0));
    }
  return e;
}
var J2 = {
  encode_col: Ve,
  encode_row: Ye,
  encode_cell: ve,
  encode_range: ke,
  decode_col: I0,
  decode_row: D0,
  split_cell: so,
  decode_cell: lr,
  decode_range: Pa,
  format_cell: Kr,
  sheet_add_aoa: rs,
  sheet_add_json: Js,
  sheet_add_dom: $s,
  aoa_to_sheet: La,
  json_to_sheet: G2,
  table_to_sheet: zs,
  table_to_book: h2,
  sheet_to_csv: Ys,
  sheet_to_txt: V2,
  sheet_to_json: g0,
  sheet_to_html: u2,
  sheet_to_formulae: W2,
  sheet_to_row_object_array: g0,
  sheet_get_cell: ft,
  book_new: z0,
  book_append_sheet: j0,
  book_set_sheet_visibility: $2,
  cell_set_number_format: z2,
  cell_set_hyperlink: qs,
  cell_set_internal_link: j2,
  cell_add_comment: K2,
  sheet_set_array_formula: Y2,
  consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
};
const q2 = {
  data() {
    return { data: { sheet1: [] } };
  },
  async mounted() {
    console.log("hi");
    const e = await this.parse_from_url("/text.xlsx"),
      a = e.Sheets[e.SheetNames[0]],
      r = J2.sheet_to_json(a);
    console.log("len", e.SheetNames, JSON.stringify(r));
  },
  methods: {
    click() {
      console.log("hi ");
    },
    async parse_from_url(e) {
      const a = await fetch(e);
      if (!a.ok) throw new Error("fetch failed");
      const r = await a.arrayBuffer();
      return console.log("blob", r), p0(r);
    },
  },
};
function Z2(e, a, r, n, t, i) {
  return Ha(), Va("div", null, [ze(Xc, { onClick: a[0] || (a[0] = (s) => i.click()), color: "secondary", "prepend-icon": "mdi-plus" }, { default: cr(() => [Qr("clickme")]), _: 1 })]);
}
const Q2 = pi(q2, [["render", Z2]]);
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */ const Ge = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: "center",
    wrapAround: !1,
    throttle: 16,
    pauseAutoplayOnHover: !1,
    mouseDrag: !0,
    touchDrag: !0,
    dir: "ltr",
    breakpoints: void 0,
    i18n: { ariaNextSlide: "Navigate to next slide", ariaPreviousSlide: "Navigate to previous slide", ariaNavigateToSlide: "Navigate to slide {slideNumber}", ariaGallery: "Gallery", itemXofY: "Item {currentSlide} of {slidesCount}", iconArrowUp: "Arrow pointing upwards", iconArrowDown: "Arrow pointing downwards", iconArrowRight: "Arrow pointing to the right", iconArrowLeft: "Arrow pointing to the left" },
  },
  xi = {
    itemsToShow: { default: Ge.itemsToShow, type: Number },
    itemsToScroll: { default: Ge.itemsToScroll, type: Number },
    wrapAround: { default: Ge.wrapAround, type: Boolean },
    throttle: { default: Ge.throttle, type: Number },
    snapAlign: {
      default: Ge.snapAlign,
      validator(e) {
        return ["start", "end", "center", "center-even", "center-odd"].includes(e);
      },
    },
    transition: { default: Ge.transition, type: Number },
    breakpoints: { default: Ge.breakpoints, type: Object },
    autoplay: { default: Ge.autoplay, type: Number },
    pauseAutoplayOnHover: { default: Ge.pauseAutoplayOnHover, type: Boolean },
    modelValue: { default: void 0, type: Number },
    mouseDrag: { default: Ge.mouseDrag, type: Boolean },
    touchDrag: { default: Ge.touchDrag, type: Boolean },
    dir: {
      default: Ge.dir,
      validator(e) {
        return ["rtl", "ltr"].includes(e);
      },
    },
    i18n: { default: Ge.i18n, type: Object },
    settings: {
      default() {
        return {};
      },
      type: Object,
    },
  };
function ev({ config: e, slidesCount: a }) {
  const { snapAlign: r, wrapAround: n, itemsToShow: t = 1 } = e;
  if (n) return Math.max(a - 1, 0);
  let i;
  switch (r) {
    case "start":
      i = a - t;
      break;
    case "end":
      i = a - 1;
      break;
    case "center":
    case "center-odd":
      i = a - Math.ceil((t - 0.5) / 2);
      break;
    case "center-even":
      i = a - Math.ceil(t / 2);
      break;
    default:
      i = 0;
      break;
  }
  return Math.max(i, 0);
}
function rv({ config: e, slidesCount: a }) {
  const { wrapAround: r, snapAlign: n, itemsToShow: t = 1 } = e;
  let i = 0;
  if (r || t > a) return i;
  switch (n) {
    case "start":
      i = 0;
      break;
    case "end":
      i = t - 1;
      break;
    case "center":
    case "center-odd":
      i = Math.floor((t - 1) / 2);
      break;
    case "center-even":
      i = Math.floor((t - 2) / 2);
      break;
    default:
      i = 0;
      break;
  }
  return i;
}
function m0({ val: e, max: a, min: r }) {
  return a < r ? e : Math.min(Math.max(e, r), a);
}
function av({ config: e, currentSlide: a, slidesCount: r }) {
  const { snapAlign: n, wrapAround: t, itemsToShow: i = 1 } = e;
  let s = a;
  switch (n) {
    case "center":
    case "center-odd":
      s -= (i - 1) / 2;
      break;
    case "center-even":
      s -= (i - 2) / 2;
      break;
    case "end":
      s -= i - 1;
      break;
  }
  return t ? s : m0({ val: s, max: r - i, min: 0 });
}
function Zs(e) {
  return e
    ? e.reduce((a, r) => {
        var n;
        return r.type === Ft ? [...a, ...Zs(r.children)] : ((n = r.type) === null || n === void 0 ? void 0 : n.name) === "CarouselSlide" ? [...a, r] : a;
      }, [])
    : [];
}
function Bt({ val: e, max: a, min: r = 0 }) {
  return e > a ? Bt({ val: e - (a + 1), max: a, min: r }) : e < r ? Bt({ val: e + (a + 1), max: a, min: r }) : e;
}
function tv(e, a) {
  let r;
  return a
    ? function (...n) {
        const t = this;
        r || (e.apply(t, n), (r = !0), setTimeout(() => (r = !1), a));
      }
    : e;
}
function nv(e, a) {
  let r;
  return function (...n) {
    r && clearTimeout(r),
      (r = setTimeout(() => {
        e(...n), (r = null);
      }, a));
  };
}
function Qs(e = "", a = {}) {
  return Object.entries(a).reduce((r, [n, t]) => r.replace(`{${n}}`, String(t)), e);
}
var iv = T0({
    name: "ARIA",
    setup() {
      const e = Ar("config", ya(Object.assign({}, Ge))),
        a = Ar("currentSlide", Be(0)),
        r = Ar("slidesCount", Be(0));
      return () => br("div", { class: ["carousel__liveregion", "carousel__sr-only"], "aria-live": "polite", "aria-atomic": "true" }, Qs(e.i18n.itemXofY, { currentSlide: a.value + 1, slidesCount: r.value }));
    },
  }),
  sv = T0({
    name: "Carousel",
    props: xi,
    setup(e, { slots: a, emit: r, expose: n }) {
      var t;
      const i = Be(null),
        s = Be([]),
        c = Be(0),
        f = Be(0),
        o = ya(Object.assign({}, Ge));
      let l = Object.assign({}, Ge),
        h;
      const u = Be((t = e.modelValue) !== null && t !== void 0 ? t : 0),
        d = Be(0),
        v = Be(0),
        x = Be(0),
        g = Be(0);
      let A, C;
      Gr("config", o), Gr("slidesCount", f), Gr("currentSlide", u), Gr("maxSlide", x), Gr("minSlide", g), Gr("slideWidth", c);
      function _() {
        (h = Object.assign({}, e.breakpoints)), (l = Object.assign(Object.assign(Object.assign({}, l), e), { i18n: Object.assign(Object.assign({}, l.i18n), e.i18n), breakpoints: void 0 })), b(l);
      }
      function D() {
        if (!h || !Object.keys(h).length) return;
        const te = Object.keys(h)
          .map((le) => Number(le))
          .sort((le, Z) => +Z - +le);
        let de = Object.assign({}, l);
        te.some((le) => {
          const Z = window.matchMedia(`(min-width: ${le}px)`).matches;
          return Z && (de = Object.assign(Object.assign({}, de), h[le])), Z;
        }),
          b(de);
      }
      function b(te) {
        Object.entries(te).forEach(([de, le]) => (o[de] = le));
      }
      const N = nv(() => {
        D(), S();
      }, 16);
      function S() {
        if (!i.value) return;
        const te = i.value.getBoundingClientRect();
        c.value = te.width / o.itemsToShow;
      }
      function H() {
        f.value <= 0 || ((v.value = Math.ceil((f.value - 1) / 2)), (x.value = ev({ config: o, slidesCount: f.value })), (g.value = rv({ config: o, slidesCount: f.value })), o.wrapAround || (u.value = m0({ val: u.value, max: x.value, min: g.value })));
      }
      bc(() => {
        Bc(() => S()), setTimeout(() => S(), 1e3), D(), ue(), window.addEventListener("resize", N, { passive: !0 }), r("init");
      }),
        Uc(() => {
          C && clearTimeout(C), A && clearInterval(A), window.removeEventListener("resize", N, { passive: !0 });
        });
      let O = !1;
      const X = { x: 0, y: 0 },
        V = { x: 0, y: 0 },
        P = ya({ x: 0, y: 0 }),
        K = Be(!1),
        oe = Be(!1),
        re = () => {
          K.value = !0;
        },
        fe = () => {
          K.value = !1;
        };
      function ie(te) {
        ["INPUT", "TEXTAREA", "SELECT"].includes(te.target.tagName) || ((O = te.type === "touchstart"), O || te.preventDefault(), !((!O && te.button !== 0) || F.value) && ((X.x = O ? te.touches[0].clientX : te.clientX), (X.y = O ? te.touches[0].clientY : te.clientY), document.addEventListener(O ? "touchmove" : "mousemove", Ae, !0), document.addEventListener(O ? "touchend" : "mouseup", G, !0)));
      }
      const Ae = tv((te) => {
        (oe.value = !0), (V.x = O ? te.touches[0].clientX : te.clientX), (V.y = O ? te.touches[0].clientY : te.clientY);
        const de = V.x - X.x,
          le = V.y - X.y;
        (P.y = le), (P.x = de);
      }, o.throttle);
      function G() {
        const te = o.dir === "rtl" ? -1 : 1,
          de = Math.sign(P.x) * 0.4,
          le = Math.round(P.x / c.value + de) * te;
        if (le && !O) {
          const Z = (Fe) => {
            Fe.stopPropagation(), window.removeEventListener("click", Z, !0);
          };
          window.addEventListener("click", Z, !0);
        }
        L(u.value - le), (P.x = 0), (P.y = 0), (oe.value = !1), document.removeEventListener(O ? "touchmove" : "mousemove", Ae, !0), document.removeEventListener(O ? "touchend" : "mouseup", G, !0);
      }
      function ue() {
        !o.autoplay ||
          o.autoplay <= 0 ||
          (A = setInterval(() => {
            (o.pauseAutoplayOnHover && K.value) || I();
          }, o.autoplay));
      }
      function he() {
        A && (clearInterval(A), (A = null)), ue();
      }
      const F = Be(!1);
      function L(te) {
        const de = o.wrapAround ? te : m0({ val: te, max: x.value, min: g.value });
        u.value === de ||
          F.value ||
          (r("slide-start", { slidingToIndex: te, currentSlideIndex: u.value, prevSlideIndex: d.value, slidesCount: f.value }),
          (F.value = !0),
          (d.value = u.value),
          (u.value = de),
          (C = setTimeout(() => {
            if (o.wrapAround) {
              const le = Bt({ val: de, max: x.value, min: 0 });
              le !== u.value && ((u.value = le), r("loop", { currentSlideIndex: u.value, slidingToIndex: te }));
            }
            r("update:modelValue", u.value), r("slide-end", { currentSlideIndex: u.value, prevSlideIndex: d.value, slidesCount: f.value }), (F.value = !1), he();
          }, o.transition)));
      }
      function I() {
        L(u.value + o.itemsToScroll);
      }
      function R() {
        L(u.value - o.itemsToScroll);
      }
      const j = { slideTo: L, next: I, prev: R };
      Gr("nav", j), Gr("isSliding", F);
      const ee = s0(() => av({ config: o, currentSlide: u.value, slidesCount: f.value }));
      Gr("slidesToScroll", ee);
      const se = s0(() => {
        const te = o.dir === "rtl" ? -1 : 1,
          de = ee.value * c.value * te;
        return { transform: `translateX(${P.x - de}px)`, transition: `${F.value ? o.transition : 0}ms`, margin: o.wrapAround ? `0 -${f.value * c.value}px` : "", width: "100%" };
      });
      function Q() {
        _(), D(), H(), S(), he();
      }
      Object.keys(xi).forEach((te) => {
        ["modelValue"].includes(te) || jt(() => e[te], Q);
      }),
        jt(
          () => e.modelValue,
          (te) => {
            te !== u.value && L(Number(te));
          }
        ),
        jt(f, H),
        r("before-init"),
        _();
      const Y = { config: o, slidesCount: f, slideWidth: c, next: I, prev: R, slideTo: L, currentSlide: u, maxSlide: x, minSlide: g, middleSlide: v };
      n({ updateBreakpointsConfigs: D, updateSlidesData: H, updateSlideWidth: S, initDefaultConfigs: _, restartCarousel: Q, slideTo: L, next: I, prev: R, nav: j, data: Y });
      const _e = a.default || a.slides,
        y = a.addons,
        ye = ya(Y);
      return () => {
        const te = Zs(_e == null ? void 0 : _e(ye)),
          de = (y == null ? void 0 : y(ye)) || [];
        te.forEach((Je, xr) => (Je.props.index = xr));
        let le = te;
        if (o.wrapAround) {
          const Je = te.map((vr, yr) => an(vr, { index: -te.length + yr, isClone: !0, key: `clone-before-${yr}` })),
            xr = te.map((vr, yr) => an(vr, { index: te.length + yr, isClone: !0, key: `clone-after-${yr}` }));
          le = [...Je, ...te, ...xr];
        }
        (s.value = te), (f.value = Math.max(te.length, 1));
        const Z = br("ol", { class: "carousel__track", style: se.value, onMousedownCapture: o.mouseDrag ? ie : null, onTouchstartPassiveCapture: o.touchDrag ? ie : null }, le),
          Fe = br("div", { class: "carousel__viewport" }, Z);
        return br("section", { ref: i, class: { carousel: !0, "is-sliding": F.value, "is-dragging": oe.value, "is-hover": K.value, "carousel--rtl": o.dir === "rtl" }, dir: o.dir, "aria-label": o.i18n.ariaGallery, tabindex: "0", onMouseenter: re, onMouseleave: fe }, [Fe, de, br(iv)]);
      };
    },
  }),
  di;
(function (e) {
  (e.arrowUp = "arrowUp"), (e.arrowDown = "arrowDown"), (e.arrowRight = "arrowRight"), (e.arrowLeft = "arrowLeft");
})(di || (di = {}));
const cv = () => {
  const e = Ar("config", ya(Object.assign({}, Ge))),
    a = Ar("maxSlide", Be(1)),
    r = Ar("minSlide", Be(1)),
    n = Ar("currentSlide", Be(1)),
    t = Ar("nav", {}),
    i = (c) => Bt({ val: n.value, max: a.value, min: 0 }) === c,
    s = [];
  for (let c = r.value; c < a.value + 1; c++) {
    const f = br("button", { type: "button", class: { "carousel__pagination-button": !0, "carousel__pagination-button--active": i(c) }, "aria-label": Qs(e.i18n.ariaNavigateToSlide, { slideNumber: c + 1 }), onClick: () => t.slideTo(c) }),
      o = br("li", { class: "carousel__pagination-item", key: c }, f);
    s.push(o);
  }
  return br("ol", { class: "carousel__pagination" }, s);
};
var fv = T0({
  name: "CarouselSlide",
  props: { index: { type: Number, default: 1 }, isClone: { type: Boolean, default: !1 } },
  setup(e, { slots: a }) {
    const r = Ar("config", ya(Object.assign({}, Ge))),
      n = Ar("currentSlide", Be(0)),
      t = Ar("slidesToScroll", Be(0)),
      i = Ar("isSliding", Be(!1)),
      s = () => e.index === n.value,
      c = () => e.index === n.value - 1,
      f = () => e.index === n.value + 1,
      o = () => {
        const l = Math.floor(t.value),
          h = Math.ceil(t.value + r.itemsToShow - 1);
        return e.index >= l && e.index <= h;
      };
    return () => {
      var l;
      return br("li", { style: { width: `${100 / r.itemsToShow}%` }, class: { carousel__slide: !0, "carousel__slide--clone": e.isClone, "carousel__slide--visible": o(), "carousel__slide--active": s(), "carousel__slide--prev": c(), "carousel__slide--next": f(), "carousel__slide--sliding": i.value }, "aria-hidden": !o() }, (l = a.default) === null || l === void 0 ? void 0 : l.call(a));
    };
  },
});
var ec = {},
  jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.FORMAT_PLAIN = jr.FORMAT_HTML = jr.FORMATS = void 0;
var rc = "html";
jr.FORMAT_HTML = rc;
var ac = "plain";
jr.FORMAT_PLAIN = ac;
var ov = [rc, ac];
jr.FORMATS = ov;
var er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.UNIT_WORDS = er.UNIT_WORD = er.UNIT_SENTENCES = er.UNIT_SENTENCE = er.UNIT_PARAGRAPHS = er.UNIT_PARAGRAPH = er.UNITS = void 0;
var tc = "words";
er.UNIT_WORDS = tc;
var nc = "word";
er.UNIT_WORD = nc;
var ic = "sentences";
er.UNIT_SENTENCES = ic;
var sc = "sentence";
er.UNIT_SENTENCE = sc;
var cc = "paragraphs";
er.UNIT_PARAGRAPHS = cc;
var fc = "paragraph";
er.UNIT_PARAGRAPH = fc;
var lv = [tc, nc, ic, sc, cc, fc];
er.UNITS = lv;
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.WORDS = void 0;
var uv = [
  "ad",
  "adipisicing",
  "aliqua",
  "aliquip",
  "amet",
  "anim",
  "aute",
  "cillum",
  "commodo",
  "consectetur",
  "consequat",
  "culpa",
  "cupidatat",
  "deserunt",
  "do",
  "dolor",
  "dolore",
  "duis",
  "ea",
  "eiusmod",
  "elit",
  "enim",
  "esse",
  "est",
  "et",
  "eu",
  "ex",
  "excepteur",
  "exercitation",
  "fugiat",
  "id",
  "in",
  "incididunt",
  "ipsum",
  "irure",
  "labore",
  "laboris",
  "laborum",
  "Lorem",
  "magna",
  "minim",
  "mollit",
  "nisi",
  "non",
  "nostrud",
  "nulla",
  "occaecat",
  "officia",
  "pariatur",
  "proident",
  "qui",
  "quis",
  "reprehenderit",
  "sint",
  "sit",
  "sunt",
  "tempor",
  "ullamco",
  "ut",
  "velit",
  "veniam",
  "voluptate",
];
vt.WORDS = uv;
var oc = {},
  Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.LINE_ENDINGS = void 0;
var hv = {
  POSIX: `
`,
  WIN32: `\r
`,
};
Gt.LINE_ENDINGS = hv;
var lc = {},
  K0 = {},
  uc = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var a = function (t) {
      var i = t.trim();
      return i.charAt(0).toUpperCase() + i.slice(1);
    },
    r = a;
  e.default = r;
})(uc);
var _0 = { exports: {} };
(function (e, a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
  var r = function () {
      return !!e.exports;
    },
    n = r;
  a.default = n;
})(_0, _0.exports);
var xv = _0.exports,
  hc = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var a = function () {
      var t = !1;
      try {
        t = navigator.product === "ReactNative";
      } catch {
        t = !1;
      }
      return t;
    },
    r = a;
  e.default = r;
})(hc);
var xc = {},
  Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.SUPPORTED_PLATFORMS = void 0;
var dv = { DARWIN: "darwin", LINUX: "linux", WIN32: "win32" };
Xt.SUPPORTED_PLATFORMS = dv;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var a = Xt,
    r = function () {
      var i = !1;
      try {
        i = process.platform === a.SUPPORTED_PLATFORMS.WIN32;
      } catch {
        i = !1;
      }
      return i;
    },
    n = r;
  e.default = n;
})(xc);
var Y0 = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var a = function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return Array.apply(null, Array(t)).map(function (i, s) {
        return s;
      });
    },
    r = a;
  e.default = r;
})(Y0);
var dc = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var a = r(Y0);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = function (s, c) {
      var f = (0, a.default)(s);
      return f.map(function () {
        return c();
      });
    },
    t = n;
  e.default = t;
})(dc);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "capitalize", {
      enumerable: !0,
      get: function () {
        return a.default;
      },
    }),
    Object.defineProperty(e, "isNode", {
      enumerable: !0,
      get: function () {
        return r.default;
      },
    }),
    Object.defineProperty(e, "isReactNative", {
      enumerable: !0,
      get: function () {
        return n.default;
      },
    }),
    Object.defineProperty(e, "isWindows", {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    }),
    Object.defineProperty(e, "makeArrayOfLength", {
      enumerable: !0,
      get: function () {
        return i.default;
      },
    }),
    Object.defineProperty(e, "makeArrayOfStrings", {
      enumerable: !0,
      get: function () {
        return s.default;
      },
    });
  var a = c(uc),
    r = c(xv),
    n = c(hc),
    t = c(xc),
    i = c(Y0),
    s = c(dc);
  function c(f) {
    return f && f.__esModule ? f : { default: f };
  }
})(K0);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var a = vt,
    r = K0;
  function n(o, l) {
    if (!(o instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function t(o, l) {
    for (var h = 0; h < l.length; h++) {
      var u = l[h];
      (u.enumerable = u.enumerable || !1), (u.configurable = !0), "value" in u && (u.writable = !0), Object.defineProperty(o, u.key, u);
    }
  }
  function i(o, l, h) {
    return l && t(o.prototype, l), h && t(o, h), Object.defineProperty(o, "prototype", { writable: !1 }), o;
  }
  function s(o, l, h) {
    return l in o ? Object.defineProperty(o, l, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : (o[l] = h), o;
  }
  var c = (function () {
      function o() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          h = l.sentencesPerParagraph,
          u = h === void 0 ? { max: 7, min: 3 } : h,
          d = l.wordsPerSentence,
          v = d === void 0 ? { max: 15, min: 5 } : d,
          x = l.random;
        l.seed;
        var g = l.words,
          A = g === void 0 ? a.WORDS : g;
        if ((n(this, o), s(this, "sentencesPerParagraph", void 0), s(this, "wordsPerSentence", void 0), s(this, "random", void 0), s(this, "words", void 0), u.min > u.max)) throw new Error("Minimum number of sentences per paragraph (".concat(u.min, ") cannot exceed maximum (").concat(u.max, ")."));
        if (v.min > v.max) throw new Error("Minimum number of words per sentence (".concat(v.min, ") cannot exceed maximum (").concat(v.max, ")."));
        (this.sentencesPerParagraph = u), (this.words = A), (this.wordsPerSentence = v), (this.random = x || Math.random);
      }
      return (
        i(o, [
          {
            key: "generateRandomInteger",
            value: function (h, u) {
              return Math.floor(this.random() * (u - h + 1) + h);
            },
          },
          {
            key: "generateRandomWords",
            value: function (h) {
              var u = this,
                d = this.wordsPerSentence,
                v = d.min,
                x = d.max,
                g = h || this.generateRandomInteger(v, x);
              return (0, r.makeArrayOfLength)(g)
                .reduce(function (A, C) {
                  return "".concat(u.pluckRandomWord(), " ").concat(A);
                }, "")
                .trim();
            },
          },
          {
            key: "generateRandomSentence",
            value: function (h) {
              return "".concat((0, r.capitalize)(this.generateRandomWords(h)), ".");
            },
          },
          {
            key: "generateRandomParagraph",
            value: function (h) {
              var u = this,
                d = this.sentencesPerParagraph,
                v = d.min,
                x = d.max,
                g = h || this.generateRandomInteger(v, x);
              return (0, r.makeArrayOfLength)(g)
                .reduce(function (A, C) {
                  return "".concat(u.generateRandomSentence(), " ").concat(A);
                }, "")
                .trim();
            },
          },
          {
            key: "pluckRandomWord",
            value: function () {
              var h = 0,
                u = this.words.length - 1,
                d = this.generateRandomInteger(h, u);
              return this.words[d];
            },
          },
        ]),
        o
      );
    })(),
    f = c;
  e.default = f;
})(lc);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var a = jr,
    r = Gt,
    n = i(lc),
    t = K0;
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function s(u, d) {
    if (!(u instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function c(u, d) {
    for (var v = 0; v < d.length; v++) {
      var x = d[v];
      (x.enumerable = x.enumerable || !1), (x.configurable = !0), "value" in x && (x.writable = !0), Object.defineProperty(u, x.key, x);
    }
  }
  function f(u, d, v) {
    return d && c(u.prototype, d), v && c(u, v), Object.defineProperty(u, "prototype", { writable: !1 }), u;
  }
  function o(u, d, v) {
    return d in u ? Object.defineProperty(u, d, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : (u[d] = v), u;
  }
  var l = (function () {
      function u() {
        var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a.FORMAT_PLAIN,
          x = arguments.length > 2 ? arguments[2] : void 0;
        if ((s(this, u), (this.format = v), (this.suffix = x), o(this, "generator", void 0), a.FORMATS.indexOf(v.toLowerCase()) === -1)) throw new Error("".concat(v, " is an invalid format. Please use ").concat(a.FORMATS.join(" or "), "."));
        this.generator = new n.default(d);
      }
      return (
        f(u, [
          {
            key: "getLineEnding",
            value: function () {
              return this.suffix ? this.suffix : !(0, t.isReactNative)() && (0, t.isNode)() && (0, t.isWindows)() ? r.LINE_ENDINGS.WIN32 : r.LINE_ENDINGS.POSIX;
            },
          },
          {
            key: "formatString",
            value: function (v) {
              return this.format === a.FORMAT_HTML ? "<p>".concat(v, "</p>") : v;
            },
          },
          {
            key: "formatStrings",
            value: function (v) {
              var x = this;
              return v.map(function (g) {
                return x.formatString(g);
              });
            },
          },
          {
            key: "generateWords",
            value: function (v) {
              return this.formatString(this.generator.generateRandomWords(v));
            },
          },
          {
            key: "generateSentences",
            value: function (v) {
              return this.formatString(this.generator.generateRandomParagraph(v));
            },
          },
          {
            key: "generateParagraphs",
            value: function (v) {
              var x = this.generator.generateRandomParagraph.bind(this.generator);
              return this.formatStrings((0, t.makeArrayOfStrings)(v, x)).join(this.getLineEnding());
            },
          },
        ]),
        u
      );
    })(),
    h = l;
  e.default = h;
})(oc);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "LoremIpsum", {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    }),
    (e.loremIpsum = void 0);
  var a = jr,
    r = er,
    n = vt,
    t = i(oc);
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var s = function () {
    var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      o = f.count,
      l = o === void 0 ? 1 : o,
      h = f.format,
      u = h === void 0 ? a.FORMAT_PLAIN : h,
      d = f.paragraphLowerBound,
      v = d === void 0 ? 3 : d,
      x = f.paragraphUpperBound,
      g = x === void 0 ? 7 : x,
      A = f.random,
      C = f.sentenceLowerBound,
      _ = C === void 0 ? 5 : C,
      D = f.sentenceUpperBound,
      b = D === void 0 ? 15 : D,
      N = f.units,
      S = N === void 0 ? r.UNIT_SENTENCES : N,
      H = f.words,
      O = H === void 0 ? n.WORDS : H,
      X = f.suffix,
      V = X === void 0 ? "" : X,
      P = { random: A, sentencesPerParagraph: { max: g, min: v }, words: O, wordsPerSentence: { max: b, min: _ } },
      K = new t.default(P, u, V);
    switch (S) {
      case r.UNIT_PARAGRAPHS:
      case r.UNIT_PARAGRAPH:
        return K.generateParagraphs(l);
      case r.UNIT_SENTENCES:
      case r.UNIT_SENTENCE:
        return K.generateSentences(l);
      case r.UNIT_WORDS:
      case r.UNIT_WORD:
        return K.generateWords(l);
      default:
        return "";
    }
  };
  e.loremIpsum = s;
})(ec);
const J0 = ["start", "end", "center"],
  vc = ["space-between", "space-around", "space-evenly"];
function q0(e, a) {
  return Wc.reduce((r, n) => {
    const t = e + Gc(n);
    return (r[t] = a()), r;
  }, {});
}
const vv = [...J0, "baseline", "stretch"],
  pc = (e) => vv.includes(e),
  gc = q0("align", () => ({ type: String, default: null, validator: pc })),
  pv = [...J0, ...vc],
  mc = (e) => pv.includes(e),
  _c = q0("justify", () => ({ type: String, default: null, validator: mc })),
  gv = [...J0, ...vc, "stretch"],
  Tc = (e) => gv.includes(e),
  Ec = q0("alignContent", () => ({ type: String, default: null, validator: Tc })),
  vi = { align: Object.keys(gc), justify: Object.keys(_c), alignContent: Object.keys(Ec) },
  mv = { align: "align", justify: "justify", alignContent: "align-content" };
function _v(e, a, r) {
  let n = mv[e];
  if (r != null) {
    if (a) {
      const t = a.replace(e, "");
      n += `-${t}`;
    }
    return (n += `-${r}`), n.toLowerCase();
  }
}
const Tv = Hc({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: pc }, ...gc, justify: { type: String, default: null, validator: mc }, ..._c, alignContent: { type: String, default: null, validator: Tc }, ...Ec, ...$c(), ...zc() }, "VRow"),
  Ev = Vc()({
    name: "VRow",
    props: Tv(),
    setup(e, a) {
      let { slots: r } = a;
      const n = s0(() => {
        const t = [];
        let i;
        for (i in vi)
          vi[i].forEach((s) => {
            const c = e[s],
              f = _v(i, s, c);
            f && t.push(f);
          });
        return t.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), t;
      });
      return () => {
        var t;
        return br(e.tag, { class: ["v-row", n.value, e.class], style: e.style }, (t = r.default) == null ? void 0 : t.call(r));
      };
    },
  }),
  kv = {
    components: { Carousel: sv, Slide: fv, Pagination: cv },
    data() {
      return { li: new ec.LoremIpsum(), layout: "default" };
    },
  },
  wv = { class: "w-100 mt-6 pb-6", style: { "background-image": "url('/cges/bg.png')", "background-repeat": "repeat" } },
  Av = { class: "ma-auto d-flex flex-row" },
  Sv = { class: "w-25 ma-4" },
  Fv = Sa("div", { class: "mt-6 w-100 text-h6 font-weight-bold" }, "Projects", -1),
  yv = { class: "w-25 ma-4" },
  Cv = Sa("div", { class: "mt-6 w-100 text-h6 font-weight-bold" }, "Events", -1);
function Ov(e, a, r, n, t, i) {
  const s = Kt("Slide"),
    c = Kt("Pagination"),
    f = Kt("Carousel"),
    o = Q2;
  return (
    Ha(),
    Va("div", null, [
      ze(
        f,
        { class: "mt-4 h-75 ma-auto", autoplay: 4e3, "items-to-show": 2.5, "wrap-around": !0 },
        {
          addons: cr(() => [ze(c)]),
          default: cr(() => [
            (Ha(),
            Va(
              Ft,
              null,
              Yt(5, (l) => ze(s, { key: l }, { default: cr(() => [ze(jc, { onClick: a[0] || (a[0] = (h) => console.log("hi")), class: "carousel__item", src: `/cges/img/p${l}.jpg` }, null, 8, ["src"])]), _: 2 }, 1024)),
              64
            )),
          ]),
          _: 1,
        }
      ),
      Sa("div", wv, [
        Sa("div", Av, [
          ze(
            Ev,
            { class: "w-75 justify-center" },
            {
              default: cr(() => [
                Sa("div", Sv, [
                  Fv,
                  (Ha(),
                  Va(
                    Ft,
                    null,
                    Yt(5, (l) => ze(nn, { class: "mt-6 w-100", key: l }, { default: cr(() => [ze(sn, { class: "pa-1 bg-gold mb-4" }, { default: cr(() => [ze(cn, { class: "ml-2" }, { default: cr(() => [Qr("This is a title")]), _: 1 }), ze(fn, { class: "ml-2" }, { default: cr(() => [Qr("This is a subtitle")]), _: 1 })]), _: 1 }), ze(on, null, { default: cr(() => [Qr(tn(t.li.generateSentences(parseInt(Math.random() * 5))), 1)]), _: 1 })]), _: 2 }, 1024)),
                    64
                  )),
                ]),
                Sa("div", yv, [
                  Cv,
                  (Ha(),
                  Va(
                    Ft,
                    null,
                    Yt(5, (l) => ze(nn, { class: "mt-6 w-100", key: l }, { default: cr(() => [ze(sn, { class: "pa-1 bg-rust mb-4" }, { default: cr(() => [ze(cn, { class: "ml-2" }, { default: cr(() => [Qr("This is a title")]), _: 1 }), ze(fn, { class: "ml-2" }, { default: cr(() => [Qr("This is a subtitle")]), _: 1 })]), _: 1 }), ze(on, null, { default: cr(() => [Qr(tn(t.li.generateSentences(parseInt(Math.random() * 5))), 1)]), _: 1 })]), _: 2 }, 1024)),
                    64
                  )),
                ]),
              ]),
              _: 1,
            }
          ),
        ]),
      ]),
      Qr(" hello "),
      ze(o),
    ])
  );
}
const Pv = pi(kv, [["render", Ov]]);
export { Pv as default };
