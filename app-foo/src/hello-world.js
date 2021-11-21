const sayHello = (someone) => {
  // we cannot reasonably use Heeello
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
