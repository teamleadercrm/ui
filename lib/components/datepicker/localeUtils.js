'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.default = exports.parseDate = exports.formatDate = exports.getMonths = exports.getFirstDayOfWeek = exports.formatWeekdayLong = exports.formatWeekdayShort = exports.formatMonthTitle = exports.formatDay = void 0);
var _luxon = require('luxon'),
  defaultLocale = 'en-GB',
  firstDayOfWeek = {
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
  },
  formatDay = function(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : defaultLocale;
    return _luxon.DateTime.fromJSDate(e)
      .setLocale(t)
      .toLocaleString(_luxon.DateTime.DATE_HUGE);
  };
exports.formatDay = formatDay;
var formatMonthTitle = function(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : defaultLocale;
  return _luxon.DateTime.fromJSDate(e)
    .setLocale(t)
    .toLocaleString({ month: 'long', year: 'numeric' });
};
exports.formatMonthTitle = formatMonthTitle;
var formatWeekdayShort = function(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : defaultLocale,
    a = (7 + e - getFirstDayOfWeek(t)) % 7;
  return _luxon.Info.weekdays('short', { locale: t })[a];
};
exports.formatWeekdayShort = formatWeekdayShort;
var formatWeekdayLong = function(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : defaultLocale,
    a = (7 + e - 1) % 7;
  return _luxon.Info.weekdays('long', { locale: t })[a];
};
exports.formatWeekdayLong = formatWeekdayLong;
var getFirstDayOfWeek = function() {
  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : defaultLocale;
  return firstDayOfWeek[e] || firstDayOfWeek[defaultLocale];
};
exports.getFirstDayOfWeek = getFirstDayOfWeek;
var getMonths = function() {
  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : defaultLocale;
  return _luxon.Info.months('long', { locale: e });
};
exports.getMonths = getMonths;
var formatDate = function(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : defaultLocale,
    a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : _luxon.DateTime.DATE_SHORT;
  return _luxon.DateTime.fromJSDate(e)
    .setLocale(t)
    .toLocaleString(a);
};
exports.formatDate = formatDate;
var parseDate = function(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : _luxon.DateTime.DATE_SHORT,
    a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : defaultLocale;
  return _luxon.DateTime.fromFormat(e, t, { locale: a }).toJSDate();
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
