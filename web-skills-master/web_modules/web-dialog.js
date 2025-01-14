function t(t) {
  return (
    t.hasAttribute("hidden") ||
    (t.hasAttribute("aria-hidden") &&
      "false" !== t.getAttribute("aria-hidden")) ||
    "none" === t.style.display ||
    "0" === t.style.opacity ||
    "hidden" === t.style.visibility ||
    "collapse" === t.style.visibility
  );
}
function e(e) {
  return (
    "-1" !== e.getAttribute("tabindex") &&
    !t(e) &&
    !(function (t) {
      return (
        t.hasAttribute("disabled") ||
        (t.hasAttribute("aria-disabled") &&
          "false" !== t.getAttribute("aria-disabled"))
      );
    })(e) &&
    (e.hasAttribute("tabindex") ||
      ((e instanceof HTMLAnchorElement || e instanceof HTMLAreaElement) &&
        e.hasAttribute("href")) ||
      e instanceof HTMLButtonElement ||
      e instanceof HTMLInputElement ||
      e instanceof HTMLTextAreaElement ||
      e instanceof HTMLSelectElement ||
      e instanceof HTMLIFrameElement)
  );
}
const i = new Map();
const n = document.createElement("template");
n.innerHTML =
  '\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';
class o extends HTMLElement {
  constructor() {
    super(), (this.debounceId = Math.random().toString()), (this._focused = !1);
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(n.content.cloneNode(!0)),
      (this.$backup = t.querySelector("#backup")),
      (this.$start = t.querySelector("#start")),
      (this.$end = t.querySelector("#end")),
      (this.focusLastElement = this.focusLastElement.bind(this)),
      (this.focusFirstElement = this.focusFirstElement.bind(this)),
      (this.onFocusIn = this.onFocusIn.bind(this)),
      (this.onFocusOut = this.onFocusOut.bind(this));
  }
  static get observedAttributes() {
    return ["inactive"];
  }
  get inactive() {
    return this.hasAttribute("inactive");
  }
  set inactive(t) {
    t ? this.setAttribute("inactive", "") : this.removeAttribute("inactive");
  }
  get focused() {
    return this._focused;
  }
  connectedCallback() {
    this.$start.addEventListener("focus", this.focusLastElement),
      this.$end.addEventListener("focus", this.focusFirstElement),
      this.addEventListener("focusin", this.onFocusIn),
      this.addEventListener("focusout", this.onFocusOut),
      this.render();
  }
  disconnectedCallback() {
    this.$start.removeEventListener("focus", this.focusLastElement),
      this.$end.removeEventListener("focus", this.focusFirstElement),
      this.removeEventListener("focusin", this.onFocusIn),
      this.removeEventListener("focusout", this.onFocusOut);
  }
  attributeChangedCallback() {
    this.render();
  }
  focusFirstElement() {
    this.trapFocus();
  }
  focusLastElement() {
    this.trapFocus(!0);
  }
  getFocusableElements() {
    return (function t(e, i, n, o = 20, s = 0) {
      let a = [];
      if (s >= o) return a;
      const r = (e) => {
          const a = e.assignedNodes().filter((t) => 1 === t.nodeType);
          return a.length > 0 ? t(a[0].parentElement, i, n, o, s + 1) : [];
        },
        d = Array.from(e.children || []);
      for (const e of d)
        i(e) ||
          (n(e) && a.push(e),
          null != e.shadowRoot
            ? a.push(...t(e.shadowRoot, i, n, o, s + 1))
            : "SLOT" === e.tagName
            ? a.push(...r(e))
            : a.push(...t(e, i, n, o, s + 1)));
      return a;
    })(this, t, e);
  }
  trapFocus(t) {
    if (this.inactive) return;
    let e = this.getFocusableElements();
    e.length > 0
      ? (t ? e[e.length - 1].focus() : e[0].focus(),
        this.$backup.setAttribute("tabindex", "-1"))
      : (this.$backup.setAttribute("tabindex", "0"), this.$backup.focus());
  }
  onFocusIn() {
    this.updateFocused(!0);
  }
  onFocusOut() {
    this.updateFocused(!1);
  }
  updateFocused(t) {
    !(function (t, e, n) {
      const o = i.get(n);
      null != o && window.clearTimeout(o),
        i.set(
          n,
          window.setTimeout(() => {
            t(), i.delete(n);
          }, e)
        );
    })(
      () => {
        this.focused !== t && ((this._focused = t), this.render());
      },
      0,
      this.debounceId
    );
  }
  render() {
    this.$start.setAttribute(
      "tabindex",
      !this.focused || this.inactive ? "-1" : "0"
    ),
      this.$end.setAttribute(
        "tabindex",
        !this.focused || this.inactive ? "-1" : "0"
      ),
      this.focused
        ? this.setAttribute("focused", "")
        : this.removeAttribute("focused");
  }
}
function s(t) {
  return Number(t.getAttribute("data-dialog-count")) || 0;
}
function a(t, e) {
  t.setAttribute("data-dialog-count", e.toString());
}
function r(t = document.activeElement) {
  return null != t && null != t.shadowRoot && null != t.shadowRoot.activeElement
    ? r(t.shadowRoot.activeElement)
    : t;
}
window.customElements.define("focus-trap", o);
const d = document.createElement("template");
d.innerHTML =
  '\n  <style>*{box-sizing:border-box}:host{padding:var(--dialog-container-padding,5vw 24px);z-index:var(--dialog-z-index,12345678);outline:none}#backdrop,:host{position:fixed;top:0;left:0;bottom:0;right:0}:host,:host([center]) #dialog{overflow-x:var(--dialog-overflow-x,hidden);overflow-y:var(--dialog-overflow-y,auto);overscroll-behavior:contain;-webkit-overflow-scrolling:touch}:host([center]){display:flex;align-items:center;justify-content:center;overflow:hidden}:host([center]) #dialog{max-height:var(--dialog-max-height,100%)}:host(:not(:defined)),:host(:not([open])){display:none}#backdrop{background:var(--dialog-backdrop-bg,rgba(0,0,0,.6));animation:fadeIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);z-index:-1}#dialog{animation:scaleIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);border-radius:var(--dialog-border-radius,12px);box-shadow:var(--dialog-box-shadow,0 2px 10px -5px rgba(0,0,0,.6));max-width:var(--dialog-max-width,700px);width:var(--dialog-width,100%);padding:var(--dialog-padding,24px);max-height:var(--dialog-max-height,unset);height:var(--dialog-height,auto);color:var(--dialog-color,currentColor);background:var(--dialog-bg,#fff);z-index:1;position:relative;display:flex;flex-direction:column;margin:0 auto;border:none}::slotted(article),article{flex-grow:1;overflow-y:auto;-webkit-overflow-scrolling:touch}::slotted(footer),::slotted(header),footer,header{flex-shrink:0}@keyframes scaleIn{0%{transform:scale(.9) translateY(30px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}</style>\n  <div id="backdrop" part="backdrop"></div>\n  <focus-trap id="dialog" part="dialog">\n    <slot></slot>\n  </focus-trap>\n';
