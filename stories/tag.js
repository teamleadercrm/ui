import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
// import { Store, State } from '@sambego/storybook-state';
import styles from '@sambego/storybook-styles';
import { Box, Tag, Island } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const sizes = ['small', 'medium', 'large'];

// const store = new Store({
//   checked: false,
// });

// const handleOnChange = checked => {
//   store.set({ checked });
//   action(`onChange - checked: ${checked}`)();
// };

storiesOf('Tags', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('size', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag key={index} label={`${size} tag`} marginHorizontal={3} onClose={action('')} size={size}/>
      ))}
    </Box>
  ));
