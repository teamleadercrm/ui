import '@testing-library/jest-dom/extend-expect';
import ResizeObsever from 'resize-observer-polyfill';

window.ResizeObserver = ResizeObsever;
