import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Amona Ayoola | Web3 Marketer & GTM Strategist",
  description: "Web3 marketer and go-to-market strategist. Grew a client's X account from 30K to 120K in 90 days. Organic only.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <footer>
          <div className="footer-name">Amona Ayoola</div>
          <div className="footer-copy">© 2026 All Rights Reserved</div>
        </footer>
      </body>
    </html>
  );
}
