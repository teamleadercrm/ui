import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Counter from '../counter';
import theme from './theme.css';

export default class Input extends PureComponent {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    counter: PropTypes.number,
    disabled: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    id: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    step: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    iconPlacement: 'left',
    disabled: false,
    placeholder: '',
    readOnly: false,
    size: 'medium',
    step: 1,
  };

  constructor(props) {
    super(props);

    this.isNumberInput = Boolean(props.type === 'number');
    this.handleChange = this.onChange.bind(this);
    this.handleIncreaseValue = this.increaseValue.bind(this);
    this.handleDecreaseValue = this.decreaseValue.bind(this);

    if (this.isNumber) {
      this.state = {
        value: Number(props.value) || undefined,
      };
    } else {
      this.state = {
        value: props.value || '',
      };
    }
  }

  createEvent() {
    return new Event('input', { bubbles: true });
  }

  onChange(value) {
    if (value.target) {
      if (this.isNumberInput) {
        this.setState({ value: Number(value.target.value) });
      } else {
        this.setState({ value: value.target.value });
      }

      return this.props.onChange(this.state.value);
    }

    this.setState({ value });

    return this.props.onChange(value);
  }

  increaseValue() {
    if (this.state.value) {
      return this.onChange(this.state.value + this.props.step);
    }

    return this.onChange(this.props.step);
  }

  decreaseValue() {
    if (this.state.value) {
      return this.onChange(this.state.value - this.props.step);
    }

    return this.onChange(-this.props.step);
  }

  renderInput() {
    const { bold, disabled, id, onBlur, onFocus, placeholder, readOnly, type } = this.props;
    const classNames = cx(theme['input'], {
      [theme['is-disabled']]: disabled,
      [theme['is-read-only']]: readOnly,
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

  renderSpinnerControls() {
    if (this.isNumberInput) {
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

  render() {
    const { className, counter, icon, iconPlacement, size } = this.props;
    const classNames = cx(theme.wrapper, theme[size], className, {
      [theme[`has-icon-${iconPlacement}`]]: icon,
      [theme['has-counter']]: counter,
    });

    return (
      <div className={classNames}>
        {icon &&
          createElement(icon, {
            className: theme.icon,
          })}

        {this.renderInput()}
        {this.renderCounter()}
        {this.renderSpinnerControls()}
      </div>
    );
  }
}
