import { themr } from 'react-css-themr';
import { TOGGLE } from '../identifiers';
import Toggle from './Toggle';
import theme from './theme.css';

const ThemedToggle = themr(TOGGLE, theme)(Toggle);

export default ThemedToggle;
export { ThemedToggle as Toggle };
