import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Banner, Box, Button, ButtonGroup, Dialog, Heading3, TextBody } from '../components/';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { IconWarningBadgedMediumOutline, IconCheckmarkMediumOutline } from '@teamleader/ui-icons';

const store = new Store({
  active: false,
});

const handleButtonClick = () => {
  store.set({ active: true });
  return action('onClick - active: true');
};

const handleCloseClick = () => {
  store.set({ active: false });
  return action('onClick - active: false');
};

storiesOf('Dialogs', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('small', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          size="small"
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
  .add('medium', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          size="medium"
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
  .add('large', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          size="large"
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
  .add('fullscreen', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          active={false}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          size="fullscreen"
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
