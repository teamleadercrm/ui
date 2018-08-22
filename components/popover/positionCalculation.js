const ARROW_OFFSET = 7;
const POPUP_OFFSET = 12;

const getAnchorPosition = anchorEl => {
  const anchorRect = anchorEl.getBoundingClientRect();

  const anchorPosition = {
    top: anchorRect.top,
    left: anchorRect.left,
    width: Math.round(anchorRect.width),
    height: Math.round(anchorRect.height),
  };

  anchorPosition.right = anchorRect.right || anchorPosition.left + anchorPosition.width;
  anchorPosition.bottom = anchorRect.bottom || anchorPosition.top + anchorPosition.height;
  anchorPosition.center = anchorPosition.left + (anchorPosition.right - anchorPosition.left) / 2;
  anchorPosition.middle = anchorPosition.top + (anchorPosition.bottom - anchorPosition.top) / 2;

  return anchorPosition;
};

const getTargetPosition = targetEl => {
  const targetRect = targetEl.getBoundingClientRect();
  const width = Math.round(targetRect.width);
  const height = Math.round(targetRect.height);

  return {
    top: 0,
    center: height / 2,
    bottom: height,
    left: 0,
    middle: width / 2,
    right: width,
    width: width,
    height: height,
  };
};

// HORIZONTAL
const positionMiddle = (anchorPosition, targetPosition) => ({
  top: anchorPosition.middle - targetPosition.height / 2,
  arrowTop: targetPosition.height / 2 - ARROW_OFFSET,
});

const positionTop = (anchorPosition, targetPosition, offsetCorrection) => ({
  top: anchorPosition.top - POPUP_OFFSET * 0.75 - offsetCorrection,
  arrowTop: ARROW_OFFSET * 2.35,
});

const positionBottom = (anchorPosition, targetPosition, offsetCorrection) => ({
  top: anchorPosition.bottom - targetPosition.height + POPUP_OFFSET * 0.75 + offsetCorrection,
  arrowTop: targetPosition.height - ARROW_OFFSET * 4.5,
});

const directionWest = (anchorPosition, targetPosition) => ({
  left: anchorPosition.left - targetPosition.width - POPUP_OFFSET,
  arrowLeft: targetPosition.width - ARROW_OFFSET,
});

const directionEast = anchorPosition => ({
  left: anchorPosition.right + POPUP_OFFSET,
  arrowLeft: -ARROW_OFFSET,
});

const updateHorizontalDirectionIfNeeded = (direction, anchorPosition, targetPosition) => {
  if (direction === 'west') {
    return anchorPosition.left - targetPosition.width - POPUP_OFFSET < 0 ? 'east' : 'west';
  }

  return anchorPosition.right + targetPosition.width + POPUP_OFFSET < window.innerWidth ? 'east' : 'west';
};

const updateHorizontalPositionIfNeeded = (position, anchorPosition, targetPosition) => {
  const topIsPossible = anchorPosition.top + targetPosition.height < window.innerHeight;

  const middleIsPossibleAtTop = anchorPosition.middle + targetPosition.height / 2 < window.innerHeight;
  const middleIsPossibleAtBottom = anchorPosition.middle - targetPosition.height / 2 > 0;
  const middleIsPossible = middleIsPossibleAtBottom && middleIsPossibleAtTop;

  const bottomIsPossible = anchorPosition.bottom - targetPosition.height > 0;

  if (position === 'top') {
    return topIsPossible ? 'top' : middleIsPossible ? 'middle' : 'bottom';
  }
  if (position === 'middle') {
    return middleIsPossible ? 'middle' : topIsPossible ? 'top' : bottomIsPossible ? 'bottom' : 'middle';
  }

  if (position === 'bottom') {
    return bottomIsPossible ? 'bottom' : middleIsPossible ? 'middle' : 'top';
  }
};

// VERTICAL
const getPositionLeftValue = ({ renderPosition, anchorPosition, targetPosition, inputOffsetCorrection }) => {
  switch (renderPosition) {
    case 'center':
      return anchorPosition.center - targetPosition.width / 2;
    case 'left':
      return anchorPosition.left - inputOffsetCorrection;
    case 'right':
      return anchorPosition.right - targetPosition.width + inputOffsetCorrection;
  }
};

