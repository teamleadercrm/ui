import React, { useRef, useState } from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Box, Button, Dialog, TextBody } from '../../index';
import Input from '../input';
import Label from '../label';
import { DialogBase } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Dialog,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Dialog'),
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

export const DefaultStory: ComponentStory<typeof Dialog> = (args) => {
  const [active, setActive] = useState(false);

  const toggleDialog = () => {
    setActive(!active);
  };

  return (
    <Box>
      <Button onClick={toggleDialog} label="Open a dialog" />
      <Dialog
        {...args}
        active={active}
        onCloseClick={toggleDialog}
        onEscKeyDown={toggleDialog}
        onOverlayClick={toggleDialog}
      >
        <Box padding={4}>
          <TextBody>Here you can add arbitrary content.</TextBody>
        </Box>
      </Dialog>
    </Box>
  );
};

DefaultStory.args = {
  leftAction: {
    label: 'Remove',
    level: 'destructive',
    onClick: () => console.log('leftAction.onClick'),
  },
  primaryAction: {
    label: 'Confirm',
    onClick: () => console.log('primaryAction.onClick'),
  },
  secondaryAction: {
    label: 'Cancel',
    onClick: () => console.log('secondaryAction.onClick'),
  },
  tertiaryAction: {
    children: 'Read more',
    onClick: () => console.log('tertiaryAction.onClick'),
  },
  title: 'Dialog title',
};

const FocusStates = () => {
  const [primaryDialogActive, setPrimaryDialogActive] = useState(false);
  const [secondaryDialogActive, setSecondaryDialogActive] = useState(false);

  const closePrimaryDialog = () => {
    setPrimaryDialogActive(false);
  };

  const openPrimaryDialog = () => {
    setPrimaryDialogActive(true);
  };

  const closeSecondaryDialog = () => {
    setSecondaryDialogActive(false);
  };

  const openSecondaryDialog = () => {
    setSecondaryDialogActive(true);
  };

  return (
    <Box>
      <Button onClick={openPrimaryDialog} label="Open a dialog" />
      <Dialog
        title="Primary dialog"
        active={primaryDialogActive}
        onCloseClick={closePrimaryDialog}
        onEscKeyDown={closePrimaryDialog}
        onOverlayClick={closePrimaryDialog}
        primaryAction={{
          label: 'Confirm',
          onClick: () => console.log('primaryAction.onClick'),
        }}
      >
        <Box padding={4}>
          <Input />
          <Button onClick={openSecondaryDialog} label="Open secondary dialog" marginTop={3} />
          <Dialog
            title="Secondary dialog"
            active={secondaryDialogActive}
            onCloseClick={closeSecondaryDialog}
            onEscKeyDown={closeSecondaryDialog}
            onOverlayClick={closeSecondaryDialog}
            primaryAction={{
              label: 'Confirm',
              onClick: () => console.log('primaryAction.onClick'),
            }}
          >
            <Box padding={4}>
              <Label>
                First input
                <Input />
              </Label>
              <Label>
                Second input
                <Input />
              </Label>
            </Box>
          </Dialog>
        </Box>
      </Dialog>
    </Box>
  );
};

export const DialogWithFocusStates: ComponentStory<typeof Dialog> = FocusStates.bind({});
DialogWithFocusStates.parameters = {
  docs: {
    description: {
      story:
        'A story showcasing how focus gets trapped in a dialog, following the specifications from https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html.',
    },
  },
};

export const DialogBaseStory: ComponentStory<typeof DialogBase> = (args) => {
  const [active, setActive] = useState(false);
  const bodyRef = useRef<HTMLElement>(null);
  const closeDialog = () => {
    setActive(false);
  };

  const openDialog = () => {
    setActive(true);
  };

  return (
    <Box>
      <Button onClick={openDialog} label="Open a dialog base" />
      <DialogBase
        active={active}
        onEscKeyDown={closeDialog}
        onOverlayClick={closeDialog}
        {...args}
        initialFocusRef={bodyRef}
      >
        <Box padding={4} ref={bodyRef}>
          <TextBody>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </TextBody>
        </Box>
      </DialogBase>
    </Box>
  );
};

export const DialogWithFooterToggle: ComponentStory<typeof DialogBase> = () => {
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(false);
  const closeDialog = () => {
    setActive(false);
  };

  const openDialog = () => {
    setActive(true);
  };

  return (
    <Box>
      <Button onClick={openDialog} label="Open a dialog" />
      <Dialog
        title="Dialog title"
        active={active}
        onCloseClick={closeDialog}
        onEscKeyDown={closeDialog}
        onOverlayClick={closeDialog}
        primaryAction={{
          label: 'Confirm',
          onClick: () => console.log('primaryAction.onClick'),
        }}
        secondaryAction={{ label: 'Cancel', onClick: closeDialog }}
        leftAction={{ label: 'Toggle me', isToggle: true, checked, onClick: () => setChecked(!checked) }}
      >
        <Box padding={4} />
      </Dialog>
    </Box>
  );
};
