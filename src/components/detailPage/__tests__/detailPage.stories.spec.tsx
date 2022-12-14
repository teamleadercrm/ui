import React from 'react';

import DetailPage from '../DetailPage';
import { TextBody } from '../../typography';
import StatusLabel from '../../statusLabel';
import Button from '../../button';
import { ComponentMeta } from '@storybook/react';

export default {
  component: DetailPage,
  title: 'DetailPage',
} as ComponentMeta<typeof DetailPage>;

export const Main = () => (
  <DetailPage>
    <DetailPage.Header
      backLinkProps={{
        element: 'a',
        children: 'Back to overview',
      }}
      title="I am the detail page title"
      titleSuffix={<StatusLabel color="violet">Draft</StatusLabel>}
    >
      <Button level="primary">Book</Button>
    </DetailPage.Header>
    <DetailPage.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </DetailPage.Body>
  </DetailPage>
);
