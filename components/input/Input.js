import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

export default class Input extends Component {
  static propTypes = {
    icon: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    placeholder: '',
    type: 'text',
    size: 'medium',
  };

  render() {
    const { icon, placeholder, type, size, value } = this.props;
    const wrapperClasses = cx(theme.wrapper, theme[size]);
    const inputClasses = cx(theme.input, {
      [theme['has-icon']]: icon,
    });
    const inputProps = { placeholder, type, value, className: inputClasses };

    return (
      <div className={wrapperClasses}>
        {icon &&
          createElement(icon, {
            className: theme.icon,
          })}
        <input {...inputProps} />
      </div>
    );
  }
}
