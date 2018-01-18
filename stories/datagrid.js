import React from 'react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, boolean, number } from "@storybook/addon-knobs/react";
import { withInfo } from '@storybook/addon-info';
import { Box, Button, DataGrid, Heading4, IconMenu, MenuItem, Link, Section, StatusBullet, TextTiny, Tooltip } from '../components';
import { rows1, rows2 } from '../static/data/datagrid';

const TooltippedStatusBullet = Tooltip(StatusBullet);

// let rows = rows1;

const store = new Store({
  comparableId: 1,
  rows: rows1,
  activeRow: 1,
});

const handleButtonClick = () => {
  if (store.get('activeRow') === 1) {
    store.set({
      rows: rows2,
      activeRow: 2,
    });
  } else {
    store.set({
      rows: rows1,
      activeRow: 1,
    });
  }
  store.set({ comparableId: store.get('comparableId') + 1 });
  action('onClick - refresh data - set comparableId to other value')();
};

const handleRowSelectionChange = (selectedRows) => {
  action(`onSelectionChange - selected row indexes: ${selectedRows}`)();
};

const BasicDataGrid = ({rows, comparableId}) => {
  return <DataGrid
    selectable={boolean('Selectable', true)}
    comparableId={comparableId}
    onSelectionChange={handleRowSelectionChange}
  >
    <DataGrid.HeaderRow>
      <DataGrid.HeaderCell flex="min-width" />
      <DataGrid.HeaderCell onClick={action('onClick: column sort')} sorted="asc">Invoice</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={action('onClick: column sort')} align="right">Amount</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="2" onClick={action('onClick: column sort')}>Customer</DataGrid.HeaderCell>
      <DataGrid.HeaderCell onClick={action('onClick: column sort')}>Due date</DataGrid.HeaderCell>
      <DataGrid.HeaderCell flex="min-width"/>
    </DataGrid.HeaderRow>
    {
      rows.map((row, index) => {
        return (
          <DataGrid.BodyRow key={index}>
            <DataGrid.Cell align="center" flex="min-width">
              <TooltippedStatusBullet
                color={row.column1}
                tooltip={<TextTiny>Overdue</TextTiny>}
                tooltipColor={row.column1}
                tooltipSize="small"
                size="large"
              />
            </DataGrid.Cell>
            <DataGrid.Cell><Link href="#" inherit={false}>{row.column5}</Link> </DataGrid.Cell>
            <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
            <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
            <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
            <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
              <IconMenu position="top-right">
                <MenuItem onClick={action('onClick: delete row')}>Remove row</MenuItem>
              </IconMenu>
            </DataGrid.Cell>
          </DataGrid.BodyRow>
        );
      })
    }
  </DataGrid>;
}

