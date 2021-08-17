import React from 'react';

import DataGrid from './DataGrid';
import Link from '../link';
import { IconMenu, MenuItem } from '../menu';
import { rows1 } from '../../static/data/datagrid';

export default {
  component: DataGrid,
  title: 'DataGrid',
};

export const Main = () => (
  <DataGrid selectable bordered>
    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell sorted="asc">Invoice</DataGrid.HeaderCell>
      <DataGrid.HeaderCell align="right">Amount</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="5">Customer</DataGrid.HeaderCell>
      <DataGrid.HeaderCell>Due date</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="min-width" />
    </DataGrid.HeaderRow>
    {rows1.map((row, index) => {
      return (
        <DataGrid.BodyRow key={index}>
          <DataGrid.Cell>
            <Link href="#" inherit={false}>
              {row.column5}
            </Link>
          </DataGrid.Cell>
          <DataGrid.Cell align="right" strong>
            {`€ ${row.column3}`}
          </DataGrid.Cell>
          <DataGrid.Cell flex="5">{row.column2}</DataGrid.Cell>
          <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
          <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
            <IconMenu position="top-right">
              <MenuItem label="Action" />
            </IconMenu>
          </DataGrid.Cell>
        </DataGrid.BodyRow>
      );
    })}
    <DataGrid.FooterRow backgroundColor="neutral">
      <DataGrid.Cell align="right">{`${rows1.length} rows in total`}</DataGrid.Cell>
    </DataGrid.FooterRow>
  </DataGrid>
);
