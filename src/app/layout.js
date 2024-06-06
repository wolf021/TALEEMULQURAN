import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taleem Ul Quran",
  description: "Discover the best online Quran teaching academy in the USA, offering expert tutors, personalized learning, and flexible schedules for all ages. Enroll now for interactive Quranic education!",
  icon:"public/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
    <link rel="icon" type="image/x-icon"  href="/favicon.ico" sizes="any"  />
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
