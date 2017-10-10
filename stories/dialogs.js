import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import Dialog from '../components/dialog';

const openDialog = () => {
  return action('action button clicked');
};
const actions = [{ label: 'Cancel', onClick: openDialog }, { label: 'Save', onClick: openDialog, level: 'primary' }];

storiesOf('Dialogs', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('colors', () => (
    <Dialog
      actions={actions}
      active
      onCloseClick={openDialog}
      onEscKeyDown={openDialog}
      onOverlayClick={openDialog}
      title="Dialog title"
    >
      <p>Here you can add arbitrary content.</p>
    </Dialog>
  ));
