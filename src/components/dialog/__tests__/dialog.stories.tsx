import React from 'react';

import { Dialog, Box, TextBody } from '../../..';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Dialog,
  title: 'Dialog',
} as ComponentMeta<typeof Dialog>;

export const Main: ComponentStory<typeof Dialog> = () => (
  <Dialog
    active
    onCloseClick={() => {}}
    onEscKeyDown={() => {}}
    onOverlayClick={() => {}}
    primaryAction={{
      label: 'Confirm',
    }}
    secondaryAction={{
      label: 'Cancel',
    }}
    tertiaryAction={{
      children: 'Read more',
    }}
    title="Dialog title"
  >
    <Box padding={4}>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </Box>
  </Dialog>
);

Main.parameters = {
  // add a delay to make sure the dialog animation is finished
  chromatic: { delay: 300 },
};
