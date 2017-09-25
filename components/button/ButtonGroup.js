import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class ButtonGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    segmented: PropTypes.bool,
  };

  render () {
    const {
      children,
      className,
      segmented,
      ...others
    } = this.props;

    const classes = cx(
      [ theme.group ],
      {
        [theme.segmented]: segmented,
      },
      className
    );

    return (
      <div
        data-teamleader-ui="button-group"
        className={classes}
        {...others}
      >
        {children}
      </div>
    );
  }

}

export default ButtonGroup;
