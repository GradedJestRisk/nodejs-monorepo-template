const { sayHello } = require("../src/hello-world");

/* eslint-disable node/no-unpublished-require*/
require("chai").should();

describe("#sayHello", function () {
  it("should greet someone", function () {
    // given
    const someone = "world";

    // when
    const actualGreeting = sayHello(someone);

    // then
    actualGreeting.should.equal("Hello, world!");
  });
});
