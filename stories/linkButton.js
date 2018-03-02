import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { IconChevronLeftMediumOutline, IconChevronRightMediumOutline } from '@teamleader/ui-icons';
import { ButtonGroup, LinkButton, Box } from '../components';

storiesOf('LinkButtons', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <LinkButton
      disabled={boolean('Disabled', false)}
      inverse={boolean('Inverse', false)}
      label="link text"
    />
  ))
  .add('with icon', () => (
    <Box>
      <ButtonGroup>
        <LinkButton
          disabled={boolean('Disabled', false)}
          icon={<IconChevronLeftMediumOutline />}
          inverse={boolean('Inverse', false)}
        />
        <LinkButton
          disabled={boolean('Disabled', false)}
          icon={<IconChevronRightMediumOutline />}
          inverse={boolean('Inverse', false)}
        />
      </ButtonGroup>
    </Box>
  ))
  .add('with text and icon', () => (
    <Box>
      <ButtonGroup>
        <LinkButton
          disabled={boolean('Disabled', false)}
          icon={<IconChevronLeftMediumOutline />}
          inverse={boolean('Inverse', false)}
          label="Previous"
        />
        <LinkButton
          disabled={boolean('Disabled', false)}
          icon={<IconChevronRightMediumOutline />}
          iconPlacement="right"
          inverse={boolean('Inverse', false)}
          label="Next"
        />
      </ButtonGroup>
    </Box>
  ))
  .add('size', () => (
    <Box>
      <ButtonGroup>
        <LinkButton
          disabled={boolean('Disabled', false)}
          inverse={boolean('Inverse', false)}
          label="13"
          size="small"
        />
        <LinkButton
          disabled={boolean('Disabled', false)}
          inverse={boolean('Inverse', false)}
          label="14"
        />
        <LinkButton
          disabled={boolean('Disabled', false)}
          inverse={boolean('Inverse', false)}
          label="15"
          size="large"/>
      </ButtonGroup>
    </Box>
  ));
