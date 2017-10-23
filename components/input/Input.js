import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ContentEditable from './ContentEditable';
import Counter from '../counter';
import theme from './theme.css';

export default class Input extends Component {
  static propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    counter: PropTypes.number,
    disabled: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    iconPlacement: 'left',
    disabled: false,
    placeholder: '',
    readonly: false,
    size: 'medium',
  };

  renderInput() {
    const { bold, disabled, onBlur, onChange, onFocus, placeholder, readonly, type, value } = this.props;
    const classNames = cx(theme['input'], {
      [theme['is-disabled']]: disabled,
      [theme['is-read-only']]: readonly,
      [theme['is-bold']]: bold,
    });
    const props = {
      className: classNames,
      disabled: disabled,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      placeholder,
      readonly,
      type,
      value,
    };

    return <input {...props} />;
  }

  renderCounter() {
    if (this.props.counter) {
      return <Counter className={theme.counter} count={this.props.counter} color="ruby" size="small" />;
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
        {counter && this.renderCounter()}
      </div>
    );
  }
}
