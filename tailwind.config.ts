import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"], // ✅ correct, includes Hero.tsx
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",          // ✅
        "bg-soft": "var(--color-bg-soft)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",  // ✅ this SHOULD generate text-accent
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
    },
  },
  plugins: [],
};

export default config;