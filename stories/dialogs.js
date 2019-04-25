import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import { IconWarningBadgedMediumOutline } from '@teamleader/ui-icons';
import { Banner, Box, Button, ButtonGroup, COLORS, Dialog, DialogBase, Heading3, TextBody } from '../src';

const sizes = ['small', 'medium', 'large', 'fullscreen'];

const store = new Store({
  active: false,
});

const handleActiveToggle = () => {
  store.set({ active: !store.get('active') });
  console.log('handleActiveToggle');
};

storiesOf('Dialogs', module)
  .addParameters({
    info: {
      propTablesExclude: [Box, Button, ButtonGroup, Banner, TextBody, Heading3, State],
    },
  })
  .add('DialogBase', () => {
    return (
      <Box>
        <Button onClick={handleActiveToggle} label="Open a dialog base" />
        <State store={store}>
          <DialogBase
            backdrop={select('Backdrop', ['dark'], 'dark')}
            onEscKeyDown={handleActiveToggle}
            onOverlayClick={handleActiveToggle}
            size={select('Size', sizes, 'medium')}
          >
            <Box padding={4}>
              <TextBody>Here you can add arbitrary content.</TextBody>
            </Box>
          </DialogBase>
        </State>
      </Box>
    );
  })
  .add('Dialog', () => {
    const passHeaderIcon = boolean('Pass a headerIcon', false);

    return (
      <Box>
        <Button onClick={handleActiveToggle} label="Open a dialog" />
        <State store={store}>
          <Dialog
            headerColor={select('Header color', COLORS, 'neutral')}
            headerIcon={passHeaderIcon ? <IconWarningBadgedMediumOutline /> : null}
            headingLevel={number('Heading level', 3, { min: 2, max: 3 })}
            onCloseClick={handleActiveToggle}
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
            onEscKeyDown={handleActiveToggle}
            onOverlayClick={handleActiveToggle}
            size={select('Size', sizes, 'medium')}
          >
            <Box padding={4} overflowY="auto">
              <TextBody>Here you can add arbitrary content.</TextBody>
            </Box>
          </Dialog>
        </State>
      </Box>
    );
  });
