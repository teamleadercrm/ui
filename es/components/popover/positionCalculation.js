import _objectSpread from '@babel/runtime/helpers/objectSpread';
var POPUP_OFFSET = 6;
var POSITION_START = 'start';
var POSITION_CENTER = 'center';
var POSITION_END = 'end';
var DIRECTION_NORTH = 'north';
var DIRECTION_EAST = 'east';
var DIRECTION_SOUTH = 'south';
var DIRECTION_WEST = 'west';

var getElementPositionValues = function getElementPositionValues(element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
    top = _element$getBoundingC.top,
    left = _element$getBoundingC.left,
    right = _element$getBoundingC.right,
    bottom = _element$getBoundingC.bottom;

  return {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    centerY: top + (bottom - top) / 2,
    centerX: left + (right - left) / 2,
  };
};

var getElementDimensionValues = function getElementDimensionValues(element) {
  var _element$getBoundingC2 = element.getBoundingClientRect(),
    width = _element$getBoundingC2.width,
    height = _element$getBoundingC2.height;

  return {
    width: width,
    height: height,
  };
};

var getVerticalDirectionPositionValues = function getVerticalDirectionPositionValues(_ref) {
  var direction = _ref.direction,
    position = _ref.position,
    anchorPosition = _ref.anchorPosition,
    popoverDimensions = _ref.popoverDimensions,
    inputOffsetCorrection = _ref.inputOffsetCorrection;
  return {
    top: getVerticalDirectionPositionTopValue({
      direction: direction,
      anchorPosition: anchorPosition,
      popoverDimensions: popoverDimensions,
    }),
    left: getVerticalDirectionPositionLeftValue({
      position: position,
      anchorPosition: anchorPosition,
      popoverDimensions: popoverDimensions,
      inputOffsetCorrection: inputOffsetCorrection,
    }),
  };
};

var getHorizontalDirectionPositionValues = function getHorizontalDirectionPositionValues(_ref2) {
  var direction = _ref2.direction,
    position = _ref2.position,
    anchorPosition = _ref2.anchorPosition,
    popoverDimensions = _ref2.popoverDimensions,
    inputOffsetCorrection = _ref2.inputOffsetCorrection;
  return {
    top: getHorizontalDirectionPositionTopValue({
      position: position,
      anchorPosition: anchorPosition,
      popoverDimensions: popoverDimensions,
      inputOffsetCorrection: inputOffsetCorrection,
    }),
    left: getHorizontalDirectionPositionLeftValue({
      direction: direction,
      anchorPosition: anchorPosition,
      popoverDimensions: popoverDimensions,
    }),
  };
};

var getPositionValues = function getPositionValues(_ref3) {
  var direction = _ref3.direction,
    position = _ref3.position,
    anchorPosition = _ref3.anchorPosition,
    popoverDimensions = _ref3.popoverDimensions,
    inputOffsetCorrection = _ref3.inputOffsetCorrection;
  return direction === DIRECTION_NORTH || direction === DIRECTION_SOUTH
    ? getVerticalDirectionPositionValues({
        direction: direction,
        position: position,
        anchorPosition: anchorPosition,
        popoverDimensions: popoverDimensions,
        inputOffsetCorrection: inputOffsetCorrection,
      })
    : getHorizontalDirectionPositionValues({
        direction: direction,
        position: position,
        anchorPosition: anchorPosition,
        popoverDimensions: popoverDimensions,
        inputOffsetCorrection: inputOffsetCorrection,
      });
}; // HORIZONTAL

var getHorizontalDirectionPositionTopValue = function getHorizontalDirectionPositionTopValue(_ref4) {
  var position = _ref4.position,
    anchorPosition = _ref4.anchorPosition,
    popoverDimensions = _ref4.popoverDimensions,
    inputOffsetCorrection = _ref4.inputOffsetCorrection;

  switch (position) {
    case POSITION_CENTER:
      return anchorPosition.centerY - popoverDimensions.height / 2;

    case POSITION_START:
      return anchorPosition.top - POPUP_OFFSET * 0.75 - inputOffsetCorrection;

    case POSITION_END:
      return anchorPosition.bottom - popoverDimensions.height + POPUP_OFFSET * 0.75 + inputOffsetCorrection;
  }
};

