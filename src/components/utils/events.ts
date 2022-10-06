import { MouseEvent, TouchEvent } from 'react';

export interface OurDocumentEventMap extends Partial<Record<keyof DocumentEventMap, (event: Event) => void>> {}
export interface OurWindowEventMap extends Partial<Record<keyof WindowEventMap, (event: Event) => void>> {}
const TRANSITIONS: Record<string, string> = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
};

const transitionEventNamesFor = (element: HTMLElement | null) => {
  for (const transition in TRANSITIONS) {
    // @ts-ignore element style is not indexed
    if (element && element.style[transition] !== undefined) {
      return TRANSITIONS[transition];
    }
  }
};

export default {
  getMousePosition(event: MouseEvent) {
    return {
      x: event.pageX - (window.scrollX || window.pageXOffset),
      y: event.pageY - (window.scrollY || window.pageYOffset),
    };
  },

  getTouchPosition(event: TouchEvent) {
    return {
      x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
      y: event.touches[0].pageY - (window.scrollY || window.pageYOffset),
    };
  },

  pauseEvent(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  },

  addEventsToDocument(eventMap: OurDocumentEventMap) {
    for (const key in eventMap) {
      // @ts-ignore cannot index it properly
      const eventHandler = eventMap[key] as (event: Event) => void;
      document.addEventListener(key, eventHandler, false);
    }
  },

  removeEventsFromDocument(eventMap: OurDocumentEventMap) {
    for (const key in eventMap) {
      // @ts-ignore cannot index it properly
      const eventHandler = eventMap[key] as (event: Event) => void;
      document.removeEventListener(key, eventHandler, false);
    }
  },

  addEventsToWindow(eventMap: OurWindowEventMap) {
    for (const key in eventMap) {
      // @ts-ignore cannot index it properly
      const eventHandler = eventMap[key] as (event: Event) => void;
      window.addEventListener(key, eventHandler, false);
    }
  },

  removeEventsFromWindow(eventMap: OurWindowEventMap) {
    for (const key in eventMap) {
      // @ts-ignore cannot index it properly
      const eventHandler = eventMap[key] as (event: Event) => void;
      window.removeEventListener(key, eventHandler, false);
    }
  },

  targetIsDescendant(event: Event, parent: Element | null) {
    let node: Node | null = event.target as Node;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  },

  addEventListenerOnTransitionEnded(element: HTMLElement, fn: () => void) {
    const eventName = transitionEventNamesFor(element);
    if (!eventName) {
      return false;
    }
    element.addEventListener(eventName, fn);
    return true;
  },

  removeEventListenerOnTransitionEnded(element: HTMLElement, fn: () => void) {
    const eventName = transitionEventNamesFor(element);
    if (!eventName) {
      return false;
    }
    element.removeEventListener(eventName, fn);
    return true;
  },
};
