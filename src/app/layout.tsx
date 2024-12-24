import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rabble Brand Guidelines",
  description: "guide to the Rabble branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-lime text-black">{children}</body>
    </html>
  );
}
