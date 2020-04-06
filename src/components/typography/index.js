import Marker from './Marker';
import Monospaced from './Monospaced';
import { textFactory } from './Text';

const Heading1 = textFactory('heading', 'heading-1', 'h1');
const Heading2 = textFactory('heading', 'heading-2', 'h2');
const Heading3 = textFactory('heading', 'heading-3', 'h3');
const Heading4 = textFactory('heading', 'heading-4', 'h4');
const Heading5 = textFactory('heading', 'heading-5', 'h5');

const TextDisplay = textFactory('text', 'text-display', 'p');
const TextBody = textFactory('text', 'text-body', 'p');
const TextBodyCompact = textFactory('text', 'text-body-compact', 'p');
const TextSmall = textFactory('text', 'text-small', 'p');

const UITextDisplay = textFactory('ui-text', 'ui-text-display', 'p');
const UITextBody = textFactory('ui-text', 'ui-text-body', 'p');
const UITextSmall = textFactory('ui-text', 'ui-text-small', 'p');

Heading1.displayName = 'Heading1';
Heading2.displayName = 'Heading2';
Heading3.displayName = 'Heading3';
Heading4.displayName = 'Heading4';
Heading5.displayName = 'Heading5';
TextDisplay.displayName = 'TextDisplay';
TextBody.displayName = 'TextBody';
TextBodyCompact.displayName = 'TextBodyCompact';
TextSmall.displayName = 'TextSmall';

UITextDisplay.displayName = 'UITextDisplay';
UITextBody.displayName = 'UITextBody';
UITextSmall.displayName = 'UITextSmall';

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Marker,
  Monospaced,
  TextBody,
  TextBodyCompact,
  TextDisplay,
  TextSmall,
  UITextDisplay,
  UITextBody,
  UITextSmall,
};
