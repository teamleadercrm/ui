import React, { useState } from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { IconWarningBadgedMediumOutline } from '@teamleader/ui-icons';
import { Banner, Box, Button, ButtonGroup, COLORS, Dialog, DialogBase, Heading3, TextBody } from '../../index';

const sizes = ['small', 'medium', 'large', 'fullscreen'];

export default {
  component: Dialog,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Dialog'),

  parameters: {
    info: {
      propTablesExclude: [Box, Button, ButtonGroup, Banner, TextBody, Heading3],
    },
  },
};

export const dialogBase = () => {
  const [active, setActive] = useState(false);

  const toggleDialog = () => {
    setActive(!active);
  };

  return (
    <Box>
      <Button onClick={toggleDialog} label="Open a dialog base" />
      <DialogBase
        active={active}
        backdrop={select('Backdrop', ['dark'], 'dark')}
        onEscKeyDown={toggleDialog}
        onOverlayClick={toggleDialog}
        scrollable={boolean('Scrollable', true)}
        size={select('Size', sizes, 'medium')}
      >
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

dialogBase.story = {
  name: 'DialogBase',
};

export const dialog = () => {
  const [active, setActive] = useState(false);

  const toggleDialog = () => {
    setActive(!active);
  };

  const passHeaderIcon = boolean('Pass a headerIcon', false);

  return (
    <Box>
      <Button onClick={toggleDialog} label="Open a dialog" />
      <Dialog
        active={active}
        headerColor={select('Header color', COLORS, 'neutral')}
        headerIcon={passHeaderIcon ? <IconWarningBadgedMediumOutline /> : null}
        headingLevel={number('Heading level', 3, { min: 2, max: 3 })}
        onCloseClick={toggleDialog}
        primaryAction={{
          label: text('Primary action label', 'Confirm'),
          onClick: () => console.log('primaryAction.onClick'),
        }}
        secondaryAction={{
          label: text('Secondary action label', 'Cancel'),
          onClick: () => console.log('secondaryAction.onClick'),
        }}
        tertiaryAction={{
          children: text('Tertiary action children', 'Read more'),
          onClick: () => console.log('tertiaryAction.onClick'),
        }}
        title={text('Title', 'Dialog title')}
        backdrop={select('Backdrop', ['dark'], 'dark')}
        onEscKeyDown={toggleDialog}
        onOverlayClick={toggleDialog}
        scrollable={boolean('Scrollable', true)}
        size={select('Size', sizes, 'medium')}
      >
        <Box padding={4}>
          <TextBody>Here you can add arbitrary content.</TextBody>
        </Box>
      </Dialog>
    </Box>
  );
};
