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
import Counter from '../counter';
import { TextSmall } from '../typography';
import theme from './theme.css';

export default class Input extends Component {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    counter: PropTypes.number,
    disabled: PropTypes.bool,
    helpText: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    id: PropTypes.string,
    inverse: PropTypes.bool,
    meta: InputMetaPropTypes,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
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
    readOnly: false,
    size: 'medium',
    step: 1,
  };

  constructor(props) {
    super(props);

    this.isNumberInput = Boolean(props.type === 'number');
    this.handleChange = ::this.onChange;
    this.handleIncreaseValue = ::this.increaseValue;
    this.handleDecreaseValue = ::this.decreaseValue;

    this.state = {
      value: this.isNumberInput ? Number(props.value) || '' : props.value || '',
    };
  }

  componentWillUpdate(props, state) {
    if (props.onChange && state.value) {
      props.onChange(state.value);
    }
  }

  onChange(event) {
    const value = event.target.value;

    this.setState(() => ({
      value: this.isNumberInput ? Number(value) : value,
    }));
  }

  increaseValue() {
    this.setState((previousState, props) => ({
      value: previousState.value ? previousState.value + props.step : props.step,
    }));
  }

  decreaseValue() {
    this.setState((previousState, props) => ({
      value: previousState.value ? previousState.value - props.step : -props.step,
    }));
  }

  renderInput() {
    const { bold, disabled, id, onBlur, onFocus, placeholder, readOnly, step, type } = this.props;
    const classNames = cx(theme['input'], {
      [theme['is-bold']]: bold,
    });
    const props = {
      className: classNames,
      disabled: disabled,
      id,
      onBlur: onBlur,
      onChange: this.handleChange,
      onFocus: onFocus,
      placeholder,
      readOnly,
      step,
      type,
      value: this.state.value,
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

    return (
      helpText && (
        <TextSmall color={inverse ? 'white' : 'neutral'} marginTop={1} soft>
          {helpText}
        </TextSmall>
      )
    );
  }

  renderSpinnerControls() {
    if (this.isNumberInput) {
      return (
        <div className={theme['spinner']}>
          <button className={theme['spinner-up']} onClick={this.handleIncreaseValue}>
            <IconChevronUpSmallOutline />
          </button>
          <button className={theme['spinner-down']} onClick={this.handleDecreaseValue}>
            <IconChevronDownSmallOutline />
          </button>
        </div>
      );
    }
  }

  renderValidationMessage() {
    const { meta } = this.props;
    const props = {
      className: theme['validation-text'],
      marginTop: 2,
    };

    if (meta && meta.error) {
      return <TextSmall {...props}>{meta.error}</TextSmall>;
    }
  }

  renderValidationIcon() {
    if (this.props.meta && this.props.meta.error) {
      return <IconWarningBadgedSmallFilled className={theme['validation-icon']} />;
    }
  }

  render() {
    const { className, counter, disabled, icon, iconPlacement, inverse, size, meta, readOnly, ...others } = this.props;
    const classNames = cx(
      theme.wrapper,
      theme[`is-${size}`],
      {
        [theme[`has-icon-${iconPlacement}`]]: icon,
        [theme['has-counter']]: counter,
        [theme['has-error']]: Boolean(meta && meta.error),
        [theme['has-validation-feedback']]: Boolean(meta && meta.error),
        [theme['is-inverse']]: inverse,
        [theme['is-numeric']]: this.isNumberInput,
        [theme['is-disabled']]: disabled,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const rest = omit(others, [
      'bold',
      'id',
      'helpText',
      'onBlur',
      'onChange',
      'onFocus',
      'placeholder',
      'step',
      'type',
      'value',
    ]);

    return (
      <Box className={classNames} {...rest}>
        <div className={theme['input-wrapper']}>
          {icon &&
            createElement(icon, {
              className: theme.icon,
            })}

          {this.renderInput()}
          {this.renderCounter()}
          {this.renderSpinnerControls()}
          {this.renderValidationIcon()}
        </div>
        {this.renderHelpText()}
        {this.renderValidationMessage()}
      </Box>
    );
  }
}
