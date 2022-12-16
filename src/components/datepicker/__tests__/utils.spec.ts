import { AllowedDisabledDays } from '../DatePickerInput';
import { isAllowedDate } from '../utils';

const testDate = new Date(2022, 10, 15);
describe('Component - DatePicker - utils', () => {
  describe('isAllowedDate', () => {
    const testData: Array<{ disabledDays: AllowedDisabledDays; output: boolean }> = [
      { disabledDays: new Date(2022, 10, 16), output: true },
      { disabledDays: new Date(2022, 10, 15), output: false },
      { disabledDays: [new Date(2022, 10, 16), new Date(2022, 10, 14)], output: true },
      { disabledDays: [new Date(2022, 10, 16), new Date(2022, 10, 15)], output: false },
      // @ts-ignore
      { disabledDays: [{ incorrect: 'value' }], output: true },
      // @ts-ignore
      { disabledDays: [new Date(2022, 10, 16), { incorrect: 'value' }], output: true },
      { disabledDays: { from: new Date(2022, 10, 15), to: null }, output: true },
      { disabledDays: { from: null, to: new Date(2022, 10, 15) }, output: true },
      { disabledDays: { from: new Date(2022, 10, 16), to: new Date(2022, 10, 20) }, output: true },
      { disabledDays: { from: new Date(2022, 10, 14), to: new Date(2022, 10, 15) }, output: false },
      { disabledDays: { before: new Date(2022, 10, 14) }, output: true },
      { disabledDays: { before: new Date(2022, 10, 16) }, output: false },
      { disabledDays: { after: new Date(2022, 10, 16) }, output: true },
      { disabledDays: { after: new Date(2022, 10, 14) }, output: false },
      { disabledDays: { before: new Date(2022, 10, 14), after: new Date(2022, 10, 16) }, output: true },
      { disabledDays: { before: new Date(2022, 10, 16), after: new Date(2022, 10, 17) }, output: false },
      { disabledDays: { daysOfWeek: [1, 3, 4] }, output: true },
      { disabledDays: { daysOfWeek: [1, 2, 3, 4] }, output: false },
      { disabledDays: (_date: Date) => false, output: true },
      { disabledDays: (_date: Date) => true, output: false },
    ];

    test.each(testData)('works with disabled days: `$disabledDays`', ({ disabledDays, output }) => {
      expect(isAllowedDate(testDate, disabledDays)).toEqual(output);
    });
  });
});
