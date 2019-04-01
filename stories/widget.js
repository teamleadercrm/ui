import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import {
  Box,
  Button,
  ButtonGroup,
  DataGrid,
  DatePicker,
  Heading1,
  Heading3,
  IconMenu,
  Link,
  MenuItem,
  StatusBullet,
  Tooltip,
  Widget,
  TextBody,
  TextSmall,
} from '../src';
import { rows1 } from './static/data/datagrid';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];
const sizes = ['small', 'medium', 'large'];
const TooltippedStatusBullet = Tooltip(StatusBullet);

storiesOf('Widget', module)
  .add('Basic', () => (
    <Widget size={select('Size', sizes, 'medium')}>
      <Widget.WidgetBody>
        <Heading3>I am the body title</Heading3>
        <TextBody>I am the body content</TextBody>
      </Widget.WidgetBody>
    </Widget>
  ))
  .add('With header', () => (
    <Widget size={select('Size', sizes, 'medium')}>
      <Widget.WidgetHeader color={select('header color', colors, 'neutral')} title="I am the widget header title" />
      <Widget.WidgetBody>
        <Heading3>I am the body title</Heading3>
        <TextBody>I am the body content</TextBody>
      </Widget.WidgetBody>
    </Widget>
  ))
  .add('With footer', () => (
    <Widget size={select('Size', sizes, 'medium')}>
      <Widget.WidgetBody>
        <Heading3>I am the body title</Heading3>
        <TextBody>I am the body content</TextBody>
      </Widget.WidgetBody>
      <Widget.WidgetFooter>
        <TextBody>I am the widget footer</TextBody>
      </Widget.WidgetFooter>
    </Widget>
  ))
  .add('Full widget', () => (
    <Widget size={select('Size', sizes, 'medium')}>
      <Widget.WidgetHeader color={select('header color', colors, 'neutral')}>
        <Heading1>I am the widget header title</Heading1>
      </Widget.WidgetHeader>
      <Widget.WidgetBody>
        <Heading3>I am the body title</Heading3>
        <TextBody>I am the body content</TextBody>
      </Widget.WidgetBody>
      <Widget.WidgetFooter>
        <TextBody>I am the widget footer</TextBody>
      </Widget.WidgetFooter>
    </Widget>
  ))
  .add('Full widget 2 cols', () => (
    <Widget size={select('Size', sizes, 'medium')}>
      <Widget.WidgetHeader color={select('header color', colors, 'neutral')} title="I am the widget header title" />
      <Widget.WidgetBody display="flex">
        <Box flex={1}>
          <Heading3>Column 1 header</Heading3>
          <TextBody>I am the body content</TextBody>
        </Box>
        <Box flex={1}>
          <Heading3>Column 2 header</Heading3>
          <TextBody>I am the body content</TextBody>
        </Box>
      </Widget.WidgetBody>
      <Widget.WidgetFooter>
        <TextBody>I am the widget footer</TextBody>
      </Widget.WidgetFooter>
    </Widget>
  ))
  .add('With DatePicker', () => (
    <Widget size={select('Size', sizes, 'medium')}>
      <Widget.WidgetHeader color={select('header color', colors, 'neutral')} title="I am the widget header title" />
      <Widget.WidgetBody>
        <DatePicker
          locale="nl-BE"
          numberOfMonths={12}
          onChange={() => console.log('Date changed')}
          selectedDate={new Date()}
        />
      </Widget.WidgetBody>
    </Widget>
  ))
  .add('With DataGrid only', () => (
    <Widget size={select('Size', sizes, 'medium')}>
      <DataGrid
        bordered={boolean('bordered', false)}
        selectable={boolean('Selectable', true)}
        comparableId={1}
        onSelectionChange={() => console.log('Datagrid selection changed')}
        checkboxSize={select('Checkbox size', ['small', 'medium', 'large'], 'small')}
        padding={0}
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
            <DataGrid.BodyRow key={index} onClick={event => console.log('onClick:', row.column5, event)}>
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
                  <MenuItem onClick={() => console.log('onClick: duplicate row')}>Duplicate row</MenuItem>
                  <MenuItem onClick={() => console.log('onClick: inactivate row')}>Inactive row</MenuItem>
                  <MenuItem onClick={() => console.log('onClick: remove row')}>Remove row</MenuItem>
                </IconMenu>
              </DataGrid.Cell>
            </DataGrid.BodyRow>
          );
        })}
      </DataGrid>
    </Widget>
  ))
  .add('With DataGrid', () => (
    <Widget size={select('Size', sizes, 'medium')}>
      <Widget.WidgetHeader color={select('header color', colors, 'neutral')} title="I am the widget header title" />
      <Widget.WidgetBody padding={0}>
        <DataGrid
          bordered={boolean('bordered', false)}
          selectable={boolean('Selectable', true)}
          comparableId={1}
          onSelectionChange={() => console.log('Datagrid selection changed')}
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
              <DataGrid.BodyRow key={index} onClick={event => console.log('onClick:', row.column5, event)}>
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
                    <MenuItem onClick={() => console.log('onClick: duplicate row')}>Duplicate row</MenuItem>
                    <MenuItem onClick={() => console.log('onClick: inactivate row')}>Inactive row</MenuItem>
                    <MenuItem onClick={() => console.log('onClick: remove row')}>Remove row</MenuItem>
                  </IconMenu>
                </DataGrid.Cell>
              </DataGrid.BodyRow>
            );
          })}
        </DataGrid>
      </Widget.WidgetBody>
      <Widget.WidgetFooter>
        <TextBody>I am the widget footer</TextBody>
      </Widget.WidgetFooter>
    </Widget>
  ));
