import globals from "globals";
import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-node";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные для браузера
        ...globals.node,    // Глобальные переменные для Node.js
      },
      parserOptions: {
        ecmaVersion: "latest", // Используем последнюю версию ECMAScript
        sourceType: "module",  // По умолчанию используем ES Modules
      },
    },
  },
  pluginJs.configs.recommended, // Рекомендуемые правила от @eslint/js
  {
    plugins: {
      node: pluginNode, // Подключаем плагин для работы с CommonJS
    },
    rules: {
      // Разрешаем использование require() в CommonJS
      "node/global-require": "off",
      "node/exports-style": ["error", "module.exports"], // Предпочитаем module.exports
      "node/prefer-global/buffer": ["error", "always"], // Предпочитаем глобальные объекты Node.js
      "node/prefer-global/console": ["error", "always"],
      "node/prefer-global/process": ["error", "always"],
      "node/prefer-global/url-search-params": ["error", "always"],
      "node/prefer-global/url": ["error", "always"],
      // Разрешаем использование __dirname и __filename
      "node/no-unsupported-features/es-syntax": [
        "error",
        {
          ignores: ["modules"], // Игнорируем ошибки, связанные с ES Modules
        },
      ],
    },
  },
];