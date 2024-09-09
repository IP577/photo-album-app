export const validateInput = (value) => {
  const regex = /^[a-zA-Z]+$/;

  return regex.test(value);
};
