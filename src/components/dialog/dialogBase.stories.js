import React, { useState } from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Box, Button, TextBody } from '../../index';
import DialogBase from './DialogBase';

export default {
  component: DialogBase,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'DialogBase'),
};

export const DefaultStory = (args) => {
  const [active, setActive] = useState(false);

  const closeDialog = () => {
    setActive(false);
  };

  const openDialog = () => {
    setActive(true);
  };

  return (
    <Box>
      <Button onClick={openDialog} label="Open a dialog base" />
      <DialogBase active={active} onEscKeyDown={closeDialog} onOverlayClick={closeDialog} {...args}>
        <Box padding={4}>
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
