import { test, expect } from "vitest";
import { DEFAULT_EXT, DEFAULT_TARGET } from "./default-config";

test("DEFAULT_EXT", () => {
  expect(DEFAULT_EXT).toEqual([".ts", ".js"]);
});

test("DEFAULT_TARGET", () => {
  expect(DEFAULT_TARGET).toEqual(["node12"]);
});
