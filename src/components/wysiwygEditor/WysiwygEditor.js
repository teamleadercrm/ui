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

import Box from '../box';
import IconButton from '../iconButton';
import ValidationText from '../validationText';
import Popover from '../popover';
import Input from '../input';
import Button from '../button';
import Label from '../label';

import InlineStylingOptions from './InlineStylingOptions';
import ListStylingOptions from './ListStylingOptions';
import theme from './theme.css';

const LinkOptions = ({
  config: {
    options,
    link: { icon: linkIcon },
    defaultTargetOption,
  },
  currentState,
  currentState: { link, selectionText },
  onChange,
}) => {
  const [isPopoverShown, setIsPopoverShown] = useState(false);
  const iconButtonRef = useRef();
  const [textValue, setTextValue] = useState(link?.title || selectionText);
  const [linkValue, setLinkValue] = useState(link?.target);

  useEffect(() => {
    setTextValue(link?.title || selectionText);
    setLinkValue(link?.target);
  }, [link?.target, selectionText]);

  const handleOpenPopoverClick = () => {
    setIsPopoverShown(true);
  };

  const handleClosePopoverClick = () => {
    setIsPopoverShown(false);
  };

  const onTextChange = ({ currentTarget: { value: newText } }) => {
    setTextValue(newText);
  };

  const onLinkChange = ({ currentTarget: { value: newLink } }) => {
    setLinkValue(newLink);
  };

  const handleAddLinkClick = () => {
    onChange('link', textValue, linkValue, defaultTargetOption);
    setIsPopoverShown(false);
  };

  return (
    <>
      <IconButton
        icon={linkIcon}
        color="black"
        key="link"
        title="link"
        onClick={handleOpenPopoverClick}
        selected={!!link || isPopoverShown}
        marginRight={2}
        ref={iconButtonRef}
      />
      <Popover
        anchorEl={iconButtonRef?.current?.buttonNode?.boxNode?.current}
        active={isPopoverShown}
        backdrop="transparent"
        onEscKeyDown={handleClosePopoverClick}
        onOverlayClick={handleClosePopoverClick}
        minWidth={276}
        position="end"
      >
        <Box display="flex" flexDirection="column" padding={4}>
          <Label htmlFor="linkText" helpText="">
            Text
            <Input id="linkText" autoFocus value={textValue || ''} onChange={onTextChange} />
          </Label>
          <Label htmlFor="link" helpText="" marginBottom={4}>
            Link
            <Input id="link" value={linkValue || ''} onChange={onLinkChange} placeholder="e.g. www.teamleader.eu" />
          </Label>
          <Box display="flex" justifyContent="flex-end" alignItems="center" marginTop={4}>
            <Button level="secondary" label="Cancel" size="small" marginRight={3} onClick={handleClosePopoverClick} />
            <Button
              level="primary"
              label="Add link"
              size="small"
              disabled={!linkValue || !textValue}
              onClick={handleAddLinkClick}
            />
          </Box>
        </Box>
      </Popover>
    </>
  );
};

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
