import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Avatar, AvatarStack, Counter } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

import Image1 from '../static/avatars/1.png';
import Image2 from '../static/avatars/2.png';
import Image3 from '../static/avatars/3.png';
import Image4 from '../static/avatars/4.png';
import Image5 from '../static/avatars/5.png';
import Image6 from '../static/avatars/6.png';
import Image7 from '../static/avatars/7.png';
import Image8 from '../static/avatars/8.png';

const avatars = [
  { image: Image1, count: 21, color: 'ruby', maxCount: 20 },
  { image: Image2, count: 15, color: 'neutral', inactive: true },
  { image: Image3, count: 5, color: 'neutral' },
  { image: Image4, count: 3, color: 'ruby' },
  { image: Image5, count: 0, color: 'ruby' },
  { image: Image6, count: 4, color: 'ruby' },
  { image: Image7, count: 5, color: 'neutral', inactive: true },
  { image: Image8, count: 2, color: 'neutral', inactive: true },
  { image: Image1, count: 8, color: 'ruby' },
  { image: Image2, count: 0, color: 'ruby' },
];

storiesOf('Avatars', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('sizes', () => (
    <div>
      <Avatar image={avatars[0].image} size="tiny" marginHorizontal={4} />
      <Avatar image={avatars[0].image} size="small" marginHorizontal={4} />
      <Avatar image={avatars[0].image} size="medium" marginHorizontal={4} />
    </div>
  ))
  .add('with counter', () => (
    <div>
      <Avatar
        counter={<Counter color="ruby" />}
        image={avatars[0].image}
        size="medium"
        marginHorizontal={4}
      />
      <Avatar
        counter={
          <Counter
            color="ruby"
            count={avatars[0].count}
            maxCount={avatars[0].maxCount}
          />
        }
        image={avatars[0].image}
        size="medium"
        marginHorizontal={4}
      />
    </div>
  ))
  .add('stacked', () => (
    <div>
      <AvatarStack
        direction="horizontal"
        displayMax={5}
        inverse={false}
        onOverflowClick={action('clicked on AvatarStack 1 overflow')}
        size="medium"
      >
        {avatars.map(({ image, count, color, inactive, maxCount }, index) => (
          <Avatar
            counter={
              <Counter
                color={color}
                count={count}
                inactive={inactive}
                maxCount={maxCount}
                size="small"
              />
            }
            key={index}
            image={image}
            size="medium"
          />
        ))}
      </AvatarStack>

      <AvatarStack
        direction="vertical"
        displayMax={3}
        inverse={false}
        onOverflowClick={action('clicked on AvatarStack 2 overflow')}
        size="medium"
        marginTop={8}
      >
        {avatars.map(({ image, color, inactive }, index) => (
          <Avatar
            counter={
              <Counter
                color={color}
                inactive={inactive}
                size="medium"
              />
            }
            key={index}
            image={image}
            size="medium"
          />
        ))}
      </AvatarStack>
    </div>
  ));
