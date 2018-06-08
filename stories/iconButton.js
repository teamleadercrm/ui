import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import { IconButton } from '../components';

const colors = ['white', 'neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium', 'large'];

storiesOf('IconButtons', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <IconButton
      icon={select('Size', sizes, 'medium') === 'small' ? <IconAddSmallOutline /> : <IconAddMediumOutline />}
      color={select('Color', colors, 'neutral')}
      size={select('Size', sizes, 'medium')}
      disabled={boolean('Disabled', false)}
    />
  ));
