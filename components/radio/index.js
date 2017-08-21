import { themr } from 'react-css-themr';
import { RADIO } from '../identifiers';
import Radio from './Radio';
import { radioButtonFactory } from './RadioButton';
import { radioGroupFactory } from './RadioGroup';
import theme from './theme.css';

const ThemedRadio = themr(RADIO, theme)(Radio);
const ThemedRadioButton = themr(RADIO, theme)(radioButtonFactory(ThemedRadio));
const ThemedRadioGroup = themr(RADIO, theme)(radioGroupFactory(ThemedRadioButton));

export default ThemedRadioButton;
export { ThemedRadioButton as RadioButton };
export { ThemedRadioGroup as RadioGroup };
