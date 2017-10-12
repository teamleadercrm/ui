import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { baseStyles, centerStyles } from '../.storybook/styles';
import Input from '../components/input';
import { IconCalendarMediumOutline } from '@teamleader/ui-icons';

storiesOf('Inputs', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('default', () => (
    <div>
      <Input icon={IconCalendarMediumOutline} size="large" value="lorem ipsum" />
      <Input icon={IconCalendarMediumOutline} value="lorem ipsum" />
      <Input icon={IconCalendarMediumOutline} size="small" value="lorem ipsum" />
    </div>
  ));
