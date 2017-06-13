import { themr } from 'react-css-themr';
import { TOAST } from '../identifiers';
import { Toast } from './Toast';
import theme from './theme.css';

const ThemedToast = themr(TOAST, theme)(Toast);
export default ThemedToast;
export { ThemedToast as Toast };
