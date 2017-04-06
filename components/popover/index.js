import { themr } from 'react-css-themr';
import { POPOVER_VERTICAL, POPOVER_HORIZONTAL } from '../identifiers';
import { PopoverHorizontal, PopoverVertical } from './Popover';
import theme from './theme.css';

const ThemedPopoverVertical = themr(POPOVER_VERTICAL, theme)(PopoverVertical);
export { ThemedPopoverVertical as PopoverVertical };

const ThemedPopoverHorizontal = themr(POPOVER_HORIZONTAL, theme)(PopoverHorizontal);
export { ThemedPopoverHorizontal as PopoverHorizontal };
