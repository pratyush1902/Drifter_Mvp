import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Drifter",
  description: "Super App for Traveler and bagpackers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
