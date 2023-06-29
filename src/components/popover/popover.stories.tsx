import React, { useState } from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import {
  IconChevronDownSmallOutline,
  IconCloseSmallOutline,
  IconTrashSmallOutline,
  IconClockSmallOutline,
} from '@teamleader/ui-icons';
import {
  Banner,
  Box,
  Button,
  ButtonGroup,
  Heading3,
  Link,
  Menu,
  MenuItem,
  MenuDivider,
  MenuTitle,
  Popover,
  TextBody,
  TextSmall,
} from '../../index';
import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';
import { BUTTON_LEVELS } from '../button';
import { PopoverProps } from '../popover/Popover';

const backdrops = ['transparent', 'dark'];

const defaultPopoverProps: PopoverProps = {
  backdrop: 'transparent',
  color: 'neutral',
  direction: 'south',
  fullHeight: true,
  position: 'center',
  tint: 'lightest',
  lockScroll: true,
  maxWidth: '50vw',
  minWidth: '',
  offsetCorrection: 0,
};
const popoverArgTypes: Partial<ArgTypes<PopoverProps>> = {
  backdrop: {
    control: 'select',
    options: backdrops,
  },
};

const contentBoxWithSingleTextLine = (
  <Box padding={4}>
    <TextBody>
      This is the popover content with a{' '}
      <Link href="#" inherit={false}>
        link
      </Link>{' '}
      inside
    </TextBody>
  </Box>
);

export default {
  component: Popover,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Popover'),

  parameters: {
    info: {
      propTablesExclude: [Link, TextBody, TextSmall, Button, Banner, Heading3, ButtonGroup, Box],
    },
  },
} as ComponentMeta<typeof Popover>;

const usePopoverTrigger = () => {
  const [popoverActive, setPopoverActive] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);

  const triggerPopover = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
    setPopoverActive(true);
  };

  const closePopover = () => {
    setPopoverActive(false);
  };

  return [{ popoverActive, anchorEl }, triggerPopover, closePopover] as const;
};

export const Basic: ComponentStory<typeof Popover> = (args) => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a basic Popover" />
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        {contentBoxWithSingleTextLine}
      </Popover>
    </Box>
  );
};

Basic.args = defaultPopoverProps;
Basic.argTypes = popoverArgTypes;

export const WithTitle: ComponentStory<typeof Popover> = (args) => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open titled Popover" />
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        <Banner fullWidth>
          <Heading3>Popover Title</Heading3>
        </Banner>
        {contentBoxWithSingleTextLine}
      </Popover>
    </Box>
  );
};

WithTitle.storyName = 'With title';
WithTitle.args = defaultPopoverProps;
WithTitle.argTypes = popoverArgTypes;

export const WithTitleSubtitle: ComponentStory<typeof Popover> = (args) => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open titled & subtitled Popover" />
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        <Banner color="neutral" fullWidth>
          <Heading3>Popover Title</Heading3>
          <TextSmall marginTop={1}>This is the popover content</TextSmall>
        </Banner>
        {contentBoxWithSingleTextLine}
      </Popover>
    </Box>
  );
};

WithTitleSubtitle.storyName = 'With title & subtitle';
WithTitleSubtitle.args = defaultPopoverProps;
WithTitleSubtitle.argTypes = popoverArgTypes;

export const WithCloseButton: ComponentStory<typeof Popover> = (args) => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with close button" />
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        <Banner onClose={handleCloseClick} fullWidth>
          <Heading3>I am a heading 3</Heading3>
        </Banner>
        {contentBoxWithSingleTextLine}
      </Popover>
    </Box>
  );
};

WithCloseButton.storyName = 'With close button';
WithCloseButton.args = defaultPopoverProps;
WithCloseButton.argTypes = popoverArgTypes;

export const WithActions: ComponentStory<typeof Popover> = (args) => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with actions" />
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        {contentBoxWithSingleTextLine}
        <ButtonGroup justifyContent="flex-end" padding={4}>
          <Button label="Cancel" />
          <Button level="primary" label="Confirm" />
        </ButtonGroup>
      </Popover>
    </Box>
  );
};

