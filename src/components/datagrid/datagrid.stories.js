import React from 'react';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import { boolean, number } from '@storybook/addon-knobs';
import { DataGrid, Heading4, IconMenu, MenuItem, Link, TextSmall, Button, ButtonGroup } from '../../index';

import { rows1, rows2 } from '../../static/data/datagrid';

const handleRowSelectionChange = (selectedRows) => {
  console.log(`onSelectionChange - selected row indexes: ${selectedRows}`);
};

export default {
  component: DataGrid,
  title: addStoryInGroup(COMPOSITIONS, 'DataGrids'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=503%3A4737',
    },
    info: {
      propTablesExclude: [Button, ButtonGroup, Heading4, IconMenu, Link, MenuItem, TextSmall],
    },
  },
};

export const basic = () => (
  <DataGrid
    bordered={boolean('Bordered', false)}
    selectable={boolean('Selectable', true)}
    comparableId={1}
    onSelectionChange={handleRowSelectionChange}
    processing={boolean('Processing', false)}
  >
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
  </DataGrid>
);

export const withFooter = () => (
  <DataGrid
    bordered={boolean('Bordered', false)}
    selectable={boolean('Selectable', true)}
    comparableId={1}
    onSelectionChange={handleRowSelectionChange}
    processing={boolean('Processing', false)}
  >
    <DataGrid.HeaderRowOverlay>
      <Button size="small" level="primary" label="Marks as paid" />
      <ButtonGroup segmented marginHorizontal={3}>
        <Button size="small" label="Book" />
        <Button size="small" label="Merge" />
      </ButtonGroup>
      <Button size="small" level="destructive" label="Delete" />
    </DataGrid.HeaderRowOverlay>

    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sortable sorted="asc">
        Invoice
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sortable align="right">
        Amount
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')} sortable>
        Customer
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sortable>
        Due date
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="min-width" />
    </DataGrid.HeaderRow>
    {rows2.map((row, index) => {
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
          <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
          <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
          <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
            <IconMenu position="top-right">
              <MenuItem label="Duplicate row" onClick={() => console.log('onClick: duplicate row')} />
              <MenuItem label="Inactive row" onClick={() => console.log('onClick: inactivate row')} />
              <MenuItem label="Remove row" onClick={() => console.log('onClick: remove row')} />
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

withFooter.story = {
  name: 'With footer',
};

export const withStickyColumns = () => (
  <DataGrid
    bordered={boolean('Bordered', false)}
    selectable={boolean('Selectable', true)}
    stickyFromLeft={number('Sticky from left', 3)}
    stickyFromRight={number('Sticky from right', 1)}
    comparableId={1}
    onSelectionChange={handleRowSelectionChange}
    processing={boolean('Processing', false)}
  >
    <DataGrid.HeaderRowOverlay>
      <Button size="small" level="primary" label="Marks as paid" />
      <ButtonGroup segmented marginHorizontal={3}>
        <Button size="small" label="Book" />
        <Button size="small" label="Merge" />
      </ButtonGroup>
      <Button size="small" level="destructive" label="Delete" />
    </DataGrid.HeaderRowOverlay>

    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc" sortable>
        Invoice
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right" sortable>
        Amount
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')} sortable>
        Customer
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sortable>
        Due date
      </DataGrid.HeaderCell>
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
          <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
          <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
          <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
            <IconMenu position="top-right">
              <MenuItem label="Duplicate row" onClick={() => console.log('onClick: duplicate row')} />
              <MenuItem label="Inactive row" onClick={() => console.log('onClick: inactivate row')} />
              <MenuItem label="Remove row" onClick={() => console.log('onClick: remove row')} />
            </IconMenu>
          </DataGrid.Cell>
        </DataGrid.BodyRow>
      );
    })}
  </DataGrid>
);

withStickyColumns.story = {
  name: 'With sticky columns',
};

export const advanced = () => (
  <DataGrid
    bordered={boolean('Bordered', false)}
    selectable={boolean('Selectable', true)}
    stickyFromLeft={number('Sticky from left', 3)}
    stickyFromRight={number('Sticky from right', 1)}
    comparableId={1}
    onSelectionChange={handleRowSelectionChange}
    processing={boolean('Processing', false)}
  >
    <DataGrid.HeaderRowOverlay>
      <Button size="small" level="primary" label="Marks as paid" />
      <ButtonGroup segmented marginHorizontal={3}>
        <Button size="small" label="Book" />
        <Button size="small" label="Merge" />
      </ButtonGroup>
      <Button size="small" level="destructive" label="Delete" />
    </DataGrid.HeaderRowOverlay>

    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc" sortable>
        Invoice
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right" sortable>
        Amount
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')} sortable>
        Customer
      </DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sortable>
        Due date
      </DataGrid.HeaderCell>
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
          <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
          <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
          <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
            <IconMenu position="top-right">
              <MenuItem label="Duplicate row" onClick={() => console.log('onClick: duplicate row')} />
              <MenuItem label="Inactive row" onClick={() => console.log('onClick: inactivate row')} />
              <MenuItem label="Remove row" onClick={() => console.log('onClick: remove row')} />
            </IconMenu>
          </DataGrid.Cell>
        </DataGrid.BodyRow>
      );
    })}
    <DataGrid.FooterRow backgroundColor="neutral">
      <DataGrid.Cell flex="min-width" />
      <DataGrid.Cell align="right" soft>
        <Heading4>Total Excl Btw</Heading4>
      </DataGrid.Cell>
      <DataGrid.Cell align="right" strong>
        € 13460.52
      </DataGrid.Cell>
      <DataGrid.Cell flex="2" />
      <DataGrid.Cell />
      <DataGrid.Cell flex="min-width" />
    </DataGrid.FooterRow>

    <DataGrid.FooterRow backgroundColor="neutral">
      <DataGrid.Cell flex="min-width" />
      <DataGrid.Cell align="right" soft>
        <Heading4>+ VAT</Heading4>
      </DataGrid.Cell>
      <DataGrid.Cell align="right" strong>
        € 2826.71
      </DataGrid.Cell>
      <DataGrid.Cell flex="2" />
      <DataGrid.Cell />
      <DataGrid.Cell flex="min-width" />
    </DataGrid.FooterRow>

    <DataGrid.FooterRow backgroundColor="neutral">
      <DataGrid.Cell flex="min-width" />
      <DataGrid.Cell align="right" soft>
        <Heading4>Total Incl Btw</Heading4>
      </DataGrid.Cell>
      <DataGrid.Cell align="right" strong backgroundColor="white" border="around">
        € 16287.23
      </DataGrid.Cell>
      <DataGrid.Cell flex="2" />
      <DataGrid.Cell />
      <DataGrid.Cell flex="min-width" />
    </DataGrid.FooterRow>
  </DataGrid>
);
