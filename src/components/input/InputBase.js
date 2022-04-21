import React, { PureComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { omitBoxProps } from '../box';
import theme from './theme.css';

class InputBase extends PureComponent {
  render() {
    const { bold, className, element, forwardedRef, inverse, size, textAlignRight, ...otherProps } = this.props;

    const classNames = cx(
      theme['input'],
      theme[`is-${size}`],
      {
        [theme['is-inverse']]: inverse,
        [theme['is-bold']]: bold,
        [theme['has-text-align-right']]: textAlignRight,
      },
      className,
    );

    const restProps = omitBoxProps(otherProps);

    const props = {
      className: classNames,
      ref: forwardedRef,
      ...restProps,
    };

    return React.createElement(element, props);
  }
}

InputBase.propTypes = {
  /** Boolean indicating whether the input text should render in bold. */
  bold: PropTypes.bool,
  /** Sets a class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Boolean indicating whether the input should render as disabled. */
  disabled: PropTypes.bool,
  /** The element to render. */
  element: PropTypes.oneOf(['input', 'textarea']),
  /** The reference to the inner html element */
  forwaredRef: PropTypes.object,
  /** Boolean indicating whether the input should render as inverse. */
  inverse: PropTypes.bool,
  /** Callback function that is fired when blurring the input field. */
  onBlur: PropTypes.func,
  /** Callback function that is fired when focusing the input field. */
  onFocus: PropTypes.func,
  /** Callback function that is fired when the component's value changes. */
  onChange: PropTypes.func,
  /** Boolean indicating whether the input should render as read only. */
  readOnly: PropTypes.bool,
  /** Size of the input element. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /** Type of the input element. It can be a valid HTML5 input type. */
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  /** Current value of the input element. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputBase.defaultProps = {
  inverse: false,
  disabled: false,
  element: 'input',
  readOnly: false,
  size: 'medium',
};

/** @type {React.ComponentType<any>} */
const ForwardedInputBase = forwardRef((props, ref) => <InputBase {...props} forwardedRef={ref} />);

ForwardedInputBase.displayName = 'InputBase';

export default ForwardedInputBase;