WithActions.storyName = 'With actions';
WithActions.args = defaultPopoverProps;
WithActions.argTypes = popoverArgTypes;

export const WithMenu: ComponentStory<typeof Popover> = (args) => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with menu" />
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        <Box overflowY="auto">
          <Menu outline={false} selected="bar">
            <MenuItem value="foo" label="Foo label" />
            <MenuItem value="bar" label="Bar label" />
            <MenuItem label="Disabled ..." disabled />
            <MenuDivider />
            <MenuTitle>Group title</MenuTitle>
            <MenuItem label="Label & icon" icon={<IconClockSmallOutline />} />
            <MenuItem label="Destructive" icon={<IconTrashSmallOutline />} destructive />
            <MenuItem label="Destructive & disabled" icon={<IconCloseSmallOutline />} destructive disabled />
          </Menu>
        </Box>
      </Popover>
    </Box>
  );
};

WithMenu.storyName = 'With menu';
WithMenu.args = defaultPopoverProps;
WithMenu.argTypes = popoverArgTypes;

export const WithSplitButtonMenu: ComponentStory<typeof Popover> = (args) => {
  const [buttonLevel, setButtonLevel] = useState('primary');
  const [buttonLabel, setButtonLabel] = useState('Primary action');
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [popoverActive, setPopoverActive] = useState(false);
  const [splitButtonSelected, setSplitButtonSelected] = useState('foo');

  const handleSplitButtonNormalMenuItemClick = () => {
    setButtonLevel('primary');
    setButtonLabel('Primary action');
    setPopoverActive(false);
    setSplitButtonSelected('foo');
  };

  const handleSplitButtonDestructiveMenuItemClick = () => {
    setButtonLevel('destructive');
    setButtonLabel('Destructive action');
    setPopoverActive(false);
    setSplitButtonSelected('bar');
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
    setPopoverActive(true);
  };

  const handleCloseClick = () => {
    setPopoverActive(false);
  };

  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup segmented>
        <Button label={buttonLabel} level={buttonLevel as BUTTON_LEVELS} />
        <Button
          level={buttonLevel as BUTTON_LEVELS}
          onClick={handleButtonClick}
          icon={<IconChevronDownSmallOutline />}
        />
      </ButtonGroup>
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop="transparent"
        position="start"
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        <Menu outline={false} selected={splitButtonSelected}>
          <MenuItem
            value="foo"
            label="Primary action"
            icon={<IconClockSmallOutline />}
            onClick={handleSplitButtonNormalMenuItemClick}
          />
          <MenuItem
            value="bar"
            label="Destructive action"
            icon={<IconTrashSmallOutline />}
            destructive
            onClick={handleSplitButtonDestructiveMenuItemClick}
          />
        </Menu>
      </Popover>
    </Box>
  );
};

WithSplitButtonMenu.storyName = 'With split button menu';
WithSplitButtonMenu.args = defaultPopoverProps;
WithSplitButtonMenu.argTypes = popoverArgTypes;

export const Experiment1: ComponentStory<typeof Popover> = (args) => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        <Banner color="neutral" fullWidth>
          <Heading3>Popover Title</Heading3>
          <TextSmall marginTop={1}>This is the popover content</TextSmall>
        </Banner>
        <Box padding={4} overflow="auto">
          <TextBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </TextBody>
        </Box>
      </Popover>
    </Box>
  );
};

Experiment1.args = defaultPopoverProps;
Experiment1.argTypes = popoverArgTypes;

export const Experiment2: ComponentStory<typeof Popover> = (args) => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <Popover
        {...args}
        active={popoverActive}
        anchorEl={anchorEl}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
      >
        <Banner color="neutral" fullWidth>
          <Heading3>Popover Title</Heading3>
          <TextSmall marginTop={1}>This is the popover content</TextSmall>
        </Banner>
        <Box padding={4} overflow="auto">
          <TextBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </TextBody>
        </Box>
        <ButtonGroup justifyContent="flex-end" padding={4}>
          <Button label="Cancel" />
          <Button level="primary" label="Confirm" />
        </ButtonGroup>
      </Popover>
    </Box>
  );
};

Experiment2.args = defaultPopoverProps;
Experiment2.argTypes = popoverArgTypes;
