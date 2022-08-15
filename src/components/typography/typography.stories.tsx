import React from 'react';
import { addStoryInGroup, FOUNDATION } from '../../../.storybook/utils';
import { number, select } from '@storybook/addon-knobs';
import {
  COLORS,
  TINTS,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Marker,
  Monospaced,
  TextBody,
  TextBodyCompact,
  TextDisplay,
  TextSmall,
  UITextDisplay,
  UITextBody,
  UITextSmall,
} from '../../index';

export default {
  component: Heading1,
  title: addStoryInGroup(FOUNDATION, 'Typography'),
};

export const headings = () => {
  const color = select('Color', COLORS, 'teal');
  const maxLines = number('Max lines', undefined);
  const tint = select('Tint', TINTS, 'darkest');

  return (
    <>
      <Heading1 color={color} maxLines={maxLines} tint={tint}>
        Heading 1 / font-size: 24px / line-height: 30px / weight: bold (700) / tracking: 0
      </Heading1>
      <Heading2 color={color} maxLines={maxLines} tint={tint} marginTop={4}>
        Heading 2 / font-size: 18px / line-height: 24px / weight: medium (500) / tracking: 0
      </Heading2>
      <Heading3 color={color} maxLines={maxLines} tint={tint} marginTop={4}>
        Heading 3 / font-size: 16px / line-height: 21px / weight: medium (500) / tracking: 0
      </Heading3>
      <Heading4 color={color} maxLines={maxLines} tint={tint} marginTop={4}>
        Heading 4 / font-size: 12px / line-height: 18px / weight: bold (700) / tracking: 0.6px
      </Heading4>
      <Heading5 color={color} maxLines={maxLines} tint={tint} marginTop={4}>
        Heading 5 / font-size: 14px / line-height: 18px / weight: semi bold (600) / tracking: 0
      </Heading5>
    </>
  );
};

export const text = () => {
  const color = select('Color', COLORS, 'teal');
  const maxLines = number('Max lines', undefined);
  const tint = select('Tint', TINTS, 'darkest');

  return (
    <>
      <TextDisplay color={color} maxLines={maxLines} tint={tint}>
        <strong>Text display</strong> / font-size: 16px / line-height: 24px / weight: regular (400) / tracking: 0
      </TextDisplay>
      <TextBody color={select('Color', COLORS, 'teal')} maxLines={maxLines} tint={tint} marginTop={4}>
        <strong>Text body</strong> / font-size: 14px / line-height: 21px / weight: regular (400) / tracking: 0
      </TextBody>
      <TextBodyCompact color={select('Color', COLORS, 'teal')} maxLines={maxLines} tint={tint} marginTop={4}>
        <strong>Text body compact</strong> / font-size: 14px / line-height: 18px / weight: regular (400) / tracking: 0
      </TextBodyCompact>
      <TextSmall color={select('Color', COLORS, 'teal')} maxLines={maxLines} tint={tint} marginTop={4}>
        <strong>Text small</strong> / font-size: 12px / line-height: 18px / weight: regular (400) / tracking: 0
      </TextSmall>
    </>
  );
};

export const UIText = () => {
  const color = select('Color', COLORS, 'teal');
  const maxLines = number('Max lines', undefined);
  const tint = select('Tint', TINTS, 'darkest');

  return (
    <>
      <UITextDisplay color={color} maxLines={maxLines} tint={tint}>
        <strong>UI Text display</strong> / font-size: 16px / line-height: 24px / weight: medium (500) / tracking: 0
      </UITextDisplay>
      <UITextBody color={color} maxLines={maxLines} tint={tint} marginTop={4}>
        <strong>UI Text body</strong> / font-size: 14px / line-height: 18px / weight: medium (500) / tracking: 0
      </UITextBody>
      <UITextSmall color={color} maxLines={maxLines} tint={tint} marginTop={4}>
        <strong>UIText small</strong> / font-size: 12px / line-height: 18px / weight: medium (500) / tracking: 0
      </UITextSmall>
    </>
  );
};

export const monospaced = () => {
  const color = select('Color', COLORS, 'teal');
  const maxLines = number('Max lines', undefined);
  const tint = select('Tint', TINTS, 'darkest');

  return (
    <>
      <Heading1 color={color} maxLines={maxLines} tint={tint}>
        <Monospaced>1234567890</Monospaced>
      </Heading1>
      <Heading2 color={color} maxLines={maxLines} tint={tint} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </Heading2>
      <Heading3 color={color} maxLines={maxLines} tint={tint} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </Heading3>
      <Heading4 color={color} maxLines={maxLines} tint={tint} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </Heading4>
      <Heading5 color={color} maxLines={maxLines} tint={tint} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </Heading5>
      <TextDisplay color={color} maxLines={maxLines} tint={tint} marginTop={6}>
        <Monospaced>1234567890</Monospaced>
      </TextDisplay>
      <TextBody color={color} maxLines={maxLines} tint={tint} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </TextBody>
      <TextSmall color={select('Color', COLORS, 'teal')} maxLines={maxLines} tint={tint} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </TextSmall>
    </>
  );
};

export const marker = () => (
  <Heading3 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')}>
    We can use our <Marker>Marker component</Marker> to highlight some keywords
  </Heading3>
);

marker.parameters = {
  info: {
    propTables: [Marker],
  },
};
