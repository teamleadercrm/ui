import React from 'react';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { DateTime } from 'luxon';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';
import {
  Banner,
  Box,
  Button,
  ButtonGroup,
  DataGrid,
  DatePickerInput,
  Dialog,
  Heading3,
  Heading4,
  IconMenu,
  MenuItem,
  Label,
  Link,
  Popover,
  Select,
  StatusBullet,
  TextBody,
  TextSmall,
  Toast,
  ToastContainer,
  Tooltip,
  QTip,
} from '../src';

import { rows1 } from './static/data/datagrid';
import options from './static/data/select';

const inputPlaceholderToday = DateTime.fromJSDate(new Date())
  .setLocale('nl')
  .toLocaleString(DateTime.DATE_SHORT);

const preSelectedDate = DateTime.local()
  .plus({ days: 3 })
  .toJSDate();

const TooltippedStatusBullet = Tooltip(StatusBullet);

const MyDatagrid = ({ ...props }) => (
  <DataGrid
    comparableId={1}
    // onSelectionChange={handleRowSelectionChange}
    {...props}
  >
    <DataGrid.HeaderRowOverlay>
      <Button size="small" level="primary" label="Marks as paid" />
      <ButtonGroup segmented marginHorizontal={3}>
        <Button size="small" label="Book" />
        <Button size="small" label="Merge" />
      </ButtonGroup>
      <Button size="small" level="destructive" label="Delete" />
      <Select options={options} marginHorizontal={3} size="small" flex="1" menuIsOpen />
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
);

storiesOf('Playground/Z-Indexes', module)
  .addParameters({
    info: {
      source: false,
      propTables: false,
    },
  })
  .add('Basic', () => {
    const myRef = document.querySelector('h1');

    return (
      <Box>
        <QTip
          icon={<IconIdeaMediumOutline />}
          closed={!boolean('QTip is active', false)}
          onChange={() => console.log('QTip has changed')}
        >
          <TextBody color="teal">
            Lorem ipsum dolor sit amet, consectetur{' '}
            <Link href="#" inherit={false}>
              adipiscing
            </Link>{' '}
            elit.
          </TextBody>
        </QTip>
        <Box display="flex">
          <Label flex="1" marginRight={3}>
            Select your flavourite
            <Select
              helpText="Please select your favorite flavour"
              options={options}
              marginBottom={3}
              menuIsOpen={boolean('Select is active', false)}
            />
          </Label>
          <Label required flex="1" marginLeft={3}>
            Pick a date
            <DatePickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              helpText="Please pick a preferred date"
              dayPickerProps={{
                locale: 'nl',
                localeUtils: MomentLocaleUtils,
                numberOfMonths: 2,
              }}
              placeholder={inputPlaceholderToday}
              selectedDate={preSelectedDate}
              value={preSelectedDate}
            />
          </Label>
        </Box>
        <MyDatagrid
          selectable={boolean('DataGrid selectable', true)}
          stickyFromLeft={3}
          stickyFromRight={1}
          processing={boolean('DataGrid processing', false)}
          marginTop={4}
        />
        <Popover
          active={boolean('Popover is active', false)}
          anchorEl={myRef}
          backdrop="dark"
          position="end"
          direction="south"
        >
          <Box padding={4}>
            <Heading3 color="teal">I am a Popover</Heading3>
            <Label marginTop={3} marginBottom={0} required>
              Select your flavourite
              <Select helpText="Please select your favorite flavour" options={options} />
            </Label>
          </Box>
        </Popover>
        <Dialog active={boolean('Dialog is active', false)}>
          <Banner color="neutral" fullWidth>
            <Heading3>Popover Title</Heading3>
          </Banner>
          <Box padding={4}>
            <TextBody color="teal">I am a Dialog that covers everything below</TextBody>
            <Box display="flex" marginTop={3}>
              <Label flex="1" marginBottom={0} marginRight={2} required>
                Select your flavourite
                <Select helpText="Please select your favorite flavour" options={options} />
              </Label>
              <Label required flex="1" marginLeft={2}>
                Pick a date
                <DatePickerInput
                  formatDate={formatDate}
                  parseDate={parseDate}
                  helpText="Please pick a preferred date"
                  dayPickerProps={{
                    locale: 'nl',
                    localeUtils: MomentLocaleUtils,
                    numberOfMonths: 1,
                  }}
                  placeholder={inputPlaceholderToday}
                  selectedDate={preSelectedDate}
                  value={preSelectedDate}
                />
              </Label>
            </Box>
          </Box>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" disabled />
            <Button level="primary" label="Confirm" disabled />
          </ButtonGroup>
        </Dialog>
        <ToastContainer>
          <Toast label="Your Toast is ready Sir!" />
        </ToastContainer>
      </Box>
    );
  });
