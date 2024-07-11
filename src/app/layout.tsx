import type { Metadata } from "next";
import {Noto_Sans_Display} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";

const notoSansDisplay = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Currencier",
  description: "No more Googling for currency conversions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansDisplay.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
