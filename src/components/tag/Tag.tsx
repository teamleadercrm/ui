import { IconCloseSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import React, { PropsWithChildren, ReactElement, ReactNode, ValidationMap, WeakValidationMap } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import IconButton from '../iconButton';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';
import theme from './theme.css';

export interface FunctionComponent2<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P> | undefined;
  contextTypes?: ValidationMap<any> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}
export interface TagProps extends Omit<BoxProps, 'className' | 'size'> {
  /** The tint of the components color */
  children: ReactNode;
  /** The tint of the components color */
  className?: string;
  /** The tint of the components color */
  onRemoveClick?: React.MouseEventHandler;
  /** The tint of the components color */
  size?: 'small' | 'medium' | 'large';
}

const Tag: GenericComponent<TagProps> = ({ children, className, onRemoveClick, size = 'medium', ...others }) => {
  const classNames = cx(theme[`is-${size}`], theme['wrapper'], className);

  const TextElement = size === 'small' ? UITextSmall : size === 'large' ? UITextDisplay : UITextBody;

  return (
    <Box {...others} className={classNames} data-teamleader-ui="tag" display="inline-flex">
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
};

export default Tag;
