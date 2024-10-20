import { E as m, o as a, c as r, b as s, w as l, F as p, H as f, q as d, t as o, I as u, a as i, d as h, J as y, K as _ } from "./entry.fbaa6551.js";
import { u as V, V as b } from "./intersectionObserver.a2d23565.js";
import { V as g, a as k, b as w, c as v, d as C } from "./VList.82e15581.js";
import { V as S, a as T, b as I, c as A, d as B } from "./VCard.9d358926.js";
const L = { class: "d-flex ga-4 ma-4" },
  W = { key: 0, class: "w-25", style: { "min-width": "200px" } },
  q = i("div", null, "Filter by:", -1),
  x = { class: "d-flex flex-wrap ga-6 justify-left pa-4" },
  F = { key: 0 },
  N = {
    props: { contentKey: { type: String, required: !0, default: "" } },
    async mounted() {},
    data() {
      return { cardTypes: {}, filter: "All", fcontent: null };
    },
    computed: {
      ...m(V),
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
        console.log("here"), (this.filter = e), e == "All" ? (this.fcontent = null) : (this.fcontent = this.all.filter((n) => n.Type == e));
      },
    },
  },
  K = Object.assign(N, {
    __name: "ItemGrid",
    setup(e) {
      return (n, $) => (
        a(),
        r("div", L, [
          n.types.length > 1
            ? (a(),
              r("div", W, [
                q,
                s(v, null, {
                  default: l(() => [
                    (a(!0),
                    r(
                      p,
                      null,
                      f(["All", ...n.types], (t, c) => (a(), d(w, { key: c, value: t, active: t == n.filter, rounded: "xl", color: "secondary", onClick: () => n.filterBy(t) }, { prepend: l(() => [s(g, { icon: t.icon }, null, 8, ["icon"])]), default: l(() => [s(k, { textContent: o(t) }, null, 8, ["textContent"])]), _: 2 }, 1032, ["value", "active", "onClick"]))),
                      128
                    )),
                  ]),
                  _: 1,
                }),
              ]))
            : u("", !0),
          i("div", null, [
            i("div", null, [i("b", null, o(n.content.length), 1), h(" Found: ")]),
            i("div", x, [
              (a(!0),
              r(
                p,
                null,
                f(
                  n.content,
                  (t) => (
                    a(),
                    d(
                      B,
                      { key: t, style: _(`width: 300px; border-top: 2px solid ${n.cardTypes[t.Type]};`), onClick: (c) => n.openURL(t.Attachments) },
                      {
                        default: l(() => [
                          s(
                            I,
                            null,
                            y({ default: l(() => ["Title" in t ? (a(), d(S, { key: 0, style: { "text-wrap": "wrap" } }, { default: l(() => [i("b", null, o(n.unquote(t.Title)), 1)]), _: 2 }, 1024)) : u("", !0), "Subtitle" in t ? (a(), d(T, { key: 1 }, { default: l(() => [h(o(n.unquote(t.Subtitle)), 1)]), _: 2 }, 1024)) : u("", !0)]), _: 2 }, [
                              "Image" in t ? { name: "prepend", fn: l(() => [s(C, { size: "64", rounded: "0" }, { default: l(() => [s(b, { src: `/cges/img/${t.Image}` }, null, 8, ["src"])]), _: 2 }, 1024)]), key: "0" } : void 0,
                            ]),
                            1024
                          ),
                          s(A, null, { default: l(() => ["Abstract" in t ? (a(), r("div", F, o(t.Abstract), 1)) : u("", !0)]), _: 2 }, 1024),
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
  U = K;
export { U as i };
