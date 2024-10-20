import { E as k, o as n, c as i, b as s, w as l, F as _, G as b, q as d, t as o, H as u, a as r, d as V, I as g, J as x } from "./entry.9bc13c6a.js";
import { u as w, V as C } from "./intersectionObserver.e65ffe5f.js";
import { _ as v } from "./_plugin-vue_export-helper.c27b6911.js";
import { V as S, a as T, b as A, c as I, d as B } from "./VList.6da43dba.js";
import { V as L, a as W, b as q, c as F, d as N } from "./VCard.f0b29b88.js";
const z = {
    props: { contentKey: { type: String, required: !0, default: "" } },
    async mounted() {},
    data() {
      return { cardTypes: {}, filter: "All", fcontent: null };
    },
    computed: {
      ...k(w),
      all() {
        return this.websiteStore.data[this.contentKey] || [];
      },
      content() {
        return this.fcontent || this.all;
      },
      types() {
        return [...new Set(this.all.map((e) => e.Type.trim()))];
      },
    },
    methods: {
      unquote(e) {
        return (e.startsWith('"') && e.endsWith('"')) || (e.startsWith("'") && e.endsWith("'")) ? e.slice(1, -1) : e;
      },
      openURL(e) {
        e.startsWith("http") ? window.open(e, "_blank") : window.open("/pdf/" + e, "_blank");
      },
      filterBy(e) {
        console.log("here"), (this.filter = e), e == "All" ? (this.fcontent = null) : (this.fcontent = this.all.filter((c) => c.Type == e));
      },
    },
  },
  E = { class: "d-flex ga-4 ma-4" },
  K = { key: 0, class: "w-25", style: { "min-width": "200px" } },
  R = r("div", null, "Filter by:", -1),
  U = { class: "d-flex flex-wrap ga-6 justify-left pa-4" },
  j = { key: 0 };
function D(e, c, G, H, f, a) {
  return (
    n(),
    i("div", E, [
      a.types.length > 1
        ? (n(),
          i("div", K, [
            R,
            s(I, null, {
              default: l(() => [
                (n(!0),
                i(
                  _,
                  null,
                  b(["All", ...a.types], (t, p) => {
                    var m, h, y;
                    return n(), d(A, { key: p, value: t, active: t == f.filter, rounded: "xl", color: ((y = (h = (m = e.site) == null ? void 0 : m.AppColors) == null ? void 0 : h[0]) == null ? void 0 : y.Primary) ?? "#b1b7c1", onClick: () => a.filterBy(t) }, { prepend: l(() => [s(S, { icon: t.icon }, null, 8, ["icon"])]), default: l(() => [s(T, { textContent: o(t) }, null, 8, ["textContent"])]), _: 2 }, 1032, ["value", "active", "color", "onClick"]);
                  }),
                  128
                )),
              ]),
              _: 1,
            }),
          ]))
        : u("", !0),
      r("div", null, [
        r("div", null, [r("b", null, o(a.content.length), 1), V(" Found: ")]),
        r("div", U, [
          (n(!0),
          i(
            _,
            null,
            b(
              a.content,
              (t) => (
                n(),
                d(
                  N,
                  { key: t, style: x(`width: 300px; border-top: 2px solid ${f.cardTypes[t.Type]};`), onClick: (p) => a.openURL(t.Attachments) },
                  {
                    default: l(() => [
                      s(
                        q,
                        null,
                        g({ default: l(() => ["Title" in t ? (n(), d(L, { key: 0, style: { "text-wrap": "wrap" } }, { default: l(() => [r("b", null, o(a.unquote(t.Title)), 1)]), _: 2 }, 1024)) : u("", !0), "Subtitle" in t ? (n(), d(W, { key: 1 }, { default: l(() => [V(o(a.unquote(t.Subtitle)), 1)]), _: 2 }, 1024)) : u("", !0)]), _: 2 }, [
                          "Image" in t ? { name: "prepend", fn: l(() => [s(B, { size: "64", rounded: "0" }, { default: l(() => [s(C, { src: `/cges/img/${t.Image}` }, null, 8, ["src"])]), _: 2 }, 1024)]), key: "0" } : void 0,
                        ]),
                        1024
                      ),
                      s(F, null, { default: l(() => ["Abstract" in t ? (n(), i("div", j, o(t.Abstract), 1)) : u("", !0)]), _: 2 }, 1024),
                    ]),
                    _: 2,
                  },
                  1032,
                  ["style", "onClick"]
                )
              )
            ),
            128
          )),
        ]),
      ]),
    ])
  );
}
const X = v(z, [["render", D]]);
export { X as i };
