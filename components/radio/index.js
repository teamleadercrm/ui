import { themr } from 'react-css-themr';
import { RADIO } from '../identifiers';
import { RadioButton } from './RadioButton';
import { radioGroupFactory } from './RadioGroup';
import theme from './theme.css';

const ThemedRadioButton = themr(RADIO, theme)(RadioButton);
const ThemedRadioGroup = themr(RADIO, theme)(radioGroupFactory(ThemedRadioButton));

export default ThemedRadioButton;
export { ThemedRadioButton as RadioButton };
export { ThemedRadioGroup as RadioGroup };
