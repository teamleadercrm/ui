import React, { AnchorHTMLAttributes, ChangeEventHandler, ReactNode, useEffect, useRef, useState } from 'react';

import { GenericComponent } from '../../@types/types';
import Box from '../box';
import Button from '../button';
import IconButton from '../iconButton';
import Input from '../input';
import Label from '../label';
import Popover from '../popover';
import Tooltip from '../tooltip';
import { TextSmall } from '../typography';

const TooltippedIconButton = Tooltip(IconButton);

interface LinkOptionsProps {
  config: {
    link: {
      icon: ReactNode;
    };
    defaultTargetOption: string;
  };
  currentState: {
    selectionText: string;
    link: AnchorHTMLAttributes<HTMLElement>;
  };
  onChange: (type: string, text: string, link: string | undefined, target: string) => void;
  translations: Record<string, string>;
}

const LinkOptions: GenericComponent<LinkOptionsProps> = ({
  config: {
    link: { icon: linkIcon },
    defaultTargetOption,
  },
  currentState: { link, selectionText },
  onChange,
  translations,
}) => {
  const [isPopoverShown, setIsPopoverShown] = useState(false);
  const iconButtonRef = useRef<HTMLElement>(null);
  const [textValue, setTextValue] = useState(link?.title || selectionText);
  const [linkValue, setLinkValue] = useState(link?.target);

  useEffect(() => {
    setTextValue(link?.title || selectionText);
    setLinkValue(link?.target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link?.target, selectionText]);

  const focusEditor = () => {
    const editorElement: HTMLElement | null = document.querySelector("[aria-label='rdw-editor']");
    editorElement?.focus && editorElement.focus();
  };

  const handleOpenPopoverClick = () => {
    setIsPopoverShown(true);
  };

  const handleClosePopoverClick = () => {
    setIsPopoverShown(false);
    focusEditor();
  };

  const onTextChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({
    currentTarget: { value: newText },
  }) => {
    setTextValue(newText);
  };

  const onLinkChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({
    currentTarget: { value: newLink },
  }) => {
    setLinkValue(newLink);
  };

  const handleAddLinkClick = async () => {
    // awaits need to be here, otherwise saving doesn't work
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
          color="teal"
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
        minWidth="276px"
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
