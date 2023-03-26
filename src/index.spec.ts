import { expect, it, describe } from "vitest";
import { sandbox } from "./index";

describe("sandbox", () => {
  it("should run a function in a sandbox", async () => {
    const fn = () => {
      return 2 + 2;
    };
    const result = await sandbox(fn);
    expect(result).toBe(4);
  });

  it("should throw an error when the function throws an error", async () => {
    const fn = () => {
      throw new Error("Test error");
    };
    await expect(sandbox(fn)).rejects.toThrow("Test error");
  });

  it("should be return correct configuration information", async () => {
    const fn = () => {
      const config = require("../fixtures/ts/define-config");
      return config;
    };
    const res = await sandbox(fn);
    expect(res.default).toEqual({ name: "张三" });
  });
});
