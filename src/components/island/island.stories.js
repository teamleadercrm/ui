import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs/react';
import {
  IllustrationInvoices120X120Static,
  IllustrationMeetings120X120Static,
  IllustrationDeals120X120Static,
} from '@teamleader/ui-illustrations';
import { Island, IslandGroup, Link, TextBody, TextSmall, Heading3 } from '../../index';
import { IconChevronRightSmallOutline } from '@teamleader/ui-icons';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white'];
const sizes = ['small', 'medium', 'large'];

export default {
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

export const segmentedHorizontal = () => (
  <IslandGroup
    dark={boolean('Dark', false)}
    color={select('Color', colors, 'white')}
    size={select('Size', sizes, 'medium')}
  >
    <Island>
      <IllustrationInvoices120X120Static />
      <Heading3 marginBottom={3}>Invoices</Heading3>
      <TextBody>Send invoices to your clients straight from Teamleader.</TextBody>
    </Island>
    <Island>
      <IllustrationMeetings120X120Static />
      <Heading3 marginBottom={3}>Meetings</Heading3>
      <TextBody>Plan meetings and see them straight away in your favourite calendar.</TextBody>
    </Island>
    <Island>
      <IllustrationDeals120X120Static />
      <Heading3 marginBottom={3}>Deals</Heading3>
      <TextBody>Keep track of all your deals with our fully integrated module.</TextBody>
    </Island>
  </IslandGroup>
);

segmentedHorizontal.story = {
  name: 'Segmented horizontal',
};

export const segmentedVertical = () => (
  <IslandGroup
    dark={boolean('Dark', false)}
    color={select('Color', colors, 'neutral')}
    direction="vertical"
    size={select('Size', sizes, 'medium')}
  >
    <Island>
      <TextBody>kanye.west@goodmusic.com</TextBody>
    </Island>
    <Island display="flex" alignItems="center">
      <IconChevronRightSmallOutline />
      <TextBody marginHorizontal={2}>
        <Link href="https://www.teamleader.be" target="_blank" inherit={false}>
          Good music Ltd.
        </Link>
      </TextBody>
      <TextSmall color="neutral">Company</TextSmall>
    </Island>
  </IslandGroup>
);

segmentedVertical.story = {
  name: 'Segmented vertical',
};
