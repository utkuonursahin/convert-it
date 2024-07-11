import type { Metadata } from "next";
import {Noto_Sans_Display} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import {Provider} from "jotai";
import {Toaster} from "@/components/ui/sonner";

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
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={notoSansDisplay.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Provider>
            {children}
            <Toaster richColors/>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
