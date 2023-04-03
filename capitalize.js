function capitalize(string) {
  let result;
  if (string.length === 1) {
    result = string[0].toUpperCase();
  } else if (string.length > 1) {
    result = string[0].toUpperCase() + string.slice(1);
  } else {
    throw new Error('arguments is empty!');
  }
  return result;
};

module.exports = capitalize;
