import dayjs, { Dayjs } from "dayjs";

export const rules = {
  required: (message: string = "Обязательное поле") => ({
    required: true,
    message,
  }),

  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Dayjs) {
      const currentDay = dayjs().date();
      if (value.date() >= currentDay) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
