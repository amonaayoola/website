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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting)e.target.classList.add('on')})},{threshold:0.07});function init(){document.querySelectorAll('.rv').forEach(function(el){obs.observe(el)})}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)}else{init()}})()` }} />
        <footer>
          <div className="footer-name">Amona Ayoola</div>
          <div className="footer-copy">© 2026 All Rights Reserved</div>
        </footer>
      </body>
    </html>
  );
}
