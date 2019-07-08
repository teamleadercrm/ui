'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }),
  Object.defineProperty(exports, 'Monospaced', {
    enumerable: !0,
    get: function() {
      return _Monospaced.default;
    },
  }),
  (exports.TextSmall = exports.TextDisplay = exports.TextBody = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = void 0);
var _Monospaced = _interopRequireDefault(require('./Monospaced')),
  _Text = require('./Text'),
  Heading1 = (0, _Text.textFactory)('heading', 'heading-1', 'h1');
exports.Heading1 = Heading1;
var Heading2 = (0, _Text.textFactory)('heading', 'heading-2', 'h2');
exports.Heading2 = Heading2;
var Heading3 = (0, _Text.textFactory)('heading', 'heading-3', 'h3');
exports.Heading3 = Heading3;
var Heading4 = (0, _Text.textFactory)('heading', 'heading-4', 'h4');
exports.Heading4 = Heading4;
var TextDisplay = (0, _Text.textFactory)('text', 'text-display', 'p');
exports.TextDisplay = TextDisplay;
var TextBody = (0, _Text.textFactory)('text', 'text-body', 'p');
exports.TextBody = TextBody;
var TextSmall = (0, _Text.textFactory)('text', 'text-small', 'p');
(exports.TextSmall = TextSmall),
  (Heading1.displayName = 'Heading1'),
  (Heading2.displayName = 'Heading2'),
  (Heading3.displayName = 'Heading3'),
  (Heading4.displayName = 'Heading4'),
  (TextDisplay.displayName = 'TextDisplay'),
  (TextBody.displayName = 'TextBody'),
  (TextSmall.displayName = 'TextSmall');
