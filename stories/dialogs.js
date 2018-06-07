import React from 'react';
import PropTable from './components/propTable';
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

const handleActiveToggle = () => {
  store.set({ active: !store.get('active') });
};

storiesOf('Dialogs', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Button, ButtonGroup, Banner, TextBody, Heading3, State],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
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
