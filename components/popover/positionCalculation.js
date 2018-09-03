const ARROW_OFFSET = 7;
const POPUP_OFFSET = 12;

const getElementPositionValues = element => {
  const { top, left, right, bottom } = element.getBoundingClientRect();

  return {
    top,
    left,
    right,
    bottom,
    middle: top + (bottom - top) / 2,
    center: left + (right - left) / 2,
  };
};

const getElementDimensionValues = element => {
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
};

const getElementHeightValue = element => element.getBoundingClientRect().height;

const getVerticalDirectionPositionValues = ({
  direction,
  position,
  anchorPosition,
  popoverDimensions,
  inputOffsetCorrection,
}) => ({
  top: getVerticalDirectionPositionTopValue({
    direction,
    anchorPosition,
    popoverDimensions,
  }),
  arrowTop: getVerticalDirectionArrowPositionTopValue({ direction, popoverDimensions }),
  left: getVerticalDirectionPositionLeftValue({
    position,
    anchorPosition,
    popoverDimensions,
    inputOffsetCorrection,
  }),
  arrowLeft: getVerticalDirectionArrowPositionLeftValue({ position, popoverDimensions }),
});

const getHorizontalDirectionPositionValues = ({
  direction,
  position,
  anchorPosition,
  popoverDimensions,
  inputOffsetCorrection,
}) => ({
  top: getHorizontalDirectionPositionTopValue({
    position,
    anchorPosition,
    popoverDimensions,
    inputOffsetCorrection,
  }),
  arrowTop: getHorizontalDirectionArrowPositionTopValue({ position, popoverDimensions }),
  left: getHorizontalDirectionPositionLeftValue({ direction, anchorPosition, popoverDimensions }),
  arrowLeft: getHorizontalDirectionArrowPositionLeftValue({
    direction,
    anchorPosition,
    popoverDimensions,
  }),
});

const getPositionValues = ({ direction, position, anchorPosition, popoverDimensions, inputOffsetCorrection }) =>
  direction === 'north' || direction === 'south'
    ? getVerticalDirectionPositionValues({
        direction,
        position,
        anchorPosition,
        popoverDimensions,
        inputOffsetCorrection,
      })
    : getHorizontalDirectionPositionValues({
        direction,
        position,
        anchorPosition,
        popoverDimensions,
        inputOffsetCorrection,
      });

// HORIZONTAL
const getHorizontalDirectionPositionTopValue = ({
  position,
  anchorPosition,
  popoverDimensions,
  inputOffsetCorrection,
}) => {
  switch (position) {
    case 'middle':
      return anchorPosition.middle - popoverDimensions.height / 2;
    case 'top':
      return anchorPosition.top - POPUP_OFFSET * 0.75 - inputOffsetCorrection;
    case 'bottom':
      return anchorPosition.bottom - popoverDimensions.height + POPUP_OFFSET * 0.75 + inputOffsetCorrection;
  }
};

const getHorizontalDirectionPositionLeftValue = ({ direction, anchorPosition, popoverDimensions }) =>
  direction === 'west'
    ? anchorPosition.left - popoverDimensions.width - POPUP_OFFSET
    : anchorPosition.right + POPUP_OFFSET;

const getHorizontalDirectionArrowPositionTopValue = ({ position, popoverDimensions }) => {
  switch (position) {
    case 'middle':
      return popoverDimensions.height / 2 - ARROW_OFFSET;
    case 'top':
      return ARROW_OFFSET * 2.35;
    case 'bottom':
      return popoverDimensions.height - ARROW_OFFSET * 4.5;
  }
};

const getHorizontalDirectionArrowPositionLeftValue = ({ direction, popoverDimensions }) =>
  direction === 'west' ? popoverDimensions.width - ARROW_OFFSET : -ARROW_OFFSET;

// VERTICAL
const getVerticalDirectionPositionTopValue = ({ direction, anchorPosition, popoverDimensions }) =>
  direction === 'north'
    ? anchorPosition.top - popoverDimensions.height - POPUP_OFFSET
    : anchorPosition.bottom + POPUP_OFFSET;

const getVerticalDirectionPositionLeftValue = ({
  position,
  anchorPosition,
  popoverDimensions,
  inputOffsetCorrection,
}) => {
  switch (position) {
    case 'center':
      return anchorPosition.center - popoverDimensions.width / 2;
    case 'left':
      return anchorPosition.left - inputOffsetCorrection;
    case 'right':
      return anchorPosition.right - popoverDimensions.width + inputOffsetCorrection;
  }
};

const getVerticalDirectionArrowPositionTopValue = ({ direction, popoverDimensions }) =>
  direction === 'north' ? popoverDimensions.height - ARROW_OFFSET : -ARROW_OFFSET;

