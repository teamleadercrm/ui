import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { select } from '@storybook/addon-knobs/react';
import { IconWarningBadgedMediumOutline, IconCheckmarkMediumOutline } from '@teamleader/ui-icons';
import { Banner, Box, Button, ButtonGroup, Dialog, Heading3, TextBody } from '../src';

const sizes = ['small', 'medium', 'large', 'fullscreen'];

const store = new Store({
  active: false,
});

const handleActiveToggle = () => {
  store.set({ active: !store.get('active') });
};

storiesOf('Dialogs', module)
  .addParameters({
    info: {
      propTablesExclude: [Box, Button, ButtonGroup, Banner, TextBody, Heading3, State],
    },
  })
  .add('Basic', () => (
    <Box>
      <Button onClick={handleActiveToggle} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleActiveToggle}
          onOverlayClick={handleActiveToggle}
          size={select('Size', sizes, 'medium')}
        >
          <Banner color="neutral" fullWidth onClose={handleActiveToggle}>
            <Heading3>Dialog title</Heading3>
          </Banner>
          <Box padding={4}>
            <TextBody>Here you can add arbitrary content.</TextBody>
          </Box>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" />
            <Button label="Confirm" level="primary" />
          </ButtonGroup>
        </Dialog>
      </State>
    </Box>
  ))
  .add('succes style', () => (
    <Box>
      <Button onClick={handleActiveToggle} label="Open a dialog" />
      <State store={store}>
        <Dialog active={false} onEscKeyDown={handleActiveToggle} onOverlayClick={handleActiveToggle}>
          <Banner color="mint" fullWidth icon={<IconCheckmarkMediumOutline />} onClose={handleActiveToggle}>
            <Heading3>Succes: Dialog title</Heading3>
          </Banner>
          <Box padding={4}>
            <TextBody>Here you can add arbitrary content.</TextBody>
          </Box>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" />
            <Button label="Confirm" level="primary" />
          </ButtonGroup>
        </Dialog>
      </State>
    </Box>
  ))
  .add('warning style', () => (
    <Box>
      <Button onClick={handleActiveToggle} label="Open a dialog" />
      <State store={store}>
        <Dialog active={false} onEscKeyDown={handleActiveToggle} onOverlayClick={handleActiveToggle}>
          <Banner color="gold" fullWidth icon={<IconWarningBadgedMediumOutline />} onClose={handleActiveToggle}>
            <Heading3>Warning: Dialog title</Heading3>
          </Banner>
          <Box padding={4}>
            <TextBody>Here you can add arbitrary content.</TextBody>
          </Box>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" />
            <Button label="Confirm" level="primary" />
          </ButtonGroup>
        </Dialog>
      </State>
    </Box>
  ))
  .add('destructive style', () => (
    <Box>
      <Button onClick={handleActiveToggle} label="Open a dialog" />
      <State store={store}>
        <Dialog active={false} onEscKeyDown={handleActiveToggle} onOverlayClick={handleActiveToggle}>
          <Banner color="ruby" fullWidth icon={<IconWarningBadgedMediumOutline />} onClose={handleActiveToggle}>
            <Heading3>Succes: Dialog title</Heading3>
          </Banner>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" />
            <Button label="Confirm" level="destructive" />
          </ButtonGroup>
        </Dialog>
      </State>
    </Box>
  ));
