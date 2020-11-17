export const getPriceOfLanguage = (language, letterCount) => {
  if (language === "en") {
    const cost = letterCount * 0.12;
    return cost < 120 ? 120 : cost;
  } else if (language === "ua" || language === "ru") {
    const cost = letterCount * 0.05;
    return cost < 50 ? 50 : cost;
  }
};

export const getFullPriceWithFormat = (price, expectedFormats, format) => {
  return expectedFormats.indexOf(format) !== -1
    ? price.toFixed(2)
    : (price * 1.2).toFixed(2);
};

export const getWorkDuration = (language, letterCount) => {
  if (language === "en") {
    return Math.trunc(letterCount / (333 / 60) + 30);
  } else if (language === "ua" || language === "ru") {
    return Math.trunc(letterCount / (1333 / 60) + 30);
  }
};

export const getDeadlineTime = (workMinutes) => {
  let minutesWorked = 0;
  const current = new Date();
  const workHoursStart = 10;
  const workHoursEnd = 19;

  while (minutesWorked < (workMinutes < 90 ? 90 : workMinutes)) {
    if (
      current.getHours() >= workHoursStart &&
      current.getHours() < workHoursEnd &&
      current.getDay() !== 0 &&
      current.getDay() !== 6
    ) {
      minutesWorked++;
    }
    current.setTime(current.getTime() + 1000 * 60);
  }
  return current;
};
