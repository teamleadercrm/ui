import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Icon from '../icon';
import cx from 'classnames';
import InputBase from './InputBase';
import { TextBody } from '../typography';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import ValidationText from '../validationText';
import { durationToSeconds } from '../utils';

import theme from './theme.css';

const durationToSeconds = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};

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
    seconds: 0,
    minutes: 0,
    hours: 0,
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
        this.setState({ seconds: newSeconds, minutes: newMinutes }, () =>
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
      disabled,
      errorHours,
      errorMinutes,
      errorSeconds,
      helpHours,
      helpMinutes,
      helpSeconds,
      onFocus,
      onBlur,
      inverse,
      readOnly,
      spinner,
      stepSeconds,
      stepMinutes,
      successHours,
      successMinutes,
      successSeconds,
      suffix,
      warningHours,
      warningMinutes,
      warningSeconds,
      ...others
    } = this.props;

    const classNamesHours = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.hoursInputHasfocus,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const classNamesMinutes = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.minutesInputHasfocus,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const classNamesSeconds = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.secondsInputHasfocus,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const boxProps = pickBoxProps(others);
    const inputProps = {
      disabled,
      inverse,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      readOnly,
      ...omitBoxProps(others),
    };
    const { hours, minutes, seconds } = this.state;
    return (
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box className={classNamesHours} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ flex: '1 2 auto' }}>
                  onFocus={this.handleFocusHours}
                  onBlur={this.handleBlurHours}
                  ? this.getSuffixWithSpinner()
                  : suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
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
                  {...inputProps}
                  id={'minutes'}
                  onFocus={this.handleFocusMinutes}
                  onBlur={this.handleBlurMinutes}
                />
                {spinner
                  ? this.getSuffixWithSpinner()
                  : suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
              </div>
            </div>
          </Box>

          {stepSeconds >= 1 && this.renderInputSeparator(inverse)}

          {stepSeconds >= 1 && (
            <Box className={classNamesSeconds} {...boxProps}>
              <div className={theme['input-wrapper']}>
                <div className={theme['input-inner-wrapper']} style={{ flex: '1 2 auto' }}>
                  <InputBase
                    value={seconds < 10 ? `0${seconds}` : seconds}
                    type="number"
                    {...inputProps}
                    id={'seconds'}
                    onFocus={this.handleFocusSeconds}
                    onBlur={this.handleBlurSeconds}
                  />
                  {spinner
                    ? this.getSuffixWithSpinner()
                    : suffix && (
                        <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>
                      )}
                </div>
              </div>
            </Box>
          )}
        </Box>
        <Box>
          <ValidationText
            error={errorHours}
            help={helpHours}
            inverse={inverse}
            success={successHours}
            warning={warningHours}
          />
          <ValidationText
            error={errorMinutes}
            help={helpMinutes}
            inverse={inverse}
            success={successMinutes}
            warning={warningMinutes}
          />
          <ValidationText
            error={errorSeconds}
            help={helpSeconds}
            inverse={inverse}
            success={successSeconds}
            warning={warningSeconds}
          />
        </Box>
      </Box>
    );
  }
}

DurationInput.propTypes = {
  /** The text string/element to use as error message below the input. */
  errorHours: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string/element to use as error message below the input. */
  errorMinutes: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string/element to use as error message below the input. */
  errorSeconds: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string to use as help text below the input. */
  helpHours: PropTypes.string,
  /** The text string to use as help text below the input. */
  helpMinutes: PropTypes.string,
  /** The text string to use as help text below the input. */
  helpSeconds: PropTypes.string,
  /** Boolean indicating whether to number type input should render spinner controls */
  spinner: PropTypes.bool,
  /** Limit increment value for numeric inputs. */
  stepSeconds: PropTypes.number,
  /** Limit increment value for numeric inputs. */
  stepMinutes: PropTypes.number,
  /** The text string/element to use as a suffix inside the input field */
  suffix: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  /** The text string/element to use as success message below the input. */
  successHours: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string/element to use as success message below the input. */
  successMinutes: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string/element to use as success message below the input. */
  successSeconds: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text to use as warning message below the input. */
  warningHours: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text to use as warning message below the input. */
  warningMinutes: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text to use as warning message below the input. */
  warningSeconds: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

DurationInput.defaultProps = {
  suffix: [],
  spinner: true,
};

export default DurationInput;
