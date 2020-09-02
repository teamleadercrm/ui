import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Checkbox, Link, TextBody } from '../../index';

export default {
  component: Checkbox,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Checkbox'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=6454%3A21716',
    },
  },
};

export const DefaultStory = (args) => <Checkbox {...args} />;

DefaultStory.args = {
  label: 'I am the label',
};

DefaultStory.story = {
  name: 'Default',
};

export const WithLinkInLabel = () => (
  <Checkbox>
    <TextBody>
      I'm a medium label with a{' '}
      <Link href="#" inherit={false}>
        link
      </Link>{' '}
      inside
    </TextBody>
  </Checkbox>
);

WithLinkInLabel.story = {
  name: 'With link in label',
};

export const WithIndeterminateState = () => <Checkbox indeterminate />;

WithIndeterminateState.story = {
  name: 'With indeterminate state',
};