var getHorizontalDirectionPositionLeftValue = function getHorizontalDirectionPositionLeftValue(_ref5) {
  var direction = _ref5.direction,
    anchorPosition = _ref5.anchorPosition,
    popoverDimensions = _ref5.popoverDimensions;
  return direction === DIRECTION_WEST
    ? anchorPosition.left - popoverDimensions.width - POPUP_OFFSET
    : anchorPosition.right + POPUP_OFFSET;
}; // VERTICAL

var getVerticalDirectionPositionTopValue = function getVerticalDirectionPositionTopValue(_ref6) {
  var direction = _ref6.direction,
    anchorPosition = _ref6.anchorPosition,
    popoverDimensions = _ref6.popoverDimensions;
  return direction === DIRECTION_NORTH
    ? anchorPosition.top - popoverDimensions.height - POPUP_OFFSET
    : anchorPosition.bottom + POPUP_OFFSET;
};

var getVerticalDirectionPositionLeftValue = function getVerticalDirectionPositionLeftValue(_ref7) {
  var position = _ref7.position,
    anchorPosition = _ref7.anchorPosition,
    popoverDimensions = _ref7.popoverDimensions,
    inputOffsetCorrection = _ref7.inputOffsetCorrection;

  switch (position) {
    case POSITION_CENTER:
      return anchorPosition.centerX - popoverDimensions.width / 2;

    case POSITION_START:
      return anchorPosition.left - inputOffsetCorrection;

    case POSITION_END:
      return anchorPosition.right - popoverDimensions.width + inputOffsetCorrection;
  }
};

var isInViewport = function isInViewport(_ref8) {
  var direction = _ref8.direction,
    anchorPosition = _ref8.anchorPosition,
    popoverDimensions = _ref8.popoverDimensions;

  switch (direction) {
    case DIRECTION_NORTH:
      return anchorPosition.top - popoverDimensions.height - POPUP_OFFSET > 0;

    case DIRECTION_SOUTH:
      return anchorPosition.bottom + popoverDimensions.height + POPUP_OFFSET < window.innerHeight;

    case DIRECTION_EAST:
      return anchorPosition.right + popoverDimensions.width + POPUP_OFFSET < window.innerWidth;

    case DIRECTION_WEST:
      return anchorPosition.left - popoverDimensions.width - POPUP_OFFSET > 0;
  }
};

var getOppositeDirection = function getOppositeDirection(direction) {
  switch (direction) {
    case DIRECTION_NORTH:
      return DIRECTION_SOUTH;

    case DIRECTION_SOUTH:
      return DIRECTION_NORTH;

    case DIRECTION_EAST:
      return DIRECTION_WEST;

    case DIRECTION_WEST:
      return DIRECTION_EAST;
  }
};

var getDirection = function getDirection(_ref9) {
  var direction = _ref9.direction,
    anchorPosition = _ref9.anchorPosition,
    popoverDimensions = _ref9.popoverDimensions;
  var inputDirectionRendersOnScreen = isInViewport({
    direction: direction,
    anchorPosition: anchorPosition,
    popoverDimensions: popoverDimensions,
  });
  var oppositeDirectionRendersOnScreen = isInViewport({
    direction: getOppositeDirection(direction),
    anchorPosition: anchorPosition,
    popoverDimensions: popoverDimensions,
  });
  return !inputDirectionRendersOnScreen && oppositeDirectionRendersOnScreen
    ? getOppositeDirection(direction)
    : direction;
};

