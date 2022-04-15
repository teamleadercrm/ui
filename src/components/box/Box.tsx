import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import cx from 'classnames';
import { COLOR, COLORS, TINTS } from '../../constants';
import theme from './theme.css';

const margins = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
const paddings = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;

const borderRadiuses = {
  square: null,
  circle: '50%',
  rounded: '4px',
};

type Props = Partial<{
  alignContent: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
  alignItems: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  alignSelf: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  backgroundColor: typeof COLORS[number];
  backgroundTint: typeof TINTS[number];
  borderBottomWidth: number;
  borderColor: typeof COLORS[number];
  borderLeftWidth: number;
  borderRightWidth: number;
  borderTint: typeof TINTS[number];
  borderTopWidth: number;
  borderWidth: number;
  borderRadius: keyof typeof borderRadiuses;
  borderTopLeftRadius: keyof typeof borderRadiuses;
  borderTopRightRadius: keyof typeof borderRadiuses;
  borderBottomLeftRadius: keyof typeof borderRadiuses;
  borderBottomRightRadius: keyof typeof borderRadiuses;
  boxSizing: 'border-box' | 'content-box';
  children: ReactNode;
  className: string;
  display: 'inline' | 'inline-block' | 'block' | 'flex' | 'inline-flex';
  element: React.ElementType;
  flex: CSSProperties['flex'];
  flexBasis: CSSProperties['flexBasis'];
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexGrow: CSSProperties['flexGrow'];
  flexShrink: CSSProperties['flexShrink'];
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
  margin: typeof margins[number];
  marginHorizontal: typeof margins[number];
  marginVertical: typeof margins[number];
  marginBottom: typeof margins[number];
  marginLeft: typeof margins[number];
  marginRight: typeof margins[number];
  marginTop: typeof margins[number];
  order: CSSProperties['order'];
  overflow: CSSProperties['overflow'];
  overflowX: CSSProperties['overflowX'];
  overflowY: CSSProperties['overflowY'];
  padding: typeof paddings[number];
  paddingHorizontal: typeof paddings[number];
  paddingVertical: typeof paddings[number];
  paddingBottom: typeof paddings[number];
  paddingLeft: typeof paddings[number];
  paddingRight: typeof paddings[number];
  paddingTop: typeof paddings[number];
  style: CSSProperties;
  textAlign: 'center' | 'left' | 'right';
}>;

const Box = forwardRef(
  (
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
      element = 'div',
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
    }: Props,
    ref,
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
      ...(borderRadius && { borderRadius: borderRadiuses[borderRadius] }),
      ...(borderTopLeftRadius && { borderTopLeftRadius: borderRadiuses[borderTopLeftRadius] }),
      ...(borderTopRightRadius && { borderTopRightRadius: borderRadiuses[borderTopRightRadius] }),
      ...(borderBottomLeftRadius && { borderBottomLeftRadius: borderRadiuses[borderBottomLeftRadius] }),
      ...(borderBottomRightRadius && { borderBottomRightRadius: borderRadiuses[borderBottomRightRadius] }),
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

    const Element = element;

    return (
      <Element className={classNames} ref={ref} style={elementStyles} {...others}>
        {children}
      </Element>
    );
  },
);

Box.displayName = 'Box';

export default Box;