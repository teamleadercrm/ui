import React, { ChangeEvent, FocusEvent, forwardRef, KeyboardEvent, ReactElement, useEffect, useRef } from 'react';
import Icon from '../icon';
import {
  IconAddSmallOutline,
  IconChevronUpSmallOutline,
  IconChevronDownSmallOutline,
  IconMinusSmallOutline,
} from '@teamleader/ui-icons';
import theme from './theme.css';
import { COLORS as ICONCOLORS, TINTS as ICONTINTS } from '../icon/Icon';
import SingleLineInputBase, { SingleLineInputBaseProps } from './SingleLineInputBase';
import { KEY } from '../../constants';
import { parseValue, toNumber } from './utils';
import Button from '../button';
import { GenericComponent } from '../../@types/types';

interface StepperProps {
  disabled: boolean;
  onBlur: (event: FocusEvent<HTMLElement>) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}
interface StepperControlsProps {
  inverse: boolean;
  stepperUpProps: StepperProps;
  stepperDownProps: StepperProps;
}

const StepperControls: GenericComponent<StepperControlsProps> = ({
  inverse,
  stepperUpProps,
  stepperDownProps,
}: StepperControlsProps) => {
  const iconProps: { color: ICONCOLORS; element: string; tabIndex: string; tint: ICONTINTS; type: string } = {
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
};

export interface NumericInputProps
  extends Omit<
    SingleLineInputBaseProps,
    'connectedLeft' | 'connectedRight' | 'inverse' | 'onBlur' | 'onChange ' | 'onKeyDown' | 'size' | 'suffix' | 'value'
  > {
  /** Element stuck to the left hand side of the component. */
  connectedLeft?: ReactElement;
  /** Element stuck to the right hand side of the component. */
  connectedRight?: ReactElement;
  /** Boolean indicating whether the input should render as inverse. */
  inverse?: boolean;
  /** The maximum value that can be inputted. */
  max?: number;
  /** The maximum number of digits that can be inputted. */
  maxLength?: number;
  /** The minimum value that can be inputted. */
  min?: number;
  /** Callback function that is fired when blurring the input field. */
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
  /** Callback function that is fired when the component's value changes. */
  onChange?: (event: ChangeEvent<HTMLElement>, value: string) => void;
  /** Callback function that is fired when the keyboard is touched. */
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  /** Size of the input element. */
  size?: 'tiny' | 'small' | 'medium' | 'large';
  /** Limit increment value for numeric inputs. */
  step?: number;
  /** Specifiy where the stepper controls should be rendered. */
  stepper?: 'none' | 'connected' | 'suffix';
  /** The text string/element to use as a suffix inside the input field */
  suffix?: ReactElement[] | ReactElement;
  /** Current value of the input element. */
  value?: string | number;
}

const NumericInput: GenericComponent<NumericInputProps> = forwardRef<HTMLElement, NumericInputProps>(
  (
    {
      connectedLeft,
      connectedRight,
      inverse = false,
      max = Number.MAX_SAFE_INTEGER,
      min = Number.MIN_SAFE_INTEGER,
      onBlur,
      onChange,
      onKeyDown,
      size,
      step = 1,
      stepper = 'suffix',
      suffix = [],
      value,
      ...others
    }: NumericInputProps,
    forwardedRef,
  ) => {
    const inputElementRef = useRef<HTMLElement | null>(null);
    const timerRef = useRef<any>(null);
    const timeoutRef = useRef<any>(null);
    const valueRef = useRef<string | number | undefined>(value);

    useEffect(() => {
      valueRef.current = value;
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange && onChange(event, event.currentTarget.value);
    };

    const updateStep = (n: number) => {
      const currentValue = toNumber(valueRef.current || 0);
      const stepN = step * n;

      let newValue = currentValue + stepN;
      if (newValue % step) {
        newValue = Math.ceil(currentValue / stepN) * stepN;
      }

      const newValueBoundToMinMax = parseValue(newValue, min, max);

      const currentInputElement = inputElementRef.current;
      if (!currentInputElement) {
        return;
      }

      const prototype = Object.getPrototypeOf(currentInputElement);
      const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

      if (!prototypeValueSetter) {
        return;
      }

      prototypeValueSetter.call(currentInputElement, newValueBoundToMinMax);
      currentInputElement.dispatchEvent(new Event('change', { bubbles: true }));
    };

    const handleIncreaseValue = () => {
      updateStep(1);
    };

    const handleDecreaseValue = () => {
      updateStep(-1);
    };

    const handleDecreaseMouseDown = () => {
      handleDecreaseValue();

      timeoutRef.current = setTimeout(() => {
        timerRef.current = setInterval(() => {
          if (isMinReached()) {
            handleClearStepperTimer();
          } else {
            handleDecreaseValue();
          }
        }, 75);
      }, 300);
    };

    const handleIncreaseMouseDown = () => {
      handleIncreaseValue();

      timeoutRef.current = setTimeout(() => {
        timerRef.current = setInterval(() => {
          if (isMaxReached()) {
            handleClearStepperTimer();
          } else {
            handleIncreaseValue();
          }
        }, 75);
      }, 300);
    };

    const handleClearStepperTimer = () => {
      clearTimeout(timeoutRef.current);
      clearInterval(timerRef.current);
    };

    // Unlike mouse down events, key down events are "auto-repeated" while holding down the key
    // This means we don't need to use an interval and can directly rely on the handler
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#auto-repeat_handling
    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === KEY.ArrowUp) {
        event.preventDefault();
        handleIncreaseValue();
      } else if (event.key === KEY.ArrowDown) {
        event.preventDefault();
        handleDecreaseValue();
      }

      onKeyDown && onKeyDown(event);
    };

    const handleBlur = (event: FocusEvent<HTMLElement>) => {
      onBlur && onBlur(event);
    };

    const isMinReached = () => toNumber(value || 0) <= min;

    const isMaxReached = () => toNumber(value || 0) >= max;

    const getConnectedRight = () => {
      if (stepper === 'connected') {
        return (
          <Button
            disabled={isMaxReached()}
            icon={<IconAddSmallOutline />}
            onBlur={handleBlur}
            onMouseDown={handleIncreaseMouseDown}
            onMouseUp={handleClearStepperTimer}
            onMouseLeave={handleClearStepperTimer}
            size={size}
          />
        );
      }

      return connectedRight;
    };

    const getConnectedLeft = () => {
      if (stepper === 'connected') {
        return (
          <Button
            disabled={isMinReached()}
            icon={<IconMinusSmallOutline />}
            onMouseDown={handleDecreaseMouseDown}
            onMouseUp={handleClearStepperTimer}
            onMouseLeave={handleClearStepperTimer}
            onBlur={handleBlur}
            size={size}
          />
        );
      }

      return connectedLeft;
    };

    const getSuffix = () => {
      if (stepper === 'suffix') {
        return [
          ...(Array.isArray(suffix) ? suffix : [suffix]),
          /* eslint-disable-next-line react/jsx-key */
          <StepperControls
            inverse={inverse}
            stepperUpProps={{
              disabled: isMaxReached(),
              onBlur: handleBlur,
              onMouseDown: handleIncreaseMouseDown,
              onMouseUp: handleClearStepperTimer,
              onMouseLeave: handleClearStepperTimer,
            }}
            stepperDownProps={{
              disabled: isMinReached(),
              onBlur: handleBlur,
              onMouseDown: handleDecreaseMouseDown,
              onMouseUp: handleClearStepperTimer,
              onMouseLeave: handleClearStepperTimer,
            }}
          />,
        ];
      }

      return suffix;
    };

    const setRef = (ref: HTMLElement) => {
      inputElementRef.current = ref;

      if (typeof forwardedRef === 'function') {
        forwardedRef(ref);
      } else if (typeof forwardedRef === 'object' && forwardedRef !== null) {
        forwardedRef.current = ref;
      }
    };

    const restProps = {
      connectedLeft,
      connectedRight,
      inverse,
      max,
      min,
      onBlur,
      size,
      step,
      stepper,
      ...others,
    };

    return (
      <SingleLineInputBase
        ref={setRef}
        type="number"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
        connectedLeft={getConnectedLeft()}
        connectedRight={getConnectedRight()}
        suffix={getSuffix()}
      />
    );
  },
);

NumericInput.displayName = 'NumericInput';

export default NumericInput;
