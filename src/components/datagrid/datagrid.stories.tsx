import React from 'react';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import { DataGrid, IconMenu, MenuItem, Link, Button, ButtonGroup } from '../../index';

import { rows1 } from '../../static/data/datagrid';

const handleRowSelectionChange = (selectedRows) => {
  console.log(`onSelectionChange - selected row indexes: ${selectedRows}`);
};

export default {
  component: DataGrid,
  title: addStoryInGroup(COMPOSITIONS, 'DataGrid'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=503%3A4737',
    },
  },
};

export const DefaultStory = (args) => (
  <DataGrid {...args}>
    <DataGrid.HeaderRowOverlay
      numSelectedRowsLabel={(numSelectedRows) => (numSelectedRows === 1 ? 'sélectionné' : 'sélectionnés')}
    >
      <Button size="small" level="primary" label="Marks as paid" />
      <ButtonGroup segmented marginHorizontal={3}>
        <Button size="small" label="Book" />
        <Button size="small" label="Merge" />
      </ButtonGroup>
      <Button size="small" level="destructive" label="Delete" />
    </DataGrid.HeaderRowOverlay>

    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">
        Invoice
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">
        Amount
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="5" onClick={() => console.log('onClick: column sort')}>
        Customer
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="min-width" />
    </DataGrid.HeaderRow>
    {rows1.map((row, index) => {
      return (
        <DataGrid.BodyRow key={index} onClick={(event) => console.log('onClick:', row.column5, event)}>
          <DataGrid.Cell>
            <Link href="#" onClick={(event) => event.stopPropagation()} inherit={false}>
              {row.column5}
            </Link>{' '}
          </DataGrid.Cell>
          <DataGrid.Cell align="right" strong>
            {' '}
            {`€ ${row.column3}`}
          </DataGrid.Cell>
          <DataGrid.Cell flex="5">{row.column2}</DataGrid.Cell>
          <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
          <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
            <IconMenu
              position="top-right"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <MenuItem
                label="Duplicate row"
                onClick={(event) => {
                  console.log('onClick: duplicate row');
                  event.stopPropagation();
                }}
              />
              <MenuItem
                label="Inactive row"
                onClick={(event) => {
                  console.log('onClick: inactivate row');
                  event.stopPropagation();
                }}
              />
              <MenuItem
                label="Remove row"
                onClick={(event) => {
                  console.log('onClick: remove row');
                  event.stopPropagation();
                }}
              />
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

DefaultStory.args = {
  comparableId: 1,
  onSelectionChange: handleRowSelectionChange,
  selectable: true,
};
