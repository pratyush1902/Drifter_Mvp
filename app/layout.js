import { Montserrat,Poppins, Roboto } from "next/font/google";
 
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata = {
  title: "Drifter",
  description: "Super App for Traveler and bagpackers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={ `${poppins.variable} ${roboto.variable} font-sans`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
