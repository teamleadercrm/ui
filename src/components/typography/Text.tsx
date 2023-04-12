import cx from 'classnames';
import React, { CSSProperties, ElementType, forwardRef, ReactNode } from 'react';
import typography from '@teamleader/ui-typography';
import { GenericComponent } from '../../@types/types';
import { COLORS, TINTS } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

export interface TextProps extends BoxProps {
  children?: ReactNode;
  className?: string;
  color?: typeof COLORS[number];
  element?: ElementType;
  maxLines?: number;
  style?: CSSProperties;
  tint?: typeof TINTS[number];
}

const factory = (baseType: string, type: string, defaultElement: ElementType) => {
  const Text: GenericComponent<TextProps> = forwardRef<HTMLElement, TextProps>(
    ({ children, className, color, element = null, maxLines, style, tint = 'darkest', ...others }, ref) => {
      const classNames = cx(
        typography[baseType],
        typography[type],

        theme[tint],
        {
          ...(color && { [theme[color]]: true }),
          [theme['overflow-multiline']]: maxLines && maxLines > 1,
          [theme['overflow-singleline']]: maxLines && maxLines === 1,
        },
        className,
      );

      const styles = {
        ...(maxLines && maxLines > 1 && { MozLineClamp: maxLines, WebkitLineClamp: maxLines }),
        ...style,
      };

      const Element = element || defaultElement;

      return (
        <Box
          className={classNames}
          data-teamleader-ui={baseType}
          element={Element}
          {...others}
          style={styles}
          ref={ref}
        >
          {children}
        </Box>
      );
    },
  );

  Text.displayName = 'Text';

  return Text;
};

export { factory as textFactory };
