## [unreleased]

### Added

- `withTheme`: added the `withTheme` HOC ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#416](https://github.com/teamleadercrm/ui/pull/416))
- `sizes`: added general constants and a helper function to retrieve the library wide sizes ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#448](https://github.com/teamleadercrm/ui/pull/448))
- `Typography`: added a `displayName` to all `Typography` components that are using the `textFactory`. ([@driesd](https://github.com/driesd) in [#453](https://github.com/teamleadercrm/ui/pull/453))

### Changed

- `NumericInput`: the respective spinner controls render as disabled, when the minimum or maximum value of the input has been reached. ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#447](https://github.com/teamleadercrm/ui/pull/447))

### Deprecated

### Removed

### Fixed

- `Badge`: a badge now no longer wraps text and overflow is prevented ([@driesd](https://github.com/driesd) in [#446](https://github.com/teamleadercrm/ui/pull/446))

## [0.18.1] - 2018-11-07

### Changed

- `Link`: inverted the hover & active underline styling when a Link is `inherit` and `contains an icon` ([@driesd](https://github.com/driesd) in [#435](https://github.com/teamleadercrm/ui/pull/435))
- `Button`: changed the background colors, of the active and hover states of the `Button` with the `type` property set to `'link'` ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#436](https://github.com/teamleadercrm/ui/pull/436))

### Removed

- `Link`: removed the visual focus indication after a `Link` was clicked ([@driesd](https://github.com/driesd) in [#437](https://github.com/teamleadercrm/ui/pull/437))

### Fixed

- `0.18.0`: fixed the previous release which was broken by console `errors`, failing on the JS `import` statements `(Unexpected token...)` ([@driesd](https://github.com/driesd) in [#441](https://github.com/teamleadercrm/ui/pull/441))
- `Toast`: fixed the squeezed spinner when containing multiline text ([@driesd](https://github.com/driesd) in [#439](https://github.com/teamleadercrm/ui/pull/439))
- `Toast`: fixed the faulty text color [introduced](https://github.com/teamleadercrm/ui/pull/429) by replacing the `soft` prop with `tint` on `Typography` components. ([@driesd](https://github.com/driesd) in [#438](https://github.com/teamleadercrm/ui/pull/438))

## [0.18.0] - 2018-11-06

### Added

- `Textarea`: added the `Textarea` component ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#427](https://github.com/teamleadercrm/ui/pull/427))
- `Typography`: added the `tint` prop which replaces `soft` ([@driesd](https://github.com/driesd) in [#429](https://github.com/teamleadercrm/ui/pull/429))

### Changed

- `InputBase`: extracted logic for single line inputs to new internally used `SingleLineInputBase` ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#426](https://github.com/teamleadercrm/ui/pull/426))

### Removed

- [BREAKING] `Typography`: removed the `soft` prop which is replaced by `tint` ([@driesd](https://github.com/driesd) in [#429](https://github.com/teamleadercrm/ui/pull/429))

### Fixed

- `Input`: fixed the focus state that didn't work when you had custom `onFocus`/`onBlur` event handlers ([@lowiebenoot](https://github.com/lowiebenoot) in [#428](https://github.com/teamleadercrm/ui/pull/428))
- `NumericInput`: fixed calling the onChange handler in the `NumericInput` component, which was not called when using the spinner controls ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#430](https://github.com/teamleadercrm/ui/pull/430))
- `NumericInput`: fixed the undesired behaviour of automatically submitting the form when using the spinner controls in the `NumericInput` component, by setting their `type` attribute ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#431](https://github.com/teamleadercrm/ui/pull/431))
- `Button`: fixed the faulty border style of our primary & secondary button when disabled ([@driesd](https://github.com/driesd) in [#424](https://github.com/teamleadercrm/ui/pull/424))

## [0.17.0] - 2018-10-26

### Added

- `NumericInput`: added the `NumericInput` component, which is now the recommended component for rendering inputs with number values ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#411](https://github.com/teamleadercrm/ui/pull/411))
- `ErrorText`: added the `ErrorText` component ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#407](https://github.com/teamleadercrm/ui/pull/407))
- `NumericInput`: added indication of the spinners click ablity, by changing the cursor to a pointer when hovering over it ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#417](https://github.com/teamleadercrm/ui/pull/417))
- `ValidationText`: added the `ValidationText` component ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#418](https://github.com/teamleadercrm/ui/pull/418))

### Changed

- `DatePickerInput`: left aligned the `DatePickerInput` text ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#415](https://github.com/teamleadercrm/ui/pull/415))
- `Input` (small & large): decreased its height to meet the height of our `Button` & `Select` components ([@driesd](https://github.com/driesd) in [#408](https://github.com/teamleadercrm/ui/pull/408))
- `Select` (multi value): decreased the margin around a selected item to meet the height of our `Button` & `Input` components ([@driesd](https://github.com/driesd) in [#408](https://github.com/teamleadercrm/ui/pull/408))

### Removed

- [BREAKING] `Input`: removed the parsing of number values ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#411](https://github.com/teamleadercrm/ui/pull/411))
- [BREAKING] `Input`: removed the binding to a set minimum and maximum ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#411](https://github.com/teamleadercrm/ui/pull/411))
- [BREAKING] `Input`: removed the spinner controls ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#411](https://github.com/teamleadercrm/ui/pull/411))

### Fixed

- `DatePickerInput`: fixed the days still being selectable after passing `dayPickerProps` with `disabledDays` ([@ArnaudWeyts](https://github.com/arnaudweyts) in [#414](https://github.com/teamleadercrm/ui/pull/414))
- `DataGrid`: fixed the ability to set its `selectable` property to `true` and/or set the value of `stickyLeft` greater than 0, without supplying the `HeaderRowOverlay` to it ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#412](https://github.com/teamleadercrm/ui/pull/412))
- `DatePicker`: fixed the DatePicker collapsing when the parent element resizes ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#410](https://github.com/teamleadercrm/ui/pull/410))
- `DatePicker`, `Dialog`, `Menu`, `Popover`, `QTip`, `Select` & `Toast`: fixed the z-index values ([@driesd](https://github.com/driesd) in [#420](https://github.com/teamleadercrm/ui/pull/420))

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
