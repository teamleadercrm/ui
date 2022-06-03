import React, { forwardRef, ReactElement, ReactNode } from 'react';
import { isReactElement } from '../../utils';
import { IslandGroup } from '../island';
import isComponentOfType from '../utils/is-component-of-type';
import Body from './WidgetBody';
import Footer from './WidgetFooter';
import Header from './WidgetHeader';

type Size = 'small' | 'medium' | 'large';

export interface WidgetProps {
  /** The content to display inside the widget. */
  children?: ReactNode;
  /** The size which controls the padding of the children. */
  size?: Size;
}

const Widget = forwardRef<HTMLElement, WidgetProps>(({ children, size = 'medium', ...others }, ref) => {
  return (
    <IslandGroup ref={ref} direction="vertical" {...others}>
      {React.Children.map(children, (child) => {
        if (
          !(isComponentOfType(Header, child) || isComponentOfType(Body, child) || isComponentOfType(Footer, child)) ||
          !isReactElement(child)
        ) {
          return child;
        }

        return React.cloneElement(child, {
          ...child.props,
          size,
        });
      })}
    </IslandGroup>
  );
});

Widget.displayName = 'Widget';

export default Widget;
