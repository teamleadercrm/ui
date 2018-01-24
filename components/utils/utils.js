export const getViewport = () => ({
  height: window.innerHeight || document.documentElement.offsetHeight,
  width: window.innerWidth || document.documentElement.offsetWidth,
});

export const isElementOverflowing = element =>
  element.clientWidth < element.scrollWidth || element.clientHeight < element.scrollHeight;
