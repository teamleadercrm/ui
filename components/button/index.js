import Button from './Button';
import { iconButtonFactory } from './IconButton';
import { FontIcon } from '../font_icon/FontIcon';

const IconButton = iconButtonFactory(FontIcon);

export default Button;
export {
  Button,
  IconButton,
};
