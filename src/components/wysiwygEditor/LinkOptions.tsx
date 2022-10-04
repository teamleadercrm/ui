import React, { useState, useRef, useEffect } from 'react';

import Box from '../box';
import IconButton from '../iconButton';
import Popover from '../popover';
import Label from '../label';
import Input from '../input';
import Button from '../button';
import Tooltip from '../tooltip';
import { TextSmall } from '../typography';

const TooltippedIconButton = Tooltip(IconButton);

const LinkOptions = ({
  config: {
    options,
    link: { icon: linkIcon },
    defaultTargetOption,
  },
  currentState: { link, selectionText },
  onChange,
  translations,
}) => {
  const [isPopoverShown, setIsPopoverShown] = useState(false);
  const iconButtonRef = useRef();
  const [textValue, setTextValue] = useState(link?.title || selectionText);
  const [linkValue, setLinkValue] = useState(link?.target);

  useEffect(() => {
    setTextValue(link?.title || selectionText);
    setLinkValue(link?.target);
  }, [link?.target, selectionText]);

  const focusEditor = () => {
    document.querySelector("[aria-label='rdw-editor']").focus();
  };

  const handleOpenPopoverClick = () => {
    setIsPopoverShown(true);
  };

  const handleClosePopoverClick = () => {
    setIsPopoverShown(false);
    focusEditor();
  };

  const onTextChange = ({ currentTarget: { value: newText } }) => {
    setTextValue(newText);
  };

  const onLinkChange = ({ currentTarget: { value: newLink } }) => {
    setLinkValue(newLink);
  };

  const handleAddLinkClick = async () => {
    await onChange('link', textValue, linkValue, defaultTargetOption);
    await setIsPopoverShown(false);
    await focusEditor();
  };

  return (
    <>
      <Box ref={iconButtonRef}>
        <TooltippedIconButton
          data-wysiwyg
          tooltip={<TextSmall>{translations['components.controls.link.link']}</TextSmall>}
          tooltipSize="small"
          tooltipShowDelay={1000}
          icon={linkIcon}
          color="black"
          key="link"
          onClick={handleOpenPopoverClick}
          selected={!!link || isPopoverShown}
          marginRight={2}
        />
      </Box>
      <Popover
        anchorEl={iconButtonRef?.current}
        active={isPopoverShown}
        backdrop="transparent"
        onEscKeyDown={handleClosePopoverClick}
        onOverlayClick={handleClosePopoverClick}
        minWidth={276}
        maxWidth="100%"
        zIndex={404}
      >
        <Box display="flex" flexDirection="column" padding={4}>
          <Label htmlFor="linkText" helpText="">
            {translations['components.controls.link.popover.text']}
            <Input id="linkText" autoFocus value={textValue || ''} onChange={onTextChange} data-wysiwyg />
          </Label>
          <Label htmlFor="link" helpText="" marginBottom={4}>
            {translations['components.controls.link.popover.link']}
            <Input
              id="link"
              value={linkValue || ''}
              onChange={onLinkChange}
              placeholder={translations['components.controls.link.popover.placeholder']}
              data-wysiwyg
            />
          </Label>
          <Box display="flex" justifyContent="flex-end" alignItems="center" marginTop={4}>
            <Button
              level="secondary"
              label={translations['components.controls.link.popover.cancel']}
              size="small"
              marginRight={3}
              onClick={handleClosePopoverClick}
              data-wysiwyg
            />
            <Button
              level="primary"
              label={translations['components.controls.link.popover.addLink']}
              size="small"
              disabled={!linkValue || !textValue}
              onClick={handleAddLinkClick}
              data-wysiwyg
            />
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default LinkOptions;
