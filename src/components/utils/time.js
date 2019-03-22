export const splitSecondsIntoHoursMinutesSeconds = seconds => {
  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;

  const hours = Math.floor(seconds / secondsInHour);
  const minutes = Math.floor((seconds % secondsInHour) / secondsInMinute);
  const remainingSeconds = seconds % secondsInMinute;
  return {
    hours,
    minutes,
    seconds: remainingSeconds,
  };
};
