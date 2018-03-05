import React from 'react';
import PropTable from "./components/propTable";
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Badge, TextDisplay } from '../components';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';

const iconPositions = ['left', 'right'];

storiesOf('Badge', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('inline', () => (
    <TextDisplay>
      I'm display text with a
      <Badge
        disabled={boolean('Disabled', false)}
        inherit={boolean('Inherit', true)}
        inverse={boolean('Inverse', false)}
      >badge</Badge>
      inside.
    </TextDisplay>
  ))
  .add('standalone', () => (
    <Badge
      disabled={boolean('Disabled', false)}
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
    >I'm a badge</Badge>
  ))
  .add('with icon', () => (
    <Badge
      disabled={boolean('Disabled', false)}
      icon={<IconBuildingSmallOutline/>}
      iconPlacement={select('Icon placement', iconPositions, 'left')}
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
    >I'm a badge</Badge>
  ))
  .add('with custom element', () => (
    <Badge
      disabled={boolean('Disabled', false)}
      element="a"
      href="https://teamleader.eu"
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
    >I'm a badge</Badge>
  ));
