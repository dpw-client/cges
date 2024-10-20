import { m as O, a as F, b as Se, c as Ce, s as Ne } from "./intersectionObserver.aab72029.js";
import { _ as mt } from "./_plugin-vue_export-helper.c27b6911.js";
import { m as X, a as se, b as gt, c as D, d as re, u as ke, e as oe, f as ue, g as ht, V as le, h as Ae, i as G, j as Ve, k as we, l as bt, n as pt, o as St, p as ze, R as Re, q as Ie, r as _e, s as Ct, t as kt, v as At, w as He, L as Vt, x as wt, y as It, z as _t } from "./VDivider.2955575d.js";
import { H as A, N as Pt, O as qe, x as Pe, G as P, P as _, Q as de, R as ce, b as u, S as Ke, C as g, T as xe, U as Ue, V as xt, W as We, u as ve, X as j, y as fe, Y as E, r as M, Z as $e, j as Je, _ as Lt, $ as Bt, z as Tt, a0 as Ot, a1 as Mt, a2 as C, a3 as Ft, a4 as Ge, h as Nt, a5 as $t, F as ie, a6 as je, a7 as Gt, a8 as jt, a9 as K, aa as Dt, o as T, c as ne, w as L, E as De, q as U, t as W, M as ae, a as $, d as he, ab as Et, L as zt } from "./entry.ccd7e3b1.js";
import { V as Le, M as Rt } from "./VImg.09de5684.js";
function Y(e) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div",
    t = arguments.length > 2 ? arguments[2] : void 0;
  return A()({
    name: t ?? Pt(qe(e.replace(/__/g, "-"))),
    props: { tag: { type: String, default: r }, ...O() },
    setup(n, i) {
      let { slots: l } = i;
      return () => {
        var a;
        return Pe(n.tag, { class: [e, n.class], style: n.style }, (a = l.default) == null ? void 0 : a.call(l));
      };
    },
  });
}
const Ht = P({ start: Boolean, end: Boolean, icon: _, image: String, text: String, ...O(), ...X(), ...se(), ...gt(), ...D(), ...de(), ...re({ variant: "flat" }) }, "VAvatar"),
  J = A()({
    name: "VAvatar",
    props: Ht(),
    setup(e, r) {
      let { slots: t } = r;
      const { themeClasses: n } = ce(e),
        { colorClasses: i, colorStyles: l, variantClasses: a } = ke(e),
        { densityClasses: s } = oe(e),
        { roundedClasses: m } = ue(e),
        { sizeClasses: y, sizeStyles: f } = ht(e);
      return (
        F(() =>
          u(
            e.tag,
            { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, n.value, i.value, s.value, m.value, y.value, a.value, e.class], style: [l.value, f.value, e.style] },
            {
              default: () => {
                var o;
                return [e.image ? u(Le, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? u(le, { key: "icon", icon: e.icon }, null) : ((o = t.default) == null ? void 0 : o.call(t)) ?? e.text, Ae(!1, "v-avatar")];
              },
            }
          )
        ),
        {}
      );
    },
  });
