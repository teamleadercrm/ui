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
    connectedLeft: PropTypes.element,
    connectedRight: PropTypes.element,
    counter: PropTypes.number,
    disabled: PropTypes.bool,
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
    this.setState((previousState, props) => ({
      value: !previousState.value
        ? props.step
        : previousState.value + props.step <= props.max ? previousState.value + props.step : previousState.value,
    }));
  }

  handleDecreaseValue() {
    this.setState((previousState, props) => ({
      value: !previousState.value
        ? props.min
        : previousState.value - props.step >= props.min ? previousState.value - props.step : props.min,
    }));
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

    if (helpText) {
      return (
        <TextSmall color={inverse ? 'white' : 'neutral'} marginTop={1} soft>
          {helpText}
        </TextSmall>
      );
    }
  }

  renderSpinnerControls() {
    if (this.props.type === 'number') {
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
        [theme['has-validation-feedback']]: Boolean(meta && meta.error),
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
