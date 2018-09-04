import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import {
  IconChevronUpSmallOutline,
  IconChevronDownSmallOutline,
  IconWarningBadgedSmallFilled,
} from '@teamleader/ui-icons';
import InputMetaPropTypes from './InputMetaPropTypes';
import FieldInputPropTypes from './FieldInputPropTypes';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import Button from '../button';
import Counter from '../counter';
import { TextSmall } from '../typography';
import theme from './theme.css';

export default class Input extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== undefined) {
      const newValue = Input.parseValue(value || '', nextProps);

      if (newValue !== prevState.value) {
        return {
          value: newValue,
        };
      }
    }

    return null;
  }

  static parseValue(value, { type, min, max }) {
    return type === 'number' ? Input.toNumber(value, min, max) : value;
  }

  static toNumber(number, min, max) {
    let float = parseFloat(number);

    if (isNaN(float) || !isFinite(float)) {
      float = 0;
    }

    float = Math.min(Math.max(float, min), max);

    return float;
  }

  state = {
    value: '',
  };

  handleChange = event => {
    this.updateValue(event);
  };

  handleIncreaseValue = event => {
    this.updateStep(event, 1);
  };

  handleDecreaseValue = event => {
    this.updateStep(event, -1);
  };

  updateValue(event, rawValue, triggerOnChange = true) {
    const { onChange } = this.props;
    const value = Input.parseValue(rawValue || event.target.value, this.props);

    this.setState({
      value,
    });

    if (triggerOnChange && onChange) {
      onChange(event, value);
    }
  }

  hasError() {
    const { meta } = this.props;
    return Boolean(meta && meta.error && meta.touched);
  }

  formatNumber(number) {
    const { min, max } = this.props;
    return String(Input.toNumber(number, min, max));
  }

  updateStep(event, n) {
    const { step } = this.props;
    const { value = 0 } = this.state;
    this.updateValue(event, value + step * n);
  }

  renderInput() {
    const { bold, max, min, step, type, ...otherProps } = this.props;
    const { value } = this.state;

    const classNames = cx(theme['input'], {
      [theme['is-bold']]: bold,
    });

    const otherPropsWithoutBoxProps = omitBoxProps(otherProps);
    const restProps = omit(otherPropsWithoutBoxProps, [
      'className',
      'connectedLeft',
      'connectedRight',
      'counter',
      'helpText',
      'icon',
      'iconPlacement',
      'inverse',
      'meta',
      'onChange',
      'size',
      'spinner',
      'value',
    ]);

    const numberTypeProps = {
      max,
      min,
      step,
      value: value && this.formatNumber(value),
    };

    const props = {
      className: classNames,
      onChange: this.handleChange,
      type,
      value,
      ...restProps,
      ...(type === 'number' && numberTypeProps),
    };

    return <input {...props} />;
  }

  renderCounter() {
    if (this.props.counter) {
      return <Counter className={theme['counter']} count={this.props.counter} color="ruby" size="small" />;
    }
  }

  renderHelpText() {
    const { helpText, inverse } = this.props;

    if (helpText) {
      return (
        <TextSmall color={inverse ? 'white' : 'neutral'} marginTop={1} soft>
          {helpText}
        </TextSmall>
      );
    }
  }

  renderSpinnerControls() {
    const { disabled, readOnly, spinner, type } = this.props;

    const props = {
      disabled: disabled || readOnly,
    };

    if (type === 'number' && spinner) {
      return (
        <div className={theme['spinner']}>
          <Button
            className={theme['spinner-up']}
            icon={<IconChevronUpSmallOutline />}
            onClick={this.handleIncreaseValue}
            {...props}
          />
          <Button
            className={theme['spinner-down']}
            icon={<IconChevronDownSmallOutline />}
            onClick={this.handleDecreaseValue}
            {...props}
          />
        </div>
      );
    }
  }

  renderValidationMessage() {
    return (
      <TextSmall className={theme['validation-text']} marginTop={2} display="flex">
        <Box element="span" className={theme['validation-icon']}>
          <IconWarningBadgedSmallFilled />
        </Box>
        <Box element="span" marginLeft={1}>
          {this.props.meta.error}
        </Box>
      </TextSmall>
    );
  }

  render() {
    const {
      className,
      connectedLeft,
      connectedRight,
      counter,
      disabled,
      icon,
      iconPlacement,
      inverse,
      size,
      spinner,
      readOnly,
      type,
      ...others
    } = this.props;

    const classNames = cx(
      theme['wrapper'],
      theme[`is-${size}`],
      {
        [theme[`has-icon-${iconPlacement}`]]: icon,
        [theme['has-counter']]: counter,
        [theme['has-error']]: this.hasError(),
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['has-spinner']]: type === 'number' && spinner,
        [theme['is-inverse']]: inverse,
        [theme['is-disabled']]: disabled,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const inputWrapperClassnames = cx(theme['input-wrapper'], {
      [theme['has-error']]: this.hasError(),
    });

    const rest = pickBoxProps(others);

    return (
      <Box className={classNames} {...rest}>
        <div className={inputWrapperClassnames}>
          {connectedLeft}
          <div className={theme['input-inner-wrapper']}>
            {icon &&
              createElement(icon, {
                className: theme['icon'],
              })}
            {this.renderInput()}
            {this.renderCounter()}
            {this.renderSpinnerControls()}
          </div>
          {connectedRight}
        </div>
        {this.hasError() ? this.renderValidationMessage() : this.renderHelpText()}
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
  /** The number to render as a counter inside the input. */
  counter: PropTypes.number,
  /** Boolean indicating whether the input should render as disabled. */
  disabled: PropTypes.bool,
  /** The text string to use as help text below the input. */
  helpText: PropTypes.string,
  /** The icon displayed inside the input. */
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  /** The position of the icon inside the input. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** Boolean indicating whether the input should render as inverse. */
  inverse: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  /** Object to provide meta information for redux forms. */
  meta: InputMetaPropTypes,
  /** Boolean indicating whether to number type input should render spinner controls */
  spinner: PropTypes.bool,
  /** Callback function that is fired when the component's value changes. */
  onChange: PropTypes.func,
  /** Boolean indicating whether the input should render as read only. */
  readOnly: PropTypes.bool,
  /** Size of the input element. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Limit increment value for numeric inputs. */
  step: PropTypes.number,
  /** Type of the input element. It can be a valid HTML5 input type. */
  type: PropTypes.string,
  /** Current value of the input element. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  iconPlacement: 'left',
  inverse: false,
  disabled: false,
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  readOnly: false,
  size: 'medium',
  spinner: true,
  step: 1,
};
