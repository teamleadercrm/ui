import { IconButton } from '../button';
import { MenuDivider } from './MenuDivider';
import { menuItemFactory } from './MenuItem';
import Menu from './Menu';
import { iconMenuFactory } from './IconMenu';

const MenuItem = menuItemFactory();
const IconMenu = iconMenuFactory(IconButton, Menu);

export default Menu;
export { MenuDivider, MenuItem, Menu, IconMenu };
