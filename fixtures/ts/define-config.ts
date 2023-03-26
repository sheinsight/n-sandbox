interface Config {
  name: string;
}

function defineConfig(config: Config) {
  return config;
}

export default defineConfig({ name: "张三" });
