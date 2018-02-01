import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, Banner, Link, TextDisplay } from '../components';
import { IconIdeaMediumOutline, IconCalendarMediumOutline as IconSettingsMediumOutline } from '@teamleader/ui-icons';

const colors = ['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua'];

storiesOf('Banner', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('colors', () => (
    <Box padding={5}>
      {colors.map((color, index) => (
        <Banner key={index} color={color} marginTop={4} icon={<IconIdeaMediumOutline />} onClose={() => action('close')}>
          <TextDisplay marginRight={3}>
            I am a {color} banner with an <Link href="http://teamleader.eu">optional link</Link> inside.
          </TextDisplay>
        </Banner>
      ))}
    </Box>
  ))
  .add('full width', () => (
    <Box>
      <Banner color="violet" fullWidth icon={<IconIdeaMediumOutline />} onClose={() => action('close')}>
        <TextDisplay>
          I'm a full width banner with an <Link href="http://teamleader.eu">optional link</Link> inside.
        </TextDisplay>
      </Banner>
    </Box>
  ));
