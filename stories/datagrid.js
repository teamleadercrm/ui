import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs/react';
import {
  DataGrid,
  Heading4,
  IconMenu,
  MenuItem,
  Link,
  StatusBullet,
  TextSmall,
  Tooltip,
  Button,
  ButtonGroup,
} from '../src';

import { rows1, rows2 } from './static/data/datagrid';

const TooltippedStatusBullet = Tooltip(StatusBullet);

const handleRowSelectionChange = selectedRows => {
  console.log(`onSelectionChange - selected row indexes: ${selectedRows}`);
};

storiesOf('DataGrids', module)
  .addParameters({
    info: {
      propTablesExclude: [Button, ButtonGroup, Heading4, IconMenu, Link, MenuItem, TextSmall],
    },
  })
  .add('Basic', () => (
    <DataGrid
      bordered={boolean('bordered', false)}
      selectable={boolean('Selectable', true)}
      comparableId={1}
      onSelectionChange={handleRowSelectionChange}
      checkboxSize={select('Checkbox size', ['small', 'medium', 'large'], 'small')}
      processing={boolean('Processing', false)}
    >
      <DataGrid.HeaderRowOverlay
        numSelectedRowsLabel={numSelectedRows => (numSelectedRows === 1 ? 'sélectionné' : 'sélectionnés')}
      >
        <Button size="small" level="primary" label="Marks as paid" />
        <ButtonGroup segmented marginHorizontal={3}>
          <Button size="small" label="Book" />
          <Button size="small" label="Merge" />
        </ButtonGroup>
        <Button size="small" level="destructive" label="Delete" />
      </DataGrid.HeaderRowOverlay>

      <DataGrid.HeaderRow>
        <DataGrid.HeaderCell flex="min-width" />
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">
          Invoice
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">
          Amount
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>
          Customer
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="min-width" />
      </DataGrid.HeaderRow>
      {rows1.map((row, index) => {
        return (
          <DataGrid.BodyRow key={index}>
            <DataGrid.Cell align="center" flex="min-width">
              <TooltippedStatusBullet
                color={row.column1}
                tooltip={<TextSmall>Overdue</TextSmall>}
                tooltipColor={row.column1}
                tooltipSize="small"
                size="medium"
              />
            </DataGrid.Cell>
            <DataGrid.Cell>
              <Link href="#" inherit={false}>
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
                <MenuItem onClick={() => console.log('onClick: delete row')}>Duplicate row</MenuItem>
                <MenuItem onClick={() => console.log('onClick: delete row')}>Inactive row</MenuItem>
                <MenuItem onClick={() => console.log('onClick: delete row')}>Remove row</MenuItem>
              </IconMenu>
            </DataGrid.Cell>
          </DataGrid.BodyRow>
        );
      })}
    </DataGrid>
  ))
  .add('with footer', () => (
    <DataGrid
      bordered={boolean('bordered', false)}
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
        <DataGrid.HeaderCell flex="min-width" />
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">
          Invoice
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">
          Amount
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>
          Customer
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="min-width" />
      </DataGrid.HeaderRow>
      {rows2.map((row, index) => {
        return (
          <DataGrid.BodyRow key={index}>
            <DataGrid.Cell align="center" flex="min-width">
              <TooltippedStatusBullet
                color={row.column1}
                tooltip={<TextSmall>Overdue</TextSmall>}
                tooltipColor={row.column1}
                tooltipSize="small"
                size="medium"
              />
            </DataGrid.Cell>
            <DataGrid.Cell>
              <Link href="#" inherit={false}>
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
                <MenuItem onClick={() => console.log('onClick: delete row')}>Duplicate row</MenuItem>
                <MenuItem onClick={() => console.log('onClick: delete row')}>Inactive row</MenuItem>
                <MenuItem onClick={() => console.log('onClick: delete row')}>Remove row</MenuItem>
              </IconMenu>
            </DataGrid.Cell>
          </DataGrid.BodyRow>
        );
      })}
      <DataGrid.FooterRow backgroundColor="neutral">
        <DataGrid.Cell align="right">{`${rows1.length} rows in total`}</DataGrid.Cell>
      </DataGrid.FooterRow>
    </DataGrid>
  ))
  .add('with sticky columns', () => (
    <DataGrid
      bordered={boolean('bordered', false)}
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
        <DataGrid.HeaderCell flex="min-width" />
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">
          Invoice
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">
          Amount
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>
          Customer
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="min-width" />
      </DataGrid.HeaderRow>
      {rows1.map((row, index) => {
        return (
          <DataGrid.BodyRow key={index}>
            <DataGrid.Cell align="center" flex="min-width">
              <TooltippedStatusBullet
                color={row.column1}
                tooltip={<TextSmall>Overdue</TextSmall>}
                tooltipColor={row.column1}
                tooltipSize="small"
                size="medium"
              />
            </DataGrid.Cell>
            <DataGrid.Cell>
              <Link href="#" inherit={false}>
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
                <MenuItem onClick={() => console.log('onClick: delete row')}>Duplicate row</MenuItem>
                <MenuItem onClick={() => console.log('onClick: delete row')}>Inactive row</MenuItem>
                <MenuItem onClick={() => console.log('onClick: delete row')}>Remove row</MenuItem>
              </IconMenu>
            </DataGrid.Cell>
          </DataGrid.BodyRow>
        );
      })}
    </DataGrid>
  ))
  .add('Advanced', () => (
    <DataGrid
      bordered={boolean('bordered', false)}
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
        <DataGrid.HeaderCell flex="min-width" />
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">
          Invoice
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">
          Amount
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>
          Customer
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex="min-width" />
      </DataGrid.HeaderRow>
      {rows1.map((row, index) => {
        return (
          <DataGrid.BodyRow key={index}>
            <DataGrid.Cell align="center" flex="min-width">
              <TooltippedStatusBullet
                color={row.column1}
                tooltip={<TextSmall>Overdue</TextSmall>}
                tooltipColor={row.column1}
                tooltipSize="small"
                size="medium"
              />
            </DataGrid.Cell>
            <DataGrid.Cell>
              <Link href="#" inherit={false}>
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
                <MenuItem onClick={() => console.log('onClick: delete row')}>Duplicate row</MenuItem>
                <MenuItem onClick={() => console.log('onClick: delete row')}>Inactive row</MenuItem>
                <MenuItem onClick={() => console.log('onClick: delete row')}>Remove row</MenuItem>
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
  ));
