import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';
import { IconLockSmallFilled } from '@teamleader/ui-icons';
import { UITextBody, UITextSmall } from '../typography';

/** @type {React.ComponentType<any>} */
const MarketingStatusLabel = ({ children, className, fullWidth, size, ...others }) => {
  const classNames = cx(theme['wrapper'], theme[`is-${size}`], className);

  const TextElement = size === 'small' ? UITextSmall : UITextBody;

  return (
    <Box
      {...others}
      alignItems="center"
      display={fullWidth ? 'flex' : 'inline-flex'}
      justifyContent="center"
      className={classNames}
      paddingHorizontal={2}
    >
      <TextElement className={theme['text']} marginRight={2}>
        {children}
      </TextElement>
      <Icon className={theme['icon']}>
        <IconLockSmallFilled />
      </Icon>
    </Box>
  );
};

MarketingStatusLabel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
};

MarketingStatusLabel.defaultProps = {
  fullWidth: false,
  size: 'medium',
};

export default MarketingStatusLabel;
