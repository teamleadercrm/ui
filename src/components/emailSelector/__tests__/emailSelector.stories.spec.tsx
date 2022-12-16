import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import EmailSelector from '../EmailSelector';

export default {
  component: EmailSelector,
  title: 'EmailSelector',
} as ComponentMeta<typeof EmailSelector>;

export const Main: ComponentStory<typeof EmailSelector> = () => (
  <EmailSelector defaultSelection={[{ email: 'david.brent@dundermiflin.com', label: 'David Brent' }]} />
);

export const WithError: ComponentStory<typeof EmailSelector> = () => (
  <EmailSelector
    defaultSelection={[{ email: 'david.brent@dundermiflin.com', label: 'David Brent' }]}
    validator={() => false}
    error="All labels are invalid here."
  />
);
