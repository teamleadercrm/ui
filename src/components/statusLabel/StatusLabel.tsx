import cx from 'classnames';
import React, { forwardRef, ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { UITextBody, UITextSmall } from '../typography';
import theme from './theme.css';

export type Color = 'neutral' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua';
export type Size = 'small' | 'medium';
interface StatusLabelProps extends Omit<BoxProps, 'size'> {
  children: ReactNode;
  className?: string;
  color?: Color;
  size?: Size;
}

const StatusLabel: GenericComponent<StatusLabelProps> = forwardRef<HTMLElement, StatusLabelProps>(
  ({ children, className, color = 'neutral', size = 'medium', ...others }, ref) => {
    const classNames = cx(theme['label'], theme[size], className);

    const Element = size === 'small' ? UITextSmall : UITextBody;

    return (
      <Element
        element="span"
        {...others}
        alignItems="center"
        backgroundColor={color}
        backgroundTint={color === 'neutral' ? 'light' : 'lightest'}
        borderColor={color}
        borderTint={color === 'neutral' ? 'dark' : 'light'}
        borderWidth={1}
        className={classNames}
        color={color === 'neutral' ? 'teal' : color}
        tint={color === 'neutral' ? 'dark' : 'darkest'}
        data-teamleader-ui="status-label"
        display="inline-flex"
        paddingHorizontal={2}
        ref={ref}
      >
        <span className={theme['inner']}>{children}</span>
      </Element>
    );
  },
);

StatusLabel.displayName = 'StatusLabel';

export default StatusLabel;
