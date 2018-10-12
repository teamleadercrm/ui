import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { ErrorText, HelpText } from '../../components';
import theme from './theme.css';

export default class Input extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== undefined) {
      const newValue = nextProps.value || '';

      if (newValue !== prevState.value) {
        return {
          value: newValue,
        };
      }
    }

    return null;
  }

  state = {
    inputHasFocus: false,
    value: '',
  };

  handleBlur = event => {
    this.setState({ inputHasFocus: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleChange = event => {
    this.updateValue(event, event.target.value);
  };

  handleFocus = event => {
    this.setState({ inputHasFocus: true });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  updateValue(event, rawValue) {
    const { onChange } = this.props;
    const newValue = String(rawValue);

    this.setState({
      value: newValue,
    });

    if (onChange) {
      onChange(event, newValue);
    }
  }

  renderInput() {
    const { bold, type, ...otherProps } = this.props;
    const { value } = this.state;

    const classNames = cx(theme['input'], {
      [theme['is-bold']]: bold,
    });

    const otherPropsWithoutBoxProps = omitBoxProps(otherProps);
    const restProps = omit(otherPropsWithoutBoxProps, [
      'className',
      'connectedLeft',
      'connectedRight',
      'helpText',
      'inverse',
      'onChange',
      'prefix',
      'size',
      'suffix',
      'value',
    ]);

    const props = {
      className: classNames,
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      type,
      value,
      ...restProps,
    };

    return <input {...props} />;
  }

  renderOneOrMultipleElements(prop) {
    if (Array.isArray(prop)) {
      return prop.map((element, index) => React.cloneElement(element, { key: index }));
    }

    return prop;
  }

  render() {
    const {
      className,
      connectedLeft,
      connectedRight,
      disabled,
      error,
      helpText,
      inverse,
      prefix,
      size,
      suffix,
      readOnly,
      ...others
    } = this.props;

    const { inputHasFocus } = this.state;

    const classNames = cx(
      theme['wrapper'],
      theme[`is-${size}`],
      {
        [theme['has-error']]: error,
        [theme['has-focus']]: inputHasFocus,
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['is-inverse']]: inverse,
        [theme['is-disabled']]: disabled,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const rest = pickBoxProps(others);

    return (
      <Box className={classNames} {...rest}>
        <div className={theme['input-wrapper']}>
          {connectedLeft}
          <div className={theme['input-inner-wrapper']}>
            {prefix && <div className={theme['prefix-wrapper']}>{this.renderOneOrMultipleElements(prefix)}</div>}
            {this.renderInput()}
            {suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
          </div>
          {connectedRight}
        </div>
        {error ? (
          <ErrorText inverse={inverse}>{error}</ErrorText>
        ) : (
          helpText && <HelpText inverse={inverse}>{helpText}</HelpText>
        )}
      </Box>
    );
  }
}

Input.propTypes = {
  /** Boolean indicating whether the input text should render in bold. */
  bold: PropTypes.bool,
  /** Sets a class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  connectedLeft: PropTypes.element,
  connectedRight: PropTypes.element,
  /** Boolean indicating whether the input should render as disabled. */
  disabled: PropTypes.bool,
  /** The text string/element to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string to use as help text below the input. */
  helpText: PropTypes.string,
  /** Boolean indicating whether the input should render as inverse. */
  inverse: PropTypes.bool,
  /** Callback function that is fired when blurring the input field. */
  onBlur: PropTypes.func,
  /** Callback function that is fired when focusing the input field. */
  onFocus: PropTypes.func,
  /** Callback function that is fired when the component's value changes. */
  onChange: PropTypes.func,
  /** The text string/element to use as a prefix inside the input field */
  prefix: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  /** Boolean indicating whether the input should render as read only. */
  readOnly: PropTypes.bool,
  /** Size of the input element. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** The text string/element to use as a suffix inside the input field */
  suffix: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  /** Type of the input element. It can be a valid HTML5 input type. */
  type: PropTypes.string,
  /** Current value of the input element. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  inverse: false,
  disabled: false,
  readOnly: false,
  size: 'medium',
};
