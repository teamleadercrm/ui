import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import {
  IllustrationInvoices120X120Static,
  IllustrationMeetings120X120Static,
  IllustrationDeals120X120Static,
  IllustrationContacts120X120Static,
} from '@teamleader/ui-illustrations';
import { Island, IslandGroup, TextBody, Heading3 } from '../../index';

const islandData = [
  {
    illustration: <IllustrationContacts120X120Static />,
    title: 'Contacts',
    text: 'Manage your clients directly in Teamleader',
  },
  {
    illustration: <IllustrationInvoices120X120Static />,
    title: 'Invoices',
    text: 'Send invoices to your clients straight from Teamleader.',
  },
  {
    illustration: <IllustrationMeetings120X120Static />,
    title: 'Meetings',
    text: 'Plan meetings and see them straight away in your favourite calendar.',
  },
  {
    illustration: <IllustrationDeals120X120Static />,
    title: 'Deals',
    text: 'Keep track of all your deals with our fully integrated module.',
  },
];

export default {
  component: IslandGroup,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'IslandGroup'),
};

export const DefaultStory = (args) => (
  <IslandGroup {...args}>
    {islandData.map(({ illustration, title, text }, index) => (
      <Island key={index} alignItems="center" display="flex" flex={1} flexDirection="column" textAlign="center">
        {illustration}
        <Heading3 marginBottom={3}>{title}</Heading3>
        <TextBody>{text}</TextBody>
      </Island>
    ))}
  </IslandGroup>
);
