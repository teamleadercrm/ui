import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import {
  IconChevronUpSmallOutline,
  IconChevronDownSmallOutline,
  IconWarningBadgedSmallFilled,
} from '@teamleader/ui-icons';
import InputMetaPropTypes from './InputMetaPropTypes';
import Box from '../box';
import Counter from '../counter';
import { TextSmall } from '../typography';
import theme from './theme.css';

export default class Input extends Component {
  static propTypes = {
    /** Boolean indicating whether the input text should render in bold. */
    bold: PropTypes.bool,
    /** Sets a class name to give custom styles. */
    className: PropTypes.string,
    /** The number to render as a counter inside the input. */
    counter: PropTypes.number,
    /** Boolean indicating whether the input should render as disabled. */
    disabled: PropTypes.bool,
    /** The text string to use as help text below the input. */
    helpText: PropTypes.string,
    /** The icon displayed inside the input. */
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    /** The position of the icon inside the input. */
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    /** The text string to use as input identifier. */
    id: PropTypes.string,
    /** Boolean indicating whether the input should render as inverse. */
    inverse: PropTypes.bool,
    /** Object to provide meta information for redux forms. */
    meta: InputMetaPropTypes,
    /** Callback function that is fired when component is blurred. */
    onBlur: PropTypes.func,
    /** Callback function that is fired when the component's value changes. */
    onChange: PropTypes.func,
    /** Callback function that is fired when component is focused. */
    onFocus: PropTypes.func,
    /** The text string to use as placeholder. */
    placeholder: PropTypes.string,
    /** Boolean indicating whether the input should render as read only. */
    readOnly: PropTypes.bool,
    /** Size of the input element. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Limit increment value for numeric inputs. */
    step: PropTypes.number,
    /** Type of the input element. It can be a valid HTML5 input type. */
    type: PropTypes.string,
    /** Current value of the input element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    iconPlacement: 'left',
    inverse: false,
    disabled: false,
    placeholder: '',
    readOnly: false,
    size: 'medium',
    step: 1,
  };

  constructor(props) {
    super(props);

    this.handleChange = ::this.handleChange;
    this.handleIncreaseValue = ::this.handleIncreaseValue;
    this.handleDecreaseValue = ::this.handleDecreaseValue;

    this.state = {
      value: props.type === 'number' ? Number(props.value) || '' : props.value || '',
    };
  }

  componentWillUpdate(props, state) {
    if (props.onChange && state.value) {
      props.onChange(state.value);
    }
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState(() => ({
      value: this.props.type === 'number' ? Number(value) : value,
    }));
  }

  handleIncreaseValue() {
    this.setState((previousState, props) => ({
      value: previousState.value ? previousState.value + props.step : props.step,
    }));
  }

  handleDecreaseValue() {
    this.setState((previousState, props) => ({
      value: previousState.value ? previousState.value - props.step : -props.step,
    }));
  }

  renderInput() {
    const { bold, disabled, id, onBlur, onFocus, placeholder, readOnly, step, type } = this.props;
    const classNames = cx(theme['input'], {
      [theme['is-bold']]: bold,
    });
    const props = {
      className: classNames,
      disabled: disabled,
      id,
      onBlur: onBlur,
      onChange: this.handleChange,
      onFocus: onFocus,
      placeholder,
      readOnly,
      step,
      type,
      value: this.state.value,
    };

    return <input {...props} />;
  }

  renderCounter() {
    if (this.props.counter) {
      return <Counter className={theme.counter} count={this.props.counter} color="ruby" size="small" />;
    }
  }

  renderHelpText() {
    const { helpText, inverse } = this.props;

    if (helpText) {
      return (
        <TextSmall color={inverse ? 'white' : 'neutral'} marginTop={1} soft>
          {helpText}
        </TextSmall>
      );
    }
  }

  renderSpinnerControls() {
    if (this.props.type === 'number') {
      return (
        <div className={theme['spinner']}>
          <button className={theme['spinner-up']} onClick={this.handleIncreaseValue}>
            <IconChevronUpSmallOutline />
          </button>
          <button className={theme['spinner-down']} onClick={this.handleDecreaseValue}>
            <IconChevronDownSmallOutline />
          </button>
        </div>
      );
    }
  }

  renderValidationMessage() {
    const { meta } = this.props;
    const props = {
      className: theme['validation-text'],
      marginTop: 2,
    };

    if (meta && meta.error) {
      return <TextSmall {...props}>{meta.error}</TextSmall>;
    }
  }

  renderValidationIcon() {
    if (this.props.meta && this.props.meta.error) {
      return <IconWarningBadgedSmallFilled className={theme['validation-icon']} />;
    }
  }

  render() {
    const {
      className,
      counter,
      disabled,
      icon,
      iconPlacement,
      inverse,
      size,
      type,
      meta,
      readOnly,
      ...others
    } = this.props;
    const classNames = cx(
      theme.wrapper,
      theme[`is-${size}`],
      {
        [theme[`has-icon-${iconPlacement}`]]: icon,
        [theme['has-counter']]: counter,
        [theme['has-error']]: Boolean(meta && meta.error),
        [theme['has-validation-feedback']]: Boolean(meta && meta.error),
        [theme['is-inverse']]: inverse,
        [theme['is-numeric']]: type === 'number',
        [theme['is-disabled']]: disabled,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const rest = omit(others, [
      'bold',
      'id',
      'helpText',
      'onBlur',
      'onChange',
      'onFocus',
      'placeholder',
      'step',
      'value',
    ]);

    return (
      <Box className={classNames} {...rest}>
        <div className={theme['input-wrapper']}>
          {icon &&
            createElement(icon, {
              className: theme.icon,
            })}

          {this.renderInput()}
          {this.renderCounter()}
          {this.renderSpinnerControls()}
          {this.renderValidationIcon()}
        </div>
        {this.renderHelpText()}
        {this.renderValidationMessage()}
      </Box>
    );
  }
}
