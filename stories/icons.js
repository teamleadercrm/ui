import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, select } from "@storybook/addon-knobs/react";
import styles from '@sambego/storybook-styles';
import { Box, Heading2, Icon, Section, TextSmall } from '../components';
import { baseStyles } from '../.storybook/styles';
import * as Icons from '@teamleader/ui-icons';

const colors = ['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

const gridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

const itemStyles = {
  display: 'inline-block',
  width: '320px',
  whitespace: 'nowrap'
};

storiesOf('Icons', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles }))
  .add('all sizes', () => (
    <Box padding={5} style={{ width: '100vw' }}>
      <Section><Heading2>Small (14x14)</Heading2></Section>
      <Box style={gridStyles}>
        {
          Object.keys(Icons).map((key, index) => {
            if(key.includes('Small')){
              const IconToRender = Icons[key];

              return (
                <Box element="span" key={index} style={itemStyles} padding={3}>
                  <Icon
                    color={select('Color', colors, 'teal')}
                    tint={select('Tint', tints, 'dark')}
                    opacity={number('Opacity', 0.84, {
                      range: true,
                      min: 0,
                      max: 1,
                      step: 0.01,
                    })}
                  >
                    <IconToRender/>
                  </Icon>
                  <TextSmall marginLeft={3} style={{ display: 'inline-block' }}>{key}</TextSmall>
                </Box>
              );
            }
          })
        }
      </Box>

      <Section marginTop={4}><Heading2>Medium (24x24)</Heading2></Section>
      <Box style={gridStyles}>
        {
          Object.keys(Icons).map((key, index) => {
            if(key.includes('Medium')){
              const IconToRender = Icons[key];

              return (
                <Box element="span" key={index} style={itemStyles} padding={3}>
                  <Icon
                    color={select('Color', colors, 'teal')}
                    tint={select('Tint', tints, 'dark')}
                    opacity={number('Opacity', 0.84, {
                      range: true,
                      min: 0,
                      max: 1,
                      step: 0.01,
                    })}
                  >
                    <IconToRender/>
                  </Icon>
                  <TextSmall marginLeft={3} style={{ display: 'inline-block' }}>{key}</TextSmall>
                </Box>
              );
            }
          })
        }
      </Box>
    </Box>
  ));
