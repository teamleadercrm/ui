import React, { PureComponent, forwardRef } from 'react';
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
import { KEY } from '../../constants';

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
    this.inputElement = React.createRef();
    this.timer = React.createRef();
    this.timeout = React.createRef();
  }

  handleOnChange = (event) => {
    const { onChange } = this.props;
    onChange && onChange(event, event.currentTarget.value);
  };

  updateStep = (n) => {
    const { min, max, value, step } = this.props;

    const currentValue = toNumber(value || 0);
    const stepN = step * n;

    let newValue = currentValue + stepN;
    if (newValue % step) {
      newValue = Math.ceil(currentValue / stepN) * stepN;
    }

    const newValueBoundToMinMax = parseValue(newValue, min, max);

    const inputElement = this.inputElement.current;
    if (inputElement) {
      const prototype = Object.getPrototypeOf(inputElement);
      const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

      prototypeValueSetter.call(inputElement, newValueBoundToMinMax);
      inputElement.dispatchEvent(new Event('change', { bubbles: true }));
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
      parent.timer.current = setInterval(() => {
        if (this.isMinReached()) {
          this.handleClearStepperTimer();
        } else {
          this.handleDecreaseValue();
        }
      }, 75);
    }, 300);
  };

  handleIncreaseMouseDown = () => {
    this.handleIncreaseValue();
    const parent = this;
    this.timeout.current = setTimeout(() => {
      parent.timer.current = setInterval(() => {
        if (this.isMaxReached()) {
          this.handleClearStepperTimer();
        } else {
          this.handleIncreaseValue();
        }
      }, 75);
    }, 300);
  };

  handleClearStepperTimer = () => {
    clearTimeout(this.timeout.current);
    clearInterval(this.timer.current);
  };

  // Unlike mouse down events, key down events are "auto-repeated" while holding down the key
  // This means we don't need to use an interval and can directly rely on the handler
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#auto-repeat_handling
  handleKeyDown = (event) => {
    if (event.key === KEY.ArrowUp) {
      event.preventDefault();
      this.handleIncreaseValue();
    } else if (event.key === KEY.ArrowDown) {
      event.preventDefault();
      this.handleDecreaseValue();
    }

    this.props.onKeyDown && this.props.onKeyDown(event);
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

  setRef = (ref) => {
    this.inputElement.current = ref;
    const { forwardedRef } = this.props;
    if (typeof forwardedRef === 'function') {
      forwardedRef(ref);
    } else if (typeof forwardedRef === 'object' && forwardedRef !== null) {
      forwardedRef.current = ref;
    }
  };

  render() {
    const { value, ...rest } = this.props;
    const restProps = omit(rest, ['suffix', 'onChange', 'onKeyDown']);

    return (
      <SingleLineInputBase
        ref={this.setRef}
        type="number"
        value={value}
        onChange={this.handleOnChange}
        onKeyDown={this.handleKeyDown}
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

/** @type {React.ComponentType<any>} */
const ForwardedNumericInput = forwardRef((props, ref) => <NumericInput {...props} forwardedRef={ref} />);

ForwardedNumericInput.displayName = 'NumericInput';

export default ForwardedNumericInput;
