import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Store, State } from '@sambego/storybook-state';
import { IconWarningBadgedMediumOutline } from '@teamleader/ui-icons';
import { Box, Button, Dialog, TextBody } from '../../index';

const store = new Store({
  active: false,
});

const handleActiveToggle = () => {
  store.set({ active: !store.get('active') });
  console.log('handleActiveToggle');
};

export default {
  component: Dialog,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Dialog'),
};

export const DefaultStory = (args) => {
  return (
    <Box>
      <Button onClick={handleActiveToggle} label="Open a dialog" />
      <State store={store}>
        <Dialog
          {...args}
          headerIcon={<IconWarningBadgedMediumOutline />}
          onCloseClick={handleActiveToggle}
          onEscKeyDown={handleActiveToggle}
          onOverlayClick={handleActiveToggle}
        >
          <Box padding={4}>
            <TextBody>Here you can add arbitrary content.</TextBody>
          </Box>
        </Dialog>
      </State>
    </Box>
  );
};

DefaultStory.args = {
  headerColor: 'neutral',
  headingLevel: 2,
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
