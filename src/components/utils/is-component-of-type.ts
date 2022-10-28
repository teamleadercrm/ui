import React, { ReactElement, JSXElementConstructor } from 'react';
import isReactElement from './is-react-element';

let customChecker: (reactElementType: string | JSXElementConstructor<any>, reactElement: ReactElement) => boolean;

/**
 *  Sets customChecker which will be used for all components.
 *
 * @param providedChecker {Function} - Checker function
 */
export function overrideComponentTypeChecker(
  providedChecker: (reactElementType: string | JSXElementConstructor<any>, reactElement: ReactElement) => boolean,
) {
  customChecker = providedChecker;
}

/**
 * Returns true if the provided element is a component of the provided type.
 *
 * @param reactElementType {string | JSXElementConstructor<any>} - the type of a React Element
 * @param reactElement {ReactElement} - any React Element (not a real DOM node)
 */
export function defaultChecker(reactElementType: string | JSXElementConstructor<any>, reactElement: ReactElement) {
  if (process.env.NODE_ENV !== 'production') {
    // https://github.com/gaearon/react-hot-loader/blob/v3.0.0-beta.7/docs/Known%20Limitations.md#checking-element-types
    reactElementType = React.createElement(reactElementType).type; // eslint-disable-line no-param-reassign
  }
  return isReactElement(reactElement) && reactElement.type === reactElementType;
}

/**
 * Executes customChecker if it's set or defaultChecker.
 *
 * @param reactElementType {string | JSXElementConstructor<any>} - the type of a React Element
 * @param reactElement {ReactElement} - any React Element (not a real DOM node)
 */
function isComponentOfType(reactElementType: string, reactElement: ReactElement): boolean;
function isComponentOfType<P>(
  reactElementType: JSXElementConstructor<P>,
  reactElement: ReactElement,
): reactElement is ReactElement<P>;
function isComponentOfType(reactElementType: string | JSXElementConstructor<any>, reactElement: ReactElement) {
  return customChecker ? customChecker(reactElementType, reactElement) : defaultChecker(reactElementType, reactElement);
}

export default isComponentOfType;
