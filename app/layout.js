import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: 'swap'
});


export const metadata = {
  title: "room",
  description: "Discover innovative ways to decorate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
