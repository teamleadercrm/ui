import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { Box, Tag, TextBody, Tooltip } from '../components';

const sizes = ['small', 'medium', 'large'];

const TooltippedTag = Tooltip(Tag);

storiesOf('Tags', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('size', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag key={index} marginHorizontal={3} size={size} inverse={boolean('Inverse', false)}>
          {`${size} tag`}
        </Tag>
      ))}
    </Box>
  ))
  .add('clickable', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag
          inverse={boolean('Inverse', false)}
          key={index}
          marginHorizontal={3}
          onLabelClick={() => console.log('Tag label clicked')}
          size={size}
        >
          {`${size} tag`}
        </Tag>
      ))}
    </Box>
  ))
  .add('closable', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag
          inverse={boolean('Inverse', false)}
          key={index}
          marginHorizontal={3}
          onRemoveClick={() => console.log('Tag removed')}
          size={size}
        >
          {`${size} tag`}
        </Tag>
      ))}
    </Box>
  ))
  .add('clickable & closable', () => (
    <Box>
      {sizes.map((size, index) => (
        <Tag
          inverse={boolean('Inverse', false)}
          key={index}
          marginHorizontal={3}
          onLabelClick={() => console.log('Tag label clicked')}
          onRemoveClick={() => console.log('Tag removed')}
          size={size}
        >
          {`${size} tag`}
        </Tag>
      ))}
    </Box>
  ))
  .add('with tooltip', () => (
    <TooltippedTag inverse={boolean('Inverse', false)} tooltip={<TextBody>I am the tooltip</TextBody>}>
      Tag with tooltip
    </TooltippedTag>
  ));
