import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { StatusBullet, TextBody } from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Bullets', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [TextBody],
    })(story)(context),
  )
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <StatusBullet color={select('Color', colors, 'neutral')} size={select('Size', sizes, 'medium')}>
      <TextBody>label</TextBody>
    </StatusBullet>
  ));
