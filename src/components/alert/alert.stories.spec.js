import React from 'react';
import Alert from './Alert';

export default {
  component: Alert,
  title: 'Alert',
};

export const Main = () => (
  <Alert />
);

Main.parameters = {
  // add a delay to make sure the dialog animation is finished
  chromatic: { delay: 300 },
};
