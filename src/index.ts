import { addHook } from "pirates";
import { transformSync } from "esbuild";
import { DEFAULT_EXT, DEFAULT_TARGET } from "./default-config";

export type Fn<R> = () => Promise<R> | R;

export interface SandboxOptions {
  target?: string[];
}

export async function sandbox<R>(
  fn: Fn<R>,
  options?: SandboxOptions
): Promise<R> {
  const revert = addHook(
    (code, filename) => {
      return transformSync(code, {
        sourcefile: filename,
        target: options?.target ?? DEFAULT_TARGET,
        format: "cjs",
        logLevel: "error",
        loader: "ts",
        sourcemap: true,
      })?.code;
    },
    {
      ext: DEFAULT_EXT,
      ignoreNodeModules: true,
    }
  );
  const res = fn();
  revert();
  return res;
}
