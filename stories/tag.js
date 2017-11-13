import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import styles from '@sambego/storybook-styles';
import { Box, Tag } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const sizes = ['small', 'medium', 'large'];

storiesOf('Tags', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('size', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag key={index} label={`${size} tag`} marginHorizontal={3} size={size}/>
      ))}
    </Box>
  ))
  .add('clickable', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag
          key={index}
          label={`${size} tag`}
          marginHorizontal={3}
          onLabelClick={action('Tag label clicked')}
          size={size}
        />
      ))}
    </Box>
  ))
  .add('closable', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag
          key={index}
          label={`${size} tag`}
          marginHorizontal={3}
          onRemoveClick={action('Tag removed')}
          size={size}
        />
      ))}
    </Box>
  ))
  .add('clickable & closable', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag
          key={index}
          label={`${size} tag`}
          marginHorizontal={3}
          onLabelClick={action('Tag label clicked')}
          onRemoveClick={action('Tag removed')}
          size={size}
        />
      ))}
    </Box>
  ))
  .add('inverse', () => (
    <Box>
      <Tag
        inverse={true}
        label="Inverse tag"
        onLabelClick={action('Tag label clicked')}
        onRemoveClick={action('Tag removed')}
      />
    </Box>
  ));
