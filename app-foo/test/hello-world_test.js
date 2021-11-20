const { sayHello } = require("../src/hello-world");

/* eslint-disable node/no-unpublished-require*/
require("chai").should();

describe("#sayHello", function () {
  describe("should greet someone", function () {
    describe("should", function () {
      it("works this way", function () {
        // given
        const someone = "world";

        // when
        const actualGreeting = sayHello(someone);

        // then
        actualGreeting.should.equal("Hello, world!");
      });
    });
  });
});