const qt = A()({
    name: "VCardActions",
    props: O(),
    setup(e, r) {
      let { slots: t } = r;
      return (
        Ke({ VBtn: { slim: !0, variant: "text" } }),
        F(() => {
          var n;
          return u("div", { class: ["v-card-actions", e.class], style: e.style }, [(n = t.default) == null ? void 0 : n.call(t)]);
        }),
        {}
      );
    },
  }),
  Qe = Y("v-card-subtitle"),
  Xe = Y("v-card-title"),
  Kt = P({ appendAvatar: String, appendIcon: _, prependAvatar: String, prependIcon: _, subtitle: [String, Number], title: [String, Number], ...O(), ...X() }, "VCardItem"),
  Ye = A()({
    name: "VCardItem",
    props: Kt(),
    setup(e, r) {
      let { slots: t } = r;
      return (
        F(() => {
          var y;
          const n = !!(e.prependAvatar || e.prependIcon),
            i = !!(n || t.prepend),
            l = !!(e.appendAvatar || e.appendIcon),
            a = !!(l || t.append),
            s = !!(e.title != null || t.title),
            m = !!(e.subtitle != null || t.subtitle);
          return u("div", { class: ["v-card-item", e.class], style: e.style }, [
            i && u("div", { key: "prepend", class: "v-card-item__prepend" }, [t.prepend ? u(G, { key: "prepend-defaults", disabled: !n, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, t.prepend) : n && u(J, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]),
            u("div", { class: "v-card-item__content" }, [
              s &&
                u(
                  Xe,
                  { key: "title" },
                  {
                    default: () => {
                      var f;
                      return [((f = t.title) == null ? void 0 : f.call(t)) ?? e.title];
                    },
                  }
                ),
              m &&
                u(
                  Qe,
                  { key: "subtitle" },
                  {
                    default: () => {
                      var f;
                      return [((f = t.subtitle) == null ? void 0 : f.call(t)) ?? e.subtitle];
                    },
                  }
                ),
              (y = t.default) == null ? void 0 : y.call(t),
            ]),
            a && u("div", { key: "append", class: "v-card-item__append" }, [t.append ? u(G, { key: "append-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, t.append) : l && u(J, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)]),
          ]);
        }),
        {}
      );
    },
  }),
  Ze = Y("v-card-text"),
  Ut = P({ appendAvatar: String, appendIcon: _, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: _, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...Ve(), ...O(), ...X(), ...Se(), ...we(), ...bt(), ...pt(), ...St(), ...se(), ...ze(), ...D(), ...de(), ...re({ variant: "elevated" }) }, "VCard"),
  Wt = A()({
    name: "VCard",
    directives: { Ripple: Re },
    props: Ut(),
    setup(e, r) {
      let { attrs: t, slots: n } = r;
      const { themeClasses: i } = ce(e),
        { borderClasses: l } = Ie(e),
        { colorClasses: a, colorStyles: s, variantClasses: m } = ke(e),
        { densityClasses: y } = oe(e),
        { dimensionStyles: f } = Ce(e),
        { elevationClasses: o } = _e(e),
        { loaderClasses: d } = Ct(e),
        { locationStyles: v } = kt(e),
        { positionClasses: c } = At(e),
        { roundedClasses: h } = ue(e),
        S = He(e, t),
        V = g(() => e.link !== !1 && S.isLink.value),
        w = g(() => !e.disabled && e.link !== !1 && (e.link || S.isClickable.value));
      return (
        F(() => {
          const B = V.value ? "a" : e.tag,
            z = !!(n.title || e.title != null),
            R = !!(n.subtitle || e.subtitle != null),
            H = z || R,
            q = !!(n.append || e.appendAvatar || e.appendIcon),
            x = !!(n.prepend || e.prependAvatar || e.prependIcon),
            p = !!(n.image || e.image),
            N = H || x || q,
            ye = !!(n.text || e.text != null);
          return xe(
            u(
              B,
              { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": w.value }, i.value, l.value, a.value, y.value, o.value, d.value, c.value, h.value, m.value, e.class], style: [s.value, f.value, v.value, e.style], href: S.href.value, onClick: w.value && S.navigate, tabindex: e.disabled ? -1 : void 0 },
              {
                default: () => {
                  var Z;
                  return [
                    p && u("div", { key: "image", class: "v-card__image" }, [n.image ? u(G, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, n.image) : u(Le, { key: "image-img", cover: !0, src: e.image }, null)]),
                    u(Vt, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: n.loader }),
                    N && u(Ye, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: n.item, prepend: n.prepend, title: n.title, subtitle: n.subtitle, append: n.append }),
                    ye &&
                      u(
                        Ze,
                        { key: "text" },
                        {
                          default: () => {
                            var ee;
                            return [((ee = n.text) == null ? void 0 : ee.call(n)) ?? e.text];
                          },
                        }
                      ),
                    (Z = n.default) == null ? void 0 : Z.call(n),
                    n.actions && u(qt, null, { default: n.actions }),
                    Ae(w.value, "v-card"),
                  ];
                },
              }
            ),
            [[Ue("ripple"), w.value && e.ripple]]
          );
        }),
        {}
      );
    },
  });
const Jt = P({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function k(e, r, t) {
  return A()({
    name: e,
    props: Jt({ mode: t, origin: r }),
    setup(n, i) {
      let { slots: l } = i;
      const a = {
        onBeforeEnter(s) {
          n.origin && (s.style.transformOrigin = n.origin);
        },
        onLeave(s) {
          if (n.leaveAbsolute) {
            const { offsetTop: m, offsetLeft: y, offsetWidth: f, offsetHeight: o } = s;
            (s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }), (s.style.position = "absolute"), (s.style.top = `${m}px`), (s.style.left = `${y}px`), (s.style.width = `${f}px`), (s.style.height = `${o}px`);
          }
          n.hideOnLeave && s.style.setProperty("display", "none", "important");
        },
        onAfterLeave(s) {
          if (n.leaveAbsolute && s != null && s._transitionInitialStyles) {
            const { position: m, top: y, left: f, width: o, height: d } = s._transitionInitialStyles;
            delete s._transitionInitialStyles, (s.style.position = m || ""), (s.style.top = y || ""), (s.style.left = f || ""), (s.style.width = o || ""), (s.style.height = d || "");
          }
        },
      };
      return () => {
        const s = n.group ? xt : We;
        return Pe(s, { name: n.disabled ? "" : e, css: !n.disabled, ...(n.group ? void 0 : { mode: n.mode }), ...(n.disabled ? {} : a) }, l.default);
      };
    },
  });
}
function et(e, r) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return A()({
    name: e,
    props: { mode: { type: String, default: t }, disabled: Boolean },
    setup(n, i) {
      let { slots: l } = i;
      return () => Pe(We, { name: n.disabled ? "" : e, css: !n.disabled, ...(n.disabled ? {} : r) }, l.default);
    },
  });
}
function tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height",
    n = qe(`offset-${t}`);
  return {
    onBeforeEnter(a) {
      (a._parent = a.parentNode), (a._initialStyle = { transition: a.style.transition, overflow: a.style.overflow, [t]: a.style[t] });
    },
    onEnter(a) {
      const s = a._initialStyle;
      a.style.setProperty("transition", "none", "important"), (a.style.overflow = "hidden");
      const m = `${a[n]}px`;
      (a.style[t] = "0"),
        a.offsetHeight,
        (a.style.transition = s.transition),
        e && a._parent && a._parent.classList.add(e),
        requestAnimationFrame(() => {
          a.style[t] = m;
        });
    },
    onAfterEnter: l,
    onEnterCancelled: l,
    onLeave(a) {
      (a._initialStyle = { transition: "", overflow: a.style.overflow, [t]: a.style[t] }), (a.style.overflow = "hidden"), (a.style[t] = `${a[n]}px`), a.offsetHeight, requestAnimationFrame(() => (a.style[t] = "0"));
    },
    onAfterLeave: i,
    onLeaveCancelled: i,
  };
  function i(a) {
    e && a._parent && a._parent.classList.remove(e), l(a);
  }
  function l(a) {
    const s = a._initialStyle[t];
    (a.style.overflow = a._initialStyle.overflow), s != null && (a.style[t] = s), delete a._initialStyle;
  }
}
k("fab-transition", "center center", "out-in");
k("dialog-bottom-transition");
k("dialog-top-transition");
k("fade-transition");
k("scale-transition");
k("scroll-x-transition");
k("scroll-x-reverse-transition");
k("scroll-y-transition");
k("scroll-y-reverse-transition");
k("slide-x-transition");
k("slide-x-reverse-transition");
k("slide-y-transition");
k("slide-y-reverse-transition");
const Qt = et("expand-transition", tt());
et("expand-x-transition", tt("", !0));
const be = Symbol.for("vuetify:list");
function nt() {
  const e = ve(be, { hasPrepend: j(!1), updateHasPrepend: () => null }),
    r = {
      hasPrepend: j(!1),
      updateHasPrepend: (t) => {
        t && (r.hasPrepend.value = t);
      },
    };
  return fe(be, r), e;
}
function at() {
  return ve(be, null);
}
const Xt = {
    open: (e) => {
      let { id: r, value: t, opened: n, parents: i } = e;
      if (t) {
        const l = new Set();
        l.add(r);
        let a = i.get(r);
        for (; a != null; ) l.add(a), (a = i.get(a));
        return l;
      } else return n.delete(r), n;
    },
    select: () => null,
  },
  lt = {
    open: (e) => {
      let { id: r, value: t, opened: n, parents: i } = e;
      if (t) {
        let l = i.get(r);
        for (n.add(r); l != null && l !== r; ) n.add(l), (l = i.get(l));
        return n;
      } else n.delete(r);
      return n;
    },
    select: () => null,
  },
  Yt = {
    open: lt.open,
    select: (e) => {
      let { id: r, value: t, opened: n, parents: i } = e;
      if (!t) return n;
      const l = [];
      let a = i.get(r);
      for (; a != null; ) l.push(a), (a = i.get(a));
      return new Set(l);
    },
  },
  Be = (e) => {
    const r = {
      select: (t) => {
        let { id: n, value: i, selected: l } = t;
        if (((n = E(n)), e && !i)) {
          const a = Array.from(l.entries()).reduce((s, m) => {
            let [y, f] = m;
            return f === "on" ? [...s, y] : s;
          }, []);
          if (a.length === 1 && a[0] === n) return l;
        }
        return l.set(n, i ? "on" : "off"), l;
      },
      in: (t, n, i) => {
        let l = new Map();
        for (const a of t || []) l = r.select({ id: a, value: !0, selected: new Map(l), children: n, parents: i });
        return l;
      },
      out: (t) => {
        const n = [];
        for (const [i, l] of t.entries()) l === "on" && n.push(i);
        return n;
      },
    };
    return r;
  },
  it = (e) => {
    const r = Be(e);
    return {
      select: (n) => {
        let { selected: i, id: l, ...a } = n;
        l = E(l);
        const s = i.has(l) ? new Map([[l, i.get(l)]]) : new Map();
        return r.select({ ...a, id: l, selected: s });
      },
      in: (n, i, l) => {
        let a = new Map();
        return n != null && n.length && (a = r.in(n.slice(0, 1), i, l)), a;
      },
      out: (n, i, l) => r.out(n, i, l),
    };
  },
  Zt = (e) => {
    const r = Be(e);
    return {
      select: (n) => {
        let { id: i, selected: l, children: a, ...s } = n;
        return (i = E(i)), a.has(i) ? l : r.select({ id: i, selected: l, children: a, ...s });
      },
      in: r.in,
      out: r.out,
    };
  },
  en = (e) => {
    const r = it(e);
    return {
      select: (n) => {
        let { id: i, selected: l, children: a, ...s } = n;
        return (i = E(i)), a.has(i) ? l : r.select({ id: i, selected: l, children: a, ...s });
      },
      in: r.in,
      out: r.out,
    };
  },
  tn = (e) => {
    const r = {
      select: (t) => {
        let { id: n, value: i, selected: l, children: a, parents: s } = t;
        n = E(n);
        const m = new Map(l),
          y = [n];
        for (; y.length; ) {
          const o = y.shift();
          l.set(o, i ? "on" : "off"), a.has(o) && y.push(...a.get(o));
        }
        let f = s.get(n);
        for (; f; ) {
          const o = a.get(f),
            d = o.every((c) => l.get(c) === "on"),
            v = o.every((c) => !l.has(c) || l.get(c) === "off");
          l.set(f, d ? "on" : v ? "off" : "indeterminate"), (f = s.get(f));
        }
        return e &&
          !i &&
          Array.from(l.entries()).reduce((d, v) => {
            let [c, h] = v;
            return h === "on" ? [...d, c] : d;
          }, []).length === 0
          ? m
          : l;
      },
      in: (t, n, i) => {
        let l = new Map();
        for (const a of t || []) l = r.select({ id: a, value: !0, selected: new Map(l), children: n, parents: i });
        return l;
      },
      out: (t, n) => {
        const i = [];
        for (const [l, a] of t.entries()) a === "on" && !n.has(l) && i.push(l);
        return i;
      },
    };
    return r;
  },
  Q = Symbol.for("vuetify:nested"),
  st = { id: j(), root: { register: () => null, unregister: () => null, parents: M(new Map()), children: M(new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: M(new Set()), selected: M(new Map()), selectedValues: M([]) } },
  nn = P({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"),
  an = (e) => {
    let r = !1;
    const t = M(new Map()),
      n = M(new Map()),
      i = $e(
        e,
        "opened",
        e.opened,
        (o) => new Set(o),
        (o) => [...o.values()]
      ),
      l = g(() => {
        if (typeof e.selectStrategy == "object") return e.selectStrategy;
        switch (e.selectStrategy) {
          case "single-leaf":
            return en(e.mandatory);
          case "leaf":
            return Zt(e.mandatory);
          case "independent":
            return Be(e.mandatory);
          case "single-independent":
            return it(e.mandatory);
          case "classic":
          default:
            return tn(e.mandatory);
        }
      }),
      a = g(() => {
        if (typeof e.openStrategy == "object") return e.openStrategy;
        switch (e.openStrategy) {
          case "list":
            return Yt;
          case "single":
            return Xt;
          case "multiple":
          default:
            return lt;
        }
      }),
      s = $e(
        e,
        "selected",
        e.selected,
        (o) => l.value.in(o, t.value, n.value),
        (o) => l.value.out(o, t.value, n.value)
      );
    Je(() => {
      r = !0;
    });
    function m(o) {
      const d = [];
      let v = o;
      for (; v != null; ) d.unshift(v), (v = n.value.get(v));
      return d;
    }
    const y = Lt("nested"),
      f = {
        id: j(),
        root: {
          opened: i,
          selected: s,
          selectedValues: g(() => {
            const o = [];
            for (const [d, v] of s.value.entries()) v === "on" && o.push(d);
            return o;
          }),
          register: (o, d, v) => {
            d && o !== d && n.value.set(o, d), v && t.value.set(o, []), d != null && t.value.set(d, [...(t.value.get(d) || []), o]);
          },
          unregister: (o) => {
            if (r) return;
            t.value.delete(o);
            const d = n.value.get(o);
            if (d) {
              const v = t.value.get(d) ?? [];
              t.value.set(
                d,
                v.filter((c) => c !== o)
              );
            }
            n.value.delete(o), i.value.delete(o);
          },
          open: (o, d, v) => {
            y.emit("click:open", { id: o, value: d, path: m(o), event: v });
            const c = a.value.open({ id: o, value: d, opened: new Set(i.value), children: t.value, parents: n.value, event: v });
            c && (i.value = c);
          },
          openOnSelect: (o, d, v) => {
            const c = a.value.select({ id: o, value: d, selected: new Map(s.value), opened: new Set(i.value), children: t.value, parents: n.value, event: v });
            c && (i.value = c);
          },
          select: (o, d, v) => {
            y.emit("click:select", { id: o, value: d, path: m(o), event: v });
            const c = l.value.select({ id: o, value: d, selected: new Map(s.value), children: t.value, parents: n.value, event: v });
            c && (s.value = c), f.root.openOnSelect(o, d, v);
          },
          children: t,
          parents: n,
        },
      };
    return fe(Q, f), f.root;
  },
  rt = (e, r) => {
    const t = ve(Q, st),
      n = Symbol(Bt()),
      i = g(() => (e.value !== void 0 ? e.value : n)),
      l = {
        ...t,
        id: i,
        open: (a, s) => t.root.open(i.value, a, s),
        openOnSelect: (a, s) => t.root.openOnSelect(i.value, a, s),
        isOpen: g(() => t.root.opened.value.has(i.value)),
        parent: g(() => t.root.parents.value.get(i.value)),
        select: (a, s) => t.root.select(i.value, a, s),
        isSelected: g(() => t.root.selected.value.get(E(i.value)) === "on"),
        isIndeterminate: g(() => t.root.selected.value.get(i.value) === "indeterminate"),
        isLeaf: g(() => !t.root.children.value.get(i.value)),
        isGroupActivator: t.isGroupActivator,
      };
    return (
      !t.isGroupActivator && t.root.register(i.value, t.id.value, r),
      Je(() => {
        !t.isGroupActivator && t.root.unregister(i.value);
      }),
      r && fe(Q, l),
      l
    );
  },
  ln = () => {
    const e = ve(Q, st);
    fe(Q, { ...e, isGroupActivator: !0 });
  };
function sn() {
  const e = j(!1);
  return (
    Tt(() => {
      window.requestAnimationFrame(() => {
        e.value = !0;
      });
    }),
    { ssrBootStyles: g(() => (e.value ? void 0 : { transition: "none !important" })), isBooted: Ot(e) }
  );
}
const rn = Mt({
    name: "VListGroupActivator",
    setup(e, r) {
      let { slots: t } = r;
      return (
        ln(),
        () => {
          var n;
          return (n = t.default) == null ? void 0 : n.call(t);
        }
      );
    },
  }),
  on = P({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: _, default: "$collapse" }, expandIcon: { type: _, default: "$expand" }, prependIcon: _, appendIcon: _, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...O(), ...D() }, "VListGroup"),
  Ee = A()({
    name: "VListGroup",
    props: on(),
    setup(e, r) {
      let { slots: t } = r;
      const { isOpen: n, open: i, id: l } = rt(C(e, "value"), !0),
        a = g(() => `v-list-group--id-${String(l.value)}`),
        s = at(),
        { isBooted: m } = sn();
      function y(v) {
        i(!n.value, v);
      }
      const f = g(() => ({ onClick: y, class: "v-list-group__header", id: a.value })),
        o = g(() => (n.value ? e.collapseIcon : e.expandIcon)),
        d = g(() => ({ VListItem: { active: n.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || (e.subgroup && o.value), appendIcon: e.appendIcon || (!e.subgroup && o.value), title: e.title, value: e.value } }));
      return (
        F(() =>
          u(
            e.tag,
            { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": n.value }, e.class], style: e.style },
            {
              default: () => [
                t.activator && u(G, { defaults: d.value }, { default: () => [u(rn, null, { default: () => [t.activator({ props: f.value, isOpen: n.value })] })] }),
                u(
                  Rt,
                  { transition: { component: Qt }, disabled: !m.value },
                  {
                    default: () => {
                      var v;
                      return [xe(u("div", { class: "v-list-group__items", role: "group", "aria-labelledby": a.value }, [(v = t.default) == null ? void 0 : v.call(t)]), [[Ft, n.value]])];
                    },
                  }
                ),
              ],
            }
          )
        ),
        {}
      );
    },
  });
const un = Y("v-list-item-subtitle"),
  ot = Y("v-list-item-title"),
  dn = P(
    {
      active: { type: Boolean, default: void 0 },
      activeClass: String,
      activeColor: String,
      appendAvatar: String,
      appendIcon: _,
      baseColor: String,
      disabled: Boolean,
      lines: String,
      link: { type: Boolean, default: void 0 },
      nav: Boolean,
      prependAvatar: String,
      prependIcon: _,
      ripple: { type: [Boolean, Object], default: !0 },
      slim: Boolean,
      subtitle: [String, Number],
      title: [String, Number],
      value: null,
      onClick: Ge(),
      onClickOnce: Ge(),
      ...Ve(),
      ...O(),
      ...X(),
      ...Se(),
      ...we(),
      ...se(),
      ...ze(),
      ...D(),
      ...de(),
      ...re({ variant: "text" }),
    },
    "VListItem"
  ),
  pe = A()({
    name: "VListItem",
    directives: { Ripple: Re },
    props: dn(),
    emits: { click: (e) => !0 },
    setup(e, r) {
      let { attrs: t, slots: n, emit: i } = r;
      const l = He(e, t),
        a = g(() => (e.value === void 0 ? l.href.value : e.value)),
        { select: s, isSelected: m, isIndeterminate: y, isGroupActivator: f, root: o, parent: d, openOnSelect: v } = rt(a, !1),
        c = at(),
        h = g(() => {
          var b;
          return e.active !== !1 && (e.active || ((b = l.isActive) == null ? void 0 : b.value) || m.value);
        }),
        S = g(() => e.link !== !1 && l.isLink.value),
        V = g(() => !e.disabled && e.link !== !1 && (e.link || l.isClickable.value || (e.value != null && !!c))),
        w = g(() => e.rounded || e.nav),
        B = g(() => e.color ?? e.activeColor),
        z = g(() => ({ color: h.value ? B.value ?? e.baseColor : e.baseColor, variant: e.variant }));
      Nt(
        () => {
          var b;
          return (b = l.isActive) == null ? void 0 : b.value;
        },
        (b) => {
          b && d.value != null && o.open(d.value, !0), b && v(b);
        },
        { immediate: !0 }
      );
      const { themeClasses: R } = ce(e),
        { borderClasses: H } = Ie(e),
        { colorClasses: q, colorStyles: x, variantClasses: p } = ke(z),
        { densityClasses: N } = oe(e),
        { dimensionStyles: ye } = Ce(e),
        { elevationClasses: Z } = _e(e),
        { roundedClasses: ee } = ue(w),
        ct = g(() => (e.lines ? `v-list-item--${e.lines}-line` : void 0)),
        me = g(() => ({ isActive: h.value, select: s, isSelected: m.value, isIndeterminate: y.value }));
      function Te(b) {
        var te;
        i("click", b), !(f || !V.value) && ((te = l.navigate) == null || te.call(l, b), e.value != null && s(!m.value, b));
      }
      function vt(b) {
        (b.key === "Enter" || b.key === " ") && (b.preventDefault(), Te(b));
      }
      return (
        F(() => {
          const b = S.value ? "a" : e.tag,
            te = n.title || e.title != null,
            ft = n.subtitle || e.subtitle != null,
            Oe = !!(e.appendAvatar || e.appendIcon),
            yt = !!(Oe || n.append),
            Me = !!(e.prependAvatar || e.prependIcon),
            ge = !!(Me || n.prepend);
          return (
            c == null || c.updateHasPrepend(ge),
            e.activeColor && $t("active-color", ["color", "base-color"]),
            xe(
              u(
                b,
                {
                  class: ["v-list-item", { "v-list-item--active": h.value, "v-list-item--disabled": e.disabled, "v-list-item--link": V.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !ge && (c == null ? void 0 : c.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && h.value }, R.value, H.value, q.value, N.value, Z.value, ct.value, ee.value, p.value, e.class],
                  style: [x.value, ye.value, e.style],
                  href: l.href.value,
                  tabindex: V.value ? (c ? -2 : 0) : void 0,
                  onClick: Te,
                  onKeydown: V.value && !S.value && vt,
                },
                {
                  default: () => {
                    var Fe;
                    return [
                      Ae(V.value || h.value, "v-list-item"),
                      ge &&
                        u("div", { key: "prepend", class: "v-list-item__prepend" }, [
                          n.prepend
                            ? u(
                                G,
                                { key: "prepend-defaults", disabled: !Me, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } },
                                {
                                  default: () => {
                                    var I;
                                    return [(I = n.prepend) == null ? void 0 : I.call(n, me.value)];
                                  },
                                }
                              )
                            : u(ie, null, [e.prependAvatar && u(J, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && u(le, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]),
                          u("div", { class: "v-list-item__spacer" }, null),
                        ]),
                      u("div", { class: "v-list-item__content", "data-no-activator": "" }, [
                        te &&
                          u(
                            ot,
                            { key: "title" },
                            {
                              default: () => {
                                var I;
                                return [((I = n.title) == null ? void 0 : I.call(n, { title: e.title })) ?? e.title];
                              },
                            }
                          ),
                        ft &&
                          u(
                            un,
                            { key: "subtitle" },
                            {
                              default: () => {
                                var I;
                                return [((I = n.subtitle) == null ? void 0 : I.call(n, { subtitle: e.subtitle })) ?? e.subtitle];
                              },
                            }
                          ),
                        (Fe = n.default) == null ? void 0 : Fe.call(n, me.value),
                      ]),
                      yt &&
                        u("div", { key: "append", class: "v-list-item__append" }, [
                          n.append
                            ? u(
                                G,
                                { key: "append-defaults", disabled: !Oe, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } },
                                {
                                  default: () => {
                                    var I;
                                    return [(I = n.append) == null ? void 0 : I.call(n, me.value)];
                                  },
                                }
                              )
                            : u(ie, null, [e.appendIcon && u(le, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && u(J, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]),
                          u("div", { class: "v-list-item__spacer" }, null),
                        ]),
                    ];
                  },
                }
              ),
              [[Ue("ripple"), V.value && e.ripple]]
            )
          );
        }),
        {}
      );
    },
  }),
  cn = P({ color: String, inset: Boolean, sticky: Boolean, title: String, ...O(), ...D() }, "VListSubheader"),
  vn = A()({
    name: "VListSubheader",
    props: cn(),
    setup(e, r) {
      let { slots: t } = r;
      const { textColorClasses: n, textColorStyles: i } = wt(C(e, "color"));
      return (
        F(() => {
          const l = !!(t.default || e.title);
          return u(
            e.tag,
            { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, n.value, e.class], style: [{ textColorStyles: i }, e.style] },
            {
              default: () => {
                var a;
                return [l && u("div", { class: "v-list-subheader__text" }, [((a = t.default) == null ? void 0 : a.call(t)) ?? e.title])];
              },
            }
          );
        }),
        {}
      );
    },
  }),
  fn = P({ items: Array, returnObject: Boolean }, "VListChildren"),
  ut = A()({
    name: "VListChildren",
    props: fn(),
    setup(e, r) {
      let { slots: t } = r;
      return (
        nt(),
        () => {
          var n, i;
          return (
            ((n = t.default) == null ? void 0 : n.call(t)) ??
            ((i = e.items) == null
              ? void 0
              : i.map((l) => {
                  var d, v;
                  let { children: a, props: s, type: m, raw: y } = l;
                  if (m === "divider") return ((d = t.divider) == null ? void 0 : d.call(t, { props: s })) ?? u(It, s, null);
                  if (m === "subheader") return ((v = t.subheader) == null ? void 0 : v.call(t, { props: s })) ?? u(vn, s, null);
                  const f = {
                      subtitle: t.subtitle
                        ? (c) => {
                            var h;
                            return (h = t.subtitle) == null ? void 0 : h.call(t, { ...c, item: y });
                          }
                        : void 0,
                      prepend: t.prepend
                        ? (c) => {
                            var h;
                            return (h = t.prepend) == null ? void 0 : h.call(t, { ...c, item: y });
                          }
                        : void 0,
                      append: t.append
                        ? (c) => {
                            var h;
                            return (h = t.append) == null ? void 0 : h.call(t, { ...c, item: y });
                          }
                        : void 0,
                      title: t.title
                        ? (c) => {
                            var h;
                            return (h = t.title) == null ? void 0 : h.call(t, { ...c, item: y });
                          }
                        : void 0,
                    },
                    o = Ee.filterProps(s);
                  return a
                    ? u(Ee, je({ value: s == null ? void 0 : s.value }, o), {
                        activator: (c) => {
                          let { props: h } = c;
                          const S = { ...s, ...h, value: e.returnObject ? y : s.value };
                          return t.header ? t.header({ props: S }) : u(pe, S, f);
                        },
                        default: () => u(ut, { items: a }, t),
                      })
                    : t.item
                    ? t.item({ props: s })
                    : u(pe, je(s, { value: e.returnObject ? y : s.value }), f);
                }))
          );
        }
      );
    },
  }),
  yn = P({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: Gt } }, "list-items");
function mn(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function gn(e, r) {
  const t = K(r, e.itemType, "item"),
    n = mn(r) ? r : K(r, e.itemTitle),
    i = K(r, e.itemValue, void 0),
    l = K(r, e.itemChildren),
    a = e.itemProps === !0 ? Dt(r, ["children"]) : K(r, e.itemProps),
    s = { title: n, value: i, ...a };
  return { type: t, title: s.title, value: s.value, props: s, children: t === "item" && l ? dt(e, l) : void 0, raw: r };
}
function dt(e, r) {
  const t = [];
  for (const n of r) t.push(gn(e, n));
  return t;
}
function hn(e) {
  return { items: g(() => dt(e, e.items)) };
}
const bn = P({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...nn({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ve(), ...O(), ...X(), ...Se(), ...we(), itemType: { type: String, default: "type" }, ...yn(), ...se(), ...D(), ...de(), ...re({ variant: "text" }) }, "VList"),
  pn = A()({
    name: "VList",
    props: bn(),
    emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 },
    setup(e, r) {
      let { slots: t } = r;
      const { items: n } = hn(e),
        { themeClasses: i } = ce(e),
        { backgroundColorClasses: l, backgroundColorStyles: a } = _t(C(e, "bgColor")),
        { borderClasses: s } = Ie(e),
        { densityClasses: m } = oe(e),
        { dimensionStyles: y } = Ce(e),
        { elevationClasses: f } = _e(e),
        { roundedClasses: o } = ue(e),
        { open: d, select: v } = an(e),
        c = g(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
        h = C(e, "activeColor"),
        S = C(e, "baseColor"),
        V = C(e, "color");
      nt(), Ke({ VListGroup: { activeColor: h, baseColor: S, color: V }, VListItem: { activeClass: C(e, "activeClass"), activeColor: h, baseColor: S, color: V, density: C(e, "density"), disabled: C(e, "disabled"), lines: C(e, "lines"), nav: C(e, "nav"), slim: C(e, "slim"), variant: C(e, "variant") } });
      const w = j(!1),
        B = M();
      function z(p) {
        w.value = !0;
      }
      function R(p) {
        w.value = !1;
      }
      function H(p) {
        var N;
        !w.value && !(p.relatedTarget && (N = B.value) != null && N.contains(p.relatedTarget)) && x();
      }
      function q(p) {
        if (B.value) {
          if (p.key === "ArrowDown") x("next");
          else if (p.key === "ArrowUp") x("prev");
          else if (p.key === "Home") x("first");
          else if (p.key === "End") x("last");
          else return;
          p.preventDefault();
        }
      }
      function x(p) {
        if (B.value) return jt(B.value, p);
      }
      return F(() => u(e.tag, { ref: B, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, i.value, l.value, s.value, m.value, f.value, c.value, o.value, e.class], style: [a.value, y.value, e.style], tabindex: e.disabled || w.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: z, onFocusout: R, onFocus: H, onKeydown: q }, { default: () => [u(ut, { items: n.value, returnObject: e.returnObject }, t)] })), { open: d, select: v, focus: x };
    },
  }),
  Sn = {
    props: { contentKey: { type: String, required: !0, default: "" } },
    async mounted() {
      console.log("mw", await $fetch("/localization.json"));
      for (const e of Ne["Card Types"]) this.cardTypes[e.type] = e.color;
      (this.all = Ne[this.contentKey]), (this.content = this.all), (this.types = [...new Set(this.content.map((e) => e.type.trim()))]);
    },
    data() {
      return { cardTypes: {}, types: [], all: [], content: [], filter: "All" };
    },
    methods: {
      filterBy(e) {
        console.log("here"), (this.filter = e), e == "All" ? (this.content = this.all) : (this.content = this.all.filter((r) => r.type == e));
      },
    },
  },
  Cn = { class: "d-flex ga-4 ma-4" },
  kn = { key: 0, class: "w-25", style: { "min-width": "200px" } },
  An = $("div", null, "Filter by:", -1),
  Vn = { class: "d-flex flex-wrap ga-6 justify-left pa-4" };
function wn(e, r, t, n, i, l) {
  return (
    T(),
    ne("div", Cn, [
      i.types.length > 1
        ? (T(),
          ne("div", kn, [
            An,
            u(pn, null, {
              default: L(() => [
                (T(!0),
                ne(
                  ie,
                  null,
                  De(["All", ...i.types], (a, s) => (T(), U(pe, { key: s, value: a, active: a == i.filter, rounded: "xl", color: "secondary", onClick: () => l.filterBy(a) }, { prepend: L(() => [u(le, { icon: a.icon }, null, 8, ["icon"])]), default: L(() => [u(ot, { textContent: W(a) }, null, 8, ["textContent"])]), _: 2 }, 1032, ["value", "active", "onClick"]))),
                  128
                )),
              ]),
              _: 1,
            }),
          ]))
        : ae("", !0),
      $("div", null, [
        $("div", null, [$("b", null, W(i.content.length), 1), he(" Found: ")]),
        $("div", Vn, [
          (T(!0),
          ne(
            ie,
            null,
            De(
              i.content,
              (a) => (
                T(),
                U(
                  Wt,
                  { key: a, style: zt(`width: 300px; border-top: 2px solid ${i.cardTypes[a.type]};`) },
                  {
                    default: L(() => [
                      u(
                        Ye,
                        null,
                        Et({ default: L(() => ["title" in a ? (T(), U(Xe, { key: 0 }, { default: L(() => [$("b", null, W(a.title), 1)]), _: 2 }, 1024)) : ae("", !0), "subtitle" in a ? (T(), U(Qe, { key: 1 }, { default: L(() => [he(W(a.subtitle), 1)]), _: 2 }, 1024)) : ae("", !0)]), _: 2 }, [
                          "abstract_image" in a ? { name: "prepend", fn: L(() => [u(J, { size: "64", rounded: "0" }, { default: L(() => [u(Le, { src: `/cges/img/${a.abstract_image}` }, null, 8, ["src"])]), _: 2 }, 1024)]), key: "0" } : void 0,
                        ]),
                        1024
                      ),
                      "abstract" in a ? (T(), U(Ze, { key: 0 }, { default: L(() => [he(W(a.abstract), 1)]), _: 2 }, 1024)) : ae("", !0),
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
const Bn = mt(Sn, [["render", wn]]);
export { Bn as i };
