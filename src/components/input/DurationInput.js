import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Icon from '../icon';
import theme from './theme.css';

import SingleLineInputBase from './SingleLineInputBase';
import cx from 'classnames';

import InputBase from './InputBase';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import ValidationText from '../validationText';

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
    inputHasfocus: false,
  };

  updateStep = (type, n) => {
    if (n === 1) {
    switch (type) {
      case 'hours':
        let hours = this.state.hours;
        hours += n;
        this.setState({ hours: hours });
        break;
      case 'minutes':
        let minutes = this.state.minutes;
        if (minutes >= 59) {
          minutes = 0;
          let hoursUp = this.state.hours;
          hoursUp += n;
          this.setState({ minutes: minutes, hours: hoursUp });
        } else {
          minutes += n;
        this.setState({ minutes: minutes });
        }
        break;
      case 'seconds':
        let seconds = this.state.seconds;
        if (seconds >= 59) {
          seconds = 0;
          let minutesUp = this.state.minutes;
          minutesUp += n;
          this.setState({ seconds: seconds, minutes: minutesUp });
        } else {
          seconds += n;
        this.setState({ seconds: seconds });
        }
        break;
      default:
        break;
    }
    } else {
      let hours = this.state.hours;
      let minutes = this.state.minutes;
      let seconds = this.state.seconds;
      switch (type) {
        case 'hours':
          if (hours <= 0) {
            hours = 0;
            this.setState({ hours: hours });
          } else {
            hours += n;
            this.setState({ hours: hours });
          }
          break;
        case 'minutes':
          if (minutes === 0 && hours >= 1) {
            console.log('1');
            hours += n;
            minutes = 59;
            this.setState({ hours: hours, minutes: minutes });
          } else {
            minutes += n;
            this.setState({ minutes: minutes });
          }
          if (minutes <= 0) {
            minutes = 0;
            this.setState({ minutes: minutes });
          }
          break;
        case 'seconds':
          if (seconds === 0 && minutes >= 1) {
            console.log('1');
            minutes += n;
            seconds = 59;
            this.setState({ minutes: minutes, seconds: seconds });
          } else {
            seconds += n;
            this.setState({ seconds: seconds });
          }
          if (seconds <= 0) {
            seconds = 0;
            this.setState({ seconds: seconds });
          }
          break;
        default:
          break;
      }
    }
    
  };

  handleIncreaseValue = event => {
    const element = event.currentTarget.parentElement.previousSibling.getAttribute('id');
    this.updateStep(element, this.props.step);
  };

  handleDecreaseValue = event => {
    const element = event.currentTarget.parentElement.previousSibling.getAttribute('id');
    this.updateStep(element, -this.props.step);
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
        disabled: this.isMinReached,
      }}
    />,
  ];

  handleBlur = event => {
    this.setState({ inputHasfocus: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = event => {
    this.setState({ inputHasfocus: true });
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

  render() {
    const {
      className,
      connectedLeft,
      connectedRight,
      disabled,
      errorHours,
      errorMinutes,
      errorSeconds,
      helpHours,
      helpMinutes,
      helpSeconds,
      onFocus,
      onBlur,
      prefix,
      inverse,
      readOnly,
      spinner,
      successHours,
      successMinutes,
      successSeconds,
      suffix,
      width,
      warningHours,
      warningMinutes,
      warningSeconds,
      ...others
    } = this.props;

    const classNamesHours = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.inputHasfocus,
        [theme['has-error']]: errorHours,
        [theme['has-warning']]: warningHours,
        [theme['has-success']]: successHours,
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['is-disabled']]: disabled,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const classNamesMinutes = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.inputHasfocus,
        [theme['has-error']]: errorMinutes,
        [theme['has-warning']]: warningMinutes,
        [theme['has-success']]: successMinutes,
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['is-disabled']]: disabled,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const classNamesSeconds = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.inputHasfocus,
        [theme['has-error']]: errorSeconds,
        [theme['has-warning']]: warningSeconds,
        [theme['has-success']]: successSeconds,
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['is-disabled']]: disabled,
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

    return (
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" style={{ width: '220px' }}>
          <Box className={classNames} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 0 auto' }}>
                <InputBase
          onChange={event => {
            this.setState({ seconds: event.currentTarget.hours });
          }}
          value={this.state.hours}
          type="number"
                  {...inputProps}
                  id={'hours'}
                />
                {spinner
                  ? this.getSuffixWithSpinner(0)
                  : suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
              </div>
            </div>
          </Box>

          <span style={{ width: '20px', paddingRight: '3px', paddingLeft: '3px' }}>:</span>

          <Box className={classNames} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 0 auto' }}>
                <InputBase
          onChange={event => {
                    this.setState({ seconds: event.currentTarget.hours });
          }}
                  value={this.state.minutes}
                  type="number"
                  {...inputProps}
          id={'minutes'}
        />
                {spinner
                  ? this.getSuffixWithSpinner(0)
                  : suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
              </div>
            </div>
          </Box>

          <span style={{ width: '20px', paddingRight: '3px', paddingLeft: '3px' }}>:</span>

          <Box className={classNames} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 0 auto' }}>
                <InputBase
          onChange={event => {
                    this.setState({ seconds: event.currentTarget.hours });
          }}
                  value={this.state.seconds}
                  type="number"
                  {...inputProps}
          id={'seconds'}
        />
                {spinner
                  ? this.getSuffixWithSpinner(0)
                  : suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
              </div>
            </div>
          </Box>
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
  /** The maximum value that can be inputted */
  max: PropTypes.number,
  /** The minimum value that can be inputted */
  min: PropTypes.number,
  /** Boolean indicating whether to number type input should render spinner controls */
  spinner: PropTypes.bool,
  /** Limit increment value for numeric inputs. */
  step: PropTypes.number,
};

DurationInput.defaultProps = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  suffix: [],
  spinner: true,
};

export default DurationInput;
