import { describe, it, KSpec } from "./runner.js";

describe("some examples", () => {
  it('can pass', () => {
    return new KSpec().expect(1 + 1).toBe(2);
  });

  it('can fail', () => {
    return new KSpec().expect(1 + 1).toBe(3);
  });

  // it('can pass after failing', () => {
  // });
});
