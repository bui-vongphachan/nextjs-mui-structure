import { Body } from "@/components/Core/Body";
import { ThemeContextProvider } from "@/styles/themeContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <Body sx={{ height: "auto" }}>{children}</Body>
      </ThemeContextProvider>
    </html>
  );
}
