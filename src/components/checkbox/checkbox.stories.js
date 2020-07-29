import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Checkbox, Link, TextBody } from '../../index';

const sizes = ['small', 'medium', 'large'];

export default {
  component: Checkbox,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Checkbox'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=6454%3A21716',
    },
    info: {
      propTablesExclude: [Link, TextBody],
    },
  },
};

export const defaultStory = () => (
  <Checkbox
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    label={text('Label', 'I am the label')}
    size={select('Size', sizes, 'medium')}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const withLinkInLabel = () => (
  <Checkbox
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    size={select('Size', sizes, 'medium')}
  >
    <TextBody>
      I'm a medium label with a{' '}
      <Link href="#" inherit={false}>
        link
      </Link>{' '}
      inside
    </TextBody>
  </Checkbox>
);

withLinkInLabel.story = {
  name: 'With link in label',
};

export const withIndeterminateState = () => (
  <Checkbox
    indeterminate={boolean('Indeterminate', false)}
    label={text('Label', 'I am the label')}
    size={select('Size', sizes, 'medium')}
  />
);

withIndeterminateState.story = {
  name: 'With indeterminate state',
};
