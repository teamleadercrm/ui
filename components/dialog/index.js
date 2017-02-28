import { themr } from 'react-css-themr';
import { DIALOG } from '../identifiers';
import Dialog from './Dialog';
import theme from './theme.css';

const ThemedDialog = themr(DIALOG, theme)(Dialog);

export default ThemedDialog;
