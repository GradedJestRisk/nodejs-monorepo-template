const { sayHello } = require("./hello-world");
const validateEnvironmentVariables = require("./validate-environment-variables");

const main = () => {
  process.env.FT_HELLO_WORLD = "true";
  try {
    validateEnvironmentVariables(process.env);
  } catch (error) {
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }

  if (process.env.FT_HELLO_WORLD === "true") {
    console.log(sayHello("world"));
  }

  // eslint-disable-next-line no-process-exit
  process.exit(0);
};

main();
