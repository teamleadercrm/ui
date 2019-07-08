'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.calculatePositions = void 0);
var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  POPUP_OFFSET = 6,
  POSITION_START = 'start',
  POSITION_CENTER = 'center',
  POSITION_END = 'end',
  DIRECTION_NORTH = 'north',
  DIRECTION_EAST = 'east',
  DIRECTION_SOUTH = 'south',
  DIRECTION_WEST = 'west',
  getElementPositionValues = function(i) {
    var o = i.getBoundingClientRect(),
      t = o.top,
      e = o.left,
      n = o.right,
      r = o.bottom;
    return { top: t, left: e, right: n, bottom: r, centerY: t + (r - t) / 2, centerX: e + (n - e) / 2 };
  },
  getElementDimensionValues = function(i) {
    var o = i.getBoundingClientRect();
    return { width: o.width, height: o.height };
  },
  getVerticalDirectionPositionValues = function(i) {
    var o = i.direction,
      t = i.position,
      e = i.anchorPosition,
      n = i.popoverDimensions,
      r = i.inputOffsetCorrection;
    return {
      top: getVerticalDirectionPositionTopValue({ direction: o, anchorPosition: e, popoverDimensions: n }),
      left: getVerticalDirectionPositionLeftValue({
        position: t,
        anchorPosition: e,
        popoverDimensions: n,
        inputOffsetCorrection: r,
      }),
    };
  },
  getHorizontalDirectionPositionValues = function(i) {
    var o = i.direction,
      t = i.position,
      e = i.anchorPosition,
      n = i.popoverDimensions,
      r = i.inputOffsetCorrection;
    return {
      top: getHorizontalDirectionPositionTopValue({
        position: t,
        anchorPosition: e,
        popoverDimensions: n,
        inputOffsetCorrection: r,
      }),
      left: getHorizontalDirectionPositionLeftValue({ direction: o, anchorPosition: e, popoverDimensions: n }),
    };
  },
  getPositionValues = function(i) {
    var o = i.direction,
      t = i.position,
      e = i.anchorPosition,
      n = i.popoverDimensions,
      r = i.inputOffsetCorrection;
    return o === DIRECTION_NORTH || o === DIRECTION_SOUTH
      ? getVerticalDirectionPositionValues({
          direction: o,
          position: t,
          anchorPosition: e,
          popoverDimensions: n,
          inputOffsetCorrection: r,
        })
      : getHorizontalDirectionPositionValues({
          direction: o,
          position: t,
          anchorPosition: e,
          popoverDimensions: n,
          inputOffsetCorrection: r,
        });
  },
  getHorizontalDirectionPositionTopValue = function(i) {
    var o = i.position,
      t = i.anchorPosition,
      e = i.popoverDimensions,
      n = i.inputOffsetCorrection;
    switch (o) {
      case POSITION_CENTER:
        return t.centerY - e.height / 2;
      case POSITION_START:
        return t.top - 0.75 * POPUP_OFFSET - n;
      case POSITION_END:
        return t.bottom - e.height + 0.75 * POPUP_OFFSET + n;
    }
  },
  getHorizontalDirectionPositionLeftValue = function(i) {
    var o = i.direction,
      t = i.anchorPosition,
      e = i.popoverDimensions;
    return o === DIRECTION_WEST ? t.left - e.width - POPUP_OFFSET : t.right + POPUP_OFFSET;
  },
  getVerticalDirectionPositionTopValue = function(i) {
    var o = i.direction,
      t = i.anchorPosition,
      e = i.popoverDimensions;
    return o === DIRECTION_NORTH ? t.top - e.height - POPUP_OFFSET : t.bottom + POPUP_OFFSET;
  },
  getVerticalDirectionPositionLeftValue = function(i) {
    var o = i.position,
      t = i.anchorPosition,
      e = i.popoverDimensions,
      n = i.inputOffsetCorrection;
    switch (o) {
      case POSITION_CENTER:
        return t.centerX - e.width / 2;
      case POSITION_START:
        return t.left - n;
      case POSITION_END:
        return t.right - e.width + n;
    }
  },
  isInViewport = function(i) {
    var o = i.direction,
      t = i.anchorPosition,
      e = i.popoverDimensions;
    switch (o) {
      case DIRECTION_NORTH:
        return 0 < t.top - e.height - POPUP_OFFSET;
      case DIRECTION_SOUTH:
        return t.bottom + e.height + POPUP_OFFSET < window.innerHeight;
      case DIRECTION_EAST:
        return t.right + e.width + POPUP_OFFSET < window.innerWidth;
      case DIRECTION_WEST:
        return 0 < t.left - e.width - POPUP_OFFSET;
    }
  },
  getOppositeDirection = function(i) {
    switch (i) {
      case DIRECTION_NORTH:
        return DIRECTION_SOUTH;
      case DIRECTION_SOUTH:
        return DIRECTION_NORTH;
      case DIRECTION_EAST:
        return DIRECTION_WEST;
      case DIRECTION_WEST:
        return DIRECTION_EAST;
    }
  },
  getDirection = function(i) {
    var o = i.direction,
      t = i.anchorPosition,
      e = i.popoverDimensions,
      n = isInViewport({ direction: o, anchorPosition: t, popoverDimensions: e }),
      r = isInViewport({ direction: getOppositeDirection(o), anchorPosition: t, popoverDimensions: e });
    return !n && r ? getOppositeDirection(o) : o;
  },
  isPositionPossible = function(i, o, t, e) {
    return i === DIRECTION_NORTH || i === DIRECTION_SOUTH
      ? isVerticalDirectionPositionPossible(o, t, e)
      : isHorizontalDirectionPositionPossible(o, t, e);
  },
  isVerticalDirectionPositionPossible = function(i, o, t) {
    switch (i) {
      case POSITION_CENTER:
        return o.centerY + t.height / 2 < window.innerHeight && 0 < o.centerY - t.height / 2;
      case POSITION_START:
        return o.top + t.height < window.innerHeight;
      case POSITION_END:
        return 0 < o.bottom - t.height;
    }
  },
  isHorizontalDirectionPositionPossible = function(i, o, t) {
    switch (i) {
      case POSITION_CENTER:
        return o.centerX + t.width / 2 < window.innerWidth && 0 < o.centerX - t.width / 2;
      case POSITION_START:
        return o.left + t.width < window.innerWidth;
      case POSITION_END:
        return 0 < o.right - t.width;
    }
  },
  getOppositePosition = function(i) {
    switch (i) {
      case POSITION_START:
        return POSITION_END;
      case POSITION_END:
        return POSITION_START;
    }
  },
  getPosition = function(i) {
    i.direction;
    var o = i.position,
      t = i.anchorPosition,
      e = i.popoverDimensions;
    if (isPositionPossible(o, t, e)) return o;
    switch (o) {
      case POSITION_CENTER:
        return isPositionPossible(POSITION_START, t, e)
          ? POSITION_START
          : isPositionPossible(POSITION_END, t, e)
            ? POSITION_END
            : o;
      default:
        return isPositionPossible(POSITION_CENTER, t, e) ? POSITION_CENTER : getOppositePosition(o);
    }
  },
  getMaxHeightValue = function(i) {
    var o = i.direction,
      t = i.anchorPosition;
    switch (o) {
      case DIRECTION_NORTH:
        return t.top - 2 * POPUP_OFFSET;
      case DIRECTION_SOUTH:
        return window.innerHeight - t.bottom - 2 * POPUP_OFFSET;
    }
  },
  calculatePositions = function(i, o, t, e, n) {
    var r = getElementPositionValues(i),
      s = getElementDimensionValues(o),
      c = getDirection({ direction: t, anchorPosition: r, popoverDimensions: s }),
      O = getPosition({ direction: c, position: e, anchorPosition: r, popoverDimensions: s });
    return (0, _objectSpread2.default)(
      { maxHeight: getMaxHeightValue({ direction: c, anchorPosition: r }) },
      getPositionValues({
        direction: c,
        position: O,
        anchorPosition: r,
        popoverDimensions: s,
        inputOffsetCorrection: n,
      }),
    );
  };
exports.calculatePositions = calculatePositions;
