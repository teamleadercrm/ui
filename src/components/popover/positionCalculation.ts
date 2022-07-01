const POPUP_OFFSET = 3;

const POSITION_START = 'start';
const POSITION_CENTER = 'center';
const POSITION_END = 'end';

const DIRECTION_NORTH = 'north';
const DIRECTION_EAST = 'east';
const DIRECTION_SOUTH = 'south';
const DIRECTION_WEST = 'west';

type Direction = typeof DIRECTION_NORTH | typeof DIRECTION_EAST | typeof DIRECTION_SOUTH | typeof DIRECTION_WEST;
type Position = typeof POSITION_START | typeof POSITION_CENTER | typeof POSITION_END;

type PositionValues = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  centerY: number;
  centerX: number;
};

type DimensionValues = {
  width: number;
  height: number;
};

interface DirectionPositionValues {
  direction: Direction;
  position: Position;
  anchorPosition: PositionValues;
  popoverDimensions: DimensionValues;
  inputOffsetCorrection: number;
}

const getElementPositionValues = (element: Element) => {
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

const getElementDimensionValues = (element: Element) => {
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
};

// HORIZONTAL
const getHorizontalDirectionPositionTopValue = (
  position: Position,
  anchorPosition: PositionValues,
  popoverDimensions: DimensionValues,
  inputOffsetCorrection: number,
) => {
  switch (position) {
    case POSITION_CENTER:
      return anchorPosition.centerY - popoverDimensions.height / 2;
    case POSITION_START:
      return anchorPosition.top - POPUP_OFFSET * 0.75 - inputOffsetCorrection;
    case POSITION_END:
      return anchorPosition.bottom - popoverDimensions.height + POPUP_OFFSET * 0.75 + inputOffsetCorrection;
  }
};

const getHorizontalDirectionPositionLeftValue = (
  direction: Direction,
  anchorPosition: PositionValues,
  popoverDimensions: DimensionValues,
) =>
  direction === DIRECTION_WEST
    ? anchorPosition.left - popoverDimensions.width - POPUP_OFFSET
    : anchorPosition.right + POPUP_OFFSET;
// VERTICAL
const getVerticalDirectionPositionTopValue = (
  direction: Direction,
  anchorPosition: PositionValues,
  popoverDimensions: DimensionValues,
) =>
  direction === DIRECTION_NORTH
    ? anchorPosition.top - popoverDimensions.height - POPUP_OFFSET
    : anchorPosition.bottom + POPUP_OFFSET;

const getVerticalDirectionPositionLeftValue = (
  position: Position,
  anchorPosition: PositionValues,
  popoverDimensions: DimensionValues,
  inputOffsetCorrection: number,
) => {
  switch (position) {
    case POSITION_CENTER:
      return anchorPosition.centerX - popoverDimensions.width / 2;
    case POSITION_START:
      return anchorPosition.left - inputOffsetCorrection;
    case POSITION_END:
      return anchorPosition.right - popoverDimensions.width + inputOffsetCorrection;
  }
};

const getVerticalDirectionPositionValues = ({
  direction,
  position,
  anchorPosition,
  popoverDimensions,
  inputOffsetCorrection,
}: DirectionPositionValues) => ({
  top: getVerticalDirectionPositionTopValue(direction, anchorPosition, popoverDimensions),
  left: getVerticalDirectionPositionLeftValue(position, anchorPosition, popoverDimensions, inputOffsetCorrection),
});

const getHorizontalDirectionPositionValues = ({
  direction,
  position,
  anchorPosition,
  popoverDimensions,
  inputOffsetCorrection,
}: DirectionPositionValues) => ({
  top: getHorizontalDirectionPositionTopValue(position, anchorPosition, popoverDimensions, inputOffsetCorrection),
  left: getHorizontalDirectionPositionLeftValue(direction, anchorPosition, popoverDimensions),
});

const getPositionValues = ({
  direction,
  position,
  anchorPosition,
  popoverDimensions,
  inputOffsetCorrection,
}: DirectionPositionValues) =>
  direction === DIRECTION_NORTH || direction === DIRECTION_SOUTH
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

const isInViewport = (direction: Direction, anchorPosition: PositionValues, popoverDimensions: DimensionValues) => {
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

const getOppositeDirection = (direction: Direction) => {
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

const getClockwise90DegreeDirection = (direction: Direction) => {
  switch (direction) {
    case DIRECTION_NORTH:
      return DIRECTION_EAST;
    case DIRECTION_EAST:
      return DIRECTION_SOUTH;
    case DIRECTION_SOUTH:
      return DIRECTION_WEST;
    case DIRECTION_WEST:
      return DIRECTION_NORTH;
  }
};

const getClockwise270DegreeDirection = (direction: Direction) => {
  switch (direction) {
    case DIRECTION_NORTH:
      return DIRECTION_WEST;
    case DIRECTION_EAST:
      return DIRECTION_NORTH;
    case DIRECTION_SOUTH:
      return DIRECTION_EAST;
    case DIRECTION_WEST:
      return DIRECTION_SOUTH;
  }
};

const getDirection = (direction: Direction, anchorPosition: PositionValues, popoverDimensions: DimensionValues) => {
  const inputDirectionRendersOnScreen = isInViewport(direction, anchorPosition, popoverDimensions);
  const oppositeDirectionRendersOnScreen = isInViewport(
    getOppositeDirection(direction),
    anchorPosition,
    popoverDimensions,
  );
  const clockwise90DegreeDirectionRendersOnScreen = isInViewport(
    getClockwise90DegreeDirection(direction),
    anchorPosition,
    popoverDimensions,
  );

  const clockwise270DegreeDirectionRendersOnScreen = isInViewport(
    getClockwise270DegreeDirection(direction),
    anchorPosition,
    popoverDimensions,
  );

  if (!inputDirectionRendersOnScreen) {
    if (oppositeDirectionRendersOnScreen) {
      return getOppositeDirection(direction);
    }
    if (clockwise90DegreeDirectionRendersOnScreen) {
      return getClockwise90DegreeDirection(direction);
    }
    if (clockwise270DegreeDirectionRendersOnScreen) {
      return getClockwise270DegreeDirection(direction);
    }
  }

  return direction;
};

const isVerticalDirectionPositionPossible = (
  position: Position,
  anchorPosition: PositionValues,
  popoverDimensions: DimensionValues,
) => {
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

const isHorizontalDirectionPositionPossible = (
  position: Position,
  anchorPosition: PositionValues,
  popoverDimensions: DimensionValues,
) => {
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

const isPositionPossible = (
  direction: Direction,
  position: Position,
  anchorPosition: PositionValues,
  popoverDimensions: DimensionValues,
) =>
  direction === DIRECTION_NORTH || direction === DIRECTION_SOUTH
    ? isVerticalDirectionPositionPossible(position, anchorPosition, popoverDimensions)
    : isHorizontalDirectionPositionPossible(position, anchorPosition, popoverDimensions);

const getOppositePosition = (position: Position) => {
  switch (position) {
    case POSITION_START:
      return POSITION_END;
    case POSITION_END:
      return POSITION_START;
  }
};

const getPosition = (
  direction: Direction,
  position: Position,
  anchorPosition: PositionValues,
  popoverDimensions: DimensionValues,
) => {
  if (isPositionPossible(direction, position, anchorPosition, popoverDimensions)) {
    return position;
  }

  switch (position) {
    case POSITION_CENTER:
      return isPositionPossible(direction, POSITION_START, anchorPosition, popoverDimensions)
        ? POSITION_START
        : isPositionPossible(direction, POSITION_END, anchorPosition, popoverDimensions)
        ? POSITION_END
        : position;
    default:
      return isPositionPossible(direction, POSITION_CENTER, anchorPosition, popoverDimensions)
        ? POSITION_CENTER
        : getOppositePosition(position);
  }
};

const getMaxHeightValue = (direction: Direction, anchorPosition: PositionValues) => {
  switch (direction) {
    case DIRECTION_NORTH:
      return anchorPosition.top - POPUP_OFFSET * 2;
    case DIRECTION_SOUTH:
      return window.innerHeight - anchorPosition.bottom - POPUP_OFFSET * 2;
  }
};

export const calculatePositions = (
  anchorEl: Element,
  popoverEl: Element,
  inputDirection: Direction,
  inputPosition: Position,
  inputOffsetCorrection: number,
) => {
  const anchorPosition = getElementPositionValues(anchorEl);
  const popoverDimensions = getElementDimensionValues(popoverEl);

  const direction = getDirection(inputDirection, anchorPosition, popoverDimensions);
  const position = getPosition(direction, inputPosition, anchorPosition, popoverDimensions);

  return {
    maxHeight: getMaxHeightValue(direction, anchorPosition),
    ...(position &&
      getPositionValues({
        direction,
        position,
        anchorPosition,
        popoverDimensions,
        inputOffsetCorrection,
      })),
  };
};
