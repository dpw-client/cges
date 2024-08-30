import { m as P, c as q, d as B, u as C, V as L, g as E, s as W } from "./intersectionObserver.7f0ac36b.js";
import { _ as I } from "./_plugin-vue_export-helper.c27b6911.js";
import { I as R, G as F, R as H, r as K, f as M, h as y, j as D, C as N, b as i, S as j, n as O, o, c as r, F as A, E as Y, T as G, Q as S, w, d as Q, t as U, O as l, q as J } from "./entry.34021546.js";
function X(t) {
  return Math.floor(Math.abs(t)) * Math.sign(t);
}
const Z = R({ scale: { type: [Number, String], default: 0.5 }, ...P() }, "VParallax"),
  ee = F()({
    name: "VParallax",
    props: Z(),
    setup(t, h) {
      let { slots: f } = h;
      const { intersectionRef: u, isIntersecting: c } = q(),
        { resizeRef: d, contentRect: m } = B(),
        { height: p } = H(),
        e = K();
      M(() => {
        var s;
        u.value = d.value = (s = e.value) == null ? void 0 : s.$el;
      });
      let n;
      y(c, (s) => {
        s ? ((n = E(u.value)), (n = n === document.scrollingElement ? document : n), n.addEventListener("scroll", a, { passive: !0 }), a()) : n.removeEventListener("scroll", a);
      }),
        D(() => {
          n == null || n.removeEventListener("scroll", a);
        }),
        y(p, a),
        y(() => {
          var s;
          return (s = m.value) == null ? void 0 : s.height;
        }, a);
      const v = N(() => 1 - j(+t.scale));
      let _ = -1;
      function a() {
        c.value &&
          (cancelAnimationFrame(_),
          (_ = requestAnimationFrame(() => {
            var b;
            const s = ((b = e.value) == null ? void 0 : b.$el).querySelector(".v-img__img");
            if (!s) return;
            const x = n instanceof Document ? document.documentElement.clientHeight : n.clientHeight,
              k = n instanceof Document ? window.scrollY : n.scrollTop,
              T = u.value.getBoundingClientRect().top + k,
              g = m.value.height,
              $ = T + (g - x) / 2,
              V = X((k - $) * v.value),
              z = Math.max(1, (v.value * (x - g) + g) / g);
            s.style.setProperty("transform", `translateY(${V}px) scale(${z})`);
          })));
      }
      return C(() => i(L, { class: ["v-parallax", { "v-parallax--active": c.value }, t.class], style: t.style, ref: e, cover: !0, onLoadstart: a, onLoad: a }, f)), {};
    },
  }),
  te = {
    name: "ItemList",
    components: {},
    props: { contentKey: { type: String, required: !0, default: "" }, childWidth: { type: String, required: !1, default: "w-100" } },
    mounted() {},
    data() {
      return { content: W[this.contentKey] };
    },
    methods: {
      unquote(t) {
        return (t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'")) ? t.slice(1, -1) : t;
      },
    },
  },
  ne = { class: "w-100 d-flex flex-column justify-center align-center" },
  se = { key: 0, style: { "font-size": "40px" }, class: "mb-8 w-75" },
  oe = ["innerHTML"],
  ae = { key: 4, style: { "font-size": "20px" }, class: "mb-4 w-25" },
  re = { key: 5, class: "mb-16" };
function le(t, h, f, u, c, d) {
  const m = O("center"),
    p = ce;
  return (
    o(),
    r("div", ne, [
      (o(!0),
      r(
        A,
        null,
        Y(
          c.content,
          (e) => (
            o(),
            r(
              "div",
              { key: e, class: G(`${f.childWidth} d-flex flex-column justify-center align-center`), style: S(`background-color:${e.Background}; color:${e.Foreground};`) },
              [
                e.Type == "title" ? (o(), r("div", se, [i(m, null, { default: w(() => [Q(U(d.unquote(e.Section)), 1)]), _: 2 }, 1024)])) : l("", !0),
                e.Type == "normal" ? (o(), r("div", { key: 1, style: { "font-size": "20px" }, class: "mb-4 w-75", innerHTML: d.unquote(e.Section) }, null, 8, oe)) : l("", !0),
                e.Type == "bg-image" ? (o(), r("div", { key: 2, style: S(`background-image: url(/img/${e.Background}); background-size: cover; background-position: center; background-repeat: no-repeat;`) }, [i(p, { contentKey: e.Section, childWidth: "w-75 rounded" }, null, 8, ["contentKey"])], 4)) : l("", !0),
                e.Type == "bg-parallax" ? (o(), J(ee, { key: 3, src: `/img/${e.Background}`, class: "align-center" }, { default: w(() => [i(p, { contentKey: e.Section, childWidth: "w-75 rounded" }, null, 8, ["contentKey"])]), _: 2 }, 1032, ["src"])) : l("", !0),
                e.Type == "picture" ? (o(), r("div", ae, [i(L, { src: `/img/${e.Section}` }, null, 8, ["src"])])) : l("", !0),
                e.Type == "space" ? (o(), r("div", re)) : l("", !0),
              ],
              6
            )
          )
        ),
        128
      )),
    ])
  );
}
const ce = I(te, [["render", le]]);
export { ce as i };
