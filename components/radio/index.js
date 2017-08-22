import { themr } from 'react-css-themr';
import { RADIO } from '../identifiers';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';
import theme from './theme.css';

const ThemedRadioButton = themr(RADIO, theme)(RadioButton);
const ThemedRadioGroup = themr(RADIO, theme)(RadioGroup);

export default ThemedRadioButton;
export { ThemedRadioButton as RadioButton };
export { ThemedRadioGroup as RadioGroup };
