import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import cx from 'classnames';
import {
  IconTextBoldMediumOutline,
  IconTextItalicMediumOutline,
  IconListNumeredMediumOutline,
  IconListMediumOutline,
} from '@teamleader/ui-icons';

import Box from '../box';
import IconButton from '../iconButton';
import ValidationText from '../validationText';

import theme from './theme.css';

const InlineStyling = ({
  config: {
    options,
    bold: { icon: boldIcon },
    italic: { icon: italicIcon },
  },
  currentState,
  onChange,
}) => {
  const iconsByOptionType = {
    bold: boldIcon,
    italic: italicIcon,
  };

  return (
    <Box display="flex" borderRightWidth={1} marginRight={2}>
      {options.map((optionType) => (
        <IconButton
          icon={iconsByOptionType[optionType]}
          color="black"
          key={optionType}
          title={optionType}
          onClick={() => onChange(optionType)}
          selected={currentState[optionType]}
          marginRight={2}
        />
      ))}
    </Box>
  );
};

const ListStyling = ({
  config: {
    options,
    unordered: { icon: unorderedIcon },
    ordered: { icon: orderedIcon },
  },
  currentState,
  onChange,
}) => {
  const iconsByOptionType = {
    unordered: unorderedIcon,
    ordered: orderedIcon,
  };

  return (
    <Box display="flex" borderRightWidth={1} marginRight={2}>
      {options.map((optionType) => (
        <IconButton
          icon={iconsByOptionType[optionType]}
          color="black"
          key={optionType}
          title={optionType}
          onClick={() => onChange(optionType)}
          selected={currentState.listType === optionType}
          marginRight={2}
        />
      ))}
    </Box>
  );
};

const toolbar = {
  options: ['inline', 'list'],
  inline: {
    options: ['bold', 'italic'],
    bold: { icon: <IconTextBoldMediumOutline /> },
    italic: { icon: <IconTextItalicMediumOutline /> },
    component: InlineStyling,
  },
  list: {
    component: ListStyling,
    options: ['unordered', 'ordered'],
    unordered: { icon: <IconListMediumOutline /> },
    ordered: { icon: <IconListNumeredMediumOutline /> },
  },
};

const customStyleMap = {
  BOLD: {
    fontFamily: 'Inter-Bold',
  },
};

const WysiwygEditor = ({ className, error, onFocus, onBlur, success, warning, helpText, width, ...others }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPlaceholderShown, setIsPlaceholderShown] = useState(true);

  const handleBlur = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFocus = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleContentStateChange = ({ blocks: [{ type }] }) => {
    if (type === 'unstyled') {
      setIsPlaceholderShown(true);
      return;
    }
    setIsPlaceholderShown(false);
  };

  const wrapperClassNames = cx(
    theme['wrapper'],
    {
      [theme['has-focus']]: isFocused,
      [theme['has-error']]: error,
      [theme['has-success']]: success,
      [theme['has-warning']]: warning,
      [theme['has-placeholder']]: isPlaceholderShown,
    },
    className,
  );

  return (
    <Box style={{ width, flex: width && '0 0 auto' }}>
      <Editor
        toolbar={toolbar}
        wrapperClassName={wrapperClassNames}
        editorClassName={theme['input']}
        toolbarClassName={theme['toolbar']}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onContentStateChange={handleContentStateChange}
        customStyleMap={customStyleMap}
        {...others}
      />
      <ValidationText error={error} help={helpText} success={success} warning={warning} />
    </Box>
  );
};

WysiwygEditor.propTypes = {
  /** The text string/element to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  /** The text string to use as help text below the input. */
  helpText: PropTypes.string,
  /** The text string/element to use as a prefix inside the input field */
  success: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  /** The text string/element to use as a suffix inside the input field */
  warning: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  /** A custom width for the editor field */
  width: PropTypes.string,
};

export default WysiwygEditor;
