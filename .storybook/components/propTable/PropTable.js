import React from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../../../src/components/typography';
import Tooltip from '../../../src/components/tooltip';
import Badge from '../../../src/components/badge';
import DataGrid from '../../../src/components/datagrid';
import Island from '../../../src/components/island';

const Red = (props) => <span style={{ color: 'red' }} {...props} />;
const TooltippedBadge = Tooltip(Badge);

const renderPropTypeValues = (propType) => {
  if (!propType) {
    return;
  }

  if (typeof propType !== 'object' || typeof propType === 'string') {
    return propType;
  }

  if (propType.name && propType.name === 'instanceOf') {
    return propType.value;
  }

  if (!propType.value || typeof propType.value === 'string') {
    return propType.name;
  }

  const values = propType.value.map((propTypeValue, index) => {
    return <TextSmall key={index}>{propTypeValue.value || propTypeValue.name}</TextSmall>;
  });

  return (
    <TooltippedBadge tooltip={values} tooltipColor="neutral" tooltipPosition="right" tooltipSize="small">
      {propType.name}
    </TooltippedBadge>
  );
};

const PropTable = ({ propDefinitions }) => {
  const props = propDefinitions.map(({ property, propType, required, description, defaultValue }) => {
    return (
      <DataGrid.BodyRow key={property}>
        <DataGrid.Cell strong>
          {property}
          {required ? <Red>*</Red> : null}
        </DataGrid.Cell>
        <DataGrid.Cell soft>{renderPropTypeValues(propType)}</DataGrid.Cell>
        <DataGrid.Cell soft>{defaultValue}</DataGrid.Cell>
        <DataGrid.Cell flex="2" soft>
          {description}
        </DataGrid.Cell>
      </DataGrid.BodyRow>
    );
  });

  return (
    <Island marginVertical={4} overflow="hidden" padding={0}>
      <DataGrid>
        <DataGrid.HeaderRow>
          <DataGrid.HeaderCell>Name</DataGrid.HeaderCell>
          <DataGrid.HeaderCell>Type</DataGrid.HeaderCell>
          <DataGrid.HeaderCell>Default</DataGrid.HeaderCell>
          <DataGrid.HeaderCell flex="2">Description</DataGrid.HeaderCell>
        </DataGrid.HeaderRow>
        {props}
      </DataGrid>
    </Island>
  );
};

PropTable.propTypes = {
  propDefinitions: PropTypes.array,
};

export default PropTable;
