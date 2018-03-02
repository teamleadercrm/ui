import React from 'react';
import { DataGrid } from '../../../components';

const Red = props => <span style={{ color: "red" }} {...props} />;

const PropTable = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <DataGrid.BodyRow key={property}>
          <DataGrid.Cell strong>
            {property}
            {required ? <Red>*</Red> : null}
          </DataGrid.Cell>
          <DataGrid.Cell soft>{propType.name}</DataGrid.Cell>
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
