import { themr } from 'react-css-themr';
import { BUTTON } from '../identifiers';

import Button from './Button';
import { iconButtonFactory } from './IconButton';
import { FontIcon } from '../font_icon/FontIcon';
import theme from './theme.css';

const IconButton = iconButtonFactory(FontIcon);

const ThemedButton = themr(BUTTON, theme)(Button);
const ThemedIconButton = themr(BUTTON, theme)(IconButton);

export default ThemedButton;
export { ThemedButton as Button };
export { ThemedIconButton as IconButton };
