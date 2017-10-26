import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';
import omit from 'lodash.omit';
import Box from '../box';
import { TextBody } from '../typography';

class Toggle extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['neutral', 'teal', 'ruby', 'mint', 'violet', 'gold', 'aqua']),
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    size: 'medium',
    color: 'neutral',
  };

  constructor() {
    super(...arguments);
    this.handleToggle = ::this.handleToggle;
  }

  handleToggle() {
    const { disabled, checked, onChange } = this.props;

    if (!disabled && onChange) {
      onChange(!checked, event);
    }
  }

  getTextColor() {
    if (this.props.color === 'teal') {
      return 'white';
    }

    return 'teal';
  }

  splitProps(props) {
    const availableBoxProps = [
      'margin',
      'marginVertical',
      'marginHorizontal',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'padding',
      'paddingHorizontal',
      'paddingVertical',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
    ];

    const boxProps = {};
    const inputProps = {};

    Object.keys(props).forEach(key => {
      const value = props[key];

      if (availableBoxProps.includes(key)) {
        boxProps[key] = value;
      } else {
        inputProps[key] = value;
      }
    });

    return { boxProps, inputProps };
  }

  render() {
    const { checked, disabled, className, size, color, label, ...others } = this.props;
    const rest = omit(others, ['onChange']);
    const { boxProps, inputProps } = this.splitProps(rest);

    const classNames = cx(
      theme['toggle'],
      theme[size],
      theme[color],
      {
        [theme['checked']]: checked,
        [theme['disabled']]: disabled,
      },
      className,
    );

    return (
      <Box element="label" data-teamleader-ui="toggle" className={classNames} {...boxProps}>
        <input
          className={theme['input']}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onClick={this.handleToggle}
          readOnly
          {...inputProps}
        />
        <span className={theme['track']}>
          <span className={theme['thumb']} />
        </span>
        {label && (
          <TextBody element="span" color={this.getTextColor()} soft={disabled} className={theme['label']}>
            {label}
          </TextBody>
        )}
      </Box>
    );
  }
}

export default Toggle;
export { Toggle };
