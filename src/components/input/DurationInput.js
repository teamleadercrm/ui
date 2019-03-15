import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Icon from '../icon';
import theme from './theme.css';

import SingleLineInputBase from './SingleLineInputBase';
import { Box } from '../..';

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
  };

  updateStep = (type, n) => {
    switch (type) {
      case 'hours':
        const hours = (this.state.hours += n);
        this.setState({ hours: hours });
        console.log(this.state.hours);
        break;
      case 'minutes':
        const minutes = (this.state.minutes += n);
        this.setState({ minutes: minutes });
        console.log(this.state.minutes);
        break;
      case 'seconds':
        const seconds = (this.state.seconds += n);
        this.setState({ seconds: seconds });
        console.log(this.state.seconds);
        break;
      default:
        break;
    }
  };

  handleIncreaseValue = event => {
    const type = event.currentTarget.parentElement.parentElement.previousSibling.getAttribute('id');
    this.updateStep(type, 1);
  };

  handleDecreaseValue = event => {
    const type = event.currentTarget.parentElement.parentElement.previousSibling.getAttribute('id');
    this.updateStep(type, -1);
  };

  getSuffixWithSpinner = index => [
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

  render() {
    const { spinner, suffix, ...others } = this.props;

    return (
      <Box>
        <SingleLineInputBase
          type="number"
          suffix={spinner ? this.getSuffixWithSpinner(0) : suffix}
          onChange={event => {
            this.setState({ seconds: event.currentTarget.hours });
          }}
          {...others}
          id={'hours'}
          value={this.state.hours}
        />
        <SingleLineInputBase
          type="number"
          value={this.state.minutes}
          suffix={spinner ? this.getSuffixWithSpinner(1) : suffix}
          onChange={event => {
            this.setState({ minutes: event.currentTarget.minutes });
          }}
          max={60}
          {...others}
          id={'minutes'}
        />
        <SingleLineInputBase
          type="number"
          value={this.state.seconds}
          suffix={spinner ? this.getSuffixWithSpinner(2) : suffix}
          onChange={event => {
            this.setState({ hours: event.currentTarget.seconds });
          }}
          max={60}
          {...others}
          id={'seconds'}
        />
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
