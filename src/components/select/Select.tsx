import { IconChevronDownSmallOutline, IconCloseBadgedSmallFilled } from '@teamleader/ui-icons';
import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import React, { ForwardedRef, forwardRef, ReactNode, useEffect } from 'react';
import ReactSelect, {
  ActionMeta,
  ClearIndicatorProps,
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  GroupHeadingProps,
  GroupProps,
  MenuListProps,
  OptionProps,
  OptionsOrGroups,
  PlaceholderProps,
  Props,
  StylesConfig,
  ValueContainerProps,
} from 'react-select';
import ReactCreatableSelect from 'react-select/creatable';
import SelectType from 'react-select/dist/declarations/src/Select';
import { COLOR, SIZES } from '../../constants';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';
import Icon from '../icon';
import ValidationText from '../validationText';
import theme from './theme.css';
import { Option as OptionType } from './types';

const minHeightBySizeMap: Record<string, number> = {
  tiny: 24,
  small: 30,
  medium: 36,
  large: 48,
};

export interface SelectRef<Option extends OptionType = OptionType, IsMulti extends boolean = false>
  extends SelectType<Option, IsMulti> {}

export interface SelectProps<
  Option extends OptionType = OptionType,
  IsMulti extends boolean = false,
  IsClearable extends boolean = false,
> extends Omit<Props<Option, IsMulti>, 'onChange' | 'isClearable' | 'value' | 'isMulti'>,
    Omit<BoxProps, 'className'> {
  /** Override default components with your own. Pass an object with correct the key and its replacing component */
  components?: Props<Option, IsMulti>['components'];
  /** If true, it's possible to create a new option that is not in the list. */
  creatable?: boolean;
  /** The text string/element to use as error message below the input. */
  error?: ReactNode;
  /** The text string to use as help text below the input. */
  helpText?: string;
  /** Boolean indicating whether the select should render as inverse. */
  inverse?: boolean;
  /** A custom width for the menu dropdown */
  menuWidth?: string;
  /** A custom horizontal offset for the menu dropdown, useful when also using a custom menuWidth  */
  menuHorizontalOffset?: string;
  /** Boolean indicating whether the select option text should render on one single line. */
  truncateOptionText?: boolean;
  /** Size of the input element. */
  size?: Exclude<(typeof SIZES)[number], 'smallest' | 'hero' | 'fullscreen'>;
  /** The text string/element to use as success message below the input. */
  success?: ReactNode;
  /** Selected option value(s) */
  value?: IsMulti extends true ? Option[] : Option | null;
  /** Callback function that is fired when the option is selected or cleared. */
  onChange: (
    newValue: IsMulti extends true ? Option[] : IsClearable extends true ? Option | null : Option,
    actionMeta?: ActionMeta<Option>,
  ) => void;
  /** List of  options */
  options?: OptionsOrGroups<Option, GroupBase<Option>>;
  /** The text to use as warning message below the input. */
  warning?: ReactNode;
  /** A custom width for the input field */
  width?: string;
  /** If true, it's possible to clear selected option. */
  isClearable?: IsClearable;
  /** If true, it's possible to have multiple selected options. */
  isMulti?: IsMulti;
}

const DropdownIndicator = <Option extends OptionType, IsMulti extends boolean>(
  dropdownIndicatorProps: DropdownIndicatorProps<Option, IsMulti>,
) => {
  // @ts-ignore
  const inverse = dropdownIndicatorProps.selectProps.inverse;
  return (
    <Icon
      alignItems="center"
      className={theme['dropdown-indicator']}
      color={inverse ? 'teal' : 'neutral'}
      display="flex"
      justifyContent="center"
      tint={inverse ? 'lightest' : 'darkest'}
    >
      <IconChevronDownSmallOutline />
    </Icon>
  );
};

const ClearIndicator = <Option extends OptionType, IsMulti extends boolean>(
  clearIndicatorProps: ClearIndicatorProps<Option, IsMulti>,
) => {
  // @ts-ignore
  const inverse = clearIndicatorProps.selectProps.inverse;
  return (
    <Icon
      {...clearIndicatorProps.innerProps}
      color={inverse ? 'teal' : 'neutral'}
      display="flex"
      tint={inverse ? 'lightest' : 'darkest'}
      className={cx(theme['clear-indicator'], { [theme['clear-indicator--inverse']]: inverse })}
    >
      <IconCloseBadgedSmallFilled />
    </Icon>
  );
};

export const selectOverlayNode =
  document.querySelector<HTMLDivElement>('div[data-teamleader-ui="select-overlay"]') || document.createElement('div');
selectOverlayNode.setAttribute('data-teamleader-ui', 'select-overlay');

