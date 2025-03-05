import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovieVault",
  description:
    "Your personal movie collection! Browse, discover, and keep track of your favorite films.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider>
          <Header />

          <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-20 px-8 flex flex-col md:flex-row gap-8 max-w-[1200px] mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
