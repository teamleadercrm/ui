import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  IconAddSmallOutline,
  IconChevronUpSmallOutline,
  IconChevronDownSmallOutline,
  IconMinusSmallOutline,
} from '@teamleader/ui-icons';
import Button from '../button';
import Icon from '../icon';
import SingleLineInputBase from './SingleLineInputBase';
import omit from 'lodash.omit';
import theme from './theme.css';
import { parseValue, toNumber } from './utils';

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
          value: parseValue(newValue, nextProps.min, nextProps.max),
        };
      }
    }
    return null;
  }

  state = {
    value: '',
  };

  handleOnChange = event => {
    const { min, max } = this.props;
    this.setState({ value: parseValue(event.currentTarget.value, min, max) });
  };

  updateStep = n => {
    const { min, max, onChange, step } = this.props;

    const currentValue = toNumber(this.state.value || 0);
    const newValue = parseValue(currentValue + step * n, min, max);

    if (newValue !== currentValue) {
      this.setState({ value: newValue });
      onChange && onChange(null, newValue);
    }
  };

  handleIncreaseValue = () => {
    this.updateStep(1);
  };

  handleDecreaseValue = () => {
    this.updateStep(-1);
  };

  isMaxReached = () => this.state.value >= this.props.max;

  isMinReached = () => this.state.value <= this.props.min;

  getConnectedRight = () => {
    const { connectedRight, size, stepper } = this.props;

    if (stepper === 'connected') {
      return (
        <Button
          disabled={this.isMaxReached()}
          icon={<IconAddSmallOutline />}
          onClick={this.handleIncreaseValue}
          size={size}
        />
      );
    }

    return connectedRight;
  };

  getConnectedLeft = () => {
    const { connectedLeft, size, stepper } = this.props;

    if (stepper === 'connected') {
      return (
        <Button
          disabled={this.isMinReached()}
          icon={<IconMinusSmallOutline />}
          onClick={this.handleDecreaseValue}
          size={size}
        />
      );
    }

    return connectedLeft;
  };

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
    const { onChange, ...others } = this.props;
    const restProps = omit(others, ['suffix', 'value']);

    return (
      <SingleLineInputBase
        type="number"
        value={this.state.value}
        onChange={event => {
          this.handleOnChange(event);
          onChange && onChange(event, event.currentTarget.value);
        }}
        {...restProps}
        connectedLeft={this.getConnectedLeft()}
        connectedRight={this.getConnectedRight()}
        suffix={this.getSuffix()}
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
