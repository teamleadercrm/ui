import React, { createRef, PureComponent } from 'react';
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
  hoursInputNode = createRef();
  minutesInputNode = createRef();
  secondsInputNode = createRef();
  state = {
    seconds: 0,
    hoursInputHasfocus: false,
    minutesInputHasfocus: false,
    secondsInputHasfocus: false,
  };

  updateStep = (type, step) => {
    let seconds = this.state.seconds;
    const onChange = this.props.onChange;
    switch (type) {
      case 'hours':
        if (step < 0 && seconds + step * 3600 < 0) {
          return;
        }
        seconds += step * 3600;
        this.setState({ seconds }, () => onChange && onChange(durationToSeconds(seconds)));
        break;
      case 'minutes':
        if (step < 0 && seconds + step * 60 < 0) {
          return;
        }
        seconds += step * 60;
        this.setState({ seconds }, () => onChange && onChange(durationToSeconds(seconds)));
        break;
      case 'seconds':
        if (step < 0 && seconds + step < 0) {
          return;
        }
        seconds += step;
        this.setState({ seconds }, () => onChange && onChange(durationToSeconds(seconds)));
        break;
      default:
        break;
    }
  };

  detectValue = (element, posNeg) => {
    const stepSeconds = this.props.secondsInputProps.step;
    const stepMinutes = this.props.minutesInputProps.step;
    switch (element) {
      case this.secondsInputNode.current:
        this.updateStep('seconds', posNeg * stepSeconds);
        break;
      case this.minutesInputNode.current:
        this.updateStep('minutes', posNeg * stepMinutes);
        break;
      case this.hoursInputNode.current:
        this.updateStep('hours', posNeg * 1);
        break;
      default:
        break;
    }
  };

  handleIncreaseValue = event => {
    const element = event.currentTarget.parentElement.previousSibling;
    const posNeg = 1;
    this.detectValue(element, posNeg);
  };

  handleDecreaseValue = event => {
    const element = event.currentTarget.parentElement.previousSibling;
    const posNeg = -1;
    this.detectValue(element, posNeg);
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

  splitSecondsIntoHoursMinutesSeconds = seconds => {
    const secondsInMinute = 60;
    const secondsInHour = secondsInMinute * 60;

    const hours = Math.floor(seconds / secondsInHour);
    const minutes = Math.floor((seconds % secondsInHour) / secondsInMinute);
    const remainingSeconds = seconds % secondsInMinute;
    return {
      hours,
      minutes,
      seconds: remainingSeconds,
    };
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
    const seconds = this.state.seconds;

    return (
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {hoursInputProps.showHours && (
            <Box className={classNamesHours} {...boxProps}>
              <div className={theme['input-wrapper']}>
                <div className={theme['input-inner-wrapper']} style={{ flex: '1 2 auto' }}>
                  <InputBase
                    value={
                      this.splitSecondsIntoHoursMinutesSeconds(seconds).hours < 10
                        ? `0${this.splitSecondsIntoHoursMinutesSeconds(seconds).hours}`
                        : this.splitSecondsIntoHoursMinutesSeconds(seconds).hours
                    }
                    type="number"
                    size={size}
                    {...commonInputProps}
                    id={'hours'}
                    onFocus={this.handleFocusHours}
                    onBlur={this.handleBlurHours}
                    innerRef={this.hoursInputNode}
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

          {hoursInputProps.showHours &&
            (minutesInputProps.showMinutes || secondsInputProps.showSeconds) &&
            this.renderInputSeparator(inverse)}

          {minutesInputProps.showMinutes && (
            <Box className={classNamesMinutes} {...boxProps}>
              <div className={theme['input-wrapper']}>
                <div className={theme['input-inner-wrapper']} style={{ flex: '1 2 auto' }}>
                  <InputBase
                    value={
                      this.splitSecondsIntoHoursMinutesSeconds(seconds).minutes < 10
                        ? `0${this.splitSecondsIntoHoursMinutesSeconds(seconds).minutes}`
                        : this.splitSecondsIntoHoursMinutesSeconds(seconds).minutes
                    }
                    type="number"
                    size={size}
                    {...commonInputProps}
                    id={'minutes'}
                    onFocus={this.handleFocusMinutes}
                    onBlur={this.handleBlurMinutes}
                    innerRef={this.minutesInputNode}
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

          {minutesInputProps.showMinutes && secondsInputProps.showSeconds && this.renderInputSeparator(inverse)}

          {secondsInputProps.showSeconds && (
            <Box className={classNamesSeconds} {...boxProps}>
              <div className={theme['input-wrapper']}>
                <div className={theme['input-inner-wrapper']} style={{ flex: '1 2 auto' }}>
                  <InputBase
                    value={
                      this.splitSecondsIntoHoursMinutesSeconds(seconds).seconds < 10
                        ? `0${this.splitSecondsIntoHoursMinutesSeconds(seconds).seconds}`
                        : this.splitSecondsIntoHoursMinutesSeconds(seconds).seconds
                    }
                    type="number"
                    size={size}
                    {...commonInputProps}
                    id={'seconds'}
                    onFocus={this.handleFocusSeconds}
                    onBlur={this.handleBlurSeconds}
                    innerRef={this.secondsInputNode}
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
  /** Object with props for the DurationInput component. */
  commonInputProps: PropTypes.object,
  /** Sets a class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Object with props for the hours input of the DurationInput component. */
  hoursInputProps: PropTypes.object,
  /** If true, component will be rendered in inverse mode. */
  inverse: PropTypes.bool,
  /** Object with props for the minutes input of the DurationInput component. */
  minutesInputProps: PropTypes.object,
  /** Callback function that is fired when the time has changed. */
  onChange: PropTypes.func,
  /** Object with props for the seconds input of the DurationInput component. */
  secondsInputProps: PropTypes.object,
  /** Size of the Input components. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DurationInput.defaultProps = {
  suffix: [],
};

export default DurationInput;
