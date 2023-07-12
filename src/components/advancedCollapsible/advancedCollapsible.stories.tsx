import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AdvancedCollapsible, TextBody } from '../../index';

export default {
  component: AdvancedCollapsible,
  title: 'Mid level blocks / AdvancedCollapsible',
} as ComponentMeta<typeof AdvancedCollapsible>;

export const Basic: ComponentStory<typeof AdvancedCollapsible> = (args) => (
  <AdvancedCollapsible {...args}>
    <TextBody color="teal">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
      duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </TextBody>
  </AdvancedCollapsible>
);

Basic.args = {
  title: 'Click this title to expand the content',
};
