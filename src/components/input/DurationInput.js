import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Icon from '../icon';
import cx from 'classnames';
import InputBase from './InputBase';
import { TextBody } from '../typography';
import Box, { pickBoxProps } from '../box';
import ValidationText from '../validationText';
import { durationToSeconds } from '../utils';

import theme from './theme.css';

class SpinnerControls extends PureComponent {
  render() {
    const { inverse, spinnerUpProps, spinnerDownProps } = this.props;
    const iconProps = {
      color: inverse ? 'teal' : 'neutral',
      element: 'button',
      tabIndex: '-1',
      tint: inverse ? 'lightest' : 'darkest',
      type: 'button',
    };

    return (
      <div className={theme['spinner']}>
        <Icon className={theme['spinner-up']} {...spinnerUpProps} {...iconProps}>
          <IconChevronUpSmallOutline />
        </Icon>
        <Icon className={theme['spinner-down']} {...spinnerDownProps} {...iconProps}>
          <IconChevronDownSmallOutline />
        </Icon>
      </div>
    );
  }
}

class DurationInput extends PureComponent {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    hoursInputHasfocus: false,
    minutesInputHasfocus: false,
    secondsInputHasfocus: false,
  };

  updateStep = (type, n) => {
    const { hours, minutes, seconds } = this.state;
    let newHours = hours;
    let newMinutes = minutes;
    let newSeconds = seconds;

    switch (type) {
      case 'hours':
        if (hours >= 0 && n >= 0) {
          newHours = hours + n;
        } else if (hours >= Math.abs(n) && n < 0) {
          newHours = hours + n;
        } else if (hours <= Math.abs(n) && n < 0) {
          newHours = 0;
        }
        this.setState({ hours: newHours }, () => this.props.onChange(durationToSeconds(newHours, minutes, seconds)));
        break;

      case 'minutes':
        if (minutes + n >= 60) {
          newHours = hours + 1;
          newMinutes = minutes - 60 + n;
        } else if (n >= 0) {
          newMinutes = minutes + n;
          newHours = hours;
        } else if (n < 0 && hours > 0 && minutes <= Math.abs(n)) {
          newMinutes = minutes + 60 + n;
          newHours = hours - 1;
        } else if (n < 0 && minutes >= Math.abs(n)) {
          newMinutes = minutes + n;
        } else if (n < 0 && minutes <= Math.abs(n)) {
          newMinutes = 0;
        }
        this.setState({ minutes: newMinutes, hours: newHours }, () =>
          this.props.onChange(durationToSeconds(newHours, newMinutes, seconds)),
        );
        break;

      case 'seconds':
        if (n > 0 && minutes * 60 + seconds >= 3600 - Math.abs(n)) {
          newSeconds = seconds - 60 + n;
          newMinutes = Math.floor(newSeconds / 60);
          newHours = hours + 1;
        } else if (seconds + n >= 60) {
          newMinutes = minutes + 1;
          newSeconds = seconds - 60 + n;
        } else if (n >= 0) {
          newSeconds = seconds + n;
          newMinutes = minutes;
        } else if (n < 0 && hours >= 1 && minutes === 0 && seconds + n < 0) {
          newSeconds = 60 + n;
          newMinutes = 59;
          newHours = hours - 1;
        } else if (n < 0 && minutes > 0 && seconds < Math.abs(n)) {
          newSeconds = seconds + 60 + n;
          newMinutes = minutes - 1;
        } else if (n < 0 && seconds >= Math.abs(n)) {
          newSeconds = seconds + n;
        } else if (n < 0 && seconds <= Math.abs(n)) {
          newSeconds = 0;
        }
        this.setState({ hours: newHours, seconds: newSeconds, minutes: newMinutes }, () =>
          this.props.onChange(durationToSeconds(hours, newMinutes, newSeconds)),
        );
        break;

      default:
        break;
    }
  };

  handleIncreaseValue = event => {
    const element = event.currentTarget.parentElement.previousSibling.getAttribute('id');
    const stepSeconds = this.props.secondsInputProps.step;
    const stepMinutes = this.props.minutesInputProps.step;

    switch (element) {
      case 'seconds':
        this.updateStep(element, stepSeconds);
        break;
      case 'minutes':
        this.updateStep(element, stepMinutes);
        break;
      case 'hours':
        this.updateStep(element, 1);
        break;
      default:
        break;
    }
  };

  handleDecreaseValue = event => {
    const element = event.currentTarget.parentElement.previousSibling.getAttribute('id');
    const stepSeconds = this.props.secondsInputProps.step;
    const stepMinutes = this.props.minutesInputProps.step;

    switch (element) {
      case 'seconds':
        this.updateStep(element, -stepSeconds);
        break;
      case 'minutes':
        this.updateStep(element, -stepMinutes);
        break;
      case 'hours':
        this.updateStep(element, -1);
        break;
      default:
        break;
    }
  };

  getSuffixWithSpinner = () => [
    ...this.props.suffix,
    <SpinnerControls
      inverse={this.props.inverse}
      spinnerUpProps={{
        onClick: this.handleIncreaseValue,
      }}
      spinnerDownProps={{
        onClick: this.handleDecreaseValue,
      }}
    />,
  ];

  handleBlurHours = event => {
    this.setState({ hoursInputHasfocus: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocusHours = event => {
    this.setState({ hoursInputHasfocus: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlurMinutes = event => {
    this.setState({ minutesInputHasfocus: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocusMinutes = event => {
    this.setState({ minutesInputHasfocus: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlurSeconds = event => {
    this.setState({ secondsInputHasfocus: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocusSeconds = event => {
    this.setState({ secondsInputHasfocus: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  renderOneOrMultipleElements(prop) {
    if (Array.isArray(prop)) {
      return prop.map((element, index) => React.cloneElement(element, { key: index }));
    }
    return prop;
  }

  renderInputSeparator = inverse => {
    return (
      <TextBody
        color={inverse ? 'neutral' : 'teal'}
        tint={inverse ? 'lightest' : 'darkest'}
        flex="0 0 18px"
        paddingHorizontal={2}
      >
        :
      </TextBody>
    );
  };

  render() {
    const {
      className,
      commonInputProps,
      hoursInputProps,
      inverse,
      minutesInputProps,
      onFocus,
      onBlur,
      secondsInputProps,
      size,
      ...others
    } = this.props;

    const classNamesHours = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.hoursInputHasfocus,
        [theme['has-error']]: hoursInputProps.error,
        [theme['has-warning']]: hoursInputProps.warning,
        [theme['has-success']]: hoursInputProps.success,
        [theme['is-disabled']]: commonInputProps.disabled,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: commonInputProps.readOnly,
      },
      className,
    );

    const classNamesMinutes = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.minutesInputHasfocus,
        [theme['has-error']]: minutesInputProps.error,
        [theme['has-warning']]: minutesInputProps.warning,
        [theme['has-success']]: minutesInputProps.success,
        [theme['is-disabled']]: commonInputProps.disabled,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: commonInputProps.readOnly,
      },
      className,
    );

    const classNamesSeconds = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.secondsInputHasfocus,
        [theme['has-error']]: secondsInputProps.error,
        [theme['has-warning']]: secondsInputProps.warning,
        [theme['has-success']]: secondsInputProps.success,
        [theme['is-disabled']]: commonInputProps.disabled,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: commonInputProps.readOnly,
      },
      className,
    );

    const boxProps = pickBoxProps(others);

    const { hours, minutes, seconds } = this.state;
    return (
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box className={classNamesHours} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ flex: '1 2 auto' }}>
                <InputBase
                  value={hours < 10 ? `0${hours}` : hours}
                  type="number"
                  size={size}
                  {...commonInputProps}
                  id={'hours'}
                  onFocus={this.handleFocusHours}
                  onBlur={this.handleBlurHours}
                />
                {commonInputProps.spinner
                  ? this.getSuffixWithSpinner()
                  : commonInputProps.suffix && (
                      <div className={theme['suffix-wrapper']}>
                        {this.renderOneOrMultipleElements(commonInputProps.suffix)}
                      </div>
                    )}
              </div>
            </div>
          </Box>

          {this.renderInputSeparator(inverse)}

          <Box className={classNamesMinutes} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ flex: '1 2 auto' }}>
                <InputBase
                  value={minutes < 10 ? `0${minutes}` : minutes}
                  type="number"
                  size={size}
                  {...commonInputProps}
                  id={'minutes'}
                  onFocus={this.handleFocusMinutes}
                  onBlur={this.handleBlurMinutes}
                />
                {commonInputProps.spinner
                  ? this.getSuffixWithSpinner()
                  : commonInputProps.suffix && (
                      <div className={theme['suffix-wrapper']}>
                        {this.renderOneOrMultipleElements(commonInputProps.suffix)}
                      </div>
                    )}
              </div>
            </div>
          </Box>

          {secondsInputProps.step >= 1 && this.renderInputSeparator(inverse)}

          {secondsInputProps.step >= 1 && (
            <Box className={classNamesSeconds} {...boxProps}>
              <div className={theme['input-wrapper']}>
                <div className={theme['input-inner-wrapper']} style={{ flex: '1 2 auto' }}>
                  <InputBase
                    value={seconds < 10 ? `0${seconds}` : seconds}
                    type="number"
                    size={size}
                    {...commonInputProps}
                    id={'seconds'}
                    onFocus={this.handleFocusSeconds}
                    onBlur={this.handleBlurSeconds}
                  />
                  {commonInputProps.spinner
                    ? this.getSuffixWithSpinner()
                    : commonInputProps.suffix && (
                        <div className={theme['suffix-wrapper']}>
                          {this.renderOneOrMultipleElements(commonInputProps.suffix)}
                        </div>
                      )}
                </div>
              </div>
            </Box>
          )}
        </Box>
        <Box>
          <ValidationText {...hoursInputProps} />
          <ValidationText {...minutesInputProps} />
          <ValidationText {...secondsInputProps} />
        </Box>
      </Box>
    );
  }
}

DurationInput.propTypes = {
  /** Object with props for the DatePicker component. */
  commonInputProps: PropTypes.object,
  /** Sets a class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Object with props for the DatePicker component. */
  hoursInputProps: PropTypes.object,
  /** If true, component will be rendered in inverse mode. */
  inverse: PropTypes.bool,
  /** Object with props for the DatePicker component. */
  minutesInputProps: PropTypes.object,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** Object with props for the DatePicker component. */
  secondsInputProps: PropTypes.object,
  /** Size of the Input & DatePicker components. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DurationInput.defaultProps = {
  suffix: [],
};

export default DurationInput;
