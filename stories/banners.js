import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { Banner, Link, TextDisplay } from '../components';
import { IconIdeaMediumOutline, IconCalendarMediumOutline as IconSettingsMediumOutline } from '@teamleader/ui-icons';

const colors = ['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua'];

storiesOf('Banner', module)
  .addDecorator((story, context) => withInfo('A banner is used to inform a user with a specific message.')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Colors', () => (
    <div>
      <Banner color={select('Color', colors, 'white')} marginTop={4} icon={<IconIdeaMediumOutline />} onClose={() => console.log('close')}>
        <TextDisplay marginRight={3}>
          I am a banner with an <Link href="http://teamleader.eu">optional link</Link> inside.
        </TextDisplay>
      </Banner>
    </div>
  ))
  .add('Full width', () => (
    <Banner color={select('Color', colors, 'violet')} fullWidth icon={<IconIdeaMediumOutline />} onClose={() => console.log('close')}>
      <TextDisplay>
        I'm a full width banner with an <Link href="http://teamleader.eu">optional link</Link> inside.
      </TextDisplay>
    </Banner>
  ));
