import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Avatar from '../avatar';
import Box from '../box';
import Link from '../link';
import Popover from '../popover';
import { Heading3, TextBody } from '../typography';

/** @type {React.ComponentType<any>} */
class EmptyPassport extends PureComponent {
  render() {
    const { avatar, link, className, description, title, ...others } = this.props;

    return (
      <Popover {...others} backdrop="transparent" className={cx(theme['passport-empty'], className)}>
        <Box paddingHorizontal={4} paddingVertical={5}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {avatar && <Avatar {...avatar} size="small" marginBottom={4} />}
            <Heading3 color="teal">{title}</Heading3>
            {description && (
              <TextBody color="neutral" marginTop={2}>
                {description}
              </TextBody>
            )}
            {link && (
              <TextBody marginTop={4}>
                <Link {...link} inherit={false} />
              </TextBody>
            )}
          </Box>
        </Box>
      </Popover>
    );
  }
}

EmptyPassport.propTypes = {
  /** Object containing the props of an avatar. */
  avatar: PropTypes.object,
  /** The class names for the wrapper to apply custom styling. */
  className: PropTypes.string,
  /** The description of the empty Passport. */
  description: PropTypes.string,
  /** Object containing the props of a Link. */
  link: PropTypes.object,
  /** The title of the empty Passport. */
  title: PropTypes.string.isRequired,
};

export default EmptyPassport;
