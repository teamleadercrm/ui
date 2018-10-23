import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Icon from '../icon';
import InputBase from './InputBase';
import theme from './theme.css';

class SpinnerControls extends PureComponent {
  render() {
    const { inverse, handleOnSpinnerUpClick, handleOnSpinnerdownClick } = this.props;
    const iconProps = {
      color: inverse ? 'teal' : 'neutral',
      element: 'button',
      tint: inverse ? 'lightest' : 'darkest',
    };

    return (
      <div className={theme['spinner']}>
        <Icon className={theme['spinner-up']} onClick={() => handleOnSpinnerUpClick()} {...iconProps}>
          <IconChevronUpSmallOutline />
        </Icon>
        <Icon className={theme['spinner-down']} onClick={() => handleOnSpinnerdownClick()} {...iconProps}>
          <IconChevronDownSmallOutline />
        </Icon>
      </div>
    );
  }
}

class NumericInput extends PureComponent {
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
    value: '',
  };

  handleOnChange = event => {
    this.setState({ value: this.parseValue(event.currentTarget.value) });
  };

  updateStep = n => {
    const { step } = this.props;

    const currentValue = this.toNumber(this.state.value || 0);
    const newValue = this.parseValue(currentValue + step * n);

    if (newValue !== currentValue) {
      this.setState({ value: newValue });
    }
  };

  parseValue = value => this.bindToMinMax(this.toNumber(value));

  toNumber = number => {
    let float = parseFloat(number);
    if (isNaN(float) || !isFinite(float)) {
      float = 0;
    }
    return float;
  };

  bindToMinMax = value => {
    const { min, max } = this.props;
    return Math.min(Math.max(value, min), max);
  };

  handleIncreaseValue = () => {
    this.updateStep(1);
  };

  handleDecreaseValue = () => {
    this.updateStep(-1);
  };

  render() {
    const { spinner, suffix, onChange, ...others } = this.props;

    const suffixWithSpinner = [
      ...suffix,
      spinner && (
        <SpinnerControls
          handleOnSpinnerUpClick={this.handleIncreaseValue}
          handleOnSpinnerdownClick={this.handleDecreaseValue}
        />
      ),
    ];

    return (
      <InputBase
        type="number"
        value={this.state.value}
        suffix={suffixWithSpinner}
        onChange={event => {
          this.handleOnChange(event);
          onChange && onChange(event, event.currentTarget.value);
        }}
        {...others}
      />
    );
  }
}

NumericInput.propTypes = {
  /** Sets a class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The maximum value that can be inputted */
  max: PropTypes.number,
  /** The minimum value that can be inputted */
  min: PropTypes.number,
  /** Boolean indicating whether to number type input should render spinner controls */
  spinner: PropTypes.bool,
  /** Limit increment value for numeric inputs. */
  step: PropTypes.number,
};

NumericInput.defaultProps = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  suffix: [],
  spinner: true,
};

export default NumericInput;
