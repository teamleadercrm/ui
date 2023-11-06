import { IconCloseSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import IconButton from '../iconButton';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';
import theme from './theme.css';

export interface TagProps extends Omit<BoxProps, 'className' | 'size'> {
  /** The tint of the components color */
  children: ReactNode;
  /** The tint of the components color */
  className?: string;
  /** The tint of the components color */
  onRemoveClick?: React.MouseEventHandler;
  /** The tint of the components color */
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
}

const Tag: GenericComponent<TagProps> = forwardRef<HTMLElement, TagProps>(
  ({ children, className, onRemoveClick, size = 'medium', ...others }, ref) => {
    const classNames = cx(theme[`is-${size}`], theme['wrapper'], className);

    const TextElement = size === 'small' ? UITextSmall : size === 'large' ? UITextDisplay : UITextBody;

    return (
      <Box {...others} className={classNames} data-teamleader-ui="tag" display="inline-flex" ref={ref}>
        <TextElement
          color="teal"
          marginLeft={size === 'small' ? 2 : 3}
          marginRight={onRemoveClick ? 1 : size === 'small' ? 2 : 3}
          marginVertical={size === 'small' ? 0 : 1}
          maxLines={1}
          tint="darkest"
        >
          {children}
        </TextElement>
        {onRemoveClick && (
          <IconButton
            className={theme['remove-button']}
            flexShrink={0}
            icon={<IconCloseSmallOutline />}
            onClick={onRemoveClick}
          />
        )}
      </Box>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
