const ARROW_OFFSET = 7;
const POPUP_OFFSET = 12;

const getElementPositionValues = element => {
  const { top, left, right, bottom } = element.getBoundingClientRect();

  return {
    top,
    left,
    right,
    bottom,
    centerY: top + (bottom - top) / 2,
    centerX: left + (right - left) / 2,
  };
};

const getElementDimensionValues = element => {
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
};

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
    case 'center':
      return anchorPosition.centerY - popoverDimensions.height / 2;
    case 'start':
      return anchorPosition.top - POPUP_OFFSET * 0.75 - inputOffsetCorrection;
    case 'end':
      return anchorPosition.bottom - popoverDimensions.height + POPUP_OFFSET * 0.75 + inputOffsetCorrection;
  }
};

const getHorizontalDirectionPositionLeftValue = ({ direction, anchorPosition, popoverDimensions }) =>
  direction === 'west'
    ? anchorPosition.left - popoverDimensions.width - POPUP_OFFSET
    : anchorPosition.right + POPUP_OFFSET;

const getHorizontalDirectionArrowPositionTopValue = ({ position, popoverDimensions }) => {
  switch (position) {
    case 'center':
      return popoverDimensions.height / 2 - ARROW_OFFSET;
    case 'start':
      return ARROW_OFFSET * 2.35;
    case 'end':
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
      return anchorPosition.centerX - popoverDimensions.width / 2;
    case 'start':
      return anchorPosition.left - inputOffsetCorrection;
    case 'end':
      return anchorPosition.right - popoverDimensions.width + inputOffsetCorrection;
  }
};

const getVerticalDirectionArrowPositionTopValue = ({ direction, popoverDimensions }) =>
  direction === 'north' ? popoverDimensions.height - ARROW_OFFSET : -ARROW_OFFSET;

const getVerticalDirectionArrowPositionLeftValue = ({ position, popoverDimensions }) => {
  switch (position) {
    case 'center':
      return popoverDimensions.width / 2 - ARROW_OFFSET;
    case 'start':
      return 2 * POPUP_OFFSET;
    case 'end':
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

const isPositionPossible = (direction, position, anchorPosition, popoverDimensions) =>
  direction === 'north' || direction === 'south'
    ? isVerticalDirectionPositionPossible(position, anchorPosition, popoverDimensions)
    : isHorizontalDirectionPositionPossible(position, anchorPosition, popoverDimensions);

const isVerticalDirectionPositionPossible = (position, anchorPosition, popoverDimensions) => {
  switch (position) {
    case 'center':
      return (
        anchorPosition.centerY + popoverDimensions.height / 2 < window.innerHeight &&
        anchorPosition.centerY - popoverDimensions.height / 2 > 0
      );
    case 'start':
      return anchorPosition.top + popoverDimensions.height < window.innerHeight;
    case 'end':
      return anchorPosition.bottom - popoverDimensions.height > 0;
  }
};

const isHorizontalDirectionPositionPossible = (position, anchorPosition, popoverDimensions) => {
  switch (position) {
    case 'center':
      return (
        anchorPosition.centerX + popoverDimensions.width / 2 < window.innerWidth &&
        anchorPosition.centerX - popoverDimensions.width / 2 > 0
      );
    case 'start':
      return anchorPosition.left + popoverDimensions.width < window.innerWidth;
    case 'end':
      return anchorPosition.right - popoverDimensions.width > 0;
  }
};

const getOppositePosition = direction => {
  switch (direction) {
    case 'start':
      return 'end';
    case 'end':
      return 'start';
  }
};

const getPosition = ({ direction, position, anchorPosition, popoverDimensions }) => {
  if (isPositionPossible(position, anchorPosition, popoverDimensions)) {
    return position;
  }

  switch (position) {
    case 'center':
      return isPositionPossible('start', anchorPosition, popoverDimensions)
        ? 'start'
        : isPositionPossible('end', anchorPosition, popoverDimensions)
          ? 'end'
          : position;
    default:
      return isPositionPossible('center', anchorPosition, popoverDimensions) ? 'center' : getOppositePosition(position);
  }
};

const getMaxPopoverHeight = ({ direction, anchorPosition, popoverContentEl }) => {
  const directionContentRendersOnScreen = isInViewport({
    direction,
    anchorPosition,
    popoverDimensions: getElementDimensionValues(popoverContentEl),
  });
  const oppositeDirectionContentRendersOnScreen = isInViewport({
    direction: getOppositeDirection(direction),
    anchorPosition,
    popoverDimensions: getElementDimensionValues(popoverContentEl),
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
  const position = getPosition({ direction, position: inputPosition, anchorPosition, popoverDimensions });

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
