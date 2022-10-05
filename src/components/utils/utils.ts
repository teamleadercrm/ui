export const getViewport = () => ({
  height: window.innerHeight || document.documentElement.offsetHeight,
  width: window.innerWidth || document.documentElement.offsetWidth,
});

export const isElementOverflowingX = (element: Element | null) =>
  !!(element && element.clientWidth < element.scrollWidth);

export const isElementOverflowingY = (element: Element | null) =>
  !!(element && element.clientHeight < element.scrollHeight);
