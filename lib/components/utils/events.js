'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _default = {
  getMousePosition: function(n) {
    return { x: n.pageX - (window.scrollX || window.pageXOffset), y: n.pageY - (window.scrollY || window.pageYOffset) };
  },
  getTouchPosition: function(n) {
    return {
      x: n.touches[0].pageX - (window.scrollX || window.pageXOffset),
      y: n.touches[0].pageY - (window.scrollY || window.pageYOffset),
    };
  },
  pauseEvent: function(n) {
    n.stopPropagation(), n.preventDefault();
  },
  addEventsToDocument: function(n) {
    for (var e in n) document.addEventListener(e, n[e], !1);
  },
  removeEventsFromDocument: function(n) {
    for (var e in n) document.removeEventListener(e, n[e], !1);
  },
  addEventsToWindow: function(n) {
    for (var e in n) window.addEventListener(e, n[e], !1);
  },
  removeEventsFromWindow: function(n) {
    for (var e in n) window.removeEventListener(e, n[e], !1);
  },
  targetIsDescendant: function(n, e) {
    for (var t = n.target; null !== t; ) {
      if (t === e) return !0;
      t = t.parentNode;
    }
    return !1;
  },
  addEventListenerOnTransitionEnded: function(n, e) {
    var t = transitionEventNamesFor(n);
    return !!t && (n.addEventListener(t, e), !0);
  },
  removeEventListenerOnTransitionEnded: function(n, e) {
    var t = transitionEventNamesFor(n);
    return !!t && (n.removeEventListener(t, e), !0);
  },
};
exports.default = _default;
var TRANSITIONS = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
};
function transitionEventNamesFor(n) {
  for (var e in TRANSITIONS) if (n && void 0 !== n.style[e]) return TRANSITIONS[e];
}
