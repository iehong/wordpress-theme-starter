const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("postcss-preset-env")],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "common",
      formats: ["umd"],
      fileName: (format) => `common.js`,
    },
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});
