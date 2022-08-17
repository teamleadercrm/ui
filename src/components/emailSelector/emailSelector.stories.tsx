import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import EmailSelector from './EmailSelector';
import { TextBody } from '../typography';
import { Suggestion } from './types';

const defaultEmailSelectorProps = {
  error: '',
  menuFullWidth: true,
  disableRemovalOfFirst: false,
};

export default {
  component: EmailSelector,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/EmailSelector'),

  parameters: {},
} as ComponentMeta<typeof EmailSelector>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const validator = ({ email }: Suggestion) => EMAIL_REGEX.test(email);
const suggestions = [
  { email: 'david.brent@dundermiflin.com', label: 'David Brent' },
  { email: 'david.wallace@dundermiflin.com', label: 'David Wallace' },
  { email: 'alan.brand@dundermiflin.com', label: 'Alan Brand' },
  { email: 'robert.mifflin@dundermiflin.com', label: 'Robert Mifflin' },
  { email: 'robert.dunder@dundermiflin.com', label: 'Robert Dunder' },
];

export const basic: ComponentStory<typeof EmailSelector> = (args) => (
  <EmailSelector
    error={args.error}
    validator={validator}
    defaultSelection={[suggestions[0]]}
    suggestions={suggestions}
    menuFullWidth={args.menuFullWidth}
    disableRemovalOfFirst={args.disableRemovalOfFirst}
  />
);

basic.args = defaultEmailSelectorProps;

export const groupedSuggestions: ComponentStory<typeof EmailSelector> = (args) => (
  <EmailSelector
    error={args.error}
    validator={validator}
    suggestions={{
      davids: [
        { email: 'david.brent@dundermiflin.com', label: 'David Brent' },
        { email: 'david.wallace@dundermiflin.com', label: 'David Wallace' },
      ],
      roberts: [
        { email: 'robert.mifflin@dundermiflin.com', label: 'Robert Mifflin' },
        { email: 'robert.dunder@dundermiflin.com', label: 'Robert Dunder' },
      ],
    }}
    menuFullWidth={args.menuFullWidth}
    disableRemovalOfFirst={args.disableRemovalOfFirst}
  />
);

groupedSuggestions.args = defaultEmailSelectorProps;

export const customSuggestions: ComponentStory<typeof EmailSelector> = (args) => (
  <EmailSelector
    error={args.error}
    validator={validator}
    suggestions={suggestions}
    renderSuggestion={({ suggestion, selected }) => (
      <TextBody padding={2} borderTopWidth={selected ? 1 : 0} borderBottomWidth={selected ? 1 : 0}>
        {suggestion.email}
      </TextBody>
    )}
    menuFullWidth={args.menuFullWidth}
    disableRemovalOfFirst={args.disableRemovalOfFirst}
  />
);

customSuggestions.args = defaultEmailSelectorProps;

export const disableRemovalOfFirst: ComponentStory<typeof EmailSelector> = (args) => (
  <EmailSelector
    error={args.error}
    validator={validator}
    defaultSelection={[suggestions[0]]}
    suggestions={suggestions}
    menuFullWidth={args.menuFullWidth}
    disableRemovalOfFirst={args.disableRemovalOfFirst}
  />
);

disableRemovalOfFirst.args = { ...defaultEmailSelectorProps, disableRemovalOfFirst: true };
