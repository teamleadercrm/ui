import React from 'react';
import cx from 'classnames';
import theme from './theme.css';
import Avatar from '../avatar';
import Box from '../box';
import Link from '../link';
import Popover from '../popover';
import { Heading3, TextBody } from '../typography';
import { GenericComponent } from '../../@types/types';
import { AvatarProps } from '../avatar/Avatar';
import { BoxProps } from '../box/Box';
import { LinkProps } from '../link/Link';

export interface EmptyPassportProps extends Omit<BoxProps, 'className'> {
  /** Object containing the props of an avatar. */
  avatar?: AvatarProps;
  /** The class names for the wrapper to apply custom styling. */
  className?: string;
  /** The description of the empty Passport. */
  description?: string;
  /** Object containing the props of a Link. */
  link?: LinkProps;
  /** The title of the empty Passport. */
  title: string;
}

const EmptyPassport: GenericComponent<EmptyPassportProps> = ({
  avatar,
  link,
  className,
  description,
  title,
  ...others
}) => {
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
};

export default EmptyPassport;