class c extends HTMLElement {
  constructor() {
    super(),
      (this.$scrollContainer = document.documentElement),
      (this.$previousActiveElement = null);
    const t = this.attachShadow({ mode: "open" });
    t.appendChild(d.content.cloneNode(!0)),
      (this.$dialog = t.querySelector("#dialog")),
      (this.$backdrop = t.querySelector("#backdrop")),
      (this.onBackdropClick = this.onBackdropClick.bind(this)),
      (this.onKeyDown = this.onKeyDown.bind(this)),
      this.setAttribute("aria-modal", "true"),
      this.$dialog.setAttribute("role", "alertdialog");
  }
  static get observedAttributes() {
    return ["open", "center"];
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(t) {
    t ? this.setAttribute("open", "") : this.removeAttribute("open");
  }
  get center() {
    return this.hasAttribute("center");
  }
  set center(t) {
    t ? this.setAttribute("center", "") : this.removeAttribute("center");
  }
  connectedCallback() {
    this.$backdrop.addEventListener("click", this.onBackdropClick);
  }
  disconnectedCallback() {
    this.$backdrop.removeEventListener("click", this.onBackdropClick),
      this.open && this.didClose();
  }
  show() {
    this.open = !0;
  }
  close(t) {
    (this.result = t), (this.open = !1);
  }
  onBackdropClick() {
    this.assertClosing() && this.close();
  }
  onKeyDown(t) {
    switch (t.code) {
      case "Escape":
        this.assertClosing() && (this.close(), t.stopImmediatePropagation());
    }
  }
  assertClosing() {
    return this.dispatchEvent(new CustomEvent("closing", { cancelable: !0 }));
  }
  didOpen() {
    (this.$previousActiveElement = r(document.activeElement)),
      requestAnimationFrame(() => {
        this.$dialog.focusFirstElement();
      }),
      (this.tabIndex = 0),
      (this.$scrollContainer.style.overflow = "hidden"),
      this.addEventListener("keydown", this.onKeyDown, {
        capture: !0,
        passive: !0,
      }),
      a(this.$scrollContainer, s(this.$scrollContainer) + 1),
      this.dispatchEvent(new CustomEvent("open"));
  }
  didClose() {
    this.removeEventListener("keydown", this.onKeyDown, { capture: !0 }),
      a(this.$scrollContainer, Math.max(0, s(this.$scrollContainer) - 1)),
      s(this.$scrollContainer) <= 0 &&
        (this.$scrollContainer.style.overflow = ""),
      (this.tabIndex = -1),
      null != this.$previousActiveElement &&
        (this.$previousActiveElement.focus(),
        (this.$previousActiveElement = null)),
      this.dispatchEvent(new CustomEvent("close", { detail: this.result }));
  }
  attributeChangedCallback(t, e, i) {
    switch (t) {
      case "open":
        this.open ? this.didOpen() : this.didClose();
    }
  }
}
function l({
  $content: t,
  $container: e = document.body,
  center: i = !1,
  initialize: n = () => new c(),
} = {}) {
  const o = n();
  null != i && (o.center = i),
    null != t && ("function" == typeof t ? t(o) : o.appendChild(t));
  const s = new Promise((t) => {
    o.addEventListener(
      "close",
      (e) => {
        o.remove(), t(e.detail);
      },
      { once: !0 }
    );
  });
  return e.appendChild(o), o.show(), { $dialog: o, resolver: s };
}
customElements.define("web-dialog", c);
export {
  c as WebDialog,
  s as getDialogCount,
  l as openDialog,
  a as setDialogCount,
  r as traverseActiveElements,
};
//# sourceMappingURL=web-dialog.js.map
