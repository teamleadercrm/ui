import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Label, Select } from '../components';
import { groupedOptions } from "../static/data/select";

const sizes = ['small', 'medium', 'large'];

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
    <Label inverse={boolean('Inverse', false)}>
      Select something
      <Select
        closeMenuOnSelect={boolean('Close menu on select', true)}
        inverse={boolean('Inverse', false)}
        isClearable={boolean('Clearable', false)}
        isDisabled={boolean('Disabled', false)}
        isMulti={boolean('Multi select', false)}
        isSearchable={boolean('Searchable', false)}
        options={groupedOptions}
        placeholder="Select your favourite(s)"
        size={select('Size', sizes, 'medium')}
        hideSelectedOptions={boolean('Hide selected options', true)}
      />
    </Label>
  ));
