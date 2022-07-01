import React, { ReactNode } from 'react';
import cx from 'classnames';
import theme from './theme.css';
import Avatar from '../avatar';
import Box from '../box';
import Icon from '../icon';
import Link from '../link';
import Popover from '../popover';
import { Heading3, TextBody } from '../typography';
import { AvatarProps } from '../avatar/Avatar';
import { LinkProps } from '../link/Link';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';

interface LinkPropsAndIcon extends LinkProps {
  icon?: ReactNode;
}
interface PassportProps extends Omit<BoxProps, 'className'> {
  /** Object containing the props of an Avatar. */
  avatar: AvatarProps;
  /** The class names for the wrapper to apply custom styling. */
  className?: string;
  /** The description of the Passport. */
  description?: string | string[];
  /** Array of objects containing the props of a Link. */
  lineItems?: LinkPropsAndIcon[];
  /** The title of the Passport (can be a string of an object containing the props of a Link). */
  title: string | LinkPropsAndIcon;
}

const Passport: GenericComponent<PassportProps> = ({ avatar, className, description, lineItems, title, ...others }) => {
  const renderDescription = () => {
    if (!description) {
      return null;
    }

    if (Array.isArray(description)) {
      return (
        <>
          {description.map((child, index) => (
            <TextBody color="teal" key={index}>
              {child}
            </TextBody>
          ))}
        </>
      );
    } else {
      return <TextBody color="teal">{description}</TextBody>;
    }
  };

  const renderTitle = () => {
    return (
      <Heading3 className={cx(theme['prevent-overflow'], theme['prevent-wrap'], theme['show-ellipsis'])} color="teal">
        {typeof title === 'string' ? title : <Link {...title} inherit={false} />}
      </Heading3>
    );
  };

  return (
    <Popover {...others} backdrop="transparent" className={cx(theme['passport'], className)}>
      <Box padding={3}>
        <Box display="flex">
          <Box flex="48px 0 0" paddingRight={3}>
            <Avatar {...avatar} size="small" />
          </Box>
          <Box className={theme['prevent-overflow']}>
            {renderTitle()}
            {renderDescription()}
          </Box>
        </Box>
        {lineItems && (
          <Box marginTop={3}>
            {lineItems.map(({ icon, ...lineItem }, index) => (
              <Box alignItems="flex-start" display="flex" key={index}>
                <Box display="flex" flex="48px 0 0" justifyContent="center" paddingRight={3}>
                  {icon && (
                    <Icon
                      color={lineItem.href || lineItem.onClick ? 'aqua' : 'teal'}
                      tint={lineItem.href || lineItem.onClick ? 'dark' : 'darkest'}
                      marginTop={1}
                    >
                      {icon}
                    </Icon>
                  )}
                </Box>
                <TextBody
                  className={cx(theme['prevent-overflow'], theme['prevent-wrap'], theme['show-ellipsis'])}
                  color="teal"
                >
                  {lineItem.href || lineItem.onClick ? <Link {...lineItem} inherit={false} /> : lineItem.children}
                </TextBody>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Popover>
  );
};

export default Passport;
