## [unreleased]

### Added

### Changed

- `Button & IconButton`: use `Box` as the base component. ([@driesd](https://github.com/driesd) in [#697](https://github.com/teamleadercrm/ui/pull/697))
- `Counter`: decreased horizontal padding from `6px` to `3px` for the `small` size variant. ([@driesd](https://github.com/driesd) in [#696](https://github.com/teamleadercrm/ui/pull/696))
- `Link`: set `left` as the default value for the `iconPlacement` prop. ([@driesd](https://github.com/driesd) in [#698](https://github.com/teamleadercrm/ui/pull/698))
- `Radio`: changed the default background color from neutral light to neutral lightest (white). ([@driesd](https://github.com/driesd) in [#700](https://github.com/teamleadercrm/ui/pull/700))
- `Banner`: remove padding on the right side of the banner content. ([@rathesDot](https://github.com/rathesDot)) in [#699](https://github.com/teamleadercrm/ui/pull/699)

### Deprecated

### Removed

### Fixed

### Dependency updates

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
- `DatePicker`: the `onChange` handler is no longer triggered when a disabled date has been selected. ([@Kemosabert](https://github.com/Kemosabert)) in [#664](https://github.com/teamleadercrm/ui/pull/664)
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
