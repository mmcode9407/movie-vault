export const getFullYear = (date: string | Date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return date.getFullYear();
};
