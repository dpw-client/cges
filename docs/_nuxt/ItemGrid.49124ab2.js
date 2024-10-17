import { E as h, o as s, c as i, b as l, w as a, F as p, H as f, q as d, t as o, I as u, a as r, d as m, J as y, K as _ } from "./entry.1b72e688.js";
import { u as b, V } from "./intersectionObserver.8ee894a8.js";
import { V as g, a as k } from "./index.c0ea2233.js";
import { V as w, a as v, b as C } from "./VList.9a9b813e.js";
import { V as S, a as I, b as B, c as L, d as T } from "./VCard.78a852ff.js";
const W = { class: "d-flex ga-4 ma-4" },
  q = { key: 0, class: "w-25", style: { "min-width": "200px" } },
  x = r("div", null, "Filter by:", -1),
  A = { class: "d-flex flex-wrap ga-6 justify-left pa-4" },
  F = { key: 0 },
  N = {
    props: { contentKey: { type: String, required: !0, default: "" } },
    async mounted() {},
    data() {
      return { cardTypes: {}, filter: "All", fcontent: null };
    },
    computed: {
      ...h(b),
      all() {
        return this.websiteStore.data[this.contentKey] || [];
      },
      content() {
        return this.fcontent || this.all;
      },
      types() {
        return [...new Set(this.all.map((e) => e.type.trim()))];
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
        console.log("here"), (this.filter = e), e == "All" ? (this.fcontent = null) : (this.fcontent = this.all.filter((n) => n.type == e));
      },
    },
  },
  K = Object.assign(N, {
    __name: "ItemGrid",
    setup(e) {
      return (n, $) => (
        s(),
        i("div", W, [
          n.types.length > 1
            ? (s(),
              i("div", q, [
                x,
                l(C, null, {
                  default: a(() => [
                    (s(!0),
                    i(
                      p,
                      null,
                      f(["All", ...n.types], (t, c) => (s(), d(v, { key: c, value: t, active: t == n.filter, rounded: "xl", color: "secondary", onClick: () => n.filterBy(t) }, { prepend: a(() => [l(g, { icon: t.icon }, null, 8, ["icon"])]), default: a(() => [l(w, { textContent: o(t) }, null, 8, ["textContent"])]), _: 2 }, 1032, ["value", "active", "onClick"]))),
                      128
                    )),
                  ]),
                  _: 1,
                }),
              ]))
            : u("", !0),
          r("div", null, [
            r("div", null, [r("b", null, o(n.content.length), 1), m(" Found: ")]),
            r("div", A, [
              (s(!0),
              i(
                p,
                null,
                f(
                  n.content,
                  (t) => (
                    s(),
                    d(
                      T,
                      { key: t, style: _(`width: 300px; border-top: 2px solid ${n.cardTypes[t.type]};`), onClick: (c) => n.openURL(t.attachments) },
                      {
                        default: a(() => [
                          l(
                            B,
                            null,
                            y({ default: a(() => ["title" in t ? (s(), d(S, { key: 0, style: { "text-wrap": "wrap" } }, { default: a(() => [r("b", null, o(n.unquote(t.title)), 1)]), _: 2 }, 1024)) : u("", !0), "subtitle" in t ? (s(), d(I, { key: 1 }, { default: a(() => [m(o(n.unquote(t.subtitle)), 1)]), _: 2 }, 1024)) : u("", !0)]), _: 2 }, [
                              "abstract_image" in t ? { name: "prepend", fn: a(() => [l(k, { size: "64", rounded: "0" }, { default: a(() => [l(V, { src: `/cges/img/${t.abstract_image}` }, null, 8, ["src"])]), _: 2 }, 1024)]), key: "0" } : void 0,
                            ]),
                            1024
                          ),
                          l(L, null, { default: a(() => ["abstract" in t ? (s(), i("div", F, o(t.abstract), 1)) : u("", !0)]), _: 2 }, 1024),
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
    },
  }),
  D = K;
export { D as i };
