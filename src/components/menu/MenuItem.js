import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import { TextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

class MenuItem extends PureComponent {
  handleClick = event => {
    const { disabled, onClick } = this.props;

    if (onClick && !disabled) {
      onClick(event, this);
    }
  };

  render() {
    const { icon, caption, className, selected, disabled, ...others } = this.props;

    const classNames = cx(
      theme['menu-item'],
      {
        [theme['is-selected']]: selected,
        [theme['is-disabled']]: disabled,
      },
      className,
    );

    const color = disabled ? 'neutral' : 'teal';
    const tint = disabled ? 'dark' : 'darkest';

    return (
      <Box
        alignItems="center"
        data-teamleader-ui="menu-item"
        display="flex"
        element="li"
        {...others}
        className={classNames}
        paddingHorizontal={3}
        onClick={this.handleClick}
      >
        {icon && (
          <Icon color={color} tint={tint} marginRight={3}>
            {icon}
          </Icon>
        )}
        <TextBody color={color} tint={tint} element="span">
          {caption}
        </TextBody>
      </Box>
    );
  }
}

MenuItem.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

MenuItem.defaultProps = {
  className: '',
  disabled: false,
  selected: false,
};

export default MenuItem;