var isPositionPossible = function isPositionPossible(direction, position, anchorPosition, popoverDimensions) {
  return direction === DIRECTION_NORTH || direction === DIRECTION_SOUTH
    ? isVerticalDirectionPositionPossible(position, anchorPosition, popoverDimensions)
    : isHorizontalDirectionPositionPossible(position, anchorPosition, popoverDimensions);
};

var isVerticalDirectionPositionPossible = function isVerticalDirectionPositionPossible(
  position,
  anchorPosition,
  popoverDimensions,
) {
  switch (position) {
    case POSITION_CENTER:
      return (
        anchorPosition.centerY + popoverDimensions.height / 2 < window.innerHeight &&
        anchorPosition.centerY - popoverDimensions.height / 2 > 0
      );

    case POSITION_START:
      return anchorPosition.top + popoverDimensions.height < window.innerHeight;

    case POSITION_END:
      return anchorPosition.bottom - popoverDimensions.height > 0;
  }
};

var isHorizontalDirectionPositionPossible = function isHorizontalDirectionPositionPossible(
  position,
  anchorPosition,
  popoverDimensions,
) {
  switch (position) {
    case POSITION_CENTER:
      return (
        anchorPosition.centerX + popoverDimensions.width / 2 < window.innerWidth &&
        anchorPosition.centerX - popoverDimensions.width / 2 > 0
      );

    case POSITION_START:
      return anchorPosition.left + popoverDimensions.width < window.innerWidth;

    case POSITION_END:
      return anchorPosition.right - popoverDimensions.width > 0;
  }
};

var getOppositePosition = function getOppositePosition(direction) {
  switch (direction) {
    case POSITION_START:
      return POSITION_END;

    case POSITION_END:
      return POSITION_START;
  }
};

var getPosition = function getPosition(_ref10) {
  var direction = _ref10.direction,
    position = _ref10.position,
    anchorPosition = _ref10.anchorPosition,
    popoverDimensions = _ref10.popoverDimensions;

  if (isPositionPossible(position, anchorPosition, popoverDimensions)) {
    return position;
  }

  switch (position) {
    case POSITION_CENTER:
      return isPositionPossible(POSITION_START, anchorPosition, popoverDimensions)
        ? POSITION_START
        : isPositionPossible(POSITION_END, anchorPosition, popoverDimensions)
        ? POSITION_END
        : position;

    default:
      return isPositionPossible(POSITION_CENTER, anchorPosition, popoverDimensions)
        ? POSITION_CENTER
        : getOppositePosition(position);
  }
};

var getMaxHeightValue = function getMaxHeightValue(_ref11) {
  var direction = _ref11.direction,
    anchorPosition = _ref11.anchorPosition;

  switch (direction) {
    case DIRECTION_NORTH:
      return anchorPosition.top - POPUP_OFFSET * 2;

    case DIRECTION_SOUTH:
      return window.innerHeight - anchorPosition.bottom - POPUP_OFFSET * 2;
  }
};

export var calculatePositions = function calculatePositions(
  anchorEl,
  popoverEl,
  inputDirection,
  inputPosition,
  inputOffsetCorrection,
) {
  var anchorPosition = getElementPositionValues(anchorEl);
  var popoverDimensions = getElementDimensionValues(popoverEl);
  var direction = getDirection({
    direction: inputDirection,
    anchorPosition: anchorPosition,
    popoverDimensions: popoverDimensions,
  });
  var position = getPosition({
    direction: direction,
    position: inputPosition,
    anchorPosition: anchorPosition,
    popoverDimensions: popoverDimensions,
  });
  return _objectSpread(
    {
      maxHeight: getMaxHeightValue({
        direction: direction,
        anchorPosition: anchorPosition,
      }),
    },
    getPositionValues({
      direction: direction,
      position: position,
      anchorPosition: anchorPosition,
      popoverDimensions: popoverDimensions,
      inputOffsetCorrection: inputOffsetCorrection,
    }),
  );
};
