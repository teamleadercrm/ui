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

const getPopoverPositionValues = popoverEl => {
  const { width, height } = popoverEl.getBoundingClientRect();

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

const getElementHeightValue = element => element.getBoundingClientRect().height;

const getVerticalDirectionPositionValues = ({
  direction,
  position,
  anchorPosition,
  popoverPosition,
  inputOffsetCorrection,
}) => ({
  top: getVerticalDirectionPositionTopValue({
    direction,
    anchorPosition,
    popoverPosition,
  }),
  arrowTop: getVerticalDirectionArrowPositionTopValue({ direction, popoverPosition }),
  left: getVerticalDirectionPositionLeftValue({
    position,
    anchorPosition,
    popoverPosition,
    inputOffsetCorrection,
  }),
  arrowLeft: getVerticalDirectionArrowPositionLeftValue({ position, popoverPosition }),
});

const getHorizontalDirectionPositionValues = ({
  direction,
  position,
  anchorPosition,
  popoverPosition,
  inputOffsetCorrection,
}) => ({
  top: getHorizontalDirectionPositionTopValue({
    position,
    anchorPosition,
    popoverPosition,
    inputOffsetCorrection,
  }),
  arrowTop: getHorizontalDirectionArrowPositionTopValue({ position, popoverPosition }),
  left: getHorizontalDirectionPositionLeftValue({ direction, anchorPosition, popoverPosition }),
  arrowLeft: getHorizontalDirectionArrowPositionLeftValue({
    direction,
    anchorPosition,
    popoverPosition,
  }),
});

const getPositionValues = ({ direction, position, anchorPosition, popoverPosition, inputOffsetCorrection }) =>
  direction === 'north' || direction === 'south'
    ? getVerticalDirectionPositionValues({
        direction,
        position,
        anchorPosition,
        popoverPosition,
        inputOffsetCorrection,
      })
    : getHorizontalDirectionPositionValues({
        direction,
        position,
        anchorPosition,
        popoverPosition,
        inputOffsetCorrection,
      });

// HORIZONTAL
const getHorizontalDirectionPositionTopValue = ({
  position,
  anchorPosition,
  popoverPosition,
  inputOffsetCorrection,
}) => {
  switch (position) {
    case 'middle':
      return anchorPosition.middle - popoverPosition.height / 2;
    case 'top':
      return anchorPosition.top - POPUP_OFFSET * 0.75 - inputOffsetCorrection;
    case 'bottom':
      return anchorPosition.bottom - popoverPosition.height + POPUP_OFFSET * 0.75 + inputOffsetCorrection;
  }
};

const getHorizontalDirectionPositionLeftValue = ({ direction, anchorPosition, popoverPosition }) =>
  direction === 'west'
    ? anchorPosition.left - popoverPosition.width - POPUP_OFFSET
    : anchorPosition.right + POPUP_OFFSET;

const getHorizontalDirectionArrowPositionTopValue = ({ position, popoverPosition }) => {
  switch (position) {
    case 'middle':
      return popoverPosition.height / 2 - ARROW_OFFSET;
    case 'top':
      return ARROW_OFFSET * 2.35;
    case 'bottom':
      return popoverPosition.height - ARROW_OFFSET * 4.5;
  }
};

const getHorizontalDirectionArrowPositionLeftValue = ({ direction, popoverPosition }) =>
  direction === 'west' ? popoverPosition.width - ARROW_OFFSET : -ARROW_OFFSET;

// VERTICAL
const getVerticalDirectionPositionTopValue = ({ direction, anchorPosition, popoverPosition }) =>
  direction === 'north'
    ? anchorPosition.top - popoverPosition.height - POPUP_OFFSET
    : anchorPosition.top + anchorPosition.height + POPUP_OFFSET;

const getVerticalDirectionPositionLeftValue = ({
  position,
  anchorPosition,
  popoverPosition,
  inputOffsetCorrection,
}) => {
  switch (position) {
    case 'center':
      return anchorPosition.center - popoverPosition.width / 2;
    case 'left':
      return anchorPosition.left - inputOffsetCorrection;
    case 'right':
      return anchorPosition.right - popoverPosition.width + inputOffsetCorrection;
  }
};

const getVerticalDirectionArrowPositionTopValue = ({ direction, popoverPosition }) =>
  direction === 'north' ? popoverPosition.height - ARROW_OFFSET : -ARROW_OFFSET;

const getVerticalDirectionArrowPositionLeftValue = ({ position, popoverPosition }) => {
  switch (position) {
    case 'center':
      return popoverPosition.width / 2 - ARROW_OFFSET;
    case 'left':
      return 2 * POPUP_OFFSET;
    case 'right':
      return popoverPosition.width - POPUP_OFFSET * 3;
  }
};

const isInViewport = ({ direction, anchorPosition, popoverPosition }) => {
  switch (direction) {
    case 'north':
      return anchorPosition.top - popoverPosition.height - POPUP_OFFSET > 0;
    case 'south':
      return anchorPosition.bottom + popoverPosition.height + POPUP_OFFSET < window.innerHeight;
    case 'east':
      return anchorPosition.right + popoverPosition.width + POPUP_OFFSET < window.innerWidth;
    case 'west':
      return anchorPosition.left - popoverPosition.width - POPUP_OFFSET > 0;
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

const getDirection = ({ direction, anchorPosition, popoverPosition }) => {
  const inputDirectionRendersOnScreen = isInViewport({ direction, anchorPosition, popoverPosition });
  const oppositeDirectionRendersOnScreen = isInViewport({
    direction: getOppositeDirection(direction),
    anchorPosition,
    popoverPosition,
  });

  return !inputDirectionRendersOnScreen && oppositeDirectionRendersOnScreen
    ? getOppositeDirection(direction)
    : direction;
};

const isPositionPossible = (position, anchorPosition, popoverPosition) => {
  switch (position) {
    case 'middle':
      return (
        anchorPosition.middle + popoverPosition.height / 2 < window.innerHeight &&
        anchorPosition.middle - popoverPosition.height / 2 > 0
      );
    case 'top':
      return anchorPosition.top + popoverPosition.height < window.innerHeight;
    case 'bottom':
      return anchorPosition.bottom - popoverPosition.height > 0;
    case 'center':
      return (
        anchorPosition.center + popoverPosition.width / 2 < window.innerWidth &&
        anchorPosition.center - popoverPosition.width / 2 > 0
      );
    case 'left':
      return anchorPosition.left + popoverPosition.width < window.innerWidth;
    case 'right':
      return anchorPosition.right - popoverPosition.width > 0;
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

const getPosition = ({ position, anchorPosition, popoverPosition }) => {
  if (isPositionPossible(position, anchorPosition, popoverPosition)) {
    return position;
  }

  switch (position) {
    case 'middle':
      return isPositionPossible('top', anchorPosition, popoverPosition)
        ? 'top'
        : isPositionPossible('bottom', anchorPosition, popoverPosition)
          ? 'bottom'
          : position;
    case 'center':
      return isPositionPossible('left', anchorPosition, popoverPosition)
        ? 'left'
        : isPositionPossible('right', anchorPosition, popoverPosition)
          ? 'right'
          : position;
    case 'top':
    case 'bottom':
      return isPositionPossible('middle', anchorPosition, popoverPosition) ? 'middle' : getOppositePosition(position);
    case 'left':
    case 'right':
      return isPositionPossible('center', anchorPosition, popoverPosition) ? 'center' : getOppositePosition(position);
  }
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
  const anchorPosition = getAnchorPositionValues(anchorEl);
  const popoverPosition = getPopoverPositionValues(popoverEl);

  const direction = getDirection({ direction: inputDirection, anchorPosition, popoverPosition });
  const position = getPosition({ position: inputPosition, anchorPosition, popoverPosition });

  const inputDirectionContentRendersOnScreen = isInViewport({
    direction: inputDirection,
    anchorPosition,
    popoverPosition: { height: getElementHeightValue(popoverContentEl) },
  });
  const oppositeDirectionContentRendersOnScreen = isInViewport({
    direction: getOppositeDirection(inputDirection),
    anchorPosition,
    popoverPosition: { height: getElementHeightValue(popoverContentEl) },
  });
  let maxPopoverHeight = 'initial';
  if (!inputDirectionContentRendersOnScreen && !oppositeDirectionContentRendersOnScreen) {
    maxPopoverHeight = getMaxPopoverHeightValue({
      direction,
      anchorPosition,
    });
  }

  return {
    maxPopoverHeight,
    ...getPositionValues({
      direction,
      position,
      anchorPosition,
      popoverPosition,
      inputOffsetCorrection,
    }),
  };
};
