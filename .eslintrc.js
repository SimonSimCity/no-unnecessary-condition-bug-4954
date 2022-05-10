module.exports = {
  root: true,
  parserOptions: {
    project: "tsconfig.json",
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint"
      ],
      rules: {
        "@typescript-eslint/no-unnecessary-condition": ["error"],
      },
    },
  ],
};
