import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import ReactSelect from 'react-select';
import ReactCreatableSelect from 'react-select/creatable';
import PropTypes from 'prop-types';
import { IconCloseBadgedSmallFilled, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import Icon from '../icon';
import ValidationText from '../validationText';
import { COLOR } from '../../constants';
import theme from './theme.css';
import cx from 'classnames';
import uiUtilities from '@teamleader/ui-utilities';

const minHeightBySizeMap = {
  tiny: 24,
  small: 30,
  medium: 36,
  large: 48,
};

export const selectOverlayNode = document.createElement('div');
selectOverlayNode.setAttribute('data-teamleader-ui', 'select-overlay');

const activeSelects = new Set();

const Select = ({
  components,
  creatable,
  error,
  inverse,
  helpText,
  size,
  success,
  warning,
  forwardedRef,
  ...otherProps
}) => {
  // Only used to maintain a unique reference to this component
  const componentRef = useRef({});
  useLayoutEffect(() => {
    const currentComponentRef = componentRef.current;

    activeSelects.add(currentComponentRef);
    const isOverlayMounted = document.contains(selectOverlayNode);
    if (!isOverlayMounted) {
      document.body.appendChild(selectOverlayNode);
    }

    return function cleanup() {
      const isLastSelect = activeSelects.size <= 1;
      if (isLastSelect && selectOverlayNode.parentElement) {
        selectOverlayNode.parentElement.removeChild(selectOverlayNode);
      }
      activeSelects.delete(currentComponentRef);
    };
  }, []);

  const getClearIndicatorStyles = (base) => {
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

  const getControlStyles = (base, { isDisabled, isFocused }) => {
    const { width } = otherProps;

    const commonStyles = {
      ...base,
      minHeight: minHeightBySizeMap[size],
      width,
    };

    if (inverse) {
      return {
        ...commonStyles,
        backgroundColor: isDisabled ? COLOR.TEAL.DARK : COLOR.TEAL.NORMAL,
        '&:hover': {
          borderColor: !error && !warning && !success && COLOR.TEAL.LIGHT,
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
        borderColor: !error && !warning && !success && COLOR.NEUTRAL.DARKEST,
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

  const getGroupStyles = (base) => {
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

  const getGroupHeadingStyles = (base) => {
    return {
      ...base,
      color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '0.6px',
    };
  };

  const getInput = (base) => {
    return {
      ...base,
      marginLeft: '2px',
      paddingBottom: 0,
      paddingTop: 0,
    };
  };

  const getMenuPortalStyles = (base) => {
    const { menuWidth } = otherProps;

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

  const getMultiValueStyles = (base) => {
    return {
      ...base,
      borderColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.NORMAL,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '4px',
      margin: '1px',
    };
  };

  const getMultiValueLabelStyles = (base) => {
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

  const getMultiValueRemoveStyles = (base) => {
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

  const getOptionStyles = (base, { isDisabled, isFocused, isSelected }) => {
    const { truncateOptionText } = otherProps;
    const commonStyles = {
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

  const getPlaceholderStyles = (base, { isDisabled }) => {
    const commonStyles = {
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

  const getSingleValueStyles = (base) => ({
    ...base,
    color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
  });

  const getValueContainerStyles = (base, { isMulti, hasValue }) => {
    return {
      ...base,
      minHeight: minHeightBySizeMap[size] - 2,
      lineHeight: '18px',
      padding: isMulti && hasValue && size !== 'large' ? 0 : '0 4px',
    };
  };

  const getStyles = () => ({
    clearIndicator: getClearIndicatorStyles,
    control: getControlStyles,
    group: getGroupStyles,
    groupHeading: getGroupHeadingStyles,
    input: getInput,
    menuPortal: getMenuPortalStyles,
    multiValue: getMultiValueStyles,
    multiValueLabel: getMultiValueLabelStyles,
    multiValueRemove: getMultiValueRemoveStyles,
    option: getOptionStyles,
    placeholder: getPlaceholderStyles,
    singleValue: getSingleValueStyles,
    valueContainer: getValueContainerStyles,
  });

  const getClearIndicator =
    () =>
    ({ innerProps }) => {
      return (
        <Icon
          color={inverse ? 'teal' : 'neutral'}
          display="flex"
          tint={inverse ? 'lightest' : 'darkest'}
          {...innerProps}
        >
          <IconCloseBadgedSmallFilled />
        </Icon>
      );
    };

  const getDropDownIndicator = () => () => {
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

  const boxProps = pickBoxProps(otherProps);
  const restProps = omitBoxProps(otherProps);

  const wrapperClassnames = cx(theme[`is-${size}`], {
    [theme['has-error']]: error,
    [theme['is-inverse']]: inverse,
  });

  const Element = creatable ? ReactCreatableSelect : ReactSelect;

  return (
    <Box className={wrapperClassnames} {...boxProps}>
      <Element
        ref={forwardedRef}
        className={cx(uiUtilities['reset-font-smoothing'], theme['select'])}
        components={{
          ClearIndicator: getClearIndicator(),
          DropdownIndicator: getDropDownIndicator(),
          IndicatorSeparator: null,
          ...components,
        }}
        hideSelectedOptions={false}
        menuPlacement="auto"
        menuPortalTarget={selectOverlayNode}
        menuShouldBlockScroll
        styles={getStyles()}
        size={size}
        {...restProps}
      />
      <ValidationText error={error} help={helpText} inverse={inverse} success={success} warning={warning} />
    </Box>
  );
};

Select.propTypes = {
  /** Override default components with your own. Pass an object with correct the key and its replacing component */
  components: PropTypes.object,
  /** If true, it's possible to create a new option that is not in the list. */
  creatable: PropTypes.bool,
  /** The text string/element to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string to use as help text below the input. */
  helpText: PropTypes.string,
  /** Boolean indicating whether the select should render as inverse. */
  inverse: PropTypes.bool,
  /** A custom width for the menu dropdown */
  menuWidth: PropTypes.string,
  /** Boolean indicating whether the select option text should render on one single line. */
  truncateOptionText: PropTypes.bool,
  /** Size of the input element. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /** The text string/element to use as success message below the input. */
  success: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Selected option value(s) */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
  /** The text to use as warning message below the input. */
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** A custom width for the input field */
  width: PropTypes.string,
};

Select.defaultProps = {
  creatable: false,
  inverse: false,
  size: 'medium',
  width: '100%',
};

const ForwardedSelect = forwardRef((props, ref) => <Select {...props} forwardedRef={ref} />);

ForwardedSelect.displayName = 'Select';

export default ForwardedSelect;
