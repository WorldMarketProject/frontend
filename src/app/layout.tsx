import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomLayout from "@/components/CustomLayout";

export const metadata: Metadata = {
  title: "Free Market",
  description: "자유시장",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#171E66'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomLayout>
          {children}
        </CustomLayout>
      </body>
    </html>
  );
}
