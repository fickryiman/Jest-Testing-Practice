import { describe, expect, test } from "@jest/globals";
import stringLength from "./stringLength";

describe('count string length', () => {
  test('string length for fickry equal 6', () => {
    expect(stringLength('fickry').toBe(6));
  });
});