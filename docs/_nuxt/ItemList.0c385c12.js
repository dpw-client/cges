import { L as z, M as W, N as q, r as B, f as C, h, j as E, C as H, b as i, O as I, E as K, n as M, o, c as r, F, H as R, P as N, K as S, w, d as D, t as j, I as l, q as O } from "./entry.d01a4c19.js";
import { a as A, g as Y, u as U } from "./website.cc84d845.js";
import { _ as G } from "./_plugin-vue_export-helper.c27b6911.js";
import { m as J, u as Q, a as X, V as L } from "./intersectionObserver.7f4b3920.js";
function Z(t) {
  return Math.floor(Math.abs(t)) * Math.sign(t);
}
const ee = z({ scale: { type: [Number, String], default: 0.5 }, ...J() }, "VParallax"),
  te = W()({
    name: "VParallax",
    props: ee(),
    setup(t, y) {
      let { slots: f } = y;
      const { intersectionRef: u, isIntersecting: d } = Q(),
        { resizeRef: c, contentRect: m } = A(),
        { height: p } = q(),
        e = B();
      C(() => {
        var s;
        u.value = c.value = (s = e.value) == null ? void 0 : s.$el;
      });
      let n;
      h(d, (s) => {
        s ? ((n = Y(u.value)), (n = n === document.scrollingElement ? document : n), n.addEventListener("scroll", a, { passive: !0 }), a()) : n.removeEventListener("scroll", a);
      }),
        E(() => {
          n == null || n.removeEventListener("scroll", a);
        }),
        h(p, a),
        h(() => {
          var s;
          return (s = m.value) == null ? void 0 : s.height;
        }, a);
      const v = H(() => 1 - I(+t.scale));
      let _ = -1;
      function a() {
        d.value &&
          (cancelAnimationFrame(_),
          (_ = requestAnimationFrame(() => {
            var b;
            const s = ((b = e.value) == null ? void 0 : b.$el).querySelector(".v-img__img");
            if (!s) return;
            const x = n instanceof Document ? document.documentElement.clientHeight : n.clientHeight,
              k = n instanceof Document ? window.scrollY : n.scrollTop,
              $ = u.value.getBoundingClientRect().top + k,
              g = m.value.height,
              P = $ + (g - x) / 2,
              T = Z((k - P) * v.value),
              V = Math.max(1, (v.value * (x - g) + g) / g);
            s.style.setProperty("transform", `translateY(${T}px) scale(${V})`);
          })));
      }
      return X(() => i(L, { class: ["v-parallax", { "v-parallax--active": d.value }, t.class], style: t.style, ref: e, cover: !0, onLoadstart: a, onLoad: a }, f)), {};
    },
  }),
  ne = {
    name: "ItemList",
    components: {},
    props: { contentKey: { type: String, required: !0, default: "" }, childWidth: { type: String, required: !1, default: "w-100" } },
    computed: {
      ...K(U),
      content() {
        return this.websiteStore.data[this.contentKey];
      },
    },
    methods: {
      unquote(t) {
        return (t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'")) ? t.slice(1, -1) : t;
      },
    },
  },
  se = { class: "w-100 d-flex flex-column justify-center align-center" },
  oe = { key: 0, style: { "font-size": "40px" }, class: "mb-8 w-75" },
  ae = ["innerHTML"],
  re = { key: 4, style: { "font-size": "20px" }, class: "mb-4 w-25" },
  le = { key: 5, class: "mb-16" };
function ce(t, y, f, u, d, c) {
  const m = M("center"),
    p = ie;
  return (
    o(),
    r("div", se, [
      (o(!0),
      r(
        F,
        null,
        R(
          c.content,
          (e) => (
            o(),
            r(
              "div",
              { key: e, class: N(`${f.childWidth} d-flex flex-column justify-center align-center`), style: S(`background-color:${e.Background}; color:${e.Foreground};`) },
              [
                e.Type == "title" ? (o(), r("div", oe, [i(m, null, { default: w(() => [D(j(c.unquote(e.Section)), 1)]), _: 2 }, 1024)])) : l("", !0),
                e.Type == "normal" ? (o(), r("div", { key: 1, style: { "font-size": "20px" }, class: "mb-4 w-75", innerHTML: c.unquote(e.Section) }, null, 8, ae)) : l("", !0),
                e.Type == "bg-image" ? (o(), r("div", { key: 2, style: S(`background-image: url(/img/${e.Background}); background-size: cover; background-position: center; background-repeat: no-repeat;`) }, [i(p, { contentKey: e.Section, childWidth: "w-75 rounded" }, null, 8, ["contentKey"])], 4)) : l("", !0),
                e.Type == "bg-parallax" ? (o(), O(te, { key: 3, src: `/img/${e.Background}`, class: "align-center" }, { default: w(() => [i(p, { contentKey: e.Section, childWidth: "w-75 rounded" }, null, 8, ["contentKey"])]), _: 2 }, 1032, ["src"])) : l("", !0),
                e.Type == "picture" ? (o(), r("div", re, [i(L, { src: `/img/${e.Section}` }, null, 8, ["src"])])) : l("", !0),
                e.Type == "space" ? (o(), r("div", le)) : l("", !0),
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
const ie = G(ne, [["render", ce]]);
export { ie as i };
