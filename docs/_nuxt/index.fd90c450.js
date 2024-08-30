import { s as ne, u as h, v as O, r as s, x as y, y as w, z as Ne, A as Ee, B as Ie, C as ge, h as Q, D as he, F as xe, E as Le, c as Se, b as B, w as P, G as Z, o as ee, H as Ve, q as Be, a as be, t as Pe } from "./entry.d01a4c19.js";
import { u as $e } from "./website.cc84d845.js";
import { i as _e } from "./ItemList.0c385c12.js";
import { V as Re } from "./intersectionObserver.7f4b3920.js";
import "./_plugin-vue_export-helper.c27b6911.js";
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */ const d = {
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
  we = {
    itemsToShow: { default: d.itemsToShow, type: Number },
    itemsToScroll: { default: d.itemsToScroll, type: Number },
    wrapAround: { default: d.wrapAround, type: Boolean },
    throttle: { default: d.throttle, type: Number },
    snapAlign: {
      default: d.snapAlign,
      validator(e) {
        return ["start", "end", "center", "center-even", "center-odd"].includes(e);
      },
    },
    transition: { default: d.transition, type: Number },
    breakpoints: { default: d.breakpoints, type: Object },
    autoplay: { default: d.autoplay, type: Number },
    pauseAutoplayOnHover: { default: d.pauseAutoplayOnHover, type: Boolean },
    modelValue: { default: void 0, type: Number },
    mouseDrag: { default: d.mouseDrag, type: Boolean },
    touchDrag: { default: d.touchDrag, type: Boolean },
    dir: {
      default: d.dir,
      validator(e) {
        return ["rtl", "ltr"].includes(e);
      },
    },
    i18n: { default: d.i18n, type: Object },
    settings: {
      default() {
        return {};
      },
      type: Object,
    },
  };
function Xe({ config: e, slidesCount: t }) {
  const { snapAlign: a, wrapAround: o, itemsToShow: l = 1 } = e;
  if (o) return Math.max(t - 1, 0);
  let r;
  switch (a) {
    case "start":
      r = t - l;
      break;
    case "end":
      r = t - 1;
      break;
    case "center":
    case "center-odd":
      r = t - Math.ceil((l - 0.5) / 2);
      break;
    case "center-even":
      r = t - Math.ceil(l / 2);
      break;
    default:
      r = 0;
      break;
  }
  return Math.max(r, 0);
}
function Ye({ config: e, slidesCount: t }) {
  const { wrapAround: a, snapAlign: o, itemsToShow: l = 1 } = e;
  let r = 0;
  if (a || l > t) return r;
  switch (o) {
    case "start":
      r = 0;
      break;
    case "end":
      r = l - 1;
      break;
    case "center":
    case "center-odd":
      r = Math.floor((l - 1) / 2);
      break;
    case "center-even":
      r = Math.floor((l - 2) / 2);
      break;
    default:
      r = 0;
      break;
  }
  return r;
}
function te({ val: e, max: t, min: a }) {
  return t < a ? e : Math.min(Math.max(e, a), t);
}
function He({ config: e, currentSlide: t, slidesCount: a }) {
  const { snapAlign: o, wrapAround: l, itemsToShow: r = 1 } = e;
  let p = t;
  switch (o) {
    case "center":
    case "center-odd":
      p -= (r - 1) / 2;
      break;
    case "center-even":
      p -= (r - 2) / 2;
      break;
    case "end":
      p -= r - 1;
      break;
  }
  return l ? p : te({ val: p, max: a - r, min: 0 });
}
function Ae(e) {
  return e
    ? e.reduce((t, a) => {
        var o;
        return a.type === xe ? [...t, ...Ae(a.children)] : ((o = a.type) === null || o === void 0 ? void 0 : o.name) === "CarouselSlide" ? [...t, a] : t;
      }, [])
    : [];
}
function $({ val: e, max: t, min: a = 0 }) {
  return e > t ? $({ val: e - (t + 1), max: t, min: a }) : e < a ? $({ val: e + (t + 1), max: t, min: a }) : e;
}
function Fe(e, t) {
  let a;
  return t
    ? function (...o) {
        const l = this;
        a || (e.apply(l, o), (a = !0), setTimeout(() => (a = !1), t));
      }
    : e;
}
function Ue(e, t) {
  let a;
  return function (...o) {
    a && clearTimeout(a),
      (a = setTimeout(() => {
        e(...o), (a = null);
      }, t));
  };
}
function ke(e = "", t = {}) {
  return Object.entries(t).reduce((a, [o, l]) => a.replace(`{${o}}`, String(l)), e);
}
var We = ne({
    name: "ARIA",
    setup() {
      const e = h("config", O(Object.assign({}, d))),
        t = h("currentSlide", s(0)),
        a = h("slidesCount", s(0));
      return () => y("div", { class: ["carousel__liveregion", "carousel__sr-only"], "aria-live": "polite", "aria-atomic": "true" }, ke(e.i18n.itemXofY, { currentSlide: t.value + 1, slidesCount: a.value }));
    },
  }),
  Te = ne({
    name: "Carousel",
    props: we,
    setup(e, { slots: t, emit: a, expose: o }) {
      var l;
      const r = s(null),
        p = s([]),
        f = s(0),
        m = s(0),
        i = O(Object.assign({}, d));
      let S = Object.assign({}, d),
        x;
      const c = s((l = e.modelValue) !== null && l !== void 0 ? l : 0),
        R = s(0),
        ae = s(0),
        T = s(0),
        j = s(0);
      let C, X;
      w("config", i), w("slidesCount", m), w("currentSlide", c), w("maxSlide", T), w("minSlide", j), w("slideWidth", f);
      function Y() {
        (x = Object.assign({}, e.breakpoints)), (S = Object.assign(Object.assign(Object.assign({}, S), e), { i18n: Object.assign(Object.assign({}, S.i18n), e.i18n), breakpoints: void 0 })), ie(S);
      }
      function N() {
        if (!x || !Object.keys(x).length) return;
        const n = Object.keys(x)
          .map((u) => Number(u))
          .sort((u, b) => +b - +u);
        let v = Object.assign({}, S);
        n.some((u) => {
          const b = window.matchMedia(`(min-width: ${u}px)`).matches;
          return b && (v = Object.assign(Object.assign({}, v), x[u])), b;
        }),
          ie(v);
      }
      function ie(n) {
        Object.entries(n).forEach(([v, u]) => (i[v] = u));
      }
      const oe = Ue(() => {
        N(), D();
      }, 16);
      function D() {
        if (!r.value) return;
        const n = r.value.getBoundingClientRect();
        f.value = n.width / i.itemsToShow;
      }
      function H() {
        m.value <= 0 || ((ae.value = Math.ceil((m.value - 1) / 2)), (T.value = Xe({ config: i, slidesCount: m.value })), (j.value = Ye({ config: i, slidesCount: m.value })), i.wrapAround || (c.value = te({ val: c.value, max: T.value, min: j.value })));
      }
      Ne(() => {
        Ee(() => D()), setTimeout(() => D(), 1e3), N(), ue(), window.addEventListener("resize", oe, { passive: !0 }), a("init");
      }),
        Ie(() => {
          X && clearTimeout(X), C && clearInterval(C), window.removeEventListener("resize", oe, { passive: !0 });
        });
      let g = !1;
      const E = { x: 0, y: 0 },
        I = { x: 0, y: 0 },
        _ = O({ x: 0, y: 0 }),
        L = s(!1),
        F = s(!1),
        je = () => {
          L.value = !0;
        },
        De = () => {
          L.value = !1;
        };
      function re(n) {
        ["INPUT", "TEXTAREA", "SELECT"].includes(n.target.tagName) || ((g = n.type === "touchstart"), g || n.preventDefault(), !((!g && n.button !== 0) || A.value) && ((E.x = g ? n.touches[0].clientX : n.clientX), (E.y = g ? n.touches[0].clientY : n.clientY), document.addEventListener(g ? "touchmove" : "mousemove", le, !0), document.addEventListener(g ? "touchend" : "mouseup", se, !0)));
      }
      const le = Fe((n) => {
        (F.value = !0), (I.x = g ? n.touches[0].clientX : n.clientX), (I.y = g ? n.touches[0].clientY : n.clientY);
        const v = I.x - E.x,
          u = I.y - E.y;
        (_.y = u), (_.x = v);
      }, i.throttle);
      function se() {
        const n = i.dir === "rtl" ? -1 : 1,
          v = Math.sign(_.x) * 0.4,
          u = Math.round(_.x / f.value + v) * n;
        if (u && !g) {
          const b = (G) => {
            G.stopPropagation(), window.removeEventListener("click", b, !0);
          };
          window.addEventListener("click", b, !0);
        }
        k(c.value - u), (_.x = 0), (_.y = 0), (F.value = !1), document.removeEventListener(g ? "touchmove" : "mousemove", le, !0), document.removeEventListener(g ? "touchend" : "mouseup", se, !0);
      }
      function ue() {
        !i.autoplay ||
          i.autoplay <= 0 ||
          (C = setInterval(() => {
            (i.pauseAutoplayOnHover && L.value) || V();
          }, i.autoplay));
      }
      function ce() {
        C && (clearInterval(C), (C = null)), ue();
      }
      const A = s(!1);
      function k(n) {
        const v = i.wrapAround ? n : te({ val: n, max: T.value, min: j.value });
        c.value === v ||
          A.value ||
          (a("slide-start", { slidingToIndex: n, currentSlideIndex: c.value, prevSlideIndex: R.value, slidesCount: m.value }),
          (A.value = !0),
          (R.value = c.value),
          (c.value = v),
          (X = setTimeout(() => {
            if (i.wrapAround) {
              const u = $({ val: v, max: T.value, min: 0 });
              u !== c.value && ((c.value = u), a("loop", { currentSlideIndex: c.value, slidingToIndex: n }));
            }
            a("update:modelValue", c.value), a("slide-end", { currentSlideIndex: c.value, prevSlideIndex: R.value, slidesCount: m.value }), (A.value = !1), ce();
          }, i.transition)));
      }
      function V() {
        k(c.value + i.itemsToScroll);
      }
      function U() {
        k(c.value - i.itemsToScroll);
      }
      const de = { slideTo: k, next: V, prev: U };
      w("nav", de), w("isSliding", A);
      const fe = ge(() => He({ config: i, currentSlide: c.value, slidesCount: m.value }));
      w("slidesToScroll", fe);
      const Me = ge(() => {
        const n = i.dir === "rtl" ? -1 : 1,
          v = fe.value * f.value * n;
        return { transform: `translateX(${_.x - v}px)`, transition: `${A.value ? i.transition : 0}ms`, margin: i.wrapAround ? `0 -${m.value * f.value}px` : "", width: "100%" };
      });
      function ve() {
        Y(), N(), H(), D(), ce();
      }
      Object.keys(we).forEach((n) => {
        ["modelValue"].includes(n) || Q(() => e[n], ve);
      }),
        Q(
          () => e.modelValue,
          (n) => {
            n !== c.value && k(Number(n));
          }
        ),
        Q(m, H),
        a("before-init"),
        Y();
      const me = { config: i, slidesCount: m, slideWidth: f, next: V, prev: U, slideTo: k, currentSlide: c, maxSlide: T, minSlide: j, middleSlide: ae };
      o({ updateBreakpointsConfigs: N, updateSlidesData: H, updateSlideWidth: D, initDefaultConfigs: Y, restartCarousel: ve, slideTo: k, next: V, prev: U, nav: de, data: me });
      const W = t.default || t.slides,
        z = t.addons,
        pe = O(me);
      return () => {
        const n = Ae(W == null ? void 0 : W(pe)),
          v = (z == null ? void 0 : z(pe)) || [];
        n.forEach((q, K) => (q.props.index = K));
        let u = n;
        if (i.wrapAround) {
          const q = n.map((J, M) => he(J, { index: -n.length + M, isClone: !0, key: `clone-before-${M}` })),
            K = n.map((J, M) => he(J, { index: n.length + M, isClone: !0, key: `clone-after-${M}` }));
          u = [...q, ...n, ...K];
        }
        (p.value = n), (m.value = Math.max(n.length, 1));
        const b = y("ol", { class: "carousel__track", style: Me.value, onMousedownCapture: i.mouseDrag ? re : null, onTouchstartPassiveCapture: i.touchDrag ? re : null }, u),
          G = y("div", { class: "carousel__viewport" }, b);
        return y("section", { ref: r, class: { carousel: !0, "is-sliding": A.value, "is-dragging": F.value, "is-hover": L.value, "carousel--rtl": i.dir === "rtl" }, dir: i.dir, "aria-label": i.i18n.ariaGallery, tabindex: "0", onMouseenter: je, onMouseleave: De }, [G, v, y(We)]);
      };
    },
  }),
  ye;
(function (e) {
  (e.arrowUp = "arrowUp"), (e.arrowDown = "arrowDown"), (e.arrowRight = "arrowRight"), (e.arrowLeft = "arrowLeft");
})(ye || (ye = {}));
const Ce = () => {
  const e = h("config", O(Object.assign({}, d))),
    t = h("maxSlide", s(1)),
    a = h("minSlide", s(1)),
    o = h("currentSlide", s(1)),
    l = h("nav", {}),
    r = (f) => $({ val: o.value, max: t.value, min: 0 }) === f,
    p = [];
  for (let f = a.value; f < t.value + 1; f++) {
    const m = y("button", { type: "button", class: { "carousel__pagination-button": !0, "carousel__pagination-button--active": r(f) }, "aria-label": ke(e.i18n.ariaNavigateToSlide, { slideNumber: f + 1 }), onClick: () => l.slideTo(f) }),
      i = y("li", { class: "carousel__pagination-item", key: f }, m);
    p.push(i);
  }
  return y("ol", { class: "carousel__pagination" }, p);
};
var Oe = ne({
  name: "CarouselSlide",
  props: { index: { type: Number, default: 1 }, isClone: { type: Boolean, default: !1 } },
  setup(e, { slots: t }) {
    const a = h("config", O(Object.assign({}, d))),
      o = h("currentSlide", s(0)),
      l = h("slidesToScroll", s(0)),
      r = h("isSliding", s(!1)),
      p = () => e.index === o.value,
      f = () => e.index === o.value - 1,
      m = () => e.index === o.value + 1,
      i = () => {
        const S = Math.floor(l.value),
          x = Math.ceil(l.value + a.itemsToShow - 1);
        return e.index >= S && e.index <= x;
      };
    return () => {
      var S;
      return y("li", { style: { width: `${100 / a.itemsToShow}%` }, class: { carousel__slide: !0, "carousel__slide--clone": e.isClone, "carousel__slide--visible": i(), "carousel__slide--active": p(), "carousel__slide--prev": f(), "carousel__slide--next": m(), "carousel__slide--sliding": r.value }, "aria-hidden": !i() }, (S = t.default) === null || S === void 0 ? void 0 : S.call(t));
    };
  },
});
const ze = { style: { height: "100%", width: "100%", display: "flex", "flex-direction": "column-reverse" } },
  Ge = { class: "text-white", style: { "background-color": "#0009" } },
  qe = {
    components: { Carousel: Te, Slide: Oe, Pagination: Ce, il: _e },
    async mounted() {},
    data() {
      return {};
    },
    computed: {
      ...Le($e),
      content() {
        return this.websiteStore.data.Landing;
      },
      carousel() {
        return this.websiteStore.data.Carousel;
      },
    },
    methods: {
      openPDF(e) {
        window.open(`/pdf/${e}`, "_blank");
      },
    },
  },
  tt = Object.assign(qe, {
    __name: "index",
    setup(e) {
      return (t, a) => (
        ee(),
        Se("div", null, [
          B(
            Z(Te),
            { class: "mt-4 h-75 ma-auto", autoplay: 4e3, "items-to-show": 2.5, "wrap-around": !0 },
            {
              addons: P(() => [B(Z(Ce))]),
              default: P(() => [
                (ee(!0),
                Se(
                  xe,
                  null,
                  Ve(t.carousel, (o) => (ee(), Be(Z(Oe), { key: o }, { default: P(() => [B(Re, { class: "carousel__item", src: `/img/${o.picture}`, onDeprecatedClick: (l) => t.openPDF(o.file) }, { default: P(() => [be("div", ze, [be("div", Ge, Pe(o.title), 1)])]), _: 2 }, 1032, ["src", "onDeprecatedClick"])]), _: 2 }, 1024))),
                  128
                )),
              ]),
              _: 1,
            }
          ),
          B(_e, { contentKey: "Landing" }),
        ])
      );
    },
  });
export { tt as default };
