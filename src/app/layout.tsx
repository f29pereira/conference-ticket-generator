import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Pattern from "./components/Pattern/Pattern";
import TicketProvider from "./components/providers/TicketProvider";
import styles from "./layout.module.css";
import Image from "next/image";

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
        <body className={`bg ${inconsolata.variable} ${styles.bodyCont}`}>
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

          {/*Coding Conference Logo*/}
          <Image
            src="/images/logo/logo-full.svg"
            alt="Coding Conference Logo"
            width={209}
            height={30}
            className={styles.logoImg}
          />

          <main className={styles.mainCont}>{children}</main>

          <Pattern
            imgPath="/images/patterns/pattern-squiggly-line-bottom-mobile-tablet.svg"
            imgStyling="squigglyLineBottom"
          />
          <Pattern
            imgPath="/images/patterns/pattern-squiggly-line-bottom-desktop.svg"
            imgStyling="squigglyLineBottomDesktop"
          />
        </body>
      </TicketProvider>
    </html>
  );
}
