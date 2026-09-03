import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  { ignores: ["dist/**", ".next/**"] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // Test files and the Vitest setup mock `next/image` with a plain `<img>`.
    // That is the point of the mock, so the LCP rule does not apply to them.
    files: [
      "**/*.test.ts",
      "**/*.test.tsx",
      "vitest.setup.tsx",
    ],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
