import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Box from '../box';
import { TextSmall } from '../typography';
import Icon from '../icon/Icon';
import TeamleaderText from './teamleaderText.svg';
import TeamleaderLogo from './teamleaderLogo.svg';
import TeamleaderLogoBig from './teamleaderLogoBig.svg';
import theme from './theme.css';

const PoweredByButton = forwardRef(
  ({ children, href, tint, shape, label, onMouseUp, onMouseLeave, className, ...rest }, ref) => {
    const buttonRef = useRef();
    useImperativeHandle(ref, () => buttonRef.current);

    const handleMouseUp = (event) => {
      blur();
      if (onMouseUp) {
        onMouseUp(event);
      }
    };

    const handleMouseLeave = (event) => {
      blur();
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    };

    const blur = () => {
      const currentButtonRef = buttonRef.current;
      if (currentButtonRef.blur) {
        currentButtonRef.blur();
      }
    };

    const classNames = cx(
      theme['reset-box-sizing'],
      theme['reset-font-smoothing'],
      theme['button'],
      theme[`button-${tint}`],
      theme[`button-${shape}`],
      className,
    );

    const iconProps = tint === 'light' ? { color: 'neutral', tint: 'lightest' } : { tint: 'darkest' };

    return (
      <Box
        element="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
        {...rest}
      >
        {shape !== 'box' && !!children && children}
        {shape !== 'box' && !children && (
          <>
            <TextSmall>Powered by&nbsp;</TextSmall>
            {label !== 'logo-only' && (
              <Icon {...iconProps}>
                <TeamleaderText />
              </Icon>
            )}
            &nbsp;
            {label !== 'text-only' && (
              <Icon {...iconProps}>
                <TeamleaderLogo />
              </Icon>
            )}
          </>
        )}
        {shape === 'box' && (
          <Icon {...iconProps}>
            <TeamleaderLogoBig />
          </Icon>
        )}
      </Box>
    );
  },
);

PoweredByButton.propTypes = {
  /** Href when clicking the button, default is the regular commercial website. */
  href: PropTypes.string,
  /** Button tint. Light for dark backgrounds and dark for light backgrounds. */
  tint: PropTypes.oneOf(['dark', 'light']),
  /** Shape of the button. */
  shape: PropTypes.oneOf(['pill', 'box']),
  /** Style for the default label. */
  label: PropTypes.oneOf(['text-and-logo', 'text-only', 'logo-only']),
  /** Overwrite the default label. */
  children: PropTypes.any,
};

PoweredByButton.defaultProps = {
  href: 'https://www.teamleader.eu/',
  tint: 'dark',
  shape: 'pill',
  label: 'text-and-logo',
};

PoweredByButton.displayName = 'PoweredByButton';

export default PoweredByButton;
