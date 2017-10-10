import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import Counter from '../components/counter';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white'];

storiesOf('Counters', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('colors', () => (
    <div>
      {colors.map(color => <Counter count={99} color={color} />)}
      <Counter count={99} dark />
    </div>
  ))
  .add('size', () => (
    <div>
      <Counter count={99} color="neutral" size="small" />
      <Counter count={99} color="neutral" size="medium" />
    </div>
  ))
  .add('maximum count', () => (
    <div>
      <Counter count={116} color="neutral" maxCount="99" />
    </div>
  ));
