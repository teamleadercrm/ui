import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Box, Heading2, Section, TextTiny } from '../components';
import { baseStyles } from '../.storybook/styles';
import * as Icons from '@teamleader/ui-icons';

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
  .addDecorator(styles({ ...baseStyles }))
  .add('all sizes', () => (
    <Box padding={5} style={{ width: '100vw' }}>
      <Section><Heading2>Small (14x14)</Heading2></Section>
      <Box style={gridStyles}>
        {
          Object.keys(Icons).map((key, index) => {
            if(key.includes('Small')){
              const Icon = Icons[key];

              return (
                <Box element="span" key={index} style={itemStyles} padding={3}>
                  <Icon/>
                  <TextTiny marginLeft={3} style={{ display: 'inline-block' }}>{key}</TextTiny>
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
              const Icon = Icons[key];

              return (
                <Box element="span" key={index} style={itemStyles} padding={3}>
                  <Icon/>
                  <TextTiny marginLeft={3} style={{ display: 'inline-block' }}>{key}</TextTiny>
                </Box>
              );
            }
          })
        }
      </Box>
    </Box>
  ));
