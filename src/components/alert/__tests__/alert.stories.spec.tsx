import React from 'react';
import Alert from '../Alert';

export default {
  component: Alert,
  title: 'Alert',
};

export const Main = () => (
  <Alert
    active
    primaryAction={{
      label: 'Confirm',
      onClick: () => console.log('primaryAction.onClick'),
    }}
    secondaryAction={{
      label: 'Cancel',
      onClick: () => console.log('secondaryAction.onClick'),
    }}
    title="Alert title"
    body="I am the alert body text"
  />
);

Main.parameters = {
  // add a delay to make sure the dialog animation is finished
  chromatic: { delay: 300 },
};
