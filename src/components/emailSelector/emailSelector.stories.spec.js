import React from 'react';

import EmailSelector from './EmailSelector';

export default {
  component: EmailSelector,
  title: 'EmailSelector',
};

export const Main = () => (
  <EmailSelector defaultSelection={[{ email: 'david.brent@dundermiflin.com', label: 'David Brent' }]} />
);

export const WithError = () => (
  <EmailSelector
    defaultSelection={[{ email: 'david.brent@dundermiflin.com', label: 'David Brent' }]}
    validator={() => false}
    error="All labels are invalid here."
  />
);
