// import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Navbarrrr from "@/components/Navbarrrr";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbarrrr />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
