import React, { useState } from 'react';
import { addStoryInGroup, PLAYGROUND } from '../../utils';
import {
  Box,
  Button,
  ButtonGroup,
  DataGrid,
  DatePickerInput,
  DatePickerInputRange,
  Dialog,
  Heading3,
  Heading4,
  Icon,
  IconMenu,
  Label,
  Link,
  MenuItem,
  Popover,
  Select,
  TextBody,
  TextSmall,
  Toast,
  ToastContainer,
  Tooltip,
} from '../../../src';
import { boolean, select } from '@storybook/addon-knobs';
import { DateTime } from 'luxon';
import { IconIdeaMediumOutline, IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import options, { groupedOptions } from '../../../src/static/data/select';
import { LANGUAGES } from '../../../src/static/data/languages';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import { rows1 } from '../../../src/static/data/datagrid';

export default {
  title: addStoryInGroup(PLAYGROUND, 'Depths'),

  parameters: {
    info: {
      source: false,
      propTables: false,
    },
  },
};

const inputPlaceholderToday = DateTime.fromJSDate(new Date()).setLocale('nl').toLocaleString(DateTime.DATE_SHORT);

const inputPlaceholderTomorrow = DateTime.fromJSDate(new Date())
  .setLocale('nl')
  .plus({ days: 1 })
  .toLocaleString(DateTime.DATE_SHORT);

const preSelectedDate = DateTime.local().plus({ days: 63 }).toJSDate();

const preSelectedRange = {
  selectedStartDate: DateTime.local().plus({ days: 3 }).toJSDate(),
  selectedEndDate: DateTime.local().plus({ days: 8 }).toJSDate(),
};

const TooltippedIcon = Tooltip(Icon);

const customFormatDate = (date, locale) => {
  return DateTime.fromJSDate(date).setLocale(locale).toLocaleString(DateTime.DATETIME_HUGE);
};

const MyDatagrid = ({ ...props }) => (
  <DataGrid selectable={false} comparableId={1} onSelectionChange={() => console.log('onSelectionChange')} {...props}>
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

export const zIndexes = () => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(undefined);
  const [dialogActive, setDialogActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(preSelectedDate);

  const hidePopover = () => {
    setPopoverActive(false);
  };

  const showHideDialog = () => {
    setDialogActive(!dialogActive);
  };

  const showPopover = (event) => {
    setPopoverAnchorEl(event.currentTarget);
    setPopoverActive(true);
  };

  const handleDatePickerDateChanged = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <Box>
      <ButtonGroup marginBottom={5}>
        <Button label="Open Dialog" onClick={showHideDialog} />
        <Button label="Open Poppover" onClick={showPopover} />
      </ButtonGroup>
      <Box display="flex">
        <Label flex="1" marginRight={3}>
          Select your flavourite
          <Select helpText="Please select your favorite flavour" options={options} marginBottom={3} />
        </Label>
      </Box>
      <Box display="flex">
        <Label required flex="1">
          Pick a date
          <DatePickerInput
            selectedDate={selectedDate}
            formatDate={customFormatDate}
            inputProps={{
              helpText: 'Please pick a preferred date',
              placeholder: inputPlaceholderToday,
              width: '100%',
            }}
            locale={select('Locale', LANGUAGES, 'nl')}
            onChange={handleDatePickerDateChanged}
          />
        </Label>
        <Label required flex="1" marginLeft={3}>
          Pick a date
          <DatePickerInputRange
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              locale: select('Locale', LANGUAGES, 'nl'),
              localeUtils: MomentLocaleUtils,
              numberOfMonths: 2,
              showOutsideDays: false,
              showWeekNumbers: true,
            }}
            dayPickerInputStartDateProps={{
              placeholder: inputPlaceholderToday,
              value: preSelectedRange.selectedStartDate,
            }}
            dayPickerInputEndDateProps={{
              placeholder: inputPlaceholderTomorrow,
              value: preSelectedRange.selectedEndDate,
            }}
            onChange={() => console.log('Changed')}
            selectedRange={preSelectedRange}
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
        active={popoverActive}
        anchorEl={popoverAnchorEl}
        backdrop="dark"
        onEscKeyDown={hidePopover}
        onOverlayClick={hidePopover}
        position="end"
        direction="south"
      >
        <Box padding={4}>
          <Heading3 color="teal">I am a Popover</Heading3>
          <Label
            connectedRight={
              <TooltippedIcon tooltip={<TextSmall>This is the label tooltip text</TextSmall>} tooltipSize="small">
                <IconInfoBadgedSmallFilled />
              </TooltippedIcon>
            }
            marginTop={3}
            marginBottom={0}
            required
          >
            Select your flavourite
            <Select helpText="Please select your favorite flavour" options={options} />
          </Label>
        </Box>
      </Popover>
      <Dialog
        active={dialogActive}
        title="I am the Dialog title"
        onCloseClick={showHideDialog}
        onEscKeyDown={showHideDialog}
        onOverlayClick={showHideDialog}
        primaryAction={{ label: 'Confirm', onClick: showHideDialog }}
      >
        <TextBody color="teal">I am a Dialog that covers everything below</TextBody>
        <Box display="flex" marginTop={3}>
          <Label flex="1" marginBottom={0} marginRight={2} required>
            Select your flavourite
            <Select helpText="Please select your favorite flavour" options={groupedOptions} />
          </Label>
          <Label required flex="1" marginLeft={2}>
            Pick a date
            <DatePickerInput
              selectedDate={selectedDate}
              inputProps={{
                helpText: 'Please pick a preferred date',
                placeholder: inputPlaceholderToday,
              }}
              locale={select('Locale', LANGUAGES, 'nl')}
              onChange={handleDatePickerDateChanged}
            />
          </Label>
        </Box>
      </Dialog>
      <ToastContainer>
        <Toast label="Your Toast is ready Sir!" />
      </ToastContainer>
    </Box>
  );
};

zIndexes.story = {
  name: 'Z-Indexes',
};
