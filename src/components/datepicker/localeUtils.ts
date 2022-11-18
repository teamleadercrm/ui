import { DateTime, DateTimeFormatOptions, Info } from 'luxon';

const defaultLocale = 'en-GB';

type Locales =
  | 'da-DK'
  | 'de-DE'
  | 'en-GB'
  | 'en-US'
  | 'es-ES'
  | 'fi-FI'
  | 'fr-BE'
  | 'fr-FR'
  | 'it-IT'
  | 'nb-NO'
  | 'nl-BE'
  | 'nl-NL'
  | 'pl-PL'
  | 'pt-PT'
  | 'sv-SE'
  | 'tr-TR';

const firstDayOfWeek = {
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

export const formatDay = (day: Date, locale = defaultLocale) =>
  DateTime.fromJSDate(day).setLocale(locale).toLocaleString(DateTime.DATE_HUGE);

export const formatMonthTitle = (date: Date, locale = defaultLocale) =>
  DateTime.fromJSDate(date).setLocale(locale).toLocaleString({ month: 'long', year: 'numeric' });

export const getFirstDayOfWeek = (locale: Locales = defaultLocale) => {
  return firstDayOfWeek[locale] || firstDayOfWeek[defaultLocale];
};

export const formatWeekdayShort = (dayOfWeekNumber: number, locale: Locales = defaultLocale) => {
  const dayIndex = (7 + dayOfWeekNumber - getFirstDayOfWeek(locale)) % 7;
  return Info.weekdays('short', { locale })[dayIndex];
};

export const formatWeekdayLong = (dayOfWeekNumber: number, locale = defaultLocale) => {
  const dayIndex = (7 + dayOfWeekNumber - 1) % 7;
  return Info.weekdays('long', { locale })[dayIndex];
};

export const getMonths = (locale = defaultLocale) =>
  Info.months('long', { locale }) as [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];

export const formatDate = (
  date: Date,
  format: string | string[] | DateTimeFormatOptions = DateTime.DATE_SHORT,
  locale = defaultLocale,
) =>
  DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString(format as DateTimeFormatOptions);

export const parseDate = (string: string, format = DateTime.DATE_SHORT as string, locale = defaultLocale) =>
  DateTime.fromFormat(string, format, { locale }).toJSDate();

export const parseMultiFormatsDate = (value: string, formats: string[], locale: string) => {
  for (let i = 0; i < formats.length; i++) {
    const parsedDate = DateTime.fromFormat(value, formats[i], { locale });
    if (parsedDate.isValid) {
      return parsedDate.toJSDate();
    }
  }
  return null;
};

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

export const isValidDate = (date: Date) => DateTime.fromJSDate(date).isValid;
