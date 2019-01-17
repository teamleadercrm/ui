import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconWarningBadgedSmallFilled } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
import Box from '../box';
import Icon from '../icon';

export default class WarningText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <Box className={className} data-teamleader-ui="warning-text" marginTop={2} {...others}>
        <Icon color="gold" tint={inverse ? 'light' : 'dark'}>
          <IconWarningBadgedSmallFilled />
        </Icon>
        <TextSmall color="gold" element="span" marginLeft={1} tint={inverse ? 'light' : 'dark'}>
          {children}
        </TextSmall>
      </Box>
    );
  }
}

WarningText.propTypes = {
  /** The displayed text */
  children: PropTypes.node,
  /** The class name for the wrapper to give custom styles */
  className: PropTypes.string,
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

WarningText.defaultProps = {
  children: 'This is the warning text',
  inverse: false,
};
