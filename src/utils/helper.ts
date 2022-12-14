import type { Time } from "./types";

// TODO: Fix
const getFallAsleep = (hour: string, minute: string): Time[] => {
  const times: Time[] = [];
  const date = new Date();
  date.setHours(parseInt(hour));
  date.setHours(date.getHours() - 9);
  date.setMinutes(parseInt(minute));

  for (let i = 6; i >= 3; i--) {
    let minutes = date.getMinutes().toString();
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    times.push({
      time: `${date.getHours()}:${minutes}`,
      cycles: i,
      hours: (i * 90) / 60,
    });
    date.setMinutes(date.getMinutes() + 90);
  }

  return times;
};

const getWakeUp = (): Time[] => {
  const times: Time[] = [];
  const date = new Date();
  date.setHours(date.getHours());

  for (let i = 1; i <= 6; i++) {
    date.setMinutes(date.getMinutes() + 90);
    let minutes = date.getMinutes().toString();
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    times.push({
      time: `${date.getHours()}:${minutes}`,
      cycles: i,
      hours: (i * 90) / 60,
    });
  }

  return times;
};

export { getFallAsleep, getWakeUp };
