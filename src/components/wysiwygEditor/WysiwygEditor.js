import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import cx from 'classnames';
import {
  IconTextBoldMediumOutline,
  IconTextItalicMediumOutline,
  IconListNumeredMediumOutline,
  IconListMediumOutline,
  IconLinkMediumOutline,
} from '@teamleader/ui-icons';

import Box, { pickBoxProps } from '../box';
import ValidationText from '../validationText';

import InlineStylingOptions from './InlineStylingOptions';
import ListStylingOptions from './ListStylingOptions';
import LinkOptions from './LinkOptions';
import { linkDecorator } from './decorators';
import theme from './theme.css';
import translations from './translations';

const toolbar = {
  options: ['inline', 'list', 'link'],
  inline: {
    options: ['bold', 'italic'],
    bold: { icon: <IconTextBoldMediumOutline /> },
    italic: { icon: <IconTextItalicMediumOutline /> },
    component: InlineStylingOptions,
  },
  list: {
    component: ListStylingOptions,
    options: ['unordered', 'ordered'],
    unordered: { icon: <IconListMediumOutline /> },
    ordered: { icon: <IconListNumeredMediumOutline /> },
  },
  link: {
    component: LinkOptions,
    defaultTargetOption: '_self',
    showOpenOptionOnHover: true,
    options: ['link'],
    link: { icon: <IconLinkMediumOutline /> },
  },
};

const customStyleMap = {
  BOLD: {
    fontFamily: 'Inter',
    fontWeight: 700,
  },
};

const availableLocales = ['en', 'es', 'it', 'nl', 'fr', 'de'];

/** @type {React.ComponentType<any>} */
const WysiwygEditor = ({
  className,
  error,
  onInputFocus,
  onFocus,
  onInputBlur,
  onBlur,
  success,
  warning,
  helpText,
  width,
  locale = 'en',
  inputClassName,
  autoFocus,
  onKeyDown,
  ...others
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPlaceholderShown, setIsPlaceholderShown] = useState(true);
  const editorRef = useRef();

  useEffect(() => {
    if (autoFocus) {
      // eslint-disable-next-line no-unused-expressions
      editorRef?.current?.focusEditor();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (!onKeyDown || !editorRef?.current?.wrapper) {
      return;
    }

    const handleKeyDown = (event) => onKeyDown(event);

    editorRef.current.wrapper.addEventListener('keydown', handleKeyDown);

    return () => {
      if (!onKeyDown && !editorRef?.current?.wrapper) {
        return;
      }
      editorRef.current.wrapper.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBlur = (event) => {
    const editorInput = document.querySelector("[aria-label='rdw-editor']");
    // Only blur when editorInput is blurred and the newly focussed target is not part of the wysiwyg
    if (event.target === editorInput && !event.relatedTarget?.dataset?.wysiwyg) {
      setIsFocused(false);
      onBlur && onBlur(event);
    }

    if (onInputBlur) {
      onInputBlur(event);
    }
  };

  const handleFocus = (event) => {
    const editorInput = document.querySelector("[aria-label='rdw-editor']");

    // Only focus when focussed target is part of the wysiwyg and the editor isn't focussed yet
    if ((event.target.dataset.wysiwyg || event.target === editorInput) && !isFocused) {
      setIsFocused(true);
      onFocus && onFocus(event);
    }

    if (onInputFocus) {
      onInputFocus(event);
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

  const inputClassNames = cx(theme['input'], inputClassName);

  const boxProps = pickBoxProps(others);

  return (
    <Box style={{ width, flex: width && '0 0 auto' }} {...boxProps}>
      <Editor
        toolbar={toolbar}
        wrapperClassName={wrapperClassNames}
        editorClassName={inputClassNames}
        toolbarClassName={theme['toolbar']}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onContentStateChange={handleContentStateChange}
        customStyleMap={customStyleMap}
        customDecorators={[linkDecorator]}
        localization={
          availableLocales.includes(locale)
            ? {
                locale,
                translations: translations[locale],
              }
            : {
                locale: 'en',
                translations: translations['en'],
              }
        }
        ref={editorRef}
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
  /** Locale key for the language you want the editor to be displayed in. */
  locale: PropTypes.string,
  /** Classname for the WysiwygEditor's input element */
  inputClassName: PropTypes.string,
  /** Determines if the editor should be autofocussed on render */
  autoFocus: PropTypes.bool,
  /** Callback function for focussing on anything in the editor */
  onFocus: PropTypes.func,
  /** Callback function for blurring anything in the editor */
  onBlur: PropTypes.func,
  /** Callback function for focussing on the input field of the editor */
  onEditorFocus: PropTypes.func,
  /** Callback function for blurring the input field of the editor */
  onEditorBlur: PropTypes.func,
  /** Callback function for keydown in the input field of the editor */
  onKeyDown: PropTypes.func,
};

export default WysiwygEditor;
