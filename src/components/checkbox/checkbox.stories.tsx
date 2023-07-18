import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox, Link, TextBody } from '../../index';

export default {
  component: Checkbox,
  title: 'Low level blocks / Form elements/Checkbox',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=6454%3A21716',
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const DefaultStory: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

DefaultStory.args = {
  label: 'I am the label',
};

DefaultStory.storyName = 'Default';

export const WithLinkInLabel: ComponentStory<typeof Checkbox> = () => (
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

WithLinkInLabel.storyName = 'With link in label';

export const WithIndeterminateState: ComponentStory<typeof Checkbox> = () => <Checkbox indeterminate />;

WithIndeterminateState.storyName = 'With indeterminate state';
