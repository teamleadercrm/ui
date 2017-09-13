import { headingFactory } from './Heading';
import { monospacedFactory } from './Monospaced';
import { oldStyleNumberFactory } from './OldStyleNumber';
import { textFactory } from './Text';

const Heading1 = headingFactory('heading-1', 'h1');
const Heading2 = headingFactory('heading-2', 'h2');
const Heading3 = headingFactory('heading-3', 'h3');
const Heading4 = headingFactory('heading-4', 'h4');

const Monospaced = monospacedFactory('span');
const OldStyleNumber = oldStyleNumberFactory('span');

const TextBody = textFactory('text-body', 'p');
const TextSmall = textFactory('text-small', 'p');
const TextTiny = textFactory('text-tiny', 'p');

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Monospaced,
  OldStyleNumber,
  TextBody,
  TextSmall,
  TextTiny,
};
