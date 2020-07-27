import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select, text } from '@storybook/addon-knobs';
import LabelValuePair from './LabelValuePair';
import LabelValuePairGroup from './LabelValuePairGroup';
import Badge from '../badge';
import Link from '../link';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';
import { TextBodyCompact } from '../typography';

const alignValueValues = ['left', 'right'];

export default {
  component: LabelValuePair,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'LabelValuePair'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3469%3A366',
    },
  },
};

export const labelValuePair = () => (
  <LabelValuePair alignValue={select('Align value', alignValueValues, 'left')} inline={boolean('Inline', true)}>
    <LabelValuePair.Label>{text('Label', 'I am a label')}</LabelValuePair.Label>
    <LabelValuePair.Value>
      <TextBodyCompact color="teal">with a value next to it</TextBodyCompact>
    </LabelValuePair.Value>
  </LabelValuePair>
);

labelValuePair.story = {
  name: 'LabelValuePair',

  parameters: {
    info: {
      propTables: [LabelValuePair, LabelValuePair.Label, LabelValuePair.Value],
    },
  },
};

export const labelValuePairGroup = () => (
  <LabelValuePairGroup title="I'm a label pair group">
    <LabelValuePair alignValue={select('Align value', alignValueValues, 'left')} inline={boolean('Inline', true)}>
      <LabelValuePair.Label>I am a label</LabelValuePair.Label>
      <LabelValuePair.Value>
        <TextBodyCompact color="teal">With just a textual value</TextBodyCompact>
      </LabelValuePair.Value>
    </LabelValuePair>
    <LabelValuePair alignValue={select('Align value', alignValueValues, 'left')} inline={boolean('Inline', true)}>
      <LabelValuePair.Label>Another label, but a very long one this time</LabelValuePair.Label>
      <LabelValuePair.Value paddingVertical={0}>
        <Badge icon={<IconBuildingSmallOutline />} size="medium">
          With a Company Badge
        </Badge>
      </LabelValuePair.Value>
    </LabelValuePair>
    <LabelValuePair alignValue={select('Align value', alignValueValues, 'left')} inline={boolean('Inline', true)}>
      <LabelValuePair.Label>Here comes a money value</LabelValuePair.Label>
      <LabelValuePair.Value>
        <TextBodyCompact color="teal">€22.359</TextBodyCompact>
      </LabelValuePair.Value>
    </LabelValuePair>
    <LabelValuePair alignValue={select('Align value', alignValueValues, 'left')} inline={boolean('Inline', true)}>
      <LabelValuePair.Label>E-mail</LabelValuePair.Label>
      <LabelValuePair.Value>
        <TextBodyCompact maxLines={1}>
          <Link
            href="mailto:john.doe@gmail.com"
            inherit={false}
            onClick={() => console.log('Clicked on email link')}
            title="john.doe@gmail.com"
          >
            john.doe@gmail.com
          </Link>
        </TextBodyCompact>
      </LabelValuePair.Value>
    </LabelValuePair>
    <LabelValuePair alignValue={select('Align value', alignValueValues, 'left')} inline={boolean('Inline', true)}>
      <LabelValuePair.Label>Homepage</LabelValuePair.Label>
      <LabelValuePair.Value>
        <TextBodyCompact maxLines={1}>
          <Link
            href="https://www.a-very-long-url-to-this-website"
            inherit={false}
            title="https://www.a-very-long-url-to-this-website"
          >
            https://www.a-very-long-url-to-this-website
          </Link>
        </TextBodyCompact>
      </LabelValuePair.Value>
    </LabelValuePair>
  </LabelValuePairGroup>
);

labelValuePairGroup.story = {
  name: 'LabelValuePairGroup',

  parameters: {
    info: {
      propTables: [LabelValuePairGroup],
    },
  },
};
