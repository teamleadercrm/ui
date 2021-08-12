import React from 'react';
import { IconWarningBadgedMediumOutline } from '@teamleader/ui-icons';

import { Dialog, Box, TextBody } from '../..';

export default {
  component: Dialog,
  title: 'Dialog',
};

export const Main = () => (
  <Dialog
    headerIcon={<IconWarningBadgedMediumOutline />}
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
