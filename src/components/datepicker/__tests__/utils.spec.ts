// @todo uncomment when jest is added
// const testDate = new Date(2022, 10, 15);
// describe('DatePicker utils', () => {
//   describe('isAllowedDate', () => {
//     test.each([
//       { disabledDays: new Date(2022, 10, 16), output: true },
//       { disabledDays: new Date(2022, 10, 15), output: false },
//       { disabledDays: [new Date(2022, 10, 16), new Date(2022, 10, 14)], output: true },
//       { disabledDays: [new Date(2022, 10, 16), new Date(2022, 10, 15)], output: false },
//       { disabledDays: { from: new Date(2022, 10, 15), to: null }, output: true },
//       { disabledDays: { from: null, to: new Date(2022, 10, 15) }, output: true },
//       { disabledDays: { from: new Date(2022, 10, 16), to: new Date(2022, 10, 20) }, output: true },
//       { disabledDays: { from: new Date(2022, 10, 14), to: new Date(2022, 10, 15) }, output: false },
//       { disabledDays: { before: new Date(2022, 10, 14) }, output: true },
//       { disabledDays: { before: new Date(2022, 10, 16) }, output: false },
//       { disabledDays: { after: new Date(2022, 10, 16) }, output: true },
//       { disabledDays: { after: new Date(2022, 10, 14) }, output: false },
//       { disabledDays: { before: new Date(2022, 10, 14), after: new Date(2022, 10, 16) }, output: true },
//       { disabledDays: { before: new Date(2022, 10, 16), after: new Date(2022, 10, 17) }, output: false },
//       { disabledDays: { daysOfWeek: [1, 3, 4] }, output: true },
//       { disabledDays: { daysOfWeek: [1, 2, 3, 4] }, output: false },
//       { disabledDays: (_date: Date) => false, output: true },
//       { disabledDays: (_date: Date) => true, output: false },
//     ])('works with disabled days: `$disabledDays`', ({ disabledDays, output }) => {
//       expect(isAllowedDate(testDate, disabledDays)).toEqual(output);
//     });
//   });
// });
