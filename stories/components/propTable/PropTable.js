import React from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../../../src/components/typography';
import Tooltip from '../../../src/components/tooltip';
import Badge from '../../../src/components/badge';
import DataGrid from '../../../src/components/datagrid';

const Red = props => <span style={{ color: 'red' }} {...props} />;
const TooltippedBadge = Tooltip(Badge);

const renderPropTypeValues = propType => {
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
    <DataGrid marginVertical={4}>
      <DataGrid.HeaderRow>
        <DataGrid.HeaderCell>name</DataGrid.HeaderCell>
        <DataGrid.HeaderCell>type</DataGrid.HeaderCell>
        <DataGrid.HeaderCell>default</DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="2">description</DataGrid.HeaderCell>
      </DataGrid.HeaderRow>
      {props}
    </DataGrid>
  );
};

PropTable.propTypes = {
  propDefinitions: PropTypes.array,
};

export default PropTable;
