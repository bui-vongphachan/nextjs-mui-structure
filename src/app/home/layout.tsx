import type { Metadata } from "next";
import { MainContainer, Main, MainContentContainer } from "./style";
import { ThemeContextProvider } from "@/styles/themeContext";
import { Body } from "@/styles/style";
import Aside from "@/components/Core/Aside";
import Navbar from "@/components/Core/Nav";
import { Suspense } from "react";
import "./style.css";
import CustomSnackbarProvider from "@/components/Core/Snack";

export const metadata: Metadata = {
  title: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
  description: "ລະບົບຄຸ້ມຄອງໝາຍເລກໂທລະສັບ",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const asyncAside: JSX.Element = await Aside();

  const asyncNav: JSX.Element = await Navbar();

  return (
    <html lang="en">
      <ThemeContextProvider>
        <Body>
          <MainContainer>
            <CustomSnackbarProvider>
              <Suspense fallback={<>Loading...</>}>{asyncNav}</Suspense>
              <MainContentContainer>
                <Suspense fallback={<>Loading...</>}>{asyncAside}</Suspense>
                <Main>{children}</Main>
              </MainContentContainer>
            </CustomSnackbarProvider>
          </MainContainer>
        </Body>
      </ThemeContextProvider>
    </html>
  );
}
