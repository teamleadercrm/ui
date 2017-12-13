import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import { ButtonGroup, IconButton, Island, Box } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('IconButtons', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('disabled', () => (
    <IconButton icon={<IconAddMediumOutline />} disabled />
  ))
  .add('size', () => (
    <Box>
      <ButtonGroup>
        <IconButton icon={<IconAddSmallOutline />} size="small" />
        <IconButton icon={<IconAddMediumOutline />} size="medium" />
      </ButtonGroup>
    </Box>
  ))
  .add('colors', () => (
    <Box>
      <Island color="white" marginBottom={2}>
        <IconButton icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="neutral" marginBottom={2}>
        <IconButton icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="mint" marginBottom={2}>
        <IconButton color="mint" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="violet" marginBottom={2}>
        <IconButton color="violet" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="ruby" marginBottom={2}>
        <IconButton color="ruby" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="gold" marginBottom={2}>
        <IconButton color="gold" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="aqua" marginBottom={2}>
        <IconButton color="aqua" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
      <Island color="neutral" marginBottom={2} style={{backgroundColor: '#2a3b4d'}}> {/* There is no teal island, so just changing the background with inline style */}
        <IconButton color="white" icon={<IconAddMediumOutline />} onClick={action('clicked icon button')} />
      </Island>
    </Box>
  ));
