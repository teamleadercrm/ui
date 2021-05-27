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
  constructor(props) {
    super(props);
    this.timer = React.createRef();
    this.timeout = React.createRef();
  }

  handleOnChange = (event) => {
    const { onChange } = this.props;
    onChange && onChange(event, event.currentTarget.value);
  };

  updateStep = (n) => {
    const { min, max, value, onChange, step } = this.props;

    const currentValue = toNumber(value || 0);
    const newValue = parseValue(currentValue + step * n, min, max);

    if (newValue !== currentValue) {
      onChange && onChange(null, newValue);
    }
  };

  handleIncreaseValue = () => {
    this.updateStep(1);
  };

  handleDecreaseValue = () => {
    this.updateStep(-1);
  };

  handleDecreaseMouseDown = () => {
    this.handleDecreaseValue();
    const parent = this;
    this.timeout.current = setTimeout(() => {
      parent.timer.current = setInterval(this.handleDecreaseValue, 75);
    }, 300);
  };

  handleIncreaseMouseDown = () => {
    this.handleIncreaseValue();
    const parent = this;
    this.timeout.current = setTimeout(() => {
      parent.timer.current = setInterval(this.handleIncreaseValue, 75);
    }, 300);
  };

  handleClearStepperTimer = () => {
    clearTimeout(this.timeout.current);
    clearInterval(this.timer.current);
  };

  handleBlur = (...parameters) => {
    const { onBlur } = this.props;

    onBlur && onBlur(...parameters);
  };

  isMaxReached = () => this.props.value >= this.props.max;

  isMinReached = () => this.props.value <= this.props.min;

  getConnectedRight = () => {
    const { connectedRight, size, stepper } = this.props;

    if (stepper === 'connected') {
      return (
        <Button
          disabled={this.isMaxReached()}
          icon={<IconAddSmallOutline />}
          onBlur={this.handleBlur}
          onMouseDown={this.handleIncreaseMouseDown}
          onMouseUp={this.handleClearStepperTimer}
          onMouseLeave={this.handleClearStepperTimer}
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
          onMouseDown={this.handleDecreaseMouseDown}
          onMouseUp={this.handleClearStepperTimer}
          onMouseLeave={this.handleClearStepperTimer}
          onBlur={this.handleBlur}
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
            onBlur: this.handleBlur,
            disabled: this.isMaxReached(),
            onMouseDown: this.handleIncreaseMouseDown,
            onMouseUp: this.handleClearStepperTimer,
            onMouseLeave: this.handleClearStepperTimer,
          }}
          stepperDownProps={{
            onBlur: this.handleBlur,
            disabled: this.isMinReached(),
            onMouseDown: this.handleDecreaseMouseDown,
            onMouseUp: this.handleClearStepperTimer,
            onMouseLeave: this.handleClearStepperTimer,
          }}
        />,
      ];
    }

    return suffix;
  };

  render() {
    const { value, ...rest } = this.props;
    const restProps = omit(rest, ['suffix', 'onChange']);

    return (
      <SingleLineInputBase
        type="number"
        value={value}
        onChange={this.handleOnChange}
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
