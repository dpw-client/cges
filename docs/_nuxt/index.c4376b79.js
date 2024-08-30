import { s as ne, u as S, v as O, r as s, x as y, y as w, z as Me, A as Ne, B as je, C as ge, h as Z, D as he, F as xe, n as V, c as Se, b as B, w as $, o as ee, E as De, q as Ee, a as be, t as Ie } from "./entry.fd2562e0.js";
import { s as we, V as Le } from "./intersectionObserver.7bd1d6c8.js";
import { i as Pe } from "./ItemList.5507a333.js";
import { _ as Ve } from "./_plugin-vue_export-helper.c27b6911.js";
import "./resizeObserver.59196411.js";
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */ const v = {
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
  ye = {
    itemsToShow: { default: v.itemsToShow, type: Number },
    itemsToScroll: { default: v.itemsToScroll, type: Number },
    wrapAround: { default: v.wrapAround, type: Boolean },
    throttle: { default: v.throttle, type: Number },
    snapAlign: {
      default: v.snapAlign,
      validator(e) {
        return ["start", "end", "center", "center-even", "center-odd"].includes(e);
      },
    },
    transition: { default: v.transition, type: Number },
    breakpoints: { default: v.breakpoints, type: Object },
    autoplay: { default: v.autoplay, type: Number },
    pauseAutoplayOnHover: { default: v.pauseAutoplayOnHover, type: Boolean },
    modelValue: { default: void 0, type: Number },
    mouseDrag: { default: v.mouseDrag, type: Boolean },
    touchDrag: { default: v.touchDrag, type: Boolean },
    dir: {
      default: v.dir,
      validator(e) {
        return ["rtl", "ltr"].includes(e);
      },
    },
    i18n: { default: v.i18n, type: Object },
    settings: {
      default() {
        return {};
      },
      type: Object,
    },
  };
function Be({ config: e, slidesCount: a }) {
  const { snapAlign: n, wrapAround: l, itemsToShow: r = 1 } = e;
  if (l) return Math.max(a - 1, 0);
  let i;
  switch (n) {
    case "start":
      i = a - r;
      break;
    case "end":
      i = a - 1;
      break;
    case "center":
    case "center-odd":
      i = a - Math.ceil((r - 0.5) / 2);
      break;
    case "center-even":
      i = a - Math.ceil(r / 2);
      break;
    default:
      i = 0;
      break;
  }
  return Math.max(i, 0);
}
function $e({ config: e, slidesCount: a }) {
  const { wrapAround: n, snapAlign: l, itemsToShow: r = 1 } = e;
  let i = 0;
  if (n || r > a) return i;
  switch (l) {
    case "start":
      i = 0;
      break;
    case "end":
      i = r - 1;
      break;
    case "center":
    case "center-odd":
      i = Math.floor((r - 1) / 2);
      break;
    case "center-even":
      i = Math.floor((r - 2) / 2);
      break;
    default:
      i = 0;
      break;
  }
  return i;
}
function te({ val: e, max: a, min: n }) {
  return a < n ? e : Math.min(Math.max(e, n), a);
}
function Re({ config: e, currentSlide: a, slidesCount: n }) {
  const { snapAlign: l, wrapAround: r, itemsToShow: i = 1 } = e;
  let g = a;
  switch (l) {
    case "center":
    case "center-odd":
      g -= (i - 1) / 2;
      break;
    case "center-even":
      g -= (i - 2) / 2;
      break;
    case "end":
      g -= i - 1;
      break;
  }
  return r ? g : te({ val: g, max: n - i, min: 0 });
}
function Ae(e) {
  return e
    ? e.reduce((a, n) => {
        var l;
        return n.type === xe ? [...a, ...Ae(n.children)] : ((l = n.type) === null || l === void 0 ? void 0 : l.name) === "CarouselSlide" ? [...a, n] : a;
      }, [])
    : [];
}
function R({ val: e, max: a, min: n = 0 }) {
  return e > a ? R({ val: e - (a + 1), max: a, min: n }) : e < n ? R({ val: e + (a + 1), max: a, min: n }) : e;
}
function Xe(e, a) {
  let n;
  return a
    ? function (...l) {
        const r = this;
        n || (e.apply(r, l), (n = !0), setTimeout(() => (n = !1), a));
      }
    : e;
}
function Ye(e, a) {
  let n;
  return function (...l) {
    n && clearTimeout(n),
      (n = setTimeout(() => {
        e(...l), (n = null);
      }, a));
  };
}
function ke(e = "", a = {}) {
  return Object.entries(a).reduce((n, [l, r]) => n.replace(`{${l}}`, String(r)), e);
}
var Fe = ne({
    name: "ARIA",
    setup() {
      const e = S("config", O(Object.assign({}, v))),
        a = S("currentSlide", s(0)),
        n = S("slidesCount", s(0));
      return () => y("div", { class: ["carousel__liveregion", "carousel__sr-only"], "aria-live": "polite", "aria-atomic": "true" }, ke(e.i18n.itemXofY, { currentSlide: a.value + 1, slidesCount: n.value }));
    },
  }),
  He = ne({
    name: "Carousel",
    props: ye,
    setup(e, { slots: a, emit: n, expose: l }) {
      var r;
      const i = s(null),
        g = s([]),
        u = s(0),
        d = s(0),
        o = O(Object.assign({}, v));
      let p = Object.assign({}, v),
        _;
      const f = s((r = e.modelValue) !== null && r !== void 0 ? r : 0),
        X = s(0),
        ae = s(0),
        T = s(0),
        M = s(0);
      let C, Y;
      w("config", o), w("slidesCount", d), w("currentSlide", f), w("maxSlide", T), w("minSlide", M), w("slideWidth", u);
      function F() {
        (_ = Object.assign({}, e.breakpoints)), (p = Object.assign(Object.assign(Object.assign({}, p), e), { i18n: Object.assign(Object.assign({}, p.i18n), e.i18n), breakpoints: void 0 })), oe(p);
      }
      function D() {
        if (!_ || !Object.keys(_).length) return;
        const t = Object.keys(_)
          .map((c) => Number(c))
          .sort((c, b) => +b - +c);
        let m = Object.assign({}, p);
        t.some((c) => {
          const b = window.matchMedia(`(min-width: ${c}px)`).matches;
          return b && (m = Object.assign(Object.assign({}, m), _[c])), b;
        }),
          oe(m);
      }
      function oe(t) {
        Object.entries(t).forEach(([m, c]) => (o[m] = c));
      }
      const ie = Ye(() => {
        D(), N();
      }, 16);
      function N() {
        if (!i.value) return;
        const t = i.value.getBoundingClientRect();
        u.value = t.width / o.itemsToShow;
      }
      function H() {
        d.value <= 0 || ((ae.value = Math.ceil((d.value - 1) / 2)), (T.value = Be({ config: o, slidesCount: d.value })), (M.value = $e({ config: o, slidesCount: d.value })), o.wrapAround || (f.value = te({ val: f.value, max: T.value, min: M.value })));
      }
      Me(() => {
        Ne(() => N()), setTimeout(() => N(), 1e3), D(), ue(), window.addEventListener("resize", ie, { passive: !0 }), n("init");
      }),
        je(() => {
          Y && clearTimeout(Y), C && clearInterval(C), window.removeEventListener("resize", ie, { passive: !0 });
        });
      let h = !1;
      const E = { x: 0, y: 0 },
        I = { x: 0, y: 0 },
        x = O({ x: 0, y: 0 }),
        L = s(!1),
        U = s(!1),
        Te = () => {
          L.value = !0;
        },
        Ce = () => {
          L.value = !1;
        };
      function re(t) {
        ["INPUT", "TEXTAREA", "SELECT"].includes(t.target.tagName) || ((h = t.type === "touchstart"), h || t.preventDefault(), !((!h && t.button !== 0) || A.value) && ((E.x = h ? t.touches[0].clientX : t.clientX), (E.y = h ? t.touches[0].clientY : t.clientY), document.addEventListener(h ? "touchmove" : "mousemove", le, !0), document.addEventListener(h ? "touchend" : "mouseup", se, !0)));
      }
      const le = Xe((t) => {
        (U.value = !0), (I.x = h ? t.touches[0].clientX : t.clientX), (I.y = h ? t.touches[0].clientY : t.clientY);
        const m = I.x - E.x,
          c = I.y - E.y;
        (x.y = c), (x.x = m);
      }, o.throttle);
      function se() {
        const t = o.dir === "rtl" ? -1 : 1,
          m = Math.sign(x.x) * 0.4,
          c = Math.round(x.x / u.value + m) * t;
        if (c && !h) {
          const b = (q) => {
            q.stopPropagation(), window.removeEventListener("click", b, !0);
          };
          window.addEventListener("click", b, !0);
        }
        k(f.value - c), (x.x = 0), (x.y = 0), (U.value = !1), document.removeEventListener(h ? "touchmove" : "mousemove", le, !0), document.removeEventListener(h ? "touchend" : "mouseup", se, !0);
      }
      function ue() {
        !o.autoplay ||
          o.autoplay <= 0 ||
          (C = setInterval(() => {
            (o.pauseAutoplayOnHover && L.value) || P();
          }, o.autoplay));
      }
      function ce() {
        C && (clearInterval(C), (C = null)), ue();
      }
      const A = s(!1);
      function k(t) {
        const m = o.wrapAround ? t : te({ val: t, max: T.value, min: M.value });
        f.value === m ||
          A.value ||
          (n("slide-start", { slidingToIndex: t, currentSlideIndex: f.value, prevSlideIndex: X.value, slidesCount: d.value }),
          (A.value = !0),
          (X.value = f.value),
          (f.value = m),
          (Y = setTimeout(() => {
            if (o.wrapAround) {
              const c = R({ val: m, max: T.value, min: 0 });
              c !== f.value && ((f.value = c), n("loop", { currentSlideIndex: f.value, slidingToIndex: t }));
            }
            n("update:modelValue", f.value), n("slide-end", { currentSlideIndex: f.value, prevSlideIndex: X.value, slidesCount: d.value }), (A.value = !1), ce();
          }, o.transition)));
      }
      function P() {
        k(f.value + o.itemsToScroll);
      }
      function z() {
        k(f.value - o.itemsToScroll);
      }
      const de = { slideTo: k, next: P, prev: z };
      w("nav", de), w("isSliding", A);
      const fe = ge(() => Re({ config: o, currentSlide: f.value, slidesCount: d.value }));
      w("slidesToScroll", fe);
      const Oe = ge(() => {
        const t = o.dir === "rtl" ? -1 : 1,
          m = fe.value * u.value * t;
        return { transform: `translateX(${x.x - m}px)`, transition: `${A.value ? o.transition : 0}ms`, margin: o.wrapAround ? `0 -${d.value * u.value}px` : "", width: "100%" };
      });
      function ve() {
        F(), D(), H(), N(), ce();
      }
      Object.keys(ye).forEach((t) => {
        ["modelValue"].includes(t) || Z(() => e[t], ve);
      }),
        Z(
          () => e.modelValue,
          (t) => {
            t !== f.value && k(Number(t));
          }
        ),
        Z(d, H),
        n("before-init"),
        F();
      const me = { config: o, slidesCount: d, slideWidth: u, next: P, prev: z, slideTo: k, currentSlide: f, maxSlide: T, minSlide: M, middleSlide: ae };
      l({ updateBreakpointsConfigs: D, updateSlidesData: H, updateSlideWidth: N, initDefaultConfigs: F, restartCarousel: ve, slideTo: k, next: P, prev: z, nav: de, data: me });
      const W = a.default || a.slides,
        G = a.addons,
        pe = O(me);
      return () => {
        const t = Ae(W == null ? void 0 : W(pe)),
          m = (G == null ? void 0 : G(pe)) || [];
        t.forEach((K, J) => (K.props.index = J));
        let c = t;
        if (o.wrapAround) {
          const K = t.map((Q, j) => he(Q, { index: -t.length + j, isClone: !0, key: `clone-before-${j}` })),
            J = t.map((Q, j) => he(Q, { index: t.length + j, isClone: !0, key: `clone-after-${j}` }));
          c = [...K, ...t, ...J];
        }
        (g.value = t), (d.value = Math.max(t.length, 1));
        const b = y("ol", { class: "carousel__track", style: Oe.value, onMousedownCapture: o.mouseDrag ? re : null, onTouchstartPassiveCapture: o.touchDrag ? re : null }, c),
          q = y("div", { class: "carousel__viewport" }, b);
        return y("section", { ref: i, class: { carousel: !0, "is-sliding": A.value, "is-dragging": U.value, "is-hover": L.value, "carousel--rtl": o.dir === "rtl" }, dir: o.dir, "aria-label": o.i18n.ariaGallery, tabindex: "0", onMouseenter: Te, onMouseleave: Ce }, [q, m, y(Fe)]);
      };
    },
  }),
  _e;
(function (e) {
  (e.arrowUp = "arrowUp"), (e.arrowDown = "arrowDown"), (e.arrowRight = "arrowRight"), (e.arrowLeft = "arrowLeft");
})(_e || (_e = {}));
const Ue = () => {
  const e = S("config", O(Object.assign({}, v))),
    a = S("maxSlide", s(1)),
    n = S("minSlide", s(1)),
    l = S("currentSlide", s(1)),
    r = S("nav", {}),
    i = (u) => R({ val: l.value, max: a.value, min: 0 }) === u,
    g = [];
  for (let u = n.value; u < a.value + 1; u++) {
    const d = y("button", { type: "button", class: { "carousel__pagination-button": !0, "carousel__pagination-button--active": i(u) }, "aria-label": ke(e.i18n.ariaNavigateToSlide, { slideNumber: u + 1 }), onClick: () => r.slideTo(u) }),
      o = y("li", { class: "carousel__pagination-item", key: u }, d);
    g.push(o);
  }
  return y("ol", { class: "carousel__pagination" }, g);
};
var ze = ne({
  name: "CarouselSlide",
  props: { index: { type: Number, default: 1 }, isClone: { type: Boolean, default: !1 } },
  setup(e, { slots: a }) {
    const n = S("config", O(Object.assign({}, v))),
      l = S("currentSlide", s(0)),
      r = S("slidesToScroll", s(0)),
      i = S("isSliding", s(!1)),
      g = () => e.index === l.value,
      u = () => e.index === l.value - 1,
      d = () => e.index === l.value + 1,
      o = () => {
        const p = Math.floor(r.value),
          _ = Math.ceil(r.value + n.itemsToShow - 1);
        return e.index >= p && e.index <= _;
      };
    return () => {
      var p;
      return y("li", { style: { width: `${100 / n.itemsToShow}%` }, class: { carousel__slide: !0, "carousel__slide--clone": e.isClone, "carousel__slide--visible": o(), "carousel__slide--active": g(), "carousel__slide--prev": u(), "carousel__slide--next": d(), "carousel__slide--sliding": i.value }, "aria-hidden": !o() }, (p = a.default) === null || p === void 0 ? void 0 : p.call(a));
    };
  },
});
const We = {
    components: { Carousel: He, Slide: ze, Pagination: Ue, il: Pe },
    async mounted() {
      (this.content = we.Landing), (this.carousel = we.Carousel);
    },
    data() {
      return { categories: [], layout: "default", content: [], carousel: [] };
    },
    methods: {
      openPDF(e) {
        window.open(`/pdf/${e}`, "_blank");
      },
    },
  },
  Ge = { style: { height: "100%", width: "100%", display: "flex", "flex-direction": "column-reverse" } },
  qe = { class: "text-white", style: { "background-color": "#0009" } };
function Ke(e, a, n, l, r, i) {
  const g = V("Slide"),
    u = V("Pagination"),
    d = V("Carousel"),
    o = V("il");
  return (
    ee(),
    Se("div", null, [
      B(
        d,
        { class: "mt-4 h-75 ma-auto", autoplay: 4e3, "items-to-show": 2.5, "wrap-around": !0 },
        {
          addons: $(() => [B(u)]),
          default: $(() => [
            (ee(!0),
            Se(
              xe,
              null,
              De(r.carousel, (p) => (ee(), Ee(g, { key: p }, { default: $(() => [B(Le, { class: "carousel__item", src: `/img/${p.picture}`, onClick: (_) => i.openPDF(p.file) }, { default: $(() => [be("div", Ge, [be("div", qe, Ie(p.title), 1)])]), _: 2 }, 1032, ["src", "onClick"])]), _: 2 }, 1024))),
              128
            )),
          ]),
          _: 1,
        }
      ),
      B(o, { contentKey: "Landing" }),
    ])
  );
}
const nt = Ve(We, [["render", Ke]]);
export { nt as default };