storiesOf('DataGrids', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
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
        <DataGrid
          selectable={boolean('Selectable', true)}
          comparableId={store.get('comparableId')}
          onSelectionChange={handleRowSelectionChange}
        >
          <DataGrid.HeaderRow>
            <DataGrid.HeaderCell flex="min-width" />
            <DataGrid.HeaderCell onClick={action('onClick: column sort')} sorted="asc">Invoice</DataGrid.HeaderCell>
            <DataGrid.HeaderCell onClick={action('onClick: column sort')} align="right">Amount</DataGrid.HeaderCell>
            <DataGrid.HeaderCell flex="2" onClick={action('onClick: column sort')}>Customer</DataGrid.HeaderCell>
            <DataGrid.HeaderCell onClick={action('onClick: column sort')}>Due date</DataGrid.HeaderCell>
            <DataGrid.HeaderCell flex="min-width"/>
          </DataGrid.HeaderRow>
          {
            rows.map((row, index) => {
              return (
                <DataGrid.BodyRow key={index}>
                  <DataGrid.Cell align="center" flex="min-width">
                    <TooltippedStatusBullet
                      color={row.column1}
                      tooltip={<TextTiny>Overdue</TextTiny>}
                      tooltipColor={row.column1}
                      tooltipSize="small"
                      size="large"
                    />
                  </DataGrid.Cell>
                  <DataGrid.Cell><Link href="#" inherit={false}>{row.column5}</Link> </DataGrid.Cell>
                  <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
                  <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
                  <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
                  <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
                    <IconMenu position="top-right">
                      <MenuItem onClick={action('onClick: delete row')}>Remove row</MenuItem>
                    </IconMenu>
                  </DataGrid.Cell>
                </DataGrid.BodyRow>
              );
            })
          }
          <DataGrid.FooterRow backgroundColor="neutral">
            <DataGrid.Cell align="right">{`${rows.length} rows in total`}</DataGrid.Cell>
          </DataGrid.FooterRow>
        </DataGrid>
      </State>
    </Box>
  ))
  .add('with sticky columns', () => (
    <Box>
      <Section color="neutral">
        <Button onClick={handleButtonClick} label="Refresh data" level="primary" />
      </Section>
      <State store={store}>
        <DataGrid
          selectable={boolean('Selectable', true)}
          stickyFromLeft={number('Sticky from left', 3)}
          stickyFromRight={number('Sticky from right', 1)}
          comparableId={store.get('comparableId')}
          onSelectionChange={handleRowSelectionChange}
        >
          <DataGrid.HeaderRow>
            <DataGrid.HeaderCell flex="min-width" />
            <DataGrid.HeaderCell onClick={action('onClick: column sort')} sorted="asc">Invoice</DataGrid.HeaderCell>
            <DataGrid.HeaderCell onClick={action('onClick: column sort')} align="right">Amount</DataGrid.HeaderCell>
            <DataGrid.HeaderCell flex="2" onClick={action('onClick: column sort')}>Customer</DataGrid.HeaderCell>
            <DataGrid.HeaderCell onClick={action('onClick: column sort')}>Due date</DataGrid.HeaderCell>
            <DataGrid.HeaderCell flex="min-width"/>
          </DataGrid.HeaderRow>
          {
            rows.map((row, index) => {
              return (
                <DataGrid.BodyRow key={index}>
                  <DataGrid.Cell align="center" flex="min-width">
                    <TooltippedStatusBullet
                      color={row.column1}
                      tooltip={<TextTiny>Overdue</TextTiny>}
                      tooltipColor={row.column1}
                      tooltipSize="small"
                      size="large"
                    />
                  </DataGrid.Cell>
                  <DataGrid.Cell><Link href="#" inherit={false}>{row.column5}</Link> </DataGrid.Cell>
                  <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
                  <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
                  <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
                  <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
                    <IconMenu position="top-right">
                      <MenuItem onClick={action('onClick: delete row')}>Remove row</MenuItem>
                    </IconMenu>
                  </DataGrid.Cell>
                </DataGrid.BodyRow>
              );
            })
          }
        </DataGrid>
      </State>
    </Box>
  ))
  .add('Advanced', () => (
    <Box>
      <Section color="neutral">
        <Button onClick={handleButtonClick} label="Refresh data" level="primary" />
      </Section>
      <State store={store}>
        <DataGrid
          selectable={boolean('Selectable', true)}
          stickyFromLeft={number('Sticky from left', 3)}
          stickyFromRight={number('Sticky from right', 1)}
          comparableId={store.get('comparableId')}
          onSelectionChange={handleRowSelectionChange}
        >
          <DataGrid.HeaderRow>
            <DataGrid.HeaderCell flex="min-width" />
            <DataGrid.HeaderCell onClick={action('onClick: column sort')} sorted="asc">Invoice</DataGrid.HeaderCell>
            <DataGrid.HeaderCell onClick={action('onClick: column sort')} align="right">Amount</DataGrid.HeaderCell>
            <DataGrid.HeaderCell flex="2" onClick={action('onClick: column sort')}>Customer</DataGrid.HeaderCell>
            <DataGrid.HeaderCell onClick={action('onClick: column sort')}>Due date</DataGrid.HeaderCell>
            <DataGrid.HeaderCell flex="min-width"/>
          </DataGrid.HeaderRow>
          {
            rows.map((row, index) => {
              return (
                <DataGrid.BodyRow key={index}>
                  <DataGrid.Cell align="center" flex="min-width">
                    <TooltippedStatusBullet
                      color={row.column1}
                      tooltip={<TextTiny>Overdue</TextTiny>}
                      tooltipColor={row.column1}
                      tooltipSize="small"
                      size="large"
                    />
                  </DataGrid.Cell>
                  <DataGrid.Cell><Link href="#" inherit={false}>{row.column5}</Link> </DataGrid.Cell>
                  <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
                  <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
                  <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
                  <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
                    <IconMenu position="top-right">
                      <MenuItem onClick={action('onClick: delete row')}>Remove row</MenuItem>
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
        </DataGrid>
      </State>
    </Box>
  ));
