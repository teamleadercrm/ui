import { themr } from 'react-css-themr';
import { MENU } from '../identifiers';
import { IconButton } from '../button';
import { MenuDivider } from './MenuDivider';
import { menuItemFactory } from './MenuItem';
import { menuFactory } from './Menu';
import { iconMenuFactory } from './IconMenu';
import theme from './theme.css';

const applyTheme = Component => themr(MENU, theme)(Component);

const ThemedMenuDivider = applyTheme(MenuDivider);
const ThemedMenuItem = applyTheme(menuItemFactory());
const ThemedMenu = applyTheme(menuFactory(ThemedMenuItem));
console.log("IconButton", IconButton);
const ThemedIconMenu = applyTheme(iconMenuFactory(IconButton, ThemedMenu));

export { ThemedMenuDivider as MenuDivider };
export { ThemedMenuItem as MenuItem };
export { ThemedMenu as Menu };
export { ThemedIconMenu as IconMenu };
