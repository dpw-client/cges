import { L as Qa, a4 as Hn, b0 as zi, C as La, aa as ea, M as Vn, b as Me, x as $i, R as Wn, a2 as Ki, b1 as a0, ai as va, r as Gn, h as gt, b2 as Yi, A as ji, j as Xn, _ as P0, $ as Ji, F as Zi, an as qi } from "./entry.1b72e688.js";
const zn = Qa({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function $n(e) {
  const a = Hn("useRender");
  a.render = e;
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var Kn = 1252,
  Qi = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4],
  t0 = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 },
  n0 = function (e) {
    Qi.indexOf(e) != -1 && (Kn = t0[0] = e);
  };
function ec() {
  n0(1252);
}
var wr = function (e) {
  n0(e);
};
function Yn() {
  wr(1200), ec();
}
function L0(e) {
  for (var a = [], r = 0, n = e.length; r < n; ++r) a[r] = e.charCodeAt(r);
  return a;
}
function rc(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return a.join("");
}
function jn(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return a.join("");
}
var Ra = function (e) {
    var a = e.charCodeAt(0),
      r = e.charCodeAt(1);
    return a == 255 && r == 254 ? rc(e.slice(2)) : a == 254 && r == 255 ? jn(e.slice(2)) : a == 65279 ? e.slice(1) : e;
  },
  ct = function (a) {
    return String.fromCharCode(a);
  },
  M0 = function (a) {
    return String.fromCharCode(a);
  },
  Xr,
  $r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function B0(e) {
  for (var a = "", r = 0, n = 0, t = 0, s = 0, i = 0, c = 0, f = 0, l = 0; l < e.length; ) (r = e.charCodeAt(l++)), (s = r >> 2), (n = e.charCodeAt(l++)), (i = ((r & 3) << 4) | (n >> 4)), (t = e.charCodeAt(l++)), (c = ((n & 15) << 2) | (t >> 6)), (f = t & 63), isNaN(n) ? (c = f = 64) : isNaN(t) && (f = 64), (a += $r.charAt(s) + $r.charAt(i) + $r.charAt(c) + $r.charAt(f));
  return a;
}
function hr(e) {
  var a = "",
    r = 0,
    n = 0,
    t = 0,
    s = 0,
    i = 0,
    c = 0,
    f = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length; ) (s = $r.indexOf(e.charAt(l++))), (i = $r.indexOf(e.charAt(l++))), (r = (s << 2) | (i >> 4)), (a += String.fromCharCode(r)), (c = $r.indexOf(e.charAt(l++))), (n = ((i & 15) << 4) | (c >> 2)), c !== 64 && (a += String.fromCharCode(n)), (f = $r.indexOf(e.charAt(l++))), (t = ((c & 3) << 6) | f), f !== 64 && (a += String.fromCharCode(t));
  return a;
}
var ge = (function () {
    return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
  })(),
  fa = (function () {
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
function jr(e) {
  return ge ? (Buffer.alloc ? Buffer.alloc(e) : new Buffer(e)) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function b0(e) {
  return ge ? (Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e)) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var kr = function (a) {
  return ge
    ? fa(a, "binary")
    : a.split("").map(function (r) {
        return r.charCodeAt(0) & 255;
      });
};
function oa(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join("");
  for (var a = [], r = 0; r < e.length; ++r) a[r] = String.fromCharCode(e[r]);
  return a.join("");
}
function s0(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return s0(new Uint8Array(e));
  for (var a = new Array(e.length), r = 0; r < e.length; ++r) a[r] = e[r];
  return a;
}
var zr = ge
  ? function (e) {
      return Buffer.concat(
        e.map(function (a) {
          return Buffer.isBuffer(a) ? a : fa(a);
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
        e.map(function (s) {
          return Array.isArray(s) ? s : [].slice.call(s);
        })
      );
    };
function ac(e) {
  for (var a = [], r = 0, n = e.length + 250, t = jr(e.length + 255), s = 0; s < e.length; ++s) {
    var i = e.charCodeAt(s);
    if (i < 128) t[r++] = i;
    else if (i < 2048) (t[r++] = 192 | ((i >> 6) & 31)), (t[r++] = 128 | (i & 63));
    else if (i >= 55296 && i < 57344) {
      i = (i & 1023) + 64;
      var c = e.charCodeAt(++s) & 1023;
      (t[r++] = 240 | ((i >> 8) & 7)), (t[r++] = 128 | ((i >> 2) & 63)), (t[r++] = 128 | ((c >> 6) & 15) | ((i & 3) << 4)), (t[r++] = 128 | (c & 63));
    } else (t[r++] = 224 | ((i >> 12) & 15)), (t[r++] = 128 | ((i >> 6) & 63)), (t[r++] = 128 | (i & 63));
    r > n && (a.push(t.slice(0, r)), (r = 0), (t = jr(65535)), (n = 65530));
  }
  return a.push(t.slice(0, r)), zr(a);
}
var ir = /\u0000/g,
  Ia = /[\u0001-\u0006]/g;
function ma(e) {
  for (var a = "", r = e.length - 1; r >= 0; ) a += e.charAt(r--);
  return a;
}
function Ar(e, a) {
  var r = "" + e;
  return r.length >= a ? r : De("0", a - r.length) + r;
}
function i0(e, a) {
  var r = "" + e;
  return r.length >= a ? r : De(" ", a - r.length) + r;
}
function mt(e, a) {
  var r = "" + e;
  return r.length >= a ? r : r + De(" ", a - r.length);
}
function tc(e, a) {
  var r = "" + Math.round(e);
  return r.length >= a ? r : De("0", a - r.length) + r;
}
function nc(e, a) {
  var r = "" + e;
  return r.length >= a ? r : De("0", a - r.length) + r;
}
var U0 = Math.pow(2, 32);
function da(e, a) {
  if (e > U0 || e < -U0) return tc(e, a);
  var r = Math.round(e);
  return nc(r, a);
}
function _t(e, a) {
  return (a = a || 0), e.length >= 7 + a && (e.charCodeAt(a) | 32) === 103 && (e.charCodeAt(a + 1) | 32) === 101 && (e.charCodeAt(a + 2) | 32) === 110 && (e.charCodeAt(a + 3) | 32) === 101 && (e.charCodeAt(a + 4) | 32) === 114 && (e.charCodeAt(a + 5) | 32) === 97 && (e.charCodeAt(a + 6) | 32) === 108;
}
var H0 = [
    ["Sun", "Sunday"],
    ["Mon", "Monday"],
    ["Tue", "Tuesday"],
    ["Wed", "Wednesday"],
    ["Thu", "Thursday"],
    ["Fri", "Friday"],
    ["Sat", "Saturday"],
  ],
  Lt = [
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
function sc(e) {
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
var de = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"上午/下午 "hh"時"mm"分"ss"秒 "' },
  V0 = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 },
  ic = {
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
function Et(e, a, r) {
  for (var n = e < 0 ? -1 : 1, t = e * n, s = 0, i = 1, c = 0, f = 1, l = 0, o = 0, u = Math.floor(t); l < a && ((u = Math.floor(t)), (c = u * i + s), (o = u * l + f), !(t - u < 5e-8)); ) (t = 1 / (t - u)), (s = i), (i = c), (f = l), (l = o);
  if ((o > a && (l > a ? ((o = f), (c = s)) : ((o = l), (c = i))), !r)) return [0, n * c, o];
  var x = Math.floor((n * c) / o);
  return [x, n * c - x * o, o];
}
function aa(e, a, r) {
  if (e > 2958465 || e < 0) return null;
  var n = e | 0,
    t = Math.floor(86400 * (e - n)),
    s = 0,
    i = [],
    c = { D: n, T: t, u: 86400 * (e - n) - t, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if ((Math.abs(c.u) < 1e-6 && (c.u = 0), a && a.date1904 && (n += 1462), c.u > 0.9999 && ((c.u = 0), ++t == 86400 && ((c.T = t = 0), ++n, ++c.D)), n === 60)) (i = r ? [1317, 10, 29] : [1900, 2, 29]), (s = 3);
  else if (n === 0) (i = r ? [1317, 8, 29] : [1900, 1, 0]), (s = 6);
  else {
    n > 60 && --n;
    var f = new Date(1900, 0, 1);
    f.setDate(f.getDate() + n - 1), (i = [f.getFullYear(), f.getMonth() + 1, f.getDate()]), (s = f.getDay()), n < 60 && (s = (s + 6) % 7), r && (s = hc(f, i));
  }
  return (c.y = i[0]), (c.m = i[1]), (c.d = i[2]), (c.S = t % 60), (t = Math.floor(t / 60)), (c.M = t % 60), (t = Math.floor(t / 60)), (c.H = t), (c.q = s), c;
}
var Jn = new Date(1899, 11, 31, 0, 0, 0),
  cc = Jn.getTime(),
  fc = new Date(1900, 2, 1, 0, 0, 0);
function Zn(e, a) {
  var r = e.getTime();
  return a ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= fc && (r += 24 * 60 * 60 * 1e3), (r - (cc + (e.getTimezoneOffset() - Jn.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function c0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function oc(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function lc(e) {
  var a = e < 0 ? 12 : 11,
    r = c0(e.toFixed(12));
  return r.length <= a || ((r = e.toPrecision(10)), r.length <= a) ? r : e.toExponential(5);
}
function uc(e) {
  var a = c0(e.toFixed(11));
  return a.length > (e < 0 ? 12 : 11) || a === "0" || a === "-0" ? e.toPrecision(6) : a;
}
function za(e) {
  var a = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    r;
  return a >= -4 && a <= -1 ? (r = e.toPrecision(10 + a)) : Math.abs(a) <= 9 ? (r = lc(e)) : a === 10 ? (r = e.toFixed(10).substr(0, 12)) : (r = uc(e)), c0(oc(r.toUpperCase()));
}
function sa(e, a) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : za(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return mr(14, Zn(e, a && a.date1904), a);
  }
  throw new Error("unsupported value in General format: " + e);
}
function hc(e, a) {
  a[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function xc(e, a, r, n) {
  var t = "",
    s = 0,
    i = 0,
    c = r.y,
    f,
    l = 0;
  switch (e) {
    case 98:
      c = r.y + 543;
    case 121:
      switch (a.length) {
        case 1:
        case 2:
          (f = c % 100), (l = 2);
          break;
        default:
          (f = c % 1e4), (l = 4);
          break;
      }
      break;
    case 109:
      switch (a.length) {
        case 1:
        case 2:
          (f = r.m), (l = a.length);
          break;
        case 3:
          return Lt[r.m - 1][1];
        case 5:
          return Lt[r.m - 1][0];
        default:
          return Lt[r.m - 1][2];
      }
      break;
    case 100:
      switch (a.length) {
        case 1:
        case 2:
          (f = r.d), (l = a.length);
          break;
        case 3:
          return H0[r.q][0];
        default:
          return H0[r.q][1];
      }
      break;
    case 104:
      switch (a.length) {
        case 1:
        case 2:
          (f = 1 + ((r.H + 11) % 12)), (l = a.length);
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 72:
      switch (a.length) {
        case 1:
        case 2:
          (f = r.H), (l = a.length);
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 77:
      switch (a.length) {
        case 1:
        case 2:
          (f = r.M), (l = a.length);
          break;
        default:
          throw "bad minute format: " + a;
      }
      break;
    case 115:
      if (a != "s" && a != "ss" && a != ".0" && a != ".00" && a != ".000") throw "bad second format: " + a;
      return r.u === 0 && (a == "s" || a == "ss") ? Ar(r.S, a.length) : (n >= 2 ? (i = n === 3 ? 1e3 : 100) : (i = n === 1 ? 10 : 1), (s = Math.round(i * (r.S + r.u))), s >= 60 * i && (s = 0), a === "s" ? (s === 0 ? "0" : "" + s / i) : ((t = Ar(s, 2 + n)), a === "ss" ? t.substr(0, 2) : "." + t.substr(2, a.length - 1)));
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
      l = a.length === 3 ? 1 : 2;
      break;
    case 101:
      (f = c), (l = 1);
      break;
  }
  var o = l > 0 ? Ar(f, l) : "";
  return o;
}
function Kr(e) {
  var a = 3;
  if (e.length <= a) return e;
  for (var r = e.length % a, n = e.substr(0, r); r != e.length; r += a) n += (n.length > 0 ? "," : "") + e.substr(r, a);
  return n;
}
var qn = /%/g;
function dc(e, a, r) {
  var n = a.replace(qn, ""),
    t = a.length - n.length;
  return Br(e, n, r * Math.pow(10, 2 * t)) + De("%", t);
}
function vc(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; ) --n;
  return Br(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function Qn(e, a) {
  var r,
    n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + Qn(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var s = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if ((s < 0 && (s += t), (r = (a / Math.pow(10, s)).toPrecision(n + 1 + ((t + s) % t))), r.indexOf("e") === -1)) {
      var i = Math.floor(Math.log(a) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? (r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s)) : (r += "E+" + (i - s)); r.substr(0, 2) === "0."; ) (r = r.charAt(0) + r.substr(2, t) + "." + r.substr(2 + t)), (r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0."));
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (c, f, l, o) {
      return f + l + o.substr(0, (t + s) % t) + "." + o.substr(s) + "E";
    });
  } else r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var es = /# (\?+)( ?)\/( ?)(\d+)/;
function pc(e, a, r) {
  var n = parseInt(e[4], 10),
    t = Math.round(a * n),
    s = Math.floor(t / n),
    i = t - s * n,
    c = n;
  return r + (s === 0 ? "" : "" + s) + " " + (i === 0 ? De(" ", e[1].length + 1 + e[4].length) : i0(i, e[1].length) + e[2] + "/" + e[3] + Ar(c, e[4].length));
}
function gc(e, a, r) {
  return r + (a === 0 ? "" : "" + a) + De(" ", e[1].length + 2 + e[4].length);
}
var rs = /^#*0*\.([0#]+)/,
  as = /\).*[0#]/,
  ts = /\(###\) ###\\?-####/;
function tr(e) {
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
function W0(e, a) {
  var r = Math.pow(10, a);
  return "" + Math.round(e * r) / r;
}
function G0(e, a) {
  var r = e - Math.floor(e),
    n = Math.pow(10, a);
  return a < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function mc(e, a) {
  return a < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, a))).length ? 1 : 0;
}
function _c(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : (e - 1) | 0) : "" + Math.floor(e);
}
function pr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(as)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? pr("n", n, r) : "(" + pr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return vc(e, a, r);
  if (a.indexOf("%") !== -1) return dc(e, a, r);
  if (a.indexOf("E") !== -1) return Qn(a, r);
  if (a.charCodeAt(0) === 36) return "$" + pr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t,
    s,
    i,
    c,
    f = Math.abs(r),
    l = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return l + da(f, a.length);
  if (a.match(/^[#?]+$/)) return (t = da(r, 0)), t === "0" && (t = ""), t.length > a.length ? t : tr(a.substr(0, a.length - t.length)) + t;
  if ((s = a.match(es))) return pc(s, f, l);
  if (a.match(/^#+0+$/)) return l + da(f, a.length - a.indexOf("0"));
  if ((s = a.match(rs)))
    return (
      (t = W0(r, s[1].length)
        .replace(/^([^\.]+)$/, "$1." + tr(s[1]))
        .replace(/\.$/, "." + tr(s[1]))
        .replace(/\.(\d*)$/, function (v, h) {
          return "." + h + De("0", tr(s[1]).length - h.length);
        })),
      a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".")
    );
  if (((a = a.replace(/^#+([0.])/, "$1")), (s = a.match(/^(0*)\.(#*)$/))))
    return (
      l +
      W0(f, s[2].length)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, s[1].length ? "0." : ".")
    );
  if ((s = a.match(/^#{1,3},##0(\.?)$/))) return l + Kr(da(f, 0));
  if ((s = a.match(/^#,##0\.([#0]*0)$/))) return r < 0 ? "-" + pr(e, a, -r) : Kr("" + (Math.floor(r) + mc(r, s[1].length))) + "." + Ar(G0(r, s[1].length), s[1].length);
  if ((s = a.match(/^#,#*,#0/))) return pr(e, a.replace(/^#,#*,/, ""), r);
  if ((s = a.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (t = ma(pr(e, a.replace(/[\\-]/g, ""), r))),
      (i = 0),
      ma(
        ma(a.replace(/\\/g, "")).replace(/[0#]/g, function (v) {
          return i < t.length ? t.charAt(i++) : v === "0" ? "0" : "";
        })
      )
    );
  if (a.match(ts)) return (t = pr(e, "##########", r)), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var o = "";
  if ((s = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))) return (i = Math.min(s[4].length, 7)), (c = Et(f, Math.pow(10, i) - 1, !1)), (t = "" + l), (o = Br("n", s[1], c[1])), o.charAt(o.length - 1) == " " && (o = o.substr(0, o.length - 1) + "0"), (t += o + s[2] + "/" + s[3]), (o = mt(c[2], i)), o.length < s[4].length && (o = tr(s[4].substr(s[4].length - o.length)) + o), (t += o), t;
  if ((s = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))) return (i = Math.min(Math.max(s[1].length, s[4].length), 7)), (c = Et(f, Math.pow(10, i) - 1, !0)), l + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? i0(c[1], i) + s[2] + "/" + s[3] + mt(c[2], i) : De(" ", 2 * i + 1 + s[2].length + s[3].length));
  if ((s = a.match(/^[#0?]+$/))) return (t = da(r, 0)), a.length <= t.length ? t : tr(a.substr(0, a.length - t.length)) + t;
  if ((s = a.match(/^([#0?]+)\.([#0]+)$/))) {
    (t = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1")), (i = t.indexOf("."));
    var u = a.indexOf(".") - i,
      x = a.length - t.length - u;
    return tr(a.substr(0, u) + t + a.substr(a.length - x));
  }
  if ((s = a.match(/^00,000\.([#0]*0)$/)))
    return (
      (i = G0(r, s[1].length)),
      r < 0
        ? "-" + pr(e, a, -r)
        : Kr(_c(r))
            .replace(/^\d,\d{3}$/, "0$&")
            .replace(/^\d*$/, function (v) {
              return "00," + (v.length < 3 ? Ar(0, 3 - v.length) : "") + v;
            }) +
          "." +
          Ar(i, s[1].length)
    );
  switch (a) {
    case "###,##0.00":
      return pr(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = Kr(da(f, 0));
      return d !== "0" ? l + d : "";
    case "###,###.00":
      return pr(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return pr(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + a + "|");
}
function Ec(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; ) --n;
  return Br(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function Tc(e, a, r) {
  var n = a.replace(qn, ""),
    t = a.length - n.length;
  return Br(e, n, r * Math.pow(10, 2 * t)) + De("%", t);
}
function ns(e, a) {
  var r,
    n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + ns(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var s = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if ((s < 0 && (s += t), (r = (a / Math.pow(10, s)).toPrecision(n + 1 + ((t + s) % t))), !r.match(/[Ee]/))) {
      var i = Math.floor(Math.log(a) * Math.LOG10E);
      r.indexOf(".") === -1 ? (r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s)) : (r += "E+" + (i - s)), (r = r.replace(/\+-/, "-"));
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (c, f, l, o) {
      return f + l + o.substr(0, (t + s) % t) + "." + o.substr(s) + "E";
    });
  } else r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Dr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(as)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Dr("n", n, r) : "(" + Dr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return Ec(e, a, r);
  if (a.indexOf("%") !== -1) return Tc(e, a, r);
  if (a.indexOf("E") !== -1) return ns(a, r);
  if (a.charCodeAt(0) === 36) return "$" + Dr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t,
    s,
    i,
    c,
    f = Math.abs(r),
    l = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return l + Ar(f, a.length);
  if (a.match(/^[#?]+$/)) return (t = "" + r), r === 0 && (t = ""), t.length > a.length ? t : tr(a.substr(0, a.length - t.length)) + t;
  if ((s = a.match(es))) return gc(s, f, l);
  if (a.match(/^#+0+$/)) return l + Ar(f, a.length - a.indexOf("0"));
  if ((s = a.match(rs)))
    return (
      (t = ("" + r).replace(/^([^\.]+)$/, "$1." + tr(s[1])).replace(/\.$/, "." + tr(s[1]))),
      (t = t.replace(/\.(\d*)$/, function (v, h) {
        return "." + h + De("0", tr(s[1]).length - h.length);
      })),
      a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".")
    );
  if (((a = a.replace(/^#+([0.])/, "$1")), (s = a.match(/^(0*)\.(#*)$/))))
    return (
      l +
      ("" + f)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, s[1].length ? "0." : ".")
    );
  if ((s = a.match(/^#{1,3},##0(\.?)$/))) return l + Kr("" + f);
  if ((s = a.match(/^#,##0\.([#0]*0)$/))) return r < 0 ? "-" + Dr(e, a, -r) : Kr("" + r) + "." + De("0", s[1].length);
  if ((s = a.match(/^#,#*,#0/))) return Dr(e, a.replace(/^#,#*,/, ""), r);
  if ((s = a.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (t = ma(Dr(e, a.replace(/[\\-]/g, ""), r))),
      (i = 0),
      ma(
        ma(a.replace(/\\/g, "")).replace(/[0#]/g, function (v) {
          return i < t.length ? t.charAt(i++) : v === "0" ? "0" : "";
        })
      )
    );
  if (a.match(ts)) return (t = Dr(e, "##########", r)), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var o = "";
  if ((s = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))) return (i = Math.min(s[4].length, 7)), (c = Et(f, Math.pow(10, i) - 1, !1)), (t = "" + l), (o = Br("n", s[1], c[1])), o.charAt(o.length - 1) == " " && (o = o.substr(0, o.length - 1) + "0"), (t += o + s[2] + "/" + s[3]), (o = mt(c[2], i)), o.length < s[4].length && (o = tr(s[4].substr(s[4].length - o.length)) + o), (t += o), t;
  if ((s = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))) return (i = Math.min(Math.max(s[1].length, s[4].length), 7)), (c = Et(f, Math.pow(10, i) - 1, !0)), l + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? i0(c[1], i) + s[2] + "/" + s[3] + mt(c[2], i) : De(" ", 2 * i + 1 + s[2].length + s[3].length));
  if ((s = a.match(/^[#0?]+$/))) return (t = "" + r), a.length <= t.length ? t : tr(a.substr(0, a.length - t.length)) + t;
  if ((s = a.match(/^([#0]+)\.([#0]+)$/))) {
    (t = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1")), (i = t.indexOf("."));
    var u = a.indexOf(".") - i,
      x = a.length - t.length - u;
    return tr(a.substr(0, u) + t + a.substr(a.length - x));
  }
  if ((s = a.match(/^00,000\.([#0]*0)$/)))
    return r < 0
      ? "-" + Dr(e, a, -r)
      : Kr("" + r)
          .replace(/^\d,\d{3}$/, "0$&")
          .replace(/^\d*$/, function (v) {
            return "00," + (v.length < 3 ? Ar(0, 3 - v.length) : "") + v;
          }) +
          "." +
          Ar(0, s[1].length);
  switch (a) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = Kr("" + f);
      return d !== "0" ? l + d : "";
    default:
      if (a.match(/\.[0#?]*$/)) return Dr(e, a.slice(0, a.lastIndexOf(".")), r) + tr(a.slice(a.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + a + "|");
}
function Br(e, a, r) {
  return (r | 0) === r ? Dr(e, a, r) : pr(e, a, r);
}
function kc(e) {
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
var ss = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function wa(e) {
  for (var a = 0, r = "", n = ""; a < e.length; )
    switch ((r = e.charAt(a))) {
      case "G":
        _t(e, a) && (a += 6), a++;
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
        if (n.match(ss)) return !0;
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
function wc(e, a, r, n) {
  for (var t = [], s = "", i = 0, c = "", f = "t", l, o, u, x = "H"; i < e.length; )
    switch ((c = e.charAt(i))) {
      case "G":
        if (!_t(e, i)) throw new Error("unrecognized character " + c + " in " + e);
        (t[t.length] = { t: "G", v: "General" }), (i += 7);
        break;
      case '"':
        for (s = ""; (u = e.charCodeAt(++i)) !== 34 && i < e.length; ) s += String.fromCharCode(u);
        (t[t.length] = { t: "t", v: s }), ++i;
        break;
      case "\\":
        var d = e.charAt(++i),
          v = d === "(" || d === ")" ? d : "t";
        (t[t.length] = { t: v, v: d }), ++i;
        break;
      case "_":
        (t[t.length] = { t: "t", v: " " }), (i += 2);
        break;
      case "@":
        (t[t.length] = { t: "T", v: a }), ++i;
        break;
      case "B":
      case "b":
        if (e.charAt(i + 1) === "1" || e.charAt(i + 1) === "2") {
          if (l == null && ((l = aa(a, r, e.charAt(i + 1) === "2")), l == null)) return "";
          (t[t.length] = { t: "X", v: e.substr(i, 2) }), (f = c), (i += 2);
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
        if (a < 0 || (l == null && ((l = aa(a, r)), l == null))) return "";
        for (s = c; ++i < e.length && e.charAt(i).toLowerCase() === c; ) s += c;
        c === "m" && f.toLowerCase() === "h" && (c = "M"), c === "h" && (c = x), (t[t.length] = { t: c, v: s }), (f = c);
        break;
      case "A":
      case "a":
      case "上":
        var h = { t: c, v: c };
        if ((l == null && (l = aa(a, r)), e.substr(i, 3).toUpperCase() === "A/P" ? (l != null && (h.v = l.H >= 12 ? "P" : "A"), (h.t = "T"), (x = "h"), (i += 3)) : e.substr(i, 5).toUpperCase() === "AM/PM" ? (l != null && (h.v = l.H >= 12 ? "PM" : "AM"), (h.t = "T"), (i += 5), (x = "h")) : e.substr(i, 5).toUpperCase() === "上午/下午" ? (l != null && (h.v = l.H >= 12 ? "下午" : "上午"), (h.t = "T"), (i += 5), (x = "h")) : ((h.t = "t"), ++i), l == null && h.t === "T")) return "";
        (t[t.length] = h), (f = c);
        break;
      case "[":
        for (s = c; e.charAt(i++) !== "]" && i < e.length; ) s += e.charAt(i);
        if (s.slice(-1) !== "]") throw 'unterminated "[" block: |' + s + "|";
        if (s.match(ss)) {
          if (l == null && ((l = aa(a, r)), l == null)) return "";
          (t[t.length] = { t: "Z", v: s.toLowerCase() }), (f = s.charAt(1));
        } else s.indexOf("$") > -1 && ((s = (s.match(/\$([^-\[\]]*)/) || [])[1] || "$"), wa(e) || (t[t.length] = { t: "t", v: s }));
        break;
      case ".":
        if (l != null) {
          for (s = c; ++i < e.length && (c = e.charAt(i)) === "0"; ) s += c;
          t[t.length] = { t: "s", v: s };
          break;
        }
      case "0":
      case "#":
        for (s = c; ++i < e.length && "0#?.,E+-%".indexOf((c = e.charAt(i))) > -1; ) s += c;
        t[t.length] = { t: "n", v: s };
        break;
      case "?":
        for (s = c; e.charAt(++i) === c; ) s += c;
        (t[t.length] = { t: c, v: s }), (f = c);
        break;
      case "*":
        ++i, (e.charAt(i) == " " || e.charAt(i) == "*") && ++i;
        break;
      case "(":
      case ")":
        (t[t.length] = { t: n === 1 ? "t" : c, v: c }), ++i;
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
        for (s = c; i < e.length && "0123456789".indexOf(e.charAt(++i)) > -1; ) s += e.charAt(i);
        t[t.length] = { t: "D", v: s };
        break;
      case " ":
        (t[t.length] = { t: c, v: c }), ++i;
        break;
      case "$":
        (t[t.length] = { t: "t", v: "$" }), ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(c) === -1) throw new Error("unrecognized character " + c + " in " + e);
        (t[t.length] = { t: "t", v: c }), ++i;
        break;
    }
  var g = 0,
    A = 0,
    y;
  for (i = t.length - 1, f = "t"; i >= 0; --i)
    switch (t[i].t) {
      case "h":
      case "H":
        (t[i].t = x), (f = "h"), g < 1 && (g = 1);
        break;
      case "s":
        (y = t[i].v.match(/\.0+$/)) && (A = Math.max(A, y[0].length - 1)), g < 3 && (g = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        f = t[i].t;
        break;
      case "m":
        f === "s" && ((t[i].t = "M"), g < 2 && (g = 2));
        break;
      case "X":
        break;
      case "Z":
        g < 1 && t[i].v.match(/[Hh]/) && (g = 1), g < 2 && t[i].v.match(/[Mm]/) && (g = 2), g < 3 && t[i].v.match(/[Ss]/) && (g = 3);
    }
  switch (g) {
    case 0:
      break;
    case 1:
      l.u >= 0.5 && ((l.u = 0), ++l.S), l.S >= 60 && ((l.S = 0), ++l.M), l.M >= 60 && ((l.M = 0), ++l.H);
      break;
    case 2:
      l.u >= 0.5 && ((l.u = 0), ++l.S), l.S >= 60 && ((l.S = 0), ++l.M);
      break;
  }
  var _ = "",
    N;
  for (i = 0; i < t.length; ++i)
    switch (t[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        (t[i].v = ""), (t[i].t = ";");
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
        (t[i].v = xc(t[i].t.charCodeAt(0), t[i].v, l, A)), (t[i].t = "t");
        break;
      case "n":
      case "?":
        for (N = i + 1; t[N] != null && ((c = t[N].t) === "?" || c === "D" || ((c === " " || c === "t") && t[N + 1] != null && (t[N + 1].t === "?" || (t[N + 1].t === "t" && t[N + 1].v === "/"))) || (t[i].t === "(" && (c === " " || c === "n" || c === ")")) || (c === "t" && (t[N].v === "/" || (t[N].v === " " && t[N + 1] != null && t[N + 1].t == "?")))); ) (t[i].v += t[N].v), (t[N] = { v: "", t: ";" }), ++N;
        (_ += t[i].v), (i = N - 1);
        break;
      case "G":
        (t[i].t = "t"), (t[i].v = sa(a, r));
        break;
    }
  var b = "",
    R,
    F;
  if (_.length > 0) {
    _.charCodeAt(0) == 40 ? ((R = a < 0 && _.charCodeAt(0) === 45 ? -a : a), (F = Br("n", _, R))) : ((R = a < 0 && n > 1 ? -a : a), (F = Br("n", _, R)), R < 0 && t[0] && t[0].t == "t" && ((F = F.substr(1)), (t[0].v = "-" + t[0].v))), (N = F.length - 1);
    var W = t.length;
    for (i = 0; i < t.length; ++i)
      if (t[i] != null && t[i].t != "t" && t[i].v.indexOf(".") > -1) {
        W = i;
        break;
      }
    var D = t.length;
    if (W === t.length && F.indexOf("E") === -1) {
      for (i = t.length - 1; i >= 0; --i) t[i] == null || "n?".indexOf(t[i].t) === -1 || (N >= t[i].v.length - 1 ? ((N -= t[i].v.length), (t[i].v = F.substr(N + 1, t[i].v.length))) : N < 0 ? (t[i].v = "") : ((t[i].v = F.substr(0, N + 1)), (N = -1)), (t[i].t = "t"), (D = i));
      N >= 0 && D < t.length && (t[D].v = F.substr(0, N + 1) + t[D].v);
    } else if (W !== t.length && F.indexOf("E") === -1) {
      for (N = F.indexOf(".") - 1, i = W; i >= 0; --i)
        if (!(t[i] == null || "n?".indexOf(t[i].t) === -1)) {
          for (o = t[i].v.indexOf(".") > -1 && i === W ? t[i].v.indexOf(".") - 1 : t[i].v.length - 1, b = t[i].v.substr(o + 1); o >= 0; --o) N >= 0 && (t[i].v.charAt(o) === "0" || t[i].v.charAt(o) === "#") && (b = F.charAt(N--) + b);
          (t[i].v = b), (t[i].t = "t"), (D = i);
        }
      for (N >= 0 && D < t.length && (t[D].v = F.substr(0, N + 1) + t[D].v), N = F.indexOf(".") + 1, i = W; i < t.length; ++i)
        if (!(t[i] == null || ("n?(".indexOf(t[i].t) === -1 && i !== W))) {
          for (o = t[i].v.indexOf(".") > -1 && i === W ? t[i].v.indexOf(".") + 1 : 0, b = t[i].v.substr(0, o); o < t[i].v.length; ++o) N < F.length && (b += F.charAt(N++));
          (t[i].v = b), (t[i].t = "t"), (D = i);
        }
    }
  }
  for (i = 0; i < t.length; ++i) t[i] != null && "n?".indexOf(t[i].t) > -1 && ((R = n > 1 && a < 0 && i > 0 && t[i - 1].v === "-" ? -a : a), (t[i].v = Br(t[i].t, t[i].v, R)), (t[i].t = "t"));
  var X = "";
  for (i = 0; i !== t.length; ++i) t[i] != null && (X += t[i].v);
  return X;
}
var X0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function z0(e, a) {
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
function Ac(e, a) {
  var r = kc(e),
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
  var s = a > 0 ? r[0] : a < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [n, s];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var i = r[0].match(X0),
      c = r[1].match(X0);
    return z0(a, i) ? [n, r[0]] : z0(a, c) ? [n, r[1]] : [n, r[i != null && c != null ? 2 : 1]];
  }
  return [n, s];
}
function mr(e, a, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? (n = r.dateNF) : (n = e);
      break;
    case "number":
      e == 14 && r.dateNF ? (n = r.dateNF) : (n = (r.table != null ? r.table : de)[e]), n == null && (n = (r.table && r.table[V0[e]]) || de[V0[e]]), n == null && (n = ic[e] || "General");
      break;
  }
  if (_t(n, 0)) return sa(a, r);
  a instanceof Date && (a = Zn(a, r.date1904));
  var t = Ac(n, a);
  if (_t(t[1])) return sa(a, r);
  if (a === !0) a = "TRUE";
  else if (a === !1) a = "FALSE";
  else if (a === "" || a == null) return "";
  return wc(t[1], a, r, t[0]);
}
function ta(e, a) {
  if (typeof a != "number") {
    a = +a || -1;
    for (var r = 0; r < 392; ++r) {
      if (de[r] == null) {
        a < 0 && (a = r);
        continue;
      }
      if (de[r] == e) {
        a = r;
        break;
      }
    }
    a < 0 && (a = 391);
  }
  return (de[a] = e), a;
}
function is() {
  de = sc();
}
var Fc = {
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
  cs = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function Sc(e) {
  var a = typeof e == "number" ? de[e] : e;
  return (a = a.replace(cs, "(\\d+)")), new RegExp("^" + a + "$");
}
function Cc(e, a, r) {
  var n = -1,
    t = -1,
    s = -1,
    i = -1,
    c = -1,
    f = -1;
  (a.match(cs) || []).forEach(function (u, x) {
    var d = parseInt(r[x + 1], 10);
    switch (u.toLowerCase().charAt(0)) {
      case "y":
        n = d;
        break;
      case "d":
        s = d;
        break;
      case "h":
        i = d;
        break;
      case "s":
        f = d;
        break;
      case "m":
        i >= 0 ? (c = d) : (t = d);
        break;
    }
  }),
    f >= 0 && c == -1 && t >= 0 && ((c = t), (t = -1));
  var l = ("" + (n >= 0 ? n : new Date().getFullYear())).slice(-4) + "-" + ("00" + (t >= 1 ? t : 1)).slice(-2) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2);
  l.length == 7 && (l = "0" + l), l.length == 8 && (l = "20" + l);
  var o = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2);
  return i == -1 && c == -1 && f == -1 ? l : n == -1 && t == -1 && s == -1 ? o : l + "T" + o;
}
var yc = (function () {
    var e = {};
    e.version = "1.2.0";
    function a() {
      for (var F = 0, W = new Array(256), D = 0; D != 256; ++D) (F = D), (F = F & 1 ? -306674912 ^ (F >>> 1) : F >>> 1), (F = F & 1 ? -306674912 ^ (F >>> 1) : F >>> 1), (F = F & 1 ? -306674912 ^ (F >>> 1) : F >>> 1), (F = F & 1 ? -306674912 ^ (F >>> 1) : F >>> 1), (F = F & 1 ? -306674912 ^ (F >>> 1) : F >>> 1), (F = F & 1 ? -306674912 ^ (F >>> 1) : F >>> 1), (F = F & 1 ? -306674912 ^ (F >>> 1) : F >>> 1), (F = F & 1 ? -306674912 ^ (F >>> 1) : F >>> 1), (W[D] = F);
      return typeof Int32Array < "u" ? new Int32Array(W) : W;
    }
    var r = a();
    function n(F) {
      var W = 0,
        D = 0,
        X = 0,
        U = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
      for (X = 0; X != 256; ++X) U[X] = F[X];
      for (X = 0; X != 256; ++X) for (D = F[X], W = 256 + X; W < 4096; W += 256) D = U[W] = (D >>> 8) ^ F[D & 255];
      var P = [];
      for (X = 1; X != 16; ++X) P[X - 1] = typeof Int32Array < "u" ? U.subarray(X * 256, X * 256 + 256) : U.slice(X * 256, X * 256 + 256);
      return P;
    }
    var t = n(r),
      s = t[0],
      i = t[1],
      c = t[2],
      f = t[3],
      l = t[4],
      o = t[5],
      u = t[6],
      x = t[7],
      d = t[8],
      v = t[9],
      h = t[10],
      g = t[11],
      A = t[12],
      y = t[13],
      _ = t[14];
    function N(F, W) {
      for (var D = W ^ -1, X = 0, U = F.length; X < U; ) D = (D >>> 8) ^ r[(D ^ F.charCodeAt(X++)) & 255];
      return ~D;
    }
    function b(F, W) {
      for (var D = W ^ -1, X = F.length - 15, U = 0; U < X; ) D = _[F[U++] ^ (D & 255)] ^ y[F[U++] ^ ((D >> 8) & 255)] ^ A[F[U++] ^ ((D >> 16) & 255)] ^ g[F[U++] ^ (D >>> 24)] ^ h[F[U++]] ^ v[F[U++]] ^ d[F[U++]] ^ x[F[U++]] ^ u[F[U++]] ^ o[F[U++]] ^ l[F[U++]] ^ f[F[U++]] ^ c[F[U++]] ^ i[F[U++]] ^ s[F[U++]] ^ r[F[U++]];
      for (X += 15; U < X; ) D = (D >>> 8) ^ r[(D ^ F[U++]) & 255];
      return ~D;
    }
    function R(F, W) {
      for (var D = W ^ -1, X = 0, U = F.length, P = 0, j = 0; X < U; )
        (P = F.charCodeAt(X++)),
          P < 128
            ? (D = (D >>> 8) ^ r[(D ^ P) & 255])
            : P < 2048
            ? ((D = (D >>> 8) ^ r[(D ^ (192 | ((P >> 6) & 31))) & 255]), (D = (D >>> 8) ^ r[(D ^ (128 | (P & 63))) & 255]))
            : P >= 55296 && P < 57344
            ? ((P = (P & 1023) + 64), (j = F.charCodeAt(X++) & 1023), (D = (D >>> 8) ^ r[(D ^ (240 | ((P >> 8) & 7))) & 255]), (D = (D >>> 8) ^ r[(D ^ (128 | ((P >> 2) & 63))) & 255]), (D = (D >>> 8) ^ r[(D ^ (128 | ((j >> 6) & 15) | ((P & 3) << 4))) & 255]), (D = (D >>> 8) ^ r[(D ^ (128 | (j & 63))) & 255]))
            : ((D = (D >>> 8) ^ r[(D ^ (224 | ((P >> 12) & 15))) & 255]), (D = (D >>> 8) ^ r[(D ^ (128 | ((P >> 6) & 63))) & 255]), (D = (D >>> 8) ^ r[(D ^ (128 | (P & 63))) & 255]));
      return ~D;
    }
    return (e.table = r), (e.bstr = N), (e.buf = b), (e.str = R), e;
  })(),
  me = (function () {
    var a = {};
    a.version = "1.2.1";
    function r(p, T) {
      for (var m = p.split("/"), E = T.split("/"), k = 0, w = 0, M = Math.min(m.length, E.length); k < M; ++k) {
        if ((w = m[k].length - E[k].length)) return w;
        if (m[k] != E[k]) return m[k] < E[k] ? -1 : 1;
      }
      return m.length - E.length;
    }
    function n(p) {
      if (p.charAt(p.length - 1) == "/") return p.slice(0, -1).indexOf("/") === -1 ? p : n(p.slice(0, -1));
      var T = p.lastIndexOf("/");
      return T === -1 ? p : p.slice(0, T + 1);
    }
    function t(p) {
      if (p.charAt(p.length - 1) == "/") return t(p.slice(0, -1));
      var T = p.lastIndexOf("/");
      return T === -1 ? p : p.slice(T + 1);
    }
    function s(p, T) {
      typeof T == "string" && (T = new Date(T));
      var m = T.getHours();
      (m = (m << 6) | T.getMinutes()), (m = (m << 5) | (T.getSeconds() >>> 1)), p.write_shift(2, m);
      var E = T.getFullYear() - 1980;
      (E = (E << 4) | (T.getMonth() + 1)), (E = (E << 5) | T.getDate()), p.write_shift(2, E);
    }
    function i(p) {
      var T = p.read_shift(2) & 65535,
        m = p.read_shift(2) & 65535,
        E = new Date(),
        k = m & 31;
      m >>>= 5;
      var w = m & 15;
      (m >>>= 4), E.setMilliseconds(0), E.setFullYear(m + 1980), E.setMonth(w - 1), E.setDate(k);
      var M = T & 31;
      T >>>= 5;
      var z = T & 63;
      return (T >>>= 6), E.setHours(T), E.setMinutes(z), E.setSeconds(M << 1), E;
    }
    function c(p) {
      ze(p, 0);
      for (var T = {}, m = 0; p.l <= p.length - 4; ) {
        var E = p.read_shift(2),
          k = p.read_shift(2),
          w = p.l + k,
          M = {};
        switch (E) {
          case 21589:
            (m = p.read_shift(1)), m & 1 && (M.mtime = p.read_shift(4)), k > 5 && (m & 2 && (M.atime = p.read_shift(4)), m & 4 && (M.ctime = p.read_shift(4))), M.mtime && (M.mt = new Date(M.mtime * 1e3));
            break;
        }
        (p.l = w), (T[E] = M);
      }
      return T;
    }
    var f;
    function l() {
      return f || (f = {});
    }
    function o(p, T) {
      if (p[0] == 80 && p[1] == 75) return N0(p, T);
      if ((p[0] | 32) == 109 && (p[1] | 32) == 105) return Ui(p, T);
      if (p.length < 512) throw new Error("CFB file size " + p.length + " < 512");
      var m = 3,
        E = 512,
        k = 0,
        w = 0,
        M = 0,
        z = 0,
        L = 0,
        B = [],
        V = p.slice(0, 512);
      ze(V, 0);
      var Y = u(V);
      switch (((m = Y[0]), m)) {
        case 3:
          E = 512;
          break;
        case 4:
          E = 4096;
          break;
        case 0:
          if (Y[1] == 0) return N0(p, T);
        default:
          throw new Error("Major Version: Expected 3 or 4 saw " + m);
      }
      E !== 512 && ((V = p.slice(0, E)), ze(V, 28));
      var Q = p.slice(0, E);
      x(V, m);
      var se = V.read_shift(4, "i");
      if (m === 3 && se !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + se);
      (V.l += 4), (M = V.read_shift(4, "i")), (V.l += 4), V.chk("00100000", "Mini Stream Cutoff Size: "), (z = V.read_shift(4, "i")), (k = V.read_shift(4, "i")), (L = V.read_shift(4, "i")), (w = V.read_shift(4, "i"));
      for (var Z = -1, te = 0; te < 109 && ((Z = V.read_shift(4, "i")), !(Z < 0)); ++te) B[te] = Z;
      var xe = d(p, E);
      g(L, w, xe, E, B);
      var Ce = y(xe, M, B, E);
      (Ce[M].name = "!Directory"), k > 0 && z !== j && (Ce[z].name = "!MiniFAT"), (Ce[B[0]].name = "!FAT"), (Ce.fat_addrs = B), (Ce.ssz = E);
      var ye = {},
        Ye = [],
        ya = [],
        Da = [];
      _(M, Ce, xe, Ye, k, ye, ya, z), v(ya, Da, Ye), Ye.shift();
      var Oa = { FileIndex: ya, FullPaths: Da };
      return T && T.raw && (Oa.raw = { header: Q, sectors: xe }), Oa;
    }
    function u(p) {
      if (p[p.l] == 80 && p[p.l + 1] == 75) return [0, 0];
      p.chk(fe, "Header Signature: "), (p.l += 16);
      var T = p.read_shift(2, "u");
      return [p.read_shift(2, "u"), T];
    }
    function x(p, T) {
      var m = 9;
      switch (((p.l += 2), (m = p.read_shift(2)))) {
        case 9:
          if (T != 3) throw new Error("Sector Shift: Expected 9 saw " + m);
          break;
        case 12:
          if (T != 4) throw new Error("Sector Shift: Expected 12 saw " + m);
          break;
        default:
          throw new Error("Sector Shift: Expected 9 or 12 saw " + m);
      }
      p.chk("0600", "Mini Sector Shift: "), p.chk("000000000000", "Reserved: ");
    }
    function d(p, T) {
      for (var m = Math.ceil(p.length / T) - 1, E = [], k = 1; k < m; ++k) E[k - 1] = p.slice(k * T, (k + 1) * T);
      return (E[m - 1] = p.slice(m * T)), E;
    }
    function v(p, T, m) {
      for (var E = 0, k = 0, w = 0, M = 0, z = 0, L = m.length, B = [], V = []; E < L; ++E) (B[E] = V[E] = E), (T[E] = m[E]);
      for (; z < V.length; ++z) (E = V[z]), (k = p[E].L), (w = p[E].R), (M = p[E].C), B[E] === E && (k !== -1 && B[k] !== k && (B[E] = B[k]), w !== -1 && B[w] !== w && (B[E] = B[w])), M !== -1 && (B[M] = E), k !== -1 && E != B[E] && ((B[k] = B[E]), V.lastIndexOf(k) < z && V.push(k)), w !== -1 && E != B[E] && ((B[w] = B[E]), V.lastIndexOf(w) < z && V.push(w));
      for (E = 1; E < L; ++E) B[E] === E && (w !== -1 && B[w] !== w ? (B[E] = B[w]) : k !== -1 && B[k] !== k && (B[E] = B[k]));
      for (E = 1; E < L; ++E)
        if (p[E].type !== 0) {
          if (((z = E), z != B[z]))
            do (z = B[z]), (T[E] = T[z] + "/" + T[E]);
            while (z !== 0 && B[z] !== -1 && z != B[z]);
          B[E] = -1;
        }
      for (T[0] += "/", E = 1; E < L; ++E) p[E].type !== 2 && (T[E] += "/");
    }
    function h(p, T, m) {
      for (var E = p.start, k = p.size, w = [], M = E; m && k > 0 && M >= 0; ) w.push(T.slice(M * P, M * P + P)), (k -= P), (M = ra(m, M * 4));
      return w.length === 0 ? He(0) : zr(w).slice(0, p.size);
    }
    function g(p, T, m, E, k) {
      var w = j;
      if (p === j) {
        if (T !== 0) throw new Error("DIFAT chain shorter than expected");
      } else if (p !== -1) {
        var M = m[p],
          z = (E >>> 2) - 1;
        if (!M) return;
        for (var L = 0; L < z && (w = ra(M, L * 4)) !== j; ++L) k.push(w);
        g(ra(M, E - 4), T - 1, m, E, k);
      }
    }
    function A(p, T, m, E, k) {
      var w = [],
        M = [];
      k || (k = []);
      var z = E - 1,
        L = 0,
        B = 0;
      for (L = T; L >= 0; ) {
        (k[L] = !0), (w[w.length] = L), M.push(p[L]);
        var V = m[Math.floor((L * 4) / E)];
        if (((B = (L * 4) & z), E < 4 + B)) throw new Error("FAT boundary crossed: " + L + " 4 " + E);
        if (!p[V]) break;
        L = ra(p[V], B);
      }
      return { nodes: w, data: rn([M]) };
    }
    function y(p, T, m, E) {
      var k = p.length,
        w = [],
        M = [],
        z = [],
        L = [],
        B = E - 1,
        V = 0,
        Y = 0,
        Q = 0,
        se = 0;
      for (V = 0; V < k; ++V)
        if (((z = []), (Q = V + T), Q >= k && (Q -= k), !M[Q])) {
          L = [];
          var Z = [];
          for (Y = Q; Y >= 0; ) {
            (Z[Y] = !0), (M[Y] = !0), (z[z.length] = Y), L.push(p[Y]);
            var te = m[Math.floor((Y * 4) / E)];
            if (((se = (Y * 4) & B), E < 4 + se)) throw new Error("FAT boundary crossed: " + Y + " 4 " + E);
            if (!p[te] || ((Y = ra(p[te], se)), Z[Y])) break;
          }
          w[Q] = { nodes: z, data: rn([L]) };
        }
      return w;
    }
    function _(p, T, m, E, k, w, M, z) {
      for (var L = 0, B = E.length ? 2 : 0, V = T[p].data, Y = 0, Q = 0, se; Y < V.length; Y += 128) {
        var Z = V.slice(Y, Y + 128);
        ze(Z, 64), (Q = Z.read_shift(2)), (se = h0(Z, 0, Q - B)), E.push(se);
        var te = { name: se, type: Z.read_shift(1), color: Z.read_shift(1), L: Z.read_shift(4, "i"), R: Z.read_shift(4, "i"), C: Z.read_shift(4, "i"), clsid: Z.read_shift(16), state: Z.read_shift(4, "i"), start: 0, size: 0 },
          xe = Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2);
        xe !== 0 && (te.ct = N(Z, Z.l - 8));
        var Ce = Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2);
        Ce !== 0 && (te.mt = N(Z, Z.l - 8)),
          (te.start = Z.read_shift(4, "i")),
          (te.size = Z.read_shift(4, "i")),
          te.size < 0 && te.start < 0 && ((te.size = te.type = 0), (te.start = j), (te.name = "")),
          te.type === 5 ? ((L = te.start), k > 0 && L !== j && (T[L].name = "!StreamData")) : te.size >= 4096 ? ((te.storage = "fat"), T[te.start] === void 0 && (T[te.start] = A(m, te.start, T.fat_addrs, T.ssz)), (T[te.start].name = te.name), (te.content = T[te.start].data.slice(0, te.size))) : ((te.storage = "minifat"), te.size < 0 ? (te.size = 0) : L !== j && te.start !== j && T[L] && (te.content = h(te, T[L].data, (T[z] || {}).data))),
          te.content && ze(te.content, 0),
          (w[se] = te),
          M.push(te);
      }
    }
    function N(p, T) {
      return new Date(((lr(p, T + 4) / 1e7) * Math.pow(2, 32) + lr(p, T) / 1e7 - 11644473600) * 1e3);
    }
    function b(p, T) {
      return l(), o(f.readFileSync(p), T);
    }
    function R(p, T) {
      var m = T && T.type;
      switch ((m || (ge && Buffer.isBuffer(p) && (m = "buffer")), m || "base64")) {
        case "file":
          return b(p, T);
        case "base64":
          return o(kr(hr(p)), T);
        case "binary":
          return o(kr(p), T);
      }
      return o(p, T);
    }
    function F(p, T) {
      var m = T || {},
        E = m.root || "Root Entry";
      if ((p.FullPaths || (p.FullPaths = []), p.FileIndex || (p.FileIndex = []), p.FullPaths.length !== p.FileIndex.length)) throw new Error("inconsistent CFB structure");
      p.FullPaths.length === 0 && ((p.FullPaths[0] = E + "/"), (p.FileIndex[0] = { name: E, type: 5 })), m.CLSID && (p.FileIndex[0].clsid = m.CLSID), W(p);
    }
    function W(p) {
      var T = "Sh33tJ5";
      if (!me.find(p, "/" + T)) {
        var m = He(4);
        (m[0] = 55), (m[1] = m[3] = 50), (m[2] = 54), p.FileIndex.push({ name: T, type: 2, content: m, size: 4, L: 69, R: 69, C: 69 }), p.FullPaths.push(p.FullPaths[0] + T), D(p);
      }
    }
    function D(p, T) {
      F(p);
      for (var m = !1, E = !1, k = p.FullPaths.length - 1; k >= 0; --k) {
        var w = p.FileIndex[k];
        switch (w.type) {
          case 0:
            E ? (m = !0) : (p.FileIndex.pop(), p.FullPaths.pop());
            break;
          case 1:
          case 2:
          case 5:
            (E = !0), isNaN(w.R * w.L * w.C) && (m = !0), w.R > -1 && w.L > -1 && w.R == w.L && (m = !0);
            break;
          default:
            m = !0;
            break;
        }
      }
      if (!(!m && !T)) {
        var M = new Date(1987, 1, 19),
          z = 0,
          L = Object.create ? Object.create(null) : {},
          B = [];
        for (k = 0; k < p.FullPaths.length; ++k) (L[p.FullPaths[k]] = !0), p.FileIndex[k].type !== 0 && B.push([p.FullPaths[k], p.FileIndex[k]]);
        for (k = 0; k < B.length; ++k) {
          var V = n(B[k][0]);
          (E = L[V]), E || (B.push([V, { name: t(V).replace("/", ""), type: 1, clsid: ce, ct: M, mt: M, content: null }]), (L[V] = !0));
        }
        for (
          B.sort(function (se, Z) {
            return r(se[0], Z[0]);
          }),
            p.FullPaths = [],
            p.FileIndex = [],
            k = 0;
          k < B.length;
          ++k
        )
          (p.FullPaths[k] = B[k][0]), (p.FileIndex[k] = B[k][1]);
        for (k = 0; k < B.length; ++k) {
          var Y = p.FileIndex[k],
            Q = p.FullPaths[k];
          if (((Y.name = t(Q).replace("/", "")), (Y.L = Y.R = Y.C = -(Y.color = 1)), (Y.size = Y.content ? Y.content.length : 0), (Y.start = 0), (Y.clsid = Y.clsid || ce), k === 0)) (Y.C = B.length > 1 ? 1 : -1), (Y.size = 0), (Y.type = 5);
          else if (Q.slice(-1) == "/") {
            for (z = k + 1; z < B.length && n(p.FullPaths[z]) != Q; ++z);
            for (Y.C = z >= B.length ? -1 : z, z = k + 1; z < B.length && n(p.FullPaths[z]) != n(Q); ++z);
            (Y.R = z >= B.length ? -1 : z), (Y.type = 1);
          } else n(p.FullPaths[k + 1] || "") == n(Q) && (Y.R = k + 1), (Y.type = 2);
        }
      }
    }
    function X(p, T) {
      var m = T || {};
      if (m.fileType == "mad") return Hi(p, m);
      switch ((D(p), m.fileType)) {
        case "zip":
          return Ni(p, m);
      }
      var E = (function (se) {
          for (var Z = 0, te = 0, xe = 0; xe < se.FileIndex.length; ++xe) {
            var Ce = se.FileIndex[xe];
            if (Ce.content) {
              var ye = Ce.content.length;
              ye > 0 && (ye < 4096 ? (Z += (ye + 63) >> 6) : (te += (ye + 511) >> 9));
            }
          }
          for (var Ye = (se.FullPaths.length + 3) >> 2, ya = (Z + 7) >> 3, Da = (Z + 127) >> 7, Oa = ya + te + Ye + Da, Qr = (Oa + 127) >> 7, Pt = Qr <= 109 ? 0 : Math.ceil((Qr - 109) / 127); (Oa + Qr + Pt + 127) >> 7 > Qr; ) Pt = ++Qr <= 109 ? 0 : Math.ceil((Qr - 109) / 127);
          var Lr = [1, Pt, Qr, Da, Ye, te, Z, 0];
          return (se.FileIndex[0].size = Z << 6), (Lr[7] = (se.FileIndex[0].start = Lr[0] + Lr[1] + Lr[2] + Lr[3] + Lr[4] + Lr[5]) + ((Lr[6] + 7) >> 3)), Lr;
        })(p),
        k = He(E[7] << 9),
        w = 0,
        M = 0;
      {
        for (w = 0; w < 8; ++w) k.write_shift(1, re[w]);
        for (w = 0; w < 8; ++w) k.write_shift(2, 0);
        for (k.write_shift(2, 62), k.write_shift(2, 3), k.write_shift(2, 65534), k.write_shift(2, 9), k.write_shift(2, 6), w = 0; w < 3; ++w) k.write_shift(2, 0);
        for (k.write_shift(4, 0), k.write_shift(4, E[2]), k.write_shift(4, E[0] + E[1] + E[2] + E[3] - 1), k.write_shift(4, 0), k.write_shift(4, 4096), k.write_shift(4, E[3] ? E[0] + E[1] + E[2] - 1 : j), k.write_shift(4, E[3]), k.write_shift(-4, E[1] ? E[0] - 1 : j), k.write_shift(4, E[1]), w = 0; w < 109; ++w) k.write_shift(-4, w < E[2] ? E[1] + w : -1);
      }
      if (E[1])
        for (M = 0; M < E[1]; ++M) {
          for (; w < 236 + M * 127; ++w) k.write_shift(-4, w < E[2] ? E[1] + w : -1);
          k.write_shift(-4, M === E[1] - 1 ? j : M + 1);
        }
      var z = function (se) {
        for (M += se; w < M - 1; ++w) k.write_shift(-4, w + 1);
        se && (++w, k.write_shift(-4, j));
      };
      for (M = w = 0, M += E[1]; w < M; ++w) k.write_shift(-4, ie.DIFSECT);
      for (M += E[2]; w < M; ++w) k.write_shift(-4, ie.FATSECT);
      z(E[3]), z(E[4]);
      for (var L = 0, B = 0, V = p.FileIndex[0]; L < p.FileIndex.length; ++L) (V = p.FileIndex[L]), V.content && ((B = V.content.length), !(B < 4096) && ((V.start = M), z((B + 511) >> 9)));
      for (z((E[6] + 7) >> 3); k.l & 511; ) k.write_shift(-4, ie.ENDOFCHAIN);
      for (M = w = 0, L = 0; L < p.FileIndex.length; ++L) (V = p.FileIndex[L]), V.content && ((B = V.content.length), !(!B || B >= 4096) && ((V.start = M), z((B + 63) >> 6)));
      for (; k.l & 511; ) k.write_shift(-4, ie.ENDOFCHAIN);
      for (w = 0; w < E[4] << 2; ++w) {
        var Y = p.FullPaths[w];
        if (!Y || Y.length === 0) {
          for (L = 0; L < 17; ++L) k.write_shift(4, 0);
          for (L = 0; L < 3; ++L) k.write_shift(4, -1);
          for (L = 0; L < 12; ++L) k.write_shift(4, 0);
          continue;
        }
        (V = p.FileIndex[w]), w === 0 && (V.start = V.size ? V.start - 1 : j);
        var Q = (w === 0 && m.root) || V.name;
        if (((B = 2 * (Q.length + 1)), k.write_shift(64, Q, "utf16le"), k.write_shift(2, B), k.write_shift(1, V.type), k.write_shift(1, V.color), k.write_shift(-4, V.L), k.write_shift(-4, V.R), k.write_shift(-4, V.C), V.clsid)) k.write_shift(16, V.clsid, "hex");
        else for (L = 0; L < 4; ++L) k.write_shift(4, 0);
        k.write_shift(4, V.state || 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, V.start), k.write_shift(4, V.size), k.write_shift(4, 0);
      }
      for (w = 1; w < p.FileIndex.length; ++w)
        if (((V = p.FileIndex[w]), V.size >= 4096))
          if (((k.l = (V.start + 1) << 9), ge && Buffer.isBuffer(V.content))) V.content.copy(k, k.l, 0, V.size), (k.l += (V.size + 511) & -512);
          else {
            for (L = 0; L < V.size; ++L) k.write_shift(1, V.content[L]);
            for (; L & 511; ++L) k.write_shift(1, 0);
          }
      for (w = 1; w < p.FileIndex.length; ++w)
        if (((V = p.FileIndex[w]), V.size > 0 && V.size < 4096))
          if (ge && Buffer.isBuffer(V.content)) V.content.copy(k, k.l, 0, V.size), (k.l += (V.size + 63) & -64);
          else {
            for (L = 0; L < V.size; ++L) k.write_shift(1, V.content[L]);
            for (; L & 63; ++L) k.write_shift(1, 0);
          }
      if (ge) k.l = k.length;
      else for (; k.l < k.length; ) k.write_shift(1, 0);
      return k;
    }
    function U(p, T) {
      var m = p.FullPaths.map(function (L) {
          return L.toUpperCase();
        }),
        E = m.map(function (L) {
          var B = L.split("/");
          return B[B.length - (L.slice(-1) == "/" ? 2 : 1)];
        }),
        k = !1;
      T.charCodeAt(0) === 47 ? ((k = !0), (T = m[0].slice(0, -1) + T)) : (k = T.indexOf("/") !== -1);
      var w = T.toUpperCase(),
        M = k === !0 ? m.indexOf(w) : E.indexOf(w);
      if (M !== -1) return p.FileIndex[M];
      var z = !w.match(Ia);
      for (w = w.replace(ir, ""), z && (w = w.replace(Ia, "!")), M = 0; M < m.length; ++M) if ((z ? m[M].replace(Ia, "!") : m[M]).replace(ir, "") == w || (z ? E[M].replace(Ia, "!") : E[M]).replace(ir, "") == w) return p.FileIndex[M];
      return null;
    }
    var P = 64,
      j = -2,
      fe = "d0cf11e0a1b11ae1",
      re = [208, 207, 17, 224, 161, 177, 26, 225],
      ce = "00000000000000000000000000000000",
      ie = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: j, FREESECT: -1, HEADER_SIGNATURE: fe, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: ce, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
    function Fe(p, T, m) {
      l();
      var E = X(p, m);
      f.writeFileSync(T, E);
    }
    function G(p) {
      for (var T = new Array(p.length), m = 0; m < p.length; ++m) T[m] = String.fromCharCode(p[m]);
      return T.join("");
    }
    function le(p, T) {
      var m = X(p, T);
      switch ((T && T.type) || "buffer") {
        case "file":
          return l(), f.writeFileSync(T.filename, m), m;
        case "binary":
          return typeof m == "string" ? m : G(m);
        case "base64":
          return B0(typeof m == "string" ? m : G(m));
        case "buffer":
          if (ge) return Buffer.isBuffer(m) ? m : fa(m);
        case "array":
          return typeof m == "string" ? kr(m) : m;
      }
      return m;
    }
    var ue;
    function S(p) {
      try {
        var T = p.InflateRaw,
          m = new T();
        if ((m._processChunk(new Uint8Array([3, 0]), m._finishFlushFlag), m.bytesRead)) ue = p;
        else throw new Error("zlib does not expose bytesRead");
      } catch (E) {
        console.error("cannot use native zlib: " + (E.message || E));
      }
    }
    function H(p, T) {
      if (!ue) return R0(p, T);
      var m = ue.InflateRaw,
        E = new m(),
        k = E._processChunk(p.slice(p.l), E._finishFlushFlag);
      return (p.l += E.bytesRead), k;
    }
    function I(p) {
      return ue ? ue.deflateRawSync(p) : ve(p);
    }
    var O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      K = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258],
      ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    function ne(p) {
      var T = (((p << 1) | (p << 11)) & 139536) | (((p << 5) | (p << 15)) & 558144);
      return ((T >> 16) | (T >> 8) | T) & 255;
    }
    for (var q = typeof Uint8Array < "u", J = q ? new Uint8Array(256) : [], Ee = 0; Ee < 256; ++Ee) J[Ee] = ne(Ee);
    function C(p, T) {
      var m = J[p & 255];
      return T <= 8 ? m >>> (8 - T) : ((m = (m << 8) | J[(p >> 8) & 255]), T <= 16 ? m >>> (16 - T) : ((m = (m << 8) | J[(p >> 16) & 255]), m >>> (24 - T)));
    }
    function Re(p, T) {
      var m = T & 7,
        E = T >>> 3;
      return ((p[E] | (m <= 6 ? 0 : p[E + 1] << 8)) >>> m) & 3;
    }
    function ke(p, T) {
      var m = T & 7,
        E = T >>> 3;
      return ((p[E] | (m <= 5 ? 0 : p[E + 1] << 8)) >>> m) & 7;
    }
    function we(p, T) {
      var m = T & 7,
        E = T >>> 3;
      return ((p[E] | (m <= 4 ? 0 : p[E + 1] << 8)) >>> m) & 15;
    }
    function pe(p, T) {
      var m = T & 7,
        E = T >>> 3;
      return ((p[E] | (m <= 3 ? 0 : p[E + 1] << 8)) >>> m) & 31;
    }
    function ae(p, T) {
      var m = T & 7,
        E = T >>> 3;
      return ((p[E] | (m <= 1 ? 0 : p[E + 1] << 8)) >>> m) & 127;
    }
    function Ie(p, T, m) {
      var E = T & 7,
        k = T >>> 3,
        w = (1 << m) - 1,
        M = p[k] >>> E;
      return m < 8 - E || ((M |= p[k + 1] << (8 - E)), m < 16 - E) || ((M |= p[k + 2] << (16 - E)), m < 24 - E) || (M |= p[k + 3] << (24 - E)), M & w;
    }
    function xr(p, T, m) {
      var E = T & 7,
        k = T >>> 3;
      return E <= 5 ? (p[k] |= (m & 7) << E) : ((p[k] |= (m << E) & 255), (p[k + 1] = (m & 7) >> (8 - E))), T + 3;
    }
    function Sr(p, T, m) {
      var E = T & 7,
        k = T >>> 3;
      return (m = (m & 1) << E), (p[k] |= m), T + 1;
    }
    function Nr(p, T, m) {
      var E = T & 7,
        k = T >>> 3;
      return (m <<= E), (p[k] |= m & 255), (m >>>= 8), (p[k + 1] = m), T + 8;
    }
    function Sa(p, T, m) {
      var E = T & 7,
        k = T >>> 3;
      return (m <<= E), (p[k] |= m & 255), (m >>>= 8), (p[k + 1] = m & 255), (p[k + 2] = m >>> 8), T + 16;
    }
    function Vr(p, T) {
      var m = p.length,
        E = 2 * m > T ? 2 * m : T + 5,
        k = 0;
      if (m >= T) return p;
      if (ge) {
        var w = b0(E);
        if (p.copy) p.copy(w);
        else for (; k < p.length; ++k) w[k] = p[k];
        return w;
      } else if (q) {
        var M = new Uint8Array(E);
        if (M.set) M.set(p);
        else for (; k < m; ++k) M[k] = p[k];
        return M;
      }
      return (p.length = E), p;
    }
    function or(p) {
      for (var T = new Array(p), m = 0; m < p; ++m) T[m] = 0;
      return T;
    }
    function Pr(p, T, m) {
      var E = 1,
        k = 0,
        w = 0,
        M = 0,
        z = 0,
        L = p.length,
        B = q ? new Uint16Array(32) : or(32);
      for (w = 0; w < 32; ++w) B[w] = 0;
      for (w = L; w < m; ++w) p[w] = 0;
      L = p.length;
      var V = q ? new Uint16Array(L) : or(L);
      for (w = 0; w < L; ++w) B[(k = p[w])]++, E < k && (E = k), (V[w] = 0);
      for (B[0] = 0, w = 1; w <= E; ++w) B[w + 16] = z = (z + B[w - 1]) << 1;
      for (w = 0; w < L; ++w) (z = p[w]), z != 0 && (V[w] = B[z + 16]++);
      var Y = 0;
      for (w = 0; w < L; ++w) if (((Y = p[w]), Y != 0)) for (z = C(V[w], E) >> (E - Y), M = (1 << (E + 4 - Y)) - 1; M >= 0; --M) T[z | (M << Y)] = (Y & 15) | (w << 4);
      return E;
    }
    var Wr = q ? new Uint16Array(512) : or(512),
      Ca = q ? new Uint16Array(32) : or(32);
    if (!q) {
      for (var ar = 0; ar < 512; ++ar) Wr[ar] = 0;
      for (ar = 0; ar < 32; ++ar) Ca[ar] = 0;
    }
    (function () {
      for (var p = [], T = 0; T < 32; T++) p.push(5);
      Pr(p, Ca, 32);
      var m = [];
      for (T = 0; T <= 143; T++) m.push(8);
      for (; T <= 255; T++) m.push(9);
      for (; T <= 279; T++) m.push(7);
      for (; T <= 287; T++) m.push(8);
      Pr(m, Wr, 288);
    })();
    var Cr = (function () {
      for (var T = q ? new Uint8Array(32768) : [], m = 0, E = 0; m < ee.length - 1; ++m) for (; E < ee[m + 1]; ++E) T[E] = m;
      for (; E < 32768; ++E) T[E] = 29;
      var k = q ? new Uint8Array(259) : [];
      for (m = 0, E = 0; m < K.length - 1; ++m) for (; E < K[m + 1]; ++E) k[E] = m;
      function w(z, L) {
        for (var B = 0; B < z.length; ) {
          var V = Math.min(65535, z.length - B),
            Y = B + V == z.length;
          for (L.write_shift(1, +Y), L.write_shift(2, V), L.write_shift(2, ~V & 65535); V-- > 0; ) L[L.l++] = z[B++];
        }
        return L.l;
      }
      function M(z, L) {
        for (var B = 0, V = 0, Y = q ? new Uint16Array(32768) : []; V < z.length; ) {
          var Q = Math.min(65535, z.length - V);
          if (Q < 10) {
            for (B = xr(L, B, +(V + Q == z.length)), B & 7 && (B += 8 - (B & 7)), L.l = (B / 8) | 0, L.write_shift(2, Q), L.write_shift(2, ~Q & 65535); Q-- > 0; ) L[L.l++] = z[V++];
            B = L.l * 8;
            continue;
          }
          B = xr(L, B, +(V + Q == z.length) + 2);
          for (var se = 0; Q-- > 0; ) {
            var Z = z[V];
            se = ((se << 5) ^ Z) & 32767;
            var te = -1,
              xe = 0;
            if ((te = Y[se]) && ((te |= V & -32768), te > V && (te -= 32768), te < V)) for (; z[te + xe] == z[V + xe] && xe < 250; ) ++xe;
            if (xe > 2) {
              (Z = k[xe]), Z <= 22 ? (B = Nr(L, B, J[Z + 1] >> 1) - 1) : (Nr(L, B, 3), (B += 5), Nr(L, B, J[Z - 23] >> 5), (B += 3));
              var Ce = Z < 8 ? 0 : (Z - 4) >> 2;
              Ce > 0 && (Sa(L, B, xe - K[Z]), (B += Ce)), (Z = T[V - te]), (B = Nr(L, B, J[Z] >> 3)), (B -= 3);
              var ye = Z < 4 ? 0 : (Z - 2) >> 1;
              ye > 0 && (Sa(L, B, V - te - ee[Z]), (B += ye));
              for (var Ye = 0; Ye < xe; ++Ye) (Y[se] = V & 32767), (se = ((se << 5) ^ z[V]) & 32767), ++V;
              Q -= xe - 1;
            } else Z <= 143 ? (Z = Z + 48) : (B = Sr(L, B, 1)), (B = Nr(L, B, J[Z])), (Y[se] = V & 32767), ++V;
          }
          B = Nr(L, B, 0) - 1;
        }
        return (L.l = ((B + 7) / 8) | 0), L.l;
      }
      return function (L, B) {
        return L.length < 8 ? w(L, B) : M(L, B);
      };
    })();
    function ve(p) {
      var T = He(50 + Math.floor(p.length * 1.1)),
        m = Cr(p, T);
      return T.slice(0, m);
    }
    var Ne = q ? new Uint16Array(32768) : or(32768),
      dr = q ? new Uint16Array(32768) : or(32768),
      Ue = q ? new Uint16Array(128) : or(128),
      qr = 1,
      O0 = 1;
    function Oi(p, T) {
      var m = pe(p, T) + 257;
      T += 5;
      var E = pe(p, T) + 1;
      T += 5;
      var k = we(p, T) + 4;
      T += 4;
      for (var w = 0, M = q ? new Uint8Array(19) : or(19), z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], L = 1, B = q ? new Uint8Array(8) : or(8), V = q ? new Uint8Array(8) : or(8), Y = M.length, Q = 0; Q < k; ++Q) (M[O[Q]] = w = ke(p, T)), L < w && (L = w), B[w]++, (T += 3);
      var se = 0;
      for (B[0] = 0, Q = 1; Q <= L; ++Q) V[Q] = se = (se + B[Q - 1]) << 1;
      for (Q = 0; Q < Y; ++Q) (se = M[Q]) != 0 && (z[Q] = V[se]++);
      var Z = 0;
      for (Q = 0; Q < Y; ++Q)
        if (((Z = M[Q]), Z != 0)) {
          se = J[z[Q]] >> (8 - Z);
          for (var te = (1 << (7 - Z)) - 1; te >= 0; --te) Ue[se | (te << Z)] = (Z & 7) | (Q << 3);
        }
      var xe = [];
      for (L = 1; xe.length < m + E; )
        switch (((se = Ue[ae(p, T)]), (T += se & 7), (se >>>= 3))) {
          case 16:
            for (w = 3 + Re(p, T), T += 2, se = xe[xe.length - 1]; w-- > 0; ) xe.push(se);
            break;
          case 17:
            for (w = 3 + ke(p, T), T += 3; w-- > 0; ) xe.push(0);
            break;
          case 18:
            for (w = 11 + ae(p, T), T += 7; w-- > 0; ) xe.push(0);
            break;
          default:
            xe.push(se), L < se && (L = se);
            break;
        }
      var Ce = xe.slice(0, m),
        ye = xe.slice(m);
      for (Q = m; Q < 286; ++Q) Ce[Q] = 0;
      for (Q = E; Q < 30; ++Q) ye[Q] = 0;
      return (qr = Pr(Ce, Ne, 286)), (O0 = Pr(ye, dr, 30)), T;
    }
    function Ri(p, T) {
      if (p[0] == 3 && !(p[1] & 3)) return [jr(T), 2];
      for (var m = 0, E = 0, k = b0(T || 1 << 18), w = 0, M = k.length >>> 0, z = 0, L = 0; !(E & 1); ) {
        if (((E = ke(p, m)), (m += 3), E >>> 1)) E >> 1 == 1 ? ((z = 9), (L = 5)) : ((m = Oi(p, m)), (z = qr), (L = O0));
        else {
          m & 7 && (m += 8 - (m & 7));
          var B = p[m >>> 3] | (p[(m >>> 3) + 1] << 8);
          if (((m += 32), B > 0)) for (!T && M < w + B && ((k = Vr(k, w + B)), (M = k.length)); B-- > 0; ) (k[w++] = p[m >>> 3]), (m += 8);
          continue;
        }
        for (;;) {
          !T && M < w + 32767 && ((k = Vr(k, w + 32767)), (M = k.length));
          var V = Ie(p, m, z),
            Y = E >>> 1 == 1 ? Wr[V] : Ne[V];
          if (((m += Y & 15), (Y >>>= 4), !((Y >>> 8) & 255))) k[w++] = Y;
          else {
            if (Y == 256) break;
            Y -= 257;
            var Q = Y < 8 ? 0 : (Y - 4) >> 2;
            Q > 5 && (Q = 0);
            var se = w + K[Y];
            Q > 0 && ((se += Ie(p, m, Q)), (m += Q)), (V = Ie(p, m, L)), (Y = E >>> 1 == 1 ? Ca[V] : dr[V]), (m += Y & 15), (Y >>>= 4);
            var Z = Y < 4 ? 0 : (Y - 2) >> 1,
              te = ee[Y];
            for (Z > 0 && ((te += Ie(p, m, Z)), (m += Z)), !T && M < se && ((k = Vr(k, se + 100)), (M = k.length)); w < se; ) (k[w] = k[w - te]), ++w;
          }
        }
      }
      return T ? [k, (m + 7) >>> 3] : [k.slice(0, w), (m + 7) >>> 3];
    }
    function R0(p, T) {
      var m = p.slice(p.l || 0),
        E = Ri(m, T);
      return (p.l += E[1]), E[0];
    }
    function I0(p, T) {
      if (p) typeof console < "u" && console.error(T);
      else throw new Error(T);
    }
    function N0(p, T) {
      var m = p;
      ze(m, 0);
      var E = [],
        k = [],
        w = { FileIndex: E, FullPaths: k };
      F(w, { root: T.root });
      for (var M = m.length - 4; (m[M] != 80 || m[M + 1] != 75 || m[M + 2] != 5 || m[M + 3] != 6) && M >= 0; ) --M;
      (m.l = M + 4), (m.l += 4);
      var z = m.read_shift(2);
      m.l += 6;
      var L = m.read_shift(4);
      for (m.l = L, M = 0; M < z; ++M) {
        m.l += 20;
        var B = m.read_shift(4),
          V = m.read_shift(4),
          Y = m.read_shift(2),
          Q = m.read_shift(2),
          se = m.read_shift(2);
        m.l += 8;
        var Z = m.read_shift(4),
          te = c(m.slice(m.l + Y, m.l + Y + Q));
        m.l += Y + Q + se;
        var xe = m.l;
        (m.l = Z + 4), Ii(m, B, V, w, te), (m.l = xe);
      }
      return w;
    }
    function Ii(p, T, m, E, k) {
      p.l += 2;
      var w = p.read_shift(2),
        M = p.read_shift(2),
        z = i(p);
      if (w & 8257) throw new Error("Unsupported ZIP encryption");
      for (var L = p.read_shift(4), B = p.read_shift(4), V = p.read_shift(4), Y = p.read_shift(2), Q = p.read_shift(2), se = "", Z = 0; Z < Y; ++Z) se += String.fromCharCode(p[p.l++]);
      if (Q) {
        var te = c(p.slice(p.l, p.l + Q));
        (te[21589] || {}).mt && (z = te[21589].mt), ((k || {})[21589] || {}).mt && (z = k[21589].mt);
      }
      p.l += Q;
      var xe = p.slice(p.l, p.l + B);
      switch (M) {
        case 8:
          xe = H(p, V);
          break;
        case 0:
          break;
        default:
          throw new Error("Unsupported ZIP Compression method " + M);
      }
      var Ce = !1;
      w & 8 && ((L = p.read_shift(4)), L == 134695760 && ((L = p.read_shift(4)), (Ce = !0)), (B = p.read_shift(4)), (V = p.read_shift(4))), B != T && I0(Ce, "Bad compressed size: " + T + " != " + B), V != m && I0(Ce, "Bad uncompressed size: " + m + " != " + V), Nt(E, se, xe, { unsafe: !0, mt: z });
    }
    function Ni(p, T) {
      var m = T || {},
        E = [],
        k = [],
        w = He(1),
        M = m.compression ? 8 : 0,
        z = 0,
        L = 0,
        B = 0,
        V = 0,
        Y = 0,
        Q = p.FullPaths[0],
        se = Q,
        Z = p.FileIndex[0],
        te = [],
        xe = 0;
      for (L = 1; L < p.FullPaths.length; ++L)
        if (((se = p.FullPaths[L].slice(Q.length)), (Z = p.FileIndex[L]), !(!Z.size || !Z.content || se == "Sh33tJ5"))) {
          var Ce = V,
            ye = He(se.length);
          for (B = 0; B < se.length; ++B) ye.write_shift(1, se.charCodeAt(B) & 127);
          (ye = ye.slice(0, ye.l)), (te[Y] = yc.buf(Z.content, 0));
          var Ye = Z.content;
          M == 8 && (Ye = I(Ye)),
            (w = He(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, z),
            w.write_shift(2, M),
            Z.mt ? s(w, Z.mt) : w.write_shift(4, 0),
            w.write_shift(-4, te[Y]),
            w.write_shift(4, Ye.length),
            w.write_shift(4, Z.content.length),
            w.write_shift(2, ye.length),
            w.write_shift(2, 0),
            (V += w.length),
            E.push(w),
            (V += ye.length),
            E.push(ye),
            (V += Ye.length),
            E.push(Ye),
            (w = He(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, z),
            w.write_shift(2, M),
            w.write_shift(4, 0),
            w.write_shift(-4, te[Y]),
            w.write_shift(4, Ye.length),
            w.write_shift(4, Z.content.length),
            w.write_shift(2, ye.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, Ce),
            (xe += w.l),
            k.push(w),
            (xe += ye.length),
            k.push(ye),
            ++Y;
        }
      return (w = He(22)), w.write_shift(4, 101010256), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, Y), w.write_shift(2, Y), w.write_shift(4, xe), w.write_shift(4, V), w.write_shift(2, 0), zr([zr(E), zr(k), w]);
    }
    var it = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
    function Pi(p, T) {
      if (p.ctype) return p.ctype;
      var m = p.name || "",
        E = m.match(/\.([^\.]+)$/);
      return (E && it[E[1]]) || (T && ((E = (m = T).match(/[\.\\]([^\.\\])+$/)), E && it[E[1]])) ? it[E[1]] : "application/octet-stream";
    }
    function Li(p) {
      for (var T = B0(p), m = [], E = 0; E < T.length; E += 76) m.push(T.slice(E, E + 76));
      return (
        m.join(`\r
`) +
        `\r
`
      );
    }
    function Mi(p) {
      var T = p.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (B) {
        var V = B.charCodeAt(0).toString(16).toUpperCase();
        return "=" + (V.length == 1 ? "0" + V : V);
      });
      (T = T.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")),
        T.charAt(0) ==
          `
` && (T = "=0D" + T.slice(1)),
        (T = T.replace(/\r(?!\n)/gm, "=0D")
          .replace(
            /\n\n/gm,
            `
=0A`
          )
          .replace(/([^\r\n])\n/gm, "$1=0A"));
      for (
        var m = [],
          E = T.split(`\r
`),
          k = 0;
        k < E.length;
        ++k
      ) {
        var w = E[k];
        if (w.length == 0) {
          m.push("");
          continue;
        }
        for (var M = 0; M < w.length; ) {
          var z = 76,
            L = w.slice(M, M + z);
          L.charAt(z - 1) == "=" ? z-- : L.charAt(z - 2) == "=" ? (z -= 2) : L.charAt(z - 3) == "=" && (z -= 3), (L = w.slice(M, M + z)), (M += z), M < w.length && (L += "="), m.push(L);
        }
      }
      return m.join(`\r
`);
    }
    function Bi(p) {
      for (var T = [], m = 0; m < p.length; ++m) {
        for (var E = p[m]; m <= p.length && E.charAt(E.length - 1) == "="; ) E = E.slice(0, E.length - 1) + p[++m];
        T.push(E);
      }
      for (var k = 0; k < T.length; ++k)
        T[k] = T[k].replace(/[=][0-9A-Fa-f]{2}/g, function (w) {
          return String.fromCharCode(parseInt(w.slice(1), 16));
        });
      return kr(
        T.join(`\r
`)
      );
    }
    function bi(p, T, m) {
      for (var E = "", k = "", w = "", M, z = 0; z < 10; ++z) {
        var L = T[z];
        if (!L || L.match(/^\s*$/)) break;
        var B = L.match(/^(.*?):\s*([^\s].*)$/);
        if (B)
          switch (B[1].toLowerCase()) {
            case "content-location":
              E = B[2].trim();
              break;
            case "content-type":
              w = B[2].trim();
              break;
            case "content-transfer-encoding":
              k = B[2].trim();
              break;
          }
      }
      switch ((++z, k.toLowerCase())) {
        case "base64":
          M = kr(hr(T.slice(z).join("")));
          break;
        case "quoted-printable":
          M = Bi(T.slice(z));
          break;
        default:
          throw new Error("Unsupported Content-Transfer-Encoding " + k);
      }
      var V = Nt(p, E.slice(m.length), M, { unsafe: !0 });
      w && (V.ctype = w);
    }
    function Ui(p, T) {
      if (G(p.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
      var m = (T && T.root) || "",
        E = (ge && Buffer.isBuffer(p) ? p.toString("binary") : G(p)).split(`\r
`),
        k = 0,
        w = "";
      for (k = 0; k < E.length; ++k) if (((w = E[k]), !!/^Content-Location:/i.test(w) && ((w = w.slice(w.indexOf("file"))), m || (m = w.slice(0, w.lastIndexOf("/") + 1)), w.slice(0, m.length) != m))) for (; m.length > 0 && ((m = m.slice(0, m.length - 1)), (m = m.slice(0, m.lastIndexOf("/") + 1)), w.slice(0, m.length) != m); );
      var M = (E[1] || "").match(/boundary="(.*?)"/);
      if (!M) throw new Error("MAD cannot find boundary");
      var z = "--" + (M[1] || ""),
        L = [],
        B = [],
        V = { FileIndex: L, FullPaths: B };
      F(V);
      var Y,
        Q = 0;
      for (k = 0; k < E.length; ++k) {
        var se = E[k];
        (se !== z && se !== z + "--") || (Q++ && bi(V, E.slice(Y, k), m), (Y = k));
      }
      return V;
    }
    function Hi(p, T) {
      var m = T || {},
        E = m.boundary || "SheetJS";
      E = "------=" + E;
      for (var k = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + E.slice(2) + '"', "", "", ""], w = p.FullPaths[0], M = w, z = p.FileIndex[0], L = 1; L < p.FullPaths.length; ++L)
        if (((M = p.FullPaths[L].slice(w.length)), (z = p.FileIndex[L]), !(!z.size || !z.content || M == "Sh33tJ5"))) {
          M = M.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (xe) {
            return "_x" + xe.charCodeAt(0).toString(16) + "_";
          }).replace(/[\u0080-\uFFFF]/g, function (xe) {
            return "_u" + xe.charCodeAt(0).toString(16) + "_";
          });
          for (var B = z.content, V = ge && Buffer.isBuffer(B) ? B.toString("binary") : G(B), Y = 0, Q = Math.min(1024, V.length), se = 0, Z = 0; Z <= Q; ++Z) (se = V.charCodeAt(Z)) >= 32 && se < 128 && ++Y;
          var te = Y >= (Q * 4) / 5;
          k.push(E), k.push("Content-Location: " + (m.root || "file:///C:/SheetJS/") + M), k.push("Content-Transfer-Encoding: " + (te ? "quoted-printable" : "base64")), k.push("Content-Type: " + Pi(z, M)), k.push(""), k.push(te ? Mi(V) : Li(V));
        }
      return (
        k.push(
          E +
            `--\r
`
        ),
        k.join(`\r
`)
      );
    }
    function Vi(p) {
      var T = {};
      return F(T, p), T;
    }
    function Nt(p, T, m, E) {
      var k = E && E.unsafe;
      k || F(p);
      var w = !k && me.find(p, T);
      if (!w) {
        var M = p.FullPaths[0];
        T.slice(0, M.length) == M ? (M = T) : (M.slice(-1) != "/" && (M += "/"), (M = (M + T).replace("//", "/"))), (w = { name: t(T), type: 2 }), p.FileIndex.push(w), p.FullPaths.push(M), k || me.utils.cfb_gc(p);
      }
      return (w.content = m), (w.size = m ? m.length : 0), E && (E.CLSID && (w.clsid = E.CLSID), E.mt && (w.mt = E.mt), E.ct && (w.ct = E.ct)), w;
    }
    function Wi(p, T) {
      F(p);
      var m = me.find(p, T);
      if (m) {
        for (var E = 0; E < p.FileIndex.length; ++E) if (p.FileIndex[E] == m) return p.FileIndex.splice(E, 1), p.FullPaths.splice(E, 1), !0;
      }
      return !1;
    }
    function Gi(p, T, m) {
      F(p);
      var E = me.find(p, T);
      if (E) {
        for (var k = 0; k < p.FileIndex.length; ++k) if (p.FileIndex[k] == E) return (p.FileIndex[k].name = t(m)), (p.FullPaths[k] = m), !0;
      }
      return !1;
    }
    function Xi(p) {
      D(p, !0);
    }
    return (a.find = U), (a.read = R), (a.parse = o), (a.write = le), (a.writeFile = Fe), (a.utils = { cfb_new: Vi, cfb_add: Nt, cfb_del: Wi, cfb_mov: Gi, cfb_gc: Xi, ReadShift: Ma, CheckField: Os, prep_blob: ze, bconcat: zr, use_zlib: S, _deflateRaw: ve, _inflateRaw: R0, consts: ie }), a;
  })();
function Dc(e) {
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
function Or(e) {
  for (var a = Object.keys(e), r = [], n = 0; n < a.length; ++n) Object.prototype.hasOwnProperty.call(e, a[n]) && r.push(a[n]);
  return r;
}
function f0(e) {
  for (var a = [], r = Or(e), n = 0; n !== r.length; ++n) a[e[r[n]]] = r[n];
  return a;
}
var Tt = new Date(1899, 11, 30, 0, 0, 0);
function cr(e, a) {
  var r = e.getTime();
  a && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var n = Tt.getTime() + (e.getTimezoneOffset() - Tt.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var fs = new Date(),
  Oc = Tt.getTime() + (fs.getTimezoneOffset() - Tt.getTimezoneOffset()) * 6e4,
  $0 = fs.getTimezoneOffset();
function Dt(e) {
  var a = new Date();
  return a.setTime(e * 24 * 60 * 60 * 1e3 + Oc), a.getTimezoneOffset() !== $0 && a.setTime(a.getTime() + (a.getTimezoneOffset() - $0) * 6e4), a;
}
function Rc(e) {
  var a = 0,
    r = 0,
    n = !1,
    t = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!t) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var s = 1; s != t.length; ++s)
    if (t[s]) {
      switch (((r = 1), s > 3 && (n = !0), t[s].slice(t[s].length - 1))) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + t[s].slice(t[s].length - 1));
        case "D":
          r *= 24;
        case "H":
          r *= 60;
        case "M":
          if (n) r *= 60;
          else throw new Error("Unsupported ISO Duration Field: M");
      }
      a += r * parseInt(t[s], 10);
    }
  return a;
}
var K0 = new Date("2017-02-19T19:06:09.000Z"),
  os = isNaN(K0.getFullYear()) ? new Date("2/19/17") : K0,
  Ic = os.getFullYear() == 2017;
function Xe(e, a) {
  var r = new Date(e);
  if (Ic) return a > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : a < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date) return e;
  if (os.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var t = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
    s = new Date(+t[0], +t[1] - 1, +t[2], +t[3] || 0, +t[4] || 0, +t[5] || 0);
  return e.indexOf("Z") > -1 && (s = new Date(s.getTime() - s.getTimezoneOffset() * 60 * 1e3)), s;
}
function ia(e, a) {
  if (ge && Buffer.isBuffer(e)) {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Pa(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Pa(jn(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (a) {
        if (e[0] == 255 && e[1] == 254) return Pa(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255) return Pa(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = { "€": "", "‚": "", ƒ: "", "„": "", "…": "", "†": "", "‡": "", ˆ: "", "‰": "", Š: "", "‹": "", Œ: "", Ž: "", "‘": "", "’": "", "“": "", "”": "", "•": "", "–": "", "—": "", "˜": "", "™": "", š: "", "›": "", œ: "", ž: "", Ÿ: "" };
      return (
        Array.isArray(e) && (e = new Uint8Array(e)),
        new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (s) {
          return r[s] || s;
        })
      );
    } catch {}
  for (var n = [], t = 0; t != e.length; ++t) n.push(String.fromCharCode(e[t]));
  return n.join("");
}
function $e(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (a[r] = $e(e[r]));
  return a;
}
function De(e, a) {
  for (var r = ""; r.length < a; ) r += e;
  return r;
}
function Fr(e) {
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
    ((n = n.replace(/[(](.*)[)]/, function (t, s) {
      return (r = -r), s;
    })),
    !isNaN((a = Number(n))))
    ? a / r
    : a;
}
var Nc = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Ta(e) {
  var a = new Date(e),
    r = new Date(NaN),
    n = a.getYear(),
    t = a.getMonth(),
    s = a.getDate();
  if (isNaN(s)) return r;
  var i = e.toLowerCase();
  if (i.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (((i = i.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")), i.length > 3 && Nc.indexOf(i) == -1)) return r;
  } else if (i.match(/[a-z]/)) return r;
  return n < 0 || n > 8099 ? r : (t > 0 || s > 1) && n != 101 ? a : e.match(/[^-0-9:,\/\\]/) ? r : a;
}
var Pc = (function () {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function (r, n, t) {
    if (e || typeof n == "string") return r.split(n);
    for (var s = r.split(n), i = [s[0]], c = 1; c < s.length; ++c) i.push(t), i.push(s[c]);
    return i;
  };
})();
function ls(e) {
  return e ? (e.content && e.type ? ia(e.content, !0) : e.data ? Ra(e.data) : e.asNodeBuffer && ge ? Ra(e.asNodeBuffer().toString("binary")) : e.asBinary ? Ra(e.asBinary()) : e._data && e._data.getContent ? Ra(ia(Array.prototype.slice.call(e._data.getContent(), 0))) : null) : null;
}
function us(e) {
  if (!e) return null;
  if (e.data) return L0(e.data);
  if (e.asNodeBuffer && ge) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var a = e._data.getContent();
    return typeof a == "string" ? L0(a) : Array.prototype.slice.call(a);
  }
  return e.content && e.type ? e.content : null;
}
function Lc(e) {
  return e && e.name.slice(-4) === ".bin" ? us(e) : ls(e);
}
function gr(e, a) {
  for (var r = e.FullPaths || Or(e.files), n = a.toLowerCase().replace(/[\/]/g, "\\"), t = n.replace(/\\/g, "/"), s = 0; s < r.length; ++s) {
    var i = r[s].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (n == i || t == i) return e.files ? e.files[r[s]] : e.FileIndex[s];
  }
  return null;
}
function o0(e, a) {
  var r = gr(e, a);
  if (r == null) throw new Error("Cannot find file " + a + " in zip");
  return r;
}
function Be(e, a, r) {
  if (!r) return Lc(o0(e, a));
  if (!a) return null;
  try {
    return Be(e, a);
  } catch {
    return null;
  }
}
function ur(e, a, r) {
  if (!r) return ls(o0(e, a));
  if (!a) return null;
  try {
    return ur(e, a);
  } catch {
    return null;
  }
}
function hs(e, a, r) {
  if (!r) return us(o0(e, a));
  if (!a) return null;
  try {
    return hs(e, a);
  } catch {
    return null;
  }
}
function Y0(e) {
  for (var a = e.FullPaths || Or(e.files), r = [], n = 0; n < a.length; ++n) a[n].slice(-1) != "/" && r.push(a[n].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function Mc(e, a, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return ge ? (n = fa(r)) : (n = ac(r)), me.utils.cfb_add(e, a, n);
    }
    me.utils.cfb_add(e, a, r);
  } else e.file(a, r);
}
function xs(e, a) {
  switch (a.type) {
    case "base64":
      return me.read(e, { type: "base64" });
    case "binary":
      return me.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return me.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + a.type);
}
function Na(e, a) {
  if (e.charAt(0) == "/") return e.slice(1);
  var r = a.split("/");
  a.slice(-1) != "/" && r.pop();
  for (var n = e.split("/"); n.length !== 0; ) {
    var t = n.shift();
    t === ".." ? r.pop() : t !== "." && r.push(t);
  }
  return r.join("/");
}
var ds = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  Bc = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,
  j0 = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm,
  bc = /<[^>]*>/g,
  rr = ds.match(j0) ? j0 : bc,
  Uc = /<\w*:/,
  Hc = /<(\/?)\w+:/;
function oe(e, a, r) {
  for (var n = {}, t = 0, s = 0; t !== e.length && !((s = e.charCodeAt(t)) === 32 || s === 10 || s === 13); ++t);
  if ((a || (n[0] = e.slice(0, t)), t === e.length)) return n;
  var i = e.match(Bc),
    c = 0,
    f = "",
    l = 0,
    o = "",
    u = "",
    x = 1;
  if (i)
    for (l = 0; l != i.length; ++l) {
      for (u = i[l], s = 0; s != u.length && u.charCodeAt(s) !== 61; ++s);
      for (o = u.slice(0, s).trim(); u.charCodeAt(s + 1) == 32; ) ++s;
      for (x = (t = u.charCodeAt(s + 1)) == 34 || t == 39 ? 1 : 0, f = u.slice(s + 1 + x, u.length - x), c = 0; c != o.length && o.charCodeAt(c) !== 58; ++c);
      if (c === o.length) o.indexOf("_") > 0 && (o = o.slice(0, o.indexOf("_"))), (n[o] = f), r || (n[o.toLowerCase()] = f);
      else {
        var d = (c === 5 && o.slice(0, 5) === "xmlns" ? "xmlns" : "") + o.slice(c + 1);
        if (n[d] && o.slice(c - 3, c) == "ext") continue;
        (n[d] = f), r || (n[d.toLowerCase()] = f);
      }
    }
  return n;
}
function Rr(e) {
  return e.replace(Hc, "<$1");
}
var vs = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" },
  Vc = f0(vs),
  Te = (function () {
    var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi,
      a = /_x([\da-fA-F]{4})_/gi;
    return function r(n) {
      var t = n + "",
        s = t.indexOf("<![CDATA[");
      if (s == -1)
        return t
          .replace(e, function (c, f) {
            return vs[c] || String.fromCharCode(parseInt(f, c.indexOf("x") > -1 ? 16 : 10)) || c;
          })
          .replace(a, function (c, f) {
            return String.fromCharCode(parseInt(f, 16));
          });
      var i = t.indexOf("]]>");
      return r(t.slice(0, s)) + t.slice(s + 9, i) + r(t.slice(i + 3));
    };
  })(),
  Wc = /[&<>'"]/g,
  Gc = /[\u0000-\u001f]/g;
function l0(e) {
  var a = e + "";
  return a
    .replace(Wc, function (r) {
      return Vc[r];
    })
    .replace(/\n/g, "<br/>")
    .replace(Gc, function (r) {
      return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
    });
}
var J0 = (function () {
  var e = /&#(\d+);/g;
  function a(r, n) {
    return String.fromCharCode(parseInt(n, 10));
  }
  return function (n) {
    return n.replace(e, a);
  };
})();
function Se(e) {
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
function Mt(e) {
  for (var a = "", r = 0, n = 0, t = 0, s = 0, i = 0, c = 0; r < e.length; ) {
    if (((n = e.charCodeAt(r++)), n < 128)) {
      a += String.fromCharCode(n);
      continue;
    }
    if (((t = e.charCodeAt(r++)), n > 191 && n < 224)) {
      (i = (n & 31) << 6), (i |= t & 63), (a += String.fromCharCode(i));
      continue;
    }
    if (((s = e.charCodeAt(r++)), n < 240)) {
      a += String.fromCharCode(((n & 15) << 12) | ((t & 63) << 6) | (s & 63));
      continue;
    }
    (i = e.charCodeAt(r++)), (c = (((n & 7) << 18) | ((t & 63) << 12) | ((s & 63) << 6) | (i & 63)) - 65536), (a += String.fromCharCode(55296 + ((c >>> 10) & 1023))), (a += String.fromCharCode(56320 + (c & 1023)));
  }
  return a;
}
function Z0(e) {
  var a = jr(2 * e.length),
    r,
    n,
    t = 1,
    s = 0,
    i = 0,
    c;
  for (n = 0; n < e.length; n += t)
    (t = 1),
      (c = e.charCodeAt(n)) < 128 ? (r = c) : c < 224 ? ((r = (c & 31) * 64 + (e.charCodeAt(n + 1) & 63)), (t = 2)) : c < 240 ? ((r = (c & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63)), (t = 3)) : ((t = 4), (r = (c & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63)), (r -= 65536), (i = 55296 + ((r >>> 10) & 1023)), (r = 56320 + (r & 1023))),
      i !== 0 && ((a[s++] = i & 255), (a[s++] = i >>> 8), (i = 0)),
      (a[s++] = r % 256),
      (a[s++] = r >>> 8);
  return a.slice(0, s).toString("ucs2");
}
function q0(e) {
  return fa(e, "binary").toString("utf8");
}
var ft = "foo bar bazâð£",
  Ae = (ge && ((q0(ft) == Mt(ft) && q0) || (Z0(ft) == Mt(ft) && Z0))) || Mt,
  Pa = ge
    ? function (e) {
        return fa(e, "utf8").toString("binary");
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
  $a = (function () {
    var e = {};
    return function (r, n) {
      var t = r + "|" + (n || "");
      return e[t] ? e[t] : (e[t] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", n || ""));
    };
  })(),
  ps = (function () {
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
  Xc = (function () {
    var e = {};
    return function (r) {
      return e[r] !== void 0 ? e[r] : (e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g"));
    };
  })(),
  zc = /<\/?(?:vt:)?variant>/g,
  $c = /<(?:vt:)([^>]*)>([\s\S]*)</;
function Q0(e, a) {
  var r = oe(e),
    n = e.match(Xc(r.baseType)) || [],
    t = [];
  if (n.length != r.size) {
    if (a.WTF) throw new Error("unexpected vector length " + n.length + " != " + r.size);
    return t;
  }
  return (
    n.forEach(function (s) {
      var i = s.replace(zc, "").match($c);
      i && t.push({ v: Ae(i[2]), t: i[1] });
    }),
    t
  );
}
var Kc = /(^\s|\s$|\n)/;
function Yc(e) {
  return Or(e)
    .map(function (a) {
      return " " + a + '="' + e[a] + '"';
    })
    .join("");
}
function jc(e, a, r) {
  return "<" + e + (r != null ? Yc(r) : "") + (a != null ? (a.match(Kc) ? ' xml:space="preserve"' : "") + ">" + a + "</" + e : "/") + ">";
}
function u0(e) {
  if (ge && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Ae(oa(s0(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var Ka = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm,
  Jc = {
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
  Zc = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"];
function qc(e, a) {
  for (var r = 1 - 2 * (e[a + 7] >>> 7), n = ((e[a + 7] & 127) << 4) + ((e[a + 6] >>> 4) & 15), t = e[a + 6] & 15, s = 5; s >= 0; --s) t = t * 256 + e[a + s];
  return n == 2047 ? (t == 0 ? r * (1 / 0) : NaN) : (n == 0 ? (n = -1022) : ((n -= 1023), (t += Math.pow(2, 52))), r * Math.pow(2, n - 52) * t);
}
function Qc(e, a, r) {
  var n = (a < 0 || 1 / a == -1 / 0 ? 1 : 0) << 7,
    t = 0,
    s = 0,
    i = n ? -a : a;
  isFinite(i) ? (i == 0 ? (t = s = 0) : ((t = Math.floor(Math.log(i) / Math.LN2)), (s = i * Math.pow(2, 52 - t)), t <= -1023 && (!isFinite(s) || s < Math.pow(2, 52)) ? (t = -1022) : ((s -= Math.pow(2, 52)), (t += 1023)))) : ((t = 2047), (s = isNaN(a) ? 26985 : 0));
  for (var c = 0; c <= 5; ++c, s /= 256) e[r + c] = s & 255;
  (e[r + 6] = ((t & 15) << 4) | (s & 15)), (e[r + 7] = (t >> 4) | n);
}
var en = function (e) {
    for (var a = [], r = 10240, n = 0; n < e[0].length; ++n) if (e[0][n]) for (var t = 0, s = e[0][n].length; t < s; t += r) a.push.apply(a, e[0][n].slice(t, t + r));
    return a;
  },
  rn = ge
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (a) {
                return Buffer.isBuffer(a) ? a : fa(a);
              })
            )
          : en(e);
      }
    : en,
  an = function (e, a, r) {
    for (var n = [], t = a; t < r; t += 2) n.push(String.fromCharCode(Mr(e, t)));
    return n.join("").replace(ir, "");
  },
  h0 = ge
    ? function (e, a, r) {
        return Buffer.isBuffer(e) ? e.toString("utf16le", a, r).replace(ir, "") : an(e, a, r);
      }
    : an,
  tn = function (e, a, r) {
    for (var n = [], t = a; t < a + r; ++t) n.push(("0" + e[t].toString(16)).slice(-2));
    return n.join("");
  },
  gs = ge
    ? function (e, a, r) {
        return Buffer.isBuffer(e) ? e.toString("hex", a, a + r) : tn(e, a, r);
      }
    : tn,
  nn = function (e, a, r) {
    for (var n = [], t = a; t < r; t++) n.push(String.fromCharCode(pa(e, t)));
    return n.join("");
  },
  et = ge
    ? function (a, r, n) {
        return Buffer.isBuffer(a) ? a.toString("utf8", r, n) : nn(a, r, n);
      }
    : nn,
  ms = function (e, a) {
    var r = lr(e, a);
    return r > 0 ? et(e, a + 4, a + 4 + r - 1) : "";
  },
  _s = ms,
  Es = function (e, a) {
    var r = lr(e, a);
    return r > 0 ? et(e, a + 4, a + 4 + r - 1) : "";
  },
  Ts = Es,
  ks = function (e, a) {
    var r = 2 * lr(e, a);
    return r > 0 ? et(e, a + 4, a + 4 + r - 1) : "";
  },
  ws = ks,
  As = function (a, r) {
    var n = lr(a, r);
    return n > 0 ? h0(a, r + 4, r + 4 + n) : "";
  },
  Fs = As,
  Ss = function (e, a) {
    var r = lr(e, a);
    return r > 0 ? et(e, a + 4, a + 4 + r) : "";
  },
  Cs = Ss,
  ys = function (e, a) {
    return qc(e, a);
  },
  kt = ys,
  Ds = function (a) {
    return Array.isArray(a) || (typeof Uint8Array < "u" && a instanceof Uint8Array);
  };
ge &&
  ((_s = function (a, r) {
    if (!Buffer.isBuffer(a)) return ms(a, r);
    var n = a.readUInt32LE(r);
    return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
  }),
  (Ts = function (a, r) {
    if (!Buffer.isBuffer(a)) return Es(a, r);
    var n = a.readUInt32LE(r);
    return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
  }),
  (ws = function (a, r) {
    if (!Buffer.isBuffer(a)) return ks(a, r);
    var n = 2 * a.readUInt32LE(r);
    return a.toString("utf16le", r + 4, r + 4 + n - 1);
  }),
  (Fs = function (a, r) {
    if (!Buffer.isBuffer(a)) return As(a, r);
    var n = a.readUInt32LE(r);
    return a.toString("utf16le", r + 4, r + 4 + n);
  }),
  (Cs = function (a, r) {
    if (!Buffer.isBuffer(a)) return Ss(a, r);
    var n = a.readUInt32LE(r);
    return a.toString("utf8", r + 4, r + 4 + n);
  }),
  (kt = function (a, r) {
    return Buffer.isBuffer(a) ? a.readDoubleLE(r) : ys(a, r);
  }),
  (Ds = function (a) {
    return Buffer.isBuffer(a) || Array.isArray(a) || (typeof Uint8Array < "u" && a instanceof Uint8Array);
  }));
var pa = function (e, a) {
    return e[a];
  },
  Mr = function (e, a) {
    return e[a + 1] * 256 + e[a];
  },
  ef = function (e, a) {
    var r = e[a + 1] * 256 + e[a];
    return r < 32768 ? r : (65535 - r + 1) * -1;
  },
  lr = function (e, a) {
    return e[a + 3] * (1 << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a];
  },
  ra = function (e, a) {
    return (e[a + 3] << 24) | (e[a + 2] << 16) | (e[a + 1] << 8) | e[a];
  },
  rf = function (e, a) {
    return (e[a] << 24) | (e[a + 1] << 16) | (e[a + 2] << 8) | e[a + 3];
  };
function Ma(e, a) {
  var r = "",
    n,
    t,
    s = [],
    i,
    c,
    f,
    l;
  switch (a) {
    case "dbcs":
      if (((l = this.l), ge && Buffer.isBuffer(this))) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (f = 0; f < e; ++f) (r += String.fromCharCode(Mr(this, l))), (l += 2);
      e *= 2;
      break;
    case "utf8":
      r = et(this, this.l, this.l + e);
      break;
    case "utf16le":
      (e *= 2), (r = h0(this, this.l, this.l + e));
      break;
    case "wstr":
      return Ma.call(this, e, "dbcs");
    case "lpstr-ansi":
      (r = _s(this, this.l)), (e = 4 + lr(this, this.l));
      break;
    case "lpstr-cp":
      (r = Ts(this, this.l)), (e = 4 + lr(this, this.l));
      break;
    case "lpwstr":
      (r = ws(this, this.l)), (e = 4 + 2 * lr(this, this.l));
      break;
    case "lpp4":
      (e = 4 + lr(this, this.l)), (r = Fs(this, this.l)), e & 2 && (e += 2);
      break;
    case "8lpp4":
      (e = 4 + lr(this, this.l)), (r = Cs(this, this.l)), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (i = pa(this, this.l + e++)) !== 0; ) s.push(ct(i));
      r = s.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (i = Mr(this, this.l + e)) !== 0; ) s.push(ct(i)), (e += 2);
      (e += 2), (r = s.join(""));
      break;
    case "dbcs-cont":
      for (r = "", l = this.l, f = 0; f < e; ++f) {
        if (this.lens && this.lens.indexOf(l) !== -1) return (i = pa(this, l)), (this.l = l + 1), (c = Ma.call(this, e - f, i ? "dbcs-cont" : "sbcs-cont")), s.join("") + c;
        s.push(ct(Mr(this, l))), (l += 2);
      }
      (r = s.join("")), (e *= 2);
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", l = this.l, f = 0; f != e; ++f) {
        if (this.lens && this.lens.indexOf(l) !== -1) return (i = pa(this, l)), (this.l = l + 1), (c = Ma.call(this, e - f, i ? "dbcs-cont" : "sbcs-cont")), s.join("") + c;
        s.push(ct(pa(this, l))), (l += 1);
      }
      r = s.join("");
      break;
    default:
      switch (e) {
        case 1:
          return (n = pa(this, this.l)), this.l++, n;
        case 2:
          return (n = (a === "i" ? ef : Mr)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return a === "i" || !(this[this.l + 3] & 128) ? ((n = (e > 0 ? ra : rf)(this, this.l)), (this.l += 4), n) : ((t = lr(this, this.l)), (this.l += 4), t);
        case 8:
        case -8:
          if (a === "f") return e == 8 ? (t = kt(this, this.l)) : (t = kt([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0)), (this.l += 8), t;
          e = 8;
        case 16:
          r = gs(this, this.l, e);
          break;
      }
  }
  return (this.l += e), r;
}
var af = function (e, a, r) {
    (e[r] = a & 255), (e[r + 1] = (a >>> 8) & 255), (e[r + 2] = (a >>> 16) & 255), (e[r + 3] = (a >>> 24) & 255);
  },
  tf = function (e, a, r) {
    (e[r] = a & 255), (e[r + 1] = (a >> 8) & 255), (e[r + 2] = (a >> 16) & 255), (e[r + 3] = (a >> 24) & 255);
  },
  nf = function (e, a, r) {
    (e[r] = a & 255), (e[r + 1] = (a >>> 8) & 255);
  };
function sf(e, a, r) {
  var n = 0,
    t = 0;
  if (r === "dbcs") {
    for (t = 0; t != a.length; ++t) nf(this, a.charCodeAt(t), this.l + 2 * t);
    n = 2 * a.length;
  } else if (r === "sbcs") {
    for (a = a.replace(/[^\x00-\x7F]/g, "_"), t = 0; t != a.length; ++t) this[this.l + t] = a.charCodeAt(t) & 255;
    n = a.length;
  } else if (r === "hex") {
    for (; t < e; ++t) this[this.l++] = parseInt(a.slice(2 * t, 2 * t + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (t = 0; t < Math.min(a.length, e); ++t) {
      var i = a.charCodeAt(t);
      (this[this.l++] = i & 255), (this[this.l++] = i >> 8);
    }
    for (; this.l < s; ) this[this.l++] = 0;
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
        (n = 4), af(this, a, this.l);
        break;
      case 8:
        if (((n = 8), r === "f")) {
          Qc(this, a, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), tf(this, a, this.l);
        break;
    }
  return (this.l += n), this;
}
function Os(e, a) {
  var r = gs(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(a + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function ze(e, a) {
  (e.l = a), (e.read_shift = Ma), (e.chk = Os), (e.write_shift = sf);
}
function er(e, a) {
  e.l += a;
}
function He(e) {
  var a = jr(e);
  return ze(a, 0), a;
}
function Hr(e, a, r) {
  if (e) {
    var n, t, s;
    ze(e, e.l || 0);
    for (var i = e.length, c = 0, f = 0; e.l < i; ) {
      (c = e.read_shift(1)), c & 128 && (c = (c & 127) + ((e.read_shift(1) & 127) << 7));
      var l = yt[c] || yt[65535];
      for (n = e.read_shift(1), s = n & 127, t = 1; t < 4 && n & 128; ++t) s += ((n = e.read_shift(1)) & 127) << (7 * t);
      f = e.l + s;
      var o = l.f && l.f(e, s, r);
      if (((e.l = f), a(o, l, c))) return;
    }
  }
}
function zt() {
  var e = [],
    a = ge ? 256 : 2048,
    r = function (l) {
      var o = He(l);
      return ze(o, 0), o;
    },
    n = r(a),
    t = function () {
      n && (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)), n.length > 0 && e.push(n), (n = null));
    },
    s = function (l) {
      return n && l < n.length - n.l ? n : (t(), (n = r(Math.max(l + 1, a))));
    },
    i = function () {
      return t(), zr(e);
    },
    c = function (l) {
      t(), (n = l), n.l == null && (n.l = n.length), s(a);
    };
  return { next: s, push: c, end: i, _bufs: e };
}
function Ba(e, a, r) {
  var n = $e(e);
  if ((a.s ? (n.cRel && (n.c += a.s.c), n.rRel && (n.r += a.s.r)) : (n.cRel && (n.c += a.c), n.rRel && (n.r += a.r)), !r || r.biff < 12)) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function sn(e, a, r) {
  var n = $e(e);
  return (n.s = Ba(n.s, a.s, r)), (n.e = Ba(n.e, a.s, r)), n;
}
function ba(e, a) {
  if (e.cRel && e.c < 0) for (e = $e(e); e.c < 0; ) e.c += a > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = $e(e); e.r < 0; ) e.r += a > 8 ? 1048576 : a > 5 ? 65536 : 16384;
  var r = he(e);
  return !e.cRel && e.cRel != null && (r = of(r)), !e.rRel && e.rRel != null && (r = cf(r)), r;
}
function Bt(e, a) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (a.biff >= 12 ? 1048575 : a.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ve(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ve(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (a.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Ke(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Ke(e.e.r) : ba(e.s, a.biff) + ":" + ba(e.e, a.biff);
}
function x0(e) {
  return parseInt(ff(e), 10) - 1;
}
function Ke(e) {
  return "" + (e + 1);
}
function cf(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function ff(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function d0(e) {
  for (var a = lf(e), r = 0, n = 0; n !== a.length; ++n) r = 26 * r + a.charCodeAt(n) - 64;
  return r - 1;
}
function Ve(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var a = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) a = String.fromCharCode(((e - 1) % 26) + 65) + a;
  return a;
}
function of(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function lf(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function uf(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function sr(e) {
  for (var a = 0, r = 0, n = 0; n < e.length; ++n) {
    var t = e.charCodeAt(n);
    t >= 48 && t <= 57 ? (a = 10 * a + (t - 48)) : t >= 65 && t <= 90 && (r = 26 * r + (t - 64));
  }
  return { c: r - 1, r: a - 1 };
}
function he(e) {
  for (var a = e.c + 1, r = ""; a; a = ((a - 1) / 26) | 0) r = String.fromCharCode(((a - 1) % 26) + 65) + r;
  return r + (e.r + 1);
}
function Aa(e) {
  var a = e.indexOf(":");
  return a == -1 ? { s: sr(e), e: sr(e) } : { s: sr(e.slice(0, a)), e: sr(e.slice(a + 1)) };
}
function _e(e, a) {
  return typeof a > "u" || typeof a == "number" ? _e(e.s, e.e) : (typeof e != "string" && (e = he(e)), typeof a != "string" && (a = he(a)), e == a ? e : e + ":" + a);
}
function Oe(e) {
  var a = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    r = 0,
    n = 0,
    t = 0,
    s = e.length;
  for (r = 0; n < s && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n) r = 26 * r + t;
  for (a.s.c = --r, r = 0; n < s && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n) r = 10 * r + t;
  if (((a.s.r = --r), n === s || t != 10)) return (a.e.c = a.s.c), (a.e.r = a.s.r), a;
  for (++n, r = 0; n != s && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n) r = 26 * r + t;
  for (a.e.c = --r, r = 0; n != s && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n) r = 10 * r + t;
  return (a.e.r = --r), a;
}
function cn(e, a) {
  var r = e.t == "d" && a instanceof Date;
  if (e.z != null)
    try {
      return (e.w = mr(e.z, r ? cr(a) : a));
    } catch {}
  try {
    return (e.w = mr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? cr(a) : a));
  } catch {
    return "" + a;
  }
}
function Ur(e, a, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? ha[e.v] || e.v : a == null ? cn(e, e.v) : cn(e, a));
}
function Zr(e, a) {
  var r = a && a.sheet ? a.sheet : "Sheet1",
    n = {};
  return (n[r] = e), { SheetNames: [r], Sheets: n };
}
function Rs(e, a, r) {
  var n = r || {},
    t = e ? Array.isArray(e) : n.dense,
    s = e || (t ? [] : {}),
    i = 0,
    c = 0;
  if (s && n.origin != null) {
    if (typeof n.origin == "number") i = n.origin;
    else {
      var f = typeof n.origin == "string" ? sr(n.origin) : n.origin;
      (i = f.r), (c = f.c);
    }
    s["!ref"] || (s["!ref"] = "A1:A1");
  }
  var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (s["!ref"]) {
    var o = Oe(s["!ref"]);
    (l.s.c = o.s.c), (l.s.r = o.s.r), (l.e.c = Math.max(l.e.c, o.e.c)), (l.e.r = Math.max(l.e.r, o.e.r)), i == -1 && (l.e.r = i = o.e.r + 1);
  }
  for (var u = 0; u != a.length; ++u)
    if (a[u]) {
      if (!Array.isArray(a[u])) throw new Error("aoa_to_sheet expects an array of arrays");
      for (var x = 0; x != a[u].length; ++x)
        if (!(typeof a[u][x] > "u")) {
          var d = { v: a[u][x] },
            v = i + u,
            h = c + x;
          if ((l.s.r > v && (l.s.r = v), l.s.c > h && (l.s.c = h), l.e.r < v && (l.e.r = v), l.e.c < h && (l.e.c = h), a[u][x] && typeof a[u][x] == "object" && !Array.isArray(a[u][x]) && !(a[u][x] instanceof Date))) d = a[u][x];
          else if ((Array.isArray(d.v) && ((d.f = a[u][x][1]), (d.v = d.v[0])), d.v === null))
            if (d.f) d.t = "n";
            else if (n.nullError) (d.t = "e"), (d.v = 0);
            else if (n.sheetStubs) d.t = "z";
            else continue;
          else typeof d.v == "number" ? (d.t = "n") : typeof d.v == "boolean" ? (d.t = "b") : d.v instanceof Date ? ((d.z = n.dateNF || de[14]), n.cellDates ? ((d.t = "d"), (d.w = mr(d.z, cr(d.v)))) : ((d.t = "n"), (d.v = cr(d.v)), (d.w = mr(d.z, d.v)))) : (d.t = "s");
          if (t) s[v] || (s[v] = []), s[v][h] && s[v][h].z && (d.z = s[v][h].z), (s[v][h] = d);
          else {
            var g = he({ c: h, r: v });
            s[g] && s[g].z && (d.z = s[g].z), (s[g] = d);
          }
        }
    }
  return l.s.c < 1e7 && (s["!ref"] = _e(l)), s;
}
function Fa(e, a) {
  return Rs(null, e, a);
}
function hf(e) {
  return e.read_shift(4, "i");
}
function Qe(e) {
  var a = e.read_shift(4);
  return a === 0 ? "" : e.read_shift(a, "dbcs");
}
function xf(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function v0(e, a) {
  var r = e.l,
    n = e.read_shift(1),
    t = Qe(e),
    s = [],
    i = { t, h: t };
  if (n & 1) {
    for (var c = e.read_shift(4), f = 0; f != c; ++f) s.push(xf(e));
    i.r = s;
  } else i.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = r + a), i;
}
var df = v0;
function _r(e) {
  var a = e.read_shift(4),
    r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: a, iStyleRef: r };
}
function la(e) {
  var a = e.read_shift(2);
  return (a += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: a };
}
var vf = Qe;
function p0(e) {
  var a = e.read_shift(4);
  return a === 0 || a === 4294967295 ? "" : e.read_shift(a, "dbcs");
}
var pf = Qe,
  $t = p0;
function g0(e) {
  var a = e.slice(e.l, e.l + 4),
    r = a[0] & 1,
    n = a[0] & 2;
  e.l += 4;
  var t = n === 0 ? kt([0, 0, 0, 0, a[0] & 252, a[1], a[2], a[3]], 0) : ra(a, 0) >> 2;
  return r ? t / 100 : t;
}
function Is(e) {
  var a = { s: {}, e: {} };
  return (a.s.r = e.read_shift(4)), (a.e.r = e.read_shift(4)), (a.s.c = e.read_shift(4)), (a.e.c = e.read_shift(4)), a;
}
var ua = Is;
function Ze(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function gf(e) {
  var a = {},
    r = e.read_shift(1),
    n = r >>> 1,
    t = e.read_shift(1),
    s = e.read_shift(2, "i"),
    i = e.read_shift(1),
    c = e.read_shift(1),
    f = e.read_shift(1);
  switch ((e.l++, n)) {
    case 0:
      a.auto = 1;
      break;
    case 1:
      a.index = t;
      var l = na[t];
      l && (a.rgb = ja(l));
      break;
    case 2:
      a.rgb = ja([i, c, f]);
      break;
    case 3:
      a.theme = t;
      break;
  }
  return s != 0 && (a.tint = s > 0 ? s / 32767 : s / 32768), a;
}
function mf(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = { fBold: a & 1, fItalic: a & 2, fUnderline: a & 4, fStrikeout: a & 8, fOutline: a & 16, fShadow: a & 32, fCondense: a & 64, fExtend: a & 128 };
  return r;
}
function Ns(e, a) {
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
function _f(e) {
  return Ns(e, 1);
}
function Ef(e) {
  return Ns(e, 2);
}
var m0 = 2,
  fr = 3,
  ot = 11,
  fn = 12,
  wt = 19,
  lt = 64,
  Tf = 65,
  kf = 71,
  wf = 4108,
  Af = 4126,
  Ge = 80,
  Ps = 81,
  Ff = [Ge, Ps],
  Sf = {
    1: { n: "CodePage", t: m0 },
    2: { n: "Category", t: Ge },
    3: { n: "PresentationFormat", t: Ge },
    4: { n: "ByteCount", t: fr },
    5: { n: "LineCount", t: fr },
    6: { n: "ParagraphCount", t: fr },
    7: { n: "SlideCount", t: fr },
    8: { n: "NoteCount", t: fr },
    9: { n: "HiddenCount", t: fr },
    10: { n: "MultimediaClipCount", t: fr },
    11: { n: "ScaleCrop", t: ot },
    12: { n: "HeadingPairs", t: wf },
    13: { n: "TitlesOfParts", t: Af },
    14: { n: "Manager", t: Ge },
    15: { n: "Company", t: Ge },
    16: { n: "LinksUpToDate", t: ot },
    17: { n: "CharacterCount", t: fr },
    19: { n: "SharedDoc", t: ot },
    22: { n: "HyperlinksChanged", t: ot },
    23: { n: "AppVersion", t: fr, p: "version" },
    24: { n: "DigSig", t: Tf },
    26: { n: "ContentType", t: Ge },
    27: { n: "ContentStatus", t: Ge },
    28: { n: "Language", t: Ge },
    29: { n: "Version", t: Ge },
    255: {},
    2147483648: { n: "Locale", t: wt },
    2147483651: { n: "Behavior", t: wt },
    1919054434: {},
  },
  Cf = {
    1: { n: "CodePage", t: m0 },
    2: { n: "Title", t: Ge },
    3: { n: "Subject", t: Ge },
    4: { n: "Author", t: Ge },
    5: { n: "Keywords", t: Ge },
    6: { n: "Comments", t: Ge },
    7: { n: "Template", t: Ge },
    8: { n: "LastAuthor", t: Ge },
    9: { n: "RevNumber", t: Ge },
    10: { n: "EditTime", t: lt },
    11: { n: "LastPrinted", t: lt },
    12: { n: "CreatedDate", t: lt },
    13: { n: "ModifiedDate", t: lt },
    14: { n: "PageCount", t: fr },
    15: { n: "WordCount", t: fr },
    16: { n: "CharCount", t: fr },
    17: { n: "Thumbnail", t: kf },
    18: { n: "Application", t: Ge },
    19: { n: "DocSecurity", t: fr },
    255: {},
    2147483648: { n: "Locale", t: wt },
    2147483651: { n: "Behavior", t: wt },
    1919054434: {},
  },
  on = {
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
  yf = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function Df(e) {
  return e.map(function (a) {
    return [(a >> 16) & 255, (a >> 8) & 255, a & 255];
  });
}
var Of = Df([
    0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606,
    13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  na = $e(Of),
  ha = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" },
  Ls = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 },
  ln = {
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
function Rf() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function If(e) {
  var a = Rf();
  if (!e || !e.match) return a;
  var r = {};
  if (
    ((e.match(rr) || []).forEach(function (n) {
      var t = oe(n);
      switch (t[0].replace(Uc, "<")) {
        case "<?xml":
          break;
        case "<Types":
          a.xmlns = t["xmlns" + (t[0].match(/<(\w+):/) || ["", ""])[1]];
          break;
        case "<Default":
          r[t.Extension] = t.ContentType;
          break;
        case "<Override":
          a[ln[t.ContentType]] !== void 0 && a[ln[t.ContentType]].push(t.PartName);
          break;
      }
    }),
    a.xmlns !== Jc.CT)
  )
    throw new Error("Unknown Namespace: " + a.xmlns);
  return (a.calcchain = a.calcchains.length > 0 ? a.calcchains[0] : ""), (a.sst = a.strs.length > 0 ? a.strs[0] : ""), (a.style = a.styles.length > 0 ? a.styles[0] : ""), (a.defaults = r), delete a.calcchains, a;
}
var ga = {
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
function Kt(e) {
  var a = e.lastIndexOf("/");
  return e.slice(0, a + 1) + "_rels/" + e.slice(a + 1) + ".rels";
}
function Ua(e, a) {
  var r = { "!id": {} };
  if (!e) return r;
  a.charAt(0) !== "/" && (a = "/" + a);
  var n = {};
  return (
    (e.match(rr) || []).forEach(function (t) {
      var s = oe(t);
      if (s[0] === "<Relationship") {
        var i = {};
        (i.Type = s.Type), (i.Target = s.Target), (i.Id = s.Id), s.TargetMode && (i.TargetMode = s.TargetMode);
        var c = s.TargetMode === "External" ? s.Target : Na(s.Target, a);
        (r[c] = i), (n[s.Id] = i);
      }
    }),
    (r["!id"] = n),
    r
  );
}
var Nf = "application/vnd.oasis.opendocument.spreadsheet";
function Pf(e, a) {
  for (var r = u0(e), n, t; (n = Ka.exec(r)); )
    switch (n[3]) {
      case "manifest":
        break;
      case "file-entry":
        if (((t = oe(n[0], !1)), t.path == "/" && t.type !== Nf)) throw new Error("This OpenDocument is not a spreadsheet");
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
var Ha = [
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
  Lf = (function () {
    for (var e = new Array(Ha.length), a = 0; a < Ha.length; ++a) {
      var r = Ha[a],
        n = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
      e[a] = new RegExp("<" + n + "[^>]*>([\\s\\S]*?)</" + n + ">");
    }
    return e;
  })();
function Ms(e) {
  var a = {};
  e = Ae(e);
  for (var r = 0; r < Ha.length; ++r) {
    var n = Ha[r],
      t = e.match(Lf[r]);
    t != null && t.length > 0 && (a[n[1]] = Te(t[1])), n[2] === "date" && a[n[1]] && (a[n[1]] = Xe(a[n[1]]));
  }
  return a;
}
var Mf = [
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
function Bs(e, a, r, n) {
  var t = [];
  if (typeof e == "string") t = Q0(e, n);
  else
    for (var s = 0; s < e.length; ++s)
      t = t.concat(
        e[s].map(function (o) {
          return { v: o };
        })
      );
  var i =
      typeof a == "string"
        ? Q0(a, n).map(function (o) {
            return o.v;
          })
        : a,
    c = 0,
    f = 0;
  if (i.length > 0)
    for (var l = 0; l !== t.length; l += 2) {
      switch (((f = +t[l + 1].v), t[l].v)) {
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
          (r.Worksheets = f), (r.SheetNames = i.slice(c, c + f));
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "名前付き一覧":
        case "Benannte Bereiche":
        case "Navngivne områder":
          (r.NamedRanges = f), (r.DefinedNames = i.slice(c, c + f));
          break;
        case "Charts":
        case "Diagramme":
          (r.Chartsheets = f), (r.ChartNames = i.slice(c, c + f));
          break;
      }
      c += f;
    }
}
function Bf(e, a, r) {
  var n = {};
  return (
    a || (a = {}),
    (e = Ae(e)),
    Mf.forEach(function (t) {
      var s = (e.match($a(t[0])) || [])[1];
      switch (t[2]) {
        case "string":
          s && (a[t[1]] = Te(s));
          break;
        case "bool":
          a[t[1]] = s === "true";
          break;
        case "raw":
          var i = e.match(new RegExp("<" + t[0] + "[^>]*>([\\s\\S]*?)</" + t[0] + ">"));
          i && i.length > 0 && (n[t[1]] = i[1]);
          break;
      }
    }),
    n.HeadingPairs && n.TitlesOfParts && Bs(n.HeadingPairs, n.TitlesOfParts, a, r),
    a
  );
}
var bf = /<[^>]+>[^<]*/g;
function Uf(e, a) {
  var r = {},
    n = "",
    t = e.match(bf);
  if (t)
    for (var s = 0; s != t.length; ++s) {
      var i = t[s],
        c = oe(i);
      switch (c[0]) {
        case "<?xml":
          break;
        case "<Properties":
          break;
        case "<property":
          n = Te(c.name);
          break;
        case "</property>":
          n = null;
          break;
        default:
          if (i.indexOf("<vt:") === 0) {
            var f = i.split(">"),
              l = f[0].slice(4),
              o = f[1];
            switch (l) {
              case "lpstr":
              case "bstr":
              case "lpwstr":
                r[n] = Te(o);
                break;
              case "bool":
                r[n] = Se(o);
                break;
              case "i1":
              case "i2":
              case "i4":
              case "i8":
              case "int":
              case "uint":
                r[n] = parseInt(o, 10);
                break;
              case "r4":
              case "r8":
              case "decimal":
                r[n] = parseFloat(o);
                break;
              case "filetime":
              case "date":
                r[n] = Xe(o);
                break;
              case "cy":
              case "error":
                r[n] = Te(o);
                break;
              default:
                if (l.slice(-1) == "/") break;
                a.WTF && typeof console < "u" && console.warn("Unexpected", i, l, f);
            }
          } else if (i.slice(0, 2) !== "</") {
            if (a.WTF) throw new Error(i);
          }
      }
    }
  return r;
}
var Hf = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" },
  bt;
function Vf(e, a, r) {
  bt || (bt = f0(Hf)), (a = bt[a] || a), (e[a] = r);
}
function _0(e) {
  var a = e.read_shift(4),
    r = e.read_shift(4);
  return new Date(((r / 1e7) * Math.pow(2, 32) + a / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function bs(e, a, r) {
  var n = e.l,
    t = e.read_shift(0, "lpstr-cp");
  if (r) for (; (e.l - n) & 3; ) ++e.l;
  return t;
}
function Us(e, a, r) {
  var n = e.read_shift(0, "lpwstr");
  return r && (e.l += (4 - ((n.length + 1) & 3)) & 3), n;
}
function Hs(e, a, r) {
  return a === 31 ? Us(e) : bs(e, a, r);
}
function Yt(e, a, r) {
  return Hs(e, a, r === !1 ? 0 : 4);
}
function Wf(e, a) {
  if (!a) throw new Error("VtUnalignedString must have positive length");
  return Hs(e, a, 0);
}
function Gf(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) {
    var t = e.l;
    (r[n] = e.read_shift(0, "lpwstr").replace(ir, "")), (e.l - t) & 2 && (e.l += 2);
  }
  return r;
}
function Xf(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) r[n] = e.read_shift(0, "lpstr-cp").replace(ir, "");
  return r;
}
function zf(e) {
  var a = e.l,
    r = At(e, Ps);
  e[e.l] == 0 && e[e.l + 1] == 0 && (e.l - a) & 2 && (e.l += 2);
  var n = At(e, fr);
  return [r, n];
}
function $f(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n < a / 2; ++n) r.push(zf(e));
  return r;
}
function un(e, a) {
  for (var r = e.read_shift(4), n = {}, t = 0; t != r; ++t) {
    var s = e.read_shift(4),
      i = e.read_shift(4);
    (n[s] = e
      .read_shift(i, a === 1200 ? "utf16le" : "utf8")
      .replace(ir, "")
      .replace(Ia, "!")),
      a === 1200 && i % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = (e.l >> (2 + 1)) << 2), n;
}
function Vs(e) {
  var a = e.read_shift(4),
    r = e.slice(e.l, e.l + a);
  return (e.l += a), (a & 3) > 0 && (e.l += (4 - (a & 3)) & 3), r;
}
function Kf(e) {
  var a = {};
  return (a.Size = e.read_shift(4)), (e.l += a.Size + 3 - ((a.Size - 1) % 4)), a;
}
function At(e, a, r) {
  var n = e.read_shift(2),
    t,
    s = r || {};
  if (((e.l += 2), a !== fn && n !== a && Ff.indexOf(a) === -1 && !((a & 65534) == 4126 && (n & 65534) == 4126))) throw new Error("Expected type " + a + " saw " + n);
  switch (a === fn ? n : a) {
    case 2:
      return (t = e.read_shift(2, "i")), s.raw || (e.l += 2), t;
    case 3:
      return (t = e.read_shift(4, "i")), t;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return (t = e.read_shift(4)), t;
    case 30:
      return bs(e, n, 4).replace(ir, "");
    case 31:
      return Us(e);
    case 64:
      return _0(e);
    case 65:
      return Vs(e);
    case 71:
      return Kf(e);
    case 80:
      return Yt(e, n, !s.raw).replace(ir, "");
    case 81:
      return Wf(e, n).replace(ir, "");
    case 4108:
      return $f(e);
    case 4126:
    case 4127:
      return n == 4127 ? Gf(e) : Xf(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + a + " " + n);
  }
}
function hn(e, a) {
  var r = e.l,
    n = e.read_shift(4),
    t = e.read_shift(4),
    s = [],
    i = 0,
    c = 0,
    f = -1,
    l = {};
  for (i = 0; i != t; ++i) {
    var o = e.read_shift(4),
      u = e.read_shift(4);
    s[i] = [o, u + r];
  }
  s.sort(function (y, _) {
    return y[1] - _[1];
  });
  var x = {};
  for (i = 0; i != t; ++i) {
    if (e.l !== s[i][1]) {
      var d = !0;
      if (i > 0 && a)
        switch (a[s[i - 1][0]].t) {
          case 2:
            e.l + 2 === s[i][1] && ((e.l += 2), (d = !1));
            break;
          case 80:
            e.l <= s[i][1] && ((e.l = s[i][1]), (d = !1));
            break;
          case 4108:
            e.l <= s[i][1] && ((e.l = s[i][1]), (d = !1));
            break;
        }
      if (((!a || i == 0) && e.l <= s[i][1] && ((d = !1), (e.l = s[i][1])), d)) throw new Error("Read Error: Expected address " + s[i][1] + " at " + e.l + " :" + i);
    }
    if (a) {
      var v = a[s[i][0]];
      if (((x[v.n] = At(e, v.t, { raw: !0 })), v.p === "version" && (x[v.n] = String(x[v.n] >> 16) + "." + ("0000" + String(x[v.n] & 65535)).slice(-4)), v.n == "CodePage"))
        switch (x[v.n]) {
          case 0:
            x[v.n] = 1252;
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
            wr((c = (x[v.n] >>> 0) & 65535));
            break;
          default:
            throw new Error("Unsupported CodePage: " + x[v.n]);
        }
    } else if (s[i][0] === 1) {
      if (((c = x.CodePage = At(e, m0)), wr(c), f !== -1)) {
        var h = e.l;
        (e.l = s[f][1]), (l = un(e, c)), (e.l = h);
      }
    } else if (s[i][0] === 0) {
      if (c === 0) {
        (f = i), (e.l = s[i + 1][1]);
        continue;
      }
      l = un(e, c);
    } else {
      var g = l[s[i][0]],
        A;
      switch (e[e.l]) {
        case 65:
          (e.l += 4), (A = Vs(e));
          break;
        case 30:
          (e.l += 4), (A = Yt(e, e[e.l - 4]).replace(/\u0000+$/, ""));
          break;
        case 31:
          (e.l += 4), (A = Yt(e, e[e.l - 4]).replace(/\u0000+$/, ""));
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
          (e.l += 4), (A = Xe(_0(e)));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      x[g] = A;
    }
  }
  return (e.l = r + n), x;
}
function xn(e, a, r) {
  var n = e.content;
  if (!n) return {};
  ze(n, 0);
  var t,
    s,
    i,
    c,
    f = 0;
  n.chk("feff", "Byte Order: "), n.read_shift(2);
  var l = n.read_shift(4),
    o = n.read_shift(16);
  if (o !== me.utils.consts.HEADER_CLSID && o !== r) throw new Error("Bad PropertySet CLSID " + o);
  if (((t = n.read_shift(4)), t !== 1 && t !== 2)) throw new Error("Unrecognized #Sets: " + t);
  if (((s = n.read_shift(16)), (c = n.read_shift(4)), t === 1 && c !== n.l)) throw new Error("Length mismatch: " + c + " !== " + n.l);
  t === 2 && ((i = n.read_shift(16)), (f = n.read_shift(4)));
  var u = hn(n, a),
    x = { SystemIdentifier: l };
  for (var d in u) x[d] = u[d];
  if (((x.FMTID = s), t === 1)) return x;
  if ((f - n.l == 2 && (n.l += 2), n.l !== f)) throw new Error("Length mismatch 2: " + n.l + " !== " + f);
  var v;
  try {
    v = hn(n, null);
  } catch {}
  for (d in v) x[d] = v[d];
  return (x.FMTID = [s, i]), x;
}
function Gr(e, a) {
  return e.read_shift(a), null;
}
function Yf(e, a, r) {
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
function Ws(e, a) {
  return Yf(e, a, be);
}
function jf(e) {
  var a = e.read_shift(1),
    r = e.read_shift(1);
  return r === 1 ? a : a === 1;
}
function rt(e, a, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1),
    t = "sbcs-cont";
  if ((r && r.biff >= 8, !r || r.biff == 8)) {
    var s = e.read_shift(1);
    s && (t = "dbcs-cont");
  } else r.biff == 12 && (t = "wstr");
  r.biff >= 2 && r.biff <= 5 && (t = "cpstr");
  var i = n ? e.read_shift(n, t) : "";
  return i;
}
function Jf(e) {
  var a = e.read_shift(2),
    r = e.read_shift(1),
    n = r & 4,
    t = r & 8,
    s = 1 + (r & 1),
    i = 0,
    c,
    f = {};
  t && (i = e.read_shift(2)), n && (c = e.read_shift(4));
  var l = s == 2 ? "dbcs-cont" : "sbcs-cont",
    o = a === 0 ? "" : e.read_shift(a, l);
  return t && (e.l += 4 * i), n && (e.l += c), (f.t = o), t || ((f.raw = "<t>" + f.t + "</t>"), (f.r = f.t)), f;
}
function ca(e, a, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(a, "cpstr");
    if (r.biff >= 12) return e.read_shift(a, "dbcs-cont");
  }
  var t = e.read_shift(1);
  return t === 0 ? (n = e.read_shift(a, "sbcs-cont")) : (n = e.read_shift(a, "dbcs-cont")), n;
}
function at(e, a, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : ca(e, n, r);
}
function xa(e, a, r) {
  if (r.biff > 5) return at(e, a, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Zf(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return (e.l += 2), [a, r];
}
function qf(e) {
  var a = e.read_shift(4),
    r = e.l,
    n = !1;
  a > 24 && ((e.l += a - 24), e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (n = !0), (e.l = r));
  var t = e.read_shift((n ? a - 24 : a) >> 1, "utf16le").replace(ir, "");
  return n && (e.l += 24), t;
}
function Qf(e) {
  for (var a = e.read_shift(2), r = ""; a-- > 0; ) r += "../";
  var n = e.read_shift(0, "lpstr-ansi");
  if (((e.l += 2), e.read_shift(2) != 57005)) throw new Error("Bad FileMoniker");
  var t = e.read_shift(4);
  if (t === 0) return r + n.replace(/\\/g, "/");
  var s = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var i = e.read_shift(s >> 1, "utf16le").replace(ir, "");
  return r + i;
}
function eo(e, a) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return qf(e);
    case "0303000000000000c000000000000046":
      return Qf(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function ut(e) {
  var a = e.read_shift(4),
    r = a > 0 ? e.read_shift(a, "utf16le").replace(ir, "") : "";
  return r;
}
function ro(e, a) {
  var r = e.l + a,
    n = e.read_shift(4);
  if (n !== 2) throw new Error("Unrecognized streamVersion: " + n);
  var t = e.read_shift(2);
  e.l += 2;
  var s,
    i,
    c,
    f,
    l = "",
    o,
    u;
  t & 16 && (s = ut(e, r - e.l)), t & 128 && (i = ut(e, r - e.l)), (t & 257) === 257 && (c = ut(e, r - e.l)), (t & 257) === 1 && (f = eo(e, r - e.l)), t & 8 && (l = ut(e, r - e.l)), t & 32 && (o = e.read_shift(16)), t & 64 && (u = _0(e)), (e.l = r);
  var x = i || c || f || "";
  x && l && (x += "#" + l), x || (x = "#" + l), t & 2 && x.charAt(0) == "/" && x.charAt(1) != "/" && (x = "file://" + x);
  var d = { Target: x };
  return o && (d.guid = o), u && (d.time = u), s && (d.Tooltip = s), d;
}
function Gs(e) {
  var a = e.read_shift(1),
    r = e.read_shift(1),
    n = e.read_shift(1),
    t = e.read_shift(1);
  return [a, r, n, t];
}
function Xs(e, a) {
  var r = Gs(e);
  return (r[3] = 0), r;
}
function Ir(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2);
  return { r: a, c: r, ixfe: n };
}
function ao(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2);
  return (e.l += 8), { type: a, flags: r };
}
function to(e, a, r) {
  return a === 0 ? "" : xa(e, a, r);
}
function no(e, a, r) {
  var n = r.biff > 8 ? 4 : 2,
    t = e.read_shift(n),
    s = e.read_shift(n, "i"),
    i = e.read_shift(n, "i");
  return [t, s, i];
}
function zs(e) {
  var a = e.read_shift(2),
    r = g0(e);
  return [a, r];
}
function so(e, a, r) {
  (e.l += 4), (a -= 4);
  var n = e.l + a,
    t = rt(e, a, r),
    s = e.read_shift(2);
  if (((n -= e.l), s !== n)) throw new Error("Malformed AddinUdf: padding = " + n + " != " + s);
  return (e.l += s), t;
}
function Ot(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    t = e.read_shift(2);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
function $s(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(1),
    t = e.read_shift(1);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
var io = $s;
function Ks(e) {
  e.l += 4;
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2);
  return (e.l += 12), [r, a, n];
}
function co(e) {
  var a = {};
  return (e.l += 4), (e.l += 16), (a.fSharedNote = e.read_shift(2)), (e.l += 4), a;
}
function fo(e) {
  var a = {};
  return (e.l += 4), (e.cf = e.read_shift(2)), a;
}
function je(e) {
  (e.l += 2), (e.l += e.read_shift(2));
}
var oo = { 0: je, 4: je, 5: je, 6: je, 7: fo, 8: je, 9: je, 10: je, 11: je, 12: je, 13: co, 14: je, 15: je, 16: je, 17: je, 18: je, 19: je, 20: je, 21: Ks };
function lo(e, a) {
  for (var r = e.l + a, n = []; e.l < r; ) {
    var t = e.read_shift(2);
    e.l -= 2;
    try {
      n.push(oo[t](e, r - e.l));
    } catch {
      return (e.l = r), n;
    }
  }
  return e.l != r && (e.l = r), n;
}
function ht(e, a) {
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
function uo(e, a) {
  return a === 0 || e.read_shift(2), 1200;
}
function ho(e, a, r) {
  if (r.enc) return (e.l += a), "";
  var n = e.l,
    t = xa(e, 0, r);
  return e.read_shift(a + n - e.l), t;
}
function xo(e, a, r) {
  var n = (r && r.biff == 8) || a == 2 ? e.read_shift(2) : ((e.l += a), 0);
  return { fDialog: n & 16, fBelow: n & 64, fRight: n & 128 };
}
function vo(e, a, r) {
  var n = e.read_shift(4),
    t = e.read_shift(1) & 3,
    s = e.read_shift(1);
  switch (s) {
    case 0:
      s = "Worksheet";
      break;
    case 1:
      s = "Macrosheet";
      break;
    case 2:
      s = "Chartsheet";
      break;
    case 6:
      s = "VBAModule";
      break;
  }
  var i = rt(e, 0, r);
  return i.length === 0 && (i = "Sheet1"), { pos: n, hs: t, dt: s, name: i };
}
function po(e, a) {
  for (var r = e.l + a, n = e.read_shift(4), t = e.read_shift(4), s = [], i = 0; i != t && e.l < r; ++i) s.push(Jf(e));
  return (s.Count = n), (s.Unique = t), s;
}
function go(e, a) {
  var r = {};
  return (r.dsst = e.read_shift(2)), (e.l += a - 2), r;
}
function mo(e) {
  var a = {};
  (a.r = e.read_shift(2)), (a.c = e.read_shift(2)), (a.cnt = e.read_shift(2) - a.c);
  var r = e.read_shift(2);
  e.l += 4;
  var n = e.read_shift(1);
  return (e.l += 3), n & 7 && (a.level = n & 7), n & 32 && (a.hidden = !0), n & 64 && (a.hpt = r / 20), a;
}
function _o(e) {
  var a = ao(e);
  if (a.type != 2211) throw new Error("Invalid Future Record " + a.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function Eo(e) {
  return e.read_shift(2), e.read_shift(4);
}
function dn(e, a, r) {
  var n = 0;
  (r && r.biff == 2) || (n = e.read_shift(2));
  var t = e.read_shift(2);
  r && r.biff == 2 && ((n = 1 - (t >> 15)), (t &= 32767));
  var s = { Unsynced: n & 1, DyZero: (n & 2) >> 1, ExAsc: (n & 4) >> 2, ExDsc: (n & 8) >> 3 };
  return [s, t];
}
function To(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    t = e.read_shift(2),
    s = e.read_shift(2),
    i = e.read_shift(2),
    c = e.read_shift(2),
    f = e.read_shift(2),
    l = e.read_shift(2);
  return { Pos: [a, r], Dim: [n, t], Flags: s, CurTab: i, FirstTab: c, Selected: f, TabRatio: l };
}
function ko(e, a, r) {
  if (r && r.biff >= 2 && r.biff < 5) return {};
  var n = e.read_shift(2);
  return { RTL: n & 64 };
}
function wo() {}
function Ao(e, a, r) {
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
  return (n.name = rt(e, 0, r)), n;
}
function Fo(e) {
  var a = Ir(e);
  return (a.isst = e.read_shift(4)), a;
}
function So(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = e.l + a,
    t = Ir(e);
  r.biff == 2 && e.l++;
  var s = at(e, n - e.l, r);
  return (t.val = s), t;
}
function Co(e, a, r) {
  var n = e.read_shift(2),
    t = xa(e, 0, r);
  return [n, t];
}
var yo = xa;
function vn(e, a, r) {
  var n = e.l + a,
    t = r.biff == 8 || !r.biff ? 4 : 2,
    s = e.read_shift(t),
    i = e.read_shift(t),
    c = e.read_shift(2),
    f = e.read_shift(2);
  return (e.l = n), { s: { r: s, c }, e: { r: i, c: f } };
}
function Do(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = zs(e);
  return { r: a, c: r, ixfe: n[0], rknum: n[1] };
}
function Oo(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), s = []; e.l < r; ) s.push(zs(e));
  if (e.l !== r) throw new Error("MulRK read error");
  var i = e.read_shift(2);
  if (s.length != i - t + 1) throw new Error("MulRK length mismatch");
  return { r: n, c: t, C: i, rkrec: s };
}
function Ro(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), s = []; e.l < r; ) s.push(e.read_shift(2));
  if (e.l !== r) throw new Error("MulBlank read error");
  var i = e.read_shift(2);
  if (s.length != i - t + 1) throw new Error("MulBlank length mismatch");
  return { r: n, c: t, C: i, ixfe: s };
}
function Io(e, a, r, n) {
  var t = {},
    s = e.read_shift(4),
    i = e.read_shift(4),
    c = e.read_shift(4),
    f = e.read_shift(2);
  return (
    (t.patternType = yf[c >> 26]),
    n.cellStyles &&
      ((t.alc = s & 7),
      (t.fWrap = (s >> 3) & 1),
      (t.alcV = (s >> 4) & 7),
      (t.fJustLast = (s >> 7) & 1),
      (t.trot = (s >> 8) & 255),
      (t.cIndent = (s >> 16) & 15),
      (t.fShrinkToFit = (s >> 20) & 1),
      (t.iReadOrder = (s >> 22) & 2),
      (t.fAtrNum = (s >> 26) & 1),
      (t.fAtrFnt = (s >> 27) & 1),
      (t.fAtrAlc = (s >> 28) & 1),
      (t.fAtrBdr = (s >> 29) & 1),
      (t.fAtrPat = (s >> 30) & 1),
      (t.fAtrProt = (s >> 31) & 1),
      (t.dgLeft = i & 15),
      (t.dgRight = (i >> 4) & 15),
      (t.dgTop = (i >> 8) & 15),
      (t.dgBottom = (i >> 12) & 15),
      (t.icvLeft = (i >> 16) & 127),
      (t.icvRight = (i >> 23) & 127),
      (t.grbitDiag = (i >> 30) & 3),
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
function No(e, a, r) {
  var n = {};
  return (n.ifnt = e.read_shift(2)), (n.numFmtId = e.read_shift(2)), (n.flags = e.read_shift(2)), (n.fStyle = (n.flags >> 2) & 1), (a -= 6), (n.data = Io(e, a, n.fStyle, r)), n;
}
function Po(e) {
  e.l += 4;
  var a = [e.read_shift(2), e.read_shift(2)];
  if ((a[0] !== 0 && a[0]--, a[1] !== 0 && a[1]--, a[0] > 7 || a[1] > 7)) throw new Error("Bad Gutters: " + a.join("|"));
  return a;
}
function pn(e, a, r) {
  var n = Ir(e);
  (r.biff == 2 || a == 9) && ++e.l;
  var t = jf(e);
  return (n.val = t), (n.t = t === !0 || t === !1 ? "b" : "e"), n;
}
function Lo(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = Ir(e),
    t = Ze(e);
  return (n.val = t), n;
}
var gn = to;
function Mo(e, a, r) {
  var n = e.l + a,
    t = e.read_shift(2),
    s = e.read_shift(2);
  if (((r.sbcch = s), s == 1025 || s == 14849)) return [s, t];
  if (s < 1 || s > 255) throw new Error("Unexpected SupBook type: " + s);
  for (var i = ca(e, s), c = []; n > e.l; ) c.push(at(e));
  return [s, t, i, c];
}
function mn(e, a, r) {
  var n = e.read_shift(2),
    t,
    s = { fBuiltIn: n & 1, fWantAdvise: (n >>> 1) & 1, fWantPict: (n >>> 2) & 1, fOle: (n >>> 3) & 1, fOleLink: (n >>> 4) & 1, cf: (n >>> 5) & 1023, fIcon: (n >>> 15) & 1 };
  return r.sbcch === 14849 && (t = so(e, a - 2, r)), (s.body = t || e.read_shift(a - 2)), typeof t == "string" && (s.Name = t), s;
}
var Bo = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];
function _n(e, a, r) {
  var n = e.l + a,
    t = e.read_shift(2),
    s = e.read_shift(1),
    i = e.read_shift(1),
    c = e.read_shift(r && r.biff == 2 ? 1 : 2),
    f = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), (f = e.read_shift(2)), r.biff == 5 && (e.l += 2), (e.l += 4));
  var l = ca(e, i, r);
  t & 32 && (l = Bo[l.charCodeAt(0)]);
  var o = n - e.l;
  r && r.biff == 2 && --o;
  var u = n == e.l || c === 0 || !(o > 0) ? [] : mh(e, o, r, c);
  return { chKey: s, Name: l, itab: f, rgce: u };
}
function Ys(e, a, r) {
  if (r.biff < 8) return bo(e, a, r);
  for (var n = [], t = e.l + a, s = e.read_shift(r.biff > 8 ? 4 : 2); s-- !== 0; ) n.push(no(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != t) throw new Error("Bad ExternSheet: " + e.l + " != " + t);
  return n;
}
function bo(e, a, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = rt(e, a, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Uo(e, a, r) {
  if (r.biff < 8) {
    e.l += a;
    return;
  }
  var n = e.read_shift(2),
    t = e.read_shift(2),
    s = ca(e, n, r),
    i = ca(e, t, r);
  return [s, i];
}
function Ho(e, a, r) {
  var n = $s(e);
  e.l++;
  var t = e.read_shift(1);
  return (a -= 8), [_h(e, a, r), t, n];
}
function En(e, a, r) {
  var n = io(e);
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
  return [n, ph(e, a, r)];
}
function Vo(e) {
  var a = e.read_shift(4) !== 0,
    r = e.read_shift(4) !== 0,
    n = e.read_shift(4);
  return [a, r, n];
}
function Wo(e, a, r) {
  if (!(r.biff < 8)) {
    var n = e.read_shift(2),
      t = e.read_shift(2),
      s = e.read_shift(2),
      i = e.read_shift(2),
      c = xa(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: n, c: t }, c, i, s];
  }
}
function Go(e, a, r) {
  return Wo(e, a, r);
}
function Xo(e, a) {
  for (var r = [], n = e.read_shift(2); n--; ) r.push(Ot(e));
  return r;
}
function zo(e, a, r) {
  if (r && r.biff < 8) return Ko(e, a, r);
  var n = Ks(e),
    t = lo(e, a - 22, n[1]);
  return { cmo: n, ft: t };
}
var $o = {
  8: function (e, a) {
    var r = e.l + a;
    e.l += 10;
    var n = e.read_shift(2);
    (e.l += 4), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 4);
    var t = e.read_shift(1);
    return (e.l += t), (e.l = r), { fmt: n };
  },
};
function Ko(e, a, r) {
  e.l += 4;
  var n = e.read_shift(2),
    t = e.read_shift(2),
    s = e.read_shift(2);
  (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 6), (a -= 36);
  var i = [];
  return i.push(($o[n] || er)(e, a, r)), { cmo: [t, n, s], ft: i };
}
function Yo(e, a, r) {
  var n = e.l,
    t = "";
  try {
    e.l += 4;
    var s = (r.lastobj || { cmo: [0, 0] }).cmo[1],
      i;
    [0, 5, 7, 11, 12, 14].indexOf(s) == -1 ? (e.l += 6) : (i = Zf(e, 6, r));
    var c = e.read_shift(2);
    e.read_shift(2), be(e, 2);
    var f = e.read_shift(2);
    e.l += f;
    for (var l = 1; l < e.lens.length - 1; ++l) {
      if (e.l - n != e.lens[l]) throw new Error("TxO: bad continue record");
      var o = e[e.l],
        u = ca(e, e.lens[l + 1] - e.lens[l] - 1);
      if (((t += u), t.length >= (o ? c : 2 * c))) break;
    }
    if (t.length !== c && t.length !== c * 2) throw new Error("cchText: " + c + " != " + t.length);
    return (e.l = n + a), { t };
  } catch {
    return (e.l = n + a), { t };
  }
}
function jo(e, a) {
  var r = Ot(e);
  e.l += 16;
  var n = ro(e, a - 24);
  return [r, n];
}
function Jo(e, a) {
  e.read_shift(2);
  var r = Ot(e),
    n = e.read_shift((a - 10) / 2, "dbcs-cont");
  return (n = n.replace(ir, "")), [r, n];
}
function Zo(e) {
  var a = [0, 0],
    r;
  return (r = e.read_shift(2)), (a[0] = on[r] || r), (r = e.read_shift(2)), (a[1] = on[r] || r), a;
}
function qo(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(Xs(e));
  return r;
}
function Qo(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(Xs(e));
  return r;
}
function el(e) {
  e.l += 2;
  var a = { cxfs: 0, crc: 0 };
  return (a.cxfs = e.read_shift(2)), (a.crc = e.read_shift(4)), a;
}
function js(e, a, r) {
  if (!r.cellStyles) return er(e, a);
  var n = r && r.biff >= 12 ? 4 : 2,
    t = e.read_shift(n),
    s = e.read_shift(n),
    i = e.read_shift(n),
    c = e.read_shift(n),
    f = e.read_shift(2);
  n == 2 && (e.l += 2);
  var l = { s: t, e: s, w: i, ixfe: c, flags: f };
  return (r.biff >= 5 || !r.biff) && (l.level = (f >> 8) & 7), l;
}
function rl(e, a) {
  var r = {};
  return a < 32 || ((e.l += 16), (r.header = Ze(e)), (r.footer = Ze(e)), (e.l += 2)), r;
}
function al(e, a, r) {
  var n = { area: !1 };
  if (r.biff != 5) return (e.l += a), n;
  var t = e.read_shift(1);
  return (e.l += 3), t & 16 && (n.area = !0), n;
}
var tl = Ir,
  nl = Ws,
  sl = at;
function il(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    t = { fmt: a, env: r, len: n, data: e.slice(e.l, e.l + n) };
  return (e.l += n), t;
}
function cl(e, a, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var n = Ir(e);
  ++e.l;
  var t = xa(e, a - 7, r);
  return (n.t = "str"), (n.val = t), n;
}
function fl(e) {
  var a = Ir(e);
  ++e.l;
  var r = Ze(e);
  return (a.t = "n"), (a.val = r), a;
}
function ol(e) {
  var a = Ir(e);
  ++e.l;
  var r = e.read_shift(2);
  return (a.t = "n"), (a.val = r), a;
}
function ll(e) {
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, "sbcs-cont");
}
function ul(e, a) {
  (e.l += 6), (e.l += 2), (e.l += 1), (e.l += 3), (e.l += 1), (e.l += a - 13);
}
function hl(e, a, r) {
  var n = e.l + a,
    t = Ir(e),
    s = e.read_shift(2),
    i = ca(e, s, r);
  return (e.l = n), (t.t = "str"), (t.val = i), t;
}
var xl = [2, 3, 48, 49, 131, 139, 140, 245],
  Tn = (function () {
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
      a = f0({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
    function r(c, f) {
      var l = [],
        o = jr(1);
      switch (f.type) {
        case "base64":
          o = kr(hr(c));
          break;
        case "binary":
          o = kr(c);
          break;
        case "buffer":
        case "array":
          o = c;
          break;
      }
      ze(o, 0);
      var u = o.read_shift(1),
        x = !!(u & 136),
        d = !1,
        v = !1;
      switch (u) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          (d = !0), (x = !0);
          break;
        case 49:
          (d = !0), (x = !0);
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
          throw new Error("DBF Unsupported Version: " + u.toString(16));
      }
      var h = 0,
        g = 521;
      u == 2 && (h = o.read_shift(2)), (o.l += 3), u != 2 && (h = o.read_shift(4)), h > 1048576 && (h = 1e6), u != 2 && (g = o.read_shift(2));
      var A = o.read_shift(2),
        y = f.codepage || 1252;
      u != 2 && ((o.l += 16), o.read_shift(1), o[o.l] !== 0 && (y = e[o[o.l]]), (o.l += 1), (o.l += 2)), v && (o.l += 36);
      for (var _ = [], N = {}, b = Math.min(o.length, u == 2 ? 521 : g - 10 - (d ? 264 : 0)), R = v ? 32 : 11; o.l < b && o[o.l] != 13; )
        switch (((N = {}), (N.name = Xr.utils.decode(y, o.slice(o.l, o.l + R)).replace(/[\u0000\r\n].*$/g, "")), (o.l += R), (N.type = String.fromCharCode(o.read_shift(1))), u != 2 && !v && (N.offset = o.read_shift(4)), (N.len = o.read_shift(1)), u == 2 && (N.offset = o.read_shift(2)), (N.dec = o.read_shift(1)), N.name.length && _.push(N), u != 2 && (o.l += v ? 13 : 14), N.type)) {
          case "B":
            (!d || N.len != 8) && f.WTF && console.log("Skipping " + N.name + ":" + N.type);
            break;
          case "G":
          case "P":
            f.WTF && console.log("Skipping " + N.name + ":" + N.type);
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
            throw new Error("Unknown Field Type: " + N.type);
        }
      if ((o[o.l] !== 13 && (o.l = g - 1), o.read_shift(1) !== 13)) throw new Error("DBF Terminator not found " + o.l + " " + o[o.l]);
      o.l = g;
      var F = 0,
        W = 0;
      for (l[0] = [], W = 0; W != _.length; ++W) l[0][W] = _[W].name;
      for (; h-- > 0; ) {
        if (o[o.l] === 42) {
          o.l += A;
          continue;
        }
        for (++o.l, l[++F] = [], W = 0, W = 0; W != _.length; ++W) {
          var D = o.slice(o.l, o.l + _[W].len);
          (o.l += _[W].len), ze(D, 0);
          var X = Xr.utils.decode(y, D);
          switch (_[W].type) {
            case "C":
              X.trim().length && (l[F][W] = X.replace(/\s+$/, ""));
              break;
            case "D":
              X.length === 8 ? (l[F][W] = new Date(+X.slice(0, 4), +X.slice(4, 6) - 1, +X.slice(6, 8))) : (l[F][W] = X);
              break;
            case "F":
              l[F][W] = parseFloat(X.trim());
              break;
            case "+":
            case "I":
              l[F][W] = v ? D.read_shift(-4, "i") ^ 2147483648 : D.read_shift(4, "i");
              break;
            case "L":
              switch (X.trim().toUpperCase()) {
                case "Y":
                case "T":
                  l[F][W] = !0;
                  break;
                case "N":
                case "F":
                  l[F][W] = !1;
                  break;
                case "":
                case "?":
                  break;
                default:
                  throw new Error("DBF Unrecognized L:|" + X + "|");
              }
              break;
            case "M":
              if (!x) throw new Error("DBF Unexpected MEMO for type " + u.toString(16));
              l[F][W] = "##MEMO##" + (v ? parseInt(X.trim(), 10) : D.read_shift(4));
              break;
            case "N":
              (X = X.replace(/\u0000/g, "").trim()), X && X != "." && (l[F][W] = +X || 0);
              break;
            case "@":
              l[F][W] = new Date(D.read_shift(-8, "f") - 621356832e5);
              break;
            case "T":
              l[F][W] = new Date((D.read_shift(4) - 2440588) * 864e5 + D.read_shift(4));
              break;
            case "Y":
              l[F][W] = D.read_shift(4, "i") / 1e4 + (D.read_shift(4, "i") / 1e4) * Math.pow(2, 32);
              break;
            case "O":
              l[F][W] = -D.read_shift(-8, "f");
              break;
            case "B":
              if (d && _[W].len == 8) {
                l[F][W] = D.read_shift(8, "f");
                break;
              }
            case "G":
            case "P":
              D.l += _[W].len;
              break;
            case "0":
              if (_[W].name === "_NullFlags") break;
            default:
              throw new Error("DBF Unsupported data type " + _[W].type);
          }
        }
      }
      if (u != 2 && o.l < o.length && o[o.l++] != 26) throw new Error("DBF EOF Marker missing " + (o.l - 1) + " of " + o.length + " " + o[o.l - 1].toString(16));
      return f && f.sheetRows && (l = l.slice(0, f.sheetRows)), (f.DBF = _), l;
    }
    function n(c, f) {
      var l = f || {};
      l.dateNF || (l.dateNF = "yyyymmdd");
      var o = Fa(r(c, l), l);
      return (
        (o["!cols"] = l.DBF.map(function (u) {
          return { wch: u.len, DBF: u };
        })),
        delete l.DBF,
        o
      );
    }
    function t(c, f) {
      try {
        return Zr(n(c, f), f);
      } catch (l) {
        if (f && f.WTF) throw l;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var s = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
    function i(c, f) {
      var l = f || {};
      if ((+l.codepage >= 0 && wr(+l.codepage), l.type == "string")) throw new Error("Cannot write DBF to JS string");
      var o = zt(),
        u = r0(c, { header: 1, raw: !0, cellDates: !0 }),
        x = u[0],
        d = u.slice(1),
        v = c["!cols"] || [],
        h = 0,
        g = 0,
        A = 0,
        y = 1;
      for (h = 0; h < x.length; ++h) {
        if (((v[h] || {}).DBF || {}).name) {
          (x[h] = v[h].DBF.name), ++A;
          continue;
        }
        if (x[h] != null) {
          if ((++A, typeof x[h] == "number" && (x[h] = x[h].toString(10)), typeof x[h] != "string")) throw new Error("DBF Invalid column name " + x[h] + " |" + typeof x[h] + "|");
          if (x.indexOf(x[h]) !== h) {
            for (g = 0; g < 1024; ++g)
              if (x.indexOf(x[h] + "_" + g) == -1) {
                x[h] += "_" + g;
                break;
              }
          }
        }
      }
      var _ = Oe(c["!ref"]),
        N = [],
        b = [],
        R = [];
      for (h = 0; h <= _.e.c - _.s.c; ++h) {
        var F = "",
          W = "",
          D = 0,
          X = [];
        for (g = 0; g < d.length; ++g) d[g][h] != null && X.push(d[g][h]);
        if (X.length == 0 || x[h] == null) {
          N[h] = "?";
          continue;
        }
        for (g = 0; g < X.length; ++g) {
          switch (typeof X[g]) {
            case "number":
              W = "B";
              break;
            case "string":
              W = "C";
              break;
            case "boolean":
              W = "L";
              break;
            case "object":
              W = X[g] instanceof Date ? "D" : "C";
              break;
            default:
              W = "C";
          }
          (D = Math.max(D, String(X[g]).length)), (F = F && F != W ? "C" : W);
        }
        D > 250 && (D = 250), (W = ((v[h] || {}).DBF || {}).type), W == "C" && v[h].DBF.len > D && (D = v[h].DBF.len), F == "B" && W == "N" && ((F = "N"), (R[h] = v[h].DBF.dec), (D = v[h].DBF.len)), (b[h] = F == "C" || W == "N" ? D : s[F] || 0), (y += b[h]), (N[h] = F);
      }
      var U = o.next(32);
      for (U.write_shift(4, 318902576), U.write_shift(4, d.length), U.write_shift(2, 296 + 32 * A), U.write_shift(2, y), h = 0; h < 4; ++h) U.write_shift(4, 0);
      for (U.write_shift(4, 0 | ((+a[Kn] || 3) << 8)), h = 0, g = 0; h < x.length; ++h)
        if (x[h] != null) {
          var P = o.next(32),
            j = (x[h].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
          P.write_shift(1, j, "sbcs"), P.write_shift(1, N[h] == "?" ? "C" : N[h], "sbcs"), P.write_shift(4, g), P.write_shift(1, b[h] || s[N[h]] || 0), P.write_shift(1, R[h] || 0), P.write_shift(1, 2), P.write_shift(4, 0), P.write_shift(1, 0), P.write_shift(4, 0), P.write_shift(4, 0), (g += b[h] || s[N[h]] || 0);
        }
      var fe = o.next(264);
      for (fe.write_shift(4, 13), h = 0; h < 65; ++h) fe.write_shift(4, 0);
      for (h = 0; h < d.length; ++h) {
        var re = o.next(y);
        for (re.write_shift(1, 0), g = 0; g < x.length; ++g)
          if (x[g] != null)
            switch (N[g]) {
              case "L":
                re.write_shift(1, d[h][g] == null ? 63 : d[h][g] ? 84 : 70);
                break;
              case "B":
                re.write_shift(8, d[h][g] || 0, "f");
                break;
              case "N":
                var ce = "0";
                for (typeof d[h][g] == "number" && (ce = d[h][g].toFixed(R[g] || 0)), A = 0; A < b[g] - ce.length; ++A) re.write_shift(1, 32);
                re.write_shift(1, ce, "sbcs");
                break;
              case "D":
                d[h][g] ? (re.write_shift(4, ("0000" + d[h][g].getFullYear()).slice(-4), "sbcs"), re.write_shift(2, ("00" + (d[h][g].getMonth() + 1)).slice(-2), "sbcs"), re.write_shift(2, ("00" + d[h][g].getDate()).slice(-2), "sbcs")) : re.write_shift(8, "00000000", "sbcs");
                break;
              case "C":
                var ie = String(d[h][g] != null ? d[h][g] : "").slice(0, b[g]);
                for (re.write_shift(1, ie, "sbcs"), A = 0; A < b[g] - ie.length; ++A) re.write_shift(1, 32);
                break;
            }
      }
      return o.next(1).write_shift(1, 26), o.end();
    }
    return { to_workbook: t, to_sheet: n, from_sheet: i };
  })(),
  dl = (function () {
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
          Or(e)
            .join("|")
            .replace(/\|\|\|/, "|\\||")
            .replace(/([?()+])/g, "\\$1") +
          "|\\|)",
        "gm"
      ),
      r = function (x, d) {
        var v = e[d];
        return typeof v == "number" ? M0(v) : v;
      },
      n = function (x, d, v) {
        var h = ((d.charCodeAt(0) - 32) << 4) | (v.charCodeAt(0) - 48);
        return h == 59 ? x : M0(h);
      };
    e["|"] = 254;
    function t(x, d) {
      switch (d.type) {
        case "base64":
          return s(hr(x), d);
        case "binary":
          return s(x, d);
        case "buffer":
          return s(ge && Buffer.isBuffer(x) ? x.toString("binary") : oa(x), d);
        case "array":
          return s(ia(x), d);
      }
      throw new Error("Unrecognized type " + d.type);
    }
    function s(x, d) {
      var v = x.split(/[\n\r]+/),
        h = -1,
        g = -1,
        A = 0,
        y = 0,
        _ = [],
        N = [],
        b = null,
        R = {},
        F = [],
        W = [],
        D = [],
        X = 0,
        U;
      for (+d.codepage >= 0 && wr(+d.codepage); A !== v.length; ++A) {
        X = 0;
        var P = v[A].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(a, r),
          j = P.replace(/;;/g, "\0")
            .split(";")
            .map(function (O) {
              return O.replace(/\u0000/g, ";");
            }),
          fe = j[0],
          re;
        if (P.length > 0)
          switch (fe) {
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
              j[1].charAt(0) == "P" && N.push(P.slice(3).replace(/;;/g, ";"));
              break;
            case "C":
              var ce = !1,
                ie = !1,
                Fe = !1,
                G = !1,
                le = -1,
                ue = -1;
              for (y = 1; y < j.length; ++y)
                switch (j[y].charAt(0)) {
                  case "A":
                    break;
                  case "X":
                    (g = parseInt(j[y].slice(1)) - 1), (ie = !0);
                    break;
                  case "Y":
                    for (h = parseInt(j[y].slice(1)) - 1, ie || (g = 0), U = _.length; U <= h; ++U) _[U] = [];
                    break;
                  case "K":
                    (re = j[y].slice(1)), re.charAt(0) === '"' ? (re = re.slice(1, re.length - 1)) : re === "TRUE" ? (re = !0) : re === "FALSE" ? (re = !1) : isNaN(Fr(re)) ? isNaN(Ta(re).getDate()) || (re = Xe(re)) : ((re = Fr(re)), b !== null && wa(b) && (re = Dt(re))), (ce = !0);
                    break;
                  case "E":
                    G = !0;
                    var S = _a(j[y].slice(1), { r: h, c: g });
                    _[h][g] = [_[h][g], S];
                    break;
                  case "S":
                    (Fe = !0), (_[h][g] = [_[h][g], "S5S"]);
                    break;
                  case "G":
                    break;
                  case "R":
                    le = parseInt(j[y].slice(1)) - 1;
                    break;
                  case "C":
                    ue = parseInt(j[y].slice(1)) - 1;
                    break;
                  default:
                    if (d && d.WTF) throw new Error("SYLK bad record " + P);
                }
              if ((ce && (_[h][g] && _[h][g].length == 2 ? (_[h][g][0] = re) : (_[h][g] = re), (b = null)), Fe)) {
                if (G) throw new Error("SYLK shared formula cannot have own formula");
                var H = le > -1 && _[le][ue];
                if (!H || !H[1]) throw new Error("SYLK shared formula cannot find base");
                _[h][g][1] = si(H[1], { r: h - le, c: g - ue });
              }
              break;
            case "F":
              var I = 0;
              for (y = 1; y < j.length; ++y)
                switch (j[y].charAt(0)) {
                  case "X":
                    (g = parseInt(j[y].slice(1)) - 1), ++I;
                    break;
                  case "Y":
                    for (h = parseInt(j[y].slice(1)) - 1, U = _.length; U <= h; ++U) _[U] = [];
                    break;
                  case "M":
                    X = parseInt(j[y].slice(1)) / 20;
                    break;
                  case "F":
                    break;
                  case "G":
                    break;
                  case "P":
                    b = N[parseInt(j[y].slice(1))];
                    break;
                  case "S":
                    break;
                  case "D":
                    break;
                  case "N":
                    break;
                  case "W":
                    for (D = j[y].slice(1).split(" "), U = parseInt(D[0], 10); U <= parseInt(D[1], 10); ++U) (X = parseInt(D[2], 10)), (W[U - 1] = X === 0 ? { hidden: !0 } : { wch: X }), ka(W[U - 1]);
                    break;
                  case "C":
                    (g = parseInt(j[y].slice(1)) - 1), W[g] || (W[g] = {});
                    break;
                  case "R":
                    (h = parseInt(j[y].slice(1)) - 1), F[h] || (F[h] = {}), X > 0 ? ((F[h].hpt = X), (F[h].hpx = Ja(X))) : X === 0 && (F[h].hidden = !0);
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
      return F.length > 0 && (R["!rows"] = F), W.length > 0 && (R["!cols"] = W), d && d.sheetRows && (_ = _.slice(0, d.sheetRows)), [_, R];
    }
    function i(x, d) {
      var v = t(x, d),
        h = v[0],
        g = v[1],
        A = Fa(h, d);
      return (
        Or(g).forEach(function (y) {
          A[y] = g[y];
        }),
        A
      );
    }
    function c(x, d) {
      return Zr(i(x, d), d);
    }
    function f(x, d, v, h) {
      var g = "C;Y" + (v + 1) + ";X" + (h + 1) + ";K";
      switch (x.t) {
        case "n":
          (g += x.v || 0), x.f && !x.F && (g += ";E" + eu(x.f, { r: v, c: h }));
          break;
        case "b":
          g += x.v ? "TRUE" : "FALSE";
          break;
        case "e":
          g += x.w || x.v;
          break;
        case "d":
          g += '"' + (x.w || x.v) + '"';
          break;
        case "s":
          g += '"' + x.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
          break;
      }
      return g;
    }
    function l(x, d) {
      d.forEach(function (v, h) {
        var g = "F;W" + (h + 1) + " " + (h + 1) + " ";
        v.hidden ? (g += "0") : (typeof v.width == "number" && !v.wpx && (v.wpx = St(v.width)), typeof v.wpx == "number" && !v.wch && (v.wch = Ct(v.wpx)), typeof v.wch == "number" && (g += Math.round(v.wch))), g.charAt(g.length - 1) != " " && x.push(g);
      });
    }
    function o(x, d) {
      d.forEach(function (v, h) {
        var g = "F;";
        v.hidden ? (g += "M0;") : v.hpt ? (g += "M" + 20 * v.hpt + ";") : v.hpx && (g += "M" + 20 * ai(v.hpx) + ";"), g.length > 2 && x.push(g + "R" + (h + 1));
      });
    }
    function u(x, d) {
      var v = ["ID;PWXL;N;E"],
        h = [],
        g = Oe(x["!ref"]),
        A,
        y = Array.isArray(x),
        _ = `\r
`;
      v.push("P;PGeneral"), v.push("F;P0;DG0G8;M255"), x["!cols"] && l(v, x["!cols"]), x["!rows"] && o(v, x["!rows"]), v.push("B;Y" + (g.e.r - g.s.r + 1) + ";X" + (g.e.c - g.s.c + 1) + ";D" + [g.s.c, g.s.r, g.e.c, g.e.r].join(" "));
      for (var N = g.s.r; N <= g.e.r; ++N)
        for (var b = g.s.c; b <= g.e.c; ++b) {
          var R = he({ r: N, c: b });
          (A = y ? (x[N] || [])[b] : x[R]), !(!A || (A.v == null && (!A.f || A.F))) && h.push(f(A, x, N, b));
        }
      return v.join(_) + _ + h.join(_) + _ + "E" + _;
    }
    return { to_workbook: c, to_sheet: i, from_sheet: u };
  })(),
  vl = (function () {
    function e(s, i) {
      switch (i.type) {
        case "base64":
          return a(hr(s), i);
        case "binary":
          return a(s, i);
        case "buffer":
          return a(ge && Buffer.isBuffer(s) ? s.toString("binary") : oa(s), i);
        case "array":
          return a(ia(s), i);
      }
      throw new Error("Unrecognized type " + i.type);
    }
    function a(s, i) {
      for (
        var c = s.split(`
`),
          f = -1,
          l = -1,
          o = 0,
          u = [];
        o !== c.length;
        ++o
      ) {
        if (c[o].trim() === "BOT") {
          (u[++f] = []), (l = 0);
          continue;
        }
        if (!(f < 0)) {
          var x = c[o].trim().split(","),
            d = x[0],
            v = x[1];
          ++o;
          for (var h = c[o] || ""; (h.match(/["]/g) || []).length & 1 && o < c.length - 1; )
            h +=
              `
` + c[++o];
          switch (((h = h.trim()), +d)) {
            case -1:
              if (h === "BOT") {
                (u[++f] = []), (l = 0);
                continue;
              } else if (h !== "EOD") throw new Error("Unrecognized DIF special command " + h);
              break;
            case 0:
              h === "TRUE" ? (u[f][l] = !0) : h === "FALSE" ? (u[f][l] = !1) : isNaN(Fr(v)) ? (isNaN(Ta(v).getDate()) ? (u[f][l] = v) : (u[f][l] = Xe(v))) : (u[f][l] = Fr(v)), ++l;
              break;
            case 1:
              (h = h.slice(1, h.length - 1)), (h = h.replace(/""/g, '"')), h && h.match(/^=".*"$/) && (h = h.slice(2, -1)), (u[f][l++] = h !== "" ? h : null);
              break;
          }
          if (h === "EOD") break;
        }
      }
      return i && i.sheetRows && (u = u.slice(0, i.sheetRows)), u;
    }
    function r(s, i) {
      return Fa(e(s, i), i);
    }
    function n(s, i) {
      return Zr(r(s, i), i);
    }
    var t = (function () {
      var s = function (f, l, o, u, x) {
          f.push(l), f.push(o + "," + u), f.push('"' + x.replace(/"/g, '""') + '"');
        },
        i = function (f, l, o, u) {
          f.push(l + "," + o), f.push(l == 1 ? '"' + u.replace(/"/g, '""') + '"' : u);
        };
      return function (f) {
        var l = [],
          o = Oe(f["!ref"]),
          u,
          x = Array.isArray(f);
        s(l, "TABLE", 0, 1, "sheetjs"), s(l, "VECTORS", 0, o.e.r - o.s.r + 1, ""), s(l, "TUPLES", 0, o.e.c - o.s.c + 1, ""), s(l, "DATA", 0, 0, "");
        for (var d = o.s.r; d <= o.e.r; ++d) {
          i(l, -1, 0, "BOT");
          for (var v = o.s.c; v <= o.e.c; ++v) {
            var h = he({ r: d, c: v });
            if (((u = x ? (f[d] || [])[v] : f[h]), !u)) {
              i(l, 1, 0, "");
              continue;
            }
            switch (u.t) {
              case "n":
                var g = u.w;
                !g && u.v != null && (g = u.v), g == null ? (u.f && !u.F ? i(l, 1, 0, "=" + u.f) : i(l, 1, 0, "")) : i(l, 0, g, "V");
                break;
              case "b":
                i(l, 0, u.v ? 1 : 0, u.v ? "TRUE" : "FALSE");
                break;
              case "s":
                i(l, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"');
                break;
              case "d":
                u.w || (u.w = mr(u.z || de[14], cr(Xe(u.v)))), i(l, 0, u.w, "V");
                break;
              default:
                i(l, 1, 0, "");
            }
          }
        }
        i(l, -1, 0, "EOD");
        var A = `\r
`,
          y = l.join(A);
        return y;
      };
    })();
    return { to_workbook: n, to_sheet: r, from_sheet: t };
  })(),
  pl = (function () {
    function e(u) {
      return u
        .replace(/\\b/g, "\\")
        .replace(/\\c/g, ":")
        .replace(
          /\\n/g,
          `
`
        );
    }
    function a(u) {
      return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
    }
    function r(u, x) {
      for (
        var d = u.split(`
`),
          v = -1,
          h = -1,
          g = 0,
          A = [];
        g !== d.length;
        ++g
      ) {
        var y = d[g].trim().split(":");
        if (y[0] === "cell") {
          var _ = sr(y[1]);
          if (A.length <= _.r) for (v = A.length; v <= _.r; ++v) A[v] || (A[v] = []);
          switch (((v = _.r), (h = _.c), y[2])) {
            case "t":
              A[v][h] = e(y[3]);
              break;
            case "v":
              A[v][h] = +y[3];
              break;
            case "vtf":
              var N = y[y.length - 1];
            case "vtc":
              switch (y[3]) {
                case "nl":
                  A[v][h] = !!+y[4];
                  break;
                default:
                  A[v][h] = +y[4];
                  break;
              }
              y[2] == "vtf" && (A[v][h] = [A[v][h], N]);
          }
        }
      }
      return x && x.sheetRows && (A = A.slice(0, x.sheetRows)), A;
    }
    function n(u, x) {
      return Fa(r(u, x), x);
    }
    function t(u, x) {
      return Zr(n(u, x), x);
    }
    var s = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),
      i =
        ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`) +
        `
`,
      c = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`),
      f = "--SocialCalcSpreadsheetControlSave--";
    function l(u) {
      if (!u || !u["!ref"]) return "";
      for (var x = [], d = [], v, h = "", g = Aa(u["!ref"]), A = Array.isArray(u), y = g.s.r; y <= g.e.r; ++y)
        for (var _ = g.s.c; _ <= g.e.c; ++_)
          if (((h = he({ r: y, c: _ })), (v = A ? (u[y] || [])[_] : u[h]), !(!v || v.v == null || v.t === "z"))) {
            switch (((d = ["cell", h, "t"]), v.t)) {
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
                var N = cr(Xe(v.v));
                (d[2] = "vtc"), (d[3] = "nd"), (d[4] = "" + N), (d[5] = v.w || mr(v.z || de[14], N));
                break;
              case "e":
                continue;
            }
            x.push(d.join(":"));
          }
      return (
        x.push("sheet:c:" + (g.e.c - g.s.c + 1) + ":r:" + (g.e.r - g.s.r + 1) + ":tvf:1"),
        x.push("valueformat:1:text-wiki"),
        x.join(`
`)
      );
    }
    function o(u) {
      return [s, i, c, i, l(u), f].join(`
`);
    }
    return { to_workbook: t, to_sheet: n, from_sheet: o };
  })(),
  Ya = (function () {
    function e(o, u, x, d, v) {
      v.raw ? (u[x][d] = o) : o === "" || (o === "TRUE" ? (u[x][d] = !0) : o === "FALSE" ? (u[x][d] = !1) : isNaN(Fr(o)) ? (isNaN(Ta(o).getDate()) ? (u[x][d] = o) : (u[x][d] = Xe(o))) : (u[x][d] = Fr(o)));
    }
    function a(o, u) {
      var x = u || {},
        d = [];
      if (!o || o.length === 0) return d;
      for (var v = o.split(/[\r\n]/), h = v.length - 1; h >= 0 && v[h].length === 0; ) --h;
      for (var g = 10, A = 0, y = 0; y <= h; ++y) (A = v[y].indexOf(" ")), A == -1 ? (A = v[y].length) : A++, (g = Math.max(g, A));
      for (y = 0; y <= h; ++y) {
        d[y] = [];
        var _ = 0;
        for (e(v[y].slice(0, g).trim(), d, y, _, x), _ = 1; _ <= (v[y].length - g) / 10 + 1; ++_) e(v[y].slice(g + (_ - 1) * 10, g + _ * 10).trim(), d, y, _, x);
      }
      return x.sheetRows && (d = d.slice(0, x.sheetRows)), d;
    }
    var r = { 44: ",", 9: "	", 59: ";", 124: "|" },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function t(o) {
      for (var u = {}, x = !1, d = 0, v = 0; d < o.length; ++d) (v = o.charCodeAt(d)) == 34 ? (x = !x) : !x && v in r && (u[v] = (u[v] || 0) + 1);
      v = [];
      for (d in u) Object.prototype.hasOwnProperty.call(u, d) && v.push([u[d], d]);
      if (!v.length) {
        u = n;
        for (d in u) Object.prototype.hasOwnProperty.call(u, d) && v.push([u[d], d]);
      }
      return (
        v.sort(function (h, g) {
          return h[0] - g[0] || n[h[1]] - n[g[1]];
        }),
        r[v.pop()[1]] || 44
      );
    }
    function s(o, u) {
      var x = u || {},
        d = "",
        v = x.dense ? [] : {},
        h = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      o.slice(0, 4) == "sep=" ? (o.charCodeAt(5) == 13 && o.charCodeAt(6) == 10 ? ((d = o.charAt(4)), (o = o.slice(7))) : o.charCodeAt(5) == 13 || o.charCodeAt(5) == 10 ? ((d = o.charAt(4)), (o = o.slice(6))) : (d = t(o.slice(0, 1024)))) : x && x.FS ? (d = x.FS) : (d = t(o.slice(0, 1024)));
      var g = 0,
        A = 0,
        y = 0,
        _ = 0,
        N = 0,
        b = d.charCodeAt(0),
        R = !1,
        F = 0,
        W = o.charCodeAt(0);
      o = o.replace(
        /\r\n/gm,
        `
`
      );
      var D = x.dateNF != null ? Sc(x.dateNF) : null;
      function X() {
        var U = o.slice(_, N),
          P = {};
        if ((U.charAt(0) == '"' && U.charAt(U.length - 1) == '"' && (U = U.slice(1, -1).replace(/""/g, '"')), U.length === 0)) P.t = "z";
        else if (x.raw) (P.t = "s"), (P.v = U);
        else if (U.trim().length === 0) (P.t = "s"), (P.v = U);
        else if (U.charCodeAt(0) == 61) U.charCodeAt(1) == 34 && U.charCodeAt(U.length - 1) == 34 ? ((P.t = "s"), (P.v = U.slice(2, -1).replace(/""/g, '"'))) : au(U) ? ((P.t = "n"), (P.f = U.slice(1))) : ((P.t = "s"), (P.v = U));
        else if (U == "TRUE") (P.t = "b"), (P.v = !0);
        else if (U == "FALSE") (P.t = "b"), (P.v = !1);
        else if (!isNaN((y = Fr(U)))) (P.t = "n"), x.cellText !== !1 && (P.w = U), (P.v = y);
        else if (!isNaN(Ta(U).getDate()) || (D && U.match(D))) {
          P.z = x.dateNF || de[14];
          var j = 0;
          D && U.match(D) && ((U = Cc(U, x.dateNF, U.match(D) || [])), (j = 1)), x.cellDates ? ((P.t = "d"), (P.v = Xe(U, j))) : ((P.t = "n"), (P.v = cr(Xe(U, j)))), x.cellText !== !1 && (P.w = mr(P.z, P.v instanceof Date ? cr(P.v) : P.v)), x.cellNF || delete P.z;
        } else (P.t = "s"), (P.v = U);
        if ((P.t == "z" || (x.dense ? (v[g] || (v[g] = []), (v[g][A] = P)) : (v[he({ c: A, r: g })] = P)), (_ = N + 1), (W = o.charCodeAt(_)), h.e.c < A && (h.e.c = A), h.e.r < g && (h.e.r = g), F == b)) ++A;
        else if (((A = 0), ++g, x.sheetRows && x.sheetRows <= g)) return !0;
      }
      e: for (; N < o.length; ++N)
        switch ((F = o.charCodeAt(N))) {
          case 34:
            W === 34 && (R = !R);
            break;
          case b:
          case 10:
          case 13:
            if (!R && X()) break e;
            break;
        }
      return N - _ > 0 && X(), (v["!ref"] = _e(h)), v;
    }
    function i(o, u) {
      return !(u && u.PRN) || u.FS || o.slice(0, 4) == "sep=" || o.indexOf("	") >= 0 || o.indexOf(",") >= 0 || o.indexOf(";") >= 0 ? s(o, u) : Fa(a(o, u), u);
    }
    function c(o, u) {
      var x = "",
        d = u.type == "string" ? [0, 0, 0, 0] : C0(o, u);
      switch (u.type) {
        case "base64":
          x = hr(o);
          break;
        case "binary":
          x = o;
          break;
        case "buffer":
          u.codepage == 65001 ? (x = o.toString("utf8")) : u.codepage && typeof Xr < "u" ? (x = Xr.utils.decode(u.codepage, o)) : (x = ge && Buffer.isBuffer(o) ? o.toString("binary") : oa(o));
          break;
        case "array":
          x = ia(o);
          break;
        case "string":
          x = o;
          break;
        default:
          throw new Error("Unrecognized type " + u.type);
      }
      return d[0] == 239 && d[1] == 187 && d[2] == 191 ? (x = Ae(x.slice(3))) : u.type != "string" && u.type != "buffer" && u.codepage == 65001 ? (x = Ae(x)) : u.type == "binary" && typeof Xr < "u" && u.codepage && (x = Xr.utils.decode(u.codepage, Xr.utils.encode(28591, x))), x.slice(0, 19) == "socialcalc:version:" ? pl.to_sheet(u.type == "string" ? x : Ae(x), u) : i(x, u);
    }
    function f(o, u) {
      return Zr(c(o, u), u);
    }
    function l(o) {
      for (var u = [], x = Oe(o["!ref"]), d, v = Array.isArray(o), h = x.s.r; h <= x.e.r; ++h) {
        for (var g = [], A = x.s.c; A <= x.e.c; ++A) {
          var y = he({ r: h, c: A });
          if (((d = v ? (o[h] || [])[A] : o[y]), !d || d.v == null)) {
            g.push("          ");
            continue;
          }
          for (var _ = (d.w || (Ur(d), d.w) || "").slice(0, 10); _.length < 10; ) _ += " ";
          g.push(_ + (A === 0 ? " " : ""));
        }
        u.push(g.join(""));
      }
      return u.join(`
`);
    }
    return { to_workbook: f, to_sheet: c, from_sheet: l };
  })();
function gl(e, a) {
  var r = a || {},
    n = !!r.WTF;
  r.WTF = !0;
  try {
    var t = dl.to_workbook(e, r);
    return (r.WTF = n), t;
  } catch (s) {
    if (((r.WTF = n), !s.message.match(/SYLK bad record ID/) && n)) throw s;
    return Ya.to_workbook(e, a);
  }
}
var Va = (function () {
  function e(S, H, I) {
    if (S) {
      ze(S, S.l || 0);
      for (var O = I.Enum || le; S.l < S.length; ) {
        var K = S.read_shift(2),
          ee = O[K] || O[65535],
          ne = S.read_shift(2),
          q = S.l + ne,
          J = ee.f && ee.f(S, ne, I);
        if (((S.l = q), H(J, ee, K))) return;
      }
    }
  }
  function a(S, H) {
    switch (H.type) {
      case "base64":
        return r(kr(hr(S)), H);
      case "binary":
        return r(kr(S), H);
      case "buffer":
      case "array":
        return r(S, H);
    }
    throw "Unsupported type " + H.type;
  }
  function r(S, H) {
    if (!S) return S;
    var I = H || {},
      O = I.dense ? [] : {},
      K = "Sheet1",
      ee = "",
      ne = 0,
      q = {},
      J = [],
      Ee = [],
      C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
      Re = I.sheetRows || 0;
    if (S[2] == 0 && (S[3] == 8 || S[3] == 9) && S.length >= 16 && S[14] == 5 && S[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (S[2] == 2)
      (I.Enum = le),
        e(
          S,
          function (ae, Ie, xr) {
            switch (xr) {
              case 0:
                (I.vers = ae), ae >= 4096 && (I.qpro = !0);
                break;
              case 6:
                C = ae;
                break;
              case 204:
                ae && (ee = ae);
                break;
              case 222:
                ee = ae;
                break;
              case 15:
              case 51:
                I.qpro || (ae[1].v = ae[1].v.slice(1));
              case 13:
              case 14:
              case 16:
                xr == 14 && (ae[2] & 112) == 112 && (ae[2] & 15) > 1 && (ae[2] & 15) < 15 && ((ae[1].z = I.dateNF || de[14]), I.cellDates && ((ae[1].t = "d"), (ae[1].v = Dt(ae[1].v)))), I.qpro && ae[3] > ne && ((O["!ref"] = _e(C)), (q[K] = O), J.push(K), (O = I.dense ? [] : {}), (C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), (ne = ae[3]), (K = ee || "Sheet" + (ne + 1)), (ee = ""));
                var Sr = I.dense ? (O[ae[0].r] || [])[ae[0].c] : O[he(ae[0])];
                if (Sr) {
                  (Sr.t = ae[1].t), (Sr.v = ae[1].v), ae[1].z != null && (Sr.z = ae[1].z), ae[1].f != null && (Sr.f = ae[1].f);
                  break;
                }
                I.dense ? (O[ae[0].r] || (O[ae[0].r] = []), (O[ae[0].r][ae[0].c] = ae[1])) : (O[he(ae[0])] = ae[1]);
                break;
            }
          },
          I
        );
    else if (S[2] == 26 || S[2] == 14)
      (I.Enum = ue),
        S[2] == 14 && ((I.qpro = !0), (S.l = 0)),
        e(
          S,
          function (ae, Ie, xr) {
            switch (xr) {
              case 204:
                K = ae;
                break;
              case 22:
                ae[1].v = ae[1].v.slice(1);
              case 23:
              case 24:
              case 25:
              case 37:
              case 39:
              case 40:
                if ((ae[3] > ne && ((O["!ref"] = _e(C)), (q[K] = O), J.push(K), (O = I.dense ? [] : {}), (C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), (ne = ae[3]), (K = "Sheet" + (ne + 1))), Re > 0 && ae[0].r >= Re)) break;
                I.dense ? (O[ae[0].r] || (O[ae[0].r] = []), (O[ae[0].r][ae[0].c] = ae[1])) : (O[he(ae[0])] = ae[1]), C.e.c < ae[0].c && (C.e.c = ae[0].c), C.e.r < ae[0].r && (C.e.r = ae[0].r);
                break;
              case 27:
                ae[14e3] && (Ee[ae[14e3][0]] = ae[14e3][1]);
                break;
              case 1537:
                (Ee[ae[0]] = ae[1]), ae[0] == ne && (K = ae[1]);
                break;
            }
          },
          I
        );
    else throw new Error("Unrecognized LOTUS BOF " + S[2]);
    if (((O["!ref"] = _e(C)), (q[ee || K] = O), J.push(ee || K), !Ee.length)) return { SheetNames: J, Sheets: q };
    for (var ke = {}, we = [], pe = 0; pe < Ee.length; ++pe) q[J[pe]] ? (we.push(Ee[pe] || J[pe]), (ke[Ee[pe]] = q[Ee[pe]] || q[J[pe]])) : (we.push(Ee[pe]), (ke[Ee[pe]] = { "!ref": "A1" }));
    return { SheetNames: we, Sheets: ke };
  }
  function n(S, H) {
    var I = H || {};
    if ((+I.codepage >= 0 && wr(+I.codepage), I.type == "string")) throw new Error("Cannot write WK1 to JS string");
    var O = zt(),
      K = Oe(S["!ref"]),
      ee = Array.isArray(S),
      ne = [];
    Tr(O, 0, s(1030)), Tr(O, 6, f(K));
    for (var q = Math.min(K.e.r, 8191), J = K.s.r; J <= q; ++J)
      for (var Ee = Ke(J), C = K.s.c; C <= K.e.c; ++C) {
        J === K.s.r && (ne[C] = Ve(C));
        var Re = ne[C] + Ee,
          ke = ee ? (S[J] || [])[C] : S[Re];
        if (!(!ke || ke.t == "z"))
          if (ke.t == "n") (ke.v | 0) == ke.v && ke.v >= -32768 && ke.v <= 32767 ? Tr(O, 13, d(J, C, ke.v)) : Tr(O, 14, h(J, C, ke.v));
          else {
            var we = Ur(ke);
            Tr(O, 15, u(J, C, we.slice(0, 239)));
          }
      }
    return Tr(O, 1), O.end();
  }
  function t(S, H) {
    var I = H || {};
    if ((+I.codepage >= 0 && wr(+I.codepage), I.type == "string")) throw new Error("Cannot write WK3 to JS string");
    var O = zt();
    Tr(O, 0, i(S));
    for (var K = 0, ee = 0; K < S.SheetNames.length; ++K) (S.Sheets[S.SheetNames[K]] || {})["!ref"] && Tr(O, 27, G(S.SheetNames[K], ee++));
    var ne = 0;
    for (K = 0; K < S.SheetNames.length; ++K) {
      var q = S.Sheets[S.SheetNames[K]];
      if (!(!q || !q["!ref"])) {
        for (var J = Oe(q["!ref"]), Ee = Array.isArray(q), C = [], Re = Math.min(J.e.r, 8191), ke = J.s.r; ke <= Re; ++ke)
          for (var we = Ke(ke), pe = J.s.c; pe <= J.e.c; ++pe) {
            ke === J.s.r && (C[pe] = Ve(pe));
            var ae = C[pe] + we,
              Ie = Ee ? (q[ke] || [])[pe] : q[ae];
            if (!(!Ie || Ie.t == "z"))
              if (Ie.t == "n") Tr(O, 23, X(ke, pe, ne, Ie.v));
              else {
                var xr = Ur(Ie);
                Tr(O, 22, F(ke, pe, ne, xr.slice(0, 239)));
              }
          }
        ++ne;
      }
    }
    return Tr(O, 1), O.end();
  }
  function s(S) {
    var H = He(2);
    return H.write_shift(2, S), H;
  }
  function i(S) {
    var H = He(26);
    H.write_shift(2, 4096), H.write_shift(2, 4), H.write_shift(4, 0);
    for (var I = 0, O = 0, K = 0, ee = 0; ee < S.SheetNames.length; ++ee) {
      var ne = S.SheetNames[ee],
        q = S.Sheets[ne];
      if (!(!q || !q["!ref"])) {
        ++K;
        var J = Aa(q["!ref"]);
        I < J.e.r && (I = J.e.r), O < J.e.c && (O = J.e.c);
      }
    }
    return I > 8191 && (I = 8191), H.write_shift(2, I), H.write_shift(1, K), H.write_shift(1, O), H.write_shift(2, 0), H.write_shift(2, 0), H.write_shift(1, 1), H.write_shift(1, 2), H.write_shift(4, 0), H.write_shift(4, 0), H;
  }
  function c(S, H, I) {
    var O = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return H == 8 && I.qpro ? ((O.s.c = S.read_shift(1)), S.l++, (O.s.r = S.read_shift(2)), (O.e.c = S.read_shift(1)), S.l++, (O.e.r = S.read_shift(2)), O) : ((O.s.c = S.read_shift(2)), (O.s.r = S.read_shift(2)), H == 12 && I.qpro && (S.l += 2), (O.e.c = S.read_shift(2)), (O.e.r = S.read_shift(2)), H == 12 && I.qpro && (S.l += 2), O.s.c == 65535 && (O.s.c = O.e.c = O.s.r = O.e.r = 0), O);
  }
  function f(S) {
    var H = He(8);
    return H.write_shift(2, S.s.c), H.write_shift(2, S.s.r), H.write_shift(2, S.e.c), H.write_shift(2, S.e.r), H;
  }
  function l(S, H, I) {
    var O = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return I.qpro && I.vers != 20768 ? ((O[0].c = S.read_shift(1)), (O[3] = S.read_shift(1)), (O[0].r = S.read_shift(2)), (S.l += 2)) : ((O[2] = S.read_shift(1)), (O[0].c = S.read_shift(2)), (O[0].r = S.read_shift(2))), O;
  }
  function o(S, H, I) {
    var O = S.l + H,
      K = l(S, H, I);
    if (((K[1].t = "s"), I.vers == 20768)) {
      S.l++;
      var ee = S.read_shift(1);
      return (K[1].v = S.read_shift(ee, "utf8")), K;
    }
    return I.qpro && S.l++, (K[1].v = S.read_shift(O - S.l, "cstr")), K;
  }
  function u(S, H, I) {
    var O = He(7 + I.length);
    O.write_shift(1, 255), O.write_shift(2, H), O.write_shift(2, S), O.write_shift(1, 39);
    for (var K = 0; K < O.length; ++K) {
      var ee = I.charCodeAt(K);
      O.write_shift(1, ee >= 128 ? 95 : ee);
    }
    return O.write_shift(1, 0), O;
  }
  function x(S, H, I) {
    var O = l(S, H, I);
    return (O[1].v = S.read_shift(2, "i")), O;
  }
  function d(S, H, I) {
    var O = He(7);
    return O.write_shift(1, 255), O.write_shift(2, H), O.write_shift(2, S), O.write_shift(2, I, "i"), O;
  }
  function v(S, H, I) {
    var O = l(S, H, I);
    return (O[1].v = S.read_shift(8, "f")), O;
  }
  function h(S, H, I) {
    var O = He(13);
    return O.write_shift(1, 255), O.write_shift(2, H), O.write_shift(2, S), O.write_shift(8, I, "f"), O;
  }
  function g(S, H, I) {
    var O = S.l + H,
      K = l(S, H, I);
    if (((K[1].v = S.read_shift(8, "f")), I.qpro)) S.l = O;
    else {
      var ee = S.read_shift(2);
      N(S.slice(S.l, S.l + ee), K), (S.l += ee);
    }
    return K;
  }
  function A(S, H, I) {
    var O = H & 32768;
    return (H &= -32769), (H = (O ? S : 0) + (H >= 8192 ? H - 16384 : H)), (O ? "" : "$") + (I ? Ve(H) : Ke(H));
  }
  var y = { 51: ["FALSE", 0], 52: ["TRUE", 0], 70: ["LEN", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 111: ["T", 1] },
    _ = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function N(S, H) {
    ze(S, 0);
    for (var I = [], O = 0, K = "", ee = "", ne = "", q = ""; S.l < S.length; ) {
      var J = S[S.l++];
      switch (J) {
        case 0:
          I.push(S.read_shift(8, "f"));
          break;
        case 1:
          (ee = A(H[0].c, S.read_shift(2), !0)), (K = A(H[0].r, S.read_shift(2), !1)), I.push(ee + K);
          break;
        case 2:
          {
            var Ee = A(H[0].c, S.read_shift(2), !0),
              C = A(H[0].r, S.read_shift(2), !1);
            (ee = A(H[0].c, S.read_shift(2), !0)), (K = A(H[0].r, S.read_shift(2), !1)), I.push(Ee + C + ":" + ee + K);
          }
          break;
        case 3:
          if (S.l < S.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          I.push("(" + I.pop() + ")");
          break;
        case 5:
          I.push(S.read_shift(2));
          break;
        case 6:
          {
            for (var Re = ""; (J = S[S.l++]); ) Re += String.fromCharCode(J);
            I.push('"' + Re.replace(/"/g, '""') + '"');
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
          (q = I.pop()), (ne = I.pop()), I.push(["AND", "OR"][J - 20] + "(" + ne + "," + q + ")");
          break;
        default:
          if (J < 32 && _[J]) (q = I.pop()), (ne = I.pop()), I.push(ne + _[J] + q);
          else if (y[J]) {
            if (((O = y[J][1]), O == 69 && (O = S[S.l++]), O > I.length)) {
              console.error("WK1 bad formula parse 0x" + J.toString(16) + ":|" + I.join("|") + "|");
              return;
            }
            var ke = I.slice(-O);
            (I.length -= O), I.push(y[J][0] + "(" + ke.join(",") + ")");
          } else return J <= 7 ? console.error("WK1 invalid opcode " + J.toString(16)) : J <= 24 ? console.error("WK1 unsupported op " + J.toString(16)) : J <= 30 ? console.error("WK1 invalid opcode " + J.toString(16)) : J <= 115 ? console.error("WK1 unsupported function opcode " + J.toString(16)) : console.error("WK1 unrecognized opcode " + J.toString(16));
      }
    }
    I.length == 1 ? (H[1].f = "" + I[0]) : console.error("WK1 bad formula parse |" + I.join("|") + "|");
  }
  function b(S) {
    var H = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return (H[0].r = S.read_shift(2)), (H[3] = S[S.l++]), (H[0].c = S[S.l++]), H;
  }
  function R(S, H) {
    var I = b(S);
    return (I[1].t = "s"), (I[1].v = S.read_shift(H - 4, "cstr")), I;
  }
  function F(S, H, I, O) {
    var K = He(6 + O.length);
    K.write_shift(2, S), K.write_shift(1, I), K.write_shift(1, H), K.write_shift(1, 39);
    for (var ee = 0; ee < O.length; ++ee) {
      var ne = O.charCodeAt(ee);
      K.write_shift(1, ne >= 128 ? 95 : ne);
    }
    return K.write_shift(1, 0), K;
  }
  function W(S, H) {
    var I = b(S);
    I[1].v = S.read_shift(2);
    var O = I[1].v >> 1;
    if (I[1].v & 1)
      switch (O & 7) {
        case 0:
          O = (O >> 3) * 5e3;
          break;
        case 1:
          O = (O >> 3) * 500;
          break;
        case 2:
          O = (O >> 3) / 20;
          break;
        case 3:
          O = (O >> 3) / 200;
          break;
        case 4:
          O = (O >> 3) / 2e3;
          break;
        case 5:
          O = (O >> 3) / 2e4;
          break;
        case 6:
          O = (O >> 3) / 16;
          break;
        case 7:
          O = (O >> 3) / 64;
          break;
      }
    return (I[1].v = O), I;
  }
  function D(S, H) {
    var I = b(S),
      O = S.read_shift(4),
      K = S.read_shift(4),
      ee = S.read_shift(2);
    if (ee == 65535) return O === 0 && K === 3221225472 ? ((I[1].t = "e"), (I[1].v = 15)) : O === 0 && K === 3489660928 ? ((I[1].t = "e"), (I[1].v = 42)) : (I[1].v = 0), I;
    var ne = ee & 32768;
    return (ee = (ee & 32767) - 16446), (I[1].v = (1 - ne * 2) * (K * Math.pow(2, ee + 32) + O * Math.pow(2, ee))), I;
  }
  function X(S, H, I, O) {
    var K = He(14);
    if ((K.write_shift(2, S), K.write_shift(1, I), K.write_shift(1, H), O == 0)) return K.write_shift(4, 0), K.write_shift(4, 0), K.write_shift(2, 65535), K;
    var ee = 0,
      ne = 0,
      q = 0,
      J = 0;
    return O < 0 && ((ee = 1), (O = -O)), (ne = Math.log2(O) | 0), (O /= Math.pow(2, ne - 31)), (J = O >>> 0), J & 2147483648 || ((O /= 2), ++ne, (J = O >>> 0)), (O -= J), (J |= 2147483648), (J >>>= 0), (O *= Math.pow(2, 32)), (q = O >>> 0), K.write_shift(4, q), K.write_shift(4, J), (ne += 16383 + (ee ? 32768 : 0)), K.write_shift(2, ne), K;
  }
  function U(S, H) {
    var I = D(S);
    return (S.l += H - 14), I;
  }
  function P(S, H) {
    var I = b(S),
      O = S.read_shift(4);
    return (I[1].v = O >> 6), I;
  }
  function j(S, H) {
    var I = b(S),
      O = S.read_shift(8, "f");
    return (I[1].v = O), I;
  }
  function fe(S, H) {
    var I = j(S);
    return (S.l += H - 10), I;
  }
  function re(S, H) {
    return S[S.l + H - 1] == 0 ? S.read_shift(H, "cstr") : "";
  }
  function ce(S, H) {
    var I = S[S.l++];
    I > H - 1 && (I = H - 1);
    for (var O = ""; O.length < I; ) O += String.fromCharCode(S[S.l++]);
    return O;
  }
  function ie(S, H, I) {
    if (!(!I.qpro || H < 21)) {
      var O = S.read_shift(1);
      (S.l += 17), (S.l += 1), (S.l += 2);
      var K = S.read_shift(H - 21, "cstr");
      return [O, K];
    }
  }
  function Fe(S, H) {
    for (var I = {}, O = S.l + H; S.l < O; ) {
      var K = S.read_shift(2);
      if (K == 14e3) {
        for (I[K] = [0, ""], I[K][0] = S.read_shift(2); S[S.l]; ) (I[K][1] += String.fromCharCode(S[S.l])), S.l++;
        S.l++;
      }
    }
    return I;
  }
  function G(S, H) {
    var I = He(5 + S.length);
    I.write_shift(2, 14e3), I.write_shift(2, H);
    for (var O = 0; O < S.length; ++O) {
      var K = S.charCodeAt(O);
      I[I.l++] = K > 127 ? 95 : K;
    }
    return (I[I.l++] = 0), I;
  }
  var le = {
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
      13: { n: "INTEGER", f: x },
      14: { n: "NUMBER", f: v },
      15: { n: "LABEL", f: o },
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
      51: { n: "STRING", f: o },
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
      222: { n: "SHEETNAMELP", f: ce },
      65535: { n: "" },
    },
    ue = {
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
      22: { n: "LABEL16", f: R },
      23: { n: "NUMBER17", f: D },
      24: { n: "NUMBER18", f: W },
      25: { n: "FORMULA19", f: U },
      26: { n: "FORMULA1A" },
      27: { n: "XFORMAT", f: Fe },
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
      39: { n: "NUMBER27", f: j },
      40: { n: "FORMULA28", f: fe },
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
function ml(e) {
  var a = {},
    r = e.match(rr),
    n = 0,
    t = !1;
  if (r)
    for (; n != r.length; ++n) {
      var s = oe(r[n]);
      switch (s[0].replace(/\w*:/g, "")) {
        case "<condense":
          break;
        case "<extend":
          break;
        case "<shadow":
          if (!s.val) break;
        case "<shadow>":
        case "<shadow/>":
          a.shadow = 1;
          break;
        case "</shadow>":
          break;
        case "<charset":
          if (s.val == "1") break;
          a.cp = t0[parseInt(s.val, 10)];
          break;
        case "<outline":
          if (!s.val) break;
        case "<outline>":
        case "<outline/>":
          a.outline = 1;
          break;
        case "</outline>":
          break;
        case "<rFont":
          a.name = s.val;
          break;
        case "<sz":
          a.sz = s.val;
          break;
        case "<strike":
          if (!s.val) break;
        case "<strike>":
        case "<strike/>":
          a.strike = 1;
          break;
        case "</strike>":
          break;
        case "<u":
          if (!s.val) break;
          switch (s.val) {
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
          if (s.val == "0") break;
        case "<b>":
        case "<b/>":
          a.b = 1;
          break;
        case "</b>":
          break;
        case "<i":
          if (s.val == "0") break;
        case "<i>":
        case "<i/>":
          a.i = 1;
          break;
        case "</i>":
          break;
        case "<color":
          s.rgb && (a.color = s.rgb.slice(2, 8));
          break;
        case "<color>":
        case "<color/>":
        case "</color>":
          break;
        case "<family":
          a.family = s.val;
          break;
        case "<family>":
        case "<family/>":
        case "</family>":
          break;
        case "<vertAlign":
          a.valign = s.val;
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
          if (s[0].charCodeAt(1) !== 47 && !t) throw new Error("Unrecognized rich format " + s[0]);
      }
    }
  return a;
}
var _l = (function () {
    var e = $a("t"),
      a = $a("rPr");
    function r(s) {
      var i = s.match(e);
      if (!i) return { t: "s", v: "" };
      var c = { t: "s", v: Te(i[1]) },
        f = s.match(a);
      return f && (c.s = ml(f[1])), c;
    }
    var n = /<(?:\w+:)?r>/g,
      t = /<\/(?:\w+:)?r>/;
    return function (i) {
      return i
        .replace(n, "")
        .split(t)
        .map(r)
        .filter(function (c) {
          return c.v;
        });
    };
  })(),
  El = (function () {
    var a = /(\r\n|\n)/g;
    function r(t, s, i) {
      var c = [];
      t.u && c.push("text-decoration: underline;"), t.uval && c.push("text-underline-style:" + t.uval + ";"), t.sz && c.push("font-size:" + t.sz + "pt;"), t.outline && c.push("text-effect: outline;"), t.shadow && c.push("text-shadow: auto;"), s.push('<span style="' + c.join("") + '">'), t.b && (s.push("<b>"), i.push("</b>")), t.i && (s.push("<i>"), i.push("</i>")), t.strike && (s.push("<s>"), i.push("</s>"));
      var f = t.valign || "";
      return f == "superscript" || f == "super" ? (f = "sup") : f == "subscript" && (f = "sub"), f != "" && (s.push("<" + f + ">"), i.push("</" + f + ">")), i.push("</span>"), t;
    }
    function n(t) {
      var s = [[], t.v, []];
      return t.v ? (t.s && r(t.s, s[0], s[2]), s[0].join("") + s[1].replace(a, "<br/>") + s[2].join("")) : "";
    }
    return function (s) {
      return s.map(n).join("");
    };
  })(),
  Tl = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
  kl = /<(?:\w+:)?r>/,
  wl = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function E0(e, a) {
  var r = a ? a.cellHTML : !0,
    n = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? ((n.t = Te(Ae(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""))), (n.r = Ae(e)), r && (n.h = l0(n.t))) : e.match(kl) && ((n.r = Ae(e)), (n.t = Te(Ae((e.replace(wl, "").match(Tl) || []).join("").replace(rr, "")))), r && (n.h = El(_l(n.r)))), n) : { t: "" };
}
var Al = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,
  Fl = /<(?:\w+:)?(?:si|sstItem)>/g,
  Sl = /<\/(?:\w+:)?(?:si|sstItem)>/;
function Cl(e, a) {
  var r = [],
    n = "";
  if (!e) return r;
  var t = e.match(Al);
  if (t) {
    n = t[2].replace(Fl, "").split(Sl);
    for (var s = 0; s != n.length; ++s) {
      var i = E0(n[s].trim(), a);
      i != null && (r[r.length] = i);
    }
    (t = oe(t[1])), (r.Count = t.count), (r.Unique = t.uniqueCount);
  }
  return r;
}
function yl(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Dl(e, a) {
  var r = [],
    n = !1;
  return (
    Hr(e, function (s, i, c) {
      switch (c) {
        case 159:
          (r.Count = s[0]), (r.Unique = s[1]);
          break;
        case 19:
          r.push(s);
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
          if ((i.T, !n || a.WTF)) throw new Error("Unexpected record 0x" + c.toString(16));
      }
    }),
    r
  );
}
function Js(e) {
  for (var a = [], r = e.split(""), n = 0; n < r.length; ++n) a[n] = r[n].charCodeAt(0);
  return a;
}
function br(e, a) {
  var r = {};
  return (r.Major = e.read_shift(2)), (r.Minor = e.read_shift(2)), a >= 4 && (e.l += a - 4), r;
}
function Ol(e) {
  var a = {};
  return (a.id = e.read_shift(0, "lpp4")), (a.R = br(e, 4)), (a.U = br(e, 4)), (a.W = br(e, 4)), a;
}
function Rl(e) {
  for (var a = e.read_shift(4), r = e.l + a - 4, n = {}, t = e.read_shift(4), s = []; t-- > 0; ) s.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (((n.name = e.read_shift(0, "lpp4")), (n.comps = s), e.l != r)) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return n;
}
function Il(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(Rl(e));
  return a;
}
function Nl(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(e.read_shift(0, "lpp4"));
  return a;
}
function Pl(e) {
  var a = {};
  return e.read_shift(4), (e.l += 4), (a.id = e.read_shift(0, "lpp4")), (a.name = e.read_shift(0, "lpp4")), (a.R = br(e, 4)), (a.U = br(e, 4)), (a.W = br(e, 4)), a;
}
function Ll(e) {
  var a = Pl(e);
  if (((a.ename = e.read_shift(0, "8lpp4")), (a.blksz = e.read_shift(4)), (a.cmode = e.read_shift(4)), e.read_shift(4) != 4)) throw new Error("Bad !Primary record");
  return a;
}
function Zs(e, a) {
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
function qs(e, a) {
  var r = {},
    n = e.l + a;
  return (e.l += 4), (r.Salt = e.slice(e.l, e.l + 16)), (e.l += 16), (r.Verifier = e.slice(e.l, e.l + 16)), (e.l += 16), e.read_shift(4), (r.VerifierHash = e.slice(e.l, n)), (e.l = n), r;
}
function Ml(e) {
  var a = br(e);
  switch (a.Minor) {
    case 2:
      return [a.Minor, Bl(e)];
    case 3:
      return [a.Minor, bl()];
    case 4:
      return [a.Minor, Ul(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + a.Minor);
}
function Bl(e) {
  var a = e.read_shift(4);
  if ((a & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4),
    n = Zs(e, r),
    t = qs(e, e.length - e.l);
  return { t: "Std", h: n, v: t };
}
function bl() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function Ul(e) {
  var a = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"),
    n = {};
  return (
    r.replace(rr, function (s) {
      var i = oe(s);
      switch (Rr(i[0])) {
        case "<?xml":
          break;
        case "<encryption":
        case "</encryption>":
          break;
        case "<keyData":
          a.forEach(function (c) {
            n[c] = i[c];
          });
          break;
        case "<dataIntegrity":
          (n.encryptedHmacKey = i.encryptedHmacKey), (n.encryptedHmacValue = i.encryptedHmacValue);
          break;
        case "<keyEncryptors>":
        case "<keyEncryptors":
          n.encs = [];
          break;
        case "</keyEncryptors>":
          break;
        case "<keyEncryptor":
          n.uri = i.uri;
          break;
        case "</keyEncryptor>":
          break;
        case "<encryptedKey":
          n.encs.push(i);
          break;
        default:
          throw i[0];
      }
    }),
    n
  );
}
function Hl(e, a) {
  var r = {},
    n = (r.EncryptionVersionInfo = br(e, 4));
  if (((a -= 4), n.Minor != 2)) throw new Error("unrecognized minor version code: " + n.Minor);
  if (n.Major > 4 || n.Major < 2) throw new Error("unrecognized major version code: " + n.Major);
  (r.Flags = e.read_shift(4)), (a -= 4);
  var t = e.read_shift(4);
  return (a -= 4), (r.EncryptionHeader = Zs(e, t)), (a -= t), (r.EncryptionVerifier = qs(e, a)), r;
}
function Vl(e) {
  var a = {},
    r = (a.EncryptionVersionInfo = br(e, 4));
  if (r.Major != 1 || r.Minor != 1) throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return (a.Salt = e.read_shift(16)), (a.EncryptedVerifier = e.read_shift(16)), (a.EncryptedVerifierHash = e.read_shift(16)), a;
}
function Wl(e) {
  var a = 0,
    r,
    n = Js(e),
    t = n.length + 1,
    s,
    i,
    c,
    f,
    l;
  for (r = jr(t), r[0] = n.length, s = 1; s != t; ++s) r[s] = n[s - 1];
  for (s = t - 1; s >= 0; --s) (i = r[s]), (c = a & 16384 ? 1 : 0), (f = (a << 1) & 32767), (l = c | f), (a = l ^ i);
  return a ^ 52811;
}
var Qs = (function () {
    var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0],
      a = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163],
      r = [
        44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539,
        35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628,
      ],
      n = function (i) {
        return ((i / 2) | (i * 128)) & 255;
      },
      t = function (i, c) {
        return n(i ^ c);
      },
      s = function (i) {
        for (var c = a[i.length - 1], f = 104, l = i.length - 1; l >= 0; --l) for (var o = i[l], u = 0; u != 7; ++u) o & 64 && (c ^= r[f]), (o *= 2), --f;
        return c;
      };
    return function (i) {
      for (var c = Js(i), f = s(c), l = c.length, o = jr(16), u = 0; u != 16; ++u) o[u] = 0;
      var x, d, v;
      for ((l & 1) === 1 && ((x = f >> 8), (o[l] = t(e[0], x)), --l, (x = f & 255), (d = c[c.length - 1]), (o[l] = t(d, x))); l > 0; ) --l, (x = f >> 8), (o[l] = t(c[l], x)), --l, (x = f & 255), (o[l] = t(c[l], x));
      for (l = 15, v = 15 - c.length; v > 0; ) (x = f >> 8), (o[l] = t(e[v], x)), --l, --v, (x = f & 255), (o[l] = t(c[l], x)), --l, --v;
      return o;
    };
  })(),
  Gl = function (e, a, r, n, t) {
    t || (t = a), n || (n = Qs(e));
    var s, i;
    for (s = 0; s != a.length; ++s) (i = a[s]), (i ^= n[r]), (i = ((i >> 5) | (i << 3)) & 255), (t[s] = i), ++r;
    return [t, r, n];
  },
  Xl = function (e) {
    var a = 0,
      r = Qs(e);
    return function (n) {
      var t = Gl("", n, a, r);
      return (a = t[1]), t[0];
    };
  };
function zl(e, a, r, n) {
  var t = { key: be(e), verificationBytes: be(e) };
  return r.password && (t.verifier = Wl(r.password)), (n.valid = t.verificationBytes === t.verifier), n.valid && (n.insitu = Xl(r.password)), t;
}
function $l(e, a, r) {
  var n = r || {};
  return (n.Info = e.read_shift(2)), (e.l -= 2), n.Info === 1 ? (n.Data = Vl(e)) : (n.Data = Hl(e, a)), n;
}
function Kl(e, a, r) {
  var n = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return n.Type ? $l(e, a - 2, n) : zl(e, r.biff >= 8 ? a : a - 2, r, n), n;
}
var Yl = (function () {
  function e(t, s) {
    switch (s.type) {
      case "base64":
        return a(hr(t), s);
      case "binary":
        return a(t, s);
      case "buffer":
        return a(ge && Buffer.isBuffer(t) ? t.toString("binary") : oa(t), s);
      case "array":
        return a(ia(t), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function a(t, s) {
    var i = s || {},
      c = i.dense ? [] : {},
      f = t.match(/\\trowd.*?\\row\b/g);
    if (!f.length) throw new Error("RTF missing table");
    var l = { s: { c: 0, r: 0 }, e: { c: 0, r: f.length - 1 } };
    return (
      f.forEach(function (o, u) {
        Array.isArray(c) && (c[u] = []);
        for (var x = /\\\w+\b/g, d = 0, v, h = -1; (v = x.exec(o)); ) {
          switch (v[0]) {
            case "\\cell":
              var g = o.slice(d, x.lastIndex - v[0].length);
              if ((g[0] == " " && (g = g.slice(1)), ++h, g.length)) {
                var A = { v: g, t: "s" };
                Array.isArray(c) ? (c[u][h] = A) : (c[he({ r: u, c: h })] = A);
              }
              break;
          }
          d = x.lastIndex;
        }
        h > l.e.c && (l.e.c = h);
      }),
      (c["!ref"] = _e(l)),
      c
    );
  }
  function r(t, s) {
    return Zr(e(t, s), s);
  }
  function n(t) {
    for (var s = ["{\\rtf1\\ansi"], i = Oe(t["!ref"]), c, f = Array.isArray(t), l = i.s.r; l <= i.e.r; ++l) {
      s.push("\\trowd\\trautofit1");
      for (var o = i.s.c; o <= i.e.c; ++o) s.push("\\cellx" + (o + 1));
      for (s.push("\\pard\\intbl"), o = i.s.c; o <= i.e.c; ++o) {
        var u = he({ r: l, c: o });
        (c = f ? (t[l] || [])[o] : t[u]), !(!c || (c.v == null && (!c.f || c.F))) && (s.push(" " + (c.w || (Ur(c), c.w))), s.push("\\cell"));
      }
      s.push("\\pard\\intbl\\row");
    }
    return s.join("") + "}";
  }
  return { to_workbook: r, to_sheet: e, from_sheet: n };
})();
function jl(e) {
  var a = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(a.slice(0, 2), 16), parseInt(a.slice(2, 4), 16), parseInt(a.slice(4, 6), 16)];
}
function ja(e) {
  for (var a = 0, r = 1; a != 3; ++a) r = r * 256 + (e[a] > 255 ? 255 : e[a] < 0 ? 0 : e[a]);
  return r.toString(16).toUpperCase().slice(1);
}
function Jl(e) {
  var a = e[0] / 255,
    r = e[1] / 255,
    n = e[2] / 255,
    t = Math.max(a, r, n),
    s = Math.min(a, r, n),
    i = t - s;
  if (i === 0) return [0, 0, a];
  var c = 0,
    f = 0,
    l = t + s;
  switch (((f = i / (l > 1 ? 2 - l : l)), t)) {
    case a:
      c = ((r - n) / i + 6) % 6;
      break;
    case r:
      c = (n - a) / i + 2;
      break;
    case n:
      c = (a - r) / i + 4;
      break;
  }
  return [c / 6, f, l / 2];
}
function Zl(e) {
  var a = e[0],
    r = e[1],
    n = e[2],
    t = r * 2 * (n < 0.5 ? n : 1 - n),
    s = n - t / 2,
    i = [s, s, s],
    c = 6 * a,
    f;
  if (r !== 0)
    switch (c | 0) {
      case 0:
      case 6:
        (f = t * c), (i[0] += t), (i[1] += f);
        break;
      case 1:
        (f = t * (2 - c)), (i[0] += f), (i[1] += t);
        break;
      case 2:
        (f = t * (c - 2)), (i[1] += t), (i[2] += f);
        break;
      case 3:
        (f = t * (4 - c)), (i[1] += f), (i[2] += t);
        break;
      case 4:
        (f = t * (c - 4)), (i[2] += t), (i[0] += f);
        break;
      case 5:
        (f = t * (6 - c)), (i[2] += f), (i[0] += t);
        break;
    }
  for (var l = 0; l != 3; ++l) i[l] = Math.round(i[l] * 255);
  return i;
}
function Ft(e, a) {
  if (a === 0) return e;
  var r = Jl(jl(e));
  return a < 0 ? (r[2] = r[2] * (1 + a)) : (r[2] = 1 - (1 - r[2]) * (1 - a)), ja(Zl(r));
}
var ei = 6,
  ql = 15,
  Ql = 1,
  nr = ei;
function St(e) {
  return Math.floor((e + Math.round(128 / nr) / 256) * nr);
}
function Ct(e) {
  return Math.floor(((e - 5) / nr) * 100 + 0.5) / 100;
}
function jt(e) {
  return Math.round(((e * nr + 5) / nr) * 256) / 256;
}
function Ut(e) {
  return jt(Ct(St(e)));
}
function T0(e) {
  var a = Math.abs(e - Ut(e)),
    r = nr;
  if (a > 0.005) for (nr = Ql; nr < ql; ++nr) Math.abs(e - Ut(e)) <= a && ((a = Math.abs(e - Ut(e))), (r = nr));
  nr = r;
}
function ka(e) {
  e.width ? ((e.wpx = St(e.width)), (e.wch = Ct(e.wpx)), (e.MDW = nr)) : e.wpx ? ((e.wch = Ct(e.wpx)), (e.width = jt(e.wch)), (e.MDW = nr)) : typeof e.wch == "number" && ((e.width = jt(e.wch)), (e.wpx = St(e.width)), (e.MDW = nr)), e.customWidth && delete e.customWidth;
}
var e1 = 96,
  ri = e1;
function ai(e) {
  return (e * 96) / ri;
}
function Ja(e) {
  return (e * ri) / 96;
}
var r1 = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function a1(e, a, r, n) {
  a.Borders = [];
  var t = {},
    s = !1;
  (e[0].match(rr) || []).forEach(function (i) {
    var c = oe(i);
    switch (Rr(c[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        (t = {}), c.diagonalUp && (t.diagonalUp = Se(c.diagonalUp)), c.diagonalDown && (t.diagonalDown = Se(c.diagonalDown)), a.Borders.push(t);
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
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s) throw new Error("unrecognized " + c[0] + " in borders");
    }
  });
}
function t1(e, a, r, n) {
  a.Fills = [];
  var t = {},
    s = !1;
  (e[0].match(rr) || []).forEach(function (i) {
    var c = oe(i);
    switch (Rr(c[0])) {
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
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s) throw new Error("unrecognized " + c[0] + " in fills");
    }
  });
}
function n1(e, a, r, n) {
  a.Fonts = [];
  var t = {},
    s = !1;
  (e[0].match(rr) || []).forEach(function (i) {
    var c = oe(i);
    switch (Rr(c[0])) {
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
        c.val && (t.name = Ae(c.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        t.bold = c.val ? Se(c.val) : 1;
        break;
      case "<b/>":
        t.bold = 1;
        break;
      case "<i":
        t.italic = c.val ? Se(c.val) : 1;
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
        t.strike = c.val ? Se(c.val) : 1;
        break;
      case "<strike/>":
        t.strike = 1;
        break;
      case "<outline":
        t.outline = c.val ? Se(c.val) : 1;
        break;
      case "<outline/>":
        t.outline = 1;
        break;
      case "<shadow":
        t.shadow = c.val ? Se(c.val) : 1;
        break;
      case "<shadow/>":
        t.shadow = 1;
        break;
      case "<condense":
        t.condense = c.val ? Se(c.val) : 1;
        break;
      case "<condense/>":
        t.condense = 1;
        break;
      case "<extend":
        t.extend = c.val ? Se(c.val) : 1;
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
        c.codepage = t0[parseInt(c.val, 10)];
        break;
      case "<color":
        if ((t.color || (t.color = {}), c.auto && (t.color.auto = Se(c.auto)), c.rgb)) t.color.rgb = c.rgb.slice(-6);
        else if (c.indexed) {
          t.color.index = parseInt(c.indexed, 10);
          var f = na[t.color.index];
          t.color.index == 81 && (f = na[1]), f || (f = na[1]), (t.color.rgb = f[0].toString(16) + f[1].toString(16) + f[2].toString(16));
        } else c.theme && ((t.color.theme = parseInt(c.theme, 10)), c.tint && (t.color.tint = parseFloat(c.tint)), c.theme && r.themeElements && r.themeElements.clrScheme && (t.color.rgb = Ft(r.themeElements.clrScheme[t.color.theme].rgb, t.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        s = !0;
        break;
      case "</AlternateContent>":
        s = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s) throw new Error("unrecognized " + c[0] + " in fonts");
    }
  });
}
function s1(e, a, r) {
  a.NumberFmt = [];
  for (var n = Or(de), t = 0; t < n.length; ++t) a.NumberFmt[n[t]] = de[n[t]];
  var s = e[0].match(rr);
  if (s)
    for (t = 0; t < s.length; ++t) {
      var i = oe(s[t]);
      switch (Rr(i[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var c = Te(Ae(i.formatCode)),
              f = parseInt(i.numFmtId, 10);
            if (((a.NumberFmt[f] = c), f > 0)) {
              if (f > 392) {
                for (f = 392; f > 60 && a.NumberFmt[f] != null; --f);
                a.NumberFmt[f] = c;
              }
              ta(c, f);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (r.WTF) throw new Error("unrecognized " + i[0] + " in numFmts");
      }
    }
}
var xt = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
  dt = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function i1(e, a, r) {
  a.CellXf = [];
  var n,
    t = !1;
  (e[0].match(rr) || []).forEach(function (s) {
    var i = oe(s),
      c = 0;
    switch (Rr(i[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (n = i, delete n[0], c = 0; c < xt.length; ++c) n[xt[c]] && (n[xt[c]] = parseInt(n[xt[c]], 10));
        for (c = 0; c < dt.length; ++c) n[dt[c]] && (n[dt[c]] = Se(n[dt[c]]));
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
        i.vertical && (f.vertical = i.vertical), i.horizontal && (f.horizontal = i.horizontal), i.textRotation != null && (f.textRotation = i.textRotation), i.indent && (f.indent = i.indent), i.wrapText && (f.wrapText = Se(i.wrapText)), (n.alignment = f);
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
        if (r && r.WTF && !t) throw new Error("unrecognized " + i[0] + " in cellXfs");
    }
  });
}
var c1 = (function () {
  var a = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,
    r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,
    n = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,
    t = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,
    s = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function (c, f, l) {
    var o = {};
    if (!c) return o;
    c = c.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var u;
    return (u = c.match(a)) && s1(u, o, l), (u = c.match(t)) && n1(u, o, f, l), (u = c.match(n)) && t1(u, o, f, l), (u = c.match(s)) && a1(u, o, f, l), (u = c.match(r)) && i1(u, o, l), o;
  };
})();
function f1(e, a) {
  var r = e.read_shift(2),
    n = Qe(e);
  return [r, n];
}
function o1(e, a, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var t = mf(e);
  t.fItalic && (n.italic = 1), t.fCondense && (n.condense = 1), t.fExtend && (n.extend = 1), t.fShadow && (n.shadow = 1), t.fOutline && (n.outline = 1), t.fStrikeout && (n.strike = 1);
  var s = e.read_shift(2);
  switch ((s === 700 && (n.bold = 1), e.read_shift(2))) {
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var i = e.read_shift(1);
  i != 0 && (n.underline = i);
  var c = e.read_shift(1);
  c > 0 && (n.family = c);
  var f = e.read_shift(1);
  switch ((f > 0 && (n.charset = f), e.l++, (n.color = gf(e)), e.read_shift(1))) {
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return (n.name = Qe(e)), n;
}
var l1 = er;
function u1(e, a) {
  var r = e.l + a,
    n = e.read_shift(2),
    t = e.read_shift(2);
  return (e.l = r), { ixfe: n, numFmtId: t };
}
var h1 = er;
function x1(e, a, r) {
  var n = {};
  n.NumberFmt = [];
  for (var t in de) n.NumberFmt[t] = de[t];
  (n.CellXf = []), (n.Fonts = []);
  var s = [],
    i = !1;
  return (
    Hr(e, function (f, l, o) {
      switch (o) {
        case 44:
          (n.NumberFmt[f[0]] = f[1]), ta(f[1], f[0]);
          break;
        case 43:
          n.Fonts.push(f), f.color.theme != null && a && a.themeElements && a.themeElements.clrScheme && (f.color.rgb = Ft(a.themeElements.clrScheme[f.color.theme].rgb, f.color.tint || 0));
          break;
        case 1025:
          break;
        case 45:
          break;
        case 46:
          break;
        case 47:
          s[s.length - 1] == 617 && n.CellXf.push(f);
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
          i = !0;
          break;
        case 36:
          i = !1;
          break;
        case 37:
          s.push(o), (i = !0);
          break;
        case 38:
          s.pop(), (i = !1);
          break;
        default:
          if (l.T > 0) s.push(o);
          else if (l.T < 0) s.pop();
          else if (!i || (r.WTF && s[s.length - 1] != 37)) throw new Error("Unexpected record 0x" + o.toString(16));
      }
    }),
    n
  );
}
var d1 = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function v1(e, a, r) {
  a.themeElements.clrScheme = [];
  var n = {};
  (e[0].match(rr) || []).forEach(function (t) {
    var s = oe(t);
    switch (s[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        n.rgb = s.val;
        break;
      case "<a:sysClr":
        n.rgb = s.lastClr;
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
        s[0].charAt(1) === "/" ? ((a.themeElements.clrScheme[d1.indexOf(s[0])] = n), (n = {})) : (n.name = s[0].slice(3, s[0].length - 1));
        break;
      default:
        if (r && r.WTF) throw new Error("Unrecognized " + s[0] + " in clrScheme");
    }
  });
}
function p1() {}
function g1() {}
var m1 = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,
  _1 = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
  E1 = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function T1(e, a, r) {
  a.themeElements = {};
  var n;
  [
    ["clrScheme", m1, v1],
    ["fontScheme", _1, p1],
    ["fmtScheme", E1, g1],
  ].forEach(function (t) {
    if (!(n = e.match(t[1]))) throw new Error(t[0] + " not found in themeElements");
    t[2](n, a, r);
  });
}
var k1 = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function ti(e, a) {
  (!e || e.length === 0) && (e = w1());
  var r,
    n = {};
  if (!(r = e.match(k1))) throw new Error("themeElements not found in theme");
  return T1(r[0], n, a), (n.raw = e), n;
}
function w1(e, a) {
  if (a && a.themeXLSX) return a.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var r = [ds];
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
function A1(e, a, r) {
  var n = e.l + a,
    t = e.read_shift(4);
  if (t !== 124226) {
    if (!r.cellStyles) {
      e.l = n;
      return;
    }
    var s = e.slice(e.l);
    e.l = n;
    var i;
    try {
      i = xs(s, { type: "array" });
    } catch {
      return;
    }
    var c = ur(i, "theme/theme/theme1.xml", !0);
    if (c) return ti(c, r);
  }
}
function F1(e) {
  return e.read_shift(4);
}
function S1(e) {
  var a = {};
  switch (((a.xclrType = e.read_shift(2)), (a.nTintShade = e.read_shift(2)), a.xclrType)) {
    case 0:
      e.l += 4;
      break;
    case 1:
      a.xclrValue = C1(e, 4);
      break;
    case 2:
      a.xclrValue = Gs(e);
      break;
    case 3:
      a.xclrValue = F1(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return (e.l += 8), a;
}
function C1(e, a) {
  return er(e, a);
}
function y1(e, a) {
  return er(e, a);
}
function D1(e) {
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
      n[1] = S1(e);
      break;
    case 6:
      n[1] = y1(e, r);
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
function O1(e, a) {
  var r = e.l + a;
  e.l += 2;
  var n = e.read_shift(2);
  e.l += 2;
  for (var t = e.read_shift(2), s = []; t-- > 0; ) s.push(D1(e, r - e.l));
  return { ixfe: n, ext: s };
}
function R1(e, a) {
  a.forEach(function (r) {
    switch (r[0]) {
    }
  });
}
function I1(e, a) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Qe(e) };
}
function N1(e) {
  for (var a = [], r = e.read_shift(4); r-- > 0; ) a.push([e.read_shift(4), e.read_shift(4)]);
  return a;
}
function P1(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function L1(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] },
    t = r || {},
    s = [],
    i = !1,
    c = 2;
  return (
    Hr(e, function (f, l, o) {
      switch (o) {
        case 335:
          n.Types.push({ name: f.name });
          break;
        case 51:
          f.forEach(function (u) {
            c == 1 ? n.Cell.push({ type: n.Types[u[0] - 1].name, index: u[1] }) : c == 0 && n.Value.push({ type: n.Types[u[0] - 1].name, index: u[1] });
          });
          break;
        case 337:
          c = f ? 1 : 0;
          break;
        case 338:
          c = 2;
          break;
        case 35:
          s.push(o), (i = !0);
          break;
        case 36:
          s.pop(), (i = !1);
          break;
        default:
          if (!l.T) {
            if (!i || (t.WTF && s[s.length - 1] != 35)) throw new Error("Unexpected record 0x" + o.toString(16));
          }
      }
    }),
    n
  );
}
function M1(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] };
  if (!e) return n;
  var t = !1,
    s = 2,
    i;
  return (
    e.replace(rr, function (c) {
      var f = oe(c);
      switch (Rr(f[0])) {
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
          for (var l = 0; l < n.Types.length; ++l) n.Types[l].name == f.name && (i = n.Types[l]);
          break;
        case "</futureMetadata>":
          break;
        case "<bk>":
          break;
        case "</bk>":
          break;
        case "<rc":
          s == 1 ? n.Cell.push({ type: n.Types[f.t - 1].name, index: +f.v }) : s == 0 && n.Value.push({ type: n.Types[f.t - 1].name, index: +f.v });
          break;
        case "</rc>":
          break;
        case "<cellMetadata":
          s = 1;
          break;
        case "</cellMetadata>":
          s = 2;
          break;
        case "<valueMetadata":
          s = 0;
          break;
        case "</valueMetadata>":
          s = 2;
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
          if (!i) break;
          i.offsets || (i.offsets = []), i.offsets.push(+f.i);
          break;
        default:
          if (!t && r.WTF) throw new Error("unrecognized " + f[0] + " in metadata");
      }
      return c;
    }),
    n
  );
}
function B1(e) {
  var a = [];
  if (!e) return a;
  var r = 1;
  return (
    (e.match(rr) || []).forEach(function (n) {
      var t = oe(n);
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
function b1(e) {
  var a = {};
  a.i = e.read_shift(4);
  var r = {};
  (r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (a.r = he(r));
  var n = e.read_shift(1);
  return n & 2 && (a.l = "1"), n & 8 && (a.a = "1"), a;
}
function U1(e, a, r) {
  var n = [];
  return (
    Hr(e, function (s, i, c) {
      switch (c) {
        case 63:
          n.push(s);
          break;
        default:
          if (!i.T) throw new Error("Unexpected record 0x" + c.toString(16));
      }
    }),
    n
  );
}
function H1(e, a, r, n) {
  if (!e) return e;
  var t = n || {},
    s = !1;
  Hr(
    e,
    function (c, f, l) {
      switch (l) {
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
          s = !0;
          break;
        case 36:
          s = !1;
          break;
        default:
          if (!f.T) {
            if (!s || t.WTF) throw new Error("Unexpected record 0x" + l.toString(16));
          }
      }
    },
    t
  );
}
function V1(e, a) {
  if (!e) return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return a["!id"][r].Target;
}
function kn(e, a, r, n) {
  var t = Array.isArray(e),
    s;
  a.forEach(function (i) {
    var c = sr(i.ref);
    if ((t ? (e[c.r] || (e[c.r] = []), (s = e[c.r][c.c])) : (s = e[i.ref]), !s)) {
      (s = { t: "z" }), t ? (e[c.r][c.c] = s) : (e[i.ref] = s);
      var f = Oe(e["!ref"] || "BDWGO1000001:A1");
      f.s.r > c.r && (f.s.r = c.r), f.e.r < c.r && (f.e.r = c.r), f.s.c > c.c && (f.s.c = c.c), f.e.c < c.c && (f.e.c = c.c);
      var l = _e(f);
      l !== e["!ref"] && (e["!ref"] = l);
    }
    s.c || (s.c = []);
    var o = { a: i.author, t: i.t, r: i.r, T: r };
    i.h && (o.h = i.h);
    for (var u = s.c.length - 1; u >= 0; --u) {
      if (!r && s.c[u].T) return;
      r && !s.c[u].T && s.c.splice(u, 1);
    }
    if (r && n) {
      for (u = 0; u < n.length; ++u)
        if (o.a == n[u].id) {
          o.a = n[u].name || o.a;
          break;
        }
    }
    s.c.push(o);
  });
}
function W1(e, a) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var r = [],
    n = [],
    t = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  t &&
    t[1] &&
    t[1].split(/<\/\w*:?author>/).forEach(function (i) {
      if (!(i === "" || i.trim() === "")) {
        var c = i.match(/<(?:\w+:)?author[^>]*>(.*)/);
        c && r.push(c[1]);
      }
    });
  var s = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return (
    s &&
      s[1] &&
      s[1].split(/<\/\w*:?comment>/).forEach(function (i) {
        if (!(i === "" || i.trim() === "")) {
          var c = i.match(/<(?:\w+:)?comment[^>]*>/);
          if (c) {
            var f = oe(c[0]),
              l = { author: (f.authorId && r[f.authorId]) || "sheetjsghost", ref: f.ref, guid: f.guid },
              o = sr(f.ref);
            if (!(a.sheetRows && a.sheetRows <= o.r)) {
              var u = i.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),
                x = (!!u && !!u[1] && E0(u[1])) || { r: "", t: "", h: "" };
              (l.r = x.r),
                x.r == "<t></t>" && (x.t = x.h = ""),
                (l.t = (x.t || "")
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
                a.cellHTML && (l.h = x.h),
                n.push(l);
            }
          }
        }
      }),
    n
  );
}
function G1(e, a) {
  var r = [],
    n = !1,
    t = {},
    s = 0;
  return (
    e.replace(rr, function (c, f) {
      var l = oe(c);
      switch (Rr(l[0])) {
        case "<?xml":
          break;
        case "<ThreadedComments":
          break;
        case "</ThreadedComments>":
          break;
        case "<threadedComment":
          t = { author: l.personId, guid: l.id, ref: l.ref, T: 1 };
          break;
        case "</threadedComment>":
          t.t != null && r.push(t);
          break;
        case "<text>":
        case "<text":
          s = f + c.length;
          break;
        case "</text>":
          t.t = e
            .slice(s, f)
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
          if (!n && a.WTF) throw new Error("unrecognized " + l[0] + " in threaded comments");
      }
      return c;
    }),
    r
  );
}
function X1(e, a) {
  var r = [],
    n = !1;
  return (
    e.replace(rr, function (s) {
      var i = oe(s);
      switch (Rr(i[0])) {
        case "<?xml":
          break;
        case "<personList":
          break;
        case "</personList>":
          break;
        case "<person":
          r.push({ name: i.displayname, id: i.id });
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
          if (!n && a.WTF) throw new Error("unrecognized " + i[0] + " in threaded comments");
      }
      return s;
    }),
    r
  );
}
function z1(e) {
  var a = {};
  a.iauthor = e.read_shift(4);
  var r = ua(e);
  return (a.rfx = r.s), (a.ref = he(r.s)), (e.l += 16), a;
}
var $1 = Qe;
function K1(e, a) {
  var r = [],
    n = [],
    t = {},
    s = !1;
  return (
    Hr(e, function (c, f, l) {
      switch (l) {
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
          if (!f.T) {
            if (!s || a.WTF) throw new Error("Unexpected record 0x" + l.toString(16));
          }
      }
    }),
    r
  );
}
var Y1 = "application/vnd.ms-office.vbaProject";
function j1(e) {
  var a = me.utils.cfb_new({ root: "R" });
  return (
    e.FullPaths.forEach(function (r, n) {
      if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
        var t = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
        me.utils.cfb_add(a, t, e.FileIndex[n].content);
      }
    }),
    me.write(a)
  );
}
function J1() {
  return { "!type": "dialog" };
}
function Z1() {
  return { "!type": "dialog" };
}
function q1() {
  return { "!type": "macro" };
}
function Q1() {
  return { "!type": "macro" };
}
var _a = (function () {
    var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      a = { r: 0, c: 0 };
    function r(n, t, s, i) {
      var c = !1,
        f = !1;
      s.length == 0 ? (f = !0) : s.charAt(0) == "[" && ((f = !0), (s = s.slice(1, -1))), i.length == 0 ? (c = !0) : i.charAt(0) == "[" && ((c = !0), (i = i.slice(1, -1)));
      var l = s.length > 0 ? parseInt(s, 10) | 0 : 0,
        o = i.length > 0 ? parseInt(i, 10) | 0 : 0;
      return c ? (o += a.c) : --o, f ? (l += a.r) : --l, t + (c ? "" : "$") + Ve(o) + (f ? "" : "$") + Ke(l);
    }
    return function (t, s) {
      return (a = s), t.replace(e, r);
    };
  })(),
  ni = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  eu = (function () {
    return function (a, r) {
      return a.replace(ni, function (n, t, s, i, c, f) {
        var l = d0(i) - (s ? 0 : r.c),
          o = x0(f) - (c ? 0 : r.r),
          u = o == 0 ? "" : c ? o + 1 : "[" + o + "]",
          x = l == 0 ? "" : s ? l + 1 : "[" + l + "]";
        return t + "R" + u + "C" + x;
      });
    };
  })();
function si(e, a) {
  return e.replace(ni, function (r, n, t, s, i, c) {
    return n + (t == "$" ? t + s : Ve(d0(s) + a.c)) + (i == "$" ? i + c : Ke(x0(c) + a.r));
  });
}
function ru(e, a, r) {
  var n = Aa(a),
    t = n.s,
    s = sr(r),
    i = { r: s.r - t.r, c: s.c - t.c };
  return si(e, i);
}
function au(e) {
  return e.length != 1;
}
function wn(e) {
  return e.replace(/_xlfn\./g, "");
}
function Le(e) {
  e.l += 1;
}
function Jr(e, a) {
  var r = e.read_shift(a == 1 ? 1 : 2);
  return [r & 16383, (r >> 14) & 1, (r >> 15) & 1];
}
function ii(e, a, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return ci(e);
    r.biff == 12 && (n = 4);
  }
  var t = e.read_shift(n),
    s = e.read_shift(n),
    i = Jr(e, 2),
    c = Jr(e, 2);
  return { s: { r: t, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: s, c: c[0], cRel: c[1], rRel: c[2] } };
}
function ci(e) {
  var a = Jr(e, 2),
    r = Jr(e, 2),
    n = e.read_shift(1),
    t = e.read_shift(1);
  return { s: { r: a[0], c: n, cRel: a[1], rRel: a[2] }, e: { r: r[0], c: t, cRel: r[1], rRel: r[2] } };
}
function tu(e, a, r) {
  if (r.biff < 8) return ci(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2),
    t = e.read_shift(r.biff == 12 ? 4 : 2),
    s = Jr(e, 2),
    i = Jr(e, 2);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: t, c: i[0], cRel: i[1], rRel: i[2] } };
}
function fi(e, a, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return nu(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
    t = Jr(e, 2);
  return { r: n, c: t[0], cRel: t[1], rRel: t[2] };
}
function nu(e) {
  var a = Jr(e, 2),
    r = e.read_shift(1);
  return { r: a[0], c: r, cRel: a[1], rRel: a[2] };
}
function su(e) {
  var a = e.read_shift(2),
    r = e.read_shift(2);
  return { r: a, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function iu(e, a, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return cu(e);
  var t = e.read_shift(n >= 12 ? 4 : 2),
    s = e.read_shift(2),
    i = (s & 16384) >> 14,
    c = (s & 32768) >> 15;
  if (((s &= 16383), c == 1)) for (; t > 524287; ) t -= 1048576;
  if (i == 1) for (; s > 8191; ) s = s - 16384;
  return { r: t, c: s, cRel: i, rRel: c };
}
function cu(e) {
  var a = e.read_shift(2),
    r = e.read_shift(1),
    n = (a & 32768) >> 15,
    t = (a & 16384) >> 14;
  return (a &= 16383), n == 1 && a >= 8192 && (a = a - 16384), t == 1 && r >= 128 && (r = r - 256), { r: a, c: r, cRel: t, rRel: n };
}
function fu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = ii(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, t];
}
function ou(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = e.read_shift(2, "i"),
    s = 8;
  if (r)
    switch (r.biff) {
      case 5:
        (e.l += 12), (s = 6);
        break;
      case 12:
        s = 12;
        break;
    }
  var i = ii(e, s, r);
  return [n, t, i];
}
function lu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n];
}
function uu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = e.read_shift(2),
    s = 8;
  if (r)
    switch (r.biff) {
      case 5:
        (e.l += 12), (s = 6);
        break;
      case 12:
        s = 12;
        break;
    }
  return (e.l += s), [n, t];
}
function hu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = tu(e, a - 1, r);
  return [n, t];
}
function xu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n];
}
function An(e) {
  var a = e[e.l + 1] & 1,
    r = 1;
  return (e.l += 4), [a, r];
}
function du(e, a, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), t = [], s = 0; s <= n; ++s) t.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return t;
}
function vu(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function pu(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function gu(e) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [a, e.read_shift(2)];
}
function mu(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += r && r.biff == 2 ? 3 : 4), [n];
}
function oi(e) {
  var a = e.read_shift(1),
    r = e.read_shift(1);
  return [a, r];
}
function _u(e) {
  return e.read_shift(2), oi(e);
}
function Eu(e) {
  return e.read_shift(2), oi(e);
}
function Tu(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = fi(e, 0, r);
  return [n, t];
}
function ku(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = iu(e, 0, r);
  return [n, t];
}
function wu(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var s = fi(e, 0, r);
  return [n, t, s];
}
function Au(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [Fh[t], hi[t], n];
}
function Fu(e, a, r) {
  var n = e[e.l++],
    t = e.read_shift(1),
    s = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : Su(e);
  return [t, (s[0] === 0 ? hi : Ah)[s[1]]];
}
function Su(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Cu(e, a, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function yu(e, a, r) {
  if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2),
    t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Du(e) {
  return e.l++, ha[e.read_shift(1)];
}
function Ou(e) {
  return e.l++, e.read_shift(2);
}
function Ru(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function Iu(e) {
  return e.l++, Ze(e);
}
function Nu(e, a, r) {
  return e.l++, rt(e, a - 1, r);
}
function Pu(e, a) {
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
      (r[1] = ha[e[e.l]]), (e.l += a == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = Ze(e);
      break;
    case 2:
      r[1] = xa(e, 0, { biff: a > 0 && a < 8 ? 2 : a });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Lu(e, a, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), t = [], s = 0; s != n; ++s) t.push((r.biff == 12 ? ua : Ot)(e));
  return t;
}
function Mu(e, a, r) {
  var n = 0,
    t = 0;
  r.biff == 12 ? ((n = e.read_shift(4)), (t = e.read_shift(4))) : ((t = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))), r.biff >= 2 && r.biff < 8 && (--n, --t == 0 && (t = 256));
  for (var s = 0, i = []; s != n && (i[s] = []); ++s) for (var c = 0; c != t; ++c) i[s][c] = Pu(e, r.biff);
  return i;
}
function Bu(e, a, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    t = !r || r.biff >= 8 ? 4 : 2,
    s = e.read_shift(t);
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
  return [n, 0, s];
}
function bu(e, a, r) {
  if (r.biff == 5) return Uu(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2),
    s = e.read_shift(4);
  return [n, t, s];
}
function Uu(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [a, r, n];
}
function Hu(e, a, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Vu(e, a, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Wu(e, a, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Gu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5,
    t = e.read_shift(2),
    s = 4;
  if (r)
    switch (r.biff) {
      case 5:
        s = 15;
        break;
      case 12:
        s = 6;
        break;
    }
  return (e.l += s), [n, t];
}
var Xu = er,
  zu = er,
  $u = er;
function tt(e, a, r) {
  return (e.l += 2), [su(e)];
}
function k0(e) {
  return (e.l += 6), [];
}
var Ku = tt,
  Yu = k0,
  ju = k0,
  Ju = tt;
function li(e) {
  return (e.l += 2), [be(e), e.read_shift(2) & 1];
}
var Zu = tt,
  qu = li,
  Qu = k0,
  eh = tt,
  rh = tt,
  ah = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function th(e) {
  e.l += 2;
  var a = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    t = e.read_shift(2),
    s = e.read_shift(2),
    i = ah[(r >> 2) & 31];
  return { ixti: a, coltype: r & 3, rt: i, idx: n, c: t, C: s };
}
function nh(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function sh(e, a, r) {
  return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ["PTGSHEET"];
}
function ih(e, a, r) {
  return (e.l += r.biff == 2 ? 4 : 5), ["PTGENDSHEET"];
}
function ch(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [a, r];
}
function fh(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [a, r];
}
function oh(e) {
  return (e.l += 4), [0, 0];
}
var Fn = {
    1: { n: "PtgExp", f: yu },
    2: { n: "PtgTbl", f: $u },
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
    23: { n: "PtgStr", f: Nu },
    26: { n: "PtgSheet", f: sh },
    27: { n: "PtgEndSheet", f: ih },
    28: { n: "PtgErr", f: Du },
    29: { n: "PtgBool", f: Ru },
    30: { n: "PtgInt", f: Ou },
    31: { n: "PtgNum", f: Iu },
    32: { n: "PtgArray", f: xu },
    33: { n: "PtgFunc", f: Au },
    34: { n: "PtgFuncVar", f: Fu },
    35: { n: "PtgName", f: Bu },
    36: { n: "PtgRef", f: Tu },
    37: { n: "PtgArea", f: fu },
    38: { n: "PtgMemArea", f: Hu },
    39: { n: "PtgMemErr", f: Xu },
    40: { n: "PtgMemNoMem", f: zu },
    41: { n: "PtgMemFunc", f: Vu },
    42: { n: "PtgRefErr", f: Wu },
    43: { n: "PtgAreaErr", f: lu },
    44: { n: "PtgRefN", f: ku },
    45: { n: "PtgAreaN", f: hu },
    46: { n: "PtgMemAreaN", f: ch },
    47: { n: "PtgMemNoMemN", f: fh },
    57: { n: "PtgNameX", f: bu },
    58: { n: "PtgRef3d", f: wu },
    59: { n: "PtgArea3d", f: ou },
    60: { n: "PtgRefErr3d", f: Gu },
    61: { n: "PtgAreaErr3d", f: uu },
    255: {},
  },
  lh = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 },
  uh = { 1: { n: "PtgElfLel", f: li }, 2: { n: "PtgElfRw", f: eh }, 3: { n: "PtgElfCol", f: Ku }, 6: { n: "PtgElfRwV", f: rh }, 7: { n: "PtgElfColV", f: Ju }, 10: { n: "PtgElfRadical", f: Zu }, 11: { n: "PtgElfRadicalS", f: Qu }, 13: { n: "PtgElfColS", f: Yu }, 15: { n: "PtgElfColSV", f: ju }, 16: { n: "PtgElfRadicalLel", f: qu }, 25: { n: "PtgList", f: th }, 29: { n: "PtgSxName", f: nh }, 255: {} },
  hh = { 0: { n: "PtgAttrNoop", f: oh }, 1: { n: "PtgAttrSemi", f: mu }, 2: { n: "PtgAttrIf", f: pu }, 4: { n: "PtgAttrChoose", f: du }, 8: { n: "PtgAttrGoto", f: vu }, 16: { n: "PtgAttrSum", f: Cu }, 32: { n: "PtgAttrBaxcel", f: An }, 33: { n: "PtgAttrBaxcel", f: An }, 64: { n: "PtgAttrSpace", f: _u }, 65: { n: "PtgAttrSpaceSemi", f: Eu }, 128: { n: "PtgAttrIfError", f: gu }, 255: {} };
function nt(e, a, r, n) {
  if (n.biff < 8) return er(e, a);
  for (var t = e.l + a, s = [], i = 0; i !== r.length; ++i)
    switch (r[i][0]) {
      case "PtgArray":
        (r[i][1] = Mu(e, 0, n)), s.push(r[i][1]);
        break;
      case "PtgMemArea":
        (r[i][2] = Lu(e, r[i][1], n)), s.push(r[i][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && ((r[i][1][1] = e.read_shift(4)), s.push(r[i][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[i][0];
    }
  return (a = t - e.l), a !== 0 && s.push(er(e, a)), s;
}
function st(e, a, r) {
  for (var n = e.l + a, t, s, i = []; n != e.l; ) (a = n - e.l), (s = e[e.l]), (t = Fn[s] || Fn[lh[s]]), (s === 24 || s === 25) && (t = (s === 24 ? uh : hh)[e[e.l + 1]]), !t || !t.f ? er(e, a) : i.push([t.n, t.f(e, a, r)]);
  return i;
}
function xh(e) {
  for (var a = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], t = [], s = 0; s < n.length; ++s) {
      var i = n[s];
      if (i)
        switch (i[0]) {
          case 2:
            t.push('"' + i[1].replace(/"/g, '""') + '"');
            break;
          default:
            t.push(i[1]);
        }
      else t.push("");
    }
    a.push(t.join(","));
  }
  return a.join(";");
}
var dh = { PtgAdd: "+", PtgConcat: "&", PtgDiv: "/", PtgEq: "=", PtgGe: ">=", PtgGt: ">", PtgLe: "<=", PtgLt: "<", PtgMul: "*", PtgNe: "<>", PtgPower: "^", PtgSub: "-" };
function vh(e, a) {
  if (!e && !(a && a.biff <= 5 && a.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function ui(e, a, r) {
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
        .map(function (s) {
          return s.Name;
        })
        .join(";;");
    default:
      return e[n[0]][0][3] ? ((t = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4"), n[1] == n[2] ? t : t + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function Sn(e, a, r) {
  var n = ui(e, a, r);
  return n == "#REF" ? n : vh(n, r);
}
function Je(e, a, r, n, t) {
  var s = (t && t.biff) || 8,
    i = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    c = [],
    f,
    l,
    o,
    u = 0,
    x = 0,
    d,
    v = "";
  if (!e[0] || !e[0][0]) return "";
  for (var h = -1, g = "", A = 0, y = e[0].length; A < y; ++A) {
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
        if (((f = c.pop()), (l = c.pop()), h >= 0)) {
          switch (e[0][h][1][0]) {
            case 0:
              g = De(" ", e[0][h][1][1]);
              break;
            case 1:
              g = De("\r", e[0][h][1][1]);
              break;
            default:
              if (((g = ""), t.WTF)) throw new Error("Unexpected PtgAttrSpaceType " + e[0][h][1][0]);
          }
          (l = l + g), (h = -1);
        }
        c.push(l + dh[_[0]] + f);
        break;
      case "PtgIsect":
        (f = c.pop()), (l = c.pop()), c.push(l + " " + f);
        break;
      case "PtgUnion":
        (f = c.pop()), (l = c.pop()), c.push(l + "," + f);
        break;
      case "PtgRange":
        (f = c.pop()), (l = c.pop()), c.push(l + ":" + f);
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
        (o = Ba(_[1][1], i, t)), c.push(ba(o, s));
        break;
      case "PtgRefN":
        (o = r ? Ba(_[1][1], r, t) : _[1][1]), c.push(ba(o, s));
        break;
      case "PtgRef3d":
        (u = _[1][1]), (o = Ba(_[1][2], i, t)), (v = Sn(n, u, t)), c.push(v + "!" + ba(o, s));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var N = _[1][0],
          b = _[1][1];
        N || (N = 0), (N &= 127);
        var R = N == 0 ? [] : c.slice(-N);
        (c.length -= N), b === "User" && (b = R.shift()), c.push(b + "(" + R.join(",") + ")");
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
        (d = sn(_[1][1], r ? { s: r } : i, t)), c.push(Bt(d, t));
        break;
      case "PtgArea":
        (d = sn(_[1][1], i, t)), c.push(Bt(d, t));
        break;
      case "PtgArea3d":
        (u = _[1][1]), (d = _[1][2]), (v = Sn(n, u, t)), c.push(v + "!" + Bt(d, t));
        break;
      case "PtgAttrSum":
        c.push("SUM(" + c.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        x = _[1][2];
        var F = (n.names || [])[x - 1] || (n[0] || [])[x],
          W = F ? F.Name : "SH33TJSNAME" + String(x);
        W && W.slice(0, 6) == "_xlfn." && !t.xlfn && (W = W.slice(6)), c.push(W);
        break;
      case "PtgNameX":
        var D = _[1][1];
        x = _[1][2];
        var X;
        if (t.biff <= 5) D < 0 && (D = -D), n[D] && (X = n[D][x]);
        else {
          var U = "";
          if ((((n[D] || [])[0] || [])[0] == 14849 || (((n[D] || [])[0] || [])[0] == 1025 ? n[D][x] && n[D][x].itab > 0 && (U = n.SheetNames[n[D][x].itab - 1] + "!") : (U = n.SheetNames[x - 1] + "!")), n[D] && n[D][x])) U += n[D][x].Name;
          else if (n[0] && n[0][x]) U += n[0][x].Name;
          else {
            var P = (ui(n, D, t) || "").split(";;");
            P[x - 1] ? (U = P[x - 1]) : (U += "SH33TJSERRX");
          }
          c.push(U);
          break;
        }
        X || (X = { Name: "SH33TJSERRY" }), c.push(X.Name);
        break;
      case "PtgParen":
        var j = "(",
          fe = ")";
        if (h >= 0) {
          switch (((g = ""), e[0][h][1][0])) {
            case 2:
              j = De(" ", e[0][h][1][1]) + j;
              break;
            case 3:
              j = De("\r", e[0][h][1][1]) + j;
              break;
            case 4:
              fe = De(" ", e[0][h][1][1]) + fe;
              break;
            case 5:
              fe = De("\r", e[0][h][1][1]) + fe;
              break;
            default:
              if (t.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][h][1][0]);
          }
          h = -1;
        }
        c.push(j + c.pop() + fe);
        break;
      case "PtgRefErr":
        c.push("#REF!");
        break;
      case "PtgRefErr3d":
        c.push("#REF!");
        break;
      case "PtgExp":
        o = { c: _[1][1], r: _[1][0] };
        var re = { c: r.c, r: r.r };
        if (n.sharedf[he(o)]) {
          var ce = n.sharedf[he(o)];
          c.push(Je(ce, i, re, n, t));
        } else {
          var ie = !1;
          for (f = 0; f != n.arrayf.length; ++f)
            if (((l = n.arrayf[f]), !(o.c < l[0].s.c || o.c > l[0].e.c) && !(o.r < l[0].s.r || o.r > l[0].e.r))) {
              c.push(Je(l[1], i, re, n, t)), (ie = !0);
              break;
            }
          ie || c.push(_[1]);
        }
        break;
      case "PtgArray":
        c.push("{" + xh(_[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        h = A;
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
    var Fe = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (t.biff != 3 && h >= 0 && Fe.indexOf(e[0][A][0]) == -1) {
      _ = e[0][h];
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
      c.push((G ? g : "") + c.pop() + (G ? "" : g)), (h = -1);
    }
  }
  if (c.length > 1 && t.WTF) throw new Error("bad formula stack");
  return c[0];
}
function ph(e, a, r) {
  var n = e.l + a,
    t = r.biff == 2 ? 1 : 2,
    s,
    i = e.read_shift(t);
  if (i == 65535) return [[], er(e, a - 2)];
  var c = st(e, i, r);
  return a !== i + t && (s = nt(e, a - i - t, c, r)), (e.l = n), [c, s];
}
function gh(e, a, r) {
  var n = e.l + a,
    t = r.biff == 2 ? 1 : 2,
    s,
    i = e.read_shift(t);
  if (i == 65535) return [[], er(e, a - 2)];
  var c = st(e, i, r);
  return a !== i + t && (s = nt(e, a - i - t, c, r)), (e.l = n), [c, s];
}
function mh(e, a, r, n) {
  var t = e.l + a,
    s = st(e, n, r),
    i;
  return t !== e.l && (i = nt(e, t - e.l, s, r)), [s, i];
}
function _h(e, a, r) {
  var n = e.l + a,
    t,
    s = e.read_shift(2),
    i = st(e, s, r);
  return s == 65535 ? [[], er(e, a - 2)] : (a !== s + 2 && (t = nt(e, n - s - 2, i, r)), [i, t]);
}
function Eh(e) {
  var a;
  if (Mr(e, e.l + 6) !== 65535) return [Ze(e), "n"];
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
function Ht(e, a, r) {
  var n = e.l + a,
    t = Ir(e);
  r.biff == 2 && ++e.l;
  var s = Eh(e),
    i = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var c = gh(e, n - e.l, r);
  return { cell: t, val: s[0], formula: c, shared: (i >> 3) & 1, tt: s[1] };
}
function Rt(e, a, r) {
  var n = e.read_shift(4),
    t = st(e, n, r),
    s = e.read_shift(4),
    i = s > 0 ? nt(e, s, t, r) : null;
  return [t, i];
}
var Th = Rt,
  It = Rt,
  kh = Rt,
  wh = Rt,
  Ah = {
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
  hi = {
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
  Fh = {
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
function Cn(e) {
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
function Vt(e) {
  var a = e.split(":"),
    r = a[0].split(".")[0];
  return [r, a[0].split(".")[1] + (a.length > 1 ? ":" + (a[1].split(".")[1] || a[1].split(".")[0]) : "")];
}
var Wa = {},
  Ea = {};
function Ga(e, a) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    a == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function xi(e, a, r, n, t, s) {
  try {
    n.cellNF && (e.z = de[a]);
  } catch (c) {
    if (n.WTF) throw c;
  }
  if (!(e.t === "z" && !n.cellStyles)) {
    if ((e.t === "d" && typeof e.v == "string" && (e.v = Xe(e.v)), (!n || n.cellText !== !1) && e.t !== "z"))
      try {
        if ((de[a] == null && ta(Fc[a] || "General", a), e.t === "e")) e.w = e.w || ha[e.v];
        else if (a === 0)
          if (e.t === "n") (e.v | 0) === e.v ? (e.w = e.v.toString(10)) : (e.w = za(e.v));
          else if (e.t === "d") {
            var i = cr(e.v);
            (i | 0) === i ? (e.w = i.toString(10)) : (e.w = za(i));
          } else {
            if (e.v === void 0) return "";
            e.w = sa(e.v, Ea);
          }
        else e.t === "d" ? (e.w = mr(a, cr(e.v), Ea)) : (e.w = mr(a, e.v, Ea));
      } catch (c) {
        if (n.WTF) throw c;
      }
    if (n.cellStyles && r != null)
      try {
        (e.s = s.Fills[r]), e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && ((e.s.fgColor.rgb = Ft(t.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0)), n.WTF && (e.s.fgColor.raw_rgb = t.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && ((e.s.bgColor.rgb = Ft(t.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0)), n.WTF && (e.s.bgColor.raw_rgb = t.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (c) {
        if (n.WTF && s.Fills) throw c;
      }
  }
}
function Sh(e, a) {
  var r = Oe(a);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = _e(r));
}
var Ch = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,
  yh = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,
  Dh = /<(?:\w:)?hyperlink [^>]*>/gm,
  Oh = /"(\w*:\w*)"/,
  Rh = /<(?:\w:)?col\b[^>]*[\/]?>/g,
  Ih = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,
  Nh = /<(?:\w:)?pageMargins[^>]*\/>/g,
  di = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,
  Ph = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,
  Lh = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function Mh(e, a, r, n, t, s, i) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var c = a.dense ? [] : {},
    f = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    l = "",
    o = "",
    u = e.match(yh);
  u ? ((l = e.slice(0, u.index)), (o = e.slice(u.index + u[0].length))) : (l = o = e);
  var x = l.match(di);
  x ? w0(x[0], c, t, r) : (x = l.match(Ph)) && Bh(x[0], x[1] || "", c, t, r);
  var d = (l.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (d > 0) {
    var v = l.slice(d, d + 50).match(Oh);
    v && Sh(c, v[1]);
  }
  var h = l.match(Lh);
  h && h[1] && Gh(h[1], t);
  var g = [];
  if (a.cellStyles) {
    var A = l.match(Rh);
    A && Hh(g, A);
  }
  u && Xh(u[1], c, a, f, s, i);
  var y = o.match(Ih);
  y && (c["!autofilter"] = Vh(y[0]));
  var _ = [],
    N = o.match(Ch);
  if (N) for (d = 0; d != N.length; ++d) _[d] = Oe(N[d].slice(N[d].indexOf('"') + 1));
  var b = o.match(Dh);
  b && bh(c, b, n);
  var R = o.match(Nh);
  if ((R && (c["!margins"] = Uh(oe(R[0]))), !c["!ref"] && f.e.c >= f.s.c && f.e.r >= f.s.r && (c["!ref"] = _e(f)), a.sheetRows > 0 && c["!ref"])) {
    var F = Oe(c["!ref"]);
    a.sheetRows <= +F.e.r && ((F.e.r = a.sheetRows - 1), F.e.r > f.e.r && (F.e.r = f.e.r), F.e.r < F.s.r && (F.s.r = F.e.r), F.e.c > f.e.c && (F.e.c = f.e.c), F.e.c < F.s.c && (F.s.c = F.e.c), (c["!fullref"] = c["!ref"]), (c["!ref"] = _e(F)));
  }
  return g.length > 0 && (c["!cols"] = g), _.length > 0 && (c["!merges"] = _), c;
}
function w0(e, a, r, n) {
  var t = oe(e);
  r.Sheets[n] || (r.Sheets[n] = {}), t.codeName && (r.Sheets[n].CodeName = Te(Ae(t.codeName)));
}
function Bh(e, a, r, n, t) {
  w0(e.slice(0, e.indexOf(">")), r, n, t);
}
function bh(e, a, r) {
  for (var n = Array.isArray(e), t = 0; t != a.length; ++t) {
    var s = oe(Ae(a[t]), !0);
    if (!s.ref) return;
    var i = ((r || {})["!id"] || [])[s.id];
    i ? ((s.Target = i.Target), s.location && (s.Target += "#" + Te(s.location))) : ((s.Target = "#" + Te(s.location)), (i = { Target: s.Target, TargetMode: "Internal" })), (s.Rel = i), s.tooltip && ((s.Tooltip = s.tooltip), delete s.tooltip);
    for (var c = Oe(s.ref), f = c.s.r; f <= c.e.r; ++f)
      for (var l = c.s.c; l <= c.e.c; ++l) {
        var o = he({ c: l, r: f });
        n ? (e[f] || (e[f] = []), e[f][l] || (e[f][l] = { t: "z", v: void 0 }), (e[f][l].l = s)) : (e[o] || (e[o] = { t: "z", v: void 0 }), (e[o].l = s));
      }
  }
}
function Uh(e) {
  var a = {};
  return (
    ["left", "right", "top", "bottom", "header", "footer"].forEach(function (r) {
      e[r] && (a[r] = parseFloat(e[r]));
    }),
    a
  );
}
function Hh(e, a) {
  for (var r = !1, n = 0; n != a.length; ++n) {
    var t = oe(a[n], !0);
    t.hidden && (t.hidden = Se(t.hidden));
    var s = parseInt(t.min, 10) - 1,
      i = parseInt(t.max, 10) - 1;
    for (t.outlineLevel && (t.level = +t.outlineLevel || 0), delete t.min, delete t.max, t.width = +t.width, !r && t.width && ((r = !0), T0(t.width)), ka(t); s <= i; ) e[s++] = $e(t);
  }
}
function Vh(e) {
  var a = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return a;
}
var Wh = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function Gh(e, a) {
  a.Views || (a.Views = [{}]),
    (e.match(Wh) || []).forEach(function (r, n) {
      var t = oe(r);
      a.Views[n] || (a.Views[n] = {}), +t.zoomScale && (a.Views[n].zoom = +t.zoomScale), Se(t.rightToLeft) && (a.Views[n].RTL = !0);
    });
}
var Xh = (function () {
  var e = /<(?:\w+:)?c[ \/>]/,
    a = /<\/(?:\w+:)?row>/,
    r = /r=["']([^"']*)["']/,
    n = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,
    t = /ref=["']([^"']*)["']/,
    s = $a("v"),
    i = $a("f");
  return function (f, l, o, u, x, d) {
    for (var v = 0, h = "", g = [], A = [], y = 0, _ = 0, N = 0, b = "", R, F, W = 0, D = 0, X, U, P = 0, j = 0, fe = Array.isArray(d.CellXf), re, ce = [], ie = [], Fe = Array.isArray(l), G = [], le = {}, ue = !1, S = !!o.sheetStubs, H = f.split(a), I = 0, O = H.length; I != O; ++I) {
      h = H[I].trim();
      var K = h.length;
      if (K !== 0) {
        var ee = 0;
        e: for (v = 0; v < K; ++v)
          switch (h[v]) {
            case ">":
              if (h[v - 1] != "/") {
                ++v;
                break e;
              }
              if (o && o.cellStyles) {
                if (((F = oe(h.slice(ee, v), !0)), (W = F.r != null ? parseInt(F.r, 10) : W + 1), (D = -1), o.sheetRows && o.sheetRows < W)) continue;
                (le = {}), (ue = !1), F.ht && ((ue = !0), (le.hpt = parseFloat(F.ht)), (le.hpx = Ja(le.hpt))), F.hidden == "1" && ((ue = !0), (le.hidden = !0)), F.outlineLevel != null && ((ue = !0), (le.level = +F.outlineLevel)), ue && (G[W - 1] = le);
              }
              break;
            case "<":
              ee = v;
              break;
          }
        if (ee >= v) break;
        if (((F = oe(h.slice(ee, v), !0)), (W = F.r != null ? parseInt(F.r, 10) : W + 1), (D = -1), !(o.sheetRows && o.sheetRows < W))) {
          u.s.r > W - 1 && (u.s.r = W - 1), u.e.r < W - 1 && (u.e.r = W - 1), o && o.cellStyles && ((le = {}), (ue = !1), F.ht && ((ue = !0), (le.hpt = parseFloat(F.ht)), (le.hpx = Ja(le.hpt))), F.hidden == "1" && ((ue = !0), (le.hidden = !0)), F.outlineLevel != null && ((ue = !0), (le.level = +F.outlineLevel)), ue && (G[W - 1] = le)), (g = h.slice(v).split(e));
          for (var ne = 0; ne != g.length && g[ne].trim().charAt(0) == "<"; ++ne);
          for (g = g.slice(ne), v = 0; v != g.length; ++v)
            if (((h = g[v].trim()), h.length !== 0)) {
              if (((A = h.match(r)), (y = v), (_ = 0), (N = 0), (h = "<c " + (h.slice(0, 1) == "<" ? ">" : "") + h), A != null && A.length === 2)) {
                for (y = 0, b = A[1], _ = 0; _ != b.length && !((N = b.charCodeAt(_) - 64) < 1 || N > 26); ++_) y = 26 * y + N;
                --y, (D = y);
              } else ++D;
              for (_ = 0; _ != h.length && h.charCodeAt(_) !== 62; ++_);
              if ((++_, (F = oe(h.slice(0, _), !0)), F.r || (F.r = he({ r: W - 1, c: D })), (b = h.slice(_)), (R = { t: "" }), (A = b.match(s)) != null && A[1] !== "" && (R.v = Te(A[1])), o.cellFormula)) {
                if ((A = b.match(i)) != null && A[1] !== "") {
                  if (
                    ((R.f = Te(Ae(A[1])).replace(
                      /\r\n/g,
                      `
`
                    )),
                    o.xlfn || (R.f = wn(R.f)),
                    A[0].indexOf('t="array"') > -1)
                  )
                    (R.F = (b.match(t) || [])[1]), R.F.indexOf(":") > -1 && ce.push([Oe(R.F), R.F]);
                  else if (A[0].indexOf('t="shared"') > -1) {
                    U = oe(A[0]);
                    var q = Te(Ae(A[1]));
                    o.xlfn || (q = wn(q)), (ie[parseInt(U.si, 10)] = [U, q, F.r]);
                  }
                } else (A = b.match(/<f[^>]*\/>/)) && ((U = oe(A[0])), ie[U.si] && (R.f = ru(ie[U.si][1], ie[U.si][2], F.r)));
                var J = sr(F.r);
                for (_ = 0; _ < ce.length; ++_) J.r >= ce[_][0].s.r && J.r <= ce[_][0].e.r && J.c >= ce[_][0].s.c && J.c <= ce[_][0].e.c && (R.F = ce[_][1]);
              }
              if (F.t == null && R.v === void 0)
                if (R.f || R.F) (R.v = 0), (R.t = "n");
                else if (S) R.t = "z";
                else continue;
              else R.t = F.t || "n";
              switch ((u.s.c > D && (u.s.c = D), u.e.c < D && (u.e.c = D), R.t)) {
                case "n":
                  if (R.v == "" || R.v == null) {
                    if (!S) continue;
                    R.t = "z";
                  } else R.v = parseFloat(R.v);
                  break;
                case "s":
                  if (typeof R.v > "u") {
                    if (!S) continue;
                    R.t = "z";
                  } else (X = Wa[parseInt(R.v, 10)]), (R.v = X.t), (R.r = X.r), o.cellHTML && (R.h = X.h);
                  break;
                case "str":
                  (R.t = "s"), (R.v = R.v != null ? Ae(R.v) : ""), o.cellHTML && (R.h = l0(R.v));
                  break;
                case "inlineStr":
                  (A = b.match(n)), (R.t = "s"), A != null && (X = E0(A[1])) ? ((R.v = X.t), o.cellHTML && (R.h = X.h)) : (R.v = "");
                  break;
                case "b":
                  R.v = Se(R.v);
                  break;
                case "d":
                  o.cellDates ? (R.v = Xe(R.v, 1)) : ((R.v = cr(Xe(R.v, 1))), (R.t = "n"));
                  break;
                case "e":
                  (!o || o.cellText !== !1) && (R.w = R.v), (R.v = Ls[R.v]);
                  break;
              }
              if (((P = j = 0), (re = null), fe && F.s !== void 0 && ((re = d.CellXf[F.s]), re != null && (re.numFmtId != null && (P = re.numFmtId), o.cellStyles && re.fillId != null && (j = re.fillId))), xi(R, P, j, o, x, d), o.cellDates && fe && R.t == "n" && wa(de[P]) && ((R.t = "d"), (R.v = Dt(R.v))), F.cm && o.xlmeta)) {
                var Ee = (o.xlmeta.Cell || [])[+F.cm - 1];
                Ee && Ee.type == "XLDAPR" && (R.D = !0);
              }
              if (Fe) {
                var C = sr(F.r);
                l[C.r] || (l[C.r] = []), (l[C.r][C.c] = R);
              } else l[F.r] = R;
            }
        }
      }
    }
    G.length > 0 && (l["!rows"] = G);
  };
})();
function zh(e, a) {
  var r = {},
    n = e.l + a;
  (r.r = e.read_shift(4)), (e.l += 4);
  var t = e.read_shift(2);
  e.l += 1;
  var s = e.read_shift(1);
  return (e.l = n), s & 7 && (r.level = s & 7), s & 16 && (r.hidden = !0), s & 32 && (r.hpt = t / 20), r;
}
var $h = ua;
function Kh() {}
function Yh(e, a) {
  var r = {},
    n = e[e.l];
  return ++e.l, (r.above = !(n & 64)), (r.left = !(n & 128)), (e.l += 18), (r.name = vf(e)), r;
}
function jh(e) {
  var a = _r(e);
  return [a];
}
function Jh(e) {
  var a = la(e);
  return [a];
}
function Zh(e) {
  var a = _r(e),
    r = e.read_shift(1);
  return [a, r, "b"];
}
function qh(e) {
  var a = la(e),
    r = e.read_shift(1);
  return [a, r, "b"];
}
function Qh(e) {
  var a = _r(e),
    r = e.read_shift(1);
  return [a, r, "e"];
}
function ex(e) {
  var a = la(e),
    r = e.read_shift(1);
  return [a, r, "e"];
}
function rx(e) {
  var a = _r(e),
    r = e.read_shift(4);
  return [a, r, "s"];
}
function ax(e) {
  var a = la(e),
    r = e.read_shift(4);
  return [a, r, "s"];
}
function tx(e) {
  var a = _r(e),
    r = Ze(e);
  return [a, r, "n"];
}
function vi(e) {
  var a = la(e),
    r = Ze(e);
  return [a, r, "n"];
}
function nx(e) {
  var a = _r(e),
    r = g0(e);
  return [a, r, "n"];
}
function sx(e) {
  var a = la(e),
    r = g0(e);
  return [a, r, "n"];
}
function ix(e) {
  var a = _r(e),
    r = v0(e);
  return [a, r, "is"];
}
function cx(e) {
  var a = _r(e),
    r = Qe(e);
  return [a, r, "str"];
}
function fx(e) {
  var a = la(e),
    r = Qe(e);
  return [a, r, "str"];
}
function ox(e, a, r) {
  var n = e.l + a,
    t = _r(e);
  t.r = r["!row"];
  var s = e.read_shift(1),
    i = [t, s, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var c = It(e, n - e.l, r);
    i[3] = Je(c, null, t, r.supbooks, r);
  } else e.l = n;
  return i;
}
function lx(e, a, r) {
  var n = e.l + a,
    t = _r(e);
  t.r = r["!row"];
  var s = e.read_shift(1),
    i = [t, s, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var c = It(e, n - e.l, r);
    i[3] = Je(c, null, t, r.supbooks, r);
  } else e.l = n;
  return i;
}
function ux(e, a, r) {
  var n = e.l + a,
    t = _r(e);
  t.r = r["!row"];
  var s = Ze(e),
    i = [t, s, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var c = It(e, n - e.l, r);
    i[3] = Je(c, null, t, r.supbooks, r);
  } else e.l = n;
  return i;
}
function hx(e, a, r) {
  var n = e.l + a,
    t = _r(e);
  t.r = r["!row"];
  var s = Qe(e),
    i = [t, s, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var c = It(e, n - e.l, r);
    i[3] = Je(c, null, t, r.supbooks, r);
  } else e.l = n;
  return i;
}
var xx = ua;
function dx(e, a) {
  var r = e.l + a,
    n = ua(e),
    t = p0(e),
    s = Qe(e),
    i = Qe(e),
    c = Qe(e);
  e.l = r;
  var f = { rfx: n, relId: t, loc: s, display: c };
  return i && (f.Tooltip = i), f;
}
function vx() {}
function px(e, a, r) {
  var n = e.l + a,
    t = Is(e),
    s = e.read_shift(1),
    i = [t];
  if (((i[2] = s), r.cellFormula)) {
    var c = Th(e, n - e.l, r);
    i[1] = c;
  } else e.l = n;
  return i;
}
function gx(e, a, r) {
  var n = e.l + a,
    t = ua(e),
    s = [t];
  if (r.cellFormula) {
    var i = wh(e, n - e.l, r);
    (s[1] = i), (e.l = n);
  } else e.l = n;
  return s;
}
var mx = ["left", "right", "top", "bottom", "header", "footer"];
function _x(e) {
  var a = {};
  return (
    mx.forEach(function (r) {
      a[r] = Ze(e);
    }),
    a
  );
}
function Ex(e) {
  var a = e.read_shift(2);
  return (e.l += 28), { RTL: a & 32 };
}
function Tx() {}
function kx() {}
function wx(e, a, r, n, t, s, i) {
  if (!e) return e;
  var c = a || {};
  n || (n = { "!id": {} });
  var f = c.dense ? [] : {},
    l,
    o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    u = !1,
    x = !1,
    d,
    v,
    h,
    g,
    A,
    y,
    _,
    N,
    b,
    R = [];
  (c.biff = 12), (c["!row"] = 0);
  var F = 0,
    W = !1,
    D = [],
    X = {},
    U = c.supbooks || t.supbooks || [[]];
  if (
    ((U.sharedf = X),
    (U.arrayf = D),
    (U.SheetNames =
      t.SheetNames ||
      t.Sheets.map(function (Fe) {
        return Fe.name;
      })),
    !c.supbooks && ((c.supbooks = U), t.Names))
  )
    for (var P = 0; P < t.Names.length; ++P) U[0][P + 1] = t.Names[P];
  var j = [],
    fe = [],
    re = !1;
  yt[16] = { n: "BrtShortReal", f: vi };
  var ce;
  if (
    (Hr(
      e,
      function (G, le, ue) {
        if (!x)
          switch (ue) {
            case 148:
              l = G;
              break;
            case 0:
              (d = G), c.sheetRows && c.sheetRows <= d.r && (x = !0), (N = Ke((g = d.r))), (c["!row"] = d.r), (G.hidden || G.hpt || G.level != null) && (G.hpt && (G.hpx = Ja(G.hpt)), (fe[G.r] = G));
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
                  (_ = Wa[G[1]]), (v.v = _.t), (v.r = _.r);
                  break;
                case "b":
                  v.v = !!G[1];
                  break;
                case "e":
                  (v.v = G[1]), c.cellText !== !1 && (v.w = ha[v.v]);
                  break;
                case "str":
                  (v.t = "s"), (v.v = G[1]);
                  break;
                case "is":
                  (v.t = "s"), (v.v = G[1].t);
                  break;
              }
              if (((h = i.CellXf[G[0].iStyleRef]) && xi(v, h.numFmtId, null, c, s, i), (A = G[0].c == -1 ? A + 1 : G[0].c), c.dense ? (f[g] || (f[g] = []), (f[g][A] = v)) : (f[Ve(A) + N] = v), c.cellFormula)) {
                for (W = !1, F = 0; F < D.length; ++F) {
                  var S = D[F];
                  d.r >= S[0].s.r && d.r <= S[0].e.r && A >= S[0].s.c && A <= S[0].e.c && ((v.F = _e(S[0])), (W = !0));
                }
                !W && G.length > 3 && (v.f = G[3]);
              }
              if ((o.s.r > d.r && (o.s.r = d.r), o.s.c > A && (o.s.c = A), o.e.r < d.r && (o.e.r = d.r), o.e.c < A && (o.e.c = A), c.cellDates && h && v.t == "n" && wa(de[h.numFmtId]))) {
                var H = aa(v.v);
                H && ((v.t = "d"), (v.v = new Date(H.y, H.m - 1, H.d, H.H, H.M, H.S, H.u)));
              }
              ce && (ce.type == "XLDAPR" && (v.D = !0), (ce = void 0));
              break;
            case 1:
            case 12:
              if (!c.sheetStubs || u) break;
              (v = { t: "z", v: void 0 }), (A = G[0].c == -1 ? A + 1 : G[0].c), c.dense ? (f[g] || (f[g] = []), (f[g][A] = v)) : (f[Ve(A) + N] = v), o.s.r > d.r && (o.s.r = d.r), o.s.c > A && (o.s.c = A), o.e.r < d.r && (o.e.r = d.r), o.e.c < A && (o.e.c = A), ce && (ce.type == "XLDAPR" && (v.D = !0), (ce = void 0));
              break;
            case 176:
              R.push(G);
              break;
            case 49:
              ce = ((c.xlmeta || {}).Cell || [])[G - 1];
              break;
            case 494:
              var I = n["!id"][G.relId];
              for (I ? ((G.Target = I.Target), G.loc && (G.Target += "#" + G.loc), (G.Rel = I)) : G.relId == "" && (G.Target = "#" + G.loc), g = G.rfx.s.r; g <= G.rfx.e.r; ++g) for (A = G.rfx.s.c; A <= G.rfx.e.c; ++A) c.dense ? (f[g] || (f[g] = []), f[g][A] || (f[g][A] = { t: "z", v: void 0 }), (f[g][A].l = G)) : ((y = he({ c: A, r: g })), f[y] || (f[y] = { t: "z", v: void 0 }), (f[y].l = G));
              break;
            case 426:
              if (!c.cellFormula) break;
              D.push(G), (b = c.dense ? f[g][A] : f[Ve(A) + N]), (b.f = Je(G[1], o, { r: d.r, c: A }, U, c)), (b.F = _e(G[0]));
              break;
            case 427:
              if (!c.cellFormula) break;
              (X[he(G[0].s)] = G[1]), (b = c.dense ? f[g][A] : f[Ve(A) + N]), (b.f = Je(G[1], o, { r: d.r, c: A }, U, c));
              break;
            case 60:
              if (!c.cellStyles) break;
              for (; G.e >= G.s; ) (j[G.e--] = { width: G.w / 256, hidden: !!(G.flags & 1), level: G.level }), re || ((re = !0), T0(G.w / 256)), ka(j[G.e + 1]);
              break;
            case 161:
              f["!autofilter"] = { ref: _e(G) };
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
              u = !0;
              break;
            case 36:
              u = !1;
              break;
            case 37:
              u = !0;
              break;
            case 38:
              u = !1;
              break;
            default:
              if (!le.T) {
                if (!u || c.WTF) throw new Error("Unexpected record 0x" + ue.toString(16));
              }
          }
      },
      c
    ),
    delete c.supbooks,
    delete c["!row"],
    !f["!ref"] && (o.s.r < 2e6 || (l && (l.e.r > 0 || l.e.c > 0 || l.s.r > 0 || l.s.c > 0))) && (f["!ref"] = _e(l || o)),
    c.sheetRows && f["!ref"])
  ) {
    var ie = Oe(f["!ref"]);
    c.sheetRows <= +ie.e.r && ((ie.e.r = c.sheetRows - 1), ie.e.r > o.e.r && (ie.e.r = o.e.r), ie.e.r < ie.s.r && (ie.s.r = ie.e.r), ie.e.c > o.e.c && (ie.e.c = o.e.c), ie.e.c < ie.s.c && (ie.s.c = ie.e.c), (f["!fullref"] = f["!ref"]), (f["!ref"] = _e(ie)));
  }
  return R.length > 0 && (f["!merges"] = R), j.length > 0 && (f["!cols"] = j), fe.length > 0 && (f["!rows"] = fe), f;
}
function Ax(e) {
  var a = [],
    r = e.match(/^<c:numCache>/),
    n;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function (s) {
    var i = s.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    i && (a[+i[1]] = r ? +i[2] : i[2]);
  });
  var t = Te((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (
    (e.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(function (s) {
      n = s.replace(/<.*?>/g, "");
    }),
    [a, t, n]
  );
}
function Fx(e, a, r, n, t, s) {
  var i = s || { "!type": "chart" };
  if (!e) return s;
  var c = 0,
    f = 0,
    l = "A",
    o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (
    (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function (u) {
      var x = Ax(u);
      (o.s.r = o.s.c = 0),
        (o.e.c = c),
        (l = Ve(c)),
        x[0].forEach(function (d, v) {
          (i[l + Ke(v)] = { t: "n", v: d, z: x[1] }), (f = v);
        }),
        o.e.r < f && (o.e.r = f),
        ++c;
    }),
    c > 0 && (i["!ref"] = _e(o)),
    i
  );
}
function Sx(e, a, r, n, t) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" },
    i,
    c = e.match(di);
  return c && w0(c[0], s, t, r), (i = e.match(/drawing r:id="(.*?)"/)) && (s["!rel"] = i[1]), n["!id"][s["!rel"]] && (s["!drawel"] = n["!id"][s["!rel"]]), s;
}
function Cx(e, a) {
  e.l += 10;
  var r = Qe(e);
  return { name: r };
}
function yx(e, a, r, n, t) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" },
    i = !1;
  return (
    Hr(
      e,
      function (f, l, o) {
        switch (o) {
          case 550:
            s["!rel"] = f;
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
            if (!(l.T > 0)) {
              if (!(l.T < 0)) {
                if (!i || a.WTF) throw new Error("Unexpected record 0x" + o.toString(16));
              }
            }
        }
      },
      a
    ),
    n["!id"][s["!rel"]] && (s["!drawel"] = n["!id"][s["!rel"]]),
    s
  );
}
var pi = [
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
  Dx = [
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
  Ox = [],
  Rx = [
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
function yn(e, a) {
  for (var r = 0; r != e.length; ++r)
    for (var n = e[r], t = 0; t != a.length; ++t) {
      var s = a[t];
      if (n[s[0]] == null) n[s[0]] = s[1];
      else
        switch (s[2]) {
          case "bool":
            typeof n[s[0]] == "string" && (n[s[0]] = Se(n[s[0]]));
            break;
          case "int":
            typeof n[s[0]] == "string" && (n[s[0]] = parseInt(n[s[0]], 10));
            break;
        }
    }
}
function Dn(e, a) {
  for (var r = 0; r != a.length; ++r) {
    var n = a[r];
    if (e[n[0]] == null) e[n[0]] = n[1];
    else
      switch (n[2]) {
        case "bool":
          typeof e[n[0]] == "string" && (e[n[0]] = Se(e[n[0]]));
          break;
        case "int":
          typeof e[n[0]] == "string" && (e[n[0]] = parseInt(e[n[0]], 10));
          break;
      }
  }
}
function gi(e) {
  Dn(e.WBProps, pi), Dn(e.CalcPr, Rx), yn(e.WBView, Dx), yn(e.Sheets, Ox), (Ea.date1904 = Se(e.WBProps.date1904));
}
var Ix = "][*?/\\".split("");
function Nx(e, a) {
  if (e.length > 31) {
    if (a) return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return (
    Ix.forEach(function (n) {
      if (e.indexOf(n) != -1) {
        if (!a) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
        r = !1;
      }
    }),
    r
  );
}
var Px = /<\w+:workbook/;
function Lx(e, a) {
  if (!e) throw new Error("Could not find file");
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" },
    n = !1,
    t = "xmlns",
    s = {},
    i = 0;
  if (
    (e.replace(rr, function (f, l) {
      var o = oe(f);
      switch (Rr(o[0])) {
        case "<?xml":
          break;
        case "<workbook":
          f.match(Px) && (t = "xmlns" + f.match(/<(\w+):/)[1]), (r.xmlns = o[t]);
          break;
        case "</workbook>":
          break;
        case "<fileVersion":
          delete o[0], (r.AppVersion = o);
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
          pi.forEach(function (u) {
            if (o[u[0]] != null)
              switch (u[2]) {
                case "bool":
                  r.WBProps[u[0]] = Se(o[u[0]]);
                  break;
                case "int":
                  r.WBProps[u[0]] = parseInt(o[u[0]], 10);
                  break;
                default:
                  r.WBProps[u[0]] = o[u[0]];
              }
          }),
            o.codeName && (r.WBProps.CodeName = Ae(o.codeName));
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
          delete o[0], r.WBView.push(o);
          break;
        case "</workbookView>":
          break;
        case "<sheets":
        case "<sheets>":
        case "</sheets>":
          break;
        case "<sheet":
          switch (o.state) {
            case "hidden":
              o.Hidden = 1;
              break;
            case "veryHidden":
              o.Hidden = 2;
              break;
            default:
              o.Hidden = 0;
          }
          delete o.state, (o.name = Te(Ae(o.name))), delete o[0], r.Sheets.push(o);
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
          (s = {}), (s.Name = Ae(o.name)), o.comment && (s.Comment = o.comment), o.localSheetId && (s.Sheet = +o.localSheetId), Se(o.hidden || "0") && (s.Hidden = !0), (i = l + f.length);
          break;
        case "</definedName>":
          (s.Ref = Te(Ae(e.slice(i, l)))), r.Names.push(s);
          break;
        case "<definedName/>":
          break;
        case "<calcPr":
          delete o[0], (r.CalcPr = o);
          break;
        case "<calcPr/>":
          delete o[0], (r.CalcPr = o);
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
          if (!n && a.WTF) throw new Error("unrecognized " + o[0] + " in workbook");
      }
      return f;
    }),
    Zc.indexOf(r.xmlns) === -1)
  )
    throw new Error("Unknown Namespace: " + r.xmlns);
  return gi(r), r;
}
function Mx(e, a) {
  var r = {};
  return (r.Hidden = e.read_shift(4)), (r.iTabID = e.read_shift(4)), (r.strRelID = $t(e)), (r.name = Qe(e)), r;
}
function Bx(e, a) {
  var r = {},
    n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var t = a > 8 ? Qe(e) : "";
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
function bx(e, a) {
  var r = {};
  return e.read_shift(4), (r.ArchID = e.read_shift(4)), (e.l += a - 8), r;
}
function Ux(e, a, r) {
  var n = e.l + a;
  (e.l += 4), (e.l += 1);
  var t = e.read_shift(4),
    s = pf(e),
    i = kh(e, 0, r),
    c = p0(e);
  e.l = n;
  var f = { Name: s, Ptg: i };
  return t < 268435455 && (f.Sheet = t), c && (f.Comment = c), f;
}
function Hx(e, a) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" },
    n = [],
    t = !1;
  a || (a = {}), (a.biff = 12);
  var s = [],
    i = [[]];
  return (
    (i.SheetNames = []),
    (i.XTI = []),
    (yt[16] = { n: "BrtFRTArchID$", f: bx }),
    Hr(
      e,
      function (f, l, o) {
        switch (o) {
          case 156:
            i.SheetNames.push(f.name), r.Sheets.push(f);
            break;
          case 153:
            r.WBProps = f;
            break;
          case 39:
            f.Sheet != null && (a.SID = f.Sheet), (f.Ref = Je(f.Ptg, null, null, i, a)), delete a.SID, delete f.Ptg, s.push(f);
            break;
          case 1036:
            break;
          case 357:
          case 358:
          case 355:
          case 667:
            i[0].length ? i.push([o, f]) : (i[0] = [o, f]), (i[i.length - 1].XTI = []);
            break;
          case 362:
            i.length === 0 && ((i[0] = []), (i[0].XTI = [])), (i[i.length - 1].XTI = i[i.length - 1].XTI.concat(f)), (i.XTI = i.XTI.concat(f));
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
            n.push(o), (t = !0);
            break;
          case 36:
            n.pop(), (t = !1);
            break;
          case 37:
            n.push(o), (t = !0);
            break;
          case 38:
            n.pop(), (t = !1);
            break;
          case 16:
            break;
          default:
            if (!l.T) {
              if (!t || (a.WTF && n[n.length - 1] != 37 && n[n.length - 1] != 35)) throw new Error("Unexpected record 0x" + o.toString(16));
            }
        }
      },
      a
    ),
    gi(r),
    (r.Names = s),
    (r.supbooks = i),
    r
  );
}
function Vx(e, a, r) {
  return a.slice(-4) === ".bin" ? Hx(e, r) : Lx(e, r);
}
function Wx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? wx(e, n, r, t, s, i, c) : Mh(e, n, r, t, s, i, c);
}
function Gx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? yx(e, n, r, t, s) : Sx(e, n, r, t, s);
}
function Xx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? q1() : Q1();
}
function zx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? J1() : Z1();
}
function $x(e, a, r, n) {
  return a.slice(-4) === ".bin" ? x1(e, r, n) : c1(e, r, n);
}
function Kx(e, a, r) {
  return ti(e, r);
}
function Yx(e, a, r) {
  return a.slice(-4) === ".bin" ? Dl(e, r) : Cl(e, r);
}
function jx(e, a, r) {
  return a.slice(-4) === ".bin" ? K1(e, r) : W1(e, r);
}
function Jx(e, a, r) {
  return a.slice(-4) === ".bin" ? U1(e) : B1(e);
}
function Zx(e, a, r, n) {
  return r.slice(-4) === ".bin" ? H1(e, a, r, n) : void 0;
}
function qx(e, a, r) {
  return a.slice(-4) === ".bin" ? L1(e, a, r) : M1(e, a, r);
}
var mi = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,
  _i = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Er(e, a) {
  var r = e.split(/\s+/),
    n = [];
  if ((a || (n[0] = r[0]), r.length === 1)) return n;
  var t = e.match(mi),
    s,
    i,
    c,
    f;
  if (t) for (f = 0; f != t.length; ++f) (s = t[f].match(_i)), (i = s[1].indexOf(":")) === -1 ? (n[s[1]] = s[2].slice(1, s[2].length - 1)) : (s[1].slice(0, 6) === "xmlns:" ? (c = "xmlns" + s[1].slice(6)) : (c = s[1].slice(i + 1)), (n[c] = s[2].slice(1, s[2].length - 1)));
  return n;
}
function Qx(e) {
  var a = e.split(/\s+/),
    r = {};
  if (a.length === 1) return r;
  var n = e.match(mi),
    t,
    s,
    i,
    c;
  if (n) for (c = 0; c != n.length; ++c) (t = n[c].match(_i)), (s = t[1].indexOf(":")) === -1 ? (r[t[1]] = t[2].slice(1, t[2].length - 1)) : (t[1].slice(0, 6) === "xmlns:" ? (i = "xmlns" + t[1].slice(6)) : (i = t[1].slice(s + 1)), (r[i] = t[2].slice(1, t[2].length - 1)));
  return r;
}
var Xa;
function ed(e, a) {
  var r = Xa[e] || Te(e);
  return r === "General" ? sa(a) : mr(r, a);
}
function rd(e, a, r, n) {
  var t = n;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      t = Se(n);
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
      t = Xe(n);
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
  e[Te(a)] = t;
}
function ad(e, a, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== !1)
      try {
        e.t === "e" ? (e.w = e.w || ha[e.v]) : a === "General" ? (e.t === "n" ? ((e.v | 0) === e.v ? (e.w = e.v.toString(10)) : (e.w = za(e.v))) : (e.w = sa(e.v))) : (e.w = ed(a || "General", e.v));
      } catch (s) {
        if (r.WTF) throw s;
      }
    try {
      var n = Xa[a] || a || "General";
      if ((r.cellNF && (e.z = n), r.cellDates && e.t == "n" && wa(n))) {
        var t = aa(e.v);
        t && ((e.t = "d"), (e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u)));
      }
    } catch (s) {
      if (r.WTF) throw s;
    }
  }
}
function td(e, a, r) {
  if (r.cellStyles && a.Interior) {
    var n = a.Interior;
    n.Pattern && (n.patternType = r1[n.Pattern] || n.Pattern);
  }
  e[a.ID] = a;
}
function nd(e, a, r, n, t, s, i, c, f, l) {
  var o = "General",
    u = n.StyleID,
    x = {};
  l = l || {};
  var d = [],
    v = 0;
  for (u === void 0 && c && (u = c.StyleID), u === void 0 && i && (u = i.StyleID); s[u] !== void 0 && (s[u].nf && (o = s[u].nf), s[u].Interior && d.push(s[u].Interior), !!s[u].Parent); ) u = s[u].Parent;
  switch (r.Type) {
    case "Boolean":
      (n.t = "b"), (n.v = Se(e));
      break;
    case "String":
      (n.t = "s"), (n.r = J0(Te(e))), (n.v = e.indexOf("<") > -1 ? Te(a || e).replace(/<.*?>/g, "") : n.r);
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), (n.v = (Xe(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3)), n.v !== n.v ? (n.v = Te(e)) : n.v < 60 && (n.v = n.v - 1), (!o || o == "General") && (o = "yyyy-mm-dd");
    case "Number":
      n.v === void 0 && (n.v = +e), n.t || (n.t = "n");
      break;
    case "Error":
      (n.t = "e"), (n.v = Ls[e]), l.cellText !== !1 && (n.w = e);
      break;
    default:
      e == "" && a == "" ? (n.t = "z") : ((n.t = "s"), (n.v = J0(a || e)));
      break;
  }
  if ((ad(n, o, l), l.cellFormula !== !1))
    if (n.Formula) {
      var h = Te(n.Formula);
      h.charCodeAt(0) == 61 && (h = h.slice(1)), (n.f = _a(h, t)), delete n.Formula, n.ArrayRange == "RC" ? (n.F = _a("RC:RC", t)) : n.ArrayRange && ((n.F = _a(n.ArrayRange, t)), f.push([Oe(n.F), n.F]));
    } else for (v = 0; v < f.length; ++v) t.r >= f[v][0].s.r && t.r <= f[v][0].e.r && t.c >= f[v][0].s.c && t.c <= f[v][0].e.c && (n.F = f[v][1]);
  l.cellStyles &&
    (d.forEach(function (g) {
      !x.patternType && g.patternType && (x.patternType = g.patternType);
    }),
    (n.s = x)),
    n.StyleID !== void 0 && (n.ixfe = n.StyleID);
}
function sd(e) {
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
function Wt(e, a) {
  var r = a || {};
  is();
  var n = Ra(u0(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (n = Ae(n));
  var t = n.slice(0, 1024).toLowerCase(),
    s = !1;
  if (((t = t.replace(/".*?"/g, "")), (t.indexOf(">") & 1023) > Math.min(t.indexOf(",") & 1023, t.indexOf(";") & 1023))) {
    var i = $e(r);
    return (i.type = "string"), Ya.to_workbook(n, i);
  }
  if (
    (t.indexOf("<?xml") == -1 &&
      ["html", "table", "head", "meta", "script", "style", "div"].forEach(function (Ie) {
        t.indexOf("<" + Ie) >= 0 && (s = !0);
      }),
    s)
  )
    return dd(n, r);
  Xa = { "General Number": "General", "General Date": de[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": de[15], "Short Date": de[14], "Long Time": de[19], "Medium Time": de[18], "Short Time": de[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: de[2], Standard: de[4], Percent: de[10], Scientific: de[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var c,
    f = [],
    l,
    o = {},
    u = [],
    x = r.dense ? [] : {},
    d = "",
    v = {},
    h = {},
    g = Er('<Data ss:Type="String">'),
    A = 0,
    y = 0,
    _ = 0,
    N = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    b = {},
    R = {},
    F = "",
    W = 0,
    D = [],
    X = {},
    U = {},
    P = 0,
    j = [],
    fe = [],
    re = {},
    ce = [],
    ie,
    Fe = !1,
    G = [],
    le = [],
    ue = {},
    S = 0,
    H = 0,
    I = { Sheets: [], WBProps: { date1904: !1 } },
    O = {};
  (Ka.lastIndex = 0), (n = n.replace(/<!--([\s\S]*?)-->/gm, ""));
  for (var K = ""; (c = Ka.exec(n)); )
    switch ((c[3] = (K = c[3]).toLowerCase())) {
      case "data":
        if (K == "data") {
          if (c[1] === "/") {
            if ((l = f.pop())[0] !== c[3]) throw new Error("Bad state: " + l.join("|"));
          } else c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
          break;
        }
        if (f[f.length - 1][1]) break;
        c[1] === "/" ? nd(n.slice(A, c.index), F, g, f[f.length - 1][0] == "comment" ? re : v, { c: y, r: _ }, b, ce[y], h, G, r) : ((F = ""), (g = Er(c[0])), (A = c.index + c[0].length));
        break;
      case "cell":
        if (c[1] === "/")
          if ((fe.length > 0 && (v.c = fe), (!r.sheetRows || r.sheetRows > _) && v.v !== void 0 && (r.dense ? (x[_] || (x[_] = []), (x[_][y] = v)) : (x[Ve(y) + Ke(_)] = v)), v.HRef && ((v.l = { Target: Te(v.HRef) }), v.HRefScreenTip && (v.l.Tooltip = v.HRefScreenTip), delete v.HRef, delete v.HRefScreenTip), (v.MergeAcross || v.MergeDown) && ((S = y + (parseInt(v.MergeAcross, 10) | 0)), (H = _ + (parseInt(v.MergeDown, 10) | 0)), D.push({ s: { c: y, r: _ }, e: { c: S, r: H } })), !r.sheetStubs))
            v.MergeAcross ? (y = S + 1) : ++y;
          else if (v.MergeAcross || v.MergeDown) {
            for (var ee = y; ee <= S; ++ee) for (var ne = _; ne <= H; ++ne) (ee > y || ne > _) && (r.dense ? (x[ne] || (x[ne] = []), (x[ne][ee] = { t: "z" })) : (x[Ve(ee) + Ke(ne)] = { t: "z" }));
            y = S + 1;
          } else ++y;
        else (v = Qx(c[0])), v.Index && (y = +v.Index - 1), y < N.s.c && (N.s.c = y), y > N.e.c && (N.e.c = y), c[0].slice(-2) === "/>" && ++y, (fe = []);
        break;
      case "row":
        c[1] === "/" || c[0].slice(-2) === "/>" ? (_ < N.s.r && (N.s.r = _), _ > N.e.r && (N.e.r = _), c[0].slice(-2) === "/>" && ((h = Er(c[0])), h.Index && (_ = +h.Index - 1)), (y = 0), ++_) : ((h = Er(c[0])), h.Index && (_ = +h.Index - 1), (ue = {}), (h.AutoFitHeight == "0" || h.Height) && ((ue.hpx = parseInt(h.Height, 10)), (ue.hpt = ai(ue.hpx)), (le[_] = ue)), h.Hidden == "1" && ((ue.hidden = !0), (le[_] = ue)));
        break;
      case "worksheet":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3]) throw new Error("Bad state: " + l.join("|"));
          u.push(d), N.s.r <= N.e.r && N.s.c <= N.e.c && ((x["!ref"] = _e(N)), r.sheetRows && r.sheetRows <= N.e.r && ((x["!fullref"] = x["!ref"]), (N.e.r = r.sheetRows - 1), (x["!ref"] = _e(N)))), D.length && (x["!merges"] = D), ce.length > 0 && (x["!cols"] = ce), le.length > 0 && (x["!rows"] = le), (o[d] = x);
        } else (N = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }), (_ = y = 0), f.push([c[3], !1]), (l = Er(c[0])), (d = Te(l.Name)), (x = r.dense ? [] : {}), (D = []), (G = []), (le = []), (O = { name: d, Hidden: 0 }), I.Sheets.push(O);
        break;
      case "table":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3]) throw new Error("Bad state: " + l.join("|"));
        } else {
          if (c[0].slice(-2) == "/>") break;
          f.push([c[3], !1]), (ce = []), (Fe = !1);
        }
        break;
      case "style":
        c[1] === "/" ? td(b, R, r) : (R = Er(c[0]));
        break;
      case "numberformat":
        (R.nf = Te(Er(c[0]).Format || "General")), Xa[R.nf] && (R.nf = Xa[R.nf]);
        for (var q = 0; q != 392 && de[q] != R.nf; ++q);
        if (q == 392) {
          for (q = 57; q != 392; ++q)
            if (de[q] == null) {
              ta(R.nf, q);
              break;
            }
        }
        break;
      case "column":
        if (f[f.length - 1][0] !== "table") break;
        if (((ie = Er(c[0])), ie.Hidden && ((ie.hidden = !0), delete ie.Hidden), ie.Width && (ie.wpx = parseInt(ie.Width, 10)), !Fe && ie.wpx > 10)) {
          (Fe = !0), (nr = ei);
          for (var J = 0; J < ce.length; ++J) ce[J] && ka(ce[J]);
        }
        Fe && ka(ie), (ce[ie.Index - 1 || ce.length] = ie);
        for (var Ee = 0; Ee < +ie.Span; ++Ee) ce[ce.length] = $e(ie);
        break;
      case "namedrange":
        if (c[1] === "/") break;
        I.Names || (I.Names = []);
        var C = oe(c[0]),
          Re = { Name: C.Name, Ref: _a(C.RefersTo.slice(1), { r: 0, c: 0 }) };
        I.Sheets.length > 0 && (Re.Sheet = I.Sheets.length - 1), I.Names.push(Re);
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
        c[1] === "/" ? (F += n.slice(W, c.index)) : (W = c.index + c[0].length);
        break;
      case "interior":
        if (!r.cellStyles) break;
        R.Interior = Er(c[0]);
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
        c[1] === "/" ? Vf(X, K, n.slice(P, c.index)) : (P = c.index + c[0].length);
        break;
      case "paragraphs":
        break;
      case "styles":
      case "workbook":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3]) throw new Error("Bad state: " + l.join("|"));
        } else f.push([c[3], !1]);
        break;
      case "comment":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3]) throw new Error("Bad state: " + l.join("|"));
          sd(re), fe.push(re);
        } else f.push([c[3], !1]), (l = Er(c[0])), (re = { a: l.Author });
        break;
      case "autofilter":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3]) throw new Error("Bad state: " + l.join("|"));
        } else if (c[0].charAt(c[0].length - 2) !== "/") {
          var ke = Er(c[0]);
          (x["!autofilter"] = { ref: _a(ke.Range).replace(/\$/g, "") }), f.push([c[3], !0]);
        }
        break;
      case "name":
        break;
      case "datavalidation":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3]) throw new Error("Bad state: " + l.join("|"));
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
          if ((l = f.pop())[0] !== c[3]) throw new Error("Bad state: " + l.join("|"));
        } else c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
        break;
      case "null":
        break;
      default:
        if ((f.length == 0 && c[3] == "document") || (f.length == 0 && c[3] == "uof")) return Ln(n, r);
        var we = !0;
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
                we = !1;
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
                we = !1;
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
                we = !1;
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
                we = !1;
            }
            break;
          case "worksheetoptions":
            switch (c[3]) {
              case "visible":
                if (c[0].slice(-2) !== "/>")
                  if (c[1] === "/")
                    switch (n.slice(P, c.index)) {
                      case "SheetHidden":
                        O.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        O.Hidden = 2;
                        break;
                    }
                  else P = c.index + c[0].length;
                break;
              case "header":
                x["!margins"] || Ga((x["!margins"] = {}), "xlml"), isNaN(+oe(c[0]).Margin) || (x["!margins"].header = +oe(c[0]).Margin);
                break;
              case "footer":
                x["!margins"] || Ga((x["!margins"] = {}), "xlml"), isNaN(+oe(c[0]).Margin) || (x["!margins"].footer = +oe(c[0]).Margin);
                break;
              case "pagemargins":
                var pe = oe(c[0]);
                x["!margins"] || Ga((x["!margins"] = {}), "xlml"), isNaN(+pe.Top) || (x["!margins"].top = +pe.Top), isNaN(+pe.Left) || (x["!margins"].left = +pe.Left), isNaN(+pe.Right) || (x["!margins"].right = +pe.Right), isNaN(+pe.Bottom) || (x["!margins"].bottom = +pe.Bottom);
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
                x["!outline"] || (x["!outline"] = {}), (x["!outline"].above = !0);
                break;
              case "tabcolorindex":
                break;
              case "donotdisplayheadings":
                break;
              case "showpagelayoutzoom":
                break;
              case "nosummarycolumnsrightdetail":
                x["!outline"] || (x["!outline"] = {}), (x["!outline"].left = !0);
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
                we = !1;
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
                we = !1;
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
                we = !1;
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
                we = !1;
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
                we = !1;
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
                we = !1;
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
                we = !1;
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
                we = !1;
            }
            break;
          case "smarttags":
            break;
          default:
            we = !1;
            break;
        }
        if (we || c[3].match(/!\[CDATA/)) break;
        if (!f[f.length - 1][1]) throw "Unrecognized tag: " + c[3] + "|" + f.join("|");
        if (f[f.length - 1][0] === "customdocumentproperties") {
          if (c[0].slice(-2) === "/>") break;
          c[1] === "/" ? rd(U, K, j, n.slice(P, c.index)) : ((j = c), (P = c.index + c[0].length));
          break;
        }
        if (r.WTF) throw "Unrecognized tag: " + c[3] + "|" + f.join("|");
    }
  var ae = {};
  return !r.bookSheets && !r.bookProps && (ae.Sheets = o), (ae.SheetNames = u), (ae.Workbook = I), (ae.SSF = $e(de)), (ae.Props = X), (ae.Custprops = U), ae;
}
function Jt(e, a) {
  switch ((S0((a = a || {})), a.type || "base64")) {
    case "base64":
      return Wt(hr(e), a);
    case "binary":
    case "buffer":
    case "file":
      return Wt(e, a);
    case "array":
      return Wt(oa(e), a);
  }
}
function id(e) {
  var a = {},
    r = e.content;
  if (((r.l = 28), (a.AnsiUserType = r.read_shift(0, "lpstr-ansi")), (a.AnsiClipboardFormat = _f(r)), r.length - r.l <= 4)) return a;
  var n = r.read_shift(4);
  if (n == 0 || n > 40 || ((r.l -= 4), (a.Reserved1 = r.read_shift(0, "lpstr-ansi")), r.length - r.l <= 4) || ((n = r.read_shift(4)), n !== 1907505652) || ((a.UnicodeClipboardFormat = Ef(r)), (n = r.read_shift(4)), n == 0 || n > 40)) return a;
  (r.l -= 4), (a.Reserved2 = r.read_shift(0, "lpwstr"));
}
var cd = [60, 1084, 2066, 2165, 2175];
function fd(e, a, r, n, t) {
  var s = n,
    i = [],
    c = r.slice(r.l, r.l + s);
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
  i.push(c), (r.l += s);
  for (var f = Mr(r, r.l), l = Zt[f], o = 0; l != null && cd.indexOf(f) > -1; ) (s = Mr(r, r.l + 2)), (o = r.l + 4), f == 2066 ? (o += 4) : (f == 2165 || f == 2175) && (o += 12), (c = r.slice(o, r.l + 4 + s)), i.push(c), (r.l += 4 + s), (l = Zt[(f = Mr(r, r.l))]);
  var u = zr(i);
  ze(u, 0);
  var x = 0;
  u.lens = [];
  for (var d = 0; d < i.length; ++d) u.lens.push(x), (x += i[d].length);
  if (u.length < n) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + u.length + " < " + n;
  return a.f(u, u.length, t);
}
function yr(e, a, r) {
  if (e.t !== "z" && e.XF) {
    var n = 0;
    try {
      (n = e.z || e.XF.numFmtId || 0), a.cellNF && (e.z = de[n]);
    } catch (s) {
      if (a.WTF) throw s;
    }
    if (!a || a.cellText !== !1)
      try {
        e.t === "e" ? (e.w = e.w || ha[e.v]) : n === 0 || n == "General" ? (e.t === "n" ? ((e.v | 0) === e.v ? (e.w = e.v.toString(10)) : (e.w = za(e.v))) : (e.w = sa(e.v))) : (e.w = mr(n, e.v, { date1904: !!r, dateNF: a && a.dateNF }));
      } catch (s) {
        if (a.WTF) throw s;
      }
    if (a.cellDates && n && e.t == "n" && wa(de[n] || String(n))) {
      var t = aa(e.v);
      t && ((e.t = "d"), (e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u)));
    }
  }
}
function vt(e, a, r) {
  return { v: e, ixfe: a, t: r };
}
function od(e, a) {
  var r = { opts: {} },
    n = {},
    t = a.dense ? [] : {},
    s = {},
    i = {},
    c = null,
    f = [],
    l = "",
    o = {},
    u,
    x = "",
    d,
    v,
    h,
    g,
    A = {},
    y = [],
    _,
    N,
    b = [],
    R = [],
    F = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] },
    W = {},
    D = function (ve) {
      return ve < 8 ? na[ve] : (ve < 64 && R[ve - 8]) || na[ve];
    },
    X = function (ve, Ne, dr) {
      var Ue = Ne.XF.data;
      if (!(!Ue || !Ue.patternType || !dr || !dr.cellStyles)) {
        (Ne.s = {}), (Ne.s.patternType = Ue.patternType);
        var qr;
        (qr = ja(D(Ue.icvFore))) && (Ne.s.fgColor = { rgb: qr }), (qr = ja(D(Ue.icvBack))) && (Ne.s.bgColor = { rgb: qr });
      }
    },
    U = function (ve, Ne, dr) {
      if (!(ue > 1) && !(dr.sheetRows && ve.r >= dr.sheetRows)) {
        if ((dr.cellStyles && Ne.XF && Ne.XF.data && X(ve, Ne, dr), delete Ne.ixfe, delete Ne.XF, (u = ve), (x = he(ve)), (!i || !i.s || !i.e) && (i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), ve.r < i.s.r && (i.s.r = ve.r), ve.c < i.s.c && (i.s.c = ve.c), ve.r + 1 > i.e.r && (i.e.r = ve.r + 1), ve.c + 1 > i.e.c && (i.e.c = ve.c + 1), dr.cellFormula && Ne.f)) {
          for (var Ue = 0; Ue < y.length; ++Ue)
            if (!(y[Ue][0].s.c > ve.c || y[Ue][0].s.r > ve.r) && !(y[Ue][0].e.c < ve.c || y[Ue][0].e.r < ve.r)) {
              (Ne.F = _e(y[Ue][0])), (y[Ue][0].s.c != ve.c || y[Ue][0].s.r != ve.r) && delete Ne.f, Ne.f && (Ne.f = "" + Je(y[Ue][1], i, ve, G, P));
              break;
            }
        }
        dr.dense ? (t[ve.r] || (t[ve.r] = []), (t[ve.r][ve.c] = Ne)) : (t[x] = Ne);
      }
    },
    P = { enc: !1, sbcch: 0, snames: [], sharedf: A, arrayf: y, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!a && !!a.cellStyles, WTF: !!a && !!a.wtf };
  a.password && (P.password = a.password);
  var j,
    fe = [],
    re = [],
    ce = [],
    ie = [],
    Fe = !1,
    G = [];
  (G.SheetNames = P.snames), (G.sharedf = P.sharedf), (G.arrayf = P.arrayf), (G.names = []), (G.XTI = []);
  var le = 0,
    ue = 0,
    S = 0,
    H = [],
    I = [],
    O;
  (P.codepage = 1200), wr(1200);
  for (var K = !1; e.l < e.length - 1; ) {
    var ee = e.l,
      ne = e.read_shift(2);
    if (ne === 0 && le === 10) break;
    var q = e.l === e.length ? 0 : e.read_shift(2),
      J = Zt[ne];
    if (J && J.f) {
      if (a.bookSheets && le === 133 && ne !== 133) break;
      if (((le = ne), J.r === 2 || J.r == 12)) {
        var Ee = e.read_shift(2);
        if (((q -= 2), !P.enc && Ee !== ne && (((Ee & 255) << 8) | (Ee >> 8)) !== ne)) throw new Error("rt mismatch: " + Ee + "!=" + ne);
        J.r == 12 && ((e.l += 10), (q -= 10));
      }
      var C = {};
      if ((ne === 10 ? (C = J.f(e, q, P)) : (C = fd(ne, J, e, q, P)), ue == 0 && [9, 521, 1033, 2057].indexOf(le) === -1)) continue;
      switch (ne) {
        case 34:
          r.opts.Date1904 = F.WBProps.date1904 = C;
          break;
        case 134:
          r.opts.WriteProtect = !0;
          break;
        case 47:
          if ((P.enc || (e.l = 0), (P.enc = C), !a.password)) throw new Error("File is password-protected");
          if (C.valid == null) throw new Error("Encryption scheme unsupported");
          if (!C.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          P.lastuser = C;
          break;
        case 66:
          var Re = Number(C);
          switch (Re) {
            case 21010:
              Re = 1200;
              break;
            case 32768:
              Re = 1e4;
              break;
            case 32769:
              Re = 1252;
              break;
          }
          wr((P.codepage = Re)), (K = !0);
          break;
        case 317:
          P.rrtabid = C;
          break;
        case 25:
          P.winlocked = C;
          break;
        case 439:
          r.opts.RefreshAll = C;
          break;
        case 12:
          r.opts.CalcCount = C;
          break;
        case 16:
          r.opts.CalcDelta = C;
          break;
        case 17:
          r.opts.CalcIter = C;
          break;
        case 13:
          r.opts.CalcMode = C;
          break;
        case 14:
          r.opts.CalcPrecision = C;
          break;
        case 95:
          r.opts.CalcSaveRecalc = C;
          break;
        case 15:
          P.CalcRefMode = C;
          break;
        case 2211:
          r.opts.FullCalc = C;
          break;
        case 129:
          C.fDialog && (t["!type"] = "dialog"), C.fBelow || ((t["!outline"] || (t["!outline"] = {})).above = !0), C.fRight || ((t["!outline"] || (t["!outline"] = {})).left = !0);
          break;
        case 224:
          b.push(C);
          break;
        case 430:
          G.push([C]), (G[G.length - 1].XTI = []);
          break;
        case 35:
        case 547:
          G[G.length - 1].push(C);
          break;
        case 24:
        case 536:
          (O = { Name: C.Name, Ref: Je(C.rgce, i, null, G, P) }), C.itab > 0 && (O.Sheet = C.itab - 1), G.names.push(O), G[0] || ((G[0] = []), (G[0].XTI = [])), G[G.length - 1].push(C), C.Name == "_xlnm._FilterDatabase" && C.itab > 0 && C.rgce && C.rgce[0] && C.rgce[0][0] && C.rgce[0][0][0] == "PtgArea3d" && (I[C.itab - 1] = { ref: _e(C.rgce[0][0][1][2]) });
          break;
        case 22:
          P.ExternCount = C;
          break;
        case 23:
          G.length == 0 && ((G[0] = []), (G[0].XTI = [])), (G[G.length - 1].XTI = G[G.length - 1].XTI.concat(C)), (G.XTI = G.XTI.concat(C));
          break;
        case 2196:
          if (P.biff < 8) break;
          O != null && (O.Comment = C[1]);
          break;
        case 18:
          t["!protect"] = C;
          break;
        case 19:
          C !== 0 && P.WTF && console.error("Password verifier: " + C);
          break;
        case 133:
          (s[C.pos] = C), P.snames.push(C.name);
          break;
        case 10:
          {
            if (--ue) break;
            if (i.e) {
              if (i.e.r > 0 && i.e.c > 0) {
                if ((i.e.r--, i.e.c--, (t["!ref"] = _e(i)), a.sheetRows && a.sheetRows <= i.e.r)) {
                  var ke = i.e.r;
                  (i.e.r = a.sheetRows - 1), (t["!fullref"] = t["!ref"]), (t["!ref"] = _e(i)), (i.e.r = ke);
                }
                i.e.r++, i.e.c++;
              }
              fe.length > 0 && (t["!merges"] = fe), re.length > 0 && (t["!objects"] = re), ce.length > 0 && (t["!cols"] = ce), ie.length > 0 && (t["!rows"] = ie), F.Sheets.push(W);
            }
            l === "" ? (o = t) : (n[l] = t), (t = a.dense ? [] : {});
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if ((P.biff === 8 && (P.biff = { 9: 2, 521: 3, 1033: 4 }[ne] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[C.BIFFVer] || 8), (P.biffguess = C.BIFFVer == 0), C.BIFFVer == 0 && C.dt == 4096 && ((P.biff = 5), (K = !0), wr((P.codepage = 28591))), P.biff == 8 && C.BIFFVer == 0 && C.dt == 16 && (P.biff = 2), ue++)) break;
            if (((t = a.dense ? [] : {}), P.biff < 8 && !K && ((K = !0), wr((P.codepage = a.codepage || 1252))), P.biff < 5 || (C.BIFFVer == 0 && C.dt == 4096))) {
              l === "" && (l = "Sheet1"), (i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } });
              var we = { pos: e.l - q, name: l };
              (s[we.pos] = we), P.snames.push(l);
            } else l = (s[ee] || { name: "" }).name;
            C.dt == 32 && (t["!type"] = "chart"), C.dt == 64 && (t["!type"] = "macro"), (fe = []), (re = []), (P.arrayf = y = []), (ce = []), (ie = []), (Fe = !1), (W = { Hidden: (s[ee] || { hs: 0 }).hs, name: l });
          }
          break;
        case 515:
        case 3:
        case 2:
          t["!type"] == "chart" && (a.dense ? (t[C.r] || [])[C.c] : t[he({ c: C.c, r: C.r })]) && ++C.c, (_ = { ixfe: C.ixfe, XF: b[C.ixfe] || {}, v: C.val, t: "n" }), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U({ c: C.c, r: C.r }, _, a);
          break;
        case 5:
        case 517:
          (_ = { ixfe: C.ixfe, XF: b[C.ixfe], v: C.val, t: C.t }), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U({ c: C.c, r: C.r }, _, a);
          break;
        case 638:
          (_ = { ixfe: C.ixfe, XF: b[C.ixfe], v: C.rknum, t: "n" }), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U({ c: C.c, r: C.r }, _, a);
          break;
        case 189:
          for (var pe = C.c; pe <= C.C; ++pe) {
            var ae = C.rkrec[pe - C.c][0];
            (_ = { ixfe: ae, XF: b[ae], v: C.rkrec[pe - C.c][1], t: "n" }), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U({ c: pe, r: C.r }, _, a);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (C.val == "String") {
              c = C;
              break;
            }
            if (((_ = vt(C.val, C.cell.ixfe, C.tt)), (_.XF = b[_.ixfe]), a.cellFormula)) {
              var Ie = C.formula;
              if (Ie && Ie[0] && Ie[0][0] && Ie[0][0][0] == "PtgExp") {
                var xr = Ie[0][0][1][0],
                  Sr = Ie[0][0][1][1],
                  Nr = he({ r: xr, c: Sr });
                A[Nr] ? (_.f = "" + Je(C.formula, i, C.cell, G, P)) : (_.F = ((a.dense ? (t[xr] || [])[Sr] : t[Nr]) || {}).F);
              } else _.f = "" + Je(C.formula, i, C.cell, G, P);
            }
            S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U(C.cell, _, a), (c = C);
          }
          break;
        case 7:
        case 519:
          if (c) (c.val = C), (_ = vt(C, c.cell.ixfe, "s")), (_.XF = b[_.ixfe]), a.cellFormula && (_.f = "" + Je(c.formula, i, c.cell, G, P)), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U(c.cell, _, a), (c = null);
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            y.push(C);
            var Sa = he(C[0].s);
            if (((d = a.dense ? (t[C[0].s.r] || [])[C[0].s.c] : t[Sa]), a.cellFormula && d)) {
              if (!c || !Sa || !d) break;
              (d.f = "" + Je(C[1], i, C[0], G, P)), (d.F = _e(C[0]));
            }
          }
          break;
        case 1212:
          {
            if (!a.cellFormula) break;
            if (x) {
              if (!c) break;
              (A[he(c.cell)] = C[0]), (d = a.dense ? (t[c.cell.r] || [])[c.cell.c] : t[he(c.cell)]), ((d || {}).f = "" + Je(C[0], i, u, G, P));
            }
          }
          break;
        case 253:
          (_ = vt(f[C.isst].t, C.ixfe, "s")), f[C.isst].h && (_.h = f[C.isst].h), (_.XF = b[_.ixfe]), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U({ c: C.c, r: C.r }, _, a);
          break;
        case 513:
          a.sheetStubs && ((_ = { ixfe: C.ixfe, XF: b[C.ixfe], t: "z" }), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U({ c: C.c, r: C.r }, _, a));
          break;
        case 190:
          if (a.sheetStubs)
            for (var Vr = C.c; Vr <= C.C; ++Vr) {
              var or = C.ixfe[Vr - C.c];
              (_ = { ixfe: or, XF: b[or], t: "z" }), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U({ c: Vr, r: C.r }, _, a);
            }
          break;
        case 214:
        case 516:
        case 4:
          (_ = vt(C.val, C.ixfe, "s")), (_.XF = b[_.ixfe]), S > 0 && (_.z = H[(_.ixfe >> 8) & 63]), yr(_, a, r.opts.Date1904), U({ c: C.c, r: C.r }, _, a);
          break;
        case 0:
        case 512:
          ue === 1 && (i = C);
          break;
        case 252:
          f = C;
          break;
        case 1054:
          if (P.biff == 4) {
            H[S++] = C[1];
            for (var Pr = 0; Pr < S + 163 && de[Pr] != C[1]; ++Pr);
            Pr >= 163 && ta(C[1], S + 163);
          } else ta(C[1], C[0]);
          break;
        case 30:
          {
            H[S++] = C;
            for (var Wr = 0; Wr < S + 163 && de[Wr] != C; ++Wr);
            Wr >= 163 && ta(C, S + 163);
          }
          break;
        case 229:
          fe = fe.concat(C);
          break;
        case 93:
          re[C.cmo[0]] = P.lastobj = C;
          break;
        case 438:
          P.lastobj.TxO = C;
          break;
        case 127:
          P.lastobj.ImData = C;
          break;
        case 440:
          for (g = C[0].s.r; g <= C[0].e.r; ++g) for (h = C[0].s.c; h <= C[0].e.c; ++h) (d = a.dense ? (t[g] || [])[h] : t[he({ c: h, r: g })]), d && (d.l = C[1]);
          break;
        case 2048:
          for (g = C[0].s.r; g <= C[0].e.r; ++g) for (h = C[0].s.c; h <= C[0].e.c; ++h) (d = a.dense ? (t[g] || [])[h] : t[he({ c: h, r: g })]), d && d.l && (d.l.Tooltip = C[1]);
          break;
        case 28:
          {
            if (P.biff <= 5 && P.biff >= 2) break;
            d = a.dense ? (t[C[0].r] || [])[C[0].c] : t[he(C[0])];
            var Ca = re[C[2]];
            d || (a.dense ? (t[C[0].r] || (t[C[0].r] = []), (d = t[C[0].r][C[0].c] = { t: "z" })) : (d = t[he(C[0])] = { t: "z" }), (i.e.r = Math.max(i.e.r, C[0].r)), (i.s.r = Math.min(i.s.r, C[0].r)), (i.e.c = Math.max(i.e.c, C[0].c)), (i.s.c = Math.min(i.s.c, C[0].c))), d.c || (d.c = []), (v = { a: C[1], t: Ca.TxO.t }), d.c.push(v);
          }
          break;
        case 2173:
          R1(b[C.ixfe], C.ext);
          break;
        case 125:
          {
            if (!P.cellStyles) break;
            for (; C.e >= C.s; ) (ce[C.e--] = { width: C.w / 256, level: C.level || 0, hidden: !!(C.flags & 1) }), Fe || ((Fe = !0), T0(C.w / 256)), ka(ce[C.e + 1]);
          }
          break;
        case 520:
          {
            var ar = {};
            C.level != null && ((ie[C.r] = ar), (ar.level = C.level)), C.hidden && ((ie[C.r] = ar), (ar.hidden = !0)), C.hpt && ((ie[C.r] = ar), (ar.hpt = C.hpt), (ar.hpx = Ja(C.hpt)));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          t["!margins"] || Ga((t["!margins"] = {})), (t["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[ne]] = C);
          break;
        case 161:
          t["!margins"] || Ga((t["!margins"] = {})), (t["!margins"].header = C.header), (t["!margins"].footer = C.footer);
          break;
        case 574:
          C.RTL && (F.Views[0].RTL = !0);
          break;
        case 146:
          R = C;
          break;
        case 2198:
          j = C;
          break;
        case 140:
          N = C;
          break;
        case 442:
          l ? (W.CodeName = C || W.name) : (F.WBProps.CodeName = C || "ThisWorkbook");
          break;
      }
    } else J || console.error("Missing Info for XLS Record 0x" + ne.toString(16)), (e.l += q);
  }
  return (
    (r.SheetNames = Or(s)
      .sort(function (Cr, ve) {
        return Number(Cr) - Number(ve);
      })
      .map(function (Cr) {
        return s[Cr].name;
      })),
    a.bookSheets || (r.Sheets = n),
    !r.SheetNames.length && o["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = o)) : (r.Preamble = o),
    r.Sheets &&
      I.forEach(function (Cr, ve) {
        r.Sheets[r.SheetNames[ve]]["!autofilter"] = Cr;
      }),
    (r.Strings = f),
    (r.SSF = $e(de)),
    P.enc && (r.Encryption = P.enc),
    j && (r.Themes = j),
    (r.Metadata = {}),
    N !== void 0 && (r.Metadata.Country = N),
    G.names.length > 0 && (F.Names = G.names),
    (r.Workbook = F),
    r
  );
}
var On = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };
function ld(e, a, r) {
  var n = me.find(e, "/!DocumentSummaryInformation");
  if (n && n.size > 0)
    try {
      var t = xn(n, Sf, On.DSI);
      for (var s in t) a[s] = t[s];
    } catch (l) {
      if (r.WTF) throw l;
    }
  var i = me.find(e, "/!SummaryInformation");
  if (i && i.size > 0)
    try {
      var c = xn(i, Cf, On.SI);
      for (var f in c) a[f] == null && (a[f] = c[f]);
    } catch (l) {
      if (r.WTF) throw l;
    }
  a.HeadingPairs && a.TitlesOfParts && (Bs(a.HeadingPairs, a.TitlesOfParts, a, r), delete a.HeadingPairs, delete a.TitlesOfParts);
}
function Ei(e, a) {
  a || (a = {}), S0(a), Yn(), a.codepage && n0(a.codepage);
  var r, n;
  if (e.FullPaths) {
    if (me.find(e, "/encryption")) throw new Error("File is password-protected");
    (r = me.find(e, "!CompObj")), (n = me.find(e, "/Workbook") || me.find(e, "/Book"));
  } else {
    switch (a.type) {
      case "base64":
        e = kr(hr(e));
        break;
      case "binary":
        e = kr(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    ze(e, 0), (n = { content: e });
  }
  var t, s;
  if ((r && id(r), a.bookProps && !a.bookSheets)) t = {};
  else {
    var i = ge ? "buffer" : "array";
    if (n && n.content) t = od(n.content, a);
    else if ((s = me.find(e, "PerfectOffice_MAIN")) && s.content) t = Va.to_workbook(s.content, ((a.type = i), a));
    else if ((s = me.find(e, "NativeContent_MAIN")) && s.content) t = Va.to_workbook(s.content, ((a.type = i), a));
    else throw (s = me.find(e, "MN0")) && s.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    a.bookVBA && e.FullPaths && me.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (t.vbaraw = j1(e));
  }
  var c = {};
  return e.FullPaths && ld(e, c, a), (t.Props = t.Custprops = c), a.bookFiles && (t.cfb = e), t;
}
var yt = {
    0: { f: zh },
    1: { f: jh },
    2: { f: nx },
    3: { f: Qh },
    4: { f: Zh },
    5: { f: tx },
    6: { f: cx },
    7: { f: rx },
    8: { f: hx },
    9: { f: ux },
    10: { f: ox },
    11: { f: lx },
    12: { f: Jh },
    13: { f: sx },
    14: { f: ex },
    15: { f: qh },
    16: { f: vi },
    17: { f: fx },
    18: { f: ax },
    19: { f: v0 },
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
    39: { f: Ux },
    40: {},
    42: {},
    43: { f: o1 },
    44: { f: f1 },
    45: { f: l1 },
    46: { f: h1 },
    47: { f: u1 },
    48: {},
    49: { f: hf },
    50: {},
    51: { f: N1 },
    52: { T: 1 },
    53: { T: -1 },
    54: { T: 1 },
    55: { T: -1 },
    56: { T: 1 },
    57: { T: -1 },
    58: {},
    59: {},
    60: { f: js },
    62: { f: ix },
    63: { f: b1 },
    64: { f: Tx },
    65: {},
    66: {},
    67: {},
    68: {},
    69: {},
    70: {},
    128: {},
    129: { T: 1 },
    130: { T: -1 },
    131: { T: 1, f: er, p: 0 },
    132: { T: -1 },
    133: { T: 1 },
    134: { T: -1 },
    135: { T: 1 },
    136: { T: -1 },
    137: { T: 1, f: Ex },
    138: { T: -1 },
    139: { T: 1 },
    140: { T: -1 },
    141: { T: 1 },
    142: { T: -1 },
    143: { T: 1 },
    144: { T: -1 },
    145: { T: 1 },
    146: { T: -1 },
    147: { f: Yh },
    148: { f: $h, p: 16 },
    151: { f: vx },
    152: {},
    153: { f: Bx },
    154: {},
    155: {},
    156: { f: Mx },
    157: {},
    158: {},
    159: { T: 1, f: yl },
    160: { T: -1 },
    161: { T: 1, f: ua },
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
    176: { f: xx },
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
    335: { f: I1 },
    336: { T: -1 },
    337: { f: P1, T: 1 },
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
    355: { f: $t },
    357: {},
    358: {},
    359: {},
    360: { T: 1 },
    361: {},
    362: { f: Ys },
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
    426: { f: px },
    427: { f: gx },
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
    476: { f: _x },
    477: {},
    478: {},
    479: { T: 1 },
    480: { T: -1 },
    481: { T: 1 },
    482: { T: -1 },
    483: { T: 1 },
    484: { T: -1 },
    485: { f: Kh },
    486: { T: 1 },
    487: { T: -1 },
    488: { T: 1 },
    489: { T: -1 },
    490: { T: 1 },
    491: { T: -1 },
    492: { T: 1 },
    493: { T: -1 },
    494: { f: dx },
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
    550: { f: $t },
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
    632: { f: $1 },
    633: { T: 1 },
    634: { T: -1 },
    635: { T: 1, f: z1 },
    636: { T: -1 },
    637: { f: df },
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
    651: { f: Cx },
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
    1053: { f: kx },
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
  Zt = {
    6: { f: Ht },
    10: { f: Gr },
    12: { f: be },
    13: { f: be },
    14: { f: Pe },
    15: { f: Pe },
    16: { f: Ze },
    17: { f: Pe },
    18: { f: Pe },
    19: { f: be },
    20: { f: gn },
    21: { f: gn },
    23: { f: Ys },
    24: { f: _n },
    25: { f: Pe },
    26: {},
    27: {},
    28: { f: Go },
    29: {},
    34: { f: Pe },
    35: { f: mn },
    38: { f: Ze },
    39: { f: Ze },
    40: { f: Ze },
    41: { f: Ze },
    42: { f: Pe },
    43: { f: Pe },
    47: { f: Kl },
    49: { f: Ao },
    51: { f: be },
    60: {},
    61: { f: To },
    64: { f: Pe },
    65: { f: wo },
    66: { f: be },
    77: {},
    80: {},
    81: {},
    82: {},
    85: { f: be },
    89: {},
    90: {},
    91: {},
    92: { f: ho },
    93: { f: zo },
    94: {},
    95: { f: Pe },
    96: {},
    97: {},
    99: { f: Pe },
    125: { f: js },
    128: { f: Po },
    129: { f: xo },
    130: { f: be },
    131: { f: Pe },
    132: { f: Pe },
    133: { f: vo },
    134: {},
    140: { f: Zo },
    141: { f: be },
    144: {},
    146: { f: Qo },
    151: {},
    152: {},
    153: {},
    154: {},
    155: {},
    156: { f: be },
    157: {},
    158: {},
    160: { f: nl },
    161: { f: rl },
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
    189: { f: Oo },
    190: { f: Ro },
    193: { f: Gr },
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
    224: { f: No },
    225: { f: uo },
    226: { f: Gr },
    227: {},
    229: { f: Xo },
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
    252: { f: po },
    253: { f: Fo },
    255: { f: go },
    256: {},
    259: {},
    290: {},
    311: {},
    312: {},
    315: {},
    317: { f: Ws },
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
    353: { f: Gr },
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
    430: { f: Mo },
    431: { f: Pe },
    432: {},
    433: {},
    434: {},
    437: {},
    438: { f: Yo },
    439: { f: Pe },
    440: { f: jo },
    441: {},
    442: { f: at },
    443: {},
    444: { f: be },
    445: {},
    446: {},
    448: { f: Gr },
    449: { f: Eo, r: 2 },
    450: { f: Gr },
    512: { f: vn },
    513: { f: tl },
    515: { f: Lo },
    516: { f: So },
    517: { f: pn },
    519: { f: sl },
    520: { f: mo },
    523: {},
    545: { f: En },
    549: { f: dn },
    566: {},
    574: { f: ko },
    638: { f: Do },
    659: {},
    1048: {},
    1054: { f: Co },
    1084: {},
    1212: { f: Ho },
    2048: { f: Jo },
    2049: {},
    2050: {},
    2051: {},
    2052: {},
    2053: {},
    2054: {},
    2055: {},
    2056: {},
    2057: { f: ht },
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
    2151: { f: Gr },
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
    2172: { f: el, r: 12 },
    2173: { f: O1, r: 12 },
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
    2196: { f: Uo, r: 12 },
    2197: {},
    2198: { f: A1, r: 12 },
    2199: {},
    2200: {},
    2201: {},
    2202: { f: Vo, r: 12 },
    2203: { f: Gr },
    2204: {},
    2205: {},
    2206: {},
    2207: {},
    2211: { f: _o },
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
    4164: { f: al },
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
    4188: { f: qo },
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
    0: { f: vn },
    1: {},
    2: { f: ol },
    3: { f: fl },
    4: { f: cl },
    5: { f: pn },
    7: { f: ll },
    8: {},
    9: { f: ht },
    11: {},
    22: { f: be },
    30: { f: yo },
    31: {},
    32: {},
    33: { f: En },
    36: {},
    37: { f: dn },
    50: { f: ul },
    62: {},
    52: {},
    67: {},
    68: { f: be },
    69: {},
    86: {},
    126: {},
    127: { f: il },
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
    214: { f: hl },
    223: {},
    234: {},
    354: {},
    421: {},
    518: { f: Ht },
    521: { f: ht },
    536: { f: _n },
    547: { f: mn },
    561: {},
    579: {},
    1030: { f: Ht },
    1033: { f: ht },
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
function Tr(e, a, r, n) {
  var t = a;
  if (!isNaN(t)) {
    var s = n || (r || []).length || 0,
      i = e.next(4);
    i.write_shift(2, t), i.write_shift(2, s), s > 0 && Ds(r) && e.push(r);
  }
}
function Rn(e, a) {
  var r = a || {},
    n = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var t = e.match(/<table/i);
  if (!t) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i),
    i = t.index,
    c = (s && s.index) || e.length,
    f = Pc(e.slice(i, c), /(:?<tr[^>]*>)/i, "<tr>"),
    l = -1,
    o = 0,
    u = 0,
    x = 0,
    d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } },
    v = [];
  for (i = 0; i < f.length; ++i) {
    var h = f[i].trim(),
      g = h.slice(0, 3).toLowerCase();
    if (g == "<tr") {
      if ((++l, r.sheetRows && r.sheetRows <= l)) {
        --l;
        break;
      }
      o = 0;
      continue;
    }
    if (!(g != "<td" && g != "<th")) {
      var A = h.split(/<\/t[dh]>/i);
      for (c = 0; c < A.length; ++c) {
        var y = A[c].trim();
        if (y.match(/<t[dh]/i)) {
          for (var _ = y, N = 0; _.charAt(0) == "<" && (N = _.indexOf(">")) > -1; ) _ = _.slice(N + 1);
          for (var b = 0; b < v.length; ++b) {
            var R = v[b];
            R.s.c == o && R.s.r < l && l <= R.e.r && ((o = R.e.c + 1), (b = -1));
          }
          var F = oe(y.slice(0, y.indexOf(">")));
          (x = F.colspan ? +F.colspan : 1), ((u = +F.rowspan) > 1 || x > 1) && v.push({ s: { r: l, c: o }, e: { r: l + (u || 1) - 1, c: o + x - 1 } });
          var W = F.t || F["data-t"] || "";
          if (!_.length) {
            o += x;
            continue;
          }
          if (((_ = ps(_)), d.s.r > l && (d.s.r = l), d.e.r < l && (d.e.r = l), d.s.c > o && (d.s.c = o), d.e.c < o && (d.e.c = o), !_.length)) {
            o += x;
            continue;
          }
          var D = { t: "s", v: _ };
          r.raw || !_.trim().length || W == "s" || (_ === "TRUE" ? (D = { t: "b", v: !0 }) : _ === "FALSE" ? (D = { t: "b", v: !1 }) : isNaN(Fr(_)) ? isNaN(Ta(_).getDate()) || ((D = { t: "d", v: Xe(_) }), r.cellDates || (D = { t: "n", v: cr(D.v) }), (D.z = r.dateNF || de[14])) : (D = { t: "n", v: Fr(_) })), r.dense ? (n[l] || (n[l] = []), (n[l][o] = D)) : (n[he({ r: l, c: o })] = D), (o += x);
        }
      }
    }
  }
  return (n["!ref"] = _e(d)), v.length && (n["!merges"] = v), n;
}
function ud(e, a, r, n) {
  for (var t = e["!merges"] || [], s = [], i = a.s.c; i <= a.e.c; ++i) {
    for (var c = 0, f = 0, l = 0; l < t.length; ++l)
      if (!(t[l].s.r > r || t[l].s.c > i) && !(t[l].e.r < r || t[l].e.c < i)) {
        if (t[l].s.r < r || t[l].s.c < i) {
          c = -1;
          break;
        }
        (c = t[l].e.r - t[l].s.r + 1), (f = t[l].e.c - t[l].s.c + 1);
        break;
      }
    if (!(c < 0)) {
      var o = he({ r, c: i }),
        u = n.dense ? (e[r] || [])[i] : e[o],
        x = (u && u.v != null && (u.h || l0(u.w || (Ur(u), u.w) || ""))) || "",
        d = {};
      c > 1 && (d.rowspan = c), f > 1 && (d.colspan = f), n.editable ? (x = '<span contenteditable="true">' + x + "</span>") : u && ((d["data-t"] = (u && u.t) || "z"), u.v != null && (d["data-v"] = u.v), u.z != null && (d["data-z"] = u.z), u.l && (u.l.Target || "#").charAt(0) != "#" && (x = '<a href="' + u.l.Target + '">' + x + "</a>")), (d.id = (n.id || "sjs") + "-" + o), s.push(jc("td", x, d));
    }
  }
  var v = "<tr>";
  return v + s.join("") + "</tr>";
}
var hd = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  xd = "</body></html>";
function dd(e, a) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1) return Zr(Rn(r[0], a), a);
  var n = y0();
  return (
    r.forEach(function (t, s) {
      D0(n, Rn(t, a), "Sheet" + (s + 1));
    }),
    n
  );
}
function vd(e, a, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function pd(e, a) {
  var r = a || {},
    n = r.header != null ? r.header : hd,
    t = r.footer != null ? r.footer : xd,
    s = [n],
    i = Aa(e["!ref"]);
  (r.dense = Array.isArray(e)), s.push(vd(e, i, r));
  for (var c = i.s.r; c <= i.e.r; ++c) s.push(ud(e, i, c, r));
  return s.push("</table>" + t), s.join("");
}
function Ti(e, a, r) {
  var n = r || {},
    t = 0,
    s = 0;
  if (n.origin != null)
    if (typeof n.origin == "number") t = n.origin;
    else {
      var i = typeof n.origin == "string" ? sr(n.origin) : n.origin;
      (t = i.r), (s = i.c);
    }
  var c = a.getElementsByTagName("tr"),
    f = Math.min(n.sheetRows || 1e7, c.length),
    l = { s: { r: 0, c: 0 }, e: { r: t, c: s } };
  if (e["!ref"]) {
    var o = Aa(e["!ref"]);
    (l.s.r = Math.min(l.s.r, o.s.r)), (l.s.c = Math.min(l.s.c, o.s.c)), (l.e.r = Math.max(l.e.r, o.e.r)), (l.e.c = Math.max(l.e.c, o.e.c)), t == -1 && (l.e.r = t = o.e.r + 1);
  }
  var u = [],
    x = 0,
    d = e["!rows"] || (e["!rows"] = []),
    v = 0,
    h = 0,
    g = 0,
    A = 0,
    y = 0,
    _ = 0;
  for (e["!cols"] || (e["!cols"] = []); v < c.length && h < f; ++v) {
    var N = c[v];
    if (In(N)) {
      if (n.display) continue;
      d[h] = { hidden: !0 };
    }
    var b = N.children;
    for (g = A = 0; g < b.length; ++g) {
      var R = b[g];
      if (!(n.display && In(R))) {
        var F = R.hasAttribute("data-v") ? R.getAttribute("data-v") : R.hasAttribute("v") ? R.getAttribute("v") : ps(R.innerHTML),
          W = R.getAttribute("data-z") || R.getAttribute("z");
        for (x = 0; x < u.length; ++x) {
          var D = u[x];
          D.s.c == A + s && D.s.r < h + t && h + t <= D.e.r && ((A = D.e.c + 1 - s), (x = -1));
        }
        (_ = +R.getAttribute("colspan") || 1), ((y = +R.getAttribute("rowspan") || 1) > 1 || _ > 1) && u.push({ s: { r: h + t, c: A + s }, e: { r: h + t + (y || 1) - 1, c: A + s + (_ || 1) - 1 } });
        var X = { t: "s", v: F },
          U = R.getAttribute("data-t") || R.getAttribute("t") || "";
        F != null && (F.length == 0 ? (X.t = U || "z") : n.raw || F.trim().length == 0 || U == "s" || (F === "TRUE" ? (X = { t: "b", v: !0 }) : F === "FALSE" ? (X = { t: "b", v: !1 }) : isNaN(Fr(F)) ? isNaN(Ta(F).getDate()) || ((X = { t: "d", v: Xe(F) }), n.cellDates || (X = { t: "n", v: cr(X.v) }), (X.z = n.dateNF || de[14])) : (X = { t: "n", v: Fr(F) }))), X.z === void 0 && W != null && (X.z = W);
        var P = "",
          j = R.getElementsByTagName("A");
        if (j && j.length) for (var fe = 0; fe < j.length && !(j[fe].hasAttribute("href") && ((P = j[fe].getAttribute("href")), P.charAt(0) != "#")); ++fe);
        P && P.charAt(0) != "#" && (X.l = { Target: P }), n.dense ? (e[h + t] || (e[h + t] = []), (e[h + t][A + s] = X)) : (e[he({ c: A + s, r: h + t })] = X), l.e.c < A + s && (l.e.c = A + s), (A += _);
      }
    }
    ++h;
  }
  return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), (l.e.r = Math.max(l.e.r, h - 1 + t)), (e["!ref"] = _e(l)), h >= f && (e["!fullref"] = _e(((l.e.r = c.length - v + h - 1 + t), l))), e;
}
function ki(e, a) {
  var r = a || {},
    n = r.dense ? [] : {};
  return Ti(n, e, a);
}
function gd(e, a) {
  return Zr(ki(e, a), a);
}
function In(e) {
  var a = "",
    r = md(e);
  return r && (a = r(e).getPropertyValue("display")), a || (a = e.style && e.style.display), a === "none";
}
function md(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function _d(e) {
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
    r = Te(a.replace(/<[^>]*>/g, ""));
  return [r];
}
var Nn = { day: ["d", "dd"], month: ["m", "mm"], year: ["y", "yy"], hours: ["h", "hh"], minutes: ["m", "mm"], seconds: ["s", "ss"], "am-pm": ["A/P", "AM/PM"], "day-of-week": ["ddd", "dddd"], era: ["e", "ee"], quarter: ["\\Qm", 'm\\"th quarter"'] };
function wi(e, a) {
  var r = a || {},
    n = u0(e),
    t = [],
    s,
    i,
    c = { name: "" },
    f = "",
    l = 0,
    o,
    u,
    x = {},
    d = [],
    v = r.dense ? [] : {},
    h,
    g,
    A = { value: "" },
    y = "",
    _ = 0,
    N = [],
    b = -1,
    R = -1,
    F = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } },
    W = 0,
    D = {},
    X = [],
    U = {},
    P = 0,
    j = 0,
    fe = [],
    re = 1,
    ce = 1,
    ie = [],
    Fe = { Names: [] },
    G = {},
    le = ["", ""],
    ue = [],
    S = {},
    H = "",
    I = 0,
    O = !1,
    K = !1,
    ee = 0;
  for (Ka.lastIndex = 0, n = n.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); (h = Ka.exec(n)); )
    switch ((h[3] = h[3].replace(/_.*$/, ""))) {
      case "table":
      case "工作表":
        h[1] === "/"
          ? (F.e.c >= F.s.c && F.e.r >= F.s.r ? (v["!ref"] = _e(F)) : (v["!ref"] = "A1:A1"), r.sheetRows > 0 && r.sheetRows <= F.e.r && ((v["!fullref"] = v["!ref"]), (F.e.r = r.sheetRows - 1), (v["!ref"] = _e(F))), X.length && (v["!merges"] = X), fe.length && (v["!rows"] = fe), (o.name = o.名称 || o.name), typeof JSON < "u" && JSON.stringify(o), d.push(o.name), (x[o.name] = v), (K = !1))
          : h[0].charAt(h[0].length - 2) !== "/" && ((o = oe(h[0], !1)), (b = R = -1), (F.s.r = F.s.c = 1e7), (F.e.r = F.e.c = 0), (v = r.dense ? [] : {}), (X = []), (fe = []), (K = !0));
        break;
      case "table-row-group":
        h[1] === "/" ? --W : ++W;
        break;
      case "table-row":
      case "行":
        if (h[1] === "/") {
          (b += re), (re = 1);
          break;
        }
        if (((u = oe(h[0], !1)), u.行号 ? (b = u.行号 - 1) : b == -1 && (b = 0), (re = +u["number-rows-repeated"] || 1), re < 10)) for (ee = 0; ee < re; ++ee) W > 0 && (fe[b + ee] = { level: W });
        R = -1;
        break;
      case "covered-table-cell":
        h[1] !== "/" && ++R, r.sheetStubs && (r.dense ? (v[b] || (v[b] = []), (v[b][R] = { t: "z" })) : (v[he({ r: b, c: R })] = { t: "z" })), (y = ""), (N = []);
        break;
      case "table-cell":
      case "数据":
        if (h[0].charAt(h[0].length - 2) === "/") ++R, (A = oe(h[0], !1)), (ce = parseInt(A["number-columns-repeated"] || "1", 10)), (g = { t: "z", v: null }), A.formula && r.cellFormula != !1 && (g.f = Cn(Te(A.formula))), (A.数据类型 || A["value-type"]) == "string" && ((g.t = "s"), (g.v = Te(A["string-value"] || "")), r.dense ? (v[b] || (v[b] = []), (v[b][R] = g)) : (v[he({ r: b, c: R })] = g)), (R += ce - 1);
        else if (h[1] !== "/") {
          ++R, (y = ""), (_ = 0), (N = []), (ce = 1);
          var ne = re ? b + re - 1 : b;
          if ((R > F.e.c && (F.e.c = R), R < F.s.c && (F.s.c = R), b < F.s.r && (F.s.r = b), ne > F.e.r && (F.e.r = ne), (A = oe(h[0], !1)), (ue = []), (S = {}), (g = { t: A.数据类型 || A["value-type"], v: null }), r.cellFormula))
            if ((A.formula && (A.formula = Te(A.formula)), A["number-matrix-columns-spanned"] && A["number-matrix-rows-spanned"] && ((P = parseInt(A["number-matrix-rows-spanned"], 10) || 0), (j = parseInt(A["number-matrix-columns-spanned"], 10) || 0), (U = { s: { r: b, c: R }, e: { r: b + P - 1, c: R + j - 1 } }), (g.F = _e(U)), ie.push([U, g.F])), A.formula)) g.f = Cn(A.formula);
            else for (ee = 0; ee < ie.length; ++ee) b >= ie[ee][0].s.r && b <= ie[ee][0].e.r && R >= ie[ee][0].s.c && R <= ie[ee][0].e.c && (g.F = ie[ee][1]);
          switch (((A["number-columns-spanned"] || A["number-rows-spanned"]) && ((P = parseInt(A["number-rows-spanned"], 10) || 0), (j = parseInt(A["number-columns-spanned"], 10) || 0), (U = { s: { r: b, c: R }, e: { r: b + P - 1, c: R + j - 1 } }), X.push(U)), A["number-columns-repeated"] && (ce = parseInt(A["number-columns-repeated"], 10)), g.t)) {
            case "boolean":
              (g.t = "b"), (g.v = Se(A["boolean-value"]));
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
              (g.t = "d"), (g.v = Xe(A["date-value"])), r.cellDates || ((g.t = "n"), (g.v = cr(g.v))), (g.z = "m/d/yy");
              break;
            case "time":
              (g.t = "n"), (g.v = Rc(A["time-value"]) / 86400), r.cellDates && ((g.t = "d"), (g.v = Dt(g.v))), (g.z = "HH:MM:SS");
              break;
            case "number":
              (g.t = "n"), (g.v = parseFloat(A.数据数值));
              break;
            default:
              if (g.t === "string" || g.t === "text" || !g.t) (g.t = "s"), A["string-value"] != null && ((y = Te(A["string-value"])), (N = []));
              else throw new Error("Unsupported value type " + g.t);
          }
        } else {
          if (((O = !1), g.t === "s" && ((g.v = y || ""), N.length && (g.R = N), (O = _ == 0)), G.Target && (g.l = G), ue.length > 0 && ((g.c = ue), (ue = [])), y && r.cellText !== !1 && (g.w = y), O && ((g.t = "z"), delete g.v), (!O || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= b)))
            for (var q = 0; q < re; ++q) {
              if (((ce = parseInt(A["number-columns-repeated"] || "1", 10)), r.dense)) for (v[b + q] || (v[b + q] = []), v[b + q][R] = q == 0 ? g : $e(g); --ce > 0; ) v[b + q][R + ce] = $e(g);
              else for (v[he({ r: b + q, c: R })] = g; --ce > 0; ) v[he({ r: b + q, c: R + ce })] = $e(g);
              F.e.c <= R && (F.e.c = R);
            }
          (ce = parseInt(A["number-columns-repeated"] || "1", 10)), (R += ce - 1), (ce = 0), (g = {}), (y = ""), (N = []);
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
        if (h[1] === "/") {
          if ((s = t.pop())[0] !== h[3]) throw "Bad state: " + s;
        } else h[0].charAt(h[0].length - 2) !== "/" && t.push([h[3], !0]);
        break;
      case "annotation":
        if (h[1] === "/") {
          if ((s = t.pop())[0] !== h[3]) throw "Bad state: " + s;
          (S.t = y), N.length && (S.R = N), (S.a = H), ue.push(S);
        } else h[0].charAt(h[0].length - 2) !== "/" && t.push([h[3], !1]);
        (H = ""), (I = 0), (y = ""), (_ = 0), (N = []);
        break;
      case "creator":
        h[1] === "/" ? (H = n.slice(I, h.index)) : (I = h.index + h[0].length);
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
        if (h[1] === "/") {
          if ((s = t.pop())[0] !== h[3]) throw "Bad state: " + s;
        } else h[0].charAt(h[0].length - 2) !== "/" && t.push([h[3], !1]);
        (y = ""), (_ = 0), (N = []);
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
        if (h[1] === "/") {
          if (((D[c.name] = f), (s = t.pop())[0] !== h[3])) throw "Bad state: " + s;
        } else h[0].charAt(h[0].length - 2) !== "/" && ((f = ""), (c = oe(h[0], !1)), t.push([h[3], !0]));
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
            (i = oe(h[0], !1)), (f += Nn[h[3]][i.style === "long" ? 1 : 0]);
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
            (i = oe(h[0], !1)), (f += Nn[h[3]][i.style === "long" ? 1 : 0]);
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
        if (h[0].slice(-2) === "/>") break;
        if (h[1] === "/")
          switch (t[t.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              f += n.slice(l, h.index);
              break;
          }
        else l = h.index + h[0].length;
        break;
      case "named-range":
        (i = oe(h[0], !1)), (le = Vt(i["cell-range-address"]));
        var J = { Name: i.name, Ref: le[0] + "!" + le[1] };
        K && (J.Sheet = d.length), Fe.Names.push(J);
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
        if (h[1] === "/" && (!A || !A["string-value"])) {
          var Ee = _d(n.slice(_, h.index));
          y =
            (y.length > 0
              ? y +
                `
`
              : "") + Ee[0];
        } else oe(h[0], !1), (_ = h.index + h[0].length);
        break;
      case "s":
        break;
      case "database-range":
        if (h[1] === "/") break;
        try {
          (le = Vt(oe(h[0])["target-range-address"])), (x[le[0]]["!autofilter"] = { ref: le[1] });
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
        if (h[1] !== "/") {
          if (((G = oe(h[0], !1)), !G.href)) break;
          (G.Target = Te(G.href)), delete G.href, G.Target.charAt(0) == "#" && G.Target.indexOf(".") > -1 ? ((le = Vt(G.Target.slice(1))), (G.Target = "#" + le[0] + "!" + le[1])) : G.Target.match(/^\.\.[\\\/]/) && (G.Target = G.Target.slice(3));
        }
        break;
      case "table-protection":
        break;
      case "data-pilot-grand-total":
        break;
      case "office-document-common-attrs":
        break;
      default:
        switch (h[2]) {
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
            if (r.WTF) throw new Error(h);
        }
    }
  var C = { Sheets: x, SheetNames: d, Workbook: Fe };
  return r.bookSheets && delete C.Sheets, C;
}
function Pn(e, a) {
  (a = a || {}), gr(e, "META-INF/manifest.xml") && Pf(Be(e, "META-INF/manifest.xml"), a);
  var r = ur(e, "content.xml");
  if (!r) throw new Error("Missing content.xml in ODS / UOF file");
  var n = wi(Ae(r), a);
  return gr(e, "meta.xml") && (n.Props = Ms(Be(e, "meta.xml"))), n;
}
function Ln(e, a) {
  return wi(e, a);
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function A0(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function qt(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Ae(oa(e));
}
function Qt(e) {
  var a = e.reduce(function (t, s) {
      return t + s.length;
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
function Mn(e) {
  return (e -= (e >> 1) & 1431655765), (e = (e & 858993459) + ((e >> 2) & 858993459)), (((e + (e >> 4)) & 252645135) * 16843009) >>> 24;
}
function Ed(e, a) {
  for (var r = ((e[a + 15] & 127) << 7) | (e[a + 14] >> 1), n = e[a + 14] & 1, t = a + 13; t >= a; --t) n = n * 256 + e[t];
  return (e[a + 15] & 128 ? -n : n) * Math.pow(10, r - 6176);
}
function Za(e, a) {
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
function qe(e) {
  for (var a = [], r = [0]; r[0] < e.length; ) {
    var n = r[0],
      t = Za(e, r),
      s = t & 7;
    t = Math.floor(t / 8);
    var i = 0,
      c;
    if (t == 0) break;
    switch (s) {
      case 0:
        {
          for (var f = r[0]; e[r[0]++] >= 128; );
          c = e.slice(f, r[0]);
        }
        break;
      case 5:
        (i = 4), (c = e.slice(r[0], r[0] + i)), (r[0] += i);
        break;
      case 1:
        (i = 8), (c = e.slice(r[0], r[0] + i)), (r[0] += i);
        break;
      case 2:
        (i = Za(e, r)), (c = e.slice(r[0], r[0] + i)), (r[0] += i);
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(s, " for Field ").concat(t, " at offset ").concat(n));
    }
    var l = { data: c, type: s };
    a[t] == null ? (a[t] = [l]) : a[t].push(l);
  }
  return a;
}
function F0(e, a) {
  return (
    (e == null
      ? void 0
      : e.map(function (r) {
          return a(r.data);
        })) || []
  );
}
function Td(e) {
  for (var a, r = [], n = [0]; n[0] < e.length; ) {
    var t = Za(e, n),
      s = qe(e.slice(n[0], n[0] + t));
    n[0] += t;
    var i = { id: We(s[1][0].data), messages: [] };
    s[2].forEach(function (c) {
      var f = qe(c.data),
        l = We(f[3][0].data);
      i.messages.push({ meta: f, data: e.slice(n[0], n[0] + l) }), (n[0] += l);
    }),
      (a = s[3]) != null && a[0] && (i.merge = We(s[3][0].data) >>> 0 > 0),
      r.push(i);
  }
  return r;
}
function kd(e, a) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = Za(a, r), t = []; r[0] < a.length; ) {
    var s = a[r[0]] & 3;
    if (s == 0) {
      var i = a[r[0]++] >> 2;
      if (i < 60) ++i;
      else {
        var c = i - 59;
        (i = a[r[0]]), c > 1 && (i |= a[r[0] + 1] << 8), c > 2 && (i |= a[r[0] + 2] << 16), c > 3 && (i |= a[r[0] + 3] << 24), (i >>>= 0), i++, (r[0] += c);
      }
      t.push(a.slice(r[0], r[0] + i)), (r[0] += i);
      continue;
    } else {
      var f = 0,
        l = 0;
      if ((s == 1 ? ((l = ((a[r[0]] >> 2) & 7) + 4), (f = (a[r[0]++] & 224) << 3), (f |= a[r[0]++])) : ((l = (a[r[0]++] >> 2) + 1), s == 2 ? ((f = a[r[0]] | (a[r[0] + 1] << 8)), (r[0] += 2)) : ((f = (a[r[0]] | (a[r[0] + 1] << 8) | (a[r[0] + 2] << 16) | (a[r[0] + 3] << 24)) >>> 0), (r[0] += 4))), (t = [Qt(t)]), f == 0)) throw new Error("Invalid offset 0");
      if (f > t[0].length) throw new Error("Invalid offset beyond length");
      if (l >= f) for (t.push(t[0].slice(-f)), l -= f; l >= t[t.length - 1].length; ) t.push(t[t.length - 1]), (l -= t[t.length - 1].length);
      t.push(t[0].slice(-f, -f + l));
    }
  }
  var o = Qt(t);
  if (o.length != n) throw new Error("Unexpected length: ".concat(o.length, " != ").concat(n));
  return o;
}
function wd(e) {
  for (var a = [], r = 0; r < e.length; ) {
    var n = e[r++],
      t = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16);
    (r += 3), a.push(kd(n, e.slice(r, r + t))), (r += t);
  }
  if (r !== e.length) throw new Error("data is not a valid framed stream!");
  return Qt(a);
}
function Ad(e, a, r, n) {
  var t = A0(e),
    s = t.getUint32(4, !0),
    i = (n > 1 ? 12 : 8) + Mn(s & (n > 1 ? 3470 : 398)) * 4,
    c = -1,
    f = -1,
    l = NaN,
    o = new Date(2001, 0, 1);
  s & 512 && ((c = t.getUint32(i, !0)), (i += 4)), (i += Mn(s & (n > 1 ? 12288 : 4096)) * 4), s & 16 && ((f = t.getUint32(i, !0)), (i += 4)), s & 32 && ((l = t.getFloat64(i, !0)), (i += 8)), s & 64 && (o.setTime(o.getTime() + t.getFloat64(i, !0) * 1e3), (i += 8));
  var u;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: l };
      break;
    case 3:
      u = { t: "s", v: a[f] };
      break;
    case 5:
      u = { t: "d", v: o };
      break;
    case 6:
      u = { t: "b", v: l > 0 };
      break;
    case 7:
      u = { t: "n", v: l / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (c > -1) u = { t: "s", v: r[c] };
      else if (f > -1) u = { t: "s", v: a[f] };
      else if (!isNaN(l)) u = { t: "n", v: l };
      else throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return u;
}
function Fd(e, a, r) {
  var n = A0(e),
    t = n.getUint32(8, !0),
    s = 12,
    i = -1,
    c = -1,
    f = NaN,
    l = NaN,
    o = new Date(2001, 0, 1);
  t & 1 && ((f = Ed(e, s)), (s += 16)), t & 2 && ((l = n.getFloat64(s, !0)), (s += 8)), t & 4 && (o.setTime(o.getTime() + n.getFloat64(s, !0) * 1e3), (s += 8)), t & 8 && ((c = n.getUint32(s, !0)), (s += 4)), t & 16 && ((i = n.getUint32(s, !0)), (s += 4));
  var u;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: f };
      break;
    case 3:
      u = { t: "s", v: a[c] };
      break;
    case 5:
      u = { t: "d", v: o };
      break;
    case 6:
      u = { t: "b", v: l > 0 };
      break;
    case 7:
      u = { t: "n", v: l / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (i > -1) u = { t: "s", v: r[i] };
      else
        throw new Error(
          "Unsupported cell type "
            .concat(e[1], " : ")
            .concat(t & 31, " : ")
            .concat(e.slice(0, 4))
        );
      break;
    case 10:
      u = { t: "n", v: f };
      break;
    default:
      throw new Error(
        "Unsupported cell type "
          .concat(e[1], " : ")
          .concat(t & 31, " : ")
          .concat(e.slice(0, 4))
      );
  }
  return u;
}
function Sd(e, a, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return Ad(e, a, r, e[0]);
    case 5:
      return Fd(e, a, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function Yr(e) {
  var a = qe(e);
  return Za(a[1][0].data);
}
function Bn(e, a) {
  var r = qe(a.data),
    n = We(r[1][0].data),
    t = r[3],
    s = [];
  return (
    (t || []).forEach(function (i) {
      var c = qe(i.data),
        f = We(c[1][0].data) >>> 0;
      switch (n) {
        case 1:
          s[f] = qt(c[3][0].data);
          break;
        case 8:
          {
            var l = e[Yr(c[9][0].data)][0],
              o = qe(l.data),
              u = e[Yr(o[1][0].data)][0],
              x = We(u.meta[1][0].data);
            if (x != 2001) throw new Error("2000 unexpected reference to ".concat(x));
            var d = qe(u.data);
            s[f] = d[3]
              .map(function (v) {
                return qt(v.data);
              })
              .join("");
          }
          break;
      }
    }),
    s
  );
}
function Cd(e, a) {
  var r,
    n,
    t,
    s,
    i,
    c,
    f,
    l,
    o,
    u,
    x,
    d,
    v,
    h,
    g = qe(e),
    A = We(g[1][0].data) >>> 0,
    y = We(g[2][0].data) >>> 0,
    _ = (((n = (r = g[8]) == null ? void 0 : r[0]) == null ? void 0 : n.data) && We(g[8][0].data) > 0) || !1,
    N,
    b;
  if ((s = (t = g[7]) == null ? void 0 : t[0]) != null && s.data && a != 0) (N = (c = (i = g[7]) == null ? void 0 : i[0]) == null ? void 0 : c.data), (b = (l = (f = g[6]) == null ? void 0 : f[0]) == null ? void 0 : l.data);
  else if ((u = (o = g[4]) == null ? void 0 : o[0]) != null && u.data && a != 1) (N = (d = (x = g[4]) == null ? void 0 : x[0]) == null ? void 0 : d.data), (b = (h = (v = g[3]) == null ? void 0 : v[0]) == null ? void 0 : h.data);
  else throw "NUMBERS Tile missing ".concat(a, " cell storage");
  for (var R = _ ? 4 : 1, F = A0(N), W = [], D = 0; D < N.length / 2; ++D) {
    var X = F.getUint16(D * 2, !0);
    X < 65535 && W.push([D, X]);
  }
  if (W.length != y) throw "Expected ".concat(y, " cells, found ").concat(W.length);
  var U = [];
  for (D = 0; D < W.length - 1; ++D) U[W[D][0]] = b.subarray(W[D][1] * R, W[D + 1][1] * R);
  return W.length >= 1 && (U[W[W.length - 1][0]] = b.subarray(W[W.length - 1][1] * R)), { R: A, cells: U };
}
function yd(e, a) {
  var r,
    n = qe(a.data),
    t = (r = n == null ? void 0 : n[7]) != null && r[0] ? (We(n[7][0].data) >>> 0 > 0 ? 1 : 0) : -1,
    s = F0(n[5], function (i) {
      return Cd(i, t);
    });
  return {
    nrows: We(n[4][0].data) >>> 0,
    data: s.reduce(function (i, c) {
      return (
        i[c.R] || (i[c.R] = []),
        c.cells.forEach(function (f, l) {
          if (i[c.R][l]) throw new Error("Duplicate cell r=".concat(c.R, " c=").concat(l));
          i[c.R][l] = f;
        }),
        i
      );
    }, []),
  };
}
function Dd(e, a, r) {
  var n,
    t = qe(a.data),
    s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (((s.e.r = (We(t[6][0].data) >>> 0) - 1), s.e.r < 0)) throw new Error("Invalid row varint ".concat(t[6][0].data));
  if (((s.e.c = (We(t[7][0].data) >>> 0) - 1), s.e.c < 0)) throw new Error("Invalid col varint ".concat(t[7][0].data));
  r["!ref"] = _e(s);
  var i = qe(t[4][0].data),
    c = Bn(e, e[Yr(i[4][0].data)][0]),
    f = (n = i[17]) != null && n[0] ? Bn(e, e[Yr(i[17][0].data)][0]) : [],
    l = qe(i[3][0].data),
    o = 0;
  l[1].forEach(function (u) {
    var x = qe(u.data),
      d = e[Yr(x[2][0].data)][0],
      v = We(d.meta[1][0].data);
    if (v != 6002) throw new Error("6001 unexpected reference to ".concat(v));
    var h = yd(e, d);
    h.data.forEach(function (g, A) {
      g.forEach(function (y, _) {
        var N = he({ r: o + A, c: _ }),
          b = Sd(y, c, f);
        b && (r[N] = b);
      });
    }),
      (o += h.nrows);
  });
}
function Od(e, a) {
  var r = qe(a.data),
    n = { "!ref": "A1" },
    t = e[Yr(r[2][0].data)],
    s = We(t[0].meta[1][0].data);
  if (s != 6001) throw new Error("6000 unexpected reference to ".concat(s));
  return Dd(e, t[0], n), n;
}
function Rd(e, a) {
  var r,
    n = qe(a.data),
    t = { name: (r = n[1]) != null && r[0] ? qt(n[1][0].data) : "", sheets: [] },
    s = F0(n[2], Yr);
  return (
    s.forEach(function (i) {
      e[i].forEach(function (c) {
        var f = We(c.meta[1][0].data);
        f == 6e3 && t.sheets.push(Od(e, c));
      });
    }),
    t
  );
}
function Id(e, a) {
  var r = y0(),
    n = qe(a.data),
    t = F0(n[1], Yr);
  if (
    (t.forEach(function (s) {
      e[s].forEach(function (i) {
        var c = We(i.meta[1][0].data);
        if (c == 2) {
          var f = Rd(e, i);
          f.sheets.forEach(function (l, o) {
            D0(r, l, o == 0 ? f.name : f.name + "_" + o, !0);
          });
        }
      });
    }),
    r.SheetNames.length == 0)
  )
    throw new Error("Empty NUMBERS file");
  return r;
}
function Gt(e) {
  var a,
    r,
    n,
    t,
    s = {},
    i = [];
  if (
    (e.FullPaths.forEach(function (f) {
      if (f.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
    }),
    e.FileIndex.forEach(function (f) {
      if (f.name.match(/\.iwa$/)) {
        var l;
        try {
          l = wd(f.content);
        } catch (u) {
          return console.log("?? " + f.content.length + " " + (u.message || u));
        }
        var o;
        try {
          o = Td(l);
        } catch (u) {
          return console.log("## " + (u.message || u));
        }
        o.forEach(function (u) {
          (s[u.id] = u.messages), i.push(u.id);
        });
      }
    }),
    !i.length)
  )
    throw new Error("File has no messages");
  var c = ((t = (n = (r = (a = s == null ? void 0 : s[1]) == null ? void 0 : a[0]) == null ? void 0 : r.meta) == null ? void 0 : n[1]) == null ? void 0 : t[0].data) && We(s[1][0].meta[1][0].data) == 1 && s[1][0];
  if (
    (c ||
      i.forEach(function (f) {
        s[f].forEach(function (l) {
          var o = We(l.meta[1][0].data) >>> 0;
          if (o == 1)
            if (!c) c = l;
            else throw new Error("Document has multiple roots");
        });
      }),
    !c)
  )
    throw new Error("Cannot find Document root");
  return Id(s, c);
}
function Nd(e) {
  return function (r) {
    for (var n = 0; n != e.length; ++n) {
      var t = e[n];
      r[t[0]] === void 0 && (r[t[0]] = t[1]), t[2] === "n" && (r[t[0]] = Number(r[t[0]]));
    }
  };
}
function S0(e) {
  Nd([
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
function Pd(e) {
  return ga.WS.indexOf(e) > -1 ? "sheet" : e == ga.CS ? "chart" : e == ga.DS ? "dialog" : e == ga.MS ? "macro" : e && e.length ? e : "sheet";
}
function Ld(e, a) {
  if (!e) return 0;
  try {
    e = a.map(function (n) {
      return n.id || (n.id = n.strRelID), [n.name, e["!id"][n.id].Target, Pd(e["!id"][n.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function Md(e, a, r, n, t, s, i, c, f, l, o, u) {
  try {
    s[n] = Ua(ur(e, r, !0), a);
    var x = Be(e, a),
      d;
    switch (c) {
      case "sheet":
        d = Wx(x, a, t, f, s[n], l, o, u);
        break;
      case "chart":
        if (((d = Gx(x, a, t, f, s[n], l, o, u)), !d || !d["!drawel"])) break;
        var v = Na(d["!drawel"].Target, a),
          h = Kt(v),
          g = V1(ur(e, v, !0), Ua(ur(e, h, !0), v)),
          A = Na(g, v),
          y = Kt(A);
        d = Fx(ur(e, A, !0), A, f, Ua(ur(e, y, !0), A), l, d);
        break;
      case "macro":
        d = Xx(x, a, t, f, s[n], l, o, u);
        break;
      case "dialog":
        d = zx(x, a, t, f, s[n], l, o, u);
        break;
      default:
        throw new Error("Unrecognized sheet type " + c);
    }
    i[n] = d;
    var _ = [];
    s &&
      s[n] &&
      Or(s[n]).forEach(function (N) {
        var b = "";
        if (s[n][N].Type == ga.CMNT) {
          b = Na(s[n][N].Target, a);
          var R = jx(Be(e, b, !0), b, f);
          if (!R || !R.length) return;
          kn(d, R, !1);
        }
        s[n][N].Type == ga.TCMNT && ((b = Na(s[n][N].Target, a)), (_ = _.concat(G1(Be(e, b, !0), f))));
      }),
      _ && _.length && kn(d, _, !0, f.people || []);
  } catch (N) {
    if (f.WTF) throw N;
  }
}
function vr(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function Bd(e, a) {
  if ((is(), (a = a || {}), S0(a), gr(e, "META-INF/manifest.xml") || gr(e, "objectdata.xml"))) return Pn(e, a);
  if (gr(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof Gt < "u") {
      if (e.FileIndex) return Gt(e);
      var r = me.utils.cfb_new();
      return (
        Y0(e).forEach(function (fe) {
          Mc(r, fe, hs(e, fe));
        }),
        Gt(r)
      );
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!gr(e, "[Content_Types].xml")) throw gr(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : gr(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var n = Y0(e),
    t = If(ur(e, "[Content_Types].xml")),
    s = !1,
    i,
    c;
  if ((t.workbooks.length === 0 && ((c = "xl/workbook.xml"), Be(e, c, !0) && t.workbooks.push(c)), t.workbooks.length === 0)) {
    if (((c = "xl/workbook.bin"), !Be(e, c, !0))) throw new Error("Could not find workbook");
    t.workbooks.push(c), (s = !0);
  }
  t.workbooks[0].slice(-3) == "bin" && (s = !0);
  var f = {},
    l = {};
  if (!a.bookSheets && !a.bookProps) {
    if (((Wa = []), t.sst))
      try {
        Wa = Yx(Be(e, vr(t.sst)), t.sst, a);
      } catch (fe) {
        if (a.WTF) throw fe;
      }
    a.cellStyles && t.themes.length && (f = Kx(ur(e, t.themes[0].replace(/^\//, ""), !0) || "", t.themes[0], a)), t.style && (l = $x(Be(e, vr(t.style)), t.style, f, a));
  }
  t.links.map(function (fe) {
    try {
      var re = Ua(ur(e, Kt(vr(fe))), fe);
      return Zx(Be(e, vr(fe)), re, fe, a);
    } catch {}
  });
  var o = Vx(Be(e, vr(t.workbooks[0])), t.workbooks[0], a),
    u = {},
    x = "";
  t.coreprops.length && ((x = Be(e, vr(t.coreprops[0]), !0)), x && (u = Ms(x)), t.extprops.length !== 0 && ((x = Be(e, vr(t.extprops[0]), !0)), x && Bf(x, u, a)));
  var d = {};
  (!a.bookSheets || a.bookProps) && t.custprops.length !== 0 && ((x = ur(e, vr(t.custprops[0]), !0)), x && (d = Uf(x, a)));
  var v = {};
  if (
    (a.bookSheets || a.bookProps) &&
    (o.Sheets
      ? (i = o.Sheets.map(function (re) {
          return re.name;
        }))
      : u.Worksheets && u.SheetNames.length > 0 && (i = u.SheetNames),
    a.bookProps && ((v.Props = u), (v.Custprops = d)),
    a.bookSheets && typeof i < "u" && (v.SheetNames = i),
    a.bookSheets ? v.SheetNames : a.bookProps)
  )
    return v;
  i = {};
  var h = {};
  a.bookDeps && t.calcchain && (h = Jx(Be(e, vr(t.calcchain)), t.calcchain));
  var g = 0,
    A = {},
    y,
    _;
  {
    var N = o.Sheets;
    (u.Worksheets = N.length), (u.SheetNames = []);
    for (var b = 0; b != N.length; ++b) u.SheetNames[b] = N[b].name;
  }
  var R = s ? "bin" : "xml",
    F = t.workbooks[0].lastIndexOf("/"),
    W = (t.workbooks[0].slice(0, F + 1) + "_rels/" + t.workbooks[0].slice(F + 1) + ".rels").replace(/^\//, "");
  gr(e, W) || (W = "xl/_rels/workbook." + R + ".rels");
  var D = Ua(ur(e, W, !0), W.replace(/_rels.*/, "s5s"));
  (t.metadata || []).length >= 1 && (a.xlmeta = qx(Be(e, vr(t.metadata[0])), t.metadata[0], a)), (t.people || []).length >= 1 && (a.people = X1(Be(e, vr(t.people[0])), a)), D && (D = Ld(D, o.Sheets));
  var X = Be(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e: for (g = 0; g != u.Worksheets; ++g) {
    var U = "sheet";
    if ((D && D[g] ? ((y = "xl/" + D[g][1].replace(/[\/]?xl\//, "")), gr(e, y) || (y = D[g][1]), gr(e, y) || (y = W.replace(/_rels\/.*$/, "") + D[g][1]), (U = D[g][2])) : ((y = "xl/worksheets/sheet" + (g + 1 - X) + "." + R), (y = y.replace(/sheet0\./, "sheet."))), (_ = y.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels")), a && a.sheets != null))
      switch (typeof a.sheets) {
        case "number":
          if (g != a.sheets) continue e;
          break;
        case "string":
          if (u.SheetNames[g].toLowerCase() != a.sheets.toLowerCase()) continue e;
          break;
        default:
          if (Array.isArray && Array.isArray(a.sheets)) {
            for (var P = !1, j = 0; j != a.sheets.length; ++j) typeof a.sheets[j] == "number" && a.sheets[j] == g && (P = 1), typeof a.sheets[j] == "string" && a.sheets[j].toLowerCase() == u.SheetNames[g].toLowerCase() && (P = 1);
            if (!P) continue e;
          }
      }
    Md(e, y, _, u.SheetNames[g], g, A, i, U, a, o, f, l);
  }
  return (
    (v = { Directory: t, Workbook: o, Props: u, Custprops: d, Deps: h, Sheets: i, SheetNames: u.SheetNames, Strings: Wa, Styles: l, Themes: f, SSF: $e(de) }),
    a &&
      a.bookFiles &&
      (e.files
        ? ((v.keys = n), (v.files = e.files))
        : ((v.keys = []),
          (v.files = {}),
          e.FullPaths.forEach(function (fe, re) {
            (fe = fe.replace(/^Root Entry[\/]/, "")), v.keys.push(fe), (v.files[fe] = e.FileIndex[re]);
          }))),
    a && a.bookVBA && (t.vba.length > 0 ? (v.vbaraw = Be(e, vr(t.vba[0]), !0)) : t.defaults && t.defaults.bin === Y1 && (v.vbaraw = Be(e, "xl/vbaProject.bin", !0))),
    v
  );
}
function bd(e, a) {
  var r = a || {},
    n = "Workbook",
    t = me.find(e, n);
  try {
    if (((n = "/!DataSpaces/Version"), (t = me.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
    if ((Ol(t.content), (n = "/!DataSpaces/DataSpaceMap"), (t = me.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
    var s = Il(t.content);
    if (s.length !== 1 || s[0].comps.length !== 1 || s[0].comps[0].t !== 0 || s[0].name !== "StrongEncryptionDataSpace" || s[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + n);
    if (((n = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace"), (t = me.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
    var i = Nl(t.content);
    if (i.length != 1 || i[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + n);
    if (((n = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary"), (t = me.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
    Ll(t.content);
  } catch {}
  if (((n = "/EncryptionInfo"), (t = me.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
  var c = Ml(t.content);
  if (((n = "/EncryptedPackage"), (t = me.find(e, n)), !t || !t.content)) throw new Error("ECMA-376 Encrypted file missing " + n);
  if (c[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(c[1], t.content, r.password || "", r);
  if (c[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(c[1], t.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function C0(e, a) {
  var r = "";
  switch ((a || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = hr(e.slice(0, 12));
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
function Ud(e, a) {
  return me.find(e, "EncryptedPackage") ? bd(e, a) : Ei(e, a);
}
function Hd(e, a) {
  var r,
    n = e,
    t = a || {};
  return t.type || (t.type = ge && Buffer.isBuffer(e) ? "buffer" : "base64"), (r = xs(n, t)), Bd(r, t);
}
function Ai(e, a) {
  var r = 0;
  e: for (; r < e.length; )
    switch (e.charCodeAt(r)) {
      case 10:
      case 13:
      case 32:
        ++r;
        break;
      case 60:
        return Jt(e.slice(r), a);
      default:
        break e;
    }
  return Ya.to_workbook(e, a);
}
function Vd(e, a) {
  var r = "",
    n = C0(e, a);
  switch (a.type) {
    case "base64":
      r = hr(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = ia(e);
      break;
    default:
      throw new Error("Unrecognized type " + a.type);
  }
  return n[0] == 239 && n[1] == 187 && n[2] == 191 && (r = Ae(r)), (a.type = "binary"), Ai(r, a);
}
function Wd(e, a) {
  var r = e;
  return a.type == "base64" && (r = hr(r)), (r = Xr.utils.decode(1200, r.slice(2), "str")), (a.type = "binary"), Ai(r, a);
}
function Gd(e) {
  return e.match(/[^\x00-\x7F]/) ? Pa(e) : e;
}
function Xt(e, a, r, n) {
  return n ? ((r.type = "string"), Ya.to_workbook(e, r)) : Ya.to_workbook(a, r);
}
function e0(e, a) {
  Yn();
  var r = a || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return e0(new Uint8Array(e), ((r = $e(r)), (r.type = "array"), r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var n = e,
    t = [0, 0, 0, 0],
    s = !1;
  if ((r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), (Ea = {}), r.dateNF && (Ea.dateNF = r.dateNF), r.type || (r.type = ge && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && ((r.type = ge ? "buffer" : "binary"), (n = Dc(e)), typeof Uint8Array < "u" && !ge && (r.type = "array")), r.type == "string" && ((s = !0), (r.type = "binary"), (r.codepage = 65001), (n = Gd(e))), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u")) {
    var i = new ArrayBuffer(3),
      c = new Uint8Array(i);
    if (((c.foo = "bar"), !c.foo)) return (r = $e(r)), (r.type = "array"), e0(s0(n), r);
  }
  switch ((t = C0(n, r))[0]) {
    case 208:
      if (t[1] === 207 && t[2] === 17 && t[3] === 224 && t[4] === 161 && t[5] === 177 && t[6] === 26 && t[7] === 225) return Ud(me.read(n, r), r);
      break;
    case 9:
      if (t[1] <= 8) return Ei(n, r);
      break;
    case 60:
      return Jt(n, r);
    case 73:
      if (t[1] === 73 && t[2] === 42 && t[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (t[1] === 68) return gl(n, r);
      break;
    case 84:
      if (t[1] === 65 && t[2] === 66 && t[3] === 76) return vl.to_workbook(n, r);
      break;
    case 80:
      return t[1] === 75 && t[2] < 9 && t[3] < 9 ? Hd(n, r) : Xt(e, n, r, s);
    case 239:
      return t[3] === 60 ? Jt(n, r) : Xt(e, n, r, s);
    case 255:
      if (t[1] === 254) return Wd(n, r);
      if (t[1] === 0 && t[2] === 2 && t[3] === 0) return Va.to_workbook(n, r);
      break;
    case 0:
      if (t[1] === 0 && ((t[2] >= 2 && t[3] === 0) || (t[2] === 0 && (t[3] === 8 || t[3] === 9)))) return Va.to_workbook(n, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Tn.to_workbook(n, r);
    case 123:
      if (t[1] === 92 && t[2] === 114 && t[3] === 116) return Yl.to_workbook(n, r);
      break;
    case 10:
    case 13:
    case 32:
      return Vd(n, r);
    case 137:
      if (t[1] === 80 && t[2] === 78 && t[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return xl.indexOf(t[0]) > -1 && t[2] <= 12 && t[3] <= 31 ? Tn.to_workbook(n, r) : Xt(e, n, r, s);
}
function Xd(e, a, r, n, t, s, i, c) {
  var f = Ke(r),
    l = c.defval,
    o = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"),
    u = !0,
    x = t === 1 ? [] : {};
  if (t !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(x, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        x.__rowNum__ = r;
      }
    else x.__rowNum__ = r;
  if (!i || e[r])
    for (var d = a.s.c; d <= a.e.c; ++d) {
      var v = i ? e[r][d] : e[n[d] + f];
      if (v === void 0 || v.t === void 0) {
        if (l === void 0) continue;
        s[d] != null && (x[s[d]] = l);
        continue;
      }
      var h = v.v;
      switch (v.t) {
        case "z":
          if (h == null) break;
          continue;
        case "e":
          h = h == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + v.t);
      }
      if (s[d] != null) {
        if (h == null)
          if (v.t == "e" && h === null) x[s[d]] = null;
          else if (l !== void 0) x[s[d]] = l;
          else if (o && h === null) x[s[d]] = null;
          else continue;
        else x[s[d]] = o && (v.t !== "n" || (v.t === "n" && c.rawNumbers !== !1)) ? h : Ur(v, h, c);
        h != null && (u = !1);
      }
    }
  return { row: x, isempty: u };
}
function r0(e, a) {
  if (e == null || e["!ref"] == null) return [];
  var r = { t: "n", v: 0 },
    n = 0,
    t = 1,
    s = [],
    i = 0,
    c = "",
    f = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    l = a || {},
    o = l.range != null ? l.range : e["!ref"];
  switch ((l.header === 1 ? (n = 1) : l.header === "A" ? (n = 2) : Array.isArray(l.header) ? (n = 3) : l.header == null && (n = 0), typeof o)) {
    case "string":
      f = Oe(o);
      break;
    case "number":
      (f = Oe(e["!ref"])), (f.s.r = o);
      break;
    default:
      f = o;
  }
  n > 0 && (t = 0);
  var u = Ke(f.s.r),
    x = [],
    d = [],
    v = 0,
    h = 0,
    g = Array.isArray(e),
    A = f.s.r,
    y = 0,
    _ = {};
  g && !e[A] && (e[A] = []);
  var N = (l.skipHidden && e["!cols"]) || [],
    b = (l.skipHidden && e["!rows"]) || [];
  for (y = f.s.c; y <= f.e.c; ++y)
    if (!(N[y] || {}).hidden)
      switch (((x[y] = Ve(y)), (r = g ? e[A][y] : e[x[y] + u]), n)) {
        case 1:
          s[y] = y - f.s.c;
          break;
        case 2:
          s[y] = x[y];
          break;
        case 3:
          s[y] = l.header[y - f.s.c];
          break;
        default:
          if ((r == null && (r = { w: "__EMPTY", t: "s" }), (c = i = Ur(r, null, l)), (h = _[i] || 0), !h)) _[i] = 1;
          else {
            do c = i + "_" + h++;
            while (_[c]);
            (_[i] = h), (_[c] = 1);
          }
          s[y] = c;
      }
  for (A = f.s.r + t; A <= f.e.r; ++A)
    if (!(b[A] || {}).hidden) {
      var R = Xd(e, f, A, x, n, s, g, l);
      (R.isempty === !1 || (n === 1 ? l.blankrows !== !1 : l.blankrows)) && (d[v++] = R.row);
    }
  return (d.length = v), d;
}
var bn = /"/g;
function zd(e, a, r, n, t, s, i, c) {
  for (var f = !0, l = [], o = "", u = Ke(r), x = a.s.c; x <= a.e.c; ++x)
    if (n[x]) {
      var d = c.dense ? (e[r] || [])[x] : e[n[x] + u];
      if (d == null) o = "";
      else if (d.v != null) {
        (f = !1), (o = "" + (c.rawNumbers && d.t == "n" ? d.v : Ur(d, null, c)));
        for (var v = 0, h = 0; v !== o.length; ++v)
          if ((h = o.charCodeAt(v)) === t || h === s || h === 34 || c.forceQuotes) {
            o = '"' + o.replace(bn, '""') + '"';
            break;
          }
        o == "ID" && (o = '"ID"');
      } else d.f != null && !d.F ? ((f = !1), (o = "=" + d.f), o.indexOf(",") >= 0 && (o = '"' + o.replace(bn, '""') + '"')) : (o = "");
      l.push(o);
    }
  return c.blankrows === !1 && f ? null : l.join(i);
}
function Fi(e, a) {
  var r = [],
    n = a ?? {};
  if (e == null || e["!ref"] == null) return "";
  var t = Oe(e["!ref"]),
    s = n.FS !== void 0 ? n.FS : ",",
    i = s.charCodeAt(0),
    c =
      n.RS !== void 0
        ? n.RS
        : `
`,
    f = c.charCodeAt(0),
    l = new RegExp((s == "|" ? "\\|" : s) + "+$"),
    o = "",
    u = [];
  n.dense = Array.isArray(e);
  for (var x = (n.skipHidden && e["!cols"]) || [], d = (n.skipHidden && e["!rows"]) || [], v = t.s.c; v <= t.e.c; ++v) (x[v] || {}).hidden || (u[v] = Ve(v));
  for (var h = 0, g = t.s.r; g <= t.e.r; ++g) (d[g] || {}).hidden || ((o = zd(e, t, g, u, i, f, s, n)), o != null && (n.strip && (o = o.replace(l, "")), (o || n.blankrows !== !1) && r.push((h++ ? c : "") + o)));
  return delete n.dense, r.join("");
}
function $d(e, a) {
  a || (a = {}),
    (a.FS = "	"),
    (a.RS = `
`);
  var r = Fi(e, a);
  return r;
}
function Kd(e) {
  var a = "",
    r,
    n = "";
  if (e == null || e["!ref"] == null) return [];
  var t = Oe(e["!ref"]),
    s = "",
    i = [],
    c,
    f = [],
    l = Array.isArray(e);
  for (c = t.s.c; c <= t.e.c; ++c) i[c] = Ve(c);
  for (var o = t.s.r; o <= t.e.r; ++o)
    for (s = Ke(o), c = t.s.c; c <= t.e.c; ++c)
      if (((a = i[c] + s), (r = l ? (e[o] || [])[c] : e[a]), (n = ""), r !== void 0)) {
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
function Si(e, a, r) {
  var n = r || {},
    t = +!n.skipHeader,
    s = e || {},
    i = 0,
    c = 0;
  if (s && n.origin != null)
    if (typeof n.origin == "number") i = n.origin;
    else {
      var f = typeof n.origin == "string" ? sr(n.origin) : n.origin;
      (i = f.r), (c = f.c);
    }
  var l,
    o = { s: { c: 0, r: 0 }, e: { c, r: i + a.length - 1 + t } };
  if (s["!ref"]) {
    var u = Oe(s["!ref"]);
    (o.e.c = Math.max(o.e.c, u.e.c)), (o.e.r = Math.max(o.e.r, u.e.r)), i == -1 && ((i = u.e.r + 1), (o.e.r = i + a.length - 1 + t));
  } else i == -1 && ((i = 0), (o.e.r = a.length - 1 + t));
  var x = n.header || [],
    d = 0;
  a.forEach(function (h, g) {
    Or(h).forEach(function (A) {
      (d = x.indexOf(A)) == -1 && (x[(d = x.length)] = A);
      var y = h[A],
        _ = "z",
        N = "",
        b = he({ c: c + d, r: i + g + t });
      (l = qa(s, b)), y && typeof y == "object" && !(y instanceof Date) ? (s[b] = y) : (typeof y == "number" ? (_ = "n") : typeof y == "boolean" ? (_ = "b") : typeof y == "string" ? (_ = "s") : y instanceof Date ? ((_ = "d"), n.cellDates || ((_ = "n"), (y = cr(y))), (N = n.dateNF || de[14])) : y === null && n.nullError && ((_ = "e"), (y = 0)), l ? ((l.t = _), (l.v = y), delete l.w, delete l.R, N && (l.z = N)) : (s[b] = l = { t: _, v: y }), N && (l.z = N));
    });
  }),
    (o.e.c = Math.max(o.e.c, c + x.length - 1));
  var v = Ke(i);
  if (t) for (d = 0; d < x.length; ++d) s[Ve(d + c) + v] = { t: "s", v: x[d] };
  return (s["!ref"] = _e(o)), s;
}
function Yd(e, a) {
  return Si(null, e, a);
}
function qa(e, a, r) {
  if (typeof a == "string") {
    if (Array.isArray(e)) {
      var n = sr(a);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[a] || (e[a] = { t: "z" });
  }
  return typeof a != "number" ? qa(e, he(a)) : qa(e, he({ r: a, c: r || 0 }));
}
function jd(e, a) {
  if (typeof a == "number") {
    if (a >= 0 && e.SheetNames.length > a) return a;
    throw new Error("Cannot find sheet # " + a);
  } else if (typeof a == "string") {
    var r = e.SheetNames.indexOf(a);
    if (r > -1) return r;
    throw new Error("Cannot find sheet name |" + a + "|");
  } else throw new Error("Cannot find sheet |" + a + "|");
}
function y0() {
  return { SheetNames: [], Sheets: {} };
}
function D0(e, a, r, n) {
  var t = 1;
  if (!r) for (; t <= 65535 && e.SheetNames.indexOf((r = "Sheet" + t)) != -1; ++t, r = void 0);
  if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var s = r.match(/(^.*?)(\d+)$/);
    t = (s && +s[2]) || 0;
    var i = (s && s[1]) || r;
    for (++t; t <= 65535 && e.SheetNames.indexOf((r = i + t)) != -1; ++t);
  }
  if ((Nx(r), e.SheetNames.indexOf(r) >= 0)) throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), (e.Sheets[r] = a), r;
}
function Jd(e, a, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = jd(e, a);
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
function Zd(e, a) {
  return (e.z = a), e;
}
function Ci(e, a, r) {
  return a ? ((e.l = { Target: a }), r && (e.l.Tooltip = r)) : delete e.l, e;
}
function qd(e, a, r) {
  return Ci(e, "#" + a, r);
}
function Qd(e, a, r) {
  e.c || (e.c = []), e.c.push({ t: a, a: r || "SheetJS" });
}
function e2(e, a, r, n) {
  for (var t = typeof a != "string" ? a : Oe(a), s = typeof a == "string" ? a : _e(a), i = t.s.r; i <= t.e.r; ++i)
    for (var c = t.s.c; c <= t.e.c; ++c) {
      var f = qa(e, i, c);
      (f.t = "n"), (f.F = s), delete f.v, i == t.s.r && c == t.s.c && ((f.f = r), n && (f.D = !0));
    }
  return e;
}
var r2 = {
  encode_col: Ve,
  encode_row: Ke,
  encode_cell: he,
  encode_range: _e,
  decode_col: d0,
  decode_row: x0,
  split_cell: uf,
  decode_cell: sr,
  decode_range: Aa,
  format_cell: Ur,
  sheet_add_aoa: Rs,
  sheet_add_json: Si,
  sheet_add_dom: Ti,
  aoa_to_sheet: Fa,
  json_to_sheet: Yd,
  table_to_sheet: ki,
  table_to_book: gd,
  sheet_to_csv: Fi,
  sheet_to_txt: $d,
  sheet_to_json: r0,
  sheet_to_html: pd,
  sheet_to_formulae: Kd,
  sheet_to_row_object_array: r0,
  sheet_get_cell: qa,
  book_new: y0,
  book_append_sheet: D0,
  book_set_sheet_visibility: Jd,
  cell_set_number_format: Zd,
  cell_set_hyperlink: Ci,
  cell_set_internal_link: qd,
  cell_add_comment: Qd,
  sheet_set_array_formula: e2,
  consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
};
const u2 = zi("website", {
  state: () => ({ data: {} }),
  actions: {
    async parse_from_url(e) {
      const a = await fetch(e);
      if (!a.ok) throw new Error("fetch failed");
      const r = await a.arrayBuffer();
      return console.log("blob", r), e0(r);
    },
    async fetch() {
      const e = await this.parse_from_url("/content.xlsx");
      for (const a of e.SheetNames) this.data[a] = r2.sheet_to_json(e.Sheets[a]);
      console.log("sitedata", this.data);
    },
  },
});
const a2 = Qa({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function t2(e) {
  return { dimensionStyles: La(() => ({ height: ea(e.height), maxHeight: ea(e.maxHeight), maxWidth: ea(e.maxWidth), minHeight: ea(e.minHeight), minWidth: ea(e.minWidth), width: ea(e.width) })) };
}
function n2(e) {
  return {
    aspectStyles: La(() => {
      const a = Number(e.aspectRatio);
      return a ? { paddingBottom: String((1 / a) * 100) + "%" } : void 0;
    }),
  };
}
const yi = Qa({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...zn(), ...a2() }, "VResponsive"),
  Un = Vn()({
    name: "VResponsive",
    props: yi(),
    setup(e, a) {
      let { slots: r } = a;
      const { aspectStyles: n } = n2(e),
        { dimensionStyles: t } = t2(e);
      return (
        $n(() => {
          var s;
          return Me("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [t.value, e.style] }, [Me("div", { class: "v-responsive__sizer", style: n.value }, null), (s = r.additional) == null ? void 0 : s.call(r), r.default && Me("div", { class: ["v-responsive__content", e.contentClass] }, [r.default()])]);
        }),
        {}
      );
    },
  }),
  s2 = Qa({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"),
  pt = (e, a) => {
    let { slots: r } = a;
    const { transition: n, disabled: t, ...s } = e,
      { component: i = Ki, ...c } = typeof n == "object" ? n : {};
    return $i(i, Wn(typeof n == "string" ? { name: t ? "" : n } : c, s, { disabled: t }), r);
  };
function i2(e, a) {
  if (!a0) return;
  const r = a.modifiers || {},
    n = a.value,
    { handler: t, options: s } = typeof n == "object" ? n : { handler: n, options: {} },
    i = new IntersectionObserver(function () {
      var u;
      let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        f = arguments.length > 1 ? arguments[1] : void 0;
      const l = (u = e._observe) == null ? void 0 : u[a.instance.$.uid];
      if (!l) return;
      const o = c.some((x) => x.isIntersecting);
      t && (!r.quiet || l.init) && (!r.once || o || l.init) && t(o, c, f), o && r.once ? Di(e, a) : (l.init = !0);
    }, s);
  (e._observe = Object(e._observe)), (e._observe[a.instance.$.uid] = { init: !1, observer: i }), i.observe(e);
}
function Di(e, a) {
  var n;
  const r = (n = e._observe) == null ? void 0 : n[a.instance.$.uid];
  r && (r.observer.unobserve(e), delete e._observe[a.instance.$.uid]);
}
const c2 = { mounted: i2, unmounted: Di },
  f2 = c2,
  o2 = Qa({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...yi(), ...zn(), ...s2() }, "VImg"),
  h2 = Vn()({
    name: "VImg",
    directives: { intersect: f2 },
    props: o2(),
    emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 },
    setup(e, a) {
      let { emit: r, slots: n } = a;
      const t = Hn("VImg"),
        s = va(""),
        i = Gn(),
        c = va(e.eager ? "loading" : "idle"),
        f = va(),
        l = va(),
        o = La(() => (e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) })),
        u = La(() => o.value.aspect || f.value / l.value || 0);
      gt(
        () => e.src,
        () => {
          x(c.value !== "idle");
        }
      ),
        gt(u, (D, X) => {
          !D && X && i.value && A(i.value);
        }),
        Yi(() => x());
      function x(D) {
        if (!(e.eager && D) && !(a0 && !D && !e.eager)) {
          if (((c.value = "loading"), o.value.lazySrc)) {
            const X = new Image();
            (X.src = o.value.lazySrc), A(X, null);
          }
          o.value.src &&
            ji(() => {
              var X;
              r("loadstart", ((X = i.value) == null ? void 0 : X.currentSrc) || o.value.src),
                setTimeout(() => {
                  var U;
                  if (!t.isUnmounted)
                    if ((U = i.value) != null && U.complete) {
                      if ((i.value.naturalWidth || v(), c.value === "error")) return;
                      u.value || A(i.value, null), c.value === "loading" && d();
                    } else u.value || A(i.value), h();
                });
            });
        }
      }
      function d() {
        var D;
        t.isUnmounted || (h(), A(i.value), (c.value = "loaded"), r("load", ((D = i.value) == null ? void 0 : D.currentSrc) || o.value.src));
      }
      function v() {
        var D;
        t.isUnmounted || ((c.value = "error"), r("error", ((D = i.value) == null ? void 0 : D.currentSrc) || o.value.src));
      }
      function h() {
        const D = i.value;
        D && (s.value = D.currentSrc || D.src);
      }
      let g = -1;
      Xn(() => {
        clearTimeout(g);
      });
      function A(D) {
        let X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
        const U = () => {
          if ((clearTimeout(g), t.isUnmounted)) return;
          const { naturalHeight: P, naturalWidth: j } = D;
          P || j ? ((f.value = j), (l.value = P)) : !D.complete && c.value === "loading" && X != null ? (g = window.setTimeout(U, X)) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && ((f.value = 1), (l.value = 1));
        };
        U();
      }
      const y = La(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })),
        _ = () => {
          var U;
          if (!o.value.src || c.value === "idle") return null;
          const D = Me("img", { class: ["v-img__img", y.value], style: { objectPosition: e.position }, src: o.value.src, srcset: o.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: i, onLoad: d, onError: v }, null),
            X = (U = n.sources) == null ? void 0 : U.call(n);
          return Me(pt, { transition: e.transition, appear: !0 }, { default: () => [P0(X ? Me("picture", { class: "v-img__picture" }, [X, D]) : D, [[qi, c.value === "loaded"]])] });
        },
        N = () => Me(pt, { transition: e.transition }, { default: () => [o.value.lazySrc && c.value !== "loaded" && Me("img", { class: ["v-img__img", "v-img__img--preload", y.value], style: { objectPosition: e.position }, src: o.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }),
        b = () => (n.placeholder ? Me(pt, { transition: e.transition, appear: !0 }, { default: () => [(c.value === "loading" || (c.value === "error" && !n.error)) && Me("div", { class: "v-img__placeholder" }, [n.placeholder()])] }) : null),
        R = () => (n.error ? Me(pt, { transition: e.transition, appear: !0 }, { default: () => [c.value === "error" && Me("div", { class: "v-img__error" }, [n.error()])] }) : null),
        F = () => (e.gradient ? Me("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null),
        W = va(!1);
      {
        const D = gt(u, (X) => {
          X &&
            (requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                W.value = !0;
              });
            }),
            D());
        });
      }
      return (
        $n(() => {
          const D = Un.filterProps(e);
          return P0(Me(Un, Wn({ class: ["v-img", { "v-img--booting": !W.value }, e.class], style: [{ width: ea(e.width === "auto" ? f.value : e.width) }, e.style] }, D, { aspectRatio: u.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => Me(Zi, null, [Me(_, null, null), Me(N, null, null), Me(F, null, null), Me(b, null, null), Me(R, null, null)]), default: n.default }), [[Ji("intersect"), { handler: x, options: e.options }, null, { once: !0 }]]);
        }),
        { currentSrc: s, image: i, state: c, naturalWidth: f, naturalHeight: l }
      );
    },
  });
function x2(e, a) {
  const r = Gn(),
    n = va(!1);
  if (a0) {
    const t = new IntersectionObserver((s) => {
      e == null || e(s, t), (n.value = !!s.find((i) => i.isIntersecting));
    }, a);
    Xn(() => {
      t.disconnect();
    }),
      gt(
        r,
        (s, i) => {
          i && (t.unobserve(i), (n.value = !1)), s && t.observe(s);
        },
        { flush: "post" }
      );
  }
  return { intersectionRef: r, isIntersecting: n };
}
export { pt as M, h2 as V, x2 as a, $n as b, a2 as c, t2 as d, s2 as e, zn as m, u2 as u };
