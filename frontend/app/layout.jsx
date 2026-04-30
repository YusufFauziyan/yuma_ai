import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Yuma AI — Your Intelligent Assistant",
  description:
    "A modern AI chatbot powered by Google Gemini. Fast streaming responses, smart conversations, and beautiful interface.",
  keywords: ["AI", "chatbot", "Gemini", "assistant", "SaaS"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
