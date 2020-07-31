import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Store, State } from '@sambego/storybook-state';
import { Box, Button, DialogBase, TextBody } from '../../index';

const store = new Store({
  active: false,
});

const handleActiveToggle = () => {
  store.set({ active: !store.get('active') });
  console.log('handleActiveToggle');
};

export default {
  component: DialogBase,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'DialogBase'),
};

export const DefaultStory = (args) => {
  return (
    <Box>
      <Button onClick={handleActiveToggle} label="Open a dialog base" />
      <State store={store}>
        <DialogBase {...args} onEscKeyDown={handleActiveToggle} onOverlayClick={handleActiveToggle}>
          <Box padding={4}>
            <TextBody>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </TextBody>
          </Box>
        </DialogBase>
      </State>
    </Box>
  );
};
