import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select, text } from '@storybook/addon-knobs';
import { TextBody } from '../typography';
import SilentBanner from './SilentBanner';
import Link from '../link';

const statusValues = ['info', 'error', 'success', 'warning'];

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Silent banners'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=1225%3A0',
    },
    info: {
      propTables: [SilentBanner],
    },
  },
};

export const basic = () => (
  <SilentBanner inline={boolean('Inline', false)} title={text('Title', 'I am the title of this message')}>
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);

export const dismissable = () => (
  <SilentBanner
    inline={boolean('Inline', false)}
    onClose={() => console.log('onClose click handler')}
    title={text('Title', 'I am the title of this message')}
  >
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);

export const withActions = () => (
  <SilentBanner
    inline={boolean('Inline', false)}
    primaryAction={{
      label: text('Primary action label', 'Primary action'),
      onClick: () => console.log('primaryAction.onClick'),
    }}
    secondaryAction={{
      label: text('Secondary action label', 'Secondary action'),
      onClick: () => console.log('secondaryAction.onClick'),
    }}
    title={text('Title', 'I am the title of this message')}
  >
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);

export const withStatus = () => (
  <SilentBanner
    inline={boolean('Inline', false)}
    showIcon={boolean('Show icon', false)}
    status={select('Status', statusValues, 'success')}
    title={text('Title', 'I am the title of this message')}
  >
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);

export const fullOption = () => (
  <SilentBanner
    inline={boolean('Inline', false)}
    onClose={() => console.log('onClose click handler')}
    primaryAction={{
      label: text('Primary action label', 'Primary action'),
      onClick: () => console.log('primaryAction.onClick'),
    }}
    secondaryAction={{
      label: text('Secondary action label', 'Secondary action'),
      onClick: () => console.log('secondaryAction.onClick'),
    }}
    showIcon={boolean('Show icon', true)}
    status={select('Status', statusValues, 'success')}
    title={text('Title', 'I am the title of this message')}
  >
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);
