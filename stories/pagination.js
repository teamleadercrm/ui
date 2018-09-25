import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Island, Pagination, Button } from '../components';

storiesOf('Pagination', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Island],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Compact', () => (
    <Island style={boolean('Inverse', false) ? { backgroundColor: '#2a3b4d' } : {}}>
      <Pagination
        numPages={number('Number of pages', 21)}
        currentPage={number('Current page', 1)}
        inverse={boolean('Inverse', false)}
      >
        {({ number, text, isActive, ...others }) => {
          return (
            <Button
              level="link"
              label={text}
              disabled={isActive}
              inverse={boolean('Inverse', false)}
              size="small"
              {...others}
            />
          );
        }}
      </Pagination>
    </Island>
  ))
  .add('Normal', () => (
    <Island style={boolean('Inverse', false) ? { backgroundColor: '#2a3b4d' } : {}}>
      <Pagination
        numPages={number('Number of pages', 21)}
        currentPage={number('Current page', 1)}
        inverse={boolean('Inverse', false)}
        prevPageText="previous"
        nextPageText="next"
      >
        {({ number, text, isActive, ...others }) => {
          return (
            <Button
              level="link"
              label={text}
              disabled={isActive}
              inverse={boolean('Inverse', false)}
              size="small"
              {...others}
            />
          );
        }}
      </Pagination>
    </Island>
  ));
