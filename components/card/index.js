import { themr } from 'react-css-themr';
import { CARD } from '../identifiers';
import { Card } from './Card';
import theme from './theme.css';

const applyTheme = Component => themr(CARD, theme)(Component);

const ThemedCard = applyTheme(Card);

export default ThemedCard;
export { ThemedCard as Card };
