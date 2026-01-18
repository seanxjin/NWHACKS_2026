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
  metadataBase: new URL("https://rambl.tech"),

  title: {
    default: "Rambl",
    template: "%s | Rambl",
  },
  description:
    "A playfully soft platform to help you ramble through your thoughts",
  applicationName: "Rambl",

  alternates: {
    canonical: "./",
  },

  icons: {
    icon: "/simple.svg",
    shortcut: "/simple.svg",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Rambl",
    description:
      "A playfully soft platform to help you ramble through your thoughts",
    url: "https://rambl.tech",
    siteName: "Rambl",
    images: [
      {
        url: "/icon.png",
        width: 500,
        height: 500,
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
    images: ["/icon.png"],
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
