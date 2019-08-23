export default {
  getMousePosition(event) {
    return {
      x: event.pageX - (window.scrollX || window.pageXOffset),
      y: event.pageY - (window.scrollY || window.pageYOffset),
    };
  },

  getTouchPosition(event) {
    return {
      x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
      y: event.touches[0].pageY - (window.scrollY || window.pageYOffset),
    };
  },

  pauseEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  },

  addEventsToDocument(eventMap) {
    // remove this disable once this gets fixed
    // https://github.com/eslint/eslint/issues/12117
    /* eslint-disable-next-line no-unused-vars */
    for (const key in eventMap) {
      document.addEventListener(key, eventMap[key], false);
    }
  },

  removeEventsFromDocument(eventMap) {
    // remove this disable once this gets fixed
    // https://github.com/eslint/eslint/issues/12117
    /* eslint-disable-next-line no-unused-vars */
    for (const key in eventMap) {
      document.removeEventListener(key, eventMap[key], false);
    }
  },

  addEventsToWindow(eventMap) {
    // remove this disable once this gets fixed
    // https://github.com/eslint/eslint/issues/12117
    /* eslint-disable-next-line no-unused-vars */
    for (const key in eventMap) {
      window.addEventListener(key, eventMap[key], false);
    }
  },

  removeEventsFromWindow(eventMap) {
    // remove this disable once this gets fixed
    // https://github.com/eslint/eslint/issues/12117
    /* eslint-disable-next-line no-unused-vars */
    for (const key in eventMap) {
      window.removeEventListener(key, eventMap[key], false);
    }
  },

  targetIsDescendant(event, parent) {
    let node = event.target;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  },

  addEventListenerOnTransitionEnded(element, fn) {
    const eventName = transitionEventNamesFor(element);
    if (!eventName) {
      return false;
    }
    element.addEventListener(eventName, fn);
    return true;
  },

  removeEventListenerOnTransitionEnded(element, fn) {
    const eventName = transitionEventNamesFor(element);
    if (!eventName) {
      return false;
    }
    element.removeEventListener(eventName, fn);
    return true;
  },
};

const TRANSITIONS = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
};

function transitionEventNamesFor(element) {
  // remove this disable once this gets fixed
  // https://github.com/eslint/eslint/issues/12117
  /* eslint-disable-next-line no-unused-vars */
  for (const transition in TRANSITIONS) {
    if (element && element.style[transition] !== undefined) {
      return TRANSITIONS[transition];
    }
  }
}
