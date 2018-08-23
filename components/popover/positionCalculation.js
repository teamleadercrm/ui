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
const getHorizontalDirectionPositionTopValue = ({
  position,
  anchorPosition,
  targetPosition,
  inputOffsetCorrection,
}) => {
  switch (position) {
    case 'middle':
      return anchorPosition.middle - targetPosition.height / 2;
    case 'top':
      return anchorPosition.top - POPUP_OFFSET * 0.75 - inputOffsetCorrection;
    case 'bottom':
      return anchorPosition.bottom - targetPosition.height + POPUP_OFFSET * 0.75 + inputOffsetCorrection;
  }
};

const getHorizontalDirectionPositionLeftValue = ({ direction, anchorPosition, targetPosition }) =>
  direction === 'west'
    ? anchorPosition.left - targetPosition.width - POPUP_OFFSET
    : anchorPosition.right + POPUP_OFFSET;

const getHorizontalDirectionArrowPositionTopValue = ({ position, targetPosition }) => {
  switch (position) {
    case 'middle':
      return targetPosition.height / 2 - ARROW_OFFSET;
    case 'top':
      return ARROW_OFFSET * 2.35;
    case 'bottom':
      return targetPosition.height - ARROW_OFFSET * 4.5;
  }
};

const getHorizontalDirectionArrowPositionLeftValue = ({ direction, targetPosition }) =>
  direction === 'west' ? targetPosition.width - ARROW_OFFSET : -ARROW_OFFSET;

// VERTICAL
const getVerticalDirectionPositionTopValue = ({ direction, anchorPosition, targetPosition }) =>
  direction === 'north'
    ? anchorPosition.top - targetPosition.height - POPUP_OFFSET
    : anchorPosition.top + anchorPosition.height + POPUP_OFFSET;

const getVerticalDirectionPositionLeftValue = ({
  renderPosition,
  anchorPosition,
  targetPosition,
  inputOffsetCorrection,
}) => {
  switch (renderPosition) {
    case 'center':
      return anchorPosition.center - targetPosition.width / 2;
    case 'left':
      return anchorPosition.left - inputOffsetCorrection;
    case 'right':
      return anchorPosition.right - targetPosition.width + inputOffsetCorrection;
  }
};

const getVerticalDirectionArrowPositionTopValue = ({ direction, targetPosition }) =>
  direction === 'north' ? targetPosition.height - ARROW_OFFSET : -ARROW_OFFSET;

const getVerticalDirectionArrowPositionLeftValue = ({ renderPosition, targetPosition }) => {
  switch (renderPosition) {
    case 'center':
      return targetPosition.width / 2 - ARROW_OFFSET;
    case 'left':
      return 2 * POPUP_OFFSET;
    case 'right':
      return targetPosition.width - POPUP_OFFSET * 3;
  }
};

const isInViewport = ({ direction, anchorPosition, targetPosition }) => {
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
  isInViewport({ direction: getOppositeDirection(direction), anchorPosition, targetPosition });

const getRenderDirection = ({ direction, anchorPosition, targetPosition }) => {
  const inputDirectionRendersOnScreen = isInViewport({ direction, anchorPosition, targetPosition });
  const oppositeDirectionRendersOnScreen = getOppositeDirectionRendersOnScreen({
    direction,
    anchorPosition,
    targetPosition,
  });
  return !inputDirectionRendersOnScreen && oppositeDirectionRendersOnScreen
    ? getOppositeDirection(direction)
    : direction;
};

const isPositionPossible = (position, anchorPosition, targetPosition) => {
  switch (position) {
    case 'middle':
      return (
        anchorPosition.middle + targetPosition.height / 2 < window.innerHeight &&
        anchorPosition.middle - targetPosition.height / 2 > 0
      );
    case 'top':
      return anchorPosition.top + targetPosition.height < window.innerHeight;
    case 'bottom':
      return anchorPosition.bottom - targetPosition.height > 0;
    case 'center':
      return (
        anchorPosition.center + targetPosition.width / 2 < window.innerWidth &&
        anchorPosition.center - targetPosition.width / 2 > 0
      );
    case 'left':
      return anchorPosition.left + targetPosition.width < window.innerWidth;
    case 'right':
      return anchorPosition.right - targetPosition.width > 0;
  }
};

const getOppositePosition = direction => {
  switch (direction) {
    case 'top':
      return 'bottom';
    case 'bottom':
      return 'top';
    case 'left':
      return 'right';
    case 'right':
      return 'left';
  }
};

const getRenderPosition = ({ position, anchorPosition, targetPosition }) => {
  if (isPositionPossible(position, anchorPosition, targetPosition)) {
    return position;
  }

  switch (position) {
    case 'middle':
      return isPositionPossible('top', anchorPosition, targetPosition)
        ? 'top'
        : isPositionPossible('bottom', anchorPosition, targetPosition)
          ? 'bottom'
          : position;
    case 'center':
      return isPositionPossible('left', anchorPosition, targetPosition)
        ? 'left'
        : isPositionPossible('right', anchorPosition, targetPosition)
          ? 'right'
          : position;
    case 'top':
    case 'bottom':
      return isPositionPossible('middle', anchorPosition, targetPosition) ? 'middle' : getOppositePosition(position);
    case 'left':
    case 'right':
      return isPositionPossible('center', anchorPosition, targetPosition) ? 'center' : getOppositePosition(position);
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
  const renderPosition = getRenderPosition({ position: inputPosition, anchorPosition, targetPosition });

  const top = getHorizontalDirectionPositionTopValue({
    position: renderPosition,
    anchorPosition,
    targetPosition,
    inputOffsetCorrection,
  });
  const arrowTop = getHorizontalDirectionArrowPositionTopValue({
    position: renderPosition,
    targetPosition,
    inputOffsetCorrection,
  });

  const left = getHorizontalDirectionPositionLeftValue({ direction: renderDirection, anchorPosition, targetPosition });
  const arrowLeft = getHorizontalDirectionArrowPositionLeftValue({
    direction: renderDirection,
    anchorPosition,
    targetPosition,
  });

  return { top, arrowTop, left, arrowLeft };
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
  const renderPosition = getRenderPosition({ position: inputPosition, anchorPosition, targetPosition });

  const top = getVerticalDirectionPositionTopValue({ direction: renderDirection, anchorPosition, targetPosition });
  const arrowTop = getVerticalDirectionArrowPositionTopValue({ renderDirection, renderPosition, targetPosition });

  const left = getVerticalDirectionPositionLeftValue({
    renderPosition,
    anchorPosition,
    targetPosition,
    inputOffsetCorrection,
  });
  const arrowLeft = getVerticalDirectionArrowPositionLeftValue({ renderPosition, targetPosition });

  return { top, arrowTop, left, arrowLeft };
};
