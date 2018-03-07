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
    autoFocus: PropTypes.bool,
    /** Boolean indicating whether the input text should render in bold. */
    bold: PropTypes.bool,
    /** Sets a class name to give custom styles. */
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
    /** The text string to use as input identifier. */
    id: PropTypes.string,
    /** Boolean indicating whether the input should render as inverse. */
    inverse: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    /** Object to provide meta information for redux forms. */
    meta: InputMetaPropTypes,
    /** Callback function that is fired when component is blurred. */
    onBlur: PropTypes.func,
    /** Callback function that is fired when the component's value changes. */
    onChange: PropTypes.func,
    /** Callback function that is fired when component is focused. */
    onFocus: PropTypes.func,
    /** The text string to use as placeholder. */
    placeholder: PropTypes.string,
    precision: PropTypes.number,
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

  static defaultProps = {
    iconPlacement: 'left',
    inverse: false,
    disabled: false,
    placeholder: '',
    precision: null,
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
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
    if (props.input && props.input.onChange && state.value) {
      props.input.onChange(state.value);
    }
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState(() => ({
      value: this.props.type === 'number' ? Number(value) : value,
    }));
  }

  handleIncreaseValue() {
    this.updateStep(1);
  }

  handleDecreaseValue() {
    this.updateStep(-1);
  }

  hasError() {
    const { meta } = this.props;
    return Boolean(meta && meta.error && meta.touched);
  }

  formatNumber(number) {
    const { precision } = this.props;

    let formattedNumber = this.toNumber(number);

    if (precision !== null) {
      formattedNumber = number.toFixed(precision);
    }

    return String(formattedNumber);
  }

  updateStep(n) {
    const { step } = this.props;

    this.setState(prevState => {
      const number = this.toNumber((prevState.value || 0) + step * n);

      return { value: number };
    });
  }

  toNumber(number) {
    const { max, min, precision } = this.props;

    let float = parseFloat(number);

    if (isNaN(float) || !isFinite(float)) {
      float = 0;
    }

    const baseExponent = Math.pow(10, precision === null ? 10 : precision);

    float = Math.min(Math.max(float, min), max);
    float = Math.round(float * baseExponent) / baseExponent;

    return float;
  }

  renderInput() {
    const { autoFocus, bold, disabled, id, max, min, onBlur, onFocus, placeholder, readOnly, step, type } = this.props;
    const classNames = cx(theme['input'], {
      [theme['is-bold']]: bold,
    });

    const props = {
      autoFocus,
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
      value: type === 'number' && this.state.value ? this.formatNumber(this.state.value) : this.state.value,
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
      readOnly,
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
        [theme['is-inverse']]: inverse,
        [theme['is-numeric']]: type === 'number',
        [theme['is-disabled']]: disabled,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const inputWrapperClassnames = cx(theme['input-wrapper'], {
      [theme['has-error']]: this.hasError(),
    });

    const rest = omit(others, [
      'bold',
      'id',
      'helpText',
      'max',
      'meta',
      'min',
      'onBlur',
      'onChange',
      'onFocus',
      'placeholder',
      'precision',
      'updateStep',
      'value',
    ]);

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
