import { DateTime } from 'luxon';
import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  DataGrid,
  DatePickerInput,
  Dialog,
  Heading3,
  Heading4,
  Icon,
  IconMenu,
  Label,
  Link,
  MenuItem,
  Option,
  Popover,
  Select,
  TextBody,
  Toast,
  ToastContainer,
  Tooltip,
} from '../../../src';
import { rows1 } from '../../../src/static/data/datagrid';
import { LANGUAGES } from '../../../src/static/data/languages';
import options, { groupedOptions } from '../../../src/static/data/select';

export default {
  title: 'Playground / Depts',

  parameters: {
    info: {
      source: false,
      propTables: false,
    },
  },
};

const inputPlaceholderToday = DateTime.fromJSDate(new Date()).setLocale('nl').toLocaleString(DateTime.DATE_SHORT);

const preSelectedDate = DateTime.local().plus({ days: 63 }).toJSDate();

const TooltippedIcon = Tooltip(Icon);

const customFormatDate = (date, locale) => {
  return DateTime.fromJSDate(date).setLocale(locale).toLocaleString(DateTime.DATETIME_HUGE);
};

const MyDatagrid = ({ ...props }) => {
  const [selectValue, setSelectValue] = useState<Option | null>(null);
  return (
    <DataGrid selectable={false} comparableId={1} onSelectionChange={() => console.log('onSelectionChange')} {...props}>
      <DataGrid.HeaderRowOverlay>
        <Button size="small" level="primary" label="Marks as paid" />
        <ButtonGroup segmented marginHorizontal={3}>
          <Button size="small" label="Book" />
          <Button size="small" label="Merge" />
        </ButtonGroup>
        <Button size="small" level="destructive" label="Delete" />
        <Select
          value={selectValue}
          onChange={setSelectValue}
          options={options}
          marginHorizontal={3}
          size="small"
          flex="1"
          menuIsOpen
        />
      </DataGrid.HeaderRowOverlay>

      <DataGrid.HeaderRow>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">
          Invoice
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">
          Amount
        </DataGrid.HeaderCell>
        <DataGrid.HeaderCell flex={2} onClick={() => console.log('onClick: column sort')}>
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
            <DataGrid.Cell flex={2}>{row.column2}</DataGrid.Cell>
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
        <DataGrid.Cell flex={2} />
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
        <DataGrid.Cell flex={2} />
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
        <DataGrid.Cell flex={2} />
        <DataGrid.Cell />
        <DataGrid.Cell flex="min-width" />
      </DataGrid.FooterRow>
    </DataGrid>
  );
};

export const zIndexes = (args) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(undefined);
  const [dialogActive, setDialogActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(preSelectedDate);
  const [selectValue1, setSelectValue1] = useState<Option | null>(null);
  const [selectValue2, setSelectValue2] = useState<Option | null>(null);
  const [selectValue3, setSelectValue3] = useState<Option | null>(null);

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
          <Select
            value={selectValue1}
            onChange={setSelectValue1}
            helpText="Please select your favorite flavour"
            options={options}
            marginBottom={3}
          />
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
            locale={args.locale}
            onChange={handleDatePickerDateChanged}
          />
        </Label>
      </Box>
      <MyDatagrid
        selectable={args.dataGridSelectable}
        stickyFromLeft={3}
        stickyFromRight={1}
        processing={args.dataGridProcessing}
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
          <Label marginTop={3} marginBottom={0} required>
            Select your flavourite
            <Select
              value={selectValue2}
              onChange={setSelectValue2}
              helpText="Please select your favorite flavour"
              options={options}
            />
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
            <Select
              value={selectValue3}
              onChange={setSelectValue3}
              helpText="Please select your favorite flavour"
              options={groupedOptions}
            />
          </Label>
          <Label required flex="1" marginLeft={2}>
            Pick a date
            <DatePickerInput
              selectedDate={selectedDate}
              inputProps={{
                helpText: 'Please pick a preferred date',
                placeholder: inputPlaceholderToday,
              }}
              locale={args.locale}
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

zIndexes.storyName = 'Z-Indexes';
zIndexes.args = {
  dataGridSelectable: false,
  dataGridProcessing: false,
  locale: 'nl',
};
zIndexes.argTypes = {
  dataGridSelectable: {
    name: 'DataGrid selectable',
  },
  dataGridProcessing: {
    name: 'DataGrid processing',
  },
  locale: {
    name: 'Locale',
    control: 'select',
    options: LANGUAGES,
  },
};
