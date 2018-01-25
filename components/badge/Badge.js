import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { TextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

class Badge extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    icon: PropTypes.element,
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    inherit: PropTypes.bool,
    inverse: PropTypes.bool,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    element: 'button',
    iconPlacement: 'left',
    inherit: true,
    inverse: false,
  };

  handleMouseUp = event => {
    this.badgeNode.getNode().blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = event => {
    this.badgeNode.getNode().blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    const { children, className, disabled, element, icon, iconPlacement, inherit, inverse, ...others } = this.props;

    const classNames = cx(
      theme['badge'],
      {
        [theme['is-disabled']]: disabled,
        [theme['is-inherit']]: inherit,
        [theme['is-inverse']]: inverse,
      },
      className,
    );

    return (
      <Box
        className={classNames}
        data-teamleader-ui="badge"
        element={element}
        ref={node => (this.badgeNode = node)}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        paddingHorizontal={2}
        paddingVertical={1}
        {...others}
      >
        {icon && iconPlacement === 'left' && <span className={theme['icon']}>{icon}</span>}
        {inherit ? (
          <span className={theme['label']}>{children}</span>
        ) : (
          <TextBody className={theme['label']} element="span">
            {children}
          </TextBody>
        )}
        {icon && iconPlacement === 'right' && <span className={theme['icon']}>{icon}</span>}
      </Box>
    );
  }
}

export default Badge;
