const sayHello = (someone) => {
  return `Hello, ${someone}!`;
};

/* istanbul ignore next */
const sayGoodbye = (someone) => {
  return `Goodbye, ${someone}!`;
};

module.exports = {
  sayHello,
  sayGoodbye,
};
