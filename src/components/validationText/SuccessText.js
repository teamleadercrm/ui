import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconCheckmarkSmallFilled } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
import Box from '../box';
import Icon from '../icon';

export default class SuccessText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <Box
        className={className}
        alignItems="center"
        data-teamleader-ui="success-text"
        display="flex"
        marginTop={2}
        {...others}
      >
        <Icon color="mint" tint={inverse ? 'light' : 'dark'}>
          <IconCheckmarkSmallFilled />
        </Icon>
        <TextSmall color="mint" element="span" marginLeft={1} tint={inverse ? 'light' : 'dark'}>
          {children}
        </TextSmall>
      </Box>
    );
  }
}

SuccessText.propTypes = {
  /** The displayed text */
  children: PropTypes.node,
  /** The class name for the wrapper to give custom styles */
  className: PropTypes.string,
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

SuccessText.defaultProps = {
  children: 'This is the success text',
  inverse: false,
};
