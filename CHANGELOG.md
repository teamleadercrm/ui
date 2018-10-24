## [unreleased]

### Added

- `NumericInput`: added the `NumericInput` component, which is now the recommended component for rendering inputs with number values ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#411](https://github.com/teamleadercrm/ui/pull/411))
- `ErrorText`: added the `ErrorText` component ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#407](https://github.com/teamleadercrm/ui/pull/407))

### Changed

- `Input` (small & large): decreased its height to meet the height of our `Button` & `Select` components ([@driesd](https://github.com/driesd) in [#408](https://github.com/teamleadercrm/ui/pull/408))
- `Select` (multi value): decreased the margin around a selected item to meet the height of our `Button` & `Input` components ([@driesd](https://github.com/driesd) in [#408](https://github.com/teamleadercrm/ui/pull/408))

### Deprecated

### Removed

- [BREAKING] `Input`: removed the parsing of number values ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#411](https://github.com/teamleadercrm/ui/pull/411))
- [BREAKING] `Input`: removed the binding to a set minimum and maximum ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#411](https://github.com/teamleadercrm/ui/pull/411))
- [BREAKING] `Input`: removed the spinner controls ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#411](https://github.com/teamleadercrm/ui/pull/411))

### Fixed

- `DatePicker`: fixed the DatePicker collapsing when the parent element resizes ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#410](https://github.com/teamleadercrm/ui/pull/410))

## [0.16.1] - 2018-10-11

### Added

- `DataGrid`: added the boolean `processing` property ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#391](https://github.com/teamleadercrm/ui/pull/391))
- `DataGrid`: added the `LoadingBar` component, which renders if the `processing` property is true ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#391](https://github.com/teamleadercrm/ui/pull/391))
- `HelpText`: added the `HelpText` component ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#406](https://github.com/teamleadercrm/ui/pull/406))

### Changed

- `Input`: adjusted the `opacity` & `position` of the `number type Input` field spinner buttons ([@driesd](https://github.com/driesd) in [#401](https://github.com/teamleadercrm/ui/pull/401))
- `Label` now checks if a child is of type `string` instead of the magic check for `Input` or `Select` ([@nickwaelkens](https://github.com/nickwaelkens) in [#395](https://github.com/teamleadercrm/ui/pull/395))
- `Select`: changed the dropdown arrow `Button` with a more subtile `Icon` ([@driesd](https://github.com/driesd) in [#396](https://github.com/teamleadercrm/ui/pull/396))
- `Select`: replaced the built-in clear indicator button with an icon of our own library ([@driesd](https://github.com/driesd) in [#400](https://github.com/teamleadercrm/ui/pull/400))
- `Select`: adjusted the `opacity` & `position` of the `dropdown indicator arrow` ([@driesd](https://github.com/driesd) in [#402](https://github.com/teamleadercrm/ui/pull/402))

### Removed

- `Select`: removed the `max-width` limitation, component will now take the full width of its parent ([@driesd](https://github.com/driesd) in [#397](https://github.com/teamleadercrm/ui/pull/397))

### Fixed

- `DataGrid`: fixed the property type of the `numSelectedRowsLabel` property in the `DataGrid.HeaderRowOverlay`, which threw a warning ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#403](https://github.com/teamleadercrm/ui/pull/403))
- `Dialog`: fixed the content cut off bug when content became to high ([@driesd](https://github.com/driesd) in [#399](https://github.com/teamleadercrm/ui/pull/399))
- `Select`: fixed the broken vertical alignment in `IE11`. ([@driesd](https://github.com/driesd) in [#396](https://github.com/teamleadercrm/ui/pull/396))

## [0.16.0] - 2018-10-08

### Added

- `Box`: added `baseline` and `stretch` as possible values for the `alignItems` property ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#387](https://github.com/teamleadercrm/ui/pull/387))
- `Button`: added the `LoadingSpinners` for the `Button`s whose `level` is set to `'link'` ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#380](https://github.com/teamleadercrm/ui/pull/380))
- `DataGrid`: added the `HeaderRowOverlay` which displays the amount of selected items and bulk actions ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#352](https://github.com/teamleadercrm/ui/pull/352))
- `Input`: added `prefix` & `suffix` props. ([@driesd](https://github.com/driesd) in [#383](https://github.com/teamleadercrm/ui/pull/383))
- `Popover`: added the `Popover`, it replaces `PopoverHorizontal` and `PopoverVertical` ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#377](https://github.com/teamleadercrm/ui/pull/377))
- `Link`: added `icon`& `iconPlacement` props ([@driesd](https://github.com/driesd) in [#381](https://github.com/teamleadercrm/ui/pull/381))
- `Link`: added `string` as a possible property type for the `element` property ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#388](https://github.com/teamleadercrm/ui/pull/388))
- `LoadingBar`: added the new `LoadingBar` component ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#385](https://github.com/teamleadercrm/ui/pull/385))
- `LoadingSpinner`: added all of the library's tints, accessible via the new `tint` prop ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#378](https://github.com/teamleadercrm/ui/pull/378))
- `LoadingSpinner`: added all of the library's colors, accessible via the `color` prop ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#378](https://github.com/teamleadercrm/ui/pull/378))

### Changed

- `Button`: a link button can be created by setting the level property ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#376](https://github.com/teamleadercrm/ui/pull/376))
- `DataGrid`: changed the header checkbox, it does not render in an intermediate state anymore, when some rows are selected ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#352](https://github.com/teamleadercrm/ui/pull/352))

### Removed

- [BREAKING] `DataGrid`: removed the ability to set its `selectable` property to `true`, without adding the `HeaderRowOverlay` to it ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#352](https://github.com/teamleadercrm/ui/pull/352))
- [BREAKING] `Input`: removed `counter`, `icon` & `iconPlacement` props. They've been replaced by `prefix` & `suffix`. ([@driesd](https://github.com/driesd) in [#383](https://github.com/teamleadercrm/ui/pull/383))
- [BREAKING] `LinkButton`: The `LinkButton` is removed, since it is replaced by `Button` ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#376](https://github.com/teamleadercrm/ui/pull/376))
- `LoadingSpinner`: removed `'white'` as a possible value for `color` prop ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#378](https://github.com/teamleadercrm/ui/pull/378))
- [BREAKING] `PopoverHorizontal`: The `PopoverHorizontal` is removed, since it is replaced by `Popover` ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#377](https://github.com/teamleadercrm/ui/pull/377))
- [BREAKING] `PopoverVertical`: The `PopoverVertical` is removed, since it is replaced by `Popover` ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#377](https://github.com/teamleadercrm/ui/pull/377))

## [0.15.2] - 2018-09-25

### Added

### Changed

- `webpack@4.1.1`
- `extract-text-webpack-plugin@4.0.0-beta.0`
- `html-webpack-plugin@4.0.0-alpha.2`

### Deprecated

### Removed

### Fixed

- `Production build`: Fixed the failing production builds ([@driesd](https://github.com/driesd) in [#374](https://github.com/teamleadercrm/ui/pull/374))

## [0.15.1] - 2018-09-25

### Fixed

- `Input`: Fixed steps not working anymore after having converted the value saved in the state to a String. ([@timdegroote](https://github.com/timdegroote) in [#370](https://github.com/teamleadercrm/ui/pull/370))

## [0.15.0] - 2018-09-20

### Changed

- [BREAKING] `Input`: values are now changed to be put inside the min/max boundaries only on input blur, meaning that onChange will now be triggered with values that are possibly outside of those bounds. ([@driesd](https://github.com/driesd) in [#365](https://github.com/teamleadercrm/ui/pull/365))
- `Popover`: renders more accurately, by not blindingly choosing the opposite direction, if it would be rendered off-screen in the given one. In the last case, it chooses for the direction (on the same axis) with the most space and if needed, it becomes scrollable. ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#343](https://github.com/teamleadercrm/ui/pull/331))

### Fixed

- `Input`: fixed a bug that you could not adjust the current value in a number type input field combined with min & max attributes ([@driesd](https://github.com/driesd) in [#365](https://github.com/teamleadercrm/ui/pull/365))

## [0.14.1] - 2018-09-19

### Added

- `Select`: added `error` & `helpText` props which renders an error or help text below the input field. ([@driesd](https://github.com/driesd) in [#359](https://github.com/teamleadercrm/ui/pull/359))

### Fixed

- `IslandGroup`: fixes unwanted center alignment of children when direction is vertical ([@driesd](https://github.com/driesd) in [#361](https://github.com/teamleadercrm/ui/pull/361))
- `IslandGroup`: fixes weird `border-radius` & `border-width` behaviour when containing less or more then 3 Islands ([@driesd](https://github.com/driesd) in [#361](https://github.com/teamleadercrm/ui/pull/361))
- `IslandGroup`: fixes background color overflow bug with rounded corners ([@driesd](https://github.com/driesd) in [#361](https://github.com/teamleadercrm/ui/pull/361))
- `Button`, `IconButton` & `LinkButton`: avoid error when `blur()` is not available on the passed node (e.g. when using a custom component such as a router link). ([@lowiebenoot](https://github.com/lowiebenoot) in [#322](https://github.com/teamleadercrm/ui/pull/322))

## [0.14.0] - 2018-09-13

### Added

- `DatePickerInput`: added `onBlur` and `onFocus` props. ([@driesd](https://github.com/driesd) in [#356](https://github.com/teamleadercrm/ui/pull/356))
- `DatePickerInputRange`: added `onEndDateBlur`, `onEndDateFocus`, `onStartDateBlur` and `onStartDateFocus` props. ([@driesd](https://github.com/driesd) in [#356](https://github.com/teamleadercrm/ui/pull/356))
- `DatePicker`, `DatePickerInput`, `DatePickerRange` & `DatePickerInputRange`: added a Box wrapper with box props applied to it ([@driesd](https://github.com/driesd) in [#347](https://github.com/teamleadercrm/ui/pull/347))
- `DatePickerInput` & `DatePickerInputRange`: added `error` prop which replaces the old `meta.error`. ([@driesd](https://github.com/driesd) in [#353](https://github.com/teamleadercrm/ui/pull/353))
- `Input`: added `error` prop which replaces the old `meta.error`. ([@driesd](https://github.com/driesd) in [#349](https://github.com/teamleadercrm/ui/pull/349))
- `IslandGroup`: applied box props to the Box wrapper ([@driesd](https://github.com/driesd) in [#357](https://github.com/teamleadercrm/ui/pull/357))
- `IslandGroup`: added `direction` prop for vertical `Island` segmentation ([@driesd](https://github.com/driesd) in [#358](https://github.com/teamleadercrm/ui/pull/358))
- `Select`: added a Box wrapper with box props applied to it ([@driesd](https://github.com/driesd) in [#354](https://github.com/teamleadercrm/ui/pull/354))

### Removed

- [BREAKING] `DatePickerInput` & `DatePickerInputRange`: removed and `meta` prop to decouple from redux-forms. ([@driesd](https://github.com/driesd) in [#353](https://github.com/teamleadercrm/ui/pull/353))
- [BREAKING] `Input`: removed `input` and `meta` prop to decouple from redux-forms. ([@driesd](https://github.com/driesd) in [#349](https://github.com/teamleadercrm/ui/pull/349))

### Fixed

## [0.13.0] - 2018-09-04

### Added

- `AsyncSelect`: A new select component that will load its options asynchronously and optionally paginate them.

### Removed

- [BREAKING] `Input`: removed `precision` prop due to buggy behavior. ([@driesd](https://github.com/driesd) in [#346](https://github.com/teamleadercrm/ui/pull/346))

### Fixed

- `Input`: it's now possible to type either a dot or a comma in a number type input field ([@driesd](https://github.com/driesd) in [#346](https://github.com/teamleadercrm/ui/pull/346))
- `Input`: fixed the buggy formatting behavior when typing into a number type input field ([@driesd](https://github.com/driesd) in [#346](https://github.com/teamleadercrm/ui/pull/346))
- `LinkButton`: set the appropriate padding, when only containing an icon, so it displays as a square ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#341](https://github.com/teamleadercrm/ui/pull/341)).
- `Button` & `LinkButton`: fixed the unwanted extra icon margin on tooltipped buttons when only containing an icon ([@driesd](https://github.com/driesd) in [#348](https://github.com/teamleadercrm/ui/pull/348))

## [0.12.1] - 2018-08-21

### Added

- `Button`, `IconButton` & `LinkButton`: only render `disabled` attribute when `element` is a `button`. ([@driesd](https://github.com/driesd) in [#338](https://github.com/teamleadercrm/ui/pull/338))
- `DataGrid`: - The original event from the `Checkbox` is now passed to the `onSelectionChange` handler. When the `onSelectionChange` is triggered due to changing the `comparableId`, there is no event and thus it will be `null`. ([@lowiebenoot](https://github.com/lowiebenoot) in [#339](https://github.com/teamleadercrm/ui/pull/339))

## [0.12.0] - 2018-08-10

### Added

- `Button` & `IconButton`: implemented `element` prop which takes an element or string to be visually rendered as a button. ([@driesd](https://github.com/driesd) in [#336](https://github.com/teamleadercrm/ui/pull/336))
- `Input`: implemented `spinner` boolean prop that indicates whether the spinner controls on numeric input fields should render or not. By default it's `true` ([@driesd](https://github.com/driesd) in [#335](https://github.com/teamleadercrm/ui/pull/335))

### Changed

- [BREAKING] `Button` & `IconButton`: won't render an anchor tag by only passing the `href` prop anymore. You also need to set the `element` prop to `'a'`. ([@driesd](https://github.com/driesd) in [#336](https://github.com/teamleadercrm/ui/pull/336))

### Fixed

- `DataGrid`: the `componentWillReceiveProps` lifecycle is replaced by the `componentDidUpdate` lifecycle, as it will be deprecated in React 17 ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#331](https://github.com/teamleadercrm/ui/pull/331))
- `Overlay`: the `componentWillUpdate` lifecycle is replaced by the `componentDidUpdate` lifecycle, as it will be deprecated in React 17 ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#331](https://github.com/teamleadercrm/ui/pull/331))
- `Menu`: the `componentWillUpdate` lifecycle is replaced by the `componentDidUpdate` lifecycle and the `componentWillReceiveProps` lifecycle is replaced by the `getDerivedStateFromProps` and `componentDidUpdate` lifecycles, as they will be deprecated in React 17 ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#330](https://github.com/teamleadercrm/ui/pull/330))
- `Input`: removed unwanted double borders on input fields with connected buttons ([@driesd](https://github.com/driesd) in [#334](https://github.com/teamleadercrm/ui/pull/334))

## [0.11.2] - 2018-08-01

### Added

- `Select` component ([@driesd](https://github.com/driesd) in [#280](https://github.com/teamleadercrm/ui/pull/280))

### Changed

- `IconMenu` now returns a `Box` component instead of a `div` ([@InstaK](https://github.com/InstaK) in [#324](https://github.com/teamleadercrm/ui/pull/324))
- The `Checkbox` in `DataGrid` is now centered ([@InstaK](https://github.com/InstaK) in [#325](https://github.com/teamleadercrm/ui/pull/325))

### Fixed

- `Button`: `margin` is set to 0, to fix Safari styling issue ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#326](https://github.com/teamleadercrm/ui/pull/326))
- `Label`: added extra check for our new Select component so the word 'optional' wouldn't render twice ([@driesd](https://github.com/driesd) in [#328](https://github.com/teamleadercrm/ui/pull/328))

## [0.11.1] - 2018-07-27

### Changed

- Changed the default `Checkbox` size to `medium` ([@Kemosabert](https://github.com/Kemosabert) in [#320](https://github.com/teamleadercrm/ui/pull/320))
- Changed the default `Checkbox` size in a `DataGrid` to `small` ([@Kemosabert](https://github.com/Kemosabert) in [#320](https://github.com/teamleadercrm/ui/pull/320))

### Fixed

- `DataGrid`: the `onSelectionChange` handler, now passes an empty array as param (instead of `undefined`) when the comparable id changes ([@Kemosabert](https://github.com/Kemosabert) in [#318](https://github.com/teamleadercrm/ui/pull/318))
- `DataGrid`: reset indeterminate to false of the "parent" checkbox when the comparable id changes ([@Kemosabert](https://github.com/Kemosabert) in [#319](https://github.com/teamleadercrm/ui/pull/319))
- `Input`: Don't vertically center or resize the icon when the error is multiline ([@timdegroote](https://github.com/timdegroote) in [#321](https://github.com/teamleadercrm/ui/pull/321))
- `Toast`: fix the animation when removing a `Toast` from the `ToastContainer` ([@lowiebenoot](https://github.com/lowiebenoot) in [#322](https://github.com/teamleadercrm/ui/pull/322))

## [0.11.0] - 2018-07-18

### Changed

- initial changelog
