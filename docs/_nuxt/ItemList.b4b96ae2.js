import { m as P, u as V, a as z, s as q } from "./intersectionObserver.aab72029.js";
import { _ as B } from "./_plugin-vue_export-helper.c27b6911.js";
import { G as H, H as W, I as D, r as K, f as M, h, j as F, C as I, b as u, J as R, n as Y, o as r, c as l, F as O, E as j, K as A, L as b, w as E, d as G, t as S, M as c, q as J } from "./entry.ccd7e3b1.js";
import { u as U } from "./resizeObserver.a034768f.js";
import { V as T } from "./VImg.09de5684.js";
function Q(e) {
  let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (s ? Z(e) : X(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function X(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const s = window.getComputedStyle(e);
  return s.overflowY === "scroll" || (s.overflowY === "auto" && e.scrollHeight > e.clientHeight);
}
function Z(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const s = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(s.overflowY);
}
function ee(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const te = H({ scale: { type: [Number, String], default: 0.5 }, ...P() }, "VParallax"),
  ne = W()({
    name: "VParallax",
    props: te(),
    setup(e, s) {
      let { slots: y } = s;
      const { intersectionRef: d, isIntersecting: i } = V(),
        { resizeRef: m, contentRect: f } = U(),
        { height: p } = D(),
        t = K();
      M(() => {
        var o;
        d.value = m.value = (o = t.value) == null ? void 0 : o.$el;
      });
      let n;
      h(i, (o) => {
        o ? ((n = Q(d.value)), (n = n === document.scrollingElement ? document : n), n.addEventListener("scroll", a, { passive: !0 }), a()) : n.removeEventListener("scroll", a);
      }),
        F(() => {
          n == null || n.removeEventListener("scroll", a);
        }),
        h(p, a),
        h(() => {
          var o;
          return (o = f.value) == null ? void 0 : o.height;
        }, a);
      const v = I(() => 1 - R(+e.scale));
      let _ = -1;
      function a() {
        i.value &&
          (cancelAnimationFrame(_),
          (_ = requestAnimationFrame(() => {
            var k;
            const o = ((k = t.value) == null ? void 0 : k.$el).querySelector(".v-img__img");
            if (!o) return;
            const x = n instanceof Document ? document.documentElement.clientHeight : n.clientHeight,
              w = n instanceof Document ? window.scrollY : n.scrollTop,
              L = d.value.getBoundingClientRect().top + w,
              g = f.value.height,
              $ = L + (g - x) / 2,
              C = ee((w - $) * v.value),
              N = Math.max(1, (v.value * (x - g) + g) / g);
            o.style.setProperty("transform", `translateY(${C}px) scale(${N})`);
          })));
      }
      return z(() => u(T, { class: ["v-parallax", { "v-parallax--active": i.value }, e.class], style: e.style, ref: t, cover: !0, onLoadstart: a, onLoad: a }, y)), {};
    },
  }),
  oe = {
    name: "ItemList",
    components: {},
    props: { contentKey: { type: String, required: !0, default: "" }, childWidth: { type: String, required: !0, default: "w-100" } },
    mounted() {},
    data() {
      return { content: q[this.contentKey] };
    },
    methods: {
      unquote(e) {
        return (e.startsWith('"') && e.endsWith('"')) || (e.startsWith("'") && e.endsWith("'")) ? e.slice(1, -1) : e;
      },
    },
  },
  se = { class: "w-100 d-flex flex-column justify-center align-center" },
  re = { key: 0, style: { "font-size": "40px" }, class: "mb-8 w-75" },
  ae = { key: 1, style: { "font-size": "20px" }, class: "mb-4 w-75" },
  le = { key: 4, style: { "font-size": "20px" }, class: "mb-4 w-25" },
  ce = { key: 5, class: "mb-16" };
function ie(e, s, y, d, i, m) {
  const f = Y("center"),
    p = ue;
  return (
    r(),
    l("div", se, [
      (r(!0),
      l(
        O,
        null,
        j(
          i.content,
          (t) => (
            r(),
            l(
              "div",
              { key: t, class: A(`${y.childWidth} d-flex flex-column justify-center align-center`), style: b(`background-color:${t.Background}; color:${t.Foreground};`) },
              [
                t.Type == "title" ? (r(), l("div", re, [u(f, null, { default: E(() => [G(S(m.unquote(t.Section)), 1)]), _: 2 }, 1024)])) : c("", !0),
                t.Type == "normal" ? (r(), l("div", ae, S(m.unquote(t.Section)), 1)) : c("", !0),
                t.Type == "bg-image" ? (r(), l("div", { key: 2, style: b(`background-image: url(/img/${t.Background}); background-size: cover; background-position: center; background-repeat: no-repeat;`) }, [u(p, { contentKey: t.Section, childWidth: "w-75 rounded" }, null, 8, ["contentKey"])], 4)) : c("", !0),
                t.Type == "bg-parallax" ? (r(), J(ne, { key: 3, src: `/img/${t.Background}`, class: "align-center" }, { default: E(() => [u(p, { contentKey: t.Section, childWidth: "w-75 rounded" }, null, 8, ["contentKey"])]), _: 2 }, 1032, ["src"])) : c("", !0),
                t.Type == "picture" ? (r(), l("div", le, [u(T, { src: `/img/${t.Section}` }, null, 8, ["src"])])) : c("", !0),
                t.Type == "space" ? (r(), l("div", ce)) : c("", !0),
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
const ue = B(oe, [["render", ie]]);
export { ue as i };
