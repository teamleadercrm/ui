export const getViewport = () => ({
  height: window.innerHeight || document.documentElement.offsetHeight,
  width: window.innerWidth || document.documentElement.offsetWidth,
});

export const isElementOverflowingX = element => element.clientWidth < element.scrollWidth;

export const isElementOverflowingY = element => element.clientHeight < element.scrollHeight;

export const elementIsDark = (color, dark) => {
  const lightColors = ['white', 'neutral'];
  if (lightColors.includes(color)) {
    return dark;
  }
  return false;
};
