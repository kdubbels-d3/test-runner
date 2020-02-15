const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

export function describe(description, block) {
  console.log(description);
  block();
};

export function it(description, block) {
    console.log(`${description}`);
    if (block().check()) {
      console.log(GREEN, ` (ok)`, RESET);
      console.log(`Expected ${block().expression } and got ${block().expectedValue}`);
    } else {
      console.log(RED, ` (fail)`, RESET);
      console.log(`Expected ${block().expression } but got ${block().expectedValue}`);
    }
}

export function expect(block) {
  return block;
}

export class KSpec {
    constructor() {
        this.expression = undefined;
        this.expectedValue = undefined;
    }

    expect(expression) {
        this.expression = expression;
        return this;
    }

    toBe(expectedValue) {
        this.expectedValue = expectedValue;
        return this;
    }

    check() {
        return this.expression === this.expectedValue;
    }
}
