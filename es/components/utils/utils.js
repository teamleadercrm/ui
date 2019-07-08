export var getViewport = function getViewport() {
  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth,
  };
};
export var isElementOverflowingX = function isElementOverflowingX(element) {
  return element.clientWidth < element.scrollWidth;
};
export var isElementOverflowingY = function isElementOverflowingY(element) {
  return element.clientHeight < element.scrollHeight;
};
export var elementIsDark = function elementIsDark(color, dark) {
  var lightColors = ['white', 'neutral'];

  if (lightColors.includes(color)) {
    return dark;
  }

  return false;
};