const getArrowPositionLeftValue = ({ renderPosition, targetPosition }) => {
  switch (renderPosition) {
    case 'center':
      return targetPosition.width / 2 - ARROW_OFFSET;
    case 'left':
      return 2 * POPUP_OFFSET;
    case 'right':
      return targetPosition.width - POPUP_OFFSET * 3;
  }
};

const directionNorth = (anchorPosition, targetPosition) => ({
  top: anchorPosition.top - targetPosition.height - POPUP_OFFSET,
  arrowTop: targetPosition.height - ARROW_OFFSET,
});

const directionSouth = anchorPosition => ({
  top: anchorPosition.top + anchorPosition.height + POPUP_OFFSET,
  arrowTop: -ARROW_OFFSET,
});

const updateDirectionIfNeeded = (direction, anchorPosition, targetPosition) => {
  if (direction === 'north') {
    return anchorPosition.top - targetPosition.height - POPUP_OFFSET < 0 ? 'south' : 'north';
  }

  return anchorPosition.bottom + targetPosition.height + POPUP_OFFSET > window.innerHeight ? 'north' : 'south';
};

const updatePositionIfNeeded = (position, anchorPosition, targetPosition) => {
  const leftIsPossible = anchorPosition.left + targetPosition.width < window.innerWidth;

  const centerIsPossibleAtRight = anchorPosition.center + targetPosition.width / 2 < window.innerWidth;
  const centerIsPossibleAtLeft = anchorPosition.center - targetPosition.width / 2 > 0;
  const centerIsPossible = centerIsPossibleAtLeft && centerIsPossibleAtRight;

  const rightIsPossible = anchorPosition.right - targetPosition.width > 0;

  if (position === 'left') {
    return leftIsPossible ? 'left' : centerIsPossible ? 'center' : 'right';
  }
  if (position === 'center') {
    return centerIsPossible ? 'center' : leftIsPossible ? 'left' : rightIsPossible ? 'right' : 'center';
  }

  if (position === 'right') {
    return rightIsPossible ? 'right' : centerIsPossible ? 'center' : 'left';
  }
};

// EXPORT
export const calculateHorizontalPositions = (
  anchorEl,
  targetEl,
  inputDirection,
  inputPosition,
  inputOffsetCorrection,
) => {
  const anchorPosition = getAnchorPosition(anchorEl);
  const targetPosition = getTargetPosition(targetEl);
  const renderDirection = updateHorizontalDirectionIfNeeded(inputDirection, anchorPosition, targetPosition);
  const renderPosition = updateHorizontalPositionIfNeeded(inputPosition, anchorPosition, targetPosition);

  let direction;
  if (renderDirection === 'west') {
    direction = directionWest(anchorPosition, targetPosition);
  } else {
    direction = directionEast(anchorPosition, targetPosition);
  }

  let position;
  if (renderPosition === 'top') {
    position = positionTop(anchorPosition, targetPosition, inputOffsetCorrection);
  } else if (renderPosition === 'middle') {
    position = positionMiddle(anchorPosition, targetPosition);
  } else {
    position = positionBottom(anchorPosition, targetPosition, inputOffsetCorrection);
  }

  return { ...direction, ...position };
};

export const calculateVerticalPositions = (
  anchorEl,
  targetEl,
  inputDirection,
  inputPosition,
  inputOffsetCorrection,
) => {
  const anchorPosition = getAnchorPosition(anchorEl);
  const targetPosition = getTargetPosition(targetEl);

  const renderDirection = updateDirectionIfNeeded(inputDirection, anchorPosition, targetPosition);
  const renderPosition = updatePositionIfNeeded(inputPosition, anchorPosition, targetPosition);

  let direction;
  if (renderDirection === 'north') {
    direction = directionNorth(anchorPosition, targetPosition);
  } else {
    direction = directionSouth(anchorPosition, targetPosition);
  }

  const left = getPositionLeftValue({
    renderPosition,
    anchorPosition,
    targetPosition,
    inputOffsetCorrection,
  });

  const arrowLeft = getArrowPositionLeftValue({ renderPosition, targetPosition });

  return { ...direction, left, arrowLeft };
};
