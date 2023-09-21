import { ColorPalette } from "@/styles/colors";
import { Shadow } from "@/styles/shadow";

export enum PaletteMode {
  LIGHT = "light",
  DARK = "dark",
}

export interface Text {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  fontFamily: string;
}

interface CustomTheme {
  color: ColorPalette;
  shadow: Shadow;
  text: {
    h1: Text;
    h2: Text;
    h3: Text;
    h4: Text;
    title: Text;
    subtitle: Text;
    text: Text;
    description: Text;
    descriptionBold: Text;
    small: Text;
  };
}

type Nullable<T> = T | null | undefined;

type OptionalKeys<T> = {
  [K in keyof T]?: Nullable<T[K]>;
};

declare module "@mui/system" {
  interface Theme extends CustomTheme {}
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color: OptionalKeys<CustomTheme["color"]>;
    shadow: Nullable<CustomTheme["shadow"]>;
    text: OptionalKeys<CustomTheme["text"]>;
  }
}
