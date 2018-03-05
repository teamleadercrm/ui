import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { Banner, Box, Button, ButtonGroup, Dialog, Heading3, TextBody } from '../components/';
import { IconWarningBadgedMediumOutline, IconCheckmarkMediumOutline } from '@teamleader/ui-icons';

const sizes = ['small', 'medium', 'large', 'fullscreen'];

const store = new Store({
  active: false,
});

const handleButtonClick = () => {
  store.set({ active: true });
};

const handleCloseClick = () => {
  store.set({ active: false });
};

storiesOf('Dialogs', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          size={select('Size', sizes, 'medium')}
        >
          <Banner color="neutral" fullWidth onClose={handleCloseClick}>
            <Heading3>Dialog title</Heading3>
          </Banner>
          <Box padding={4}>
            <TextBody>Here you can add arbitrary content.</TextBody>
          </Box>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel"/>
            <Button label="Confirm" level="primary"/>
          </ButtonGroup>
        </Dialog>
      </State>
    </Box>
  ))
  .add('succes style', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <Banner color="mint" fullWidth icon={<IconCheckmarkMediumOutline />} onClose={handleCloseClick}>
            <Heading3>Succes: Dialog title</Heading3>
          </Banner>
          <Box padding={4}>
            <TextBody>Here you can add arbitrary content.</TextBody>
          </Box>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel"/>
            <Button label="Confirm" level="primary"/>
          </ButtonGroup>
        </Dialog>
      </State>
    </Box>
  ))
  .add('warning style', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <Banner color="gold" fullWidth icon={<IconWarningBadgedMediumOutline />} onClose={handleCloseClick}>
            <Heading3>Warning: Dialog title</Heading3>
          </Banner>
          <Box padding={4}>
            <TextBody>Here you can add arbitrary content.</TextBody>
          </Box>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel"/>
            <Button label="Confirm" level="primary"/>
          </ButtonGroup>
        </Dialog>
      </State>
    </Box>
  ))
  .add('destructive style', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <Banner color="ruby" fullWidth icon={<IconWarningBadgedMediumOutline />} onClose={handleCloseClick}>
            <Heading3>Succes: Dialog title</Heading3>
          </Banner>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel"/>
            <Button label="Confirm" level="destructive"/>
          </ButtonGroup>
        </Dialog>
      </State>
    </Box>
  ));
