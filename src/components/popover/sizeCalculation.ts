export const MAX_HEIGHT_DEFAULT = 240;

export const getMaxHeight = (fullHeight, maxHeight) => {
  if (!fullHeight && maxHeight > MAX_HEIGHT_DEFAULT) {
    return MAX_HEIGHT_DEFAULT;
  }

  return maxHeight;
};
