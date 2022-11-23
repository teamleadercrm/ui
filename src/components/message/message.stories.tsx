import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { TextBody } from '../typography';
import Message, { MessageProps } from './Message';
import Link from '../link';

export default {
  component: Message,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Message'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=1225%3A0',
    },
  },
};

export const FullOption = (args: MessageProps) => (
  <Message {...args}>
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </Message>
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
  <Message title="I am the title of this message">
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </Message>
);

export const Dismissable = () => (
  <Message onClose={() => console.log('onClose click handler')} title="I am the title of this message">
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </Message>
);

export const WithActions = () => (
  <Message
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
  </Message>
);

export const WithStatus = () => (
  <Message status="warning" title="I am the title of this message">
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </Message>
);

export const WithoutTitle = () => (
  <Message status="info">
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link>{' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </TextBody>
  </Message>
);
