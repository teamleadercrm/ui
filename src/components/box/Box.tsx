import React, { CSSProperties, forwardRef } from 'react';
import cx from 'classnames';
import { COLOR, COLORS, TINTS } from '../../constants';
import theme from './theme.css';
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../@types/utils';

const margins = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
export type Margin = typeof margins[number];
const paddings = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
export type Padding = typeof paddings[number];

const borderRadiuses = {
  square: null,
  circle: '50%',
  rounded: '4px',
};

export interface BoxProps {
  alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  backgroundColor?: typeof COLORS[number];
  backgroundTint?: typeof TINTS[number];
  borderBottomWidth?: number;
  borderColor?: typeof COLORS[number];
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderTint?: typeof TINTS[number];
  borderTopWidth?: number;
  borderWidth?: number;
  borderRadius?: keyof typeof borderRadiuses;
  borderTopLeftRadius?: keyof typeof borderRadiuses;
  borderTopRightRadius?: keyof typeof borderRadiuses;
  borderBottomLeftRadius?: keyof typeof borderRadiuses;
  borderBottomRightRadius?: keyof typeof borderRadiuses;
  boxSizing?: 'border-box' | 'content-box';
  display?: 'inline' | 'inline-block' | 'block' | 'flex' | 'inline-flex' | 'grid';
  flex?: CSSProperties['flex'];
  flexBasis?: CSSProperties['flexBasis'];
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
  margin?: Margin;
  marginHorizontal?: Margin;
  marginVertical?: Margin;
  marginBottom?: Margin;
  marginLeft?: Margin;
  marginRight?: Margin;
  marginTop?: Margin;
  order?: CSSProperties['order'];
  overflow?: CSSProperties['overflow'];
  overflowX?: CSSProperties['overflowX'];
  overflowY?: CSSProperties['overflowY'];
  padding?: Padding;
  paddingHorizontal?: Padding;
  paddingVertical?: Padding;
  paddingBottom?: Padding;
  paddingLeft?: Padding;
  paddingRight?: Padding;
  paddingTop?: Padding;
  textAlign?: 'center' | 'left' | 'right';
}

const Box = forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      alignContent,
      alignItems,
      alignSelf,
      backgroundColor,
      backgroundTint,
      borderBottomWidth,
      borderColor = 'neutral',
      borderLeftWidth,
      borderRightWidth,
      borderTint = 'dark',
      borderTopWidth,
      borderWidth,
      borderRadius = 'square',
      borderTopLeftRadius = borderRadius,
      borderTopRightRadius = borderRadius,
      borderBottomLeftRadius = borderRadius,
      borderBottomRightRadius = borderRadius,
      boxSizing,
      children,
      className,
      display,
      element,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      justifyContent,
      margin = 0,
      marginHorizontal = margin,
      marginVertical = margin,
      marginBottom = marginVertical,
      marginLeft = marginHorizontal,
      marginRight = marginHorizontal,
      marginTop = marginVertical,
      order,
      overflow,
      overflowX,
      overflowY,
      padding = 0,
      paddingHorizontal = padding,
      paddingVertical = padding,
      paddingBottom = paddingVertical,
      paddingLeft = paddingHorizontal,
      paddingRight = paddingHorizontal,
      paddingTop = paddingVertical,
      style,
      textAlign,
      ...others
    }: PolymorphicComponentPropsWithRef<T, BoxProps>,
    ref?: PolymorphicRef<T>,
  ) => {
    const getBorder = (value: number) => {
      return `${value}px solid ${
        COLOR[borderColor.toUpperCase() as Uppercase<keyof typeof COLOR>][
          borderTint.toUpperCase() as Uppercase<keyof typeof COLOR['AQUA']>
        ]
      }`;
    };

    const classNames = cx(
      theme['box'],
      {
        [theme[`align-content-${alignContent}`]]: alignContent,
        [theme[`align-items-${alignItems}`]]: alignItems,
        [theme[`align-self-${alignSelf}`]]: alignSelf,
        [theme[`background-color-${backgroundColor}-${backgroundTint}`]]: backgroundColor && backgroundTint,
        [theme[`background-color-${backgroundColor}`]]:
          backgroundColor && (!backgroundTint || backgroundTint === 'normal'),
        [theme[`display-${display}`]]: display,
        [theme[`flex-direction-${flexDirection}`]]: flexDirection,
        [theme[`flex-wrap-${flexWrap}`]]: flexWrap,
        [theme[`justify-content-${justifyContent}`]]: justifyContent,
        [theme[`margin-bottom-${marginBottom}`]]: marginBottom > 0,
        [theme[`margin-left-${marginLeft}`]]: marginLeft > 0,
        [theme[`margin-right-${marginRight}`]]: marginRight > 0,
        [theme[`margin-top-${marginTop}`]]: marginTop > 0,
        [theme[`margin-bottom-negative-${Math.abs(marginBottom)}`]]: marginBottom < 0,
        [theme[`margin-left-negative-${Math.abs(marginLeft)}`]]: marginLeft < 0,
        [theme[`margin-right-negative-${Math.abs(marginRight)}`]]: marginRight < 0,
        [theme[`margin-top-negative-${Math.abs(marginTop)}`]]: marginTop < 0,
        [theme[`padding-bottom-${paddingBottom}`]]: paddingBottom > 0,
        [theme[`padding-left-${paddingLeft}`]]: paddingLeft > 0,
        [theme[`padding-right-${paddingRight}`]]: paddingRight > 0,
        [theme[`padding-top-${paddingTop}`]]: paddingTop > 0,
        [theme[`text-align-${textAlign}`]]: textAlign,
      },
      className,
    );

    const elementStyles = {
      ...(borderWidth && { border: getBorder(borderWidth) }),
      ...(borderBottomWidth && { borderBottom: getBorder(borderBottomWidth) }),
      ...(borderLeftWidth && { borderLeft: getBorder(borderLeftWidth) }),
      ...(borderRightWidth && { borderRight: getBorder(borderRightWidth) }),
      ...(borderTopWidth && { borderTop: getBorder(borderTopWidth) }),
      ...(borderRadius && { borderRadius: borderRadiuses[borderRadius] ?? undefined }),
      ...(borderTopLeftRadius && { borderTopLeftRadius: borderRadiuses[borderTopLeftRadius] ?? undefined }),
      ...(borderTopRightRadius && { borderTopRightRadius: borderRadiuses[borderTopRightRadius] ?? undefined }),
      ...(borderBottomLeftRadius && { borderBottomLeftRadius: borderRadiuses[borderBottomLeftRadius] ?? undefined }),
      ...(borderBottomRightRadius && { borderBottomRightRadius: borderRadiuses[borderBottomRightRadius] ?? undefined }),
      ...(boxSizing && { boxSizing }),
      ...(flex && { flex }),
      ...(flexBasis && { flexBasis }),
      ...(typeof flexGrow === 'number' && !isNaN(flexGrow) ? { flexGrow } : {}),
      ...(typeof flexShrink === 'number' && !isNaN(flexShrink) ? { flexShrink } : {}),
      ...(typeof order === 'number' && !isNaN(order) ? { order } : {}),
      ...(overflow && { overflow }),
      ...(overflowX && { overflowX }),
      ...(overflowY && { overflowY }),
      ...style,
    };

    const Element = element || 'div';

    return (
      <Element className={classNames} ref={ref} style={elementStyles} {...others}>
        {children}
      </Element>
    );
  },
);

Box.displayName = 'Box';

export default Box;
