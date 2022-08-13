export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const regexForm = {
  firstname: /^[A-Za-z]{4,35}$/,
  lastname: /^[A-Za-z]{4,35}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  mailAddress: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};