const getVerticalDirectionArrowPositionLeftValue = ({ position, popoverDimensions }) => {
  switch (position) {
    case 'center':
      return popoverDimensions.width / 2 - ARROW_OFFSET;
    case 'left':
      return 2 * POPUP_OFFSET;
    case 'right':
      return popoverDimensions.width - POPUP_OFFSET * 3;
  }
};

const isInViewport = ({ direction, anchorPosition, popoverDimensions }) => {
  switch (direction) {
    case 'north':
      return anchorPosition.top - popoverDimensions.height - POPUP_OFFSET > 0;
    case 'south':
      return anchorPosition.bottom + popoverDimensions.height + POPUP_OFFSET < window.innerHeight;
    case 'east':
      return anchorPosition.right + popoverDimensions.width + POPUP_OFFSET < window.innerWidth;
    case 'west':
      return anchorPosition.left - popoverDimensions.width - POPUP_OFFSET > 0;
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

const getDirection = ({ direction, anchorPosition, popoverDimensions }) => {
  const inputDirectionRendersOnScreen = isInViewport({ direction, anchorPosition, popoverDimensions });
  const oppositeDirectionRendersOnScreen = isInViewport({
    direction: getOppositeDirection(direction),
    anchorPosition,
    popoverDimensions,
  });

  return !inputDirectionRendersOnScreen && oppositeDirectionRendersOnScreen
    ? getOppositeDirection(direction)
    : direction;
};

const isPositionPossible = (position, anchorPosition, popoverDimensions) => {
  switch (position) {
    case 'middle':
      return (
        anchorPosition.middle + popoverDimensions.height / 2 < window.innerHeight &&
        anchorPosition.middle - popoverDimensions.height / 2 > 0
      );
    case 'top':
      return anchorPosition.top + popoverDimensions.height < window.innerHeight;
    case 'bottom':
      return anchorPosition.bottom - popoverDimensions.height > 0;
    case 'center':
      return (
        anchorPosition.center + popoverDimensions.width / 2 < window.innerWidth &&
        anchorPosition.center - popoverDimensions.width / 2 > 0
      );
    case 'left':
      return anchorPosition.left + popoverDimensions.width < window.innerWidth;
    case 'right':
      return anchorPosition.right - popoverDimensions.width > 0;
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

const getPosition = ({ position, anchorPosition, popoverDimensions }) => {
  if (isPositionPossible(position, anchorPosition, popoverDimensions)) {
    return position;
  }

  switch (position) {
    case 'middle':
      return isPositionPossible('top', anchorPosition, popoverDimensions)
        ? 'top'
        : isPositionPossible('bottom', anchorPosition, popoverDimensions)
          ? 'bottom'
          : position;
    case 'center':
      return isPositionPossible('left', anchorPosition, popoverDimensions)
        ? 'left'
        : isPositionPossible('right', anchorPosition, popoverDimensions)
          ? 'right'
          : position;
    case 'top':
    case 'bottom':
      return isPositionPossible('middle', anchorPosition, popoverDimensions) ? 'middle' : getOppositePosition(position);
    case 'left':
    case 'right':
      return isPositionPossible('center', anchorPosition, popoverDimensions) ? 'center' : getOppositePosition(position);
  }
};

const getMaxPopoverHeight = ({ direction, anchorPosition, popoverContentEl }) => {
  const directionContentRendersOnScreen = isInViewport({
    direction,
    anchorPosition,
    popoverDimensions: { height: getElementHeightValue(popoverContentEl) },
  });
  const oppositeDirectionContentRendersOnScreen = isInViewport({
    direction: getOppositeDirection(direction),
    anchorPosition,
    popoverDimensions: { height: getElementHeightValue(popoverContentEl) },
  });

  if (!directionContentRendersOnScreen && !oppositeDirectionContentRendersOnScreen) {
    return getMaxPopoverHeightValue({
      direction,
      anchorPosition,
    });
  }

  return 'initial';
};

const getMaxPopoverHeightValue = ({ direction, anchorPosition }) => {
  switch (direction) {
    case 'north':
      return anchorPosition.top - POPUP_OFFSET * 2;
    case 'south':
      return window.innerHeight - anchorPosition.bottom - POPUP_OFFSET * 2;
  }
};

export const calculatePositions = (
  anchorEl,
  popoverEl,
  popoverContentEl,
  inputDirection,
  inputPosition,
  inputOffsetCorrection,
) => {
  const anchorPosition = getElementPositionValues(anchorEl);
  const popoverDimensions = getElementDimensionValues(popoverEl);

  const direction = getDirection({ direction: inputDirection, anchorPosition, popoverDimensions });
  const position = getPosition({ position: inputPosition, anchorPosition, popoverDimensions });

  return {
    maxPopoverHeight: getMaxPopoverHeight({
      direction,
      anchorPosition,
      popoverContentEl,
    }),
    ...getPositionValues({
      direction,
      position,
      anchorPosition,
      popoverDimensions,
      inputOffsetCorrection,
    }),
  };
};
