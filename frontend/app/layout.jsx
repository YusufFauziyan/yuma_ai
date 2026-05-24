import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Yuma AI — Automate Conversations. Delight Customers.",
  description:
    "Yuma AI helps teams automate support, conversations, and productivity using fast and intelligent AI assistance. Trusted by 5,000+ teams worldwide.",
  keywords: ["AI", "customer support", "automation", "chatbot", "SaaS", "helpdesk", "AI assistant"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
