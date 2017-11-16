import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Box, Button, Dialog, TextBody } from '../components/';
import { baseStyles, centerStyles } from '../.storybook/styles';

const actions = [
  { label: 'Cancel', onClick: action('Cancel clicked') },
  { label: 'Save', onClick: action('Save clicked'), level: "primary" },
];

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
          actions={actions}
          active={false}
          onCloseClick={handleCloseClick}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          title="Dialog title"
          size="small"
        >
          <TextBody>Here you can add arbitrary content.</TextBody>
        </Dialog>
      </State>
    </Box>
  ))
  .add('medium', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          actions={actions}
          active={false}
          onCloseClick={handleCloseClick}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          title="Dialog title"
          size="medium"
        >
          <TextBody>Here you can add arbitrary content.</TextBody>
        </Dialog>
      </State>
    </Box>
  ))
  .add('large', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          actions={actions}
          active={false}
          onCloseClick={handleCloseClick}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          title="Dialog title"
          size="large"
        >
          <TextBody>Here you can add arbitrary content.</TextBody>
        </Dialog>
      </State>
    </Box>
  ))
  .add('fullscreen', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          actions={actions}
          active={false}
          onCloseClick={handleCloseClick}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          title="Dialog title"
          size="fullscreen"
        >
          <TextBody>Here you can add arbitrary content.</TextBody>
        </Dialog>
      </State>
    </Box>
  ))
  .add('warning style', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a dialog" />
      <State store={store}>
        <Dialog
          actions={actions}
          active={false}
          onCloseClick={handleCloseClick}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          title="Dialog title"
          type="warning"
        >
          <TextBody>Here you can add arbitrary content.</TextBody>
        </Dialog>
      </State>
    </Box>
  ));
