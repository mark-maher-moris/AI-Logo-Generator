import { Righteous } from "next/font/google";
import "./globals.css";
import Provider  from "./provider";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const righteous = Righteous({
  weight: "400",
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Logo Generator",
  description: "AI Logo Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={righteous.className}>
            <Provider> {children}</Provider>
      </body>
    </html>
  );
}
