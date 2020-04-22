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
      <Box ref={iconButtonRef}>
        <TooltippedIconButton
          tooltip={<TextSmall>Link</TextSmall>}
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
        anchorEl={iconButtonRef?.current?.boxNode?.current}
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

export default LinkOptions;
