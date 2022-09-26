## [unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

- `DatePickerInput`: fix the DatePicker input value not changing if the selectedDate prop changes and extend `DayPickerProps` with React's DayPickerProps ([@BeirlaenAaron](https://github.com/BeirlaenAaron)) in [#2376](https://github.com/teamleadercrm/ui/pull/2376))

### Dependency updates

## [16.2.1] - 2022-09-23

### Fixed

- `Tooltip`: `tooltipActive` correctly close tooltip when prop is removed to restore behavior before 16.1.0 ([@lorgan3](https://github.com/lorgan3)) in [#2374](https://github.com/teamleadercrm/ui/pull/2374))

## [16.2.0] - 2022-09-20

### Added

- `SplitButton`: `popoverProps` prop which allows overwriting the z-index, direction and height of the popover. ([@lorgan3](https://github.com/lorgan3)) in [#2369](https://github.com/teamleadercrm/ui/pull/2369))
- `SplitButton`: `processing` prop equivalent to processing on the regular button. ([@lorgan3](https://github.com/lorgan3)) in [#2370](https://github.com/teamleadercrm/ui/pull/2370))

## [16.1.1] - 2022-09-16

### Changed

- `Tooltip`: `children` prop is optional ([@qubis741](https://github.com/qubis741)) in [#2364](https://github.com/teamleadercrm/ui/pull/2364))

## [16.1.0] - 2022-09-16

### Added

- `Toggle`: `tooltip` and `tooltipPosition` props. ([@qubis741](https://github.com/qubis741)) in [#2355](https://github.com/teamleadercrm/ui/pull/2355))

## [16.0.4] - 2022-09-12

### Fixed

- `Dialog`: Fix close button alignment in cases where css order changes during build. ([@lorgan3](https://github.com/lorgan3)) in [#2351](https://github.com/teamleadercrm/ui/pull/2351))

## [16.0.3] - 2022-09-05

### Fixed

- `MenuItem`: Append invisible element before rendering menu items, so the first item doesn't get focused by default. ([@eniskraasniqi1](https://github.com/eniskraasniqi1)) in [#2344](https://github.com/teamleadercrm/ui/pull/2344))

## [16.0.2] - 2022-08-18

### Dependency updates

- `storybook`: Bump storybook from 6.5.9 to 6.5.10 ([@KristofColpaert](https://github.com/KristofColpaert)) in [#2327](https://github.com/teamleadercrm/ui/pull/2327)

## [16.0.1] - 2022-08-08

### Fixed

- `Checkbox`: pass `onClick` prop to the parent container ([@eniskraasniqi1](https://github.com/eniskraasniqi1)) in [#2314](https://github.com/teamleadercrm/ui/pull/2314))

## [16.0.0] - 2022-07-20

### Added

- `MarketingDialog`: Added new component ([@lorgan3](https://github.com/lorgan3) in [#2287](https://github.com/teamleadercrm/ui/pull/2287))
- `Dialog`: `hero` option as size ([@qubis741](https://github.com/qubis741)) in [#2290](https://github.com/teamleadercrm/ui/pull/2290))

### Fixed

- `DatePickerInput`: moved inputProps on top of `onClick` and `onFocus`, to make sure the component handlers will be called ([@eniskraasniqi1](https://github.com/eniskraasniqi1) in [#2285](https://github.com/teamleadercrm/ui/pull/2285)).

### Dependency updates

- [BREAKING] `node`: set minimum `node` version to `14.15.0` to bump `postcss-loader` ([@farazatarodi](https://github.com/farazatarodi) in [#2288](https://github.com/teamleadercrm/ui/pull/2288)).

## [15.0.5] - 2022-07-14

### Fixed

- `Popover`: remove unused `direction` prop from `getPosition` ([@eniskraasniqi1](https://github.com/eniskraasniqi1)) in [#2281](https://github.com/teamleadercrm/ui/pull/2281))
- `DatePickerInput`: moved inputProps to the bottom so it is not overwritten ([@BeirlaenAaron](https://github.com/BeirlaenAaron)) in [#2283](https://github.com/teamleadercrm/ui/pull/2283))

## [15.0.4] - 2022-07-13

### Added

- `Icon`: added ref forwarding ([@qubis741](https://github.com/qubis741)) in [#2279](https://github.com/teamleadercrm/ui/pull/2279))

### Changed

- `LabelValuePair`: decreased the margin-bottom for inline `LabelValuePair`'s ([@lowiebenoot](https://github.com/lowiebenoot)) in [#2280](https://github.com/teamleadercrm/ui/pull/2280))

## [15.0.3] - 2022-07-12

### Changed

- `useFocusTrap`: added exception for `ckEditor` elements to allow focusing ([@qubis741](https://github.com/qubis741)) in [#2273](https://github.com/teamleadercrm/ui/pull/2273))

## [15.0.2] - 2022-07-11

### Fixed

- `Input`: controlled Inputs could get ouf sync when the controlled value was changed outside of the component (thus not via the onChange handler) ([@lowiebenoot](https://github.com/lowiebenoot)) in [#2271](https://github.com/teamleadercrm/ui/pull/2271))

## [15.0.1] - 2022-07-08

### Changed

- `Dialog.Body`: made `handleShowScrollShadow` optional ([@qubis741](https://github.com/qubis741)) in [#2263](https://github.com/teamleadercrm/ui/pull/2263))

## [15.0.0] - 2022-07-06

### Added

- `Dialog`: scroll shadow at the bottom of dialog if scroll bar is displayed ([@qubis741](https://github.com/qubis741)) in [#2222](https://github.com/teamleadercrm/ui/pull/2222))

### Changed

- `Pagination`: always show arrows ([@qubis741](https://github.com/qubis741)) in [#2221](https://github.com/teamleadercrm/ui/pull/2221))
- [BREAKING] `Timer`: `timerRef` prop to `ref` ([@qubis741](https://github.com/qubis741)) in [#2221](https://github.com/teamleadercrm/ui/pull/2221))

## [14.8.0] - 2022-06-21

### Added

- `Grid`: Add two props to set column and row gap separately ([@BeirlaenAaron](https://github.com/BeirlaenAaron) in [#2214](https://github.com/teamleadercrm/ui/pull/2214))

## [14.7.1] - 2022-06-17

### Added

- `EmailSelector`: Allow the autocomplete menu to take the same width as it's input with the `menuFullWidth` prop ([@BeirlaenAaron](https://github.com/BeirlaenAaron) in [#2205](https://github.com/teamleadercrm/ui/pull/2205))
- `EmailSelector`: A prop to disable the removal of the initial emailaddress ([@stefaandevylder](https://github.com/stefaandevylder)) in [#2197](https://github.com/teamleadercrm/ui/pull/2197))
- `Label`: `tooltipProps` prop to allow customisation of Label's tooltip ([@qubis741](https://github.com/qubis741)) in [#2207](https://github.com/teamleadercrm/ui/pull/2207))

### Fixed

- `Flex, Grid`: move ref from component props to the forwardRef argument ([@farazatarodi](https://github.com/farazatarodi) in [#2203](https://github.com/teamleadercrm/ui/pull/2203)).

## [14.6.1] - 2022-06-10

### Fixed

- `Dialog, DialogBase`: Fix blurriness with certain text content in webkit-based browsers ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2191](https://github.com/teamleadercrm/ui/pull/2191))

## [14.6.0] - 2022-06-02

### Added

- `Flex`: a new component used for layouts ([@farazatarodi](https://github.com/farazatarodi) in [#2185](https://github.com/teamleadercrm/ui/pull/2185))
- `Grid`: a new component used for layouts ([@farazatarodi](https://github.com/farazatarodi) in [#2186](https://github.com/teamleadercrm/ui/pull/2186))

## [14.5.7] - 2022-05-26

### Fixed

- `Dialog`: used proper `ref` creator ([@qubis741](https://github.com/qubis741) in [#2175](https://github.com/teamleadercrm/ui/pull/2175))

## [14.5.6] - 2022-05-26

### Added

- `EmailSelector`: `warning` property ([@qubis741](https://github.com/qubis741) in [#2170](https://github.com/teamleadercrm/ui/pull/2170))

## [14.5.5] - 2022-05-19

### Removed

- `Internal`: Remove cssnano option from `postcss.config.js`, end users should be responsible for the minification ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2155](https://github.com/teamleadercrm/ui/pull/2155))

## [14.5.4] - 2022-05-18

### Fixed

- `Toggle`: `label` property type ([@qubis741](https://github.com/qubis741) in [#2152](https://github.com/teamleadercrm/ui/pull/2152))

## [14.5.3] - 2022-05-18

### Changed

- `Toggle`: Changed width from full to adaptive ([@qubis741](https://github.com/qubis741) in [#2143](https://github.com/teamleadercrm/ui/pull/2143))

### Removed

- `Badge`: removed auto-blur on mouse events ([@driesd](https://github.com/driesd) in [#2113](https://github.com/teamleadercrm/ui/pull/2113))

## [14.5.2] - 2022-05-13

### Fixed

- `IconMenu`: Fix IconMenu closing right away in projects using React 17 ([@lorgan3](https://github.com/lorgan3) in [#2138](https://github.com/teamleadercrm/ui/pull/2138))

## [14.5.1] - 2022-05-12

### Fixed

- `Box`: Added missing props for Box Component ([@eniskrasniqi1](https://github.com/eniskraasniqi1) in [#2131](https://github.com/teamleadercrm/ui/pull/2131))

## [14.5.0] - 2022-05-10

### Dependency updates

- `React`: Add support for react 17 as a peer dependency ([@lorgan3](https://github.com/lorgan3) in [#2118](https://github.com/teamleadercrm/ui/pull/2118))

## [14.4.0] - 2022-05-04

### Added

- `Avatar, AvatarStack`: Added `tooltip` property ([@lowiebenoot](https://github.com/lowiebenoot) in [#2105](https://github.com/teamleadercrm/ui/pull/2105))

## [14.3.2] - 2022-04-25

### Fixed

- `Box, Counter`: Components not included in build ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2098](https://github.com/teamleadercrm/ui/pull/2098))

## [14.3.1] - 2022-04-21

### Fixed

- Type files not being included when publishing to npm ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2096](https://github.com/teamleadercrm/ui/pull/2096))

## [14.3.0] - 2022-04-21

### Changed

- `Box, Counter`: Converted to native Typescript instead of using loose declaration file ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2090](https://github.com/teamleadercrm/ui/pull/2090))

## [14.2.0] - 2022-04-20

### Added

- `Widget, Widget.Header`: Added the `onClick` property to enable click event on Widget Header ([@farazatarodi](https://github.com/farazatarodi) in [#2089](https://github.com/teamleadercrm/ui/pull/2089))
- `Select`: Added the `menuHorizontalOffset` property to allow offsetting where the menu is displayed ([@lorgan3](https://github.com/lorgan3) in [#2085](https://github.com/teamleadercrm/ui/pull/2085))

## [14.1.0] - 2022-04-12

### Added

- `Dialog, DialogBase`: Added the `form` and `onSubmit` properties to render a Dialog as a form ([@lorgan3](https://github.com/lorgan3) in [#2074](https://github.com/teamleadercrm/ui/pull/2074))

### Fixed

- `NumericInput`: Prevent mousedown events from creating event loops ([@jelledc](https://github.com/jelledc) in [#2078](https://github.com/teamleadercrm/ui/pull/2078))

## [14.0.0] - 2022-04-05

### Removed

- [BREAKING] `Alert`: removed `children` prop, use `body` instead ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2067](https://github.com/teamleadercrm/ui/pull/2067))

### Fixed

- `Alert`: Fixed double margin between title and buttons when no `body` is provided ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2067](https://github.com/teamleadercrm/ui/pull/2067))
- `Alert`: Center align title and body text ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2067](https://github.com/teamleadercrm/ui/pull/2067))

## [13.0.1] - 2022-03-31

### Fixed

- `Label`: fixed import ([@qubis741](https://github.com/qubis741) in [#2065](https://github.com/teamleadercrm/ui/pull/2065))

## [13.0.0] - 2022-03-31

### Added

- [BREAKING]`Label`: `tooltip` property ([@qubis741](https://github.com/qubis741) in [#2061](https://github.com/teamleadercrm/ui/pull/2061))

### Changed

- [BREAKING]`Label`: visual representation of `required` property ([@qubis741](https://github.com/qubis741) in [#2061](https://github.com/teamleadercrm/ui/pull/2061))
- `Checkbox, RadioButton, Toggle`: `paddingTop` style ([@qubis741](https://github.com/qubis741) in [#2061](https://github.com/teamleadercrm/ui/pull/2061))
- `Checkbox, RadioButton, Toggle`: text component in `small` and `medium` size ([@qubis741](https://github.com/qubis741) in [#2061](https://github.com/teamleadercrm/ui/pull/2061))

### Removed

- `Label`: `helpText` property ([@qubis741](https://github.com/qubis741) in [#2061](https://github.com/teamleadercrm/ui/pull/2061))
- [BREAKING]`Label`: `connectedLeft` property ([@qubis741](https://github.com/qubis741) in [#2061](https://github.com/teamleadercrm/ui/pull/2061))
- [BREAKING]`Label`: `connectedRight` property ([@qubis741](https://github.com/qubis741) in [#2061](https://github.com/teamleadercrm/ui/pull/2061))

## [12.5.0] - 2022-03-30

### Added

- `Alert`: added new component ([@driesd](https://github.com/driesd) in [#2057](https://github.com/teamleadercrm/ui/pull/2057))
- `Dialog`: added `leftAction` property ([@driesd](https://github.com/driesd) in [#2058](https://github.com/teamleadercrm/ui/pull/2058))

### Changed

- `Dialog`: changed `tertiaryAction` from a `Link` to a `Button` component ([@driesd](https://github.com/driesd) in [#2058](https://github.com/teamleadercrm/ui/pull/2058))

### Removed

- `Dialog`: remove `draggable` property. `Dialog` is draggable by default, when a `title` property is set. ([@driesd](https://github.com/driesd) in [#2059](https://github.com/teamleadercrm/ui/pull/2059))
- `Dialog`: remove `headerColor` property ([@driesd](https://github.com/driesd) in [#2058](https://github.com/teamleadercrm/ui/pull/2058))
- `Dialog`: remove `headerIcon` property ([@driesd](https://github.com/driesd) in [#2058](https://github.com/teamleadercrm/ui/pull/2058))

## [12.4.1] - 2022-03-23

### Fixed

- `Dialog`: fix redundant padding next to the header title when no headerIcon is passed ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2052](https://github.com/teamleadercrm/ui/pull/2052))

## [12.4.0] - 2022-03-17

### Added

- `Avatar`: Added object-fit to the image inside the Avatar component. ([@stefaandevylder](https://github.com/stefaandevylder) in [#2034](https://github.com/teamleadercrm/ui/pull/2034))
- `Dialog`: Added `draggable` property ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2040](https://github.com/teamleadercrm/ui/pull/2040))
- `DialogBase`: Added `dragHandleRef` property ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2040](https://github.com/teamleadercrm/ui/pull/2040))

### Changed

- `Dialog`: header title will now overflow into ellipsis instead of wrapping to the next line ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2042](https://github.com/teamleadercrm/ui/pull/2042))

### Removed

- `Dialog`: removed the `headingLevel` property, the previous default (3) will be used ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#2042](https://github.com/teamleadercrm/ui/pull/2042))

### Fixed

- `EmailSelector`: Fix suggestions not always going away when clicking away ([@lorgan3](https://github.com/lorgan3) in [#2041](https://github.com/teamleadercrm/ui/pull/2041))

## [12.3.0] - 2022-02-28

### Changed

- `Select`: Changed the margin of the menu to 3px ([@JorenSaeyTL](https://github.com/JorenSaeyTL) in [#2008](https://github.com/teamleadercrm/ui/pull/2008))
- `Popover`: Changed the Popover offset to 3px ([@JorenSaeyTL](https://github.com/JorenSaeyTL) in [#2008](https://github.com/teamleadercrm/ui/pull/2008))

### Fixed

- `SingleLineInputBase`: Fixed input being 2px too large when applying `width: 100%`. ([@stefaandevylder](https://github.com/stefaandevylder) in [#2014](https://github.com/teamleadercrm/ui/pull/2014))

### Dependency updates

## [12.2.1] - 2022-02-25

### Fixed

- `MarketingButtonGroup`: Added `MarketingButtonGroup.Button` to type index. ([@jelledc](https://github.com/jelledc) in [#2009](https://github.com/teamleadercrm/ui/pull/2009))

## [12.2.0] - 2022-02-25

### Added

- `EmailSelector`: Added new component. ([@lorgan3](https://github.com/lorgan3) in [#2002](https://github.com/teamleadercrm/ui/pull/2002))
- `MarketingButtonGroup`: Added new component. ([@jelledc](https://github.com/jelledc) in [#2003](https://github.com/teamleadercrm/ui/pull/2003))

## [12.1.3] - 2022-02-18

### Changed

- `Dialog`: added `size` prop to documentation, Footer has top border ([@qubis741](https://github.com/qubis741) in [#1993](https://github.com/teamleadercrm/ui/pull/1993))
- `Select`: added `size` prop to documentation ([@qubis741](https://github.com/qubis741) in [#1993](https://github.com/teamleadercrm/ui/pull/1993))

## [12.1.2] - 2022-02-14

### Fixed

- `Dialog`: onEscKeyDown not triggering ([@qubis741](https://github.com/qubis741) in [#1971](https://github.com/teamleadercrm/ui/pull/1971))

## [12.1.1] - 2022-02-02

### Fixed

- `Overlay`: Prevent clicks in underlying dialogs from closing parent overlays ([@jelledc](https://github.com/jelledc) in [#1958](https://github.com/teamleadercrm/ui/pull/1958))

## [12.1.0] - 2022-01-28

### Added

- `IconButton`: added the `processing` state ([@driesd](https://github.com/driesd) in [#1940](https://github.com/teamleadercrm/ui/pull/1940))

### Fixed

- `Overlay`: Restored mouse event propagation ([@jelledc](https://github.com/jelledc) in [#1938](https://github.com/teamleadercrm/ui/pull/1938))

## [12.0.0] - 2022-01-25

### Added

- `BadgedLink`: ([@qubis741](https://github.com/qubis741) in [#1925](https://github.com/teamleadercrm/ui/pull/1925))

### Removed

- [BREAKING] `Pagination, Button`: Removed the `inverse` property ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1890](https://github.com/teamleadercrm/ui/pull/1890))
- [BREAKING] `StatusBullet, TimerPulser, DatePickerRange, DatePickerInputRange`: ([@qubis741](https://github.com/qubis741) in [#1889](https://github.com/teamleadercrm/ui/pull/1889))
- [BREAKING] `ScrollContainer`: ([@qubis741](https://github.com/qubis741) in [#1891](https://github.com/teamleadercrm/ui/pull/1891))
- [BREAKING] `LoadingMolecule`: ([@qubis741](https://github.com/qubis741) in [#1888](https://github.com/teamleadercrm/ui/pull/1888))
- `IslandGroup`, `Island`, `Section`: removed `dark` property ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1892](https://github.com/teamleadercrm/ui/pull/1892))
- [BREAKING] `Link`: removed `icon` and `badged` property ([@qubis741](https://github.com/qubis741) in [#1925](https://github.com/teamleadercrm/ui/pull/1925))

### Fixed

- `Button`: fixed `Spinner` size when `Button` size is `tiny` ([@qubis741](https://github.com/qubis741) in [#1931](https://github.com/teamleadercrm/ui/pull/1931))

### Dependency updates

- Upgraded all dependencies to latest except `react`, `react-dom`, `react-day-picker` (latest is beta), `postcss-preset-env`, `postcss-each` ([@qubis741](https://github.com/qubis741) in [#1893](https://github.com/teamleadercrm/ui/pull/1893))

## [11.0.0] - 2021-12-20

### Added

- `Widget`, `IslandGroup`: added ref forwarding ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1877](https://github.com/teamleadercrm/ui/pull/1877))

### Changed

- [BREAKING] `Checkbox`, `Input`, `TimeInput`, `NumericInput`, `SingleLineInputBase`, `Textarea`, `RadioButton`, `Select`, `Toggle`: due to the `style` prop now being part of `boxProps`, the property will no longer get passed to the internal elements, but rather the wrapping `Box`, same as `classname` ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1877](https://github.com/teamleadercrm/ui/pull/1877))

### Dependency updates

- [BREAKING] `react-select`: Bump react-select from 4.3.1 to 5.2.1 [#1849](https://github.com/teamleadercrm/ui/pull/1849)
  - This release of react-select is mostly compatible with existing versions, but make sure to double check if you're replacing internal Components like the `ValueContainer`, since the internal CSS has been revamped to use css grid. See https://react-select.com/upgrade#from-v4-to-v5 for the detailed migration guide.

## [10.1.2] - 2021-12-16

### Fixed

- `WysiwygEditor`: Render LinkOptions on top of editor when rendered in a dialog ([@lorgan3](https://github.com/lorgan3) in [#1876](https://github.com/teamleadercrm/ui/pull/1876))

## [10.1.1] - 2021-11-08

### Fixed

- `Overlay`: Prevent click events in the `Overlay` from propagating to the parent ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1836](https://github.com/teamleadercrm/ui/pull/1836))

## [10.1.0] - 2021-11-05

### Changed

- Increase z-index from 400 to 403 on Dialog overlays ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1834](https://github.com/teamleadercrm/ui/pull/1834))

## [10.0.1] - 2021-11-04

### Fixed

- `Overlay`: fix faulty onOverlayClick trigger if the click origin isn't part of DOM tree ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1828](https://github.com/teamleadercrm/ui/pull/1828))
- `Select`: prevent redundant complete re-renders of the DropdownIndicator and ClearIndicator component ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1828](https://github.com/teamleadercrm/ui/pull/1828))

## [10.0.0] - 2021-11-04

### Changed

- [BREAKING] `Overlay`: `onClick`'s behavior has been replaced by `onOverlayClick`, which now passes a `mousedown` event instead of a `click` event ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1823](https://github.com/teamleadercrm/ui/pull/1823))

### Fixed

- `Overlay, Dialog, Popover`: Fix dragging outside of the Overlay causing the Overlay to close ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1823](https://github.com/teamleadercrm/ui/pull/1823))

## [9.1.0] - 2021-10-13

### Added

- `Tooltip`: Add `tooltipActive` to allow showing the tooltip programmatically ([@lorgan3](https://github.com/lorgan3) in [#1809](https://github.com/teamleadercrm/ui/pull/1809))

## [9.0.0] - 2021-10-11

### Changed

- `DatePicker`: Change the background for today's button ([@lowiebenoot](https://github.com/lowiebenoot) in [#1803](https://github.com/teamleadercrm/ui/pull/1803))

### Fixed

- `DatePickerInput`: Fixed that in case a select was previously rendered, the month picker would be rendered below the DatePicker ([@lorgan3](https://github.com/lorgan3) in [#1806](https://github.com/teamleadercrm/ui/pull/1806))

### Dependency updates

- [BREAKING] `luxon` from `1.28.0` to `2.0.2`, this upgrade drops support for IE11 and older browsers, for more information see https://moment.github.io/luxon/#/matrix

## [8.3.0] - 2021-09-13

### Added

- `DurationInput`: add `small`, `medium` (default) and `large` size property ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1789](https://github.com/teamleadercrm/ui/pull/1794))

### Fixed

- `DatePicker`: Pass localeUtils to support different locales out of the box ([@lorgan3](https://github.com/lorgan3) in [#1791](https://github.com/teamleadercrm/ui/pull/1791))

## [8.2.0] - 2021-09-06

### Changed

- `ProgressTracker`: Adjust vertical spacing ([@lorgan3](https://github.com/lorgan3) in [#1784](https://github.com/teamleadercrm/ui/pull/1784))

### Fixed

- `types`: Fix types for components with static properties ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1789](https://github.com/teamleadercrm/ui/pull/1789))

## [8.1.2] - 2021-08-23

### Fixed

- `PoweredByButton`: Inline svgs ([@lorgan3](https://github.com/lorgan3) in [#1770](https://github.com/teamleadercrm/ui/pull/1770))

### Dependency updates

- `postcss-nested` from `5.0.5` to `5.0.6 `
- `cssnano` from `5.0.6` to `5.0.7`
- `@teamleader/ui-illustrations` from `1.2.0` to `1.3.0`
- `@storybook/addon-backgrounds` from `6.3.4` to `6.3.7`
- `@storybook/addon-doc`s from `6.3.6` to `6.3.7`

## [8.1.1] - 2021-08-16

### Fixed

- `PoweredByButton`: Expose component ([@lorgan3](https://github.com/lorgan3) in [#1757](https://github.com/teamleadercrm/ui/pull/1757))
- `types`: Update and improve TypeScript types ([@lorgan3](https://github.com/lorgan3) in [#1757](https://github.com/teamleadercrm/ui/pull/1757))

### Dependency updates

- `react-resize-detector` from `6.7.3` to `6.7.4`
- `@babel/cli` from `7.14.5` to `7.14.8`
- `path-parse` from `1.0.6` to `1.0.7`
- `postcss` from `8.3.5` to `8.3.6`
- `@storybook/addon-controls` from `6.3.1` to `6.3.7`

## [8.1.0] - 2021-08-04

### Added

- `PoweredByButton`: Added new component. ([@lorgan3](https://github.com/lorgan3) in [#1745](https://github.com/teamleadercrm/ui/pull/1745))

### Dependency updates

- `eslint` from `7.29.0` to `7.32.0`
- `tar` from `4.4.13` to `4.4.15`
- `@teamleader/ui-icons` from `1.3.0` to `1.5.0`
- `@babel/preset-env` from `7.14.8` to `7.14.9`
- `@storybook/addon-docs` from `6.3.4` to `6.3.6`
- `@storybook/react` from `6.3.1` to `6.3.6`
- `@teamleader/ui-illustrations` from `1.1.0` to `1.2.0`

## [8.0.1] - 2021-07-20

### Fixed

- `FilterSelection`: Fix text color when hovering, add background color to clear button when focused ([@JorenSaey](https://github.com/JorenSaeyTL) in [#1741](https://github.com/teamleadercrm/ui/pull/1741))
- `AsyncSelect`: Also pass the `inputActionMeta` to the `onInputChange` handler ([@lowiebenoot](https://github.com/lowiebenoot) in [#1743](https://github.com/teamleadercrm/ui/pull/1743))

### Dependency updates

- `eslint-plugin-react` from `7.23.2` to `7.24.0`

## [8.0.0] - 2021-07-14

### Changed

- `DurationInput`: Don't allow more characters than needed ([@jnstr](https://github.com/jnstr) in [#1738](https://github.com/teamleadercrm/ui/pull/1738))

### Removed

- [BREAKING] `Select`: `menuPortalTarget` has been removed, the Select's menu now always renders on a custom div at the bottom of the body ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1737))

### Fixed

- `Overlay`: the overlay now stops propagating the escape key event when active, even when no escape handler is attached ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1737))
- `Overlay`: the overlay allows events originating from children to fulfil their default action ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1737))
- `NumericInput`: fix stepper controls not updating the value of the input ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1737))
- `Select` & `Overlay`: a compatibility issue with the Select and Overlay component has been fixed ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1737))

## [7.0.0] - 2021-07-12

### Added

- `FilterSelection` Add FilterSelectionComponent ([@JorenSaeyTL](https://github.com/JorenSaeyTL) in [#1717](https://github.com/teamleadercrm/ui/pull/1717))
- [BREAKING] `Button`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1727))
- [BREAKING] `Input`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1727))
- [BREAKING] `DurationInput`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1727))
- [BREAKING] `NumericInput`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1727))
- [BREAKING] `TextArea`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1727))
- [BREAKING] `TimeInput`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1727))
- [BREAKING] `IconButton`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1736](https://github.com/teamleadercrm/ui/pull/1736))
- [BREAKING] `Link`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1736](https://github.com/teamleadercrm/ui/pull/1736))
- [BREAKING] `TitleTab`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1736](https://github.com/teamleadercrm/ui/pull/1736))
- [BREAKING] `MarketingButton`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1736](https://github.com/teamleadercrm/ui/pull/1736))
- [BREAKING] `MarketingTab`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1736](https://github.com/teamleadercrm/ui/pull/1736))
- [BREAKING] `MarketingLink`: now correctly forwards its `ref` prop ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1736](https://github.com/teamleadercrm/ui/pull/1736))

### Changed

- [BREAKING] `Overlay`: The Overlay component should contain children instead of being positioned adjacent to children ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1729))
- `Overlay`: lower the color opacity of the overlay ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1729))
- `Dialog`: has been made aria compliant, enabling keyboard navigation ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1731))
- `Popover`: has been made aria compliant, enabling keyboard navigation ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1731))
- [BREAKING] `Popover`: Popovers now mount straight on the body instead of a self-made div ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1731))

### Removed

- [BREAKING] `QTip`: This component has been removed ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1729))
- [BREAKING]: `Dialog`: Removed the onOverlayMouseDown, onOverlayMouseMove, onOverlayMouseUp properties ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1729))
- [BREAKING]: `Popover`: Removed the onOverlayMouseDown, onOverlayMouseMove, onOverlayMouseUp properties ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1729))

### Fixed

- `FilterSelection` Add Keyboard accessibility, remove unused style and fix clear handler ([@JorenSaeyTL](https://github.com/JorenSaeyTL) in [#1721](https://github.com/teamleadercrm/ui/pull/1721))
- `FilterSelection` Fixed height and hover state ([@JorenSaeyTL](https://github.com/JorenSaeyTL) in [#1722](https://github.com/teamleadercrm/ui/pull/1722))
- Display names on multiple components (for debugging) ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1727](https://github.com/teamleadercrm/ui/pull/1727))
- `Overlay`: Pressing ESC now closes the relevant overlay, instead of all overlays ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1729))
- `DatePicker`: `formatDate` util function signature ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1729](https://github.com/teamleadercrm/ui/pull/1729))

## [6.6.0] - 2021-07-01

### Changed

- `Popover`: Fall back to adjacent directions when there is not enough space in the preferred direction ([@EOSullivanBerlin](https://github.com/EOSullivanBerlin) in [#1710](https://github.com/teamleadercrm/ui/pull/1710))

## [6.5.1] - 2021-06-29

### Fixed

- `DurationInput`: Fix duration input overlapping other elements ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1704](https://github.com/teamleadercrm/ui/pull/1704))

## [6.5.0] - 2021-06-18

### Added

- `DurationInput`: Added `id` property ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1698](https://github.com/teamleadercrm/ui/pull/1698))

## [6.4.0] - 2021-06-18

### Added

- `DurationInput`: Added `error` property ([@jnstr](https://github.com/jnstr) in [#1689](https://github.com/teamleadercrm/ui/pull/1689))
- `DurationInput`: Added `max` property ([@jnstr](https://github.com/jnstr) in [#1689](https://github.com/teamleadercrm/ui/pull/1689))

### Fixed

- `NumericInput` - increasing or decreasing the stepper should be rounded to the step ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1694](https://github.com/teamleadercrm/ui/pull/1694))

## [6.3.0] - 2021-06-15

### Added

- `NumericInput` Holding the keyboard up/down arrows increases/decreases the value ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1687](https://github.com/teamleadercrm/ui/pull/1687))

### Changed

- `DurationInput`: The step size for minutes has been increased to 15 ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1687](https://github.com/teamleadercrm/ui/pull/1687))
- `DurationInput`: The hours input now has a padded "0" similar to the minutes input ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1687](https://github.com/teamleadercrm/ui/pull/1687))

### Fixed

- `Toggle`: Fix layout ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1672](https://github.com/teamleadercrm/ui/pull/1672))

## [6.2.0] - 2021-06-07

### Fixed

- `DurationInput`: Consistent empty values ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1652](https://github.com/teamleadercrm/ui/pull/1652))
- `NumericInput`: Make stepper dispatch native onChange events ([@JorenSaeyTL](https://github.com/JorenSaeyTL) in [#1659](https://github.com/teamleadercrm/ui/pull/1659))

### Dependency updates

- `@babel/plugin-transform-react-jsx-source` from `7.12.13` to `7.14.2`
- `@storybook/addon-controls` from `6.2.8` to `6.2.9`
- `@storybook/addon-docs` from `6.2.8` to `6.2.9`
- `@storybook/addon-knobs` from `6.2.8` to `6.2.9`
- `@teamleader/ui-typography` from `2.0.1` to `2.0.2`
- `css-loader` from `5.2.4` to `5.2.6`
- `eslint-config-standard` from `16.0.2` to `16.0.3`
- `eslint` from `7.26.0` to `7.27.0`
- `husky` from `4.3.8` to `6.0.0`
- `postcss ` from `8.2.14` to `8.3.0`
- `react-resize-detector` from `6.7.1` to `6.7.2`
- `react-select` from `3.0.4` to `4.3.1`
- `react-transition-group` from `4.4.1` to `4.4.2`
- `storybook-addon-designs` from `5.4.5` to `6.0.0`

## [6.1.0] - 2021-05-20

### Added

- `DurationInput`: Added textAlignRight property ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1650](https://github.com/teamleadercrm/ui/pull/1650))

## [6.0.0] - 2021-05-20

### Added

- `DurationInput`: Added DurationInput component to enter hours and minutes ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1646](https://github.com/teamleadercrm/ui/pull/1646))

### Changed

- :boom: `ProgressTracker`: replaced `alternating` prop with `labelPosition` (`top` / `bottom` / `alternating`). ([@lorgan3](https://github.com/lorgan3) in [#1641](https://github.com/teamleadercrm/ui/pull/1641))
- `ProgressTracker`: Update design to be more accessible. ([@lorgan3](https://github.com/lorgan3) in [#1641](https://github.com/teamleadercrm/ui/pull/1641))
- `NumericInput`: Allow clicking and holding on the stepper controls ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1646](https://github.com/teamleadercrm/ui/pull/1646))
- `NumericInput` [Internal]: Removed redundant internal state ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1646](https://github.com/teamleadercrm/ui/pull/1646))
- `DurationInput`: Follow up changes to the newly added duration input ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1647](https://github.com/teamleadercrm/ui/pull/1647))

### Removed

- :boom: `Pagination`: removed props `prevPageText` and `nextPageText`. ([@driesd](https://github.com/driesd) in [#1643](https://github.com/teamleadercrm/ui/pull/1643))

### Dependency updates

- `@storybook/addon-backgrounds` from `6.2.8` to `6.2.9`
- `@storybook/ui` from `6.2.8` to `6.2.9`
- `eslint` from `7.25.0` to `7.26.0`
- `eslint-config-prettier` from `8.2.0` to `8.3.0`
- `hosted-git-info` from `2.8.5` to `2.8.9`
- `postcss` from `8.2.12` to `8.2.14`
- `postcss-import` `14.0.1` to `14.0.2`
- `ua-parser-js` from `0.7.20` to `0.7.28`

## [5.0.0] - 2021-05-10

### Changed

- :boom: `SilentBanner`: changed component name to `Message`. ([@driesd](https://github.com/driesd) in [#1612](https://github.com/teamleadercrm/ui/pull/1612))

### Removed

- :boom: `CompactMessage`: removed component. ([@driesd](https://github.com/driesd) in [#1612](https://github.com/teamleadercrm/ui/pull/1612))
- :boom: `Message`: removed component. ([@driesd](https://github.com/driesd) in [#1612](https://github.com/teamleadercrm/ui/pull/1612))
- :boom: `Input`: removed `width: 100%` from the component's wrapper. ([@driesd](https://github.com/driesd) in [#1617](https://github.com/teamleadercrm/ui/pull/1617))

### Dependency updates

- `@babel/cli` from `7.13.14` to `7.13.16`
- `@babel/core` from `7.13.15` to `7.13.16`
- `@babel/preset-react` from `7.12.13` to `7.13.13`
- `@babel/runtime` from `7.13.10` to `7.13.17`
- `@teamleader/ui-icons` from `1.1.0` to `1.1.2`
- `@teamleader/ui-illustrations` from `1.0.0` to `1.1.0`
- `classnames` from `2.2.6` to `2.3.1`
- `css-loader` from `5.2.1` to `5.2.4`
- `eslint` from `7.24.0` to `7.25.0`
- `eslint-config-prettier` from `8.1.0` to `8.2.0`
- `eslint-plugin-prettier` from `3.3.1` to `3.4.0`
- `eslint-plugin-react` from `7.23.1` to `7.23.2`
- `is-svg` from `4.2.1` to `4.3.1`
- `postcss` from `8.2.8` to `8.2.12`
- `postcss-import` from `14.0.0` to `14.0.1`
- `react-draft-wysiwyg` from `1.14.5` to `1.14.6`
- `react-resize-detector` from `6.6.4` to `6.6.5`

## [4.6.0] - 2021-04-19

### Added

- `Select`: allow passing a ref to the inner react-select component. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1605](https://github.com/teamleadercrm/ui/pull/1605))

## [4.5.1] - 2021-04-16

### Changed

- `Timer`: changed the wrapper's `display` prop from `inline-flex` to `flex`. ([@driesd](https://github.com/driesd) in [#1599](https://github.com/teamleadercrm/ui/pull/1599))

### Dependency updates

- `@storybook/addons` from `6.1.21` to `6.2.8`

## [4.5.0] - 2021-04-15

### Changed

- `Timer`: updated according to latest design specs. ([@driesd](https://github.com/driesd) in [#1595](https://github.com/teamleadercrm/ui/pull/1595))

### Dependency updates

- `ssri` from `8.0.0` to `8.0.1`
- `css-loader` from `5.1.3` to `5.2.1`
- `react-dev-utils` from `11.0.3` to `11.0.4`

## [4.4.0] - 2021-04-13

### Added

- `Input`: add tiny size variant. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1591](https://github.com/teamleadercrm/ui/pull/1591))

### Fixed

- `Select`: fix input and placeholder spacing ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1592](https://github.com/teamleadercrm/ui/pull/1592))

## [4.3.0] - 2021-04-07

### Added

- `Select`: added tiny size variant. ([@driesd](https://github.com/driesd) in [#1586](https://github.com/teamleadercrm/ui/pull/1586))

### Changed

- Replaced storybook-state usages with the useState react hook. ([@timdegroote](https://github.com/timdegroote) in [#1566](https://github.com/teamleadercrm/ui/pull/1566))

### Fixed

- `SplitButton`: fixed text overflow with ellipsis. ([@driesd](https://github.com/driesd) in [#1584](https://github.com/teamleadercrm/ui/pull/1584))

### Dependency updates

- `@sambego/storybook-state` (removed in [#1566](https://github.com/teamleadercrm/ui/pull/1566))
- `@babel/preset-env` from `7.13.9` to `7.13.12`
- `@teamleader/ui-illustrations` from `0.0.36` to `1.0.0`
- `@teamleader/ui-icons` from `1.0.0` to `1.1.0`
- `css-loader` from `5.1.1` to `5.1.3`
- `eslint` from `7.21.0` to `7.22.0`
- `eslint-plugin-react` from `7.22.0` to `7.23.1`
- `highlight.js` from `10.4.0` to `10.4.1`
- `node-fetch` from `2.6.0` to `2.6.1`
- `react-day-picker` from `7.4.8` to `7.4.10`
- `react-resize-detector` from `6.6.1` to `6.6.4`

## [4.2.0] - 2021-03-12

### Changed

- `Badge`: changes the height of the small sized component from 24px to 18px. ([@driesd](https://github.com/driesd) in [#1556](https://github.com/teamleadercrm/ui/pull/1556))

### Fixed

- Fixed font weight issue by upgrading `@teamleader/ui-typography` to the latest version. ([@driesd](https://github.com/driesd) in [#1560](https://github.com/teamleadercrm/ui/pull/1560))

### Dependency updates

- `@babel/cli from 7.12.13 to 7.13.10`
- `@babel/plugin-transform-runtime from 7.13.9 to 7.13.10`
- `@teamleader/ui-typography` from `2.0.0` to `2.0.1`

## [4.1.0] - 2021-03-10

### Added

- `MarketingHeading2`: added new component. ([@driesd](https://github.com/driesd) in [#1552](https://github.com/teamleadercrm/ui/pull/1552))
- `MarketingLockBadge`: added new component. ([@driesd](https://github.com/driesd) in [#1541](https://github.com/teamleadercrm/ui/pull/1541))
- `MarketingStatusLabel`: added new component. ([@driesd](https://github.com/driesd) in [#1550](https://github.com/teamleadercrm/ui/pull/1550))
- `MarketingTab`: added new component. ([@driesd](https://github.com/driesd) in [#1551](https://github.com/teamleadercrm/ui/pull/1551))

### Dependency updates

- `@babel/core` from `7.13.8` to `7.13.10`
- `@babel/plugin-transform-runtime` from `7.13.7` to `7.13.9`
- `@babel/preset-env` from `7.12.17` to `7.13.9`
- `@babel/runtime` from `7.13.7` to `7.13.10`
- `@storybook/react` from `6.1.18` to `6.1.20`
- `@storybook/addon-backgrounds` from `6.1.18` to `6.1.21`
- `@storybook/addon-controls` from `6.1.20` to `6.1.21`
- `@storybook/addon-docs` from `6.1.20` to `6.1.21`
- `@storybook/addon-knobs` from `6.1.20` to `6.1.21`
- `@storybook/addons` from `6.1.18` to `6.1.21`
- `@storybook/react` from `6.1.20` to `6.1.21`
- `@storybook/ui` from `6.1.18` to `6.1.21`
- `@teamleader/ui-typograhpy` from `1.0.0` to `2.0.0`. ([@driesd](https://github.com/driesd) in [#1537](https://github.com/teamleadercrm/ui/pull/1537))
- `css-loader` from `5.0.2` to `5.1.1`
- `elliptic` from `6.5.3` to `6.5.4`
- `eslint-config-prettier` from `8.0.0` to `8.1.0`
- `postcss-nested` from `5.0.3` to `5.0.5`
- `postcss` from `8.2.6` to `8.2.7`

## [4.0.0] - 2021-03-02

### Added

- `MarketingButton`: added new component. ([@driesd](https://github.com/driesd) in [#1510](https://github.com/teamleadercrm/ui/pull/1510))
- `MarketingMarker`: added new component. ([@driesd](https://github.com/driesd) in [#1515](https://github.com/teamleadercrm/ui/pull/1515))
- `MarketingHeading1`: added new component. ([@driesd](https://github.com/driesd) in [#1516](https://github.com/teamleadercrm/ui/pull/1516))
- `MarketingLink`: added new component. ([@driesd](https://github.com/driesd) in [#1522](https://github.com/teamleadercrm/ui/pull/1522))

### Changed

- :boom: `Tag`: only the remove button remains interactable. ([@driesd](https://github.com/driesd) in [#1502](https://github.com/teamleadercrm/ui/pull/1502))

### Removed

- :boom: `Tag`: removed props `disabled`, `onClick` & `selected`. ([@driesd](https://github.com/driesd) in [#1502](https://github.com/teamleadercrm/ui/pull/1502))

### Dependency updates

- `@babel/core` from `7.12.17` to `7.13.8`
- `@babel/plugin-transform-runtime` from `7.12.15` to `7.13.7`
- `@babel/runtime` from `7.12.13` to `7.13.7`
- `@storybook/addon-controls` from `6.1.16` to `6.1.20`
- `@storybook/addon-docs` from `6.1.18` to `6.1.20`
- `@storybook/addon-knobs` from `6.1.17` to `6.1.20`
- `@teamleader/ui-icons` from `0.2.31` to `0.2.32`
- `eslint` from `7.19.0` to `7.21.0`
- `eslint-config-prettier` from `7.2.0` to `8.0.0`
- `eslint-plugin-promise` from `4.2.1` to `4.3.1`
- `luxon` from `1.25.0` to `1.26.0`
- `react-resize-detector` from `5.2.0` to `6.6.1`
- `storybook-addon-designs` from `5.4.3` to `5.4.5`

## [3.2.0] - 2021-02-22

### Added

- `StatusLabel`: added text-overflow mode. ([@driesd](https://github.com/driesd) in [#1498](https://github.com/teamleadercrm/ui/pull/1498))

### Dependency updates

- `@babel/core` from `7.12.13` to `7.12.17`
- `@babel/preset-env` from `7.12.11` to `7.12.17`
- `@storybook/addons` from `6.1.16` to `6.1.18`
- `@storybook/addon-backgrounds` from `6.1.17` to `6.1.18`
- `@storybook/addon-docs` from `6.1.17` to `6.1.18`
- `@storybook/react` from `6.1.17` to `6.1.18`
- `@storybook/ui` from `6.1.16` to `6.1.18`
- `css-loader` from `4.2.1` to `5.0.2`
- `postcss` from `8.2.5` to `8.2.6`

## [3.1.0] - 2021-02-09

### Changed

- `Select`: changed `menuPlacement` prop to have `auto` as default value. ([@driesd](https://github.com/driesd) in [#1485](https://github.com/teamleadercrm/ui/pull/1485))

### Dependency updates

- `@storybook/addon-knobs` from `6.1.16` to `6.1.17`
- `@babel/runtime` from `7.12.5` to `7.12.13`

## [3.0.0] - 2021-02-09

### Changed

- [Breaking] `Select`: changed `menuShouldBlockScroll` to be the default value. ([@driesd](https://github.com/driesd) in [#1482](https://github.com/teamleadercrm/ui/pull/1482))

### Dependency updates

- `@babel/plugin-transform-runtime` from `7.12.13` to `7.12.15`

## [2.4.1] - 2021-02-08

### Fixed

- `Select`: fixed menu portal target logic. ([@driesd](https://github.com/driesd) in [#1474](https://github.com/teamleadercrm/ui/pull/1474))

### Dependency updates

- `@babel/cli` from `7.12.10` to `7.12.13`
- `@babel/core` from `7.12.10` to `7.12.13`
- `@babel/plugin-proposal-export-default-from` from `7.12.1` to `7.12.13`
- `@babel/plugin-proposal-private-methods` from `7.12.1` to `7.12.13`
- `@babel/plugin-transform-runtime` from `7.12.10` to `7.12.13`
- `@babel/plugin-transform-react-jsx-source` from `7.12.1` to `7.12.13`
- `@babel/preset-react` from `7.12.10` to `7.12.13`
- `@storybook/react` from `6.1.16` to `6.1.17`
- `@storybook/addon-docs` from `6.1.16` to `6.1.17`
- `@storybook/addon-backgrounds` from `6.1.16` to `6.1.17`
- `postcss` from `8.2.4` to `8.2.5`

## [2.4.0] - 2021-02-03

### Added

- `MenuItem`: added `children` prop. ([@driesd](https://github.com/driesd) in [#1465](https://github.com/teamleadercrm/ui/pull/1465))

### Dependency updates

- `@storybook/addon-backgrounds` from `6.1.14` to `6.1.16`
- `@storybook/addon-docs` from `6.1.14` to `6.1.16`
- `@storybook/addon-knobs` from `6.1.14` to `6.1.16`
- `@storybook/addon-controls` from `6.1.14` to `6.1.16`
- `@storybook/addons` from `6.1.14` to `6.1.16`
- `@storybook/react` from `6.1.14` to `6.1.16`
- `@storybook/ui` from `6.1.14` to `6.1.16`
- `eslint` from `7.18.0` to `7.19.0`

## [2.3.0] - 2021-01-22

### Added

- `DataGrid BodyRow`: added forwardRef. ([@driesd](https://github.com/driesd) in [#1422](https://github.com/teamleadercrm/ui/pull/1422))
- `DataGrid FooterRow`: added forwardRef. ([@driesd](https://github.com/driesd) in [#1422](https://github.com/teamleadercrm/ui/pull/1422))
- `DataGrid HeaderRow`: added forwardRef. ([@driesd](https://github.com/driesd) in [#1422](https://github.com/teamleadercrm/ui/pull/1422))
- `DataGrid Row`: added forwardRef. ([@driesd](https://github.com/driesd) in [#1422](https://github.com/teamleadercrm/ui/pull/1422))

### Changed

- `DataGrid`: changed from using `findDOMNode` to be using refs. ([@driesd](https://github.com/driesd) in [#1422](https://github.com/teamleadercrm/ui/pull/1422))
- `Menu`: changed from using `findDOMNode` to be using refs. ([@driesd](https://github.com/driesd) in [#1422](https://github.com/teamleadercrm/ui/pull/1422))

### Fixed

- `Counter`: improve centering when zooming out in Chrome on windows. ([@lowiebenoot](https://github.com/lowiebenoot) in [#1436](https://github.com/teamleadercrm/ui/pull/1436))

### Dependency updates

- `@storybook/addons` from `6.1.11` to `6.1.14`
- `@storybook/addon-docs` from `6.1.12` to `6.1.14`
- `@storybook/ui` from `6.1.12` to `6.1.14`
- `@teamleader/ui-illustrations` from `0.0.35` to `0.0.36`
- `babel-loader` from `8.1.0` to `8.2.2`
- `eslint` from `7.17.0` to `7.18.0`
- `eslint-config-prettier` from `7.1.0` to `7.2.0`
- `eslint-config-standard` from `14.1.1` to `16.0.2`
- `eslint-config-standard-react` from `9.2.0` to `11.0.1`. ([@driesd](https://github.com/driesd) in [#1422](https://github.com/teamleadercrm/ui/pull/1422))
- `eslint-plugin-import` from `2.22.0` to `2.22.1`
- `husky` from `4.3.7` to `4.3.8`
- `postcss-loader` from `4.1.0` to `4.2.0`
- `storybook-addon-designs` from `5.4.2` to `5.4.3`

## [2.2.2] - 2021-01-15

### Dependency updates

- `react-select`: downgrade from `3.0.11` to `3.0.4`

## [2.2.1] - 2021-01-14

### Fixed

- `Dialog`: fixed the horizontal positioning. ([@driesd](https://github.com/driesd) in [#1416](https://github.com/teamleadercrm/ui/pull/1416))
- `ProgressTracker`: Make sure bars are not misaligned on different zoomlevels. ([@lorgan3](https://github.com/lorgan3) in [#1378](https://github.com/teamleadercrm/ui/pull/1378))

### Dependency updates

- `@babel/core` from `7.12.9` to `7.12.10`
- `@babel/plugin-transform-runtime` from `7.12.1` to `7.12.10`
- `@babel/preset-env` from `7.12.7` to `7.12.11`
- `@babel/preset-react` from `7.12.7` to `7.12.10`
- `@storybook/addon-backgrounds` from `6.1.5` to `6.1.14`
- `@storybook/addon-controls` from `6.1.5` to `6.1.14`
- `@storybook/addon-docs` from `6.1.5` to `6.1.12`
- `@storybook/addon-knobs` from `6.1.9` to `6.1.14`
- `@storybook/react` from `6.1.9` to `6.1.14`
- `@storybook/ui` from `6.1.10` to `6.1.12`
- `@teamleader/ui-icons` from `0.2.30` to `0.2.31`
- `@teamleader/ui-illustrations` from `0.0.33` to `0.0.35`
- `eslint` from `7.5.0` to `7.17.0`
- `eslint-config-prettier` from `6.11.0` to `7.1.0`
- `eslint-plugin-prettier` from `3.1.4` to `3.3.1`
- `eslint-plugin-standard` from `4.0.1` to `5.0.0`
- `eslint-plugin-react` from `7.20.6` to `7.22.0`
- `file-loader` from `6.0.0` to `6.2.0`
- `husky` from `4.2.5` to `4.3.7`
- `image-webpack-loader` from `6.0.0` to `7.0.1`
- `ini` from `1.3.5` to `1.3.8`
- `moment` from `2.27.0` to `2.29.1`
- `postcss` from `8.2.0` to `8.2.4`
- `postcss-cli` from `8.3.0` to `8.3.1`
- `postcss-custom-media` from `7.0.8` to `8.0.0`
- `postcss-import` from `13.0.0` to `14.0.0`
- `pretty-quick` from `2.0.1` to `3.1.0`
- `react-dom` from `16.13.1` to `16.14.0`
- `react-select` from `3.0.4` to `3.1.1`
- `style-loader` from `1.2.1` to `2.0.0`
- `webpack` from `4.44.2` to `4.46.0`

## [2.2.0] - 2020-12-17

### Added

- `Select`: Pass size property to the Select component, allowing custom components to access it. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1375](https://github.com/teamleadercrm/ui/pull/1375))

## [2.1.0] - 2020-12-15

### Added

- `ProgressTracker`: Added support for `alternating` and `color` props. ([@lorgan3](https://github.com/lorgan3) in [#1368](https://github.com/teamleadercrm/ui/pull/1368))
- `ProgressStep`: Added a `meta` prop for displaying additional info below the label. ([@lorgan3](https://github.com/lorgan3) in [#1368](https://github.com/teamleadercrm/ui/pull/1368))

### Changed

- `Dependencies`: removed redundant postcss-mixins, cleaned up postcss configuration and dependency definition ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1366](https://github.com/teamleadercrm/ui/pull/1366))

## [2.0.0] - 2020-12-10

### Changed

- `DialogBase`: Removed redundant wrapper in dialog rendering implementation ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1361](https://github.com/teamleadercrm/ui/pull/1361))

### Dependency updates

- Removed `html-webpack-plugin` because it's not used anymore ([@lowiebenoot](https://github.com/lowiebenoot) in [#1346](https://github.com/teamleadercrm/ui/pull/1346))
- [Breaking] `postcss` from `7.0.17` to `8.2.0` ([@lowiebenoot](https://github.com/lowiebenoot) in [#1360](https://github.com/teamleadercrm/ui/pull/1360)). This removes support for Node 11 and 13.
- [Breaking] `postcss-cli` from `7.0.0` to `8.3.0` ([@lowiebenoot](https://github.com/lowiebenoot) in [#1360](https://github.com/teamleadercrm/ui/pull/1360)).
- [Breaking] `postcss-loader` from `3.0.0` to `4.1.0` ([@lowiebenoot](https://github.com/lowiebenoot) in [#1360](https://github.com/teamleadercrm/ui/pull/1360)).
- [Breaking] `postcss-import` from `12.0.1` to `13.0.0` ([@lowiebenoot](https://github.com/lowiebenoot) in [#1360](https://github.com/teamleadercrm/ui/pull/1360)).
- [Breaking] `postcss-mixins` from `6.2.1` to `7.0.1` ([@lowiebenoot](https://github.com/lowiebenoot) in [#1360](https://github.com/teamleadercrm/ui/pull/1360)).
- [Breaking] `postcss-nested` from `4.1.2` to `5.0.3` ([@lowiebenoot](https://github.com/lowiebenoot) in [#1360](https://github.com/teamleadercrm/ui/pull/1360)).
- [Breaking] `postcss-reporter` from `6.0.1` to `7.0.2` ([@lowiebenoot](https://github.com/lowiebenoot) in [#1360](https://github.com/teamleadercrm/ui/pull/1360)).
- `@storybook/addon-backgrounds` from `6.0.0-rc.15` to `6.1.5`
- `@storybook/addon-controls` from `6.0.0-beta.15` to `6.1.5`
- `@storybook/addon-docs` from `6.0.0-rc.15` to `6.1.5`
- `@storybook/addon-knobs` from `6.0.0-rc.15` to `6.1.9`
- `@storybook/addons` from `6.0.0-rc.15` to `6.1.9`
- `@storybook/react` from `6.0.0-rc.15` to `6.1.9`
- `@storybook/theming` from `6.0.0-rc.15` to `6.1.5`
- `@storybook/ui` from `6.0.0-rc.15` to `6.1.9`
- `prettier` from `2.1.0` to `2.2.0`

## [1.0.11] - 2020-11-23

### Added

- `Select`: added `truncateOptionText` boolean prop (default false) which enable truncation of long option text words, but still makes multiline possible. ([@driesd](https://github.com/driesd) in [#1335](https://github.com/teamleadercrm/ui/pull/1335))

### Changed

- `DatePicker`: changed the `MonthPicker` to have better text-overflow handling. ([@driesd](https://github.com/driesd) in [#1335](https://github.com/teamleadercrm/ui/pull/1335))
- `DatePicker`: changed styles to match our new design specs. ([@driesd](https://github.com/driesd) in [#1338](https://github.com/teamleadercrm/ui/pull/1338))

### Dependency updates

- `@teamleader/ui-icons` from `0.2.29` to `0.2.30` ([@driesd](https://github.com/driesd) in [#1339](https://github.com/teamleadercrm/ui/pull/1339))
- `@teamleader/ui-typography` from `0.2.3` to `1.0.0` ([@driesd](https://github.com/driesd) in [#1339](https://github.com/teamleadercrm/ui/pull/1339))

## [1.0.10] - 2020-11-19

### Fixed

- `IconMenu`: fixed positioning of the menu. ([@driesd](https://github.com/driesd) in [#1328](https://github.com/teamleadercrm/ui/pull/1328))
- `Menu`: fixed warning when outline width is undefined. ([@driesd](https://github.com/driesd) in [#1327](https://github.com/teamleadercrm/ui/pull/1327))

## [1.0.9] - 2020-11-18

### Changed

- `IconMenu`: changed to preserve the visibility of the IconButton when the IconMenu is open. ([@driesd](https://github.com/driesd) in [#1324](https://github.com/teamleadercrm/ui/pull/1324))

### Fixed

- `Menu`: fixed the border-width rendering which occasionally resulted in zero pixels. ([@driesd](https://github.com/driesd) in [#1325](https://github.com/teamleadercrm/ui/pull/1325))

## [1.0.8] - 2020-10-28

### Fixed

- `Avatar`: fixed unwanted text-decoration when `element` is an anchor tag ([@driesd](https://github.com/driesd) in [#1319](https://github.com/teamleadercrm/ui/pull/1319))

## [1.0.7] - 2020-10-20

### Added

- `Button`: added a `tiny` size ([@driesd](https://github.com/driesd) in [#1314](https://github.com/teamleadercrm/ui/pull/1314))

## [1.0.6] - 2020-09-25

### Dependency updates

- [security] `draft-js` from `0.11.6` to `0.11.7` ([@lorgan3](https://github.com/lorgan3) in [#1298](https://github.com/teamleadercrm/ui/pull/1298))

## [1.0.5] - 2020-09-08

### Changed

- `Dependencies`: Set "@storybook/addon-docs" as a DevDependency instead of a regular dependency.([@sanderbrugge](https://github.com/sanderbrugge) in [#1296](https://github.com/teamleadercrm/ui/pull/1296))

## [1.0.4] - 2020-09-03

### Fixed

- `AvatarOverlay` Full height overlays are now correctly rounded for round and medium Avatars. ([@sanderbrugge](https://github.com/sanderbrugge) in [#1292](https://github.com/teamleadercrm/ui/pull/1292))

## [1.0.3] - 2020-09-02

### Added

- `AvatarImage/AvatarInitials`: Added hover functionality for the AvatarInitials and AvatarImage components, which allows medium-sized Avatars to display a full height edit action ([@sanderbrugge](https://github.com/sanderbrugge) in [#1290](https://github.com/teamleadercrm/ui/pull/1290))

### Fixed

- `Badge/Tag`: when a Badge/Tag is not clickable, it now uses a div as element by default instead of a button ([@lowiebenoot](https://github.com/lowiebenoot) in [#1269](https://github.com/teamleadercrm/ui/pull/1269))
- `Badge/Tag`: a clickable Badge/Tag now has a `type="button"` to avoid submitting forms when clicking on the Badge/Tag ([@lowiebenoot](https://github.com/lowiebenoot) in [#1269](https://github.com/teamleadercrm/ui/pull/1269))

### Dependency updates

- `@babel/plugin-transform-runtime` from `7.10.5` to `7.11.0`
- [Security] `elliptic` from `6.5.2` to `6.5.3`
- `css-loader` from `3.6.0` to `4.2.1`
- [Security] `dot-prop` from `4.2.0` to `4.2.1`
- `eslint` from `7.4.0` to `7.5.0`
- `eslint-plugin-react` from `7.20.3` to `7.20.6`
- [Security] `lodash` from `4.17.15` to `4.17.19`
- `prettier` from `2.0.5` to `2.1.0`
- `webpack` from `4.43.0` to `4.44.1`

## [1.0.2] - 2020-07-13

### Changed

- `DatePicker`: add tabIndex property to footer, add onBlur property, and remove call to optional onClick ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1226](https://github.com/teamleadercrm/ui/pull/1226))

## [1.0.1] - 2020-07-08

### Changed

- `NumericInput`: call onBlur function if any of the steppers get blurred as well ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1223](https://github.com/teamleadercrm/ui/pull/1223))

## [1.0.0] - 2020-07-06

### Added

- `SilentBanner`: added `inline` boolean prop (default false), which will render the banner inline instead of taking full width. ([@driesd](https://github.com/driesd) in [#1220](https://github.com/teamleadercrm/ui/pull/1220))

### Changed

- :boom: `SilentBanner`: changed to take the full width by default. ([@driesd](https://github.com/driesd) in [#1220](https://github.com/teamleadercrm/ui/pull/1220))

### Removed

- :boom: `SilentBanner`: removed children's `TextBody` wrapper. ([@driesd](https://github.com/driesd) in [#1221](https://github.com/teamleadercrm/ui/pull/1221))

### Dependency updates

- `eslint` from `7.3.1` to `7.4.0`
- `postcss-nested` from `4.2.1` to `4.2.2`

## [0.48.6] - 2020-07-06

### Added

- `DatePickerInput` added `openPickerOnFocus` prop that's `true` by default ([@mikeverf](https://github.com/mikeverf) in [#1216](https://github.com/teamleadercrm/ui/pull/1216))

## [0.48.5] - 2020-07-03

### Added

- `TitleTab`: added forwardRef. ([@driesd](https://github.com/driesd) in [#1213](https://github.com/teamleadercrm/ui/pull/1213))

### Changed

- `TabGroup`: changed to always scroll to the active tab. ([@driesd](https://github.com/driesd) in [#1213](https://github.com/teamleadercrm/ui/pull/1213))

### Fixed

- `DatePicker`: French month names in the month picker not being 4 characters when the locale is the base french locale (fr) ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1212](https://github.com/teamleadercrm/ui/pull/1212))

## [0.48.4] - 2020-07-02

### Dependency updates

- `react-day-picker`: enforce upgrade to `7.4.8`. ([@lowiebneoot](https://github.com/lowiebneoot) in [#1210](https://github.com/teamleadercrm/ui/pull/1210))

## [0.48.3] - 2020-07-01

### Fixed

- `WysiwygEditor`: Fix typo which resulted in onFocus being called multiple times anyway ([@mikeverf](https://github.com/mikeverf) in [#1207](https://github.com/teamleadercrm/ui/pull/1207))
- `WysiwygEditor`: Fix race condition for refocussing editor after adding a link ([@mikeverf](https://github.com/mikeverf) in [#1207](https://github.com/teamleadercrm/ui/pull/1207))

## [0.48.2] - 2020-07-01

### Changed

- `Toggle`: changed to have consistent spacing between track and label for all sizes. ([@driesd](https://github.com/driesd) in [#1200](https://github.com/teamleadercrm/ui/pull/1200))

### Fixed

- `WysiwygEditor`: fixed onFocus and onBlur being called twice or not at all in some cases ([@mikeverf](https://github.com/mikeverf) in [#1205](https://github.com/teamleadercrm/ui/pull/1205))

### Dependency updates

- `@babel/cli` from `7.10.3` to `7.10.4`
- `@babel/runtime` from `7.10.3` to `7.10.4`
- `@babel/core` from `7.10.3` to `7.10.4`
- `@babel/plugin-proposal-export-default-from` from `7.8.3` to `7.10.4`
- `@babel/plugin-transform-react-jsx-source` from `7.10.0` to `7.10.4`
- `@babel/plugin-transform-runtime` from `7.10.3` to `7.10.4`
- `@babel/preset-env` from `7.10.3` to `7.10.4`
- `@babel/preset-react` from `7.10.0` to `7.10.4`

## [0.48.1] - 2020-06-30

### Fixed

- `WysiwygEditor`: fixed build error due to unsupported typing ([@mikeverf](https://github.com/mikeverf) in [#1198](https://github.com/teamleadercrm/ui/pull/1198))

## [0.48.0] - 2020-06-30

### Added

- `WysiwygEditor`: added `autoFocus` prop ([@mikeverf](https://github.com/mikeverf) in [#1196](https://github.com/teamleadercrm/ui/pull/1196))
- `WysiwygEditor`: added `onInputFocus` and `onInputBlur` props ([@mikeverf](https://github.com/mikeverf) in [#1196](https://github.com/teamleadercrm/ui/pull/1196))
- `WysiwygEditor`: added `onKeyDown` prop ([@mikeverf](https://github.com/mikeverf) in [#1196](https://github.com/teamleadercrm/ui/pull/1196))
- `Toggle`: added `maxLines` prop and pass it to the label `Text` component. ([@driesd](https://github.com/driesd) in [#1194](https://github.com/teamleadercrm/ui/pull/1194))

### Changed

- `DatePicker`: added one extra character to the `short month labels` for the `French` language. ([@driesd](https://github.com/driesd) in [#1187](https://github.com/teamleadercrm/ui/pull/1187))
- `DatePickerInput`: added `footer` prop, which can take a custom component to render underneath the date picker. ([@driesd](https://github.com/driesd) in [#1193](https://github.com/teamleadercrm/ui/pull/1193))

### Removed

- :boom: `DatePickerInput`: removed `bordered` prop as the `Popover` already provides one. ([@driesd](https://github.com/driesd) in [#1195](https://github.com/teamleadercrm/ui/pull/1195))

### Fixed

- `WysiwygEditor`: added `onFocus` and `onBlur` props now focus and blur reliably on the entire editor ([@mikeverf](https://github.com/mikeverf) in [#1196](https://github.com/teamleadercrm/ui/pull/1196))

### Dependency updates

- `eslint-plugin-babel` from `5.3.0` to `5.3.1`
- `eslint-plugin-import` from `2.21.2` to `2.22.0`
- `eslint-plugin-react` from `7.20.0` to `7.20.2`
- `storybook-addon-designs` from `5.3.0` to `5.4.0`

## [0.47.0] - 2020-06-24

### Added

- :boom: `Box`: added `forwardRef`. ([@driesd](https://github.com/driesd) in [#1183](https://github.com/teamleadercrm/ui/pull/1183))

### Dependency updates

- `eslint` from `7.3.0` to `7.3.1`
- `storybook-addon-designs` from `5.2.1` to `5.3.0`

## [0.46.3] - 2020-06-22

### Added

- The `ToastContainer` component now allows setting the `style` prop on the container ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1181](https://github.com/teamleadercrm/ui/pull/1181))

### Changed

- The `Menu` component now takes up the full width of its container ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1173](https://github.com/teamleadercrm/ui/pull/1173))

### Fixed

- `Radio`: fixed the inconsistent left margin in Firefox vs Chrome on Linux. ([@driesd](https://github.com/driesd) in [#1175](https://github.com/teamleadercrm/ui/pull/1175))

### Dependency updates

- Bump `@babel` to `7.10.3`
- Bump moment from `2.26.0` to `2.27.0`

## [0.46.2] - 2020-06-18

### Added

- `TabGroup`: added fading gradients to soften the edges of our scroll buttons. ([@driesd](https://github.com/driesd) in [#1169](https://github.com/teamleadercrm/ui/pull/1169))

### Fixed

- `Button`: fix blurring `onMouseUp` and `onMouseLeave`. ([@driesd](https://github.com/driesd) in [#1171](https://github.com/teamleadercrm/ui/pull/1171))
- `IconButton`: fix blurring `onMouseUp` and `onMouseLeave`. ([@driesd](https://github.com/driesd) in [#1170](https://github.com/teamleadercrm/ui/pull/1170))

### Dependency updates

- Bump `react-resize-detector` from `5.0.4` to `5.0.6`

## [0.46.1] - 2020-06-18

### Added

- `IconButton`: add tint prop to customize the tint of the icon inside of the button. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1156](https://github.com/teamleadercrm/ui/pull/1166))

### Dependency updates

- Bump react-resize-detector from `5.0.3` to `5.0.4`

## [0.46.0] - 2020-06-16

### Added

- `TabGroup`: added scrollable functionality when tabs start to overflow their container. ([@driesd](https://github.com/driesd) in [#1160](https://github.com/teamleadercrm/ui/pull/1160))

### Removed

- `IconTab`: removed component. ([@driesd](https://github.com/driesd) in [#1161](https://github.com/teamleadercrm/ui/pull/1161))

## [0.45.0] - 2020-06-16

### Changed

- `DatePicker`, `DatePickerInput`: Allow sizing the input and picker independently, fix alignment when using the `MonthPicker`. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1156](https://github.com/teamleadercrm/ui/pull/1156))

### Removed

- `TabGroup`: removed `inverted` prop, which caused the tabs to render with a dark teal background. ([@driesd](https://github.com/driesd) in [#1155](https://github.com/teamleadercrm/ui/pull/1155))

### Dependency updates

- [Security] Bump websocket-extensions from `0.1.3` to `0.1.4`
- Bump eslint from `7.1.0` to `7.2.0`
- Bump draft-js from `0.11.5` to `0.11.6`
- Bump eslint-plugin-import from `2.20.2` to `2.21.2`
- Bump eslint-plugin-prettier from `3.1.3` to `3.1.4`

## [0.44.2] - 2020-06-03

### Added

- `Tooltip`: added `zIndex` number prop (default 700). ([@driesd](https://github.com/driesd) in [#1148](https://github.com/teamleadercrm/ui/pull/1148))

### Changed

- `LabelValuePair`: only add vertical padding when label and value are displayed inline. ([@driesd](https://github.com/driesd) in [#1146](https://github.com/teamleadercrm/ui/pull/1146))

### Dependency updates

- `postcss` from `7.0.31` to `7.0.32`

## [0.44.1] - 2020-06-02

### Changed

- `Container`: changed to have `consistent horizontal padding` for `fluid` and `fixed` variants on each breakpoint. ([@driesd](https://github.com/driesd) in [#1144](https://github.com/teamleadercrm/ui/pull/1144))
- `Toast`: changed to have a `teal dark background` instead of teal darkest. ([@driesd](https://github.com/driesd) in [#1131](https://github.com/teamleadercrm/ui/pull/1131))

### Dependency updates

- `@babel/cli` from `7.8.3` to `7.10.1`
- `@babel/core` from `7.9.6` to `7.10.2`
- `@babel/runtime` from `7.9.6` to `7.10.2`
- `@babel/plugin-proposal-export-default-from` from `7.8.3` to `7.10.1`
- `@babel/plugin-transform-react-jsx-source` from `7.8.3` to `7.10.0`
- `@babel/plugin-transform-runtime` from `7.9.6` to `7.10.1`
- `@babel/preset-env` from `7.9.6` to `7.10.2`
- `@babel/preset-react` from `7.8.3` to `7.10.1`

## [0.44.0] - 2020-05-26

### Changed

- :boom: `Teal color`: changed the hex values of our `Teal dark & darkest` color variants. ([@driesd](https://github.com/driesd) in [#1111](https://github.com/teamleadercrm/ui/pull/1111))

### Fixed

- `LabelValuePair`: fixed right alignment for multiline text. ([@driesd](https://github.com/driesd) in [#1122](https://github.com/teamleadercrm/ui/pull/1122))

### Dependency updates

- `@storybook/addons` from `5.3.18` to `5.3.19`
- `@storybook/addon-backgrounds` from `5.3.18` to `5.3.19`
- `@storybook/addon-info` from `5.3.18` to `5.3.19`
- `@storybook/addon-knobs` from `5.3.18` to `5.3.19`
- `@storybook/react` from `5.3.18` to `5.3.19`
- `@storybook/ui` from `5.3.18` to `5.3.19`
- `eslint` from `6.8.0` to `7.1.0`
- `postcss` from `7.0.30` to `7.0.31`

## [0.43.7] - 2020-05-25

### Changed

- `Container`: changed breakpoint to a large screen (1440px) to avoid horizontal scrollbars. ([@driesd](https://github.com/driesd) in [#1116](https://github.com/teamleadercrm/ui/pull/1116))

### Dependency updates

- `react-select` from `3.1.0` to `3.0.4` ([@driesd](https://github.com/driesd) in [#1120](https://github.com/teamleadercrm/ui/pull/1120))
- `moment` from `2.25.3` to `2.26.0`

## [0.43.6] - 2020-05-19

### Changed

- `SilentBanner`: added a `white background` and `decreased left padding` when it has a color status. ([@driesd](https://github.com/driesd) in [#1112](https://github.com/teamleadercrm/ui/pull/1112))

## [0.43.5] - 2020-05-19

### Added

- `SilentBanner`: added as a new component. ([@driesd](https://github.com/driesd) in [#1109](https://github.com/teamleadercrm/ui/pull/1109))

## [0.43.4] - 2020-05-14

### Fixed

- `WysiwygEditor` Set `zIndex` of `LinkOptions` dialog to `401`, so that it's higher than the zIndex of a `Dialog`. ([@mikeverf](https://github.com/mikeverf) in [#1106](https://github.com/teamleadercrm/ui/pull/1106))
- `LabelValuePair` and `LabelValuePairGroup` were not exported. ([@lowiebenoot](https://github.com/lowiebenoot) in [#1107](https://github.com/teamleadercrm/ui/pull/1107))

## [0.43.3] - 2020-05-14

### Added

- `WysiwygEditor` Added `inputClassname` prop. ([@mikeverf](https://github.com/mikeverf) in [#1103](https://github.com/teamleadercrm/ui/pull/1103))
- `EmptyState`: added `hidePointer` boolean prop (default false). ([@driesd](https://github.com/driesd) in [#1104](https://github.com/teamleadercrm/ui/pull/1104))

### Changed

- `EmptyState`: changed meta text component to increase line-height from 18px to 21px. ([@driesd](https://github.com/driesd) in [#1104](https://github.com/teamleadercrm/ui/pull/1104))

## [0.43.2] - 2020-05-13

### Changed

- `Select`: changed so the selected options still show up in the list by default. ([@driesd](https://github.com/driesd) in [#1099](https://github.com/teamleadercrm/ui/pull/1099))

### Fixed

- `DatePickerInput` Fix months not being formatted according to the passed locale. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1098](https://github.com/teamleadercrm/ui/pull/1098))
- `WysiwygEditor` Fix input overflowing wrapper when wrapper has set height. ([@mikeverf](https://github.com/mikeverf) in [#1101](https://github.com/teamleadercrm/ui/pull/1101))

### Dependency updates

- `eslint-plugin-react` from `7.19.0` to `7.20.0`
- `postcss` from `7.0.29` to `7.0.30`

## [0.43.1] - 2020-05-11

### Added

- `LabelValuePair`, `LabelValuePair.Label` & `LabelValuePair.Value`: added new components. ([@driesd](https://github.com/driesd) in [#1095](https://github.com/teamleadercrm/ui/pull/1095))
- `LabelValuePairGroup`: added new component. ([@driesd](https://github.com/driesd) in [#1095](https://github.com/teamleadercrm/ui/pull/1095))

### Dependency updates

- `react-transition-group` from `4.3.0` to `4.4.1`

## [0.43.0] - 2020-05-11

### Added

- `Text`: added `maxLines` prop (number), which replaces `ellipsis`. ([@driesd](https://github.com/driesd) in [#1092](https://github.com/teamleadercrm/ui/pull/1092))

### Removed

- [Breaking] `Text`: removed `ellipsis` prop in order to use `maxLines` instead. ([@driesd](https://github.com/driesd) in [#1092](https://github.com/teamleadercrm/ui/pull/1092))

## [0.42.9] - 2020-05-07

### Changed

- `Button`: changed to handle spacing between icon an label with margin `Box` props, instead of dirty CSS. ([@driesd](https://github.com/driesd) in [#1072](https://github.com/teamleadercrm/ui/pull/1072))
- `SplitButton`: prevent scroll lock when showing `Popover` menu. ([@driesd](https://github.com/driesd) in [#1071](https://github.com/teamleadercrm/ui/pull/1071))
- `Popover`: set min width to 180px. ([@lorgan3](https://github.com/lorgan3) in [#1090](https://github.com/teamleadercrm/ui/pull/1090))

### Removed

- `Button`: removed an obsolete SVG alignment fix for Safari. ([@driesd](https://github.com/driesd) in [#1072](https://github.com/teamleadercrm/ui/pull/1072))

### Fixed

- `DatePicker`: fixed incorrect month being displayed on initial render. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#1067](https://github.com/teamleadercrm/ui/pull/1067))
- `IslandGroup`: fixed attempting to change props of invalid react elements (undefined, null, etc.). ([@timdegroote](https://github.com/timdegroote) in [#1089](https://github.com/teamleadercrm/ui/pull/1089))

### Dependency updates

- `@babel/core` from `7.9.0` to `7.9.6`
- `@babel/plugin-transform-runtime` from `7.9.0` to `7.9.6`
- `@babel/preset-env` from `7.9.5` to `7.9.6`
- `@babel/runtime` from `7.9.2` to `7.9.6`
- `@teamleader/ui-illustrations` from `0.0.31` to `0.0.32`
- `html-webpack-plugin` from `4.2.0` to `4.3.0`
- `luxon` from `1.23.0` to `1.24.1`
- `moment` from `2.24.0` to `2.25.3`
- `postcss` from `7.0.27` to `7.0.29`
- `postcss-cli` from `7.1.0` to `7.1.1`
- `storybook-addon-designs` from `5.2.0` to `5.2.1`
- `style-loader` from `1.2.0` to `1.2.1`

## [0.42.8] - 2020-04-27

### Added

- `Button`: handle overflowing text. ([@driesd](https://github.com/driesd) in [#1059](https://github.com/teamleadercrm/ui/pull/1059))

### Changed

- `Button`: replaced `span` wrapper, containing `label` & `children`, with our `UIText` components. ([@driesd](https://github.com/driesd) in [#1059](https://github.com/teamleadercrm/ui/pull/1059))
- `Datagrid`: changed the sorting arrow direction in `HeaderCell`. ([@driesd](https://github.com/driesd) in [#1060](https://github.com/teamleadercrm/ui/pull/1060))
- `Datagrid`: changed to use `UITextBody` for `HeaderCell` text. ([@driesd](https://github.com/driesd) in [#1060](https://github.com/teamleadercrm/ui/pull/1060))

### Fixed

- `Console warnings`: fixed console warnings in various components. ([@driesd](https://github.com/driesd) in [#1063](https://github.com/teamleadercrm/ui/pull/1063))

### Dependency updates

- `css-loader` from `3.5.2` to `3.5.3`
- `style-loader` from `1.1.4` to `1.2.0`

## [0.42.7] - 2020-04-23

### Fixed

- `WysiwygEditor`: Remove href attribute from `linkDecorator` of `WysiwygEditor`. ([@mikeverf](https://github.com/mikeverf) in [#1057](https://github.com/teamleadercrm/ui/pull/1057))

## [0.42.6] - 2020-04-23

### Changed

- `WysiwygEditor`: Make spacing between list items less high. ([@mikeverf](https://github.com/mikeverf) in [#1055](https://github.com/teamleadercrm/ui/pull/1055))

### Fixed

- `WysiwygEditor`: Make sure placeholder is positioned correctly on scroll. ([@mikeverf](https://github.com/mikeverf) in [#1055](https://github.com/teamleadercrm/ui/pull/1055))

## [0.42.5] - 2020-04-23

### Fixed

- `WysiwygEditor`: Fall back to `en` when `locale` prop isn't one of `en`, `it`, `nl`, `de`, `fr` or `es`. ([@mikeverf](https://github.com/mikeverf) in [#1052](https://github.com/teamleadercrm/ui/pull/1052))

### Dependency updates

- `react-day-picker` from `7.4.7` to `7.4.8`
- `eslint-config-prettier` from `6.10.1` to `6.11.0`

## [0.42.4] - 2020-04-23

### Added

- `WysiwygEditor`: Add type export. ([@mikeverf](https://github.com/mikeverf) in [#1050](https://github.com/teamleadercrm/ui/pull/1050))

## [0.42.3] - 2020-04-22

### Changed

- `Tag`: changed internally to use `Badge` components. ([@driesd](https://github.com/driesd) in [#1046](https://github.com/teamleadercrm/ui/pull/1046))

### Fixed

- `Tag`: fixed accidentally removed `onClick` prop. ([@driesd](https://github.com/driesd) in [#1046](https://github.com/teamleadercrm/ui/pull/1046))

## [0.42.2] - 2020-04-22

### Added

- `WysiywygEditor`: Allow boxProps that are now set on the wrapper box. ([@mikeverf](https://github.com/mikeverf) in [#1044](https://github.com/teamleadercrm/ui/pull/1044))

### Fixed

- `WysiywygEditor`: added list styling instead of relying on browser styling. ([@mikeverf](https://github.com/mikeverf) in [#1044](https://github.com/teamleadercrm/ui/pull/1044))

## [0.42.1] - 2020-04-22

### Added

- `Timer`: added as a new component. ([@driesd](https://github.com/driesd) in [#1039](https://github.com/teamleadercrm/ui/pull/1039))
- `Tooltip`: added `showTooltipDelay` prop that defaults to `100` (current default). ([@mikeverf](https://github.com/mikeverf) in [#1030](https://github.com/teamleadercrm/ui/pull/1030))
- `WysiywygEditor`: added functionality to add a link with the editor. ([@mikeverf](https://github.com/mikeverf) in [#1029](https://github.com/teamleadercrm/ui/pull/1029))
- `WysiywygEditor`: added tooltips to the toolbar options. ([@mikeverf](https://github.com/mikeverf) in [#1030](https://github.com/teamleadercrm/ui/pull/1030))
- `WysiywygEditor`: added `locale` prop and translations for the component. ([@mikeverf](https://github.com/mikeverf) in [#1037](https://github.com/teamleadercrm/ui/pull/1037))

### Changed

- `WysiywygEditor`: Link popover is now displayed at center of toolbar icon instead of at end, to avoid issues on smaller sizes. ([@mikeverf](https://github.com/mikeverf) in [#1038](https://github.com/teamleadercrm/ui/pull/1038))

### Fixed

- `WysiywygEditor`: Link popover can now handle buttons with long labels. ([@mikeverf](https://github.com/mikeverf) in [#1038](https://github.com/teamleadercrm/ui/pull/1038))
- `WysiywygEditor`: Certain links were handled as relative links, so didn't open correctly. ([@mikeverf](https://github.com/mikeverf) in [#1038](https://github.com/teamleadercrm/ui/pull/1038))

### Dependency updates

- `@teamleader/ui-icons` from `0.2.27` to `0.2.29`
- `@teamleader/ui-illustrations` from `0.0.30` to `0.0.31`
- `draft-js` from `0.10.5` to `0.11.5`
- `prettier` from `2.0.4` to `2.0.5`
- `react-day-picker` from `7.4.6` to `7.4.7`
- `react-draft-wysiwyg` from `1.14.4` to `1.14.5`
- `webpack` from `4.42.1` to `4.43.0`

## [0.42.0] - 2020-04-20

### Added

- `Badge`: added `size` prop with `small`, `medium` (default) & `large` as possible values. ([@driesd](https://github.com/driesd) in [#1014](https://github.com/teamleadercrm/ui/pull/1014))
- `Badge`: added `selected` boolean prop which shows the badge in a selected state. ([@driesd](https://github.com/driesd) in [#1014](https://github.com/teamleadercrm/ui/pull/1014))
- `IconButton`: added `large` size variation. ([@driesd](https://github.com/driesd) in [#1009](https://github.com/teamleadercrm/ui/pull/1009))
- `IconButton`: added `selected` boolean prop which shows the button in a selected state. ([@driesd](https://github.com/driesd) in [#1009](https://github.com/teamleadercrm/ui/pull/1009))
- `Link`: added `selected` boolean prop which shows the link in a selected state. ([@driesd](https://github.com/driesd) in [#1027](https://github.com/teamleadercrm/ui/pull/1027))
- `Tag`: added `selected` boolean prop which shows the tag in a selected state. ([@driesd](https://github.com/driesd) in [#1020](https://github.com/teamleadercrm/ui/pull/1020))
- `WysiwygEditor`: added a first basic version of this component. ([@mikeverf](https://github.com/mikeverf) in [#1021](https://github.com/teamleadercrm/ui/pull/1021))
- `WysiwygEditor`: added functionality to insert a list. ([@mikeverf](https://github.com/mikeverf) in [#1022](https://github.com/teamleadercrm/ui/pull/1022))
- `draft-js`: added as dependency. ([@mikeverf](https://github.com/mikeverf) in [#1021](https://github.com/teamleadercrm/ui/pull/1021))
- `react-draft-wysiwyg`: added as dependency. ([@mikeverf](https://github.com/mikeverf) in [#1021](https://github.com/teamleadercrm/ui/pull/1021))

### Changed

- `Badge`: adjusted visual states. ([@driesd](https://github.com/driesd) in [#1014](https://github.com/teamleadercrm/ui/pull/1014))
- `IconButton`: adjusted visual states. ([@driesd](https://github.com/driesd) in [#1009](https://github.com/teamleadercrm/ui/pull/1009))
- [Breaking] `IconButton`: changed attribute `data-teamleader-ui` value from `button` to `icon-button`. ([@driesd](https://github.com/driesd) in [#1009](https://github.com/teamleadercrm/ui/pull/1009))
- `Link`: adjusted visual states. ([@driesd](https://github.com/driesd) in [#1027](https://github.com/teamleadercrm/ui/pull/1027))
- `Tag`: adjusted visual states. ([@driesd](https://github.com/driesd) in [#1020](https://github.com/teamleadercrm/ui/pull/1020))

### Removed

- [Breaking] `Badge`: removed `inherit` mode. ([@driesd](https://github.com/driesd) in [#1014](https://github.com/teamleadercrm/ui/pull/1014))
- [Breaking] `Badge`: removed `inverse` mode. ([@driesd](https://github.com/driesd) in [#1014](https://github.com/teamleadercrm/ui/pull/1014))
- [Breaking] `Badge`: removed `color` variants. ([@driesd](https://github.com/driesd) in [#1014](https://github.com/teamleadercrm/ui/pull/1014))
- [Breaking] `Tag`: removed `inverse` mode. ([@driesd](https://github.com/driesd) in [#1020](https://github.com/teamleadercrm/ui/pull/1020))
- [Breaking] `Tag`: removed `color` variants. ([@driesd](https://github.com/driesd) in [#1020](https://github.com/teamleadercrm/ui/pull/1020))
- [Breaking] `Tag`: removed `onLabelClick` prop. Use `onClick` instead ([@driesd](https://github.com/driesd) in [#1020](https://github.com/teamleadercrm/ui/pull/1020))

### Dependency updates

- `@babel/preset-env from 7.9.0 to 7.9.5`
- `@teamleader/ui-icons from 0.2.26 to 0.2.27`
- `css-loader from 3.5.1 to 3.5.2`
- `eslint-plugin-prettier from 3.1.2 to 3.1.3`
- `husky from 4.2.3 to 4.2.5`
- `html-webpack-plugin from 4.0.4 to 4.2.0`
- `react-resize-detector from 4.2.1 to 4.2.3`
- `react-day-picker from 7.4.0 to 7.4.6`
- `style-loader from 1.1.3 to 1.1.4`

## [0.41.0] - 2020-04-09

### Added

- `DetailPage.Header`: added `titleColor` prop. Possible values are `neutral` and `teal` (default). ([@driesd](https://github.com/driesd) in [#1010](https://github.com/teamleadercrm/ui/pull/1010))
- `DataGrid`: added a `sortable` prop to the `HeaderCell`. ([@driesd](https://github.com/driesd) in [#1007](https://github.com/teamleadercrm/ui/pull/1007))

### Changed

- [Breaking] `DataGrid`: rendering of the sorting arrows now depends on the `sortable` prop instead of `onClick`. ([@driesd](https://github.com/driesd) in [#1007](https://github.com/teamleadercrm/ui/pull/1007))

### Removed

- [Breaking] `DataGrid`: removed `checkboxSize` prop, the `Checkbox` size will always be `small`. ([@driesd](https://github.com/driesd) in [#1007](https://github.com/teamleadercrm/ui/pull/1007))

### Fixed

- `DataGrid`: fixed unwanted overflow prevention for `Cells` containing a `Checkbox`. ([@driesd](https://github.com/driesd) in [#1007](https://github.com/teamleadercrm/ui/pull/1007))
- `DataGrid`: fixed `Cell` padding along each side of the vertical separator line. ([@driesd](https://github.com/driesd) in [#1007](https://github.com/teamleadercrm/ui/pull/1007))
- `Avatar`: fixed a react-dom warning where the team prop was put onto a div. ([@lowiebenoot](https://github.com/lowiebenoot) in [#1005](https://github.com/teamleadercrm/ui/pull/1005))
- `DetailPage.Header`: adding a className was not possible. ([@lowiebenoot](https://github.com/lowiebenoot) in [#1008](https://github.com/teamleadercrm/ui/pull/1008))

## [0.40.2] - 2020-04-08

### Added

- `EmptyState`: added as a new component and come in three sizes. `Title` and `metaText` are both optional. ([@driesd](https://github.com/driesd) in [#996](https://github.com/teamleadercrm/ui/pull/996))
- `Marker`: added as a new component. Can be used inside `Heading` and `Text` components. ([@driesd](https://github.com/driesd) in [#997](https://github.com/teamleadercrm/ui/pull/997))

### Changed

- `Container`: changed the min & max width from `990px` to `1056px`. ([@driesd](https://github.com/driesd) in [#1000](https://github.com/teamleadercrm/ui/pull/1000))
- `DataGrid`: decreased cell paddings with 6px. ([@driesd](https://github.com/driesd) in [#1003](https://github.com/teamleadercrm/ui/pull/1003))
- `Statuslabel`: changed internally to use `UIText components` instead of CSS styles. ([@driesd](https://github.com/driesd) in [#989](https://github.com/teamleadercrm/ui/pull/989))

### Dependency updates

- `@teamleader/ui-illustrations` from `0.0.28` to `0.0.30`
- `css-loader` from `3.4.2` to `3.5.1`
- `luxon` from `1.22.2` to `1.23.0`
- `prettier` from `2.0.2` to `2.0.4`

## [0.40.1] - 2020-04-02

### Added

- `Container`: added as a new component. Fluid width by default. Fixed width when passing `fixed` as boolean prop. ([@driesd](https://github.com/driesd) in [#977](https://github.com/teamleadercrm/ui/pull/977))
- `DetailPage`, `DetailPageBody` & `DetailPageHeader`: added as new components. ([@driesd](https://github.com/driesd) in [#983](https://github.com/teamleadercrm/ui/pull/983))
- `OverviewPage`, `OverviewPageBody` & `OverviewPageHeader`: added as new components. ([@driesd](https://github.com/driesd) in [#982](https://github.com/teamleadercrm/ui/pull/982))

### Dependency updates

- `@storybook/addon-backgrounds` from `5.3.17` to `5.3.18`
- `@storybook/addon-info` from `5.3.17` to `5.3.18`
- `@storybook/addon-knobs` from `5.3.17` to `5.3.18`
- `@storybook/addons` from `5.3.17` to `5.3.18`
- `@storybook/react` from `5.3.17` to `5.3.18`
- `@storybook/ui` from `5.3.17` to `5.3.18`
- `eslint-plugin-import` from `2.20.1` to `2.20.2`
- `eslint-plugin-node` from `11.0.0` to `11.1.0`
- `html-webpack-plugin` from `4.0.2` to `4.0.4`

## [0.40.0] - 2020-03-27

### Added

- `Typography`: added `UITextDisplay`, `UITextBody` & `UITextSmall` components. ([@driesd](https://github.com/driesd) in [#969](https://github.com/teamleadercrm/ui/pull/969))

### Removed

- [Breaking] `StatusLabel`: remove the hardcoded horizontal margin. You can optionally pass the `marginHorizontal` prop with a corresponding value. ([@driesd](https://github.com/driesd) in [#970](https://github.com/teamleadercrm/ui/pull/970))
- [Breaking] `Badge`: remove the hardcoded horizontal margin. You can optionally pass the `marginHorizontal` prop with a corresponding value. ([@driesd](https://github.com/driesd) in [#968](https://github.com/teamleadercrm/ui/pull/968))
- [Breaking] `BodyRow`: Removed check that stops `onClick` of `BodyRow` to be triggered when it's child `onClick` is triggered. Add `event.stopPropagation()` to the `onClick` of any children of `BodyRow` to ensure same behaviour. ([@mikeverf](https://github.com/mikeverf) in [#971](https://github.com/teamleadercrm/ui/pull/971))

### Dependency updates

- `@teamleader/ui-illustrations` from `0.0.26` to `0.0.28`
- `@teamleader/ui-typography` from `0.2.3` to `0.2.4`
- `@teamleader/ui-icons` from `0.2.25` to `0.2.26`
- `html-webpack-plugin` from `4.0.1` to `4.0.2`
- `luxon` from `1.22.0` to `1.22.2`

## [0.39.1] - 2020-03-25

### Added

- `Avatar`: added `team` prop (default `false`). ([@driesd](https://github.com/driesd) in [#953](https://github.com/teamleadercrm/ui/pull/953))
- `AvatarTeam`: rendered by the `Avatar` component when its `team` prop is `true`. ([@driesd](https://github.com/driesd) in [#953](https://github.com/teamleadercrm/ui/pull/953))

### Changed

- `AvatarStack`: only show a `+` sign in front of the overflow number when `displayMax` is greater than zero. ([@driesd](https://github.com/driesd) in [#949](https://github.com/teamleadercrm/ui/pull/949))

### Fixed

- `Widget`: having null as a child of a Widget was causing an error. ([@lowiebenoot](https://github.com/lowiebenoot) in [#961](https://github.com/teamleadercrm/ui/pull/961))

### Dependency updates

- `@babel/plugin-transform-react-jsx-source` from `7.8.3` to `7.9.0`
- `@babel/preset-env` from `7.8.7` to `7.9.0`
- `@babel/preset-react` from `7.8.3` to `7.9.4`
- `@teamleader/ui-icons` from `0.2.17` to `0.2.25`
- `html-webpack-plugin` from `4.0.0-beta.14` to `4.0.1`
- `prettier` from `1.19.1` to `2.0.2`
- `react-dom` from `16.13.0` to `16.13.1`
- `react-select` from `3.0.8` to `3.1.0`
- `webpack` from `4.42.0` to `4.42.1`

## [0.39.0] - 2020-03-23

### Changed

- [Breaking] `Widget.Header`: decreased vertical padding and switched to min-height & flexbox alignment. ([@driesd](https://github.com/driesd) in [#940](https://github.com/teamleadercrm/ui/pull/940))
- `AvatarStack`: changed `displayMax` default value from `0` to `99`. ([@driesd](https://github.com/driesd) in [#938](https://github.com/teamleadercrm/ui/pull/938))
- `StatusLabel`: changed background colors to their lighter variant for better contrast. ([@driesd](https://github.com/driesd) in [#937](https://github.com/teamleadercrm/ui/pull/937))

### Fixed

- `AvatarStack`: fixed an error when containing only one Avatar. ([@driesd](https://github.com/driesd) in [#938](https://github.com/teamleadercrm/ui/pull/938))
- `AvatarStack`: fixes the bounding box of the wrapper. ([@driesd](https://github.com/driesd) in [#939](https://github.com/teamleadercrm/ui/pull/939))

### Dependency updates

- [Breaking] `@teamleader/ui-colors` from `0.0.7` to `0.1.0`
- `@babel/core` from `7.8.7` to `7.9.0`
- `@babel/plugin-transform-runtime` from `7.8.3` to `7.9.0`
- `@babel/runtime` from `7.8.7` to `7.9.2`
- `babel-loader` from `8.0.6` to `8.1.0`
- `eslint-config-prettier` from `6.10.0` to `6.10.1`
- `eslint-config-standard` from `14.1.0` to `14.1.1`
- `minimist` from `1.2.0` to `1.2.5`
- `react` from `16.13.0` to `16.13.1`

## [0.38.0] - 2020-03-19

### Added

- `AvatarStack`: added `selectable` prop (default `false`). ([@driesd](https://github.com/driesd) in [#933](https://github.com/teamleadercrm/ui/pull/933))
- `Link`: added `badged` prop (default `false`) which renders a semi-transparent background color on hover. ([@driesd](https://github.com/driesd) in [#928](https://github.com/teamleadercrm/ui/pull/928))

### Changed

- [Breaking] `AvatarStack`: changed so that the avatars now overlap each other by default. ([@driesd](https://github.com/driesd) in [#933](https://github.com/teamleadercrm/ui/pull/933))

### Dependency updates

- `file-loader` from `5.1.0` to `6.0.0`
- `html-webpack-plugin` from `4.0.0-beta.11` to `4.0.0-beta.14`

## [0.37.0] - 2020-03-18

### Added

- `Box`: added support for negative margin values. ([@driesd](https://github.com/driesd) in [#927](https://github.com/teamleadercrm/ui/pull/927))
- `Button`: added `color` prop which to combine with button level `outline`. ([@driesd](https://github.com/driesd) in [#925](https://github.com/teamleadercrm/ui/pull/925))
- Added optional `onSecondaryButtonClick` prop to `SplitButton`. ([@mikeverf](https://github.com/mikeverf) in [#931](https://github.com/teamleadercrm/ui/pull/931))

### Changed

- `Avatar`: removed 3px spacing around avatars. ([@driesd](https://github.com/driesd) in [#914](https://github.com/teamleadercrm/ui/pull/914))
- `Link`: changed the base component to `Box`. ([@driesd](https://github.com/driesd) in [#928](https://github.com/teamleadercrm/ui/pull/928))
- [Breaking] `IslandGroup`: removed center alignment of the content inside an `Island` within an `IslandGroup`. ([@driesd](https://github.com/driesd) in [#921](https://github.com/teamleadercrm/ui/pull/921))
- [Breaking] `onButtonClick` on `SplitButton` now passes an `event` instead of `currentTarget`. ([@mikeverf](https://github.com/mikeverf) in [#931](https://github.com/teamleadercrm/ui/pull/931))
- [Breaking] `onClick` on child of `SplitButton` now passes the `event` instead of the `label` prop of the child. ([@mikeverf](https://github.com/mikeverf) in [#931](https://github.com/teamleadercrm/ui/pull/931))

### Removed

- [Breaking] `Button`: removed the `inverse` prop for `outline` buttons. Use `color="white"` instead. ([@driesd](https://github.com/driesd) in [#925](https://github.com/teamleadercrm/ui/pull/925))

### Fixed

- `Avatar`: fixed a visual glitch when `editable` prop was `true`. ([@driesd](https://github.com/driesd) in [#914](https://github.com/teamleadercrm/ui/pull/914))

### Dependency updates

- `@teamleader/ui-icons` from `0.2.23` to `0.2.24`
- [Security] `acorn` from `6.4.0` to `6.4.1`
- `@storybook/ui` from `5.3.14` to `5.3.17`
- `@storybook/addon-info` from `5.3.14` to `5.3.17`
- `@storybook/addons` from `5.3.14` to `5.3.17`
- `@storybook/addon-backgrounds` from `5.3.14` to `5.3.17`
- `@storybook/react` from `5.3.14` to `5.3.17`
- `@storybook/addon-knobs` from `5.3.14` to `5.3.17`

## [0.36.10] - 2020-03-10

### Added

- Forward ref in `DialogBase.Body` to its `Box` wrapper ([@mikeverf](https://github.com/mikeverf)) in [#911](https://github.com/teamleadercrm/ui/pull/911))

### Fixed

- `Avatar`: fix linting error to fix CI build process. ([@driesd](https://github.com/driesd) in [#910](https://github.com/teamleadercrm/ui/pull/910))

### Dependency updates

- `eslint-plugin-react` from `7.18.3` to `7.19.0`

## [0.36.9] - 2020-03-09

### Changed

- Typescript: loosely type all the components to prevent issues with static properties for `DataGrid` and `Widget` ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#907](https://github.com/teamleadercrm/ui/pull/907))

## [0.36.8] - 2020-03-06

### Changed

- `Avatar`: fallback to `AvatarInitials` when image not found. ([@kevinwaelkens](https://github.com/kevinwaelkens) in [#898](https://github.com/teamleadercrm/ui/pull/898))

### Removed

- `Avatar`: removed check for `id` because it will fallback to a neutral background color. ([@kevinwaelkens](https://github.com/kevinwaelkens) in [#899](https://github.com/teamleadercrm/ui/pull/899))

### Dependency updates

- `@babel/core` from `7.8.6` to `7.8.7`
- `@babel/preset-env` from `7.8.6` to `7.8.7`
- `@babel/runtime` from `7.8.4` to `7.8.7`
- `webpack` from `4.41.6` to `4.42.0`

## [0.36.7] - 2020-03-02

### Fixed

- `AvatarStack`: fixed the spacing between the avatars. ([@driesd](https://github.com/driesd) in [#895](https://github.com/teamleadercrm/ui/pull/895))

### Dependency updates

- `@babel/core` from `7.8.4` to `7.8.6`
- `@babel/preset-env` from `7.8.4` to `7.8.6`
- `react` from `16.12.0` to `16.13.0`
- `react-dom` from `16.12.0` to `16.13.0`

## [0.36.6] - 2020-02-26

### Added

- `SplitButton`: added `disabled` prop. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#883](https://github.com/teamleadercrm/ui/pull/883))

### Dependency updates

- Bump `babel-eslint` from `10.0.3` to `10.1.0`
- Update all Storybook dependencies to `5.3.14`

## [0.36.5] - 2020-02-20

### Added

- `InputBase`: added `textAlignRight` prop. If true, the input text is aligned to the right. ([@driesd](https://github.com/driesd) in [#879](https://github.com/teamleadercrm/ui/pull/879))

### Removed

- `ErrorText`, `SuccessText` & `WarningText`: removed the icon in front of the text. ([@driesd](https://github.com/driesd) in [#881](https://github.com/teamleadercrm/ui/pull/881))

### Fixed

- `MenuItem`: make sure that their text wraps when overflow would happen. ([@driesd](https://github.com/driesd) in [#878](https://github.com/teamleadercrm/ui/pull/878))

### Dependency updates

- `file-loader` from `5.0.2` to `5.1.0`

## [0.36.4] - 2020-02-19

### Added

- `Dialog`: added a `DialogBase.Header`, `DialogBase.Body` and `DialogBase.Footer` component, for if you want to make custom dialogs ([@lowiebenoot](https://github.com/lowiebenoot) in [#875](https://github.com/teamleadercrm/ui/pull/875))

### Removed

- `NumericInput`: remove value parsing in `getDerivedStateFromProps`. ([@driesd](https://github.com/driesd) in [#876](https://github.com/teamleadercrm/ui/pull/876))

### Dependency updates

- `postcss` from `7.0.26` to `7.0.27`

## [0.36.3] - 2020-02-13

### Fixed

- `MonthPicker`: Make sure you can type a year number in the year field of MonthPicker ([@mikeverf](https://github.com/mikeverf) in [#868](https://github.com/teamleadercrm/ui/pull/868))
- `MonthPicker`: Don't allow searching in MonthPicker select ([@mikeverf](https://github.com/mikeverf) in [#868](https://github.com/teamleadercrm/ui/pull/868))

## [0.36.2] - 2020-02-11

### Added

- `MonthPicker`: added `MonthPicker` component, for use in `DatePicker` caption ([@mikeverf](https://github.com/mikeverf) in [#840](https://github.com/teamleadercrm/ui/pull/840))
- `DatePicker`: added `withMonthPicker` prop, to use the newly added `MonthPicker` ([@mikeverf](https://github.com/mikeverf) in [#840](https://github.com/teamleadercrm/ui/pull/840))
- `SingleLineInputBase`: added `noInputStyling` prop, to disable styling hinting at being able to type in the input field ([@mikeverf](https://github.com/mikeverf) in [#840](https://github.com/teamleadercrm/ui/pull/840))

## [0.36.1] - 2020-02-11

### Fixed

- `NumericInput`: remove min and max validation when input value changes. ([@driesd](https://github.com/driesd) in [#851](https://github.com/teamleadercrm/ui/pull/851))

### Dependency updates

- `@storybook/addon-knobs` from `5.3.7` to `5.3.12`
- `@storybook/react` from `5.3.9` to `5.3.12`
- `rimraf` from `3.0.0` to `3.0.2`

## [0.36.0] - 2020-02-07

### Added

- `Select`: added `menuWidth` prop to set a custom width for the menu dropdown. ([@driesd](https://github.com/driesd) in [#845](https://github.com/teamleadercrm/ui/pull/845))

### Fixed

- [Breaking] `NumericInput`: fixed the min and max value validation. ([@driesd](https://github.com/driesd) in [#846](https://github.com/teamleadercrm/ui/pull/846))

### Dependency updates

- `@storybook/ui` from `5.3.8` to `5.3.12`
- `@storybook/addon-links` from `5.3.9` to `5.3.12`
- `@babel/preset-env` from `7.8.3` to `7.8.4`
- `@babel/runtime` from `7.8.3` to `7.8.4`
- `eslint-config-prettier` from `6.9.0` to `6.10.0`
- `husky` from `4.0.10` to `4.2.1`

## [0.35.8] - 2020-01-29

### Added

- `Tooltip`: added `large` sized variant. ([@driesd](https://github.com/driesd) in [#833](https://github.com/teamleadercrm/ui/pull/833))

### Changed

- `Tooltip`: increased max width for `medium` sized variant. ([@driesd](https://github.com/driesd) in [#833](https://github.com/teamleadercrm/ui/pull/833))

### Dependency updates

- `@babel/cli` from `7.7.7` to `7.8.3`
- `@babel/runtime` from `7.7.7` to `7.8.3`
- `@babel/core` from `7.7.7` to `7.8.3`
- `@babel/plugin-proposal-export-default-from` from `7.7.4` to `7.8.3`
- `@babel/plugin-transform-react-jsx-source` from `7.7.4` to `7.8.3`
- `@babel/plugin-transform-runtime` from `7.7.6` to `7.8.3`
- `@babel/preset-env` from `7.7.7` to `7.8.3`
- `@babel/preset-react` from `7.7.4` to `7.8.3`
- `@sambego/storybook-state` from `1.3.6` to `2.0.1`
- `@storybook/addon-backgrounds` from `5.0.11` to `5.3.7`
- `@storybook/addon-info` from `5.0.11` to `5.3.7`
- `@storybook/addon-knobs` from `5.0.11` to `5.3.7`
- `@storybook/addon-links` from `5.0.11` to `5.3.9`
- `@storybook/react` from `5.0.11` to `5.3.9`
- `@storybook/ui` from `5.0.11` to `5.3.8`
- `css-loader` from `3.4.1` to `3.4.2`
- `eslint-plugin-import` from `2.19.1` to `2.20.0`
- `eslint-plugin-react` from `7.17.0` to `7.18.0`
- `husky` from `4.0.3` to `4.0.10`
- `luxon` from `1.21.3` to `1.22.0`
- `postcss-cli` from `7.0.0` to `7.1.0`
- `style-loader` from `1.1.2` to `1.1.3`

## [0.35.7] - 2020-01-09

### Changed

- `Select`: provide fallback in render function & get rid of the `menuPortalTarget`'s default value. ([@driesd](https://github.com/driesd) in [#797](https://github.com/teamleadercrm/ui/pull/797))

## [0.35.6] - 2020-01-09

### Changed

- `Select`: check if `document` exists while setting `menuPortalTarget`'s default value. ([@driesd](https://github.com/driesd) in [#795](https://github.com/teamleadercrm/ui/pull/795))

### Dependency updates

- `husky` from `4.0.1` to `4.0.3`

## [0.35.5] - 2020-01-08

### Changed

- `Button`: `size` css class is not conditional and should always be applied. ([@driesd](https://github.com/driesd) in [#792](https://github.com/teamleadercrm/ui/pull/792))
- `Button`: No need to import `ui-utilities` in JS, we do this already in CSS. ([@driesd](https://github.com/driesd) in [#792](https://github.com/teamleadercrm/ui/pull/792))

### Removed

- `DatePicker`: remove obsolete `.overlay` styles. ([@driesd](https://github.com/driesd) in [#791](https://github.com/teamleadercrm/ui/pull/791))

### Dependency updates

- `husky` from `4.0.0` to `4.0.1`
- `postcss-cli` from `6.1.3` to `7.0.0`

## [0.35.4] - 2020-01-07

### Dependency updates

- `@teamleader/ui-utilities` from `0.2.0` to `0.2.1`
- `css-loader` from `3.4.0` to `3.4.1`
- `eslint-config-prettier` from `6.7.0` to `6.9.0`
- `eslint-plugin-node` from `10.0.0` to `11.0.0`
- `husky` from `3.1.0` to `4.0.0`
- `postcss` from `7.0.25` to `7.0.26`
- `style-loader` from `1.0.2` to `1.1.2`
- `webpack` from `4.41.4` to `4.41.5`

## [0.35.3] - 2019-12-24

### Changed

- [Typescript]: Include the typescript declaration file ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#774](https://github.com/teamleadercrm/ui/pull/774))

## [0.35.2] - 2019-12-23

### Changed

- [INTERNAL]: Added a yml deploy script to be used by Teamleader's CI in order to deploy components. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#768](https://github.com/teamleadercrm/ui/pull/772))

## [0.35.1] - 2019-12-23

### Changed

- [BUILD]: Revert "🔧 Don't require library users to use postcss". ([@ArnaudWeyts](https://github.com/driesd) in [#768](https://github.com/teamleadercrm/ui/pull/768))
- `DataGrid`: extended the `flex` prop `values` of the `Cell` component up to `12`. ([@driesd](https://github.com/driesd) in [#761](https://github.com/teamleadercrm/ui/pull/761))

## [0.35.0] - 2019-12-18

### Changed

- [BREAKING] `NumericInput`: changed prop type `spinner` from `boolean` (default `true`) to `oneOf` (default `suffix`). ([@driesd](https://github.com/driesd) in [#756](https://github.com/teamleadercrm/ui/pull/756))
- [BREAKING] `NumericInput`: renamed `spinner` prop to `stepper`. ([@driesd](https://github.com/driesd) in [#756](https://github.com/teamleadercrm/ui/pull/756))
- [BUILD]: Don't require library users to use a postcss setup. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#755](https://github.com/teamleadercrm/ui/pull/755))

### Fixed

- `Input`: focus state should not overrule any other state. ([@driesd](https://github.com/driesd) in [#759](https://github.com/teamleadercrm/ui/pull/759))
- `Select`: focus state should not overrule any other state. ([@driesd](https://github.com/driesd) in [#759](https://github.com/teamleadercrm/ui/pull/759))

### Dependency updates

- `css-loader` from `3.3.0` to `3.4.0`
- `eslint-plugin-prettier` from `3.1.1` to `3.1.2`
- `postcss` from `7.0.24` to `7.0.25`
- `style-loader` from `1.0.1` to `1.0.2`
- `webpack` from `4.41.2` to `4.41.3`

## [0.34.0] - 2019-12-12

### Changed

- [INTERNAL]: changed all stories to Component Story Format (CSF) and moved them next to their respective components. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#740](https://github.com/teamleadercrm/ui/pull/740))
- [BREAKING] `Toggle`: Fix onChange signature to pass the actual internally used checkbox event. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#745](https://github.com/teamleadercrm/ui/pull/745))

## [0.33.0] - 2019-12-06

### Added

- `Box`: added `borderRadius`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomLeftRadius`, `borderBottomRightRadius` props with default value `square`. ([@driesd](https://github.com/driesd) in [#737](https://github.com/teamleadercrm/ui/pull/737))

### Changed

- `Avatar`: added `creatable` prop with default value `false`. ([@driesd](https://github.com/driesd) in [#735](https://github.com/teamleadercrm/ui/pull/735))
- `Avatar`: added `onClick` prop to show a hover state. ([@driesd](https://github.com/driesd) in [#738](https://github.com/teamleadercrm/ui/pull/738))
- `Avatar`: added `selected` prop with default value `false` to show a selected state. ([@driesd](https://github.com/driesd) in [#738](https://github.com/teamleadercrm/ui/pull/738))

### Removed

- [BREAKING] `Avatar`: removed `imageClassName` prop from the internally used `AvatarImage` component. ([@driesd](https://github.com/driesd) in [#735](https://github.com/teamleadercrm/ui/pull/735))
- `Storybook`: removed custom config override for `file-loader` to fix broken images. ([@driesd](https://github.com/driesd) in [#736](https://github.com/teamleadercrm/ui/pull/736))

### Dependency updates

- `css-loader` from `3.2.0` to `3.2.1`

## [0.32.0] - 2019-12-02

### Changed

- [BREAKING] `Node version`: the minimum required node version is now `10.13.0`

## [0.31.6] - 2019-12-02

### Changed

- `Tooltip`: Added a delay of 100ms when initially showing the tooltip, and added a new prop `onTooltipEnter` which gets triggered after the tooltip is mounted. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#730](https://github.com/teamleadercrm/ui/pull/730))
- `Build process & dependency resolution`: changed from npm to yarn, added yarn.lock ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#731](https://github.com/teamleadercrm/ui/pull/731))

## [0.31.5] - 2019-11-27

### Changed

- `MenuItem`: when element is `a` the text container gets `pointer-events: none` ([@kevinwaelkens](https://github.com/kevinwaelkens) in [#727](https://github.com/teamleadercrm/ui/pull/727))

## [0.31.4] - 2019-11-22

### Added

- `MenuItem`: render a `button` or `a`-tag depending on the `element` prop. ([@driesd](https://github.com/driesd) in [#721](https://github.com/teamleadercrm/ui/pull/721))
- `Typography`: added `Heading5`. ([@driesd](https://github.com/driesd) in [#722](https://github.com/teamleadercrm/ui/pull/722))
- `Typography`: added `TextBodyCompact`. ([@driesd](https://github.com/driesd) in [#724](https://github.com/teamleadercrm/ui/pull/724))

### Dependency updates

- `@teamleader/ui-illustrations` from `0.0.22` to `0.0.23`
- `@teamleader/ui-typography` from `0.2.1` to `0.2.3`
- `@teamleader/ui-utilities` from `0.1.2` to `0.2.0`
- `prettier` from `1.18.2` to `1.19.1`

## [0.31.3] - 2019-11-07

### Fixed

- `DatePickerInput`: instead of the DateTime error, show the placeholder when `selectedDate` is not set. ([@driesd](https://github.com/driesd) in [#716](https://github.com/teamleadercrm/ui/pull/716))

### Dependency updates

- `pretty-quick` from `2.0.0` to `2.0.1`

## [0.31.2] - 2019-10-31

### Added

- `Link`: added an outline effect to indicate focus state. ([@driesd](https://github.com/driesd) in [#712](https://github.com/teamleadercrm/ui/pull/712))

### Fixed

- `NumericInput`: fix spinner height for all size variants. ([@driesd](https://github.com/driesd) in [#713](https://github.com/teamleadercrm/ui/pull/713))

## [0.31.1] - 2019-10-24

### Changed

- `Avatar`: changed the way our `hashCode` function calculates the `background-color` passed to the `AvatarInitials` component. ([@driesd](https://github.com/driesd) in [#706](https://github.com/teamleadercrm/ui/pull/706))
- `Avatar`: changed the size of our `small variant`, from 36x36px to `30x30px`. ([@driesd](https://github.com/driesd) in [#709](https://github.com/teamleadercrm/ui/pull/709))
- `Box`: remove `children` from the box props list. ([@driesd](https://github.com/driesd) in [#710](https://github.com/teamleadercrm/ui/pull/710))

### Fixed

- `Avatar`: Don't pass boxProps to Avatar child components. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#708](https://github.com/teamleadercrm/ui/pull/708))

### Dependency updates

- `pretty-quick` from `1.11.1` to `2.0.0`

## [0.31.0] - 2019-10-07

### Changed

- `Button & IconButton`: use `Box` as the base component. ([@driesd](https://github.com/driesd) in [#697](https://github.com/teamleadercrm/ui/pull/697))
- `Checkbox`: increased spacing between checkbox and label for small sized variant. ([@driesd](https://github.com/driesd) in [#702](https://github.com/teamleadercrm/ui/pull/702))
- `Counter`: decreased horizontal padding from `6px` to `3px` for the `small` size variant. ([@driesd](https://github.com/driesd) in [#696](https://github.com/teamleadercrm/ui/pull/696))
- `Link`: set `left` as the default value for the `iconPlacement` prop. ([@driesd](https://github.com/driesd) in [#698](https://github.com/teamleadercrm/ui/pull/698))
- [BREAKING] `MenuItem`: The old `caption` prop has been recycled to be used as an actual caption, which is now displayed underneath the `label`. ([@driesd](https://github.com/driesd) in [#703](https://github.com/teamleadercrm/ui/pull/703))
- `Select:` fixed line-height issue. ([@driesd](https://github.com/driesd) in [#704](https://github.com/teamleadercrm/ui/pull/704))
- `Radio`: changed the default background color from neutral light to neutral lightest (white). ([@driesd](https://github.com/driesd) in [#700](https://github.com/teamleadercrm/ui/pull/700))
- `Radio`: increased spacing between radio and label for small sized variant. ([@driesd](https://github.com/driesd) in [#701](https://github.com/teamleadercrm/ui/pull/701))
- `Banner`: remove padding on the right side of the banner content. ([@rathesDot](https://github.com/rathesDot)) in [#699](https://github.com/teamleadercrm/ui/pull/699)

## [0.30.3] - 2019-09-26

### Added

- `Counter`: added a `min-width` & `text-align: center` for both sizes. ([@driesd](https://github.com/driesd) in [#691](https://github.com/teamleadercrm/ui/pull/691))
- `Link`: added `inverse` prop which inverts the underline behavior on hover. ([@driesd](https://github.com/driesd) in [#694](https://github.com/teamleadercrm/ui/pull/694))

### Changed

- `Counter`: changed the counter number to be monospaced. ([@driesd](https://github.com/driesd) in [#691](https://github.com/teamleadercrm/ui/pull/691))
- `StatusLabel`: decreased horizontal padding from 12px to 6px. ([@driesd](https://github.com/driesd) in [#690](https://github.com/teamleadercrm/ui/pull/690))

### Fixed

- `Select:` fixed line-height issue. ([@driesd](https://github.com/driesd) in [#689](https://github.com/teamleadercrm/ui/pull/689))

### Dependency updates

- `@teamleader/ui-illustrations` from `^0.0.21` to `^0.0.22`

## [0.30.2] - 2019-09-19

### Added

- `Text`: added `ellipsis` prop which forces the text on one line and overflows with an ellipsis. ([@driesd](https://github.com/driesd) in [#687](https://github.com/teamleadercrm/ui/pull/687))

### Changed

- `Select`: changed `Inter-UI` fonts to `Inter` since we updated `@teamleader/ui-typography`. ([@driesd](https://github.com/driesd) in [#686](https://github.com/teamleadercrm/ui/pull/686))

### Dependency updates

- `@teamleader/ui-typography` from `^0.1.2` to `^0.2.1` ([@driesd](https://github.com/driesd) in [#686](https://github.com/teamleadercrm/ui/pull/686))

## [0.30.1] - 2019-09-10

### Fixed

- Fixed a postcss config issue ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#684](https://github.com/teamleadercrm/ui/pull/684))

## [0.30.0] - 2019-09-09

### Dependency updates

- [BREAKING] Removed deprecated `postcss-cssnext` and replaced it with the recommended package `postcss-preset-env`. ([@rathesDot](https://github.com/rathesDot) in [#680](https://github.com/teamleadercrm/ui/pull/680)). Install `postcss-preset-env` manually as a devDependecy if you enounter any issues in your build process. Alternatively, explicitly add your postcss config file's path to the postcss-loader option of your webpack.
  ```js
  {
    loader: 'postcss-loader',
    options: {
      config: {
        path: `${__dirname}/postcss.config.js`,
      },
    },
  },
  ```

## [0.29.0] - 2019-09-05

### Added

- `Avatar`: added `editable` boolean prop & `onImageChange` function prop. ([@driesd](https://github.com/driesd) in [#678](https://github.com/teamleadercrm/ui/pull/678))
- `AvatarImage`, `AvatarInitials` & `AvatarStack`: added `hero` size variation. ([@driesd](https://github.com/driesd) in [#676](https://github.com/teamleadercrm/ui/pull/676))
- `Box`: added `borderWidth`, `borderBottomWidth`, `borderLeftWidth`, `borderRightWidth`, `borderTopWidth`, `borderColor`, `borderTint` props. ([@driesd](https://github.com/driesd) in [#681](https://github.com/teamleadercrm/ui/pull/681))

### Removed

- [BREAKING] `AvatarImage` & `AvatarInitials`: removed from export. `Avatar` should be used instead. ([@driesd](https://github.com/driesd) in [#678](https://github.com/teamleadercrm/ui/pull/678))

### Dependency updates

- `eslint-plugin-node` from `^9.1.0` to `^10.0.0`
- `image-loader-webpack` from `^5.0.0` to `^6.0.0`

## [0.28.1] - 2019-09-02

### Added

- `Box`: added `textAlign` prop. Possible values are `center`, `left` & `right`. ([@driesd](https://github.com/driesd) in [#673](https://github.com/teamleadercrm/ui/pull/673))

### Changed

- `Select`: changed font smoothing css props from kebab-case to camelCase to fix emotion warnings. ([@driesd](https://github.com/driesd) in [#672](https://github.com/teamleadercrm/ui/pull/672))

### Dependency updates

- `@teamleader/ui-illustrations` from `^0.0.20` to `^0.0.21`. ([@driesd](https://github.com/driesd) in [#674](https://github.com/teamleadercrm/ui/pull/674))

## [0.28.0] - 2019-08-29

### Added

- `Avatar`: added new `Avatar` component which renders `AvatarInitials` or `AvatarImage`. ([@driesd](https://github.com/driesd) in [#670](https://github.com/teamleadercrm/ui/pull/670))

### Changed

- [BREAKING] `Avatar`: renamed to `AvatarImage`. ([@driesd](https://github.com/driesd) in [#670](https://github.com/teamleadercrm/ui/pull/670))
- `AvatarInitials`: changed so the text is not selectable anymore. ([@driesd](https://github.com/driesd) in [#669](https://github.com/teamleadercrm/ui/pull/669))
- `Checkbox`: added `position: absolute;` to the input element to fix alignment issue in Firefox on Linux. ([@driesd](https://github.com/driesd) in [#667](https://github.com/teamleadercrm/ui/pull/667))
- `DataGrid`: adjust `HeaderCell` to meet its new design ([@driesd](https://github.com/driesd) in [#668](https://github.com/teamleadercrm/ui/pull/668))
- `DatePicker`: the `onChange` handler is no longer triggered when a disabled date has been selected. ([@Kemosabert](https://github.com/Kemosabert)) in [#664](https://github.com/teamleadercrm/ui/pull/664))
- `Publishing settings`: expose postcss.config.js in published dependency. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#660](https://github.com/teamleadercrm/ui/pull/660))

### Fixed

- `Console errors` when using the `Menu` component ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#666](https://github.com/teamleadercrm/ui/pull/666))

### Dependency updates

- `eslint` from `^6.0.1` to `^6.2.1`
- `eslint-config-prettier` from `^6.0.0` to `^6.1.0`
- `eslint-config-standard` from `^13.0.1` to `^14.0.1`
- `eslint-config-standard-react` from `^8.0.0` to `^9.0.0`
- `eslint-plugin-babel` from `^5.1.0` to `^5.3.0`
- `eslint-plugin-import` from `^2.8.0` to `^2.18.2`
- `eslint-plugin-react` from `^7.4.0` to `^7.14.3`
- `eslint-plugin-standard` from `^4.0.0` to `^4.0.1`
- `rimraf` from `^2.5.4` to `^3.0.0`

## [0.27.7] - 2019-08-14

### Removed

- `DatePickerInput`: removed left margin of the prefix icon. ([@driesd](https://github.com/driesd) in [#658](https://github.com/teamleadercrm/ui/pull/658))

## [0.27.6] - 2019-08-09

### Fixed

- `AvatarInitials`: other props were not destructured onto the wrapping element. ([@lowiebenoot](https://github.com/lowiebenoot) in [#656](https://github.com/teamleadercrm/ui/pull/656))

## [0.27.5] - 2019-08-07

### Changed

- `Label`: changed the `css display rule` to use the `display prop` of our Box component.
- `Dependencies`:
  - `eslint-plugin-node` from `^6.0.0` to `^9.1.0`
  - `eslint-config-standard` from `^11.0.0` to `^13.0.1`

## [0.27.4] - 2019-07-19

### Changed

- `Dependencies`:
  - `react-select` from `^2.0.0` to `^3.0.4`
  - `babel-eslint` from `^8.0.2` to `^10.0.2`
  - `eslint-plugin-standard` from `^3.0.1` to `^4.0.0`
  - `eslint-plugin-prettier` from `^2.1.2` to `^3.1.0`
  - `eslint-config-standard-react` from `^6.0.0` to `^8.0.0`

### Fixed

- `Button`: fixed the loading spinner position. ([@driesd](https://github.com/driesd) in [#649](https://github.com/teamleadercrm/ui/pull/649))

## [0.27.3] - 2019-07-12

### Added

- `AdvancedCollapsible`: added `AdvancedCollapsible` component. ([@driesd](https://github.com/driesd) in [#637](https://github.com/teamleadercrm/ui/pull/637))

### Changed

- `Dependencies`:
  - `@teamleader/ui-animations` from `^0.0.2` to `^0.0.3`
  - `eslint` from `^4.11.0` to `^6.0.1`
  - `husky` from `^0.14.3` to `^3.0.0`
  - `image-webpack-loader` from `^4.1.0` to `^5.0.0`
  - `react-transition-group` from `^2.2.1` to `^4.2.1`

### Removed

- `Dependency`: removed the `url-loader` dependency because we're not using it. ([@driesd](https://github.com/driesd) in [#638](https://github.com/teamleadercrm/ui/pull/638))

## [0.27.2] - 2019-07-09

### Added

- `AvatarInitials`: added a default `color` value. ([@driesd](https://github.com/driesd) in [#626](https://github.com/teamleadercrm/ui/pull/626))
- `SplitButton`: added `SplitButton` component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#629](https://github.com/teamleadercrm/ui/pull/629))

### Changed

- `Avatar`: changed the CSS `display: inline-block;` to `display: flex;` to fix the vertical alignment issue. ([@driesd](https://github.com/driesd) in [#625](https://github.com/teamleadercrm/ui/pull/625))
- `ProgressStep`: changed the clickable area to only be the status bullet, instead of the whole wrapper. ([@driesd](https://github.com/driesd) in [#627](https://github.com/teamleadercrm/ui/pull/627))
- `Dependencies`:
  - `css-loader` from ^0.28.7 to `^3.0.0`
  - `eslint-config-prettier` from ^2.2.0 to `^6.0.0`
  - `eslint-plugin-promise` from ^3.3.0 to `^4.2.1`
  - `file-loader` from ^1.1.5 to `^4.0.0`
  - `postcss` from ^6.0.14 to `^7.0.17`
  - `postcss-cssnext` from ^3.0.2 to `^3.1.0`
  - `postcss-import` from ^11.0.0 to `^12.0.1`
  - `postcss-loader` from ^2.0.7 to `^3.0.0`
  - `postcss-mixins` from ^6.1.0 to `^6.2.1`
  - `postcss-nested` from ^3.0.0 to `^4.1.2`
  - `postcss-reporter` from ^5.0.0 to `^6.0.1`
  - `prettier` from 1.13.7 to `1.18.2`
  - `pretty-quick` from 1.6.0 to `1.11.1`
  - `react-resize-detector` from ^2.3.0 to `^4.2.0`
  - `style-loader` from ^0.20.2 to `^0.23.1`

### Removed

- `Dependency`: removed the `imports-loader` dependency because we're not using it. ([@driesd](https://github.com/driesd) in [#617](https://github.com/teamleadercrm/ui/pull/617))
- `Dependency`: removed the `react-hot-loader` dependency because Storybook has its own HMR. ([@driesd](https://github.com/driesd) in [#620](https://github.com/teamleadercrm/ui/pull/620))

## [0.27.1] - 2019-06-24

### Added

- `Avatar`, `AvatarInitials` & `AvatarStack`: added a `large` size variation. ([@driesd](https://github.com/driesd) in [#610](https://github.com/teamleadercrm/ui/pull/610))
- `Bullet`: added a `large` size variation. ([@driesd](https://github.com/driesd) in [#611](https://github.com/teamleadercrm/ui/pull/611))

### Changed

- `Bullet`: changed border thickness from 1px to 2px. ([@driesd](https://github.com/driesd) in [#611](https://github.com/teamleadercrm/ui/pull/611))
- `Counter`: changed the font weight from `black` to `bold`. ([@driesd](https://github.com/driesd) in [#612](https://github.com/teamleadercrm/ui/pull/612))
- `Infrastructure`: changed the way this module is exported. CommonJS and ES modules are now available, which enables tree shaking. ([@duivvv](https://github.com/duivvv) in [#609](https://github.com/teamleadercrm/ui/pull/609))

## [0.27.0] - 2019-06-04

### Added

- `ProgressStep`: added the `onClick` prop to make a `ProgressStep` interactional. ([@driesd](https://github.com/driesd) in [#607](https://github.com/teamleadercrm/ui/pull/607))

### Removed

- [BREAKING] `ProgressStep`: removed the `color` prop. ([@driesd](https://github.com/driesd) in [#607](https://github.com/teamleadercrm/ui/pull/607))

## [0.26.0] - 2019-05-09

### Added

- [BREAKING] `Dialog` & `DialogBase`: added boolean `scrollable` prop with a default value of `true`. ([@driesd](https://github.com/driesd) in [#599](https://github.com/teamleadercrm/ui/pull/599))
- `Box`: added `backgroundColor` & `backgroundTint` props. ([@driesd](https://github.com/driesd) in [#600](https://github.com/teamleadercrm/ui/pull/600))
- `Popover`: added `maxWidth` prop with a default value of `50vw`. ([@driesd](https://github.com/driesd) in [#597](https://github.com/teamleadercrm/ui/pull/597))

### Changed

- `SingleLineInputBase` & `Textarea`: changed validation behavior to only show a border when passing a boolean value. ([@driesd](https://github.com/driesd) in [#601](https://github.com/teamleadercrm/ui/pull/601))

### Fixed

- `Banner`: fixed the centering of the icon. The centering was off by a few pixels. ([@lowiebenoot](https://github.com/lowiebenoot) in [#602](https://github.com/teamleadercrm/ui/pull/602))

## [0.25.0] - 2019-04-18

### Changed

- `Checkbox` & `RadioButton` & `Toggle`: alignment label according to size. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#593](https://github.com/teamleadercrm/ui/pull/593))
- [BREAKING] `Passport`: renamed the `links` prop to `lineItems`, so we could also render normal text. ([@driesd](https://github.com/driesd) in [#595](https://github.com/teamleadercrm/ui/pull/595))

### Removed

- [BREAKING] `Dialog`: wrapping `Box` of the body and all of the resize code. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#587](https://github.com/teamleadercrm/ui/pull/587))

### Fixed

- `AvatarInitials`: `size` prop on component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#588](https://github.com/teamleadercrm/ui/pull/588))

## [0.24.5] - 2019-04-04

### Added

- `TimerPulser`: added `TimerPulser` component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#566](https://github.com/teamleadercrm/ui/pull/566))
- `Popover`: `minWidth` prop. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#579](https://github.com/teamleadercrm/ui/pull/579))
- `DatePicker`: `bordered` prop. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#584](https://github.com/teamleadercrm/ui/pull/584))
- `Widget`: added `Widget` component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#581](https://github.com/teamleadercrm/ui/pull/581))

### Changed

- `AvatarInitials`: center initials with `flexbox` instead of `padding` and `text-align`. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#577](https://github.com/teamleadercrm/ui/pull/577))
- `DataGrid`: `bordered` prop so it only triggers a `border-bottom` and `border-top`. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#583](https://github.com/teamleadercrm/ui/pull/583))

### Fixed

- `AvatarInitials`: set `letter-spacing` to zero to center the text. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#575](https://github.com/teamleadercrm/ui/pull/575))
- `AvatarStack`: only show `overflowAmount` if the count of `Avatars` is higher than the `displayMax`. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#578](https://github.com/teamleadercrm/ui/pull/578))
- `AvatarStack`: pass `size` prop to children. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#576](https://github.com/teamleadercrm/ui/pull/576))

## [0.24.4] - 2019-03-26

### Fixed

- `DatePicker`: added missing locales in `localeUtils.js` to `firstDayOfWeek` and fallback to `en-GB`. ([@kevinwaelkens](https://github.com/kevinwaelkens) in [#572](https://github.com/teamleadercrm/ui/pull/572))

## [0.24.3] - 2019-03-26

### Added

- `AvatarInitials`: added `AvatarInitials` component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#568](https://github.com/teamleadercrm/ui/pull/568))

### Fixed

- `TimeInput`: `disabled` and `readOnly` props. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#567](https://github.com/teamleadercrm/ui/pull/567))

- `Label`: alignment `connectedLeft` and `connectedRight`. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#569](https://github.com/teamleadercrm/ui/pull/569))

## [0.24.2] - 2019-03-25

### Fixed

- `DatePickerInput`: prevent activating the `Popover` when `Input` field is `read-only`. ([@driesd](https://github.com/driesd) in [#564](https://github.com/teamleadercrm/ui/pull/564))

## [0.24.1] - 2019-03-22

### Changed

- `TimeInput`: added time input validation. ([@mikeverf](https://github.com/mikeverf) in [#558](https://github.com/teamleadercrm/ui/pull/558))
- `Input`: fixed the css for the disabled and read-only props on ie11. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#561](https://github.com/teamleadercrm/ui/pull/561))

### Fixed

- `CheckBox`: fixed the squeezed checkbox when containing long labels. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#562](https://github.com/teamleadercrm/ui/pull/562))
- `Popover`: fixed the squeezed popover in IE11. ([@driesd](https://github.com/driesd) in [#559](https://github.com/teamleadercrm/ui/pull/559))
- `RadioButton`: fixed the squeezed inner shape on IE11. ([@driesd](https://github.com/driesd) in [#559](https://github.com/teamleadercrm/ui/pull/559))

## [0.24.0] - 2019-03-20

### Added

- `Menu`: added `MenuTitle` component. ([@driesd](https://github.com/driesd) in [#551](https://github.com/teamleadercrm/ui/pull/551))
- `Input`: added `TimeInput` component. ([@driesd](https://github.com/driesd) in [#556](https://github.com/teamleadercrm/ui/pull/556))

### Changed

- `Badge`: changed custom `span` to `Icon` component . ([@driesd](https://github.com/driesd) in [#553](https://github.com/teamleadercrm/ui/pull/553))
- `General`: replace the `Luxon` package from devDependencies to dependencies. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#552](https://github.com/teamleadercrm/ui/pull/552))
- `Popover`: remove white border. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#555](https://github.com/teamleadercrm/ui/pull/555))

### Removed

- [BREAKING] `MenuItem`: removed `children` & `shortcut` prop. ([@driesd](https://github.com/driesd) in [#551](https://github.com/teamleadercrm/ui/pull/551))

## [0.23.1] - 2019-03-13

### Fixed

- `Badge`, `IconTab` & `TitleTab`: fixed ref errors ([@driesd](https://github.com/driesd) in [#547](https://github.com/teamleadercrm/ui/pull/547))

## [0.23.0] - 2019-03-13

### Added

- `ValidationSuccess`: added to `ValidationText` component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#541](https://github.com/teamleadercrm/ui/pull/541))
- `Input`: added `success` prop to pass down to our `ValidationText` component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#541](https://github.com/teamleadercrm/ui/pull/541))
- `Select`: added `success` prop to pass down to our `ValidationText` component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#541](https://github.com/teamleadercrm/ui/pull/541))
- `TextArea`: added `success` prop to pass down to our `ValidationText` component. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#541](https://github.com/teamleadercrm/ui/pull/541))
- `Popover`: added `fullWidth` prop (defaults to `false`). ([@driesd](https://github.com/driesd) in [#535](https://github.com/teamleadercrm/ui/pull/535))

### Changed

- `DatePickerInput`: refactored using our `Input` & `Popover` components instead of `DayPickerInput`. ([@driesd](https://github.com/driesd) in [#535](https://github.com/teamleadercrm/ui/pull/535))
- `NumericInput`: disabled the `tabindex` for the numeric input spinner controls. ([@driesd](https://github.com/driesd) in [#539](https://github.com/teamleadercrm/ui/pull/539))
- `Link`: change margin between link and icon to 6px. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#545](https://github.com/teamleadercrm/ui/pull/545))
- `General`: eliminate `composes` in css files. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#542](https://github.com/teamleadercrm/ui/pull/542))
- `General`: replace legacy ref with createRef. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#544](https://github.com/teamleadercrm/ui/pull/544))
- `Select`: use equal padding for headers and options. ([@TaraldRotsaert](https://github.com/TaraldRotsaert) in [#550](https://github.com/teamleadercrm/ui/pull/550))

### Removed

- [BREAKING] `DatePickerInput`: removed `parseDate` support, which makes it impossible to type a localized date into the input field. ([@driesd](https://github.com/driesd) in [#535](https://github.com/teamleadercrm/ui/pull/535))
- `Popover`: removed pointing arrow. ([@driesd](https://github.com/driesd) in [#536](https://github.com/teamleadercrm/ui/pull/536))

### Fixed

- `Icon`: fixed the vertical alignment of the svg icon. ([@driesd](https://github.com/driesd) in [#540](https://github.com/teamleadercrm/ui/pull/540))

## [0.22.0] - 2019-03-06

### Added

- `InputBase`: added `innerRef` prop to directly target the `html input element` of an `Input`, `NumericInput` or `Textarea` component. ([@driesd](https://github.com/driesd) in [#537](https://github.com/teamleadercrm/ui/pull/537))
- `Popover`: added `zIndex` prop (defaults to `300`). ([@driesd](https://github.com/driesd) in [#534](https://github.com/teamleadercrm/ui/pull/534))
- `Select`: added `menuPortalTarget` prop (defaults to `document.body`) to specify where the portal should be rendered. ([@driesd](https://github.com/driesd) in [#534](https://github.com/teamleadercrm/ui/pull/534))

### Changed

- `General`: changed `z-indexes across multiple components` to fix several depth issues. ([@driesd](https://github.com/driesd) in [#534](https://github.com/teamleadercrm/ui/pull/534))

### Removed

- [BREAKING] `Select`: removed `usePortal` prop because it will always be using a portal. ([@driesd](https://github.com/driesd) in [#534](https://github.com/teamleadercrm/ui/pull/534))

## [0.21.3] - 2019-02-20

### Added

- `Select`: added `usePortal` boolean prop. If true, the menu dropdown will be rendered inside a React Portal. ([@driesd](https://github.com/driesd) in [#531](https://github.com/teamleadercrm/ui/pull/531))

### Fixed

- `Label`: merged the props of the `children` with custom props that we also want to pass down. ([@driesd](https://github.com/driesd) in [#529](https://github.com/teamleadercrm/ui/pull/529))
- `RadioButton`: fixed the squeezed radio button shape. ([@driesd](https://github.com/driesd) in [#530](https://github.com/teamleadercrm/ui/pull/530))
- `Box`: IE11 crashes when destructuring objects with `{ ...false }` contents ([@lowiebenoot](https://github.com/lowiebenoot) and [@nickwaelkens](https://github.com/nickwaelkens) in [#532](https://github.com/teamleadercrm/ui/pull/532))

## [0.21.2] - 2019-02-14

### Changed

- `Popover`: extracted the `getMaxHeight` calculation function to a separate file. ([@driesd](https://github.com/driesd) in [#525](https://github.com/teamleadercrm/ui/pull/525))
- `Popover`: use `React.createRef()` instead of a `Callback Ref`. ([@driesd](https://github.com/driesd) in [#525](https://github.com/teamleadercrm/ui/pull/525))
- `Select`: changed `background & text color` for `hover & selected` options. ([@driesd](https://github.com/driesd) in [#524](https://github.com/teamleadercrm/ui/pull/524))

### Fixed

- `Box`: fixed `flexGrow`, `flexShrink` & `order` with value `0` to apply the correct styles. ([@driesd](https://github.com/driesd) in [#523](https://github.com/teamleadercrm/ui/pull/523))
- `Select`: fixed the option's `selected` state in that way the `focus` state does not overrule anymore. ([@driesd](https://github.com/driesd) in [#524](https://github.com/teamleadercrm/ui/pull/524))
- `AsyncSelect`: refetch options when loadOptions handler changes ([@mikeverf](https://github.com/mikeverf) in [#527](https://github.com/teamleadercrm/ui/pull/527))

## [0.21.1] - 2019-01-30

### Fixed

- `Box`: fixed the accidental `style` override when passing inline style prop. ([@driesd](https://github.com/driesd) in [#521](https://github.com/teamleadercrm/ui/pull/521))
- `Select`: fixed `word break` behaviour for both Select `options` and `placeholder`. ([@driesd](https://github.com/driesd) in [#520](https://github.com/teamleadercrm/ui/pull/520))

## [0.21.0] - 2019-01-29

### Added

- `Box`: added `overflow`, `overflowX` & `overflowY` props. ([@driesd](https://github.com/driesd) in [#516](https://github.com/teamleadercrm/ui/pull/516))

### Changed

- `Toast`: changed the element for the `TextBody` that is wrapping the `label` and `children` of a toast to a `div` (instead of the default `p`). ([@driesd](https://github.com/lowiebenoot) in [#515](https://github.com/teamleadercrm/ui/pull/515))

### Removed

- [BREAKING] `Popover`: removed `header` & `footer` prop, please use `children` instead. ([@driesd](https://github.com/driesd) in [#517](https://github.com/teamleadercrm/ui/pull/517))

## [0.20.1] - 2019-01-21

### Added

- `Button`: added extra level `timer` ([@driesd](https://github.com/driesd) in [#511](https://github.com/teamleadercrm/ui/pull/511))
- `Select`: added the `width` prop to override its full width default behavior. ([@driesd](https://github.com/driesd) in [#510](https://github.com/teamleadercrm/ui/pull/510))

### Fixed

- `Popover`: fixed some weird width behaviour, which was always taking 50vw. ([@driesd](https://github.com/driesd) in [#513](https://github.com/teamleadercrm/ui/pull/513))

## [0.20.0] - 2019-01-17

### Added

- `DatePickerInput` & `DatePickerInputRange`: added a `warning` prop, which accepts warning text/element and places it underneath the input field. ([@driesd](https://github.com/driesd) in [#505](https://github.com/teamleadercrm/ui/pull/505))
- `DatePickerInput` & `DatePickerInputRange`: added a `width` prop to override its default value. ([@driesd](https://github.com/driesd) in [#507](https://github.com/teamleadercrm/ui/pull/507))
- `Input`: added a `warning` prop, which accepts warning text/element and places it underneath the input field. ([@driesd](https://github.com/driesd) in [#504](https://github.com/teamleadercrm/ui/pull/504))
- `Select`: added a `warning` prop, which accepts warning text/element and places it underneath the input field. ([@driesd](https://github.com/driesd) in [#506](https://github.com/teamleadercrm/ui/pull/506))

### Changed

- `Input`: moved the `error` and `helpText` props from `InputBase` to `Textarea`. ([@driesd](https://github.com/driesd) in [#504](https://github.com/teamleadercrm/ui/pull/504))
- `QTip`: added the `onEscKeyDown`, `onOverlayClick`, `onOverlayMouseDown`, `onOverlayMouseMove` & `onOverlayMouseUp` props. ([@driesd](https://github.com/driesd) in [#500](https://github.com/teamleadercrm/ui/pull/500))
- [BREAKING] `QTip`: `closed` prop has been renamed to `active`, logic & styling have been inverted. ([@driesd](https://github.com/driesd) in [#500](https://github.com/teamleadercrm/ui/pull/500))
- [BREAKING] `QTip`: `onEscKeyDown` prop has to be explicitly passed instead of reusing the `onChange` prop internally. ([@driesd](https://github.com/driesd) in [#500](https://github.com/teamleadercrm/ui/pull/500))

### Fixed

- `DatePickerInput`: merged the passed inputProps with the internal inputProps. ([@duivvv](https://github.com/duivvv) in [#503](https://github.com/teamleadercrm/ui/pull/503))
- `Popover`: fixed buggy flexbox behavior. ([@driesd](https://github.com/driesd) in [#508](https://github.com/teamleadercrm/ui/pull/508))

## [0.19.8] - 2019-01-15

### Added

- `SingleLineInputBase`: added the `width` prop to override its full width default behavior. ([@driesd](https://github.com/driesd) in [#494](https://github.com/teamleadercrm/ui/pull/494))

### Fixed

- Make the main entryfile in `package.json` explicit to avoid auto-importing issues.

## [0.19.7] - 2019-01-09

### Fixed

- `Popover`: fixed setting the dimensions of the `Popover`, via styling applied by passed down class names ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#498](https://github.com/teamleadercrm/ui/pull/498))

## [0.19.6] - 2019-01-07

### Changed

- `Message`: swapped the Link and the Button placement & always align them on the right. ([@driesd](https://github.com/driesd) in [#493](https://github.com/teamleadercrm/ui/pull/493))

### Fixed

- `Popover`: fixed squashing of the `Popover`s body in Internet Explorer 10-11 ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#495](https://github.com/teamleadercrm/ui/pull/495))

## [0.19.5] - 2019-01-04

### Added

- `DataGrid`: added a sort icon to the `HeaderCell` indicate a field is sortable. ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#483](https://github.com/teamleadercrm/ui/pull/483))
- `DataGrid`: made the body rows fully clickable & added a mouse over effect. ([@driesd](https://github.com/driesd) in [#473](https://github.com/teamleadercrm/ui/pull/473))
- `Link`: added the `disabled` boolean prop. ([@driesd](https://github.com/driesd) in [#487](https://github.com/teamleadercrm/ui/pull/487))

### Changed

- `DataGrid`: replaced the deprecated `isArray` function from node by the official `Array.isArray` function. ([@driesd](https://github.com/driesd) in [#488](https://github.com/teamleadercrm/ui/pull/488))
- `LoadingBar`: changed the default `tint` to `normal` to fix console warning ([@driesd](https://github.com/driesd) in [#489](https://github.com/teamleadercrm/ui/pull/489))

## [0.19.4] - 2018-12-26

### Added

- `Menu`: added the passing through of all properties. ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#481](https://github.com/teamleadercrm/ui/pull/481))

### Fixed

- `Input`, `NumericInput`, `TextArea`, `DatePickerInput` & `DatePickerInputRange`: fixed the placeholder styling in IE10+. ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#480](https://github.com/teamleadercrm/ui/pull/480))
- `Menu`: fixed the rendering of the `Menu`, when its `children` change. By recalculating the `width` and `height` property, when the component updates. ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#482](https://github.com/teamleadercrm/ui/pull/482))

## [0.19.3] - 2018-12-10

### Added

- `Popover`: added the possibility to add a sticky footer and/or header. ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#478](https://github.com/teamleadercrm/ui/pull/478))
- `ScrollContainer`: added the `ScrollContainer` component. It is used to create components that have a sticky header and footer, whilst the body is scrollable. ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#477](https://github.com/teamleadercrm/ui/pull/477))
- `Select`: add a `creatable` boolean prop. If `true`, it's possible to create a new option that is not in the list. ([@driesd](https://github.com/driesd) in [#476](https://github.com/teamleadercrm/ui/pull/476))

## [0.19.2] - 2018-11-28

### Added

- `DataGrid`: added a `bordered` boolean prop. If `true`, the Datagrid will have rounded corners and a border around it. ([@driesd](https://github.com/driesd) in [#472](https://github.com/teamleadercrm/ui/pull/472))
- `Passport` & `EmptyPassport`: added these new components to the library. ([@driesd](https://github.com/driesd) in [#474](https://github.com/teamleadercrm/ui/pull/474))
- `Popover`: added the `fullHeight` property, if set to false the `Popover` does not stretch more than a set value ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#467](https://github.com/teamleadercrm/ui/pull/467))

### Changed

- `DataGrid`: replaced the `custom resize events` with the `ReactResizeDetector` component. ([@driesd](https://github.com/driesd) in [#470](https://github.com/teamleadercrm/ui/pull/470))

### Removed

- `Link`: removed `blue outline` when clicking on a `Link` with `element='button'`. ([@driesd](https://github.com/driesd) in [#471](https://github.com/teamleadercrm/ui/pull/471))

### Fixed

- `DataGrid`: prevented the `grey border` from overlaying the `LoadingBar`. ([@driesd](https://github.com/driesd) in [#469](https://github.com/teamleadercrm/ui/pull/469))

## [0.19.1] - 2018-11-16

### Added

- `Dialog`: added a top border to the footer, when the content of the body overflows ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#461](https://github.com/teamleadercrm/ui/pull/461))
- `ProgressTracker` & `DataGrid`: added a `displayName` to their sub components to improve documentation in Storybook. ([@driesd](https://github.com/driesd) in [#462](https://github.com/teamleadercrm/ui/pull/462))

### Changed

- `Dialog`: the body of the `Dialog` renders scrollable, when its content starts to overflow ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#456](https://github.com/teamleadercrm/ui/pull/456))
- `RadioButton`: replaced the `splitProps` class method with our reusable `pickBoxProps` & `omitBoxProps`. ([@driesd](https://github.com/driesd) in [#460](https://github.com/teamleadercrm/ui/pull/460))
- `Checkbox` & `Toggle`: replaced the `splitProps` class method with our reusable `pickBoxProps` & `omitBoxProps`. ([@driesd](https://github.com/driesd) in [#463](https://github.com/teamleadercrm/ui/pull/463))
- `Typography`: set the default `tint` value to `darkest`. ([@driesd](https://github.com/driesd) in [#464](https://github.com/teamleadercrm/ui/pull/464))

### Fixed

- `DatePicker`: the `DatePickerInput` doesn't select a date anymore when that date has been disabled ([@ArnaudWeyts](https://github.com/ArnaudWeyts) in [#465](https://github.com/teamleadercrm/ui/pull/465))

## [0.19.0] - 2018-11-12

### Added

- `DialogBase`: added the `DialogBase` component, which is a copy of the previous `Dialog` implementation ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#443](https://github.com/teamleadercrm/ui/pull/443))
- `Avatar`: added the `shape` prop ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#451](https://github.com/teamleadercrm/ui/pull/451))
- `Avatar`: added a rounded square as a possible shape, to get this shape set the `shape` prop to `'rounded'` ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#451](https://github.com/teamleadercrm/ui/pull/451))
- `Maintenance`: added `uglify` to our gulpfile so the code in the output `lib` folder gets minified. ([@driesd](https://github.com/driesd) in [#452](https://github.com/teamleadercrm/ui/pull/452))
- `withTheme`: added the `withTheme` HOC ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#416](https://github.com/teamleadercrm/ui/pull/416))
- `sizes`: added general constants and a helper function to retrieve the library wide sizes ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#448](https://github.com/teamleadercrm/ui/pull/448))
- `Typography`: added a `displayName` to all `Typography` components that are using the `textFactory`. ([@driesd](https://github.com/driesd) in [#453](https://github.com/teamleadercrm/ui/pull/453))

### Changed

- [BREAKING] `Dialog`: moved the responsibility to render a header and a footer to the component itself, based on the received props ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#443](https://github.com/teamleadercrm/ui/pull/443))
- [BREAKING] `Dialog`: the `children` are rendered inside a `Box` with the `padding` prop set to 4 ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#443](https://github.com/teamleadercrm/ui/pull/443))
- `NumericInput`: the respective spinner controls render as disabled, when the minimum or maximum value of the input has been reached. ([@LennertBlommaert](https://github.com/LennertBlommaert) in [#447](https://github.com/teamleadercrm/ui/pull/447))

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