function Select<Option extends OptionType, IsMulti extends boolean, IsClearable extends boolean>(
  {
    components,
    creatable = false,
    error,
    inverse = false,
    helpText,
    menuHorizontalOffset,
    size = 'medium',
    success,
    warning,
    menuWidth,
    width = '100%',
    truncateOptionText,
    options,
    isSearchable,
    ...otherProps
  }: SelectProps<Option, IsMulti, IsClearable>,
  ref: ForwardedRef<SelectRef<Option, IsMulti>>,
) {
  useEffect(() => {
    const isOverlayMounted = document.contains(selectOverlayNode);
    if (!isOverlayMounted) {
      document.body.appendChild(selectOverlayNode);
    }
  }, []);

  const getControlStyles = (base: CSSObjectWithLabel, { isDisabled, isFocused }: ControlProps<Option>) => {
    const commonStyles: CSSObjectWithLabel = {
      ...base,
      minHeight: minHeightBySizeMap[size],
      width,
    };

    const cursor = isDisabled ? 'default' : isSearchable || isSearchable === undefined ? 'text' : 'pointer';

    if (inverse) {
      return {
        ...commonStyles,
        backgroundColor: isDisabled ? COLOR.TEAL.DARK : COLOR.TEAL.NORMAL,
        '&:hover': {
          borderColor: !error && !warning && !success ? COLOR.TEAL.LIGHT : undefined,
        },
        borderColor: error
          ? COLOR.RUBY.LIGHT
          : warning
          ? COLOR.GOLD.LIGHT
          : success
          ? COLOR.MINT.LIGHT
          : isDisabled
          ? COLOR.TEAL.DARK
          : isFocused
          ? COLOR.TEAL.LIGHT
          : COLOR.TEAL.NORMAL,
        boxShadow: error
          ? `0 0 0 1px ${COLOR.RUBY.LIGHT}`
          : warning
          ? `0 0 0 1px ${COLOR.GOLD.LIGHT}`
          : success
          ? `0 0 0 1px ${COLOR.MINT.LIGHT}`
          : isFocused
          ? `0 0 0 1px ${COLOR.TEAL.LIGHT}`
          : 'none',
        cursor,
      };
    }

    return {
      ...commonStyles,
      backgroundColor: isDisabled ? COLOR.NEUTRAL.NORMAL : COLOR.NEUTRAL.LIGHTEST,
      '&:hover': {
        borderColor: !error && !warning && !success ? COLOR.NEUTRAL.DARKEST : undefined,
      },
      borderColor: error
        ? COLOR.RUBY.DARK
        : warning
        ? COLOR.GOLD.DARK
        : success
        ? COLOR.MINT.DARK
        : isDisabled
        ? COLOR.NEUTRAL.NORMAL
        : isFocused
        ? COLOR.NEUTRAL.DARKEST
        : COLOR.NEUTRAL.DARK,
      boxShadow: error
        ? `0 0 0 1px ${COLOR.RUBY.DARK}`
        : warning
        ? `0 0 0 1px ${COLOR.GOLD.DARK}`
        : success
        ? `0 0 0 1px ${COLOR.MINT.DARK}`
        : isFocused
        ? `0 0 0 1px ${COLOR.NEUTRAL.DARKEST}`
        : 'none',
      cursor,
    };
  };

  const getGroupStyles = (
    base: CSSObjectWithLabel,
    props: GroupProps<Option, boolean, GroupBase<Option>>,
  ): CSSObjectWithLabel => {
    return {
      ...base,
      paddingTop: props.data.label ? 3 : 0,
      paddingBottom: 3,
      borderBottomColor: inverse ? COLOR.TEAL.LIGHT : COLOR.NEUTRAL.NORMAL,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      '&:last-child': {
        borderWidth: 0,
      },
    };
  };

  const getGroupHeadingStyles = (
    base: CSSObjectWithLabel,
    props: GroupHeadingProps<Option, boolean, GroupBase<Option>>,
  ) => {
    return {
      ...base,
      color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.6px',
      ...(props.data.label
        ? {
            marginBottom: 9,
            marginTop: 9,
          }
        : {
            marginBottom: 3,
            marginTop: 3,
          }),
    };
  };

  const getInput = (base: CSSObjectWithLabel) => {
    return {
      ...base,
      marginLeft: '2px',
      paddingBottom: 0,
      paddingTop: 0,
    };
  };

  const getMenuStyles = (base: CSSObjectWithLabel): CSSObjectWithLabel => {
    return {
      ...base,
      marginTop: 3,
      marginBottom: 3,
      ...(menuHorizontalOffset
        ? {
            right: menuHorizontalOffset,
            position: 'absolute',
          }
        : {}),
    };
  };

  const getMenuListStyles = (
    base: CSSObjectWithLabel,
    props: MenuListProps<Option, boolean, GroupBase<Option>>,
  ): CSSObjectWithLabel => {
    return {
      ...base,
      ...(props.options[0]?.options ? { paddingTop: 1, paddingBottom: 1 } : {}),
    };
  };

  const getMenuPortalStyles = (base: CSSObjectWithLabel) => {
    return {
      ...base,
      ...(menuWidth && { width: menuWidth }),
      backgroundColor: inverse ? COLOR.TEAL.NORMAL : COLOR.NEUTRAL.LIGHTEST,
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 400,
      fontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      zIndex: 500,
    };
  };

  const getOptionStyles = (
    base: CSSObjectWithLabel,
    { isDisabled, isFocused, isSelected }: OptionProps<Option>,
  ): CSSObjectWithLabel => {
    const commonStyles: CSSObjectWithLabel = {
      ...base,
      ...(truncateOptionText
        ? {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }
        : {
            wordBreak: 'break-word',
          }),
      padding: '8px 12px',
      cursor: isDisabled ? 'default' : 'pointer',
    };

    if (inverse) {
      return {
        ...commonStyles,
        color: isDisabled
          ? COLOR.TEAL.LIGHT
          : isSelected
          ? COLOR.NEUTRAL.LIGHTEST
          : isFocused
          ? COLOR.TEAL.DARK
          : COLOR.NEUTRAL.LIGHTEST,
        backgroundColor: isSelected ? COLOR.TEAL.DARK : isFocused ? COLOR.TEAL.LIGHT : COLOR.TEAL.NORMAL,
        '&:active': {
          backgroundColor: isDisabled ? COLOR.TEAL.NORMAL : COLOR.TEAL.DARK,
          color: isDisabled ? COLOR.TEAL.LIGHT : COLOR.NEUTRAL.LIGHTEST,
        },
      };
    }

    return {
      ...commonStyles,
      color: isDisabled ? COLOR.NEUTRAL.DARK : COLOR.TEAL.DARK,
      backgroundColor: isSelected ? COLOR.AQUA.LIGHTEST : isFocused ? COLOR.NEUTRAL.LIGHT : COLOR.NEUTRAL.LIGHTEST,
      '&:active': {
        backgroundColor: isDisabled ? COLOR.NEUTRAL.LIGHTEST : COLOR.AQUA.LIGHTEST,
        color: isDisabled ? COLOR.NEUTRAL.DARK : COLOR.TEAL.DARK,
      },
    };
  };

  const getPlaceholderStyles = (base: CSSObjectWithLabel, { isDisabled }: PlaceholderProps<Option>) => {
    const commonStyles: CSSObjectWithLabel = {
      ...base,
      marginLeft: '2px',
      marginRight: '2px',
      whiteSpace: 'nowrap',
    };

    if (inverse) {
      return {
        ...commonStyles,
        color: isDisabled ? COLOR.TEAL.NORMAL : COLOR.TEAL.LIGHT,
      };
    }

    return {
      ...commonStyles,
      color: COLOR.NEUTRAL.DARKEST,
    };
  };

  const getSingleValueStyles = (base: CSSObjectWithLabel) => ({
    ...base,
    color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
  });

  const getValueContainerStyles = (base: CSSObjectWithLabel, { isMulti, hasValue }: ValueContainerProps<Option>) => {
    return {
      ...base,
      minHeight: minHeightBySizeMap[size] - 2,
      lineHeight: 'normal',
      padding: isMulti && hasValue && size !== 'large' ? 0 : '0 4px',
      width: '0',
    };
  };

  const getStyles = (): StylesConfig<Option> => ({
    control: getControlStyles,
    group: getGroupStyles,
    groupHeading: getGroupHeadingStyles,
    input: getInput,
    menu: getMenuStyles,
    menuList: getMenuListStyles,
    menuPortal: getMenuPortalStyles,
    option: getOptionStyles,
    placeholder: getPlaceholderStyles,
    singleValue: getSingleValueStyles,
    valueContainer: getValueContainerStyles,
  });

  const boxProps = pickBoxProps(otherProps);
  const restProps = { ...omitBoxProps(otherProps), ...{ inverse } };

  const wrapperClassnames = cx(theme[`is-${size}`], {
    [theme['has-error']]: error,
    [theme['is-inverse']]: inverse,
  });

  const Element = creatable
    ? ReactCreatableSelect<Option, IsMulti, GroupBase<Option>>
    : ReactSelect<Option, IsMulti, GroupBase<Option>>;

  return (
    <Box data-teamleader-ui="select" className={wrapperClassnames} {...boxProps}>
      <Element
        ref={ref}
        className={cx(uiUtilities['reset-font-smoothing'], theme['select'])}
        components={{
          ClearIndicator,
          DropdownIndicator,
          IndicatorSeparator: null,
          ...components,
        }}
        hideSelectedOptions={false}
        menuPlacement="auto"
        menuPortalTarget={selectOverlayNode}
        menuShouldBlockScroll
        styles={getStyles()}
        options={options || []}
        isSearchable={isSearchable}
        {...restProps}
      />
      <ValidationText error={error} help={helpText} inverse={inverse} success={success} warning={warning} />
    </Box>
  );
}

const ForwardedSelect = forwardRef(Select) as <
  Option extends OptionType = OptionType,
  IsMulti extends boolean = false,
  IsClearable extends boolean = false,
>(
  props: SelectProps<Option, IsMulti, IsClearable> & { ref?: React.ForwardedRef<SelectRef<Option, IsMulti>> },
) => ReturnType<typeof Select>;

export default ForwardedSelect;
