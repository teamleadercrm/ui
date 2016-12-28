import React from 'react';
import { render } from 'react-dom';
import HmrContainer from 'HmrContainer';
import Root from './Root';

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('spec');

// This code is excluded from production bundle
if (__DEV__) {
  const Redbox = require('redbox-react').default;

  if (module.hot) {
    module.hot.accept('./Root', () => {
      const NextApp = require('./Root').default;
      render(
        <HmrContainer errorReporter={Redbox}>
          <NextApp />
        </HmrContainer>
        , MOUNT_NODE);
    });
  }
}

render(<HmrContainer><Root /></HmrContainer>, MOUNT_NODE);
