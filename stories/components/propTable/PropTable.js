import React from 'react';
import { Badge, DataGrid, TextSmall, Tooltip } from '../../../components';

const Red = props => <span style={{ color: "red" }} {...props} />;
const TooltippedBadge = Tooltip(Badge);

const renderPropTypeValues = (propType) => {
  if(typeof propType === 'string') {
    return propType;
  }
  
  if(propType.name === 'instanceOf') {
    return propType.value;
  }

  if(!propType.value || typeof propType.value === 'string') {
    return propType.name;
  }

  const values = propType.value.map((propTypeValue, index) => {
    return <TextSmall key={index}>{propTypeValue.value || propTypeValue.name}</TextSmall>;
  });

  return (
    <TooltippedBadge
      tooltip={values}
      tooltipColor="neutral"
      tooltipPosition="right"
      tooltipSize="small"
    >
      {propType.name}
    </TooltippedBadge>
  );
};

const PropTable = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <DataGrid.BodyRow key={property}>
          <DataGrid.Cell strong>
            {property}
            {required ? <Red>*</Red> : null}
          </DataGrid.Cell>
          <DataGrid.Cell soft>{renderPropTypeValues(propType)}</DataGrid.Cell>
          <DataGrid.Cell soft>{defaultValue}</DataGrid.Cell>
          <DataGrid.Cell flex="2" soft>{description}</DataGrid.Cell>
        </DataGrid.BodyRow>
      );
    }
  );

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

export default PropTable;
