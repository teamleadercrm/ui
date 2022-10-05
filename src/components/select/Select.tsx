import { IconChevronDownSmallOutline, IconCloseBadgedSmallFilled } from '@teamleader/ui-icons';
import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import React, { ForwardedRef, forwardRef, ReactNode, useEffect } from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  PlaceholderProps,
  Props,
  StylesConfig,
  ValueContainerProps,
} from 'react-select';
import ReactCreatableSelect from 'react-select/creatable';
import SelectType from 'react-select/dist/declarations/src/Select';
import { ActionMeta, OptionsOrGroups } from '../../../node_modules/react-select/dist/declarations/src/types';
import { GenericComponent } from '../../@types/types';
import { COLOR, SIZES } from '../../constants';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';
import Icon from '../icon';
import ValidationText from '../validationText';
import theme from './theme.css';
import { Option as OptionType } from './types';

const minHeightBySizeMap = {
  tiny: 24,
  small: 30,
  medium: 36,
  large: 48,
};

/* *
 * We have to define BaseSelectProps with optional options, so we can then set them required in Select and never in AsyncSelect.
 * Unfortunately because of BoxProps having index of unknown, Omiting of these props causes all props to become unknown, we cannot Omit options in AsyncSelect.
 * */
export interface BaseSelectProps<
  Option extends OptionType = OptionType,
  IsMulti extends boolean = false,
  IsClearable extends boolean = false,
> extends Omit<Props<Option, IsMulti>, 'onChange' | 'isClearable' | 'value'>,
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
  size?: Exclude<typeof SIZES[number], 'smallest' | 'hero' | 'fullscreen'>;
  /** The text string/element to use as success message below the input. */
  success?: ReactNode;
  /** Selected option value(s) */
  value: IsMulti extends true ? Option[] : Option | null;
  onChange: (
    newValue: IsMulti extends true ? Option[] : IsClearable extends true ? Option | null : Option,
    actionMeta?: ActionMeta<Option>,
  ) => void;
  options?: OptionsOrGroups<Option, GroupBase<Option>>;
  /** The text to use as warning message below the input. */
  warning?: ReactNode;
  /** A custom width for the input field */
  width?: string;
  isClearable?: IsClearable;
}

export interface SelectProps<
  Option extends OptionType = OptionType,
  IsMulti extends boolean = false,
  IsClearable extends boolean = false,
> extends BaseSelectProps<Option, IsMulti, IsClearable> {
  options: OptionsOrGroups<Option, GroupBase<Option>>;
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
//
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
    >
      <IconCloseBadgedSmallFilled />
    </Icon>
  );
};

export const selectOverlayNode = document.createElement('div');
selectOverlayNode.setAttribute('data-teamleader-ui', 'select-overlay');

const activeSelects = new Set();

function Select<Option extends OptionType, IsMulti extends boolean, IsClearable extends boolean>(
  this: GenericComponent<SelectProps>,
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
    ...otherProps
  }: SelectProps<Option, IsMulti, IsClearable>,
  ref: ForwardedRef<SelectType<Option, IsMulti>>,
) {
  useEffect(() => {
    activeSelects.add(this);
    const isOverlayMounted = document.contains(selectOverlayNode);
    if (!isOverlayMounted) {
      document.body.appendChild(selectOverlayNode);
    }
    return () => {
      const isLastSelect = activeSelects.size <= 1;
      if (isLastSelect) {
        document.body.removeChild(selectOverlayNode);
      }
      activeSelects.delete(this);
    };
  }, []);

  const getClearIndicatorStyles = (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: inverse ? COLOR.TEAL.LIGHTEST : COLOR.TEAL.DARK,
      '&:hover': {
        color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      },
      cursor: 'pointer',
      svg: {
        height: '14px',
        width: '14px',
      },
    };
  };

  const getControlStyles = (base: CSSObjectWithLabel, { isDisabled, isFocused }: ControlProps<Option>) => {
    const commonStyles: CSSObjectWithLabel = {
      ...base,
      minHeight: minHeightBySizeMap[size],
      width,
    };

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
    };
  };

  const getGroupStyles = (base: CSSObjectWithLabel): CSSObjectWithLabel => {
    return {
      ...base,
      borderBottomColor: inverse ? COLOR.TEAL.LIGHT : COLOR.NEUTRAL.NORMAL,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      '&:last-child': {
        borderWidth: 0,
      },
    };
  };

  const getGroupHeadingStyles = (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.6px',
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

  const getMultiValueStyles = (base: CSSObjectWithLabel) => {
    return {
      ...base,
      borderColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.NORMAL,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '4px',
      margin: '1px',
    };
  };

  const getMultiValueLabelStyles = (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.LIGHT,
      borderRadius: 0,
      color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: size === 'tiny' || size === 'small' ? '12px' : '14px',
      lineHeight: size === 'tiny' || size === 'small' ? '1' : '18px',
      padding: size === 'tiny' ? '3px' : size === 'large' ? '9px' : '6px',
    };
  };

  const getMultiValueRemoveStyles = (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.LIGHT,
      borderRadius: 0,
      color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      '&:hover': {
        backgroundColor: inverse ? COLOR.TEAL.DARKEST : COLOR.NEUTRAL.NORMAL,
        color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      },
      paddingLeft: size === 'tiny' ? '3px' : '6px',
      paddingRight: size === 'tiny' ? '3px' : '6px',
      transition: 'background-color .35s cubic-bezier(.4, 0, .2, 1)',
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
      lineHeight: '18px',
      padding: isMulti && hasValue && size !== 'large' ? 0 : '0 4px',
    };
  };

  const getStyles = (): StylesConfig<Option> => ({
    clearIndicator: getClearIndicatorStyles,
    control: getControlStyles,
    group: getGroupStyles,
    groupHeading: getGroupHeadingStyles,
    input: getInput,
    menu: getMenuStyles,
    menuPortal: getMenuPortalStyles,
    multiValue: getMultiValueStyles,
    multiValueLabel: getMultiValueLabelStyles,
    multiValueRemove: getMultiValueRemoveStyles,
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
    <Box className={wrapperClassnames} {...boxProps}>
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
        options={options}
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
  props: SelectProps<Option, IsMulti, IsClearable> & { ref?: React.ForwardedRef<SelectType<Option, IsMulti>> },
) => ReturnType<typeof Select>;

export default ForwardedSelect;
