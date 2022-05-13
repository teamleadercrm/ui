import React from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
import cx from 'classnames';
import theme from './theme.css';

const SIZES = {
  small: 3,
  medium: 4,
  large: 5,
};

/** @type {React.ComponentType<any>} */
const Island = (props) => {
  const { children, className, color, size, onClick, ...others } = props;

  const classNames = cx(theme[color], className);
  const boxProps = pickBoxProps(others);

  return (
    <Box
      data-teamleader-ui="island"
      backgroundColor={color === 'white' ? 'neutral' : color}
      backgroundTint={color === 'neutral' ? 'light' : 'lightest'}
      borderRadius="rounded"
      borderColor={color === 'white' ? 'neutral' : color}
      borderTint="normal"
      borderBottomWidth={1}
      borderLeftWidth={1}
      borderRightWidth={1}
      borderTopWidth={1}
      className={classNames}
      padding={SIZES[size]}
      onClick={onClick}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

Island.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

Island.defaultProps = {
  color: 'white',
  size: 'medium',
};

export default Island;
