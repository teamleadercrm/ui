import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Icon from '../icon';
import SingleLineInputBase from './SingleLineInputBase';
import theme from './theme.css';

class StepperControls extends PureComponent {
  render() {
    const { inverse, stepperUpProps, stepperDownProps } = this.props;
    const iconProps = {
      color: inverse ? 'teal' : 'neutral',
      element: 'button',
      tabIndex: '-1',
      tint: inverse ? 'lightest' : 'darkest',
      type: 'button',
    };

    return (
      <div className={theme['stepper']}>
        <Icon className={theme['stepper-up']} {...stepperUpProps} {...iconProps}>
          <IconChevronUpSmallOutline />
        </Icon>
        <Icon className={theme['stepper-down']} {...stepperDownProps} {...iconProps}>
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
    const { onChange, step } = this.props;

    const currentValue = this.toNumber(this.state.value || 0);
    const newValue = this.parseValue(currentValue + step * n);

    if (newValue !== currentValue) {
      this.setState({ value: newValue });
      onChange && onChange(null, newValue);
    }
  };

  parseValue = value => this.bindToMinMax(this.toNumber(value));

  toNumber = rawNumber => {
    let number = parseFloat(rawNumber);
    if (isNaN(number) || !isFinite(number)) {
      number = 0;
    }
    return number;
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

  isMaxReached = () => this.state.value >= this.props.max;

  isMinReached = () => this.state.value <= this.props.min;

  getSuffix = () => {
    const { inverse, stepper, suffix } = this.props;

    if (stepper === 'suffix') {
      return [
        ...suffix,
        /* eslint-disable-next-line react/jsx-key */
        <StepperControls
          inverse={inverse}
          stepperUpProps={{
            onClick: this.handleIncreaseValue,
            disabled: this.isMaxReached(),
          }}
          stepperDownProps={{
            onClick: this.handleDecreaseValue,
            disabled: this.isMinReached(),
          }}
        />,
      ];
    }

    return suffix;
  };

  render() {
    const { onChange, suffix, ...others } = this.props;

    return (
      <SingleLineInputBase
        type="number"
        value={this.state.value}
        suffix={this.getSuffix()}
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
  /** Specify where the stepper controls should be rendered */
  stepper: PropTypes.oneOf(['none', 'connected', 'suffix']),
  /** Limit increment value for numeric inputs. */
  step: PropTypes.number,
};

NumericInput.defaultProps = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  suffix: [],
  stepper: 'suffix',
};

export default NumericInput;
