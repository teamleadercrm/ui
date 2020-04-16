import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import cx from 'classnames';
import { IconTextBoldMediumOutline, IconTextItalicMediumOutline } from '@teamleader/ui-icons';

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
    <Box display="flex" borderRightWidth={1}>
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

const toolbar = {
  options: ['inline'],
  inline: {
    options: ['bold', 'italic'],
    bold: { icon: <IconTextBoldMediumOutline /> },
    italic: { icon: <IconTextItalicMediumOutline /> },
    component: InlineStyling,
  },
};

const customStyleMap = {
  BOLD: {
    fontFamily: 'Inter-Bold',
  },
};

const WysiwygEditor = ({ className, error, onFocus, onBlur, success, warning, helpText, ...others }) => {
  const [isFocused, setIsFocused] = useState(false);

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

  const wrapperClassNames = cx(
    theme['wrapper'],
    {
      [theme['has-focus']]: isFocused,
      [theme['has-error']]: error,
      [theme['has-success']]: success,
      [theme['has-warning']]: warning,
    },
    className,
  );

  return (
    <>
      <Editor
        toolbar={toolbar}
        wrapperClassName={wrapperClassNames}
        editorClassName={theme['input']}
        toolbarClassName={theme['toolbar']}
        onFocus={handleFocus}
        onBlur={handleBlur}
        customStyleMap={customStyleMap}
        {...others}
      />
      <ValidationText error={error} help={helpText} success={success} warning={warning} />
    </>
  );
};

export default WysiwygEditor;
