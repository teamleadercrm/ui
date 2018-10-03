import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { LoadingBar } from '../components';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];

storiesOf('LoadingBar', module).add('Basic', () => <LoadingBar color={select('Color', colors, 'mint')} />);
