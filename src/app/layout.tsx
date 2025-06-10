'use client';

import "./globals.css";
import { ProgressWrapper } from './components/ProgressWrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProgressWrapper>
          {children}
        </ProgressWrapper>
      </body>
    </html>
  );
}
