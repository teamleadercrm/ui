import React from 'react';
import PropTable from "./components/propTable";
import { Store, State } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, boolean, number } from "@storybook/addon-knobs/react";
import { withInfo } from '@storybook/addon-info';
import { Box, Button, DataGrid, Heading4, IconMenu, MenuItem, Link, Section, StatusBullet, TextSmall, Tooltip } from '../components';
import { rows1, rows2 } from '../static/data/datagrid';

const TooltippedStatusBullet = Tooltip(StatusBullet);

const store = new Store({
  comparableId: 1,
  rows: rows1,
});

const handleButtonClick = () => {
  store.set({
    comparableId: store.get('comparableId') + 1,
    rows: store.get('rows') === rows1 ? rows2 : rows1,
  });
  console.log('onClick - refresh data - set comparableId to other value');
};

const handleRowSelectionChange = (selectedRows) => {
  console.log(`onSelectionChange - selected row indexes: ${selectedRows}`);
};

const BasicDataGrid = ({rows, comparableId}) => {
  return <DataGrid
    selectable={boolean('Selectable', true)}
    comparableId={comparableId}
    onSelectionChange={handleRowSelectionChange}
  >
    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell flex="min-width" />
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">Invoice</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">Amount</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>Customer</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="min-width"/>
    </DataGrid.HeaderRow>
    {
      rows.map((row, index) => {
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
            <DataGrid.Cell><Link href="#" inherit={false}>{row.column5}</Link> </DataGrid.Cell>
            <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
            <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
            <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
            <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
              <IconMenu position="top-right">
                <MenuItem onClick={() => console.log('onClick: delete row')}>Remove row</MenuItem>
              </IconMenu>
            </DataGrid.Cell>
          </DataGrid.BodyRow>
        );
      })
    }
  </DataGrid>;
};

const DataGridWithFooter = ({rows, comparableId}) => {
  return <DataGrid
    selectable={boolean('Selectable', true)}
    comparableId={comparableId}
    onSelectionChange={handleRowSelectionChange}
  >
    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell flex="min-width" />
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">Invoice</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">Amount</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>Customer</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="min-width"/>
    </DataGrid.HeaderRow>
    {
      rows.map((row, index) => {
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
            <DataGrid.Cell><Link href="#" inherit={false}>{row.column5}</Link> </DataGrid.Cell>
            <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
            <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
            <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
            <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
              <IconMenu position="top-right">
                <MenuItem onClick={() => console.log('onClick: delete row')}>Remove row</MenuItem>
              </IconMenu>
            </DataGrid.Cell>
          </DataGrid.BodyRow>
        );
      })
    }
    <DataGrid.FooterRow backgroundColor="neutral">
      <DataGrid.Cell align="right">{`${rows.length} rows in total`}</DataGrid.Cell>
    </DataGrid.FooterRow>
  </DataGrid>;
};

const DataGridWithStickyColumns = ({rows, comparableId}) => {
  return <DataGrid
    selectable={boolean('Selectable', true)}
    stickyFromLeft={number('Sticky from left', 3)}
    stickyFromRight={number('Sticky from right', 1)}
    comparableId={comparableId}
    onSelectionChange={handleRowSelectionChange}
  >
    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell flex="min-width" />
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">Invoice</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">Amount</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>Customer</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="min-width"/>
    </DataGrid.HeaderRow>
    {
      rows.map((row, index) => {
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
            <DataGrid.Cell><Link href="#" inherit={false}>{row.column5}</Link> </DataGrid.Cell>
            <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
            <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
            <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
            <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
              <IconMenu position="top-right">
                <MenuItem onClick={() => console.log('onClick: delete row')}>Remove row</MenuItem>
              </IconMenu>
            </DataGrid.Cell>
          </DataGrid.BodyRow>
        );
      })
    }
  </DataGrid>;
};

const DataGridAdvanced = ({rows, comparableId}) => {
  return <DataGrid
    selectable={boolean('Selectable', true)}
    stickyFromLeft={number('Sticky from left', 3)}
    stickyFromRight={number('Sticky from right', 1)}
    comparableId={comparableId}
    onSelectionChange={handleRowSelectionChange}
  >
    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell flex="min-width" />
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">Invoice</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">Amount</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>Customer</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="min-width"/>
    </DataGrid.HeaderRow>
    {
      rows.map((row, index) => {
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
            <DataGrid.Cell><Link href="#" inherit={false}>{row.column5}</Link> </DataGrid.Cell>
            <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
            <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
            <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
            <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
              <IconMenu position="top-right">
                <MenuItem onClick={() => console.log('onClick: delete row')}>Remove row</MenuItem>
              </IconMenu>
            </DataGrid.Cell>
          </DataGrid.BodyRow>
        );
      })
    }
    <DataGrid.FooterRow backgroundColor="neutral">
      <DataGrid.Cell flex="min-width"/>
      <DataGrid.Cell align="right" soft>
        <Heading4>Total Excl Btw</Heading4>
      </DataGrid.Cell>
      <DataGrid.Cell align="right" strong>
        € 13460.52
      </DataGrid.Cell>
      <DataGrid.Cell flex="2"/>
      <DataGrid.Cell/>
      <DataGrid.Cell flex="min-width"/>
    </DataGrid.FooterRow>

    <DataGrid.FooterRow backgroundColor="neutral">
      <DataGrid.Cell flex="min-width"/>
      <DataGrid.Cell align="right" soft>
        <Heading4>+ VAT</Heading4>
      </DataGrid.Cell>
      <DataGrid.Cell align="right" strong>
        € 2826.71
      </DataGrid.Cell>
      <DataGrid.Cell flex="2"/>
      <DataGrid.Cell/>
      <DataGrid.Cell flex="min-width"/>
    </DataGrid.FooterRow>

    <DataGrid.FooterRow backgroundColor="neutral">
      <DataGrid.Cell flex="min-width"/>
      <DataGrid.Cell align="right" soft>
        <Heading4>Total Incl Btw</Heading4>
      </DataGrid.Cell>
      <DataGrid.Cell align="right" strong backgroundColor="white" border="around">
        € 16287.23
      </DataGrid.Cell>
      <DataGrid.Cell flex="2"/>
      <DataGrid.Cell/>
      <DataGrid.Cell flex="min-width"/>
    </DataGrid.FooterRow>
  </DataGrid>;
};

storiesOf('DataGrids', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Box>
      <Section color="neutral">
        <Button onClick={handleButtonClick} label="Refresh data" level="primary" />
      </Section>
      <State store={store}>
        <BasicDataGrid />
      </State>
    </Box>
  ))
  .add('with footer', () => (
    <Box>
      <Section color="neutral">
        <Button onClick={handleButtonClick} label="Refresh data" level="primary" />
      </Section>
      <State store={store}>
        <DataGridWithFooter/>
      </State>
    </Box>
  ))
  .add('with sticky columns', () => (
    <Box>
      <Section color="neutral">
        <Button onClick={handleButtonClick} label="Refresh data" level="primary" />
      </Section>
      <State store={store}>
        <DataGridWithStickyColumns/>
      </State>
    </Box>
  ))
  .add('Advanced', () => (
    <Box>
      <Section color="neutral">
        <Button onClick={handleButtonClick} label="Refresh data" level="primary" />
      </Section>
      <State store={store}>
        <DataGridAdvanced/>
      </State>
    </Box>
  ));
