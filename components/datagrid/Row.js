import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Row extends PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.oneOf(['white', 'neutral']),
    className: PropTypes.string,
    children: PropTypes.any,
  };

  static defaultProps = {
    backgroundColor: 'white',
  };

  render() {
    const { backgroundColor, className, children, ...others } = this.props;

    const classNames = cx(theme['row'], theme[`has-background-${backgroundColor}`], className);

    return (
      <div className={classNames} {...others}>
        {children}
      </div>
    );
  }
}

export default Row;
