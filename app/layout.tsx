import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rambl",
    template: "%s | Rambl",
  },
  description:
    "A playfully soft platform to help you ramble through your thoughts",
  applicationName: "Rambl",

  icons: {
    icon: "/simple.svg",
    shortcut: "/simple.svg",
    apple: "/simple.svg",
  },

  openGraph: {
    title: "Rambl",
    description:
      "A playfully soft platform to help you ramble through your thoughts",
    url: "https://rambl.tech",
    siteName: "Rambl",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Rambl preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rambl",
    description:
      "A playfully soft platform to help you ramble through your thoughts",
    images: ["/icon.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${quicksand.className} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
