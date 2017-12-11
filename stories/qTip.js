import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Store, State } from '@sambego/storybook-state';
import { Island, Link, QTip, TextSmall } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';

const store = new Store({
  closed: false,
});

const updateState = () => {
  store.set({ closed: !store.get('closed') });
};

storiesOf('Q-tip', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('Default', () => (
    <Island paddingHorizontal={0} paddingVertical={6} style={{ width: '500px' }}>
      <State store={store}>
        <QTip onChange={updateState} icon={<IconIdeaMediumOutline />}>
          <TextSmall color="teal">Lorem ipsum dolor sit amet, consectetur <Link href="#" inherit={false}>adipiscing</Link> elit.</TextSmall>
        </QTip>
      </State>
    </Island>
  ))
  .add('Highlighted', () => (
    <Island paddingHorizontal={0} paddingVertical={6} style={{ width: '500px' }}>
      <State store={store}>
        <QTip highlighted onChange={updateState} icon={<IconIdeaMediumOutline />}>
          <TextSmall color="teal">Lorem ipsum dolor sit amet, consectetur  <Link href="#" inherit={false}>adipiscing</Link> elit.</TextSmall>
        </QTip>
      </State>
    </Island>
  ));
