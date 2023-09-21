interface ColorScale {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
  "950": string;
}

export interface ColorPalette {
  primary: ColorScale;
  success: ColorScale;
  info: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  gray: ColorScale;
  slate: ColorScale;
  neutral: ColorScale;
  text: {
    dark: string;
    light: string;
    base: string;
    placeholder: string;
  };
  surface: {
    border: string;
    natural: string;
    white: string;
    disabled: string;
    aside: string;
    dropShadow: string;
  };
}

export const colorPalette: ColorPalette = {
  text: {
    dark: "#1D263A",
    light: "#FFFFFF",
    base: "#5B5F64",
    placeholder: "#ADAFB1",
  },
  surface: {
    border: "#D6D7D8",
    natural: "#F6FBFF",
    white: "#FFF",
    disabled: "#ECECEC",
    aside: "#F8F8F8",
    dropShadow: "#fefefe",
  },
  primary: {
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "200": "#bae5fd",
    "300": "#65c9fb",
    "400": "#39bbf7",
    "500": "#0fa3e8",
    "600": "#0382c6",
    "700": "#0367a1",
    "800": "#075885",
    "900": "#0c496e",
    "950": "#082e49",
  },
  success: {
    "50": "#f0fdf4",
    "100": "#dcfce7",
    "200": "#bbf7d0",
    "300": "#86efac",
    "400": "#4ade80",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d",
    "800": "#166534",
    "900": "#14532d",
    "950": "#052e16",
  },
  info: {
    "50": "aspdojkadasodasdadadad",
    "100": "aspdojkadasodasdadadad",
    "200": "aspdojkadasodasdadadad",
    "300": "aspdojkadasodasdadadad",
    "400": "aspdojkadasodasdadadad",
    "500": "aspdojkadasodasdadadad",
    "600": "aspdojkadasodasdadadad",
    "700": "aspdojkadasodasdadadad",
    "800": "aspdojkadasodasdadadad",
    "900": "aspdojkadasodasdadadad",
    "950": "aspdojkadasodasdadadad",
  },
  warning: {
    "50": "#fff7ed",
    "100": "#ffedd5",
    "200": "#fed7aa",
    "300": "#fdba74",
    "400": "#fb923c",
    "500": "#f97316",
    "600": "#ea580c",
    "700": "#c2410c",
    "800": "#9a3412",
    "900": "#7c2d12",
    "950": "#431407",
  },
  danger: {
    "50": "#fef2f2",
    "100": "#fee2e2",
    "200": "#fecaca",
    "300": "#fca5a5",
    "400": "#f87171",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "900": "#7f1d1d",
    "950": "#450a0a",
  },
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712",
  },
  slate: {
    "50": "#f8fafc",
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a",
    "950": "#020617",
  },
  neutral: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#e5e5e5",
    "300": "#d4d4d4",
    "400": "#a3a3a3",
    "500": "#737373",
    "600": "#525252",
    "700": "#404040",
    "800": "#262626",
    "900": "#171717",
    "950": "#0a0a0a",
  },
};
