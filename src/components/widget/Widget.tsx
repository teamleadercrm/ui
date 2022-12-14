import React, { forwardRef, isValidElement, ReactNode } from 'react';
import Body, { BodyProps } from './Body';
import Footer, { FooterProps } from './Footer';
import Header, { HeaderProps } from './Header';
import { IslandGroup } from '../island';
import { SIZES } from '../../constants';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface WidgetProps extends Omit<BoxProps, 'children' | 'ref'> {
  /** The content to display inside the widget. */
  children?: ReactNode;
  /** The size which controls the padding of the children. */
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest' | 'tiny' | 'hero'>;
}

interface WidgetComponent extends GenericComponent<WidgetProps> {
  Body: GenericComponent<BodyProps>;
  Header: GenericComponent<HeaderProps>;
  Footer: GenericComponent<FooterProps>;
}

export const Widget: GenericComponent<WidgetProps> = forwardRef<HTMLElement, WidgetProps>(
  ({ children, size = 'medium', ...others }, ref) => {
    return (
      <IslandGroup data-teamleader-ui="widget" ref={ref} direction="vertical" {...others}>
        {React.Children.map(children, (child) => {
          if (!child) {
            return child;
          }

          return (
            isValidElement(child) &&
            React.cloneElement(child, {
              ...child.props,
              size,
            })
          );
        })}
      </IslandGroup>
    );
  },
);

Widget.displayName = 'Widget';

// It has to be written like this, since `forwardRef` return component without sub-components and that doesn't match with our typing
const WidgetWithSubComponents = Widget as WidgetComponent;

WidgetWithSubComponents.Body = Body;
WidgetWithSubComponents.Footer = Footer;
WidgetWithSubComponents.Header = Header;

export default WidgetWithSubComponents;
