const ARROW_OFFSET = 7;
const POPUP_OFFSET = 12;

const getAnchorPositionValues = anchorEl => {
  const { top, left, right, bottom, width, height } = anchorEl.getBoundingClientRect();

  return {
    top,
    left,
    width,
    height,
    right: right || left + width,
    bottom: bottom || top + height,
    middle: top + (bottom - top) / 2,
    center: left + (right - left) / 2,
  };
};

const getTargetPositionValues = targetEl => {
  const { width, height } = targetEl.getBoundingClientRect();

  return {
    width,
    height,
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    middle: width / 2,
    center: height / 2,
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
const getPositionTopValue = ({ renderDirection, anchorPosition, targetPosition }) => {
  switch (renderDirection) {
    case 'north':
      return anchorPosition.top - targetPosition.height - POPUP_OFFSET;
    case 'south':
      return anchorPosition.top + anchorPosition.height + POPUP_OFFSET;
  }
};

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

const getArrowPositionTopValue = ({ renderDirection, renderPosition, targetPosition }) => {
  switch (renderDirection) {
    case 'north':
      return targetPosition.height - ARROW_OFFSET;
    case 'south':
      return -ARROW_OFFSET;
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

const getDirectionRendersOnScreen = ({ direction, anchorPosition, targetPosition }) => {
  switch (direction) {
    case 'north':
      return anchorPosition.top - targetPosition.height - POPUP_OFFSET > 0;
    case 'south':
      return anchorPosition.bottom + targetPosition.height + POPUP_OFFSET < window.innerHeight;
    case 'east':
      return anchorPosition.right + targetPosition.width + POPUP_OFFSET < window.innerWidth;
    case 'west':
      return anchorPosition.left - targetPosition.width - POPUP_OFFSET > 0;
  }
};

const getOppositeDirection = direction => {
  switch (direction) {
    case 'north':
      return 'south';
    case 'south':
      return 'north';
    case 'east':
      return 'west';
    case 'west':
      return 'east';
  }
};

const getOppositeDirectionRendersOnScreen = ({ direction, anchorPosition, targetPosition }) =>
  getDirectionRendersOnScreen({ direction: getOppositeDirection(direction), anchorPosition, targetPosition });

const getRenderDirection = ({ direction, anchorPosition, targetPosition }) => {
  const inputDirectionRendersOnScreen = getDirectionRendersOnScreen({ direction, anchorPosition, targetPosition });
  const oppositeDirectionRendersOnScreen = getOppositeDirectionRendersOnScreen({
    direction,
    anchorPosition,
    targetPosition,
  });
  return !inputDirectionRendersOnScreen && oppositeDirectionRendersOnScreen
    ? getOppositeDirection(direction)
    : direction;
};

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
  const anchorPosition = getAnchorPositionValues(anchorEl);
  const targetPosition = getTargetPositionValues(targetEl);

  const renderDirection = getRenderDirection({ direction: inputDirection, anchorPosition, targetPosition });
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
  const anchorPosition = getAnchorPositionValues(anchorEl);
  const targetPosition = getTargetPositionValues(targetEl);

  const renderDirection = getRenderDirection({ direction: inputDirection, anchorPosition, targetPosition });
  const renderPosition = updatePositionIfNeeded(inputPosition, anchorPosition, targetPosition);

  const top = getPositionTopValue({ renderDirection, anchorPosition, targetPosition });
  const arrowTop = getArrowPositionTopValue({
    renderDirection,
    renderPosition,
    targetPosition,
  });

  const left = getPositionLeftValue({
    renderPosition,
    anchorPosition,
    targetPosition,
    inputOffsetCorrection,
  });

  const arrowLeft = getArrowPositionLeftValue({ renderPosition, targetPosition });

  return { top, arrowTop, left, arrowLeft };
};
