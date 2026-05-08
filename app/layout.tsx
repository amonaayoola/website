import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Amona Ayoola | Web3 Marketer & GTM Strategist",
  description: "Web3 marketer and go-to-market strategist. Grew a client's X account from 30K to 120K in 90 days. Organic only.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <ScrollReveal />
        <main>{children}</main>
        <footer>
          <div className="footer-name">Amona Ayoola</div>
          <div className="footer-copy">© 2026 All Rights Reserved</div>
        </footer>
      </body>
    </html>
  );
}
