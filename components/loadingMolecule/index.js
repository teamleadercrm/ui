import { themr } from 'react-css-themr';
import { LOADING_MOLECULE } from '../identifiers';
import { LoadingMolecule } from './LoadingMolecule';
import theme from './theme.css';

const applyTheme = Component => themr(LOADING_MOLECULE, theme)(Component);

const ThemedLoadingMolecule = applyTheme(LoadingMolecule);

export default ThemedLoadingMolecule;
export { ThemedLoadingMolecule as LoadingMolecule };
