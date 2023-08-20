export const dateToYYYYMMDD = (date, separator = '.') => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}${separator}${month < 10 ? `0${month}` : month}${separator}${day < 10 ? `0${day}` : day}`;
};
