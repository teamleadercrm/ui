import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, DataGrid, Heading4, IconMenu, MenuItem, StatusBullet, TextTiny, Tooltip } from '../components';
import rows from '../static/data/datagrid';

const TooltippedStatusBullet = Tooltip(StatusBullet);

storiesOf('DataGrids', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('Basic', () => (
    <Box paddingVertical={5}>
      <DataGrid selectable>
        <DataGrid.HeaderRow>
          <DataGrid.HeaderCell flex="min-width" />
          <DataGrid.HeaderCell border="right" flex="2" onClick={action('onClick: column sort')} sorted="asc">Customer</DataGrid.HeaderCell>
          <DataGrid.HeaderCell align="right">Amount</DataGrid.HeaderCell>
          <DataGrid.HeaderCell>Due date</DataGrid.HeaderCell>
          <DataGrid.HeaderCell>Reference</DataGrid.HeaderCell>
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
                <DataGrid.Cell border="right" flex="2"> {row.column2}</DataGrid.Cell>
                <DataGrid.Cell align="right" strong> {`€ ${row.column3}`}</DataGrid.Cell>
                <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
                <DataGrid.Cell soft> {row.column5} </DataGrid.Cell>
                <DataGrid.Cell align="right" flex="min-width">
                  <IconMenu position="top-right">
                    <MenuItem>Remove row</MenuItem>
                  </IconMenu>
                </DataGrid.Cell>
              </DataGrid.BodyRow>
            );
          })
        }
        <DataGrid.FooterRow backgroundColor="neutral">
          <DataGrid.Cell flex="min-width"/>
          <DataGrid.Cell flex="min-width"/>
          <DataGrid.Cell align="right" border="right" flex="2" soft>
            <Heading4>Total Excl Btw</Heading4>
          </DataGrid.Cell>
          <DataGrid.Cell align="right" strong>
            € 13460.52
          </DataGrid.Cell>
          <DataGrid.Cell/>
          <DataGrid.Cell/>
          <DataGrid.Cell flex="min-width"/>
        </DataGrid.FooterRow>
        <DataGrid.FooterRow backgroundColor="neutral">
          <DataGrid.Cell flex="min-width"/>
          <DataGrid.Cell flex="min-width"/>
          <DataGrid.Cell align="right" border="right" flex="2" soft>
            <Heading4>+ VAT</Heading4>
          </DataGrid.Cell>
          <DataGrid.Cell align="right" strong>
            € 2826.71
          </DataGrid.Cell>
          <DataGrid.Cell/>
          <DataGrid.Cell/>
          <DataGrid.Cell flex="min-width"/>
        </DataGrid.FooterRow>
        <DataGrid.FooterRow backgroundColor="neutral">
          <DataGrid.Cell flex="min-width"/>
          <DataGrid.Cell flex="min-width"/>
          <DataGrid.Cell align="right" border="right" flex="2" soft>
            <Heading4>Total Incl Btw</Heading4>
          </DataGrid.Cell>
          <DataGrid.Cell align="right" strong backgroundColor="white" border="around">
            € 16287.23
          </DataGrid.Cell>
          <DataGrid.Cell/>
          <DataGrid.Cell/>
          <DataGrid.Cell flex="min-width"/>
        </DataGrid.FooterRow>
      </DataGrid>
    </Box>
  ));
