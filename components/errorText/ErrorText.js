import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { IconWarningBadgedSmallFilled } from '@teamleader/ui-icons';
import { Box, TextSmall } from '../../components';
import theme from './theme.css';

export default class ErrorText extends PureComponent {
  render() {
    const { children, inverse, ...others } = this.props;

    return (
      <Box data-teamleader-ui="error-text" marginTop={2} {...others}>
        <IconWarningBadgedSmallFilled className={theme['error-icon']} />
        <TextSmall className={theme['error-text']} element="span" marginLeft={1}>
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
