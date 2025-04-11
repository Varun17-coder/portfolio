import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
    title: "Varun Andekar",
    description: "Aspiring software engineer building modern web solutions with Next.js, Tailwind CSS, and more.",
    keywords: "VarunAndekar, software engineer, portfolio, web developer, nextjs, tailwind",
    authors: [{ name: "VarunAndekar" }],
    creator: "VarunAndekar",
    openGraph: {
      title: "VarunAndekar | Software Engineer Portfolio",
      description: "Building modern web solutions with creativity and code.",
      url: "https://VarunAndekar.vercel.app",
      siteName: "VarunAndekar Portfolio",
      locale: "en_US",
      type: "website",
    },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

      {/* for better seo and google search console */}
      <meta name="google-site-verification" content="AhRpix9marE60R9sL0nklbnW35Kzi9aQwevDllPBLk4" />

      </head>
     <body className={`${jetbrains.className} scroll-smooth bg-gradient-to-br from-[#0a0a0a] via-[#1e0f2f] to-[#000000] text-white`}>
        {children}
      </body>
    </html>
  );
}
