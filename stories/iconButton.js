import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import styles from '@sambego/storybook-styles';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import { ButtonGroup, IconButton, Island, Box } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('IconButtons', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('size', () => (
    <Box>
      <ButtonGroup>
        <IconButton icon={<IconAddSmallOutline />} size="small" disabled={boolean('Disabled', false)}/>
        <IconButton icon={<IconAddMediumOutline />} size="medium" disabled={boolean('Disabled', false)}/>
      </ButtonGroup>
    </Box>
  ))
  .add('colors', () => (
    <Box>
      <Island color="white" marginBottom={2}>
        <IconButton icon={<IconAddMediumOutline />} disabled={boolean('Disabled', false)}/>
      </Island>
      <Island color="neutral" marginBottom={2}>
        <IconButton icon={<IconAddMediumOutline />} disabled={boolean('Disabled', false)}/>
      </Island>
      <Island color="mint" marginBottom={2}>
        <IconButton color="mint" icon={<IconAddMediumOutline />} disabled={boolean('Disabled', false)}/>
      </Island>
      <Island color="violet" marginBottom={2}>
        <IconButton color="violet" icon={<IconAddMediumOutline />} disabled={boolean('Disabled', false)}/>
      </Island>
      <Island color="ruby" marginBottom={2}>
        <IconButton color="ruby" icon={<IconAddMediumOutline />} disabled={boolean('Disabled', false)}/>
      </Island>
      <Island color="gold" marginBottom={2}>
        <IconButton color="gold" icon={<IconAddMediumOutline />} disabled={boolean('Disabled', false)}/>
      </Island>
      <Island color="aqua" marginBottom={2}>
        <IconButton color="aqua" icon={<IconAddMediumOutline />} disabled={boolean('Disabled', false)}/>
      </Island>
      <Island color="neutral" marginBottom={2} style={{backgroundColor: '#2a3b4d'}}> {/* There is no teal island, so just changing the background with inline style */}
        <IconButton color="white" icon={<IconAddMediumOutline />} disabled={boolean('Disabled', false)}/>
      </Island>
    </Box>
  ));
