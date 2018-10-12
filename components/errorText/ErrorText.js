import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconWarningBadgedSmallFilled } from '@teamleader/ui-icons';
import { Box, TextSmall } from '../../components';
import theme from './theme.css';

export default class ErrorText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    const classNames = cx(
      theme['error-text'],
      {
        [theme['is-inverse']]: inverse,
      },
      className,
    );

    return (
      <Box className={classNames} data-teamleader-ui="error-text" marginTop={2} {...others}>
        <IconWarningBadgedSmallFilled />
        <TextSmall element="span" marginLeft={1}>
          {children}
        </TextSmall>
      </Box>
    );
  }
}

ErrorText.propTypes = {
  /** The displayed text */
  children: PropTypes.node,
  /** The class name for the wrapper to give custom styles */
  className: PropTypes.string,
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

ErrorText.defaultProps = {
  children: 'This is the error text',
  inverse: false,
};
