import {
  _ as t,
  a as e,
  b as n,
  L as r,
  c as i,
  g as o,
  d as s,
  e as u,
  C as a,
  t as h,
  i as c,
  f,
  h as l,
  j as p,
  k as d,
  l as v,
} from "../../../common/index.esm-7362d277.js";
var y,
  m =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  g = g || {},
  w = m;
function b(t) {
  return "string" == typeof t;
}
function E(t) {
  return "number" == typeof t;
}
function I(t, e) {
  (t = t.split(".")), (e = e || w);
  for (var n = 0; n < t.length; n++) if (null == (e = e[t[n]])) return null;
  return e;
}
function T() {}
function N(t) {
  var e = typeof t;
  if ("object" == e) {
    if (!t) return "null";
    if (t instanceof Array) return "array";
    if (t instanceof Object) return e;
    var n = Object.prototype.toString.call(t);
    if ("[object Window]" == n) return "object";
    if (
      "[object Array]" == n ||
      ("number" == typeof t.length &&
        void 0 !== t.splice &&
        void 0 !== t.propertyIsEnumerable &&
        !t.propertyIsEnumerable("splice"))
    )
      return "array";
    if (
      "[object Function]" == n ||
      (void 0 !== t.call &&
        void 0 !== t.propertyIsEnumerable &&
        !t.propertyIsEnumerable("call"))
    )
      return "function";
  } else if ("function" == e && void 0 === t.call) return "object";
  return e;
}
function A(t) {
  return "array" == N(t);
}
function D(t) {
  var e = N(t);
  return "array" == e || ("object" == e && "number" == typeof t.length);
}
function S(t) {
  var e = typeof t;
  return ("object" == e && null != t) || "function" == e;
}
var k = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  O = 0;
function C(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function R(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var n = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(n, r), t.apply(e, n);
    };
  }
  return function () {
    return t.apply(e, arguments);
  };
}
function x(t, e, n) {
  return (x =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? C
      : R).apply(null, arguments);
}
function P(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var e = n.slice();
    return e.push.apply(e, arguments), t.apply(this, e);
  };
}
var M =
  Date.now ||
  function () {
    return +new Date();
  };
function L(t, e) {
  function n() {}
  (n.prototype = e.prototype),
    (t.N = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.yb = function (t, n, r) {
      for (
        var i = Array(arguments.length - 2), o = 2;
        o < arguments.length;
        o++
      )
        i[o - 2] = arguments[o];
      return e.prototype[n].apply(t, i);
    });
}
function _() {
  (this.j = this.j), (this.i = this.i);
}
(_.prototype.j = !1),
  (_.prototype.la = function () {
    if (!this.j && ((this.j = !0), this.G(), 0)) this[k] || (this[k] = ++O);
  }),
  (_.prototype.G = function () {
    if (this.i) for (; this.i.length; ) this.i.shift()();
  });
var V = Array.prototype.indexOf
    ? function (t, e) {
        return Array.prototype.indexOf.call(t, e, void 0);
      }
    : function (t, e) {
        if (b(t)) return b(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
        for (var n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
        return -1;
      },
  U = Array.prototype.forEach
    ? function (t, e, n) {
        Array.prototype.forEach.call(t, e, n);
      }
    : function (t, e, n) {
        for (var r = t.length, i = b(t) ? t.split("") : t, o = 0; o < r; o++)
          o in i && e.call(n, i[o], o, t);
      };
function q(t) {
  return Array.prototype.concat.apply([], arguments);
}
function F(t) {
  var e = t.length;
  if (0 < e) {
    for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function j(t) {
  return /^[\s\xa0]*$/.test(t);
}
var B,
  G = String.prototype.trim
    ? function (t) {
        return t.trim();
      }
    : function (t) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
      };
function z(t, e) {
  return -1 != t.indexOf(e);
}
function Q(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
t: {
  var Y = w.navigator;
  if (Y) {
    var K = Y.userAgent;
    if (K) {
      B = K;
      break t;
    }
  }
  B = "";
}
function W(t, e, n) {
  for (var r in t) e.call(n, t[r], r, t);
}
function H(t) {
  var e,
    n = {};
  for (e in t) n[e] = t[e];
  return n;
}
var J =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function X(t, e) {
  for (var n, r, i = 1; i < arguments.length; i++) {
    for (n in (r = arguments[i])) t[n] = r[n];
    for (var o = 0; o < J.length; o++)
      (n = J[o]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function $(t) {
  return $[" "](t), t;
}
$[" "] = T;
var Z,
  tt,
  et = z(B, "Opera"),
  nt = z(B, "Trident") || z(B, "MSIE"),
  rt = z(B, "Edge"),
  it = rt || nt,
  ot =
    z(B, "Gecko") &&
    !(z(B.toLowerCase(), "webkit") && !z(B, "Edge")) &&
    !(z(B, "Trident") || z(B, "MSIE")) &&
    !z(B, "Edge"),
  st = z(B.toLowerCase(), "webkit") && !z(B, "Edge");
function ut() {
  var t = w.document;
  return t ? t.documentMode : void 0;
}
t: {
  var at = "",
    ht =
      ((tt = B),
      ot
        ? /rv:([^\);]+)(\)|;)/.exec(tt)
        : rt
        ? /Edge\/([\d\.]+)/.exec(tt)
        : nt
        ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(tt)
        : st
        ? /WebKit\/(\S+)/.exec(tt)
        : et
        ? /(?:Version)[ \/]?(\S+)/.exec(tt)
        : void 0);
  if ((ht && (at = ht ? ht[1] : ""), nt)) {
    var ct = ut();
    if (null != ct && ct > parseFloat(at)) {
      Z = String(ct);
      break t;
    }
  }
  Z = at;
}
var ft,
  lt = {};
function pt(t) {
  return (function (t, e) {
    var n = lt;
    return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t));
  })(t, function () {
    for (
      var e = 0,
        n = G(String(Z)).split("."),
        r = G(String(t)).split("."),
        i = Math.max(n.length, r.length),
        o = 0;
      0 == e && o < i;
      o++
    ) {
      var s = n[o] || "",
        u = r[o] || "";
      do {
        if (
          ((s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
          (u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""]),
          0 == s[0].length && 0 == u[0].length)
        )
          break;
        (e =
          Q(
            0 == s[1].length ? 0 : parseInt(s[1], 10),
            0 == u[1].length ? 0 : parseInt(u[1], 10)
          ) ||
          Q(0 == s[2].length, 0 == u[2].length) ||
          Q(s[2], u[2])),
          (s = s[3]),
          (u = u[3]);
      } while (0 == e);
    }
    return 0 <= e;
  });
}
var dt = w.document;
ft =
  dt && nt
    ? ut() || ("CSS1Compat" == dt.compatMode ? parseInt(Z, 10) : 5)
    : void 0;
var vt = !nt || 9 <= Number(ft),
  yt = nt && !pt("9"),
  mt = (function () {
    if (!w.addEventListener || !Object.defineProperty) return !1;
    var t = !1,
      e = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        },
      });
    try {
      w.addEventListener("test", T, e), w.removeEventListener("test", T, e);
    } catch (t) {}
    return t;
  })();
function gt(t, e) {
  (this.type = t), (this.a = this.target = e), (this.Ia = !0);
}
function wt(t, e) {
  if (
    (gt.call(this, t ? t.type : ""),
    (this.relatedTarget = this.a = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.c = null),
    t)
  ) {
    var n = (this.type = t.type),
      r =
        t.changedTouches && t.changedTouches.length
          ? t.changedTouches[0]
          : null;
    if (
      ((this.target = t.target || t.srcElement),
      (this.a = e),
      (e = t.relatedTarget))
    ) {
      if (ot) {
        t: {
          try {
            $(e.nodeName);
            var i = !0;
            break t;
          } catch (t) {}
          i = !1;
        }
        i || (e = null);
      }
    } else
      "mouseover" == n
        ? (e = t.fromElement)
        : "mouseout" == n && (e = t.toElement);
    (this.relatedTarget = e),
      r
        ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
          (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
          (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ""),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType = b(t.pointerType)
        ? t.pointerType
        : bt[t.pointerType] || ""),
      (this.c = t),
      t.defaultPrevented && this.b();
  }
}
(gt.prototype.b = function () {
  this.Ia = !1;
}),
  L(wt, gt);
var bt = { 2: "touch", 3: "pen", 4: "mouse" };
wt.prototype.b = function () {
  wt.N.b.call(this);
  var t = this.c;
  if (t.preventDefault) t.preventDefault();
  else if (((t.returnValue = !1), yt))
    try {
      (t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) && (t.keyCode = -1);
    } catch (t) {}
};
var Et = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  It = 0;
function Tt(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.da = i),
    (this.key = ++It),
    (this.X = this.Z = !1);
}
function Nt(t) {
  (t.X = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.da = null);
}
function At(t) {
  (this.src = t), (this.a = {}), (this.b = 0);
}
function Dt(t, e) {
  var n = e.type;
  if (n in t.a) {
    var r,
      i = t.a[n],
      o = V(i, e);
    (r = 0 <= o) && Array.prototype.splice.call(i, o, 1),
      r && (Nt(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
  }
}
function St(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var o = t[i];
    if (!o.X && o.listener == e && o.capture == !!n && o.da == r) return i;
  }
  return -1;
}
At.prototype.add = function (t, e, n, r, i) {
  var o = t.toString();
  (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
  var s = St(t, e, r, i);
  return (
    -1 < s
      ? ((e = t[s]), n || (e.Z = !1))
      : (((e = new Tt(e, this.src, o, !!r, i)).Z = n), t.push(e)),
    e
  );
};
var kt = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Ot = {};
function Ct(t, e, n, r, i) {
  if (r && r.once)
    return (function t(e, n, r, i, o) {
      if (A(n)) {
        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
        return null;
      }
      return (
        (r = Ut(r)),
        e && e[Et]
          ? e.Aa(n, r, S(i) ? !!i.capture : !!i, o)
          : Rt(e, n, r, !0, i, o)
      );
    })(t, e, n, r, i);
  if (A(e)) {
    for (var o = 0; o < e.length; o++) Ct(t, e[o], n, r, i);
    return null;
  }
  return (
    (n = Ut(n)),
    t && t[Et] ? t.za(e, n, S(r) ? !!r.capture : !!r, i) : Rt(t, e, n, !1, r, i)
  );
}
function Rt(t, e, n, r, i, o) {
  if (!e) throw Error("Invalid event type");
  var s = S(i) ? !!i.capture : !!i;
  if (s && !vt) return null;
  var u = _t(t);
  if ((u || (t[kt] = u = new At(t)), (n = u.add(e, n, r, s, o)).proxy))
    return n;
  if (
    ((r = (function () {
      var t = Lt,
        e = vt
          ? function (n) {
              return t.call(e.src, e.listener, n);
            }
          : function (n) {
              if (!(n = t.call(e.src, e.listener, n))) return n;
            };
      return e;
    })()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    mt || (i = s),
      void 0 === i && (i = !1),
      t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(Pt(e.toString()), r);
  else {
    if (!t.addListener || !t.removeListener)
      throw Error("addEventListener and attachEvent are unavailable.");
    t.addListener(r);
  }
  return n;
}
function xt(t) {
  if (!E(t) && t && !t.X) {
    var e = t.src;
    if (e && e[Et]) Dt(e.c, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(Pt(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = _t(e))
          ? (Dt(n, t), 0 == n.b && ((n.src = null), (e[kt] = null)))
          : Nt(t);
    }
  }
}
function Pt(t) {
  return t in Ot ? Ot[t] : (Ot[t] = "on" + t);
}
function Mt(t, e) {
  var n = t.listener,
    r = t.da || t.src;
  return t.Z && xt(t), n.call(r, e);
}
function Lt(t, e) {
  return (
    !!t.X ||
    (vt
      ? Mt(t, new wt(e, this))
      : Mt(t, (e = new wt(e || I("window.event"), this))))
  );
}
function _t(t) {
  return (t = t[kt]) instanceof At ? t : null;
}
var Vt = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Ut(t) {
  return "function" == N(t)
    ? t
    : (t[Vt] ||
        (t[Vt] = function (e) {
          return t.handleEvent(e);
        }),
      t[Vt]);
}
function qt() {
  _.call(this), (this.c = new At(this)), (this.J = this), (this.B = null);
}
function Ft(t, e, n, r) {
  if (!(e = t.c.a[String(e)])) return !0;
  e = e.concat();
  for (var i = !0, o = 0; o < e.length; ++o) {
    var s = e[o];
    if (s && !s.X && s.capture == n) {
      var u = s.listener,
        a = s.da || s.src;
      s.Z && Dt(t.c, s), (i = !1 !== u.call(a, r) && i);
    }
  }
  return i && 0 != r.Ia;
}
L(qt, _),
  (qt.prototype[Et] = !0),
  ((y = qt.prototype).addEventListener = function (t, e, n, r) {
    Ct(this, t, e, n, r);
  }),
  (y.removeEventListener = function (t, e, n, r) {
    !(function t(e, n, r, i, o) {
      if (A(n)) for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
      else
        (i = S(i) ? !!i.capture : !!i),
          (r = Ut(r)),
          e && e[Et]
            ? ((e = e.c),
              (n = String(n).toString()) in e.a &&
                -1 < (r = St((s = e.a[n]), r, i, o)) &&
                (Nt(s[r]),
                Array.prototype.splice.call(s, r, 1),
                0 == s.length && (delete e.a[n], e.b--)))
            : e &&
              (e = _t(e)) &&
              ((n = e.a[n.toString()]),
              (e = -1),
              n && (e = St(n, r, i, o)),
              (r = -1 < e ? n[e] : null) && xt(r));
    })(this, t, e, n, r);
  }),
  (y.dispatchEvent = function (t) {
    var e,
      n = this.B;
    if (n) for (e = []; n; n = n.B) e.push(n);
    n = this.J;
    var r = t.type || t;
    if (b(t)) t = new gt(t, n);
    else if (t instanceof gt) t.target = t.target || n;
    else {
      var i = t;
      X((t = new gt(r, n)), i);
    }
    if (((i = !0), e))
      for (var o = e.length - 1; 0 <= o; o--) {
        var s = (t.a = e[o]);
        i = Ft(s, r, !0, t) && i;
      }
    if (((i = Ft((s = t.a = n), r, !0, t) && i), (i = Ft(s, r, !1, t) && i), e))
      for (o = 0; o < e.length; o++) i = Ft((s = t.a = e[o]), r, !1, t) && i;
    return i;
  }),
  (y.G = function () {
    if ((qt.N.G.call(this), this.c)) {
      var t,
        e = this.c;
      for (t in e.a) {
        for (var n = e.a[t], r = 0; r < n.length; r++) Nt(n[r]);
        delete e.a[t], e.b--;
      }
    }
    this.B = null;
  }),
  (y.za = function (t, e, n, r) {
    return this.c.add(String(t), e, !1, n, r);
  }),
  (y.Aa = function (t, e, n, r) {
    return this.c.add(String(t), e, !0, n, r);
  });
var jt = w.JSON.stringify;
function Bt(t, e) {
  (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
}
function Gt() {
  this.b = this.a = null;
}
Bt.prototype.get = function () {
  if (0 < this.b) {
    this.b--;
    var t = this.a;
    (this.a = t.next), (t.next = null);
  } else t = this.c();
  return t;
};
var zt,
  Qt = new Bt(
    function () {
      return new Kt();
    },
    function (t) {
      t.reset();
    }
  );
function Yt() {
  var t = Xt,
    e = null;
  return (
    t.a && ((e = t.a), (t.a = t.a.next), t.a || (t.b = null), (e.next = null)),
    e
  );
}
function Kt() {
  this.next = this.b = this.a = null;
}
function Wt(t) {
  w.setTimeout(function () {
    throw t;
  }, 0);
}
function Ht(t, e) {
  zt ||
    (function () {
      var t = w.Promise.resolve(void 0);
      zt = function () {
        t.then($t);
      };
    })(),
    Jt || (zt(), (Jt = !0)),
    Xt.add(t, e);
}
(Gt.prototype.add = function (t, e) {
  var n = Qt.get();
  n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
}),
  (Kt.prototype.set = function (t, e) {
    (this.a = t), (this.b = e), (this.next = null);
  }),
  (Kt.prototype.reset = function () {
    this.next = this.b = this.a = null;
  });
var Jt = !1,
  Xt = new Gt();
function $t() {
  for (var t; (t = Yt()); ) {
    try {
      t.a.call(t.b);
    } catch (t) {
      Wt(t);
    }
    var e = Qt;
    e.f(t), 100 > e.b && (e.b++, (t.next = e.a), (e.a = t));
  }
  Jt = !1;
}
function Zt(t, e) {
  qt.call(this),
    (this.b = t || 1),
    (this.a = e || w),
    (this.f = x(this.gb, this)),
    (this.g = M());
}
function te(t) {
  (t.ba = !1), t.L && (t.a.clearTimeout(t.L), (t.L = null));
}
function ee(t, e, n) {
  if ("function" == N(t)) n && (t = x(t, n));
  else {
    if (!t || "function" != typeof t.handleEvent)
      throw Error("Invalid listener argument");
    t = x(t.handleEvent, t);
  }
  return 2147483647 < Number(e) ? -1 : w.setTimeout(t, e || 0);
}
function ne(t, e, n) {
  _.call(this),
    (this.f = null != n ? x(t, n) : t),
    (this.c = e),
    (this.b = x(this.$a, this)),
    (this.a = []);
}
function re(t) {
  (t.U = ee(t.b, t.c)), t.f.apply(null, t.a);
}
function ie(t) {
  _.call(this), (this.b = t), (this.a = {});
}
L(Zt, qt),
  ((y = Zt.prototype).ba = !1),
  (y.L = null),
  (y.gb = function () {
    if (this.ba) {
      var t = M() - this.g;
      0 < t && t < 0.8 * this.b
        ? (this.L = this.a.setTimeout(this.f, this.b - t))
        : (this.L && (this.a.clearTimeout(this.L), (this.L = null)),
          this.dispatchEvent("tick"),
          this.ba && (te(this), this.start()));
    }
  }),
  (y.start = function () {
    (this.ba = !0),
      this.L || ((this.L = this.a.setTimeout(this.f, this.b)), (this.g = M()));
  }),
  (y.G = function () {
    Zt.N.G.call(this), te(this), delete this.a;
  }),
  L(ne, _),
  ((y = ne.prototype).ea = !1),
  (y.U = null),
  (y.Ta = function (t) {
    (this.a = arguments), this.U ? (this.ea = !0) : re(this);
  }),
  (y.G = function () {
    ne.N.G.call(this),
      this.U &&
        (w.clearTimeout(this.U),
        (this.U = null),
        (this.ea = !1),
        (this.a = []));
  }),
  (y.$a = function () {
    (this.U = null), this.ea && ((this.ea = !1), re(this));
  }),
  L(ie, _);
var oe = [];
function se(t, e, n, r) {
  A(n) || (n && (oe[0] = n.toString()), (n = oe));
  for (var i = 0; i < n.length; i++) {
    var o = Ct(e, n[i], r || t.handleEvent, !1, t.b || t);
    if (!o) break;
    t.a[o.key] = o;
  }
}
function ue(t) {
  W(
    t.a,
    function (t, e) {
      this.a.hasOwnProperty(e) && xt(t);
    },
    t
  ),
    (t.a = {});
}
function ae() {}
(ie.prototype.G = function () {
  ie.N.G.call(this), ue(this);
}),
  (ie.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  });
var he = new qt();
function ce(t) {
  gt.call(this, "serverreachability", t);
}
function fe(t) {
  he.dispatchEvent(new ce(he, t));
}
function le(t) {
  gt.call(this, "statevent", t);
}
function pe(t) {
  he.dispatchEvent(new le(he, t));
}
function de(t) {
  gt.call(this, "timingevent", t);
}
function ve(t, e) {
  if ("function" != N(t))
    throw Error("Fn must not be null and must be a function");
  return w.setTimeout(function () {
    t();
  }, e);
}
L(ce, gt), L(le, gt), L(de, gt);
var ye = {
    NO_ERROR: 0,
    hb: 1,
    ob: 2,
    nb: 3,
    kb: 4,
    mb: 5,
    pb: 6,
    La: 7,
    TIMEOUT: 8,
    sb: 9,
  },
  me = {
    jb: "complete",
    wb: "success",
    Ma: "error",
    La: "abort",
    ub: "ready",
    vb: "readystatechange",
    TIMEOUT: "timeout",
    qb: "incrementaldata",
    tb: "progress",
    lb: "downloadprogress",
    xb: "uploadprogress",
  };
function ge() {}
function we(t) {
  var e;
  return (e = t.a) || (e = t.a = {}), e;
}
function be() {}
ge.prototype.a = null;
var Ee,
  Ie = { OPEN: "a", ib: "b", Ma: "c", rb: "d" };
function Te() {
  gt.call(this, "d");
}
function Ne() {
  gt.call(this, "c");
}
function Ae() {}
function De(t, e, n) {
  (this.g = t),
    (this.W = e),
    (this.V = n || 1),
    (this.I = new ie(this)),
    (this.O = Se),
    (t = it ? 125 : void 0),
    (this.P = new Zt(t)),
    (this.h = null),
    (this.b = !1),
    (this.l = this.D = this.f = this.F = this.v = this.R = this.i = null),
    (this.j = []),
    (this.a = null),
    (this.A = 0),
    (this.c = this.w = null),
    (this.o = -1),
    (this.m = !1),
    (this.J = 0),
    (this.B = null),
    (this.s = this.S = this.H = !1);
}
L(Te, gt), L(Ne, gt), L(Ae, ge), (Ee = new Ae());
var Se = 45e3,
  ke = {},
  Oe = {};
function Ce(t, e, n) {
  (t.F = 1), (t.f = en(We(e))), (t.l = n), (t.H = !0), xe(t, null);
}
function Re(t, e, n, r) {
  (t.F = 1), (t.f = en(We(e))), (t.l = null), (t.H = n), xe(t, r);
}
function xe(t, e) {
  (t.v = M()),
    Le(t),
    (t.D = We(t.f)),
    tn(t.D, "t", t.V),
    (t.A = 0),
    (t.a = t.g.$(t.g.Y() ? e : null)),
    0 < t.J && (t.B = new ne(x(t.Ja, t, t.a), t.J)),
    se(t.I, t.a, "readystatechange", t.cb),
    (e = t.h ? H(t.h) : {}),
    t.l
      ? (t.w || (t.w = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.a.ca(t.D, t.w, t.l, e))
      : ((t.w = "GET"), t.a.ca(t.D, t.w, null, e)),
    fe(1);
}
function Pe(t, e, n) {
  for (var r = !0; !t.m && t.A < n.length; ) {
    var i = Me(t, n);
    if (i == Oe) {
      4 == e && ((t.c = 4), pe(14), (r = !1));
      break;
    }
    if (i == ke) {
      (t.c = 4), pe(15), (r = !1);
      break;
    }
    Fe(t, i);
  }
  4 == e && 0 == n.length && ((t.c = 1), pe(16), (r = !1)),
    (t.b = t.b && r),
    r || (qe(t), Ue(t));
}
function Me(t, e) {
  var n = t.A,
    r = e.indexOf("\n", n);
  return -1 == r
    ? Oe
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? ke
        : (r += 1) + n > e.length
        ? Oe
        : ((e = e.substr(r, n)), (t.A = r + n), e));
}
function Le(t) {
  (t.R = M() + t.O), _e(t, t.O);
}
function _e(t, e) {
  if (null != t.i) throw Error("WatchDog timer not null");
  t.i = ve(x(t.ab, t), e);
}
function Ve(t) {
  t.i && (w.clearTimeout(t.i), (t.i = null));
}
function Ue(t) {
  t.g.Ca() || t.m || t.g.na(t);
}
function qe(t) {
  Ve(t);
  var e = t.B;
  e && "function" == typeof e.la && e.la(),
    (t.B = null),
    te(t.P),
    ue(t.I),
    t.a && ((e = t.a), (t.a = null), e.abort(), e.la());
}
function Fe(t, e) {
  try {
    t.g.Fa(t, e), fe(4);
  } catch (t) {}
}
function je(t, e) {
  if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
  else if (D(t) || b(t)) U(t, e, void 0);
  else {
    if (t.K && "function" == typeof t.K) var n = t.K();
    else if (t.C && "function" == typeof t.C) n = void 0;
    else if (D(t) || b(t)) {
      n = [];
      for (var r = t.length, i = 0; i < r; i++) n.push(i);
    } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
    i = (r = (function (t) {
      if (t.C && "function" == typeof t.C) return t.C();
      if (b(t)) return t.split("");
      if (D(t)) {
        for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
        return e;
      }
      for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
      return e;
    })(t)).length;
    for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
  }
}
function Be(t, e) {
  (this.b = {}), (this.a = []), (this.c = 0);
  var n = arguments.length;
  if (1 < n) {
    if (n % 2) throw Error("Uneven number of arguments");
    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
  } else if (t)
    if (t instanceof Be)
      for (n = t.K(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
    else for (r in t) this.set(r, t[r]);
}
function Ge(t, e) {
  Qe(t.b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && ze(t));
}
function ze(t) {
  if (t.c != t.a.length) {
    for (var e = 0, n = 0; e < t.a.length; ) {
      var r = t.a[e];
      Qe(t.b, r) && (t.a[n++] = r), e++;
    }
    t.a.length = n;
  }
  if (t.c != t.a.length) {
    var i = {};
    for (n = e = 0; e < t.a.length; )
      Qe(i, (r = t.a[e])) || ((t.a[n++] = r), (i[r] = 1)), e++;
    t.a.length = n;
  }
}
function Qe(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
((y = De.prototype).setTimeout = function (t) {
  this.O = t;
}),
  (y.cb = function (t) {
    t = t.target;
    var e = this.B;
    e && 3 == Wn(t) ? e.Ta() : this.Ja(t);
  }),
  (y.Ja = function (t) {
    try {
      if (t == this.a)
        t: {
          var e = Wn(this.a),
            n = this.a.ya(),
            r = this.a.T();
          if (!(3 > e || (3 == e && !it && !this.a.aa()))) {
            this.m || 4 != e || 7 == n || fe(8 == n || 0 >= r ? 3 : 2),
              Ve(this);
            var i = this.a.T();
            this.o = i;
            var o = this.a.aa();
            if ((this.b = 200 == i)) {
              if (this.S && !this.s) {
                e: {
                  if (this.a) {
                    var s = Hn(this.a, "X-HTTP-Initial-Response");
                    if (s && !j(s)) {
                      var u = s;
                      break e;
                    }
                  }
                  u = null;
                }
                if (!u) {
                  (this.b = !1), (this.c = 3), pe(12), qe(this), Ue(this);
                  break t;
                }
                (this.s = !0), Fe(this, u);
              }
              this.H
                ? (Pe(this, e, o),
                  it &&
                    this.b &&
                    3 == e &&
                    (se(this.I, this.P, "tick", this.bb), this.P.start()))
                : Fe(this, o),
                4 == e && qe(this),
                this.b &&
                  !this.m &&
                  (4 == e ? this.g.na(this) : ((this.b = !1), Le(this)));
            } else
              400 == i && 0 < o.indexOf("Unknown SID")
                ? ((this.c = 3), pe(12))
                : ((this.c = 0), pe(13)),
                qe(this),
                Ue(this);
          }
        }
    } catch (t) {}
  }),
  (y.bb = function () {
    if (this.a) {
      var t = Wn(this.a),
        e = this.a.aa();
      this.A < e.length &&
        (Ve(this), Pe(this, t, e), this.b && 4 != t && Le(this));
    }
  }),
  (y.cancel = function () {
    (this.m = !0), qe(this);
  }),
  (y.ab = function () {
    this.i = null;
    var t = M();
    0 <= t - this.R
      ? (2 != this.F && (fe(3), pe(17)), qe(this), (this.c = 2), Ue(this))
      : _e(this, this.R - t);
  }),
  ((y = Be.prototype).C = function () {
    ze(this);
    for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
    return t;
  }),
  (y.K = function () {
    return ze(this), this.a.concat();
  }),
  (y.get = function (t, e) {
    return Qe(this.b, t) ? this.b[t] : e;
  }),
  (y.set = function (t, e) {
    Qe(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
  }),
  (y.forEach = function (t, e) {
    for (var n = this.K(), r = 0; r < n.length; r++) {
      var i = n[r],
        o = this.get(i);
      t.call(e, o, i, this);
    }
  });
var Ye =
  /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Ke(t, e) {
  var n;
  (this.b = this.j = this.f = ""),
    (this.i = null),
    (this.g = this.a = ""),
    (this.h = !1),
    t instanceof Ke
      ? ((this.h = void 0 !== e ? e : t.h),
        He(this, t.f),
        (this.j = t.j),
        Je(this, t.b),
        Xe(this, t.i),
        (this.a = t.a),
        $e(this, yn(t.c)),
        (this.g = t.g))
      : t && (n = String(t).match(Ye))
      ? ((this.h = !!e),
        He(this, n[1] || "", !0),
        (this.j = nn(n[2] || "")),
        Je(this, n[3] || "", !0),
        Xe(this, n[4]),
        (this.a = nn(n[5] || "", !0)),
        $e(this, n[6] || "", !0),
        (this.g = nn(n[7] || "")))
      : ((this.h = !!e), (this.c = new fn(null, this.h)));
}
function We(t) {
  return new Ke(t);
}
function He(t, e, n) {
  (t.f = n ? nn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ""));
}
function Je(t, e, n) {
  t.b = n ? nn(e, !0) : e;
}
function Xe(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.i = e;
  } else t.i = null;
}
function $e(t, e, n) {
  e instanceof fn
    ? ((t.c = e),
      (function (t, e) {
        e &&
          !t.f &&
          (ln(t),
          (t.c = null),
          t.a.forEach(function (t, e) {
            var n = e.toLowerCase();
            e != n && (pn(this, e), vn(this, n, t));
          }, t)),
          (t.f = e);
      })(t.c, t.h))
    : (n || (e = rn(e, hn)), (t.c = new fn(e, t.h)));
}
function Ze(t, e, n) {
  t.c.set(e, n);
}
function tn(t, e, n) {
  A(n) || (n = [String(n)]), vn(t.c, e, n);
}
function en(t) {
  return (
    Ze(
      t,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ M()).toString(36)
    ),
    t
  );
}
function nn(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function rn(t, e, n) {
  return b(t)
    ? ((t = encodeURI(t).replace(e, on)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function on(t) {
  return (
    "%" +
    (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
    (15 & t).toString(16)
  );
}
(Ke.prototype.toString = function () {
  var t = [],
    e = this.f;
  e && t.push(rn(e, sn, !0), ":");
  var n = this.b;
  return (
    (n || "file" == e) &&
      (t.push("//"),
      (e = this.j) && t.push(rn(e, sn, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      null != (n = this.i) && t.push(":", String(n))),
    (n = this.a) &&
      (this.b && "/" != n.charAt(0) && t.push("/"),
      t.push(rn(n, "/" == n.charAt(0) ? an : un, !0))),
    (n = this.c.toString()) && t.push("?", n),
    (n = this.g) && t.push("#", rn(n, cn)),
    t.join("")
  );
}),
  (Ke.prototype.resolve = function (t) {
    var e = We(this),
      n = !!t.f;
    n ? He(e, t.f) : (n = !!t.j),
      n ? (e.j = t.j) : (n = !!t.b),
      n ? Je(e, t.b) : (n = null != t.i);
    var r = t.a;
    if (n) Xe(e, t.i);
    else if ((n = !!t.a)) {
      if ("/" != r.charAt(0))
        if (this.b && !this.a) r = "/" + r;
        else {
          var i = e.a.lastIndexOf("/");
          -1 != i && (r = e.a.substr(0, i + 1) + r);
        }
      if (".." == (i = r) || "." == i) r = "";
      else if (z(i, "./") || z(i, "/.")) {
        (r = 0 == i.lastIndexOf("/", 0)), (i = i.split("/"));
        for (var o = [], s = 0; s < i.length; ) {
          var u = i[s++];
          "." == u
            ? r && s == i.length && o.push("")
            : ".." == u
            ? ((1 < o.length || (1 == o.length && "" != o[0])) && o.pop(),
              r && s == i.length && o.push(""))
            : (o.push(u), (r = !0));
        }
        r = o.join("/");
      } else r = i;
    }
    return (
      n ? (e.a = r) : (n = "" !== t.c.toString()),
      n ? $e(e, yn(t.c)) : (n = !!t.g),
      n && (e.g = t.g),
      e
    );
  });
var sn = /[#\/\?@]/g,
  un = /[#\?:]/g,
  an = /[#\?]/g,
  hn = /[#\?@]/g,
  cn = /#/g;
function fn(t, e) {
  (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
}
function ln(t) {
  t.a ||
    ((t.a = new Be()),
    (t.b = 0),
    t.c &&
      (function (t, e) {
        if (t) {
          t = t.split("&");
          for (var n = 0; n < t.length; n++) {
            var r = t[n].indexOf("="),
              i = null;
            if (0 <= r) {
              var o = t[n].substring(0, r);
              i = t[n].substring(r + 1);
            } else o = t[n];
            e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
          }
        }
      })(t.c, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
function pn(t, e) {
  ln(t),
    (e = mn(t, e)),
    Qe(t.a.b, e) && ((t.c = null), (t.b -= t.a.get(e).length), Ge(t.a, e));
}
function dn(t, e) {
  return ln(t), (e = mn(t, e)), Qe(t.a.b, e);
}
function vn(t, e, n) {
  pn(t, e),
    0 < n.length && ((t.c = null), t.a.set(mn(t, e), F(n)), (t.b += n.length));
}
function yn(t) {
  var e = new fn();
  return (e.c = t.c), t.a && ((e.a = new Be(t.a)), (e.b = t.b)), e;
}
function mn(t, e) {
  return (e = String(e)), t.f && (e = e.toLowerCase()), e;
}
function gn(t) {
  (this.a = t),
    (this.b = this.h = null),
    (this.g = !1),
    (this.i = null),
    (this.c = -1),
    (this.l = this.f = null);
}
function wn(t) {
  var e = t.a.F.a;
  if (null != e) pe(4), e ? (pe(10), ur(t.a, t, !1)) : (pe(11), ur(t.a, t, !0));
  else {
    (t.b = new De(t, void 0, void 0)),
      (t.b.h = t.h),
      (e = lr((e = t.a), e.Y() ? t.f : null, t.i)),
      pe(4),
      tn(e, "TYPE", "xmlhttp");
    var n = t.a.j,
      r = t.a.I;
    n && r && Ze(e, n, r), Re(t.b, e, !1, t.f);
  }
}
function bn() {
  this.a = this.b = null;
}
function En() {
  this.a = new Be();
}
function In(t) {
  var e = typeof t;
  return ("object" == e && t) || "function" == e
    ? "o" + (t[k] || (t[k] = ++O))
    : e.charAt(0) + t;
}
function Tn(t, e) {
  (this.b = t), (this.a = e);
}
function Nn(t) {
  (this.g = t || An),
    w.PerformanceNavigationTiming
      ? (t =
          0 < (t = w.performance.getEntriesByType("navigation")).length &&
          ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol))
      : (t = !!(w.ka && w.ka.Da && w.ka.Da() && w.ka.Da().zb)),
    (this.f = t ? this.g : 1),
    (this.a = null),
    1 < this.f && (this.a = new En()),
    (this.b = null),
    (this.c = []);
}
((y = fn.prototype).add = function (t, e) {
  ln(this), (this.c = null), (t = mn(this, t));
  var n = this.a.get(t);
  return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
}),
  (y.forEach = function (t, e) {
    ln(this),
      this.a.forEach(function (n, r) {
        U(
          n,
          function (n) {
            t.call(e, n, r, this);
          },
          this
        );
      }, this);
  }),
  (y.K = function () {
    ln(this);
    for (var t = this.a.C(), e = this.a.K(), n = [], r = 0; r < e.length; r++)
      for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
    return n;
  }),
  (y.C = function (t) {
    ln(this);
    var e = [];
    if (b(t)) dn(this, t) && (e = q(e, this.a.get(mn(this, t))));
    else {
      t = this.a.C();
      for (var n = 0; n < t.length; n++) e = q(e, t[n]);
    }
    return e;
  }),
  (y.set = function (t, e) {
    return (
      ln(this),
      (this.c = null),
      dn(this, (t = mn(this, t))) && (this.b -= this.a.get(t).length),
      this.a.set(t, [e]),
      (this.b += 1),
      this
    );
  }),
  (y.get = function (t, e) {
    return t && 0 < (t = this.C(t)).length ? String(t[0]) : e;
  }),
  (y.toString = function () {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var t = [], e = this.a.K(), n = 0; n < e.length; n++) {
      var r = e[n],
        i = encodeURIComponent(String(r));
      r = this.C(r);
      for (var o = 0; o < r.length; o++) {
        var s = i;
        "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s);
      }
    }
    return (this.c = t.join("&"));
  }),
  L(
    function () {},
    function () {}
  ),
  ((y = gn.prototype).M = null),
  (y.$ = function (t) {
    return this.a.$(t);
  }),
  (y.abort = function () {
    this.b && (this.b.cancel(), (this.b = null)), (this.c = -1);
  }),
  (y.Ca = function () {
    return !1;
  }),
  (y.Fa = function (t, e) {
    if (((this.c = t.o), 0 == this.M)) {
      if (!this.a.o && (t = t.a)) {
        var n = Hn(t, "X-Client-Wire-Protocol");
        (this.l = n || null),
          this.a.j && (t = Hn(t, "X-HTTP-Session-Id")) && (this.a.I = t);
      }
      if (e) {
        try {
          var r = this.a.ja.a.parse(e);
        } catch (t) {
          return ((e = this.a).m = this.c), void cr(e, 2);
        }
        this.f = r[0];
      } else ((e = this.a).m = this.c), cr(e, 2);
    } else
      1 == this.M &&
        (this.g
          ? pe(6)
          : "11111" == e
          ? (pe(5),
            (this.g = !0),
            (!nt || 10 <= Number(ft)) &&
              ((this.c = 200), this.b.cancel(), pe(11), ur(this.a, this, !0)))
          : (pe(7), (this.g = !1)));
  }),
  (y.na = function () {
    if (((this.c = this.b.o), this.b.b))
      0 == this.M
        ? ((this.M = 1), wn(this))
        : 1 == this.M &&
          (this.g
            ? (pe(11), ur(this.a, this, !0))
            : (pe(10), ur(this.a, this, !1)));
    else {
      0 == this.M ? pe(8) : 1 == this.M && pe(9);
      var t = this.a;
      (t.m = this.c), cr(t, 2);
    }
  }),
  (y.Y = function () {
    return this.a.Y();
  }),
  (y.ma = function () {
    return this.a.ma();
  }),
  (En.prototype.add = function (t) {
    this.a.set(In(t), t);
  }),
  (En.prototype.C = function () {
    return this.a.C();
  });
var An = 10;
function Dn(t, e) {
  !t.a &&
    (z(e, "spdy") || z(e, "quic") || z(e, "h2")) &&
    ((t.f = t.g), (t.a = new En()), t.b && (Cn(t, t.b), (t.b = null)));
}
function Sn(t) {
  return !!t.b || (!!t.a && t.a.a.c >= t.f);
}
function kn(t) {
  return t.b ? 1 : t.a ? t.a.a.c : 0;
}
function On(t, e) {
  return (
    t.b ? (t = t.b == e) : t.a ? ((e = In(e)), (t = Qe(t.a.a.b, e))) : (t = !1),
    t
  );
}
function Cn(t, e) {
  t.a ? t.a.add(e) : (t.b = e);
}
function Rn(t, e) {
  var n;
  t.b && t.b == e
    ? (t.b = null)
    : ((n = t.a) && ((n = In(e)), (n = Qe(t.a.a.b, n))), n && Ge(t.a.a, In(e)));
}
function xn(t) {
  if (null != t.b) return t.c.concat(t.b.j);
  if (null != t.a && 0 != t.a.a.c) {
    var e = t.c;
    return (
      U(t.a.C(), function (t) {
        e = e.concat(t.j);
      }),
      e
    );
  }
  return F(t.c);
}
function Pn() {}
function Mn() {
  this.a = new Pn();
}
function Ln(t, e, n) {
  var r = n || "";
  try {
    je(t, function (t, n) {
      var i = t;
      S(t) && (i = jt(t)), e.push(r + n + "=" + encodeURIComponent(i));
    });
  } catch (t) {
    throw (e.push(r + "type=" + encodeURIComponent("_badmap")), t);
  }
}
function _n(t, e, n, r, i) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r);
  } catch (t) {}
}
(Nn.prototype.cancel = function () {
  (this.c = xn(this)),
    this.b
      ? (this.b.cancel(), (this.b = null))
      : this.a &&
        0 != this.a.a.c &&
        (U(this.a.C(), function (t) {
          t.cancel();
        }),
        (function (t) {
          (t.b = {}), (t.a.length = 0), (t.c = 0);
        })(this.a.a));
}),
  (Pn.prototype.stringify = function (t) {
    return w.JSON.stringify(t, void 0);
  }),
  (Pn.prototype.parse = function (t) {
    return w.JSON.parse(t, void 0);
  });
var Vn = w.JSON.parse;
function Un(t) {
  qt.call(this),
    (this.headers = new Be()),
    (this.H = t || null),
    (this.b = !1),
    (this.s = this.a = null),
    (this.A = ""),
    (this.h = 0),
    (this.f = ""),
    (this.g = this.w = this.l = this.v = !1),
    (this.o = 0),
    (this.m = null),
    (this.I = qn),
    (this.D = this.F = !1);
}
L(Un, qt);
var qn = "",
  Fn = /^https?$/i,
  jn = ["POST", "PUT"];
function Bn(t) {
  return "content-type" == t.toLowerCase();
}
function Gn(t, e) {
  (t.b = !1),
    t.a && ((t.g = !0), t.a.abort(), (t.g = !1)),
    (t.f = e),
    (t.h = 5),
    zn(t),
    Yn(t);
}
function zn(t) {
  t.v || ((t.v = !0), t.dispatchEvent("complete"), t.dispatchEvent("error"));
}
function Qn(t) {
  if (t.b && void 0 !== g && (!t.s[1] || 4 != Wn(t) || 2 != t.T()))
    if (t.l && 4 == Wn(t)) ee(t.Ea, 0, t);
    else if ((t.dispatchEvent("readystatechange"), 4 == Wn(t))) {
      t.b = !1;
      try {
        var e,
          n = t.T();
        t: switch (n) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var r = !0;
            break t;
          default:
            r = !1;
        }
        if (!(e = r)) {
          var i;
          if ((i = 0 === n)) {
            var o = String(t.A).match(Ye)[1] || null;
            if (!o && w.self && w.self.location) {
              var s = w.self.location.protocol;
              o = s.substr(0, s.length - 1);
            }
            i = !Fn.test(o ? o.toLowerCase() : "");
          }
          e = i;
        }
        if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
        else {
          t.h = 6;
          try {
            var u = 2 < Wn(t) ? t.a.statusText : "";
          } catch (t) {
            u = "";
          }
          (t.f = u + " [" + t.T() + "]"), zn(t);
        }
      } finally {
        Yn(t);
      }
    }
}
function Yn(t, e) {
  if (t.a) {
    Kn(t);
    var n = t.a,
      r = t.s[0] ? T : null;
    (t.a = null), (t.s = null), e || t.dispatchEvent("ready");
    try {
      n.onreadystatechange = r;
    } catch (t) {}
  }
}
function Kn(t) {
  t.a && t.D && (t.a.ontimeout = null),
    t.m && (w.clearTimeout(t.m), (t.m = null));
}
function Wn(t) {
  return t.a ? t.a.readyState : 0;
}
function Hn(t, e) {
  return t.a ? t.a.getResponseHeader(e) : null;
}
function Jn(t, e, n) {
  t: {
    for (r in n) {
      var r = !1;
      break t;
    }
    r = !0;
  }
  if (r) return t;
  if (
    ((n = (function (t) {
      var e = "";
      return (
        W(t, function (t, n) {
          (e += n), (e += ":"), (e += t), (e += "\r\n");
        }),
        e
      );
    })(n)),
    b(t))
  ) {
    if (
      ((e = encodeURIComponent(String(e))),
      (e += n = null != n ? "=" + encodeURIComponent(String(n)) : ""))
    ) {
      if (
        (0 > (n = t.indexOf("#")) && (n = t.length),
        0 > (r = t.indexOf("?")) || r > n)
      ) {
        r = n;
        var i = "";
      } else i = t.substring(r + 1, n);
      (n = (t = [t.substr(0, r), i, t.substr(n)])[1]),
        (t[1] = e ? (n ? n + "&" + e : e) : n),
        (t = t[0] + (t[1] ? "?" + t[1] : "") + t[2]);
    }
    return t;
  }
  return Ze(t, e, n), t;
}
function Xn(t) {
  (this.f = []),
    (this.F = new bn()),
    (this.ga =
      this.pa =
      this.B =
      this.ha =
      this.a =
      this.I =
      this.j =
      this.V =
      this.g =
      this.J =
      this.i =
        null),
    (this.Qa = this.P = 0),
    (this.Oa = !!I("internalChannelParams.failFast", t)),
    (this.ia = this.w = this.s = this.l = this.h = this.c = null),
    (this.oa = !0),
    (this.m = this.ra = this.O = -1),
    (this.S = this.v = this.A = 0),
    (this.Na = I("internalChannelParams.baseRetryDelayMs", t) || 5e3),
    (this.Ra = I("internalChannelParams.retryDelaySeedMs", t) || 1e4),
    (this.Pa = I("internalChannelParams.forwardChannelMaxRetries", t) || 2),
    (this.qa =
      I("internalChannelParams.forwardChannelRequestTimeoutMs", t) || 2e4),
    (this.Ka = (t && t.Ab) || void 0),
    (this.D = void 0),
    (this.R = (t && t.supportsCrossDomainXhr) || !1),
    (this.H = ""),
    (this.b = new Nn(t && t.concurrentRequestLimit)),
    (this.ja = new Mn()),
    (this.o =
      !t || void 0 === t.backgroundChannelTest || t.backgroundChannelTest),
    (this.W = (t && t.fastHandshake) || !1) && !this.o && (this.o = !0),
    t && t.forceLongPolling && (this.oa = !1),
    (this.fa = void 0);
}
function $n(t) {
  if ((Zn(t), 3 == t.u)) {
    var e = t.P++,
      n = We(t.B);
    Ze(n, "SID", t.H),
      Ze(n, "RID", e),
      Ze(n, "TYPE", "terminate"),
      rr(t, n),
      ((e = new De(t, e, void 0)).F = 2),
      (e.f = en(We(n))),
      (n = !1),
      w.navigator &&
        w.navigator.sendBeacon &&
        (n = w.navigator.sendBeacon(e.f.toString(), "")),
      !n && w.Image && ((new Image().src = e.f), (n = !0)),
      n || ((e.a = e.g.$(null)), e.a.ca(e.f)),
      (e.v = M()),
      Le(e);
  }
  fr(t);
}
function Zn(t) {
  t.w && (t.w.abort(), (t.w = null)),
    t.a && (t.a.cancel(), (t.a = null)),
    t.l && (w.clearTimeout(t.l), (t.l = null)),
    ar(t),
    t.b.cancel(),
    t.h && (E(t.h) && w.clearTimeout(t.h), (t.h = null));
}
function tr(t, e) {
  t.f.push(new Tn(t.Qa++, e)), 3 == t.u && er(t);
}
function er(t) {
  Sn(t.b) || t.h || ((t.h = !0), Ht(t.Ha, t), (t.A = 0));
}
function nr(t, e) {
  var n;
  n = e ? e.W : t.P++;
  var r = We(t.B);
  Ze(r, "SID", t.H),
    Ze(r, "RID", n),
    Ze(r, "AID", t.O),
    rr(t, r),
    t.g && t.i && Jn(r, t.g, t.i),
    (n = new De(t, n, t.A + 1)),
    null === t.g && (n.h = t.i),
    e && (t.f = e.j.concat(t.f)),
    (e = ir(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.qa) + Math.round(0.5 * t.qa * Math.random())
    ),
    Cn(t.b, n),
    Ce(n, r, e);
}
function rr(t, e) {
  t.c &&
    je({}, function (t, n) {
      Ze(e, n, t);
    });
}
function ir(t, e, n) {
  n = Math.min(t.f.length, n);
  var r = t.c ? x(t.c.Sa, t.c, t) : null;
  t: for (var i = t.f, o = -1; ; ) {
    var s = ["count=" + n];
    -1 == o
      ? 0 < n
        ? ((o = i[0].b), s.push("ofs=" + o))
        : (o = 0)
      : s.push("ofs=" + o);
    for (var u = !0, a = 0; a < n; a++) {
      var h = i[a].b,
        c = i[a].a;
      if (0 > (h -= o)) (o = Math.max(0, i[a].b - 100)), (u = !1);
      else
        try {
          Ln(c, s, "req" + h + "_");
        } catch (t) {
          r && r(c);
        }
    }
    if (u) {
      r = s.join("&");
      break t;
    }
  }
  return (t = t.f.splice(0, n)), (e.j = t), r;
}
function or(t) {
  t.a || t.l || ((t.S = 1), Ht(t.Ga, t), (t.v = 0));
}
function sr(t) {
  return (
    !(t.a || t.l || 3 <= t.v) &&
    (t.S++, (t.l = ve(x(t.Ga, t), hr(t, t.v))), t.v++, !0)
  );
}
function ur(t, e, n) {
  var r = e.l;
  r && Dn(t.b, r),
    (t.ia = t.oa && n),
    (t.m = e.c),
    (t.B = lr(t, null, t.ha)),
    er(t);
}
function ar(t) {
  null != t.s && (w.clearTimeout(t.s), (t.s = null));
}
function hr(t, e) {
  var n = t.Na + Math.floor(Math.random() * t.Ra);
  return t.ma() || (n *= 2), n * e;
}
function cr(t, e) {
  if (2 == e) {
    var n = null;
    t.c && (n = null);
    var r = x(t.eb, t);
    n ||
      ((n = new Ke("//www.google.com/images/cleardot.gif")),
      (w.location && "http" == w.location.protocol) || He(n, "https"),
      en(n)),
      (function (t, e) {
        var n = new ae();
        if (w.Image) {
          var r = new Image();
          (r.onload = P(_n, n, r, "TestLoadImage: loaded", !0, e)),
            (r.onerror = P(_n, n, r, "TestLoadImage: error", !1, e)),
            (r.onabort = P(_n, n, r, "TestLoadImage: abort", !1, e)),
            (r.ontimeout = P(_n, n, r, "TestLoadImage: timeout", !1, e)),
            w.setTimeout(function () {
              r.ontimeout && r.ontimeout();
            }, 1e4),
            (r.src = t);
        } else e(!1);
      })(n.toString(), r);
  } else pe(2);
  (t.u = 0), t.c && t.c.ta(e), fr(t), Zn(t);
}
function fr(t) {
  (t.u = 0),
    (t.m = -1),
    t.c &&
      ((0 == xn(t.b).length && 0 == t.f.length) ||
        ((t.b.c.length = 0), F(t.f), (t.f.length = 0)),
      t.c.sa());
}
function lr(t, e, n) {
  var r = (function (t) {
    return t instanceof Ke ? We(t) : new Ke(t, void 0);
  })(n);
  if ("" != r.b) e && Je(r, e + "." + r.b), Xe(r, r.i);
  else {
    var i,
      o = w.location;
    (i = e ? e + "." + o.hostname : o.hostname),
      (r = (function (t, e, n, r) {
        var i = new Ke(null, void 0);
        return t && He(i, t), e && Je(i, e), n && Xe(i, n), r && (i.a = r), i;
      })(o.protocol, i, +o.port, n));
  }
  return (
    t.V &&
      W(t.V, function (t, e) {
        Ze(r, e, t);
      }),
    (e = t.j),
    (n = t.I),
    e && n && Ze(r, e, n),
    Ze(r, "VER", t.wa),
    rr(t, r),
    r
  );
}
function pr() {}
function dr() {
  if (nt && !(10 <= Number(ft)))
    throw Error("Environmental error: no available transport.");
}
function vr(t, e) {
  qt.call(this),
    (this.a = new Xn(e)),
    (this.g = t),
    (this.m =
      e && e.fb
        ? e.fb
        : (function (t) {
            for (var e = arguments[0], n = 1; n < arguments.length; n++) {
              var r,
                i = arguments[n];
              if (0 == i.lastIndexOf("/", 0)) e = i;
              else
                (r = "" == e) ||
                  (r = 0 <= (r = e.length - 1) && e.indexOf("/", r) == r),
                  (e += r ? i : "/" + i);
            }
            return e;
          })(this.g, "test")),
    (this.b = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t
        ? (t["X-Client-Protocol"] = "webchannel")
        : (t = { "X-Client-Protocol": "webchannel" })),
    (this.a.i = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
        : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
    e &&
      e.xa &&
      (t
        ? (t["X-WebChannel-Client-Profile"] = e.xa)
        : (t = { "X-WebChannel-Client-Profile": e.xa })),
    (this.a.J = t),
    (t = e && e.httpHeadersOverwriteParam) && !j(t) && (this.a.g = t),
    (this.l = (e && e.supportsCrossDomainXhr) || !1),
    (this.h = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !j(e) &&
      ((this.a.j = e),
      null !== (t = this.b) && e in t && e in (t = this.b) && delete t[e]),
    (this.f = new gr(this));
}
function yr(t) {
  Te.call(this);
  var e = t.__sm__;
  if (e) {
    t: {
      for (var n in e) {
        t = n;
        break t;
      }
      t = void 0;
    }
    (this.c = t)
      ? ((t = this.c), (this.data = null !== e && t in e ? e[t] : void 0))
      : (this.data = e);
  } else this.data = t;
}
function mr() {
  Ne.call(this), (this.status = 1);
}
function gr(t) {
  this.a = t;
}
((y = Un.prototype).ca = function (t, e, n, r) {
  if (this.a)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.A +
        "; newUri=" +
        t
    );
  (e = e ? e.toUpperCase() : "GET"),
    (this.A = t),
    (this.f = ""),
    (this.h = 0),
    (this.v = !1),
    (this.b = !0),
    (this.a = new XMLHttpRequest()),
    (this.s = this.H ? we(this.H) : we(Ee)),
    (this.a.onreadystatechange = x(this.Ea, this));
  try {
    (this.w = !0), this.a.open(e, String(t), !0), (this.w = !1);
  } catch (t) {
    return void Gn(this, t);
  }
  t = n || "";
  var i = new Be(this.headers);
  r &&
    je(r, function (t, e) {
      i.set(e, t);
    }),
    (r = (function (t) {
      t: {
        for (
          var e = Bn, n = t.length, r = b(t) ? t.split("") : t, i = 0;
          i < n;
          i++
        )
          if (i in r && e.call(void 0, r[i], i, t)) {
            e = i;
            break t;
          }
        e = -1;
      }
      return 0 > e ? null : b(t) ? t.charAt(e) : t[e];
    })(i.K())),
    (n = w.FormData && t instanceof w.FormData),
    !(0 <= V(jn, e)) ||
      r ||
      n ||
      i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
    i.forEach(function (t, e) {
      this.a.setRequestHeader(e, t);
    }, this),
    this.I && (this.a.responseType = this.I),
    "withCredentials" in this.a &&
      this.a.withCredentials !== this.F &&
      (this.a.withCredentials = this.F);
  try {
    Kn(this),
      0 < this.o &&
        ((this.D = (function (t) {
          return nt && pt(9) && E(t.timeout) && void 0 !== t.ontimeout;
        })(this.a))
          ? ((this.a.timeout = this.o), (this.a.ontimeout = x(this.Ba, this)))
          : (this.m = ee(this.Ba, this.o, this))),
      (this.l = !0),
      this.a.send(t),
      (this.l = !1);
  } catch (t) {
    Gn(this, t);
  }
}),
  (y.Ba = function () {
    void 0 !== g &&
      this.a &&
      ((this.f = "Timed out after " + this.o + "ms, aborting"),
      (this.h = 8),
      this.dispatchEvent("timeout"),
      this.abort(8));
  }),
  (y.abort = function (t) {
    this.a &&
      this.b &&
      ((this.b = !1),
      (this.g = !0),
      this.a.abort(),
      (this.g = !1),
      (this.h = t || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Yn(this));
  }),
  (y.G = function () {
    this.a &&
      (this.b && ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)),
      Yn(this, !0)),
      Un.N.G.call(this);
  }),
  (y.Ea = function () {
    this.j || (this.w || this.l || this.g ? Qn(this) : this.Za());
  }),
  (y.Za = function () {
    Qn(this);
  }),
  (y.T = function () {
    try {
      return 2 < Wn(this) ? this.a.status : -1;
    } catch (t) {
      return -1;
    }
  }),
  (y.aa = function () {
    try {
      return this.a ? this.a.responseText : "";
    } catch (t) {
      return "";
    }
  }),
  (y.Ua = function (t) {
    if (this.a) {
      var e = this.a.responseText;
      return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Vn(e);
    }
  }),
  (y.ya = function () {
    return this.h;
  }),
  (y.Xa = function () {
    return b(this.f) ? this.f : String(this.f);
  }),
  ((y = Xn.prototype).wa = 8),
  (y.u = 1),
  (y.Ca = function () {
    return 0 == this.u;
  }),
  (y.Ha = function (t) {
    if (this.h)
      if (((this.h = null), 1 == this.u)) {
        if (!t) {
          this.P = Math.floor(1e5 * Math.random());
          var e,
            n = new De(this, (t = this.P++), void 0),
            r = this.i;
          if (
            (this.J && (r ? X((r = H(r)), this.J) : (r = this.J)),
            null === this.g && (n.h = r),
            this.W)
          )
            t: {
              for (var i = (e = 0); i < this.f.length; i++) {
                var o = this.f[i];
                if (
                  void 0 ===
                  (o =
                    "__data__" in o.a && b((o = o.a.__data__))
                      ? o.length
                      : void 0)
                )
                  break;
                if (4096 < (e += o)) {
                  e = i;
                  break t;
                }
                if (4096 === e || i === this.f.length - 1) {
                  e = i + 1;
                  break t;
                }
              }
              e = 1e3;
            }
          else e = 1e3;
          (e = ir(this, n, e)),
            Ze((i = We(this.B)), "RID", t),
            Ze(i, "CVER", 22),
            this.o && this.j && Ze(i, "X-HTTP-Session-Id", this.j),
            rr(this, i),
            this.g && r && Jn(i, this.g, r),
            Cn(this.b, n),
            this.W
              ? (Ze(i, "$req", e),
                Ze(i, "SID", "null"),
                (n.S = !0),
                Ce(n, i, null))
              : Ce(n, i, e),
            (this.u = 2);
        }
      } else
        3 == this.u &&
          (t ? nr(this, t) : 0 == this.f.length || Sn(this.b) || nr(this));
  }),
  (y.Ga = function () {
    (this.l = null),
      (this.a = new De(this, "rpc", this.S)),
      null === this.g && (this.a.h = this.i),
      (this.a.J = 0);
    var t = We(this.pa);
    Ze(t, "RID", "rpc"),
      Ze(t, "SID", this.H),
      Ze(t, "CI", this.ia ? "0" : "1"),
      Ze(t, "AID", this.O),
      rr(this, t),
      Ze(t, "TYPE", "xmlhttp"),
      this.g && this.i && Jn(t, this.g, this.i),
      this.D && this.a.setTimeout(this.D),
      Re(this.a, t, !0, this.ga);
  }),
  (y.Fa = function (t, e) {
    if (0 != this.u && (this.a == t || On(this.b, t)))
      if (((this.m = t.o), !t.s && On(this.b, t) && 3 == this.u)) {
        try {
          var n = this.ja.a.parse(e);
        } catch (t) {
          n = null;
        }
        if (A(n) && 3 == n.length) {
          if (0 == (e = n)[0]) {
            t: if (!this.l) {
              if (this.a) {
                if (!(this.a.v + 3e3 < t.v)) break t;
                ar(this), this.a.cancel(), (this.a = null);
              }
              sr(this), pe(18);
            }
          } else
            (this.ra = e[1]),
              0 < this.ra - this.O &&
                37500 > e[2] &&
                this.ia &&
                0 == this.v &&
                !this.s &&
                (this.s = ve(x(this.Ya, this), 6e3));
          if (1 >= kn(this.b) && this.fa) {
            try {
              this.fa();
            } catch (t) {}
            this.fa = void 0;
          }
        } else cr(this, 11);
      } else if (((t.s || this.a == t) && ar(this), !j(e)))
        for (e = n = this.ja.a.parse(e), n = 0; n < e.length; n++) {
          var r = e[n];
          if (((this.O = r[0]), (r = r[1]), 2 == this.u))
            if ("c" == r[0]) {
              (this.H = r[1]), (this.ga = r[2]);
              var i = r[3];
              null != i && (this.wa = i),
                null != (r = r[5]) && E(r) && 0 < r && (this.D = 1.5 * r),
                this.o &&
                  (r = t.a) &&
                  ((i = Hn(r, "X-Client-Wire-Protocol")) && Dn(this.b, i),
                  this.j && (r = Hn(r, "X-HTTP-Session-Id"))) &&
                  ((this.I = r), Ze(this.B, this.j, r)),
                (this.u = 3),
                this.c && this.c.va(),
                (r = t),
                (this.pa = lr(this, this.Y() ? this.ga : null, this.ha)),
                r.s
                  ? (Rn(this.b, r),
                    (i = this.D) && r.setTimeout(i),
                    r.i && (Ve(r), Le(r)),
                    (this.a = r))
                  : or(this),
                0 < this.f.length && er(this);
            } else ("stop" != r[0] && "close" != r[0]) || cr(this, 7);
          else
            3 == this.u &&
              ("stop" == r[0] || "close" == r[0]
                ? "stop" == r[0]
                  ? cr(this, 7)
                  : $n(this)
                : "noop" != r[0] && this.c && this.c.ua(r),
              (this.v = 0));
        }
  }),
  (y.Ya = function () {
    null != this.s &&
      ((this.s = null), this.a.cancel(), (this.a = null), sr(this), pe(19));
  }),
  (y.na = function (t) {
    var e = null;
    if (this.a == t) {
      ar(this), (this.a = null);
      var n = 2;
    } else {
      if (!On(this.b, t)) return;
      (e = t.j), Rn(this.b, t), (n = 1);
    }
    if (((this.m = t.o), 0 != this.u))
      if (t.b)
        1 == n
          ? ((e = M() - t.v),
            he.dispatchEvent(new de(he, t.l ? t.l.length : 0, e, this.A)),
            er(this))
          : or(this);
      else {
        var r = t.c;
        if (
          3 == r ||
          (0 == r && 0 < this.m) ||
          !(
            (1 == n &&
              (function (t, e) {
                return (
                  !(kn(t.b) >= t.b.f - (t.h ? 1 : 0)) &&
                  (t.h
                    ? ((t.f = e.j.concat(t.f)), !0)
                    : !(1 == t.u || 2 == t.u || t.A >= (t.Oa ? 0 : t.Pa)) &&
                      ((t.h = ve(x(t.Ha, t, e), hr(t, t.A))), t.A++, !0))
                );
              })(this, t)) ||
            (2 == n && sr(this))
          )
        )
          switch (
            (e && 0 < e.length && ((t = this.b), (t.c = t.c.concat(e))), r)
          ) {
            case 1:
              cr(this, 5);
              break;
            case 4:
              cr(this, 10);
              break;
            case 3:
              cr(this, 6);
              break;
            default:
              cr(this, 2);
          }
      }
  }),
  (y.eb = function (t) {
    pe(t ? 2 : 1);
  }),
  (y.$ = function (t) {
    if (t && !this.R)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return ((t = new Un(this.Ka)).F = this.R), t;
  }),
  (y.ma = function () {
    return !!this.c && !0;
  }),
  (y.Y = function () {
    return this.R;
  }),
  ((y = pr.prototype).va = function () {}),
  (y.ua = function () {}),
  (y.ta = function () {}),
  (y.sa = function () {}),
  (y.Sa = function () {}),
  (dr.prototype.a = function (t, e) {
    return new vr(t, e);
  }),
  L(vr, qt),
  ((y = vr.prototype).addEventListener = function (t, e, n, r) {
    vr.N.addEventListener.call(this, t, e, n, r);
  }),
  (y.removeEventListener = function (t, e, n, r) {
    vr.N.removeEventListener.call(this, t, e, n, r);
  }),
  (y.Va = function () {
    (this.a.c = this.f), this.l && (this.a.R = !0);
    var t = this.a,
      e = this.m,
      n = this.g,
      r = this.b || void 0;
    pe(0),
      (t.ha = n),
      (t.V = r || {}),
      t.o && ((t.F.b = []), (t.F.a = !1)),
      (t.w = new gn(t)),
      null === t.g && (t.w.h = t.i),
      (n = e),
      t.g && t.i && (n = Jn(e, t.g, t.i)),
      ((t = t.w).i = n),
      (e = lr(t.a, null, t.i)),
      pe(3),
      null != (n = t.a.F.b)
        ? ((t.f = n[0]), (t.M = 1), wn(t))
        : (tn(e, "MODE", "init"),
          !t.a.o && t.a.j && tn(e, "X-HTTP-Session-Id", t.a.j),
          (t.b = new De(t, void 0, void 0)),
          (t.b.h = t.h),
          Re(t.b, e, !1, null),
          (t.M = 0));
  }),
  (y.close = function () {
    $n(this.a);
  }),
  (y.Wa = function (t) {
    if (b(t)) {
      var e = {};
      (e.__data__ = t), tr(this.a, e);
    } else
      this.h ? (((e = {}).__data__ = jt(t)), tr(this.a, e)) : tr(this.a, t);
  }),
  (y.G = function () {
    (this.a.c = null),
      delete this.f,
      $n(this.a),
      delete this.a,
      vr.N.G.call(this);
  }),
  L(yr, Te),
  L(mr, Ne),
  L(gr, pr),
  (gr.prototype.va = function () {
    this.a.dispatchEvent("a");
  }),
  (gr.prototype.ua = function (t) {
    this.a.dispatchEvent(new yr(t));
  }),
  (gr.prototype.ta = function (t) {
    this.a.dispatchEvent(new mr(t));
  }),
  (gr.prototype.sa = function () {
    this.a.dispatchEvent("b");
  });
var wr = P(function (t, e) {
  function n() {}
  n.prototype = t.prototype;
  var r = new n();
  return t.apply(r, Array.prototype.slice.call(arguments, 1)), r;
}, dr);
(dr.prototype.createWebChannel = dr.prototype.a),
  (vr.prototype.send = vr.prototype.Wa),
  (vr.prototype.open = vr.prototype.Va),
  (vr.prototype.close = vr.prototype.close),
  (ye.NO_ERROR = 0),
  (ye.TIMEOUT = 8),
  (ye.HTTP_ERROR = 6),
  (me.COMPLETE = "complete"),
  (be.EventType = Ie),
  (Ie.OPEN = "a"),
  (Ie.CLOSE = "b"),
  (Ie.ERROR = "c"),
  (Ie.MESSAGE = "d"),
  (qt.prototype.listen = qt.prototype.za),
  (Un.prototype.listenOnce = Un.prototype.Aa),
  (Un.prototype.getLastError = Un.prototype.Xa),
  (Un.prototype.getLastErrorCode = Un.prototype.ya),
  (Un.prototype.getStatus = Un.prototype.T),
  (Un.prototype.getResponseJson = Un.prototype.Ua),
  (Un.prototype.getResponseText = Un.prototype.aa),
  (Un.prototype.send = Un.prototype.ca);
var br = {
    createWebChannelTransport: wr,
    ErrorCode: ye,
    EventType: me,
    WebChannel: be,
    XhrIo: Un,
  },
  Er = br.createWebChannelTransport,
  Ir = br.ErrorCode,
  Tr = br.EventType,
  Nr = br.WebChannel,
  Ar = br.XhrIo,
  Dr = h.SDK_VERSION,
  Sr = (function () {
    function t(t) {
      this.uid = t;
    }
    return (
      (t.prototype.t = function () {
        return null != this.uid;
      }),
      (t.prototype.i = function () {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
      }),
      (t.prototype.isEqual = function (t) {
        return t.uid === this.uid;
      }),
      (t.UNAUTHENTICATED = new t(null)),
      (t.u = new t("google-credentials-uid")),
      (t.s = new t("first-party-uid")),
      t
    );
  })(),
  kr = {
    OK: "ok",
    CANCELLED: "cancelled",
    UNKNOWN: "unknown",
    INVALID_ARGUMENT: "invalid-argument",
    DEADLINE_EXCEEDED: "deadline-exceeded",
    NOT_FOUND: "not-found",
    ALREADY_EXISTS: "already-exists",
    PERMISSION_DENIED: "permission-denied",
    UNAUTHENTICATED: "unauthenticated",
    RESOURCE_EXHAUSTED: "resource-exhausted",
    FAILED_PRECONDITION: "failed-precondition",
    ABORTED: "aborted",
    OUT_OF_RANGE: "out-of-range",
    UNIMPLEMENTED: "unimplemented",
    INTERNAL: "internal",
    UNAVAILABLE: "unavailable",
    DATA_LOSS: "data-loss",
  },
  Or = (function (e) {
    function n(t, n) {
      var r = e.call(this, n) || this;
      return (
        (r.code = t),
        (r.message = n),
        (r.name = "FirebaseError"),
        (r.toString = function () {
          return r.name + ": [code=" + r.code + "]: " + r.message;
        }),
        r
      );
    }
    return t(n, e), n;
  })(Error),
  Cr = function (t, e) {
    (this.user = e),
      (this.type = "OAuth"),
      (this.o = {}),
      (this.o.Authorization = "Bearer " + t);
  },
  Rr = (function () {
    function t() {
      this.h = null;
    }
    return (
      (t.prototype.getToken = function () {
        return Promise.resolve(null);
      }),
      (t.prototype.l = function () {}),
      (t.prototype.v = function (t) {
        Wo(!this.h, "Can only call setChangeListener() once."),
          (this.h = t),
          t(Sr.UNAUTHENTICATED);
      }),
      (t.prototype.m = function () {
        Wo(
          null !== this.h,
          "removeChangeListener() when no listener registered"
        ),
          (this.h = null);
      }),
      t
    );
  })(),
  xr = (function () {
    function t(t) {
      var e = this;
      (this.p = null),
        (this.currentUser = Sr.UNAUTHENTICATED),
        (this.g = !1),
        (this._ = 0),
        (this.h = null),
        (this.forceRefresh = !1),
        (this.p = function () {
          e._++, (e.currentUser = e.I()), (e.g = !0), e.h && e.h(e.currentUser);
        }),
        (this._ = 0),
        (this.auth = t.getImmediate({ optional: !0 })),
        this.auth
          ? this.auth.addAuthTokenListener(this.p)
          : (this.p(null),
            t.get().then(
              function (t) {
                (e.auth = t), e.p && e.auth.addAuthTokenListener(e.p);
              },
              function () {}
            ));
    }
    return (
      (t.prototype.getToken = function () {
        var t = this;
        Wo(null != this.p, "getToken cannot be called after listener removed.");
        var e = this._,
          n = this.forceRefresh;
        return (
          (this.forceRefresh = !1),
          this.auth
            ? this.auth.getToken(n).then(function (n) {
                if (t._ !== e)
                  throw new Or(
                    kr.ABORTED,
                    "getToken aborted due to token change."
                  );
                return n
                  ? (Wo(
                      "string" == typeof n.accessToken,
                      "Invalid tokenData returned from getToken():" + n
                    ),
                    new Cr(n.accessToken, t.currentUser))
                  : null;
              })
            : Promise.resolve(null)
        );
      }),
      (t.prototype.l = function () {
        this.forceRefresh = !0;
      }),
      (t.prototype.v = function (t) {
        Wo(!this.h, "Can only call setChangeListener() once."),
          (this.h = t),
          this.g && t(this.currentUser);
      }),
      (t.prototype.m = function () {
        Wo(null != this.p, "removeChangeListener() called twice"),
          Wo(
            null !== this.h,
            "removeChangeListener() called when no listener registered"
          ),
          this.auth && this.auth.removeAuthTokenListener(this.p),
          (this.p = null),
          (this.h = null);
      }),
      (t.prototype.I = function () {
        var t = this.auth && this.auth.getUid();
        return (
          Wo(null === t || "string" == typeof t, "Received invalid UID: " + t),
          new Sr(t)
        );
      }),
      t
    );
  })(),
  Pr = (function () {
    function t(t, e) {
      (this.T = t),
        (this.D = e),
        (this.type = "FirstParty"),
        (this.user = Sr.s);
    }
    return (
      Object.defineProperty(t.prototype, "o", {
        get: function () {
          var t = { "X-Goog-AuthUser": this.D },
            e = this.T.auth.R([]);
          return e && (t.Authorization = e), t;
        },
        enumerable: !0,
        configurable: !0,
      }),
      t
    );
  })(),
  Mr = (function () {
    function t(t, e) {
      (this.T = t), (this.D = e);
    }
    return (
      (t.prototype.getToken = function () {
        return Promise.resolve(new Pr(this.T, this.D));
      }),
      (t.prototype.v = function (t) {
        t(Sr.s);
      }),
      (t.prototype.m = function () {}),
      (t.prototype.l = function () {}),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lr(t) {
  if (!t) return new Rr();
  switch (t.type) {
    case "gapi":
      var e = t.S;
      return (
        Wo(
          !(
            "object" != typeof e ||
            null === e ||
            !e.auth ||
            !e.auth.getAuthHeaderValueForFirstParty
          ),
          "unexpected gapi interface"
        ),
        new Mr(e, t.D || "0")
      );
    case "provider":
      return t.S;
    default:
      throw new Or(
        kr.INVALID_ARGUMENT,
        "makeCredentialsProvider failed due to invalid credential type"
      );
  }
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _r = (function () {
    function t(t, e) {
      if (((this.seconds = t), (this.nanoseconds = e), e < 0))
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Timestamp nanoseconds out of range: " + e
        );
      if (e >= 1e9)
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Timestamp nanoseconds out of range: " + e
        );
      if (t < -62135596800)
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Timestamp seconds out of range: " + t
        );
      if (t >= 253402300800)
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Timestamp seconds out of range: " + t
        );
    }
    return (
      (t.now = function () {
        return t.fromMillis(Date.now());
      }),
      (t.fromDate = function (e) {
        return t.fromMillis(e.getTime());
      }),
      (t.fromMillis = function (e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
      }),
      (t.prototype.toDate = function () {
        return new Date(this.toMillis());
      }),
      (t.prototype.toMillis = function () {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
      }),
      (t.prototype.A = function (t) {
        return this.seconds === t.seconds
          ? Jo(this.nanoseconds, t.nanoseconds)
          : Jo(this.seconds, t.seconds);
      }),
      (t.prototype.isEqual = function (t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
      }),
      (t.prototype.toString = function () {
        return (
          "Timestamp(seconds=" +
          this.seconds +
          ", nanoseconds=" +
          this.nanoseconds +
          ")"
        );
      }),
      (t.prototype.valueOf = function () {
        var t = this.seconds - -62135596800;
        return (
          String(t).padStart(12, "0") +
          "." +
          String(this.nanoseconds).padStart(9, "0")
        );
      }),
      t
    );
  })(),
  Vr = (function () {
    function t(t) {
      this.timestamp = t;
    }
    return (
      (t.C = function (e) {
        var n = Math.floor(e / 1e6);
        return new t(new _r(n, (e % 1e6) * 1e3));
      }),
      (t.P = function (e) {
        return new t(e);
      }),
      (t.V = function () {
        return t.MIN;
      }),
      (t.prototype.k = function (t) {
        return this.timestamp.A(t.timestamp);
      }),
      (t.prototype.isEqual = function (t) {
        return this.timestamp.isEqual(t.timestamp);
      }),
      (t.prototype.N = function () {
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
      }),
      (t.prototype.toString = function () {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
      }),
      (t.prototype.O = function () {
        return this.timestamp;
      }),
      (t.MIN = new t(new _r(0, 0))),
      t
    );
  })(),
  Ur = (function () {
    function t(t, e, n) {
      void 0 === e
        ? (e = 0)
        : e > t.length && Ko("offset " + e + " out of range " + t.length),
        void 0 === n
          ? (n = t.length - e)
          : n > t.length - e &&
            Ko("length " + n + " out of range " + (t.length - e)),
        (this.segments = t),
        (this.offset = e),
        (this.len = n);
    }
    return (
      Object.defineProperty(t.prototype, "length", {
        get: function () {
          return this.len;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (e) {
        return 0 === t.F(this, e);
      }),
      (t.prototype.child = function (e) {
        var n = this.segments.slice(this.offset, this.limit());
        return (
          e instanceof t
            ? e.forEach(function (t) {
                n.push(t);
              })
            : n.push(e),
          this.U(n)
        );
      }),
      (t.prototype.limit = function () {
        return this.offset + this.length;
      }),
      (t.prototype.j = function (t) {
        return (
          (t = void 0 === t ? 1 : t),
          Wo(this.length >= t, "Can't call popFirst() with less segments"),
          this.U(this.segments, this.offset + t, this.length - t)
        );
      }),
      (t.prototype.L = function () {
        return (
          Wo(!this.M(), "Can't call popLast() on empty path"),
          this.U(this.segments, this.offset, this.length - 1)
        );
      }),
      (t.prototype.q = function () {
        return (
          Wo(!this.M(), "Can't call firstSegment() on empty path"),
          this.segments[this.offset]
        );
      }),
      (t.prototype.B = function () {
        return this.get(this.length - 1);
      }),
      (t.prototype.get = function (t) {
        return (
          Wo(t < this.length, "Index out of range"),
          this.segments[this.offset + t]
        );
      }),
      (t.prototype.M = function () {
        return 0 === this.length;
      }),
      (t.prototype.G = function (t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++)
          if (this.get(e) !== t.get(e)) return !1;
        return !0;
      }),
      (t.prototype.W = function (t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++)
          if (this.get(e) !== t.get(e)) return !1;
        return !0;
      }),
      (t.prototype.forEach = function (t) {
        for (var e = this.offset, n = this.limit(); e < n; e++)
          t(this.segments[e]);
      }),
      (t.prototype.K = function () {
        return this.segments.slice(this.offset, this.limit());
      }),
      (t.F = function (t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
          var i = t.get(r),
            o = e.get(r);
          if (i < o) return -1;
          if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
      }),
      t
    );
  })(),
  qr = (function (e) {
    function n() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      t(n, e),
      (n.prototype.U = function (t, e, r) {
        return new n(t, e, r);
      }),
      (n.prototype.J = function () {
        return this.K().join("/");
      }),
      (n.prototype.toString = function () {
        return this.J();
      }),
      (n.H = function (t) {
        if (t.indexOf("//") >= 0)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid path (" + t + "). Paths must not contain // in them."
          );
        return new n(
          t.split("/").filter(function (t) {
            return t.length > 0;
          })
        );
      }),
      (n.Y = new n([])),
      n
    );
  })(Ur),
  Fr = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
  jr = (function (e) {
    function n() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      t(n, e),
      (n.prototype.U = function (t, e, r) {
        return new n(t, e, r);
      }),
      (n.X = function (t) {
        return Fr.test(t);
      }),
      (n.prototype.J = function () {
        return this.K()
          .map(function (t) {
            return (
              (t = t.replace("\\", "\\\\").replace("`", "\\`")),
              n.X(t) || (t = "`" + t + "`"),
              t
            );
          })
          .join(".");
      }),
      (n.prototype.toString = function () {
        return this.J();
      }),
      (n.prototype.$ = function () {
        return 1 === this.length && "__name__" === this.get(0);
      }),
      (n.Z = function () {
        return new n(["__name__"]);
      }),
      (n.tt = function (t) {
        for (
          var e = [],
            r = "",
            i = 0,
            o = function () {
              if (0 === r.length)
                throw new Or(
                  kr.INVALID_ARGUMENT,
                  "Invalid field path (" +
                    t +
                    "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                );
              e.push(r), (r = "");
            },
            s = !1;
          i < t.length;

        ) {
          var u = t[i];
          if ("\\" === u) {
            if (i + 1 === t.length)
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Path has trailing escape character: " + t
              );
            var a = t[i + 1];
            if ("\\" !== a && "." !== a && "`" !== a)
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Path has invalid escape sequence: " + t
              );
            (r += a), (i += 2);
          } else
            "`" === u
              ? ((s = !s), i++)
              : "." !== u || s
              ? ((r += u), i++)
              : (o(), i++);
        }
        if ((o(), s))
          throw new Or(kr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
      }),
      (n.Y = new n([])),
      n
    );
  })(Ur),
  Br = (function () {
    function t(e) {
      (this.path = e),
        Wo(
          t.nt(e),
          "Invalid DocumentKey with an odd number of segments: " +
            e.K().join("/")
        );
    }
    return (
      (t.it = function (e) {
        return new t(qr.H(e).j(5));
      }),
      (t.prototype.et = function (t) {
        return (
          this.path.length >= 2 && this.path.get(this.path.length - 2) === t
        );
      }),
      (t.prototype.isEqual = function (t) {
        return null !== t && 0 === qr.F(this.path, t.path);
      }),
      (t.prototype.toString = function () {
        return this.path.toString();
      }),
      (t.F = function (t, e) {
        return qr.F(t.path, e.path);
      }),
      (t.nt = function (t) {
        return t.length % 2 == 0;
      }),
      (t.rt = function (e) {
        return new t(new qr(e.slice()));
      }),
      (t.EMPTY = new t(new qr([]))),
      t
    );
  })(),
  Gr = (function () {
    function t(t, e) {
      (this.F = t), (this.root = e || Qr.EMPTY);
    }
    return (
      (t.prototype.ut = function (e, n) {
        return new t(
          this.F,
          this.root.ut(e, n, this.F).copy(null, null, Qr.st, null, null)
        );
      }),
      (t.prototype.remove = function (e) {
        return new t(
          this.F,
          this.root.remove(e, this.F).copy(null, null, Qr.st, null, null)
        );
      }),
      (t.prototype.get = function (t) {
        for (var e = this.root; !e.M(); ) {
          var n = this.F(t, e.key);
          if (0 === n) return e.value;
          n < 0 ? (e = e.left) : n > 0 && (e = e.right);
        }
        return null;
      }),
      (t.prototype.indexOf = function (t) {
        for (var e = 0, n = this.root; !n.M(); ) {
          var r = this.F(t, n.key);
          if (0 === r) return e + n.left.size;
          r < 0 ? (n = n.left) : ((e += n.left.size + 1), (n = n.right));
        }
        return -1;
      }),
      (t.prototype.M = function () {
        return this.root.M();
      }),
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.root.size;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.ot = function () {
        return this.root.ot();
      }),
      (t.prototype.ht = function () {
        return this.root.ht();
      }),
      (t.prototype.ct = function (t) {
        return this.root.ct(t);
      }),
      (t.prototype.forEach = function (t) {
        this.ct(function (e, n) {
          return t(e, n), !1;
        });
      }),
      (t.prototype.toString = function () {
        var t = [];
        return (
          this.ct(function (e, n) {
            return t.push(e + ":" + n), !1;
          }),
          "{" + t.join(", ") + "}"
        );
      }),
      (t.prototype.at = function (t) {
        return this.root.at(t);
      }),
      (t.prototype.ft = function () {
        return new zr(this.root, null, this.F, !1);
      }),
      (t.prototype.lt = function (t) {
        return new zr(this.root, t, this.F, !1);
      }),
      (t.prototype.dt = function () {
        return new zr(this.root, null, this.F, !0);
      }),
      (t.prototype.vt = function (t) {
        return new zr(this.root, t, this.F, !0);
      }),
      t
    );
  })(),
  zr = (function () {
    function t(t, e, n, r) {
      (this.wt = r), (this.pt = []);
      for (var i = 1; !t.M(); )
        if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
          t = this.wt ? t.left : t.right;
        else {
          if (0 === i) {
            this.pt.push(t);
            break;
          }
          this.pt.push(t), (t = this.wt ? t.right : t.left);
        }
    }
    return (
      (t.prototype.bt = function () {
        Wo(
          this.pt.length > 0,
          "getNext() called on iterator when hasNext() is false."
        );
        var t = this.pt.pop(),
          e = { key: t.key, value: t.value };
        if (this.wt) for (t = t.left; !t.M(); ) this.pt.push(t), (t = t.right);
        else for (t = t.right; !t.M(); ) this.pt.push(t), (t = t.left);
        return e;
      }),
      (t.prototype.gt = function () {
        return this.pt.length > 0;
      }),
      (t.prototype.yt = function () {
        if (0 === this.pt.length) return null;
        var t = this.pt[this.pt.length - 1];
        return { key: t.key, value: t.value };
      }),
      t
    );
  })(),
  Qr = (function () {
    function t(e, n, r, i, o) {
      (this.key = e),
        (this.value = n),
        (this.color = null != r ? r : t.RED),
        (this.left = null != i ? i : t.EMPTY),
        (this.right = null != o ? o : t.EMPTY),
        (this.size = this.left.size + 1 + this.right.size);
    }
    return (
      (t.prototype.copy = function (e, n, r, i, o) {
        return new t(
          null != e ? e : this.key,
          null != n ? n : this.value,
          null != r ? r : this.color,
          null != i ? i : this.left,
          null != o ? o : this.right
        );
      }),
      (t.prototype.M = function () {
        return !1;
      }),
      (t.prototype.ct = function (t) {
        return this.left.ct(t) || t(this.key, this.value) || this.right.ct(t);
      }),
      (t.prototype.at = function (t) {
        return this.right.at(t) || t(this.key, this.value) || this.left.at(t);
      }),
      (t.prototype.min = function () {
        return this.left.M() ? this : this.left.min();
      }),
      (t.prototype.ot = function () {
        return this.min().key;
      }),
      (t.prototype.ht = function () {
        return this.right.M() ? this.key : this.right.ht();
      }),
      (t.prototype.ut = function (t, e, n) {
        var r = this,
          i = n(t, r.key);
        return (r =
          i < 0
            ? r.copy(null, null, null, r.left.ut(t, e, n), null)
            : 0 === i
            ? r.copy(null, e, null, null, null)
            : r.copy(null, null, null, null, r.right.ut(t, e, n)))._t();
      }),
      (t.prototype.It = function () {
        if (this.left.M()) return t.EMPTY;
        var e = this;
        return (
          e.left.Tt() || e.left.left.Tt() || (e = e.Et()),
          (e = e.copy(null, null, null, e.left.It(), null))._t()
        );
      }),
      (t.prototype.remove = function (e, n) {
        var r,
          i = this;
        if (n(e, i.key) < 0)
          i.left.M() || i.left.Tt() || i.left.left.Tt() || (i = i.Et()),
            (i = i.copy(null, null, null, i.left.remove(e, n), null));
        else {
          if (
            (i.left.Tt() && (i = i.Dt()),
            i.right.M() || i.right.Tt() || i.right.left.Tt() || (i = i.Rt()),
            0 === n(e, i.key))
          ) {
            if (i.right.M()) return t.EMPTY;
            (r = i.right.min()),
              (i = i.copy(r.key, r.value, null, null, i.right.It()));
          }
          i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i._t();
      }),
      (t.prototype.Tt = function () {
        return this.color;
      }),
      (t.prototype._t = function () {
        var t = this;
        return (
          t.right.Tt() && !t.left.Tt() && (t = t.St()),
          t.left.Tt() && t.left.left.Tt() && (t = t.Dt()),
          t.left.Tt() && t.right.Tt() && (t = t.At()),
          t
        );
      }),
      (t.prototype.Et = function () {
        var t = this.At();
        return (
          t.right.left.Tt() &&
            (t = (t = (t = t.copy(
              null,
              null,
              null,
              null,
              t.right.Dt()
            )).St()).At()),
          t
        );
      }),
      (t.prototype.Rt = function () {
        var t = this.At();
        return t.left.left.Tt() && (t = (t = t.Dt()).At()), t;
      }),
      (t.prototype.St = function () {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
      }),
      (t.prototype.Dt = function () {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
      }),
      (t.prototype.At = function () {
        var t = this.left.copy(null, null, !this.left.color, null, null),
          e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
      }),
      (t.prototype.Ct = function () {
        var t = this.Pt();
        return Math.pow(2, t) <= this.size + 1;
      }),
      (t.prototype.Pt = function () {
        if (this.Tt() && this.left.Tt())
          throw Ko(
            "Red node has red child(" + this.key + "," + this.value + ")"
          );
        if (this.right.Tt())
          throw Ko(
            "Right child of (" + this.key + "," + this.value + ") is red"
          );
        var t = this.left.Pt();
        if (t !== this.right.Pt()) throw Ko("Black depths differ");
        return t + (this.Tt() ? 0 : 1);
      }),
      (t.EMPTY = null),
      (t.RED = !0),
      (t.st = !1),
      t
    );
  })(),
  Yr = (function () {
    function t() {
      this.size = 0;
    }
    return (
      Object.defineProperty(t.prototype, "key", {
        get: function () {
          throw Ko("LLRBEmptyNode has no key.");
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "value", {
        get: function () {
          throw Ko("LLRBEmptyNode has no value.");
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "color", {
        get: function () {
          throw Ko("LLRBEmptyNode has no color.");
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "left", {
        get: function () {
          throw Ko("LLRBEmptyNode has no left child.");
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "right", {
        get: function () {
          throw Ko("LLRBEmptyNode has no right child.");
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.copy = function (t, e, n, r, i) {
        return this;
      }),
      (t.prototype.ut = function (t, e, n) {
        return new Qr(t, e);
      }),
      (t.prototype.remove = function (t, e) {
        return this;
      }),
      (t.prototype.M = function () {
        return !0;
      }),
      (t.prototype.ct = function (t) {
        return !1;
      }),
      (t.prototype.at = function (t) {
        return !1;
      }),
      (t.prototype.ot = function () {
        return null;
      }),
      (t.prototype.ht = function () {
        return null;
      }),
      (t.prototype.Tt = function () {
        return !1;
      }),
      (t.prototype.Ct = function () {
        return !0;
      }),
      (t.prototype.Pt = function () {
        return 0;
      }),
      t
    );
  })();
Qr.EMPTY = new Yr();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kr = (function () {
    function t(t) {
      (this.F = t), (this.data = new Gr(this.F));
    }
    return (
      (t.Vt = function (e) {
        var n = new t(e.F);
        return (
          e.forEach(function (t) {
            n = n.add(t);
          }),
          n
        );
      }),
      (t.prototype.has = function (t) {
        return null !== this.data.get(t);
      }),
      (t.prototype.first = function () {
        return this.data.ot();
      }),
      (t.prototype.last = function () {
        return this.data.ht();
      }),
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.data.size;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.indexOf = function (t) {
        return this.data.indexOf(t);
      }),
      (t.prototype.forEach = function (t) {
        this.data.ct(function (e, n) {
          return t(e), !1;
        });
      }),
      (t.prototype.kt = function (t, e) {
        for (var n = this.data.lt(t[0]); n.gt(); ) {
          var r = n.bt();
          if (this.F(r.key, t[1]) >= 0) return;
          e(r.key);
        }
      }),
      (t.prototype.Nt = function (t, e) {
        var n;
        for (n = void 0 !== e ? this.data.lt(e) : this.data.ft(); n.gt(); )
          if (!t(n.bt().key)) return;
      }),
      (t.prototype.Ot = function (t) {
        var e = this.data.lt(t);
        return e.gt() ? e.bt().key : null;
      }),
      (t.prototype.ft = function () {
        return new Wr(this.data.ft());
      }),
      (t.prototype.lt = function (t) {
        return new Wr(this.data.lt(t));
      }),
      (t.prototype.add = function (t) {
        return this.copy(this.data.remove(t).ut(t, !0));
      }),
      (t.prototype.delete = function (t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
      }),
      (t.prototype.M = function () {
        return this.data.M();
      }),
      (t.prototype.Ft = function (t) {
        var e = this;
        return (
          e.size < t.size && ((e = t), (t = this)),
          t.forEach(function (t) {
            e = e.add(t);
          }),
          e
        );
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.ft(), r = e.data.ft(); n.gt(); ) {
          var i = n.bt().key,
            o = r.bt().key;
          if (0 !== this.F(i, o)) return !1;
        }
        return !0;
      }),
      (t.prototype.K = function () {
        var t = [];
        return (
          this.forEach(function (e) {
            t.push(e);
          }),
          t
        );
      }),
      (t.prototype.toString = function () {
        var t = [];
        return (
          this.forEach(function (e) {
            return t.push(e);
          }),
          "SortedSet(" + t.toString() + ")"
        );
      }),
      (t.prototype.copy = function (e) {
        var n = new t(this.F);
        return (n.data = e), n;
      }),
      t
    );
  })(),
  Wr = (function () {
    function t(t) {
      this.Ut = t;
    }
    return (
      (t.prototype.bt = function () {
        return this.Ut.bt().key;
      }),
      (t.prototype.gt = function () {
        return this.Ut.gt();
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Hr(t) {
  var e = 0;
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Jr(t, e) {
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function Xr(t) {
  for (var e in (Wo(
    null != t && "object" == typeof t,
    "isEmpty() expects object parameter."
  ),
  t))
    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $r = (function () {
  function t(t) {
    this.jt = t;
  }
  return (
    (t.fromBase64String = function (e) {
      return new t(Fo.xt().atob(e));
    }),
    (t.fromUint8Array = function (e) {
      return new t(
        (function (t) {
          for (var e = "", n = 0; n < t.length; ++n)
            e += String.fromCharCode(t[n]);
          return e;
        })(e)
      );
    }),
    (t.prototype.toBase64 = function () {
      return Fo.xt().btoa(this.jt);
    }),
    (t.prototype.toUint8Array = function () {
      return (function (t) {
        for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
          e[n] = t.charCodeAt(n);
        return e;
      })(
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ this.jt
      );
    }),
    (t.prototype.Lt = function () {
      return 2 * this.jt.length;
    }),
    (t.prototype.k = function (t) {
      return Jo(this.jt, t.jt);
    }),
    (t.prototype.isEqual = function (t) {
      return this.jt === t.jt;
    }),
    (t.Mt = new t("")),
    t
  );
})();
function Zr(t) {
  return null == t;
}
function ti(t) {
  return -0 === t && 1 / t == -1 / 0;
}
function ei(t) {
  return (
    "number" == typeof t &&
    Number.isInteger(t) &&
    !ti(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ni(t) {
  var e, n;
  return (
    "server_timestamp" ===
    (null ===
      (n = (
        (null === (e = null == t ? void 0 : t.mapValue) || void 0 === e
          ? void 0
          : e.fields) || {}
      ).__type__) || void 0 === n
      ? void 0
      : n.stringValue)
  );
}
function ri(t) {
  var e = fi(t.mapValue.fields.__local_write_time__.timestampValue);
  return new _r(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ii = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function oi(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
    ? 1
    : "integerValue" in t || "doubleValue" in t
    ? 2
    : "timestampValue" in t
    ? 3
    : "stringValue" in t
    ? 5
    : "bytesValue" in t
    ? 6
    : "referenceValue" in t
    ? 7
    : "geoPointValue" in t
    ? 8
    : "arrayValue" in t
    ? 9
    : "mapValue" in t
    ? ni(t)
      ? 4
      : 10
    : Ko("Invalid value type: " + JSON.stringify(t));
}
function si(t, e) {
  var n = oi(t);
  if (n !== oi(e)) return !1;
  switch (n) {
    case 0:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return ri(t).isEqual(ri(e));
    case 3:
      return (function (t, e) {
        if (
          "string" == typeof t.timestampValue &&
          "string" == typeof e.timestampValue &&
          t.timestampValue.length === e.timestampValue.length
        )
          return t.timestampValue === e.timestampValue;
        var n = fi(t.timestampValue),
          r = fi(e.timestampValue);
        return n.seconds === r.seconds && n.nanos === r.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (t, e) {
        return pi(t.bytesValue).isEqual(pi(e.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (t, e) {
        return (
          li(t.geoPointValue.latitude) === li(e.geoPointValue.latitude) &&
          li(t.geoPointValue.longitude) === li(e.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (t, e) {
        if ("integerValue" in t && "integerValue" in e)
          return li(t.integerValue) === li(e.integerValue);
        if ("doubleValue" in t && "doubleValue" in e) {
          var n = li(t.doubleValue),
            r = li(e.doubleValue);
          return n === r ? ti(n) === ti(r) : isNaN(n) && isNaN(r);
        }
        return !1;
      })(t, e);
    case 9:
      return Xo(t.arrayValue.values || [], e.arrayValue.values || [], si);
    case 10:
      return (function (t, e) {
        var n = t.mapValue.fields || {},
          r = e.mapValue.fields || {};
        if (Hr(n) !== Hr(r)) return !1;
        for (var i in n)
          if (n.hasOwnProperty(i) && (void 0 === r[i] || !si(n[i], r[i])))
            return !1;
        return !0;
      })(t, e);
    default:
      return Ko("Unexpected value type: " + JSON.stringify(t));
  }
}
function ui(t, e) {
  return (
    void 0 !==
    (t.values || []).find(function (t) {
      return si(t, e);
    })
  );
}
function ai(t, e) {
  var n = oi(t),
    r = oi(e);
  if (n !== r) return Jo(n, r);
  switch (n) {
    case 0:
      return 0;
    case 1:
      return Jo(t.booleanValue, e.booleanValue);
    case 2:
      return (function (t, e) {
        var n = li(t.integerValue || t.doubleValue),
          r = li(e.integerValue || e.doubleValue);
        return n < r
          ? -1
          : n > r
          ? 1
          : n === r
          ? 0
          : isNaN(n)
          ? isNaN(r)
            ? 0
            : -1
          : 1;
      })(t, e);
    case 3:
      return hi(t.timestampValue, e.timestampValue);
    case 4:
      return hi(ri(t), ri(e));
    case 5:
      return Jo(t.stringValue, e.stringValue);
    case 6:
      return (function (t, e) {
        var n = pi(t),
          r = pi(e);
        return n.k(r);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (t, e) {
        for (
          var n = t.split("/"), r = e.split("/"), i = 0;
          i < n.length && i < r.length;
          i++
        ) {
          var o = Jo(n[i], r[i]);
          if (0 !== o) return o;
        }
        return Jo(n.length, r.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (t, e) {
        var n = Jo(li(t.latitude), li(e.latitude));
        return 0 !== n ? n : Jo(li(t.longitude), li(e.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (t, e) {
        for (
          var n = t.values || [], r = e.values || [], i = 0;
          i < n.length && i < r.length;
          ++i
        ) {
          var o = ai(n[i], r[i]);
          if (o) return o;
        }
        return Jo(n.length, r.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (t, e) {
        var n = t.fields || {},
          r = Object.keys(n),
          i = e.fields || {},
          o = Object.keys(i);
        r.sort(), o.sort();
        for (var s = 0; s < r.length && s < o.length; ++s) {
          var u = Jo(r[s], o[s]);
          if (0 !== u) return u;
          var a = ai(n[r[s]], i[o[s]]);
          if (0 !== a) return a;
        }
        return Jo(r.length, o.length);
      })(t.mapValue, e.mapValue);
    default:
      throw Ko("Invalid value type: " + n);
  }
}
function hi(t, e) {
  if ("string" == typeof t && "string" == typeof e && t.length === e.length)
    return Jo(t, e);
  var n = fi(t),
    r = fi(e),
    i = Jo(n.seconds, r.seconds);
  return 0 !== i ? i : Jo(n.nanos, r.nanos);
}
function ci(t) {
  return (function t(e) {
    return "nullValue" in e
      ? "null"
      : "booleanValue" in e
      ? "" + e.booleanValue
      : "integerValue" in e
      ? "" + e.integerValue
      : "doubleValue" in e
      ? "" + e.doubleValue
      : "timestampValue" in e
      ? ((i = e.timestampValue),
        "time(" + (o = fi(i)).seconds + "," + o.nanos + ")")
      : "stringValue" in e
      ? e.stringValue
      : "bytesValue" in e
      ? pi(e.bytesValue).toBase64()
      : "referenceValue" in e
      ? ((r = e.referenceValue), Br.it(r).toString())
      : "geoPointValue" in e
      ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")"
      : "arrayValue" in e
      ? (function (e) {
          for (
            var n = "[", r = !0, i = 0, o = e.values || [];
            i < o.length;
            i++
          ) {
            var s = o[i];
            r ? (r = !1) : (n += ","), (n += t(s));
          }
          return n + "]";
        })(e.arrayValue)
      : "mapValue" in e
      ? (function (e) {
          for (
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort();
            i < o.length;
            i++
          ) {
            var s = o[i];
            r ? (r = !1) : (n += ","), (n += s + ":" + t(e.fields[s]));
          }
          return n + "}";
        })(e.mapValue)
      : Ko("Invalid value type: " + JSON.stringify(e));
    var n, r, i, o;
  })(t);
}
function fi(t) {
  if (
    (Wo(!!t, "Cannot normalize null or undefined timestamp."),
    "string" == typeof t)
  ) {
    var e = 0,
      n = ii.exec(t);
    if ((Wo(!!n, "invalid timestamp: " + t), n[1])) {
      var r = n[1];
      (r = (r + "000000000").substr(0, 9)), (e = Number(r));
    }
    var i = new Date(t);
    return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
  }
  return { seconds: li(t.seconds), nanos: (e = li(t.nanos)) };
}
function li(t) {
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
function pi(t) {
  return "string" == typeof t ? $r.fromBase64String(t) : $r.fromUint8Array(t);
}
function di(t, e) {
  return {
    referenceValue:
      "projects/" +
      t.projectId +
      "/databases/" +
      t.database +
      "/documents/" +
      e.path.J(),
  };
}
function vi(t) {
  return !!t && "integerValue" in t;
}
function yi(t) {
  return (
    vi(t) ||
    (function (t) {
      return !!t && "doubleValue" in t;
    })(t)
  );
}
function mi(t) {
  return !!t && "arrayValue" in t;
}
function gi(t) {
  return !!t && "referenceValue" in t;
}
function wi(t) {
  return !!t && "nullValue" in t;
}
function bi(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function Ei(t) {
  return !!t && "mapValue" in t;
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ii = (function () {
    function t() {}
    return (
      (t.prototype.qt = function (t, e) {
        return (function (t, e) {
          var n,
            r = {
              fields:
                ((n = {}),
                (n.__type__ = { stringValue: "server_timestamp" }),
                (n.__local_write_time__ = {
                  timestampValue: { seconds: t.seconds, nanos: t.nanoseconds },
                }),
                n),
            };
          return e && (r.fields.__previous_value__ = e), { mapValue: r };
        })(e, t);
      }),
      (t.prototype.Bt = function (t, e) {
        return e;
      }),
      (t.prototype.Qt = function (t) {
        return null;
      }),
      (t.prototype.isEqual = function (e) {
        return e instanceof t;
      }),
      (t.instance = new t()),
      t
    );
  })(),
  Ti = (function () {
    function t(t) {
      this.elements = t;
    }
    return (
      (t.prototype.qt = function (t, e) {
        return this.apply(t);
      }),
      (t.prototype.Bt = function (t, e) {
        return this.apply(t);
      }),
      (t.prototype.apply = function (t) {
        for (
          var e = Di(t),
            n = function (t) {
              e.some(function (e) {
                return si(e, t);
              }) || e.push(t);
            },
            r = 0,
            i = this.elements;
          r < i.length;
          r++
        )
          n(i[r]);
        return { arrayValue: { values: e } };
      }),
      (t.prototype.Qt = function (t) {
        return null;
      }),
      (t.prototype.isEqual = function (e) {
        return e instanceof t && Xo(this.elements, e.elements, si);
      }),
      t
    );
  })(),
  Ni = (function () {
    function t(t) {
      this.elements = t;
    }
    return (
      (t.prototype.qt = function (t, e) {
        return this.apply(t);
      }),
      (t.prototype.Bt = function (t, e) {
        return this.apply(t);
      }),
      (t.prototype.apply = function (t) {
        for (
          var e = Di(t),
            n = function (t) {
              e = e.filter(function (e) {
                return !si(e, t);
              });
            },
            r = 0,
            i = this.elements;
          r < i.length;
          r++
        )
          n(i[r]);
        return { arrayValue: { values: e } };
      }),
      (t.prototype.Qt = function (t) {
        return null;
      }),
      (t.prototype.isEqual = function (e) {
        return e instanceof t && Xo(this.elements, e.elements, si);
      }),
      t
    );
  })(),
  Ai = (function () {
    function t(t, e) {
      (this.serializer = t),
        (this.Gt = e),
        Wo(yi(e), "NumericIncrementTransform transform requires a NumberValue");
    }
    return (
      (t.prototype.qt = function (t, e) {
        var n = this.Qt(t),
          r = this.asNumber(n) + this.asNumber(this.Gt);
        return vi(n) && vi(this.Gt)
          ? this.serializer.Wt(r)
          : this.serializer.zt(r);
      }),
      (t.prototype.Bt = function (t, e) {
        return (
          Wo(
            null !== e,
            "Didn't receive transformResult for NUMERIC_ADD transform"
          ),
          e
        );
      }),
      (t.prototype.Qt = function (t) {
        return yi(t) ? t : { integerValue: 0 };
      }),
      (t.prototype.isEqual = function (e) {
        return e instanceof t && si(this.Gt, e.Gt);
      }),
      (t.prototype.asNumber = function (t) {
        return li(t.integerValue || t.doubleValue);
      }),
      t
    );
  })();
function Di(t) {
  return mi(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Si,
  ki,
  Oi = (function () {
    function t(t) {
      this.fields = t;
    }
    return (
      (t.Kt = function (e) {
        return new t(e);
      }),
      (t.Jt = function (e) {
        var n = new Kr(jr.F);
        return (
          e.forEach(function (t) {
            return (n = n.add(t));
          }),
          new t(n)
        );
      }),
      (t.prototype.Ht = function (t) {
        var e = !1;
        return (
          this.fields.forEach(function (n) {
            n.G(t) && (e = !0);
          }),
          e
        );
      }),
      (t.prototype.isEqual = function (t) {
        return this.fields.isEqual(t.fields);
      }),
      t
    );
  })(),
  Ci = (function () {
    function t(t, e) {
      (this.field = t), (this.transform = e);
    }
    return (
      (t.prototype.isEqual = function (t) {
        return (
          this.field.isEqual(t.field) && this.transform.isEqual(t.transform)
        );
      }),
      t
    );
  })(),
  Ri = function (t, e) {
    (this.version = t), (this.transformResults = e);
  },
  xi = (function () {
    function t(t, e) {
      (this.updateTime = t),
        (this.exists = e),
        Wo(
          void 0 === t || void 0 === e,
          'Precondition can specify "exists" or "updateTime" but not both'
        );
    }
    return (
      (t.exists = function (e) {
        return new t(void 0, e);
      }),
      (t.updateTime = function (e) {
        return new t(e);
      }),
      Object.defineProperty(t.prototype, "Yt", {
        get: function () {
          return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.Xt = function (t) {
        return void 0 !== this.updateTime
          ? t instanceof Bi && t.version.isEqual(this.updateTime)
          : void 0 !== this.exists
          ? this.exists === t instanceof Bi
          : (Wo(this.Yt, "Precondition should be empty"), !0);
      }),
      (t.prototype.isEqual = function (t) {
        return (
          (e = this.updateTime),
          (n = t.updateTime),
          !(
            (null != e ? !n || !e.isEqual(n) : e !== n) ||
            this.exists !== t.exists
          )
        );
        var e, n;
      }),
      (t.NONE = new t()),
      t
    );
  })(),
  Pi = (function () {
    function t() {}
    return (
      (t.prototype.$t = function (t) {
        null != t &&
          Wo(
            t.key.isEqual(this.key),
            "Can only apply a mutation to a document with the same key"
          );
      }),
      (t.Zt = function (t) {
        return t instanceof Bi ? t.version : Vr.MIN;
      }),
      t
    );
  })(),
  Mi = (function (e) {
    function n(t, n, r) {
      var i = e.call(this) || this;
      return (i.key = t), (i.value = n), (i.tn = r), (i.type = 0), i;
    }
    return (
      t(n, e),
      (n.prototype.Bt = function (t, e) {
        this.$t(t),
          Wo(
            null == e.transformResults,
            "Transform results received by SetMutation."
          );
        var n = e.version;
        return new Bi(this.key, n, this.value, { hasCommittedMutations: !0 });
      }),
      (n.prototype.qt = function (t, e, n) {
        if ((this.$t(t), !this.tn.Xt(t))) return t;
        var r = Pi.Zt(t);
        return new Bi(this.key, r, this.value, { nn: !0 });
      }),
      (n.prototype.in = function (t) {
        return null;
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          this.key.isEqual(t.key) &&
          this.value.isEqual(t.value) &&
          this.tn.isEqual(t.tn)
        );
      }),
      n
    );
  })(Pi),
  Li = (function (e) {
    function n(t, n, r, i) {
      var o = e.call(this) || this;
      return (o.key = t), (o.data = n), (o.en = r), (o.tn = i), (o.type = 1), o;
    }
    return (
      t(n, e),
      (n.prototype.Bt = function (t, e) {
        if (
          (this.$t(t),
          Wo(
            null == e.transformResults,
            "Transform results received by PatchMutation."
          ),
          !this.tn.Xt(t))
        )
          return new zi(this.key, e.version);
        var n = this.rn(t);
        return new Bi(this.key, e.version, n, { hasCommittedMutations: !0 });
      }),
      (n.prototype.qt = function (t, e, n) {
        if ((this.$t(t), !this.tn.Xt(t))) return t;
        var r = Pi.Zt(t),
          i = this.rn(t);
        return new Bi(this.key, r, i, { nn: !0 });
      }),
      (n.prototype.in = function (t) {
        return null;
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          this.key.isEqual(t.key) &&
          this.en.isEqual(t.en) &&
          this.tn.isEqual(t.tn)
        );
      }),
      (n.prototype.rn = function (t) {
        var e;
        return (e = t instanceof Bi ? t.data() : qi.EMPTY), this.un(e);
      }),
      (n.prototype.un = function (t) {
        var e = this,
          n = t.sn();
        return (
          this.en.fields.forEach(function (t) {
            if (!t.M()) {
              var r = e.data.field(t);
              null !== r ? n.set(t, r) : n.delete(t);
            }
          }),
          n.on()
        );
      }),
      n
    );
  })(Pi),
  _i = (function (e) {
    function n(t, n) {
      var r = e.call(this) || this;
      return (
        (r.key = t),
        (r.fieldTransforms = n),
        (r.type = 2),
        (r.tn = xi.exists(!0)),
        r
      );
    }
    return (
      t(n, e),
      (n.prototype.Bt = function (t, e) {
        if (
          (this.$t(t),
          Wo(
            null != e.transformResults,
            "Transform results missing for TransformMutation."
          ),
          !this.tn.Xt(t))
        )
          return new zi(this.key, e.version);
        var n = this.hn(t),
          r = this.cn(t, e.transformResults),
          i = e.version,
          o = this.an(n.data(), r);
        return new Bi(this.key, i, o, { hasCommittedMutations: !0 });
      }),
      (n.prototype.qt = function (t, e, n) {
        if ((this.$t(t), !this.tn.Xt(t))) return t;
        var r = this.hn(t),
          i = this.fn(n, t, e),
          o = this.an(r.data(), i);
        return new Bi(this.key, r.version, o, { nn: !0 });
      }),
      (n.prototype.in = function (t) {
        for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
          var i = r[n],
            o = t instanceof Bi ? t.field(i.field) : void 0,
            s = i.transform.Qt(o || null);
          null != s &&
            (e = null == e ? qi.ln().set(i.field, s) : e.set(i.field, s));
        }
        return e ? e.on() : null;
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          this.key.isEqual(t.key) &&
          Xo(this.fieldTransforms, t.fieldTransforms, function (t, e) {
            return t.isEqual(e);
          }) &&
          this.tn.isEqual(t.tn)
        );
      }),
      (n.prototype.hn = function (t) {
        return (
          Wo(t instanceof Bi, "Unknown MaybeDocument type " + t),
          Wo(
            t.key.isEqual(this.key),
            "Can only transform a document with the same key"
          ),
          t
        );
      }),
      (n.prototype.cn = function (t, e) {
        var n = [];
        Wo(
          this.fieldTransforms.length === e.length,
          "server transform result count (" +
            e.length +
            ") should match field transform count (" +
            this.fieldTransforms.length +
            ")"
        );
        for (var r = 0; r < e.length; r++) {
          var i = this.fieldTransforms[r],
            o = i.transform,
            s = null;
          t instanceof Bi && (s = t.field(i.field)), n.push(o.Bt(s, e[r]));
        }
        return n;
      }),
      (n.prototype.fn = function (t, e, n) {
        for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
          var s = o[i],
            u = s.transform,
            a = null;
          e instanceof Bi && (a = e.field(s.field)),
            null === a && n instanceof Bi && (a = n.field(s.field)),
            r.push(u.qt(a, t));
        }
        return r;
      }),
      (n.prototype.an = function (t, e) {
        Wo(
          e.length === this.fieldTransforms.length,
          "TransformResults length mismatch."
        );
        for (var n = t.sn(), r = 0; r < this.fieldTransforms.length; r++) {
          var i = this.fieldTransforms[r].field;
          n.set(i, e[r]);
        }
        return n.on();
      }),
      n
    );
  })(Pi),
  Vi = (function (e) {
    function n(t, n) {
      var r = e.call(this) || this;
      return (r.key = t), (r.tn = n), (r.type = 3), r;
    }
    return (
      t(n, e),
      (n.prototype.Bt = function (t, e) {
        return (
          this.$t(t),
          Wo(
            null == e.transformResults,
            "Transform results received by DeleteMutation."
          ),
          new Gi(this.key, e.version, { hasCommittedMutations: !0 })
        );
      }),
      (n.prototype.qt = function (t, e, n) {
        return (
          this.$t(t),
          this.tn.Xt(t)
            ? (t &&
                Wo(
                  t.key.isEqual(this.key),
                  "Can only apply mutation to document with same key"
                ),
              new Gi(this.key, Vr.V()))
            : t
        );
      }),
      (n.prototype.in = function (t) {
        return null;
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n && this.key.isEqual(t.key) && this.tn.isEqual(t.tn)
        );
      }),
      n
    );
  })(Pi),
  Ui = (function (e) {
    function n(t, n) {
      var r = e.call(this) || this;
      return (r.key = t), (r.tn = n), (r.type = 4), r;
    }
    return (
      t(n, e),
      (n.prototype.Bt = function (t, e) {
        Ko("VerifyMutation should only be used in Transactions.");
      }),
      (n.prototype.qt = function (t, e, n) {
        Ko("VerifyMutation should only be used in Transactions.");
      }),
      (n.prototype.in = function (t) {
        Ko("VerifyMutation should only be used in Transactions.");
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n && this.key.isEqual(t.key) && this.tn.isEqual(t.tn)
        );
      }),
      n
    );
  })(Pi),
  qi = (function () {
    function t(t) {
      (this.proto = t),
        Wo(
          !ni(t),
          "ServerTimestamps should be converted to ServerTimestampValue"
        );
    }
    return (
      (t.ln = function () {
        return t.EMPTY.sn();
      }),
      (t.prototype.field = function (t) {
        if (t.M()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
          if (!e.mapValue.fields) return null;
          if (!Ei((e = e.mapValue.fields[t.get(n)]))) return null;
        }
        return (e = (e.mapValue.fields || {})[t.B()]) || null;
      }),
      (t.prototype.en = function () {
        return this.dn(this.proto.mapValue);
      }),
      (t.prototype.dn = function (t) {
        var e = this,
          n = new Kr(jr.F);
        return (
          Jr(t.fields || {}, function (t, r) {
            var i = new jr([t]);
            if (10 === oi(r)) {
              var o = e.dn(r.mapValue).fields;
              o.M()
                ? (n = n.add(i))
                : o.forEach(function (t) {
                    n = n.add(i.child(t));
                  });
            } else n = n.add(i);
          }),
          Oi.Kt(n)
        );
      }),
      (t.prototype.isEqual = function (t) {
        return si(this.proto, t.proto);
      }),
      (t.prototype.sn = function () {
        return new Fi(this);
      }),
      (t.EMPTY = new t({ mapValue: {} })),
      t
    );
  })(),
  Fi = (function () {
    function t(t) {
      (this.vn = t), (this.wn = new Map());
    }
    return (
      (t.prototype.set = function (t, e) {
        return (
          Wo(!t.M(), "Cannot set field for empty path on ObjectValue"),
          this.mn(t, e),
          this
        );
      }),
      (t.prototype.delete = function (t) {
        return (
          Wo(!t.M(), "Cannot delete field for empty path on ObjectValue"),
          this.mn(t, null),
          this
        );
      }),
      (t.prototype.mn = function (t, e) {
        for (var n = this.wn, r = 0; r < t.length - 1; ++r) {
          var i = t.get(r),
            o = n.get(i);
          o instanceof Map
            ? (n = o)
            : o && 10 === oi(o)
            ? ((o = new Map(Object.entries(o.mapValue.fields || {}))),
              n.set(i, o),
              (n = o))
            : ((o = new Map()), n.set(i, o), (n = o));
        }
        n.set(t.B(), e);
      }),
      (t.prototype.on = function () {
        var t = this.pn(jr.Y, this.wn);
        return null != t ? new qi(t) : this.vn;
      }),
      (t.prototype.pn = function (t, e) {
        var n = this,
          r = !1,
          i = this.vn.field(t),
          o = Ei(i) ? s({}, i.mapValue.fields) : {};
        return (
          e.forEach(function (e, i) {
            if (e instanceof Map) {
              var s = n.pn(t.child(i), e);
              null != s && ((o[i] = s), (r = !0));
            } else null !== e ? ((o[i] = e), (r = !0)) : o.hasOwnProperty(i) && (delete o[i], (r = !0));
          }),
          r ? { mapValue: { fields: o } } : null
        );
      }),
      t
    );
  })(),
  ji = (function () {
    function t(t, e) {
      (this.key = t), (this.version = e);
    }
    return (
      (t.bn = function (t, e) {
        return Br.F(t.key, e.key);
      }),
      t
    );
  })(),
  Bi = (function (e) {
    function n(t, n, r, i) {
      var o = e.call(this, t, n) || this;
      return (
        (o.gn = r),
        (o.nn = !!i.nn),
        (o.hasCommittedMutations = !!i.hasCommittedMutations),
        o
      );
    }
    return (
      t(n, e),
      (n.prototype.field = function (t) {
        return this.gn.field(t);
      }),
      (n.prototype.data = function () {
        return this.gn;
      }),
      (n.prototype.yn = function () {
        return this.gn.proto;
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          this.key.isEqual(t.key) &&
          this.version.isEqual(t.version) &&
          this.nn === t.nn &&
          this.hasCommittedMutations === t.hasCommittedMutations &&
          this.gn.isEqual(t.gn)
        );
      }),
      (n.prototype.toString = function () {
        return (
          "Document(" +
          this.key +
          ", " +
          this.version +
          ", " +
          this.gn.toString() +
          ", {hasLocalMutations: " +
          this.nn +
          "}), {hasCommittedMutations: " +
          this.hasCommittedMutations +
          "})"
        );
      }),
      Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return this.nn || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (n._n = function (t, e, n) {
        var r = e.field(t),
          i = n.field(t);
        return null !== r && null !== i
          ? ai(r, i)
          : Ko("Trying to compare documents on fields that don't exist");
      }),
      n
    );
  })(ji),
  Gi = (function (e) {
    function n(t, n, r) {
      var i = e.call(this, t, n) || this;
      return (i.hasCommittedMutations = !(!r || !r.hasCommittedMutations)), i;
    }
    return (
      t(n, e),
      (n.prototype.toString = function () {
        return "NoDocument(" + this.key + ", " + this.version + ")";
      }),
      Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          t.hasCommittedMutations === this.hasCommittedMutations &&
          t.version.isEqual(this.version) &&
          t.key.isEqual(this.key)
        );
      }),
      n
    );
  })(ji),
  zi = (function (e) {
    function n() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      t(n, e),
      (n.prototype.toString = function () {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
      }),
      Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return !0;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          t.version.isEqual(this.version) &&
          t.key.isEqual(this.key)
        );
      }),
      n
    );
  })(ji),
  Qi = (function () {
    function t(t, e, n, r, i, o, s) {
      void 0 === e && (e = null),
        void 0 === n && (n = []),
        void 0 === r && (r = []),
        void 0 === i && (i = null),
        void 0 === o && (o = null),
        void 0 === s && (s = null),
        (this.path = t),
        (this.collectionGroup = e),
        (this.orderBy = n),
        (this.filters = r),
        (this.limit = i),
        (this.startAt = o),
        (this.endAt = s),
        (this.In = null);
    }
    return (
      (t.prototype.canonicalId = function () {
        if (null === this.In) {
          var t = this.path.J();
          null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup),
            (t += "|f:"),
            (t += this.filters
              .map(function (t) {
                return t.canonicalId();
              })
              .join(",")),
            (t += "|ob:"),
            (t += this.orderBy
              .map(function (t) {
                return t.canonicalId();
              })
              .join(",")),
            Zr(this.limit) || ((t += "|l:"), (t += this.limit)),
            this.startAt && ((t += "|lb:"), (t += this.startAt.canonicalId())),
            this.endAt && ((t += "|ub:"), (t += this.endAt.canonicalId())),
            (this.In = t);
        }
        return this.In;
      }),
      (t.prototype.toString = function () {
        var t = this.path.J();
        return (
          null !== this.collectionGroup &&
            (t += " collectionGroup=" + this.collectionGroup),
          this.filters.length > 0 &&
            (t += ", filters: [" + this.filters.join(", ") + "]"),
          Zr(this.limit) || (t += ", limit: " + this.limit),
          this.orderBy.length > 0 &&
            (t += ", orderBy: [" + this.orderBy.join(", ") + "]"),
          this.startAt && (t += ", startAt: " + this.startAt.canonicalId()),
          this.endAt && (t += ", endAt: " + this.endAt.canonicalId()),
          "Target(" + t + ")"
        );
      }),
      (t.prototype.isEqual = function (t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;
        for (var e = 0; e < this.orderBy.length; e++)
          if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
        if (this.filters.length !== t.filters.length) return !1;
        for (e = 0; e < this.filters.length; e++)
          if (!this.filters[e].isEqual(t.filters[e])) return !1;
        return (
          this.collectionGroup === t.collectionGroup &&
          !!this.path.isEqual(t.path) &&
          !!(null !== this.startAt
            ? this.startAt.isEqual(t.startAt)
            : null === t.startAt) &&
          (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)
        );
      }),
      (t.prototype.Tn = function () {
        return (
          Br.nt(this.path) &&
          null === this.collectionGroup &&
          0 === this.filters.length
        );
      }),
      t
    );
  })(),
  Yi = (function () {
    function t(t, e, n, r, i, o, s, u) {
      void 0 === e && (e = null),
        void 0 === n && (n = []),
        void 0 === r && (r = []),
        void 0 === i && (i = null),
        void 0 === o && (o = "F"),
        void 0 === s && (s = null),
        void 0 === u && (u = null),
        (this.path = t),
        (this.collectionGroup = e),
        (this.En = n),
        (this.filters = r),
        (this.limit = i),
        (this.Dn = o),
        (this.startAt = s),
        (this.endAt = u),
        (this.Rn = null),
        (this.Sn = null),
        this.startAt && this.An(this.startAt),
        this.endAt && this.An(this.endAt);
    }
    return (
      (t.Cn = function (e) {
        return new t(e);
      }),
      Object.defineProperty(t.prototype, "orderBy", {
        get: function () {
          if (null === this.Rn) {
            var t = this.Pn(),
              e = this.Vn();
            if (null !== t && null === e)
              t.$() ? (this.Rn = [ro]) : (this.Rn = [new no(t), ro]);
            else {
              Wo(
                null === t || (null !== e && t.isEqual(e)),
                "First orderBy should match inequality field."
              ),
                (this.Rn = []);
              for (var n = !1, r = 0, i = this.En; r < i.length; r++) {
                var o = i[r];
                this.Rn.push(o), o.field.$() && (n = !0);
              }
              if (!n) {
                var s =
                  this.En.length > 0
                    ? this.En[this.En.length - 1].dir
                    : to.ASCENDING;
                this.Rn.push(s === to.ASCENDING ? ro : io);
              }
            }
          }
          return this.Rn;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.kn = function (e) {
        Wo(
          null == this.Pn() ||
            !(e instanceof Wi) ||
            !e.Nn() ||
            e.field.isEqual(this.Pn()),
          "Query must only have one inequality field."
        ),
          Wo(!this.Tn(), "No filtering allowed for document query");
        var n = this.filters.concat([e]);
        return new t(
          this.path,
          this.collectionGroup,
          this.En.slice(),
          n,
          this.limit,
          this.Dn,
          this.startAt,
          this.endAt
        );
      }),
      (t.prototype.On = function (e) {
        Wo(!this.startAt && !this.endAt, "Bounds must be set after orderBy");
        var n = this.En.concat([e]);
        return new t(
          this.path,
          this.collectionGroup,
          n,
          this.filters.slice(),
          this.limit,
          this.Dn,
          this.startAt,
          this.endAt
        );
      }),
      (t.prototype.Fn = function (e) {
        return new t(
          this.path,
          this.collectionGroup,
          this.En.slice(),
          this.filters.slice(),
          e,
          "F",
          this.startAt,
          this.endAt
        );
      }),
      (t.prototype.Un = function (e) {
        return new t(
          this.path,
          this.collectionGroup,
          this.En.slice(),
          this.filters.slice(),
          e,
          "L",
          this.startAt,
          this.endAt
        );
      }),
      (t.prototype.jn = function (e) {
        return new t(
          this.path,
          this.collectionGroup,
          this.En.slice(),
          this.filters.slice(),
          this.limit,
          this.Dn,
          e,
          this.endAt
        );
      }),
      (t.prototype.xn = function (e) {
        return new t(
          this.path,
          this.collectionGroup,
          this.En.slice(),
          this.filters.slice(),
          this.limit,
          this.Dn,
          this.startAt,
          e
        );
      }),
      (t.prototype.Ln = function (e) {
        return new t(
          e,
          null,
          this.En.slice(),
          this.filters.slice(),
          this.limit,
          this.Dn,
          this.startAt,
          this.endAt
        );
      }),
      (t.prototype.Mn = function () {
        return (
          0 === this.filters.length &&
          null === this.limit &&
          null == this.startAt &&
          null == this.endAt &&
          (0 === this.En.length ||
            (1 === this.En.length && this.En[0].field.$()))
        );
      }),
      (t.prototype.canonicalId = function () {
        return this.qn().canonicalId() + "|lt:" + this.Dn;
      }),
      (t.prototype.toString = function () {
        return (
          "Query(target=" +
          this.qn().toString() +
          "; limitType=" +
          this.Dn +
          ")"
        );
      }),
      (t.prototype.isEqual = function (t) {
        return this.qn().isEqual(t.qn()) && this.Dn === t.Dn;
      }),
      (t.prototype.Bn = function (t, e) {
        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
          var o = i[r],
            s = o.compare(t, e);
          if (0 !== s) return s;
          n = n || o.field.$();
        }
        return Wo(n, "orderBy used that doesn't compare on key field"), 0;
      }),
      (t.prototype.matches = function (t) {
        return this.Qn(t) && this.Gn(t) && this.Wn(t) && this.zn(t);
      }),
      (t.prototype.Kn = function () {
        return !Zr(this.limit) && "F" === this.Dn;
      }),
      (t.prototype.Jn = function () {
        return !Zr(this.limit) && "L" === this.Dn;
      }),
      (t.prototype.Vn = function () {
        return this.En.length > 0 ? this.En[0].field : null;
      }),
      (t.prototype.Pn = function () {
        for (var t = 0, e = this.filters; t < e.length; t++) {
          var n = e[t];
          if (n instanceof Wi && n.Nn()) return n.field;
        }
        return null;
      }),
      (t.prototype.Hn = function (t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
          var r = n[e];
          if (r instanceof Wi && t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
      }),
      (t.prototype.Tn = function () {
        return this.qn().Tn();
      }),
      (t.prototype.Yn = function () {
        return null !== this.collectionGroup;
      }),
      (t.prototype.qn = function () {
        if (!this.Sn)
          if ("F" === this.Dn)
            this.Sn = new Qi(
              this.path,
              this.collectionGroup,
              this.orderBy,
              this.filters,
              this.limit,
              this.startAt,
              this.endAt
            );
          else {
            for (var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
              var r = n[e],
                i = r.dir === to.DESCENDING ? to.ASCENDING : to.DESCENDING;
              t.push(new no(r.field, i));
            }
            var o = this.endAt
                ? new eo(this.endAt.position, !this.endAt.before)
                : null,
              s = this.startAt
                ? new eo(this.startAt.position, !this.startAt.before)
                : null;
            this.Sn = new Qi(
              this.path,
              this.collectionGroup,
              t,
              this.filters,
              this.limit,
              o,
              s
            );
          }
        return this.Sn;
      }),
      (t.prototype.Qn = function (t) {
        var e = t.key.path;
        return null !== this.collectionGroup
          ? t.key.et(this.collectionGroup) && this.path.G(e)
          : Br.nt(this.path)
          ? this.path.isEqual(e)
          : this.path.W(e);
      }),
      (t.prototype.Gn = function (t) {
        for (var e = 0, n = this.En; e < n.length; e++) {
          var r = n[e];
          if (!r.field.$() && null === t.field(r.field)) return !1;
        }
        return !0;
      }),
      (t.prototype.Wn = function (t) {
        for (var e = 0, n = this.filters; e < n.length; e++)
          if (!n[e].matches(t)) return !1;
        return !0;
      }),
      (t.prototype.zn = function (t) {
        return !(
          (this.startAt && !this.startAt.Xn(this.orderBy, t)) ||
          (this.endAt && this.endAt.Xn(this.orderBy, t))
        );
      }),
      (t.prototype.An = function (t) {
        Wo(
          t.position.length <= this.orderBy.length,
          "Bound is longer than orderBy"
        );
      }),
      t
    );
  })(),
  Ki = (function () {
    function t(t) {
      this.name = t;
    }
    return (
      (t.H = function (e) {
        switch (e) {
          case "<":
            return t.LESS_THAN;
          case "<=":
            return t.LESS_THAN_OR_EQUAL;
          case "==":
            return t.EQUAL;
          case ">=":
            return t.GREATER_THAN_OR_EQUAL;
          case ">":
            return t.GREATER_THAN;
          case "array-contains":
            return t.ARRAY_CONTAINS;
          case "in":
            return t.IN;
          case "array-contains-any":
            return t.ARRAY_CONTAINS_ANY;
          default:
            return Ko("Unknown FieldFilter operator: " + e);
        }
      }),
      (t.prototype.toString = function () {
        return this.name;
      }),
      (t.prototype.isEqual = function (t) {
        return this.name === t.name;
      }),
      (t.LESS_THAN = new t("<")),
      (t.LESS_THAN_OR_EQUAL = new t("<=")),
      (t.EQUAL = new t("==")),
      (t.GREATER_THAN = new t(">")),
      (t.GREATER_THAN_OR_EQUAL = new t(">=")),
      (t.ARRAY_CONTAINS = new t("array-contains")),
      (t.IN = new t("in")),
      (t.ARRAY_CONTAINS_ANY = new t("array-contains-any")),
      t
    );
  })(),
  Wi = (function (e) {
    function n(t, n, r) {
      var i = e.call(this) || this;
      return (i.field = t), (i.op = n), (i.value = r), i;
    }
    return (
      t(n, e),
      (n.create = function (t, e, r) {
        if (t.$())
          return e === Ki.IN
            ? (Wo(
                mi(r),
                "Comparing on key with IN, but filter value not an ArrayValue"
              ),
              Wo(
                (r.arrayValue.values || []).every(function (t) {
                  return gi(t);
                }),
                "Comparing on key with IN, but an array value was not a RefValue"
              ),
              new Ji(t, r))
            : (Wo(gi(r), "Comparing on key, but filter value not a RefValue"),
              Wo(
                e !== Ki.ARRAY_CONTAINS && e !== Ki.ARRAY_CONTAINS_ANY,
                "'" +
                  e.toString() +
                  "' queries don't make sense on document keys."
              ),
              new Hi(t, e, r));
        if (wi(r)) {
          if (e !== Ki.EQUAL)
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Invalid query. Null supports only equality comparisons."
            );
          return new n(t, e, r);
        }
        if (bi(r)) {
          if (e !== Ki.EQUAL)
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Invalid query. NaN supports only equality comparisons."
            );
          return new n(t, e, r);
        }
        return e === Ki.ARRAY_CONTAINS
          ? new Xi(t, r)
          : e === Ki.IN
          ? (Wo(mi(r), "IN filter has invalid value: " + r.toString()),
            new $i(t, r))
          : e === Ki.ARRAY_CONTAINS_ANY
          ? (Wo(
              mi(r),
              "ARRAY_CONTAINS_ANY filter has invalid value: " + r.toString()
            ),
            new Zi(t, r))
          : new n(t, e, r);
      }),
      (n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return (
          null !== e && oi(this.value) === oi(e) && this.$n(ai(e, this.value))
        );
      }),
      (n.prototype.$n = function (t) {
        switch (this.op) {
          case Ki.LESS_THAN:
            return t < 0;
          case Ki.LESS_THAN_OR_EQUAL:
            return t <= 0;
          case Ki.EQUAL:
            return 0 === t;
          case Ki.GREATER_THAN:
            return t > 0;
          case Ki.GREATER_THAN_OR_EQUAL:
            return t >= 0;
          default:
            return Ko("Unknown FieldFilter operator: " + this.op);
        }
      }),
      (n.prototype.Nn = function () {
        return (
          [
            Ki.LESS_THAN,
            Ki.LESS_THAN_OR_EQUAL,
            Ki.GREATER_THAN,
            Ki.GREATER_THAN_OR_EQUAL,
          ].indexOf(this.op) >= 0
        );
      }),
      (n.prototype.canonicalId = function () {
        return this.field.J() + this.op.toString() + ci(this.value);
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          this.op.isEqual(t.op) &&
          this.field.isEqual(t.field) &&
          si(this.value, t.value)
        );
      }),
      (n.prototype.toString = function () {
        return this.field.J() + " " + this.op + " " + ci(this.value);
      }),
      n
    );
  })(function () {}),
  Hi = (function (e) {
    function n(t, n, r) {
      var i = e.call(this, t, n, r) || this;
      return (
        Wo(gi(r), "KeyFieldFilter expects a ReferenceValue"),
        (i.key = Br.it(r.referenceValue)),
        i
      );
    }
    return (
      t(n, e),
      (n.prototype.matches = function (t) {
        var e = Br.F(t.key, this.key);
        return this.$n(e);
      }),
      n
    );
  })(Wi),
  Ji = (function (e) {
    function n(t, n) {
      var r = e.call(this, t, Ki.IN, n) || this;
      return (
        Wo(mi(n), "KeyFieldInFilter expects an ArrayValue"),
        (r.keys = (n.arrayValue.values || []).map(function (t) {
          return (
            Wo(
              gi(t),
              "Comparing on key with IN, but an array value was not a ReferenceValue"
            ),
            Br.it(t.referenceValue)
          );
        })),
        r
      );
    }
    return (
      t(n, e),
      (n.prototype.matches = function (t) {
        return this.keys.some(function (e) {
          return e.isEqual(t.key);
        });
      }),
      n
    );
  })(Wi),
  Xi = (function (e) {
    function n(t, n) {
      return e.call(this, t, Ki.ARRAY_CONTAINS, n) || this;
    }
    return (
      t(n, e),
      (n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return mi(e) && ui(e.arrayValue, this.value);
      }),
      n
    );
  })(Wi),
  $i = (function (e) {
    function n(t, n) {
      var r = e.call(this, t, Ki.IN, n) || this;
      return Wo(mi(n), "InFilter expects an ArrayValue"), r;
    }
    return (
      t(n, e),
      (n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return null !== e && ui(this.value.arrayValue, e);
      }),
      n
    );
  })(Wi),
  Zi = (function (e) {
    function n(t, n) {
      var r = e.call(this, t, Ki.ARRAY_CONTAINS_ANY, n) || this;
      return Wo(mi(n), "ArrayContainsAnyFilter expects an ArrayValue"), r;
    }
    return (
      t(n, e),
      (n.prototype.matches = function (t) {
        var e = this,
          n = t.field(this.field);
        return (
          !(!mi(n) || !n.arrayValue.values) &&
          n.arrayValue.values.some(function (t) {
            return ui(e.value.arrayValue, t);
          })
        );
      }),
      n
    );
  })(Wi),
  to = (function () {
    function t(t) {
      this.name = t;
    }
    return (
      (t.prototype.toString = function () {
        return this.name;
      }),
      (t.ASCENDING = new t("asc")),
      (t.DESCENDING = new t("desc")),
      t
    );
  })(),
  eo = (function () {
    function t(t, e) {
      (this.position = t), (this.before = e);
    }
    return (
      (t.prototype.canonicalId = function () {
        return (
          (this.before ? "b" : "a") +
          ":" +
          this.position
            .map(function (t) {
              return ci(t);
            })
            .join(",")
        );
      }),
      (t.prototype.Xn = function (t, e) {
        Wo(
          this.position.length <= t.length,
          "Bound has more components than query's orderBy"
        );
        for (var n = 0, r = 0; r < this.position.length; r++) {
          var i = t[r],
            o = this.position[r];
          if (i.field.$())
            Wo(
              gi(o),
              "Bound has a non-key value where the key path is being used."
            ),
              (n = Br.F(Br.it(o.referenceValue), e.key));
          else {
            var s = e.field(i.field);
            Wo(
              null !== s,
              "Field should exist since document matched the orderBy already."
            ),
              (n = ai(o, s));
          }
          if ((i.dir === to.DESCENDING && (n *= -1), 0 !== n)) break;
        }
        return this.before ? n <= 0 : n < 0;
      }),
      (t.prototype.isEqual = function (t) {
        if (null === t) return !1;
        if (
          this.before !== t.before ||
          this.position.length !== t.position.length
        )
          return !1;
        for (var e = 0; e < this.position.length; e++)
          if (!si(this.position[e], t.position[e])) return !1;
        return !0;
      }),
      t
    );
  })(),
  no = (function () {
    function t(t, e) {
      (this.field = t),
        void 0 === e && (e = to.ASCENDING),
        (this.dir = e),
        (this.Zn = t.$());
    }
    return (
      (t.prototype.compare = function (t, e) {
        var n = this.Zn ? Bi.bn(t, e) : Bi._n(this.field, t, e);
        switch (this.dir) {
          case to.ASCENDING:
            return n;
          case to.DESCENDING:
            return -1 * n;
          default:
            return Ko("Unknown direction: " + this.dir);
        }
      }),
      (t.prototype.canonicalId = function () {
        return this.field.J() + this.dir.toString();
      }),
      (t.prototype.toString = function () {
        return this.field.J() + " (" + this.dir + ")";
      }),
      (t.prototype.isEqual = function (t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
      }),
      t
    );
  })(),
  ro = new no(jr.Z(), to.ASCENDING),
  io = new no(jr.Z(), to.DESCENDING),
  oo = (function () {
    function t(t, e, n, r, i, o, s) {
      void 0 === i && (i = Vr.MIN),
        void 0 === o && (o = Vr.MIN),
        void 0 === s && (s = $r.Mt),
        (this.target = t),
        (this.targetId = e),
        (this.ti = n),
        (this.sequenceNumber = r),
        (this.ni = i),
        (this.lastLimboFreeSnapshotVersion = o),
        (this.resumeToken = s);
    }
    return (
      (t.prototype.ii = function (e) {
        return new t(
          this.target,
          this.targetId,
          this.ti,
          e,
          this.ni,
          this.lastLimboFreeSnapshotVersion,
          this.resumeToken
        );
      }),
      (t.prototype.ei = function (e, n) {
        return new t(
          this.target,
          this.targetId,
          this.ti,
          this.sequenceNumber,
          n,
          this.lastLimboFreeSnapshotVersion,
          e
        );
      }),
      (t.prototype.ri = function (e) {
        return new t(
          this.target,
          this.targetId,
          this.ti,
          this.sequenceNumber,
          this.ni,
          e,
          this.resumeToken
        );
      }),
      (t.prototype.isEqual = function (t) {
        return (
          this.targetId === t.targetId &&
          this.ti === t.ti &&
          this.sequenceNumber === t.sequenceNumber &&
          this.ni.isEqual(t.ni) &&
          this.lastLimboFreeSnapshotVersion.isEqual(
            t.lastLimboFreeSnapshotVersion
          ) &&
          this.resumeToken.isEqual(t.resumeToken) &&
          this.target.isEqual(t.target)
        );
      }),
      t
    );
  })(),
  so = (function () {
    function t(t) {
      this.count = t;
    }
    return (
      (t.prototype.isEqual = function (t) {
        return t && t.count === this.count;
      }),
      t
    );
  })();
function uo(t) {
  switch (t) {
    case kr.OK:
      return Ko("Treated status OK as error");
    case kr.CANCELLED:
    case kr.UNKNOWN:
    case kr.DEADLINE_EXCEEDED:
    case kr.RESOURCE_EXHAUSTED:
    case kr.INTERNAL:
    case kr.UNAVAILABLE:
    case kr.UNAUTHENTICATED:
      return !1;
    case kr.INVALID_ARGUMENT:
    case kr.NOT_FOUND:
    case kr.ALREADY_EXISTS:
    case kr.PERMISSION_DENIED:
    case kr.FAILED_PRECONDITION:
    case kr.ABORTED:
    case kr.OUT_OF_RANGE:
    case kr.UNIMPLEMENTED:
    case kr.DATA_LOSS:
      return !0;
    default:
      return Ko("Unknown status code: " + t);
  }
}
function ao(t) {
  if (void 0 === t) return Qo("GRPC error has no .code"), kr.UNKNOWN;
  switch (t) {
    case Si.OK:
      return kr.OK;
    case Si.CANCELLED:
      return kr.CANCELLED;
    case Si.UNKNOWN:
      return kr.UNKNOWN;
    case Si.DEADLINE_EXCEEDED:
      return kr.DEADLINE_EXCEEDED;
    case Si.RESOURCE_EXHAUSTED:
      return kr.RESOURCE_EXHAUSTED;
    case Si.INTERNAL:
      return kr.INTERNAL;
    case Si.UNAVAILABLE:
      return kr.UNAVAILABLE;
    case Si.UNAUTHENTICATED:
      return kr.UNAUTHENTICATED;
    case Si.INVALID_ARGUMENT:
      return kr.INVALID_ARGUMENT;
    case Si.NOT_FOUND:
      return kr.NOT_FOUND;
    case Si.ALREADY_EXISTS:
      return kr.ALREADY_EXISTS;
    case Si.PERMISSION_DENIED:
      return kr.PERMISSION_DENIED;
    case Si.FAILED_PRECONDITION:
      return kr.FAILED_PRECONDITION;
    case Si.ABORTED:
      return kr.ABORTED;
    case Si.OUT_OF_RANGE:
      return kr.OUT_OF_RANGE;
    case Si.UNIMPLEMENTED:
      return kr.UNIMPLEMENTED;
    case Si.DATA_LOSS:
      return kr.DATA_LOSS;
    default:
      return Ko("Unknown status code: " + t);
  }
}
((ki = Si || (Si = {}))[(ki.OK = 0)] = "OK"),
  (ki[(ki.CANCELLED = 1)] = "CANCELLED"),
  (ki[(ki.UNKNOWN = 2)] = "UNKNOWN"),
  (ki[(ki.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (ki[(ki.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (ki[(ki.NOT_FOUND = 5)] = "NOT_FOUND"),
  (ki[(ki.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (ki[(ki.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (ki[(ki.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (ki[(ki.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (ki[(ki.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (ki[(ki.ABORTED = 10)] = "ABORTED"),
  (ki[(ki.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (ki[(ki.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (ki[(ki.INTERNAL = 13)] = "INTERNAL"),
  (ki[(ki.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (ki[(ki.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ho = new Gr(Br.F);
function co() {
  return ho;
}
function fo() {
  return co();
}
var lo = new Gr(Br.F);
function po() {
  return lo;
}
var vo = new Gr(Br.F);
function yo() {
  return vo;
}
var mo = new Kr(Br.F);
function go() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  for (var n = mo, r = 0, i = t; r < i.length; r++) {
    var o = i[r];
    n = n.add(o);
  }
  return n;
}
var wo = new Kr(Jo);
function bo() {
  return wo;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Eo = (function () {
    function t(t) {
      (this.F = t
        ? function (e, n) {
            return t(e, n) || Br.F(e.key, n.key);
          }
        : function (t, e) {
            return Br.F(t.key, e.key);
          }),
        (this.ui = po()),
        (this.si = new Gr(this.F));
    }
    return (
      (t.oi = function (e) {
        return new t(e.F);
      }),
      (t.prototype.has = function (t) {
        return null != this.ui.get(t);
      }),
      (t.prototype.get = function (t) {
        return this.ui.get(t);
      }),
      (t.prototype.first = function () {
        return this.si.ot();
      }),
      (t.prototype.last = function () {
        return this.si.ht();
      }),
      (t.prototype.M = function () {
        return this.si.M();
      }),
      (t.prototype.indexOf = function (t) {
        var e = this.ui.get(t);
        return e ? this.si.indexOf(e) : -1;
      }),
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.si.size;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.forEach = function (t) {
        this.si.ct(function (e, n) {
          return t(e), !1;
        });
      }),
      (t.prototype.add = function (t) {
        var e = this.delete(t.key);
        return e.copy(e.ui.ut(t.key, t), e.si.ut(t, null));
      }),
      (t.prototype.delete = function (t) {
        var e = this.get(t);
        return e ? this.copy(this.ui.remove(t), this.si.remove(e)) : this;
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.si.ft(), r = e.si.ft(); n.gt(); ) {
          var i = n.bt().key,
            o = r.bt().key;
          if (!i.isEqual(o)) return !1;
        }
        return !0;
      }),
      (t.prototype.toString = function () {
        var t = [];
        return (
          this.forEach(function (e) {
            t.push(e.toString());
          }),
          0 === t.length
            ? "DocumentSet ()"
            : "DocumentSet (\n  " + t.join("  \n") + "\n)"
        );
      }),
      (t.prototype.copy = function (e, n) {
        var r = new t();
        return (r.F = this.F), (r.ui = e), (r.si = n), r;
      }),
      t
    );
  })(),
  Io = (function () {
    function t() {
      this.hi = new Gr(Br.F);
    }
    return (
      (t.prototype.track = function (t) {
        var e = t.doc.key,
          n = this.hi.get(e);
        n
          ? 0 !== t.type && 3 === n.type
            ? (this.hi = this.hi.ut(e, t))
            : 3 === t.type && 1 !== n.type
            ? (this.hi = this.hi.ut(e, { type: n.type, doc: t.doc }))
            : 2 === t.type && 2 === n.type
            ? (this.hi = this.hi.ut(e, { type: 2, doc: t.doc }))
            : 2 === t.type && 0 === n.type
            ? (this.hi = this.hi.ut(e, { type: 0, doc: t.doc }))
            : 1 === t.type && 0 === n.type
            ? (this.hi = this.hi.remove(e))
            : 1 === t.type && 2 === n.type
            ? (this.hi = this.hi.ut(e, { type: 1, doc: n.doc }))
            : 0 === t.type && 1 === n.type
            ? (this.hi = this.hi.ut(e, { type: 2, doc: t.doc }))
            : Ko(
                "unsupported combination of changes: " +
                  JSON.stringify(t) +
                  " after " +
                  JSON.stringify(n)
              )
          : (this.hi = this.hi.ut(e, t));
      }),
      (t.prototype.ci = function () {
        var t = [];
        return (
          this.hi.ct(function (e, n) {
            t.push(n);
          }),
          t
        );
      }),
      t
    );
  })(),
  To = (function () {
    function t(t, e, n, r, i, o, s, u) {
      (this.query = t),
        (this.docs = e),
        (this.ai = n),
        (this.docChanges = r),
        (this.fi = i),
        (this.fromCache = o),
        (this.li = s),
        (this.di = u);
    }
    return (
      (t.vi = function (e, n, r, i) {
        var o = [];
        return (
          n.forEach(function (t) {
            o.push({ type: 0, doc: t });
          }),
          new t(e, n, Eo.oi(n), o, r, i, !0, !1)
        );
      }),
      Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function () {
          return !this.fi.M();
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (t) {
        if (
          !(
            this.fromCache === t.fromCache &&
            this.li === t.li &&
            this.fi.isEqual(t.fi) &&
            this.query.isEqual(t.query) &&
            this.docs.isEqual(t.docs) &&
            this.ai.isEqual(t.ai)
          )
        )
          return !1;
        var e = this.docChanges,
          n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++)
          if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
      }),
      t
    );
  })(),
  No = (function () {
    function t(t, e, n, r, i) {
      (this.ni = t), (this.wi = e), (this.mi = n), (this.pi = r), (this.bi = i);
    }
    return (
      (t.gi = function (e, n) {
        var r = new Map();
        return r.set(e, Ao.yi(e, n)), new t(Vr.MIN, r, bo(), co(), go());
      }),
      t
    );
  })(),
  Ao = (function () {
    function t(t, e, n, r, i) {
      (this.resumeToken = t),
        (this._i = e),
        (this.Ii = n),
        (this.Ti = r),
        (this.Ei = i);
    }
    return (
      (t.yi = function (e, n) {
        return new t($r.Mt, n, go(), go(), go());
      }),
      t
    );
  })(),
  Do = function (t, e, n, r) {
    (this.Di = t), (this.removedTargetIds = e), (this.key = n), (this.Ri = r);
  },
  So = function (t, e) {
    (this.targetId = t), (this.Si = e);
  },
  ko = function (t, e, n, r) {
    void 0 === n && (n = $r.Mt),
      void 0 === r && (r = null),
      (this.state = t),
      (this.targetIds = e),
      (this.resumeToken = n),
      (this.cause = r);
  },
  Oo = (function () {
    function t() {
      (this.Ai = 0),
        (this.Ci = xo()),
        (this.Pi = $r.Mt),
        (this.Vi = !1),
        (this.ki = !0);
    }
    return (
      Object.defineProperty(t.prototype, "_i", {
        get: function () {
          return this.Vi;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "resumeToken", {
        get: function () {
          return this.Pi;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "Ni", {
        get: function () {
          return 0 !== this.Ai;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "Oi", {
        get: function () {
          return this.ki;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.Fi = function (t) {
        t.Lt() > 0 && ((this.ki = !0), (this.Pi = t));
      }),
      (t.prototype.Ui = function () {
        var t = go(),
          e = go(),
          n = go();
        return (
          this.Ci.forEach(function (r, i) {
            switch (i) {
              case 0:
                t = t.add(r);
                break;
              case 2:
                e = e.add(r);
                break;
              case 1:
                n = n.add(r);
                break;
              default:
                Ko("Encountered invalid change type: " + i);
            }
          }),
          new Ao(this.Pi, this.Vi, t, e, n)
        );
      }),
      (t.prototype.ji = function () {
        (this.ki = !1), (this.Ci = xo());
      }),
      (t.prototype.xi = function (t, e) {
        (this.ki = !0), (this.Ci = this.Ci.ut(t, e));
      }),
      (t.prototype.Li = function (t) {
        (this.ki = !0), (this.Ci = this.Ci.remove(t));
      }),
      (t.prototype.Mi = function () {
        this.Ai += 1;
      }),
      (t.prototype.qi = function () {
        this.Ai -= 1;
      }),
      (t.prototype.Bi = function () {
        (this.ki = !0), (this.Vi = !0);
      }),
      t
    );
  })(),
  Co = (function () {
    function t(t) {
      (this.Qi = t),
        (this.Gi = new Map()),
        (this.Wi = co()),
        (this.zi = Ro()),
        (this.Ki = new Kr(Jo));
    }
    return (
      (t.prototype.Ji = function (t) {
        for (var e = 0, n = t.Di; e < n.length; e++) {
          var r = n[e];
          t.Ri instanceof Bi
            ? this.Hi(r, t.Ri)
            : t.Ri instanceof Gi && this.Yi(r, t.key, t.Ri);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
          (r = o[i]), this.Yi(r, t.key, t.Ri);
      }),
      (t.prototype.Xi = function (t) {
        var e = this;
        this.$i(t, function (n) {
          var r = e.Zi(n);
          switch (t.state) {
            case 0:
              e.te(n) && r.Fi(t.resumeToken);
              break;
            case 1:
              r.qi(), r.Ni || r.ji(), r.Fi(t.resumeToken);
              break;
            case 2:
              r.qi(),
                r.Ni || e.removeTarget(n),
                Wo(
                  !t.cause,
                  "WatchChangeAggregator does not handle errored targets"
                );
              break;
            case 3:
              e.te(n) && (r.Bi(), r.Fi(t.resumeToken));
              break;
            case 4:
              e.te(n) && (e.ne(n), r.Fi(t.resumeToken));
              break;
            default:
              Ko("Unknown target watch change state: " + t.state);
          }
        });
      }),
      (t.prototype.$i = function (t, e) {
        t.targetIds.length > 0
          ? t.targetIds.forEach(e)
          : this.Gi.forEach(function (t, n) {
              return e(n);
            });
      }),
      (t.prototype.ie = function (t) {
        var e = t.targetId,
          n = t.Si.count,
          r = this.ee(e);
        if (r) {
          var i = r.target;
          if (i.Tn())
            if (0 === n) {
              var o = new Br(i.path);
              this.Yi(e, o, new Gi(o, Vr.V()));
            } else
              Wo(1 === n, "Single document existence filter with count: " + n);
          else this.re(e) !== n && (this.ne(e), (this.Ki = this.Ki.add(e)));
        }
      }),
      (t.prototype.ue = function (t) {
        var e = this,
          n = new Map();
        this.Gi.forEach(function (r, i) {
          var o = e.ee(i);
          if (o) {
            if (r._i && o.target.Tn()) {
              var s = new Br(o.target.path);
              null !== e.Wi.get(s) || e.se(i, s) || e.Yi(i, s, new Gi(s, t));
            }
            r.Oi && (n.set(i, r.Ui()), r.ji());
          }
        });
        var r = go();
        this.zi.forEach(function (t, n) {
          var i = !0;
          n.Nt(function (t) {
            var n = e.ee(t);
            return !n || 2 === n.ti || ((i = !1), !1);
          }),
            i && (r = r.add(t));
        });
        var i = new No(t, n, this.Ki, this.Wi, r);
        return (this.Wi = co()), (this.zi = Ro()), (this.Ki = new Kr(Jo)), i;
      }),
      (t.prototype.Hi = function (t, e) {
        if (this.te(t)) {
          var n = this.se(t, e.key) ? 2 : 0;
          this.Zi(t).xi(e.key, n),
            (this.Wi = this.Wi.ut(e.key, e)),
            (this.zi = this.zi.ut(e.key, this.oe(e.key).add(t)));
        }
      }),
      (t.prototype.Yi = function (t, e, n) {
        if (this.te(t)) {
          var r = this.Zi(t);
          this.se(t, e) ? r.xi(e, 1) : r.Li(e),
            (this.zi = this.zi.ut(e, this.oe(e).delete(t))),
            n && (this.Wi = this.Wi.ut(e, n));
        }
      }),
      (t.prototype.removeTarget = function (t) {
        this.Gi.delete(t);
      }),
      (t.prototype.re = function (t) {
        var e = this.Zi(t).Ui();
        return this.Qi.he(t).size + e.Ii.size - e.Ei.size;
      }),
      (t.prototype.Mi = function (t) {
        this.Zi(t).Mi();
      }),
      (t.prototype.Zi = function (t) {
        var e = this.Gi.get(t);
        return e || ((e = new Oo()), this.Gi.set(t, e)), e;
      }),
      (t.prototype.oe = function (t) {
        var e = this.zi.get(t);
        return e || ((e = new Kr(Jo)), (this.zi = this.zi.ut(t, e))), e;
      }),
      (t.prototype.te = function (t) {
        var e = null !== this.ee(t);
        return (
          e || zo("WatchChangeAggregator", "Detected inactive target", t), e
        );
      }),
      (t.prototype.ee = function (t) {
        var e = this.Gi.get(t);
        return e && e.Ni ? null : this.Qi.ce(t);
      }),
      (t.prototype.ne = function (t) {
        var e = this;
        Wo(!this.Gi.get(t).Ni, "Should only reset active targets"),
          this.Gi.set(t, new Oo()),
          this.Qi.he(t).forEach(function (n) {
            e.Yi(t, n, null);
          });
      }),
      (t.prototype.se = function (t, e) {
        return this.Qi.he(t).has(e);
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ro() {
  return new Gr(Br.F);
}
function xo() {
  return new Gr(Br.F);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Po,
  Mo,
  Lo =
    (((Po = {})[to.ASCENDING.name] = "ASCENDING"),
    (Po[to.DESCENDING.name] = "DESCENDING"),
    Po),
  _o =
    (((Mo = {})[Ki.LESS_THAN.name] = "LESS_THAN"),
    (Mo[Ki.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL"),
    (Mo[Ki.GREATER_THAN.name] = "GREATER_THAN"),
    (Mo[Ki.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL"),
    (Mo[Ki.EQUAL.name] = "EQUAL"),
    (Mo[Ki.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS"),
    (Mo[Ki.IN.name] = "IN"),
    (Mo[Ki.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY"),
    Mo);
function Vo(t, e) {
  Wo(!Zr(t), e + " is missing");
}
var Uo = (function () {
  function t(t, e) {
    (this.ae = t), (this.options = e);
  }
  return (
    (t.prototype.fe = function (t) {
      var e = void 0 === t.code ? kr.UNKNOWN : ao(t.code);
      return new Or(e, t.message || "");
    }),
    (t.prototype.le = function (t) {
      return this.options.de || Zr(t) ? t : { value: t };
    }),
    (t.prototype.ve = function (t) {
      var e;
      return Zr((e = "object" == typeof t ? t.value : t)) ? null : e;
    }),
    (t.prototype.Wt = function (t) {
      return { integerValue: "" + t };
    }),
    (t.prototype.zt = function (t) {
      if (this.options.de) {
        if (isNaN(t)) return { doubleValue: "NaN" };
        if (t === 1 / 0) return { doubleValue: "Infinity" };
        if (t === -1 / 0) return { doubleValue: "-Infinity" };
      }
      return { doubleValue: ti(t) ? "-0" : t };
    }),
    (t.prototype.we = function (t) {
      return ei(t) ? this.Wt(t) : this.zt(t);
    }),
    (t.prototype.O = function (t) {
      return this.options.de
        ? new Date(1e3 * t.seconds)
            .toISOString()
            .replace(/\.\d*/, "")
            .replace("Z", "") +
            "." +
            ("000000000" + t.nanoseconds).slice(-9) +
            "Z"
        : { seconds: "" + t.seconds, nanos: t.nanoseconds };
    }),
    (t.prototype.P = function (t) {
      var e = fi(t);
      return new _r(e.seconds, e.nanos);
    }),
    (t.prototype.me = function (t) {
      return this.options.de ? t.toBase64() : t.toUint8Array();
    }),
    (t.prototype.pe = function (t) {
      return this.options.de
        ? (Wo(
            void 0 === t || "string" == typeof t,
            "value must be undefined or a string when using proto3 Json"
          ),
          $r.fromBase64String(t || ""))
        : (Wo(
            void 0 === t || t instanceof Uint8Array,
            "value must be undefined or Uint8Array"
          ),
          $r.fromUint8Array(t || new Uint8Array()));
    }),
    (t.prototype.toVersion = function (t) {
      return this.O(t.O());
    }),
    (t.prototype.fromVersion = function (t) {
      return (
        Wo(!!t, "Trying to deserialize version that isn't set"), Vr.P(this.P(t))
      );
    }),
    (t.prototype.be = function (t, e) {
      return this.ge(e || this.ae)
        .child("documents")
        .child(t)
        .J();
    }),
    (t.prototype.ye = function (t) {
      var e = qr.H(t);
      return Wo(qo(e), "Tried to deserialize invalid key " + e.toString()), e;
    }),
    (t.prototype._e = function (t) {
      return this.be(t.path);
    }),
    (t.prototype.it = function (t) {
      var e = this.ye(t);
      return (
        Wo(
          e.get(1) === this.ae.projectId,
          "Tried to deserialize key from different project: " +
            e.get(1) +
            " vs " +
            this.ae.projectId
        ),
        Wo(
          (!e.get(3) && !this.ae.database) || e.get(3) === this.ae.database,
          "Tried to deserialize key from different database: " +
            e.get(3) +
            " vs " +
            this.ae.database
        ),
        new Br(this.Ie(e))
      );
    }),
    (t.prototype.Te = function (t) {
      return this.be(t);
    }),
    (t.prototype.Ee = function (t) {
      var e = this.ye(t);
      return 4 === e.length ? qr.Y : this.Ie(e);
    }),
    Object.defineProperty(t.prototype, "De", {
      get: function () {
        return new qr([
          "projects",
          this.ae.projectId,
          "databases",
          this.ae.database,
        ]).J();
      },
      enumerable: !0,
      configurable: !0,
    }),
    (t.prototype.ge = function (t) {
      return new qr(["projects", t.projectId, "databases", t.database]);
    }),
    (t.prototype.Ie = function (t) {
      return (
        Wo(
          t.length > 4 && "documents" === t.get(4),
          "tried to deserialize invalid key " + t.toString()
        ),
        t.j(5)
      );
    }),
    (t.prototype.Re = function (t, e) {
      return { name: this._e(t), fields: e.proto.mapValue.fields };
    }),
    (t.prototype.Se = function (t) {
      return (
        Wo(!t.nn, "Can't serialize documents with mutations."),
        {
          name: this._e(t.key),
          fields: t.yn().mapValue.fields,
          updateTime: this.O(t.version.O()),
        }
      );
    }),
    (t.prototype.Ae = function (t, e) {
      var n = this.it(t.name),
        r = this.fromVersion(t.updateTime),
        i = new qi({ mapValue: { fields: t.fields } });
      return new Bi(n, r, i, { hasCommittedMutations: !!e });
    }),
    (t.prototype.Ce = function (t) {
      Wo(
        !!t.found,
        "Tried to deserialize a found document from a missing document."
      ),
        Vo(t.found.name, "doc.found.name"),
        Vo(t.found.updateTime, "doc.found.updateTime");
      var e = this.it(t.found.name),
        n = this.fromVersion(t.found.updateTime),
        r = new qi({ mapValue: { fields: t.found.fields } });
      return new Bi(e, n, r, {});
    }),
    (t.prototype.Pe = function (t) {
      Wo(
        !!t.missing,
        "Tried to deserialize a missing document from a found document."
      ),
        Wo(
          !!t.readTime,
          "Tried to deserialize a missing document without a read time."
        );
      var e = this.it(t.missing),
        n = this.fromVersion(t.readTime);
      return new Gi(e, n);
    }),
    (t.prototype.Ve = function (t) {
      return "found" in t
        ? this.Ce(t)
        : "missing" in t
        ? this.Pe(t)
        : Ko("invalid batch get response: " + JSON.stringify(t));
    }),
    (t.prototype.ke = function (t) {
      var e;
      if ("targetChange" in t) {
        Vo(t.targetChange, "targetChange");
        var n = this.Ne(t.targetChange.targetChangeType || "NO_CHANGE"),
          r = t.targetChange.targetIds || [],
          i = this.pe(t.targetChange.resumeToken),
          o = t.targetChange.cause,
          s = o && this.fe(o);
        e = new ko(n, r, i, s || null);
      } else if ("documentChange" in t) {
        Vo(t.documentChange, "documentChange");
        var u = t.documentChange;
        Vo(u.document, "documentChange.name"),
          Vo(u.document.name, "documentChange.document.name"),
          Vo(u.document.updateTime, "documentChange.document.updateTime");
        var a = this.it(u.document.name),
          h = this.fromVersion(u.document.updateTime),
          c = new qi({ mapValue: { fields: u.document.fields } }),
          f = new Bi(a, h, c, {}),
          l = u.targetIds || [],
          p = u.removedTargetIds || [];
        e = new Do(l, p, f.key, f);
      } else if ("documentDelete" in t) {
        Vo(t.documentDelete, "documentDelete");
        var d = t.documentDelete;
        Vo(d.document, "documentDelete.document"),
          (a = this.it(d.document)),
          (h = d.readTime ? this.fromVersion(d.readTime) : Vr.V()),
          (f = new Gi(a, h)),
          (p = d.removedTargetIds || []),
          (e = new Do([], p, f.key, f));
      } else if ("documentRemove" in t) {
        Vo(t.documentRemove, "documentRemove");
        var v = t.documentRemove;
        Vo(v.document, "documentRemove"),
          (a = this.it(v.document)),
          (p = v.removedTargetIds || []),
          (e = new Do([], p, a, null));
      } else {
        if (!("filter" in t))
          return Ko("Unknown change type " + JSON.stringify(t));
        Vo(t.filter, "filter");
        var y = t.filter;
        Vo(y.targetId, "filter.targetId");
        var m = y.count || 0,
          g = new so(m),
          w = y.targetId;
        e = new So(w, g);
      }
      return e;
    }),
    (t.prototype.Ne = function (t) {
      return "NO_CHANGE" === t
        ? 0
        : "ADD" === t
        ? 1
        : "REMOVE" === t
        ? 2
        : "CURRENT" === t
        ? 3
        : "RESET" === t
        ? 4
        : Ko("Got unexpected TargetChange.state: " + t);
    }),
    (t.prototype.Oe = function (t) {
      if (!("targetChange" in t)) return Vr.MIN;
      var e = t.targetChange;
      return e.targetIds && e.targetIds.length
        ? Vr.MIN
        : e.readTime
        ? this.fromVersion(e.readTime)
        : Vr.MIN;
    }),
    (t.prototype.Fe = function (t) {
      var e,
        n = this;
      if (t instanceof Mi) e = { update: this.Re(t.key, t.value) };
      else if (t instanceof Vi) e = { delete: this._e(t.key) };
      else if (t instanceof Li)
        e = { update: this.Re(t.key, t.data), updateMask: this.Ue(t.en) };
      else if (t instanceof _i)
        e = {
          transform: {
            document: this._e(t.key),
            fieldTransforms: t.fieldTransforms.map(function (t) {
              return n.je(t);
            }),
          },
        };
      else {
        if (!(t instanceof Ui)) return Ko("Unknown mutation type " + t.type);
        e = { verify: this._e(t.key) };
      }
      return t.tn.Yt || (e.currentDocument = this.xe(t.tn)), e;
    }),
    (t.prototype.Le = function (t) {
      var e = this,
        n = t.currentDocument ? this.Me(t.currentDocument) : xi.NONE;
      if (t.update) {
        Vo(t.update.name, "name");
        var r = this.it(t.update.name),
          i = new qi({ mapValue: { fields: t.update.fields } });
        if (t.updateMask) {
          var o = this.qe(t.updateMask);
          return new Li(r, i, o, n);
        }
        return new Mi(r, i, n);
      }
      if (t.delete) return (r = this.it(t.delete)), new Vi(r, n);
      if (t.transform) {
        r = this.it(t.transform.document);
        var s = t.transform.fieldTransforms.map(function (t) {
          return e.Be(t);
        });
        return (
          Wo(
            !0 === n.exists,
            'Transforms only support precondition "exists == true"'
          ),
          new _i(r, s)
        );
      }
      return t.verify
        ? ((r = this.it(t.verify)), new Ui(r, n))
        : Ko("unknown mutation proto: " + JSON.stringify(t));
    }),
    (t.prototype.xe = function (t) {
      return (
        Wo(!t.Yt, "Can't serialize an empty precondition"),
        void 0 !== t.updateTime
          ? { updateTime: this.toVersion(t.updateTime) }
          : void 0 !== t.exists
          ? { exists: t.exists }
          : Ko("Unknown precondition")
      );
    }),
    (t.prototype.Me = function (t) {
      return void 0 !== t.updateTime
        ? xi.updateTime(this.fromVersion(t.updateTime))
        : void 0 !== t.exists
        ? xi.exists(t.exists)
        : xi.NONE;
    }),
    (t.prototype.Qe = function (t, e) {
      var n = t.updateTime
        ? this.fromVersion(t.updateTime)
        : this.fromVersion(e);
      n.isEqual(Vr.MIN) && (n = this.fromVersion(e));
      var r = null;
      return (
        t.transformResults &&
          t.transformResults.length > 0 &&
          (r = t.transformResults),
        new Ri(n, r)
      );
    }),
    (t.prototype.Ge = function (t, e) {
      var n = this;
      return t && t.length > 0
        ? (Wo(void 0 !== e, "Received a write result without a commit time"),
          t.map(function (t) {
            return n.Qe(t, e);
          }))
        : [];
    }),
    (t.prototype.je = function (t) {
      var e = t.transform;
      if (e instanceof Ii)
        return { fieldPath: t.field.J(), setToServerValue: "REQUEST_TIME" };
      if (e instanceof Ti)
        return {
          fieldPath: t.field.J(),
          appendMissingElements: { values: e.elements },
        };
      if (e instanceof Ni)
        return {
          fieldPath: t.field.J(),
          removeAllFromArray: { values: e.elements },
        };
      if (e instanceof Ai) return { fieldPath: t.field.J(), increment: e.Gt };
      throw Ko("Unknown transform: " + t.transform);
    }),
    (t.prototype.Be = function (t) {
      var e = null;
      if ("setToServerValue" in t)
        Wo(
          "REQUEST_TIME" === t.setToServerValue,
          "Unknown server value transform proto: " + JSON.stringify(t)
        ),
          (e = Ii.instance);
      else if ("appendMissingElements" in t) {
        var n = t.appendMissingElements.values || [];
        e = new Ti(n);
      } else
        "removeAllFromArray" in t
          ? ((n = t.removeAllFromArray.values || []), (e = new Ni(n)))
          : "increment" in t
          ? (e = new Ai(this, t.increment))
          : Ko("Unknown transform proto: " + JSON.stringify(t));
      var r = jr.tt(t.fieldPath);
      return new Ci(r, e);
    }),
    (t.prototype.We = function (t) {
      return { documents: [this.Te(t.path)] };
    }),
    (t.prototype.ze = function (t) {
      var e = t.documents.length;
      Wo(1 === e, "DocumentsTarget contained other than 1 document: " + e);
      var n = t.documents[0];
      return Yi.Cn(this.Ee(n)).qn();
    }),
    (t.prototype.Ke = function (t) {
      var e = { structuredQuery: {} },
        n = t.path;
      null !== t.collectionGroup
        ? (Wo(
            n.length % 2 == 0,
            "Collection Group queries should be within a document path or root."
          ),
          (e.parent = this.Te(n)),
          (e.structuredQuery.from = [
            { collectionId: t.collectionGroup, allDescendants: !0 },
          ]))
        : (Wo(
            n.length % 2 != 0,
            "Document queries with filters are not supported."
          ),
          (e.parent = this.Te(n.L())),
          (e.structuredQuery.from = [{ collectionId: n.B() }]));
      var r = this.Je(t.filters);
      r && (e.structuredQuery.where = r);
      var i = this.He(t.orderBy);
      i && (e.structuredQuery.orderBy = i);
      var o = this.le(t.limit);
      return (
        null !== o && (e.structuredQuery.limit = o),
        t.startAt && (e.structuredQuery.startAt = this.Ye(t.startAt)),
        t.endAt && (e.structuredQuery.endAt = this.Ye(t.endAt)),
        e
      );
    }),
    (t.prototype.Xe = function (t) {
      var e = this.Ee(t.parent),
        n = t.structuredQuery,
        r = n.from ? n.from.length : 0,
        i = null;
      if (r > 0) {
        Wo(
          1 === r,
          "StructuredQuery.from with more than one collection is not supported."
        );
        var o = n.from[0];
        o.allDescendants ? (i = o.collectionId) : (e = e.child(o.collectionId));
      }
      var s = [];
      n.where && (s = this.$e(n.where));
      var u = [];
      n.orderBy && (u = this.Ze(n.orderBy));
      var a = null;
      n.limit && (a = this.ve(n.limit));
      var h = null;
      n.startAt && (h = this.tr(n.startAt));
      var c = null;
      return (
        n.endAt && (c = this.tr(n.endAt)), new Yi(e, i, u, s, a, "F", h, c).qn()
      );
    }),
    (t.prototype.nr = function (t) {
      var e = this.ir(t.ti);
      return null == e ? null : { "goog-listen-tags": e };
    }),
    (t.prototype.ir = function (t) {
      switch (t) {
        case 0:
          return null;
        case 1:
          return "existence-filter-mismatch";
        case 2:
          return "limbo-document";
        default:
          return Ko("Unrecognized query purpose: " + t);
      }
    }),
    (t.prototype.qn = function (t) {
      var e,
        n = t.target;
      return (
        ((e = n.Tn()
          ? { documents: this.We(n) }
          : { query: this.Ke(n) }).targetId = t.targetId),
        t.resumeToken.Lt() > 0 && (e.resumeToken = this.me(t.resumeToken)),
        e
      );
    }),
    (t.prototype.Je = function (t) {
      var e = this;
      if (0 !== t.length) {
        var n = t.map(function (t) {
          return t instanceof Wi
            ? e.er(t)
            : Ko("Unrecognized filter: " + JSON.stringify(t));
        });
        return 1 === n.length
          ? n[0]
          : { compositeFilter: { op: "AND", filters: n } };
      }
    }),
    (t.prototype.$e = function (t) {
      var e = this;
      return t
        ? void 0 !== t.unaryFilter
          ? [this.rr(t)]
          : void 0 !== t.fieldFilter
          ? [this.ur(t)]
          : void 0 !== t.compositeFilter
          ? t.compositeFilter.filters
              .map(function (t) {
                return e.$e(t);
              })
              .reduce(function (t, e) {
                return t.concat(e);
              })
          : Ko("Unknown filter: " + JSON.stringify(t))
        : [];
    }),
    (t.prototype.He = function (t) {
      var e = this;
      if (0 !== t.length)
        return t.map(function (t) {
          return e.sr(t);
        });
    }),
    (t.prototype.Ze = function (t) {
      var e = this;
      return t.map(function (t) {
        return e.or(t);
      });
    }),
    (t.prototype.Ye = function (t) {
      return { before: t.before, values: t.position };
    }),
    (t.prototype.tr = function (t) {
      var e = !!t.before,
        n = t.values || [];
      return new eo(n, e);
    }),
    (t.prototype.hr = function (t) {
      return Lo[t.name];
    }),
    (t.prototype.cr = function (t) {
      switch (t) {
        case "ASCENDING":
          return to.ASCENDING;
        case "DESCENDING":
          return to.DESCENDING;
        default:
          return;
      }
    }),
    (t.prototype.ar = function (t) {
      return _o[t.name];
    }),
    (t.prototype.lr = function (t) {
      switch (t) {
        case "EQUAL":
          return Ki.EQUAL;
        case "GREATER_THAN":
          return Ki.GREATER_THAN;
        case "GREATER_THAN_OR_EQUAL":
          return Ki.GREATER_THAN_OR_EQUAL;
        case "LESS_THAN":
          return Ki.LESS_THAN;
        case "LESS_THAN_OR_EQUAL":
          return Ki.LESS_THAN_OR_EQUAL;
        case "ARRAY_CONTAINS":
          return Ki.ARRAY_CONTAINS;
        case "IN":
          return Ki.IN;
        case "ARRAY_CONTAINS_ANY":
          return Ki.ARRAY_CONTAINS_ANY;
        case "OPERATOR_UNSPECIFIED":
          return Ko("Unspecified operator");
        default:
          return Ko("Unknown operator");
      }
    }),
    (t.prototype.dr = function (t) {
      return { fieldPath: t.J() };
    }),
    (t.prototype.vr = function (t) {
      return jr.tt(t.fieldPath);
    }),
    (t.prototype.sr = function (t) {
      return { field: this.dr(t.field), direction: this.hr(t.dir) };
    }),
    (t.prototype.or = function (t) {
      return new no(this.vr(t.field), this.cr(t.direction));
    }),
    (t.prototype.ur = function (t) {
      return Wi.create(
        this.vr(t.fieldFilter.field),
        this.lr(t.fieldFilter.op),
        t.fieldFilter.value
      );
    }),
    (t.prototype.er = function (t) {
      if (t.op === Ki.EQUAL) {
        if (bi(t.value))
          return { unaryFilter: { field: this.dr(t.field), op: "IS_NAN" } };
        if (wi(t.value))
          return { unaryFilter: { field: this.dr(t.field), op: "IS_NULL" } };
      }
      return {
        fieldFilter: {
          field: this.dr(t.field),
          op: this.ar(t.op),
          value: t.value,
        },
      };
    }),
    (t.prototype.rr = function (t) {
      switch (t.unaryFilter.op) {
        case "IS_NAN":
          var e = this.vr(t.unaryFilter.field);
          return Wi.create(e, Ki.EQUAL, { doubleValue: NaN });
        case "IS_NULL":
          var n = this.vr(t.unaryFilter.field);
          return Wi.create(n, Ki.EQUAL, { nullValue: "NULL_VALUE" });
        case "OPERATOR_UNSPECIFIED":
          return Ko("Unspecified filter");
        default:
          return Ko("Unknown filter");
      }
    }),
    (t.prototype.Ue = function (t) {
      var e = [];
      return (
        t.fields.forEach(function (t) {
          return e.push(t.J());
        }),
        { fieldPaths: e }
      );
    }),
    (t.prototype.qe = function (t) {
      var e = (t.fieldPaths || []).map(function (t) {
        return jr.tt(t);
      });
      return Oi.Jt(e);
    }),
    t
  );
})();
function qo(t) {
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Fo = (function () {
    function t() {}
    return (
      (t.wr = function (e) {
        t.platform && Ko("Platform already defined"), (t.platform = e);
      }),
      (t.xt = function () {
        return t.platform || Ko("Platform not set"), t.platform;
      }),
      t
    );
  })(),
  jo = new u("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bo() {
  return jo.logLevel;
}
function Go(t) {
  jo.logLevel = t;
}
function zo(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (jo.logLevel <= r.DEBUG) {
    var o = e.map(Yo);
    jo.error.apply(jo, i(["Firestore (" + Dr + "): " + t], o));
  }
}
function Qo(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (jo.logLevel <= r.ERROR) {
    var o = e.map(Yo);
    jo.error.apply(jo, i(["Firestore (" + Dr + "): " + t], o));
  }
}
function Yo(t) {
  if ("string" == typeof t) return t;
  var e = Fo.xt();
  try {
    return e.mr(t);
  } catch (e) {
    return t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ko(t) {
  var e = "FIRESTORE (" + Dr + ") INTERNAL ASSERTION FAILED: " + t;
  throw (Qo(e), new Error(e));
}
function Wo(t, e) {
  t || Ko(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ho = (function () {
  function t() {}
  return (
    (t.pr = function () {
      for (var t = ""; t.length < 20; )
        for (
          var e = Fo.xt().randomBytes(40), n = 0, r = Array.from(e);
          n < r.length;
          n++
        ) {
          var i = r[n];
          t.length < 20 &&
            i <= 247 &&
            (t +=
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
                i % 62
              ));
        }
      return Wo(20 === t.length, "Invalid auto ID: " + t), t;
    }),
    t
  );
})();
function Jo(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Xo(t, e, n) {
  return (
    t.length === e.length &&
    t.every(function (t, r) {
      return n(t, e[r]);
    })
  );
}
function $o(t) {
  return t + "\0";
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Zo = function (t, e, n, r, i) {
    (this.ae = t),
      (this.persistenceKey = e),
      (this.host = n),
      (this.ssl = r),
      (this.forceLongPolling = i);
  },
  ts = (function () {
    function t(t, e) {
      (this.projectId = t), (this.database = e || "(default)");
    }
    return (
      Object.defineProperty(t.prototype, "br", {
        get: function () {
          return "(default)" === this.database;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (e) {
        return (
          e instanceof t &&
          e.projectId === this.projectId &&
          e.database === this.database
        );
      }),
      (t.prototype.k = function (t) {
        return Jo(this.projectId, t.projectId) || Jo(this.database, t.database);
      }),
      t
    );
  })(),
  es = (function () {
    function t(t, e, n, r) {
      (this.batchId = t),
        (this.gr = e),
        (this.baseMutations = n),
        (this.mutations = r),
        Wo(r.length > 0, "Cannot create an empty mutation batch");
    }
    return (
      (t.prototype.Bt = function (t, e, n) {
        e &&
          Wo(
            e.key.isEqual(t),
            "applyToRemoteDocument: key " +
              t +
              " should match maybeDoc key\n        " +
              e.key
          );
        var r = n.yr;
        Wo(
          r.length === this.mutations.length,
          "Mismatch between mutations length\n      (" +
            this.mutations.length +
            ") and mutation results length\n      (" +
            r.length +
            ")."
        );
        for (var i = 0; i < this.mutations.length; i++) {
          var o = this.mutations[i];
          if (o.key.isEqual(t)) {
            var s = r[i];
            e = o.Bt(e, s);
          }
        }
        return e;
      }),
      (t.prototype.qt = function (t, e) {
        e &&
          Wo(
            e.key.isEqual(t),
            "applyToLocalDocument: key " +
              t +
              " should match maybeDoc key\n        " +
              e.key
          );
        for (var n = 0, r = this.baseMutations; n < r.length; n++)
          (u = r[n]).key.isEqual(t) && (e = u.qt(e, e, this.gr));
        for (var i = e, o = 0, s = this.mutations; o < s.length; o++) {
          var u;
          (u = s[o]).key.isEqual(t) && (e = u.qt(e, i, this.gr));
        }
        return e;
      }),
      (t.prototype._r = function (t) {
        var e = this,
          n = t;
        return (
          this.mutations.forEach(function (r) {
            var i = e.qt(r.key, t.get(r.key));
            i && (n = n.ut(r.key, i));
          }),
          n
        );
      }),
      (t.prototype.keys = function () {
        return this.mutations.reduce(function (t, e) {
          return t.add(e.key);
        }, go());
      }),
      (t.prototype.isEqual = function (t) {
        return (
          this.batchId === t.batchId &&
          Xo(this.mutations, t.mutations, function (t, e) {
            return t.isEqual(e);
          }) &&
          Xo(this.baseMutations, t.baseMutations, function (t, e) {
            return t.isEqual(e);
          })
        );
      }),
      t
    );
  })(),
  ns = (function () {
    function t(t, e, n, r, i) {
      (this.batch = t),
        (this.Ir = e),
        (this.yr = n),
        (this.streamToken = r),
        (this.Tr = i);
    }
    return (
      (t.from = function (e, n, r, i) {
        Wo(
          e.mutations.length === r.length,
          "Mutations sent " +
            e.mutations.length +
            " must equal results received " +
            r.length
        );
        for (var o = yo(), s = e.mutations, u = 0; u < s.length; u++)
          o = o.ut(s[u].key, r[u].version);
        return new t(e, n, r, i, o);
      }),
      t
    );
  })(),
  rs = (function () {
    function t(t) {
      (this.Er = t), (this.Dr = {});
    }
    return (
      (t.prototype.get = function (t) {
        var e = this.Er(t),
          n = this.Dr[e];
        if (void 0 !== n)
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
              s = o[0],
              u = o[1];
            if (s.isEqual(t)) return u;
          }
      }),
      (t.prototype.has = function (t) {
        return void 0 !== this.get(t);
      }),
      (t.prototype.set = function (t, e) {
        var n = this.Er(t),
          r = this.Dr[n];
        if (void 0 !== r) {
          for (var i = 0; i < r.length; i++)
            if (r[i][0].isEqual(t)) return void (r[i] = [t, e]);
          r.push([t, e]);
        } else this.Dr[n] = [[t, e]];
      }),
      (t.prototype.delete = function (t) {
        var e = this.Er(t),
          n = this.Dr[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++)
          if (n[r][0].isEqual(t))
            return 1 === n.length ? delete this.Dr[e] : n.splice(r, 1), !0;
        return !1;
      }),
      (t.prototype.forEach = function (t) {
        Jr(this.Dr, function (e, n) {
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
              s = o[0],
              u = o[1];
            t(s, u);
          }
        });
      }),
      (t.prototype.M = function () {
        return Xr(this.Dr);
      }),
      t
    );
  })(),
  is = (function () {
    function t(t, e, n, r) {
      (this.targetId = t), (this.fromCache = e), (this.Rr = n), (this.Sr = r);
    }
    return (
      (t.Ar = function (e, n) {
        for (
          var r = go(), i = go(), o = 0, s = n.docChanges;
          o < s.length;
          o++
        ) {
          var u = s[o];
          switch (u.type) {
            case 0:
              r = r.add(u.doc.key);
              break;
            case 1:
              i = i.add(u.doc.key);
          }
        }
        return new t(e, n.fromCache, r, i);
      }),
      t
    );
  })(),
  os = (function () {
    function t(t, e) {
      var n = this;
      (this.previousValue = t),
        e &&
          ((e.Cr = function (t) {
            return n.Pr(t);
          }),
          (this.Vr = function (t) {
            return e.kr(t);
          }));
    }
    return (
      (t.prototype.Pr = function (t) {
        return (
          (this.previousValue = Math.max(t, this.previousValue)),
          this.previousValue
        );
      }),
      (t.prototype.next = function () {
        var t = ++this.previousValue;
        return this.Vr && this.Vr(t), t;
      }),
      (t.Nr = -1),
      t
    );
  })(),
  ss = function () {
    var t = this;
    this.promise = new Promise(function (e, n) {
      (t.resolve = e), (t.reject = n);
    });
  },
  us = (function () {
    function t(t, e, n, r, i) {
      (this.Or = t),
        (this.Fr = e),
        (this.Ur = n),
        (this.op = r),
        (this.jr = i),
        (this.xr = new ss()),
        (this.then = this.xr.promise.then.bind(this.xr.promise)),
        (this.catch = this.xr.promise.catch.bind(this.xr.promise)),
        this.xr.promise.catch(function (t) {});
    }
    return (
      (t.Lr = function (e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
      }),
      (t.prototype.start = function (t) {
        var e = this;
        this.Mr = setTimeout(function () {
          return e.qr();
        }, t);
      }),
      (t.prototype.Br = function () {
        return this.qr();
      }),
      (t.prototype.cancel = function (t) {
        null !== this.Mr &&
          (this.clearTimeout(),
          this.xr.reject(
            new Or(kr.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
          ));
      }),
      (t.prototype.qr = function () {
        var t = this;
        this.Or.Qr(function () {
          return null !== t.Mr
            ? (t.clearTimeout(),
              t.op().then(function (e) {
                return t.xr.resolve(e);
              }))
            : Promise.resolve();
        });
      }),
      (t.prototype.clearTimeout = function () {
        null !== this.Mr &&
          (this.jr(this), clearTimeout(this.Mr), (this.Mr = null));
      }),
      t
    );
  })(),
  as = (function () {
    function t() {
      (this.Gr = Promise.resolve()),
        (this.Wr = !1),
        (this.zr = []),
        (this.Kr = null),
        (this.Jr = !1),
        (this.Hr = []);
    }
    return (
      Object.defineProperty(t.prototype, "Yr", {
        get: function () {
          return this.Wr;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.Qr = function (t) {
        this.enqueue(t);
      }),
      (t.prototype.Xr = function (t) {
        this.$r(), this.Zr(t);
      }),
      (t.prototype.tu = function (t) {
        return this.$r(), this.Zr(t);
      }),
      (t.prototype.nu = function (t) {
        return e(this, void 0, void 0, function () {
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  this.$r(),
                  this.Wr ? [3, 2] : ((this.Wr = !0), [4, this.tu(t)])
                );
              case 1:
                e.sent(), (e.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (t.prototype.enqueue = function (t) {
        return this.$r(), this.Wr ? new Promise(function (t) {}) : this.Zr(t);
      }),
      (t.prototype.Zr = function (t) {
        var e = this,
          n = this.Gr.then(function () {
            return (
              (e.Jr = !0),
              t()
                .catch(function (t) {
                  (e.Kr = t), (e.Jr = !1);
                  var n = t.stack || t.message || "";
                  throw (
                    (Qo("INTERNAL UNHANDLED ERROR: ", n),
                    n.indexOf("Firestore Test Simulated Error") < 0 &&
                      setTimeout(function () {
                        throw t;
                      }, 0),
                    t)
                  );
                })
                .then(function (t) {
                  return (e.Jr = !1), t;
                })
            );
          });
        return (this.Gr = n), n;
      }),
      (t.prototype.iu = function (t, e, n) {
        var r = this;
        this.$r(),
          Wo(
            e >= 0,
            "Attempted to schedule an operation with a negative delay of " + e
          ),
          this.Hr.indexOf(t) > -1 && (e = 0);
        var i = us.Lr(this, t, e, n, function (t) {
          return r.eu(t);
        });
        return this.zr.push(i), i;
      }),
      (t.prototype.$r = function () {
        this.Kr &&
          Ko(
            "AsyncQueue is already failed: " +
              (this.Kr.stack || this.Kr.message)
          );
      }),
      (t.prototype.ru = function () {
        Wo(
          this.Jr,
          "verifyOpInProgress() called when no op in progress on this queue."
        );
      }),
      (t.prototype.uu = function () {
        return e(this, void 0, void 0, function () {
          var t;
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (t = this.Gr)];
              case 1:
                e.sent(), (e.label = 2);
              case 2:
                if (t !== this.Gr) return [3, 0];
                e.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.su = function (t) {
        for (var e = 0, n = this.zr; e < n.length; e++)
          if (n[e].Fr === t) return !0;
        return !1;
      }),
      (t.prototype.ou = function (t) {
        var e = this;
        return this.uu().then(function () {
          Wo(
            "all" === t || e.su(t),
            "Attempted to drain to missing operation " + t
          ),
            e.zr.sort(function (t, e) {
              return t.Ur - e.Ur;
            });
          for (var n = 0, r = e.zr; n < r.length; n++) {
            var i = r[n];
            if ((i.Br(), "all" !== t && i.Fr === t)) break;
          }
          return e.uu();
        });
      }),
      (t.prototype.hu = function (t) {
        this.Hr.push(t);
      }),
      (t.prototype.eu = function (t) {
        var e = this.zr.indexOf(t);
        Wo(e >= 0, "Delayed operation not found."), this.zr.splice(e, 1);
      }),
      t
    );
  })(),
  hs = (function () {
    function t(t) {
      var e = this;
      (this.cu = null),
        (this.au = null),
        (this.result = void 0),
        (this.error = void 0),
        (this.fu = !1),
        (this.lu = !1),
        t(
          function (t) {
            (e.fu = !0), (e.result = t), e.cu && e.cu(t);
          },
          function (t) {
            (e.fu = !0), (e.error = t), e.au && e.au(t);
          }
        );
    }
    return (
      (t.prototype.catch = function (t) {
        return this.next(void 0, t);
      }),
      (t.prototype.next = function (e, n) {
        var r = this;
        return (
          this.lu &&
            Ko("Called next() or catch() twice for PersistencePromise"),
          (this.lu = !0),
          this.fu
            ? this.error
              ? this.du(n, this.error)
              : this.vu(e, this.result)
            : new t(function (t, i) {
                (r.cu = function (n) {
                  r.vu(e, n).next(t, i);
                }),
                  (r.au = function (e) {
                    r.du(n, e).next(t, i);
                  });
              })
        );
      }),
      (t.prototype.wu = function () {
        var t = this;
        return new Promise(function (e, n) {
          t.next(e, n);
        });
      }),
      (t.prototype.mu = function (e) {
        try {
          var n = e();
          return n instanceof t ? n : t.resolve(n);
        } catch (e) {
          return t.reject(e);
        }
      }),
      (t.prototype.vu = function (e, n) {
        return e
          ? this.mu(function () {
              return e(n);
            })
          : t.resolve(n);
      }),
      (t.prototype.du = function (e, n) {
        return e
          ? this.mu(function () {
              return e(n);
            })
          : t.reject(n);
      }),
      (t.resolve = function (e) {
        return new t(function (t, n) {
          t(e);
        });
      }),
      (t.reject = function (e) {
        return new t(function (t, n) {
          n(e);
        });
      }),
      (t.pu = function (e) {
        return new t(function (t, n) {
          var r = 0,
            i = 0,
            o = !1;
          e.forEach(function (e) {
            ++r,
              e.next(
                function () {
                  ++i, o && i === r && t();
                },
                function (t) {
                  return n(t);
                }
              );
          }),
            (o = !0),
            i === r && t();
        });
      }),
      (t.bu = function (e) {
        for (
          var n = t.resolve(!1),
            r = function (e) {
              n = n.next(function (n) {
                return n ? t.resolve(n) : e();
              });
            },
            i = 0,
            o = e;
          i < o.length;
          i++
        )
          r(o[i]);
        return n;
      }),
      (t.forEach = function (t, e) {
        var n = this,
          r = [];
        return (
          t.forEach(function (t, i) {
            r.push(e.call(n, t, i));
          }),
          this.pu(r)
        );
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cs(t, e) {
  var n = t[0],
    r = t[1],
    i = e[0],
    o = e[1],
    s = Jo(n, i);
  return 0 === s ? Jo(r, o) : s;
}
var fs = (function () {
    function t(t) {
      (this.gu = t), (this.buffer = new Kr(cs)), (this.yu = 0);
    }
    return (
      (t.prototype._u = function () {
        return ++this.yu;
      }),
      (t.prototype.Iu = function (t) {
        var e = [t, this._u()];
        if (this.buffer.size < this.gu) this.buffer = this.buffer.add(e);
        else {
          var n = this.buffer.last();
          cs(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
      }),
      Object.defineProperty(t.prototype, "maxValue", {
        get: function () {
          return this.buffer.last()[0];
        },
        enumerable: !0,
        configurable: !0,
      }),
      t
    );
  })(),
  ls = { Tu: !1, Eu: 0, Du: 0, Ru: 0 },
  ps = (function () {
    function t(t, e, n) {
      (this.Su = t), (this.Au = e), (this.Cu = n);
    }
    return (
      (t.Pu = function (e) {
        return new t(e, t.Vu, t.ku);
      }),
      (t.Nu = -1),
      (t.Ou = 1048576),
      (t.Fu = 41943040),
      (t.Vu = 10),
      (t.ku = 1e3),
      (t.Uu = new t(t.Fu, t.Vu, t.ku)),
      (t.DISABLED = new t(t.Nu, 0, 0)),
      t
    );
  })(),
  ds = (function () {
    function t(t, e) {
      (this.ju = t), (this.Or = e), (this.xu = !1), (this.Lu = null);
    }
    return (
      (t.prototype.start = function (t) {
        Wo(null === this.Lu, "Cannot start an already started LruScheduler"),
          this.ju.params.Su !== ps.Nu && this.Mu(t);
      }),
      (t.prototype.stop = function () {
        this.Lu && (this.Lu.cancel(), (this.Lu = null));
      }),
      Object.defineProperty(t.prototype, "qu", {
        get: function () {
          return null !== this.Lu;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.Mu = function (t) {
        var e = this;
        Wo(null === this.Lu, "Cannot schedule GC while a task is pending");
        var n = this.xu ? 3e5 : 6e4;
        zo(
          "LruGarbageCollector",
          "Garbage collection scheduled in " + n + "ms"
        ),
          (this.Lu = this.Or.iu("lru_garbage_collection", n, function () {
            return (
              (e.Lu = null),
              (e.xu = !0),
              t
                .Bu(e.ju)
                .then(function () {
                  return e.Mu(t);
                })
                .catch(bs)
            );
          }));
      }),
      t
    );
  })(),
  vs = (function () {
    function t(t, e) {
      (this.Qu = t), (this.params = e);
    }
    return (
      (t.prototype.Gu = function (t, e) {
        return this.Qu.Wu(t).next(function (t) {
          return Math.floor((e / 100) * t);
        });
      }),
      (t.prototype.zu = function (t, e) {
        var n = this;
        if (0 === e) return hs.resolve(os.Nr);
        var r = new fs(e);
        return this.Qu.$i(t, function (t) {
          return r.Iu(t.sequenceNumber);
        })
          .next(function () {
            return n.Qu.Ku(t, function (t) {
              return r.Iu(t);
            });
          })
          .next(function () {
            return r.maxValue;
          });
      }),
      (t.prototype.Ju = function (t, e, n) {
        return this.Qu.Ju(t, e, n);
      }),
      (t.prototype.Hu = function (t, e) {
        return this.Qu.Hu(t, e);
      }),
      (t.prototype.Yu = function (t, e) {
        var n = this;
        return this.params.Su === ps.Nu
          ? (zo("LruGarbageCollector", "Garbage collection skipped; disabled"),
            hs.resolve(ls))
          : this.Xu(t).next(function (r) {
              return r < n.params.Su
                ? (zo(
                    "LruGarbageCollector",
                    "Garbage collection skipped; Cache size " +
                      r +
                      " is lower than threshold " +
                      n.params.Su
                  ),
                  ls)
                : n.$u(t, e);
            });
      }),
      (t.prototype.Xu = function (t) {
        return this.Qu.Xu(t);
      }),
      (t.prototype.$u = function (t, e) {
        var n,
          i,
          o,
          s,
          u,
          a,
          h,
          c = this,
          f = Date.now();
        return this.Gu(t, this.params.Au)
          .next(function (e) {
            return (
              e > c.params.Cu
                ? (zo(
                    "LruGarbageCollector",
                    "Capping sequence numbers to collect down to the maximum of " +
                      c.params.Cu +
                      " from " +
                      e
                  ),
                  (i = c.params.Cu))
                : (i = e),
              (s = Date.now()),
              c.zu(t, i)
            );
          })
          .next(function (r) {
            return (n = r), (u = Date.now()), c.Ju(t, n, e);
          })
          .next(function (e) {
            return (o = e), (a = Date.now()), c.Hu(t, n);
          })
          .next(function (t) {
            return (
              (h = Date.now()),
              Bo() <= r.DEBUG &&
                zo(
                  "LruGarbageCollector",
                  "LRU Garbage Collection\n\tCounted targets in " +
                    (s - f) +
                    "ms\n\tDetermined least recently used " +
                    i +
                    " in " +
                    (u - s) +
                    "ms\n\tRemoved " +
                    o +
                    " targets in " +
                    (a - u) +
                    "ms\n\tRemoved " +
                    t +
                    " documents in " +
                    (h - a) +
                    "ms\nTotal Duration: " +
                    (h - f) +
                    "ms"
                ),
              hs.resolve({ Tu: !0, Eu: i, Du: o, Ru: t })
            );
          });
      }),
      t
    );
  })(),
  ys = (function () {
    function t() {
      (this.Zu = new Kr(ms.bn)), (this.ts = new Kr(ms.ns));
    }
    return (
      (t.prototype.M = function () {
        return this.Zu.M();
      }),
      (t.prototype.es = function (t, e) {
        var n = new ms(t, e);
        (this.Zu = this.Zu.add(n)), (this.ts = this.ts.add(n));
      }),
      (t.prototype.rs = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.es(t, e);
        });
      }),
      (t.prototype.us = function (t, e) {
        this.ss(new ms(t, e));
      }),
      (t.prototype.os = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.us(t, e);
        });
      }),
      (t.prototype.hs = function (t) {
        var e = this,
          n = Br.EMPTY,
          r = new ms(n, t),
          i = new ms(n, t + 1),
          o = [];
        return (
          this.ts.kt([r, i], function (t) {
            e.ss(t), o.push(t.key);
          }),
          o
        );
      }),
      (t.prototype.cs = function () {
        var t = this;
        this.Zu.forEach(function (e) {
          return t.ss(e);
        });
      }),
      (t.prototype.ss = function (t) {
        (this.Zu = this.Zu.delete(t)), (this.ts = this.ts.delete(t));
      }),
      (t.prototype.as = function (t) {
        var e = Br.EMPTY,
          n = new ms(e, t),
          r = new ms(e, t + 1),
          i = go();
        return (
          this.ts.kt([n, r], function (t) {
            i = i.add(t.key);
          }),
          i
        );
      }),
      (t.prototype.fs = function (t) {
        var e = new ms(t, 0),
          n = this.Zu.Ot(e);
        return null !== n && t.isEqual(n.key);
      }),
      t
    );
  })(),
  ms = (function () {
    function t(t, e) {
      (this.key = t), (this.ls = e);
    }
    return (
      (t.bn = function (t, e) {
        return Br.F(t.key, e.key) || Jo(t.ls, e.ls);
      }),
      (t.ns = function (t, e) {
        return Jo(t.ls, e.ls) || Br.F(t.key, e.key);
      }),
      t
    );
  })(),
  gs = (function () {
    function t() {
      (this.ds = new rs(function (t) {
        return t.toString();
      })),
        (this.vs = !1);
    }
    return (
      Object.defineProperty(t.prototype, "readTime", {
        get: function () {
          return (
            Wo(
              void 0 !== this.ws,
              "Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used."
            ),
            this.ws
          );
        },
        set: function (t) {
          Wo(
            void 0 === this.ws || this.ws.isEqual(t),
            "All changes in a RemoteDocumentChangeBuffer must have the same read time"
          ),
            (this.ws = t);
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.ms = function (t, e) {
        this.ps(), (this.readTime = e), this.ds.set(t.key, t);
      }),
      (t.prototype.bs = function (t, e) {
        this.ps(), e && (this.readTime = e), this.ds.set(t, null);
      }),
      (t.prototype.gs = function (t, e) {
        this.ps();
        var n = this.ds.get(e);
        return void 0 !== n ? hs.resolve(n) : this.ys(t, e);
      }),
      (t.prototype.getEntries = function (t, e) {
        return this._s(t, e);
      }),
      (t.prototype.apply = function (t) {
        return this.ps(), (this.vs = !0), this.Is(t);
      }),
      (t.prototype.ps = function () {
        Wo(!this.vs, "Changes have already been applied.");
      }),
      t
    );
  })(),
  ws = (function () {
    function t(t, e, n) {
      (this.persistence = t),
        (this.Ts = e),
        (this.Es = new ys()),
        (this.Ds = new Gr(Jo)),
        (this.Rs = new rs(function (t) {
          return t.canonicalId();
        })),
        (this.Ss = Vr.MIN),
        Wo(
          t.qu,
          "LocalStore was passed an unstarted persistence implementation"
        ),
        this.persistence.Cs.As(this.Es),
        (this.Ps = t.Vs(n)),
        (this.ks = t.Ns()),
        (this.Os = t.Fs()),
        (this.Us = new Ps(this.ks, this.Ps, this.persistence.js())),
        this.Ts.xs(this.Us);
    }
    return (
      (t.prototype.start = function () {
        return this.Ls();
      }),
      (t.prototype.Ms = function (t) {
        return e(this, void 0, void 0, function () {
          var e,
            r,
            i,
            o = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (e = this.Ps),
                  (r = this.Us),
                  [
                    4,
                    this.persistence.runTransaction(
                      "Handle user change",
                      "readonly",
                      function (n) {
                        var i;
                        return o.Ps.qs(n)
                          .next(function (s) {
                            return (
                              (i = s),
                              (e = o.persistence.Vs(t)),
                              (r = new Ps(o.ks, e, o.persistence.js())),
                              e.qs(n)
                            );
                          })
                          .next(function (t) {
                            for (
                              var e = [], o = [], s = go(), u = 0, a = i;
                              u < a.length;
                              u++
                            ) {
                              var h = a[u];
                              e.push(h.batchId);
                              for (
                                var c = 0, f = h.mutations;
                                c < f.length;
                                c++
                              ) {
                                var l = f[c];
                                s = s.add(l.key);
                              }
                            }
                            for (var p = 0, d = t; p < d.length; p++) {
                              (h = d[p]), o.push(h.batchId);
                              for (
                                var v = 0, y = h.mutations;
                                v < y.length;
                                v++
                              )
                                (l = y[v]), (s = s.add(l.key));
                            }
                            return r.Bs(n, s).next(function (t) {
                              return { Qs: t, Gs: e, Ws: o };
                            });
                          });
                      }
                    ),
                  ]
                );
              case 1:
                return (
                  (i = n.sent()),
                  (this.Ps = e),
                  (this.Us = r),
                  this.Ts.xs(this.Us),
                  [2, i]
                );
            }
          });
        });
      }),
      (t.prototype.zs = function (t) {
        var e,
          n = this,
          r = _r.now(),
          i = t.reduce(function (t, e) {
            return t.add(e.key);
          }, go());
        return this.persistence
          .runTransaction("Locally write mutations", "readwrite", function (o) {
            return n.Us.Bs(o, i).next(function (i) {
              e = i;
              for (var s = [], u = 0, a = t; u < a.length; u++) {
                var h = a[u],
                  c = h.in(e.get(h.key));
                null != c && s.push(new Li(h.key, c, c.en(), xi.exists(!0)));
              }
              return n.Ps.Ks(o, r, s, t);
            });
          })
          .then(function (t) {
            var n = t._r(e);
            return { batchId: t.batchId, ds: n };
          });
      }),
      (t.prototype.Js = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "Lookup mutation documents",
          "readonly",
          function (n) {
            return e.Ps.Hs(n, t).next(function (t) {
              return t ? e.Us.Bs(n, t) : hs.resolve(null);
            });
          }
        );
      }),
      (t.prototype.Ys = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "Acknowledge batch",
          "readwrite-primary",
          function (n) {
            var r = t.batch.keys(),
              i = e.ks.Xs({ $s: !0 });
            return e.Ps.Ys(n, t.batch, t.streamToken)
              .next(function () {
                return e.Zs(n, t, i);
              })
              .next(function () {
                return i.apply(n);
              })
              .next(function () {
                return e.Ps.to(n);
              })
              .next(function () {
                return e.Us.Bs(n, r);
              });
          }
        );
      }),
      (t.prototype.no = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "Reject batch",
          "readwrite-primary",
          function (n) {
            var r;
            return e.Ps.io(n, t)
              .next(function (t) {
                return (
                  Wo(null !== t, "Attempt to reject nonexistent batch!"),
                  (r = t.keys()),
                  e.Ps.eo(n, t)
                );
              })
              .next(function () {
                return e.Ps.to(n);
              })
              .next(function () {
                return e.Us.Bs(n, r);
              });
          }
        );
      }),
      (t.prototype.ro = function () {
        var t = this;
        return this.persistence.runTransaction(
          "Get highest unacknowledged batch id",
          "readonly",
          function (e) {
            return t.Ps.ro(e);
          }
        );
      }),
      (t.prototype.uo = function () {
        var t = this;
        return this.persistence.runTransaction(
          "Get last stream token",
          "readonly",
          function (e) {
            return t.Ps.uo(e);
          }
        );
      }),
      (t.prototype.so = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "Set last stream token",
          "readwrite-primary",
          function (n) {
            return e.Ps.so(n, t);
          }
        );
      }),
      (t.prototype.oo = function () {
        var t = this;
        return this.persistence.runTransaction(
          "Get last remote snapshot version",
          "readonly",
          function (e) {
            return t.Os.oo(e);
          }
        );
      }),
      (t.prototype.ho = function (e) {
        var n = this,
          r = e.ni,
          i = this.Ds;
        return this.persistence
          .runTransaction(
            "Apply remote event",
            "readwrite-primary",
            function (o) {
              var s = n.ks.Xs({ $s: !0 });
              i = n.Ds;
              var u = [];
              e.wi.forEach(function (e, s) {
                var a = i.get(s);
                if (a) {
                  u.push(
                    n.Os.co(o, e.Ei, s).next(function () {
                      return n.Os.ao(o, e.Ii, s);
                    })
                  );
                  var h = e.resumeToken;
                  if (h.Lt() > 0) {
                    var c = a.ei(h, r).ii(o.fo);
                    (i = i.ut(s, c)), t.lo(a, c, e) && u.push(n.Os.do(o, c));
                  }
                }
              });
              var a = co(),
                h = go();
              if (
                (e.pi.forEach(function (t, e) {
                  h = h.add(t);
                }),
                u.push(
                  s.getEntries(o, h).next(function (t) {
                    e.pi.forEach(function (i, h) {
                      var c = t.get(i);
                      h instanceof Gi && h.version.isEqual(Vr.MIN)
                        ? (s.bs(i, r), (a = a.ut(i, h)))
                        : null == c ||
                          h.version.k(c.version) > 0 ||
                          (0 === h.version.k(c.version) && c.hasPendingWrites)
                        ? (Wo(
                            !Vr.MIN.isEqual(r),
                            "Cannot add a document when the remote version is zero"
                          ),
                          s.ms(h, r),
                          (a = a.ut(i, h)))
                        : zo(
                            "LocalStore",
                            "Ignoring outdated watch update for ",
                            i,
                            ". Current version:",
                            c.version,
                            " Watch version:",
                            h.version
                          ),
                        e.bi.has(i) && u.push(n.persistence.Cs.vo(o, i));
                    });
                  })
                ),
                !r.isEqual(Vr.MIN))
              ) {
                var c = n.Os.oo(o).next(function (t) {
                  return (
                    Wo(
                      r.k(t) >= 0,
                      "Watch stream reverted to previous snapshot?? " +
                        r +
                        " < " +
                        t
                    ),
                    n.Os.wo(o, o.fo, r)
                  );
                });
                u.push(c);
              }
              return hs
                .pu(u)
                .next(function () {
                  return s.apply(o);
                })
                .next(function () {
                  return n.Us.mo(o, a);
                });
            }
          )
          .then(function (t) {
            return (n.Ds = i), t;
          });
      }),
      (t.lo = function (t, e, n) {
        return (
          Wo(
            e.resumeToken.Lt() > 0,
            "Attempted to persist target data with no resume token"
          ),
          0 === t.resumeToken.Lt() ||
            e.ni.N() - t.ni.N() >= this.po ||
            n.Ii.size + n.Ti.size + n.Ei.size > 0
        );
      }),
      (t.prototype.bo = function (t) {
        for (var e = this, n = 0, r = t; n < r.length; n++) {
          var i = r[n],
            o = i.targetId;
          if ((this.Es.rs(i.Rr, o), this.Es.os(i.Sr, o), !i.fromCache)) {
            var s = this.Ds.get(o);
            Wo(
              null !== s,
              "Can't set limbo-free snapshot version for unknown target: " + o
            );
            var u = s.ni,
              a = s.ri(u);
            this.Ds = this.Ds.ut(o, a);
          }
        }
        return this.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          function (n) {
            return hs.forEach(t, function (t) {
              return hs.forEach(t.Sr, function (t) {
                return e.persistence.Cs.us(n, t);
              });
            });
          }
        );
      }),
      (t.prototype.yo = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "Get next mutation batch",
          "readonly",
          function (n) {
            return void 0 === t && (t = -1), e.Ps._o(n, t);
          }
        );
      }),
      (t.prototype.Io = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "read document",
          "readonly",
          function (n) {
            return e.Us.To(n, t);
          }
        );
      }),
      (t.prototype.Eo = function (t) {
        var e = this;
        return this.persistence
          .runTransaction("Allocate target", "readwrite", function (n) {
            var r;
            return e.Os.Do(n, t).next(function (i) {
              return i
                ? ((r = i), hs.resolve(r))
                : e.Os.Ro(n).next(function (i) {
                    return (
                      (r = new oo(t, i, 0, n.fo)),
                      e.Os.So(n, r).next(function () {
                        return r;
                      })
                    );
                  });
            });
          })
          .then(function (n) {
            return (
              null === e.Ds.get(n.targetId) &&
                ((e.Ds = e.Ds.ut(n.targetId, n)), e.Rs.set(t, n.targetId)),
              n
            );
          });
      }),
      (t.prototype.Do = function (t, e) {
        var n = this.Rs.get(e);
        return void 0 !== n ? hs.resolve(this.Ds.get(n)) : this.Os.Do(t, e);
      }),
      (t.prototype.Ao = function (t, e) {
        var n = this,
          r = this.Ds.get(t);
        Wo(null !== r, "Tried to release nonexistent target: " + t);
        var i = e ? "readwrite" : "readwrite-primary";
        return this.persistence
          .runTransaction("Release target", i, function (i) {
            var o = n.Es.hs(t);
            return e
              ? hs.resolve()
              : hs
                  .forEach(o, function (t) {
                    return n.persistence.Cs.us(i, t);
                  })
                  .next(function () {
                    n.persistence.Cs.removeTarget(i, r);
                  });
          })
          .then(function () {
            (n.Ds = n.Ds.remove(t)), n.Rs.delete(r.target);
          });
      }),
      (t.prototype.Co = function (t, e) {
        var n = this,
          r = Vr.MIN,
          i = go();
        return this.persistence.runTransaction(
          "Execute query",
          "readonly",
          function (o) {
            return n
              .Do(o, t.qn())
              .next(function (t) {
                if (t)
                  return (
                    (r = t.lastLimboFreeSnapshotVersion),
                    n.Os.Po(o, t.targetId).next(function (t) {
                      i = t;
                    })
                  );
              })
              .next(function () {
                return n.Ts.Vo(o, t, e ? r : Vr.MIN, e ? i : go());
              })
              .next(function (t) {
                return { documents: t, ko: i };
              });
          }
        );
      }),
      (t.prototype.No = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "Remote document keys",
          "readonly",
          function (n) {
            return e.Os.Po(n, t);
          }
        );
      }),
      (t.prototype.Oo = function () {
        return this.persistence.Oo();
      }),
      (t.prototype.Fo = function (t) {
        this.Ps.Uo(t);
      }),
      (t.prototype.jo = function (t) {
        this.persistence.jo(t);
      }),
      (t.prototype.Zs = function (t, e, n) {
        var r = this,
          i = e.batch,
          o = i.keys(),
          s = hs.resolve();
        return (
          o.forEach(function (r) {
            s = s
              .next(function () {
                return n.gs(t, r);
              })
              .next(function (t) {
                var o = t,
                  s = e.Tr.get(r);
                Wo(
                  null !== s,
                  "ackVersions should contain every doc in the write."
                ),
                  (!o || o.version.k(s) < 0) &&
                    ((o = i.Bt(r, o, e))
                      ? n.ms(o, e.Ir)
                      : Wo(
                          !t,
                          "Mutation batch " +
                            i +
                            " applied to document " +
                            t +
                            " resulted in null"
                        ));
              });
          }),
          s.next(function () {
            return r.Ps.eo(t, i);
          })
        );
      }),
      (t.prototype.Bu = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "Collect garbage",
          "readwrite-primary",
          function (n) {
            return t.Yu(n, e.Ds);
          }
        );
      }),
      (t.prototype.xo = function (t) {
        var e = this,
          n = this.Ds.get(t);
        return n
          ? Promise.resolve(n.target)
          : this.persistence.runTransaction(
              "Get target data",
              "readonly",
              function (n) {
                return e.Os.ce(n, t).next(function (t) {
                  return t ? t.target : null;
                });
              }
            );
      }),
      (t.prototype.Lo = function () {
        var t = this;
        return this.persistence
          .runTransaction("Get new document changes", "readonly", function (e) {
            return t.ks.Lo(e, t.Ss);
          })
          .then(function (e) {
            var n = e.Mo,
              r = e.readTime;
            return (t.Ss = r), n;
          });
      }),
      (t.prototype.Ls = function () {
        return e(this, void 0, void 0, function () {
          var t,
            e = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (t = this),
                  [
                    4,
                    this.persistence.runTransaction(
                      "Synchronize last document change read time",
                      "readonly",
                      function (t) {
                        return e.ks.qo(t);
                      }
                    ),
                  ]
                );
              case 1:
                return (t.Ss = n.sent()), [2];
            }
          });
        });
      }),
      (t.po = 3e8),
      t
    );
  })();
function bs(t) {
  return e(this, void 0, void 0, function () {
    return n(this, function (e) {
      if (t.code !== kr.FAILED_PRECONDITION || t.message !== Rs) throw t;
      return zo("LocalStore", "Unexpectedly lost primary lease"), [2];
    });
  });
}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Es(t, e) {
  return (
    Wo(
      -1 === e.indexOf("_"),
      "Client key cannot contain '_', but was '" + e + "'"
    ),
    "firestore_clients_" + t + "_" + e
  );
}
function Is(t, e, n) {
  var r = "firestore_mutations_" + t + "_" + n;
  return e.t() && (r += "_" + e.uid), r;
}
function Ts(t, e) {
  return "firestore_targets_" + t + "_" + e;
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ns = (function () {
    function t(t, e, n, r) {
      (this.user = t),
        (this.batchId = e),
        (this.state = n),
        (this.error = r),
        Wo(
          (void 0 !== r) == ("rejected" === n),
          "MutationMetadata must contain an error iff state is 'rejected'"
        );
    }
    return (
      (t.Bo = function (e, n, r) {
        var i = JSON.parse(r),
          o =
            "object" == typeof i &&
            -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) &&
            (void 0 === i.error || "object" == typeof i.error),
          s = void 0;
        return (
          o &&
            i.error &&
            (o =
              "string" == typeof i.error.message &&
              "string" == typeof i.error.code) &&
            (s = new Or(i.error.code, i.error.message)),
          o
            ? new t(e, n, i.state, s)
            : (Qo(
                "SharedClientState",
                "Failed to parse mutation state for ID '" + n + "': " + r
              ),
              null)
        );
      }),
      (t.prototype.Qo = function () {
        var t = { state: this.state, updateTimeMs: Date.now() };
        return (
          this.error &&
            (t.error = { code: this.error.code, message: this.error.message }),
          JSON.stringify(t)
        );
      }),
      t
    );
  })(),
  As = (function () {
    function t(t, e, n) {
      (this.targetId = t),
        (this.state = e),
        (this.error = n),
        Wo(
          (void 0 !== n) == ("rejected" === e),
          "QueryTargetMetadata must contain an error iff state is 'rejected'"
        );
    }
    return (
      (t.Bo = function (e, n) {
        var r = JSON.parse(n),
          i =
            "object" == typeof r &&
            -1 !== ["not-current", "current", "rejected"].indexOf(r.state) &&
            (void 0 === r.error || "object" == typeof r.error),
          o = void 0;
        return (
          i &&
            r.error &&
            (i =
              "string" == typeof r.error.message &&
              "string" == typeof r.error.code) &&
            (o = new Or(r.error.code, r.error.message)),
          i
            ? new t(e, r.state, o)
            : (Qo(
                "SharedClientState",
                "Failed to parse target state for ID '" + e + "': " + n
              ),
              null)
        );
      }),
      (t.prototype.Qo = function () {
        var t = { state: this.state, updateTimeMs: Date.now() };
        return (
          this.error &&
            (t.error = { code: this.error.code, message: this.error.message }),
          JSON.stringify(t)
        );
      }),
      t
    );
  })(),
  Ds = (function () {
    function t(t, e) {
      (this.clientId = t), (this.activeTargetIds = e);
    }
    return (
      (t.Bo = function (e, n) {
        for (
          var r = JSON.parse(n),
            i = "object" == typeof r && r.activeTargetIds instanceof Array,
            o = bo(),
            s = 0;
          i && s < r.activeTargetIds.length;
          ++s
        )
          (i = ei(r.activeTargetIds[s])), (o = o.add(r.activeTargetIds[s]));
        return i
          ? new t(e, o)
          : (Qo(
              "SharedClientState",
              "Failed to parse client data for instance '" + e + "': " + n
            ),
            null);
      }),
      t
    );
  })(),
  Ss = (function () {
    function t(t, e) {
      (this.clientId = t), (this.onlineState = e);
    }
    return (
      (t.Bo = function (e) {
        var n = JSON.parse(e);
        return "object" == typeof n &&
          -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) &&
          "string" == typeof n.clientId
          ? new t(n.clientId, n.onlineState)
          : (Qo("SharedClientState", "Failed to parse online state: " + e),
            null);
      }),
      t
    );
  })(),
  ks = (function () {
    function t() {
      this.activeTargetIds = bo();
    }
    return (
      (t.prototype.Go = function (t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
      }),
      (t.prototype.Wo = function (t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
      }),
      (t.prototype.Qo = function () {
        var t = {
          activeTargetIds: this.activeTargetIds.K(),
          updateTimeMs: Date.now(),
        };
        return JSON.stringify(t);
      }),
      t
    );
  })(),
  Os = (function () {
    function t(e, n, r, i, o) {
      if (
        ((this.zo = e),
        (this.platform = n),
        (this.persistenceKey = r),
        (this.Ko = i),
        (this.Jo = null),
        (this.Ho = null),
        (this.Cr = null),
        (this.Yo = {}),
        (this.Xo = this.$o.bind(this)),
        (this.qu = !1),
        (this.Zo = []),
        !t.th(this.platform))
      )
        throw new Or(
          kr.UNIMPLEMENTED,
          "LocalStorage is not available on this platform."
        );
      var s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      (this.storage = this.platform.window.localStorage),
        (this.currentUser = o),
        (this.nh = Es(this.persistenceKey, this.Ko)),
        (this.ih = (function (t) {
          return "firestore_sequence_number_" + t;
        })(this.persistenceKey)),
        (this.Yo[this.Ko] = new ks()),
        (this.eh = new RegExp("^firestore_clients_" + s + "_([^_]*)$")),
        (this.rh = new RegExp(
          "^firestore_mutations_" + s + "_(\\d+)(?:_(.*))?$"
        )),
        (this.uh = new RegExp("^firestore_targets_" + s + "_(\\d+)$")),
        (this.sh = (function (t) {
          return "firestore_online_state_" + t;
        })(this.persistenceKey)),
        this.platform.window.addEventListener("storage", this.Xo);
    }
    return (
      (t.th = function (t) {
        return !(!t.window || null == t.window.localStorage);
      }),
      (t.prototype.start = function () {
        return e(this, void 0, void 0, function () {
          var t,
            e,
            r,
            i,
            o,
            s,
            u,
            a,
            h,
            c,
            f,
            l = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  Wo(!this.qu, "WebStorageSharedClientState already started"),
                  Wo(
                    null !== this.Jo,
                    "syncEngine property must be set before calling start()"
                  ),
                  Wo(
                    null !== this.Ho,
                    "onlineStateHandler property must be set before calling start()"
                  ),
                  [4, this.Jo.Oo()]
                );
              case 1:
                for (t = n.sent(), e = 0, r = t; e < r.length; e++)
                  (i = r[e]) !== this.Ko &&
                    (o = this.getItem(Es(this.persistenceKey, i))) &&
                    (s = Ds.Bo(i, o)) &&
                    (this.Yo[s.clientId] = s);
                for (
                  this.oh(),
                    (u = this.storage.getItem(this.sh)) &&
                      (a = this.hh(u)) &&
                      this.ah(a),
                    h = 0,
                    c = this.Zo;
                  h < c.length;
                  h++
                )
                  (f = c[h]), this.$o(f);
                return (
                  (this.Zo = []),
                  this.platform.window.addEventListener("unload", function () {
                    return l.shutdown();
                  }),
                  (this.qu = !0),
                  [2]
                );
            }
          });
        });
      }),
      (t.prototype.kr = function (t) {
        this.setItem(this.ih, JSON.stringify(t));
      }),
      (t.prototype.fh = function () {
        var t = bo();
        return (
          Jr(this.Yo, function (e, n) {
            t = t.Ft(n.activeTargetIds);
          }),
          t
        );
      }),
      (t.prototype.lh = function (t) {
        for (var e in this.Yo)
          if (this.Yo.hasOwnProperty(e) && this.Yo[e].activeTargetIds.has(t))
            return !0;
        return !1;
      }),
      (t.prototype.dh = function (t) {
        this.vh(t, "pending");
      }),
      (t.prototype.wh = function (t, e, n) {
        this.vh(t, e, n), this.mh(t);
      }),
      (t.prototype.ph = function (t) {
        var e = "not-current";
        if (this.lh(t)) {
          var n = this.storage.getItem(Ts(this.persistenceKey, t));
          if (n) {
            var r = As.Bo(t, n);
            r && (e = r.state);
          }
        }
        return this.bh.Go(t), this.oh(), e;
      }),
      (t.prototype.gh = function (t) {
        this.bh.Wo(t), this.oh();
      }),
      (t.prototype.yh = function (t) {
        return this.bh.activeTargetIds.has(t);
      }),
      (t.prototype._h = function (t) {
        this.removeItem(Ts(this.persistenceKey, t));
      }),
      (t.prototype.Ih = function (t, e, n) {
        this.Th(t, e, n);
      }),
      (t.prototype.Ms = function (t, e, n) {
        var r = this;
        e.forEach(function (t) {
          r.mh(t);
        }),
          (this.currentUser = t),
          n.forEach(function (t) {
            r.dh(t);
          });
      }),
      (t.prototype.Eh = function (t) {
        this.Dh(t);
      }),
      (t.prototype.shutdown = function () {
        this.qu &&
          (this.platform.window.removeEventListener("storage", this.Xo),
          this.removeItem(this.nh),
          (this.qu = !1));
      }),
      (t.prototype.getItem = function (t) {
        var e = this.storage.getItem(t);
        return zo("SharedClientState", "READ", t, e), e;
      }),
      (t.prototype.setItem = function (t, e) {
        zo("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
      }),
      (t.prototype.removeItem = function (t) {
        zo("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
      }),
      (t.prototype.$o = function (t) {
        var r = this;
        if (t.storageArea === this.storage) {
          if (
            (zo("SharedClientState", "EVENT", t.key, t.newValue),
            t.key === this.nh)
          )
            return void Qo(
              "Received WebStorage notification for local change. Another client might have garbage-collected our state"
            );
          this.zo.Qr(function () {
            return e(r, void 0, void 0, function () {
              var e, r, i, o, s, u;
              return n(this, function (n) {
                if (!this.qu) return this.Zo.push(t), [2];
                if (null === t.key) return [2];
                if (this.eh.test(t.key)) {
                  if (null == t.newValue)
                    return (r = this.Rh(t.key)), [2, this.Sh(r, null)];
                  if ((e = this.Ah(t.key, t.newValue)))
                    return [2, this.Sh(e.clientId, e)];
                } else if (this.rh.test(t.key)) {
                  if (null !== t.newValue && (i = this.Ch(t.key, t.newValue)))
                    return [2, this.Ph(i)];
                } else if (this.uh.test(t.key)) {
                  if (null !== t.newValue && (o = this.Vh(t.key, t.newValue)))
                    return [2, this.kh(o)];
                } else if (t.key === this.sh) {
                  if (null !== t.newValue && (s = this.hh(t.newValue)))
                    return [2, this.ah(s)];
                } else
                  t.key === this.ih &&
                    (Wo(!!this.Cr, "Missing sequenceNumberHandler"),
                    (u = (function (t) {
                      var e = os.Nr;
                      if (null != t)
                        try {
                          var n = JSON.parse(t);
                          Wo(
                            "number" == typeof n,
                            "Found non-numeric sequence number"
                          ),
                            (e = n);
                        } catch (t) {
                          Qo(
                            "SharedClientState",
                            "Failed to read sequence number from WebStorage",
                            t
                          );
                        }
                      return e;
                    })(t.newValue)) !== os.Nr && this.Cr(u));
                return [2];
              });
            });
          });
        }
      }),
      Object.defineProperty(t.prototype, "bh", {
        get: function () {
          return this.Yo[this.Ko];
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.oh = function () {
        this.setItem(this.nh, this.bh.Qo());
      }),
      (t.prototype.vh = function (t, e, n) {
        var r = new Ns(this.currentUser, t, e, n),
          i = Is(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.Qo());
      }),
      (t.prototype.mh = function (t) {
        var e = Is(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
      }),
      (t.prototype.Dh = function (t) {
        var e = { clientId: this.Ko, onlineState: t };
        this.storage.setItem(this.sh, JSON.stringify(e));
      }),
      (t.prototype.Th = function (t, e, n) {
        var r = Ts(this.persistenceKey, t),
          i = new As(t, e, n);
        this.setItem(r, i.Qo());
      }),
      (t.prototype.Rh = function (t) {
        var e = this.eh.exec(t);
        return e ? e[1] : null;
      }),
      (t.prototype.Ah = function (t, e) {
        var n = this.Rh(t);
        return (
          Wo(null !== n, "Cannot parse client state key '" + t + "'"),
          Ds.Bo(n, e)
        );
      }),
      (t.prototype.Ch = function (t, e) {
        var n = this.rh.exec(t);
        Wo(null !== n, "Cannot parse mutation batch key '" + t + "'");
        var r = Number(n[1]),
          i = void 0 !== n[2] ? n[2] : null;
        return Ns.Bo(new Sr(i), r, e);
      }),
      (t.prototype.Vh = function (t, e) {
        var n = this.uh.exec(t);
        Wo(null !== n, "Cannot parse query target key '" + t + "'");
        var r = Number(n[1]);
        return As.Bo(r, e);
      }),
      (t.prototype.hh = function (t) {
        return Ss.Bo(t);
      }),
      (t.prototype.Ph = function (t) {
        return e(this, void 0, void 0, function () {
          return n(this, function (e) {
            return t.user.uid !== this.currentUser.uid
              ? (zo(
                  "SharedClientState",
                  "Ignoring mutation for non-active user " + t.user.uid
                ),
                [2])
              : [2, this.Jo.Nh(t.batchId, t.state, t.error)];
          });
        });
      }),
      (t.prototype.kh = function (t) {
        return this.Jo.Oh(t.targetId, t.state, t.error);
      }),
      (t.prototype.Sh = function (t, r) {
        var i = this,
          o = this.fh();
        r ? (this.Yo[t] = r) : delete this.Yo[t];
        var s = this.fh(),
          u = [],
          a = [];
        return (
          s.forEach(function (t) {
            return e(i, void 0, void 0, function () {
              return n(this, function (e) {
                return o.has(t) || u.push(t), [2];
              });
            });
          }),
          o.forEach(function (t) {
            return e(i, void 0, void 0, function () {
              return n(this, function (e) {
                return s.has(t) || a.push(t), [2];
              });
            });
          }),
          this.Jo.Fh(u, a)
        );
      }),
      (t.prototype.ah = function (t) {
        this.Yo[t.clientId] && this.Ho(t.onlineState);
      }),
      t
    );
  })(),
  Cs = (function () {
    function t() {
      (this.Uh = new ks()),
        (this.jh = {}),
        (this.Jo = null),
        (this.Ho = null),
        (this.Cr = null);
    }
    return (
      (t.prototype.dh = function (t) {}),
      (t.prototype.wh = function (t, e, n) {}),
      (t.prototype.ph = function (t) {
        return this.Uh.Go(t), this.jh[t] || "not-current";
      }),
      (t.prototype.Ih = function (t, e, n) {
        this.jh[t] = e;
      }),
      (t.prototype.gh = function (t) {
        this.Uh.Wo(t);
      }),
      (t.prototype.yh = function (t) {
        return this.Uh.activeTargetIds.has(t);
      }),
      (t.prototype._h = function (t) {
        delete this.jh[t];
      }),
      (t.prototype.fh = function () {
        return this.Uh.activeTargetIds;
      }),
      (t.prototype.lh = function (t) {
        return this.Uh.activeTargetIds.has(t);
      }),
      (t.prototype.start = function () {
        return (this.Uh = new ks()), Promise.resolve();
      }),
      (t.prototype.Ms = function (t, e, n) {}),
      (t.prototype.Eh = function (t) {}),
      (t.prototype.shutdown = function () {}),
      (t.prototype.kr = function (t) {}),
      t
    );
  })(),
  Rs =
    "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
  xs = (function () {
    function t() {
      this.xh = [];
    }
    return (
      (t.prototype.Lh = function (t) {
        this.xh.push(t);
      }),
      (t.prototype.Mh = function () {
        this.xh.forEach(function (t) {
          return t();
        });
      }),
      t
    );
  })(),
  Ps = (function () {
    function t(t, e, n) {
      (this.qh = t), (this.Ps = e), (this.Bh = n);
    }
    return (
      (t.prototype.To = function (t, e) {
        var n = this;
        return this.Ps.Qh(t, e).next(function (r) {
          return n.Gh(t, e, r);
        });
      }),
      (t.prototype.Gh = function (t, e, n) {
        return this.qh.gs(t, e).next(function (t) {
          for (var r = 0, i = n; r < i.length; r++) t = i[r].qt(e, t);
          return t;
        });
      }),
      (t.prototype.Wh = function (t, e, n) {
        var r = fo();
        return (
          e.forEach(function (t, e) {
            for (var i = 0, o = n; i < o.length; i++) e = o[i].qt(t, e);
            r = r.ut(t, e);
          }),
          r
        );
      }),
      (t.prototype.Bs = function (t, e) {
        var n = this;
        return this.qh.getEntries(t, e).next(function (e) {
          return n.mo(t, e);
        });
      }),
      (t.prototype.mo = function (t, e) {
        var n = this;
        return this.Ps.zh(t, e).next(function (r) {
          var i = n.Wh(t, e, r),
            o = co();
          return (
            i.forEach(function (t, e) {
              e || (e = new Gi(t, Vr.V())), (o = o.ut(t, e));
            }),
            o
          );
        });
      }),
      (t.prototype.Vo = function (t, e, n) {
        return e.Tn()
          ? this.Kh(t, e.path)
          : e.Yn()
          ? this.Jh(t, e, n)
          : this.Hh(t, e, n);
      }),
      (t.prototype.Kh = function (t, e) {
        return this.To(t, new Br(e)).next(function (t) {
          var e = po();
          return t instanceof Bi && (e = e.ut(t.key, t)), e;
        });
      }),
      (t.prototype.Jh = function (t, e, n) {
        var r = this;
        Wo(
          e.path.M(),
          "Currently we only support collection group queries at the root."
        );
        var i = e.collectionGroup,
          o = po();
        return this.Bh.Yh(t, i).next(function (s) {
          return hs
            .forEach(s, function (s) {
              var u = e.Ln(s.child(i));
              return r.Hh(t, u, n).next(function (t) {
                t.forEach(function (t, e) {
                  o = o.ut(t, e);
                });
              });
            })
            .next(function () {
              return o;
            });
        });
      }),
      (t.prototype.Hh = function (t, e, n) {
        var r,
          i,
          o = this;
        return this.qh
          .Vo(t, e, n)
          .next(function (n) {
            return (r = n), o.Ps.Xh(t, e);
          })
          .next(function (e) {
            return (
              (i = e),
              o.$h(t, i, r).next(function (t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++)
                  for (
                    var o = n[e], s = 0, u = o.mutations;
                    s < u.length;
                    s++
                  ) {
                    var a = u[s],
                      h = a.key,
                      c = r.get(h),
                      f = a.qt(c, c, o.gr);
                    r = f instanceof Bi ? r.ut(h, f) : r.remove(h);
                  }
              })
            );
          })
          .next(function () {
            return (
              r.forEach(function (t, n) {
                e.matches(n) || (r = r.remove(t));
              }),
              r
            );
          });
      }),
      (t.prototype.$h = function (t, e, n) {
        for (var r = go(), i = 0, o = e; i < o.length; i++)
          for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof Li && null === n.get(a.key) && (r = r.add(a.key));
          }
        var h = n;
        return this.qh.getEntries(t, r).next(function (t) {
          return (
            t.forEach(function (t, e) {
              null !== e && e instanceof Bi && (h = h.ut(t, e));
            }),
            h
          );
        });
      }),
      t
    );
  })(),
  Ms = (function () {
    function t() {}
    return (
      (t.prototype.xs = function (t) {
        this.Zh = t;
      }),
      (t.prototype.Vo = function (t, e, n, i) {
        var o = this;
        return (
          Wo(void 0 !== this.Zh, "setLocalDocumentsView() not called"),
          e.Mn() || n.isEqual(Vr.MIN)
            ? this.tc(t, e)
            : this.Zh.Bs(t, i).next(function (s) {
                var u = o.nc(e, s);
                return (e.Kn() || e.Jn()) && o.ic(e.Dn, u, i, n)
                  ? o.tc(t, e)
                  : (Bo() <= r.DEBUG &&
                      zo(
                        "IndexFreeQueryEngine",
                        "Re-using previous result from %s to execute query: %s",
                        n.toString(),
                        e.toString()
                      ),
                    o.Zh.Vo(t, e, n).next(function (t) {
                      return (
                        u.forEach(function (e) {
                          t = t.ut(e.key, e);
                        }),
                        t
                      );
                    }));
              })
        );
      }),
      (t.prototype.nc = function (t, e) {
        var n = new Kr(function (e, n) {
          return t.Bn(e, n);
        });
        return (
          e.forEach(function (e, r) {
            r instanceof Bi && t.matches(r) && (n = n.add(r));
          }),
          n
        );
      }),
      (t.prototype.ic = function (t, e, n, r) {
        if (n.size !== e.size) return !0;
        var i = "F" === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.k(r) > 0);
      }),
      (t.prototype.tc = function (t, e) {
        return (
          Bo() <= r.DEBUG &&
            zo(
              "IndexFreeQueryEngine",
              "Using full collection scan to execute query: %s",
              e.toString()
            ),
          this.Zh.Vo(t, e, Vr.MIN)
        );
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ls(t) {
  for (var e = "", n = 0; n < t.length; n++)
    e.length > 0 && (e = Vs(e)), (e = _s(t.get(n), e));
  return Vs(e);
}
function _s(t, e) {
  for (var n = e, r = t.length, i = 0; i < r; i++) {
    var o = t.charAt(i);
    switch (o) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += o;
    }
  }
  return n;
}
function Vs(t) {
  return t + "";
}
function Us(t) {
  var e = t.length;
  if ((Wo(e >= 2, "Invalid path " + t), 2 === e))
    return (
      Wo(
        "" === t.charAt(0) && "" === t.charAt(1),
        "Non-empty path " + t + " had length 2"
      ),
      qr.Y
    );
  for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
    var s = t.indexOf("", o);
    switch (
      ((s < 0 || s > n) && Ko('Invalid encoded resource path: "' + t + '"'),
      t.charAt(s + 1))
    ) {
      case "":
        var u = t.substring(o, s),
          a = void 0;
        0 === i.length ? (a = u) : ((a = i += u), (i = "")), r.push(a);
        break;
      case "":
        (i += t.substring(o, s)), (i += "\0");
        break;
      case "":
        i += t.substring(o, s + 1);
        break;
      default:
        Ko('Invalid encoded resource path: "' + t + '"');
    }
    o = s + 2;
  }
  return new qr(r);
}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var qs = (function () {
    function t() {
      this.ec = new Fs();
    }
    return (
      (t.prototype.rc = function (t, e) {
        return this.ec.add(e), hs.resolve();
      }),
      (t.prototype.Yh = function (t, e) {
        return hs.resolve(this.ec.getEntries(e));
      }),
      t
    );
  })(),
  Fs = (function () {
    function t() {
      this.index = {};
    }
    return (
      (t.prototype.add = function (t) {
        Wo(t.length % 2 == 1, "Expected a collection path.");
        var e = t.B(),
          n = t.L(),
          r = this.index[e] || new Kr(qr.F),
          i = !r.has(n);
        return (this.index[e] = r.add(n)), i;
      }),
      (t.prototype.has = function (t) {
        var e = t.B(),
          n = t.L(),
          r = this.index[e];
        return r && r.has(n);
      }),
      (t.prototype.getEntries = function (t) {
        return (this.index[t] || new Kr(qr.F)).K();
      }),
      t
    );
  })(),
  js = (function () {
    function t(t, e) {
      (this.Bh = t),
        (this.Cs = e),
        (this.Ps = []),
        (this.uc = 1),
        (this.lastStreamToken = $r.Mt),
        (this.sc = new Kr(ms.bn));
    }
    return (
      (t.prototype.oc = function (t) {
        return hs.resolve(0 === this.Ps.length);
      }),
      (t.prototype.Ys = function (t, e, n) {
        var r = e.batchId,
          i = this.hc(r, "acknowledged");
        Wo(
          0 === i,
          "Can only acknowledge the first batch in the mutation queue"
        );
        var o = this.Ps[i];
        return (
          Wo(
            r === o.batchId,
            "Queue ordering failure: expected batch " +
              r +
              ", got batch " +
              o.batchId
          ),
          (this.lastStreamToken = n),
          hs.resolve()
        );
      }),
      (t.prototype.uo = function (t) {
        return hs.resolve(this.lastStreamToken);
      }),
      (t.prototype.so = function (t, e) {
        return (this.lastStreamToken = e), hs.resolve();
      }),
      (t.prototype.Ks = function (t, e, n, r) {
        Wo(0 !== r.length, "Mutation batches should not be empty");
        var i = this.uc;
        this.uc++,
          this.Ps.length > 0 &&
            Wo(
              this.Ps[this.Ps.length - 1].batchId < i,
              "Mutation batchIDs must be monotonically increasing order"
            );
        var o = new es(i, e, n, r);
        this.Ps.push(o);
        for (var s = 0, u = r; s < u.length; s++) {
          var a = u[s];
          (this.sc = this.sc.add(new ms(a.key, i))),
            this.Bh.rc(t, a.key.path.L());
        }
        return hs.resolve(o);
      }),
      (t.prototype.io = function (t, e) {
        return hs.resolve(this.cc(e));
      }),
      (t.prototype.Hs = function (t, e) {
        var n = this.cc(e);
        return (
          Wo(null != n, "Failed to find local mutation batch."),
          hs.resolve(n.keys())
        );
      }),
      (t.prototype._o = function (t, e) {
        var n = e + 1,
          r = this.ac(n),
          i = r < 0 ? 0 : r;
        return hs.resolve(this.Ps.length > i ? this.Ps[i] : null);
      }),
      (t.prototype.ro = function () {
        return hs.resolve(0 === this.Ps.length ? -1 : this.uc - 1);
      }),
      (t.prototype.qs = function (t) {
        return hs.resolve(this.Ps.slice());
      }),
      (t.prototype.Qh = function (t, e) {
        var n = this,
          r = new ms(e, 0),
          i = new ms(e, Number.POSITIVE_INFINITY),
          o = [];
        return (
          this.sc.kt([r, i], function (t) {
            Wo(
              e.isEqual(t.key),
              "Should only iterate over a single key's batches"
            );
            var r = n.cc(t.ls);
            Wo(null !== r, "Batches in the index must exist in the main table"),
              o.push(r);
          }),
          hs.resolve(o)
        );
      }),
      (t.prototype.zh = function (t, e) {
        var n = this,
          r = new Kr(Jo);
        return (
          e.forEach(function (t) {
            var e = new ms(t, 0),
              i = new ms(t, Number.POSITIVE_INFINITY);
            n.sc.kt([e, i], function (e) {
              Wo(
                t.isEqual(e.key),
                "For each key, should only iterate over a single key's batches"
              ),
                (r = r.add(e.ls));
            });
          }),
          hs.resolve(this.fc(r))
        );
      }),
      (t.prototype.Xh = function (t, e) {
        Wo(
          !e.Yn(),
          "CollectionGroup queries should be handled in LocalDocumentsView"
        );
        var n = e.path,
          r = n.length + 1,
          i = n;
        Br.nt(i) || (i = i.child(""));
        var o = new ms(new Br(i), 0),
          s = new Kr(Jo);
        return (
          this.sc.Nt(function (t) {
            var e = t.key.path;
            return !!n.G(e) && (e.length === r && (s = s.add(t.ls)), !0);
          }, o),
          hs.resolve(this.fc(s))
        );
      }),
      (t.prototype.fc = function (t) {
        var e = this,
          n = [];
        return (
          t.forEach(function (t) {
            var r = e.cc(t);
            null !== r && n.push(r);
          }),
          n
        );
      }),
      (t.prototype.eo = function (t, e) {
        var n = this;
        Wo(
          0 === this.hc(e.batchId, "removed"),
          "Can only remove the first entry of the mutation queue"
        ),
          this.Ps.shift();
        var r = this.sc;
        return hs
          .forEach(e.mutations, function (i) {
            var o = new ms(i.key, e.batchId);
            return (r = r.delete(o)), n.Cs.lc(t, i.key);
          })
          .next(function () {
            n.sc = r;
          });
      }),
      (t.prototype.Uo = function (t) {}),
      (t.prototype.fs = function (t, e) {
        var n = new ms(e, 0),
          r = this.sc.Ot(n);
        return hs.resolve(e.isEqual(r && r.key));
      }),
      (t.prototype.to = function (t) {
        return (
          0 === this.Ps.length &&
            Wo(
              this.sc.M(),
              "Document leak -- detected dangling mutation references when queue is empty."
            ),
          hs.resolve()
        );
      }),
      (t.prototype.hc = function (t, e) {
        var n = this.ac(t);
        return (
          Wo(n >= 0 && n < this.Ps.length, "Batches must exist to be " + e), n
        );
      }),
      (t.prototype.ac = function (t) {
        return 0 === this.Ps.length ? 0 : t - this.Ps[0].batchId;
      }),
      (t.prototype.cc = function (t) {
        var e = this.ac(t);
        if (e < 0 || e >= this.Ps.length) return null;
        var n = this.Ps[e];
        return Wo(n.batchId === t, "If found batch must match"), n;
      }),
      t
    );
  })(),
  Bs = (function () {
    function e(t, e) {
      (this.Bh = t), (this.dc = e), (this.docs = new Gr(Br.F)), (this.size = 0);
    }
    return (
      (e.prototype.ms = function (t, e, n) {
        Wo(
          !n.isEqual(Vr.MIN),
          "Cannot add a document with a read time of zero"
        );
        var r = e.key,
          i = this.docs.get(r),
          o = i ? i.size : 0,
          s = this.dc(e);
        return (
          (this.docs = this.docs.ut(r, { vc: e, size: s, readTime: n })),
          (this.size += s - o),
          this.Bh.rc(t, r.path.L())
        );
      }),
      (e.prototype.bs = function (t) {
        var e = this.docs.get(t);
        e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
      }),
      (e.prototype.gs = function (t, e) {
        var n = this.docs.get(e);
        return hs.resolve(n ? n.vc : null);
      }),
      (e.prototype.getEntries = function (t, e) {
        var n = this,
          r = fo();
        return (
          e.forEach(function (t) {
            var e = n.docs.get(t);
            r = r.ut(t, e ? e.vc : null);
          }),
          hs.resolve(r)
        );
      }),
      (e.prototype.Vo = function (t, e, n) {
        Wo(
          !e.Yn(),
          "CollectionGroup queries should be handled in LocalDocumentsView"
        );
        for (
          var r = po(), i = new Br(e.path.child("")), o = this.docs.lt(i);
          o.gt();

        ) {
          var s = o.bt(),
            u = s.key,
            a = s.value,
            h = a.vc,
            c = a.readTime;
          if (!e.path.G(u.path)) break;
          c.k(n) <= 0 ||
            (h instanceof Bi && e.matches(h) && (r = r.ut(h.key, h)));
        }
        return hs.resolve(r);
      }),
      (e.prototype.wc = function (t, e) {
        return hs.forEach(this.docs, function (t) {
          return e(t);
        });
      }),
      (e.prototype.Lo = function (t, e) {
        throw new Error(
          "getNewDocumentChanges() is not supported with MemoryPersistence"
        );
      }),
      (e.prototype.qo = function (t) {
        return hs.resolve(Vr.MIN);
      }),
      (e.prototype.Xs = function (t) {
        return new e.mc(this);
      }),
      (e.prototype.pc = function (t) {
        return hs.resolve(this.size);
      }),
      (e.mc = (function (e) {
        function n(t) {
          var n = e.call(this) || this;
          return (n.bc = t), n;
        }
        return (
          t(n, e),
          (n.prototype.Is = function (t) {
            var e = this,
              n = [];
            return (
              this.ds.forEach(function (r, i) {
                i ? n.push(e.bc.ms(t, i, e.readTime)) : e.bc.bs(r);
              }),
              hs.pu(n)
            );
          }),
          (n.prototype.ys = function (t, e) {
            return this.bc.gs(t, e);
          }),
          (n.prototype._s = function (t, e) {
            return this.bc.getEntries(t, e);
          }),
          n
        );
      })(gs)),
      e
    );
  })(),
  Gs = (function () {
    function t(t, e) {
      (this.gc = t),
        Wo(
          (1 & t) === t,
          "Generator ID " + t + " contains more than 1 reserved bits"
        ),
        this.yc(void 0 !== e ? e : this.gc);
    }
    return (
      (t.prototype.next = function () {
        var t = this._c;
        return (this._c += 2), t;
      }),
      (t.prototype.after = function (t) {
        return this.yc(t + 2), this.next();
      }),
      (t.prototype.yc = function (t) {
        Wo(
          (1 & t) === this.gc,
          "Cannot supply target ID from different generator ID"
        ),
          (this._c = t);
      }),
      (t.Ic = function () {
        return new t(0, 2);
      }),
      (t.Tc = function () {
        return new t(1);
      }),
      t
    );
  })(),
  zs = (function () {
    function t(t) {
      (this.persistence = t),
        (this.Ec = new rs(function (t) {
          return t.canonicalId();
        })),
        (this.lastRemoteSnapshotVersion = Vr.MIN),
        (this.highestTargetId = 0),
        (this.Dc = 0),
        (this.Rc = new ys()),
        (this.targetCount = 0),
        (this.Sc = Gs.Ic());
    }
    return (
      (t.prototype.$i = function (t, e) {
        return (
          this.Ec.forEach(function (t, n) {
            return e(n);
          }),
          hs.resolve()
        );
      }),
      (t.prototype.oo = function (t) {
        return hs.resolve(this.lastRemoteSnapshotVersion);
      }),
      (t.prototype.Ac = function (t) {
        return hs.resolve(this.Dc);
      }),
      (t.prototype.Ro = function (t) {
        var e = this.Sc.after(this.highestTargetId);
        return (this.highestTargetId = e), hs.resolve(e);
      }),
      (t.prototype.wo = function (t, e, n) {
        return (
          n && (this.lastRemoteSnapshotVersion = n),
          e > this.Dc && (this.Dc = e),
          hs.resolve()
        );
      }),
      (t.prototype.Cc = function (t) {
        this.Ec.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.highestTargetId = e),
          t.sequenceNumber > this.Dc && (this.Dc = t.sequenceNumber);
      }),
      (t.prototype.So = function (t, e) {
        return (
          Wo(!this.Ec.has(e.target), "Adding a target that already exists"),
          this.Cc(e),
          (this.targetCount += 1),
          hs.resolve()
        );
      }),
      (t.prototype.do = function (t, e) {
        return (
          Wo(this.Ec.has(e.target), "Updating a non-existent target"),
          this.Cc(e),
          hs.resolve()
        );
      }),
      (t.prototype.Pc = function (t, e) {
        return (
          Wo(this.targetCount > 0, "Removing a target from an empty cache"),
          Wo(
            this.Ec.has(e.target),
            "Removing a non-existent target from the cache"
          ),
          this.Ec.delete(e.target),
          this.Rc.hs(e.targetId),
          (this.targetCount -= 1),
          hs.resolve()
        );
      }),
      (t.prototype.Ju = function (t, e, n) {
        var r = this,
          i = 0,
          o = [];
        return (
          this.Ec.forEach(function (s, u) {
            u.sequenceNumber <= e &&
              null === n.get(u.targetId) &&
              (r.Ec.delete(s), o.push(r.Vc(t, u.targetId)), i++);
          }),
          hs.pu(o).next(function () {
            return i;
          })
        );
      }),
      (t.prototype.kc = function (t) {
        return hs.resolve(this.targetCount);
      }),
      (t.prototype.Do = function (t, e) {
        var n = this.Ec.get(e) || null;
        return hs.resolve(n);
      }),
      (t.prototype.ce = function (t, e) {
        return Ko("Not yet implemented.");
      }),
      (t.prototype.ao = function (t, e, n) {
        this.Rc.rs(e, n);
        var r = this.persistence.Cs,
          i = [];
        return (
          r &&
            e.forEach(function (e) {
              i.push(r.es(t, e));
            }),
          hs.pu(i)
        );
      }),
      (t.prototype.co = function (t, e, n) {
        this.Rc.os(e, n);
        var r = this.persistence.Cs,
          i = [];
        return (
          r &&
            e.forEach(function (e) {
              i.push(r.us(t, e));
            }),
          hs.pu(i)
        );
      }),
      (t.prototype.Vc = function (t, e) {
        return this.Rc.hs(e), hs.resolve();
      }),
      (t.prototype.Po = function (t, e) {
        var n = this.Rc.as(e);
        return hs.resolve(n);
      }),
      (t.prototype.fs = function (t, e) {
        return hs.resolve(this.Rc.fs(e));
      }),
      t
    );
  })(),
  Qs =
    "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
  Ys = (function () {
    function t(t, e) {
      var n = this;
      (this.clientId = t),
        (this.Nc = {}),
        (this.Oc = new os(0)),
        (this.Fc = !1),
        (this.Fc = !0),
        (this.Cs = e(this)),
        (this.Os = new zs(this)),
        (this.Bh = new qs()),
        (this.qh = new Bs(this.Bh, function (t) {
          return n.Cs.Uc(t);
        }));
    }
    return (
      (t.prototype.shutdown = function () {
        return (this.Fc = !1), Promise.resolve();
      }),
      Object.defineProperty(t.prototype, "qu", {
        get: function () {
          return this.Fc;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.Oo = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            return [2, [this.clientId]];
          });
        });
      }),
      (t.prototype.jc = function (t) {
        return t(!0);
      }),
      (t.prototype.xc = function () {}),
      (t.prototype.jo = function (t) {}),
      (t.prototype.js = function () {
        return this.Bh;
      }),
      (t.prototype.Vs = function (t) {
        var e = this.Nc[t.i()];
        return e || ((e = new js(this.Bh, this.Cs)), (this.Nc[t.i()] = e)), e;
      }),
      (t.prototype.Fs = function () {
        return this.Os;
      }),
      (t.prototype.Ns = function () {
        return this.qh;
      }),
      (t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        zo("MemoryPersistence", "Starting transaction:", t);
        var i = new Ks(this.Oc.next());
        return (
          this.Cs.Lc(),
          n(i)
            .next(function (t) {
              return r.Cs.Mc(i).next(function () {
                return t;
              });
            })
            .wu()
            .then(function (t) {
              return i.Mh(), t;
            })
        );
      }),
      (t.prototype.qc = function (t, e) {
        return hs.bu(
          Object.values(this.Nc).map(function (n) {
            return function () {
              return n.fs(t, e);
            };
          })
        );
      }),
      t
    );
  })(),
  Ks = (function (e) {
    function n(t) {
      var n = e.call(this) || this;
      return (n.fo = t), n;
    }
    return t(n, e), n;
  })(xs),
  Ws = (function () {
    function t(t) {
      (this.persistence = t), (this.Bc = null), (this.Qc = null);
    }
    return (
      Object.defineProperty(t.prototype, "Gc", {
        get: function () {
          if (this.Qc) return this.Qc;
          throw Ko("orphanedDocuments is only valid during a transaction.");
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.As = function (t) {
        this.Bc = t;
      }),
      (t.prototype.es = function (t, e) {
        return this.Gc.delete(e), hs.resolve();
      }),
      (t.prototype.us = function (t, e) {
        return this.Gc.add(e), hs.resolve();
      }),
      (t.prototype.lc = function (t, e) {
        return this.Gc.add(e), hs.resolve();
      }),
      (t.prototype.removeTarget = function (t, e) {
        var n = this,
          r = this.persistence.Fs();
        return r
          .Po(t, e.targetId)
          .next(function (t) {
            t.forEach(function (t) {
              return n.Gc.add(t);
            });
          })
          .next(function () {
            return r.Pc(t, e);
          });
      }),
      (t.prototype.Lc = function () {
        this.Qc = new Set();
      }),
      (t.prototype.Mc = function (t) {
        var e = this,
          n = this.persistence.Ns().Xs();
        return hs
          .forEach(this.Gc, function (r) {
            return e.Wc(t, r).next(function (t) {
              t || n.bs(r);
            });
          })
          .next(function () {
            return (e.Qc = null), n.apply(t);
          });
      }),
      (t.prototype.vo = function (t, e) {
        var n = this;
        return this.Wc(t, e).next(function (t) {
          t ? n.Gc.delete(e) : n.Gc.add(e);
        });
      }),
      (t.prototype.Uc = function (t) {
        return 0;
      }),
      (t.prototype.Wc = function (t, e) {
        var n = this;
        return hs.bu([
          function () {
            return n.persistence.Fs().fs(t, e);
          },
          function () {
            return n.persistence.qc(t, e);
          },
          function () {
            return hs.resolve(n.Bc.fs(e));
          },
        ]);
      }),
      t
    );
  })(),
  Hs = (function () {
    function t() {}
    return (
      (t.prototype.initialize = function (t, e, n, r, i, o) {
        if (o.zc) throw new Or(kr.FAILED_PRECONDITION, Qs);
        return (this.clientId = r), Promise.resolve();
      }),
      (t.prototype.Kc = function () {
        var t = !1;
        return {
          qu: t,
          start: function () {
            return (t = !0);
          },
          stop: function () {
            return (t = !1);
          },
        };
      }),
      (t.prototype.Jc = function () {
        return (
          Wo(!!this.clientId, "initialize() not called"),
          new Ys(this.clientId, function (t) {
            return new Ws(t);
          })
        );
      }),
      (t.prototype.Hc = function () {
        return new Cs();
      }),
      (t.prototype.clearPersistence = function () {
        throw new Or(kr.FAILED_PRECONDITION, Qs);
      }),
      t
    );
  })(),
  Js = (function () {
    function t(t, e, n, r, i) {
      void 0 === n && (n = 1e3),
        void 0 === r && (r = 1.5),
        void 0 === i && (i = 6e4),
        (this.zo = t),
        (this.Fr = e),
        (this.Yc = n),
        (this.Xc = r),
        (this.$c = i),
        (this.Zc = 0),
        (this.ta = null),
        (this.na = Date.now()),
        this.reset();
    }
    return (
      (t.prototype.reset = function () {
        this.Zc = 0;
      }),
      (t.prototype.ia = function () {
        this.Zc = this.$c;
      }),
      (t.prototype.ea = function (t) {
        var e = this;
        this.cancel();
        var n = Math.floor(this.Zc + this.ra()),
          r = Math.max(0, Date.now() - this.na),
          i = Math.max(0, n - r);
        this.Zc > 0 &&
          zo(
            "ExponentialBackoff",
            "Backing off for " +
              i +
              " ms (base delay: " +
              this.Zc +
              " ms, delay with jitter: " +
              n +
              " ms, last attempt: " +
              r +
              " ms ago)"
          ),
          (this.ta = this.zo.iu(this.Fr, i, function () {
            return (e.na = Date.now()), t();
          })),
          (this.Zc *= this.Xc),
          this.Zc < this.Yc && (this.Zc = this.Yc),
          this.Zc > this.$c && (this.Zc = this.$c);
      }),
      (t.prototype.cancel = function () {
        null !== this.ta && (this.ta.cancel(), (this.ta = null));
      }),
      (t.prototype.ra = function () {
        return (Math.random() - 0.5) * this.Zc;
      }),
      t
    );
  })(),
  Xs = (function () {
    function t(t, e, n, r, i, o) {
      (this.zo = t),
        (this.ua = n),
        (this.connection = r),
        (this.sa = i),
        (this.listener = o),
        (this.state = 0),
        (this.oa = 0),
        (this.ha = null),
        (this.stream = null),
        (this.ca = new Js(t, e));
    }
    return (
      (t.prototype.aa = function () {
        return 1 === this.state || 2 === this.state || 4 === this.state;
      }),
      (t.prototype.fa = function () {
        return 2 === this.state;
      }),
      (t.prototype.start = function () {
        3 !== this.state
          ? (Wo(0 === this.state, "Already started"), this.auth())
          : this.la();
      }),
      (t.prototype.stop = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            switch (t.label) {
              case 0:
                return this.aa() ? [4, this.close(0)] : [3, 2];
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (t.prototype.da = function () {
        Wo(!this.aa(), "Can only inhibit backoff in a stopped state"),
          (this.state = 0),
          this.ca.reset();
      }),
      (t.prototype.va = function () {
        var t = this;
        this.fa() &&
          null === this.ha &&
          (this.ha = this.zo.iu(this.ua, 6e4, function () {
            return t.wa();
          }));
      }),
      (t.prototype.ma = function (t) {
        this.pa(), this.stream.send(t);
      }),
      (t.prototype.wa = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            return this.fa() ? [2, this.close(0)] : [2];
          });
        });
      }),
      (t.prototype.pa = function () {
        this.ha && (this.ha.cancel(), (this.ha = null));
      }),
      (t.prototype.close = function (t, r) {
        return e(this, void 0, void 0, function () {
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  Wo(this.aa(), "Only started streams should be closed."),
                  Wo(
                    3 === t || Zr(r),
                    "Can't provide an error when not in an error state."
                  ),
                  this.pa(),
                  this.ca.cancel(),
                  this.oa++,
                  3 !== t
                    ? this.ca.reset()
                    : r && r.code === kr.RESOURCE_EXHAUSTED
                    ? (Qo(r.toString()),
                      Qo(
                        "Using maximum backoff delay to prevent overloading the backend."
                      ),
                      this.ca.ia())
                    : r && r.code === kr.UNAUTHENTICATED && this.sa.l(),
                  null !== this.stream &&
                    (this.ba(), this.stream.close(), (this.stream = null)),
                  (this.state = t),
                  [4, this.listener.ga(r)]
                );
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.ba = function () {}),
      (t.prototype.auth = function () {
        var t = this;
        Wo(0 === this.state, "Must be in initial state to auth"),
          (this.state = 1);
        var e = this.ya(this.oa),
          n = this.oa;
        this.sa.getToken().then(
          function (e) {
            t.oa === n && t._a(e);
          },
          function (n) {
            e(function () {
              var e = new Or(
                kr.UNKNOWN,
                "Fetching auth token failed: " + n.message
              );
              return t.Ia(e);
            });
          }
        );
      }),
      (t.prototype._a = function (t) {
        var e = this;
        Wo(1 === this.state, "Trying to start stream in a non-starting state");
        var n = this.ya(this.oa);
        (this.stream = this.Ta(t)),
          this.stream.Ea(function () {
            n(function () {
              return (
                Wo(
                  1 === e.state,
                  "Expected stream to be in state Starting, but was " + e.state
                ),
                (e.state = 2),
                e.listener.Ea()
              );
            });
          }),
          this.stream.ga(function (t) {
            n(function () {
              return e.Ia(t);
            });
          }),
          this.stream.onMessage(function (t) {
            n(function () {
              return e.onMessage(t);
            });
          });
      }),
      (t.prototype.la = function () {
        var t = this;
        Wo(3 === this.state, "Should only perform backoff when in Error state"),
          (this.state = 4),
          this.ca.ea(function () {
            return e(t, void 0, void 0, function () {
              return n(this, function (t) {
                return (
                  Wo(
                    4 === this.state,
                    "Backoff elapsed but state is now: " + this.state
                  ),
                  (this.state = 0),
                  this.start(),
                  Wo(this.aa(), "PersistentStream should have started"),
                  [2]
                );
              });
            });
          });
      }),
      (t.prototype.Ia = function (t) {
        return (
          Wo(this.aa(), "Can't handle server close on non-started stream"),
          zo("PersistentStream", "close with error: " + t),
          (this.stream = null),
          this.close(3, t)
        );
      }),
      (t.prototype.ya = function (t) {
        var e = this;
        return function (n) {
          e.zo.Qr(function () {
            return e.oa === t
              ? n()
              : (zo(
                  "PersistentStream",
                  "stream callback skipped by getCloseGuardedDispatcher."
                ),
                Promise.resolve());
          });
        };
      }),
      t
    );
  })(),
  $s = (function (e) {
    function n(t, n, r, i, o) {
      var s =
        e.call(
          this,
          t,
          "listen_stream_connection_backoff",
          "listen_stream_idle",
          n,
          r,
          o
        ) || this;
      return (s.serializer = i), s;
    }
    return (
      t(n, e),
      (n.prototype.Ta = function (t) {
        return this.connection.Da("Listen", t);
      }),
      (n.prototype.onMessage = function (t) {
        this.ca.reset();
        var e = this.serializer.ke(t),
          n = this.serializer.Oe(t);
        return this.listener.Ra(e, n);
      }),
      (n.prototype.watch = function (t) {
        var e = {};
        (e.database = this.serializer.De),
          (e.addTarget = this.serializer.qn(t));
        var n = this.serializer.nr(t);
        n && (e.labels = n), this.ma(e);
      }),
      (n.prototype.Sa = function (t) {
        var e = {};
        (e.database = this.serializer.De), (e.removeTarget = t), this.ma(e);
      }),
      n
    );
  })(Xs),
  Zs = (function (e) {
    function n(t, n, r, i, o) {
      var s =
        e.call(
          this,
          t,
          "write_stream_connection_backoff",
          "write_stream_idle",
          n,
          r,
          o
        ) || this;
      return (s.serializer = i), (s.Aa = !1), (s.lastStreamToken = $r.Mt), s;
    }
    return (
      t(n, e),
      Object.defineProperty(n.prototype, "Ca", {
        get: function () {
          return this.Aa;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (n.prototype.start = function () {
        (this.Aa = !1), e.prototype.start.call(this);
      }),
      (n.prototype.ba = function () {
        this.Aa && this.Pa([]);
      }),
      (n.prototype.Ta = function (t) {
        return this.connection.Da("Write", t);
      }),
      (n.prototype.onMessage = function (t) {
        if (
          (Wo(!!t.streamToken, "Got a write response without a stream token"),
          (this.lastStreamToken = this.serializer.pe(t.streamToken)),
          this.Aa)
        ) {
          this.ca.reset();
          var e = this.serializer.Ge(t.writeResults, t.commitTime),
            n = this.serializer.fromVersion(t.commitTime);
          return this.listener.Va(n, e);
        }
        return (
          Wo(
            !t.writeResults || 0 === t.writeResults.length,
            "Got mutation results for handshake"
          ),
          (this.Aa = !0),
          this.listener.ka()
        );
      }),
      (n.prototype.Na = function () {
        Wo(this.fa(), "Writing handshake requires an opened stream"),
          Wo(!this.Aa, "Handshake already completed");
        var t = {};
        (t.database = this.serializer.De), this.ma(t);
      }),
      (n.prototype.Pa = function (t) {
        var e = this;
        Wo(this.fa(), "Writing mutations requires an opened stream"),
          Wo(this.Aa, "Handshake must be complete before writing mutations"),
          Wo(
            this.lastStreamToken.Lt() > 0,
            "Trying to write mutation without a token"
          );
        var n = {
          streamToken: this.serializer.me(this.lastStreamToken),
          writes: t.map(function (t) {
            return e.serializer.Fe(t);
          }),
        };
        this.ma(n);
      }),
      n
    );
  })(Xs),
  tu = (function () {
    function t(t, e, n, r) {
      (this.zo = t),
        (this.connection = e),
        (this.credentials = n),
        (this.serializer = r);
    }
    return (
      (t.prototype.Oa = function (t) {
        return new Zs(
          this.zo,
          this.connection,
          this.credentials,
          this.serializer,
          t
        );
      }),
      (t.prototype.Fa = function (t) {
        return new $s(
          this.zo,
          this.connection,
          this.credentials,
          this.serializer,
          t
        );
      }),
      (t.prototype.commit = function (t) {
        var e = this,
          n = {
            database: this.serializer.De,
            writes: t.map(function (t) {
              return e.serializer.Fe(t);
            }),
          };
        return this.Ua("Commit", n).then(function (t) {
          return e.serializer.Ge(t.writeResults, t.commitTime);
        });
      }),
      (t.prototype.lookup = function (t) {
        var e = this,
          n = {
            database: this.serializer.De,
            documents: t.map(function (t) {
              return e.serializer._e(t);
            }),
          };
        return this.ja("BatchGetDocuments", n).then(function (n) {
          var r = co();
          n.forEach(function (t) {
            var n = e.serializer.Ve(t);
            r = r.ut(n.key, n);
          });
          var i = [];
          return (
            t.forEach(function (t) {
              var e = r.get(t);
              Wo(!!e, "Missing entity in write response for " + t), i.push(e);
            }),
            i
          );
        });
      }),
      (t.prototype.Ua = function (t, e) {
        var n = this;
        return this.credentials
          .getToken()
          .then(function (r) {
            return n.connection.Ua(t, e, r);
          })
          .catch(function (t) {
            throw (t.code === kr.UNAUTHENTICATED && n.credentials.l(), t);
          });
      }),
      (t.prototype.ja = function (t, e) {
        var n = this;
        return this.credentials
          .getToken()
          .then(function (r) {
            return n.connection.ja(t, e, r);
          })
          .catch(function (t) {
            throw (t.code === kr.UNAUTHENTICATED && n.credentials.l(), t);
          });
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eu(t, e) {
  if (0 !== e.length)
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Function " +
        t +
        "() does not support arguments, but was called with " +
        bu(e.length, "argument") +
        "."
    );
}
function nu(t, e, n) {
  if (e.length !== n)
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Function " +
        t +
        "() requires " +
        bu(n, "argument") +
        ", but was called with " +
        bu(e.length, "argument") +
        "."
    );
}
function ru(t, e, n) {
  if (e.length < n)
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Function " +
        t +
        "() requires at least " +
        bu(n, "argument") +
        ", but was called with " +
        bu(e.length, "argument") +
        "."
    );
}
function iu(t, e, n, r) {
  if (e.length < n || e.length > r)
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Function " +
        t +
        "() requires between " +
        n +
        " and " +
        r +
        " arguments, but was called with " +
        bu(e.length, "argument") +
        "."
    );
}
function ou(t, e, n, r) {
  if (!(e instanceof Array) || e.length < r)
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Function " +
        t +
        "() requires its " +
        n +
        " argument to be an array with at least " +
        bu(r, "element") +
        "."
    );
}
function su(t, e, n, r) {
  lu(t, e, wu(n) + " argument", r);
}
function uu(t, e, n, r) {
  void 0 !== r && su(t, e, n, r);
}
function au(t, e, n, r) {
  lu(t, e, n + " option", r);
}
function hu(t, e, n, r) {
  void 0 !== r && au(t, e, n, r);
}
function cu(t, e, n, r, i) {
  void 0 !== r &&
    (function (t, e, n, r, i) {
      for (var o = [], s = 0, u = i; s < u.length; s++) {
        var a = u[s];
        if (a === r) return;
        o.push(du(a));
      }
      var h = du(r);
      throw new Or(
        kr.INVALID_ARGUMENT,
        "Invalid value " +
          h +
          " provided to function " +
          t +
          '() for option "' +
          n +
          '". Acceptable values: ' +
          o.join(", ")
      );
    })(t, 0, n, r, i);
}
function fu(t, e, n, r) {
  if (
    !e.some(function (t) {
      return t === r;
    })
  )
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Invalid value " +
        du(r) +
        " provided to function " +
        t +
        "() for its " +
        wu(n) +
        " argument. Acceptable values: " +
        e.join(", ")
    );
}
function lu(t, e, n, r) {
  if (
    !("object" === e
      ? pu(r)
      : "non-empty string" === e
      ? "string" == typeof r && "" !== r
      : typeof r === e)
  ) {
    var i = du(r);
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Function " +
        t +
        "() requires its " +
        n +
        " to be of type " +
        e +
        ", but it was: " +
        i
    );
  }
}
function pu(t) {
  return (
    "object" == typeof t &&
    null !== t &&
    (Object.getPrototypeOf(t) === Object.prototype ||
      null === Object.getPrototypeOf(t))
  );
}
function du(t) {
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("string" == typeof t)
    return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
  if ("number" == typeof t || "boolean" == typeof t) return "" + t;
  if ("object" == typeof t) {
    if (t instanceof Array) return "an array";
    var e = (function (t) {
      if (t.constructor) {
        var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
        if (e && e.length > 1) return e[1];
      }
      return null;
    })(t);
    return e ? "a custom " + e + " object" : "an object";
  }
  return "function" == typeof t
    ? "a function"
    : Ko("Unknown wrong type: " + typeof t);
}
function vu(t, e, n) {
  if (void 0 === n)
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Function " +
        t +
        "() requires a valid " +
        wu(e) +
        " argument, but it was undefined."
    );
}
function yu(t, e, n) {
  Jr(e, function (e, r) {
    if (n.indexOf(e) < 0)
      throw new Or(
        kr.INVALID_ARGUMENT,
        "Unknown option '" +
          e +
          "' passed to function " +
          t +
          "(). Available options: " +
          n.join(", ")
      );
  });
}
function mu(t, e, n, r) {
  var i = du(r);
  return new Or(
    kr.INVALID_ARGUMENT,
    "Function " +
      t +
      "() requires its " +
      wu(n) +
      " argument to be a " +
      e +
      ", but it was: " +
      i
  );
}
function gu(t, e, n) {
  if (n <= 0)
    throw new Or(
      kr.INVALID_ARGUMENT,
      'Function "' +
        t +
        '()" requires its ' +
        wu(e) +
        " argument to be a positive number, but it was: " +
        n +
        "."
    );
}
function wu(t) {
  switch (t) {
    case 1:
      return "first";
    case 2:
      return "second";
    case 3:
      return "third";
    default:
      return t + "th";
  }
}
function bu(t, e) {
  return t + " " + e + (1 === t ? "" : "s");
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Eu(t, e) {
  function n() {
    var t = "This constructor is private.";
    throw (e && ((t += " "), (t += e)), new Or(kr.INVALID_ARGUMENT, t));
  }
  return (n.prototype = t.prototype), Object.assign(n, t), n;
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
}
function Iu() {
  if ("undefined" == typeof Uint8Array)
    throw new Or(
      kr.UNIMPLEMENTED,
      "Uint8Arrays are not available in this environment."
    );
}
function Tu() {
  if (!Fo.xt().xa)
    throw new Or(
      kr.UNIMPLEMENTED,
      "Blobs are unavailable in Firestore in this environment."
    );
}
var Nu = (function () {
    function t(t) {
      Tu(), (this.La = t);
    }
    return (
      (t.fromBase64String = function (e) {
        nu("Blob.fromBase64String", arguments, 1),
          su("Blob.fromBase64String", "string", 1, e),
          Tu();
        try {
          return new t($r.fromBase64String(e));
        } catch (t) {
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Failed to construct Blob from Base64 string: " + t
          );
        }
      }),
      (t.fromUint8Array = function (e) {
        if (
          (nu("Blob.fromUint8Array", arguments, 1),
          Iu(),
          !(e instanceof Uint8Array))
        )
          throw mu("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t($r.fromUint8Array(e));
      }),
      (t.prototype.toBase64 = function () {
        return nu("Blob.toBase64", arguments, 0), Tu(), this.La.toBase64();
      }),
      (t.prototype.toUint8Array = function () {
        return (
          nu("Blob.toUint8Array", arguments, 0), Iu(), this.La.toUint8Array()
        );
      }),
      (t.prototype.toString = function () {
        return "Blob(base64: " + this.toBase64() + ")";
      }),
      (t.prototype.isEqual = function (t) {
        return this.La.isEqual(t.La);
      }),
      t
    );
  })(),
  Au = Eu(Nu, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
  Du = (function () {
    function t() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      ou("FieldPath", t, "fieldNames", 1);
      for (var n = 0; n < t.length; ++n)
        if ((su("FieldPath", "string", n, t[n]), 0 === t[n].length))
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid field name at argument $(i + 1). Field names must not be empty."
          );
      this.Ma = new jr(t);
    }
    return (
      (t.documentId = function () {
        return t.qa;
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mu("isEqual", "FieldPath", 1, e);
        return this.Ma.isEqual(e.Ma);
      }),
      (t.qa = new t(jr.Z().J())),
      t
    );
  })(),
  Su = new RegExp("[~\\*/\\[\\]]"),
  ku = (function () {
    function t(t) {
      this.Ba = t;
    }
    return (
      (t.delete = function () {
        return eu("FieldValue.delete", arguments), Ou.instance;
      }),
      (t.serverTimestamp = function () {
        return eu("FieldValue.serverTimestamp", arguments), Cu.instance;
      }),
      (t.arrayUnion = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return ru("FieldValue.arrayUnion", arguments, 1), new Ru(t);
      }),
      (t.arrayRemove = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return ru("FieldValue.arrayRemove", arguments, 1), new xu(t);
      }),
      (t.increment = function (t) {
        return (
          su("FieldValue.increment", "number", 1, t),
          nu("FieldValue.increment", arguments, 1),
          new Pu(t)
        );
      }),
      (t.prototype.isEqual = function (t) {
        return this === t;
      }),
      t
    );
  })(),
  Ou = (function (e) {
    function n() {
      return e.call(this, "FieldValue.delete") || this;
    }
    return t(n, e), (n.instance = new n()), n;
  })(ku),
  Cu = (function (e) {
    function n() {
      return e.call(this, "FieldValue.serverTimestamp") || this;
    }
    return t(n, e), (n.instance = new n()), n;
  })(ku),
  Ru = (function (e) {
    function n(t) {
      var n = e.call(this, "FieldValue.arrayUnion") || this;
      return (n.Qa = t), n;
    }
    return t(n, e), n;
  })(ku),
  xu = (function (e) {
    function n(t) {
      var n = e.call(this, "FieldValue.arrayRemove") || this;
      return (n.Qa = t), n;
    }
    return t(n, e), n;
  })(ku),
  Pu = (function (e) {
    function n(t) {
      var n = e.call(this, "FieldValue.increment") || this;
      return (n.Ga = t), n;
    }
    return t(n, e), n;
  })(ku),
  Mu = Eu(ku, "Use FieldValue.<field>() instead."),
  Lu = (function () {
    function t(t, e) {
      if (
        (nu("GeoPoint", arguments, 2),
        su("GeoPoint", "number", 1, t),
        su("GeoPoint", "number", 2, e),
        !isFinite(t) || t < -90 || t > 90)
      )
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Latitude must be a number between -90 and 90, but was: " + t
        );
      if (!isFinite(e) || e < -180 || e > 180)
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Longitude must be a number between -180 and 180, but was: " + e
        );
      (this.Wa = t), (this.za = e);
    }
    return (
      Object.defineProperty(t.prototype, "latitude", {
        get: function () {
          return this.Wa;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "longitude", {
        get: function () {
          return this.za;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (t) {
        return this.Wa === t.Wa && this.za === t.za;
      }),
      (t.prototype.A = function (t) {
        return Jo(this.Wa, t.Wa) || Jo(this.za, t.za);
      }),
      t
    );
  })(),
  _u = /^__.*__$/,
  Vu = (function () {
    function t(t, e, n) {
      (this.data = t), (this.en = e), (this.fieldTransforms = n);
    }
    return (
      (t.prototype.Ka = function (t, e) {
        var n = [];
        return (
          null !== this.en
            ? n.push(new Li(t, this.data, this.en, e))
            : n.push(new Mi(t, this.data, e)),
          this.fieldTransforms.length > 0 &&
            n.push(new _i(t, this.fieldTransforms)),
          n
        );
      }),
      t
    );
  })(),
  Uu = (function () {
    function t(t, e, n) {
      (this.data = t), (this.en = e), (this.fieldTransforms = n);
    }
    return (
      (t.prototype.Ka = function (t, e) {
        var n = [new Li(t, this.data, this.en, e)];
        return (
          this.fieldTransforms.length > 0 &&
            n.push(new _i(t, this.fieldTransforms)),
          n
        );
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qu(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw Ko("Unexpected case for UserDataSource: " + t);
  }
}
var Fu = (function () {
    function t(t, e, n, r, i, o) {
      (this.Ja = t),
        (this.methodName = e),
        (this.path = n),
        (this.Ha = r),
        void 0 === i && this.Ya(),
        (this.Ha = void 0 !== r && r),
        (this.fieldTransforms = i || []),
        (this.en = o || []);
    }
    return (
      (t.prototype.Xa = function (e) {
        var n = null == this.path ? null : this.path.child(e),
          r = new t(
            this.Ja,
            this.methodName,
            n,
            !1,
            this.fieldTransforms,
            this.en
          );
        return r.$a(e), r;
      }),
      (t.prototype.Za = function (e) {
        var n = null == this.path ? null : this.path.child(e),
          r = new t(
            this.Ja,
            this.methodName,
            n,
            !1,
            this.fieldTransforms,
            this.en
          );
        return r.Ya(), r;
      }),
      (t.prototype.tf = function (e) {
        return new t(
          this.Ja,
          this.methodName,
          null,
          !0,
          this.fieldTransforms,
          this.en
        );
      }),
      (t.prototype.nf = function (t) {
        var e =
          null === this.path || this.path.M()
            ? ""
            : " (found in field " + this.path.toString() + ")";
        return new Or(
          kr.INVALID_ARGUMENT,
          "Function " +
            this.methodName +
            "() called with invalid data. " +
            t +
            e
        );
      }),
      (t.prototype.contains = function (t) {
        return (
          void 0 !==
            this.en.find(function (e) {
              return t.G(e);
            }) ||
          void 0 !==
            this.fieldTransforms.find(function (e) {
              return t.G(e.field);
            })
        );
      }),
      (t.prototype.Ya = function () {
        if (null !== this.path)
          for (var t = 0; t < this.path.length; t++) this.$a(this.path.get(t));
      }),
      (t.prototype.$a = function (t) {
        if (0 === t.length) throw this.nf("Document fields must not be empty");
        if (qu(this.Ja) && _u.test(t))
          throw this.nf('Document fields cannot begin and end with "__"');
      }),
      t
    );
  })(),
  ju = function (t, e) {
    (this.ae = t), (this.key = e);
  },
  Bu = (function () {
    function t(t, e) {
      (this.serializer = t), (this.if = e);
    }
    return (
      (t.prototype.ef = function (t, e) {
        var n = new Fu(0, t, jr.Y);
        zu("Data must be an object, but it was:", n, e);
        var r = this.rf(e, n);
        return new Vu(new qi(r), null, n.fieldTransforms);
      }),
      (t.prototype.uf = function (t, e, n) {
        var r = new Fu(2, t, jr.Y);
        zu("Data must be an object, but it was:", r, e);
        var i,
          o,
          s = this.rf(e, r);
        if (n) {
          for (var u = new Kr(jr.F), a = 0, h = n; a < h.length; a++) {
            var c = h[a],
              f = void 0;
            if (c instanceof Du) f = c.Ma;
            else {
              if ("string" != typeof c)
                throw Ko(
                  "Expected stringOrFieldPath to be a string or a FieldPath"
                );
              f = Yu(t, c);
            }
            if (!r.contains(f))
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Field '" +
                  f +
                  "' is specified in your field mask but missing from your input data."
              );
            u = u.add(f);
          }
          (i = Oi.Kt(u)),
            (o = r.fieldTransforms.filter(function (t) {
              return i.Ht(t.field);
            }));
        } else (i = Oi.Jt(r.en)), (o = r.fieldTransforms);
        return new Vu(new qi(s), i, o);
      }),
      (t.prototype.sf = function (t, e) {
        var n = this,
          r = new Fu(1, t, jr.Y);
        zu("Data must be an object, but it was:", r, e);
        var i = new Kr(jr.F),
          o = qi.ln();
        Jr(e, function (e, s) {
          var u = Yu(t, e),
            a = r.Za(u);
          if ((s = n.hf(s, a)) instanceof Ou) i = i.add(u);
          else {
            var h = n.cf(s, a);
            null != h && ((i = i.add(u)), o.set(u, h));
          }
        });
        var s = Oi.Kt(i);
        return new Uu(o.on(), s, r.fieldTransforms);
      }),
      (t.prototype.af = function (t, e, n, r) {
        var i = new Fu(1, t, jr.Y),
          o = [Qu(t, e)],
          s = [n];
        if (r.length % 2 != 0)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Function " +
              t +
              "() needs to be called with an even number of arguments that alternate between field names and values."
          );
        for (var u = 0; u < r.length; u += 2)
          o.push(Qu(t, r[u])), s.push(r[u + 1]);
        var a = new Kr(jr.F),
          h = qi.ln();
        for (u = 0; u < o.length; ++u) {
          var c = o[u],
            f = i.Za(c),
            l = this.hf(s[u], f);
          if (l instanceof Ou) a = a.add(c);
          else {
            var p = this.cf(l, f);
            null != p && ((a = a.add(c)), h.set(c, p));
          }
        }
        var d = Oi.Kt(a);
        return new Uu(h.on(), d, i.fieldTransforms);
      }),
      (t.prototype.ff = function (t, e, n) {
        void 0 === n && (n = !1);
        var r = new Fu(n ? 4 : 3, t, jr.Y),
          i = this.cf(e, r);
        return (
          Wo(null != i, "Parsed data should not be null."),
          Wo(
            0 === r.fieldTransforms.length,
            "Field transforms should have been disallowed."
          ),
          i
        );
      }),
      (t.prototype.hf = function (t, e) {
        try {
          return this.if(t);
        } catch (t) {
          var n = Ku(t);
          throw e.nf(n);
        }
      }),
      (t.prototype.cf = function (t, e) {
        if (Gu((t = this.hf(t, e))))
          return zu("Unsupported field value:", e, t), this.rf(t, e);
        if (t instanceof ku) return this.lf(t, e), null;
        if ((e.path && e.en.push(e.path), t instanceof Array)) {
          if (e.Ha && 4 !== e.Ja) throw e.nf("Nested arrays are not supported");
          return this.df(t, e);
        }
        return this.vf(t, e);
      }),
      (t.prototype.rf = function (t, e) {
        var n = this,
          r = {};
        return (
          Xr(t)
            ? e.path && e.path.length > 0 && e.en.push(e.path)
            : Jr(t, function (t, i) {
                var o = n.cf(i, e.Xa(t));
                null != o && (r[t] = o);
              }),
          { mapValue: { fields: r } }
        );
      }),
      (t.prototype.df = function (t, e) {
        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
          var s = o[i],
            u = this.cf(s, e.tf(r));
          null == u && (u = { nullValue: "NULL_VALUE" }), n.push(u), r++;
        }
        return { arrayValue: { values: n } };
      }),
      (t.prototype.lf = function (t, e) {
        if (!qu(e.Ja))
          throw e.nf(t.Ba + "() can only be used with update() and set()");
        if (null === e.path)
          throw e.nf(t.Ba + "() is not currently supported inside arrays");
        if (t instanceof Ou) {
          if (2 !== e.Ja)
            throw 1 === e.Ja
              ? (Wo(
                  e.path.length > 0,
                  "FieldValue.delete() at the top level should have already been handled."
                ),
                e.nf(
                  "FieldValue.delete() can only appear at the top level of your update data"
                ))
              : e.nf(
                  "FieldValue.delete() cannot be used with set() unless you pass {merge:true}"
                );
          e.en.push(e.path);
        } else if (t instanceof Cu)
          e.fieldTransforms.push(new Ci(e.path, Ii.instance));
        else if (t instanceof Ru) {
          var n = this.wf(t.Ba, t.Qa),
            r = new Ti(n);
          e.fieldTransforms.push(new Ci(e.path, r));
        } else if (t instanceof xu) {
          n = this.wf(t.Ba, t.Qa);
          var i = new Ni(n);
          e.fieldTransforms.push(new Ci(e.path, i));
        } else if (t instanceof Pu) {
          var o = this.ff("FieldValue.increment", t.Ga),
            s = new Ai(this.serializer, o);
          e.fieldTransforms.push(new Ci(e.path, s));
        } else Ko("Unknown FieldValue type: " + t);
      }),
      (t.prototype.vf = function (t, e) {
        if (null === t) return { nullValue: "NULL_VALUE" };
        if ("number" == typeof t) return this.serializer.we(t);
        if ("boolean" == typeof t) return { booleanValue: t };
        if ("string" == typeof t) return { stringValue: t };
        if (t instanceof Date) {
          var n = _r.fromDate(t);
          return { timestampValue: this.serializer.O(n) };
        }
        if (t instanceof _r)
          return (
            (n = new _r(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
            { timestampValue: this.serializer.O(n) }
          );
        if (t instanceof Lu)
          return {
            geoPointValue: { latitude: t.latitude, longitude: t.longitude },
          };
        if (t instanceof Nu) return { bytesValue: this.serializer.me(t) };
        if (t instanceof ju)
          return { referenceValue: this.serializer.be(t.key.path, t.ae) };
        throw e.nf("Unsupported field value: " + du(t));
      }),
      (t.prototype.wf = function (t, e) {
        var n = this;
        return e.map(function (e, r) {
          var i = new Fu(3, t, jr.Y);
          return n.cf(e, i.tf(r));
        });
      }),
      t
    );
  })();
function Gu(t) {
  return !(
    "object" != typeof t ||
    null === t ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof _r ||
    t instanceof Lu ||
    t instanceof Nu ||
    t instanceof ju ||
    t instanceof ku
  );
}
function zu(t, e, n) {
  if (!Gu(n) || !pu(n)) {
    var r = du(n);
    throw "an object" === r ? e.nf(t + " a custom object") : e.nf(t + " " + r);
  }
}
function Qu(t, e) {
  if (e instanceof Du) return e.Ma;
  if ("string" == typeof e) return Yu(t, e);
  throw new Or(
    kr.INVALID_ARGUMENT,
    "Function " +
      t +
      "() called with invalid data. Field path arguments must be of type string or FieldPath."
  );
}
function Yu(t, e) {
  try {
    return (function (t) {
      if (t.search(Su) >= 0)
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Invalid field path (" +
            t +
            "). Paths must not contain '~', '*', '/', '[', or ']'"
        );
      try {
        return new (Du.bind.apply(Du, i([void 0], t.split("."))))();
      } catch (e) {
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Invalid field path (" +
            t +
            "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
        );
      }
    })(e).Ma;
  } catch (e) {
    var n = Ku(e);
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Function " + t + "() called with invalid data. " + n
    );
  }
}
function Ku(t) {
  return t instanceof Error ? t.message : t.toString();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Wu = (function () {
    function t(t) {
      (this.mf = t),
        (this.pf = yo()),
        (this.mutations = []),
        (this.bf = !1),
        (this.gf = null),
        (this.yf = new Set());
    }
    return (
      (t.prototype.lookup = function (t) {
        return e(this, void 0, void 0, function () {
          var e,
            r = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                if ((this._f(), this.mutations.length > 0))
                  throw new Or(
                    kr.INVALID_ARGUMENT,
                    "Firestore transactions require all reads to be executed before all writes."
                  );
                return [4, this.mf.lookup(t)];
              case 1:
                return (
                  (e = n.sent()).forEach(function (t) {
                    t instanceof Gi || t instanceof Bi
                      ? r.If(t)
                      : Ko(
                          "Document in a transaction was a " +
                            t.constructor.name
                        );
                  }),
                  [2, e]
                );
            }
          });
        });
      }),
      (t.prototype.set = function (t, e) {
        this.write(e.Ka(t, this.tn(t))), this.yf.add(t);
      }),
      (t.prototype.update = function (t, e) {
        try {
          this.write(e.Ka(t, this.Tf(t)));
        } catch (t) {
          this.gf = t;
        }
        this.yf.add(t);
      }),
      (t.prototype.delete = function (t) {
        this.write([new Vi(t, this.tn(t))]), this.yf.add(t);
      }),
      (t.prototype.commit = function () {
        return e(this, void 0, void 0, function () {
          var t,
            e = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                if ((this._f(), this.gf)) throw this.gf;
                return (
                  (t = this.pf),
                  this.mutations.forEach(function (e) {
                    t = t.remove(e.key);
                  }),
                  t.forEach(function (t, n) {
                    e.mutations.push(new Ui(t, e.tn(t)));
                  }),
                  [4, this.mf.commit(this.mutations)]
                );
              case 1:
                return n.sent(), (this.bf = !0), [2];
            }
          });
        });
      }),
      (t.prototype.If = function (t) {
        var e;
        if (t instanceof Bi) e = t.version;
        else {
          if (!(t instanceof Gi))
            throw Ko("Document in a transaction was a " + t.constructor.name);
          e = Vr.V();
        }
        var n = this.pf.get(t.key);
        if (null !== n) {
          if (!e.isEqual(n))
            throw new Or(
              kr.ABORTED,
              "Document version changed between two reads."
            );
        } else this.pf = this.pf.ut(t.key, e);
      }),
      (t.prototype.tn = function (t) {
        var e = this.pf.get(t);
        return !this.yf.has(t) && e ? xi.updateTime(e) : xi.NONE;
      }),
      (t.prototype.Tf = function (t) {
        var e = this.pf.get(t);
        if (!this.yf.has(t) && e) {
          if (e.isEqual(Vr.V()))
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Can't update a document that doesn't exist."
            );
          return xi.updateTime(e);
        }
        return xi.exists(!0);
      }),
      (t.prototype.write = function (t) {
        this._f(), (this.mutations = this.mutations.concat(t));
      }),
      (t.prototype._f = function () {
        Wo(
          !this.bf,
          "A transaction object cannot be used after its update callback has been invoked."
        );
      }),
      t
    );
  })(),
  Hu = (function () {
    function t(t, e) {
      (this.Or = t),
        (this.Ho = e),
        (this.state = "Unknown"),
        (this.Ef = 0),
        (this.Df = null),
        (this.Rf = !0);
    }
    return (
      (t.prototype.Sf = function () {
        var t = this;
        0 === this.Ef &&
          (this.Af("Unknown"),
          Wo(null === this.Df, "onlineStateTimer shouldn't be started yet"),
          (this.Df = this.Or.iu("online_state_timeout", 1e4, function () {
            return (
              (t.Df = null),
              Wo(
                "Unknown" === t.state,
                "Timer should be canceled if we transitioned to a different state."
              ),
              t.Cf("Backend didn't respond within 10 seconds."),
              t.Af("Offline"),
              Promise.resolve()
            );
          })));
      }),
      (t.prototype.Pf = function (t) {
        "Online" === this.state
          ? (this.Af("Unknown"),
            Wo(0 === this.Ef, "watchStreamFailures must be 0"),
            Wo(null === this.Df, "onlineStateTimer must be null"))
          : (this.Ef++,
            this.Ef >= 1 &&
              (this.Vf(),
              this.Cf(
                "Connection failed 1 times. Most recent error: " + t.toString()
              ),
              this.Af("Offline")));
      }),
      (t.prototype.set = function (t) {
        this.Vf(), (this.Ef = 0), "Online" === t && (this.Rf = !1), this.Af(t);
      }),
      (t.prototype.Af = function (t) {
        t !== this.state && ((this.state = t), this.Ho(t));
      }),
      (t.prototype.Cf = function (t) {
        var e =
          "Could not reach Cloud Firestore backend. " +
          t +
          "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Rf ? (Qo(e), (this.Rf = !1)) : zo("OnlineStateTracker", e);
      }),
      (t.prototype.Vf = function () {
        null !== this.Df && (this.Df.cancel(), (this.Df = null));
      }),
      t
    );
  })(),
  Ju = (function () {
    function t(t, r, i, o, s) {
      var u = this;
      (this.kf = t),
        (this.mf = r),
        (this.Nf = []),
        (this.Of = new Map()),
        (this.Ff = null),
        (this.networkEnabled = !1),
        (this.isPrimary = !1),
        (this.Uf = s),
        this.Uf.jf(function (t) {
          i.Qr(function () {
            return e(u, void 0, void 0, function () {
              return n(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.xf()
                      ? (zo(
                          "RemoteStore",
                          "Restarting streams for network reachability change."
                        ),
                        [4, this.Lf()])
                      : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          });
        }),
        (this.Mf = new Hu(i, o)),
        (this.qf = this.mf.Fa({
          Ea: this.Bf.bind(this),
          ga: this.Qf.bind(this),
          Ra: this.Gf.bind(this),
        })),
        (this.Wf = this.mf.Oa({
          Ea: this.zf.bind(this),
          ga: this.Kf.bind(this),
          ka: this.Jf.bind(this),
          Va: this.Va.bind(this),
        }));
    }
    return (
      (t.prototype.start = function () {
        return this.enableNetwork();
      }),
      (t.prototype.enableNetwork = function () {
        return e(this, void 0, void 0, function () {
          var t;
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (this.networkEnabled = !0),
                  this.xf() ? ((t = this.Wf), [4, this.kf.uo()]) : [3, 3]
                );
              case 1:
                return (
                  (t.lastStreamToken = e.sent()),
                  this.Hf() ? this.Yf() : this.Mf.set("Unknown"),
                  [4, this.Xf()]
                );
              case 2:
                e.sent(), (e.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.disableNetwork = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            switch (t.label) {
              case 0:
                return (this.networkEnabled = !1), [4, this.$f()];
              case 1:
                return t.sent(), this.Mf.set("Offline"), [2];
            }
          });
        });
      }),
      (t.prototype.$f = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.Wf.stop()];
              case 1:
                return t.sent(), [4, this.qf.stop()];
              case 2:
                return (
                  t.sent(),
                  this.Nf.length > 0 &&
                    (zo(
                      "RemoteStore",
                      "Stopping write stream with " +
                        this.Nf.length +
                        " pending writes"
                    ),
                    (this.Nf = [])),
                  this.Zf(),
                  [2]
                );
            }
          });
        });
      }),
      (t.prototype.shutdown = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  zo("RemoteStore", "RemoteStore shutting down."),
                  (this.networkEnabled = !1),
                  [4, this.$f()]
                );
              case 1:
                return (
                  t.sent(), this.Uf.shutdown(), this.Mf.set("Unknown"), [2]
                );
            }
          });
        });
      }),
      (t.prototype.listen = function (t) {
        this.Of.has(t.targetId) ||
          (this.Of.set(t.targetId, t),
          this.Hf() ? this.Yf() : this.qf.fa() && this.tl(t));
      }),
      (t.prototype.nl = function (t) {
        Wo(
          this.Of.has(t),
          "unlisten called on target no currently watched: " + t
        ),
          this.Of.delete(t),
          this.qf.fa() && this.il(t),
          0 === this.Of.size &&
            (this.qf.fa() ? this.qf.va() : this.xf() && this.Mf.set("Unknown"));
      }),
      (t.prototype.ce = function (t) {
        return this.Of.get(t) || null;
      }),
      (t.prototype.he = function (t) {
        return this.Jo.he(t);
      }),
      (t.prototype.tl = function (t) {
        this.Ff.Mi(t.targetId), this.qf.watch(t);
      }),
      (t.prototype.il = function (t) {
        this.Ff.Mi(t), this.qf.Sa(t);
      }),
      (t.prototype.Yf = function () {
        Wo(
          this.Hf(),
          "startWatchStream() called when shouldStartWatchStream() is false."
        ),
          (this.Ff = new Co(this)),
          this.qf.start(),
          this.Mf.Sf();
      }),
      (t.prototype.Hf = function () {
        return this.xf() && !this.qf.aa() && this.Of.size > 0;
      }),
      (t.prototype.xf = function () {
        return this.isPrimary && this.networkEnabled;
      }),
      (t.prototype.Zf = function () {
        this.Ff = null;
      }),
      (t.prototype.Bf = function () {
        return e(this, void 0, void 0, function () {
          var t = this;
          return n(this, function (e) {
            return (
              this.Of.forEach(function (e, n) {
                t.tl(e);
              }),
              [2]
            );
          });
        });
      }),
      (t.prototype.Qf = function (t) {
        return e(this, void 0, void 0, function () {
          return n(this, function (e) {
            return (
              void 0 === t &&
                Wo(
                  !this.Hf(),
                  "Watch stream was stopped gracefully while still needed."
                ),
              this.Zf(),
              this.Hf() ? (this.Mf.Pf(t), this.Yf()) : this.Mf.set("Unknown"),
              [2]
            );
          });
        });
      }),
      (t.prototype.Gf = function (t, r) {
        return e(this, void 0, void 0, function () {
          var e;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.Mf.set("Online"),
                  t instanceof ko && 2 === t.state && t.cause
                    ? [2, this.el(t)]
                    : (t instanceof Do
                        ? this.Ff.Ji(t)
                        : t instanceof So
                        ? this.Ff.ie(t)
                        : (Wo(
                            t instanceof ko,
                            "Expected watchChange to be an instance of WatchTargetChange"
                          ),
                          this.Ff.Xi(t)),
                      r.isEqual(Vr.MIN) ? [3, 3] : [4, this.kf.oo()])
                );
              case 1:
                return (e = n.sent()), r.k(e) >= 0 ? [4, this.rl(r)] : [3, 3];
              case 2:
                n.sent(), (n.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.rl = function (t) {
        var e = this;
        Wo(!t.isEqual(Vr.MIN), "Can't raise event for unknown SnapshotVersion");
        var n = this.Ff.ue(t);
        return (
          n.wi.forEach(function (n, r) {
            if (n.resumeToken.Lt() > 0) {
              var i = e.Of.get(r);
              i && e.Of.set(r, i.ei(n.resumeToken, t));
            }
          }),
          n.mi.forEach(function (t) {
            var n = e.Of.get(t);
            if (n) {
              e.Of.set(t, n.ei($r.Mt, n.ni)), e.il(t);
              var r = new oo(n.target, t, 1, n.sequenceNumber);
              e.tl(r);
            }
          }),
          this.Jo.ho(n)
        );
      }),
      (t.prototype.el = function (t) {
        var r = this;
        Wo(!!t.cause, "Handling target error without a cause");
        var i = t.cause,
          o = Promise.resolve();
        return (
          t.targetIds.forEach(function (t) {
            o = o.then(function () {
              return e(r, void 0, void 0, function () {
                return n(this, function (e) {
                  return this.Of.has(t)
                    ? (this.Of.delete(t),
                      this.Ff.removeTarget(t),
                      [2, this.Jo.ul(t, i)])
                    : [2];
                });
              });
            });
          }),
          o
        );
      }),
      (t.prototype.Xf = function () {
        return e(this, void 0, void 0, function () {
          var t, e;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return this.sl()
                  ? ((t =
                      this.Nf.length > 0
                        ? this.Nf[this.Nf.length - 1].batchId
                        : -1),
                    [4, this.kf.yo(t)])
                  : [3, 4];
              case 1:
                return null !== (e = n.sent())
                  ? [3, 2]
                  : (0 === this.Nf.length && this.Wf.va(), [3, 4]);
              case 2:
                return this.ol(e), [4, this.Xf()];
              case 3:
                n.sent(), (n.label = 4);
              case 4:
                return this.hl() && this.cl(), [2];
            }
          });
        });
      }),
      (t.prototype.sl = function () {
        return this.xf() && this.Nf.length < 10;
      }),
      (t.prototype.al = function () {
        return this.Nf.length;
      }),
      (t.prototype.ol = function (t) {
        Wo(this.sl(), "addToWritePipeline called when pipeline is full"),
          this.Nf.push(t),
          this.Wf.fa() && this.Wf.Ca && this.Wf.Pa(t.mutations);
      }),
      (t.prototype.hl = function () {
        return this.xf() && !this.Wf.aa() && this.Nf.length > 0;
      }),
      (t.prototype.cl = function () {
        Wo(
          this.hl(),
          "startWriteStream() called when shouldStartWriteStream() is false."
        ),
          this.Wf.start();
      }),
      (t.prototype.zf = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            return this.Wf.Na(), [2];
          });
        });
      }),
      (t.prototype.Jf = function () {
        var t = this;
        return this.kf
          .so(this.Wf.lastStreamToken)
          .then(function () {
            for (var e = 0, n = t.Nf; e < n.length; e++) {
              var r = n[e];
              t.Wf.Pa(r.mutations);
            }
          })
          .catch(bs);
      }),
      (t.prototype.Va = function (t, e) {
        var n = this;
        Wo(this.Nf.length > 0, "Got result for empty write pipeline");
        var r = this.Nf.shift(),
          i = ns.from(r, t, e, this.Wf.lastStreamToken);
        return this.Jo.fl(i).then(function () {
          return n.Xf();
        });
      }),
      (t.prototype.Kf = function (t) {
        return e(this, void 0, void 0, function () {
          var e = this;
          return n(this, function (n) {
            return (
              void 0 === t &&
                Wo(
                  !this.hl(),
                  "Write stream was stopped gracefully while still needed."
                ),
              t && this.Nf.length > 0
                ? [
                    2,
                    (this.Wf.Ca ? this.ll(t) : this.dl(t)).then(function () {
                      e.hl() && e.cl();
                    }),
                  ]
                : [2]
            );
          });
        });
      }),
      (t.prototype.dl = function (t) {
        return e(this, void 0, void 0, function () {
          return n(this, function (e) {
            return uo(t.code)
              ? (zo(
                  "RemoteStore",
                  "RemoteStore error before completed handshake; resetting stream token: ",
                  this.Wf.lastStreamToken
                ),
                (this.Wf.lastStreamToken = $r.Mt),
                [2, this.kf.so($r.Mt).catch(bs)])
              : [2];
          });
        });
      }),
      (t.prototype.ll = function (t) {
        return e(this, void 0, void 0, function () {
          var e,
            r = this;
          return n(this, function (n) {
            return uo((i = t.code)) && i !== kr.ABORTED
              ? ((e = this.Nf.shift()),
                this.Wf.da(),
                [
                  2,
                  this.Jo.vl(e.batchId, t).then(function () {
                    return r.Xf();
                  }),
                ])
              : [2];
            var i;
          });
        });
      }),
      (t.prototype.wl = function () {
        return new Wu(this.mf);
      }),
      (t.prototype.Lf = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            switch (t.label) {
              case 0:
                return (this.networkEnabled = !1), [4, this.$f()];
              case 1:
                return (
                  t.sent(), this.Mf.set("Unknown"), [4, this.enableNetwork()]
                );
              case 2:
                return t.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.ml = function () {
        return e(this, void 0, void 0, function () {
          return n(this, function (t) {
            switch (t.label) {
              case 0:
                return this.xf()
                  ? (zo(
                      "RemoteStore",
                      "RemoteStore restarting streams for new credential"
                    ),
                    [4, this.Lf()])
                  : [3, 2];
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (t.prototype.pl = function (t) {
        return e(this, void 0, void 0, function () {
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (this.isPrimary = t),
                  t && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2]
                );
              case 1:
                return e.sent(), [3, 4];
              case 2:
                return t ? [3, 4] : [4, this.$f()];
              case 3:
                e.sent(), this.Mf.set("Unknown"), (e.label = 4);
              case 4:
                return [2];
            }
          });
        });
      }),
      t
    );
  })(),
  Xu = function (t) {
    this.key = t;
  },
  $u = function (t) {
    this.key = t;
  },
  Zu = (function () {
    function t(t, e) {
      (this.query = t),
        (this.bl = e),
        (this.gl = null),
        (this._i = !1),
        (this.yl = go()),
        (this.fi = go()),
        (this._l = new Eo(t.Bn.bind(t)));
    }
    return (
      Object.defineProperty(t.prototype, "Il", {
        get: function () {
          return this.bl;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.Tl = function (t, e) {
        var n = this,
          r = e ? e.El : new Io(),
          i = e ? e._l : this._l,
          o = e ? e.fi : this.fi,
          s = i,
          u = !1,
          a = this.query.Kn() && i.size === this.query.limit ? i.last() : null,
          h = this.query.Jn() && i.size === this.query.limit ? i.first() : null;
        if (
          (t.ct(function (t, e) {
            var c = i.get(t),
              f = e instanceof Bi ? e : null;
            f &&
              (Wo(
                t.isEqual(f.key),
                "Mismatching keys found in document changes: " +
                  t +
                  " != " +
                  f.key
              ),
              (f = n.query.matches(f) ? f : null));
            var l = !!c && n.fi.has(c.key),
              p = !!f && (f.nn || (n.fi.has(f.key) && f.hasCommittedMutations)),
              d = !1;
            c && f
              ? c.data().isEqual(f.data())
                ? l !== p && (r.track({ type: 3, doc: f }), (d = !0))
                : n.Dl(c, f) ||
                  (r.track({ type: 2, doc: f }),
                  (d = !0),
                  ((a && n.query.Bn(f, a) > 0) ||
                    (h && n.query.Bn(f, h) < 0)) &&
                    (u = !0))
              : !c && f
              ? (r.track({ type: 0, doc: f }), (d = !0))
              : c &&
                !f &&
                (r.track({ type: 1, doc: c }), (d = !0), (a || h) && (u = !0)),
              d &&
                (f
                  ? ((s = s.add(f)), (o = p ? o.add(t) : o.delete(t)))
                  : ((s = s.delete(t)), (o = o.delete(t))));
          }),
          this.query.Kn() || this.query.Jn())
        )
          for (; s.size > this.query.limit; ) {
            var c = this.query.Kn() ? s.last() : s.first();
            (s = s.delete(c.key)),
              (o = o.delete(c.key)),
              r.track({ type: 1, doc: c });
          }
        return (
          Wo(
            !u || !e,
            "View was refilled using docs that themselves needed refilling."
          ),
          { _l: s, El: r, ic: u, fi: o }
        );
      }),
      (t.prototype.Dl = function (t, e) {
        return t.nn && e.hasCommittedMutations && !e.nn;
      }),
      (t.prototype.Is = function (t, e, n) {
        var r = this;
        Wo(!t.ic, "Cannot apply changes that need a refill");
        var i = this._l;
        (this._l = t._l), (this.fi = t.fi);
        var o = t.El.ci();
        o.sort(function (t, e) {
          return (
            (function (t, e) {
              var n = function (t) {
                switch (t) {
                  case 0:
                    return 1;
                  case 2:
                  case 3:
                    return 2;
                  case 1:
                    return 0;
                  default:
                    return Ko("Unknown ChangeType: " + t);
                }
              };
              return n(t) - n(e);
            })(
              /**
               * @license
               * Copyright 2019 Google Inc.
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ t.type,
              e.type
            ) || r.query.Bn(t.doc, e.doc)
          );
        }),
          this.Rl(n);
        var s = e ? this.Sl() : [],
          u = 0 === this.yl.size && this._i ? 1 : 0,
          a = u !== this.gl;
        return (
          (this.gl = u),
          0 !== o.length || a
            ? {
                snapshot: new To(this.query, t._l, i, o, t.fi, 0 === u, a, !1),
                Al: s,
              }
            : { Al: s }
        );
      }),
      (t.prototype.Cl = function (t) {
        return this._i && "Offline" === t
          ? ((this._i = !1),
            this.Is({ _l: this._l, El: new Io(), fi: this.fi, ic: !1 }, !1))
          : { Al: [] };
      }),
      (t.prototype.Pl = function (t) {
        return !this.bl.has(t) && !!this._l.has(t) && !this._l.get(t).nn;
      }),
      (t.prototype.Rl = function (t) {
        var e = this;
        t &&
          (t.Ii.forEach(function (t) {
            return (e.bl = e.bl.add(t));
          }),
          t.Ti.forEach(function (t) {
            return Wo(
              e.bl.has(t),
              "Modified document " + t + " not found in view."
            );
          }),
          t.Ei.forEach(function (t) {
            return (e.bl = e.bl.delete(t));
          }),
          (this._i = t._i));
      }),
      (t.prototype.Sl = function () {
        var t = this;
        if (!this._i) return [];
        var e = this.yl;
        (this.yl = go()),
          this._l.forEach(function (e) {
            t.Pl(e.key) && (t.yl = t.yl.add(e.key));
          });
        var n = [];
        return (
          e.forEach(function (e) {
            t.yl.has(e) || n.push(new $u(e));
          }),
          this.yl.forEach(function (t) {
            e.has(t) || n.push(new Xu(t));
          }),
          n
        );
      }),
      (t.prototype.Vl = function (t) {
        (this.bl = t.ko), (this.yl = go());
        var e = this.Tl(t.documents);
        return this.Is(e, !0);
      }),
      (t.prototype.kl = function () {
        return To.vi(this.query, this._l, this.fi, 0 === this.gl);
      }),
      t
    );
  })(),
  ta = (function () {
    function t(t, e, n, r) {
      (this.Or = t),
        (this.Nl = e),
        (this.updateFunction = n),
        (this.xr = r),
        (this.Ol = 5),
        (this.ca = new Js(this.Or, "retry_transaction"));
    }
    return (
      (t.prototype.run = function () {
        this.Fl();
      }),
      (t.prototype.Fl = function () {
        var t = this;
        this.ca.ea(function () {
          return e(t, void 0, void 0, function () {
            var t,
              e,
              r = this;
            return n(this, function (n) {
              return (
                (t = this.Nl.wl()),
                (e = this.Ul(t)) &&
                  e
                    .then(function (e) {
                      r.Or.Qr(function () {
                        return t
                          .commit()
                          .then(function () {
                            r.xr.resolve(e);
                          })
                          .catch(function (t) {
                            r.jl(t);
                          });
                      });
                    })
                    .catch(function (t) {
                      r.jl(t);
                    }),
                [2]
              );
            });
          });
        });
      }),
      (t.prototype.Ul = function (t) {
        try {
          var e = this.updateFunction(t);
          return !Zr(e) && e.catch && e.then
            ? e
            : (this.xr.reject(
                Error("Transaction callback must return a Promise")
              ),
              null);
        } catch (t) {
          return this.xr.reject(t), null;
        }
      }),
      (t.prototype.jl = function (t) {
        var e = this;
        this.Ol > 0 && this.xl(t)
          ? ((this.Ol -= 1),
            this.Or.Qr(function () {
              return e.Fl(), Promise.resolve();
            }))
          : this.xr.reject(t);
      }),
      (t.prototype.xl = function (t) {
        if ("FirebaseError" === t.name) {
          var e = t.code;
          return "aborted" === e || "failed-precondition" === e || !uo(e);
        }
        return !1;
      }),
      t
    );
  })(),
  ea = function (t, e, n) {
    (this.query = t), (this.targetId = e), (this.view = n);
  },
  na = function (t) {
    (this.key = t), (this.Ll = !1);
  },
  ra = (function () {
    function t(t, e, n, r, i) {
      (this.kf = t),
        (this.Nl = e),
        (this.Ml = n),
        (this.currentUser = r),
        (this.ql = i),
        (this.Bl = null),
        (this.Ql = new rs(function (t) {
          return t.canonicalId();
        })),
        (this.Gl = new Map()),
        (this.Wl = []),
        (this.zl = new Gr(Br.F)),
        (this.Kl = new Map()),
        (this.Jl = new ys()),
        (this.Hl = {}),
        (this.Yl = new Map()),
        (this.Xl = Gs.Tc()),
        (this.isPrimary = void 0),
        (this.onlineState = "Unknown");
    }
    return (
      Object.defineProperty(t.prototype, "$l", {
        get: function () {
          return !0 === this.isPrimary;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.subscribe = function (t) {
        Wo(null !== t, "SyncEngine listener cannot be null"),
          Wo(null === this.Bl, "SyncEngine already has a subscriber."),
          (this.Bl = t);
      }),
      (t.prototype.listen = function (t) {
        return e(this, void 0, void 0, function () {
          var e, r, i, o, s;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.Zl("listen()"),
                  (i = this.Ql.get(t))
                    ? ((e = i.targetId),
                      this.Ml.ph(e),
                      (r = i.view.kl()),
                      [3, 4])
                    : [3, 1]
                );
              case 1:
                return [4, this.kf.Eo(t.qn())];
              case 2:
                return (
                  (o = n.sent()),
                  (s = this.Ml.ph(o.targetId)),
                  (e = o.targetId),
                  [4, this.td(t, e, "current" === s)]
                );
              case 3:
                (r = n.sent()),
                  this.isPrimary && this.Nl.listen(o),
                  (n.label = 4);
              case 4:
                return this.Bl.Ra([r]), [2, e];
            }
          });
        });
      }),
      (t.prototype.td = function (t, r, i) {
        return e(this, void 0, void 0, function () {
          var e, o, s, u, a, h;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.kf.Co(t, !0)];
              case 1:
                return (
                  (e = n.sent()),
                  (o = new Zu(t, e.ko)),
                  (s = o.Tl(e.documents)),
                  (u = Ao.yi(r, i && "Offline" !== this.onlineState)),
                  Wo(
                    0 === (a = o.Is(s, !0 === this.isPrimary, u)).Al.length,
                    "View returned limbo docs before target ack from the server."
                  ),
                  Wo(
                    !!a.snapshot,
                    "applyChanges for new view should always return a snapshot"
                  ),
                  (h = new ea(t, r, o)),
                  this.Ql.set(t, h),
                  this.Gl.has(r) ? this.Gl.get(r).push(t) : this.Gl.set(r, [t]),
                  [2, a.snapshot]
                );
            }
          });
        });
      }),
      (t.prototype.nd = function (t) {
        return e(this, void 0, void 0, function () {
          var e, r;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.kf.Co(t.query, !0)];
              case 1:
                return (
                  (e = n.sent()),
                  (r = t.view.Vl(e)),
                  this.isPrimary && this.ed(t.targetId, r.Al),
                  [2, r]
                );
            }
          });
        });
      }),
      (t.prototype.nl = function (t) {
        return e(this, void 0, void 0, function () {
          var e,
            r,
            i = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.Zl("unlisten()"),
                  Wo(
                    !!(e = this.Ql.get(t)),
                    "Trying to unlisten on query not found:" + t
                  ),
                  (r = this.Gl.get(e.targetId)).length > 1
                    ? (this.Gl.set(
                        e.targetId,
                        r.filter(function (e) {
                          return !e.isEqual(t);
                        })
                      ),
                      this.Ql.delete(t),
                      [2])
                    : this.isPrimary
                    ? (this.Ml.gh(e.targetId),
                      this.Ml.lh(e.targetId)
                        ? [3, 2]
                        : [
                            4,
                            this.kf
                              .Ao(e.targetId, !1)
                              .then(function () {
                                i.Ml._h(e.targetId),
                                  i.Nl.nl(e.targetId),
                                  i.rd(e.targetId);
                              })
                              .catch(bs),
                          ])
                    : [3, 3]
                );
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return [3, 5];
              case 3:
                return this.rd(e.targetId), [4, this.kf.Ao(e.targetId, !0)];
              case 4:
                n.sent(), (n.label = 5);
              case 5:
                return [2];
            }
          });
        });
      }),
      (t.prototype.write = function (t, r) {
        return e(this, void 0, void 0, function () {
          var e;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return this.Zl("write()"), [4, this.kf.zs(t)];
              case 1:
                return (
                  (e = n.sent()),
                  this.Ml.dh(e.batchId),
                  this.ud(e.batchId, r),
                  [4, this.sd(e.ds)]
                );
              case 2:
                return n.sent(), [4, this.Nl.Xf()];
              case 3:
                return n.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.runTransaction = function (t, e, n) {
        new ta(t, this.Nl, e, n).run();
      }),
      (t.prototype.ho = function (t) {
        return e(this, void 0, void 0, function () {
          var e,
            r = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                this.Zl("applyRemoteEvent()"), (n.label = 1);
              case 1:
                return n.trys.push([1, 4, , 6]), [4, this.kf.ho(t)];
              case 2:
                return (
                  (e = n.sent()),
                  t.wi.forEach(function (t, e) {
                    var n = r.Kl.get(e);
                    n &&
                      (Wo(
                        t.Ii.size + t.Ti.size + t.Ei.size <= 1,
                        "Limbo resolution for single document contains multiple changes."
                      ),
                      t.Ii.size > 0
                        ? (n.Ll = !0)
                        : t.Ti.size > 0
                        ? Wo(
                            n.Ll,
                            "Received change for limbo target document without add."
                          )
                        : t.Ei.size > 0 &&
                          (Wo(
                            n.Ll,
                            "Received remove for limbo target document without add."
                          ),
                          (n.Ll = !1)));
                  }),
                  [4, this.sd(e, t)]
                );
              case 3:
                return n.sent(), [3, 6];
              case 4:
                return [4, bs(n.sent())];
              case 5:
                return n.sent(), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Cl = function (t, e) {
        if ((this.isPrimary && 0 === e) || (!this.isPrimary && 1 === e)) {
          this.Zl("applyOnlineStateChange()");
          var n = [];
          this.Ql.forEach(function (e, r) {
            var i = r.view.Cl(t);
            Wo(
              0 === i.Al.length,
              "OnlineState should not affect limbo documents."
            ),
              i.snapshot && n.push(i.snapshot);
          }),
            this.Bl.od(t),
            this.Bl.Ra(n),
            (this.onlineState = t),
            this.isPrimary && this.Ml.Eh(t);
        }
      }),
      (t.prototype.ul = function (t, r) {
        return e(this, void 0, void 0, function () {
          var e,
            i,
            o,
            s,
            u,
            a = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.Zl("rejectListens()"),
                  this.Ml.Ih(t, "rejected", r),
                  (e = this.Kl.get(t)),
                  (i = e && e.key)
                    ? ((this.zl = this.zl.remove(i)),
                      this.Kl.delete(t),
                      this.hd(),
                      (o = (o = new Gr(Br.F)).ut(i, new Gi(i, Vr.V()))),
                      (s = go().add(i)),
                      (u = new No(Vr.MIN, new Map(), new Kr(Jo), o, s)),
                      [2, this.ho(u)])
                    : [3, 1]
                );
              case 1:
                return [
                  4,
                  this.kf
                    .Ao(t, !1)
                    .then(function () {
                      return a.rd(t, r);
                    })
                    .catch(bs),
                ];
              case 2:
                n.sent(), (n.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Nh = function (t, r, i) {
        return e(this, void 0, void 0, function () {
          var e;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return this.Zl("applyBatchState()"), [4, this.kf.Js(t)];
              case 1:
                return null === (e = n.sent())
                  ? (zo(
                      "SyncEngine",
                      "Cannot apply mutation batch with id: " + t
                    ),
                    [2])
                  : "pending" !== r
                  ? [3, 3]
                  : [4, this.Nl.Xf()];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                "acknowledged" === r || "rejected" === r
                  ? (this.ad(t, i || null), this.kf.Fo(t))
                  : Ko("Unknown batchState: " + r),
                  (n.label = 4);
              case 4:
                return [4, this.sd(e)];
              case 5:
                return n.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.fl = function (t) {
        return e(this, void 0, void 0, function () {
          var e, r;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                this.Zl("applySuccessfulWrite()"),
                  (e = t.batch.batchId),
                  this.ad(e, null),
                  this.fd(e),
                  (n.label = 1);
              case 1:
                return n.trys.push([1, 4, , 6]), [4, this.kf.Ys(t)];
              case 2:
                return (
                  (r = n.sent()), this.Ml.wh(e, "acknowledged"), [4, this.sd(r)]
                );
              case 3:
                return n.sent(), [3, 6];
              case 4:
                return [4, bs(n.sent())];
              case 5:
                return n.sent(), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }),
      (t.prototype.vl = function (t, r) {
        return e(this, void 0, void 0, function () {
          var e;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                this.Zl("rejectFailedWrite()"),
                  this.ad(t, r),
                  this.fd(t),
                  (n.label = 1);
              case 1:
                return n.trys.push([1, 4, , 6]), [4, this.kf.no(t)];
              case 2:
                return (
                  (e = n.sent()), this.Ml.wh(t, "rejected", r), [4, this.sd(e)]
                );
              case 3:
                return n.sent(), [3, 6];
              case 4:
                return [4, bs(n.sent())];
              case 5:
                return n.sent(), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }),
      (t.prototype.ld = function (t) {
        return e(this, void 0, void 0, function () {
          var e, r;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.Nl.xf() ||
                    zo(
                      "SyncEngine",
                      "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
                    ),
                  [4, this.kf.ro()]
                );
              case 1:
                return -1 === (e = n.sent())
                  ? (t.resolve(), [2])
                  : ((r = this.Yl.get(e) || []).push(t),
                    this.Yl.set(e, r),
                    [2]);
            }
          });
        });
      }),
      (t.prototype.fd = function (t) {
        (this.Yl.get(t) || []).forEach(function (t) {
          t.resolve();
        }),
          this.Yl.delete(t);
      }),
      (t.prototype.dd = function (t) {
        this.Yl.forEach(function (e) {
          e.forEach(function (e) {
            e.reject(new Or(kr.CANCELLED, t));
          });
        }),
          this.Yl.clear();
      }),
      (t.prototype.ud = function (t, e) {
        var n = this.Hl[this.currentUser.i()];
        n || (n = new Gr(Jo)),
          (n = n.ut(t, e)),
          (this.Hl[this.currentUser.i()] = n);
      }),
      (t.prototype.ad = function (t, e) {
        var n = this.Hl[this.currentUser.i()];
        if (n) {
          var r = n.get(t);
          r &&
            (Wo(t === n.ot(), "Mutation callbacks processed out-of-order?"),
            e ? r.reject(e) : r.resolve(),
            (n = n.remove(t))),
            (this.Hl[this.currentUser.i()] = n);
        }
      }),
      (t.prototype.rd = function (t, e) {
        var n = this;
        void 0 === e && (e = null),
          this.Ml.gh(t),
          Wo(
            this.Gl.has(t) && 0 !== this.Gl.get(t).length,
            "There are no queries mapped to target id " + t
          );
        for (var r = 0, i = this.Gl.get(t); r < i.length; r++) {
          var o = i[r];
          this.Ql.delete(o), e && this.Bl.vd(o, e);
        }
        if ((this.Gl.delete(t), this.isPrimary)) {
          var s = this.Jl.as(t);
          this.Jl.hs(t),
            s.forEach(function (t) {
              n.Jl.fs(t) || n.wd(t);
            });
        }
      }),
      (t.prototype.wd = function (t) {
        var e = this.zl.get(t);
        null !== e &&
          (this.Nl.nl(e),
          (this.zl = this.zl.remove(t)),
          this.Kl.delete(e),
          this.hd());
      }),
      (t.prototype.ed = function (t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          i instanceof Xu
            ? (this.Jl.es(i.key, t), this.md(i))
            : i instanceof $u
            ? (zo("SyncEngine", "Document no longer in limbo: " + i.key),
              this.Jl.us(i.key, t),
              this.Jl.fs(i.key) || this.wd(i.key))
            : Ko("Unknown limbo change: " + JSON.stringify(i));
        }
      }),
      (t.prototype.md = function (t) {
        var e = t.key;
        this.zl.get(e) ||
          (zo("SyncEngine", "New document in limbo: " + e),
          this.Wl.push(e),
          this.hd());
      }),
      (t.prototype.hd = function () {
        for (; this.Wl.length > 0 && this.zl.size < this.ql; ) {
          var t = this.Wl.shift(),
            e = this.Xl.next();
          this.Kl.set(e, new na(t)),
            (this.zl = this.zl.ut(t, e)),
            this.Nl.listen(new oo(Yi.Cn(t.path).qn(), e, 2, os.Nr));
        }
      }),
      (t.prototype.pd = function () {
        return this.zl;
      }),
      (t.prototype.bd = function () {
        return this.Wl;
      }),
      (t.prototype.sd = function (t, r) {
        return e(this, void 0, void 0, function () {
          var e,
            i,
            o,
            s = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (e = []),
                  (i = []),
                  (o = []),
                  this.Ql.forEach(function (n, u) {
                    o.push(
                      Promise.resolve()
                        .then(function () {
                          var e = u.view.Tl(t);
                          return e.ic
                            ? s.kf.Co(u.query, !1).then(function (t) {
                                var n = t.documents;
                                return u.view.Tl(n, e);
                              })
                            : e;
                        })
                        .then(function (t) {
                          var n = r && r.wi.get(u.targetId),
                            o = u.view.Is(t, !0 === s.isPrimary, n);
                          if ((s.ed(u.targetId, o.Al), o.snapshot)) {
                            s.isPrimary &&
                              s.Ml.Ih(
                                u.targetId,
                                o.snapshot.fromCache ? "not-current" : "current"
                              ),
                              e.push(o.snapshot);
                            var a = is.Ar(u.targetId, o.snapshot);
                            i.push(a);
                          }
                        })
                    );
                  }),
                  [4, Promise.all(o)]
                );
              case 1:
                return n.sent(), this.Bl.Ra(e), [4, this.kf.bo(i)];
              case 2:
                return n.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.Zl = function (t) {
        Wo(
          null !== this.Bl,
          "Trying to call " + t + " before calling subscribe()."
        );
      }),
      (t.prototype.ml = function (t) {
        return e(this, void 0, void 0, function () {
          var e, r;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (e = !this.currentUser.isEqual(t)),
                  (this.currentUser = t),
                  e
                    ? (this.dd(
                        "'waitForPendingWrites' promise is rejected due to a user change."
                      ),
                      [4, this.kf.Ms(t)])
                    : [3, 3]
                );
              case 1:
                return (
                  (r = n.sent()), this.Ml.Ms(t, r.Gs, r.Ws), [4, this.sd(r.Qs)]
                );
              case 2:
                n.sent(), (n.label = 3);
              case 3:
                return [4, this.Nl.ml()];
              case 4:
                return n.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.pl = function (t) {
        return e(this, void 0, void 0, function () {
          var e,
            r,
            i,
            o,
            s,
            u,
            a = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return !0 !== t || !0 === this.isPrimary
                  ? [3, 3]
                  : ((this.isPrimary = !0), [4, this.Nl.pl(!0)]);
              case 1:
                return n.sent(), (s = this.Ml.fh()), [4, this.gd(s.K())];
              case 2:
                for (e = n.sent(), r = 0, i = e; r < i.length; r++)
                  (o = i[r]), this.Nl.listen(o);
                return [3, 7];
              case 3:
                return !1 !== t || !1 === this.isPrimary
                  ? [3, 7]
                  : ((this.isPrimary = !1),
                    (s = []),
                    (u = Promise.resolve()),
                    this.Gl.forEach(function (t, e) {
                      a.Ml.yh(e)
                        ? s.push(e)
                        : (u = u.then(function () {
                            return a.rd(e), a.kf.Ao(e, !0);
                          })),
                        a.Nl.nl(e);
                    }),
                    [4, u]);
              case 4:
                return n.sent(), [4, this.gd(s)];
              case 5:
                return n.sent(), this.yd(), [4, this.Nl.pl(!1)];
              case 6:
                n.sent(), (n.label = 7);
              case 7:
                return [2];
            }
          });
        });
      }),
      (t.prototype.yd = function () {
        var t = this;
        this.Kl.forEach(function (e, n) {
          t.Nl.nl(n);
        }),
          this.Jl.cs(),
          (this.Kl = new Map()),
          (this.zl = new Gr(Br.F));
      }),
      (t.prototype.gd = function (t) {
        return e(this, void 0, void 0, function () {
          var e, r, i, o, s, u, a, h, c, f, l, p, d;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                (e = []), (r = []), (i = 0), (o = t), (n.label = 1);
              case 1:
                return i < o.length
                  ? ((s = o[i]),
                    (u = void 0),
                    (a = this.Gl.get(s)) && 0 !== a.length
                      ? [4, this.kf.Ao(s, !0)]
                      : [3, 8])
                  : [3, 14];
              case 2:
                return n.sent(), [4, this.kf.Eo(a[0].qn())];
              case 3:
                (u = n.sent()), (h = 0), (c = a), (n.label = 4);
              case 4:
                return h < c.length
                  ? ((f = c[h]),
                    Wo(!!(l = this.Ql.get(f)), "No query view found for " + f),
                    [4, this.nd(l)])
                  : [3, 7];
              case 5:
                (p = n.sent()).snapshot && r.push(p.snapshot), (n.label = 6);
              case 6:
                return h++, [3, 4];
              case 7:
                return [3, 12];
              case 8:
                return (
                  Wo(
                    !0 === this.isPrimary,
                    "A secondary tab should never have an active target without an active query."
                  ),
                  [4, this.kf.xo(s)]
                );
              case 9:
                return (
                  Wo(!!(d = n.sent()), "Target for id " + s + " not found"),
                  [4, this.kf.Eo(d)]
                );
              case 10:
                return (u = n.sent()), [4, this.td(this._d(d), s, !1)];
              case 11:
                n.sent(), (n.label = 12);
              case 12:
                e.push(u), (n.label = 13);
              case 13:
                return i++, [3, 1];
              case 14:
                return this.Bl.Ra(r), [2, e];
            }
          });
        });
      }),
      (t.prototype._d = function (t) {
        return new Yi(
          t.path,
          t.collectionGroup,
          t.orderBy,
          t.filters,
          t.limit,
          "F",
          t.startAt,
          t.endAt
        );
      }),
      (t.prototype.Oo = function () {
        return this.kf.Oo();
      }),
      (t.prototype.Oh = function (t, r, i) {
        return e(this, void 0, void 0, function () {
          var e, o;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                if (this.isPrimary)
                  return (
                    zo(
                      "SyncEngine",
                      "Ignoring unexpected query state notification."
                    ),
                    [2]
                  );
                if (!this.Gl.has(t)) return [3, 7];
                switch (r) {
                  case "current":
                  case "not-current":
                    return [3, 1];
                  case "rejected":
                    return [3, 4];
                }
                return [3, 6];
              case 1:
                return [4, this.kf.Lo()];
              case 2:
                return (
                  (e = n.sent()),
                  (o = No.gi(t, "current" === r)),
                  [4, this.sd(e, o)]
                );
              case 3:
                return n.sent(), [3, 7];
              case 4:
                return [4, this.kf.Ao(t, !0)];
              case 5:
                return n.sent(), this.rd(t, i), [3, 7];
              case 6:
                Ko("Unexpected target state: " + r), (n.label = 7);
              case 7:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Fh = function (t, r) {
        return e(this, void 0, void 0, function () {
          var e,
            i,
            o,
            s,
            u,
            a,
            h,
            c,
            f,
            l = this;
          return n(this, function (p) {
            switch (p.label) {
              case 0:
                if (!this.isPrimary) return [2];
                (e = 0), (i = t), (p.label = 1);
              case 1:
                return e < i.length
                  ? ((f = i[e]),
                    Wo(
                      !this.Gl.has(f),
                      "Trying to add an already active target"
                    ),
                    [4, this.kf.xo(f)])
                  : [3, 6];
              case 2:
                return (
                  Wo(
                    !!(o = p.sent()),
                    "Query data for active target " + f + " not found"
                  ),
                  [4, this.kf.Eo(o)]
                );
              case 3:
                return (s = p.sent()), [4, this.td(this._d(o), s.targetId, !1)];
              case 4:
                p.sent(), this.Nl.listen(s), (p.label = 5);
              case 5:
                return e++, [3, 1];
              case 6:
                (u = function (t) {
                  return n(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return a.Gl.has(t)
                          ? [
                              4,
                              a.kf
                                .Ao(t, !1)
                                .then(function () {
                                  l.Nl.nl(t), l.rd(t);
                                })
                                .catch(bs),
                            ]
                          : [2, "continue"];
                      case 1:
                        return e.sent(), [2];
                    }
                  });
                }),
                  (a = this),
                  (h = 0),
                  (c = r),
                  (p.label = 7);
              case 7:
                return h < c.length ? ((f = c[h]), [5, u(f)]) : [3, 10];
              case 8:
                p.sent(), (p.label = 9);
              case 9:
                return h++, [3, 7];
              case 10:
                return [2];
            }
          });
        });
      }),
      (t.prototype.enableNetwork = function () {
        return this.kf.jo(!0), this.Nl.enableNetwork();
      }),
      (t.prototype.disableNetwork = function () {
        return this.kf.jo(!1), this.Nl.disableNetwork();
      }),
      (t.prototype.he = function (t) {
        var e = this.Kl.get(t);
        if (e && e.Ll) return go().add(e.key);
        var n = go(),
          r = this.Gl.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
          var s = o[i],
            u = this.Ql.get(s);
          Wo(!!u, "No query view found for " + s), (n = n.Ft(u.view.Il));
        }
        return n;
      }),
      t
    );
  })(),
  ia = function () {
    (this.Id = null), (this.targetId = 0), (this.listeners = []);
  },
  oa = (function () {
    function t(t) {
      (this.Jo = t),
        (this.Td = new rs(function (t) {
          return t.canonicalId();
        })),
        (this.onlineState = "Unknown"),
        (this.Ed = new Set()),
        this.Jo.subscribe(this);
    }
    return (
      (t.prototype.listen = function (t) {
        var e = t.query,
          n = !1,
          r = this.Td.get(e);
        return (
          r || ((n = !0), (r = new ia()), this.Td.set(e, r)),
          r.listeners.push(t),
          Wo(
            !t.Cl(this.onlineState),
            "applyOnlineStateChange() shouldn't raise an event for brand-new listeners."
          ),
          r.Id && t.Dd(r.Id) && this.Rd(),
          n
            ? this.Jo.listen(e).then(function (t) {
                return (r.targetId = t), t;
              })
            : Promise.resolve(r.targetId)
        );
      }),
      (t.prototype.nl = function (t) {
        return e(this, void 0, void 0, function () {
          var e, r, i, o;
          return n(this, function (n) {
            return (
              (e = t.query),
              (r = !1),
              (i = this.Td.get(e)) &&
                (o = i.listeners.indexOf(t)) >= 0 &&
                (i.listeners.splice(o, 1), (r = 0 === i.listeners.length)),
              r ? (this.Td.delete(e), [2, this.Jo.nl(e)]) : [2]
            );
          });
        });
      }),
      (t.prototype.Ra = function (t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
          var i = r[n],
            o = i.query,
            s = this.Td.get(o);
          if (s) {
            for (var u = 0, a = s.listeners; u < a.length; u++)
              a[u].Dd(i) && (e = !0);
            s.Id = i;
          }
        }
        e && this.Rd();
      }),
      (t.prototype.vd = function (t, e) {
        var n = this.Td.get(t);
        if (n)
          for (var r = 0, i = n.listeners; r < i.length; r++) i[r].onError(e);
        this.Td.delete(t);
      }),
      (t.prototype.od = function (t) {
        this.onlineState = t;
        var e = !1;
        this.Td.forEach(function (n, r) {
          for (var i = 0, o = r.listeners; i < o.length; i++)
            o[i].Cl(t) && (e = !0);
        }),
          e && this.Rd();
      }),
      (t.prototype.Sd = function (t) {
        this.Ed.add(t), t.next();
      }),
      (t.prototype.Ad = function (t) {
        this.Ed.delete(t);
      }),
      (t.prototype.Rd = function () {
        this.Ed.forEach(function (t) {
          t.next();
        });
      }),
      t
    );
  })(),
  sa = (function () {
    function t(t, e, n) {
      (this.query = t),
        (this.Cd = e),
        (this.Pd = !1),
        (this.Vd = null),
        (this.onlineState = "Unknown"),
        (this.options = n || {});
    }
    return (
      (t.prototype.Dd = function (t) {
        if (
          (Wo(
            t.docChanges.length > 0 || t.li,
            "We got a new snapshot with no changes?"
          ),
          !this.options.includeMetadataChanges)
        ) {
          for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
            var i = r[n];
            3 !== i.type && e.push(i);
          }
          t = new To(t.query, t.docs, t.ai, e, t.fi, t.fromCache, t.li, !0);
        }
        var o = !1;
        return (
          this.Pd
            ? this.kd(t) && (this.Cd.next(t), (o = !0))
            : this.Nd(t, this.onlineState) && (this.Od(t), (o = !0)),
          (this.Vd = t),
          o
        );
      }),
      (t.prototype.onError = function (t) {
        this.Cd.error(t);
      }),
      (t.prototype.Cl = function (t) {
        this.onlineState = t;
        var e = !1;
        return (
          this.Vd &&
            !this.Pd &&
            this.Nd(this.Vd, t) &&
            (this.Od(this.Vd), (e = !0)),
          e
        );
      }),
      (t.prototype.Nd = function (t, e) {
        if (
          (Wo(
            !this.Pd,
            "Determining whether to raise first event but already had first event"
          ),
          !t.fromCache)
        )
          return !0;
        var n = "Offline" !== e;
        return this.options.Fd && n
          ? (Wo(
              t.fromCache,
              "Waiting for sync, but snapshot is not from cache"
            ),
            !1)
          : !t.docs.M() || "Offline" === e;
      }),
      (t.prototype.kd = function (t) {
        if (t.docChanges.length > 0) return !0;
        var e = this.Vd && this.Vd.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.li && !e) && !0 === this.options.includeMetadataChanges;
      }),
      (t.prototype.Od = function (t) {
        Wo(!this.Pd, "Trying to raise initial events for second time"),
          (t = To.vi(t.query, t.docs, t.fi, t.fromCache)),
          (this.Pd = !0),
          this.Cd.next(t);
      }),
      t
    );
  })(),
  ua = (function () {
    function t(t, e, n, r) {
      (this.platform = t),
        (this.Ud = e),
        (this.credentials = n),
        (this.Or = r),
        (this.clientId = Ho.pr());
    }
    return (
      (t.prototype.start = function (t, e) {
        var n = this;
        this.jd();
        var r = new ss(),
          i = new ss(),
          o = !1;
        return (
          this.credentials.v(function (s) {
            o
              ? n.Or.Qr(function () {
                  return n.ml(s);
                })
              : ((o = !0),
                n
                  .xd(t, e, s, i)
                  .then(function () {
                    return n.Ld(s);
                  })
                  .then(r.resolve, r.reject));
          }),
          this.Or.Qr(function () {
            return r.promise;
          }),
          i.promise
        );
      }),
      (t.prototype.enableNetwork = function () {
        var t = this;
        return (
          this.jd(),
          this.Or.enqueue(function () {
            return t.Jo.enableNetwork();
          })
        );
      }),
      (t.prototype.xd = function (t, r, i, o) {
        return e(this, void 0, void 0, function () {
          var e;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  n.trys.push([0, 2, , 3]),
                  [
                    4,
                    t.initialize(
                      this.Or,
                      this.Ud,
                      this.platform,
                      this.clientId,
                      i,
                      r
                    ),
                  ]
                );
              case 1:
                return (
                  n.sent(),
                  (this.persistence = t.Jc()),
                  (this.Md = t.Kc()),
                  (this.Ml = t.Hc()),
                  o.resolve(),
                  [3, 3]
                );
              case 2:
                if (((e = n.sent()), o.reject(e), !this.qd(e))) throw e;
                return (
                  console.warn(
                    "Error enabling offline persistence. Falling back to persistence disabled: " +
                      e
                  ),
                  [2, this.xd(new Hs(), { zc: !1 }, i, o)]
                );
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.qd = function (t) {
        return "FirebaseError" === t.name
          ? t.code === kr.FAILED_PRECONDITION || t.code === kr.UNIMPLEMENTED
          : !(
              "undefined" != typeof DOMException && t instanceof DOMException
            ) ||
              22 === t.code ||
              20 === t.code ||
              11 === t.code;
      }),
      (t.prototype.jd = function () {
        if (this.Or.Yr)
          throw new Or(
            kr.FAILED_PRECONDITION,
            "The client has already been terminated."
          );
      }),
      (t.prototype.Ld = function (t) {
        var r = this;
        return (
          zo("FirestoreClient", "Initializing. user=", t.uid),
          this.platform.Bd(this.Ud).then(function (i) {
            return e(r, void 0, void 0, function () {
              var r,
                o,
                s,
                u,
                a,
                h,
                c = this;
              return n(this, function (f) {
                switch (f.label) {
                  case 0:
                    return (
                      (r = new Ms()),
                      (this.kf = new ws(this.persistence, r, t)),
                      [4, this.kf.start()]
                    );
                  case 1:
                    return (
                      f.sent(),
                      (o = this.platform.Qd()),
                      (s = this.platform.Gd(this.Ud.ae)),
                      (u = new tu(this.Or, i, this.credentials, s)),
                      (a = function (t) {
                        return c.Jo.Cl(t, 0);
                      }),
                      (h = function (t) {
                        return c.Jo.Cl(t, 1);
                      }),
                      (this.Nl = new Ju(this.kf, u, this.Or, a, o)),
                      (this.Jo = new ra(this.kf, this.Nl, this.Ml, t, 100)),
                      (this.Ml.Ho = h),
                      (this.Nl.Jo = this.Jo),
                      (this.Ml.Jo = this.Jo),
                      (this.Wd = new oa(this.Jo)),
                      [4, this.Ml.start()]
                    );
                  case 2:
                    return f.sent(), [4, this.Nl.start()];
                  case 3:
                    return (
                      f.sent(),
                      [
                        4,
                        this.persistence.jc(function (t) {
                          return e(c, void 0, void 0, function () {
                            return n(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, this.Jo.pl(t)];
                                case 1:
                                  return (
                                    e.sent(),
                                    t && !this.Md.qu
                                      ? this.Md.start(this.kf)
                                      : t || this.Md.stop(),
                                    [2]
                                  );
                              }
                            });
                          });
                        }),
                      ]
                    );
                  case 4:
                    return (
                      f.sent(),
                      [
                        4,
                        this.persistence.xc(function () {
                          return e(c, void 0, void 0, function () {
                            return n(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [4, this.terminate()];
                                case 1:
                                  return t.sent(), [2];
                              }
                            });
                          });
                        }),
                      ]
                    );
                  case 5:
                    return f.sent(), [2];
                }
              });
            });
          })
        );
      }),
      (t.prototype.ml = function (t) {
        return (
          this.Or.ru(),
          zo("FirestoreClient", "Credential Changed. Current user: " + t.uid),
          this.Jo.ml(t)
        );
      }),
      (t.prototype.disableNetwork = function () {
        var t = this;
        return (
          this.jd(),
          this.Or.enqueue(function () {
            return t.Jo.disableNetwork();
          })
        );
      }),
      (t.prototype.terminate = function () {
        var t = this;
        return this.Or.nu(function () {
          return e(t, void 0, void 0, function () {
            return n(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.Md.stop(), [4, this.Nl.shutdown()];
                case 1:
                  return t.sent(), [4, this.Ml.shutdown()];
                case 2:
                  return t.sent(), [4, this.persistence.shutdown()];
                case 3:
                  return t.sent(), this.credentials.m(), [2];
              }
            });
          });
        });
      }),
      (t.prototype.waitForPendingWrites = function () {
        var t = this;
        this.jd();
        var e = new ss();
        return (
          this.Or.Qr(function () {
            return t.Jo.ld(e);
          }),
          e.promise
        );
      }),
      (t.prototype.listen = function (t, e, n) {
        var r = this;
        this.jd();
        var i = new sa(t, e, n);
        return (
          this.Or.Qr(function () {
            return r.Wd.listen(i);
          }),
          i
        );
      }),
      (t.prototype.nl = function (t) {
        var e = this;
        this.zd ||
          this.Or.Qr(function () {
            return e.Wd.nl(t);
          });
      }),
      (t.prototype.Kd = function (t) {
        var e = this;
        return (
          this.jd(),
          this.Or.enqueue(function () {
            return e.kf.Io(t);
          }).then(function (t) {
            if (t instanceof Bi) return t;
            if (t instanceof Gi) return null;
            throw new Or(
              kr.UNAVAILABLE,
              "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
            );
          })
        );
      }),
      (t.prototype.Jd = function (t) {
        var r = this;
        return (
          this.jd(),
          this.Or.enqueue(function () {
            return e(r, void 0, void 0, function () {
              var e, r, i;
              return n(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.kf.Co(t, !0)];
                  case 1:
                    return (
                      (e = n.sent()),
                      (r = new Zu(t, e.ko)),
                      (i = r.Tl(e.documents)),
                      [2, r.Is(i, !1).snapshot]
                    );
                }
              });
            });
          })
        );
      }),
      (t.prototype.write = function (t) {
        var e = this;
        this.jd();
        var n = new ss();
        return (
          this.Or.Qr(function () {
            return e.Jo.write(t, n);
          }),
          n.promise
        );
      }),
      (t.prototype.ae = function () {
        return this.Ud.ae;
      }),
      (t.prototype.Sd = function (t) {
        var e = this;
        this.jd(),
          this.Or.Qr(function () {
            return e.Wd.Sd(t), Promise.resolve();
          });
      }),
      (t.prototype.Ad = function (t) {
        this.zd || this.Wd.Ad(t);
      }),
      Object.defineProperty(t.prototype, "zd", {
        get: function () {
          return this.Or.Yr;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.transaction = function (t) {
        var e = this;
        this.jd();
        var n = new ss();
        return (
          this.Or.Qr(function () {
            return e.Jo.runTransaction(e.Or, t, n), Promise.resolve();
          }),
          n.promise
        );
      }),
      t
    );
  })(),
  aa = (function () {
    function t(t) {
      (this.observer = t), (this.muted = !1);
    }
    return (
      (t.prototype.next = function (t) {
        this.Hd(this.observer.next, t);
      }),
      (t.prototype.error = function (t) {
        this.Hd(this.observer.error, t);
      }),
      (t.prototype.Yd = function () {
        this.muted = !0;
      }),
      (t.prototype.Hd = function (t, e) {
        var n = this;
        this.muted ||
          setTimeout(function () {
            n.muted || t(e);
          }, 0);
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ha(t) {
  return (function (t, e) {
    if ("object" != typeof t || null === t) return !1;
    for (
      var n = t, r = 0, i = ["next", "error", "complete"];
      r < i.length;
      r++
    ) {
      var o = i[r];
      if (o in n && "function" == typeof n[o]) return !0;
    }
    return !1;
  })(
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ t
  );
}
var ca = (function () {
    function t(t, e, n, r) {
      (this.firestore = t),
        (this.timestampsInSnapshots = e),
        (this.Xd = n),
        (this.converter = r);
    }
    return (
      (t.prototype.$d = function (t) {
        switch (oi(t)) {
          case 0:
            return null;
          case 1:
            return t.booleanValue;
          case 2:
            return li(t.integerValue || t.doubleValue);
          case 3:
            return this.Zd(t.timestampValue);
          case 4:
            return this.tv(t);
          case 5:
            return t.stringValue;
          case 6:
            return new Nu(pi(t.bytesValue));
          case 7:
            return this.nv(t.referenceValue);
          case 8:
            return new Lu(t.geoPointValue.latitude, t.geoPointValue.longitude);
          case 9:
            return this.iv(t.arrayValue);
          case 10:
            return this.ev(t.mapValue);
          default:
            throw Ko("Invalid value type: " + JSON.stringify(t));
        }
      }),
      (t.prototype.ev = function (t) {
        var e = this,
          n = {};
        return (
          Jr(t.fields || {}, function (t, r) {
            n[t] = e.$d(r);
          }),
          n
        );
      }),
      (t.prototype.iv = function (t) {
        var e = this;
        return (t.values || []).map(function (t) {
          return e.$d(t);
        });
      }),
      (t.prototype.tv = function (t) {
        switch (this.Xd) {
          case "previous":
            var e = (function t(e) {
              var n = e.mapValue.fields.__previous_value__;
              return ni(n) ? t(n) : n;
            })(t);
            return null == e ? null : this.$d(e);
          case "estimate":
            return this.Zd(ri(t));
          default:
            return null;
        }
      }),
      (t.prototype.Zd = function (t) {
        var e = fi(t),
          n = new _r(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
      }),
      (t.prototype.nv = function (t) {
        var e = qr.H(t);
        Wo(qo(e), "ReferenceValue is not valid " + t);
        var n = new ts(e.get(1), e.get(3)),
          r = new Br(e.j(5));
        return (
          n.isEqual(this.firestore.rv) ||
            Qo(
              "Document " +
                r +
                " contains a document reference within a different database (" +
                n.projectId +
                "/" +
                n.database +
                ") which is not supported. It will be treated as a reference in the current database (" +
                this.firestore.rv.projectId +
                "/" +
                this.firestore.rv.database +
                ") instead."
            ),
          new ya(r, this.firestore, this.converter)
        );
      }),
      t
    );
  })(),
  fa = ps.Nu,
  la = (function () {
    function t(t) {
      var e, n;
      if (void 0 === t.host) {
        if (void 0 !== t.ssl)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Can't provide ssl option if host option is not set"
          );
        (this.host = "firestore.googleapis.com"), (this.ssl = !0);
      } else
        au("settings", "non-empty string", "host", t.host),
          (this.host = t.host),
          hu("settings", "boolean", "ssl", t.ssl),
          (this.ssl = null === (e = t.ssl) || void 0 === e || e);
      if (
        (yu("settings", t, [
          "host",
          "ssl",
          "credentials",
          "timestampsInSnapshots",
          "cacheSizeBytes",
          "experimentalForceLongPolling",
        ]),
        hu("settings", "object", "credentials", t.credentials),
        (this.credentials = t.credentials),
        hu(
          "settings",
          "boolean",
          "timestampsInSnapshots",
          t.timestampsInSnapshots
        ),
        !0 === t.timestampsInSnapshots
          ? Qo(
              "\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now."
            )
          : !1 === t.timestampsInSnapshots &&
            Qo(
              "\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."
            ),
        (this.timestampsInSnapshots =
          null === (n = t.timestampsInSnapshots) || void 0 === n || n),
        hu("settings", "number", "cacheSizeBytes", t.cacheSizeBytes),
        void 0 === t.cacheSizeBytes)
      )
        this.cacheSizeBytes = ps.Fu;
      else {
        if (t.cacheSizeBytes !== fa && t.cacheSizeBytes < ps.Ou)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "cacheSizeBytes must be at least " + ps.Ou
          );
        this.cacheSizeBytes = t.cacheSizeBytes;
      }
      hu(
        "settings",
        "boolean",
        "experimentalForceLongPolling",
        t.experimentalForceLongPolling
      ),
        (this.forceLongPolling =
          void 0 !== t.experimentalForceLongPolling &&
          t.experimentalForceLongPolling);
    }
    return (
      (t.prototype.isEqual = function (t) {
        return (
          this.host === t.host &&
          this.ssl === t.ssl &&
          this.timestampsInSnapshots === t.timestampsInSnapshots &&
          this.credentials === t.credentials &&
          this.cacheSizeBytes === t.cacheSizeBytes &&
          this.forceLongPolling === t.forceLongPolling
        );
      }),
      t
    );
  })(),
  pa = (function () {
    function t(r, i, o) {
      var s = this;
      if (
        (void 0 === o && (o = new Hs()),
        (this.uv = null),
        (this.sv = new as()),
        (this.INTERNAL = {
          delete: function () {
            return e(s, void 0, void 0, function () {
              return n(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.ov(), [4, this.hv.terminate()];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          },
        }),
        "object" == typeof r.options)
      ) {
        var u = r;
        (this.uv = u),
          (this.rv = t.cv(u)),
          (this.av = u.name),
          (this.fv = new xr(i));
      } else {
        var a = r;
        if (!a.projectId)
          throw new Or(kr.INVALID_ARGUMENT, "Must provide projectId");
        (this.rv = new ts(a.projectId, a.database)),
          (this.av = "[DEFAULT]"),
          (this.fv = new Rr());
      }
      (this.lv = o), (this.dv = new la({})), (this.vv = this.wv(this.rv));
    }
    return (
      (t.prototype.settings = function (t) {
        if (
          (nu("Firestore.settings", arguments, 1),
          su("Firestore.settings", "object", 1, t),
          Oa(t, "persistence"))
        )
          throw new Or(
            kr.INVALID_ARGUMENT,
            '"persistence" is now specified with a separate call to firestore.enablePersistence().'
          );
        var e = new la(t);
        if (this.hv && !this.dv.isEqual(e))
          throw new Or(
            kr.FAILED_PRECONDITION,
            "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object."
          );
        (this.dv = e),
          void 0 !== e.credentials && (this.fv = Lr(e.credentials));
      }),
      (t.prototype.enableNetwork = function () {
        return this.ov(), this.hv.enableNetwork();
      }),
      (t.prototype.disableNetwork = function () {
        return this.ov(), this.hv.disableNetwork();
      }),
      (t.prototype.enablePersistence = function (t) {
        var e, n;
        if (this.hv)
          throw new Or(
            kr.FAILED_PRECONDITION,
            "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object."
          );
        var r = !1;
        return (
          t &&
            (void 0 !== t.experimentalTabSynchronization &&
              Qo(
                "The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."
              ),
            (r =
              null !==
                (n =
                  null !== (e = t.synchronizeTabs) && void 0 !== e
                    ? e
                    : t.experimentalTabSynchronization) &&
              void 0 !== n &&
              n)),
          this.mv(this.lv, {
            zc: !0,
            cacheSizeBytes: this.dv.cacheSizeBytes,
            synchronizeTabs: r,
          })
        );
      }),
      (t.prototype.clearPersistence = function () {
        return e(this, void 0, void 0, function () {
          var t,
            r = this;
          return n(this, function (i) {
            if (void 0 !== this.hv && !this.hv.zd)
              throw new Or(
                kr.FAILED_PRECONDITION,
                "Persistence cannot be cleared after this Firestore instance is initialized."
              );
            return (
              (t = new ss()),
              this.sv.Xr(function () {
                return e(r, void 0, void 0, function () {
                  var e, r;
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          (e = this.pv()),
                          [4, this.lv.clearPersistence(e)]
                        );
                      case 1:
                        return n.sent(), t.resolve(), [3, 3];
                      case 2:
                        return (r = n.sent()), t.reject(r), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              [2, t.promise]
            );
          });
        });
      }),
      (t.prototype.terminate = function () {
        return (
          this.app._removeServiceInstance("firestore"), this.INTERNAL.delete()
        );
      }),
      Object.defineProperty(t.prototype, "bv", {
        get: function () {
          return this.ov(), this.hv.zd;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.waitForPendingWrites = function () {
        return this.ov(), this.hv.waitForPendingWrites();
      }),
      (t.prototype.onSnapshotsInSync = function (t) {
        if ((this.ov(), ha(t))) return this.gv(t);
        su("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = { next: t };
        return this.gv(e);
      }),
      (t.prototype.gv = function (t) {
        var e = this,
          n = new aa({
            next: function () {
              t.next && t.next();
            },
            error: function (t) {
              throw Ko("Uncaught Error in onSnapshotsInSync");
            },
          });
        return (
          this.hv.Sd(n),
          function () {
            n.Yd(), e.hv.Ad(n);
          }
        );
      }),
      (t.prototype.ov = function () {
        return this.hv || this.mv(new Hs(), { zc: !1 }), this.hv;
      }),
      (t.prototype.pv = function () {
        return new Zo(
          this.rv,
          this.av,
          this.dv.host,
          this.dv.ssl,
          this.dv.forceLongPolling
        );
      }),
      (t.prototype.mv = function (t, e) {
        Wo(!!this.dv.host, "FirestoreSettings.host is not set"),
          Wo(!this.hv, "configureClient() called multiple times");
        var n = this.pv();
        return (
          (this.hv = new ua(Fo.xt(), n, this.fv, this.sv)), this.hv.start(t, e)
        );
      }),
      (t.prototype.wv = function (t) {
        var e = new Uo(t, { de: Fo.xt().de });
        return new Bu(e, function (e) {
          if (e instanceof ya) {
            var n = t,
              r = e.firestore.rv;
            if (!r.isEqual(n))
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Document reference is for database " +
                  r.projectId +
                  "/" +
                  r.database +
                  " but should be for database " +
                  n.projectId +
                  "/" +
                  n.database
              );
            return new ju(t, e.yv);
          }
          return e;
        });
      }),
      (t.cv = function (t) {
        if (!Oa(t.options, "projectId"))
          throw new Or(
            kr.INVALID_ARGUMENT,
            '"projectId" not provided in firebase.initializeApp.'
          );
        var e = t.options.projectId;
        if (!e || "string" != typeof e)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "projectId must be a string in FirebaseApp.options"
          );
        return new ts(e);
      }),
      Object.defineProperty(t.prototype, "app", {
        get: function () {
          if (!this.uv)
            throw new Or(
              kr.FAILED_PRECONDITION,
              "Firestore was not initialized using the Firebase SDK. 'app' is not available"
            );
          return this.uv;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.collection = function (t) {
        return (
          nu("Firestore.collection", arguments, 1),
          su("Firestore.collection", "non-empty string", 1, t),
          this.ov(),
          new Ia(qr.H(t), this)
        );
      }),
      (t.prototype.doc = function (t) {
        return (
          nu("Firestore.doc", arguments, 1),
          su("Firestore.doc", "non-empty string", 1, t),
          this.ov(),
          ya._v(qr.H(t), this)
        );
      }),
      (t.prototype.collectionGroup = function (t) {
        if (
          (nu("Firestore.collectionGroup", arguments, 1),
          su("Firestore.collectionGroup", "non-empty string", 1, t),
          t.indexOf("/") >= 0)
        )
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid collection ID '" +
              t +
              "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'."
          );
        return this.ov(), new ba(new Yi(qr.Y, t), this);
      }),
      (t.prototype.runTransaction = function (t) {
        var e = this;
        return (
          nu("Firestore.runTransaction", arguments, 1),
          su("Firestore.runTransaction", "function", 1, t),
          this.ov().transaction(function (n) {
            return t(new da(e, n));
          })
        );
      }),
      (t.prototype.batch = function () {
        return this.ov(), new va(this);
      }),
      Object.defineProperty(t, "logLevel", {
        get: function () {
          switch (Bo()) {
            case r.DEBUG:
              return "debug";
            case r.SILENT:
              return "silent";
            default:
              return "error";
          }
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.setLogLevel = function (t) {
        switch (
          (nu("Firestore.setLogLevel", arguments, 1),
          su("Firestore.setLogLevel", "non-empty string", 1, t),
          t)
        ) {
          case "debug":
            Go(r.DEBUG);
            break;
          case "error":
            Go(r.ERROR);
            break;
          case "silent":
            Go(r.SILENT);
            break;
          default:
            throw new Or(kr.INVALID_ARGUMENT, "Invalid log level: " + t);
        }
      }),
      (t.prototype.Iv = function () {
        return this.dv.timestampsInSnapshots;
      }),
      t
    );
  })(),
  da = (function () {
    function t(t, e) {
      (this.Tv = t), (this.Ev = e);
    }
    return (
      (t.prototype.get = function (t) {
        var e = this;
        nu("Transaction.get", arguments, 1);
        var n = Da("Transaction.get", t, this.Tv);
        return this.Ev.lookup([n.yv]).then(function (t) {
          if (!t || 1 !== t.length)
            return Ko("Mismatch in docs returned from document lookup.");
          var r = t[0];
          if (r instanceof Gi) return new ga(e.Tv, n.yv, null, !1, !1, n.Dv);
          if (r instanceof Bi) return new ga(e.Tv, n.yv, r, !1, !1, n.Dv);
          throw Ko(
            "BatchGetDocumentsRequest returned unexpected document type: " +
              r.constructor.name
          );
        });
      }),
      (t.prototype.set = function (t, e, n) {
        iu("Transaction.set", arguments, 2, 3);
        var r = Da("Transaction.set", t, this.Tv);
        n = Ta("Transaction.set", n);
        var i = ka(r.Dv, e, "Transaction.set"),
          o = i[0],
          s = i[1],
          u =
            n.merge || n.mergeFields
              ? this.Tv.vv.uf(s, o, n.mergeFields)
              : this.Tv.vv.ef(s, o);
        return this.Ev.set(r.yv, u), this;
      }),
      (t.prototype.update = function (t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++)
          o[s - 3] = arguments[s];
        return (
          "string" == typeof e || e instanceof Du
            ? (ru("Transaction.update", arguments, 3),
              (r = Da("Transaction.update", t, this.Tv)),
              (i = this.Tv.vv.af("Transaction.update", e, n, o)))
            : (nu("Transaction.update", arguments, 2),
              (r = Da("Transaction.update", t, this.Tv)),
              (i = this.Tv.vv.sf("Transaction.update", e))),
          this.Ev.update(r.yv, i),
          this
        );
      }),
      (t.prototype.delete = function (t) {
        nu("Transaction.delete", arguments, 1);
        var e = Da("Transaction.delete", t, this.Tv);
        return this.Ev.delete(e.yv), this;
      }),
      t
    );
  })(),
  va = (function () {
    function t(t) {
      (this.Tv = t), (this.Rv = []), (this.Sv = !1);
    }
    return (
      (t.prototype.set = function (t, e, n) {
        iu("WriteBatch.set", arguments, 2, 3), this.Av();
        var r = Da("WriteBatch.set", t, this.Tv);
        n = Ta("WriteBatch.set", n);
        var i = ka(r.Dv, e, "WriteBatch.set"),
          o = i[0],
          s = i[1],
          u =
            n.merge || n.mergeFields
              ? this.Tv.vv.uf(s, o, n.mergeFields)
              : this.Tv.vv.ef(s, o);
        return (this.Rv = this.Rv.concat(u.Ka(r.yv, xi.NONE))), this;
      }),
      (t.prototype.update = function (t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++)
          o[s - 3] = arguments[s];
        return (
          this.Av(),
          "string" == typeof e || e instanceof Du
            ? (ru("WriteBatch.update", arguments, 3),
              (r = Da("WriteBatch.update", t, this.Tv)),
              (i = this.Tv.vv.af("WriteBatch.update", e, n, o)))
            : (nu("WriteBatch.update", arguments, 2),
              (r = Da("WriteBatch.update", t, this.Tv)),
              (i = this.Tv.vv.sf("WriteBatch.update", e))),
          (this.Rv = this.Rv.concat(i.Ka(r.yv, xi.exists(!0)))),
          this
        );
      }),
      (t.prototype.delete = function (t) {
        nu("WriteBatch.delete", arguments, 1), this.Av();
        var e = Da("WriteBatch.delete", t, this.Tv);
        return (this.Rv = this.Rv.concat(new Vi(e.yv, xi.NONE))), this;
      }),
      (t.prototype.commit = function () {
        return (
          this.Av(),
          (this.Sv = !0),
          this.Rv.length > 0 ? this.Tv.ov().write(this.Rv) : Promise.resolve()
        );
      }),
      (t.prototype.Av = function () {
        if (this.Sv)
          throw new Or(
            kr.FAILED_PRECONDITION,
            "A write batch can no longer be used after commit() has been called."
          );
      }),
      t
    );
  })(),
  ya = (function () {
    function t(t, e, n) {
      (this.yv = t),
        (this.firestore = e),
        (this.Dv = n),
        (this.hv = this.firestore.ov());
    }
    return (
      (t._v = function (e, n, r) {
        if (e.length % 2 != 0)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid document reference. Document references must have an even number of segments, but " +
              e.J() +
              " has " +
              e.length
          );
        return new t(new Br(e), n, r);
      }),
      Object.defineProperty(t.prototype, "id", {
        get: function () {
          return this.yv.path.B();
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "parent", {
        get: function () {
          return new Ia(this.yv.path.L(), this.firestore, this.Dv);
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "path", {
        get: function () {
          return this.yv.path.J();
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.collection = function (t) {
        if (
          (nu("DocumentReference.collection", arguments, 1),
          su("DocumentReference.collection", "non-empty string", 1, t),
          !t)
        )
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Must provide a non-empty collection name to collection()"
          );
        var e = qr.H(t);
        return new Ia(this.yv.path.child(e), this.firestore);
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mu("isEqual", "DocumentReference", 1, e);
        return (
          this.firestore === e.firestore &&
          this.yv.isEqual(e.yv) &&
          this.Dv === e.Dv
        );
      }),
      (t.prototype.set = function (t, e) {
        iu("DocumentReference.set", arguments, 1, 2),
          (e = Ta("DocumentReference.set", e));
        var n = ka(this.Dv, t, "DocumentReference.set"),
          r = n[0],
          i = n[1],
          o =
            e.merge || e.mergeFields
              ? this.firestore.vv.uf(i, r, e.mergeFields)
              : this.firestore.vv.ef(i, r);
        return this.hv.write(o.Ka(this.yv, xi.NONE));
      }),
      (t.prototype.update = function (t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        return (
          "string" == typeof t || t instanceof Du
            ? (ru("DocumentReference.update", arguments, 2),
              (n = this.firestore.vv.af("DocumentReference.update", t, e, r)))
            : (nu("DocumentReference.update", arguments, 1),
              (n = this.firestore.vv.sf("DocumentReference.update", t))),
          this.hv.write(n.Ka(this.yv, xi.exists(!0)))
        );
      }),
      (t.prototype.delete = function () {
        return (
          nu("DocumentReference.delete", arguments, 0),
          this.hv.write([new Vi(this.yv, xi.NONE)])
        );
      }),
      (t.prototype.onSnapshot = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        iu("DocumentReference.onSnapshot", arguments, 1, 4);
        var n,
          r = { includeMetadataChanges: !1 },
          i = 0;
        "object" != typeof t[i] ||
          ha(t[i]) ||
          (yu("DocumentReference.onSnapshot", (r = t[i]), [
            "includeMetadataChanges",
          ]),
          hu(
            "DocumentReference.onSnapshot",
            "boolean",
            "includeMetadataChanges",
            r.includeMetadataChanges
          ),
          i++);
        var o = { includeMetadataChanges: r.includeMetadataChanges };
        return (
          ha(t[i])
            ? (n = t[i])
            : (su("DocumentReference.onSnapshot", "function", i, t[i]),
              uu("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]),
              uu("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]),
              (n = { next: t[i], error: t[i + 1], complete: t[i + 2] })),
          this.Cv(o, n)
        );
      }),
      (t.prototype.Cv = function (t, e) {
        var n = this,
          r = function (t) {
            console.error("Uncaught Error in onSnapshot:", t);
          };
        e.error && (r = e.error.bind(e));
        var i = new aa({
            next: function (t) {
              if (e.next) {
                Wo(
                  t.docs.size <= 1,
                  "Too many documents returned on a document query"
                );
                var r = t.docs.get(n.yv);
                e.next(
                  new ga(
                    n.firestore,
                    n.yv,
                    r,
                    t.fromCache,
                    t.hasPendingWrites,
                    n.Dv
                  )
                );
              }
            },
            error: r,
          }),
          o = this.hv.listen(Yi.Cn(this.yv.path), i, t);
        return function () {
          i.Yd(), n.hv.nl(o);
        };
      }),
      (t.prototype.get = function (t) {
        var e = this;
        return (
          iu("DocumentReference.get", arguments, 0, 1),
          Aa("DocumentReference.get", t),
          new Promise(function (n, r) {
            t && "cache" === t.source
              ? e.firestore
                  .ov()
                  .Kd(e.yv)
                  .then(function (t) {
                    n(
                      new ga(
                        e.firestore,
                        e.yv,
                        t,
                        !0,
                        t instanceof Bi && t.nn,
                        e.Dv
                      )
                    );
                  }, r)
              : e.Pv(n, r, t);
          })
        );
      }),
      (t.prototype.Pv = function (t, e, n) {
        var r = this.Cv(
          { includeMetadataChanges: !0, Fd: !0 },
          {
            next: function (i) {
              r(),
                !i.exists && i.metadata.fromCache
                  ? e(
                      new Or(
                        kr.UNAVAILABLE,
                        "Failed to get document because the client is offline."
                      )
                    )
                  : i.exists &&
                    i.metadata.fromCache &&
                    n &&
                    "server" === n.source
                  ? e(
                      new Or(
                        kr.UNAVAILABLE,
                        'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                      )
                    )
                  : t(i);
            },
            error: e,
          }
        );
      }),
      (t.prototype.withConverter = function (e) {
        return new t(this.yv, this.firestore, e);
      }),
      t
    );
  })(),
  ma = (function () {
    function t(t, e) {
      (this.hasPendingWrites = t), (this.fromCache = e);
    }
    return (
      (t.prototype.isEqual = function (t) {
        return (
          this.hasPendingWrites === t.hasPendingWrites &&
          this.fromCache === t.fromCache
        );
      }),
      t
    );
  })(),
  ga = (function () {
    function t(t, e, n, r, i, o) {
      (this.Tv = t),
        (this.yv = e),
        (this.Vv = n),
        (this.kv = r),
        (this.Nv = i),
        (this.Dv = o);
    }
    return (
      (t.prototype.data = function (t) {
        if (
          (iu("DocumentSnapshot.data", arguments, 0, 1),
          (t = Na("DocumentSnapshot.data", t)),
          this.Vv)
        ) {
          if (this.Dv) {
            var e = new wa(this.Tv, this.yv, this.Vv, this.kv, this.Nv);
            return this.Dv.fromFirestore(e, t);
          }
          var n = new ca(this.Tv, this.Tv.Iv(), t.serverTimestamps, void 0);
          return n.$d(this.Vv.yn());
        }
      }),
      (t.prototype.get = function (t, e) {
        if (
          (iu("DocumentSnapshot.get", arguments, 1, 2),
          (e = Na("DocumentSnapshot.get", e)),
          this.Vv)
        ) {
          var n = this.Vv.data().field(Qu("DocumentSnapshot.get", t));
          if (null !== n) {
            var r = new ca(this.Tv, this.Tv.Iv(), e.serverTimestamps, this.Dv);
            return r.$d(n);
          }
        }
      }),
      Object.defineProperty(t.prototype, "id", {
        get: function () {
          return this.yv.path.B();
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "ref", {
        get: function () {
          return new ya(this.yv, this.Tv, this.Dv);
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "exists", {
        get: function () {
          return null !== this.Vv;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "metadata", {
        get: function () {
          return new ma(this.Nv, this.kv);
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mu("isEqual", "DocumentSnapshot", 1, e);
        return (
          this.Tv === e.Tv &&
          this.kv === e.kv &&
          this.yv.isEqual(e.yv) &&
          (null === this.Vv ? null === e.Vv : this.Vv.isEqual(e.Vv)) &&
          this.Dv === e.Dv
        );
      }),
      t
    );
  })(),
  wa = (function (e) {
    function n() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      t(n, e),
      (n.prototype.data = function (t) {
        var n = e.prototype.data.call(this, t);
        return (
          Wo(void 0 !== n, "Document in a QueryDocumentSnapshot should exist"),
          n
        );
      }),
      n
    );
  })(ga),
  ba = (function () {
    function t(t, e, n) {
      (this.Ov = t), (this.firestore = e), (this.Dv = n);
    }
    return (
      (t.prototype.where = function (e, n, r) {
        nu("Query.where", arguments, 3), vu("Query.where", 3, r);
        var i,
          o = [
            "<",
            "<=",
            "==",
            ">=",
            ">",
            "array-contains",
            "in",
            "array-contains-any",
          ];
        fu("Query.where", o, 2, n);
        var s = Qu("Query.where", e),
          u = Ki.H(n);
        if (s.$()) {
          if (u === Ki.ARRAY_CONTAINS || u === Ki.ARRAY_CONTAINS_ANY)
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Invalid Query. You can't perform '" +
                u.toString() +
                "' queries on FieldPath.documentId()."
            );
          if (u === Ki.IN) {
            this.Fv(r, u);
            for (var a = [], h = 0, c = r; h < c.length; h++) {
              var f = c[h];
              a.push(this.Uv(f));
            }
            i = { arrayValue: { values: a } };
          } else i = this.Uv(r);
        } else
          (u !== Ki.IN && u !== Ki.ARRAY_CONTAINS_ANY) || this.Fv(r, u),
            (i = this.firestore.vv.ff("Query.where", r, u === Ki.IN));
        var l = Wi.create(s, u, i);
        return this.jv(l), new t(this.Ov.kn(l), this.firestore, this.Dv);
      }),
      (t.prototype.orderBy = function (e, n) {
        var r;
        if (
          (iu("Query.orderBy", arguments, 1, 2),
          uu("Query.orderBy", "non-empty string", 2, n),
          void 0 === n || "asc" === n)
        )
          r = to.ASCENDING;
        else {
          if ("desc" !== n)
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Function Query.orderBy() has unknown direction '" +
                n +
                "', expected 'asc' or 'desc'."
            );
          r = to.DESCENDING;
        }
        if (null !== this.Ov.startAt)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy()."
          );
        if (null !== this.Ov.endAt)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy()."
          );
        var i = Qu("Query.orderBy", e),
          o = new no(i, r);
        return this.xv(o), new t(this.Ov.On(o), this.firestore, this.Dv);
      }),
      (t.prototype.limit = function (e) {
        return (
          nu("Query.limit", arguments, 1),
          su("Query.limit", "number", 1, e),
          gu("Query.limit", 1, e),
          new t(this.Ov.Fn(e), this.firestore, this.Dv)
        );
      }),
      (t.prototype.limitToLast = function (e) {
        return (
          nu("Query.limitToLast", arguments, 1),
          su("Query.limitToLast", "number", 1, e),
          gu("Query.limitToLast", 1, e),
          new t(this.Ov.Un(e), this.firestore, this.Dv)
        );
      }),
      (t.prototype.startAt = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        ru("Query.startAt", arguments, 1);
        var i = this.Lv("Query.startAt", e, n, !0);
        return new t(this.Ov.jn(i), this.firestore, this.Dv);
      }),
      (t.prototype.startAfter = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        ru("Query.startAfter", arguments, 1);
        var i = this.Lv("Query.startAfter", e, n, !1);
        return new t(this.Ov.jn(i), this.firestore, this.Dv);
      }),
      (t.prototype.endBefore = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        ru("Query.endBefore", arguments, 1);
        var i = this.Lv("Query.endBefore", e, n, !0);
        return new t(this.Ov.xn(i), this.firestore, this.Dv);
      }),
      (t.prototype.endAt = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        ru("Query.endAt", arguments, 1);
        var i = this.Lv("Query.endAt", e, n, !1);
        return new t(this.Ov.xn(i), this.firestore, this.Dv);
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mu("isEqual", "Query", 1, e);
        return this.firestore === e.firestore && this.Ov.isEqual(e.Ov);
      }),
      (t.prototype.withConverter = function (e) {
        return new t(this.Ov, this.firestore, e);
      }),
      (t.prototype.Lv = function (t, e, n, r) {
        if ((vu(t, 1, e), e instanceof ga)) {
          if (n.length > 0)
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Too many arguments provided to " + t + "()."
            );
          var i = e;
          if (!i.exists)
            throw new Or(
              kr.NOT_FOUND,
              "Can't use a DocumentSnapshot that doesn't exist for " + t + "()."
            );
          return this.Mv(i.Vv, r);
        }
        var o = [e].concat(n);
        return this.qv(t, o, r);
      }),
      (t.prototype.Mv = function (t, e) {
        for (var n = [], r = 0, i = this.Ov.orderBy; r < i.length; r++) {
          var o = i[r];
          if (o.field.$()) n.push(di(this.firestore.rv, t.key));
          else {
            var s = t.field(o.field);
            if (ni(s))
              throw new Or(
                kr.INVALID_ARGUMENT,
                'Invalid query. You are trying to start or end a query using a document for which the field "' +
                  o.field +
                  '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
              );
            if (null === s) {
              var u = o.field.J();
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Invalid query. You are trying to start or end a query using a document for which the field '" +
                  u +
                  "' (used as the orderBy) does not exist."
              );
            }
            n.push(s);
          }
        }
        return new eo(n, e);
      }),
      (t.prototype.qv = function (t, e, n) {
        var r = this.Ov.En;
        if (e.length > r.length)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Too many arguments provided to " +
              t +
              "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses"
          );
        for (var i = [], o = 0; o < e.length; o++) {
          var s = e[o];
          if (r[o].field.$()) {
            if ("string" != typeof s)
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Invalid query. Expected a string for document ID in " +
                  t +
                  "(), but got a " +
                  typeof s
              );
            if (!this.Ov.Yn() && -1 !== s.indexOf("/"))
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " +
                  t +
                  "() must be a plain document ID, but '" +
                  s +
                  "' contains a slash."
              );
            var u = this.Ov.path.child(qr.H(s));
            if (!Br.nt(u))
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " +
                  t +
                  "() must result in a valid document path, but '" +
                  u +
                  "' is not because it contains an odd number of segments."
              );
            var a = new Br(u);
            i.push(di(this.firestore.rv, a));
          } else {
            var h = this.firestore.vv.ff(t, s);
            i.push(h);
          }
        }
        return new eo(i, n);
      }),
      (t.prototype.onSnapshot = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        iu("Query.onSnapshot", arguments, 1, 4);
        var n,
          r = {},
          i = 0;
        return (
          "object" != typeof t[i] ||
            ha(t[i]) ||
            (yu("Query.onSnapshot", (r = t[i]), ["includeMetadataChanges"]),
            hu(
              "Query.onSnapshot",
              "boolean",
              "includeMetadataChanges",
              r.includeMetadataChanges
            ),
            i++),
          ha(t[i])
            ? (n = t[i])
            : (su("Query.onSnapshot", "function", i, t[i]),
              uu("Query.onSnapshot", "function", i + 1, t[i + 1]),
              uu("Query.onSnapshot", "function", i + 2, t[i + 2]),
              (n = { next: t[i], error: t[i + 1], complete: t[i + 2] })),
          this.Bv(this.Ov),
          this.Cv(r, n)
        );
      }),
      (t.prototype.Cv = function (t, e) {
        var n = this,
          r = function (t) {
            console.error("Uncaught Error in onSnapshot:", t);
          };
        e.error && (r = e.error.bind(e));
        var i = new aa({
            next: function (t) {
              e.next && e.next(new Ea(n.firestore, n.Ov, t, n.Dv));
            },
            error: r,
          }),
          o = this.firestore.ov(),
          s = o.listen(this.Ov, i, t);
        return function () {
          i.Yd(), o.nl(s);
        };
      }),
      (t.prototype.Bv = function (t) {
        if (t.Jn() && 0 === t.En.length)
          throw new Or(
            kr.UNIMPLEMENTED,
            "limitToLast() queries require specifying at least one orderBy() clause"
          );
      }),
      (t.prototype.get = function (t) {
        var e = this;
        return (
          iu("Query.get", arguments, 0, 1),
          Aa("Query.get", t),
          this.Bv(this.Ov),
          new Promise(function (n, r) {
            t && "cache" === t.source
              ? e.firestore
                  .ov()
                  .Jd(e.Ov)
                  .then(function (t) {
                    n(new Ea(e.firestore, e.Ov, t, e.Dv));
                  }, r)
              : e.Pv(n, r, t);
          })
        );
      }),
      (t.prototype.Pv = function (t, e, n) {
        var r = this.Cv(
          { includeMetadataChanges: !0, Fd: !0 },
          {
            next: function (i) {
              r(),
                i.metadata.fromCache && n && "server" === n.source
                  ? e(
                      new Or(
                        kr.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : t(i);
            },
            error: e,
          }
        );
      }),
      (t.prototype.Uv = function (t) {
        if ("string" == typeof t) {
          if ("" === t)
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."
            );
          if (!this.Ov.Yn() && -1 !== t.indexOf("/"))
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
                t +
                "' contains a '/' character."
            );
          var e = this.Ov.path.child(qr.H(t));
          if (!Br.nt(e))
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                e +
                "' is not because it has an odd number of segments (" +
                e.length +
                ")."
            );
          return di(this.firestore.rv, new Br(e));
        }
        if (t instanceof ya) {
          var n = t;
          return di(this.firestore.rv, n.yv);
        }
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " +
            du(t) +
            "."
        );
      }),
      (t.prototype.Fv = function (t, e) {
        if (!Array.isArray(t) || 0 === t.length)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid Query. A non-empty array is required for '" +
              e.toString() +
              "' filters."
          );
        if (t.length > 10)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid Query. '" +
              e.toString() +
              "' filters support a maximum of 10 elements in the value array."
          );
        if (t.indexOf(null) >= 0)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid Query. '" +
              e.toString() +
              "' filters cannot contain 'null' in the value array."
          );
        if (
          t.filter(function (t) {
            return Number.isNaN(t);
          }).length > 0
        )
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid Query. '" +
              e.toString() +
              "' filters cannot contain 'NaN' in the value array."
          );
      }),
      (t.prototype.jv = function (t) {
        if (t instanceof Wi) {
          var e = [Ki.ARRAY_CONTAINS, Ki.ARRAY_CONTAINS_ANY],
            n = [Ki.IN, Ki.ARRAY_CONTAINS_ANY],
            r = e.indexOf(t.op) >= 0,
            i = n.indexOf(t.op) >= 0;
          if (t.Nn()) {
            var o = this.Ov.Pn();
            if (null !== o && !o.isEqual(t.field))
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" +
                  o.toString() +
                  "' and '" +
                  t.field.toString() +
                  "'"
              );
            var s = this.Ov.Vn();
            null !== s && this.Qv(t.field, s);
          } else if (i || r) {
            var u = null;
            if (
              (i && (u = this.Ov.Hn(n)),
              null === u && r && (u = this.Ov.Hn(e)),
              null != u)
            )
              throw u === t.op
                ? new Or(
                    kr.INVALID_ARGUMENT,
                    "Invalid query. You cannot use more than one '" +
                      t.op.toString() +
                      "' filter."
                  )
                : new Or(
                    kr.INVALID_ARGUMENT,
                    "Invalid query. You cannot use '" +
                      t.op.toString() +
                      "' filters with '" +
                      u.toString() +
                      "' filters."
                  );
          }
        }
      }),
      (t.prototype.xv = function (t) {
        if (null === this.Ov.Vn()) {
          var e = this.Ov.Pn();
          null !== e && this.Qv(e, t.field);
        }
      }),
      (t.prototype.Qv = function (t, e) {
        if (!e.isEqual(t))
          throw new Or(
            kr.INVALID_ARGUMENT,
            "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" +
              t.toString() +
              "' and so you must also use '" +
              t.toString() +
              "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" +
              e.toString() +
              "' instead."
          );
      }),
      t
    );
  })(),
  Ea = (function () {
    function t(t, e, n, r) {
      (this.Tv = t),
        (this.Gv = e),
        (this.Wv = n),
        (this.Dv = r),
        (this.zv = null),
        (this.Kv = null),
        (this.metadata = new ma(n.hasPendingWrites, n.fromCache));
    }
    return (
      Object.defineProperty(t.prototype, "docs", {
        get: function () {
          var t = [];
          return (
            this.forEach(function (e) {
              return t.push(e);
            }),
            t
          );
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "empty", {
        get: function () {
          return this.Wv.docs.M();
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.Wv.docs.size;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.forEach = function (t, e) {
        var n = this;
        iu("QuerySnapshot.forEach", arguments, 1, 2),
          su("QuerySnapshot.forEach", "function", 1, t),
          this.Wv.docs.forEach(function (r) {
            t.call(e, n.Jv(r));
          });
      }),
      Object.defineProperty(t.prototype, "query", {
        get: function () {
          return new ba(this.Gv, this.Tv, this.Dv);
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.docChanges = function (t) {
        t &&
          (yu("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]),
          hu(
            "QuerySnapshot.docChanges",
            "boolean",
            "includeMetadataChanges",
            t.includeMetadataChanges
          ));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.Wv.di)
          throw new Or(
            kr.INVALID_ARGUMENT,
            "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
          );
        return (
          (this.zv && this.Kv === e) ||
            ((this.zv = (function (t, e, n, r) {
              if (n.ai.M()) {
                var i,
                  o = 0;
                return n.docChanges.map(function (e) {
                  var s = new wa(
                    t,
                    e.doc.key,
                    e.doc,
                    n.fromCache,
                    n.fi.has(e.doc.key),
                    r
                  );
                  return (
                    Wo(0 === e.type, "Invalid event type for first snapshot"),
                    Wo(
                      !i || n.query.Bn(i, e.doc) < 0,
                      "Got added events in wrong order"
                    ),
                    (i = e.doc),
                    { type: "added", doc: s, oldIndex: -1, newIndex: o++ }
                  );
                });
              }
              var s = n.ai;
              return n.docChanges
                .filter(function (t) {
                  return e || 3 !== t.type;
                })
                .map(function (e) {
                  var i = new wa(
                      t,
                      e.doc.key,
                      e.doc,
                      n.fromCache,
                      n.fi.has(e.doc.key),
                      r
                    ),
                    o = -1,
                    u = -1;
                  return (
                    0 !== e.type &&
                      (Wo(
                        (o = s.indexOf(e.doc.key)) >= 0,
                        "Index for document not found"
                      ),
                      (s = s.delete(e.doc.key))),
                    1 !== e.type && (u = (s = s.add(e.doc)).indexOf(e.doc.key)),
                    { type: Sa(e.type), doc: i, oldIndex: o, newIndex: u }
                  );
                });
            })(this.Tv, e, this.Wv, this.Dv)),
            (this.Kv = e)),
          this.zv
        );
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mu("isEqual", "QuerySnapshot", 1, e);
        return (
          this.Tv === e.Tv &&
          this.Gv.isEqual(e.Gv) &&
          this.Wv.isEqual(e.Wv) &&
          this.Dv === e.Dv
        );
      }),
      (t.prototype.Jv = function (t) {
        return new wa(
          this.Tv,
          t.key,
          t,
          this.metadata.fromCache,
          this.Wv.fi.has(t.key),
          this.Dv
        );
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ i(
  ["length", "forEach", "map"],
  "undefined" != typeof Symbol ? [Symbol.iterator] : []
).forEach(function (t) {
  try {
    Object.defineProperty(Ea.prototype.docChanges, t, {
      get: function () {
        return (function () {
          throw new Or(
            kr.INVALID_ARGUMENT,
            'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"'
          );
        })();
      },
    });
  } catch (t) {}
});
var Ia = (function (e) {
  function n(t, n, r) {
    var i = e.call(this, Yi.Cn(t), n, r) || this;
    if (((i.Hv = t), t.length % 2 != 1))
      throw new Or(
        kr.INVALID_ARGUMENT,
        "Invalid collection reference. Collection references must have an odd number of segments, but " +
          t.J() +
          " has " +
          t.length
      );
    return i;
  }
  return (
    t(n, e),
    Object.defineProperty(n.prototype, "id", {
      get: function () {
        return this.Ov.path.B();
      },
      enumerable: !0,
      configurable: !0,
    }),
    Object.defineProperty(n.prototype, "parent", {
      get: function () {
        var t = this.Ov.path.L();
        return t.M() ? null : new ya(new Br(t), this.firestore);
      },
      enumerable: !0,
      configurable: !0,
    }),
    Object.defineProperty(n.prototype, "path", {
      get: function () {
        return this.Ov.path.J();
      },
      enumerable: !0,
      configurable: !0,
    }),
    (n.prototype.doc = function (t) {
      if (
        (iu("CollectionReference.doc", arguments, 0, 1),
        0 === arguments.length && (t = Ho.pr()),
        su("CollectionReference.doc", "non-empty string", 1, t),
        "" === t)
      )
        throw new Or(
          kr.INVALID_ARGUMENT,
          "Document path must be a non-empty string"
        );
      var e = qr.H(t);
      return ya._v(this.Ov.path.child(e), this.firestore, this.Dv);
    }),
    (n.prototype.add = function (t) {
      nu("CollectionReference.add", arguments, 1);
      var e = this.Dv ? this.Dv.toFirestore(t) : t;
      su("CollectionReference.add", "object", 1, e);
      var n = this.doc();
      return n.set(t).then(function () {
        return n;
      });
    }),
    (n.prototype.withConverter = function (t) {
      return new n(this.Hv, this.firestore, t);
    }),
    n
  );
})(ba);
function Ta(t, e) {
  if (void 0 === e) return { merge: !1 };
  if (
    (yu(t, e, ["merge", "mergeFields"]),
    hu(t, "boolean", "merge", e.merge),
    (function (t, e, n, r, i) {
      void 0 !== r &&
        (function (t, e, n, r, i) {
          if (!(r instanceof Array))
            throw new Or(
              kr.INVALID_ARGUMENT,
              "Function " +
                t +
                "() requires its " +
                e +
                " option to be an array, but it was: " +
                du(r)
            );
          for (var o = 0; o < r.length; ++o)
            if (!i(r[o]))
              throw new Or(
                kr.INVALID_ARGUMENT,
                "Function " +
                  t +
                  "() requires all " +
                  e +
                  " elements to be " +
                  n +
                  ", but the value at index " +
                  o +
                  " was: " +
                  du(r[o])
              );
        })(t, e, n, r, i);
    })(
      t,
      "mergeFields",
      "a string or a FieldPath",
      e.mergeFields,
      function (t) {
        return "string" == typeof t || t instanceof Du;
      }
    ),
    void 0 !== e.mergeFields && void 0 !== e.merge)
  )
    throw new Or(
      kr.INVALID_ARGUMENT,
      "Invalid options passed to function " +
        t +
        '(): You cannot specify both "merge" and "mergeFields".'
    );
  return e;
}
function Na(t, e) {
  return void 0 === e
    ? {}
    : (yu(t, e, ["serverTimestamps"]),
      cu(t, 0, "serverTimestamps", e.serverTimestamps, [
        "estimate",
        "previous",
        "none",
      ]),
      e);
}
function Aa(t, e) {
  uu(t, "object", 1, e),
    e &&
      (yu(t, e, ["source"]),
      cu(t, 0, "source", e.source, ["default", "server", "cache"]));
}
function Da(t, e, n) {
  if (e instanceof ya) {
    if (e.firestore !== n)
      throw new Or(
        kr.INVALID_ARGUMENT,
        "Provided document reference is from a different Firestore instance."
      );
    return e;
  }
  throw mu(t, "DocumentReference", 1, e);
}
function Sa(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return Ko("Unknown change type: " + t);
  }
}
function ka(t, e, n) {
  var r;
  return (
    t ? ((r = t.toFirestore(e)), (n = "toFirestore() in " + n)) : (r = e),
    [r, n]
  );
}
function Oa(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var Ca = Eu(pa, "Use firebase.firestore() instead."),
  Ra = Eu(da, "Use firebase.firestore().runTransaction() instead."),
  xa = Eu(va, "Use firebase.firestore().batch() instead."),
  Pa = Eu(ya, "Use firebase.firestore().doc() instead."),
  Ma = Eu(ga),
  La = Eu(wa),
  _a = Eu(ba),
  Va = Eu(Ea),
  Ua = Eu(Ia, "Use firebase.firestore().collection() instead."),
  qa = (function () {
    function t(e) {
      (this.db = e),
        12.2 === t.Yv(o()) &&
          Qo(
            "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
          );
    }
    return (
      (t.Xv = function (e, n, r) {
        return (
          Wo(t.th(), "IndexedDB not supported in current environment."),
          zo("SimpleDb", "Opening database:", e),
          new hs(function (i, o) {
            var s = window.indexedDB.open(e, n);
            (s.onsuccess = function (e) {
              var n = e.target.result;
              i(new t(n));
            }),
              (s.onblocked = function () {
                o(
                  new Or(
                    kr.FAILED_PRECONDITION,
                    "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."
                  )
                );
              }),
              (s.onerror = function (t) {
                var e = t.target.error;
                "VersionError" === e.name
                  ? o(
                      new Or(
                        kr.FAILED_PRECONDITION,
                        "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                      )
                    )
                  : o(e);
              }),
              (s.onupgradeneeded = function (t) {
                zo(
                  "SimpleDb",
                  'Database "' + e + '" requires upgrade from version:',
                  t.oldVersion
                );
                var n = t.target.result;
                r.createOrUpgrade(n, s.transaction, t.oldVersion, ah).next(
                  function () {
                    zo(
                      "SimpleDb",
                      "Database upgrade to version " + ah + " complete"
                    );
                  }
                );
              });
          }).wu()
        );
      }),
      (t.delete = function (t) {
        return (
          zo("SimpleDb", "Removing database:", t),
          Ga(window.indexedDB.deleteDatabase(t)).wu()
        );
      }),
      (t.th = function () {
        if ("undefined" == typeof window || null == window.indexedDB) return !1;
        if (t.$v()) return !0;
        if (void 0 === window.navigator) return !1;
        var e = o(),
          n = t.Yv(e),
          r = 0 < n && n < 10,
          i = t.Zv(e),
          s = 0 < i && i < 4.5;
        return !(
          e.indexOf("MSIE ") > 0 ||
          e.indexOf("Trident/") > 0 ||
          e.indexOf("Edge/") > 0 ||
          r ||
          s
        );
      }),
      (t.$v = function () {
        var t;
        return (
          "undefined" != typeof process &&
          "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.tw)
        );
      }),
      (t.nw = function (t, e) {
        return t.store(e);
      }),
      (t.Yv = function (t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
          n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
      }),
      (t.Zv = function (t) {
        var e = t.match(/Android ([\d.]+)/i),
          n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
      }),
      (t.prototype.iw = function (t) {
        this.db.onversionchange = function (e) {
          return t(e);
        };
      }),
      (t.prototype.runTransaction = function (t, r, i) {
        return e(this, void 0, void 0, function () {
          var e, o, s, u, a;
          return n(this, function (h) {
            switch (h.label) {
              case 0:
                (e = "readonly" === t),
                  (o = 0),
                  (s = function () {
                    var t, s, a, h;
                    return n(this, function (n) {
                      switch (n.label) {
                        case 0:
                          ++o,
                            (t = ja.open(
                              u.db,
                              e ? "readonly" : "readwrite",
                              r
                            )),
                            (n.label = 1);
                        case 1:
                          return (
                            n.trys.push([1, 3, , 4]),
                            (s = i(t)
                              .catch(function (e) {
                                return t.abort(e), hs.reject(e);
                              })
                              .wu()).catch(function () {}),
                            [4, t.ew]
                          );
                        case 2:
                          return n.sent(), [2, { value: s }];
                        case 3:
                          return (
                            (a = n.sent()),
                            (h = "FirebaseError" !== a.name && o < 3),
                            zo(
                              "SimpleDb",
                              "Transaction failed with error: %s. Retrying: %s.",
                              a.message,
                              h
                            ),
                            h ? [3, 4] : [2, { value: Promise.reject(a) }]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  }),
                  (u = this),
                  (h.label = 1);
              case 1:
                return [5, s()];
              case 2:
                return "object" == typeof (a = h.sent())
                  ? [2, a.value]
                  : [3, 1];
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.close = function () {
        this.db.close();
      }),
      t
    );
  })(),
  Fa = (function () {
    function t(t) {
      (this.rw = t), (this.uw = !1), (this.sw = null);
    }
    return (
      Object.defineProperty(t.prototype, "fu", {
        get: function () {
          return this.uw;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "ow", {
        get: function () {
          return this.sw;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "cursor", {
        set: function (t) {
          this.rw = t;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.done = function () {
        this.uw = !0;
      }),
      (t.prototype.hw = function (t) {
        this.sw = t;
      }),
      (t.prototype.delete = function () {
        return Ga(this.rw.delete());
      }),
      t
    );
  })(),
  ja = (function () {
    function t(t) {
      var e = this;
      (this.transaction = t),
        (this.aborted = !1),
        (this.cw = new ss()),
        (this.transaction.oncomplete = function () {
          e.cw.resolve();
        }),
        (this.transaction.onabort = function () {
          t.error ? e.cw.reject(t.error) : e.cw.resolve();
        }),
        (this.transaction.onerror = function (t) {
          var n = Qa(t.target.error);
          e.cw.reject(n);
        });
    }
    return (
      (t.open = function (e, n, r) {
        return new t(e.transaction(r, n));
      }),
      Object.defineProperty(t.prototype, "ew", {
        get: function () {
          return this.cw.promise;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.abort = function (t) {
        t && this.cw.reject(t),
          this.aborted ||
            (zo(
              "SimpleDb",
              "Aborting transaction:",
              t ? t.message : "Client-initiated abort"
            ),
            (this.aborted = !0),
            this.transaction.abort());
      }),
      (t.prototype.store = function (t) {
        var e = this.transaction.objectStore(t);
        return Wo(!!e, "Object store not part of transaction: " + t), new Ba(e);
      }),
      t
    );
  })(),
  Ba = (function () {
    function t(t) {
      this.store = t;
    }
    return (
      (t.prototype.put = function (t, e) {
        var n;
        return (
          void 0 !== e
            ? (zo("SimpleDb", "PUT", this.store.name, t, e),
              (n = this.store.put(e, t)))
            : (zo("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
              (n = this.store.put(t))),
          Ga(n)
        );
      }),
      (t.prototype.add = function (t) {
        return (
          zo("SimpleDb", "ADD", this.store.name, t, t), Ga(this.store.add(t))
        );
      }),
      (t.prototype.get = function (t) {
        var e = this;
        return Ga(this.store.get(t)).next(function (n) {
          return (
            void 0 === n && (n = null),
            zo("SimpleDb", "GET", e.store.name, t, n),
            n
          );
        });
      }),
      (t.prototype.delete = function (t) {
        return (
          zo("SimpleDb", "DELETE", this.store.name, t), Ga(this.store.delete(t))
        );
      }),
      (t.prototype.count = function () {
        return zo("SimpleDb", "COUNT", this.store.name), Ga(this.store.count());
      }),
      (t.prototype.aw = function (t, e) {
        var n = this.cursor(this.options(t, e)),
          r = [];
        return this.fw(n, function (t, e) {
          r.push(e);
        }).next(function () {
          return r;
        });
      }),
      (t.prototype.lw = function (t, e) {
        zo("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.dw = !1;
        var r = this.cursor(n);
        return this.fw(r, function (t, e, n) {
          return n.delete();
        });
      }),
      (t.prototype.vw = function (t, e) {
        var n;
        e ? (n = t) : ((n = {}), (e = t));
        var r = this.cursor(n);
        return this.fw(r, e);
      }),
      (t.prototype.ww = function (t) {
        var e = this.cursor({});
        return new hs(function (n, r) {
          (e.onerror = function (t) {
            var e = Qa(t.target.error);
            r(e);
          }),
            (e.onsuccess = function (e) {
              var r = e.target.result;
              r
                ? t(r.primaryKey, r.value).next(function (t) {
                    t ? r.continue() : n();
                  })
                : n();
            });
        });
      }),
      (t.prototype.fw = function (t, e) {
        var n = [];
        return new hs(function (r, i) {
          (t.onerror = function (t) {
            i(t.target.error);
          }),
            (t.onsuccess = function (t) {
              var i = t.target.result;
              if (i) {
                var o = new Fa(i),
                  s = e(i.primaryKey, i.value, o);
                if (s instanceof hs) {
                  var u = s.catch(function (t) {
                    return o.done(), hs.reject(t);
                  });
                  n.push(u);
                }
                o.fu ? r() : null === o.ow ? i.continue() : i.continue(o.ow);
              } else r();
            });
        }).next(function () {
          return hs.pu(n);
        });
      }),
      (t.prototype.options = function (t, e) {
        var n = void 0;
        return (
          void 0 !== t &&
            ("string" == typeof t
              ? (n = t)
              : (Wo(
                  void 0 === e,
                  "3rd argument must not be defined if 2nd is a range."
                ),
                (e = t))),
          { index: n, range: e }
        );
      }),
      (t.prototype.cursor = function (t) {
        var e = "next";
        if ((t.reverse && (e = "prev"), t.index)) {
          var n = this.store.index(t.index);
          return t.dw ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
      }),
      t
    );
  })();
function Ga(t) {
  return new hs(function (e, n) {
    (t.onsuccess = function (t) {
      var n = t.target.result;
      e(n);
    }),
      (t.onerror = function (t) {
        var e = Qa(t.target.error);
        n(e);
      });
  });
}
var za = !1;
function Qa(t) {
  var e = qa.Yv(o());
  if (e >= 12.2 && e < 13) {
    var n = "An internal error was encountered in the Indexed Database server";
    if (t.message.indexOf(n) >= 0) {
      var r = new Or(
        "internal",
        "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
          n +
          "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
      );
      return (
        za ||
          ((za = !0),
          setTimeout(function () {
            throw r;
          }, 0)),
        r
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ya = (function () {
  function t(t, e, n, r) {
    (this.userId = t),
      (this.serializer = e),
      (this.Bh = n),
      (this.Cs = r),
      (this.mw = {});
  }
  return (
    (t.pw = function (e, n, r, i) {
      return (
        Wo("" !== e.uid, "UserID must not be an empty string."),
        new t(e.t() ? e.uid : "", n, r, i)
      );
    }),
    (t.prototype.oc = function (t) {
      var e = !0,
        n = IDBKeyRange.bound(
          [this.userId, Number.NEGATIVE_INFINITY],
          [this.userId, Number.POSITIVE_INFINITY]
        );
      return Ha(t)
        .vw({ index: ph.userMutationsIndex, range: n }, function (t, n, r) {
          (e = !1), r.done();
        })
        .next(function () {
          return e;
        });
    }),
    (t.prototype.Ys = function (t, e, n) {
      return this.bw(t).next(function (e) {
        return (e.lastStreamToken = n.toBase64()), Xa(t).put(e);
      });
    }),
    (t.prototype.uo = function (t) {
      return this.bw(t).next(function (t) {
        return $r.fromBase64String(t.lastStreamToken);
      });
    }),
    (t.prototype.so = function (t, e) {
      return this.bw(t).next(function (n) {
        return (n.lastStreamToken = e.toBase64()), Xa(t).put(n);
      });
    }),
    (t.prototype.Ks = function (t, e, n, r) {
      var i = this,
        o = Ja(t),
        s = Ha(t);
      return s.add({}).next(function (u) {
        Wo("number" == typeof u, "Auto-generated key is not a number");
        for (
          var a = new es(u, e, n, r),
            h = i.serializer.gw(i.userId, a),
            c = [],
            f = new Kr(function (t, e) {
              return Jo(t.J(), e.J());
            }),
            l = 0,
            p = r;
          l < p.length;
          l++
        ) {
          var d = p[l],
            v = dh.key(i.userId, d.key.path, u);
          (f = f.add(d.key.path.L())),
            c.push(s.put(h)),
            c.push(o.put(v, dh.PLACEHOLDER));
        }
        return (
          f.forEach(function (e) {
            c.push(i.Bh.rc(t, e));
          }),
          t.Lh(function () {
            i.mw[u] = a.keys();
          }),
          hs.pu(c).next(function () {
            return a;
          })
        );
      });
    }),
    (t.prototype.io = function (t, e) {
      var n = this;
      return Ha(t)
        .get(e)
        .next(function (t) {
          return t
            ? (Wo(
                t.userId === n.userId,
                "Unexpected user '" + t.userId + "' for mutation batch " + e
              ),
              n.serializer.yw(t))
            : null;
        });
    }),
    (t.prototype.Hs = function (t, e) {
      var n = this;
      return this.mw[e]
        ? hs.resolve(this.mw[e])
        : this.io(t, e).next(function (t) {
            if (t) {
              var r = t.keys();
              return (n.mw[e] = r), r;
            }
            return null;
          });
    }),
    (t.prototype._o = function (t, e) {
      var n = this,
        r = e + 1,
        i = IDBKeyRange.lowerBound([this.userId, r]),
        o = null;
      return Ha(t)
        .vw({ index: ph.userMutationsIndex, range: i }, function (t, e, i) {
          e.userId === n.userId &&
            (Wo(e.batchId >= r, "Should have found mutation after " + r),
            (o = n.serializer.yw(e))),
            i.done();
        })
        .next(function () {
          return o;
        });
    }),
    (t.prototype.ro = function (t) {
      var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
        n = -1;
      return Ha(t)
        .vw(
          { index: ph.userMutationsIndex, range: e, reverse: !0 },
          function (t, e, r) {
            (n = e.batchId), r.done();
          }
        )
        .next(function () {
          return n;
        });
    }),
    (t.prototype.qs = function (t) {
      var e = this,
        n = IDBKeyRange.bound(
          [this.userId, -1],
          [this.userId, Number.POSITIVE_INFINITY]
        );
      return Ha(t)
        .aw(ph.userMutationsIndex, n)
        .next(function (t) {
          return t.map(function (t) {
            return e.serializer.yw(t);
          });
        });
    }),
    (t.prototype.Qh = function (t, e) {
      var n = this,
        r = dh.prefixForPath(this.userId, e.path),
        i = IDBKeyRange.lowerBound(r),
        o = [];
      return Ja(t)
        .vw({ range: i }, function (r, i, s) {
          var u = r[0],
            a = r[1],
            h = r[2],
            c = Us(a);
          if (u === n.userId && e.path.isEqual(c))
            return Ha(t)
              .get(h)
              .next(function (t) {
                if (!t)
                  throw Ko(
                    "Dangling document-mutation reference found: " +
                      r +
                      " which points to " +
                      h
                  );
                Wo(
                  t.userId === n.userId,
                  "Unexpected user '" + t.userId + "' for mutation batch " + h
                ),
                  o.push(n.serializer.yw(t));
              });
          s.done();
        })
        .next(function () {
          return o;
        });
    }),
    (t.prototype.zh = function (t, e) {
      var n = this,
        r = new Kr(Jo),
        i = [];
      return (
        e.forEach(function (e) {
          var o = dh.prefixForPath(n.userId, e.path),
            s = IDBKeyRange.lowerBound(o),
            u = Ja(t).vw({ range: s }, function (t, i, o) {
              var s = t[0],
                u = t[1],
                a = t[2],
                h = Us(u);
              s === n.userId && e.path.isEqual(h) ? (r = r.add(a)) : o.done();
            });
          i.push(u);
        }),
        hs.pu(i).next(function () {
          return n._w(t, r);
        })
      );
    }),
    (t.prototype.Xh = function (t, e) {
      var n = this;
      Wo(!e.Tn(), "Document queries shouldn't go down this path"),
        Wo(
          !e.Yn(),
          "CollectionGroup queries should be handled in LocalDocumentsView"
        );
      var r = e.path,
        i = r.length + 1,
        o = dh.prefixForPath(this.userId, r),
        s = IDBKeyRange.lowerBound(o),
        u = new Kr(Jo);
      return Ja(t)
        .vw({ range: s }, function (t, e, o) {
          var s = t[0],
            a = t[1],
            h = t[2],
            c = Us(a);
          s === n.userId && r.G(c)
            ? c.length === i && (u = u.add(h))
            : o.done();
        })
        .next(function () {
          return n._w(t, u);
        });
    }),
    (t.prototype._w = function (t, e) {
      var n = this,
        r = [],
        i = [];
      return (
        e.forEach(function (e) {
          i.push(
            Ha(t)
              .get(e)
              .next(function (t) {
                if (null === t)
                  throw Ko(
                    "Dangling document-mutation reference found, which points to " +
                      e
                  );
                Wo(
                  t.userId === n.userId,
                  "Unexpected user '" + t.userId + "' for mutation batch " + e
                ),
                  r.push(n.serializer.yw(t));
              })
          );
        }),
        hs.pu(i).next(function () {
          return r;
        })
      );
    }),
    (t.prototype.eo = function (t, e) {
      var n = this;
      return Wa(t.Iw, this.userId, e).next(function (r) {
        return (
          t.Lh(function () {
            n.Uo(e.batchId);
          }),
          hs.forEach(r, function (e) {
            return n.Cs.lc(t, e);
          })
        );
      });
    }),
    (t.prototype.Uo = function (t) {
      delete this.mw[t];
    }),
    (t.prototype.to = function (t) {
      var e = this;
      return this.oc(t).next(function (n) {
        if (!n) return hs.resolve();
        var r = IDBKeyRange.lowerBound(dh.prefixForUser(e.userId)),
          i = [];
        return Ja(t)
          .vw({ range: r }, function (t, n, r) {
            if (t[0] === e.userId) {
              var o = Us(t[1]);
              i.push(o);
            } else r.done();
          })
          .next(function () {
            Wo(
              0 === i.length,
              "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " +
                i.map(function (t) {
                  return t.J();
                })
            );
          });
      });
    }),
    (t.prototype.fs = function (t, e) {
      return Ka(t, this.userId, e);
    }),
    (t.prototype.bw = function (t) {
      var e = this;
      return Xa(t)
        .get(this.userId)
        .next(function (t) {
          return t || new lh(e.userId, -1, "");
        });
    }),
    t
  );
})();
function Ka(t, e, n) {
  var r = dh.prefixForPath(e, n.path),
    i = r[1],
    o = IDBKeyRange.lowerBound(r),
    s = !1;
  return Ja(t)
    .vw({ range: o, dw: !0 }, function (t, n, r) {
      var o = t[0],
        u = t[1];
      t[2], o === e && u === i && (s = !0), r.done();
    })
    .next(function () {
      return s;
    });
}
function Wa(t, e, n) {
  var r = t.store(ph.store),
    i = t.store(dh.store),
    o = [],
    s = IDBKeyRange.only(n.batchId),
    u = 0,
    a = r.vw({ range: s }, function (t, e, n) {
      return u++, n.delete();
    });
  o.push(
    a.next(function () {
      Wo(
        1 === u,
        "Dangling document-mutation reference found: Missing batch " + n.batchId
      );
    })
  );
  for (var h = [], c = 0, f = n.mutations; c < f.length; c++) {
    var l = f[c],
      p = dh.key(e, l.key.path, n.batchId);
    o.push(i.delete(p)), h.push(l.key);
  }
  return hs.pu(o).next(function () {
    return h;
  });
}
function Ha(t) {
  return Mh.nw(t, ph.store);
}
function Ja(t) {
  return Mh.nw(t, dh.store);
}
function Xa(t) {
  return Mh.nw(t, lh.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $a = (function () {
  function t(t, e) {
    (this.Cs = t), (this.serializer = e), (this.Sc = Gs.Ic());
  }
  return (
    (t.prototype.Ro = function (t) {
      var e = this;
      return this.Tw(t).next(function (n) {
        return (
          (n.highestTargetId = e.Sc.after(n.highestTargetId)),
          e.Ew(t, n).next(function () {
            return n.highestTargetId;
          })
        );
      });
    }),
    (t.prototype.oo = function (t) {
      return this.Tw(t).next(function (t) {
        return Vr.P(
          new _r(
            t.lastRemoteSnapshotVersion.seconds,
            t.lastRemoteSnapshotVersion.nanoseconds
          )
        );
      });
    }),
    (t.prototype.Ac = function (t) {
      return eh(t.Iw);
    }),
    (t.prototype.wo = function (t, e, n) {
      var r = this;
      return this.Tw(t).next(function (i) {
        return (
          (i.highestListenSequenceNumber = e),
          n && (i.lastRemoteSnapshotVersion = n.O()),
          e > i.highestListenSequenceNumber &&
            (i.highestListenSequenceNumber = e),
          r.Ew(t, i)
        );
      });
    }),
    (t.prototype.So = function (t, e) {
      var n = this;
      return this.Cc(t, e).next(function () {
        return n.Tw(t).next(function (r) {
          return (r.targetCount += 1), n.Dw(e, r), n.Ew(t, r);
        });
      });
    }),
    (t.prototype.do = function (t, e) {
      return this.Cc(t, e);
    }),
    (t.prototype.Pc = function (t, e) {
      var n = this;
      return this.Vc(t, e.targetId)
        .next(function () {
          return Za(t).delete(e.targetId);
        })
        .next(function () {
          return n.Tw(t);
        })
        .next(function (e) {
          return (
            Wo(e.targetCount > 0, "Removing from an empty target cache"),
            (e.targetCount -= 1),
            n.Ew(t, e)
          );
        });
    }),
    (t.prototype.Ju = function (t, e, n) {
      var r = this,
        i = 0,
        o = [];
      return Za(t)
        .vw(function (s, u) {
          var a = r.serializer.Rw(u);
          a.sequenceNumber <= e &&
            null === n.get(a.targetId) &&
            (i++, o.push(r.Pc(t, a)));
        })
        .next(function () {
          return hs.pu(o);
        })
        .next(function () {
          return i;
        });
    }),
    (t.prototype.$i = function (t, e) {
      var n = this;
      return Za(t).vw(function (t, r) {
        var i = n.serializer.Rw(r);
        e(i);
      });
    }),
    (t.prototype.Tw = function (t) {
      return th(t.Iw);
    }),
    (t.prototype.Ew = function (t, e) {
      return ((n = t), Mh.nw(n, Eh.store)).put(Eh.key, e);
      var n;
    }),
    (t.prototype.Cc = function (t, e) {
      return Za(t).put(this.serializer.Sw(e));
    }),
    (t.prototype.Dw = function (t, e) {
      var n = !1;
      return (
        t.targetId > e.highestTargetId &&
          ((e.highestTargetId = t.targetId), (n = !0)),
        t.sequenceNumber > e.highestListenSequenceNumber &&
          ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
        n
      );
    }),
    (t.prototype.kc = function (t) {
      return this.Tw(t).next(function (t) {
        return t.targetCount;
      });
    }),
    (t.prototype.Do = function (t, e) {
      var n = this,
        r = e.canonicalId(),
        i = IDBKeyRange.bound(
          [r, Number.NEGATIVE_INFINITY],
          [r, Number.POSITIVE_INFINITY]
        ),
        o = null;
      return Za(t)
        .vw({ range: i, index: wh.queryTargetsIndexName }, function (t, r, i) {
          var s = n.serializer.Rw(r);
          e.isEqual(s.target) && ((o = s), i.done());
        })
        .next(function () {
          return o;
        });
    }),
    (t.prototype.ao = function (t, e, n) {
      var r = this,
        i = [],
        o = nh(t);
      return (
        e.forEach(function (e) {
          var s = Ls(e.path);
          i.push(o.put(new bh(n, s))), i.push(r.Cs.es(t, e));
        }),
        hs.pu(i)
      );
    }),
    (t.prototype.co = function (t, e, n) {
      var r = this,
        i = nh(t);
      return hs.forEach(e, function (e) {
        var o = Ls(e.path);
        return hs.pu([i.delete([n, o]), r.Cs.us(t, e)]);
      });
    }),
    (t.prototype.Vc = function (t, e) {
      var n = nh(t),
        r = IDBKeyRange.bound([e], [e + 1], !1, !0);
      return n.delete(r);
    }),
    (t.prototype.Po = function (t, e) {
      var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
        r = nh(t),
        i = go();
      return r
        .vw({ range: n, dw: !0 }, function (t, e, n) {
          var r = Us(t[1]),
            o = new Br(r);
          i = i.add(o);
        })
        .next(function () {
          return i;
        });
    }),
    (t.prototype.fs = function (t, e) {
      var n = Ls(e.path),
        r = IDBKeyRange.bound([n], [$o(n)], !1, !0),
        i = 0;
      return nh(t)
        .vw(
          { index: bh.documentTargetsIndex, dw: !0, range: r },
          function (t, e, n) {
            var r = t[0];
            t[1], 0 !== r && (i++, n.done());
          }
        )
        .next(function () {
          return i > 0;
        });
    }),
    (t.prototype.ce = function (t, e) {
      var n = this;
      return Za(t)
        .get(e)
        .next(function (t) {
          return t ? n.serializer.Rw(t) : null;
        });
    }),
    t
  );
})();
function Za(t) {
  return Mh.nw(t, wh.store);
}
function th(t) {
  return qa
    .nw(t, Eh.store)
    .get(Eh.key)
    .next(function (t) {
      return Wo(null !== t, "Missing metadata row."), t;
    });
}
function eh(t) {
  return th(t).next(function (t) {
    return t.highestListenSequenceNumber;
  });
}
function nh(t) {
  return Mh.nw(t, bh.store);
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var rh = (function () {
  function e(t, e) {
    (this.serializer = t), (this.Bh = e);
  }
  return (
    (e.prototype.ms = function (t, e, n) {
      return oh(t).put(sh(e), n);
    }),
    (e.prototype.bs = function (t, e) {
      var n = oh(t),
        r = sh(e);
      return n.delete(r);
    }),
    (e.prototype.updateMetadata = function (t, e) {
      var n = this;
      return this.getMetadata(t).next(function (r) {
        return (r.byteSize += e), n.Aw(t, r);
      });
    }),
    (e.prototype.gs = function (t, e) {
      var n = this;
      return oh(t)
        .get(sh(e))
        .next(function (t) {
          return n.Cw(t);
        });
    }),
    (e.prototype.Pw = function (t, e) {
      var n = this;
      return oh(t)
        .get(sh(e))
        .next(function (t) {
          var e = n.Cw(t);
          return e ? { vc: e, size: uh(t) } : null;
        });
    }),
    (e.prototype.getEntries = function (t, e) {
      var n = this,
        r = fo();
      return this.Vw(t, e, function (t, e) {
        var i = n.Cw(e);
        r = r.ut(t, i);
      }).next(function () {
        return r;
      });
    }),
    (e.prototype.kw = function (t, e) {
      var n = this,
        r = fo(),
        i = new Gr(Br.F);
      return this.Vw(t, e, function (t, e) {
        var o = n.Cw(e);
        o
          ? ((r = r.ut(t, o)), (i = i.ut(t, uh(e))))
          : ((r = r.ut(t, null)), (i = i.ut(t, 0)));
      }).next(function () {
        return { Nw: r, Ow: i };
      });
    }),
    (e.prototype.Vw = function (t, e, n) {
      if (e.M()) return hs.resolve();
      var r = IDBKeyRange.bound(e.first().path.K(), e.last().path.K()),
        i = e.ft(),
        o = i.bt();
      return oh(t)
        .vw({ range: r }, function (t, e, r) {
          for (var s = Br.rt(t); o && Br.F(o, s) < 0; )
            n(o, null), (o = i.bt());
          o && o.isEqual(s) && (n(o, e), (o = i.gt() ? i.bt() : null)),
            o ? r.hw(o.path.K()) : r.done();
        })
        .next(function () {
          for (; o; ) n(o, null), (o = i.gt() ? i.bt() : null);
        });
    }),
    (e.prototype.Vo = function (t, e, n) {
      var r = this;
      Wo(
        !e.Yn(),
        "CollectionGroup queries should be handled in LocalDocumentsView"
      );
      var i = po(),
        o = e.path.length + 1,
        s = {};
      if (n.isEqual(Vr.MIN)) {
        var u = e.path.K();
        s.range = IDBKeyRange.lowerBound(u);
      } else {
        var a = e.path.K(),
          h = this.serializer.Fw(n);
        (s.range = IDBKeyRange.lowerBound([a, h], !0)),
          (s.index = mh.collectionReadTimeIndex);
      }
      return oh(t)
        .vw(s, function (t, n, s) {
          if (t.length === o) {
            var u = r.serializer.Uw(n);
            e.path.G(u.key.path)
              ? u instanceof Bi && e.matches(u) && (i = i.ut(u.key, u))
              : s.done();
          }
        })
        .next(function () {
          return i;
        });
    }),
    (e.prototype.Lo = function (t, e) {
      var n = this,
        r = co(),
        i = this.serializer.Fw(e),
        o = oh(t),
        s = IDBKeyRange.lowerBound(i, !0);
      return o
        .vw({ index: mh.readTimeIndex, range: s }, function (t, e) {
          var o = n.serializer.Uw(e);
          (r = r.ut(o.key, o)), (i = e.readTime);
        })
        .next(function () {
          return { Mo: r, readTime: n.serializer.jw(i) };
        });
    }),
    (e.prototype.qo = function (t) {
      var e = this,
        n = oh(t),
        r = Vr.MIN;
      return n
        .vw({ index: mh.readTimeIndex, reverse: !0 }, function (t, n, i) {
          n.readTime && (r = e.serializer.jw(n.readTime)), i.done();
        })
        .next(function () {
          return r;
        });
    }),
    (e.prototype.Xs = function (t) {
      return new e.mc(this, !!t && t.$s);
    }),
    (e.prototype.pc = function (t) {
      return this.getMetadata(t).next(function (t) {
        return t.byteSize;
      });
    }),
    (e.prototype.getMetadata = function (t) {
      return ih(t)
        .get(gh.key)
        .next(function (t) {
          return Wo(!!t, "Missing document cache metadata"), t;
        });
    }),
    (e.prototype.Aw = function (t, e) {
      return ih(t).put(gh.key, e);
    }),
    (e.prototype.Cw = function (t) {
      if (t) {
        var e = this.serializer.Uw(t);
        return e instanceof Gi && e.version.isEqual(Vr.V()) ? null : e;
      }
      return null;
    }),
    (e.mc = (function (e) {
      function n(t, n) {
        var r = e.call(this) || this;
        return (
          (r.bc = t),
          (r.$s = n),
          (r.xw = new rs(function (t) {
            return t.toString();
          })),
          r
        );
      }
      return (
        t(n, e),
        (n.prototype.Is = function (t) {
          var e = this,
            n = [],
            r = 0,
            i = new Kr(function (t, e) {
              return Jo(t.J(), e.J());
            });
          return (
            this.ds.forEach(function (o, s) {
              var u = e.xw.get(o);
              if (
                (Wo(
                  void 0 !== u,
                  "Cannot modify a document that wasn't read (for " + o + ")"
                ),
                s)
              ) {
                Wo(
                  !e.readTime.isEqual(Vr.MIN),
                  "Cannot add a document with a read time of zero"
                );
                var a = e.bc.serializer.Lw(s, e.readTime);
                i = i.add(o.path.L());
                var h = uh(a);
                (r += h - u), n.push(e.bc.ms(t, o, a));
              } else if (((r -= u), e.$s)) {
                var c = e.bc.serializer.Lw(new Gi(o, Vr.V()), e.readTime);
                n.push(e.bc.ms(t, o, c));
              } else n.push(e.bc.bs(t, o));
            }),
            i.forEach(function (r) {
              n.push(e.bc.Bh.rc(t, r));
            }),
            n.push(this.bc.updateMetadata(t, r)),
            hs.pu(n)
          );
        }),
        (n.prototype.ys = function (t, e) {
          var n = this;
          return this.bc.Pw(t, e).next(function (t) {
            return null === t
              ? (n.xw.set(e, 0), null)
              : (n.xw.set(e, t.size), t.vc);
          });
        }),
        (n.prototype._s = function (t, e) {
          var n = this;
          return this.bc.kw(t, e).next(function (t) {
            var e = t.Nw;
            return (
              t.Ow.forEach(function (t, e) {
                n.xw.set(t, e);
              }),
              e
            );
          });
        }),
        n
      );
    })(gs)),
    e
  );
})();
function ih(t) {
  return Mh.nw(t, gh.store);
}
function oh(t) {
  return Mh.nw(t, mh.store);
}
function sh(t) {
  return t.path.K();
}
function uh(t) {
  var e;
  if (t.document) e = t.document;
  else if (t.unknownDocument) e = t.unknownDocument;
  else {
    if (!t.noDocument) throw Ko("Unknown remote document type");
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ah = 10,
  hh = (function () {
    function t(t) {
      this.serializer = t;
    }
    return (
      (t.prototype.createOrUpgrade = function (t, e, n, r) {
        var i = this;
        Wo(
          n < r && n >= 0 && r <= ah,
          "Unexpected schema upgrade from v" + n + " to v" + r + "."
        );
        var o = new ja(e);
        n < 1 &&
          r >= 1 &&
          ((function (t) {
            t.createObjectStore(fh.store);
          })(t),
          (function (t) {
            t.createObjectStore(lh.store, { keyPath: lh.keyPath }),
              t
                .createObjectStore(ph.store, {
                  keyPath: ph.keyPath,
                  autoIncrement: !0,
                })
                .createIndex(ph.userMutationsIndex, ph.userMutationsKeyPath, {
                  unique: !0,
                }),
              t.createObjectStore(dh.store);
          })(t),
          Th(t),
          (function (t) {
            t.createObjectStore(mh.store);
          })(t));
        var s = hs.resolve();
        return (
          n < 3 &&
            r >= 3 &&
            (0 !== n &&
              ((function (t) {
                t.deleteObjectStore(bh.store),
                  t.deleteObjectStore(wh.store),
                  t.deleteObjectStore(Eh.store);
              })(t),
              Th(t)),
            (s = s.next(function () {
              return (function (t) {
                var e = t.store(Eh.store),
                  n = new Eh(0, 0, Vr.MIN.O(), 0);
                return e.put(Eh.key, n);
              })(o);
            }))),
          n < 4 &&
            r >= 4 &&
            (0 !== n &&
              (s = s.next(function () {
                return (function (t, e) {
                  return e
                    .store(ph.store)
                    .aw()
                    .next(function (n) {
                      t.deleteObjectStore(ph.store),
                        t
                          .createObjectStore(ph.store, {
                            keyPath: ph.keyPath,
                            autoIncrement: !0,
                          })
                          .createIndex(
                            ph.userMutationsIndex,
                            ph.userMutationsKeyPath,
                            { unique: !0 }
                          );
                      var r = e.store(ph.store),
                        i = n.map(function (t) {
                          return r.put(t);
                        });
                      return hs.pu(i);
                    });
                })(t, o);
              })),
            (s = s.next(function () {
              !(function (t) {
                t.createObjectStore(Nh.store, { keyPath: Nh.keyPath });
              })(t);
            }))),
          n < 5 &&
            r >= 5 &&
            (s = s.next(function () {
              return i.removeAcknowledgedMutations(o);
            })),
          n < 6 &&
            r >= 6 &&
            (s = s.next(function () {
              return (
                (function (t) {
                  t.createObjectStore(gh.store);
                })(t),
                i.addDocumentGlobal(o)
              );
            })),
          n < 7 &&
            r >= 7 &&
            (s = s.next(function () {
              return i.ensureSequenceNumbers(o);
            })),
          n < 8 &&
            r >= 8 &&
            (s = s.next(function () {
              return i.createCollectionParentIndex(t, o);
            })),
          n < 9 &&
            r >= 9 &&
            (s = s.next(function () {
              !(function (t) {
                t.objectStoreNames.contains("remoteDocumentChanges") &&
                  t.deleteObjectStore("remoteDocumentChanges");
              })(t),
                (function (t) {
                  var e = t.objectStore(mh.store);
                  e.createIndex(mh.readTimeIndex, mh.readTimeIndexPath, {
                    unique: !1,
                  }),
                    e.createIndex(
                      mh.collectionReadTimeIndex,
                      mh.collectionReadTimeIndexPath,
                      { unique: !1 }
                    );
                })(e);
            })),
          n < 10 &&
            r >= 10 &&
            (s = s.next(function () {
              return i.rewriteCanonicalIds(o);
            })),
          s
        );
      }),
      (t.prototype.addDocumentGlobal = function (t) {
        var e = 0;
        return t
          .store(mh.store)
          .vw(function (t, n) {
            e += uh(n);
          })
          .next(function () {
            var n = new gh(e);
            return t.store(gh.store).put(gh.key, n);
          });
      }),
      (t.prototype.removeAcknowledgedMutations = function (t) {
        var e = this,
          n = t.store(lh.store),
          r = t.store(ph.store);
        return n.aw().next(function (n) {
          return hs.forEach(n, function (n) {
            var i = IDBKeyRange.bound(
              [n.userId, -1],
              [n.userId, n.lastAcknowledgedBatchId]
            );
            return r.aw(ph.userMutationsIndex, i).next(function (r) {
              return hs.forEach(r, function (r) {
                Wo(
                  r.userId === n.userId,
                  "Cannot process batch " + r.batchId + " from unexpected user"
                );
                var i = e.serializer.yw(r);
                return Wa(t, n.userId, i).next(function () {});
              });
            });
          });
        });
      }),
      (t.prototype.ensureSequenceNumbers = function (t) {
        var e = t.store(bh.store),
          n = t.store(mh.store);
        return eh(t).next(function (t) {
          var r = [];
          return n
            .vw(function (n, i) {
              var o = new qr(n),
                s = (function (t) {
                  return [0, Ls(t)];
                })(o);
              r.push(
                e.get(s).next(function (n) {
                  return n
                    ? hs.resolve()
                    : (function (n) {
                        return e.put(new bh(0, Ls(n), t));
                      })(o);
                })
              );
            })
            .next(function () {
              return hs.pu(r);
            });
        });
      }),
      (t.prototype.createCollectionParentIndex = function (t, e) {
        t.createObjectStore(Ih.store, { keyPath: Ih.keyPath });
        var n = e.store(Ih.store),
          r = new Fs(),
          i = function (t) {
            if (r.add(t)) {
              var e = t.B(),
                i = t.L();
              return n.put({ collectionId: e, parent: Ls(i) });
            }
          };
        return e
          .store(mh.store)
          .vw({ dw: !0 }, function (t, e) {
            var n = new qr(t);
            return i(n.L());
          })
          .next(function () {
            return e.store(dh.store).vw({ dw: !0 }, function (t, e) {
              t[0];
              var n = t[1],
                r = (t[2], Us(n));
              return i(r.L());
            });
          });
      }),
      (t.prototype.rewriteCanonicalIds = function (t) {
        var e = this,
          n = t.store(wh.store);
        return n.vw(function (t, r) {
          var i = e.serializer.Rw(r),
            o = e.serializer.Sw(i);
          return n.put(o);
        });
      }),
      t
    );
  })(),
  ch = function (t, e) {
    (this.seconds = t), (this.nanoseconds = e);
  },
  fh = (function () {
    function t(t, e, n) {
      (this.ownerId = t),
        (this.allowTabSynchronization = e),
        (this.leaseTimestampMs = n);
    }
    return (t.store = "owner"), (t.key = "owner"), t;
  })(),
  lh = (function () {
    function t(t, e, n) {
      (this.userId = t),
        (this.lastAcknowledgedBatchId = e),
        (this.lastStreamToken = n);
    }
    return (t.store = "mutationQueues"), (t.keyPath = "userId"), t;
  })(),
  ph = (function () {
    function t(t, e, n, r, i) {
      (this.userId = t),
        (this.batchId = e),
        (this.localWriteTimeMs = n),
        (this.baseMutations = r),
        (this.mutations = i);
    }
    return (
      (t.store = "mutations"),
      (t.keyPath = "batchId"),
      (t.userMutationsIndex = "userMutationsIndex"),
      (t.userMutationsKeyPath = ["userId", "batchId"]),
      t
    );
  })(),
  dh = (function () {
    function t() {}
    return (
      (t.prefixForUser = function (t) {
        return [t];
      }),
      (t.prefixForPath = function (t, e) {
        return [t, Ls(e)];
      }),
      (t.key = function (t, e, n) {
        return [t, Ls(e), n];
      }),
      (t.store = "documentMutations"),
      (t.PLACEHOLDER = new t()),
      t
    );
  })(),
  vh = function (t, e) {
    (this.path = t), (this.readTime = e);
  },
  yh = function (t, e) {
    (this.path = t), (this.version = e);
  },
  mh = (function () {
    function t(t, e, n, r, i, o) {
      (this.unknownDocument = t),
        (this.noDocument = e),
        (this.document = n),
        (this.hasCommittedMutations = r),
        (this.readTime = i),
        (this.parentPath = o);
    }
    return (
      (t.store = "remoteDocuments"),
      (t.readTimeIndex = "readTimeIndex"),
      (t.readTimeIndexPath = "readTime"),
      (t.collectionReadTimeIndex = "collectionReadTimeIndex"),
      (t.collectionReadTimeIndexPath = ["parentPath", "readTime"]),
      t
    );
  })(),
  gh = (function () {
    function t(t) {
      this.byteSize = t;
    }
    return (
      (t.store = "remoteDocumentGlobal"), (t.key = "remoteDocumentGlobalKey"), t
    );
  })(),
  wh = (function () {
    function t(t, e, n, r, i, o, s) {
      (this.targetId = t),
        (this.canonicalId = e),
        (this.readTime = n),
        (this.resumeToken = r),
        (this.lastListenSequenceNumber = i),
        (this.lastLimboFreeSnapshotVersion = o),
        (this.query = s);
    }
    return (
      (t.store = "targets"),
      (t.keyPath = "targetId"),
      (t.queryTargetsIndexName = "queryTargetsIndex"),
      (t.queryTargetsKeyPath = ["canonicalId", "targetId"]),
      t
    );
  })(),
  bh = (function () {
    function t(t, e, n) {
      (this.targetId = t),
        (this.path = e),
        (this.sequenceNumber = n),
        Wo(
          (0 === t) == (void 0 !== n),
          "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number"
        );
    }
    return (
      (t.store = "targetDocuments"),
      (t.keyPath = ["targetId", "path"]),
      (t.documentTargetsIndex = "documentTargetsIndex"),
      (t.documentTargetsKeyPath = ["path", "targetId"]),
      t
    );
  })(),
  Eh = (function () {
    function t(t, e, n, r) {
      (this.highestTargetId = t),
        (this.highestListenSequenceNumber = e),
        (this.lastRemoteSnapshotVersion = n),
        (this.targetCount = r);
    }
    return (t.key = "targetGlobalKey"), (t.store = "targetGlobal"), t;
  })(),
  Ih = (function () {
    function t(t, e) {
      (this.collectionId = t), (this.parent = e);
    }
    return (
      (t.store = "collectionParents"),
      (t.keyPath = ["collectionId", "parent"]),
      t
    );
  })();
function Th(t) {
  t
    .createObjectStore(bh.store, { keyPath: bh.keyPath })
    .createIndex(bh.documentTargetsIndex, bh.documentTargetsKeyPath, {
      unique: !0,
    }),
    t
      .createObjectStore(wh.store, { keyPath: wh.keyPath })
      .createIndex(wh.queryTargetsIndexName, wh.queryTargetsKeyPath, {
        unique: !0,
      }),
    t.createObjectStore(Eh.store);
}
var Nh = (function () {
    function t(t, e, n, r) {
      (this.clientId = t),
        (this.updateTimeMs = e),
        (this.networkEnabled = n),
        (this.inForeground = r);
    }
    return (t.store = "clientMetadata"), (t.keyPath = "clientId"), t;
  })(),
  Ah = [
    lh.store,
    ph.store,
    dh.store,
    mh.store,
    wh.store,
    fh.store,
    Eh.store,
    bh.store,
  ],
  Dh = i(Ah, [Nh.store]),
  Sh = i(Dh, [gh.store]),
  kh = i(Sh, [Ih.store]),
  Oh = (function () {
    function t() {
      this.Mw = new Fs();
    }
    return (
      (t.prototype.rc = function (t, e) {
        var n = this;
        if (
          (Wo(e.length % 2 == 1, "Expected a collection path."),
          !this.Mw.has(e))
        ) {
          var r = e.B(),
            i = e.L();
          t.Lh(function () {
            n.Mw.add(e);
          });
          var o = { collectionId: r, parent: Ls(i) };
          return Ch(t).put(o);
        }
        return hs.resolve();
      }),
      (t.prototype.Yh = function (t, e) {
        var n = [],
          r = IDBKeyRange.bound([e, ""], [$o(e), ""], !1, !0);
        return Ch(t)
          .aw(r)
          .next(function (t) {
            for (var r = 0, i = t; r < i.length; r++) {
              var o = i[r];
              if (o.collectionId !== e) break;
              n.push(Us(o.parent));
            }
            return n;
          });
      }),
      t
    );
  })();
function Ch(t) {
  return Mh.nw(t, Ih.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Rh = (function () {
    function t(t) {
      this.qw = t;
    }
    return (
      (t.prototype.Uw = function (t) {
        if (t.document)
          return this.qw.Ae(t.document, !!t.hasCommittedMutations);
        if (t.noDocument) {
          var e = Br.rt(t.noDocument.path),
            n = this.Bw(t.noDocument.readTime);
          return new Gi(e, n, {
            hasCommittedMutations: !!t.hasCommittedMutations,
          });
        }
        return t.unknownDocument
          ? ((e = Br.rt(t.unknownDocument.path)),
            (n = this.Bw(t.unknownDocument.version)),
            new zi(e, n))
          : Ko("Unexpected DbRemoteDocument");
      }),
      (t.prototype.Lw = function (t, e) {
        var n = this.Fw(e),
          r = t.key.path.L().K();
        if (t instanceof Bi) {
          var i = this.qw.Se(t),
            o = t.hasCommittedMutations;
          return new mh(null, null, i, o, n, r);
        }
        if (t instanceof Gi) {
          var s = t.key.path.K(),
            u = this.Qw(t.version);
          return (
            (o = t.hasCommittedMutations),
            new mh(null, new vh(s, u), null, o, n, r)
          );
        }
        if (t instanceof zi) {
          s = t.key.path.K();
          var a = this.Qw(t.version);
          return new mh(new yh(s, a), null, null, !0, n, r);
        }
        return Ko("Unexpected MaybeDocument");
      }),
      (t.prototype.Fw = function (t) {
        var e = t.O();
        return [e.seconds, e.nanoseconds];
      }),
      (t.prototype.jw = function (t) {
        var e = new _r(t[0], t[1]);
        return Vr.P(e);
      }),
      (t.prototype.Qw = function (t) {
        var e = t.O();
        return new ch(e.seconds, e.nanoseconds);
      }),
      (t.prototype.Bw = function (t) {
        var e = new _r(t.seconds, t.nanoseconds);
        return Vr.P(e);
      }),
      (t.prototype.gw = function (t, e) {
        var n = this,
          r = e.baseMutations.map(function (t) {
            return n.qw.Fe(t);
          }),
          i = e.mutations.map(function (t) {
            return n.qw.Fe(t);
          });
        return new ph(t, e.batchId, e.gr.toMillis(), r, i);
      }),
      (t.prototype.yw = function (t) {
        var e = this,
          n = (t.baseMutations || []).map(function (t) {
            return e.qw.Le(t);
          }),
          r = t.mutations.map(function (t) {
            return e.qw.Le(t);
          }),
          i = _r.fromMillis(t.localWriteTimeMs);
        return new es(t.batchId, i, n, r);
      }),
      (t.prototype.Gw = function (t) {
        var e = [];
        return (
          t.forEach(function (t) {
            e.push(Ls(t.path));
          }),
          e
        );
      }),
      (t.prototype.Ww = function (t) {
        for (var e = go(), n = 0, r = t; n < r.length; n++) {
          var i = r[n];
          e = e.add(new Br(Us(i)));
        }
        return e;
      }),
      (t.prototype.Rw = function (t) {
        var e,
          n = this.Bw(t.readTime),
          r =
            void 0 !== t.lastLimboFreeSnapshotVersion
              ? this.Bw(t.lastLimboFreeSnapshotVersion)
              : Vr.MIN;
        return (
          (e =
            void 0 !== t.query.documents
              ? this.qw.ze(t.query)
              : this.qw.Xe(t.query)),
          new oo(
            e,
            t.targetId,
            0,
            t.lastListenSequenceNumber,
            n,
            r,
            $r.fromBase64String(t.resumeToken)
          )
        );
      }),
      (t.prototype.Sw = function (t) {
        Wo(
          0 === t.ti,
          "Only queries with purpose 0 may be stored, got " + t.ti
        );
        var e,
          n = this.Qw(t.ni),
          r = this.Qw(t.lastLimboFreeSnapshotVersion);
        e = t.target.Tn() ? this.qw.We(t.target) : this.qw.Ke(t.target);
        var i = t.resumeToken.toBase64();
        return new wh(
          t.targetId,
          t.target.canonicalId(),
          n,
          i,
          t.sequenceNumber,
          r,
          e
        );
      }),
      t
    );
  })(),
  xh =
    "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",
  Ph = (function (e) {
    function n(t, n) {
      var r = e.call(this) || this;
      return (r.Iw = t), (r.fo = n), r;
    }
    return t(n, e), n;
  })(xs),
  Mh = (function () {
    function t(e, n, r, i, o, s, u, a) {
      if (
        ((this.allowTabSynchronization = e),
        (this.persistenceKey = n),
        (this.clientId = r),
        (this.zo = s),
        (this.zw = a),
        (this.Fc = !1),
        (this.isPrimary = !1),
        (this.networkEnabled = !0),
        (this.Kw = null),
        (this.inForeground = !1),
        (this.Jw = null),
        (this.Hw = null),
        (this.Yw = Number.NEGATIVE_INFINITY),
        (this.Xw = function (t) {
          return Promise.resolve();
        }),
        (this.Cs = new Vh(this, o)),
        (this.$w = n + t.Zw),
        (this.serializer = new Rh(u)),
        (this.document = i.document),
        (this.Os = new $a(this.Cs, this.serializer)),
        (this.Bh = new Oh()),
        (this.qh = new rh(this.serializer, this.Bh)),
        !i.window || !i.window.localStorage)
      )
        throw new Or(
          kr.UNIMPLEMENTED,
          "IndexedDB persistence is only available on platforms that support LocalStorage."
        );
      (this.window = i.window), (this.tm = this.window.localStorage);
    }
    return (
      (t.nw = function (t, e) {
        if (t instanceof Ph) return qa.nw(t.Iw, e);
        throw Ko(
          "IndexedDbPersistence must use instances of IndexedDbTransaction"
        );
      }),
      (t.nm = function (r) {
        return e(this, void 0, void 0, function () {
          var e;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                if (!t.th())
                  throw new Or(
                    kr.UNIMPLEMENTED,
                    "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."
                  );
                return [
                  4,
                  (e = new t(
                    r.allowTabSynchronization,
                    r.persistenceKey,
                    r.clientId,
                    r.platform,
                    r.im,
                    r.zo,
                    r.serializer,
                    r.zw
                  )).start(),
                ];
              case 1:
                return n.sent(), [2, e];
            }
          });
        });
      }),
      (t.prototype.start = function () {
        var t = this;
        return (
          Wo(!this.qu, "IndexedDbPersistence double-started!"),
          Wo(null !== this.window, "Expected 'window' to be defined"),
          qa
            .Xv(this.$w, ah, new hh(this.serializer))
            .then(function (e) {
              return (t.em = e), t.rm();
            })
            .then(function () {
              return (
                t.um(),
                t.sm(),
                t.om(),
                t.em.runTransaction("readonly", [Eh.store], function (t) {
                  return eh(t);
                })
              );
            })
            .then(function (e) {
              t.Oc = new os(e, t.zw);
            })
            .then(function () {
              t.Fc = !0;
            })
            .catch(function (e) {
              return t.em && t.em.close(), Promise.reject(e);
            })
        );
      }),
      (t.prototype.jc = function (t) {
        var r = this;
        return (
          (this.Xw = function (i) {
            return e(r, void 0, void 0, function () {
              return n(this, function (e) {
                return this.qu ? [2, t(i)] : [2];
              });
            });
          }),
          t(this.isPrimary)
        );
      }),
      (t.prototype.xc = function (t) {
        var r = this;
        this.em.iw(function (i) {
          return e(r, void 0, void 0, function () {
            return n(this, function (e) {
              switch (e.label) {
                case 0:
                  return null !== i.newVersion ? [3, 2] : [4, t()];
                case 1:
                  e.sent(), (e.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        });
      }),
      (t.prototype.jo = function (t) {
        var r = this;
        this.networkEnabled !== t &&
          ((this.networkEnabled = t),
          this.zo.Qr(function () {
            return e(r, void 0, void 0, function () {
              return n(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.qu ? [4, this.rm()] : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }));
      }),
      (t.prototype.rm = function () {
        var t = this;
        return this.em
          .runTransaction("readwrite", kh, function (e) {
            return _h(e)
              .put(
                new Nh(t.clientId, Date.now(), t.networkEnabled, t.inForeground)
              )
              .next(function () {
                if (t.isPrimary)
                  return t.hm(e).next(function (e) {
                    e ||
                      ((t.isPrimary = !1),
                      t.zo.Qr(function () {
                        return t.Xw(!1);
                      }));
                  });
              })
              .next(function () {
                return t.cm(e);
              })
              .next(function (n) {
                return t.isPrimary && !n
                  ? t.am(e).next(function () {
                      return !1;
                    })
                  : !!n &&
                      t.fm(e).next(function () {
                        return !0;
                      });
              });
          })
          .catch(function (e) {
            if (!t.allowTabSynchronization) throw e;
            return (
              zo(
                "IndexedDbPersistence",
                "Releasing owner lease after error during lease refresh",
                e
              ),
              !1
            );
          })
          .then(function (e) {
            t.isPrimary !== e &&
              t.zo.Qr(function () {
                return t.Xw(e);
              }),
              (t.isPrimary = e);
          });
      }),
      (t.prototype.hm = function (t) {
        var e = this;
        return Lh(t)
          .get(fh.key)
          .next(function (t) {
            return hs.resolve(e.lm(t));
          });
      }),
      (t.prototype.dm = function (t) {
        return _h(t).delete(this.clientId);
      }),
      (t.prototype.vm = function () {
        return e(this, void 0, void 0, function () {
          var e = this;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return !this.isPrimary || this.wm(this.Yw, 18e5)
                  ? [3, 2]
                  : ((this.Yw = Date.now()),
                    [
                      4,
                      this.runTransaction(
                        "maybeGarbageCollectMultiClientState",
                        "readwrite-primary",
                        function (n) {
                          var r = t.nw(n, Nh.store);
                          return r.aw().next(function (t) {
                            var n = e.mm(t, 18e5),
                              i = t.filter(function (t) {
                                return -1 === n.indexOf(t);
                              });
                            return hs
                              .forEach(i, function (t) {
                                return r.delete(t.clientId);
                              })
                              .next(function () {
                                return i;
                              });
                          });
                        }
                      ).catch(function () {
                        return [];
                      }),
                    ]);
              case 1:
                n.sent().forEach(function (t) {
                  e.window.localStorage.removeItem(e.pm(t.clientId));
                }),
                  (n.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (t.prototype.om = function () {
        var t = this;
        this.Hw = this.zo.iu("client_metadata_refresh", 4e3, function () {
          return t
            .rm()
            .then(function () {
              return t.vm();
            })
            .then(function () {
              return t.om();
            });
        });
      }),
      (t.prototype.lm = function (t) {
        return !!t && t.ownerId === this.clientId;
      }),
      (t.prototype.cm = function (t) {
        var e = this;
        return Lh(t)
          .get(fh.key)
          .next(function (n) {
            if (
              null !== n &&
              e.wm(n.leaseTimestampMs, 5e3) &&
              !e.bm(n.ownerId)
            ) {
              if (e.lm(n) && e.networkEnabled) return !0;
              if (!e.lm(n)) {
                if (!n.allowTabSynchronization)
                  throw new Or(kr.FAILED_PRECONDITION, xh);
                return !1;
              }
            }
            return (
              !(!e.networkEnabled || !e.inForeground) ||
              _h(t)
                .aw()
                .next(function (t) {
                  return (
                    void 0 ===
                    e.mm(t, 5e3).find(function (t) {
                      if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled,
                          r = !e.inForeground && t.inForeground,
                          i = e.networkEnabled === t.networkEnabled;
                        if (n || (r && i)) return !0;
                      }
                      return !1;
                    })
                  );
                })
            );
          })
          .next(function (t) {
            return (
              e.isPrimary !== t &&
                zo(
                  "IndexedDbPersistence",
                  "Client " +
                    (t ? "is" : "is not") +
                    " eligible for a primary lease."
                ),
              t
            );
          });
      }),
      (t.prototype.shutdown = function () {
        return e(this, void 0, void 0, function () {
          var t = this;
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (this.Fc = !1),
                  this.gm(),
                  this.Hw && (this.Hw.cancel(), (this.Hw = null)),
                  this.ym(),
                  this._m(),
                  [
                    4,
                    this.em.runTransaction(
                      "readwrite",
                      [fh.store, Nh.store],
                      function (e) {
                        return t.am(e).next(function () {
                          return t.dm(e);
                        });
                      }
                    ),
                  ]
                );
              case 1:
                return e.sent(), this.em.close(), this.Im(), [2];
            }
          });
        });
      }),
      (t.prototype.mm = function (t, e) {
        var n = this;
        return t.filter(function (t) {
          return n.wm(t.updateTimeMs, e) && !n.bm(t.clientId);
        });
      }),
      (t.prototype.Oo = function () {
        var t = this;
        return this.em.runTransaction("readonly", [Nh.store], function (e) {
          return _h(e)
            .aw()
            .next(function (e) {
              return t.mm(e, 18e5).map(function (t) {
                return t.clientId;
              });
            });
        });
      }),
      (t.clearPersistence = function (r) {
        return e(this, void 0, void 0, function () {
          var e;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return t.th()
                  ? ((e = r + t.Zw), [4, qa.delete(e)])
                  : [2, Promise.resolve()];
              case 1:
                return n.sent(), [2];
            }
          });
        });
      }),
      Object.defineProperty(t.prototype, "qu", {
        get: function () {
          return this.Fc;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.Vs = function (t) {
        return (
          Wo(
            this.qu,
            "Cannot initialize MutationQueue before persistence is started."
          ),
          Ya.pw(t, this.serializer, this.Bh, this.Cs)
        );
      }),
      (t.prototype.Fs = function () {
        return (
          Wo(
            this.qu,
            "Cannot initialize TargetCache before persistence is started."
          ),
          this.Os
        );
      }),
      (t.prototype.Ns = function () {
        return (
          Wo(
            this.qu,
            "Cannot initialize RemoteDocumentCache before persistence is started."
          ),
          this.qh
        );
      }),
      (t.prototype.js = function () {
        return (
          Wo(
            this.qu,
            "Cannot initialize IndexManager before persistence is started."
          ),
          this.Bh
        );
      }),
      (t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        zo("IndexedDbPersistence", "Starting transaction:", t);
        var i,
          o = "readonly" === e ? "readonly" : "readwrite";
        return this.em
          .runTransaction(o, kh, function (o) {
            return (
              (i = new Ph(o, r.Oc.next())),
              "readwrite-primary" === e
                ? r
                    .hm(o)
                    .next(function (t) {
                      return !!t || r.cm(o);
                    })
                    .next(function (e) {
                      if (!e)
                        throw (
                          (Qo(
                            "Failed to obtain primary lease for action '" +
                              t +
                              "'."
                          ),
                          (r.isPrimary = !1),
                          r.zo.Qr(function () {
                            return r.Xw(!1);
                          }),
                          new Or(kr.FAILED_PRECONDITION, Rs))
                        );
                      return n(i);
                    })
                    .next(function (t) {
                      return r.fm(o).next(function () {
                        return t;
                      });
                    })
                : r.Tm(o).next(function () {
                    return n(i);
                  })
            );
          })
          .then(function (t) {
            return i.Mh(), t;
          });
      }),
      (t.prototype.Tm = function (t) {
        var e = this;
        return Lh(t)
          .get(fh.key)
          .next(function (t) {
            if (
              null !== t &&
              e.wm(t.leaseTimestampMs, 5e3) &&
              !e.bm(t.ownerId) &&
              !e.lm(t) &&
              !t.allowTabSynchronization
            )
              throw new Or(kr.FAILED_PRECONDITION, xh);
          });
      }),
      (t.prototype.fm = function (t) {
        var e = new fh(this.clientId, this.allowTabSynchronization, Date.now());
        return Lh(t).put(fh.key, e);
      }),
      (t.th = function () {
        return qa.th();
      }),
      (t.Em = function (t) {
        var e = t.ae.projectId;
        return (
          t.ae.br || (e += "." + t.ae.database),
          "firestore/" + t.persistenceKey + "/" + e + "/"
        );
      }),
      (t.prototype.am = function (t) {
        var e = this,
          n = Lh(t);
        return n.get(fh.key).next(function (t) {
          return e.lm(t)
            ? (zo("IndexedDbPersistence", "Releasing primary lease."),
              n.delete(fh.key))
            : hs.resolve();
        });
      }),
      (t.prototype.wm = function (t, e) {
        var n = Date.now();
        return !(
          t < n - e ||
          (t > n &&
            (Qo(
              "Detected an update time that is in the future: " + t + " > " + n
            ),
            1))
        );
      }),
      (t.prototype.um = function () {
        var t = this;
        null !== this.document &&
          "function" == typeof this.document.addEventListener &&
          ((this.Jw = function () {
            t.zo.Qr(function () {
              return (
                (t.inForeground = "visible" === t.document.visibilityState),
                t.rm()
              );
            });
          }),
          this.document.addEventListener("visibilitychange", this.Jw),
          (this.inForeground = "visible" === this.document.visibilityState));
      }),
      (t.prototype.ym = function () {
        this.Jw &&
          (Wo(
            null !== this.document &&
              "function" == typeof this.document.addEventListener,
            "Expected 'document.addEventListener' to be a function"
          ),
          this.document.removeEventListener("visibilitychange", this.Jw),
          (this.Jw = null));
      }),
      (t.prototype.sm = function () {
        var t = this;
        "function" == typeof this.window.addEventListener &&
          ((this.Kw = function () {
            t.gm(),
              t.zo.Qr(function () {
                return t.shutdown();
              });
          }),
          this.window.addEventListener("unload", this.Kw));
      }),
      (t.prototype._m = function () {
        this.Kw &&
          (Wo(
            "function" == typeof this.window.removeEventListener,
            "Expected 'window.removeEventListener' to be a function"
          ),
          this.window.removeEventListener("unload", this.Kw),
          (this.Kw = null));
      }),
      (t.prototype.bm = function (t) {
        try {
          var e = null !== this.tm.getItem(this.pm(t));
          return (
            zo(
              "IndexedDbPersistence",
              "Client '" +
                t +
                "' " +
                (e ? "is" : "is not") +
                " zombied in LocalStorage"
            ),
            e
          );
        } catch (t) {
          return (
            Qo("IndexedDbPersistence", "Failed to get zombied client id.", t),
            !1
          );
        }
      }),
      (t.prototype.gm = function () {
        try {
          this.tm.setItem(this.pm(this.clientId), String(Date.now()));
        } catch (t) {
          Qo("Failed to set zombie client id.", t);
        }
      }),
      (t.prototype.Im = function () {
        try {
          this.tm.removeItem(this.pm(this.clientId));
        } catch (t) {}
      }),
      (t.prototype.pm = function (t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
      }),
      (t.Zw = "main"),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lh(t) {
  return t.store(fh.store);
}
function _h(t) {
  return t.store(Nh.store);
}
var Vh = (function () {
  function t(t, e) {
    (this.db = t), (this.Bc = null), (this.ju = new vs(this, e));
  }
  return (
    (t.prototype.Wu = function (t) {
      var e = this.Dm(t);
      return this.db
        .Fs()
        .kc(t)
        .next(function (t) {
          return e.next(function (e) {
            return t + e;
          });
        });
    }),
    (t.prototype.Dm = function (t) {
      var e = 0;
      return this.Ku(t, function (t) {
        e++;
      }).next(function () {
        return e;
      });
    }),
    (t.prototype.$i = function (t, e) {
      return this.db.Fs().$i(t, e);
    }),
    (t.prototype.Ku = function (t, e) {
      return this.Rm(t, function (t, n) {
        return e(n);
      });
    }),
    (t.prototype.As = function (t) {
      this.Bc = t;
    }),
    (t.prototype.es = function (t, e) {
      return Uh(t, e);
    }),
    (t.prototype.us = function (t, e) {
      return Uh(t, e);
    }),
    (t.prototype.Ju = function (t, e, n) {
      return this.db.Fs().Ju(t, e, n);
    }),
    (t.prototype.lc = function (t, e) {
      return Uh(t, e);
    }),
    (t.prototype.Sm = function (t, e) {
      return this.Bc.fs(e)
        ? hs.resolve(!0)
        : (function (t, e) {
            var n = !1;
            return Xa(t)
              .ww(function (r) {
                return Ka(t, r, e).next(function (t) {
                  return t && (n = !0), hs.resolve(!t);
                });
              })
              .next(function () {
                return n;
              });
          })(t, e);
    }),
    (t.prototype.Hu = function (t, e) {
      var n = this,
        r = this.db.Ns().Xs(),
        i = [],
        o = 0;
      return this.Rm(t, function (s, u) {
        if (u <= e) {
          var a = n.Sm(t, s).next(function (e) {
            if (!e)
              return (
                o++,
                r.gs(t, s).next(function () {
                  return r.bs(s), nh(t).delete([0, Ls(s.path)]);
                })
              );
          });
          i.push(a);
        }
      })
        .next(function () {
          return hs.pu(i);
        })
        .next(function () {
          return r.apply(t);
        })
        .next(function () {
          return o;
        });
    }),
    (t.prototype.removeTarget = function (t, e) {
      var n = e.ii(t.fo);
      return this.db.Fs().do(t, n);
    }),
    (t.prototype.vo = function (t, e) {
      return Uh(t, e);
    }),
    (t.prototype.Rm = function (t, e) {
      var n,
        r = nh(t),
        i = os.Nr;
      return r
        .vw({ index: bh.documentTargetsIndex }, function (t, r) {
          var o = t[0],
            s = (t[1], r.path),
            u = r.sequenceNumber;
          0 === o
            ? (i !== os.Nr && e(new Br(Us(n)), i), (i = u), (n = s))
            : (i = os.Nr);
        })
        .next(function () {
          i !== os.Nr && e(new Br(Us(n)), i);
        });
    }),
    (t.prototype.Xu = function (t) {
      return this.db.Ns().pc(t);
    }),
    t
  );
})();
function Uh(t, e) {
  return nh(t).put(
    (function (t, e) {
      return new bh(0, Ls(t.path), e);
    })(e, t.fo)
  );
}
var qh = (function () {
    function t() {}
    return (
      (t.prototype.initialize = function (t, r, i, o, s, u) {
        return e(this, void 0, void 0, function () {
          var e, a, h, c;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                if (
                  (Wo(
                    u.zc,
                    "IndexedDbPersistenceProvider can only provide durable persistence"
                  ),
                  Wo(!this.persistence, "configure() already called"),
                  (e = Mh.Em(r)),
                  (a = new Uo(r.ae, { de: Fo.xt().de })),
                  !Os.th(i))
                )
                  throw new Or(
                    kr.UNIMPLEMENTED,
                    "IndexedDB persistence is only available on platforms that support LocalStorage."
                  );
                return (
                  (this.Ml = u.synchronizeTabs
                    ? new Os(t, i, e, o, s)
                    : new Cs()),
                  (h = this),
                  [
                    4,
                    Mh.nm({
                      allowTabSynchronization: u.synchronizeTabs,
                      persistenceKey: e,
                      clientId: o,
                      platform: i,
                      zo: t,
                      serializer: a,
                      im: ps.Pu(u.cacheSizeBytes),
                      zw: this.Ml,
                    }),
                  ]
                );
              case 1:
                return (
                  (h.persistence = n.sent()),
                  (c = this.persistence.Cs.ju),
                  (this.Md = new ds(c, t)),
                  [2]
                );
            }
          });
        });
      }),
      (t.prototype.Jc = function () {
        return (
          Wo(!!this.persistence, "initialize() not called"), this.persistence
        );
      }),
      (t.prototype.Hc = function () {
        return Wo(!!this.Ml, "initialize() not called"), this.Ml;
      }),
      (t.prototype.Kc = function () {
        return Wo(!!this.Md, "initialize() not called"), this.Md;
      }),
      (t.prototype.clearPersistence = function (t) {
        var e = Mh.Em(t);
        return Mh.clearPersistence(e);
      }),
      t
    );
  })(),
  Fh = {
    Firestore: Ca,
    GeoPoint: Lu,
    Timestamp: _r,
    Blob: Au,
    Transaction: Ra,
    WriteBatch: xa,
    DocumentReference: Pa,
    DocumentSnapshot: Ma,
    Query: _a,
    QueryDocumentSnapshot: La,
    QuerySnapshot: Va,
    CollectionReference: Ua,
    FieldPath: Du,
    FieldValue: Mu,
    setLogLevel: pa.setLogLevel,
    CACHE_SIZE_UNLIMITED: fa,
  },
  jh = (function () {
    function t() {}
    return (
      (t.prototype.jf = function (t) {}),
      (t.prototype.shutdown = function () {}),
      t
    );
  })(),
  Bh = (function () {
    function t() {
      var t = this;
      (this.Am = function () {
        return t.Cm();
      }),
        (this.Pm = function () {
          return t.Vm();
        }),
        (this.km = []),
        this.Nm();
    }
    return (
      (t.prototype.jf = function (t) {
        this.km.push(t);
      }),
      (t.prototype.shutdown = function () {
        window.removeEventListener("online", this.Am),
          window.removeEventListener("offline", this.Pm);
      }),
      (t.prototype.Nm = function () {
        window.addEventListener("online", this.Am),
          window.addEventListener("offline", this.Pm);
      }),
      (t.prototype.Cm = function () {
        zo("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.km; t < e.length; t++) (0, e[t])(0);
      }),
      (t.prototype.Vm = function () {
        zo("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.km; t < e.length; t++) (0, e[t])(1);
      }),
      (t.th = function () {
        return (
          "undefined" != typeof window &&
          void 0 !== window.addEventListener &&
          void 0 !== window.removeEventListener
        );
      }),
      t
    );
  })(),
  Gh = (function () {
    function t(t) {
      (this.Om = t.Om), (this.Fm = t.Fm);
    }
    return (
      (t.prototype.Ea = function (t) {
        Wo(!this.Um, "Called onOpen on stream twice!"), (this.Um = t);
      }),
      (t.prototype.ga = function (t) {
        Wo(!this.jm, "Called onClose on stream twice!"), (this.jm = t);
      }),
      (t.prototype.onMessage = function (t) {
        Wo(!this.xm, "Called onMessage on stream twice!"), (this.xm = t);
      }),
      (t.prototype.close = function () {
        this.Fm();
      }),
      (t.prototype.send = function (t) {
        this.Om(t);
      }),
      (t.prototype.Lm = function () {
        Wo(
          void 0 !== this.Um,
          "Cannot call onOpen because no callback was set"
        ),
          this.Um();
      }),
      (t.prototype.Mm = function (t) {
        Wo(
          void 0 !== this.jm,
          "Cannot call onClose because no callback was set"
        ),
          this.jm(t);
      }),
      (t.prototype.qm = function (t) {
        Wo(
          void 0 !== this.xm,
          "Cannot call onMessage because no callback was set"
        ),
          this.xm(t);
      }),
      t
    );
  })(),
  zh = { BatchGetDocuments: "batchGet", Commit: "commit" },
  Qh = "gl-js/ fire/" + Dr,
  Yh = (function () {
    function t(t) {
      this.ae = t.ae;
      var e = t.ssl ? "https" : "http";
      (this.Bm = e + "://" + t.host),
        (this.forceLongPolling = t.forceLongPolling);
    }
    return (
      (t.prototype.Qm = function (t, e) {
        if (e) for (var n in e.o) e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
        t["X-Goog-Api-Client"] = Qh;
      }),
      (t.prototype.Ua = function (t, e, n) {
        var r = this,
          i = this.Gm(t);
        return new Promise(function (o, u) {
          var a = new Ar();
          a.listenOnce(Tr.COMPLETE, function () {
            try {
              switch (a.getLastErrorCode()) {
                case Ir.NO_ERROR:
                  var e = a.getResponseJson();
                  zo("Connection", "XHR received:", JSON.stringify(e)), o(e);
                  break;
                case Ir.TIMEOUT:
                  zo("Connection", 'RPC "' + t + '" timed out'),
                    u(new Or(kr.DEADLINE_EXCEEDED, "Request time out"));
                  break;
                case Ir.HTTP_ERROR:
                  var n = a.getStatus();
                  if (
                    (zo(
                      "Connection",
                      'RPC "' + t + '" failed with status:',
                      n,
                      "response text:",
                      a.getResponseText()
                    ),
                    n > 0)
                  ) {
                    var r = a.getResponseJson().error;
                    if (r && r.status && r.message) {
                      var i =
                        ((s = r.status.toLowerCase().replace("_", "-")),
                        Object.values(kr).indexOf(s) >= 0 ? s : kr.UNKNOWN);
                      u(new Or(i, r.message));
                    } else
                      u(
                        new Or(
                          kr.UNKNOWN,
                          "Server responded with status " + a.getStatus()
                        )
                      );
                  } else zo("Connection", 'RPC "' + t + '" failed'), u(new Or(kr.UNAVAILABLE, "Connection failed."));
                  break;
                default:
                  Ko(
                    'RPC "' +
                      t +
                      '" failed with unanticipated webchannel error ' +
                      a.getLastErrorCode() +
                      ": " +
                      a.getLastError() +
                      ", giving up."
                  );
              }
            } finally {
              zo("Connection", 'RPC "' + t + '" completed.');
            }
            var s;
          });
          var h = s({}, e);
          delete h.database;
          var c = JSON.stringify(h);
          zo("Connection", "XHR sending: ", i + " " + c);
          var f = { "Content-Type": "text/plain" };
          r.Qm(f, n), a.send(i, "POST", c, f, 15);
        });
      }),
      (t.prototype.ja = function (t, e, n) {
        return this.Ua(t, e, n);
      }),
      (t.prototype.Da = function (t, e) {
        var n = [
            this.Bm,
            "/",
            "google.firestore.v1.Firestore",
            "/",
            t,
            "/channel",
          ],
          r = Er(),
          i = {
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
              database:
                "projects/" +
                this.ae.projectId +
                "/databases/" +
                this.ae.database,
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
            forceLongPolling: this.forceLongPolling,
          };
        this.Qm(i.initMessageHeaders, e),
          c() ||
            f() ||
            l() ||
            p() ||
            d() ||
            v() ||
            (i.httpHeadersOverwriteParam = "$httpHeaders");
        var o = n.join("");
        zo("Connection", "Creating WebChannel: " + o + " " + i);
        var s = r.createWebChannel(o, i),
          u = !1,
          a = !1,
          h = new Gh({
            Om: function (t) {
              a
                ? zo(
                    "Connection",
                    "Not sending because WebChannel is closed:",
                    t
                  )
                : (u ||
                    (zo("Connection", "Opening WebChannel transport."),
                    s.open(),
                    (u = !0)),
                  zo("Connection", "WebChannel sending:", t),
                  s.send(t));
            },
            Fm: function () {
              return s.close();
            },
          }),
          y = function (t, e) {
            s.listen(t, function (t) {
              try {
                e(t);
              } catch (t) {
                setTimeout(function () {
                  throw t;
                }, 0);
              }
            });
          };
        return (
          y(Nr.EventType.OPEN, function () {
            a || zo("Connection", "WebChannel transport opened.");
          }),
          y(Nr.EventType.CLOSE, function () {
            a ||
              ((a = !0),
              zo("Connection", "WebChannel transport closed"),
              h.Mm());
          }),
          y(Nr.EventType.ERROR, function (t) {
            a ||
              ((a = !0),
              zo("Connection", "WebChannel transport errored:", t),
              h.Mm(
                new Or(kr.UNAVAILABLE, "The operation could not be completed")
              ));
          }),
          y(Nr.EventType.MESSAGE, function (t) {
            var e;
            if (!a) {
              var n = t.data[0];
              Wo(!!n, "Got a webchannel message without data.");
              var r = n,
                i =
                  r.error ||
                  (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
              if (i) {
                zo("Connection", "WebChannel received error:", i);
                var o = i.status,
                  u = (function (t) {
                    var e = Si[t];
                    if (void 0 !== e) return ao(e);
                  })(o),
                  c = i.message;
                void 0 === u &&
                  ((u = kr.INTERNAL),
                  (c =
                    "Unknown error status: " +
                    o +
                    " with message " +
                    i.message)),
                  (a = !0),
                  h.Mm(new Or(u, c)),
                  s.close();
              } else zo("Connection", "WebChannel received:", n), h.qm(n);
            }
          }),
          setTimeout(function () {
            h.Lm();
          }, 0),
          h
        );
      }),
      (t.prototype.Gm = function (t) {
        var e = zh[t];
        return (
          Wo(void 0 !== e, "Unknown REST mapping for: " + t),
          this.Bm +
            "/v1/projects/" +
            this.ae.projectId +
            "/databases/" +
            this.ae.database +
            "/documents:" +
            e
        );
      }),
      t
    );
  })(),
  Kh = window.crypto || window.__PRIVATE_msCrypto,
  Wh = (function () {
    function t() {
      (this.de = !0), (this.xa = "undefined" != typeof atob);
    }
    return (
      Object.defineProperty(t.prototype, "document", {
        get: function () {
          return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "window", {
        get: function () {
          return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.Bd = function (t) {
        return Promise.resolve(new Yh(t));
      }),
      (t.prototype.Qd = function () {
        return Bh.th() ? new Bh() : new jh();
      }),
      (t.prototype.Gd = function (t) {
        return new Uo(t, { de: !0 });
      }),
      (t.prototype.mr = function (t) {
        return JSON.stringify(t);
      }),
      (t.prototype.atob = function (t) {
        return atob(t);
      }),
      (t.prototype.btoa = function (t) {
        return btoa(t);
      }),
      (t.prototype.randomBytes = function (t) {
        if (t <= 0) return new Uint8Array();
        var e = new Uint8Array(t);
        return Kh.getRandomValues(e), e;
      }),
      t
    );
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fo.wr(new Wh()),
  /**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  (function (t) {
    !(function (t, e) {
      t.INTERNAL.registerComponent(
        new a(
          "firestore",
          function (t) {
            return (function (t, e) {
              return new pa(t, e, new qh());
            })(
              t.getProvider("app").getImmediate(),
              t.getProvider("auth-internal")
            );
          },
          "PUBLIC"
        ).setServiceProps(s({}, Fh))
      );
    })(t),
      t.registerVersion("@firebase/firestore", "1.13.1");
  })(h);
//# sourceMappingURL=index.esm.js.map
