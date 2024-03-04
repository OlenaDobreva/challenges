import { add } from "./index";
import { subtract } from "./index";
import { multiply } from "./index";
import { divide } from "./index";

test("adds the numbers 1, 2 and 3 correctly", () => {
  const result = add(1, 2, 3);
  expect(result).toBe(6);
});

test("adds the numbers 13, 28 and 42 correctly", () => {
  const result = add(13, 28, 42);
  expect(result).toBe(83);
});
