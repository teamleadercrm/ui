import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { TextBody } from '../typography';
import SilentBanner from './SilentBanner';
import Link from '../link';

export default {
  component: SilentBanner,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Silent banners'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=1225%3A0',
    },
  },
};

export const FullOption = (args) => (
  <SilentBanner {...args}>
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);

FullOption.args = {
  onClose: () => console.log('onClose click handler'),
  primaryAction: {
    label: 'Primary action',
    onClick: () => console.log('primaryAction.onClick'),
  },
  secondaryAction: {
    label: 'Secondary action',
    onClick: () => console.log('secondaryAction.onClick'),
  },
  showIcon: true,
  status: 'success',
  title: 'I am the title of this message',
};

export const Basic = () => (
  <SilentBanner title="I am the title of this message">
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);

export const Dismissable = () => (
  <SilentBanner onClose={() => console.log('onClose click handler')} title="I am the title of this message">
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);

export const WithActions = () => (
  <SilentBanner
    primaryAction={{
      label: 'Primary action',
      onClick: () => console.log('primaryAction.onClick'),
    }}
    secondaryAction={{
      label: 'Secondary action',
      onClick: () => console.log('secondaryAction.onClick'),
    }}
    title="I am the title of this message"
  >
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);

export const WithStatus = () => (
  <SilentBanner status="warning" title="I am the title of this message">
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </SilentBanner>
);
