const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const totalUniqueAlphabet = 26;

export const convertDateToColumns = (date) => {
  let columns = "";

  while (date > 0) {
    let modulo = (date - 1) % totalUniqueAlphabet;

    columns = alphabet[modulo] + columns;

    date = Math.floor((date - 1) / totalUniqueAlphabet);
  }

  return columns;
};
