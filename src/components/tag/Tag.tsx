import { IconCloseSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { COLORS, SIZES } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import IconButton from '../iconButton';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';
import theme from './theme.css';

export type TagSize = Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;

export interface TagProps extends Omit<BoxProps, 'className' | 'size'> {
  children: ReactNode;
  className?: string;
  onRemoveClick?: React.MouseEventHandler;
  onRemoveMouseDown?: React.MouseEventHandler;
  onRemoveMouseUp?: React.MouseEventHandler;
  removeElement?: React.ElementType;
  size?: TagSize;
  color?: (typeof COLORS)[number];
  backgroundColor?: (typeof COLORS)[number];
  borderWidth?: number;
}

const Tag: GenericComponent<TagProps> = forwardRef<HTMLElement, TagProps>(
  (
    {
      children,
      className,
      onRemoveClick,
      onRemoveMouseDown,
      onRemoveMouseUp,
      removeElement,
      size = 'medium',
      color,
      backgroundColor,
      borderWidth,
      ...others
    },
    ref,
  ) => {
    const classNames = cx(
      theme[`is-${size}`],
      { [theme['has-default-background-color']]: !backgroundColor },
      { [theme['has-border']]: !!borderWidth },
      theme['wrapper'],
      className,
    );

    const TextElement = size === 'small' ? UITextSmall : size === 'large' ? UITextDisplay : UITextBody;

    return (
      <Box
        {...others}
        backgroundColor={backgroundColor}
        className={classNames}
        borderWidth={borderWidth}
        data-teamleader-ui="tag"
        display="inline-flex"
        ref={ref}
      >
        <TextElement
          color={color || 'teal'}
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
            element={removeElement}
            className={theme['remove-button']}
            flexShrink={0}
            icon={<IconCloseSmallOutline />}
            onClick={onRemoveClick}
            onMouseDown={onRemoveMouseDown}
            onMouseUp={onRemoveMouseUp}
            color={color || 'neutral'}
          />
        )}
      </Box>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
