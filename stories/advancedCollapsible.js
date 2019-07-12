import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { AdvancedCollapsible, TextBody } from '../src';

const colors = ['neutral', 'teal'];
const sizes = ['small', 'medium', 'large'];

storiesOf('AdvancedCollapsible', module)
  .addParameters({
    info: {
      propTablesExclude: [TextBody],
    },
  })
  .add('Basic', () => (
    <AdvancedCollapsible
      color={select('Color', colors, 'teal')}
      size={select('Size', sizes, 'medium')}
      title={text('Title', 'Click this title to expand the content')}
    >
      <TextBody color="teal">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        dolor sit amet.
      </TextBody>
    </AdvancedCollapsible>
  ));
