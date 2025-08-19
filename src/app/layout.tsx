import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hlaing Hpone | Software Developer Portfolio",
  description:
    "Software developer portfolio showcasing projects, skills, and experience in React, Next.js, Node.js, and more.",
  keywords: [
    "Hlaing Hpone",
    "Software Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio Website",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
  ],
  openGraph: {
    title: "Hlaing Hpone | Portfolio",
    description: "Check out my portfolio with projects and skills.",
    url: "https://www.hlainghpone.com",
    siteName: "Hlaing Hpone",
    images: [
      {
        url: "https://www.hlainghpone.com/profile.png",
        width: 300,
        height: 650,
        alt: "Hlaing Hpone Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hlaing Hpone | Portfolio",
    description: "Software developer portfolio showcasing projects and skills.",
    images: ["https://www.hlainghpone.com/profile.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
