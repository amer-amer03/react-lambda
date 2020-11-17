import {
  getPriceOfLanguage,
  getFullPriceWithFormat,
  getWorkDuration,
  getDeadlineTime,
} from "../utils";

test("Is the language/ price correct?", () => {
  expect(getPriceOfLanguage("ua", 1500)).toBe(75);
  expect(getPriceOfLanguage("ru", 1500)).toBe(75);
  expect(getPriceOfLanguage("en", 1500)).toBe(180);
});

test("Is full price correct?", () => {
  const expectedFormats = [".doc", ".docx", ".rtf"];
  expect(getFullPriceWithFormat(120, expectedFormats, ".docx")).toBe("120.00");
  expect(getFullPriceWithFormat(120, expectedFormats, ".doc")).toBe("120.00");
  expect(getFullPriceWithFormat(120, expectedFormats, ".rtf")).toBe("120.00");
  expect(getFullPriceWithFormat(120, expectedFormats, ".txt")).toBe("144.00");
});

test("Is the work time correct?", () => {
  expect(getWorkDuration("ua", 1500)).toBe(97);
  expect(getWorkDuration("ru", 1500)).toBe(97);
  expect(getWorkDuration("en", 1500)).toBe(300);
});

// test("it the deadline correct?", () => {
//   expect(getWorkDuration(130)).
// });
