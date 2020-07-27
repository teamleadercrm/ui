import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, number, select } from '@storybook/addon-knobs';
import {
  IllustrationInvoices120X120Static,
  IllustrationMeetings120X120Static,
  IllustrationDeals120X120Static,
  IllustrationContacts120X120Static,
} from '@teamleader/ui-illustrations';
import { Island, IslandGroup, Link, TextBody, TextSmall, Heading3 } from '../../index';
import { IconChevronRightSmallOutline } from '@teamleader/ui-icons';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white'];
const directions = ['horizontal', 'vertical'];
const sizes = ['small', 'medium', 'large'];

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

const islandAmountOptions = {
  range: true,
  min: 1,
  max: islandData.length,
  step: 1,
};

export default {
  component: Island,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Island'),

  parameters: {
    info: {
      propTablesExclude: [
        TextBody,
        TextSmall,
        Heading3,
        Link,
        IconChevronRightSmallOutline,
        IllustrationInvoices120X120Static,
        IllustrationMeetings120X120Static,
        IllustrationDeals120X120Static,
      ],
    },
  },
};

export const basic = () => (
  <Island color={select('Color', colors, 'white')} dark={boolean('Dark', false)} size={select('Size', sizes, 'medium')}>
    <TextBody>I am an island.</TextBody>
  </Island>
);

export const group = () => (
  <IslandGroup
    dark={boolean('Dark', false)}
    color={select('Color', colors, 'white')}
    direction={select('Direction', directions, directions[0])}
    size={select('Size', sizes, 'medium')}
  >
    {islandData
      .slice(0, number('Island amount', 3, islandAmountOptions))
      .map(({ illustration, title, text }, index) => (
        <Island key={index} alignItems="center" display="flex" flex={1} flexDirection="column" textAlign="center">
          {illustration}
          <Heading3 marginBottom={3}>{title}</Heading3>
          <TextBody>{text}</TextBody>
        </Island>
      ))}
  </IslandGroup>
);

group.story = {
  name: 'IslandGroup',
};
