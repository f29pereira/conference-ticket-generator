import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Pattern from "./components/Pattern/Pattern";
import TicketProvider from "./components/providers/TicketProvider";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TicketProvider>
        <body className={`bg ${inconsolata.variable}`}>
          <Pattern
            imgPath="/images/patterns/pattern-lines.svg"
            imgStyling="lines"
          />
          <Pattern
            imgPath="/images/patterns/pattern-circle.svg"
            imgStyling="circleTopLeft"
          />
          <Pattern
            imgPath="/images/patterns/pattern-squiggly-line-top.svg"
            imgStyling="squigglyLineTop"
          />
          <Pattern
            imgPath="/images/patterns/pattern-squiggly-line-bottom-mobile-tablet.svg"
            imgStyling="squigglyLineBottom"
          />
          <Pattern
            imgPath="/images/patterns/pattern-circle.svg"
            imgStyling="circleBottomRight"
          />
          <Pattern
            imgPath="/images/patterns/pattern-squiggly-line-bottom-desktop.svg"
            imgStyling="squigglyLineBottomDesktop"
          />
          {children}
        </body>
      </TicketProvider>
    </html>
  );
}
