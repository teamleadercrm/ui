import { themr } from 'react-css-themr';
import { POPOVER } from '../identifiers';
import { Popover } from './Popover';
import theme from './theme.css';

const ThemedPopover = themr(POPOVER, theme)(Popover);
export default ThemedPopover;

export { ThemedPopover as Popover };
