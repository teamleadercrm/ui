import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';
import { pickBoxProps } from '../box';

class OverviewPage extends PureComponent {
  render() {
    const { children, className, ...others } = this.props;

    const boxProps = pickBoxProps(others);

    const classNames = cx(theme['overview-page'], className);

    return (
      <div className={classNames} {...boxProps}>
        {children}
      </div>
    );
  }
}

OverviewPage.propTypes = {
  /** The content to display. */
  children: PropTypes.node,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
};

export default OverviewPage;
