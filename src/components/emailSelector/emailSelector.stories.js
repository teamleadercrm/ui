import React from 'react';
import { text } from '@storybook/addon-knobs';

import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import EmailSelector from './EmailSelector';
import { TextBody } from '../typography';

export default {
  component: EmailSelector,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/EmailSelector'),

  parameters: {},
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const validator = ({ email }) => EMAIL_REGEX.test(email);
const suggestions = [
  { email: 'david.brent@dundermiflin.com', label: 'David Brent' },
  { email: 'david.wallace@dundermiflin.com', label: 'David Wallace' },
  { email: 'alan.brand@dundermiflin.com', label: 'Alan Brand' },
  { email: 'robert.mifflin@dundermiflin.com', label: 'Robert Mifflin' },
  { email: 'robert.dunder@dundermiflin.com', label: 'Robert Dunder' },
];

export const basic = () => (
  <EmailSelector
    warning={text('Warning', '')}
    error={text('Error', '')}
    validator={validator}
    defaultSelection={[suggestions[0]]}
    suggestions={suggestions}
  />
);

export const groupedSuggestions = () => (
  <EmailSelector
    warning={text('Warning', '')}
    error={text('Error', '')}
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
  />
);

export const customSuggestions = () => (
  <EmailSelector
    warning={text('Warning', '')}
    error={text('Error', '')}
    validator={validator}
    suggestions={suggestions}
    renderSuggestion={({ suggestion, selected }) => (
      <TextBody padding={2} borderTopWidth={selected ? 1 : 0} borderBottomWidth={selected ? 1 : 0}>
        {suggestion.email}
      </TextBody>
    )}
  />
);
