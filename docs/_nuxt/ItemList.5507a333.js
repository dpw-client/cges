import { m as B, u as C, a as E, V, s as T } from "./intersectionObserver.7bd1d6c8.js";
import { _ as W } from "./_plugin-vue_export-helper.c27b6911.js";
import { G as K, H as F, I, r as R, f as D, h, j as H, C as M, b as i, J as N, n as j, o, c as r, F as A, E as O, K as Y, L as S, w, d as G, t as $, M as l, q as J } from "./entry.fd2562e0.js";
import { u as U, g as Q } from "./resizeObserver.59196411.js";
function X(t) {
  return Math.floor(Math.abs(t)) * Math.sign(t);
}
const Z = K({ scale: { type: [Number, String], default: 0.5 }, ...B() }, "VParallax"),
  ee = F()({
    name: "VParallax",
    props: Z(),
    setup(t, y) {
      let { slots: f } = y;
      const { intersectionRef: u, isIntersecting: c } = C(),
        { resizeRef: d, contentRect: m } = U(),
        { height: p } = I(),
        e = R();
      D(() => {
        var s;
        u.value = d.value = (s = e.value) == null ? void 0 : s.$el;
      });
      let n;
      h(c, (s) => {
        s ? ((n = Q(u.value)), (n = n === document.scrollingElement ? document : n), n.addEventListener("scroll", a, { passive: !0 }), a()) : n.removeEventListener("scroll", a);
      }),
        H(() => {
          n == null || n.removeEventListener("scroll", a);
        }),
        h(p, a),
        h(() => {
          var s;
          return (s = m.value) == null ? void 0 : s.height;
        }, a);
      const v = M(() => 1 - N(+t.scale));
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
              z = u.value.getBoundingClientRect().top + k,
              g = m.value.height,
              L = z + (g - x) / 2,
              P = X((k - L) * v.value),
              q = Math.max(1, (v.value * (x - g) + g) / g);
            s.style.setProperty("transform", `translateY(${P}px) scale(${q})`);
          })));
      }
      return E(() => i(V, { class: ["v-parallax", { "v-parallax--active": c.value }, t.class], style: t.style, ref: e, cover: !0, onLoadstart: a, onLoad: a }, f)), {};
    },
  }),
  te = {
    name: "ItemList",
    components: {},
    props: { contentKey: { type: String, required: !0, default: "" }, childWidth: { type: String, required: !0, default: "w-100" } },
    mounted() {},
    data() {
      return { content: T[this.contentKey] };
    },
    methods: {
      unquote(t) {
        return (t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'")) ? t.slice(1, -1) : t;
      },
    },
  },
  ne = { class: "w-100 d-flex flex-column justify-center align-center" },
  se = { key: 0, style: { "font-size": "40px" }, class: "mb-8 w-75" },
  oe = { key: 1, style: { "font-size": "20px" }, class: "mb-4 w-75" },
  ae = { key: 4, style: { "font-size": "20px" }, class: "mb-4 w-25" },
  re = { key: 5, class: "mb-16" };
function le(t, y, f, u, c, d) {
  const m = j("center"),
    p = ce;
  return (
    o(),
    r("div", ne, [
      (o(!0),
      r(
        A,
        null,
        O(
          c.content,
          (e) => (
            o(),
            r(
              "div",
              { key: e, class: Y(`${f.childWidth} d-flex flex-column justify-center align-center`), style: S(`background-color:${e.Background}; color:${e.Foreground};`) },
              [
                e.Type == "title" ? (o(), r("div", se, [i(m, null, { default: w(() => [G($(d.unquote(e.Section)), 1)]), _: 2 }, 1024)])) : l("", !0),
                e.Type == "normal" ? (o(), r("div", oe, $(d.unquote(e.Section)), 1)) : l("", !0),
                e.Type == "bg-image" ? (o(), r("div", { key: 2, style: S(`background-image: url(/img/${e.Background}); background-size: cover; background-position: center; background-repeat: no-repeat;`) }, [i(p, { contentKey: e.Section, childWidth: "w-75 rounded" }, null, 8, ["contentKey"])], 4)) : l("", !0),
                e.Type == "bg-parallax" ? (o(), J(ee, { key: 3, src: `/img/${e.Background}`, class: "align-center" }, { default: w(() => [i(p, { contentKey: e.Section, childWidth: "w-75 rounded" }, null, 8, ["contentKey"])]), _: 2 }, 1032, ["src"])) : l("", !0),
                e.Type == "picture" ? (o(), r("div", ae, [i(V, { src: `/img/${e.Section}` }, null, 8, ["src"])])) : l("", !0),
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
const ce = W(te, [["render", le]]);
export { ce as i };
