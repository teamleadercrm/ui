import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, Checkbox, DataGrid, IconMenu, MenuItem, StatusBullet, TextTiny, Tooltip } from '../components';

const rows = [
  {
    column1: "ruby",
    column2: "Epic Agency",
    column3: 412.00,
    column4: "30 Jul 2017",
    column5: "2017 / 350",
  },
  {
    column1: "ruby",
    column2: "Bekaert and Sons",
    column3: 999.99,
    column4: "5 Aug 2017",
    column5: "2017 / 351",
  },
  {
    column1: "gold",
    column2: "Davitamon",
    column3: 2500.00,
    column4: "28 July 2017",
    column5: "Not booked",
  },
  {
    column1: "gold",
    column2: "Dog Studio",
    column3: 199.95,
    column4: "1 Aug 2017",
    column5: "Not booked",
  },
  {
    column1: "neutral",
    column2: "Standard de Liège",
    column3: 1299.67,
    column4: "29 Jul 2017",
    column5: "2017 / 349",
  },
  {
    column1: "neutral",
    column2: "Invisible Puppy",
    column3: 3749.00,
    column4: "05 Feb 2017",
    column5: "2017 / 980",
  },
  {
    column1: "violet",
    column2: "The Big Simon",
    column3: 999.99,
    column4: "08 Feb 2017",
    column5: "2017 / 986",
  },
  {
    column1: "violet",
    column2: "SN Brussels Airlines",
    column3: 4285.95,
    column4: "06 Apr 2017",
    column5: "2017 / 1028",
  },
];

const TooltippedStatusBullet = Tooltip(StatusBullet);

storiesOf('DataGrids', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('Basic', () => (
    <Box paddingVertical={5}>
      <DataGrid selectable>
        <DataGrid.HeaderRow>
          <DataGrid.HeaderCell flex="min-width" />
          <DataGrid.HeaderCell flex="4" onClick={action('onClick: column sort')}>Customer</DataGrid.HeaderCell>
          <DataGrid.HeaderCell>Amount</DataGrid.HeaderCell>
          <DataGrid.HeaderCell>Due date</DataGrid.HeaderCell>
          <DataGrid.HeaderCell>Reference</DataGrid.HeaderCell>
          <DataGrid.HeaderCell flex="min-width"/>
        </DataGrid.HeaderRow>
        {
          rows.map((row, index) => {
            return (
              <DataGrid.Row key={index}>
                <DataGrid.Cell flex="min-width">
                  <TooltippedStatusBullet
                    color={row.column1}
                    tooltip={<TextTiny>Overdue</TextTiny>}
                    tooltipColor={row.column1}
                    tooltipSize="small"
                    size="large"
                  />
                </DataGrid.Cell>
                <DataGrid.Cell flex="4"> {row.column2}</DataGrid.Cell>
                <DataGrid.Cell strong> {`€ ${row.column3}`}</DataGrid.Cell>
                <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
                <DataGrid.Cell soft> {row.column5} </DataGrid.Cell>
                <DataGrid.Cell flex="min-width">
                  <IconMenu position="top-right">
                    <MenuItem>Remove row</MenuItem>
                  </IconMenu>
                </DataGrid.Cell>
              </DataGrid.Row>
            );
          })
        }
      </DataGrid>
    </Box>
  ));
