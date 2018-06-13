import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { Select } from '../components';
import selectOptions from "../static/data/select";

storiesOf('Select', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Select
      closeMenuOnSelect={boolean('Close menu on select', true)}
      disabled={boolean('Disabled', false)}
      isClearable={boolean('Clearable', false)}
      isMulti={boolean('Multi select', false)}
      isSearchable={boolean('Searchable', false)}
      options={selectOptions}
      placeholder="Select your favourite(s)"
      hideSelectedOptions={boolean('Hide selected options', true)}
    />
  ));
