import { DateTime, Info } from 'luxon';

const defaultLocale = 'en-GB';
const firstDayOfWeek = {
  'da-DK': 1,
  'de-DE': 1,
  'fr-FR': 1,
  'en-GB': 1,
  'en-US': 0,
  'es-ES': 1,
  'fi-FI': 1,
  'it-IT': 1,
  'nl-BE': 1,
  'pt-PT': 1,
  'pl-PL': 1,
  'sv-SE': 1,
};

export const formatDay = (day, locale = defaultLocale) =>
  DateTime.fromJSDate(day)
    .setLocale(locale)
    .toLocaleString(DateTime.DATE_HUGE);

export const formatMonthTitle = (date, locale = defaultLocale) =>
  DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString({ month: 'long', year: 'numeric' });

export const formatWeekdayShort = (dayOfWeekNumber, locale = defaultLocale) =>
  Info.weekdays('short', { locale })[dayOfWeekNumber];

export const formatWeekdayLong = (dayOfWeekNumber, locale = defaultLocale) =>
  Info.weekdays('long', { locale })[dayOfWeekNumber];

export const getFirstDayOfWeek = (locale = defaultLocale) => firstDayOfWeek[locale] || firstDayOfWeek[defaultLocale];

export const getMonths = (locale = defaultLocale) => Info.months('long', { locale });

export const formatDate = (date, locale = defaultLocale, format = DateTime.DATE_SHORT) =>
  DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString(format);

export const parseDate = (string, format = DateTime.DATE_SHORT, locale = defaultLocale) =>
  DateTime.fromFormat(string, format, { locale }).toJSDate();

export default {
  getFirstDayOfWeek,
  formatDate,
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getMonths,
  parseDate,
};
