# 📦 n-sandbox

The sandbox runtime environment of Node can support any advanced syntax as well as TypeScript.

## 🤔 why

- Sometimes during runtime, we need to load some more advanced syntax files.
- A typical scenario, our configuration files are usually written in TypeScript, and we need to dynamically load them at runtime.

## 🔥 Install

```sh
npm install @shined/n-sandbox
```

## 🦾 Usage

```ts
import { sandbox } from "./index";

const fn = () => {
  const config = require("../fixtures/ts/define-config");
  return config;
};

const res = await sandbox(fn);

console.log(res.default);
```

## 📚 Api

```ts
type Fn<R> = () => Promise<R> | R;

interface SandboxOptions {
  target?: string[];
}

declare function sandbox<R>(fn: Fn<R>, options?: SandboxOptions): Promise<R>;
```

### Options

#### target

- see [esbuild#target](https://esbuild.github.io/api/#target)

## 🫂 Maintainers

- [@ityuany](https://github.com/ityuany)
