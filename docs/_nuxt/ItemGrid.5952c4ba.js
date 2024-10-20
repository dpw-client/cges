import { m as x, a as S, b as ne, c as le, V as N, s as B } from "./intersectionObserver.7bd1d6c8.js";
import { _ as se } from "./_plugin-vue_export-helper.c27b6911.js";
import { c as P, m as F, V as A, a as I, b as ie, d as de, e as re, f as ce, g as oe, h as ue, i as ve, j as me, k as ye, R as fe, u as pe, l as ke, n as ge, o as he, p as be, q as _e, r as Ce, s as Ve, t as Ae, L as Ie, v as xe, w as Se, x as Pe, y as Le, z as Te } from "./VList.d24b90af.js";
import { H as L, N as we, b as a, G as j, O as _, P as Be, Q as Re, C as R, R as De, S as Ne, o as s, c as o, w as r, F as C, E as V, q as b, t as y, M as k, a as m, d as D, T as Fe, L as je } from "./entry.fd2562e0.js";
const ze = L()({
    name: "VCardActions",
    props: x(),
    setup(e, i) {
      let { slots: n } = i;
      return (
        we({ VBtn: { slim: !0, variant: "text" } }),
        S(() => {
          var t;
          return a("div", { class: ["v-card-actions", e.class], style: e.style }, [(t = n.default) == null ? void 0 : t.call(n)]);
        }),
        {}
      );
    },
  }),
  z = P("v-card-subtitle"),
  E = P("v-card-title"),
  Ee = j({ appendAvatar: String, appendIcon: _, prependAvatar: String, prependIcon: _, subtitle: [String, Number], title: [String, Number], ...x(), ...F() }, "VCardItem"),
  U = L()({
    name: "VCardItem",
    props: Ee(),
    setup(e, i) {
      let { slots: n } = i;
      return (
        S(() => {
          var p;
          const t = !!(e.prependAvatar || e.prependIcon),
            d = !!(t || n.prepend),
            c = !!(e.appendAvatar || e.appendIcon),
            l = !!(c || n.append),
            u = !!(e.title != null || n.title),
            f = !!(e.subtitle != null || n.subtitle);
          return a("div", { class: ["v-card-item", e.class], style: e.style }, [
            d && a("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? a(I, { key: "prepend-defaults", disabled: !t, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : t && a(A, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]),
            a("div", { class: "v-card-item__content" }, [
              u &&
                a(
                  E,
                  { key: "title" },
                  {
                    default: () => {
                      var v;
                      return [((v = n.title) == null ? void 0 : v.call(n)) ?? e.title];
                    },
                  }
                ),
              f &&
                a(
                  z,
                  { key: "subtitle" },
                  {
                    default: () => {
                      var v;
                      return [((v = n.subtitle) == null ? void 0 : v.call(n)) ?? e.subtitle];
                    },
                  }
                ),
              (p = n.default) == null ? void 0 : p.call(n),
            ]),
            l && a("div", { key: "append", class: "v-card-item__append" }, [n.append ? a(I, { key: "append-defaults", disabled: !c, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : c && a(A, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)]),
          ]);
        }),
        {}
      );
    },
  }),
  q = P("v-card-text"),
  Ue = j({ appendAvatar: String, appendIcon: _, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: _, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...ie(), ...x(), ...F(), ...ne(), ...de(), ...re(), ...ce(), ...oe(), ...ue(), ...ve(), ...me(), ...Be(), ...ye({ variant: "elevated" }) }, "VCard"),
  qe = L()({
    name: "VCard",
    directives: { Ripple: fe },
    props: Ue(),
    setup(e, i) {
      let { attrs: n, slots: t } = i;
      const { themeClasses: d } = Re(e),
        { borderClasses: c } = pe(e),
        { colorClasses: l, colorStyles: u, variantClasses: f } = ke(e),
        { densityClasses: p } = ge(e),
        { dimensionStyles: v } = le(e),
        { elevationClasses: M } = he(e),
        { loaderClasses: O } = be(e),
        { locationStyles: H } = _e(e),
        { positionClasses: K } = Ce(e),
        { roundedClasses: G } = Ve(e),
        g = Ae(e, n),
        Q = R(() => e.link !== !1 && g.isLink.value),
        h = R(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
      return (
        S(() => {
          const J = Q.value ? "a" : e.tag,
            W = !!(t.title || e.title != null),
            X = !!(t.subtitle || e.subtitle != null),
            Y = W || X,
            Z = !!(t.append || e.appendAvatar || e.appendIcon),
            $ = !!(t.prepend || e.prependAvatar || e.prependIcon),
            ee = !!(t.image || e.image),
            te = Y || $ || Z,
            ae = !!(t.text || e.text != null);
          return De(
            a(
              J,
              { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": h.value }, d.value, c.value, l.value, p.value, M.value, O.value, K.value, G.value, f.value, e.class], style: [u.value, v.value, H.value, e.style], href: g.href.value, onClick: h.value && g.navigate, tabindex: e.disabled ? -1 : void 0 },
              {
                default: () => {
                  var T;
                  return [
                    ee && a("div", { key: "image", class: "v-card__image" }, [t.image ? a(I, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, t.image) : a(N, { key: "image-img", cover: !0, src: e.image }, null)]),
                    a(Ie, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: t.loader }),
                    te && a(U, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: t.item, prepend: t.prepend, title: t.title, subtitle: t.subtitle, append: t.append }),
                    ae &&
                      a(
                        q,
                        { key: "text" },
                        {
                          default: () => {
                            var w;
                            return [((w = t.text) == null ? void 0 : w.call(t)) ?? e.text];
                          },
                        }
                      ),
                    (T = t.default) == null ? void 0 : T.call(t),
                    t.actions && a(ze, null, { default: t.actions }),
                    xe(h.value, "v-card"),
                  ];
                },
              }
            ),
            [[Ne("ripple"), h.value && e.ripple]]
          );
        }),
        {}
      );
    },
  }),
  Me = {
    props: { contentKey: { type: String, required: !0, default: "" } },
    async mounted() {
      console.log("mw", await $fetch("/localization.json"));
      for (const e of B["Card Types"]) this.cardTypes[e.type] = e.color;
      (this.all = B[this.contentKey]), (this.content = this.all), (this.types = [...new Set(this.content.map((e) => e.type.trim()))]);
    },
    data() {
      return { cardTypes: {}, types: [], all: [], content: [], filter: "All" };
    },
    methods: {
      parseURLs(e) {
        return e.split(" ").filter((i) => i != "");
      },
      openURL(e) {
        window.open(e, "_blank");
      },
      filterBy(e) {
        console.log("here"), (this.filter = e), e == "All" ? (this.content = this.all) : (this.content = this.all.filter((i) => i.type == e));
      },
    },
  },
  Oe = { class: "d-flex ga-4 ma-4" },
  He = { key: 0, class: "w-25", style: { "min-width": "200px" } },
  Ke = m("div", null, "Filter by:", -1),
  Ge = { class: "d-flex flex-wrap ga-6 justify-left pa-4" },
  Qe = { key: 0 },
  Je = { key: 1 },
  We = ["onClick"];
function Xe(e, i, n, t, d, c) {
  return (
    s(),
    o("div", Oe, [
      d.types.length > 1
        ? (s(),
          o("div", He, [
            Ke,
            a(Te, null, {
              default: r(() => [
                (s(!0),
                o(
                  C,
                  null,
                  V(["All", ...d.types], (l, u) => (s(), b(Le, { key: u, value: l, active: l == d.filter, rounded: "xl", color: "secondary", onClick: () => c.filterBy(l) }, { prepend: r(() => [a(Se, { icon: l.icon }, null, 8, ["icon"])]), default: r(() => [a(Pe, { textContent: y(l) }, null, 8, ["textContent"])]), _: 2 }, 1032, ["value", "active", "onClick"]))),
                  128
                )),
              ]),
              _: 1,
            }),
          ]))
        : k("", !0),
      m("div", null, [
        m("div", null, [m("b", null, y(d.content.length), 1), D(" Found: ")]),
        m("div", Ge, [
          (s(!0),
          o(
            C,
            null,
            V(
              d.content,
              (l) => (
                s(),
                b(
                  qe,
                  { key: l, style: je(`width: 300px; border-top: 2px solid ${d.cardTypes[l.type]};`) },
                  {
                    default: r(() => [
                      a(
                        U,
                        null,
                        Fe({ default: r(() => ["title" in l ? (s(), b(E, { key: 0 }, { default: r(() => [m("b", null, y(l.title), 1)]), _: 2 }, 1024)) : k("", !0), "subtitle" in l ? (s(), b(z, { key: 1 }, { default: r(() => [D(y(l.subtitle), 1)]), _: 2 }, 1024)) : k("", !0)]), _: 2 }, [
                          "abstract_image" in l ? { name: "prepend", fn: r(() => [a(A, { size: "64", rounded: "0" }, { default: r(() => [a(N, { src: `/cges/img/${l.abstract_image}` }, null, 8, ["src"])]), _: 2 }, 1024)]), key: "0" } : void 0,
                        ]),
                        1024
                      ),
                      a(
                        q,
                        null,
                        {
                          default: r(() => [
                            "abstract" in l ? (s(), o("div", Qe, y(l.abstract), 1)) : k("", !0),
                            "attachments" in l
                              ? (s(),
                                o("div", Je, [
                                  (s(!0),
                                  o(
                                    C,
                                    null,
                                    V(c.parseURLs(l.attachments), (u, f) => (s(), o("div", null, [m("div", { class: "pt-3", onClick: (p) => c.openURL(u), style: { "font-weight": "700", cursor: "pointer" } }, " Attachment " + y(f + 1), 9, We)]))),
                                    256
                                  )),
                                ]))
                              : k("", !0),
                          ]),
                          _: 2,
                        },
                        1024
                      ),
                    ]),
                    _: 2,
                  },
                  1032,
                  ["style"]
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
const tt = se(Me, [["render", Xe]]);
export { tt as i };
