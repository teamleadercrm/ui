import Monospaced from './Monospaced';
import { textFactory } from './Text';

const Heading1 = textFactory('heading', 'heading-1', 'h1');
const Heading2 = textFactory('heading', 'heading-2', 'h2');
const Heading3 = textFactory('heading', 'heading-3', 'h3');
const Heading4 = textFactory('heading', 'heading-4', 'h4');

const TextBody = textFactory('text', 'text-body', 'p');
const TextSmall = textFactory('text', 'text-small', 'p');
const TextTiny = textFactory('text', 'text-tiny', 'p');

export { Heading1, Heading2, Heading3, Heading4, Monospaced, TextBody, TextSmall, TextTiny };
