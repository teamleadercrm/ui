import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import {
  IconChevronUpSmallOutline,
  IconChevronDownSmallOutline,
  IconWarningBadgedSmallFilled,
} from '@teamleader/ui-icons';
import InputMetaPropTypes from './InputMetaPropTypes';
import Box from '../box';
import Button from '../button';
import Counter from '../counter';
import { TextSmall } from '../typography';
import theme from './theme.css';

export default class Input extends Component {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    connectedLeft: PropTypes.element,
    connectedRight: PropTypes.element,
    counter: PropTypes.number,
    disabled: PropTypes.bool,
    format: PropTypes.func,
    helpText: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    id: PropTypes.string,
    inverse: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    meta: InputMetaPropTypes,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    precision: PropTypes.number,
    readOnly: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    step: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    iconPlacement: 'left',
    inverse: false,
    disabled: false,
    placeholder: '',
    precision: null,
    min: -9007199254740991,
    max: 9007199254740991,
    readOnly: false,
    size: 'medium',
    step: 1,
  };

  constructor(props) {
    super(props);

    this.handleChange = ::this.handleChange;
    this.handleIncreaseValue = ::this.handleIncreaseValue;
    this.handleDecreaseValue = ::this.handleDecreaseValue;

    this.state = {
      value: props.type === 'number' ? Number(props.value) || '' : props.value || '',
    };
  }

  componentWillUpdate(props, state) {
    if (props.onChange && state.value) {
      props.onChange(state.value);
    }
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState(() => ({
      value: this.props.type === 'number' ? Number(value) : value,
    }));
  }

  handleIncreaseValue() {
    this.step(1);
  }

  handleDecreaseValue() {
    this.step(-1);
  }

  format(number) {
    const { format, precision } = this.props;

    let formattedNumber = this.toNumber(number);

    if (precision !== null) {
      formattedNumber = number.toFixed(precision);
    }

    formattedNumber += '';

    if (format) {
      return format(formattedNumber);
    }

    return formattedNumber;
  }

  step(n) {
    const { step } = this.props;

    const number = this.toNumber((this.state.value || 0) + step * n);

    if (number !== this.state.value) {
      this.setState({ value: number });
      return true;
    }

    return false;
  }

  toNumber(number) {
    const { max, min, precision } = this.props;

    let float = parseFloat(number);

    if (isNaN(float) || !isFinite(float)) {
      float = 0;
    }

    const q = Math.pow(10, precision === null ? 10 : precision);

    float = Math.min(Math.max(float, min), max);
    float = Math.round(float * q) / q;

    return float;
  }

  renderInput() {
    const { bold, disabled, id, max, min, onBlur, onFocus, placeholder, readOnly, step, type } = this.props;
    const classNames = cx(theme['input'], {
      [theme['is-bold']]: bold,
    });

    const props = {
      className: classNames,
      disabled: disabled,
      id,
      max,
      min,
      onBlur: onBlur,
      onChange: this.handleChange,
      onFocus: onFocus,
      placeholder,
      readOnly,
      step,
      type,
      value: type === 'number' && this.state.value ? this.format(this.state.value) : this.state.value,
    };

    return <input {...props} />;
  }

  renderCounter() {
    if (this.props.counter) {
      return <Counter className={theme.counter} count={this.props.counter} color="ruby" size="small" />;
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
    const { disabled, readOnly, type } = this.props;

    const props = {
      disabled: disabled || readOnly,
    };

    if (type === 'number') {
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
      <Box marginTop={2}>
        <IconWarningBadgedSmallFilled className={theme['validation-icon']} />
        <TextSmall className={theme['validation-text']} element="span" marginLeft={1}>
          {this.props.meta.error}
        </TextSmall>
      </Box>
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
      type,
      meta,
      readOnly,
      ...others
    } = this.props;

    const classNames = cx(
      theme.wrapper,
      theme[`is-${size}`],
      {
        [theme[`has-icon-${iconPlacement}`]]: icon,
        [theme['has-counter']]: counter,
        [theme['has-error']]: Boolean(meta && meta.error),
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['is-inverse']]: inverse,
        [theme['is-numeric']]: type === 'number',
        [theme['is-disabled']]: disabled,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const inputWrapperClassnames = cx(theme['input-wrapper'], {
      [theme['has-error']]: Boolean(meta && meta.error),
    });

    const rest = omit(others, [
      'bold',
      'id',
      'helpText',
      'onBlur',
      'onChange',
      'onFocus',
      'placeholder',
      'step',
      'value',
    ]);

    return (
      <Box className={classNames} {...rest}>
        <div className={inputWrapperClassnames}>
          {connectedLeft}
          <div className={theme['input-inner-wrapper']}>
            {icon &&
              createElement(icon, {
                className: theme.icon,
              })}
            {this.renderInput()}
            {this.renderCounter()}
            {this.renderSpinnerControls()}
          </div>
          {connectedRight}
        </div>
        {meta && meta.error ? this.renderValidationMessage() : this.renderHelpText()}
      </Box>
    );
  }
}
