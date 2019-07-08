'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.parseDate = exports.formatDate = exports.getMonths = exports.getFirstDayOfWeek = exports.formatWeekdayLong = exports.formatWeekdayShort = exports.formatMonthTitle = exports.formatDay = void 0;

var _luxon = require('luxon');

var defaultLocale = 'en-GB';
var firstDayOfWeek = {
  'da-DK': 1,
  'de-DE': 1,
  'en-GB': 1,
  'en-US': 0,
  'es-ES': 1,
  'fi-FI': 1,
  'fr-BE': 1,
  'fr-FR': 1,
  'it-IT': 1,
  'nb-NO': 1,
  'nl-BE': 1,
  'nl-NL': 1,
  'pl-PL': 1,
  'pt-PT': 1,
  'sv-SE': 1,
  'tr-TR': 1,
};

var formatDay = function formatDay(day) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  return _luxon.DateTime.fromJSDate(day)
    .setLocale(locale)
    .toLocaleString(_luxon.DateTime.DATE_HUGE);
};

exports.formatDay = formatDay;

var formatMonthTitle = function formatMonthTitle(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  return _luxon.DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString({
      month: 'long',
      year: 'numeric',
    });
};

exports.formatMonthTitle = formatMonthTitle;

var formatWeekdayShort = function formatWeekdayShort(dayOfWeekNumber) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  var dayIndex = (7 + dayOfWeekNumber - getFirstDayOfWeek(locale)) % 7;
  return _luxon.Info.weekdays('short', {
    locale: locale,
  })[dayIndex];
};

exports.formatWeekdayShort = formatWeekdayShort;

var formatWeekdayLong = function formatWeekdayLong(dayOfWeekNumber) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  var dayIndex = (7 + dayOfWeekNumber - 1) % 7;
  return _luxon.Info.weekdays('long', {
    locale: locale,
  })[dayIndex];
};

exports.formatWeekdayLong = formatWeekdayLong;

var getFirstDayOfWeek = function getFirstDayOfWeek() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLocale;
  return firstDayOfWeek[locale] || firstDayOfWeek[defaultLocale];
};

exports.getFirstDayOfWeek = getFirstDayOfWeek;

var getMonths = function getMonths() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLocale;
  return _luxon.Info.months('long', {
    locale: locale,
  });
};

exports.getMonths = getMonths;

var formatDate = function formatDate(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _luxon.DateTime.DATE_SHORT;
  return _luxon.DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString(format);
};

exports.formatDate = formatDate;

var parseDate = function parseDate(string) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _luxon.DateTime.DATE_SHORT;
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultLocale;
  return _luxon.DateTime.fromFormat(string, format, {
    locale: locale,
  }).toJSDate();
};

exports.parseDate = parseDate;
var _default = {
  getFirstDayOfWeek: getFirstDayOfWeek,
  formatDate: formatDate,
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getMonths: getMonths,
  parseDate: parseDate,
};
exports.default = _default;
