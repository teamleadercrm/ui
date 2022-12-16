import React from 'react';
import { render } from '@testing-library/react';
import DataGrid from '../';

describe('Component - Datagrid', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <DataGrid>
        <DataGrid.HeaderRow>
          <DataGrid.HeaderCell>ID</DataGrid.HeaderCell>
          <DataGrid.HeaderCell>Name</DataGrid.HeaderCell>
        </DataGrid.HeaderRow>
        <DataGrid.BodyRow>
          <DataGrid.Cell>1</DataGrid.Cell>
          <DataGrid.Cell>Michael Scott</DataGrid.Cell>
        </DataGrid.BodyRow>
        <DataGrid.BodyRow>
          <DataGrid.Cell>1</DataGrid.Cell>
          <DataGrid.Cell>Dwight Schrute</DataGrid.Cell>
        </DataGrid.BodyRow>
        <DataGrid.FooterRow>
          <DataGrid.Cell>2 rows in total</DataGrid.Cell>
        </DataGrid.FooterRow>
      </DataGrid>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
